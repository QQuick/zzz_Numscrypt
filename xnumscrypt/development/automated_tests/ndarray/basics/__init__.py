from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

if __envir__.executorName == __envir__.transpilerName:
	import org.transcrypt.numscrypt as num

__pragma__ ('skip')
import numpy as num		# Bundling: import has to be known compile time
__pragma__ ('noskip')

def run (autoTester):
	# shape: 2 blocks x 3 rows x 4 columns
	a = num.array ([
		[
			[0, 1, 2, 3],
			[4, 5, 6, 7],
			[8, 9, 10, 12]
		], [
			[100, 101, 102, 103],
			[104, 105, 106, 107],
			[108, 109, 110, 112]
		]
	])
	autoTester.check (a.tolist ())
	
	z = num.zeros ((4, 3, 2), 'int32')
	autoTester.check (z.tolist ())
	
	z = num.ones ((1, 2, 3))
	autoTester.check (z.astype ('int32') .tolist ())
	
	z = num.identity (3, 'int32')
	autoTester.check (z.tolist ())
	