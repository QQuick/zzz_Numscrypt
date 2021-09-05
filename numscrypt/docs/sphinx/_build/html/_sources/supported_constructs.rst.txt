Currently available features
=============================

Numscrypt currently supports:

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
    - eigenvalue / eigenvector decomposition

- FFT with
    - FFT for 2^n complex samples
    - IFFT for 2^n complex samples
    - FFT2 for 2^n x 2^n complex samples
    - IFFT2 for 2^n x 2^n complex samples
    
Note that all operations where the distinction between row vectors and column vectors matters, only work on ndarrays with two dimensions.
Such operations are e.g. *@*, *hstack*, *vstack*, *hsplit* and *vsplit*.
When used with these operations, a row vector should have shape *(1,n)* and a column vector should have shape *(n,1)*.
Furthermore views and broadcasting are not supported.
    
Systematic code examples: a guided tour of Numscrypt
=====================================================

One ready-to-run code example is worth more than ten lengthy descriptions. The *autotest and demo suite*, that is part of the distribution, is a collection of sourcecode fragments called *testlets*. These testlets are used for automated regression testing of Numscrypt against NumPy.
Since they systematically cover all the library constructs, they are also very effective as a learning tool. The testlets are arranged alphabetically by subject.

.. literalinclude:: ../../development/automated_tests/ndarray/autotest.py
    :tab-width: 4
    :caption: Autotest: Numscrypt autotest demo suite

Basics: creating and using arrays
---------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/basics/__init__.py
    :tab-width: 4
    :caption: Testlet: basics
    
Linalg: matrix inversion and eigen decomposition
------------------------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/module_linalg/__init__.py
    :tab-width: 4
    :caption: Testlet: module_linalg
    
Fourier transform: FFT(2) and IFFT(2) for 2^n (x 2^n) samples, using complex arrays
-----------------------------------------------------------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/module_fft/__init__.py
    :tab-width: 4
    :caption: Testlet: module_fft
    
Some more examples: interactive tests
=====================================

Benchmark
---------

Performance of operations like *@* and *inv*

.. literalinclude:: ../../development/manual_tests/slicing_optimization/test.py
    :tab-width: 4
    :caption: Benchmark: slicing_optimization
    