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

	# Real

	r = num.array ([
		[2.12, -2.11, -1.23], 
		[2.31, 1.14, 3.15], 
		[1.13, 1.98, 2.81]
	])
	
	autoTester.check ('Matrix r', num.round (r, 2) .tolist (), '<br>')
	
	ri = linalg.inv (r)
	
	autoTester.check ('Matrix ri', num.round (ri, 2) .tolist (), '<br>')
	
	__pragma__ ('opov')
	rid = r @ ri
	__pragma__ ('noopov')
	
	autoTester.check ('r @ ri', [[int (round (elem)) for elem in row] for row in rid.tolist ()], '<br>')
	
	__pragma__ ('opov')
	delta = 0.001
	autoTester.check ('r * r', num.round (r * r + delta, 3) .tolist (), '<br>')
	autoTester.check ('r / r', num.round (r / r + delta, 3) .tolist (), '<br>')
	autoTester.check ('r + r', num.round (r + r + delta, 3) .tolist (), '<br>')
	autoTester.check ('r - r', num.round (r - r + delta, 3) .tolist (), '<br>')
	__pragma__ ('noopov')

	# Complex
	
	__pragma__ ('opov')
	c = num.array ([
		[2.12 - 3.15j, -2.11, -1.23], 
		[2.31, 1.14, 3.15 + 2.75j], 
		[1.13, 1.98 - 4.33j, 2.81]
	], 'complex128')
	__pragma__ ('noopov')
	
	autoTester.check ('Matrix c',  num.round (c, 2) .tolist (), '<br>')
	
	ci = linalg.inv (c)
	
	autoTester.check ('Matrix ci', num.round (ci, 2) .tolist (), '<br>')
	
	__pragma__ ('opov')
	cid = c @ ci
	__pragma__ ('noopov')
	
	# autoTester.check ('c @ ci', [['{} + j{}'.format (int (round (elem.real)), int (round (elem.imag))) for elem in row] for row in cid.tolist ()], '<br>')
	
	__pragma__ ('opov')
	delta = 0.001 + 0.001j
	autoTester.check ('c * c', num.round (c * c + delta , 3) .tolist (), '<br>')
	autoTester.check ('c / c', num.round (c / c + delta, 3) .tolist (), '<br>')
	autoTester.check ('c + c', num.round (c + c + delta, 3) .tolist (), '<br>')
	autoTester.check ('c - c', num.round (c - c + delta, 3) .tolist (), '<br>')
	__pragma__ ('noopov')