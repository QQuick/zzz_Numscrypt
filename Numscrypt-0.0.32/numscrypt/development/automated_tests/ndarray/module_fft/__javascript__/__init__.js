"use strict";
// Transcrypt'ed from Python, 2016-08-26 13:39:57
function __init__ () {
	var __all__ = {};
	var __world__ = __all__;
	
	// Nested object creator, part of the nesting may already exist and have attributes
	var __nest__ = function (headObject, tailNames, value) {
		// In some cases this will be a global object, e.g. 'window'
		var current = headObject;
		
		if (tailNames != '') {	// Split on empty string doesn't give empty list
			// Find the last already created object in tailNames
			var tailChain = tailNames.split ('.');
			var firstNewIndex = tailChain.length;
			for (var index = 0; index < tailChain.length; index++) {
				if (!current.hasOwnProperty (tailChain [index])) {
					firstNewIndex = index;
					break;
				}
				current = current [tailChain [index]];
			}
			
			// Create the rest of the objects, if any
			for (var index = firstNewIndex; index < tailChain.length; index++) {
				current [tailChain [index]] = {};
				current = current [tailChain [index]];
			}
		}
		
		// Insert it new attributes, it may have been created earlier and have other attributes
		for (var attrib in value) {
			current [attrib] = value [attrib];			
		}		
	};
	__all__.__nest__ = __nest__;
	
	// Initialize module if not yet done and return its globals
	var __init__ = function (module) {
		if (!module.__inited__) {
			module.__all__.__init__ (module.__all__);
			module.__inited__ = true;
		}
		return module.__all__;
	};
	__all__.__init__ = __init__;
	
	// Since we want to assign functions, a = b.f should make b.f produce a bound function
	// So __get__ should be called by a property rather then a function
	// Factory __get__ creates one of three curried functions for func
	// Which one is produced depends on what's to the left of the dot of the corresponding JavaScript property
	var __get__ = function (self, func, quotedFuncName) {
		if (self) {
			if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {			// Object before the dot
				if (quotedFuncName) {									// Memoize call since fcall is on, by installing bound function in instance
					Object.defineProperty (self, quotedFuncName, {		// Will override the non-own property, next time it will be called directly
						value: function () {							// So next time just call curry function that calls function
							var args = [] .slice.apply (arguments);
							return func.apply (null, [self] .concat (args));
						},				
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
				return function () {									// Return bound function, code dupplication for efficiency if no memoizing
					var args = [] .slice.apply (arguments);				// So multilayer search prototype, apply __get__, call curry func that calls func
					return func.apply (null, [self] .concat (args));
				};
			}
			else {														// Class before the dot
				return func;											// Return static method
			}
		}
		else {															// Nothing before the dot
			return func;												// Return free function
		}
	}
	__all__.__get__ = __get__;
			
	// Class creator function
	var __class__ = function (name, bases, extra) {
		// Create class functor
		var cls = function () {
			var args = [] .slice.apply (arguments);
			return cls.__new__ (args);
		};
		
		// Copy methods, properties and static attributes from base classes to new class object
		for (var index = bases.length - 1; index >= 0; index--) {	// Reversed order, since class vars of first base should win
			var base = bases [index];
			for (var attrib in base) {
				var descrip = Object.getOwnPropertyDescriptor (base, attrib);
				Object.defineProperty (cls, attrib, descrip);
			}
		}
		
		// Add class specific attributes to class object
		cls.__name__ = name;
		cls.__bases__ = bases;
		
		// Add own methods, properties and static attributes to class object
		for (var attrib in extra) {
			var descrip = Object.getOwnPropertyDescriptor (extra, attrib);
			Object.defineProperty (cls, attrib, descrip);
		}
				
		// Return class object
		return cls;
	};
	__all__.__class__ = __class__;
	
	// Create mother of all classes		
	var object = __all__.__class__ ('object', [], {
		__init__: function (self) {},
			
		__name__: 'object',
		__bases__: [],
			
		// Object creator function is inherited by all classes (so in principle it could be made global)
		__new__: function (args) {	// Args are just the constructor args		
			// In JavaScript the Python class is the prototype of the Python object
			// In this way methods and static attributes will be available both with a class and an object before the dot
			// The descriptor produced by __get__ will return the right method flavor
			var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
			
			// Call constructor
			this.__init__.apply (null, [instance] .concat (args));
			
			// Return instance			
			return instance;
		}	
	});
	__all__.object = object;
	
	// Define __pragma__ to preserve '<all>' and '</all>', since it's never generated as a function, must be done early, so here
	var __pragma__ = function () {};
	__all__.__pragma__ = __pragma__;
	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __Envir__ = __class__ ('__Envir__', [object], {
						get __init__ () {return __get__ (this, function (self) {
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.5.214';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var Exception = __class__ ('Exception', [object], {
						get __init__ () {return __get__ (this, function (self) {
							var args = tuple ([].slice.apply (arguments).slice (1));
							self.args = args;
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.args)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.args)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.args) > 1) {
								return str (tuple (self.args));
							}
							else {
								if (len (self.args)) {
									return str (self.args [0]);
								}
								else {
									return '';
								}
							}
						});}
					});
					var StopIteration = __class__ ('StopIteration', [object], {
						get __init__ () {return __get__ (this, function (self) {
							Exception.__init__ (self, 'Iterator exhausted');
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .__class__ == __kwargdict__)) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .__class__ == __kwargdict__)) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return key (a) > key (b);
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .__class__ == __kwargdict__)) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .__class__ == __kwargdict__)) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (type (iterable) == dict) {
							var result = copy (iterable.keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
								var item = __iterable0__ [__index0__];
								__accu0__.append (func (item));
							}
							return __accu0__;
						} ();
					};
					var filter = function (func, iterable) {
						return function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
								var item = __iterable0__ [__index0__];
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						} ();
					};
					var complex = __class__ ('complex', [object], {
						get __init__ () {return __get__ (this, function (self, real, imag) {
							self.real = real;
							self.imag = imag;
						});},
						get __neg__ () {return __get__ (this, function (self) {
							return complex (-(self.real), -(self.imag));
						});},
						get __exp__ () {return __get__ (this, function (self) {
							var modulus = Math.exp (self.real);
							return complex (modulus * Math.cos (self.imag), modulus * Math.sin (self.imag));
						});},
						get __log__ () {return __get__ (this, function (self) {
							return complex (Math.log (Math.sqrt (self.real * self.real + self.imag * self.imag)), Math.atan2 (self.imag, self.real));
						});},
						get __pow__ () {return __get__ (this, function (self, other) {
							return self.__log__ ().__mul__ (other).__exp__ ();
						});},
						get __rpow__ () {return __get__ (this, function (self, real) {
							return self.__mul__ (Math.log (real)).__exp__ ();
						});},
						get __mul__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real * other, self.imag * other);
							}
							else {
								return complex (self.real * other.real - self.imag * other.imag, self.real * other.imag + self.imag * other.real);
							}
						});},
						get __rmul__ () {return __get__ (this, function (self, real) {
							return complex (self.real * real, self.imag * real);
						});},
						get __div__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real / other, self.imag / other);
							}
							else {
								var denom = other.real * other.real + other.imag * other.imag;
								return complex ((self.real * other.real + self.imag * other.imag) / denom, (self.imag * other.real - self.real * other.imag) / denom);
							}
						});},
						get __rdiv__ () {return __get__ (this, function (self, real) {
							var denom = self.real * self.real;
							return complex ((real * self.real) / denom, (real * self.imag) / denom);
						});},
						get __add__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real + other, self.imag);
							}
							else {
								return complex (self.real + other.real, self.imag + other.imag);
							}
						});},
						get __radd__ () {return __get__ (this, function (self, real) {
							return complex (self.real + real, self.imag);
						});},
						get __sub__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real - other, self.imag);
							}
							else {
								return complex (self.real - other.real, self.imag - other.imag);
							}
						});},
						get __rsub__ () {return __get__ (this, function (self, real) {
							return complex (real - self.real, -(self.imag));
						});},
						get __repr__ () {return __get__ (this, function (self) {
							return '({}{}{}j)'.format (self.real, (self.imag >= 0 ? '+' : ''), self.imag);
						});},
						get __str__ () {return __get__ (this, function (self) {
							return __repr__ (self).__getslice__ (1, -(1), 1);
						});}
					});
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						get __init__ () {return __get__ (this, function (self) {
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.buffer = '';
								self.element.style.overflowX = 'auto';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							if (self.element) {
								self.buffer = '{}{}{}'.format (self.buffer, sep.join (function () {
									var __accu0__ = [];
									var __iterable0__ = args;
									for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
										var arg = __iterable0__ [__index0__];
										__accu0__.append (str (arg));
									}
									return __accu0__;
								} ()), end).__getslice__ (-(4096), null, 1);
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join (function () {
									var __accu0__ = [];
									var __iterable0__ = args;
									for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
										var arg = __iterable0__ [__index0__];
										__accu0__.append (str (arg));
									}
									return __accu0__;
								} ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}_'.format (question), __kwargdict__ ({end: ''}));
							try {
								var answer = window.prompt (question);
							}
							catch (__except0__) {
								console.log ('Error: Blocking input not yet implemented outside browser');
							}
							self.buffer = self.buffer.__getslice__ (0, -(1), 1);
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.Exception = Exception;
						__all__.StopIteration = StopIteration;
						__all__.ValueError = ValueError;
						__all__.__Terminal__ = __Terminal__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.complex = complex;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);

	// Initialize non-nested modules __base__ and __standard__ and make its names available directly and via __all__
	// It can't do that itself, because it is a regular Python module
	// The compiler recognizes its their namesand generates them inline rather than nesting them
	// In this way it isn't needed to import them everywhere
	 	
	// __base__
	
	__nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
	var __envir__ = __all__.__envir__;

	// __standard__
	
	__nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
	
	var Exception = __all__.Exception;
	var StopIteration = __all__.StopIteration;
	var ValueError = __all__.ValueError;
	var AssertionError = __all__.AssertionError;
	
	var __sort__ = __all__.__sort__;
	var sorted = __all__.sorted;
	
	var map = __all__.map;
	var filter = __all__.filter;
	
	var complex = __all__.complex;
	
	__all__.print = __all__.__terminal__.print;
	__all__.input = __all__.__terminal__.input;
	
	var print = __all__.print;
	var input = __all__.input;

	// Complete __envir__, that was created in __base__, for non-stub mode
	__envir__.executor_name = __envir__.transpiler_name;
	
	// Make make __main__ available in browser
	var __main__ = {__file__: ''};
	__all__.main = __main__;
	
	// Define current exception, there's at most one exception in the air at any time
	var __except__ = null;
	__all__.__except__ = __except__;
		
	// Define recognizable dictionary for **kwargs parameter
	var __kwargdict__ = function (anObject) {
		anObject.__class__ = __kwargdict__;	// This class needs no __name__
		anObject.constructor = Object;
		return anObject;
	}
	__all__.___kwargdict__ = __kwargdict__;
	
	// Property installer function, no member since that would bloat classes
	var property = function (getter, setter) {	// Returns a property descriptor rather than a property
		if (!setter) {	// ??? Make setter optional instead of dummy?
			setter = function () {};
		}
		return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
	}
	__all__.property = property;
	
	// Assert function, call to it only generated when compiling with --dassert option
	function assert (condition, message) {
		if (!condition) {
			if (message != undefined) {
				throw AssertionError (message);
			}
			else {
				throw AssertionError ();
			}
		}
	}
	
	__all__.assert = assert;
	
	var __merge__ = function (object0, object1) {
		var result = {};
		for (var attrib in object0) {
			result [attrib] = object0 [attrib];
		}
		for (var attrib in object1) {
			result [attrib] = object1 [attrib];
		}
		return result;
	}
	__all__.__merge__ = __merge__;
	
	/* Not needed anymore?
	// Make console.log understand apply
	console.log.apply = function () {
		print ([] .slice.apply (arguments) .slice (1));
	};
	*/

	// Manipulating attributes by name
	
	var dir = function (obj) {
		var aList = [];
		for (var aKey in obj) {
			aList.push (aKey);
		}
		aList.sort ();
		return aList;
	}
	
	var setattr = function (obj, name, value) {
		obj [name] = value;
	};
		
	__all__.setattr = setattr;
	
	var getattr = function (obj, name) {
		return obj [name];
	};
	
	__all__.getattr= getattr
	
	var hasattr = function (obj, name) {
		return name in obj;
	};
	__all__.hasattr = hasattr;
	
	var delattr = function (obj, name) {
		delete obj [name];
	};
	__all__.delattr = (delattr);
	
	// The __in__ function, used to mimic Python's 'in' operator
	// In addition to CPython's semantics, the 'in' operator is also allowed to work on objects, avoiding a counterintuitive separation between Python dicts and JavaScript objects
	// In general many Transcrypt compound types feature a deliberate blend of Python and JavaScript facilities, facilitating efficient integration with JavaScript libraries
	// If only Python objects and Python dicts are dealt with in a certain context, the more pythonic 'hasattr' is preferred for the objects as opposed to 'in' for the dicts
	var __in__ = function (element, container) {
		if (type (container) == dict) {
			return container.keys () .indexOf (element) > -1;                                   // The keys of parameter 'element' are in an array
		}
		else {
			return container.indexOf ? container.indexOf (element) > -1 : element in container; // Parameter 'element' itself is an array, string or object
		}
	}
	__all__.__in__ = __in__;
	
	// Find out if an attribute is special
	var __specialattrib__ = function (attrib) {
		return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
	}
	__all__.__specialattrib__ = __specialattrib__;
		
	// Len function for any object
	var len = function (anObject) {
		if (anObject) {
			var l = anObject.length;
			if (l == undefined) {
				var result = 0;
				for (var attrib in anObject) {
					if (!__specialattrib__ (attrib)) {
						result++;
					}
				}
				return result;
			}
			else {
				return l;
			}
		}
		else {
			return 0;
		}
	}
	__all__.len = len;
	
	var bool = function (any) {	// Subtly different from __ (any), always truly returns a bool, rather than something truthy or falsy
		return typeof any == 'boolean' ? any : typeof any == 'number' ? any != 0 : len (any) ? true : false;
	}
	bool.__name__ = 'bool'	// So it can be used as a type with a name
	__all__.bool = bool;
	
	var float = function (any) {
		if (isNaN (any)) {
			throw ('ValueError');	// !!! Turn into real value error
		}
		else {
			return +any;
		}
	}
	float.__name__ = 'float'
	__all__.float = float;
	
	var int = function (any) {
		return float (any) | 0
	}
	int.__name__ = 'int';
	__all__.int = int;
	
	var type = function (anObject) {
		try {
			var result = anObject.__class__;
			return result;
		}
		catch (exception) {
			var aType = typeof anObject;
			if (aType == 'boolean') {
				return bool;
			}
			else if (aType == 'number') {
				if (anObject % 1 == 0) {
					return int;
				}
				else {
					return float;
				}				
			}
			else {
				return aType;
			}
		}
	}
	__all__.type = type;
	
	var isinstance = function (anObject, classinfo) {
		function isA (queryClass) {
			if (queryClass == classinfo) {
				return true;
			}
			for (var index = 0; index < queryClass.__bases__.length; index++) {
				if (isA (queryClass.__bases__ [index], classinfo)) {
					return true;
				}
			}
			return false;
		}
		try {
			return '__class__' in anObject ? isA (anObject.__class__) : anObject instanceof classinfo;
		}
		catch (exception) {
			console.log (exception);
			console.dir (anObject);
		}
	};
	__all__.isinstance = isinstance;
	
	// Truthyness conversion
	function __ (any) {	// Subtly different from bool (any), __ ([1, 2, 3]) returns [1, 2, 3], needed for nonempty selection: l = list1 or list2
		return ['boolean', 'number'] .indexOf (typeof (any)) >= 0 ? any : len (any) ? any : false;
	}
	__all__.__ = __;
	
	// Repr function uses __repr__ method, then __str__ then toString
	var repr = function (anObject) {
		try {
			return anObject.__repr__ ();
		}
		catch (exception) {
			try {
				return anObject.__str__ ();
			}
			catch (exception) {	// It was a dict in Python, so an Object in JavaScript
				try {
					if (anObject.constructor == Object) {
						var result = '{';
						var comma = false;
						for (var attrib in anObject) {
							if (!__specialattrib__ (attrib)) {
								if (attrib.isnumeric ()) {
									var attribRepr = attrib;				// If key can be interpreted as numerical, we make it numerical 
								}											// So we accept that '1' is misrepresented as 1
								else {
									var attribRepr = '\'' + attrib + '\'';	// Alpha key in dict
								}
								
								if (comma) {
									result += ', ';
								}
								else {
									comma = true;
								}
								try {
									result += attribRepr + ': ' + anObject [attrib] .__repr__ ();
								}
								catch (exception) {
									result += attribRepr + ': ' + anObject [attrib] .toString ();
								}
							}
						}
						result += '}';
						return result;					
					}
					else {
						return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
					}
				}
				catch (exception) {
					console.log ('ERROR: Could not evaluate repr (<object of type ' + typeof anObject + '>)');
					return '???';
				}
			}
		}
	}
	__all__.repr = repr;
	
	// Char from Unicode or ASCII
	var chr = function (charCode) {
		return String.fromCharCode (charCode);
	}
	__all__.chr = chr;

	// Unicode or ASCII from char
	var ord = function (aChar) {
		return aChar.charCodeAt (0);
	}
	__all__.org = ord;
	
	// Maximum of n numbers
	var max = Math.max;
	__all__.max = max;
	
	// Minimum of n numbers
	var min = Math.min;
	__all__.min = min;
	
	// Absolute value
	var abs = function (x) {
		try {
			return Math.abs (x);
		}
		catch (exception) {
			return Math.sqrt (x.real * x.real + x.imag * x.imag);
		}
	}
	
	// Bankers rounding
	var round = function (number, ndigits) {
		if (ndigits) {
			var scale = Math.pow (10, ndigits);
			number *= scale;
		}
			
		var rounded = Math.round (number);
		if (rounded - number == 0.5 && rounded % 2) {	// Has rounded up to odd, should have rounded down to even
			rounded -= 1;
		}
			
		if (ndigits) {
			rounded /= scale;
		}
		
		return rounded
 	}
	__all__.round = round;
		
	// Iterator protocol functions
	
	function wrap_py_next () {		// Add as 'next' method to make Python iterator JavaScript compatible
		var result = this.__next__ ();
		return {value: result, done: result == undefined};		
	}
	
	function wrap_js_next () {		// Add as '__next__' method to make JavaScript iterator Python compatible
		var result = this.next ();
		if (result.done) {
			throw StopIteration ();
		}
		else {
			return result.value;
		}
	}
	
	function py_iter (iterable) {	// Produces universal iterator with Python '__next__' as well as JavaScript 'next'
		if ('__iter__' in iterable) {	// It's a Python iterable (incl. JavaScript Arrays and strings)
			var iterator = iterable.__iter__ ();
			iterator.next = wrap_py_next;
			return iterator;
		}
		else if ('selector' in iterable) { // Assume it's a JQuery iterator
			var iterator = list (iterable) .__iter__ ();
			iterator.next = wrap_py_next;
			return iterator;
		}
		else if ('next' in iterable) {	// It's a JavaScript generator
			// It should have an iterator field, but doesn't in Chrome
			// So we just return the generator itself, which is both an iterable and an iterator
			iterable.__next__ = wrap_js_next;
			return iterable;
		}
		else {
			return null;
		}
	}
	__all__.py_iter = py_iter;
	
	function py_next (iterator) {				// Called only in a Python context, could receive Python or JavaScript iterator
		try {									// Primarily assume Python iterator, for max speed
			var result = iterator.__next__ ();
		}
		catch (exception) {						// JavaScript iterators are the exception here
			var result = iterator.next ();
			if (result.done) {
				throw StopIteration ();
			}
			else {
				return result.value;
			}
		}	
		if (result == undefined) {
			throw StopIteration ();
		}
		return result;
	}
	__all__.py_next = py_next;
	
	function __SeqIterator__ (iterable) {
		this.iterable = iterable;
		this.index = 0;
	}
	
	__all__.__SeqIterator__ = __SeqIterator__;
	
	__SeqIterator__.prototype.__iter__ = function () {
		return this;
	}
	
	__SeqIterator__.prototype.__next__ = function () {
		return this.iterable [this.index++];
	}
	
	__SeqIterator__.prototype.next = wrap_py_next;
	
	function __KeyIterator__ (iterable) {
		this.iterable = iterable;
		this.index = 0;
	}

	__all__.__KeyIterator__ = __KeyIterator__;
	
	__KeyIterator__.prototype.__iter__ = function () {
		return this;
	}
	
	__KeyIterator__.prototype.__next__ = function () {
		return this.iterable.keys () [this.index++];
	}
			
	__KeyIterator__.prototype.next = wrap_py_next;
	
	// Reversed function for arrays
	var py_reversed = function (iterable) {
		iterable = iterable.slice ();
		iterable.reverse ();
		return iterable;
	}
	__all__.py_reversed = py_reversed;
	
	// Zip method for arrays
	var zip = function () {
		var args = [] .slice.call (arguments);
		var shortest = args.length == 0 ? [] : args.reduce (	// Find shortest array in arguments
			function (array0, array1) {
				return array0.length < array1.length ? array0 : array1;
			}
		);
		return shortest.map (					// Map each element of shortest array
			function (current, index) {			// To the result of this function
				return args.map (				// Map each array in arguments
					function (current) {		// To the result of this function
						return current [index]; // Namely it's index't entry
					}
				);
			}
		);
	}
	__all__.zip = zip;
	
	// Range method, returning an array
	function range (start, stop, step) {
		if (stop == undefined) {
			// one param defined
			stop = start;
			start = 0;
		}
		if (step == undefined) {
			step = 1;
		}
		if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
			return [];
		}
		var result = [];
		for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
			result.push(i);
		}
		return result;
	};
	__all__.range = range;
	
	// Any, all and sum
	
	function any (iterable) {
		for (var index = 0; index < iterable.length; index++) {
			if (bool (iterable [index])) {
				return true;
			}
		}
		return false;
	}
	function all (iterable) {
		for (var index = 0; index < iterable.length; index++) {
			if (! bool (iterable [index])) {
				return false;
			}
		}
		return true;
	}
	function sum (iterable) {
		var result = 0;
		for (var index = 0; index < iterable.length; index++) {
			result += iterable [index];
		}
		return result;
	}

	__all__.any = any;
	__all__.all = all;
	__all__.sum = sum;
	
	// Enumerate method, returning a zipped list
	function enumerate (iterable) {
		return zip (range (len (iterable)), iterable);
	}
	__all__.enumerate = enumerate;
		
	// Shallow and deepcopy
	
	function copy (anObject) {
		if (anObject == null || typeof anObject == "object") {
			return anObject;
		}
		else {
			var result = {}
			for (var attrib in obj) {
				if (anObject.hasOwnProperty (attrib)) {
					result [attrib] = anObject [attrib];
				}
			}
			return result;
		}
	}
	__all__.copy = copy;
	
	function deepcopy (anObject) {
		if (anObject == null || typeof anObject == "object") {
			return anObject;
		}
		else {
			var result = {}
			for (var attrib in obj) {
				if (anObject.hasOwnProperty (attrib)) {
					result [attrib] = deepcopy (anObject [attrib]);
				}
			}
			return result;
		}
	}
	__all__.deepcopy = deepcopy;
		
	// List extensions to Array
	
	function list (iterable) {										// All such creators should be callable without new
		var instance = iterable ? [] .slice.apply (iterable) : [];	// Spread iterable, n.b. array.slice (), so array before dot
		// Sort is the normal JavaScript sort, Python sort is a non-member function
		return instance;
	}
	__all__.list = list;
	Array.prototype.__class__ = list;	// All arrays are lists (not only if constructed by the list ctor), unless constructed otherwise
	list.__name__ = 'list';
	
	/*
	Array.from = function (iterator) { // !!! remove
		result = [];
		for (item of iterator) {
			result.push (item);
		}
		return result;
	}
	*/
	
	Array.prototype.__iter__ = function () {
		return new __SeqIterator__ (this);
	}
	
	Array.prototype.__getslice__ = function (start, stop, step) {
		if (start < 0) {
			start = this.length + start;
		}
		
		if (stop == null) {
			stop = this.length;
		}
		else if (stop < 0) {
			stop = this.length + stop;
		}
		
		var result = list ([]);
		for (var index = start; index < stop; index += step) {
			result.push (this [index]);
		}
		
		return result;
	}
		
	Array.prototype.__setslice__ = function (start, stop, step, source) {
		if (start < 0) {
			start = this.length + start;
		}
			
		if (stop == null) {
			stop = this.length;
		}
		else if (stop < 0) {
			stop = this.length + stop;
		}
			
		if (step == null) {	// Assign to 'ordinary' slice, replace subsequence
			Array.prototype.splice.apply (this, [start, stop - start] .concat (source)) 
		}
		else {				// Assign to extended slice, replace designated items one by one
			var sourceIndex = 0;
			for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
				this [targetIndex] = source [sourceIndex++];
			}
		}
	}
	
	Array.prototype.__repr__ = function () {
		if (this.__class__ == set && !this.length) {
			return 'set()';
		}
		
		var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
		
		for (var index = 0; index < this.length; index++) {
			if (index) {
				result += ', ';
			}
			try {
				result += this [index] .__repr__ ();
			}
			catch (exception) {
				result += this [index] .toString ();
			}
		}
		
		if (this.__class__ == tuple && this.length == 1) {
			result += ',';
		}
		
		result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
		return result;
	};
	
	Array.prototype.__str__ = Array.prototype.__repr__;
	
	Array.prototype.append = function (element) {
		this.push (element);
	};

	Array.prototype.clear = function () {
		this.length = 0;
	};
	
	Array.prototype.extend = function (aList) {
		this.push.apply (this, aList);
	};
	
	Array.prototype.insert = function (index, element) {
		this.splice (index, 0, element);
	};

	Array.prototype.remove = function (element) {
		var index = this.indexOf (element);
		if (index == -1) {
			throw ('KeyError');
		}
		this.splice (index, 1);
	};

	Array.prototype.index = function (element) {
		return this.indexOf (element)
	};
	
	Array.prototype.py_pop = function (index) {
		if (index == undefined) {
			return this.pop ()	// Remove last element
		}
		else {
			return this.splice (index, 1) [0];
		}
	};	
	
	Array.prototype.py_sort = function () {
		__sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));	// Can't work directly with arguments
		// Python params: (iterable, key = None, reverse = False)
		// py_sort is called with the Transcrypt kwargs mechanism, and just passes the params on to __sort__
		// __sort__ is def'ed with the Transcrypt kwargs mechanism
	};
	
	Array.prototype.__add__ = function (aList) {
		return list (this.concat (aList))
	}
	
	Array.prototype.__mul__ = function (scalar) {
		var result = this;
		for (var i = 1; i < scalar; i++) {
			result = result.concat (this);
		}
		return result;
	}
	
	Array.prototype.__rmul__ = Array.prototype.__mul__;
		
	// Tuple extensions to Array
	
	function tuple (iterable) {
		var instance = iterable ? [] .slice.apply (iterable) : [];
		instance.__class__ = tuple;	// Not all arrays are tuples
		return instance;
	}
	__all__.tuple = tuple;
	tuple.__name__ = 'tuple';
	
	// Set extensions to Array
	// N.B. Since sets are unordered, set operations will occasionally alter the 'this' array by sorting it
		
	function set (iterable) {
		var instance = [];
		if (iterable) {
			for (var index = 0; index < iterable.length; index++) {
				instance.add (iterable [index]);
			}
			
			
		}
		instance.__class__ = set;	// Not all arrays are sets
		return instance;
	}
	__all__.set = set;
	set.__name__ = 'set';
	
	Array.prototype.__bindexOf__ = function (element) {	// Used to turn O (n^2) into O (n log n)
	// Since sorting is lex, compare has to be lex. This also allows for mixed lists
	
		element += '';
	
		var mindex = 0;
		var maxdex = this.length - 1;
			 
		while (mindex <= maxdex) {
			var index = (mindex + maxdex) / 2 | 0;
			var middle = this [index] + '';
	 
			if (middle < element) {
				mindex = index + 1;
			}
			else if (middle > element) {
				maxdex = index - 1;
			}
			else {
				return index;
			}
		}
	 
		return -1;
	}
	
	Array.prototype.add = function (element) {		
		if (this.indexOf (element) == -1) {	// Avoid duplicates in set
			this.push (element);
		}
	};
	
	Array.prototype.discard = function (element) {
		var index = this.indexOf (element);
		if (index != -1) {
			this.splice (index, 1);
		}
	};
	
	Array.prototype.isdisjoint = function (other) {
		this.sort ();
		for (var i = 0; i < other.length; i++) {
			if (this.__bindexOf__ (other [i]) != -1) {
				return false;
			}
		}
		return true;
	};
	
	Array.prototype.issuperset = function (other) {
		this.sort ();
		for (var i = 0; i < other.length; i++) {
			if (this.__bindexOf__ (other [i]) == -1) {
				return false;
			}
		}
		return true;
	};
	
	Array.prototype.issubset = function (other) {
		return set (other.slice ()) .issuperset (this);	// Sort copy of 'other', not 'other' itself, since it may be an ordered sequence
	};
	
	Array.prototype.union = function (other) {
		var result = set (this.slice () .sort ());
		for (var i = 0; i < other.length; i++) {
			if (result.__bindexOf__ (other [i]) == -1) {
				result.push (other [i]);
			}
		}
		return result;
	};
	
	Array.prototype.intersection = function (other) {
		this.sort ();
		var result = set ();
		for (var i = 0; i < other.length; i++) {
			if (this.__bindexOf__ (other [i]) != -1) {
				result.push (other [i]);
			}
		}
		return result;
	};
	
	Array.prototype.difference = function (other) {
		var sother = set (other.slice () .sort ());
		var result = set ();
		for (var i = 0; i < this.length; i++) {
			if (sother.__bindexOf__ (this [i]) == -1) {
				result.push (this [i]);
			}
		}
		return result;
	};
	
	Array.prototype.symmetric_difference = function (other) {
		return this.union (other) .difference (this.intersection (other));
	};
	
	Array.prototype.update = function () {	// O (n)
		var updated = [] .concat.apply (this.slice (), arguments) .sort ();		
		this.clear ();
		for (var i = 0; i < updated.length; i++) {
			if (updated [i] != updated [i - 1]) {
				this.push (updated [i]);
			}
		}
	};
	
	Array.prototype.__eq__ = function (other) {	// Also used for list
		if (this.length != other.length) {
			return false;
		}
		if (this.__class__ == set) {
			this.sort ();
			other.sort ();
		}	
		for (var i = 0; i < this.length; i++) {
			if (this [i] != other [i]) {
				return false;
			}
		}
		return true;
	};
	
	Array.prototype.__ne__ = function (other) {	// Also used for list
		return !this.__eq__ (other);
	}
		
	Array.prototype.__le__ = function (other) {
		return this.issubset (other);
	}
		
	Array.prototype.__ge__ = function (other) {
		return this.issuperset (other);
	}
		
	Array.prototype.__lt__ = function (other) {
		return this.issubset (other) && !this.issuperset (other);
	}
		
	Array.prototype.__gt__ = function (other) {
		return this.issuperset (other) && !this.issubset (other);
	}
	
	// Dict extensions to object
	
	function __keyIterator__ () {
		return new __KeyIterator__ (this);
	}
	
	function __keys__ () {
		var keys = []
		for (var attrib in this) {
			if (!__specialattrib__ (attrib)) {
				keys.push (attrib);
			}     
		}
		return keys;
	}
		
	function __items__ () {
		var items = []
		for (var attrib in this) {
			if (!__specialattrib__ (attrib)) {
				items.push ([attrib, this [attrib]]);
			}     
		}
		return items;
	}
		
	function __del__ (key) {
		delete this [key];
	}
	
	function __clear__ () {
		for (var attrib in this) {
			delete this [attrib];
		}
	}
	
	function __setdefault__ (aKey, aDefault) {
		var result = this [aKey];
		if (result != undefined) {
			return result;
		}
		var val = aDefault == undefined ? null : aDefault;
		this [aKey] = val;
		return val;
	}
	
	function __pop__ (aKey, aDefault) {
		var result = this [aKey];
		if (result != undefined) {
			delete this [aKey];
			return result;
		}
		return aDefault;
	}	
	
	function __update__(aDict) {
		for (var aKey in aDict) {
			this [aKey] = aDict [aKey];
		}
	}
	
	function dict (objectOrPairs) {
		if (!objectOrPairs || objectOrPairs instanceof Array) {	// It's undefined or an array of pairs
			var instance = {};
			if (objectOrPairs) {
				for (var index = 0; index < objectOrPairs.length; index++) {
					var pair = objectOrPairs [index];
					instance [pair [0]] = pair [1];
				}
			}
		}
		else {													// It's a JavaScript object literal
			var instance = objectOrPairs;
		}
			
		// Trancrypt interprets e.g. {aKey: 'aValue'} as a Python dict literal rather than a JavaScript object literal
		// So dict literals rather than bare Object literals will be passed to JavaScript libraries
		// Some JavaScript libraries call all enumerable callable properties of an object that's passed to them
		// So the properties of a dict should be non-enumerable
		Object.defineProperty (instance, '__class__', {value: dict, enumerable: false, writable: true});
		Object.defineProperty (instance, 'keys', {value: __keys__, enumerable: false});
		Object.defineProperty (instance, '__iter__', {value: __keyIterator__, enumerable: false});
		Object.defineProperty (instance, 'items', {value: __items__, enumerable: false});		
		Object.defineProperty (instance, 'del', {value: __del__, enumerable: false});
		Object.defineProperty (instance, 'clear', {value: __clear__, enumerable: false});
		Object.defineProperty (instance, 'setdefault', {value: __setdefault__, enumerable: false});
		Object.defineProperty (instance, 'py_pop', {value: __pop__, enumerable: false});
		Object.defineProperty (instance, 'update', {value: __update__, enumerable: false});
		return instance;
	}
	__all__.dict = dict;
	dict.__name__ = 'dict';
	
	// String extensions
	
	function str (stringable) {
		try {
			return stringable.__str__ ();
		}
		catch (exception) {
			return new String (stringable);
		}
	}
	__all__.str = str;	
	
	String.prototype.__class__ = str;	// All strings are str
	str.__name__ = 'str';
	
	String.prototype.__iter__ = function () {
		return new __SeqIterator__ (this);
	}
		
	String.prototype.__repr__ = function () {
		return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .replace ('\t', '\\t') .replace ('\n', '\\n');
	};
	
	String.prototype.__str__ = function () {
		return this;
	};
	
	String.prototype.capitalize = function () {
		return this.charAt (0).toUpperCase () + this.slice (1);
	};
	
	String.prototype.endswith = function (suffix) {
		return suffix == '' || this.slice (-suffix.length) == suffix;
	};
	
	String.prototype.find  = function (sub, start) {
		return this.indexOf (sub, start);
	};
	
	String.prototype.__getslice__ = function (start, stop, step) {
		if (start < 0) {
			start = this.length + start;
		}
		
		if (stop == null) {
			stop = this.length;
		}
		else if (stop < 0) {
			stop = this.length + stop;
		}
		
		var result = '';
		if (step == 1) {
			result = this.substring (start, stop);
		}
		else {
			for (var index = start; index < stop; index += step) {
				result = result.concat (this.charAt(index));
			}
		}
		return result;
	}
	
	// Since it's worthwhile for the 'format' function to be able to deal with *args, it is defined as a property
	// __get__ will produce a bound function if there's something before the dot
	// Since a call using *args is compiled to e.g. <object>.<function>.apply (null, args), the function has to be bound already
	// Otherwise it will never be, because of the null argument
	// Using 'this' rather than 'null' contradicts the requirement to be able to pass bound functions around
	// The object 'before the dot' won't be available at call time in that case, unless implicitly via the function bound to it
	// While for Python methods this mechanism is generated by the compiler, for JavaScript methods it has to be provided manually
	// Call memoizing is unattractive here, since every string would then have to hold a reference to a bound format method
	Object.defineProperty (String.prototype, 'format', {
		get: function () {return __get__ (this, function (self) {
			var args = tuple ([] .slice.apply (arguments).slice (1));			
			var autoIndex = 0;
			return self.replace (/\{(\w*)\}/g, function (match, key) { 
				if (key == '') {
					key = autoIndex++;
				}
				if (key == +key) {	// So key is numerical
					return args [key] == undefined ? match : args [key];
				}
				else {				// Key is a string
					for (var index = 0; index < args.length; index++) {
						// Find first 'dict' that has that key and the right field
						if (typeof args [index] == 'object' && args [index][key] != undefined) {
							return args [index][key];	// Return that field field
						}
					}
					return match;
				}
			});
		});},
		enumerable: true
	});
	
	String.prototype.isnumeric = function () {
		return !isNaN (parseFloat (this)) && isFinite (this);
	};
	
	String.prototype.join = function (strings) {
		return strings.join (this);
	};
	
	String.prototype.lower = function () {
		return this.toLowerCase ();
	};
	
	String.prototype.py_replace = function (old, aNew, maxreplace) {
		return this.split (old, maxreplace) .join (aNew);
	};
	
	String.prototype.lstrip = function () {
		return this.replace (/^\s*/g, '');
	};
	
	String.prototype.rfind = function (sub, start) {
		return this.lastIndexOf (sub, start);
	};
	
	String.prototype.rsplit = function (sep, maxsplit) {	// Combination of general whitespace sep and positive maxsplit neither supported nor checked, expensive and rare
		if (sep == undefined || sep == null) {
			sep = /\s+/;
			var stripped = this.strip ();
		}
		else {
			var stripped = this;
		}
			
		if (maxsplit == undefined || maxsplit == -1) {
			return stripped.split (sep);
		}
		else {
			var result = stripped.split (sep);
			if (maxsplit < result.length) {
				var maxrsplit = result.length - maxsplit;
				return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
			}
			else {
				return result;
			}
		}
	};
	
	String.prototype.rstrip = function () {
		return this.replace (/\s*$/g, '');
	};
	
	String.prototype.py_split = function (sep, maxsplit) {	// Combination of general whitespace sep and positive maxsplit neither supported nor checked, expensive and rare
		if (sep == undefined || sep == null) {
			sep = /\s+/
			var stripped = this.strip ();
		}
		else {
			var stripped = this;
		}
			
		if (maxsplit == undefined || maxsplit == -1) {
			return stripped.split (sep);
		}
		else {
			var result = stripped.split (sep);
			if (maxsplit < result.length) {
				return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
			}
			else {
				return result;
			}
		}
	};
	
	String.prototype.startswith = function (prefix) {
		return this.indexOf (prefix) == 0;
	};
	
	String.prototype.strip = function () {
		return this.trim ();
	};
		
	String.prototype.upper = function () {
		return this.toUpperCase ();
	};
	
	String.prototype.__mul__ = function (scalar) {
		var result = this;
		for (var i = 1; i < scalar; i++) {
			result = result + this;
		}
		return result;
	}
	
	String.prototype.__rmul__ = String.prototype.__mul__;
		
	// General operator overloading, only the ones that make most sense in matrix and complex operations
	
	var __neg__ = function (a) {
		if (typeof a == 'object' && '__neg__' in a) {
			return a.__neg__ ();
		}
		else {
			return -a;
		}
	};  
	__all__.__neg__ = __neg__;
	
	var __matmul__ = function (a, b) {
		return a.__matmul__ (b);
	};  
	__all__.__matmul__ = __matmul__;
	
	var __pow__ = function (a, b) {
		if (typeof a == 'object' && '__pow__' in a) {
			return a.__pow__ (b);
		}
		else if (typeof b == 'object' && '__rpow__' in b) {
			return b.__rpow__ (a);
		}
		else {
			return Math.pow (a, b);
		}
	};	
	__all__.pow = __pow__;
	
	var __mul__ = function (a, b) {
		if (typeof a == 'object' && '__mul__' in a) {
			return a.__mul__ (b);
		}
		else if (typeof b == 'object' && '__rmul__' in b) {
			return b.__rmul__ (a);
		}
		else if (typeof a == 'string') {
			return a.__mul__ (b);
		}
		else if (typeof b == 'string') {
			return b.__rmul__ (a);
		}
		else {
			return a * b;
		}
	};  
	__all__.__mul__ = __mul__;
	
	var __div__ = function (a, b) {
		if (typeof a == 'object' && '__div__' in a) {
			return a.__div__ (b);
		}
		else if (typeof b == 'object' && '__rdiv__' in b) {
			return b.__rdiv__ (a);
		}
		else {
			return a / b;
		}
	};  
	__all__.__div__ = __div__;
	
	var __add__ = function (a, b) {
		if (typeof a == 'object' && '__add__' in a) {
			return a.__add__ (b);
		}
		else if (typeof b == 'object' && '__radd__' in b) {
			return b.__radd__ (a);
		}
		else {
			return a + b;
		}
	};  
	__all__.__add__ = __add__;
	
	var __sub__ = function (a, b) {
		if (typeof a == 'object' && '__sub__' in a) {
			return a.__sub__ (b);
		}
		else if (typeof b == 'object' && '__rsub__' in b) {
			return b.__rsub__ (a);
		}
		else {
			return a - b;
		}
	};  
	__all__.__sub__ = __sub__;
	
	var __eq__ = function (a, b) {
		if (typeof a == 'object' && '__eq__' in a) {
			return a.__eq__ (b);
		}
		else {
			return a == b
		}
	};
	__all__.__eq__ = __eq__;
		
	var __ne__ = function (a, b) {
		if (typeof a == 'object' && '__ne__' in a) {
			return a.__ne__ (b);
		}
		else {
			return a != b
		}
	};
	__all__.__ne__ = __ne__;
		
	var __lt__ = function (a, b) {
		if (typeof a == 'object' && '__lt__' in a) {
			return a.__lt__ (b);
		}
		else {
			return a < b
		}
	};
	__all__.__lt__ = __lt__;
		
	var __le__ = function (a, b) {
		if (typeof a == 'object' && '__le__' in a) {
			return a.__le__ (b);
		}
		else {
			return a <= b
		}
	};
	__all__.__le__ = __le__;
		
	var __gt__ = function (a, b) {
		if (typeof a == 'object' && '__gt__' in a) {
			return a.__gt__ (b);
		}
		else {
			return a > b
		}
	};
	__all__.__gt__ = __gt__;
		
	var __ge__ = function (a, b) {
		if (typeof a == 'object' && '__ge__' in a) {
			return a.__ge__ (b);
		}
		else {
			return a >= b
		}
	};
	__all__.__ge__ = __ge__;
		
	var __getitem__ = function (container, key) {
		if (typeof container == 'object' && '__getitem__' in container) {
			return container.__getitem__ (key);
		}
		else {
			return container [key];
		}
	};
	__all__.__getitem__ = __getitem__;

	var __setitem__ = function (container, key, value) {
		if (typeof container == 'object' && '__setitem__' in container) {
			container.__setitem__ (key, value);
		}
		else {
			container [key] = value;
		}
	};
	__all__.__setitem__ = __setitem__;

	var __getslice__ = function (container, lower, upper, step) {
		if (typeof container == 'object' && '__getitem__' in container) {
			return container.__getitem__ ([lower, upper, step]);
		}
		else {
			return container.__getslice__ (lower, upper, step);
		}
	};
	__all__.__getslice__ = __getslice__;

	var __setslice__ = function (container, lower, upper, step, value) {
		if (typeof container == 'object' && '__setitem__' in container) {
			container.__setitem__ ([lower, upper, step], value);
		}
		else {
			container.__setslice__ (lower, upper, step, value);
		}
	};
	__all__.__setslice__ = __setslice__;

	var __call__ = function (/* <callee>, <params>* */) {
		var args = [] .slice.apply (arguments)
		if (typeof args [0] == 'object' && '__call__' in args [0]) {
			return args [0] .__call__ .apply (null,  args.slice (1));
		}
		else {
			return args [0] .apply (null, args.slice (1));
		}		
	};
	__all__.__call__ = __call__;

	__nest__ (
		__all__,
		'itertools', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var chain = function () {
						var args = [] .slice.apply (arguments);
						var result = [];
						for (var index = 0; index < args.length; index++) {
							result = result.concat (args [index]);
						}
						return list (result);
					}
					//<all>
					__all__.chain = chain;
					//</all>
				}
			}
		}
	);
	__nest__ (
		__all__,
		'math', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var pi = Math.PI;
					var e = Math.E;
					var exp = Math.exp;
					var expm1 = function (x) {
						return Math.exp (x) - 1;
					};
					var log = function (x, base) {
						return (base === undefined ? Math.log (x) : Math.log (x) / Math.log (base));
					};
					var log1p = function (x) {
						return Math.log (x + 1);
					};
					var log2 = function (x) {
						return Math.log (x) / Math.LN2;
					};
					var log10 = function (x) {
						return Math.log (x) / Math.LN10;
					};
					var pow = Math.pow;
					var sqrt = Math.sqrt;
					var sin = Math.sin;
					var cos = Math.cos;
					var tan = Math.tan;
					var asin = Math.asin;
					var acos = Math.acos;
					var atan = Math.atan;
					var atan2 = Math.atan2;
					var hypot = Math.hypot;
					var degrees = function (x) {
						return (x * 180) / Math.PI;
					};
					var radians = function (x) {
						return (x * Math.PI) / 180;
					};
					var sinh = Math.sinh;
					var cosh = Math.cosh;
					var tanh = Math.tanh;
					var asinh = Math.asinh;
					var acosh = Math.acosh;
					var atanh = Math.atanh;
					var floor = Math.floor;
					var ceil = Math.ceil;
					var trunc = Math.trunc;
					var inf = Infinity;
					var nan = NaN;
					__pragma__ ('<all>')
						__all__.acos = acos;
						__all__.acosh = acosh;
						__all__.asin = asin;
						__all__.asinh = asinh;
						__all__.atan = atan;
						__all__.atan2 = atan2;
						__all__.atanh = atanh;
						__all__.ceil = ceil;
						__all__.cos = cos;
						__all__.cosh = cosh;
						__all__.degrees = degrees;
						__all__.e = e;
						__all__.exp = exp;
						__all__.expm1 = expm1;
						__all__.floor = floor;
						__all__.hypot = hypot;
						__all__.inf = inf;
						__all__.log = log;
						__all__.log10 = log10;
						__all__.log1p = log1p;
						__all__.log2 = log2;
						__all__.nan = nan;
						__all__.pi = pi;
						__all__.pow = pow;
						__all__.radians = radians;
						__all__.sin = sin;
						__all__.sinh = sinh;
						__all__.sqrt = sqrt;
						__all__.tan = tan;
						__all__.tanh = tanh;
						__all__.trunc = trunc;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'numscrypt', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var itertools = {};
					__nest__ (itertools, '', __init__ (__world__.itertools));
					var ns_settings = __class__ ('ns_settings', [object], {
					});
					ns_settings.optim_space = false;
					var ns_itemsizes = dict ({'int32': 4, 'float32': 4, 'float64': 8, 'complex64': 8, 'complex128': 16});
					var ns_ctors = dict ({'int32': Int32Array, 'float32': Float32Array, 'float64': Float64Array, 'complex64': Float32Array, 'complex128': Float64Array});
					var ns_realtypes = dict ({'complex64': 'float32', 'complex128': 'float64'});
					var ns_size = function (shape) {
						var result = shape [0];
						var __iterable0__ = shape.__getslice__ (1, null, 1);
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var dim = __iterable0__ [__index0__];
							result *= dim;
						}
						return result;
					};
					var ns_iscomplex = function (dtype) {
						return __in__ (dtype, tuple (['complex64', 'complex128']));
					};
					var ndarray = __class__ ('ndarray', [object], {
						get __init__ () {return __get__ (this, function (self, shape, dtype, buffer, offset, strides) {
							if (typeof offset == 'undefined' || (offset != null && offset .__class__ == __kwargdict__)) {;
								var offset = 0;
							};
							if (typeof strides == 'undefined' || (strides != null && strides .__class__ == __kwargdict__)) {;
								var strides = null;
							};
							self.dtype = dtype;
							self.ns_complex = ns_iscomplex (self.dtype);
							self.itemsize = ns_itemsizes [self.dtype];
							self.offset = offset;
							self.ns_shift = self.offset / self.itemsize;
							self.data = buffer;
							self.reshape (shape, strides);
						});},
						get reshape () {return __get__ (this, function (self, shape, strides) {
							self.shape = shape;
							self.ndim = len (self.shape);
							if (strides) {
								self.strides = strides;
							}
							else {
								self.strides = list ([self.itemsize]);
								var __iterable0__ = py_reversed (self.shape.__getslice__ (1, null, 1));
								for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
									var dim = __iterable0__ [__index0__];
									self.strides.insert (0, self.strides [0] * dim);
								}
							}
							self.ns_skips = function () {
								var __accu0__ = [];
								var __iterable0__ = self.strides;
								for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
									var stride = __iterable0__ [__index0__];
									__accu0__.append (stride / self.itemsize);
								}
								return __accu0__;
							} ();
							self.ns_natural = self.offset == 0;
							for (var i = 0; i < self.ndim - 1; i++) {
								if (self.ns_skips [i + 1] > self.ns_skips [i]) {
									self.ns_natural = false;
									break;
								}
							}
							self.size = ns_size (self.shape);
							if ((self.ns_complex ? 2 * self.size : self.size) < self.data.length) {
								self.ns_natural = false;
							}
							self.nbytes = self.size * self.itemsize;
						});},
						get astype () {return __get__ (this, function (self, dtype) {
							var itemsize = ns_itemsizes [dtype];
							return ndarray (self.shape, dtype, ns_ctors [dtype].from (self.data), itemsize * self.ns_shift, function () {
								var __accu0__ = [];
								var __iterable0__ = self.ns_skips;
								for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
									var skip = __iterable0__ [__index0__];
									__accu0__.append (itemsize * skip);
								}
								return __accu0__;
							} ());
						});},
						get tolist () {return __get__ (this, function (self) {
							var tolist_recur = function (idim, key) {
								var result = list ([]);
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										result.append (tolist_recur (idim + 1, itertools.chain (key, list ([i]))));
									}
									else {
										result.append (self.__getitem__ (itertools.chain (key, list ([i]))));
									}
								}
								return result;
							};
							return tolist_recur (0, list ([]));
						});},
						get __repr__ () {return __get__ (this, function (self) {
							return 'array({})'.format (repr (self.tolist ()));
						});},
						get __str__ () {return __get__ (this, function (self) {
							return str (self.tolist ()).py_replace (']], [[', ']]\n\n[[').py_replace ('], ', ']\n').py_replace (',', '');
						});},
						get transpose () {return __get__ (this, function (self) {
							var axes = tuple ([].slice.apply (arguments).slice (1));
							if (len (axes)) {
								if (Array.isArray (axes [0])) {
									var axes = axes [0];
								}
							}
							return ndarray ((len (axes) ? function () {
								var __accu0__ = [];
								for (var i = 0; i < self.ndim; i++) {
									__accu0__.append (self.shape [axes [i]]);
								}
								return __accu0__;
							} () : py_reversed (self.shape)), self.dtype, self.data, null, (len (axes) ? function () {
								var __accu0__ = [];
								for (var i = 0; i < self.ndim; i++) {
									__accu0__.append (self.strides [axes [i]]);
								}
								return __accu0__;
							} () : py_reversed (self.strides)));
						});},
						get __getitem__ () {return __get__ (this, function (self, key) {
							if (type (key) == list) {
								var ns_shift = self.ns_shift;
								var shape = list ([]);
								var strides = list ([]);
								var isslice = false;
								for (var idim = 0; idim < self.ndim; idim++) {
									var subkey = key [idim];
									if (type (subkey) == tuple) {
										var isslice = true;
										ns_shift += subkey [0] * self.ns_skips [idim];
										shape.append ((subkey [1] ? (subkey [1] - subkey [0]) / subkey [2] : (self.shape [idim] - subkey [0]) / subkey [2]));
										strides.append (subkey [2] * self.strides [idim]);
									}
									else {
										ns_shift += subkey * self.ns_skips [idim];
									}
								}
								if (isslice) {
									var result = ndarray (shape, self.dtype, self.data, ns_shift * self.itemsize, strides);
									return result;
								}
								else {
									if (self.ns_complex) {
										var ibase = 2 * ns_shift;
										return complex (self.data [ibase], self.data [ibase + 1]);
									}
									else {
										return self.data [ns_shift];
									}
								}
							}
							else {
								if (self.ns_complex) {
									var ibase = 2 * (self.ns_shift + key * self.ns_skips [0]);
									return complex (self.data [ibase], self.data [ibase + 1]);
								}
								else {
									return self.data [self.ns_shift + key * self.ns_skips [0]];
								}
							}
						});},
						get __setitem__ () {return __get__ (this, function (self, key, value) {
							var setitem_recur = function (key, target, value) {
								if (len (key) < target.ndim) {
									for (var i = 0; i < target.shape [len (key)]; i++) {
										setitem_recur (itertools.chain (key, list ([i])), target, value);
									}
								}
								else {
									target.__setitem__ (key, value.__getitem__ (key));
								}
							};
							if (type (key) == list) {
								var ns_shift = self.ns_shift;
								var shape = list ([]);
								var strides = list ([]);
								var isslice = false;
								for (var idim = 0; idim < self.ndim; idim++) {
									var subkey = key [idim];
									if (type (subkey) == tuple) {
										var isslice = true;
										ns_shift += subkey [0] * self.ns_skips [idim];
										shape.append ((subkey [1] ? (subkey [1] - subkey [0]) / subkey [2] : (self.shape [idim] - subkey [0]) / subkey [2]));
										strides.append (subkey [2] * self.strides [idim]);
									}
									else {
										ns_shift += subkey * self.ns_skips [idim];
									}
								}
								if (isslice) {
									var target = ndarray (shape, self.dtype, self.data, ns_shift * self.itemsize, strides);
									setitem_recur (list ([]), target, value);
								}
								else {
									if (self.ns_complex) {
										var ibase = 2 * ns_shift;
										var __left0__ = tuple ([value.real, value.imag]);
										self.data [ibase] = __left0__ [0];
										self.data [ibase + 1] = __left0__ [1];
									}
									else {
										self.data [ns_shift] = value;
									}
								}
							}
							else {
								if (self.ns_complex) {
									var ibase = 2 * (self.ns_shift + key * self.ns_skips [0]);
									var __left0__ = tuple ([value.real, value.imag]);
									self.data [ibase] = __left0__ [0];
									self.data [ibase + 1] = __left0__ [1];
								}
								else {
									self.data [self.ns_shift + key * self.ns_skips [0]] = value;
								}
							}
						});},
						get real () {return __get__ (this, function (self) {
							var result = empty (self.shape, ns_realtypes [self.dtype]);
							for (var i = 0; i < result.data.length; i++) {
								result.data [i] = self.data [2 * i];
							}
							return result;
						});},
						get imag () {return __get__ (this, function (self) {
							var result = empty (self.shape, ns_realtypes [self.dtype]);
							for (var i = 0; i < result.data.length; i++) {
								result.data [i] = self.data [2 * i + 1];
							}
							return result;
						});},
						get __neg__ () {return __get__ (this, function (self) {
							var neg_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										neg_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											result.__setitem__ (key2, self.__getitem__ (key2).__neg__ ());
										}
										else {
											result.__setitem__ (key2, -(self.__getitem__ (key2)));
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && !(self.ns_complex)) {
								var __left0__ = tuple ([result.data, self.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								for (var i = 0; i < self.data.length; i++) {
									r [i] = -(s [i]);
								}
							}
							else {
								neg_recur (0, list ([]));
							}
							return result;
						});},
						get __ns_inv__ () {return __get__ (this, function (self) {
							var ns_inv_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										ns_inv_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											result.__setitem__ (key2, self.__getitem__ (key2).__rdiv__ (1));
										}
										else {
											result.__setitem__ (key2, 1 / self.__getitem__ (key2));
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && !(self.ns_complex)) {
								var __left0__ = tuple ([result.data, self.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								for (var i = 0; i < self.data.length; i++) {
									r [i] = 1 / s [i];
								}
							}
							else {
								ns_inv_recur (0, list ([]));
							}
							return result;
						});},
						get __add__ () {return __get__ (this, function (self, other) {
							var isarr = type (other) == ndarray;
							var add_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										add_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2).__add__ (other.__getitem__ (key2)));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2).__add__ (other));
											}
										}
										else {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2) + other.__getitem__ (key2));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2) + other);
											}
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && isarr && other.ns_natural) {
								var __left0__ = tuple ([result.data, self.data, other.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								var o = __left0__ [2];
								for (var i = 0; i < self.data.length; i++) {
									r [i] = s [i] + o [i];
								}
							}
							else {
								if (self.ns_natural && !(self.ns_complex) && !(isarr)) {
									var __left0__ = tuple ([result.data, self.data]);
									var r = __left0__ [0];
									var s = __left0__ [1];
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] + other;
									}
								}
								else {
									add_recur (0, list ([]));
								}
							}
							return result;
						});},
						get __radd__ () {return __get__ (this, function (self, scalar) {
							return self.__add__ (scalar);
						});},
						get __sub__ () {return __get__ (this, function (self, other) {
							var isarr = type (other) == ndarray;
							var sub_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										sub_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2).__sub__ (other.__getitem__ (key2)));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2).__sub__ (other));
											}
										}
										else {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2) - other.__getitem__ (key2));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2) - other);
											}
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && isarr && other.ns_natural) {
								var __left0__ = tuple ([result.data, self.data, other.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								var o = __left0__ [2];
								for (var i = 0; i < self.data.length; i++) {
									r [i] = s [i] - o [i];
								}
							}
							else {
								if (self.ns_natural && !(self.ns_complex) && !(isarr)) {
									var __left0__ = tuple ([result.data, self.data]);
									var r = __left0__ [0];
									var s = __left0__ [1];
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] - other;
									}
								}
								else {
									sub_recur (0, list ([]));
								}
							}
							return result;
						});},
						get __rsub__ () {return __get__ (this, function (self, scalar) {
							return self.__neg__ ().__add__ (scalar);
						});},
						get __mul__ () {return __get__ (this, function (self, other) {
							var isarr = type (other) == ndarray;
							var mul_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										mul_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2).__mul__ (other.__getitem__ (key2)));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2).__mul__ (other));
											}
										}
										else {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2) * other.__getitem__ (key2));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2) * other);
											}
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && isarr && other.ns_natural) {
								var __left0__ = tuple ([result.data, self.data, other.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								var o = __left0__ [2];
								if (self.ns_complex) {
									for (var i = 0; i < self.data.length; i += 2) {
										r [i] = s [i] * o [i] - s [i + 1] * o [i + 1];
										r [i + 1] = s [i] * o [i + 1] + s [i + 1] * o [i];
									}
								}
								else {
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] * o [i];
									}
								}
							}
							else {
								if (self.ns_natural && !(self.ns_complex) && !(isarr)) {
									var __left0__ = tuple ([result.data, self.data]);
									var r = __left0__ [0];
									var s = __left0__ [1];
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] * other;
									}
								}
								else {
									mul_recur (0, list ([]));
								}
							}
							return result;
						});},
						get __rmul__ () {return __get__ (this, function (self, scalar) {
							return self.__mul__ (scalar);
						});},
						get __div__ () {return __get__ (this, function (self, other) {
							var isarr = type (other) == ndarray;
							var div_recur = function (idim, key) {
								for (var i = 0; i < self.shape [idim]; i++) {
									if (idim < self.ndim - 1) {
										div_recur (idim + 1, itertools.chain (key, list ([i])));
									}
									else {
										var key2 = itertools.chain (key, list ([i]));
										if (self.ns_complex) {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2).__div__ (other.__getitem__ (key2)));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2).__div__ (other));
											}
										}
										else {
											if (isarr) {
												result.__setitem__ (key2, self.__getitem__ (key2) / other.__getitem__ (key2));
											}
											else {
												result.__setitem__ (key2, self.__getitem__ (key2) / other);
											}
										}
									}
								}
							};
							var result = empty (self.shape, self.dtype);
							if (self.ns_natural && isarr && other.ns_natural) {
								var __left0__ = tuple ([result.data, self.data, other.data]);
								var r = __left0__ [0];
								var s = __left0__ [1];
								var o = __left0__ [2];
								if (self.ns_complex) {
									for (var i = 0; i < self.data.length; i += 2) {
										var denom = o [i] * o [i] + o [i + 1] * o [i + 1];
										r [i] = (s [i] * o [i] + s [i + 1] * o [i + 1]) / denom;
										r [i + 1] = (s [i + 1] * o [i] - s [i] * o [i + 1]) / denom;
									}
								}
								else {
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] / o [i];
									}
								}
							}
							else {
								if (self.ns_natural && !(self.ns_complex) && !(isarr)) {
									var __left0__ = tuple ([result.data, self.data]);
									var r = __left0__ [0];
									var s = __left0__ [1];
									for (var i = 0; i < self.data.length; i++) {
										r [i] = s [i] / other;
									}
								}
								else {
									div_recur (0, list ([]));
								}
							}
							return result;
						});},
						get __rdiv__ () {return __get__ (this, function (self, scalar) {
							return self.__ns_inv__ ().__mul__ (scalar);
						});},
						get __matmul__ () {return __get__ (this, function (self, other) {
							var __left0__ = tuple ([self.shape [0], other.shape [1], self.shape [1]]);
							var nrows = __left0__ [0];
							var ncols = __left0__ [1];
							var nterms = __left0__ [2];
							var result = empty (tuple ([nrows, ncols]), self.dtype);
							if (self.ns_natural || ns_settings.optim_space) {
								var self2 = self;
							}
							else {
								var self2 = copy (self);
							}
							if (other.ns_natural || ns_settings.optim_space) {
								var other2 = other;
							}
							else {
								var other2 = copy (other);
							}
							if (self2.ns_natural && other2.ns_natural) {
								if (self.ns_complex) {
									for (var irow = 0; irow < nrows; irow++) {
										for (var icol = 0; icol < ncols; icol++) {
											var __left0__ = tuple ([result.data, self2.data, other2.data]);
											var r = __left0__ [0];
											var s = __left0__ [1];
											var o = __left0__ [2];
											var baser = 2 * (irow * ncols + icol);
											r [baser] = 0;
											r [baser + 1] = 0;
											for (var iterm = 0; iterm < nterms; iterm++) {
												var bases = 2 * (irow * nterms + iterm);
												var baseo = 2 * (iterm * ncols + icol);
												r [baser] += s [bases] * o [baseo] - s [bases + 1] * o [baseo + 1];
												r [baser + 1] += s [bases] * o [baseo + 1] + s [bases + 1] * o [baseo];
											}
										}
									}
								}
								else {
									for (var irow = 0; irow < nrows; irow++) {
										for (var icol = 0; icol < ncols; icol++) {
											var __left0__ = tuple ([result.data, self2.data, other2.data]);
											var r = __left0__ [0];
											var s = __left0__ [1];
											var o = __left0__ [2];
											r [irow * ncols + icol] = 0;
											for (var iterm = 0; iterm < nterms; iterm++) {
												r [irow * ncols + icol] += s [irow * nterms + iterm] * o [iterm * ncols + icol];
											}
										}
									}
								}
							}
							else {
								for (var irow = 0; irow < nrows; irow++) {
									for (var icol = 0; icol < ncols; icol++) {
										if (self.ns_complex) {
											var sum = complex (0, 0);
										}
										else {
											var sum = 0;
										}
										for (var iterm = 0; iterm < nterms; iterm++) {
											if (self.ns_complex) {
												var sum = sum.__add__ (self2.__getitem__ ([irow, iterm]).__mul__ (other2.__getitem__ ([iterm, icol])));
											}
											else {
												sum += self2.__getitem__ ([irow, iterm]) * other2.__getitem__ ([iterm, icol]);
											}
										}
										result.__setitem__ ([irow, icol], sum);
									}
								}
							}
							return result;
						});}
					});
					var empty = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .__class__ == __kwargdict__)) {;
							var dtype = 'float64';
						};
						var result = ndarray (shape, dtype, new ns_ctors [dtype] ((ns_iscomplex (dtype) ? 2 * ns_size (shape) : ns_size (shape))));
						return result;
					};
					var array = function (obj, dtype, copy) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .__class__ == __kwargdict__)) {;
							var dtype = 'float64';
						};
						if (typeof copy == 'undefined' || (copy != null && copy .__class__ == __kwargdict__)) {;
							var copy = true;
						};
						var copy_recur = function (idim, key) {
							for (var i = 0; i < obj.shape [idim]; i++) {
								if (idim < obj.ndim - 1) {
									copy_recur (idim + 1, itertools.chain (key, list ([i])));
								}
								else {
									var key2 = itertools.chain (key, list ([i]));
									result.__setitem__ (key2, obj.__getitem__ (key2));
								}
							}
						};
						if (obj.__class__ == ndarray) {
							if (copy) {
								var result = empty (obj.shape, dtype);
								if (obj.ns_natural) {
									var __left0__ = tuple ([obj.data, result.data]);
									var o = __left0__ [0];
									var r = __left0__ [1];
									for (var i = 0; i < o.length; i++) {
										r [i] = o [i];
									}
								}
								else {
									copy_recur (0, list ([]));
								}
								return result;
							}
							else {
								return ndarray (obj.shape, obj.dtype, obj.buffer, obj.offset, obj.strides);
							}
						}
						else {
							var shape = list ([]);
							var curr_obj = obj;
							while (Array.isArray (curr_obj)) {
								shape.append (curr_obj.length);
								var curr_obj = curr_obj [0];
							}
							var flatten = function (obj) {
								if (Array.isArray (obj [0])) {
									return itertools.chain.apply (null, function () {
										var __accu0__ = [];
										var __iterable0__ = obj;
										for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
											var sub_obj = __iterable0__ [__index0__];
											__accu0__.append (flatten (sub_obj));
										}
										return __accu0__;
									} ());
								}
								else {
									return obj;
								}
							};
							if (ns_iscomplex (dtype)) {
								var untypedArray = itertools.chain.apply (null, function () {
									var __accu0__ = [];
									var __iterable0__ = flatten (obj);
									for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
										var elem = __iterable0__ [__index0__];
										__accu0__.append ((type (elem) == complex ? list ([elem.real, elem.imag]) : list ([elem, 0])));
									}
									return __accu0__;
								} ());
							}
							else {
								var untypedArray = flatten (obj);
							}
							return ndarray (shape, dtype, ns_ctors [dtype].from (untypedArray));
						}
					};
					var copy = function (obj) {
						return array (obj, obj.dtype, true);
					};
					var hsplit = function (arr, nparts) {
						var result = list ([]);
						var partshape = list ([arr.shape [0], arr.shape [1] / nparts]);
						for (var ipart = 0; ipart < nparts; ipart++) {
							result.append (ndarray (partshape.__getslice__ (0, null, 1), arr.dtype, arr.data, (ipart * partshape [1]) * arr.strides [1], arr.strides.__getslice__ (0, null, 1)));
						}
						return result;
					};
					var vsplit = function (arr, nparts) {
						var result = list ([]);
						var partshape = list ([arr.shape [0] / nparts, arr.shape [1]]);
						for (var ipart = 0; ipart < nparts; ipart++) {
							result.append (ndarray (partshape.__getslice__ (0, null, 1), arr.dtype, arr.data, (ipart * partshape [0]) * arr.strides [0], arr.strides.__getslice__ (0, null, 1)));
						}
						return result;
					};
					var hstack = function (arrs) {
						var ncols = 0;
						var __iterable0__ = arrs;
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var arr = __iterable0__ [__index0__];
							ncols += arr.shape [1];
						}
						var result = empty (list ([arrs [0].shape [0], ncols]), arrs [0].dtype);
						var istartcol = 0;
						var __iterable0__ = arrs;
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var arr = __iterable0__ [__index0__];
							for (var irow = 0; irow < arr.shape [0]; irow++) {
								for (var icol = 0; icol < arr.shape [1]; icol++) {
									result.__setitem__ ([irow, istartcol + icol], arr.__getitem__ ([irow, icol]));
								}
							}
							istartcol += arr.shape [1];
						}
						return result;
					};
					var vstack = function (arrs) {
						var nrows = 0;
						var __iterable0__ = arrs;
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var arr = __iterable0__ [__index0__];
							nrows += arr.shape [0];
						}
						var result = empty (list ([nrows, arrs [0].shape [1]]), arrs [0].dtype);
						var istartrow = 0;
						var __iterable0__ = arrs;
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var arr = __iterable0__ [__index0__];
							for (var irow = 0; irow < arr.shape [0]; irow++) {
								for (var icol = 0; icol < arr.shape [1]; icol++) {
									result.__setitem__ ([istartrow + irow, icol], arr.__getitem__ ([irow, icol]));
								}
							}
							istartrow += arr.shape [0];
						}
						return result;
					};
					var round = function (arr, decimals) {
						if (typeof decimals == 'undefined' || (decimals != null && decimals .__class__ == __kwargdict__)) {;
							var decimals = 0;
						};
						var rnd_recur = function (idim, key) {
							for (var i = 0; i < arr.shape [idim]; i++) {
								if (idim < arr.ndim - 1) {
									rnd_recur (idim + 1, itertools.chain (key, list ([i])));
								}
								else {
									var key2 = itertools.chain (key, list ([i]));
									if (arr.ns_complex) {
										var c = arr.__getitem__ (key2);
										result.__setitem__ (key2, complex (c.real.toFixed (decimals), c.imag.toFixed (decimals)));
									}
									else {
										result.__setitem__ (key2, arr.__getitem__ (key2).toFixed (decimals));
									}
								}
							}
						};
						var result = empty (arr.shape, arr.dtype);
						if (arr.ns_natural && !(arr.ns_complex)) {
							var __left0__ = tuple ([arr.data, result.data]);
							var a = __left0__ [0];
							var r = __left0__ [1];
							for (var i = 0; i < a.length; i++) {
								r [i] = a [i].toFixed (decimals);
							}
						}
						else {
							rnd_recur (0, list ([]));
						}
						return result;
					};
					var zeros = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .__class__ == __kwargdict__)) {;
							var dtype = 'float64';
						};
						var result = empty (shape, dtype);
						var r = result.data;
						for (var i = 0; i < r.length; i++) {
							r [i] = 0;
						}
						return result;
					};
					var ones = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .__class__ == __kwargdict__)) {;
							var dtype = 'float64';
						};
						var result = empty (shape, dtype);
						var r = result.data;
						if (self.ns_complex) {
							for (var i = 0; i < r.length; i += 2) {
								var __left0__ = tuple ([1, 0]);
								r [i] = __left0__ [0];
								r [i + 1] = __left0__ [1];
							}
						}
						else {
							for (var i = 0; i < r.length; i++) {
								r [i] = 1;
							}
						}
						return result;
					};
					var identity = function (n, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .__class__ == __kwargdict__)) {;
							var dtype = 'float64';
						};
						var result = zeros (tuple ([n, n]), dtype);
						var r = result.data;
						if (result.ns_complex) {
							for (var i = 0; i < n; i++) {
								r [2 * (i * result.shape [1] + i)] = 1;
							}
						}
						else {
							for (var i = 0; i < n; i++) {
								r [i * result.shape [1] + i] = 1;
							}
						}
						return result;
					};
					__pragma__ ('<use>' +
						'itertools' +
					'</use>')
					__pragma__ ('<all>')
						__all__.array = array;
						__all__.copy = copy;
						__all__.empty = empty;
						__all__.hsplit = hsplit;
						__all__.hstack = hstack;
						__all__.identity = identity;
						__all__.ndarray = ndarray;
						__all__.ns_ctors = ns_ctors;
						__all__.ns_iscomplex = ns_iscomplex;
						__all__.ns_itemsizes = ns_itemsizes;
						__all__.ns_realtypes = ns_realtypes;
						__all__.ns_settings = ns_settings;
						__all__.ns_size = ns_size;
						__all__.ones = ones;
						__all__.round = round;
						__all__.vsplit = vsplit;
						__all__.vstack = vstack;
						__all__.zeros = zeros;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'numscrypt.fft', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var ns =  __init__ (__world__.numscrypt);
					/* 
					 * Free FFT and convolution (JavaScript)
					 * 
					 * Copyright (c) 2014 Project Nayuki
					 * http://www.nayuki.io/page/free-small-fft-in-multiple-languages
					 *
					 * (MIT License)
					 * Permission is hereby granted, free of charge, to any person obtaining a copy of
					 * this software and associated documentation files (the "Software"), to deal in
					 * the Software without restriction, including without limitation the rights to
					 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
					 * the Software, and to permit persons to whom the Software is furnished to do so,
					 * subject to the following conditions:
					 * - The above copyright notice and this permission notice shall be included in
					 *   all copies or substantial portions of the Software.
					 * - The Software is provided "as is", without warranty of any kind, express or
					 *   implied, including but not limited to the warranties of merchantability,
					 *   fitness for a particular purpose and noninfringement. In no event shall the
					 *   authors or copyright holders be liable for any claim, damages or other
					 *   liability, whether in an action of contract, tort or otherwise, arising from,
					 *   out of or in connection with the Software or the use or other dealings in the
					 *   Software.
					 *
					 * Slightly restructured by Chris Cannam, cannam@all-day-breakfast.com
					 *
					 * Fix added by Jacques de Hooge, jdeh@geatec.com: 'this' added to inverse.
					 */
					
					
					
					/* 
					 * Construct an object for calculating the discrete Fourier transform (DFT) of size n, where n is a power of 2.
					 */
					function FFTNayuki(n) {
					    
					    this.n = n;
					    this.levels = -1;
					
					    for (var i = 0; i < 32; i++) {
					        if (1 << i == n) {
					            this.levels = i;  // Equal to log2(n)
						}
					    }
					    if (this.levels == -1) {
					        throw "Length is not a power of 2";
					    }
					
					    this.cosTable = new Array(n / 2);
					    this.sinTable = new Array(n / 2);
					    for (var i = 0; i < n / 2; i++) {
					        this.cosTable[i] = Math.cos(2 * Math.PI * i / n);
					        this.sinTable[i] = Math.sin(2 * Math.PI * i / n);
					    }
					
					    /* 
					     * Computes the discrete Fourier transform (DFT) of the given complex vector, storing the result back into the vector.
					     * The vector's length must be equal to the size n that was passed to the object constructor, and this must be a power of 2. Uses the Cooley-Tukey decimation-in-time radix-2 algorithm.
					     */
					    this.forward = function(real, imag) {
					
						var n = this.n;
						
						// Bit-reversed addressing permutation
						for (var i = 0; i < n; i++) {
					            var j = reverseBits(i, this.levels);
					            if (j > i) {
							var temp = real[i];
							real[i] = real[j];
							real[j] = temp;
							temp = imag[i];
							imag[i] = imag[j];
							imag[j] = temp;
					            }
						}
					    
						// Cooley-Tukey decimation-in-time radix-2 FFT
						for (var size = 2; size <= n; size *= 2) {
					            var halfsize = size / 2;
					            var tablestep = n / size;
					            for (var i = 0; i < n; i += size) {
							for (var j = i, k = 0; j < i + halfsize; j++, k += tablestep) {
					                    var tpre =  real[j+halfsize] * this.cosTable[k] +
								        imag[j+halfsize] * this.sinTable[k];
					                    var tpim = -real[j+halfsize] * this.sinTable[k] +
								        imag[j+halfsize] * this.cosTable[k];
					                    real[j + halfsize] = real[j] - tpre;
					                    imag[j + halfsize] = imag[j] - tpim;
					                    real[j] += tpre;
					                    imag[j] += tpim;
							}
					            }
						}
					    
						// Returns the integer whose value is the reverse of the lowest 'bits' bits of the integer 'x'.
						function reverseBits(x, bits) {
					            var y = 0;
					            for (var i = 0; i < bits; i++) {
							y = (y << 1) | (x & 1);
							x >>>= 1;
					            }
					            return y;
						}
					    }
					
					    /* 
					     * Computes the inverse discrete Fourier transform (IDFT) of the given complex vector, storing the result back into the vector.
					     * The vector's length must be equal to the size n that was passed to the object constructor, and this must be a power of 2. This is a wrapper function. This transform does not perform scaling, so the inverse is not a true inverse.
					     */
					    this.inverse = function(real, imag) {
						this.forward(imag, real);	// Fix by JdeH: 'this' added
					    }
					}
					
					
					var fft = function (a) {
						var fftn = new FFTNayuki (a.size);
						var dre = a.real ().data;
						var dim = a.imag ().data;
						fftn.forward (dre, dim);
						var result = ns.empty (a.shape, a.dtype);
						for (var i = 0; i < a.size; i++) {
							var ibase = 2 * i;
							result.data [ibase] = dre [i];
							result.data [ibase + 1] = dim [i];
						}
						return result;
					};
					var ifft = function (a) {
						var fftn = new FFTNayuki (a.size);
						var dre = a.real ().data;
						var dim = a.imag ().data;
						fftn.inverse (dre, dim);
						var result = ns.empty (a.shape, a.dtype);
						var s = a.size;
						for (var i = 0; i < s; i++) {
							var ibase = 2 * i;
							result.data [ibase] = dre [i] / s;
							result.data [ibase + 1] = dim [i] / s;
						}
						return result;
					};
					__pragma__ ('<use>' +
						'numscrypt' +
					'</use>')
					__pragma__ ('<all>')
						__all__.fft = fft;
						__all__.ifft = ifft;
					__pragma__ ('</all>')
				}
			}
		}
	);
	(function () {
		var __symbols__ = ['__complex__', '__esv5__'];
		var sin = __init__ (__world__.math).sin;
		var cos = __init__ (__world__.math).cos;
		var pi = __init__ (__world__.math).pi;
		var transpiled = __envir__.executor_name == __envir__.transpiler_name;
		if (__envir__.executor_name == __envir__.transpiler_name) {
			var num =  __init__ (__world__.numscrypt);
			var fft =  __init__ (__world__.numscrypt.fft);
		}
		var fSample = 4096;
		var tTotal = 2;
		var fSin = 30;
		var fCos = 50;
		var tCurrent = function (iCurrent) {
			return iCurrent / fSample;
		};
		var run = function (autoTester) {
			var orig = num.array (function () {
				var __accu0__ = [];
				var __iterable0__ = function () {
					var __accu1__ = [];
					for (var iSample = 0; iSample < tTotal * fSample; iSample++) {
						__accu1__.append (iSample / fSample);
					}
					return __accu1__;
				} ();
				for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
					var t = __iterable0__ [__index0__];
					__accu0__.append (complex ((0.3 + sin (((2 * pi) * fSin) * t)) + 0.5 * cos (((2 * pi) * fCos) * t), 0));
				}
				return __accu0__;
			} (), 'complex128');
			if (transpiled) {
				var timeStartFft = new Date ();
			}
			if (transpiled) {
				var timeStopFft = new Date ();
			}
			var delta = __add__ (0.001, complex (0, 0.001));
			var cut = 102;
			__call__ (autoTester.check, 'Original samples', __getslice__ (__call__ (__call__ (num.round, __add__ (orig, delta), 3).tolist), 0, cut, 1), '<br>');
			var freqs = __call__ (fft.fft, orig);
			__call__ (autoTester.check, 'Frequencies', __getslice__ (__call__ (__call__ (num.round, __add__ (freqs, delta), 3).tolist), 0, cut, 1), '<br>');
			if (transpiled) {
				var timeStartIfft = new __call__ (Date);
			}
			var reconstr = __call__ (fft.ifft, freqs);
			if (transpiled) {
				var timeStopIfft = new __call__ (Date);
			}
			__call__ (autoTester.check, 'Reconstructed samples', __getslice__ (__call__ (__call__ (num.round, __add__ (reconstr, delta), 3).tolist), 0, cut, 1), '<br>');
			if (transpiled) {
				print ('FFT for {} samples took {} ms'.format (tTotal * fSample, timeStopFft - timeStartFft));
				print ('IFFT for {} samples took {} ms'.format (tTotal * fSample, timeStopIfft - timeStartIfft));
			}
		};
		__pragma__ ('<use>' +
			'math' +
			'numscrypt' +
			'numscrypt.fft' +
		'</use>')
		__pragma__ ('<all>')
			__all__.cos = cos;
			__all__.fCos = fCos;
			__all__.fSample = fSample;
			__all__.fSin = fSin;
			__all__.pi = pi;
			__all__.run = run;
			__all__.sin = sin;
			__all__.tCurrent = tCurrent;
			__all__.tTotal = tTotal;
			__all__.transpiled = transpiled;
		__pragma__ ('</all>')
	}) ();
	return __all__;
}
window ['__init__'] = __init__ ();
