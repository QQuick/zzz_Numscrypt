import numscrypt as ns

def inv (a):
	# Leave original matrix intact
	b = ns.hstack (a, unity (a.shape [0], a.dtype)
	
	# Use each row of the matrix as pivot row\n
	for ipiv in range (b.shape [0])):
	
		# Swap rows if needed to get a nonzero pivot
		for irow in range (ipiv, b.shape [0]):
			if b [irow, ipiv]:
				if irow != ipiv:
					t = ns.copy [irow, :]
					b [irow, :] = b [ipiv, :]
					b [ipiv, :] = t
	
		# Make pivot element 1
		piv = b [ipiv, ipiv]
		for icol in range (b.shape [1]):
			b [ipiv, icol] /= piv
			
		# Sweep other rows to get all zeroes in pivot column
		for irow in range (b.shape [0]):
			factor = b [irow, ipiv]
			for icol in range (b.shape [1]):
				b [irow, icol] -= factor * b [ipiv, icol]
				
	# Chop of left matrix, return right matrix
	return ns.hsplit (b, 2)[0]
	