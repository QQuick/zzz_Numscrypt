from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

# Imports for Transcrypt, resolved run time
if __envir__.executor_name == __envir__.transpiler_name:
	import numscrypt as num
	import numscrypt.fft as fft

# Imports for CPython, resolved compile time
__pragma__ ('skip')
import numpy as num
import numpy.fft as fft
__pragma__ ('noskip')

fSample = 2048
tTotal = 2
fSin = 30
fCos = 50

def tCurrent (iCurrent):
	return iCurrent / fSample

def run (autoTester):
	samples = num.array ([
		sin (2 * pi * fSin * t) + 0.5 (2 * pi * fCos * t)
		for t in [
			iSample / fSample
			for iSample in range (tTotal * fSample)
		]
	])
)	
	autoTester.check ('Matrix a', a.astype ('int32') .tolist (), '<br>')
	
	ai = linalg.inv (a)
	
	autoTester.check ('Matrix ai', ai.astype ('int32') .tolist (), '<br>')
	
	__pragma__ ('opov')
	id = a @ ai
	__pragma__ ('noopov')
	
	autoTester.check ('a @ ai', id.astype ('int32') .tolist (), '<br>')