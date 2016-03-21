	__nest__ (
		__all__,
		'basics', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					if (__envir__.executor_name == __envir__.transpiler_name) {
						var num =  __init__ (__world__.numscrypt);
					}
					var run = function (autoTester) {
						var z = num.zeros (tuple ([4, 3, 2]), 'int32');
						autoTester.check ('Zeros', z.tolist (), '<br>');
						var o = num.ones (tuple ([1, 2, 3]));
						autoTester.check ('Ones', o.astype ('int32').tolist ());
						var i = num.identity (3, 'int32');
						autoTester.check ('Identity', i.tolist (), '<br>');
						var a = num.array (list ([list ([list ([1, 1, 2, 3]), list ([4, 5, 6, 7]), list ([8, 9, 10, 12])]), list ([list ([100, 101, 102, 103]), list ([104, 105, 106, 107]), list ([108, 109, 110, 112])])]));
						autoTester.check ('Matrix a', a.tolist (), '<br>');
						autoTester.check ('Transpose of a', a.transpose ().tolist (), '<br>');
						var b = num.array (list ([list ([list ([2, 2, 4, 6]), list ([8, 10, 12, 14]), list ([16, 18, 20, 24])]), list ([list ([200, 202, 204, 206]), list ([208, 210, 212, 214]), list ([216, 218, 220, 224])])]));
						autoTester.check ('Matrix b', b.tolist (), '<br>');
						autoTester.check ('Permutation of b', b.transpose (tuple ([2, 1, 0])).tolist (), '<br>');
						var c = num.array (list ([list ([1, 2, 3, 4]), list ([5, 6, 7, 8]), list ([9, 10, 11, 12])]), 'int32');
						autoTester.check ('Shape strides c', tuple (c.shape), tuple (c.strides), '<br>');
						autoTester.check ('Matrix c', c.tolist (), '<br>');
						var ct = c.transpose ();
						autoTester.check ('Shape strids ct', tuple (ct.shape), tuple (ct.strides), '<br>');
						autoTester.check ('Transpose of c', ct.tolist (), '<br>');
						var d = num.array (list ([list ([13.1, 14]), list ([15, 16]), list ([17, 18]), list ([19, 20])]), 'int32');
						autoTester.check ('Matrix d', d.tolist (), '<br>');
						autoTester.check ('Permutation of d', d.transpose (tuple ([1, 0])).tolist (), '<br>');
						a.__setitem__ ([1, 0, 2], 77777);
						var el = b.__getitem__ ([1, 2, 3]);
						var sum = __add__ (a, b);
						var dif = __sub__ (a, b);
						var prod = __mul__ (a, b);
						var quot = __div__ (a, b);
						var dot = __matmul__ (c, d);
						autoTester.check ('El a [1, 2, 3] alt', a.tolist (), '<br>');
						autoTester.check ('El b [1, 2, 3]', el, '<br>');
						autoTester.check ('Matrix sum', sum.tolist (), '<br>');
						autoTester.check ('Matrix difference', dif.tolist (), '<br>');
						autoTester.check ('Matrix product', prod.tolist (), '<br>');
						autoTester.check ('Matrix quotient', quot.tolist (), '<br>');
						autoTester.check ('Matrix dotproduct', dot.tolist (), '<br>');
					};
					__pragma__ ('<use>' +
						'numscrypt' +
					'</use>')
					__pragma__ ('<all>')
						__all__.run = run;
					__pragma__ ('</all>')
				}
			}
		}
	);
