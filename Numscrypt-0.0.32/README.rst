**In der Beschraenkung zeigt sich der Meister!**

Numscrypt is a port of a small part of NumPy to Transcrypt using JavaScript typed arrays. As with Transcrypt, the eventual goal is not to completely copy a desktop programming environment. Rather a lean and mean subset is sought that can still be very useful, e.g. for science demo's in the browser or for small to medium scale computations.

Whereas NumPy often has multiple way to do things, Numscrypt focuses on one obvious way. The clearest example is the NumPy type *matrix* type, that is a specialization of *ndarray* with confusingly deviating use of some operators. In Transcrypt *matrix* is deliberately left out, to keep the code lean.

While the first minor versions of Numscrypt fully supported views, strides, offsets and arrays of arbitrary dimension, this proved to be too slow when compiled to JavaScript. Especially the generalized indexing caused a lot of overhead when arrays weren't stored in natural order. Moreover supporting arrays of arbitrary dimension lead to recursion in some places, and with that to suboptimal performance and scalability. And all this overhead was merely there to support use cases that were relatively rare. Of course copying in itself costs time, but JavaScript typed arrays can do it in one highly optimized operation , e.g. in case of slicing, provided natural storage order is followed. And indeed copies cost memory as well. However views are slow due to complicated index computations, and speed was favoured over small memory use here.

The rationale behind favouring speed over small memory use deserves some attention, since it also makes clear what Numscrypt is for. In computations like inversion, non-elementwise matrix multiplication, convolution and FFT, the ability to store very large arrays is pointless if computations are slow. So the choice for speed over small memory use illustrates the fact that Numscrypt is meant for non-trivial computations on small to medium scale, rather than for data reshuffling on medium to large scale.

In contrast to Transcrypt, which already has seen officially releases, Numscrypt is still experimental. This led to the conclusion that if the course had to be altered significantly, it had to happen soon, well before the first release. So in pursuit a good balance between familiarity and efficiency, requirements with respect to Numpy compatibility have been relaxed.  Arrays can now only have one or two dimensions and are always stored in natural storage order per row. This means that views are not supported anymore and slices are always copies, since that enables them to have natural storage order as well, enabling fast access.

**Computing in a browser?**

- At first Numscrypt was purely meant as a tool for education and demonstration. The fact that some serious numerical math libraries for JavaScript do exist, sometimes using weird tricks to mimic operator overloading, led to reconsideration. Although computing in JavaScript on a browser certainly restricts performance and scalabilty compared to computing in C++ on dedicated manycore hardware, this doesn't mean that there aren't many useful, serious applications. If, given the existence of several JavaScript math libraries, there appears to be a need for computing in the browser, why not enable doing so in a language that is familiar to scientists and technicians, and has decent solutions for e.g. operator overloading and slicing notation. The partial parity between Numscrypt and Numpy is another attractive aspect of this approach. With broad use in mind, not only is there a direct gain of execution speed by simplifying matters, also chances of future optimization using asm.js, simd.js or GPGPU code are better in that case. The newly introduced type annotations of Python may well ease application of such technologies in a robust manner.

- Despite the fact that they are used in some branches of physics, arrays with more dimensions than 2 are relatively rare. If they are needed, in most cases a one- or multi-dimensional list of 2D arrays will do just as well. The speed benefits gained from restricting arrays to 1D and 2D are enormous when forced to compile to something like JavaScript rather than C++, since the whole strided index computation mechanism is largely avoided. Also the code of Numscrypt becomes much more simple. Striving for code simplicity is always an important design consideration. It enables other to understand the source and contribute to it. It enables rapid addition of new features. And, with a browser application, it makes for lean downloads. As a result of the restriction to 1D and 2D arrays, lean, efficient JavaScript code can be generated, even for arrays of complex numbers, which are considered essential for clean notation of e.g harmonic solutions of systems of linear differential equations.

- 1D and 2D arrays with natural storage order map rather well on existing JavaScript math libraries. This means that for some applications Numscrypt can be a mere elegant facade for something already available in JavaScript. The FFT has been implemented along that line using the efficient, partially precalculated JavaScript variant of the Nayuki FFT rather than the slower, non-precalculated Python variant. This means that the number of samples is restricted to a power of 2 currently. Compromises like that are probably wise when computing in a browser. Generalizing to N samples is considerably slower and as an alternative a suitable form of padding combined with windowing can be used. The 2D FFT is currently lacking but will be added, as it is considered an important image processing tool.

**The bottom line...**

The course of Numscrypt has been fundamentally altered. Starting out as a toy, it now has serious, but modest, ambitions. If people venture to compute in JavaScript, why not allow them to do it in Python, a language is established in the scientific community, traditionally featuring things like operator overloading and complex numbers. While predicting is hard, especially if it concerns the future, there's a wave of new technologies coming up allowing faster computation in JavaScript. Numscrypt is now simple and open enough to surf on that wave, while hiding the technical details behind a very readable notation.

Jacques de Hooge

.. figure:: http://www.transcrypt.org/numscrypt/illustrations/numscrypt_logo_white_small.png
	:alt: Logo
	
	**The first computers were used... to compute**

What's new
==========

N.B. Always use the newest version of Transcrypt to be able to use the newest features of Numscrypt.

- Complete redesign, currently only tested on Windows (but should run on Linux as well)

Other packages you might like
=============================

- Python to JavaScript transpiler, supporting multiple inheritance and generating lean, highly readable code: https://pypi.python.org/pypi/Transcrypt
- Multi-module Python source code obfuscator: https://pypi.python.org/pypi/Opy
- PLC simulator with Arduino code generation: https://pypi.python.org/pypi/SimPyLC
- A lightweight Python course taking beginners seriously (under construction): https://pypi.python.org/pypi/LightOn
- Event driven evaluation nodes: https://pypi.python.org/pypi/Eden
