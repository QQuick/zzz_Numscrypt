	(function () {
		var __symbols__ = ['__complex__', '__esv5__'];
		var random = {};
		var num =  __init__ (__world__.numscrypt);
		var num_rand =  __init__ (__world__.numscrypt.random);
		var linalg =  __init__ (__world__.numscrypt.linalg);
		__nest__ (random, '', __init__ (__world__.random));
		var result = '';
		var __iterable0__ = tuple ([false, true]);
		for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
			var useComplex = __iterable0__ [__index0__];
			var __iterable1__ = tuple ([false, true]);
			for (var __index1__ = 0; __index1__ < __iterable1__.length; __index1__++) {
				var optim_space = __iterable1__ [__index1__];
				num.ns_settings.optim_space = optim_space;
				var __iterable2__ = tuple ([false, true]);
				for (var __index2__ = 0; __index2__ < __iterable2__.length; __index2__++) {
					var transpose = __iterable2__ [__index2__];
					if (useComplex) {
						var a = num.array (function () {
							var __accu0__ = [];
							for (var iRow = 0; iRow < 30; iRow++) {
								__accu0__.append (function () {
									var __accu1__ = [];
									for (var iCol = 0; iCol < 30; iCol++) {
										__accu1__.append (complex (random.random (), random.random ()));
									}
									return __accu1__;
								} ());
							}
							return __accu0__;
						} (), 'complex128');
					}
					else {
						var a = num_rand.rand (30, 30);
					}
					var timeStartTranspose = new Date ();
					if (transpose) {
						var a = a.transpose ();
					}
					var timeStartInv = new Date ();
					var ai = linalg.inv (a);
					var timeStartMul = new Date ();
					var id = __matmul__ (a, ai);
					var timeStartScalp = new Date ();
					var sp = __mul__ (a, a);
					var timeStartDiv = new Date ();
					var sp = __div__ (a, a);
					var timeStartAdd = new Date ();
					var sp = __add__ (a, a);
					var timeStartSub = new Date ();
					var sp = __sub__ (a, a);
					var timeEnd = new Date ();
					result += '\n<pre>\n   Optimized for space instead of time: {}\n================================================\n\t\n{}: a @ ai [0:5, 0:5] =\n\n{}\n'.format (optim_space, (a.ns_natural ? 'natural' : 'unnatural'), str (num.round (id.__getitem__ ([tuple ([0, 5, 1]), tuple ([0, 5, 1])]), 2)).py_replace (' ', '\t'));
					if (transpose) {
						result += '\nTranspose took: {} ms'.format (timeStartInv - timeStartTranspose);
					}
					result += '\nInverse took: {} ms\nMatrix product (@) took: {} ms\nElementwise product (*) took: {} ms\nDivision took: {} ms\nAddition took: {} ms\nSubtraction took: {} ms\n</pre>\n'.format (timeStartMul - timeStartInv, timeStartScalp - timeStartMul, timeStartDiv - timeStartScalp, timeStartAdd - timeStartDiv, timeStartSub - timeStartAdd, timeEnd - timeStartSub);
				}
			}
		}
		document.getElementById ('result').innerHTML = result;
		__pragma__ ('<use>' +
			'numscrypt' +
			'numscrypt.linalg' +
			'numscrypt.random' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.a = a;
			__all__.ai = ai;
			__all__.id = id;
			__all__.optim_space = optim_space;
			__all__.result = result;
			__all__.sp = sp;
			__all__.timeEnd = timeEnd;
			__all__.timeStartAdd = timeStartAdd;
			__all__.timeStartDiv = timeStartDiv;
			__all__.timeStartInv = timeStartInv;
			__all__.timeStartMul = timeStartMul;
			__all__.timeStartScalp = timeStartScalp;
			__all__.timeStartSub = timeStartSub;
			__all__.timeStartTranspose = timeStartTranspose;
			__all__.transpose = transpose;
			__all__.useComplex = useComplex;
		__pragma__ ('</all>')
	}) ();
