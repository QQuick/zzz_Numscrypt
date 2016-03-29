import numscrypt as ns

def inv (a):
	# Leave original matrix intact
	b = ns.hstack ((a, ns.identity (a.shape [0], a.dtype)))	# b will always have natural order
	nrows, ncols = b.shape
	
	# Work directly with flat data atoms in natural order speeds up by factor 70 (!)
	d = b.data
	
	# Use each row of the matrix as pivot row\n
	for ipiv in range (nrows):

		# Swap rows if needed to get a nonzero pivot
		if not d [ipiv * ncols + ipiv]:
			for irow in range (ipiv + 1, nrows):
				if d [irow * ncols + ipiv]:
					for icol in range (ncols):
						t = d [irow * ncols + icol]
						d [irow * ncols + icol] = b [ipiv * ncols, icol]
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
	