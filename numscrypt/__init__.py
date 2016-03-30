from org.transcrypt.stubs.browser import __pragma__
	
__pragma__ ('skip')
Int32Array = Float32Array = Float64Array = Array = 0
__pragma__ ('noskip')
	
import itertools

class ns_settings:
	optim_space = False

ns_itemsizes = {
	'int32': 4,
	'float32': 4,
	'float64': 8
}

ns_ctors = {
	'int32': Int32Array,
	'float32': Float32Array,
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
		offset = 0,
		strides = None
	):				
		self.dtype = dtype
		self.itemsize = ns_itemsizes [self.dtype]
		self.offset = offset
		self.ns_shift = self.offset / self.itemsize
		self.data = buffer
		self.reshape (shape, strides)
		
	def reshape (self, shape, strides):
		self.shape = shape
		self.ndim = len (self.shape)
		
		# e.g. itemsize 8 and shape 3 4 5 -> strides 160 40 8 -> ns_skips 20 5 1 
		if strides:
			self.strides = strides
		else:
			self.strides = [self.itemsize]
			for dim in reversed (self.shape [1 : ]):
				self.strides.insert (0, self.strides [0] * dim)
				
		self.ns_skips = [stride / self.itemsize for stride in self.strides]
		
		self.ns_natural = self.offset == 0
		
		for i in range (self.ndim - 1):
			if self.ns_skips [i + 1] > self.ns_skips [i]:
				self.ns_natural = False
				break;
		
		self.ns_length = ns_length (self.shape)
		if self.ns_length < self.data.length:
			self.ns_natural = False
		
		self.nbytes = self.ns_length * self.itemsize
		
	def astype (self, dtype):
		itemsize = ns_itemsizes [dtype]
		return ndarray (self.shape, dtype, ns_ctors [dtype] .js_from (self.data), itemsize * self.ns_shift, [itemsize * skip for skip in self.ns_skips])
						
	def tolist (self):
		def tl_recur (idim, key):
			result = []
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					result.append (tl_recur (idim + 1, itertools.chain (key, [i])))
				else:
					result.append (self.__getitem__ (itertools.chain (key, [i])))
			return result
		return tl_recur (0, [])
					
	def __repr__ (self):
		return 'ndarray ({})'.format (str (self.tolist ()))

	def __str__ (self):
		return str (self.tolist ()). replace (']], [[', ']]\n\n[[') .replace ('], ', ']\n') .replace (',', '')
		
	def transpose (self, *axes):	
		if len (axes):						# If any axes permutation is given explicitly
			if Array.isArray (axes [0]):	# 	If the axes passed in array rather than separate params
				axes = axes [0]				# 		The axes are the array
			
		return ndarray (
			[self.shape [axes [i]] for i in range (self.ndim)] if len (axes) else reversed (self.shape),
			self.dtype,
			self.data,						# Don't copy, it's only a view
			None,
			[self.strides [axes [i]] for i in range (self.ndim)] if len (axes) else reversed (self.strides)
		)
		
	def __getitem__ (self, key):
		if type (key) == list:				# Multi-dimensional array
			ns_shift = self.ns_shift
			shape = []
			strides = []			
			isslice = False
			
			for idim in range (0, self.ndim):
				subkey = key [idim]
				if type (subkey) == tuple:
					isslice = True
					ns_shift += subkey [0] * self.ns_skips [idim]
					shape.append (
							(subkey [1] - subkey [0]) / subkey [2]
						if subkey [1] else
							(self.shape [idim] - subkey [0]) / subkey [2]
					)
					strides.append (subkey [2] * self.strides [idim])
				else:
					ns_shift += subkey * self.ns_skips [idim]
			
			if isslice:
				return ndarray (shape, self.dtype, self.data, ns_shift * self.itemsize, strides)
			else:
				return self.data [ns_shift]
		else:								# One-dimensional array
			return self.data [self.ns_shift + key * self.ns_skips [0]]
	
	def __setitem__ (self, key, value):
		def si_recur (key, target, value):
			if len (key) < target.ndim:
				for i in range (target.shape [len (key)]):
					si_recur (itertools.chain (key, [i]), target, value)
			else:
				target.__setitem__ (key, value.__getitem__ (key))
	
		if type (key) == list:
			ns_shift = self.ns_shift
			shape = []
			strides = []			
			isslice = False
			
			for idim in range (0, self.ndim):
				subkey = key [idim]
				if type (subkey) == tuple:
					isslice = True
					ns_shift += subkey [0] * self.ns_skips [idim]
					shape.append (
							(subkey [1] - subkey [0]) / subkey [2]
						if subkey [1] else
							(self.shape [idim] - subkey [0]) / subkey [2]
					)
					strides.append (subkey [2] * self.strides [idim])
				else:
					ns_shift += subkey * self.ns_skips [idim]
			if isslice:
				target = ndarray (shape, self.dtype, self.data, ns_shift * self.itemsize, strides)
				si_recur ([], target, value)
			else:
				self.data [ns_shift] = value
		else:
			self.data [self.ns_shift + key * self.ns_skips [0]] = value
			
	def __neg__ (self):
		def neg_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					neg_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					result.__setitem__ (key2, -self.__getitem__ (key2))
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = -s [i]
		else:
			neg_recur (0, [])
			
		return result	
			
	def __ns_inv__ (self):
		def ns_inv_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					ns_inv_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					result.__setitem__ (key2, 1 / self.__getitem__ (key2))
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = 1 / s [i]
		else:
			ns_inv_recur (0, [])
			
		return result	
			
	def __add__ (self, other):
		isarr = type (other) == ndarray
	
		def add_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					add_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					if isarr:
						result.__setitem__ (key2, self.__getitem__ (key2) + other.__getitem__ (key2))
					else:
						result.__setitem__ (key2, self.__getitem__ (key2) + other)
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural and isarr and other.ns_natural:
			r, s, o = result.data, self.data, other.data
			for i in range (self.data.length):
				r [i] = s [i] + o [i]
		elif self.ns_natural and not isarr:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = s [i] + other
		else:
			add_recur (0, [])
			
		return result
		
	def __radd__ (self, scalar):	# scalar + array -> array.__radd__ (scalar)
		return self.__add__ (scalar)
		
	def __sub__ (self, other):
		isarr = type (other) == ndarray
	
		def sub_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					sub_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					if isarr:
						result.__setitem__ (key2, self.__getitem__ (key2) - other.__getitem__ (key2))
					else:
						result.__setitem__ (key2, self.__getitem__ (key2) - other)
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural and isarr and other.ns_natural:
			r, s, o = result.data, self.data, other.data
			for i in range (self.data.length):
				r [i] = s [i] - o [i]
		elif self.ns_natural and not isarr:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = s [i] - other
		else:
			sub_recur (0, [])
			
		return result
		
	def __rsub__ (self, scalar):	# scalar - array -> array.__rsub__ (scalar)
		return self.__neg__ () .__add__ (scalar)
		
	def __mul__ (self, other):
		isarr = type (other) == ndarray
	
		def mul_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					mul_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					if isarr:
						result.__setitem__ (key2, self.__getitem__ (key2) * other.__getitem__ (key2))
					else:
						result.__setitem__ (key2, self.__getitem__ (key2) * other)
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural and isarr and other.ns_natural:
			r, s, o = result.data, self.data, other.data
			for i in range (self.data.length):
				r [i] = s [i] * o [i]
		elif self.ns_natural and not isarr:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = s [i] * other
		else:
			mul_recur (0, [])
			
		return result
		
	def __rmul__ (self, scalar):	# scalar * array -> array.__rmul__ (scalar)
		return self.__mul__ (scalar)
		
	def __div__ (self, other):
		isarr = type (other) == ndarray
	
		def div_recur (idim, key):
			for i in range (self.shape [idim]):
				if idim < self.ndim - 1:
					div_recur (idim + 1, itertools.chain (key, [i]))
				else:
					key2 = itertools.chain (key, [i])
					if isarr:
						result.__setitem__ (key2, self.__getitem__ (key2) / other.__getitem__ (key2))
					else:
						result.__setitem__ (key2, self.__getitem__ (key2) / other)
		
		result = empty (self.shape, self.dtype)
		
		if self.ns_natural and isarr and other.ns_natural:
			r, s, o = result.data, self.data, other.data
			for i in range (self.data.length):
				r [i] = s [i] / o [i]
		elif self.ns_natural and not isarr:
			r, s = result.data, self.data
			for i in range (self.data.length):
				r [i] = s [i] / other
		else:
			div_recur (0, [])
			
		return result
		
	def __rdiv__ (self, scalar):	# scalar / array -> array.__rdiv__ (scalar)
		return self.__ns_inv__ () .__mul__ (scalar)
		
	def __matmul__ (self, other):
		nrows, ncols, nterms  = self.shape [0], other.shape [1], self.shape [1]
		result = empty ((nrows, ncols), self.dtype)
		
		if self.ns_natural or ns_settings.optim_space:
			self2 = self
		else:
			self2 = copy (self)
			
		if other.ns_natural or ns_settings.optim_space:
			other2 = other
		else:
			other2 = copy (other)
		
		if self2.ns_natural and other2.ns_natural:
			for irow in range (nrows):
				for icol in range (ncols):
					r, s, o = result.data, self2.data, other2.data
					for iterm in range (nterms):
						r [irow * ncols + icol] += s [irow * nterms + iterm] * o [iterm * ncols + icol]
		else:
			for irow in range (nrows):
				for icol in range (ncols):
					sum = 0	# Optimization
					for iterm in range (nterms):
						sum += self2 [irow, iterm] * other2 [iterm, icol]
					result [irow, icol] = sum
				
		return result
		
