__pragma__ ('noanno')

import numscrypt as ns

__pragma__ ('js', '{}', __include__ ('numscrypt/fft/__javascript__/fft_nayuki_precalc_fixed.js') .replace ('// "use strict";', ''))

def fft (a, ns_fftn = None):
	fftn = ns_fftn if ns_fftn else __new__ (FFTNayuki (a.size))
	result = ns.copy (a)
	fftn.forward (result.real () .realbuf, result.imag () .realbuf)
	return result

def ifft (a, ns_fftn = None):
	fftn = ns_fftn if ns_fftn else __new__ (FFTNayuki (a.size))
	real = a.real () .__div__ (a.size)	# Avoid complex division for efficiency
	imag = a.imag () .__div__ (a.size)
	fftn.inverse (real.realbuf, imag.realbuf)
	return ns.ndarray (real.shape, a.dtype, real.realbuf, imag.realbuf) 
	
def fft2 (a, ns_fftn = None):
	if a.ns_nrows != a.ns_ncols:
		raise 'Matrix isn\'t square'
	fftn = ns_fftn if ns_fftn else __new__ (FFTNayuki (a.ns_nrows))
	result = ns.empty (a.shape, a.dtype)
	for irow in range (a.ns_nrows):
		__pragma__ ('opov')
		result [irow, : ] = fft (a [irow, : ], fftn)
		__pragma__ ('noopov')
		
	for icol in range (a.ns_ncols):
		__pragma__ ('opov')
		result [ : , icol] = fft (result [ : , icol], fftn)
		__pragma__ ('noopov')
	return result
	
def ifft2 (a, ns_fftn = None):
	if a.ns_nrows != a.ns_ncols:
		raise 'Matrix isn\'t square'
	fftn = ns_fftn if ns_fftn else __new__ (FFTNayuki (a.ns_nrows))
	result = ns.empty (a.shape, a.dtype)

	for irow in range (a.ns_nrows):
		__pragma__ ('opov')
		result [irow, : ] = ifft (a [irow, : ], fftn)
		__pragma__ ('noopov')
		
	for icol in range (a.ns_ncols):
		__pragma__ ('opov')
		result [ : , icol] = ifft (result [ : , icol], fftn)
		__pragma__ ('noopov')
	return result
