"use strict";
// Transcrypt'ed from Python, 2018-01-23 20:37:36
function test () {
    var __symbols__ = ['__complex__', '__py3.6__', '__esv6__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __proxy__ = false;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
                for (var symbol of Object.getOwnPropertySymbols (base)) {
                    var descrip = Object.getOwnPropertyDescriptor (base, symbol);
                    Object.defineProperty (cls, symbol, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (var symbol of Object.getOwnPropertySymbols (attribs)) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            if ('__getattr__' in this || '__setattr__' in this) {
                instance = new Proxy (instance, {
                    get: function (target, name) {
                        var result = target [name];
                        if (result == undefined) {
                            return target.__getattr__ (name);
                        }
                        else {
                            return result;
                        }
                    },
                    set: function (target, name, value) {
                        try {
                            target.__setattr__ (name, value);
                        }
                        catch (exception) {
                            target [name] = value;
                        }
                        return true;
                    }
                })
            }
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta == undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.84';
							self.target_subdir = '__javascript__';
						}, '__init__');}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
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
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						}, '__init__');},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						}, '__repr__');},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						}, '__str__');}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						}, '__init__');}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						}, '__init__');}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
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
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
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
								return (key (a) > key (b) ? 1 : -(1));
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
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
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
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var complex = __class__ ('complex', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, real, imag) {
							if (typeof imag == 'undefined' || (imag != null && imag .hasOwnProperty ("__kwargtrans__"))) {;
								var imag = null;
							};
							if (imag == null) {
								if (py_typeof (real) == complex) {
									self.real = real.real;
									self.imag = real.imag;
								}
								else {
									self.real = real;
									self.imag = 0;
								}
							}
							else {
								self.real = real;
								self.imag = imag;
							}
						}, '__init__');},
						get __neg__ () {return __get__ (this, function (self) {
							return complex (-(self.real), -(self.imag));
						}, '__neg__');},
						get __exp__ () {return __get__ (this, function (self) {
							var modulus = Math.exp (self.real);
							return complex (modulus * Math.cos (self.imag), modulus * Math.sin (self.imag));
						}, '__exp__');},
						get __log__ () {return __get__ (this, function (self) {
							return complex (Math.log (Math.sqrt (self.real * self.real + self.imag * self.imag)), Math.atan2 (self.imag, self.real));
						}, '__log__');},
						get __pow__ () {return __get__ (this, function (self, other) {
							return self.__log__ ().__mul__ (other).__exp__ ();
						}, '__pow__');},
						get __rpow__ () {return __get__ (this, function (self, real) {
							return self.__mul__ (Math.log (real)).__exp__ ();
						}, '__rpow__');},
						get __mul__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real * other, self.imag * other);
							}
							else {
								return complex (self.real * other.real - self.imag * other.imag, self.real * other.imag + self.imag * other.real);
							}
						}, '__mul__');},
						get __rmul__ () {return __get__ (this, function (self, real) {
							return complex (self.real * real, self.imag * real);
						}, '__rmul__');},
						get __div__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real / other, self.imag / other);
							}
							else {
								var denom = other.real * other.real + other.imag * other.imag;
								return complex ((self.real * other.real + self.imag * other.imag) / denom, (self.imag * other.real - self.real * other.imag) / denom);
							}
						}, '__div__');},
						get __rdiv__ () {return __get__ (this, function (self, real) {
							var denom = self.real * self.real;
							return complex ((real * self.real) / denom, (real * self.imag) / denom);
						}, '__rdiv__');},
						get __add__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real + other, self.imag);
							}
							else {
								return complex (self.real + other.real, self.imag + other.imag);
							}
						}, '__add__');},
						get __radd__ () {return __get__ (this, function (self, real) {
							return complex (self.real + real, self.imag);
						}, '__radd__');},
						get __sub__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return complex (self.real - other, self.imag);
							}
							else {
								return complex (self.real - other.real, self.imag - other.imag);
							}
						}, '__sub__');},
						get __rsub__ () {return __get__ (this, function (self, real) {
							return complex (real - self.real, -(self.imag));
						}, '__rsub__');},
						get __repr__ () {return __get__ (this, function (self) {
							return '({}{}{}j)'.format (self.real, (self.imag >= 0 ? '+' : ''), self.imag);
						}, '__repr__');},
						get __str__ () {return __get__ (this, function (self) {
							return __repr__ (self).__getslice__ (1, -(1), 1);
						}, '__str__');},
						get __eq__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return self.real == other;
							}
							else {
								return self.real == other.real && self.imag == other.imag;
							}
						}, '__eq__');},
						get __ne__ () {return __get__ (this, function (self, other) {
							if (typeof other === 'number') {
								return self.real != other;
							}
							else {
								return self.real != other.real || self.imag != other.imag;
							}
						}, '__ne__');},
						get conjugate () {return __get__ (this, function (self) {
							return complex (self.real, -(self.imag));
						}, 'conjugate');}
					});
					var __conj__ = function (aNumber) {
						if (isinstance (aNumber, complex)) {
							return complex (aNumber.real, -(aNumber.imag));
						}
						else {
							return complex (aNumber, 0);
						}
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						}, '__init__');},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
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
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								for (var arg of args) {
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									for (var arg of args) {
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						}, 'print');},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
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
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						}, 'input');}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__conj__ = __conj__;
						__all__.__name__ = __name__;
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
    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    var complex = __all__.complex;
    var __conj__ = __all__.__conj__;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (let base of aClass.__bases__) {
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
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
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    };
    __all__.getattr= getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        if (name in obj) {
            delete obj [name];
        }
        else {
            delete obj ['py_' + name];
        }
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (py_typeof (container) == dict) {
            return container.hasOwnProperty (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
             throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    __all__.bool = bool;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    __all__.int = int;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return anObject.__class__;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
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
        if (classinfo instanceof Array) {
            for (let aClass of classinfo) {
                if (isinstance (anObject, aClass)) {
                    return true;
                }
            }
            return false;
        }
        try {
            return '__class__' in anObject ? isA (anObject.__class__) : anObject instanceof classinfo;
        }
        catch (exception) {
            var aType = py_typeof (anObject);
            return aType == classinfo || (aType == bool && classinfo == int);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        if (anObject && typeof anObject == 'object' && '__call__' in anObject) {
            return true;
        }
        else {
            return typeof anObject === 'function';
        }
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
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
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = function (nrOrSeq) {
        return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
    };
    __all__.max = max;
    var min = function (nrOrSeq) {
        return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
    };
    __all__.min = min;
    var abs = function (x) {
        try {
            return Math.abs (x);
        }
        catch (exception) {
            return Math.sqrt (x.real * x.real + x.imag * x.imag);
        }
    };
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
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
    function any (iterable) {
        for (let item of iterable) {
            if (bool (item)) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (let item of iterable) {
            if (! bool (item)) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        let result = 0;
        for (let item of iterable) {
            result += item;
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
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
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? Array.from (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
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
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
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
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
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
    Array.prototype.py_clear = function () {
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
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    Array.prototype.__bindexOf__ = function (element) {
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
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
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
        return set (other.slice ()) .issuperset (this);
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
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
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
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
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
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        strings = Array.from (strings);
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
    String.prototype.rsplit = function (sep, maxsplit) {
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
    String.prototype.py_split = function (sep, maxsplit) {
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
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
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
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey]
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
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
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
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
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
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
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
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
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
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
    __all__.__setslice__ = __setslice__;	__nest__ (
		__all__,
		'cmath', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'cmath';
					var pi = Math.PI;
					var e = Math.E;
					var phase = function (x) {
						return (typeof x === 'number' ? 0 : Math.atan2 (x.imag, x.real));
					};
					var polar = function (x) {
						return (typeof x === 'number' ? tuple ([Math.abs (x), 0]) : tuple ([abs (x), phase (x)]));
					};
					var rect = function (r, phi) {
						return __mul__ (r, __add__ (__call__ (Math.cos, Math, phi), __mul__ (complex (0, 1.0), __call__ (Math.sin, Math, phi))));
					};
					var exp = function (x) {
						return (typeof x === 'number' ? complex (x, 0).__exp__ () : x.__exp__ ());
					};
					var log = function (x, base) {
						return (base === undefined ? (typeof x === 'number' ? complex (x, 0).__log__ () : x.__log__ ()) : __truediv__ (log (x), log (base)));
					};
					var log10 = function (x) {
						return log (x, 10);
					};
					var sqrt = function (x) {
						return exp (__mul__ (log (x), 0.5));
					};
					var sin = function (x) {
						return __mul__ (__neg__ (complex (0, 0.5)), __sub__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
					};
					var cos = function (x) {
						return __mul__ (0.5, __add__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
					};
					var tan = function (x) {
						return __truediv__ (__mul__ (__neg__ (complex (0, 1.0)), __sub__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x)))), __add__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
					};
					var asin = function (x) {
						return __mul__ (__neg__ (complex (0, 1.0)), __call__ (log, null, __add__ (__mul__ (complex (0, 1.0), x), __call__ (sqrt, null, __sub__ (1, __mul__ (x, x))))));
					};
					var acos = function (x) {
						return __mul__ (__neg__ (complex (0, 1.0)), __call__ (log, null, __add__ (x, __mul__ (complex (0, 1.0), __call__ (sqrt, null, __sub__ (1, __mul__ (x, x)))))));
					};
					var atan = function (x) {
						return __mul__ (complex (0, 0.5), __call__ (log, null, __truediv__ (__add__ (complex (0, 1.0), x), __sub__ (complex (0, 1.0), x))));
					};
					var sinh = function (x) {
						return __mul__ (0.5, __sub__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
					};
					var cosh = function (x) {
						return __mul__ (0.5, __add__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
					};
					var tanh = function (x) {
						return __truediv__ (__sub__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))), __add__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
					};
					var asinh = function (x) {
						return __call__ (log, null, __add__ (x, __call__ (sqrt, null, __add__ (1, __mul__ (x, x)))));
					};
					var acosh = function (x) {
						return __call__ (log, null, __add__ (x, __call__ (sqrt, null, __add__ (__neg__ (1), __mul__ (x, x)))));
					};
					var atanh = function (x) {
						return __mul__ (0.5, __call__ (log, null, __truediv__ (__add__ (1, x), __sub__ (1, x))));
					};
					var isinf = function (x) {
						return x.real == js_Infinite || x.imag == js.Infinite;
					};
					var isfinite = function (x) {
						return !(isinf (x));
					};
					var isnan = function (x) {
						return isNaN (x.real) || isNaN (x.imag);
					};
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.acos = acos;
						__all__.acosh = acosh;
						__all__.asin = asin;
						__all__.asinh = asinh;
						__all__.atan = atan;
						__all__.atanh = atanh;
						__all__.cos = cos;
						__all__.cosh = cosh;
						__all__.e = e;
						__all__.exp = exp;
						__all__.isfinite = isfinite;
						__all__.isinf = isinf;
						__all__.isnan = isnan;
						__all__.log = log;
						__all__.log10 = log10;
						__all__.phase = phase;
						__all__.pi = pi;
						__all__.polar = polar;
						__all__.rect = rect;
						__all__.sin = sin;
						__all__.sinh = sinh;
						__all__.sqrt = sqrt;
						__all__.tan = tan;
						__all__.tanh = tanh;
					__pragma__ ('</all>')
				}
			}
		}
	);
    __nest__ (
        __all__,
        'itertools', {
            __all__: {
                __inited__: false,
                __init__: function (__all__) {
                    var count = function* (start, step) {
                        if (start == undefined) {
                            start = 0;
                        }
                        if (step == undefined) {
                            step = 1;
                        }
                        while (true) {
                            yield start;
                            start += step;
                        }
                    }
                    var cycle = function* (iterable) {                      
                        let buffer = Array.from (iterable); // Can't reset, Chrome can't obtain iter from gener
                        while (true) {
                            for (let item of buffer) {
                                yield item;
                            }
                        }
                    }
                    var repeat = function* (item, n) {
                        if (typeof n == 'undefined') {
                            while (true) {
                                yield item;
                            }
                        }
                        else {
                            for (let index = 0; index < n; index++) {
                                yield item;
                            }
                        }
                    }
                    var accumulate = function* (iterable, func) {
                        let sum;
                        let first = true;
                        if (func) {
                            for (let item of iterable) {
                                if (first) {
                                    sum = item;
                                    first = false;
                                }
                                else {
                                    sum = func (sum, item);
                                }
                                yield sum;
                            }
                        }
                        else {
                            for (let item of iterable) {
                                if (first) {
                                    sum = item;
                                    first = false;
                                }
                                else {
                                    sum = sum + item;
                                }
                                yield sum;
                            }
                        }
                    }
                    var chain = function* () {
                        let args = [] .slice.apply (arguments);                         
                        for (let arg of args) {
                            for (let item of arg) {
                                yield item;
                            }
                        }
                    }
                    chain.from_iterable = function* (iterable) {                        
                        for (let item of iterable) {
                            for (let subItem of item) {
                                yield subItem;
                            }
                        }
                    }
                    var compress = function* (data, selectors) {
                        let dataIterator = data [Symbol.iterator] .call (data);
                        let selectorsIterator = selectors [Symbol.iterator] ();
                        while (true) {
                            let dataItem = dataIterator.next ();
                            let selectorsItem = selectorsIterator.next ();
                            if (dataItem.done || selectorsItem.done) {
                                break;
                            }
                            else {
                                if (selectorsItem.value) {
                                    yield dataItem.value;
                                }
                            }
                        }
                    }
                    var dropwhile = function* (pred, seq) {
                        let started = false;
                        for (let item of seq) {
                            if (started) {
                                yield item;
                            }
                            else if (!pred (item)) {
                                started = true;
                                yield item;
                            }
                        }
                    }
                    var filterfalse = function* (pred, seq) {
                        for (let item of seq) {
                            if (!pred (item)) {
                                yield item;
                            }
                        }
                    }
                    var groupby = function* (iterable, keyfunc) {
                        let anIterator = iterable [Symbol.iterator] ();
                        let item = anIterator.next ();
                        
                        if (item.done) {
                            return;
                        }
                        
                        let groupKey = keyfunc (item.value);
                        let more = true;
                        
                        function* group () {
                            while (true) {
                                yield (item.value);
                                item = anIterator.next ();
                                
                                if (item.done) {
                                    more = false;
                                    return;
                                }
                                
                                let key = keyfunc (item.value);
                                
                                if (key != groupKey) {
                                    groupKey = key;
                                    return;
                                }
                            }
                        }
                        
                        while (more) {
                            yield tuple ([groupKey, group ()]);
                        }
                    }
                    
                    var islice = function* () {
                        let start;  // Have to be defined at function level, or Closure compiler will loose them after a yield 
                        let stop;   //
                        let step;   //
                        
                        let args = [] .slice.apply (arguments);
                        let anIterator = args [0][Symbol.iterator] ();
                        if (args.length == 2) {
                            stop = args [1];
                            start = 0;
                            step = 1;
                        }
                        else {
                            start = args [1];
                            stop = args [2];
                            if (args.length == 4) {
                                step = args [3];
                            }
                            else {
                                step = 1;
                            }
                        }
                        for (let index = 0; index < start; index++) {
                            if (anIterator.next (). done) {
                                return;
                            }
                        }
                        for (let index = 0; index < stop - start; index++) {
                            let next = anIterator.next ();
                            if (next.done) {
                                return;
                            }
                            if (index % step == 0) {
                                yield next.value;
                            }
                        }
                    }
                    var starmap = function* (func, seq) {
                        let anIterator = seq [Symbol.iterator] ();
                        while (true) {
                            let next = anIterator.next ()
                            if (next.done) {
                                return;
                            }
                            else {
                                yield func (...next.value); 
                            }
                        }
                    }
                    var takewhile = function* (pred, seq) {
                        for (let item of seq) {
                            if (pred (item)) {
                                yield item;
                            }
                            else {
                                return;
                            }
                        }
                    }
                    var tee = function (iterable, n) {
                        if (n == undefined) {
                            n = 2;
                        }
                        let all = [];                               // Don't return iterator since destructuring assignment cannot yet deal with that
                        let one = list (iterable);
                        for (let i = 0; i < n; i++) {
                            all.append (one [Symbol.iterator] ());  // Iterator rather than list, exhaustable for semantic equivalence
                        }
                        return list (all);
                    }
                    
                    var product = function () {
                        let args = [] .slice.apply (arguments);
                        if (args.length && args [args.length - 1] .hasOwnProperty ('__kwargtrans__')) {
                            var repeat = args.pop () ['repeat']; 
                        }
                        else {
                            var repeat = 1;
                        }
                        
                        let oldMolecules = [tuple ([])];
                        for (let i = 0; i < repeat; i++) {
                            for (let arg of args) {
                                let newMolecules = [];
                                for (let oldMolecule of oldMolecules) {
                                    for (let atom of arg) {
                                        newMolecules.append (tuple (oldMolecule.concat (atom)));
                                    }
                                }
                                oldMolecules = newMolecules;
                            }
                        }
                        return list (oldMolecules); // Also works if args is emptpy
                    }
                    var permutations = function (iterable, r) {
                        if (r == undefined) {
                            try {
                                r = len (iterable);
                            }
                            catch (exception) {
                                r = len (list (iterable));
                            }
                        }
                        let aProduct = product (iterable, __kwargtrans__ ({repeat: r}));
                        let result = [];
                        for (let molecule of aProduct) {
                            if (len (set (molecule)) == r) {    // Weed out doubles
                                result.append (molecule);
                            }
                        }
                        return list (result);
                    }
                    var combinations = function (iterable, r) {
                        let tail = list (iterable);
                        function recurse (tail, molecule, rNext) {
                            for (let index = 0; index < len (tail) - rNext; index++) {
                                let newMolecule = molecule.concat (tail.slice (index, index + 1));

                                if (rNext) {
                                    recurse (tail.slice (index + 1), newMolecule, rNext - 1);
                                }
                                else {
                                    result.append (tuple (newMolecule));
                                }
                            }
                        }
                        let result = [];
                        recurse (tail, tail.slice (0, 0), r - 1);
                        return list (result);
                    }
                    var combinations_with_replacement = function (iterable, r) {
                        let tail = list (iterable);
                        function recurse (tail, molecule, rNext) {
                            for (let index = 0; index < len (tail); index++) {
                                let newMolecule = molecule.concat (tail.slice (index, index + 1));

                                if (rNext) {
                                    recurse (tail.slice (index), newMolecule, rNext - 1);
                                }
                                else {
                                    result.append (tuple (newMolecule));
                                }
                            }
                        }
                        let result = [];
                        recurse (tail, tail.slice (0, 0), r - 1);
                        return list (result);
                    }
                    //<all>
                    __all__.count = count;
                    __all__.cycle = cycle;
                    __all__.repeat = repeat;
                    __all__.accumulate = accumulate;
                    __all__.chain = chain;
                    __all__.compress = compress;
                    __all__.dropwhile = dropwhile;
                    __all__.filterfalse = filterfalse;
                    __all__.groupby = groupby;
                    __all__.islice = islice;
                    __all__.starmap = starmap;
                    __all__.takewhile = takewhile;
                    __all__.tee = tee;
                    __all__.product = product;
                    __all__.permutations = permutations;
                    __all__.combinations = combinations;
                    __all__.combinations_with_replacement = combinations_with_replacement;
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
					var __name__ = 'math';
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
					var isnan = isNaN;
					var inf = Infinity;
					var nan = NaN;
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
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
						__all__.isnan = isnan;
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
					var __name__ = 'numscrypt';
					__nest__ (itertools, '', __init__ (__world__.itertools));
					var ns_ctors = dict ({'int32': Int32Array, 'float32': Float32Array, 'float64': Float64Array});
					var ns_complex = function (dtype) {
						return __in__ (dtype, tuple (['complex64', 'complex128']));
					};
					var ns_buffertype = function (dtype) {
						return (dtype == 'complex64' ? 'float32' : (dtype == 'complex128' ? 'float64' : dtype));
					};
					var ns_complextype = function (dtype) {
						return (dtype == 'float32' ? 'complex64' : (dtype == 'float64' ? 'complex128' : null));
					};
					var ns_createbuf = function (imag, dtype, size) {
						return (!(imag) || ns_complex (dtype) ? new ns_ctors [ns_buffertype (dtype)] (size) : null);
					};
					var ndarray = __class__ ('ndarray', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, shape, dtype, realbuf, imagbuf) {
							if (typeof realbuf == 'undefined' || (realbuf != null && realbuf .hasOwnProperty ("__kwargtrans__"))) {;
								var realbuf = null;
							};
							if (typeof imagbuf == 'undefined' || (imagbuf != null && imagbuf .hasOwnProperty ("__kwargtrans__"))) {;
								var imagbuf = null;
							};
							self.dtype = dtype;
							self.ns_complex = ns_complex (dtype);
							self.realbuf = realbuf;
							if (self.ns_complex) {
								self.imagbuf = imagbuf;
							}
							self.setshape (shape);
						}, '__init__');},
						get setshape () {return __get__ (this, function (self, shape) {
							self.shape = shape;
							self.ndim = shape.length;
							self.ns_nrows = shape [0];
							if (self.ndim == 1) {
								self.size = self.ns_nrows;
							}
							else {
								self.ns_ncols = shape [1];
								self.size = self.ns_nrows * self.ns_ncols;
							}
						}, 'setshape');},
						get astype () {return __get__ (this, function (self, dtype) {
							var result = empty (self.shape, dtype);
							result.realbuf.set (self.realbuf);
							if (self.ns_complex) {
								result.imagbuf.set (self.imagbuf);
							}
							return result;
						}, 'astype');},
						get tolist () {return __get__ (this, function (self) {
							if (self.ns_complex) {
								var flat = (function () {
									var __accu0__ = [];
									for (var [real, imag] of zip (list (self.realbuf), list (self.imagbuf))) {
										__accu0__.append (complex (real, imag));
									}
									return __accu0__;
								}) ();
							}
							else {
								var flat = self.realbuf;
							}
							if (self.ndim == 1) {
								return list (flat);
							}
							else {
								return (function () {
									var __accu0__ = [];
									for (var irow = 0; irow < self.ns_nrows; irow++) {
										__accu0__.append ((function () {
											var __accu1__ = [];
											for (var icol = 0; icol < self.ns_ncols; icol++) {
												__accu1__.append (flat [self.ns_ncols * irow + icol]);
											}
											return __accu1__;
										}) ());
									}
									return __accu0__;
								}) ();
							}
						}, 'tolist');},
						get __repr__ () {return __get__ (this, function (self) {
							return 'array({})'.format (repr (self.tolist ()));
						}, '__repr__');},
						get __str__ () {return __get__ (this, function (self) {
							if (self.ndim == 1) {
								return str (self.tolist ());
							}
							else {
								return '[\n\t{}\n]\n'.format ('\n\t'.join ((function () {
									var __accu0__ = [];
									for (var row of self.tolist ()) {
										__accu0__.append (str (row));
									}
									return __accu0__;
								}) ()));
							}
						}, '__str__');},
						get reshape () {return __get__ (this, function (self, shape) {
							if (self.ndim == 1) {
								return tuple ([array (self, self.dtype)]);
							}
							else {
								var result = array (self, self.dtype);
								result.setshape (self.ns_ncols, self.ns_nrows);
								return result;
							}
						}, 'reshape');},
						get transpose () {return __get__ (this, function (self) {
							if (self.ndim == 1) {
								var result = array (self, dtype);
							}
							else {
								var result = empty (tuple ([self.ns_ncols, self.ns_nrows]), self.dtype);
								var itarget = 0;
								if (self.ns_complex) {
									for (var icol = 0; icol < self.ns_ncols; icol++) {
										var isource = icol;
										for (var irow = 0; irow < self.ns_nrows; irow++) {
											var isource = self.ns_ncols * irow + icol;
											result.imagbuf [itarget] = self.imagbuf [isource];
											result.realbuf [itarget++] = self.realbuf [isource];
											isource += self.ns_ncols;
										}
									}
								}
								else {
									for (var icol = 0; icol < self.ns_ncols; icol++) {
										var isource = icol;
										for (var irow = 0; irow < self.ns_nrows; irow++) {
											result.realbuf [itarget++] = self.realbuf [isource];
											isource += self.ns_ncols;
										}
									}
								}
							}
							return result;
						}, 'transpose');},
						get __getitem__ () {return __get__ (this, function (self, key) {
							if (self.ndim == 1) {
								if (py_typeof (key) == tuple) {
									if (key [1] == null) {
										key [1] = self.size;
									}
									else if (key [1] < 0) {
										key [1] += self.size;
									}
									var result = empty (list ([(key [1] - key [0]) / key [2]]), self.dtype);
									var itarget = 0;
									if (self.ns_complex) {
										for (var isource of range (...self.shape)) {
											result.realbuf [itarget] = self.realbuf [isource];
											result.imagbuf [itarget++] = self.imagbuf [isource];
										}
									}
									else {
										for (var isource of range (...self.shape)) {
											result.realbuf [itarget++] = self.realbuf [isource];
										}
									}
									return result;
								}
								else if (self.ns_complex) {
									return complex (self.realbuf [key], self.imagbuf [key]);
								}
								else {
									return self.realbuf [key];
								}
							}
							else {
								var rowkey = key [0];
								var colkey = key [1];
								var rowistup = py_typeof (rowkey) == tuple;
								var colistup = py_typeof (colkey) == tuple;
								if (rowistup) {
									if (rowkey [1] == null) {
										rowkey [1] = self.ns_nrows;
									}
									else if (rowkey [1] < 0) {
										rowkey [1] += self.ns_nrows;
									}
								}
								if (colistup) {
									if (colkey [1] == null) {
										colkey [1] = self.ns_ncols;
									}
									else if (colkey [1] < 0) {
										colkey [1] += self.ns_ncols;
									}
								}
								if (rowistup || colistup) {
									if (!(rowistup)) {
										var result = empty (tuple ([(colkey [1] - colkey [0]) / colkey [2]]), self.dtype);
										var itarget = 0;
										if (self.ns_complex) {
											for (var isourcecol of range (...colkey)) {
												var isource = self.ns_ncols * rowkey + isourcecol;
												result.realbuf [itarget] = self.realbuf [isource];
												result.imagbuf [itarget++] = self.imagbuf [isource];
											}
										}
										else {
											for (var isourcecol of range (...colkey)) {
												result.realbuf [itarget++] = self.realbuf [self.ns_ncols * rowkey + isourcecol];
											}
										}
									}
									else if (!(colistup)) {
										var result = empty (tuple ([(rowkey [1] - rowkey [0]) / rowkey [2]]), self.dtype);
										var itarget = 0;
										if (self.ns_complex) {
											for (var isourcerow of range (...rowkey)) {
												var isource = self.ns_ncols * isourcerow + colkey;
												result.realbuf [itarget] = self.realbuf [isource];
												result.imagbuf [itarget++] = self.imagbuf [isource];
											}
										}
										else {
											for (var isourcerow of range (...rowkey)) {
												result.realbuf [itarget++] = self.realbuf [self.ns_ncols * isourcerow + colkey];
											}
										}
									}
									else {
										var result = empty (tuple ([(key [0] [1] - key [0] [0]) / key [0] [2], (key [1] [1] - key [1] [0]) / key [1] [2]]), self.dtype);
										var itarget = 0;
										if (self.ns_complex) {
											for (var isourcerow of range (...rowkey)) {
												for (var isourcecol of range (...colkey)) {
													var isource = self.ns_ncols * isourcerow + isourcecol;
													result.realbuf [itarget] = self.realbuf [isource];
													result.imagbuf [itarget++] = self.imagbuf [isource];
												}
											}
										}
										else {
											for (var isourcerow of range (...rowkey)) {
												for (var isourcecol of range (...colkey)) {
													result.realbuf [itarget++] = self.realbuf [self.ns_ncols * isourcerow + isourcecol];
												}
											}
										}
									}
									return result;
								}
								else if (self.ns_complex) {
									var isource = self.ns_ncols * key [0] + key [1];
									return complex (self.realbuf [isource], self.imagbuf [isource]);
								}
								else {
									return self.realbuf [self.ns_ncols * key [0] + key [1]];
								}
							}
						}, '__getitem__');},
						get __setitem__ () {return __get__ (this, function (self, key, value) {
							if (self.ndim == 1) {
								if (py_typeof (key) == tuple) {
									if (key [1] == null) {
										key [1] = self.size;
									}
									else if (key [1] < 0) {
										key [1] += self.size;
									}
									var isource = 0;
									if (self.ns_complex) {
										for (var itarget of range (...self.shape)) {
											self.realbuf [itarget] = value.realbuf [isource];
											self.imagbuf [itarget] = value.imagbuf [isource++];
										}
									}
									else {
										for (var itarget of range (...self.shape)) {
											self.realbuf [itarget] = value.realbuf [isource++];
										}
									}
									return result;
								}
								else if (self.ns_complex) {
									if (typeof value == 'number') {
										self.realbuf [key] = value;
										self.imagbuf [key] = 0;
									}
									else {
										self.realbuf [key] = value.real;
										self.imagbuf [key] = value.imag;
									}
								}
								else {
									self.realbuf [key] = value;
								}
							}
							else {
								var rowkey = key [0];
								var colkey = key [1];
								var rowistup = py_typeof (rowkey) == tuple;
								var colistup = py_typeof (colkey) == tuple;
								if (rowistup) {
									if (rowkey [1] == null) {
										rowkey [1] = self.ns_nrows;
									}
									else if (rowkey [1] < 0) {
										rowkey [1] += self.ns_nrows;
									}
								}
								if (colistup) {
									if (colkey [1] == null) {
										colkey [1] = self.ns_ncols;
									}
									else if (colkey [1] < 0) {
										colkey [1] += self.ns_ncols;
									}
								}
								if (rowistup || colistup) {
									if (!(rowistup)) {
										var isource = 0;
										if (self.ns_complex) {
											for (var itargetcol of range (...colkey)) {
												var itarget = self.ns_ncols * rowkey + itargetcol;
												self.realbuf [itarget] = value.realbuf [isource];
												self.imagbuf [itarget] = value.imagbuf [isource++];
											}
										}
										else {
											for (var itargetcol of range (...colkey)) {
												result.realbuf [self.ns_ncols * rowkey + itargetcol] = self.realbuf [isource++];
											}
										}
									}
									else if (!(colistup)) {
										var isource = 0;
										if (self.ns_complex) {
											for (var itargetrow of range (...rowkey)) {
												var itarget = self.ns_ncols * itargetrow + colkey;
												self.realbuf [itarget] = value.realbuf [isource];
												self.imagbuf [itarget] = value.imagbuf [isource++];
											}
										}
										else {
											for (var isourcerow of range (...rowkey)) {
												self.realbuf [self.ns_ncols * isourcerow + colkey] = value [isource++];
											}
										}
									}
									else {
										var isource = 0;
										if (self.ns_complex) {
											for (var itargetrow of range (...rowkey)) {
												for (var itargetcol of range (...colkey)) {
													var itarget = self.ns_ncols * itargetrow + itargetcol;
													self.realbuf [itarget] = value.realbuf [isource];
													self.imagbuf [itarget] = value.imagbuf [isource++];
												}
											}
										}
										else {
											for (var isourcerow of range (...rowkey)) {
												for (var isourcecol of range (...colkey)) {
													self.realbuf [self.ns_ncols * itargetrow + itargetcol] = value.realbuf [isource++];
												}
											}
										}
									}
								}
								else if (self.ns_complex) {
									var itarget = self.ns_ncols * key [0] + key [1];
									if (typeof value == 'number') {
										self.realbuf [itarget] = value;
										self.imagbuf [itarget] = 0;
									}
									else {
										self.realbuf [itarget] = value.real;
										self.imagbuf [itarget] = value.imag;
									}
								}
								else {
									self.realbuf [self.ns_ncols * key [0] + key [1]] = value;
								}
							}
						}, '__setitem__');},
						get real () {return __get__ (this, function (self) {
							return ndarray (self.shape, ns_buffertype (self.dtype), self.realbuf);
						}, 'real');},
						get imag () {return __get__ (this, function (self) {
							return ndarray (self.shape, ns_buffertype (self.dtype), self.imagbuf);
						}, 'imag');},
						get __conj__ () {return __get__ (this, function (self) {
							if (self.ns_complex) {
								var result = empty (self.shape, self.dtype);
								result.realbuf.set (self.realbuf);
								result.imagbuf = ns_createbuf (true, self.dtype, self.size);
								for (var i = 0; i < self.size; i++) {
									result.imagbuf [i] = -(self.imagbuf [i]);
								}
								return result;
							}
							else {
								return copy (self);
							}
						}, '__conj__');},
						get conjugate () {return __get__ (this, function (self) {
							return self.__conj__ ();
						}, 'conjugate');},
						get __neg__ () {return __get__ (this, function (self) {
							var result = empty (self.shape, self.dtype);
							if (self.ns_complex) {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = -(self.realbuf [i]);
									result.imagbuf [i] = -(self.imagbuf [i]);
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = -(self.realbuf [i]);
								}
							}
							return result;
						}, '__neg__');},
						get __ns_inv__ () {return __get__ (this, function (self) {
							var result = empty (self.shape, self.dtype);
							if (self.ns_complex) {
								for (var i = 0; i < self.size; i++) {
									var real = self.realbuf [i];
									var imag = self.imagbuf [i];
									var denom = real * real + imag * imag;
									result.realbuf [i] = real / denom;
									result.imagbuf [i] = -(imag) / denom;
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = 1 / self.realbuf [i];
								}
							}
							return result;
						}, '__ns_inv__');},
						get __add__ () {return __get__ (this, function (self, other) {
							var result = empty (self.shape, self.dtype);
							if (py_typeof (other) == ndarray) {
								if (self.ns_complex) {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] + other.realbuf [i];
										result.imagbuf [i] = self.imagbuf [i] + other.imagbuf [i];
									}
								}
								else {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] + other.realbuf [i];
									}
								}
							}
							else if (self.ns_complex) {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] + other.real;
									result.imagbuf [i] = self.imagbuf [i] + other.imag;
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] + other;
								}
							}
							return result;
						}, '__add__');},
						get __radd__ () {return __get__ (this, function (self, scalar) {
							return self.__add__ (scalar);
						}, '__radd__');},
						get __sub__ () {return __get__ (this, function (self, other) {
							var result = empty (self.shape, self.dtype);
							if (py_typeof (other) == ndarray) {
								if (self.ns_complex) {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] - other.realbuf [i];
										result.imagbuf [i] = self.imagbuf [i] - other.imagbuf [i];
									}
								}
								else {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] - other.realbuf [i];
									}
								}
							}
							else if (self.ns_complex) {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] - other.real;
									result.imagbuf [i] = self.imagbuf [i] - other.imag;
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] - other;
								}
							}
							return result;
						}, '__sub__');},
						get __rsub__ () {return __get__ (this, function (self, scalar) {
							return self.__neg__ ().__add__ (scalar);
						}, '__rsub__');},
						get __mul__ () {return __get__ (this, function (self, other) {
							var result = empty (self.shape, self.dtype);
							if (py_typeof (other) == ndarray) {
								if (self.ns_complex) {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] * other.realbuf [i] - self.imagbuf [i] * other.imagbuf [i];
										result.imagbuf [i] = self.realbuf [i] * other.imagbuf [i] + self.imagbuf [i] * other.realbuf [i];
									}
								}
								else {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] * other.realbuf [i];
									}
								}
							}
							else if (self.ns_complex) {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] * other.real - self.imagbuf [i] * other.imag;
									result.imagbuf [i] = self.realbuf [i] * other.imag + self.imagbuf [i] * other.real;
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] * other;
								}
							}
							return result;
						}, '__mul__');},
						get __rmul__ () {return __get__ (this, function (self, scalar) {
							return self.__mul__ (scalar);
						}, '__rmul__');},
						get __div__ () {return __get__ (this, function (self, other) {
							var result = empty (self.shape, self.dtype);
							if (py_typeof (other) == ndarray) {
								if (self.ns_complex) {
									for (var i = 0; i < self.size; i++) {
										var real = other.realbuf [i];
										var imag = other.imagbuf [i];
										var denom = real * real + imag * imag;
										result.realbuf [i] = (self.realbuf [i] * real + self.imagbuf [i] * imag) / denom;
										result.imagbuf [i] = (self.imagbuf [i] * real - self.realbuf [i] * imag) / denom;
									}
								}
								else {
									for (var i = 0; i < self.size; i++) {
										result.realbuf [i] = self.realbuf [i] / other.realbuf [i];
									}
								}
							}
							else if (self.ns_complex) {
								var real = other.real;
								var imag = other.imag;
								var denom = real * real + imag * imag;
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = (self.realbuf [i] * real + self.imagbuf [i] * imag) / denom;
									result.imagbuf [i] = (self.imagbuf [i] * real - self.realbuf [i] * imag) / denom;
								}
							}
							else {
								for (var i = 0; i < self.size; i++) {
									result.realbuf [i] = self.realbuf [i] / other;
								}
							}
							return result;
						}, '__div__');},
						get __rdiv__ () {return __get__ (this, function (self, scalar) {
							return self.__ns_inv__ ().__mul__ (scalar);
						}, '__rdiv__');},
						get __matmul__ () {return __get__ (this, function (self, other) {
							var result = empty (tuple ([self.ns_nrows, other.ns_ncols]), self.dtype);
							if (self.ns_complex) {
								var iresult = 0;
								for (var irow = 0; irow < self.ns_nrows; irow++) {
									for (var icol = 0; icol < other.ns_ncols; icol++) {
										result.realbuf [iresult] = 0;
										result.imagbuf [iresult] = 0;
										var iself = self.ns_ncols * irow;
										var iother = icol;
										for (var iterm = 0; iterm < self.ns_ncols; iterm++) {
											result.realbuf [iresult] += self.realbuf [iself] * other.realbuf [iother] - self.imagbuf [iself] * other.imagbuf [iother];
											result.imagbuf [iresult] += self.realbuf [iself] * other.imagbuf [iother] + self.imagbuf [iself++] * other.realbuf [iother];
											iother += other.ns_ncols;
										}
										iresult++;
									}
								}
							}
							else {
								var iresult = 0;
								for (var irow = 0; irow < self.ns_nrows; irow++) {
									for (var icol = 0; icol < other.ns_ncols; icol++) {
										result.realbuf [iresult] = 0;
										var iself = self.ns_ncols * irow;
										var iother = icol;
										for (var iterm = 0; iterm < self.ns_ncols; iterm++) {
											result.realbuf [iresult] += self.realbuf [iself++] * other.realbuf [iother];
											iother += other.ns_ncols;
										}
										iresult++;
									}
								}
							}
							return result;
						}, '__matmul__');}
					});
					var empty = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .hasOwnProperty ("__kwargtrans__"))) {;
							var dtype = 'float64';
						};
						var result = ndarray (shape, dtype);
						result.realbuf = ns_createbuf (false, dtype, result.size);
						result.imagbuf = ns_createbuf (true, dtype, result.size);
						return result;
					};
					var array = function (obj, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .hasOwnProperty ("__kwargtrans__"))) {;
							var dtype = 'float64';
						};
						if (Array.isArray (obj)) {
							if (len (obj)) {
								if (Array.isArray (obj [0])) {
									var result = empty (tuple ([obj.length, obj [0].length]), dtype);
									var iresult = 0;
									if (result.ns_complex) {
										for (var irow = 0; irow < result.ns_nrows; irow++) {
											for (var icol = 0; icol < result.ns_ncols; icol++) {
												var element = complex (obj [irow] [icol]);
												result.realbuf [iresult] = element.real;
												result.imagbuf [iresult++] = element.imag;
											}
										}
									}
									else {
										for (var irow = 0; irow < result.ns_nrows; irow++) {
											for (var icol = 0; icol < result.ns_ncols; icol++) {
												result.realbuf [iresult++] = obj [irow] [icol];
											}
										}
									}
								}
								else {
									var result = empty (tuple ([obj.length]), dtype);
									if (result.ns_complex) {
										for (var i = 0; i < result.size; i++) {
											var element = complex (obj [i]);
											result.realbuf [i] = element.real;
											result.imagbuf [i] = element.imag;
										}
									}
									else {
										for (var i = 0; i < result.size; i++) {
											result.realbuf [i] = obj [i];
										}
									}
								}
							}
							else {
								var result = empty (tuple ([0]), dtype);
							}
						}
						else {
							var result = empty (obj.shape, obj.dtype);
							result.realbuf.set (obj.realbuf);
							if (obj.ns_complex) {
								result.imagbuf.set (obj.imagbuf);
							}
						}
						return result;
					};
					var copy = function (obj) {
						return array (obj, obj.dtype);
					};
					var hsplit = function (ary, nparts) {
						var result = (function () {
							var __accu0__ = [];
							for (var ipart = 0; ipart < nparts; ipart++) {
								__accu0__.append (empty (tuple ([ary.ns_nrows, ary.ns_ncols / nparts]), ary.dtype));
							}
							return __accu0__;
						}) ();
						var isource = 0;
						if (ary.ns_complex) {
							for (var irow = 0; irow < ary.ns_nrows; irow++) {
								for (var part of result) {
									var itarget = part.ns_ncols * irow;
									for (var icol = 0; icol < part.ns_ncols; icol++) {
										part.realbuf [itarget] = ary.realbuf [isource];
										part.imagbuf [itarget++] = ary.imagbuf [isource++];
									}
								}
							}
						}
						else {
							for (var irow = 0; irow < ary.ns_nrows; irow++) {
								for (var part of result) {
									var itarget = part.ns_ncols * irow;
									for (var icol = 0; icol < part.ns_ncols; icol++) {
										part.realbuf [itarget++] = ary.realbuf [isource++];
									}
								}
							}
						}
						return result;
					};
					var vsplit = function (ary, nparts) {
						var result = (function () {
							var __accu0__ = [];
							for (var ipart = 0; ipart < nparts; ipart++) {
								__accu0__.append (empty (tuple ([ary.ns_nrows / nparts, ary.ns_ncols]), array.dtype));
							}
							return __accu0__;
						}) ();
						var isource = 0;
						if (ary.ns_complex) {
							for (var part of result) {
								for (var itarget = 0; itarget < part.size; itarget++) {
									part.realbuf [itarget] = ary.realbuf [isource];
									part.imagbuf [itarget] = ary.imagbuf [isource++];
								}
							}
						}
						else {
							for (var part of result) {
								for (var itarget = 0; itarget < part.size; itarget++) {
									part.realbuf [itarget] = ary.realbuf [isource++];
								}
							}
						}
						return result;
					};
					var hstack = function (tup) {
						var ncols = 0;
						for (var part of tup) {
							ncols += part.ns_ncols;
						}
						var result = empty (tuple ([tup [0].ns_nrows, ncols]), tup [0].dtype);
						var itarget = 0;
						if (result.ns_complex) {
							for (var irow = 0; irow < result.ns_nrows; irow++) {
								for (var part of tup) {
									var isource = part.ns_ncols * irow;
									for (var icol = 0; icol < part.ns_ncols; icol++) {
										result.realbuf [itarget] = part.realbuf [isource];
										result.imagbuf [itarget++] = part.imagbuf [isource++];
									}
								}
							}
						}
						else {
							for (var irow = 0; irow < result.ns_nrows; irow++) {
								for (var part of tup) {
									var isource = part.ns_ncols * irow;
									for (var icol = 0; icol < part.ns_ncols; icol++) {
										result.realbuf [itarget++] = part.realbuf [isource++];
									}
								}
							}
						}
						return result;
					};
					var vstack = function (tup) {
						var nrows = 0;
						for (var part of tup) {
							nrows += part.ns_nrows;
						}
						var result = empty (tuple ([nrows, tup [0].ns_ncols]), tup [0].dtype);
						var itarget = 0;
						if (result.ns_complex) {
							for (var part of tup) {
								for (var isource = 0; isource < part.size; isource++) {
									result.realbuf [itarget] = part.realbuf [isource];
									result.imagbuf [itarget++] = part.imagbuf [isource];
								}
							}
						}
						else {
							for (var part of tup) {
								for (var isource = 0; isource < part.size; isource++) {
									result.realbuf [itarget++] = part.realbuf [isource];
								}
							}
						}
						return result;
					};
					var round = function (a, decimals) {
						if (typeof decimals == 'undefined' || (decimals != null && decimals .hasOwnProperty ("__kwargtrans__"))) {;
							var decimals = 0;
						};
						var result = empty (a.shape, a.dtype);
						if (a.ns_complex) {
							for (var i = 0; i < a.size; i++) {
								result.realbuf [i] = a.realbuf [i].toFixed (decimals);
								result.imagbuf [i] = a.imagbuf [i].toFixed (decimals);
							}
						}
						else {
							for (var i = 0; i < a.size; i++) {
								result.realbuf [i] = a.realbuf [i].toFixed (decimals);
							}
						}
						return result;
					};
					var zeros = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .hasOwnProperty ("__kwargtrans__"))) {;
							var dtype = 'float64';
						};
						var result = empty (shape, dtype);
						if (result.ns_complex) {
							for (var i = 0; i < result.size; i++) {
								result.realbuf [i] = 0;
								result.imagbuf [i] = 0;
							}
						}
						else {
							for (var i = 0; i < result.size; i++) {
								result.realbuf [i] = 0;
							}
						}
						return result;
					};
					var ones = function (shape, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .hasOwnProperty ("__kwargtrans__"))) {;
							var dtype = 'float64';
						};
						var result = empty (shape, dtype);
						if (result.ns_complex) {
							for (var i = 0; i < result.size; i++) {
								result.realbuf [i] = 1;
								result.imagbuf [i] = 0;
							}
						}
						else {
							for (var i = 0; i < result.size; i++) {
								result.realbuf [i] = 1;
							}
						}
						return result;
					};
					var identity = function (n, dtype) {
						if (typeof dtype == 'undefined' || (dtype != null && dtype .hasOwnProperty ("__kwargtrans__"))) {;
							var dtype = 'float64';
						};
						var result = zeros (tuple ([n, n]), dtype);
						var i = 0;
						var shift = n + 1;
						for (var j = 0; j < n; j++) {
							result.realbuf [i] = 1;
							i += shift;
						}
						return result;
					};
					var conjugate = function (x) {
						return x.__conj__ ();
					};
					__pragma__ ('<use>' +
						'itertools' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.array = array;
						__all__.conjugate = conjugate;
						__all__.copy = copy;
						__all__.empty = empty;
						__all__.hsplit = hsplit;
						__all__.hstack = hstack;
						__all__.identity = identity;
						__all__.ndarray = ndarray;
						__all__.ns_buffertype = ns_buffertype;
						__all__.ns_complex = ns_complex;
						__all__.ns_complextype = ns_complextype;
						__all__.ns_createbuf = ns_createbuf;
						__all__.ns_ctors = ns_ctors;
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
		'numscrypt.linalg', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'numscrypt.linalg';
					var ns =  __init__ (__world__.numscrypt);
					var eigen =  __init__ (__world__.numscrypt.linalg.eigen_mpmath);
					var inv = function (a) {
						if (a.ns_complex) {
							return cinv (a);
						}
						else {
							return rinv (a);
						}
					};
					var rinv = function (a) {
						var b = ns.hstack (tuple ([a, ns.identity (a.shape [0], a.dtype)]));
						var real = b.realbuf;
						var __left0__ = b.shape;
						var nrows = __left0__ [0];
						var ncols = __left0__ [1];
						for (var ipiv = 0; ipiv < nrows; ipiv++) {
							if (!(real [ipiv * ncols + ipiv])) {
								for (var irow = ipiv + 1; irow < nrows; irow++) {
									if (real [irow * ncols + ipiv]) {
										for (var icol = 0; icol < ncols; icol++) {
											var temp = real [irow * ncols + icol];
											real [irow * ncols + icol] = b [ipiv * ncols + icol];
											real [ipiv * ncols + icol] = temp;
										}
										break;
									}
								}
							}
							var piv = real [ipiv * ncols + ipiv];
							for (var icol = ipiv; icol < ncols; icol++) {
								real [ipiv * ncols + icol] /= piv;
							}
							for (var irow = 0; irow < nrows; irow++) {
								if (irow != ipiv) {
									var factor = real [irow * ncols + ipiv];
									for (var icol = 0; icol < ncols; icol++) {
										real [irow * ncols + icol] -= factor * real [ipiv * ncols + icol];
									}
								}
							}
						}
						return ns.hsplit (b, 2) [1];
					};
					var cinv = function (a) {
						var b = ns.hstack (tuple ([a, ns.identity (a.shape [0], a.dtype)]));
						var real = b.realbuf;
						var imag = b.imagbuf;
						var __left0__ = b.shape;
						var nrows = __left0__ [0];
						var ncols = __left0__ [1];
						for (var ipiv = 0; ipiv < nrows; ipiv++) {
							var ipiv_flat = ipiv * ncols + ipiv;
							if (!(real [ipiv_flat] || imag [ipiv_flat])) {
								for (var irow = ipiv + 1; irow < nrows; irow++) {
									var iswap = irow * ncols + ipiv;
									if (real [iswap] || imag [iswap]) {
										for (var icol = 0; icol < ncols; icol++) {
											var isource = irow * ncols + icol;
											var itarget = ipiv * ncols + icol;
											var temp = real [isource];
											real [isource] = real [itarget];
											real [itarget] = temp;
											var temp = imag [isource_flat];
											imag [isource] = imag [itarget];
											imag [itarget] = temp;
										}
										break;
									}
								}
							}
							var pivre = real [ipiv_flat];
							var pivim = imag [ipiv_flat];
							var denom = pivre * pivre + pivim * pivim;
							for (var icol = ipiv; icol < ncols; icol++) {
								var icur = ipiv * ncols + icol;
								var oldre = real [icur];
								var oldim = imag [icur];
								real [icur] = (oldre * pivre + oldim * pivim) / denom;
								imag [icur] = (oldim * pivre - oldre * pivim) / denom;
							}
							for (var irow = 0; irow < nrows; irow++) {
								if (irow != ipiv) {
									var ifac = irow * ncols + ipiv;
									var facre = real [ifac];
									var facim = imag [ifac];
									for (var icol = 0; icol < ncols; icol++) {
										var itarget = irow * ncols + icol;
										var isource = ipiv * ncols + icol;
										var oldre = real [isource];
										var oldim = imag [isource];
										real [itarget] -= facre * oldre - facim * oldim;
										imag [itarget] -= facre * oldim + facim * oldre;
									}
								}
							}
						}
						return ns.hsplit (b, 2) [1];
					};
					var norm = function (a) {
						var result = 0;
						if (a.ns_complex) {
							for (var i = 0; i < a.size; i++) {
								result += a.realbuf [i] * a.realbuf [i] + a.imagbuf [i] * a.imagbuf [i];
							}
						}
						else {
							for (var i = 0; i < a.size; i++) {
								result += a.realbuf [i] * a.realbuf [i];
							}
						}
						return Math.sqrt (result);
					};
					var eig = function (a) {
						var __left0__ = eigen.eig (a);
						var evals = __left0__ [0];
						var evecs = __left0__ [1];
						var __left0__ = evecs.shape;
						var nrows = __left0__ [0];
						var ncols = __left0__ [1];
						var real = evecs.realbuf;
						var imag = evecs.imagbuf;
						for (var icol = 0; icol < ncols; icol++) {
							var sum = 0;
							for (var irow = 0; irow < nrows; irow++) {
								var iterm = irow * ncols + icol;
								sum += real [iterm] * real [iterm] + imag [iterm] * imag [iterm];
							}
							var norm = Math.sqrt (sum);
							for (var irow = 0; irow < nrows; irow++) {
								var iterm = irow * ncols + icol;
								real [iterm] /= norm;
								imag [iterm] /= norm;
							}
						}
						return tuple ([ns.array (evals, 'complex64'), evecs]);
					};
					__pragma__ ('<use>' +
						'numscrypt' +
						'numscrypt.linalg.eigen_mpmath' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.cinv = cinv;
						__all__.eig = eig;
						__all__.inv = inv;
						__all__.norm = norm;
						__all__.rinv = rinv;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'numscrypt.linalg.eigen_mpmath', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var cmath = {};
					var __name__ = 'numscrypt.linalg.eigen_mpmath';
					var __name__ = __init__ (__world__.math).__name__;
					var acos = __init__ (__world__.math).acos;
					var acosh = __init__ (__world__.math).acosh;
					var asin = __init__ (__world__.math).asin;
					var asinh = __init__ (__world__.math).asinh;
					var atan = __init__ (__world__.math).atan;
					var atan2 = __init__ (__world__.math).atan2;
					var atanh = __init__ (__world__.math).atanh;
					var ceil = __init__ (__world__.math).ceil;
					var cos = __init__ (__world__.math).cos;
					var cosh = __init__ (__world__.math).cosh;
					var degrees = __init__ (__world__.math).degrees;
					var e = __init__ (__world__.math).e;
					var exp = __init__ (__world__.math).exp;
					var expm1 = __init__ (__world__.math).expm1;
					var floor = __init__ (__world__.math).floor;
					var hypot = __init__ (__world__.math).hypot;
					var inf = __init__ (__world__.math).inf;
					var isnan = __init__ (__world__.math).isnan;
					var log = __init__ (__world__.math).log;
					var log10 = __init__ (__world__.math).log10;
					var log1p = __init__ (__world__.math).log1p;
					var log2 = __init__ (__world__.math).log2;
					var nan = __init__ (__world__.math).nan;
					var pi = __init__ (__world__.math).pi;
					var pow = __init__ (__world__.math).pow;
					var radians = __init__ (__world__.math).radians;
					var sin = __init__ (__world__.math).sin;
					var sinh = __init__ (__world__.math).sinh;
					var sqrt = __init__ (__world__.math).sqrt;
					var tan = __init__ (__world__.math).tan;
					var tanh = __init__ (__world__.math).tanh;
					var trunc = __init__ (__world__.math).trunc;
					__nest__ (cmath, '', __init__ (__world__.cmath));
					var __name__ = __init__ (__world__.numscrypt).__name__;
					var array = __init__ (__world__.numscrypt).array;
					var conjugate = __init__ (__world__.numscrypt).conjugate;
					var copy = __init__ (__world__.numscrypt).copy;
					var empty = __init__ (__world__.numscrypt).empty;
					var hsplit = __init__ (__world__.numscrypt).hsplit;
					var hstack = __init__ (__world__.numscrypt).hstack;
					var identity = __init__ (__world__.numscrypt).identity;
					var ndarray = __init__ (__world__.numscrypt).ndarray;
					var ns_buffertype = __init__ (__world__.numscrypt).ns_buffertype;
					var ns_complex = __init__ (__world__.numscrypt).ns_complex;
					var ns_complextype = __init__ (__world__.numscrypt).ns_complextype;
					var ns_createbuf = __init__ (__world__.numscrypt).ns_createbuf;
					var ns_ctors = __init__ (__world__.numscrypt).ns_ctors;
					var ones = __init__ (__world__.numscrypt).ones;
					var round = __init__ (__world__.numscrypt).round;
					var vsplit = __init__ (__world__.numscrypt).vsplit;
					var vstack = __init__ (__world__.numscrypt).vstack;
					var zeros = __init__ (__world__.numscrypt).zeros;
					var isinf = function (x) {
						return false;
					};
					var hypot = function (x, y) {
						return __call__ (sqrt, null, __add__ (__mul__ (x, x), __mul__ (y, y)));
					};
					var ctx_eps = 1e-15;
					var ctx_dps = 15;
					var ctx_one = 1;
					var ctx_prec = 53;
					var ctx_ldexp = function (x, n) {
						return __mul__ (x, __pow__ (2, n));
					};
					var hessenberg_reduce_0 = function (A, T) {
						var n = __getitem__ (A.shape, 0);
						if (__le__ (n, 2)) {
							return ;
						}
						for (var i = __sub__ (n, 1); i > 1; i--) {
							var scale = 0;
							for (var k = 0; k < i; k++) {
								var scale = __call__ (__iadd__, null, scale, __add__ (__call__ (abs, null, A.__getitem__ ([i, k]).real), __call__ (abs, null, A.__getitem__ ([i, k]).imag)));
							}
							var scale_inv = 0;
							if (__ne__ (scale, 0)) {
								var scale_inv = __truediv__ (1, scale);
							}
							if (__eq__ (scale, 0) || __call__ (isinf, null, scale_inv)) {
								__setitem__ (T, i, 0);
								A.__setitem__ ([i, __sub__ (i, 1)], 0);
								continue;
							}
							var H = 0;
							for (var k = 0; k < i; k++) {
								A.__setitem__ ([i, k], __call__ (__imul__, null, A.__getitem__ ([i, k]), scale_inv));
								var rr = A.__getitem__ ([i, k]).real;
								var ii = A.__getitem__ ([i, k]).imag;
								var H = __call__ (__iadd__, null, H, __add__ (__mul__ (rr, rr), __mul__ (ii, ii)));
							}
							var F = A.__getitem__ ([i, __sub__ (i, 1)]);
							var f = __call__ (abs, null, F);
							var G = __call__ (cmath.sqrt, cmath, H);
							A.__setitem__ ([i, __sub__ (i, 1)], __mul__ (__neg__ (G), scale));
							if (__eq__ (f, 0)) {
								__setitem__ (T, i, G);
							}
							else {
								var ff = __truediv__ (F, f);
								__setitem__ (T, i, __add__ (F, __mul__ (G, ff)));
								A.__setitem__ ([i, __sub__ (i, 1)], __call__ (__imul__, null, A.__getitem__ ([i, __sub__ (i, 1)]), ff));
							}
							var H = __call__ (__iadd__, null, H, __mul__ (G, f));
							var H = __truediv__ (1, __call__ (cmath.sqrt, cmath, H));
							__setitem__ (T, i, __call__ (__imul__, null, __getitem__ (T, i), H));
							for (var k = 0; k < __sub__ (i, 1); k++) {
								A.__setitem__ ([i, k], __call__ (__imul__, null, A.__getitem__ ([i, k]), H));
							}
							for (var j = 0; j < i; j++) {
								var G = __mul__ (__call__ (__conj__, null, __getitem__ (T, i)), A.__getitem__ ([j, __sub__ (i, 1)]));
								for (var k = 0; k < __sub__ (i, 1); k++) {
									var G = __call__ (__iadd__, null, G, __mul__ (__call__ (__conj__, null, A.__getitem__ ([i, k])), A.__getitem__ ([j, k])));
								}
								A.__setitem__ ([j, __sub__ (i, 1)], __call__ (__isub__, null, A.__getitem__ ([j, __sub__ (i, 1)]), __mul__ (G, __getitem__ (T, i))));
								for (var k = 0; k < __sub__ (i, 1); k++) {
									A.__setitem__ ([j, k], __call__ (__isub__, null, A.__getitem__ ([j, k]), __mul__ (G, A.__getitem__ ([i, k]))));
								}
							}
							for (var j = 0; j < n; j++) {
								var G = __mul__ (__getitem__ (T, i), A.__getitem__ ([__sub__ (i, 1), j]));
								for (var k = 0; k < __sub__ (i, 1); k++) {
									var G = __call__ (__iadd__, null, G, __mul__ (A.__getitem__ ([i, k]), A.__getitem__ ([k, j])));
								}
								A.__setitem__ ([__sub__ (i, 1), j], __call__ (__isub__, null, A.__getitem__ ([__sub__ (i, 1), j]), __mul__ (G, __call__ (__conj__, null, __getitem__ (T, i)))));
								for (var k = 0; k < __sub__ (i, 1); k++) {
									A.__setitem__ ([k, j], __call__ (__isub__, null, A.__getitem__ ([k, j]), __mul__ (G, __call__ (__conj__, null, A.__getitem__ ([i, k])))));
								}
							}
						}
					};
					var hessenberg_reduce_1 = function (A, T) {
						var n = __getitem__ (A.shape, 0);
						if (__eq__ (n, 1)) {
							A.__setitem__ ([0, 0], 1);
							return ;
						}
						var __left0__ = 1;
						A.__setitem__ ([0, 0], __left0__);
						A.__setitem__ ([1, 1], __left0__);
						var __left0__ = 0;
						A.__setitem__ ([0, 1], __left0__);
						A.__setitem__ ([1, 0], __left0__);
						for (var i = 2; i < n; i++) {
							if (__ne__ (__getitem__ (T, i), 0)) {
								for (var j = 0; j < i; j++) {
									var G = __mul__ (__getitem__ (T, i), A.__getitem__ ([__sub__ (i, 1), j]));
									for (var k = 0; k < __sub__ (i, 1); k++) {
										var G = __call__ (__iadd__, null, G, __mul__ (A.__getitem__ ([i, k]), A.__getitem__ ([k, j])));
									}
									A.__setitem__ ([__sub__ (i, 1), j], __call__ (__isub__, null, A.__getitem__ ([__sub__ (i, 1), j]), __mul__ (G, __call__ (__conj__, null, __getitem__ (T, i)))));
									for (var k = 0; k < __sub__ (i, 1); k++) {
										A.__setitem__ ([k, j], __call__ (__isub__, null, A.__getitem__ ([k, j]), __mul__ (G, __call__ (__conj__, null, A.__getitem__ ([i, k])))));
									}
								}
							}
							A.__setitem__ ([i, i], 1);
							for (var j = 0; j < i; j++) {
								var __left0__ = 0;
								A.__setitem__ ([j, i], __left0__);
								A.__setitem__ ([i, j], __left0__);
							}
						}
					};
					var hessenberg = function (A, overwrite_a) {
						if (typeof overwrite_a == 'undefined' || (overwrite_a != null && overwrite_a .hasOwnProperty ("__kwargtrans__"))) {;
							var overwrite_a = false;
						};
						var n = __getitem__ (A.shape, 0);
						if (__eq__ (n, 1)) {
							return tuple ([__call__ (array, null, list ([list ([1])]), A.dtype), A]);
						}
						if (!(overwrite_a)) {
							var A = __call__ (copy, null, A);
						}
						var T = __call__ (empty, null, tuple ([n]), A.dtype);
						__call__ (hessenberg_reduce_0, null, A, T);
						var Q = __call__ (copy, null, A.copy);
						__call__ (hessenberg_reduce_1, null, Q, T);
						for (var x = 0; x < n; x++) {
							for (var y = __add__ (x, 2); y < n; y++) {
								A.__setitem__ ([y, x], 0);
							}
						}
						return tuple ([Q, A]);
					};
					var qr_step = function (n0, n1, A, Q, shift) {
						var n = __getitem__ (A.shape, 0);
						var c = __sub__ (A.__getitem__ ([n0, n0]), shift);
						var s = A.__getitem__ ([__add__ (n0, 1), n0]);
						var v = __call__ (hypot, null, __call__ (hypot, null, c.real, c.imag), __call__ (hypot, null, s.real, s.imag));
						if (__eq__ (v, 0)) {
							var v = 1;
							var c = 1;
							var s = 0;
						}
						else {
							var c = __call__ (__idiv__, null, c, v);
							var s = __call__ (__idiv__, null, s, v);
						}
						for (var k = n0; k < n; k++) {
							var x = A.__getitem__ ([n0, k]);
							var y = A.__getitem__ ([__add__ (n0, 1), k]);
							A.__setitem__ ([n0, k], __add__ (__mul__ (__call__ (__conj__, null, c), x), __mul__ (__call__ (__conj__, null, s), y)));
							A.__setitem__ ([__add__ (n0, 1), k], __add__ (__mul__ (__neg__ (s), x), __mul__ (c, y)));
						}
						for (var k = 0; k < __call__ (min, null, n1, __add__ (n0, 3)); k++) {
							var x = A.__getitem__ ([k, n0]);
							var y = A.__getitem__ ([k, __add__ (n0, 1)]);
							A.__setitem__ ([k, n0], __add__ (__mul__ (c, x), __mul__ (s, y)));
							A.__setitem__ ([k, __add__ (n0, 1)], __add__ (__mul__ (__neg__ (__call__ (__conj__, null, s)), x), __mul__ (__call__ (__conj__, null, c), y)));
						}
						if (!(__call__ (isinstance, null, Q, bool))) {
							for (var k = 0; k < n; k++) {
								var x = Q.__getitem__ ([k, n0]);
								var y = Q.__getitem__ ([k, __add__ (n0, 1)]);
								Q.__setitem__ ([k, n0], __add__ (__mul__ (c, x), __mul__ (s, y)));
								Q.__setitem__ ([k, __add__ (n0, 1)], __add__ (__mul__ (__neg__ (__call__ (__conj__, null, s)), x), __mul__ (__call__ (__conj__, null, c), y)));
							}
						}
						for (var j = n0; j < __sub__ (n1, 2); j++) {
							var c = A.__getitem__ ([__add__ (j, 1), j]);
							var s = A.__getitem__ ([__add__ (j, 2), j]);
							var v = __call__ (hypot, null, __call__ (hypot, null, c.real, c.imag), __call__ (hypot, null, s.real, s.imag));
							if (__eq__ (v, 0)) {
								A.__setitem__ ([__add__ (j, 1), j], 0);
								var v = 1;
								var c = 1;
								var s = 0;
							}
							else {
								A.__setitem__ ([__add__ (j, 1), j], v);
								var c = __call__ (__idiv__, null, c, v);
								var s = __call__ (__idiv__, null, s, v);
							}
							A.__setitem__ ([__add__ (j, 2), j], 0);
							for (var k = __add__ (j, 1); k < n; k++) {
								var x = A.__getitem__ ([__add__ (j, 1), k]);
								var y = A.__getitem__ ([__add__ (j, 2), k]);
								A.__setitem__ ([__add__ (j, 1), k], __add__ (__mul__ (__call__ (__conj__, null, c), x), __mul__ (__call__ (__conj__, null, s), y)));
								A.__setitem__ ([__add__ (j, 2), k], __add__ (__mul__ (__neg__ (s), x), __mul__ (c, y)));
							}
							for (var k = 0; k < __call__ (min, null, n1, __add__ (j, 4)); k++) {
								var x = A.__getitem__ ([k, __add__ (j, 1)]);
								var y = A.__getitem__ ([k, __add__ (j, 2)]);
								A.__setitem__ ([k, __add__ (j, 1)], __add__ (__mul__ (c, x), __mul__ (s, y)));
								A.__setitem__ ([k, __add__ (j, 2)], __add__ (__mul__ (__neg__ (__call__ (__conj__, null, s)), x), __mul__ (__call__ (__conj__, null, c), y)));
							}
							if (!(__call__ (isinstance, null, Q, bool))) {
								for (var k = 0; k < n; k++) {
									var x = Q.__getitem__ ([k, __add__ (j, 1)]);
									var y = Q.__getitem__ ([k, __add__ (j, 2)]);
									Q.__setitem__ ([k, __add__ (j, 1)], __add__ (__mul__ (c, x), __mul__ (s, y)));
									Q.__setitem__ ([k, __add__ (j, 2)], __add__ (__mul__ (__neg__ (__call__ (__conj__, null, s)), x), __mul__ (__call__ (__conj__, null, c), y)));
								}
							}
						}
					};
					var hessenberg_qr = function (A, Q) {
						var n = __getitem__ (A.shape, 0);
						var norm = 0;
						for (var x = 0; x < n; x++) {
							for (var y = 0; y < __call__ (min, null, __add__ (x, 2), n); y++) {
								var norm = __call__ (__iadd__, null, norm, __add__ (__mul__ (A.__getitem__ ([y, x]).real, A.__getitem__ ([y, x]).real), __mul__ (A.__getitem__ ([y, x]).imag, A.__getitem__ ([y, x]).imag)));
							}
						}
						var norm = __truediv__ (__call__ (sqrt, null, norm), n);
						if (__eq__ (norm, 0)) {
							return ;
						}
						var n0 = 0;
						var n1 = n;
						var eps = __truediv__ (ctx_eps, __mul__ (100, n));
						var maxits = __mul__ (ctx_dps, 4);
						var __left0__ = 0;
						var its = __left0__;
						var totalits = __left0__;
						while (true) {
							var k = n0;
							while (__lt__ (__add__ (k, 1), n1)) {
								var s = __add__ (__add__ (__add__ (__call__ (abs, null, A.__getitem__ ([k, k]).real), __call__ (abs, null, A.__getitem__ ([k, k]).imag)), __call__ (abs, null, A.__getitem__ ([__add__ (k, 1), __add__ (k, 1)]).real)), __call__ (abs, null, A.__getitem__ ([__add__ (k, 1), __add__ (k, 1)]).imag));
								if (__lt__ (s, __mul__ (eps, norm))) {
									var s = norm;
								}
								if (__lt__ (__call__ (abs, null, A.__getitem__ ([__add__ (k, 1), k])), __mul__ (eps, s))) {
									break;
								}
								var k = __call__ (__iadd__, null, k, 1);
							}
							if (__lt__ (__add__ (k, 1), n1)) {
								A.__setitem__ ([__add__ (k, 1), k], 0);
								var n0 = __add__ (k, 1);
								var its = 0;
								if (__ge__ (__add__ (n0, 1), n1)) {
									var n0 = 0;
									var n1 = __add__ (k, 1);
									if (__lt__ (n1, 2)) {
										return ;
									}
								}
							}
							else {
								if (__eq__ (__mod__ (its, 30), 10)) {
									var shift = A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 2)]);
								}
								else if (__eq__ (__mod__ (its, 30), 20)) {
									var shift = __call__ (abs, null, A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 2)]));
								}
								else if (__eq__ (__mod__ (its, 30), 29)) {
									var shift = norm;
								}
								else {
									var t = __add__ (A.__getitem__ ([__sub__ (n1, 2), __sub__ (n1, 2)]), A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 1)]));
									var s = __add__ (__pow__ (__sub__ (A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 1)]), A.__getitem__ ([__sub__ (n1, 2), __sub__ (n1, 2)])), 2), __mul__ (__mul__ (4, A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 2)])), A.__getitem__ ([__sub__ (n1, 2), __sub__ (n1, 1)])));
									if (__gt__ (s.real, 0)) {
										var s = __call__ (cmath.sqrt, cmath, s);
									}
									else {
										var s = __mul__ (__call__ (cmath.sqrt, cmath, __neg__ (s)), complex (0, 1.0));
									}
									var a = __truediv__ (__add__ (t, s), 2);
									var b = __truediv__ (__sub__ (t, s), 2);
									if (__gt__ (__call__ (abs, null, __sub__ (A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 1)]), a)), __call__ (abs, null, __sub__ (A.__getitem__ ([__sub__ (n1, 1), __sub__ (n1, 1)]), b)))) {
										var shift = b;
									}
									else {
										var shift = a;
									}
								}
								var its = __call__ (__iadd__, null, its, 1);
								var totalits = __call__ (__iadd__, null, totalits, 1);
								__call__ (qr_step, null, n0, n1, A, Q, shift);
								if (__gt__ (its, maxits)) {
									var __except0__ = __call__ (RuntimeError, null, __mod__ ('qr: failed to converge after %d steps', its));
									__except0__.__cause__ = null;
									throw __except0__;
								}
							}
						}
					};
					var schur = function (A, overwrite_a) {
						if (typeof overwrite_a == 'undefined' || (overwrite_a != null && overwrite_a .hasOwnProperty ("__kwargtrans__"))) {;
							var overwrite_a = false;
						};
						var n = __getitem__ (A.shape, 0);
						if (__eq__ (n, 1)) {
							return tuple ([__call__ (array, null, list ([list ([1])]), A.dtype), A]);
						}
						if (!(overwrite_a)) {
							var A = __call__ (copy, null, A);
						}
						var T = __call__ (empty, null, tuple ([n]), A.dtype);
						__call__ (hessenberg_reduce_0, null, A, T);
						var Q = __call__ (copy, null, A);
						__call__ (hessenberg_reduce_1, null, Q, T);
						for (var x = 0; x < n; x++) {
							for (var y = __add__ (x, 2); y < n; y++) {
								A.__setitem__ ([y, x], 0);
							}
						}
						__call__ (hessenberg_qr, null, A, Q);
						return tuple ([Q, A]);
					};
					var eig_tr_r = function (A) {
						var n = __getitem__ (A.shape, 0);
						var ER = __call__ (identity, null, n, A.dtype);
						var eps = ctx_eps;
						var unfl = __call__ (ctx_ldexp, null, ctx_one, __mul__ (__neg__ (ctx_prec), 30));
						var smlnum = __mul__ (unfl, __truediv__ (n, eps));
						var simin = __truediv__ (1, __call__ (sqrt, null, eps));
						var rmax = 1;
						for (var i = 1; i < n; i++) {
							var s = A.__getitem__ ([i, i]);
							var smin = __call__ (max, null, __mul__ (eps, __call__ (abs, null, s)), smlnum);
							for (var j = __sub__ (i, 1); j > __neg__ (1); j--) {
								var r = 0;
								for (var k = __add__ (j, 1); k < __add__ (i, 1); k++) {
									var r = __call__ (__iadd__, null, r, __mul__ (A.__getitem__ ([j, k]), ER.__getitem__ ([k, i])));
								}
								var t = __sub__ (A.__getitem__ ([j, j]), s);
								if (__lt__ (__call__ (abs, null, t), smin)) {
									var t = smin;
								}
								var r = __truediv__ (__neg__ (r), t);
								ER.__setitem__ ([j, i], r);
								var rmax = __call__ (max, null, rmax, __call__ (abs, null, r));
								if (__gt__ (rmax, simin)) {
									for (var k = j; k < __add__ (i, 1); k++) {
										ER.__setitem__ ([k, i], __call__ (__idiv__, null, ER.__getitem__ ([k, i]), rmax));
									}
									var rmax = 1;
								}
							}
							if (__ne__ (rmax, 1)) {
								for (var k = 0; k < __add__ (i, 1); k++) {
									ER.__setitem__ ([k, i], __call__ (__idiv__, null, ER.__getitem__ ([k, i]), rmax));
								}
							}
						}
						return ER;
					};
					var eig_tr_l = function (A) {
						var n = __getitem__ (A.shape, 0);
						var EL = __call__ (identity, null, n, A.dtype);
						var eps = ctx_eps;
						var unfl = __call__ (ctx_ldexp, null, ctx_one, __mul__ (__neg__ (ctx_prec), 30));
						var smlnum = __mul__ (unfl, __truediv__ (n, eps));
						var simin = __truediv__ (1, __call__ (cmath.sqrt, cmath, eps));
						var rmax = 1;
						for (var i = 0; i < __sub__ (n, 1); i++) {
							var s = A.__getitem__ ([i, i]);
							var smin = __call__ (max, null, __mul__ (eps, __call__ (abs, null, s)), smlnum);
							for (var j = __add__ (i, 1); j < n; j++) {
								var r = 0;
								for (var k = i; k < j; k++) {
									var r = __call__ (__iadd__, null, r, __mul__ (EL.__getitem__ ([i, k]), A.__getitem__ ([k, j])));
								}
								var t = __sub__ (A.__getitem__ ([j, j]), s);
								if (__lt__ (__call__ (abs, null, t), smin)) {
									var t = smin;
								}
								var r = __truediv__ (__neg__ (r), t);
								EL.__setitem__ ([i, j], r);
								var rmax = __call__ (max, null, rmax, __call__ (abs, null, r));
								if (__gt__ (rmax, simin)) {
									for (var k = i; k < __add__ (j, 1); k++) {
										EL.__setitem__ ([i, k], __call__ (__idiv__, null, EL.__getitem__ ([i, k]), rmax));
									}
									var rmax = 1;
								}
							}
							if (__ne__ (rmax, 1)) {
								for (var k = i; k < n; k++) {
									EL.__setitem__ ([i, k], __call__ (__idiv__, null, EL.__getitem__ ([i, k]), rmax));
								}
							}
						}
						return EL;
					};
					var eig = function (A, left, right, overwrite_a) {
						if (typeof left == 'undefined' || (left != null && left .hasOwnProperty ("__kwargtrans__"))) {;
							var left = false;
						};
						if (typeof right == 'undefined' || (right != null && right .hasOwnProperty ("__kwargtrans__"))) {;
							var right = true;
						};
						if (typeof overwrite_a == 'undefined' || (overwrite_a != null && overwrite_a .hasOwnProperty ("__kwargtrans__"))) {;
							var overwrite_a = false;
						};
						var n = __getitem__ (A.shape, 0);
						if (__eq__ (n, 1)) {
							if (left && !(right)) {
								return tuple ([list ([__getitem__ (A, 0)]), __call__ (array, null, list ([list ([1])]), A.dtype)]);
							}
							if (right && !(left)) {
								return tuple ([list ([__getitem__ (A, 0)]), __call__ (array, null, list ([list ([1])]), A.dtype)]);
							}
							return tuple ([list ([__getitem__ (A, 0)]), __call__ (array, null, list ([list ([1])]), A.dtype), __call__ (array, null, list ([list ([1])]), A.dtype)]);
						}
						if (!(overwrite_a)) {
							var A = __call__ (copy, null, A);
						}
						var T = __call__ (zeros, null, tuple ([n]), 'complex64');
						__call__ (hessenberg_reduce_0, null, A, T);
						if (left || right) {
							var Q = __call__ (copy, null, A);
							__call__ (hessenberg_reduce_1, null, Q, T);
						}
						else {
							var Q = false;
						}
						for (var x = 0; x < n; x++) {
							for (var y = __add__ (x, 2); y < n; y++) {
								A.__setitem__ ([y, x], 0);
							}
						}
						__call__ (hessenberg_qr, null, A, Q);
						var E = (function () {
							var __accu0__ = [];
							for (var i = 0; i < n; i++) {
								__call__ (__accu0__.append, __accu0__, A.__getitem__ ([i, i]));
							}
							return __accu0__;
						}) ();
						if (!(left || right)) {
							return E;
						}
						if (left) {
							var EL = __call__ (eig_tr_l, null, A);
							var EL = __matmul__ (EL, __call__ (__call__ (__conj__, null, Q).transpose, __call__ (__conj__, null, Q)));
						}
						if (right) {
							var ER = __call__ (eig_tr_r, null, A);
							var ER = __matmul__ (Q, ER);
						}
						if (left && !(right)) {
							return tuple ([E, EL]);
						}
						if (right && !(left)) {
							return tuple ([E, ER]);
						}
						return tuple ([E, EL, ER]);
					};
					__pragma__ ('<use>' +
						'cmath' +
						'math' +
						'numscrypt' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.acos = acos;
						__all__.acosh = acosh;
						__all__.array = array;
						__all__.asin = asin;
						__all__.asinh = asinh;
						__all__.atan = atan;
						__all__.atan2 = atan2;
						__all__.atanh = atanh;
						__all__.ceil = ceil;
						__all__.conjugate = conjugate;
						__all__.copy = copy;
						__all__.cos = cos;
						__all__.cosh = cosh;
						__all__.ctx_dps = ctx_dps;
						__all__.ctx_eps = ctx_eps;
						__all__.ctx_ldexp = ctx_ldexp;
						__all__.ctx_one = ctx_one;
						__all__.ctx_prec = ctx_prec;
						__all__.degrees = degrees;
						__all__.e = e;
						__all__.eig = eig;
						__all__.eig_tr_l = eig_tr_l;
						__all__.eig_tr_r = eig_tr_r;
						__all__.empty = empty;
						__all__.exp = exp;
						__all__.expm1 = expm1;
						__all__.floor = floor;
						__all__.hessenberg = hessenberg;
						__all__.hessenberg_qr = hessenberg_qr;
						__all__.hessenberg_reduce_0 = hessenberg_reduce_0;
						__all__.hessenberg_reduce_1 = hessenberg_reduce_1;
						__all__.hsplit = hsplit;
						__all__.hstack = hstack;
						__all__.hypot = hypot;
						__all__.identity = identity;
						__all__.inf = inf;
						__all__.isinf = isinf;
						__all__.isnan = isnan;
						__all__.log = log;
						__all__.log10 = log10;
						__all__.log1p = log1p;
						__all__.log2 = log2;
						__all__.nan = nan;
						__all__.ndarray = ndarray;
						__all__.ns_buffertype = ns_buffertype;
						__all__.ns_complex = ns_complex;
						__all__.ns_complextype = ns_complextype;
						__all__.ns_createbuf = ns_createbuf;
						__all__.ns_ctors = ns_ctors;
						__all__.ones = ones;
						__all__.pi = pi;
						__all__.pow = pow;
						__all__.qr_step = qr_step;
						__all__.radians = radians;
						__all__.round = round;
						__all__.schur = schur;
						__all__.sin = sin;
						__all__.sinh = sinh;
						__all__.sqrt = sqrt;
						__all__.tan = tan;
						__all__.tanh = tanh;
						__all__.trunc = trunc;
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
		'numscrypt.random', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'numscrypt.random';
					var ns =  __init__ (__world__.numscrypt);
					var rand = function () {
						var dims = tuple ([].slice.apply (arguments).slice (0));
						var result = ns.empty (dims, 'float64');
						for (var i = 0; i < result.size; i++) {
							result.realbuf [i] = Math.random ();
						}
						return result;
					};
					__pragma__ ('<use>' +
						'numscrypt' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.rand = rand;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'random', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var math = {};
					var __name__ = 'random';
					__nest__ (math, '', __init__ (__world__.math));
					var _array = (function () {
						var __accu0__ = [];
						for (var i = 0; i < 624; i++) {
							__accu0__.append (0);
						}
						return __accu0__;
					}) ();
					var _index = 0;
					var _bitmask1 = Math.pow (2, 32) - 1;
					var _bitmask2 = Math.pow (2, 31);
					var _bitmask3 = Math.pow (2, 31) - 1;
					var _fill_array = function () {
						for (var i = 0; i < 624; i++) {
							var y = (_array [i] & _bitmask2) + (_array [__mod__ (i + 1, 624)] & _bitmask3);
							_array [i] = _array [__mod__ (i + 397, 624)] ^ y >> 1;
							if (__mod__ (y, 2) != 0) {
								_array [i] ^= 2567483615;
							}
						}
					};
					var _random_integer = function () {
						if (_index == 0) {
							_fill_array ();
						}
						var y = _array [_index];
						y ^= y >> 11;
						y ^= y << 7 & 2636928640;
						y ^= y << 15 & 4022730752;
						y ^= y >> 18;
						_index = __mod__ (_index + 1, 624);
						return y;
					};
					var seed = function (x) {
						if (typeof x == 'undefined' || (x != null && x .hasOwnProperty ("__kwargtrans__"))) {;
							var x = int (_bitmask3 * Math.random ());
						};
						_array [0] = x;
						for (var i = 1; i < 624; i++) {
							_array [i] = (1812433253 * _array [i - 1] ^ (_array [i - 1] >> 30) + i) & _bitmask1;
						}
					};
					var randint = function (a, b) {
						return a + __mod__ (_random_integer (), (b - a) + 1);
					};
					var choice = function (seq) {
						return seq [randint (0, len (seq) - 1)];
					};
					var random = function () {
						return _random_integer () / _bitmask3;
					};
					var shuffle = function (x) {
						for (var i = len (x) - 1; i > 0; i--) {
							var j = math.floor (random () * (i + 1));
							var temp = x [i];
							x [i] = x [j];
							x [j] = temp;
						}
					};
					seed ();
					__pragma__ ('<use>' +
						'math' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__._array = _array;
						__all__._bitmask1 = _bitmask1;
						__all__._bitmask2 = _bitmask2;
						__all__._bitmask3 = _bitmask3;
						__all__._fill_array = _fill_array;
						__all__._index = _index;
						__all__._random_integer = _random_integer;
						__all__.choice = choice;
						__all__.randint = randint;
						__all__.random = random;
						__all__.seed = seed;
						__all__.shuffle = shuffle;
					__pragma__ ('</all>')
				}
			}
		}
	);
	(function () {
		var random = {};
		var __name__ = '__main__';
		var num =  __init__ (__world__.numscrypt);
		var num_rand =  __init__ (__world__.numscrypt.random);
		var linalg =  __init__ (__world__.numscrypt.linalg);
		__nest__ (random, '', __init__ (__world__.random));
		var result = '';
		for (var useComplex of tuple ([false, true])) {
			for (var transpose of tuple ([false, true])) {
				if (useComplex) {
					var a = num.array ((function () {
						var __accu0__ = [];
						for (var iRow = 0; iRow < 30; iRow++) {
							__accu0__.append ((function () {
								var __accu1__ = [];
								for (var iCol = 0; iCol < 30; iCol++) {
									__accu1__.append (complex (random.random (), random.random ()));
								}
								return __accu1__;
							}) ());
						}
						return __accu0__;
					}) (), 'complex128');
				}
				else {
					var a = num_rand.rand (30, 30);
				}
				var timeStartTranspose = new Date ();
				if (transpose) {
					var a = a.transpose ();
				}
				var timeStartInv = new Date ();
				var ai = linalg.inv (a);
				var timeStartMul = new Date ();
				var id = __matmul__ (a, ai);
				var timeStartScalp = new Date ();
				var sp = __mul__ (a, a);
				var timeStartDiv = new Date ();
				var sp = __truediv__ (a, a);
				var timeStartAdd = new Date ();
				var sp = __add__ (a, a);
				var timeStartSub = new Date ();
				var sp = __sub__ (a, a);
				var timeStartEig = new Date ();
				if (useComplex) {
					var __left0__ = linalg.eig (a.__getitem__ ([tuple ([0, 10, 1]), tuple ([0, 10, 1])]));
					var evals = __left0__ [0];
					var evecs = __left0__ [1];
				}
				var timeEnd = new Date ();
				result += '\n<pre>\na @ ai [0:5, 0:5] =\n\n{}\n'.format (str (num.round (id.__getitem__ ([tuple ([0, 5, 1]), tuple ([0, 5, 1])]), 2)).py_replace (' ', '\t'));
				if (transpose) {
					result += '\nTranspose took: {} ms'.format (timeStartInv - timeStartTranspose);
				}
				result += '\nInverse took: {} ms\nMatrix product (@) took: {} ms\nElementwise product (*) took: {} ms\nDivision took: {} ms\nAddition took: {} ms\nSubtraction took: {} ms\nEigenvals/vecs took: {} ms\n</pre>\n'.format (timeStartMul - timeStartInv, timeStartScalp - timeStartMul, timeStartDiv - timeStartScalp, timeStartAdd - timeStartDiv, timeStartSub - timeStartAdd, timeStartEig - timeStartSub, (useComplex ? timeEnd - timeStartEig : 'N.A.'));
			}
		}
		document.getElementById ('result').innerHTML = result;
		__pragma__ ('<use>' +
			'numscrypt' +
			'numscrypt.linalg' +
			'numscrypt.random' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.a = a;
			__all__.ai = ai;
			__all__.evals = evals;
			__all__.evecs = evecs;
			__all__.id = id;
			__all__.result = result;
			__all__.sp = sp;
			__all__.timeEnd = timeEnd;
			__all__.timeStartAdd = timeStartAdd;
			__all__.timeStartDiv = timeStartDiv;
			__all__.timeStartEig = timeStartEig;
			__all__.timeStartInv = timeStartInv;
			__all__.timeStartMul = timeStartMul;
			__all__.timeStartScalp = timeStartScalp;
			__all__.timeStartSub = timeStartSub;
			__all__.timeStartTranspose = timeStartTranspose;
			__all__.transpose = transpose;
			__all__.useComplex = useComplex;
		__pragma__ ('</all>')
	}) ();
    return __all__;
}
window ['test'] = test ();
