__pragma__ ('noanno')

import numscrypt as ns

__pragma__ ('js', '{}', __include__ ('numscrypt/fft/__javascript__/fft_nayuki_precalc_fixed.js') .replace ('// "use strict";', ''))

def fft (a):
	fftn = __new__ (FFTNayuki (a.size))
	dre = a.real () .data
	dim = a.imag () .data
	fftn.forward (dre, dim)
	result = ns.empty (a.shape, a.dtype)
	for i in range (a.size):
		ibase = 2 * i
		result.data [ibase] = dre [i]
		result.data [ibase + 1] = dim [i]
	return result

def ifft (a):
	fftn = __new__ (FFTNayuki (a.size))
	dre = a.real () .data
	dim = a.imag () .data
	fftn.inverse (dre, dim)
	result = ns.empty (a.shape, a.dtype)
	s = a.size
	for i in range (s):
		ibase = 2 * i
		result.data [ibase] = dre [i] / s
		result.data [ibase + 1] = dim [i] / s
	return result
	