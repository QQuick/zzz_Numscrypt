import os
import sys

sys.path.append ('numscrypt')
import __base__

from setuptools import setup

def read (*paths):
	with open (os.path.join (*paths), 'r') as aFile:
		return aFile.read()

setup (
	name = 'Numscrypt',
	version = __base__.ns_version,
	description = 'A tiny bit of NumPy for Transcrypt using JavaScript typed arrays',
	long_description = (
		read ('README.rst') + '\n\n' +
		read ('numscrypt/license_reference.txt')
	),
	keywords = ['transcrypt', 'numscrypt', 'numpy', 'browser'],
	url = 'https://github.com/JdeH/Numscrypt',	
	license = 'Apache 2.0',
	author = 'Jacques de Hooge',
	author_email = 'jacques.de.hooge@qquick.org',
	packages = ['numscrypt'],
	install_requires = [
		'transcrypt'
	],
	include_package_data = True,
	classifiers = [
		'Development Status :: 2 - Pre-Alpha',
		'Intended Audience :: Developers',
		'Natural Language :: English',
		'License :: OSI Approved :: Apache Software License',
		'Topic :: Software Development :: Libraries :: Python Modules',
		'Operating System :: OS Independent',
		'Programming Language :: Python :: 3.5',
	],
)
