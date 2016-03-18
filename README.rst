Numscrypt?

Numscrypt is an experimental attempt to port a microscopically Small Sane Subset of NumPy to Transcrypt using JS typed arrays.
While some attention is paid to speed, e.g. by using inline JavaScript for inner loops, that is currently not the main focus.

Parts of the code can later be replaced by things like asm.js and simd.js, or, better even, GPGPU code.
There's not yet a clear winner in this area.
This implementation is usable as a skeleton to try out those new technologies in parts of the code where speed matters most.

It may seem attractive to compile everything from C++ to asm.js, but the downloads would become very bulky and the readability approaching zero.
Or wouldn't it?
Forking and experimenting highly encouraged!!

As with Transcrypt, the eventual goal is not to completely copy a desktop programming environment.
Rather a lean and mean subset is sought that can still be very useful, e.g. for science demo's in the browser.

Jacques de Hooge

What's new
==========

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
