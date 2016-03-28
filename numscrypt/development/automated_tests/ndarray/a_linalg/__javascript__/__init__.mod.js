	__nest__ (
		__all__,
		'a_linalg', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					if (__envir__.executor_name == __envir__.transpiler_name) {
						var num =  __init__ (__world__.numscrypt);
						var linalg =  __init__ (__world__.numscrypt.linalg);
					}
					var run = function (autoTester) {
						var a = num.array (list ([list ([0, -2, -1]), list ([2, 1, 3]), list ([1, 1, 2])]));
						autoTester.check ('Matrix a', a.astype ('int32').tolist (), '<br>');
						var ai = linalg.inv (a);
						autoTester.check ('Matrix ai', ai.astype ('int32').tolist (), '<br>');
						var id = __matmul__ (a, ai);
						autoTester.check ('a @ ai', id.astype ('int32').tolist (), '<br>');
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
