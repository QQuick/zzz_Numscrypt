	__nest__ (
		__all__,
		'module_linalg', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
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
						autoTester.check ('r @ ri', function () {
							var __accu0__ = [];
							var __iterator0__ = py_iter (rid.tolist ());
							while (true) {
								try {var row = py_next (__iterator0__);} catch (exception) {break;}
								__accu0__.append (function () {
									var __accu1__ = [];
									var __iterator1__ = py_iter (row);
									while (true) {
										try {var elem = py_next (__iterator1__);} catch (exception) {break;}
										__accu1__.append (int (round (elem)));
									}
									return __accu1__;
								} ());
							}
							return __accu0__;
						} (), '<br>');
						var delta = 0.001;
						__call__ (autoTester.check, 'r * r', __call__ (__call__ (num.round, __add__ (__mul__ (r, r), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'r / r', __call__ (__call__ (num.round, __add__ (__div__ (r, r), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'r + r', __call__ (__call__ (num.round, __add__ (__add__ (r, r), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'r - r', __call__ (__call__ (num.round, __add__ (__sub__ (r, r), delta), 3).tolist), '<br>');
						var c = __call__ (num.array, list ([list ([__sub__ (2.12, complex (0, 3.15)), __neg__ (2.11), __neg__ (1.23)]), list ([2.31, 1.14, __add__ (3.15, complex (0, 2.75))]), list ([1.13, __sub__ (1.98, complex (0, 4.33)), 2.81])]), 'complex128');
						autoTester.check ('Matrix c', num.round (c, 2).tolist (), '<br>');
						var ci = linalg.inv (c);
						autoTester.check ('Matrix ci', num.round (ci, 2).tolist (), '<br>');
						var cid = __matmul__ (c, ci);
						var delta = __add__ (0.001, complex (0, 0.001));
						__call__ (autoTester.check, 'c * c', __call__ (__call__ (num.round, __add__ (__mul__ (c, c), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'c / c', __call__ (__call__ (num.round, __add__ (__div__ (c, c), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'c + c', __call__ (__call__ (num.round, __add__ (__add__ (c, c), delta), 3).tolist), '<br>');
						__call__ (autoTester.check, 'c - c', __call__ (__call__ (num.round, __add__ (__sub__ (c, c), delta), 3).tolist), '<br>');
					};
					__pragma__ ('<use>' +
						'numscrypt' +
						'numscrypt.linalg' +
					'</use>')
					__pragma__ ('<all>')
						__all__.run = run;
					__pragma__ ('</all>')
				}
			}
		}
	);
