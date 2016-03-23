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
	
	# print (a)
	
	autoTester.check ('Matrix a', a.tolist (), '<br>')
	autoTester.check ('Transpose of a', a.transpose () .tolist (), '<br>')
	
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
	autoTester.check ('Permutation of b', b.transpose ((2, 1, 0)) .tolist (), '<br>')
	
	c = num.array ([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	], 'int32')
	
	autoTester.check ('Shape strides c', tuple (c.shape), tuple (c.strides), '<br>')
	autoTester.check ('Matrix c', c.tolist (), '<br>')
	
	ct = c.transpose ()
	autoTester.check ('Shape strids ct', tuple (ct.shape), tuple (ct.strides), '<br>')
	autoTester.check ('Transpose of c', ct .tolist (), '<br>')

	cs0, cs1 = num.hsplit (c, 2)
	autoTester.check ('Matrix cs0', cs0.tolist (), '<br>')
	autoTester.check ('Matrix cs1', cs1.tolist (), '<br>')

	ci = num.hstack ((cs1, cs0))
	autoTester.check ('Matrix ci', ci.tolist (), '<br>')
	
	cts0, cts1, cts2 = num.hsplit (ct, 3)
	autoTester.check ('Matrix cts0', cts0.tolist (), '<br>')
	autoTester.check ('Matrix cts1', cts1.tolist (), '<br>')
	autoTester.check ('Matrix cts2', cts2.tolist (), '<br>')

	cti = num.hstack ((cts2, cts1, cts0))
	autoTester.check ('Matrix ci', cti.tolist (), '<br>')
	
	d = num.array ([
		[13, 14],
		[15, 16],
		[17, 18],
		[19, 20]
	], 'int32')
	
	autoTester.check ('Matrix d', d.tolist (), '<br>')
	dt = d.transpose ()
	autoTester.check ('Permutation of d', dt.tolist (), '<br>')
	
	ds0, ds1, ds2, ds3 = num.vsplit (d, 4)
	autoTester.check ('Matrix ds0', ds0.tolist (), '<br>')
	autoTester.check ('Matrix ds1', ds1.tolist (), '<br>')
	autoTester.check ('Matrix ds2', ds2.tolist (), '<br>')
	autoTester.check ('Matrix ds3', ds3.tolist (), '<br>')

	di = num.vstack ((ds3, ds2, ds1, ds0))
	autoTester.check ('Matrix di', di.tolist (), '<br>')
	
	dts0, dts1 = num.vsplit (dt, 2)
	autoTester.check ('Matrix dts0', dts0.tolist (), '<br>')
	autoTester.check ('Matrix dts1', dts1.tolist (), '<br>')

	dti = num.vstack ((dts1, dts0))
	autoTester.check ('Matrix dti', dti.tolist (), '<br>')
	
	__pragma__ ('opov')
	a [1, 0, 2] = 77777
	el = b [1, 2, 3]
	
	sum = a + b
	dif = a - b
	prod = a * b
	quot = a / b
	dot = c @ d
	__pragma__ ('noopov')
	
	autoTester.check ('El a [1, 2, 3] alt', a.tolist (), '<br>')
	autoTester.check ('El b [1, 2, 3]', el, '<br>')
	
	autoTester.check ('Matrix sum', sum.tolist (), '<br>')
	autoTester.check ('Matrix difference', dif.tolist (), '<br>')
	autoTester.check ('Matrix product', prod.tolist (), '<br>')
	autoTester.check ('Matrix quotient', quot.tolist (), '<br>')
	autoTester.check ('Matrix dotproduct', dot.tolist (), '<br>')
	