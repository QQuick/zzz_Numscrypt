	(function () {
		var __name__ = '__main__';
		if (__envir__.executor_name == __envir__.transpiler_name) {
			var num =  __init__ (__world__.numscrypt);
			var linalg =  __init__ (__world__.numscrypt.linalg);
		}
		var show = function () {
			var args = tuple ([].slice.apply (arguments).slice (0));
			__call__.apply (null, [print].concat ([null]).concat (args));
		};
		var __iterable0__ = __getslice__ (tuple ([__call__ (num.array, num, list ([list ([0, complex (0, 1.0)]), list ([__neg__ (complex (0, 1.0)), 1])]), 'complex128'), __call__ (num.array, num, list ([list ([1, __neg__ (2), 3, 1]), list ([5, 8, __neg__ (1), __neg__ (5)]), list ([2, 1, 1, 100]), list ([2, 1, __neg__ (1), 0])]), 'complex128'), __call__ (num.array, num, list ([list ([1, 1, 0, 0]), list ([0, 2, 2, 0]), list ([0, 0, 3, 3]), list ([0, 0, 0, 4])]), 'complex128')]), 1, 2, 1);
		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
			var a = __getitem__ (__iterable0__, __index0__);
			var __left0__ = __call__ (linalg.eig, linalg, a);
			var eVals = __left0__ [0];
			var eVecs = __left0__ [1];
			var enumSorted = __call__ (sorted, null, __call__ (enumerate, null, __call__ (eVals.tolist, eVals)), __kwargtrans__ ({key: (function __lambda__ (elem) {
				return __neg__ (__add__ (__getitem__ (elem, 1).real, __truediv__ (__getitem__ (elem, 1).imag, 1000)));
			})}));
			var indicesSorted = (function () {
				var __accu0__ = [];
				var __iterable1__ = enumSorted;
				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
					var elem = __getitem__ (__iterable1__, __index1__);
					__call__ (__accu0__.append, __accu0__, __getitem__ (elem, 0));
				}
				return __accu0__;
			}) ();
			var eValsSorted = (function () {
				var __accu0__ = [];
				var __iterable1__ = enumSorted;
				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
					var elem = __getitem__ (__iterable1__, __index1__);
					__call__ (__accu0__.append, __accu0__, __getitem__ (elem, 1));
				}
				return __accu0__;
			}) ();
			var eValsMat = __call__ (num.empty, num, a.shape, a.dtype);
			for (var iRow = 0; iRow < __getitem__ (a.shape, 0); iRow++) {
				for (var iCol = 0; iCol < __getitem__ (a.shape, 1); iCol++) {
					eValsMat.__setitem__ ([iRow, iCol], __getitem__ (eVals, iCol));
				}
			}
			var eVecsNorms = __call__ (num.empty, num, tuple ([__getitem__ (eVecs.shape, 1)]), a.dtype);
			for (var iNorm = 0; iNorm < __getitem__ (eVecsNorms.shape, 0); iNorm++) {
				__setitem__ (eVecsNorms, iNorm, __call__ (complex, null, __call__ (linalg.norm, linalg, eVecs.__getitem__ ([tuple ([0, null, 1]), iNorm]))));
			}
			var eVecsCanon = __call__ (num.empty, num, a.shape, a.dtype);
			for (var iRow = 0; iRow < __getitem__ (a.shape, 0); iRow++) {
				for (var iCol = 0; iCol < __getitem__ (a.shape, 1); iCol++) {
					eVecsCanon.__setitem__ ([iRow, iCol], __truediv__ (eVecs.__getitem__ ([iRow, iCol]), eVecs.__getitem__ ([0, iCol])));
				}
			}
			var eVecsSorted = __call__ (num.empty, num, a.shape, a.dtype);
			for (var iRow = 0; iRow < __getitem__ (a.shape, 0); iRow++) {
				for (var iCol = 0; iCol < __getitem__ (a.shape, 1); iCol++) {
					eVecsSorted.__setitem__ ([iRow, iCol], eVecsCanon.__getitem__ ([iRow, __getitem__ (indicesSorted, iCol)]));
				}
			}
			__call__ (show, null, '=========================================');
			__call__ (show, null, '\n---------------- eigVecsSorted ----------');
			__call__ (show, null, (function () {
				var __accu0__ = [];
				var __iterable1__ = __call__ (eVecsSorted.tolist, eVecsSorted);
				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
					var row = __getitem__ (__iterable1__, __index1__);
					__call__ (__accu0__.append, __accu0__, (function () {
						var __accu1__ = [];
						var __iterable2__ = row;
						for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
							var value = __getitem__ (__iterable2__, __index2__);
							__call__ (__accu1__.append, __accu1__, tuple ([__call__ (round, null, __add__ (value.real, 1e-10), 3), __call__ (round, null, __add__ (value.imag, 1e-10), 3)]));
						}
						return __accu1__;
					}) ());
				}
				return __accu0__;
			}) ());
			__call__ (show, null, '\n---------------- eigValsSorted ----------');
			__call__ (show, null, (function () {
				var __accu0__ = [];
				var __iterable1__ = eValsSorted;
				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
					var value = __getitem__ (__iterable1__, __index1__);
					__call__ (__accu0__.append, __accu0__, tuple ([__call__ (round, null, __add__ (value.real, 1e-10), 3), __call__ (round, null, __add__ (value.imag, 1e-10), 3)]));
				}
				return __accu0__;
			}) (), '\n');
			__call__ (show, null, '=========================================');
		}
		__pragma__ ('<use>' +
			'numscrypt' +
			'numscrypt.linalg' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.a = a;
			__all__.eVals = eVals;
			__all__.eValsMat = eValsMat;
			__all__.eValsSorted = eValsSorted;
			__all__.eVecs = eVecs;
			__all__.eVecsCanon = eVecsCanon;
			__all__.eVecsNorms = eVecsNorms;
			__all__.eVecsSorted = eVecsSorted;
			__all__.enumSorted = enumSorted;
			__all__.iCol = iCol;
			__all__.iNorm = iNorm;
			__all__.iRow = iRow;
			__all__.indicesSorted = indicesSorted;
			__all__.show = show;
		__pragma__ ('</all>')
	}) ();
