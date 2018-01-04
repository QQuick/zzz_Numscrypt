	__nest__ (
		__all__,
		'module_linalg', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'module_linalg';
					if (__envir__.executor_name == __envir__.transpiler_name) {
						var num =  __init__ (__world__.numscrypt);
						var linalg =  __init__ (__world__.numscrypt.linalg);
					}
					var run = function (autoTester) {
						autoTester.check ('====== inverse ======');
						var r = num.array (list ([list ([2.12, -(2.11), -(1.23)]), list ([2.31, 1.14, 3.15]), list ([1.13, 1.98, 2.81])]));
						autoTester.check ('Matrix r', num.round (r, 2).tolist (), '<br>');
						var ri = linalg.inv (r);
						autoTester.check ('Matrix ri', num.round (ri, 2).tolist (), '<br>');
						var rid = __matmul__ (r, ri);
						autoTester.check ('r @ ri', (function () {
							var __accu0__ = [];
							var __iterable0__ = rid.tolist ();
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var row = __iterable0__ [__index0__];
								__accu0__.append ((function () {
									var __accu1__ = [];
									var __iterable1__ = row;
									for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
										var elem = __iterable1__ [__index1__];
										__accu1__.append (int (round (elem)));
									}
									return __accu1__;
								}) ());
							}
							return __accu0__;
						}) (), '<br>');
						var delta = 0.001;
						__call__ (autoTester.check, autoTester, 'r * r', __call__ (__call__ (num.round, num, __add__ (__mul__ (r, r), delta), 3).tolist, __call__ (num.round, num, __add__ (__mul__ (r, r), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'r / r', __call__ (__call__ (num.round, num, __add__ (__truediv__ (r, r), delta), 3).tolist, __call__ (num.round, num, __add__ (__truediv__ (r, r), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'r + r', __call__ (__call__ (num.round, num, __add__ (__add__ (r, r), delta), 3).tolist, __call__ (num.round, num, __add__ (__add__ (r, r), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'r - r', __call__ (__call__ (num.round, num, __add__ (__sub__ (r, r), delta), 3).tolist, __call__ (num.round, num, __add__ (__sub__ (r, r), delta), 3)), '<br>');
						var c = __call__ (num.array, num, list ([list ([__sub__ (2.12, complex (0, 3.15)), __neg__ (2.11), __neg__ (1.23)]), list ([2.31, 1.14, __add__ (3.15, complex (0, 2.75))]), list ([1.13, __sub__ (1.98, complex (0, 4.33)), 2.81])]), 'complex128');
						autoTester.check ('Matrix c', num.round (c, 2).tolist (), '<br>');
						var ci = linalg.inv (c);
						autoTester.check ('Matrix ci', num.round (ci, 2).tolist (), '<br>');
						var cid = __matmul__ (c, ci);
						var delta = __add__ (0.001, complex (0, 0.001));
						__call__ (autoTester.check, autoTester, 'c * c', __call__ (__call__ (num.round, num, __add__ (__mul__ (c, c), delta), 3).tolist, __call__ (num.round, num, __add__ (__mul__ (c, c), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'c / c', __call__ (__call__ (num.round, num, __add__ (__truediv__ (c, c), delta), 3).tolist, __call__ (num.round, num, __add__ (__truediv__ (c, c), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'c + c', __call__ (__call__ (num.round, num, __add__ (__add__ (c, c), delta), 3).tolist, __call__ (num.round, num, __add__ (__add__ (c, c), delta), 3)), '<br>');
						__call__ (autoTester.check, autoTester, 'c - c', __call__ (__call__ (num.round, num, __add__ (__sub__ (c, c), delta), 3).tolist, __call__ (num.round, num, __add__ (__sub__ (c, c), delta), 3)), '<br>');
						autoTester.check ('====== eigen ======');
						var __iterable0__ = tuple ([__call__ (num.array, num, list ([list ([0, complex (0, 1.0)]), list ([__neg__ (complex (0, 1.0)), 1])]), 'complex128'), __call__ (num.array, num, list ([list ([1, __neg__ (2), 3, 1]), list ([5, 8, __neg__ (1), __neg__ (5)]), list ([2, 1, 1, 100]), list ([2, 1, __neg__ (1), 0])]), 'complex128')]);
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
							__call__ (autoTester.check, autoTester, '\n---------------- eigVecsSorted ----------');
							__call__ (autoTester.check, autoTester, (function () {
								var __accu0__ = [];
								var __iterable1__ = __call__ (eVecsSorted.tolist, eVecsSorted);
								for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
									var row = __getitem__ (__iterable1__, __index1__);
									__call__ (__accu0__.append, __accu0__, (function () {
										var __accu1__ = [];
										var __iterable2__ = row;
										for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
											var value = __getitem__ (__iterable2__, __index2__);
											__call__ (__accu1__.append, __accu1__, tuple ([__call__ (round, null, __add__ (value.real, 0.001), 3), __call__ (round, null, __add__ (value.imag, 0.001), 3)]));
										}
										return __accu1__;
									}) ());
								}
								return __accu0__;
							}) ());
							__call__ (autoTester.check, autoTester, '\n---------------- eigValsSorted ----------');
							__call__ (autoTester.check, autoTester, (function () {
								var __accu0__ = [];
								var __iterable1__ = eValsSorted;
								for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
									var value = __getitem__ (__iterable1__, __index1__);
									__call__ (__accu0__.append, __accu0__, tuple ([__call__ (round, null, __add__ (value.real, 0.001), 3), __call__ (round, null, __add__ (value.imag, 0.001), 3)]));
								}
								return __accu0__;
							}) (), '\n');
						}
					};
					__pragma__ ('<use>' +
						'numscrypt' +
						'numscrypt.linalg' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.run = run;
					__pragma__ ('</all>')
				}
			}
		}
	);
