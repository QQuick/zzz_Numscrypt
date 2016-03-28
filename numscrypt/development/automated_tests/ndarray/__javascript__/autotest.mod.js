	(function () {
		var a_linalg = {};
		var basics = {};
		var org = {};
		__nest__ (org, 'transcrypt.autotester', __init__ (__world__.org.transcrypt.autotester));
		__nest__ (basics, '', __init__ (__world__.basics));
		__nest__ (a_linalg, '', __init__ (__world__.a_linalg));
		var autoTester = org.transcrypt.autotester.AutoTester ();
		autoTester.run (basics, 'basics');
		autoTester.run (a_linalg, 'a_linalg');
		autoTester.done ();
		__pragma__ ('<use>' +
			'a_linalg' +
			'basics' +
			'org.transcrypt.autotester' +
		'</use>')
		__pragma__ ('<all>')
			__all__.autoTester = autoTester;
		__pragma__ ('</all>')
	}) ();
