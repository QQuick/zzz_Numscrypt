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
num.set_printoptions (linewidth = 240)
__pragma__ ('noskip')

__pragma__ ('opov')

def show (*args):
    print (*args)

for a in (   
    num.array ([
        [0, 1j],
        [-1j, 1]
    ], 'complex128'),
    num.array ([
        [1, -2, 3, 1],
        [5, 8, -1, -5],
        [2, 1, 1, 100],
        [2, 1, -1, 0]
    ], 'complex128'),
    num.array ([
        [1, 1, 0, 0],
        [0, 2, 2, 0],
        [0, 0, 3, 3],
        [0, 0, 0, 4]
    ], 'complex128'),
) [1:2]:
    eVals, eVecs = linalg.eig (a)
    
    enumSorted = sorted (
        enumerate (eVals.tolist ()),
        key = lambda elem: -(elem [1].real + elem [1].imag / 1000)  # Order on primarily on real, secundarily on imag, note conjugate vals
    )
    
    indicesSorted = [elem [0] for elem in enumSorted]
    eValsSorted = [elem [1] for elem in enumSorted]
    
    eValsMat = num.empty (a.shape, a.dtype)
    for iRow in range (a.shape [0]):
        for iCol in range (a.shape [1]):
            eValsMat [iRow, iCol] = eVals [iCol]
     
    eVecsNorms = num.empty ((eVecs.shape [1], ), a.dtype)
    for iNorm in range (eVecsNorms.shape [0]):
        eVecsNorms [iNorm] = complex (linalg.norm (eVecs [:, iNorm]))
        
    eVecsCanon = num.empty (a.shape, a.dtype)
    for iRow in range (a.shape [0]):
        for iCol in range (a.shape [1]):
            eVecsCanon [iRow, iCol] = eVecs [iRow, iCol] / eVecs [0, iCol] 
        
    eVecsSorted = num.empty (a.shape, a.dtype)
    for iRow in range (a.shape [0]):
        for iCol in range (a.shape [1]):
            eVecsSorted [iRow, iCol] = eVecsCanon [iRow, indicesSorted [iCol]]
        
    show (  '=========================================')
    '''
    show ('\n---------------- a ----------------------')
    show (a)
    show ('\n---------------- eigVals ----------------')
    show (eVals)
    show ('\n---------------- eigValsMat--------------')
    show (eValsMat)
    show ('\n---------------- eigVecs ----------------')
    show (eVecs)
    show ('\n---------------- eigValsMat @ eigVecs ---')
    show (eValsMat * eVecs)
    show ('\n---------------- a @ eigVecs-------------')
    show (a @ eVecs)
    show ('\n---------------- eigVecsNorms -----------')
    show (eVecsNorms)
    show ('\n---------------- eigVecsCanon -----------')
    show (eVecsCanon)
    '''
    show ('\n---------------- eigVecsSorted ----------')
    show ([[(round (value.real + 1e-10, 3), round (value.imag + 1e-10, 3)) for value in row] for row in eVecsSorted.tolist ()])
    show ('\n---------------- eigValsSorted ----------')
    show ([(round (value.real + 1e-10, 3), round (value.imag + 1e-10, 3)) for value in eValsSorted], '\n')
    show (  '=========================================')
    
