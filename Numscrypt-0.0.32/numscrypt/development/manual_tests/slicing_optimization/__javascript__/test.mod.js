	(function () {
		var __symbols__ = ['__complex__', '__esv6__'];
		var random = {};
		var num =  __init__ (__world__.numscrypt);
		var num_rand =  __init__ (__world__.numscrypt.random);
		var linalg =  __init__ (__world__.numscrypt.linalg);
		__nest__ (random, '', __init__ (__world__.random));
		var result = '';
		var __iterator0__ = py_iter (tuple ([false, true]));
		while (true) {
			try {var useComplex = py_next (__iterator0__);} catch (exception) {break;}
			var __iterator1__ = py_iter (tuple ([false, true]));
			while (true) {
				try {var transpose = py_next (__iterator1__);} catch (exception) {break;}
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
				result += '\n<pre>\na @ ai [0:5, 0:5] =\n\n{}\n'.format (str (num.round (id.__getitem__ ([tuple ([0, 5, 1]), tuple ([0, 5, 1])]), 2)).py_replace (' ', '\t'));
				if (transpose) {
					result += '\nTranspose took: {} ms'.format (timeStartInv - timeStartTranspose);
				}
				result += '\nInverse took: {} ms\nMatrix product (@) took: {} ms\nElementwise product (*) took: {} ms\nDivision took: {} ms\nAddition took: {} ms\nSubtraction took: {} ms\n</pre>\n'.format (timeStartMul - timeStartInv, timeStartScalp - timeStartMul, timeStartDiv - timeStartScalp, timeStartAdd - timeStartDiv, timeStartSub - timeStartAdd, timeEnd - timeStartSub);
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
