from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

# Imports for Transcrypt, resolved run time
if __envir__.executor_name == __envir__.transpiler_name:
	import numscrypt as num
	import numscrypt.linalg as linalg

# Imports for CPython, resolved compile time
__pragma__ ('skip')
import numpy as num
import numpy.linalg as linalg
__pragma__ ('noskip')

def run (autoTester):
	a = num.array ([
		[0, -2, -1], 
		[2, 1, 3], 
		[1, 1, 2]
	])
	
	autoTester.check ('Matrix a', a.astype ('int32') .tolist (), '<br>')
	
	ai = linalg.inv (a)
	
	autoTester.check ('Matrix ai', ai.astype ('int32') .tolist (), '<br>')
	
	__pragma__ ('opov')
	id = a @ ai
	__pragma__ ('noopov')
	
	autoTester.check ('a @ ai', id.astype ('int32') .tolist (), '<br>')