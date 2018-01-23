from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

from math import sin, cos, pi

transpiled = __envir__.executor_name == __envir__.transpiler_name

# Imports for Transcrypt, skipped run time by CPython
if __envir__.executor_name == __envir__.transpiler_name:
	import numscrypt as num
	import numscrypt.fft as fft

# Imports for CPython, skipped compile time by Transcrypt
__pragma__ ('skip')
import numpy as num
import numpy.fft as fft
__pragma__ ('noskip')

fSample = 4096
tTotal = 2
fSin = 30
fCos = 50

def getNow ():	# Avoid operator overloading, which would result in the dysfunctional: __new__ __call__ (Date)
	return __new__ (Date ())

def tCurrent (iCurrent):
	return iCurrent / fSample

def run (autoTester):
	__pragma__ ('opov')
	delta = 0.001 + 0.001j
	__pragma__ ('noopov')
	
	autoTester.check ('<br>------ 1D ------<br>')
	
	cut = 102

	autoTester.check ('Samples computed: {}<br>'.format (tTotal  * fSample))
	autoTester.check ('Samples shown: {}<br>'.format (cut))

	orig = num.array ([
		complex (0.3 + sin (2 * pi * fSin * t) + 0.5 * cos (2 * pi * fCos * t), 0)
		for t in [
			iSample / fSample
			for iSample in range (tTotal * fSample)
		]
	], 'complex128')
	
	__pragma__ ('opov')

	autoTester.check ('Original samples', num.round (orig + delta, 3) .tolist ()[ : cut], '<br>')

	if transpiled:
		timeStartFft = getNow ()
	freqs = fft.fft (orig)
	if transpiled:
		timeStopFft = getNow ()	
		
	autoTester.check ('Frequencies', num.round (freqs + delta, 3) .tolist ()[ : cut], '<br>')
	
	if transpiled:
		timeStartIfft = getNow ()	
	reconstr = fft.ifft (freqs)
	if transpiled:
		timeStopIfft = getNow ()	
	
	autoTester.check ('Reconstructed samples', num.round (reconstr + delta, 3) .tolist ()[ : cut], '<br>')
	
	__pragma__ ('noopov')
		
	if transpiled:
		print ('FFT for {} samples took {} ms'.format (tTotal * fSample, timeStopFft - timeStartFft))
		print ('IFFT for {} samples took {} ms'.format (tTotal * fSample, timeStopIfft - timeStartIfft))
		
	autoTester.check ('<br>------ 2D ------<br>')
	
	__pragma__ ('opov')

	orig2 = num.zeros ((128, 128), 'complex128')
	orig2 [32 : 96, 32 : 96] = num.ones ((64, 64), 'complex128')
	
	autoTester.check ('Original samples', num.round (orig2 + delta, 3) [64 : 68, 16 : 112] .tolist (), '<br>')
	
	if transpiled:
		timeStartFft = getNow ()
		
	freqs2 = fft.fft2 (orig2)
	if transpiled:
		timeStopFft = getNow () 
		
	autoTester.check ('Frequencies', num.round (freqs2 + delta, 3)  [64 : 68, 16 : 112] .tolist (), '<br>')
	
	if transpiled:
		timeStartIfft = getNow ()
	reconstr2 = fft.ifft2 (freqs2)
	if transpiled:
		timeStopIfft = getNow ()	
	
	if transpiled:
		print ('FFT2 for {} samples took {} ms'.format (orig2.size, timeStopFft - timeStartFft))
		print ('IFFT2 for {} samples took {} ms'.format (orig2.size, timeStopIfft - timeStartIfft))
		
	autoTester.check ('Reconstructed samples', num.round (reconstr2 + delta, 3)  [64 : 68, 16 : 112] .tolist (), '<br>')
	
	__pragma__ ('noopov')
	
