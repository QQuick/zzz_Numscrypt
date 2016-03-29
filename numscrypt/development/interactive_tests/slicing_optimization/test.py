from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __pragma__

import numscrypt as ns
import numscrypt.random as random
import numscrypt.linalg as linalg

result = ''

for optim_space in (False, True):
	ns.ns_settings.optim_space = optim_space

	for transpose in (False, True):
		a = random.rand (30, 30)
		
		timeStartTranspose = __new__ (Date ())
		if transpose:
			a = a.transpose ()

		timeStartInv = __new__ (Date ())
		ai = linalg.inv (a)
		
		timeStartMul = __new__ (Date ()) 
		__pragma__ ('opov')
		id = a @ ai
		__pragma__ ('noopov')
		
		timeEnd = __new__ (Date ())
		
		result +=  '''<pre>
Optimized for space instead of time: {}
	
{}: a @ ai [0:5, 0:5] =

{}

Transpose took: {} ms
Inverse took: {} ms
Product took: {} ms
			</pre>'''.format (
			optim_space,
			'natural' if a.ns_natural else 'unnatural',
			str (ns.round (id [0:5, 0:5], 2)) .replace (' ', '\t'),
			timeStartInv - timeStartTranspose,
			timeStartMul - timeStartInv,
			timeEnd - timeStartMul
		)

document.getElementById ('result') .innerHTML = result