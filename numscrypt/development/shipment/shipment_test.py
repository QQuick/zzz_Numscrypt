import os
import webbrowser

os.system ('clear')

shipDir = os.path.dirname (os.path.abspath (__file__)) .replace ('\\', '/')
rootDir = '/'.join  (shipDir.split ('/')[ : -2])

def getAbsPath (relPath):
	return '{}/{}'.format (rootDir, relPath)

def test (relPath, fileNamePrefix, run = False):
	os.chdir (getAbsPath (relPath))
	os.system ('ts -b -c -m {}{}.py'.format (fcallSwitch, fileNamePrefix))	

	if run:
		os.chdir (getAbsPath (relPath))
		os.system ('ts -r {}.py'.format (fileNamePrefix))		
		
	# webbrowser.open ('file://{}/{}.html'.format (getAbsPath (relPath), fileNamePrefix), new = 2)
	# webbrowser.open ('file://{}/{}.min.html'.format (getAbsPath (relPath), fileNamePrefix), new = 2)  # Obsolete?

def autoTest (*args):
	test (*args, True)
	
os.system ('py39 test_install.py')
	
for fcallSwitch in (' ',):
# for fcallSwitch in (' ', '-f '):  # Outcommented to save testing time
	autoTest ('development/automated_tests/ndarray', 'autotest')
	# test ('development/manual_tests/slicing_optimization', 'test')

	if fcallSwitch:
		print ('Shipment test completed')
	else:
		input ('Close browser tabs opened by shipment test and press [enter] for fcall test')
