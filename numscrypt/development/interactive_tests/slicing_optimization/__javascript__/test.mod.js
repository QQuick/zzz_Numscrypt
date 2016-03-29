	(function () {
		var ns =  __init__ (__world__.numscrypt);
		var random =  __init__ (__world__.numscrypt.random);
		var linalg =  __init__ (__world__.numscrypt.linalg);
		var result = '';
		var __iter0__ = tuple ([false, true]);
		for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
			var optim_space = __iter0__ [__index0__];
			ns.ns_settings.optim_space = optim_space;
			var __iter1__ = tuple ([false, true]);
			for (var __index1__ = 0; __index1__ < __iter1__.length; __index1__++) {
				var transpose = __iter1__ [__index1__];
				var a = random.rand (30, 30);
				var timeStartTranspose = new Date ();
				if (transpose) {
					var a = a.transpose ();
				}
				var timeStartInv = new Date ();
				var ai = linalg.inv (a);
				var timeStartMul = new Date ();
				var id = __matmul__ (a, ai);
				var timeEnd = new Date ();
				result += '<pre>\nOptimized for space instead of time: {}\n\t\n{}: a @ ai [0:5, 0:5] =\n\n{}\n\nTranspose took: {} ms\nInverse took: {} ms\nProduct took: {} ms\n\t\t\t</pre>'.format (optim_space, (a.ns_natural ? 'natural' : 'unnatural'), str (ns.round (id.__getitem__ ([tuple ([0, 5, 1]), tuple ([0, 5, 1])]), 2)).py_replace (' ', '\t'), timeStartInv - timeStartTranspose, timeStartMul - timeStartInv, timeEnd - timeStartMul);
			}
		}
		document.getElementById ('result').innerHTML = result;
		__pragma__ ('<use>' +
			'numscrypt' +
			'numscrypt.linalg' +
			'numscrypt.random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.a = a;
			__all__.ai = ai;
			__all__.id = id;
			__all__.optim_space = optim_space;
			__all__.result = result;
			__all__.timeEnd = timeEnd;
			__all__.timeStartInv = timeStartInv;
			__all__.timeStartMul = timeStartMul;
			__all__.timeStartTranspose = timeStartTranspose;
			__all__.transpose = transpose;
		__pragma__ ('</all>')
	}) ();
