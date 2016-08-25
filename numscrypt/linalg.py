import numscrypt as ns

def inv (a):
	# Work directly with flat data atoms in natural order speeds up by factor 70 (!)
	if a.ns_complex:
		return cinv (a)
	else:
		return rinv (a)

def rinv (a):
	# Leave original matrix intact
	b = ns.hstack ((a, ns.identity (a.shape [0], a.dtype)))	# b will always have natural order
	d = b.data
	nrows, ncols = b.shape
	
	# Use each row of the matrix as pivot row\n
	for ipiv in range (nrows):

		# Swap rows if needed to get a nonzero pivot
		if not d [ipiv * ncols + ipiv]:
			for irow in range (ipiv + 1, nrows):
				if d [irow * ncols + ipiv]:
					for icol in range (ncols):
						t = d [irow * ncols + icol]
						d [irow * ncols + icol] = b [ipiv * ncols + icol]
						d [ipiv * ncols + icol] = t
					break
					
		# Make pivot element 1
		piv = d [ipiv * ncols + ipiv]
		for icol in range (ipiv, ncols):
			d [ipiv * ncols + icol] /= piv
			
		# Sweep other rows to get all zeroes in pivot column
		for irow in range (nrows):
			if irow != ipiv:
				factor = d [irow * ncols + ipiv]
				for icol in range (ncols):
					d [irow * ncols + icol] -= factor * d [ipiv * ncols + icol]
					
	# Chop of left matrix, return right matrix
	return ns.hsplit (b, 2)[1]
	
def cinv (a):	# for speed, don't use 'complex' or operator overloading
	# Leave original matrix intact
	b = ns.hstack ((a, ns.identity (a.shape [0], a.dtype)))	# b will always have natural order
	d = b.data
	nrows, ncols = b.shape

	# Use each row of the matrix as pivot row\n
	for ipiv in range (nrows):

		# Swap rows if needed to get a nonzero pivot
		ibase = 2 * (ipiv * ncols + ipiv)
		if not d [ibase] and not d [ibase + 1]:
			for irow in range (ipiv + 1, nrows):
				ibase = 2 * (irow * ncols + ipiv)
				if d [ibase] or d [ibase + 1]:
					for icol in range (ncols):
						ibase0 = 2 * (irow * ncols + icol)
						ibase1 = 2 * (ipiv * ncols + icol)
						tre = d [ibase0]
						tim = d [ibase0 + 1]
						d [ibase0] = b [ibase1]
						d [ibase0 + 1] = b [ibase1 + 1]
						d [ibase1] = tre						
						d [ibase1 + 1] = tim						
					break
					
		# Make pivot element 1
		ibase = 2 * (ipiv * ncols + ipiv)
		pivre = d [ibase]
		pivim = d [ibase + 1]
		for icol in range (ipiv, ncols):
			ibase = 2 * (ipiv * ncols + icol)
			denom = pivre * pivre + pivim * pivim
			oldre = d [ibase]
			oldim = d [ibase + 1]
			d [ibase] = (oldre * pivre + oldim * pivim) / denom
			d [ibase + 1] = (oldim * pivre - oldre * pivim) / denom
		
		# Sweep other rows to get all zeroes in pivot column
		
		for irow in range (nrows):
			if irow != ipiv: 
				ibase = 2 * (irow * ncols + ipiv)
				facre = d [ibase]
				facim = d [ibase + 1]
				for icol in range (ncols):
					ibase0 = 2 * (irow * ncols + icol)
					ibase1 = 2 * (ipiv * ncols + icol)
					d [ibase0] -= (facre * d [ibase1] - facim * d [ibase1 + 1])
					d [ibase0 + 1] -= (facre * d [ibase1 + 1] + facim * d [ibase1])
					
	# Chop of left matrix, return right matrix
	return ns.hsplit (b, 2)[1]
	