def empty (shape, dtype = 'float64'):
	return ndarray (
		shape,
		dtype,
		__new__ (ns_ctors [dtype] (ns_length (shape)))
	)
	
def array (obj, dtype = 'float64', copy = True):
	def cp_recur (idim, key):
		for i in range (obj.shape [idim]):
			if idim < obj.ndim - 1:
				cp_recur (idim + 1, itertools.chain (key, [i]))
			else:
				key2 = itertools.chain (key, [i])
				result.__setitem__ (key2, obj.__getitem__ (key2))
				
	if obj.__class__ == ndarray:
		if copy:
			result = empty (obj.shape, dtype)
			
			if obj.ns_natural:
				o, r = obj.data, result.data
				for i in range (o.length):
					r [i] = o [i]
			else:
				cp_recur (0, [])
				
			return result
		else:
			return ndarray (
				obj.shape,
				obj.dtype,
				obj.buffer,
				obj.offset,
				obj.strides
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
		
def copy (obj):
	return array (obj, obj.dtype, True)
	
def hsplit (arr, nparts):
	result = []
	partshape = [arr.shape [0], arr.shape [1] / nparts]
	for ipart in range (nparts):
		result.append (ndarray (
			partshape [ : ],
			arr.dtype,
			arr.data,
			ipart * partshape [1] * arr.strides [1],
			arr.strides [ : ]
		))
	return result
	
def vsplit (arr, nparts):
	result = []
	partshape = [arr.shape [0] / nparts, arr.shape [1]]
	for ipart in range (nparts):
		result.append (ndarray (
			partshape [ : ],
			arr.dtype,
			arr.data,
			ipart * partshape [0] * arr.strides [0],
			arr.strides [ : ]
		))
	return result
	
def hstack (arrs):
	ncols = 0
	for arr in arrs:
		ncols += arr.shape [1]
		
	result = empty ([arrs [0].shape [0], ncols], arrs [0] .dtype)
	
	istartcol = 0
	for arr in arrs:
		for irow in range (arr.shape [0]):
			for icol in range (arr.shape [1]):
				result [irow, istartcol + icol] = arr [irow, icol]
		istartcol += arr.shape [1]
				
	return result
	
def vstack (arrs):
	nrows = 0
	for arr in arrs:
		nrows += arr.shape [0]
		
	result = empty ([nrows, arrs [0].shape [1]], arrs [0] .dtype)
	
	istartrow = 0
	for arr in arrs:
		for irow in range (arr.shape [0]):
			for icol in range (arr.shape [1]):
				result [istartrow + irow, icol] = arr [irow, icol]
		istartrow += arr.shape [0]
				
	return result
			
def round (arr, decimals = 0):
	def rnd_recur (idim, key):
		for i in range (arr.shape [idim]):
			if idim < arr.ndim - 1:
				rnd_recur (idim + 1, itertools.chain (key, [i]))
			else:
				key2 = itertools.chain (key, [i])
				result.__setitem__ (key2, arr.__getitem__ (key2) .toFixed (decimals))

	result = empty (arr.shape, arr.dtype)

	if arr.ns_natural:
		a, r = arr.data, result.data
		for i in range (a.length):
			r [i] = a [i] .toFixed (decimals)
	else:
		rnd_recur (0, [])
		
	return result
		
def zeros (shape, dtype = 'float64'):
	result = empty (shape, dtype)
	r = result.data
	for i in range (r.length):
		r [i] = 0
	return result
	
def ones (shape, dtype = 'float64'):
	result = empty (shape, dtype)
	r = result.data
	for i in range (r.length):
		r [i] = 1
	return result
	
def identity (n, dtype = 'float64'):
	result = zeros ((n, n), dtype)
	for i in range (n):
		result.data [i * result.shape [1] + i] = 1
	return result
	
	