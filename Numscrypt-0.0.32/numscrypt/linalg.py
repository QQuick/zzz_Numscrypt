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
	real = b.realbuf
	nrows, ncols = b.shape
	
	# Use each row of the matrix as pivot row\n
	for ipiv in range (nrows):

		# Swap rows if needed to get a nonzero pivot
		if not real [ipiv * ncols + ipiv]:
			for irow in range (ipiv + 1, nrows):
				if real [irow * ncols + ipiv]:
					for icol in range (ncols):
						t = real [irow * ncols + icol]
						real [irow * ncols + icol] = b [ipiv * ncols + icol]
						real [ipiv * ncols + icol] = t
					break
								
		# Make pivot element 1
		piv = real [ipiv * ncols + ipiv]
		for icol in range (ipiv, ncols):
			real [ipiv * ncols + icol] /= piv
			
		# Sweep other rows to get all zeroes in pivot column
		for irow in range (nrows):
			if irow != ipiv:
				factor = real [irow * ncols + ipiv]
				for icol in range (ncols):
					real [irow * ncols + icol] -= factor * real [ipiv * ncols + icol]
					
	# Chop of left matrix, return right matrix
	return ns.hsplit (b, 2)[1]
	
def cinv (a):	# for speed, don't use 'complex' or operator overloading
	# Leave original matrix intact
	b = ns.hstack ((a, ns.identity (a.shape [0], a.dtype)))	# b will always have natural order
	
	real = b.realbuf
	imag = b.imagbuf
	nrows, ncols = b.shape
	
	# Use each row of the matrix as pivot row\n
	for ipiv in range (nrows):
		ipiv_flat = ipiv * ncols + ipiv
		
		# Swap rows if needed to get a nonzero pivot
		if not (real [ipiv_flat] or imag [ipiv_flat]):
			for irow in range (ipiv + 1, nrows):
				iswap = irow * ncols + ipiv
				if real [iswap] or imag [iswap]:
					for icol in range (ncols):
						isource = irow * ncols + icol
						itarget = ipiv * ncols + icol
						
						t = real [isource]
						real [isource] = real [itarget]
						real [itarget] = t
						
						t = imag [isource_flat]
						imag [isource] = imag [itarget]
						imag [itarget] = t
					break
		
		# Make pivot element 1
		pivre = real [ipiv_flat]
		pivim = imag [ipiv_flat]
		
		denom = pivre * pivre + pivim * pivim
		
		for icol in range (ipiv, ncols):
			icur = ipiv * ncols + icol
			
			oldre = real [icur]
			oldim = imag [icur]

			real [icur] = (oldre * pivre + oldim * pivim) / denom			
			imag [icur] = (oldim * pivre - oldre * pivim) / denom
		
		# Sweep other rows to get all zeroes in pivot column
		for irow in range (nrows):
			if irow != ipiv: 
				ifac = irow * ncols + ipiv
				facre = real [ifac]
				facim = imag [ifac]
				for icol in range (ncols):
					itarget = irow * ncols + icol
					isource = ipiv * ncols + icol
					
					oldre = real [isource]
					oldim = imag [isource]
					
					real [itarget] -= (facre * oldre - facim * oldim)
					imag [itarget] -= (facre * oldim + facim * oldre)
					
	# Chop of left matrix, return right matrix
	return ns.hsplit (b, 2)[1]
	