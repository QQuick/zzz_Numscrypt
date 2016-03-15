import os
import sys

sys.path.append ('Numscrypt')
import base

from setuptools import setup

def read (*paths):
	with open (os.path.join (*paths), 'r') as aFile:
		return aFile.read()

setup (
	name = 'Numscrypt',
	version = base.ns_version,
	description = 'Purely experimental attempt to port a microscopic part of NumPy to Transcrypt using JS typed arrays',
	long_description = (
		read ('README.rst') + '\n\n' +
		read ('Numscrypt/license_reference.txt')
	),
	keywords = ['transcrypt', 'numscrypt', 'numpy', 'browser'],
	url = 'https://github.com/JdeH/Numscrypt',	
	license = 'Apache 2.0',
	author = 'Jacques de Hooge',
	author_email = 'jacques.de.hooge@qquick.org',
	packages = ['Numscrypt'],
	include_package_data = True,
	classifiers = [
		'Development Status :: 1 - Planning',
		'Intended Audience :: Developers',
		'Natural Language :: English',
		'License :: OSI Approved :: Apache Software License',
		'Topic :: Software Development :: Libraries :: Python Modules',
		'Operating System :: OS Independent',
		'Programming Language :: Python :: 3.5',
	],
)
