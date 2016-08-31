__pragma__ ('noanno')

import numscrypt as ns

__pragma__ ('js', '{}', __include__ ('numscrypt/fft/__javascript__/fft_nayuki_precalc_fixed.js') .replace ('// "use strict";', ''))

def fft (a):
	fftn = __new__ (FFTNayuki (a.size))
	if a.ns_natural:
		dre = a.real () .data
		dim = a.imag () .data
	else:									# Force natural order (it may be a slice)
		dre = hstack ([a.real ()]) .data	
		dim = hstack ([a.imag ()]) .data
	fftn.forward (dre, dim)					# Requires natural oreder
	result = ns.empty (a.shape, a.dtype)
	for i in range (a.size):
		ibase = 2 * i
		result.data [ibase] = dre [i]
		result.data [ibase + 1] = dim [i]
	return result

def ifft (a):
	fftn = __new__ (FFTNayuki (a.size))
	if a.ns_natural:
		dre = a.real () .data
		dim = a.imag () .data
	else:									# Force natural order (it may be a slice)
		dre = hstack ([a.real ()]) .data
		dim = hstack ([a.imag ()]) .data
	fftn.inverse (dre, dim)					# Requires natural order
	result = ns.empty (a.shape, a.dtype)
	s = a.size
	for i in range (s):
		ibase = 2 * i
		result.data [ibase] = dre [i] / s
		result.data [ibase + 1] = dim [i] / s
	return result
	
def fft2 (a):
	if a.ns_natural:
		dre = a.real () .data
		dim = a.imag () .data
	else:									# Force natural order
		dre = hstack ([a.real ()]) .data
		dim = hstack ([a.imag ()]) .data
	for irow in a.shape [0]:
		# fft (row)
	# Transpose? Natural order?

def ifft2 (a):
	# !!! Assure natural order
