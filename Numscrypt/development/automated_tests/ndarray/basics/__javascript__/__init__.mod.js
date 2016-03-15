	__nest__ (
		__all__,
		'basics', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					if (__envir__.executorName == __envir__.transpilerName) {
						var num =  __init__ (__world__.org.transcrypt.numscrypt);
					}
					var run = function (autoTester) {
						var a = num.array (list ([list ([list ([0, 1, 2, 3]), list ([4, 5, 6, 7]), list ([8, 9, 10, 12])]), list ([list ([100, 101, 102, 103]), list ([104, 105, 106, 107]), list ([108, 109, 110, 112])])]));
						autoTester.check (a.tolist ());
						var z = num.zeros (tuple ([4, 3, 2]), 'int32');
						autoTester.check (z.tolist ());
						var z = num.ones (tuple ([1, 2, 3]));
						autoTester.check (z.astype ('int32').tolist ());
						var z = num.identity (3, 'int32');
						autoTester.check (z.tolist ());
					};
					__pragma__ ('<use>' +
						'org.transcrypt.numscrypt' +
					'</use>')
					__pragma__ ('<all>')
						__all__.run = run;
					__pragma__ ('</all>')
				}
			}
		}
	);
