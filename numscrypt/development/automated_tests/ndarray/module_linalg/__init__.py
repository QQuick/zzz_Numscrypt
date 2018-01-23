from org.transcrypt.stubs.browser import *
from org.transcrypt.stubs.browser import __main__, __envir__, __pragma__

# Imports for Transcrypt, skipped run time by CPython
if __envir__.executor_name == __envir__.transpiler_name:
    import numscrypt as num
    import numscrypt.linalg as linalg

# Imports for CPython, skipped compile time by Transcrypt
__pragma__ ('skip')
import numpy as num
import numpy.linalg as linalg
num.set_printoptions (linewidth = 240)
__pragma__ ('noskip')

def run (autoTester):
    autoTester.check ('====== inverse ======')

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
    
    autoTester.check ('====== eigen ======')
    
    __pragma__ ('opov')

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
    ):
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
            
        '''
        autoTester.check ('\n---------------- a ----------------------')
        autoTester.check (a)
        autoTester.check ('\n---------------- eigVals ----------------')
        autoTester.check (eVals)
        autoTester.check ('\n---------------- eigValsMat--------------')
        autoTester.check (eValsMat)
        autoTester.check ('\n---------------- eigVecs ----------------')
        autoTester.check (eVecs)
        autoTester.check ('\n---------------- eigValsMat @ eigVecs ---')
        autoTester.check (eValsMat * eVecs)
        autoTester.check ('\n---------------- a @ eigVecs-------------')
        autoTester.check (a @ eVecs)
        autoTester.check ('\n---------------- eigVecsNorms -----------')
        autoTester.check (eVecsNorms)
        autoTester.check ('\n---------------- eigVecsCanon -----------')
        autoTester.check (eVecsCanon)
        '''
        autoTester.check ('\n---------------- eigVecsSorted ----------')
        autoTester.check ([[(round (value.real + 1e-3, 3), round (value.imag + 1e-3, 3)) for value in row] for row in eVecsSorted.tolist ()])
        autoTester.check ('\n---------------- eigValsSorted ----------')
        autoTester.check ([(round (value.real + 1e-3, 3), round (value.imag + 1e-3, 3)) for value in eValsSorted], '\n')
        