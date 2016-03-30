Numscrypt is a port of a small part of NumPy to Transcrypt using JavaScript typed arrays.
While some attention is paid to speed, e.g. by optimizing for-loops and operators in Transcrypt, that is currently not the main focus.

Whereas NumPy often has multiple way to do things, Numscrypt focuses on one obvious way. The clearest example is the NumPy type *matrix* type, that is a specialization of *ndarray* with confusingly deviating use of some operators. In Transcrypt *matrix* is deliberately left out, to keep it lean.

One thing Numscrypt does support is the use of views, i.e. references to parts of existing arrays rather than copies. As with NumPy, views are implemented using strides and offsets.

Parts of the code can later be replaced by things like asm.js and simd.js, or, better even, GPGPU code.
There's not yet a clear winner in this area.
This implementation is usable as a skeleton to try out those new technologies in parts of the code where speed matters most.

It may seem attractive to compile everything from C++ to asm.js, but the downloads would become very bulky and the readability approaching zero.
Or wouldn't it?
Forking and experimenting highly encouraged!!

As with Transcrypt, the eventual goal is not to completely copy a desktop programming environment.
Rather a lean and mean subset is sought that can still be very useful, e.g. for science demo's in the browser.

Jacques de Hooge, Rotterdam, Netherlands

.. figure:: http://www.transcrypt.org/numscrypt/illustrations/numscrypt_logo_white_small.png
	:alt: Logo
	
	**The first computers were used... to compute**

What's new
==========

N.B. Always use the newest version of Transcrypt to be able to use the newest features of Numscrypt.

- Ndarray's mixable with scalars for overloaded ops
- Overloaded unary minus added
- Preliminary optimizations, speedup 70x for inversion, 10x for multiplication (default: optimize for speed)
- Several bugs fixed for working with non-default strides
- Start made with module linalg, matrix inversion added + testcase
- Overloaded LHS and RHS slicing added to ndarray
- Readme adapted
- Hsplit, vsplit, hstack, vstack added
- Transpose can now deal with non-default strides
- Tuple stripping optimization added for simple indices
- Overloaded operators added for simple indices e.g. matrix [2, 3, 2] + autotest
- Overloaded operators added for +, -, \*, / and @, not yet mixable with scalars + autotest
- Setup adapted to Linux' case sensitivity
- Dependencies added to setup.py
- Changes package name to lowercase
- Modest beginning made with ndarray + autotest for it

Other packages you might like
=============================

- Python to JavaScript transpiler, supporting multiple inheritance and generating lean, highly readable code: https://pypi.python.org/pypi/Transcrypt
- Multi-module Python source code obfuscator: https://pypi.python.org/pypi/Opy
- PLC simulator with Arduino code generation: https://pypi.python.org/pypi/SimPyLC
- A lightweight Python course taking beginners seriously (under construction): https://pypi.python.org/pypi/LightOn
- Event driven evaluation nodes: https://pypi.python.org/pypi/Eden
