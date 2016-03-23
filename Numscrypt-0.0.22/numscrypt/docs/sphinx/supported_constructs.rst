Systematic code examples: a guided tour of Numscrypt
=====================================================

One ready-to-run code example is worth more than ten lengthy descriptions. The *autotest and demo suite*, that is part of the distribution, is a collection of sourcecode fragments called *testlets*. These testlets are used for automated regression testing of Numscrypt against CPython.
Since they systematically cover all the library constructs, they are also very effective as a learning tool. The testlets are arranged alphabetically by subject.

.. literalinclude:: ../../development/automated_tests/ndarray/autotest.py
	:tab-width: 4
	:caption: Autotest: Numcrypt autotest demo suite

Basics: creating and using arrays
---------------------------------

.. literalinclude:: ../../development/automated_tests/ndarray/basics/__init__.py
	:tab-width: 4
	:caption: Testlet: basics
