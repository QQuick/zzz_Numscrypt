__pragma__ ('noanno')

import numscrypt as ns

__pragma__ ('js', '{}', __include__ ('numscrypt/fft/__javascript__/fft_nayuki_precalc_fixed.js') .replace ('// "use strict";', ''))

def fft (a):
	fftn = __new__ (FFTNayuki (a.size))
	result = ns.copy (a)
	fftn.forward (result.real () .realbuf, result.imag () .realbuf)
	return result

def ifft (a):
	fftn = __new__ (FFTNayuki (a.size))
	real = a.real () .__div__ (a.size)	# Avoid complex division for efficiency
	imag = a.imag () .__div__ (a.size)
	fftn.inverse (real.realbuf, imag.realbuf)
	return ns.ndarray (real.shape, a.dtype, real.realbuf, imag.realbuf) 
	
'''
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
'''