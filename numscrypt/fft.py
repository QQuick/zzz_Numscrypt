import numscrypt as ns
import __external__.fft_nayuki as __fftn__

def fft (a):
	__fftn__.transform (ns.copy (a), False)
	

def ifft (a):
	__fftn__.transform (a.__div__ (a.size), True)
	