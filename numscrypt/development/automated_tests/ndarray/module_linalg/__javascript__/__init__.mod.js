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
						var r = num.array (list ([list ([2.12, -(2.11), -(1.23)]), list ([2.31, 1.14, 3.15]), list ([1.13, 1.98, 2.81])]));
						autoTester.check ('Matrix r', num.round (r, 2).tolist (), '<br>');
						var ri = linalg.inv (r);
						autoTester.check ('Matrix ri', num.round (ri, 2).tolist (), '<br>');
						var rid = __matmul__ (r, ri);
						autoTester.check ('r @ ri', (function () {
							var __accu0__ = [];
							for (var row of rid.tolist ()) {
								__accu0__.append ((function () {
									var __accu1__ = [];
									for (var elem of row) {
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
