from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __pragma__

import numscrypt as num
import numscrypt.random as num_rand
import numscrypt.linalg as linalg
import random

result = ''

for useComplex in (False, True):
    for transpose in (False, True):
        if useComplex:
            a = num.array ([
                [complex (random.random (), random.random ()) for iCol in range (30)]
                for iRow in range (30)
            ], 'complex128')
        else:
            a = num_rand.rand (30, 30)
        
        timeStartTranspose = __new__ (Date ())
        if transpose:
            a = a.transpose ()

        timeStartInv = __new__ (Date ())
        ai = linalg.inv (a)
        
        timeStartMul = __new__ (Date ()) 
        __pragma__ ('opov')
        id = a @ ai
        __pragma__ ('noopov')
        
        timeStartScalp = __new__ (Date ()) 
        __pragma__ ('opov')
        sp = a * a
        __pragma__ ('noopov')
        
        timeStartDiv = __new__ (Date ()) 
        __pragma__ ('opov')
        sp = a / a
        __pragma__ ('noopov')
        
        timeStartAdd = __new__ (Date ()) 
        __pragma__ ('opov')
        sp = a + a
        __pragma__ ('noopov')
        
        timeStartSub = __new__ (Date ()) 
        __pragma__ ('opov')
        sp = a - a
        __pragma__ ('noopov')
        
        timeStartEig = __new__ (Date ())
        if useComplex:
            evals, evecs = linalg.eig (a [:10, :10])            
        
        timeEnd = __new__ (Date ())
        
        result += (
'''
<pre>
a @ ai [0:5, 0:5] =

{}
''' 
        ) .format (
            str (num.round (id [0:5, 0:5], 2)) .replace (' ', '\t'),
        )

        if transpose:
            result += (
'''
Transpose took: {} ms'''
            ).format (
                timeStartInv - timeStartTranspose
            )
            
        result += (
'''
Inverse took: {} ms
Matrix product (@) took: {} ms
Elementwise product (*) took: {} ms
Division took: {} ms
Addition took: {} ms
Subtraction took: {} ms
Eigenvals/vecs took: {} ms
</pre>
'''
        ) .format (
            timeStartMul - timeStartInv,
            timeStartScalp - timeStartMul,
            timeStartDiv - timeStartScalp,
            timeStartAdd - timeStartDiv,
            timeStartSub - timeStartAdd,
            timeStartEig - timeStartSub,
            timeEnd - timeStartEig if useComplex else 'N.A.'
        )
            
document.getElementById ('result') .innerHTML = result
