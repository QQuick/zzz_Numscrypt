from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

if __envir__.executor_name == __envir__.transpiler_name:
	import numscrypt as num

__pragma__ ('skip')
import numpy as num		# Bundling: import has to be known compile time
__pragma__ ('noskip')

def run (autoTester):
	z = num.zeros ((4, 3, 2), 'int32')
	autoTester.check ('Zeros', z.tolist (), '<br>')
	
	o = num.ones ((1, 2, 3))
	autoTester.check ('Ones', o.astype ('int32') .tolist ())
	
	i = num.identity (3, 'int32')
	autoTester.check ('Identity', i.tolist (), '<br>')
	
	# shape: 2 blocks x 3 rows x 4 columns
	a = num.array ([
		[
			[1, 1, 2, 3],
			[4, 5, 6, 7],
			[8, 9, 10, 12]
		], [
			[100, 101, 102, 103],
			[104, 105, 106, 107],
			[108, 109, 110, 112]
		]
	])
	
	autoTester.check ('Matrix a', a.tolist (), '<br>')

	#autoTester.check ('Transpose of a', a.transpose () .tolist (), '<br>')

	b = num.array ([
		[
			[2, 2, 4, 6],
			[8, 10, 12, 14],
			[16, 18, 20, 24]
		], [
			[200, 202, 204, 206],
			[208, 210, 212, 214],
			[216, 218, 220, 224]
		]
	])
	
	autoTester.check ('Matrix b', b.tolist (), '<br>')

	#autoTester.check ('Permutation of b', b.transpose ((2, 1, 0)) .tolist (), '<br>')
	
	c = num.array ([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
	
	autoTester.check ('Matrix c', c.tolist (), '<br>')
	#autoTester.check ('Transpose of c', c.transpose () .tolist (), '<br>')
	#console.log (c.transpose ().__str__ ())

	d = num.array ([
		[13, 14],
		[15, 16],
		[17, 18],
		[19, 20]
	])
	
	autoTester.check ('Matrix d', d.tolist (), '<br>')
	#autoTester.check ('Permutation of d', d.transpose ((1, 0)) .tolist (), '<br>')
	
	__pragma__ ('opov')
	a [1, 0, 2] = 77777
	el = b [1, 2, 3]
	
	sum = a + b
	dif = a - b
	prod = a * b
	quot = a / b
	dot = c @ d
	__pragma__ ('noopov')
	
	autoTester.check ('El a [1, 2, 3] alt', a.tolist (), '<br>)')
	autoTester.check ('El b [1, 2, 3]', el, '<br>')
	
	autoTester.check ('Matrix sum', sum.tolist (), '<br>')
	autoTester.check ('Matrix difference', dif.tolist (), '<br>')
	autoTester.check ('Matrix product', prod.tolist (), '<br>')
	autoTester.check ('Matrix quotient', quot.tolist (), '<br>')
	autoTester.check ('Matrix dotproduct', dot.tolist (), '<br>')
	