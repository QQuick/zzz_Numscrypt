import os
import site

sitepackagesDir = os.path.dirname (site.__file__) + '/site-packages'
	
shipDir = os.path.dirname (os.path.abspath (__file__))
appRootDir = '/'.join  (shipDir.split ('/')[ : -2])
distributionDir = '/'.join  (appRootDir.split ('/')[ : -1])

'''
print ()
print (sitepackagesDir)
print (shipDir)
print (appRootDir)
print (distributionDir)
print ()
'''

def getAbsPath (rootDir, relPath):
	return '{}/{}'.format (rootDir, relPath)

def copyCode (relPath):
	if '/' in relPath:
		relDir = '{}/'.format (relPath .rsplit ('/', 1) [0])
	else:
		relDir = ''

	os.system ('cp -f {} {}'.format (
		getAbsPath (appRootDir, relPath),
		getAbsPath (sitepackagesDir, 'numscrypt/{}'.format (relDir))
	))

copyCode ('__init__.py')
copyCode ('__base__.py')
copyCode ('random.py')
copyCode ('linalg/__init__.py')
copyCode ('linalg/eigen_mpmath.py')
copyCode ('fft/__init__.py')
copyCode ('fft/__javascript__/fft_nayuki_precalc_fixed.js')
