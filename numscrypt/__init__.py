from org.transcrypt.stubs.browser import __pragma__
	
import itertools
import numscrypt.base

ns_itemsizes = {
	'int32': 4,
	'float64': 8
}

ns_ctors = {
	'int32': Int32Array,
	'float64': Float64Array
}

def ns_length (shape):
	result = shape [0]
	for dim in shape [1 : ]:
		result *= dim
	return result
	
class ndarray:
	def __init__ (
		self,
		shape,
		dtype,
		buffer,
		offset = None,
		strides = None
	):				
		self.dtype = dtype
		self.itemsize = ns_itemsizes [self.dtype]
		self.reshape (shape)
		self.data = buffer

	def reshape (self, shape):
		self.shape = shape
		self.ndim = len (self.shape)
		
		# e.g. itemsize 8 and shape 3 4 5 -> strides 160 40 8 -> ns_skips 20 5 1 
		
		self.strides = [self.itemsize]
		for dim in reversed (self.shape [1 : ]):
			self.strides.insert (0, self.strides [0] * dim)
				
		self.ns_skips = [stride / self.itemsize for stride in self.strides]
			
		self.ns_length = ns_length (self.shape)
		self.nbytes = self.ns_length * self.itemsize
		
	def astype (self, dtype):
		return ndarray (self.shape, dtype, ns_ctors [dtype] .js_from (self.data))
		
	def tolist (self):	# !!! Still incorrect for non-default strides
		def unflatten (obj, dims):
			if len (dims) == 1:	# One dimension, so it's a flat list
				return obj
			else:
				nsegs = dims [0]
				seglen = len (obj) / nsegs
				result = [unflatten (obj [index * seglen : (index + 1) * seglen], dims [1 : ]) for index in range (nsegs)]
				return result
		return unflatten (list (Array.js_from (self.data)), self.shape [:])
	
				
	def __repr__ (self):	# !!! Still incorrect for non-default strides
		return 'array ({})'.format (str (self.tolist))
			
	def __str__ (self):		# !!! Still incorrect for non-default strides
		array = list (Array.js_from (self.data))
	
		result = ''
		for index, entry in enumerate (array):
			for skip in self.ns_skips:			# If current entry first of new segment
				if (index % skip) == 0:
					result += '['
					
			result += entry
			
			for skip in self.ns_skips:
				if ((index + 1) % skip) == 0:	# If next entry first of new segment
					result += ']'
								
			if index < len (array) - 1 :				
				if result.endswith (']]'):
					result += '\n\n'
				elif result.endswith (']'):
					result += '\n'
				else:
					result += ' '
						
		return '[' + result + ']'
		
	def transpose (self, *axes):	
		if len (axes):													# If any axes permutation is given explicitly
			if Array.isArray (axes [0]):								# 	If the axes passed in array rather than separate params
				axes = axes [0]											# 	The axes are the array
		else:															# Else
			axes = itertools.chain (range (1, len (self.shape)), [0])	#	Rotate axes to the left
		
		return ndarray (
			[self.shape [axes [i]] for i in range (self.ndim)],
			self.dtype,
			self.data,	# Don't copy, it's only a view
			None,
			[self.strides [axes [i]] for i in range (self.ndim)]
		)
		
	def __getitem__ (self, key):
		index = key [0] * self.ns_skips [0]
		for idim in range (1, self.ndim):
			index += key [idim] * self.ns_skips [idim]
		return self.data [index]
	
	def __setitem__ (self, key, value):
		index = key [0] * self.ns_skips [0]
		for idim in range (1, self.ndim):
			index += key [idim] * self.ns_skips [idim]
		self.data [index] = value
		
	def __add__ (self, other):
		result = empty (self.shape, self.dtype)
		r, s, o = result.data, self.data, other.data
		for i in range (self.data.length):
			r [i] = s [i] + o [i]
		return result
		
	def __sub__ (self, other):
		result = empty (self.shape, self.dtype)
		r, s, o = result.data, self.data, other.data
		for i in range (self.data.length):
			r [i] = s [i] - o [i]
		return result
		
	def __mul__ (self, other):
		result = empty (self.shape, self.dtype)
		r, s, o = result.data, self.data, other.data
		for i in range (self.data.length):
			r [i] = s [i] * o [i]
		return result
		
	def __div__ (self, other):
		result = empty (self.shape, self.dtype)
		r, s, o = result.data, self.data, other.data
		for i in range (self.data.length):
			r [i] = s [i] / o [i]
		return result
		
	def __matmul__ (self, other):
		result = empty ((self.shape [0], other.shape [1]), self.dtype)
		nrows, ncols, nterms  = self.shape [0], other.shape [1], self.shape [1]
		for irow in range (nrows):
			for icol in range (ncols):
				sum = 0	# Optimization
				for iterm in range (nterms):
					sum += self [irow, iterm] * other [iterm, icol]
				result [irow, icol] = sum
		return result
		
def array (obj, dtype = 'float64', copy = True):
	if obj.__class__ == ndarray:
		return ndarray (
			anobject.shape,
			anobject.dtype,
			anobject.buffer.slice () if copy else obj.buffer,
			anobject.offset,
			anobject.strides
		)
	else:	# Assume JS array of JS arrays, compiled from nested tuples and lists
		shape = []
		
		curr_obj = obj
		while Array.isArray (curr_obj):
			shape.append (curr_obj.length)
			curr_obj = curr_obj [0]
			
		def flatten (obj):
			if Array.isArray (obj [0]):												# If obj has inner structure
				return itertools.chain (*[flatten (sub_obj) for sub_obj in obj])	#	Flatten the inner structure	
			else:																	# Else it's flat enough to be chained
				return obj															#	Just return it for chaining
		
		return ndarray (
			shape,
			dtype,
			ns_ctors [dtype] .js_from (flatten (obj))
		)
		
def empty (shape, dtype = 'float64'):
	return ndarray (
		shape,
		dtype,
		__new__ (ns_ctors [dtype] (ns_length (shape)))
	)
		
def zeros (shape, dtype = 'float64'):
	result = empty (shape, dtype)
	result.data.fill (0)
	return result
	
def ones (shape, dtype = 'float64'):
	result = empty (shape, dtype)
	result.data.fill (1)
	return result
	
def identity (n, dtype = 'float64'):
	result = zeros ((n, n), dtype)
	for i in range (n):
		result.data [i * result.shape [1] + i] = 1
	return result
	