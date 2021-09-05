from mpmath import *

a = matrix ([
    [1, 1j],
    [-1j, 1]
], 'complex128')

w, v = eig (a)


print (w)
print ('111----')
print (v)
print ()
print ()


'''
a = matrix ([
    [1, -2, 3, 1],
    [5, 8, -1, -5],
    [2, 1, 1, 100],
    [2, 1, -1, 0]
], 'complex128')

w, v = eig (a)

print (w)
print ('222----')
print (v)
print ()
'''