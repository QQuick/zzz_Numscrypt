Numscrypt: what and why
========================

What is Numscrypt
-----------------

Numscrypt is a port of a small but relevant part of NumPy to Transcrypt using JavaScript typed arrays. As with Transcrypt, the eventual goal is not to completely copy a desktop programming environment. Rather a lean and mean subset is sought that can still be very useful, e.g. for science demo's in the browser or for small to medium scale computations. Whereas NumPy often has multiple way to do things, Numscrypt focuses on one obvious way. The clearest example is the NumPy type *matrix* type, that is a specialization of *ndarray* with confusingly deviating use of some operators. In Transcrypt *matrix* is deliberately left out, to keep the code lean.

While the first minor versions of Numscrypt fully supported views, strides, offsets and arrays of arbitrary dimension, this proved to be too slow when compiled to JavaScript. In pursuit a good balance between familiarity and efficiency, requirements with respect to Numpy compatibility have been relaxed.  Arrays can only have one or two dimensions and are always stored in natural storage order per row. This means that views are not supported and slices are always copies, since that enables them to have natural storage order as well, enabling fast access. Despite the fact that they are used in some branches of physics, arrays with more than two dimensions are relatively rare. If they are needed, in most cases a one- or multi-dimensional list of 2D arrays will do just as well.

The speed benefits gained from these simplifications are enormous when forced to compile to something like JavaScript rather than C++. With broad applicability in mind, not only is there a direct gain of execution speed by simplifying matters, but also the source code of Numscrypt is much simpler. This code simplicity increases the chance of future optimization using asm.js, simd.js or GPGPU. The newly introduced type annotations of Python may well facilitate introduction of such technologies in a robust manner.

In Numscrypt, speed is generally favored over memory conservation. In computations like inversion, non-elementwise matrix multiplication, convolution and FFT, the ability to store very large arrays is pointless if computations are slow. So the choice for speed over memory conservation illustrates the fact that Numscrypt is meant for non-trivial computations on small to medium scale, rather than for data reshuffling on medium to large scale.

Computing in a browser?
-----------------------

At first Numscrypt was purely meant as a tool for education and demonstration. The fact that some serious numerical math libraries for JavaScript do exist, sometimes using weird tricks to mimic operator overloading, led to reconsideration. Although computing in JavaScript in a browser certainly restricts performance and scalabilty compared to computing in C++ on dedicated manycore hardware, this doesn't mean that there aren't many useful, serious applications. If, given the existence of several JavaScript math libraries, there appears to be a need for computing in the browser, why not enable doing so in a language that is familiar to scientists and technicians, and has decent solutions for e.g. operator overloading and slicing notation. The partial parity between Numscrypt and Numpy is another attractive aspect of this approach.
