Currently available features
=============================

Numscrypt currently supports:

- ns_settings.optim_space setting added, default is False. Setting it to True is DISADVISED, since it will result in slow code.

- ndarray with
	- one or two dimensions
	- dtype int32, float32, float64, complex32 and complex64
	- indexing
	- simple and extended slicing
	- astype
	- tolist
	- real
	- imag
	- __repr__ and __str__
	- transpose
	- overloaded operators: * / + - @, mixing of ndarray and scalar expressions
	
- empty, array, copy
- hsplit, vsplit
- hstack, vstack
- zeros, ones, identity

- linalg with
	- matrix inversion

- FFT with
	- FFT for 2^n complex samples
	- IFFT for 2^n complex samples
	
Systematic code examples: a guided tour of Numscrypt
=====================================================

One ready-to-run code example is worth more than ten lengthy descriptions. The *autotest and demo suite*, that is part of the distribution, is a collection of sourcecode fragments called *testlets*. These testlets are used for automated regression testing of Numscrypt against NumPy.
Since they systematically cover all the library constructs, they are also very effective as a learning tool. The testlets are arranged alphabetically by subject.

.. literalinclude:: ../../development/automated_tests/ndarray/autotest.py
	:tab-width: 4
	:caption: Autotest: Numcrypt autotest demo suite

Basics: creating and using arrays
---------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/basics/__init__.py
	:tab-width: 4
	:caption: Testlet: basics
	
Linalg: matrix inversion
------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/module_linalg/__init__.py
	:tab-width: 4
	:caption: Testlet: module_linalg
	
Fourier transform: FFT and IFFT for 2^n samples, using complex arrays
---------------------------------------------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/module_fft/__init__.py
	:tab-width: 4
	:caption: Testlet: module_fft
	
Some more examples: interactive tests
=====================================

ns_settings.optimize_space
--------------------------

For time critical operations like *@* and *inv*, slicing operations are avoided.
For *@* this happens by copying arrays to 'natural stride order'.
Setting ns_settings.optimize_space to True will avoid this copying to save memory space.
In general this is DISADVISED, since it will considerably slow down execution of the *@* operator, which is O (n^3).

.. literalinclude:: ../../development/manual_tests/slicing_optimization/test.py
	:tab-width: 4
	:caption: Benchmark: slicing_optimization
	