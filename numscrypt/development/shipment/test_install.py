import os
import site

sitepackagesDir = os.path.dirname (site.__file__) + '/site-packages'
	
shipDir = os.path.dirname (os.path.abspath (__file__)) .replace ('\\', '/')
appRootDir = '/'.join  (shipDir.split ('/')[ : -2])
distributionDir = '/'.join  (appRootDir.split ('/')[ : -1])

def getAbsPath (rootDir, relPath):
	return '{}/{}'.format (rootDir, relPath)

def copyCode (relPath):
	relPath = relPath.replace ('\\', '/')
	
	if '/' in relPath:
		relDir = '{}/'.format (relPath .rsplit ('/', 1) [0])
	else:
		relDir = ''

	os.system ('xcopy /Y {} {}'.format (
		getAbsPath (appRootDir, relPath) .replace ('/', '\\'),
		getAbsPath (sitepackagesDir, 'numscrypt/{}'.format (relDir)) .replace ('/', '\\')
	))

copyCode ('__init__.py')
copyCode ('__base__.py')
copyCode ('random.py')
copyCode ('linalg/__init__.py')
copyCode ('linalg/eigen_mpmath.py')
copyCode ('fft/__init__.py')
copyCode ('fft/__javascript__/fft_nayuki_precalc_fixed.js')
