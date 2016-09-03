	__nest__ (
		__all__,
		'module_fft', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var sin = __init__ (__world__.math).sin;
					var cos = __init__ (__world__.math).cos;
					var pi = __init__ (__world__.math).pi;
					var transpiled = __envir__.executor_name == __envir__.transpiler_name;
					if (__envir__.executor_name == __envir__.transpiler_name) {
						var num =  __init__ (__world__.numscrypt);
						var fft =  __init__ (__world__.numscrypt.fft);
					}
					var fSample = 4096;
					var tTotal = 2;
					var fSin = 30;
					var fCos = 50;
					var getNow = function () {
						return new Date ();
					};
					var tCurrent = function (iCurrent) {
						return iCurrent / fSample;
					};
					var run = function (autoTester) {
						var delta = __add__ (0.001, complex (0, 0.001));
						autoTester.check ('<br>------ 1D ------<br>');
						var cut = 102;
						autoTester.check ('Samples computed: {}<br>'.format (tTotal * fSample));
						autoTester.check ('Samples shown: {}<br>'.format (cut));
						var orig = num.array (function () {
							var __accu0__ = [];
							var __iterator0__ = py_iter (function () {
								var __accu1__ = [];
								for (var iSample = 0; iSample < tTotal * fSample; iSample++) {
									__accu1__.append (iSample / fSample);
								}
								return __accu1__;
							} ());
							while (true) {
								try {var t = py_next (__iterator0__);} catch (exception) {break;}
								__accu0__.append (complex ((0.3 + sin (((2 * pi) * fSin) * t)) + 0.5 * cos (((2 * pi) * fCos) * t), 0));
							}
							return __accu0__;
						} (), 'complex128');
						__call__ (autoTester.check, 'Original samples', __getslice__ (__call__ (__call__ (num.round, __add__ (orig, delta), 3).tolist), 0, cut, 1), '<br>');
						if (transpiled) {
							var timeStartFft = __call__ (getNow);
						}
						var freqs = __call__ (fft.fft, orig);
						if (transpiled) {
							var timeStopFft = __call__ (getNow);
						}
						__call__ (autoTester.check, 'Frequencies', __getslice__ (__call__ (__call__ (num.round, __add__ (freqs, delta), 3).tolist), 0, cut, 1), '<br>');
						if (transpiled) {
							var timeStartIfft = __call__ (getNow);
						}
						var reconstr = __call__ (fft.ifft, freqs);
						if (transpiled) {
							var timeStopIfft = __call__ (getNow);
						}
						__call__ (autoTester.check, 'Reconstructed samples', __getslice__ (__call__ (__call__ (num.round, __add__ (reconstr, delta), 3).tolist), 0, cut, 1), '<br>');
						if (transpiled) {
							print ('FFT for {} samples took {} ms'.format (tTotal * fSample, timeStopFft - timeStartFft));
							print ('IFFT for {} samples took {} ms'.format (tTotal * fSample, timeStopIfft - timeStartIfft));
						}
						autoTester.check ('<br>------ 2D ------<br>');
						var orig2 = __call__ (num.zeros, tuple ([128, 128]), 'complex128');
						orig2.__setitem__ ([tuple ([32, 96, 1]), tuple ([32, 96, 1])], __call__ (num.ones, tuple ([64, 64]), 'complex128'));
						__call__ (autoTester.check, 'Original samples', __call__ (__call__ (num.round, __add__ (orig2, delta), 3).__getitem__ ([tuple ([64, 68, 1]), tuple ([16, 112, 1])]).tolist), '<br>');
						if (transpiled) {
							var timeStartFft = __call__ (getNow);
						}
						var freqs2 = __call__ (fft.fft2, orig2);
						if (transpiled) {
							var timeStopFft = __call__ (getNow);
						}
						__call__ (autoTester.check, 'Frequencies', __call__ (__call__ (num.round, __add__ (freqs2, delta), 3).__getitem__ ([tuple ([64, 68, 1]), tuple ([16, 112, 1])]).tolist), '<br>');
						if (transpiled) {
							var timeStartIfft = __call__ (getNow);
						}
						var reconstr2 = __call__ (fft.ifft2, freqs2);
						if (transpiled) {
							var timeStopIfft = __call__ (getNow);
						}
						if (transpiled) {
							__call__ (print, __call__ ('FFT2 for {} samples took {} ms'.format, orig2.size, __sub__ (timeStopFft, timeStartFft)));
							__call__ (print, __call__ ('IFFT2 for {} samples took {} ms'.format, orig2.size, __sub__ (timeStopIfft, timeStartIfft)));
						}
						__call__ (autoTester.check, 'Reconstructed samples', __call__ (__call__ (num.round, __add__ (reconstr2, delta), 3).__getitem__ ([tuple ([64, 68, 1]), tuple ([16, 112, 1])]).tolist), '<br>');
					};
					__pragma__ ('<use>' +
						'math' +
						'numscrypt' +
						'numscrypt.fft' +
					'</use>')
					__pragma__ ('<all>')
						__all__.cos = cos;
						__all__.fCos = fCos;
						__all__.fSample = fSample;
						__all__.fSin = fSin;
						__all__.getNow = getNow;
						__all__.pi = pi;
						__all__.run = run;
						__all__.sin = sin;
						__all__.tCurrent = tCurrent;
						__all__.tTotal = tTotal;
						__all__.transpiled = transpiled;
					__pragma__ ('</all>')
				}
			}
		}
	);
