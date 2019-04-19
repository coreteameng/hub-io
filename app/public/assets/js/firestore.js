! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e(t.firebase)
}(this, function (t) {
    "use strict";
    try {
        (function () {
            var e;
            t = t && t.hasOwnProperty("default") ? t.default : t,
                function (t) {
                    t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
                }(e || (e = {}));
            var n = e.INFO,
                r = function (t, n) {
                    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    if (!(n < t.logLevel)) {
                        var o = (new Date).toISOString();
                        switch (n) {
                            case e.DEBUG:
                            case e.VERBOSE:
                                console.log.apply(console, ["[" + o + "]  " + t.name + ":"].concat(r));
                                break;
                            case e.INFO:
                                console.info.apply(console, ["[" + o + "]  " + t.name + ":"].concat(r));
                                break;
                            case e.WARN:
                                console.warn.apply(console, ["[" + o + "]  " + t.name + ":"].concat(r));
                                break;
                            case e.ERROR:
                                console.error.apply(console, ["[" + o + "]  " + t.name + ":"].concat(r));
                                break;
                            default:
                                throw new Error("Attempted to log a message with an invalid logType (value: " + n + ")")
                        }
                    }
                },
                i = function () {
                    function t(t) {
                        this.name = t, this._logLevel = n, this._logHandler = r
                    }
                    return Object.defineProperty(t.prototype, "logLevel", {
                        get: function () {
                            return this._logLevel
                        },
                        set: function (t) {
                            if (!(t in e)) throw new TypeError("Invalid value assigned to `logLevel`");
                            this._logLevel = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "logHandler", {
                        get: function () {
                            return this._logHandler
                        },
                        set: function (t) {
                            if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.debug = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this._logHandler.apply(this, [this, e.DEBUG].concat(t))
                    }, t.prototype.log = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this._logHandler.apply(this, [this, e.VERBOSE].concat(t))
                    }, t.prototype.info = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this._logHandler.apply(this, [this, e.INFO].concat(t))
                    }, t.prototype.warn = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this._logHandler.apply(this, [this, e.WARN].concat(t))
                    }, t.prototype.error = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this._logHandler.apply(this, [this, e.ERROR].concat(t))
                    }, t
                }(),
                o = Object.setPrototypeOf || {
                    __proto__: []
                }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };

            function s(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function a(t, e, n, r) {
                return new(n || (n = Promise))(function (i, o) {
                    function s(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        t.done ? i(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(s, a)
                    }
                    u((r = r.apply(t, e || [])).next())
                })
            }

            function u(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }), o;

                function a(o) {
                    return function (a) {
                        return function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var c, h = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                l = l || {},
                f = h;

            function d(t) {
                return "string" == typeof t
            }

            function p(t, e) {
                t = t.split("."), e = e || f;
                for (var n = 0; n < t.length; n++)
                    if (null == (e = e[t[n]])) return null;
                return e
            }

            function m() {}

            function y(t) {
                var e = typeof t;
                if ("object" == e) {
                    if (!t) return "null";
                    if (t instanceof Array) return "array";
                    if (t instanceof Object) return e;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                } else if ("function" == e && void 0 === t.call) return "object";
                return e
            }

            function g(t) {
                return "array" == y(t)
            }

            function v(t) {
                var e = y(t);
                return "array" == e || "object" == e && "number" == typeof t.length
            }

            function b(t) {
                return "function" == y(t)
            }

            function w(t) {
                var e = typeof t;
                return "object" == e && null != t || "function" == e
            }
            var E = "closure_uid_" + (1e9 * Math.random() >>> 0),
                S = 0;

            function T(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function I(t, e, n) {
                if (!t) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, r), t.apply(e, n)
                    }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function C(t, e, n) {
                return (C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? T : I).apply(null, arguments)
            }

            function D(t, e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var e = n.slice();
                    return e.push.apply(e, arguments), t.apply(this, e)
                }
            }
            var N = Date.now || function () {
                return +new Date
            };

            function A(t, e) {
                function n() {}
                n.prototype = e.prototype, t.L = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.mh = function (t, n, r) {
                    for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                    return e.prototype[n].apply(t, i)
                }
            }

            function k(t) {
                if (Error.captureStackTrace) Error.captureStackTrace(this, k);
                else {
                    var e = Error().stack;
                    e && (this.stack = e)
                }
                t && (this.message = String(t))
            }

            function R(t, e) {
                for (var n = "", r = (t = t.split("%s")).length - 1, i = 0; i < r; i++) n += t[i] + (i < e.length ? e[i] : "%s");
                k.call(this, n + t[r])
            }

            function M() {
                0 != O && (_[this[E] || (this[E] = ++S)] = this), this.Ka = this.Ka, this.Qa = this.Qa
            }
            A(k, Error), k.prototype.name = "CustomError", A(R, k), R.prototype.name = "AssertionError";
            var O = 0,
                _ = {};
            M.prototype.Ka = !1, M.prototype.bb = function () {
                if (!this.Ka && (this.Ka = !0, this.F(), 0 != O)) {
                    var t = this[E] || (this[E] = ++S);
                    if (0 != O && this.Qa && 0 < this.Qa.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                    delete _[t]
                }
            }, M.prototype.F = function () {
                if (this.Qa)
                    for (; this.Qa.length;) this.Qa.shift()()
            };
            var P = Array.prototype.indexOf ? function (t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                } : function (t, e) {
                    if (d(t)) return d(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                L = Array.prototype.lastIndexOf ? function (t, e) {
                    return Array.prototype.lastIndexOf.call(t, e, t.length - 1)
                } : function (t, e) {
                    var n = t.length - 1;
                    if (0 > n && (n = Math.max(0, t.length + n)), d(t)) return d(e) && 1 == e.length ? t.lastIndexOf(e, n) : -1;
                    for (; 0 <= n; n--)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                x = Array.prototype.forEach ? function (t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                } : function (t, e, n) {
                    for (var r = t.length, i = d(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                },
                q = Array.prototype.some ? function (t, e) {
                    return Array.prototype.some.call(t, e, void 0)
                } : function (t, e) {
                    for (var n = t.length, r = d(t) ? t.split("") : t, i = 0; i < n; i++)
                        if (i in r && e.call(void 0, r[i], i, t)) return !0;
                    return !1
                };

            function F(t) {
                if (!g(t))
                    for (var e = t.length - 1; 0 <= e; e--) delete t[e];
                t.length = 0
            }

            function B(t, e) {
                var n;
                return (n = 0 <= (e = P(t, e))) && Array.prototype.splice.call(t, e, 1), n
            }

            function U(t) {
                return Array.prototype.concat.apply([], arguments)
            }

            function V(t) {
                var e = t.length;
                if (0 < e) {
                    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                    return n
                }
                return []
            }

            function Q(t) {
                return /^[\s\xa0]*$/.test(t)
            }
            var K, W = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            };

            function j(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            t: {
                var z = f.navigator;
                if (z) {
                    var G = z.userAgent;
                    if (G) {
                        K = G;
                        break t
                    }
                }
                K = ""
            }

            function H(t) {
                return -1 != K.indexOf(t)
            }

            function X(t, e, n) {
                for (var r in t) e.call(n, t[r], r, t)
            }

            function Y(t) {
                var e, n = [],
                    r = 0;
                for (e in t) n[r++] = t[e];
                return n
            }

            function J(t) {
                var e, n = [],
                    r = 0;
                for (e in t) n[r++] = e;
                return n
            }

            function Z(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            }
            var $ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function tt(t, e) {
                for (var n, r, i = 1; i < arguments.length; i++) {
                    for (n in r = arguments[i]) t[n] = r[n];
                    for (var o = 0; o < $.length; o++) n = $[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
            }

            function et(t) {
                return et[" "](t), t
            }
            et[" "] = m;
            var nt, rt, it = H("Opera"),
                ot = H("Trident") || H("MSIE"),
                st = H("Edge"),
                at = st || ot,
                ut = H("Gecko") && !(-1 != K.toLowerCase().indexOf("webkit") && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge"),
                ct = -1 != K.toLowerCase().indexOf("webkit") && !H("Edge");

            function ht() {
                var t = f.document;
                return t ? t.documentMode : void 0
            }
            t: {
                var lt = "",
                    ft = (rt = K, ut ? /rv:([^\);]+)(\)|;)/.exec(rt) : st ? /Edge\/([\d\.]+)/.exec(rt) : ot ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rt) : ct ? /WebKit\/(\S+)/.exec(rt) : it ? /(?:Version)[ \/]?(\S+)/.exec(rt) : void 0);
                if (ft && (lt = ft ? ft[1] : ""), ot) {
                    var dt = ht();
                    if (null != dt && dt > parseFloat(lt)) {
                        nt = String(dt);
                        break t
                    }
                }
                nt = lt
            }
            var pt, mt = {};

            function yt(t) {
                return function (t, e) {
                    var n = mt;
                    return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                }(t, function () {
                    for (var e = 0, n = W(String(nt)).split("."), r = W(String(t)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == e && o < i; o++) {
                        var s = n[o] || "",
                            a = r[o] || "";
                        do {
                            if (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == s[0].length && 0 == a[0].length) break;
                            e = j(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || j(0 == s[2].length, 0 == a[2].length) || j(s[2], a[2]), s = s[3], a = a[3]
                        } while (0 == e)
                    }
                    return 0 <= e
                })
            }
            var gt = f.document;
            pt = gt && ot ? ht() || ("CSS1Compat" == gt.compatMode ? parseInt(nt, 10) : 5) : void 0;
            var vt = Object.freeze || function (t) {
                    return t
                },
                bt = !ot || 9 <= Number(pt),
                wt = ot && !yt("9"),
                Et = function () {
                    if (!f.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                    try {
                        f.addEventListener("test", m, e), f.removeEventListener("test", m, e)
                    } catch (t) {}
                    return t
                }();

            function St(t, e) {
                this.type = t, this.currentTarget = this.target = e, this.defaultPrevented = this.Ea = !1, this.Be = !0
            }

            function Tt(t, e) {
                St.call(this, t ? t.type : ""), this.relatedTarget = this.currentTarget = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0, this.key = "", this.charCode = this.keyCode = 0, this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.fb = null, t && this.Kf(t, e)
            }
            St.prototype.stopPropagation = function () {
                this.Ea = !0
            }, St.prototype.preventDefault = function () {
                this.defaultPrevented = !0, this.Be = !1
            }, A(Tt, St);
            var It = vt({
                2: "touch",
                3: "pen",
                4: "mouse"
            });
            Tt.prototype.Kf = function (t, e) {
                var n = this.type = t.type,
                    r = t.changedTouches ? t.changedTouches[0] : null;
                if (this.target = t.target || t.srcElement, this.currentTarget = e, e = t.relatedTarget) {
                    if (ut) {
                        t: {
                            try {
                                et(e.nodeName);
                                var i = !0;
                                break t
                            } catch (t) {}
                            i = !1
                        }
                        i || (e = null)
                    }
                } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                this.relatedTarget = e, null === r ? (this.offsetX = ct || void 0 !== t.offsetX ? t.offsetX : t.layerX, this.offsetY = ct || void 0 !== t.offsetY ? t.offsetY : t.layerY, this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = t.button, this.keyCode = t.keyCode || 0, this.key = t.key || "", this.charCode = t.charCode || ("keypress" == n ? t.keyCode : 0), this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = d(t.pointerType) ? t.pointerType : It[t.pointerType] || "", this.state = t.state, this.fb = t, t.defaultPrevented && this.preventDefault()
            }, Tt.prototype.stopPropagation = function () {
                Tt.L.stopPropagation.call(this), this.fb.stopPropagation ? this.fb.stopPropagation() : this.fb.cancelBubble = !0
            }, Tt.prototype.preventDefault = function () {
                Tt.L.preventDefault.call(this);
                var t = this.fb;
                if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, wt) try {
                    (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                } catch (t) {}
            };
            var Ct = "closure_listenable_" + (1e6 * Math.random() | 0);

            function Dt(t) {
                return !(!t || !t[Ct])
            }
            var Nt = 0;

            function At(t, e, n, r, i) {
                this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.Ob = i, this.key = ++Nt, this.Sa = this.Eb = !1
            }

            function kt(t) {
                this.src = t, this.J = {}, this.xb = 0
            }

            function Rt(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!o.Sa && o.listener == e && o.capture == !!n && o.Ob == r) return i
                }
                return -1
            }
            At.prototype.Vb = function () {
                this.Sa = !0, this.Ob = this.src = this.proxy = this.listener = null
            }, (c = kt.prototype).add = function (t, e, n, r, i) {
                var o = t.toString();
                (t = this.J[o]) || (t = this.J[o] = [], this.xb++);
                var s = Rt(t, e, r, i);
                return -1 < s ? (e = t[s], n || (e.Eb = !1)) : ((e = new At(e, this.src, o, !!r, i)).Eb = n, t.push(e)), e
            }, c.remove = function (t, e, n, r) {
                if (!((t = t.toString()) in this.J)) return !1;
                var i = this.J[t];
                return -1 < (e = Rt(i, e, n, r)) && (i[e].Vb(), Array.prototype.splice.call(i, e, 1), 0 == i.length && (delete this.J[t], this.xb--), !0)
            }, c.ye = function (t) {
                var e = t.type;
                e in this.J && B(this.J[e], t) && (t.Vb(), 0 == this.J[e].length && (delete this.J[e], this.xb--))
            }, c.pb = function (t) {
                var e;
                for (e in t = t && t.toString(), this.J)
                    if (!t || e == t) {
                        for (var n = this.J[e], r = 0; r < n.length; r++) n[r].Vb();
                        delete this.J[e], this.xb--
                    }
            }, c.jb = function (t, e, n, r) {
                var i = -1;
                return (t = this.J[t.toString()]) && (i = Rt(t, e, n, r)), -1 < i ? t[i] : null
            };
            var Mt = "closure_lm_" + (1e6 * Math.random() | 0),
                Ot = {};

            function _t(t, e, n, r, i) {
                if (r && r.once) return Lt(t, e, n, r, i);
                if (g(e)) {
                    for (var o = 0; o < e.length; o++) _t(t, e[o], n, r, i);
                    return null
                }
                return n = Kt(n), Dt(t) ? t.nb(e, n, w(r) ? !!r.capture : !!r, i) : Pt(t, e, n, !1, r, i)
            }

            function Pt(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var s = w(i) ? !!i.capture : !!i,
                    a = Vt(t);
                if (a || (t[Mt] = a = new kt(t)), (n = a.add(e, n, r, s, o)).proxy) return n;
                if (r = function () {
                        var t = Ut,
                            e = bt ? function (n) {
                                return t.call(e.src, e.listener, n)
                            } : function (n) {
                                if (!(n = t.call(e.src, e.listener, n))) return n
                            };
                        return e
                    }(), n.proxy = r, r.src = t, r.listener = n, t.addEventListener) Et || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(qt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function Lt(t, e, n, r, i) {
                if (g(e)) {
                    for (var o = 0; o < e.length; o++) Lt(t, e[o], n, r, i);
                    return null
                }
                return n = Kt(n), Dt(t) ? t.Oc(e, n, w(r) ? !!r.capture : !!r, i) : Pt(t, e, n, !0, r, i)
            }

            function xt(t) {
                if ("number" != typeof t && t && !t.Sa) {
                    var e = t.src;
                    if (Dt(e)) e.Le(t);
                    else {
                        var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(qt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Vt(e)) ? (n.ye(t), 0 == n.xb && (n.src = null, e[Mt] = null)) : t.Vb()
                    }
                }
            }

            function qt(t) {
                return t in Ot ? Ot[t] : Ot[t] = "on" + t
            }

            function Ft(t, e, n, r) {
                var i = !0;
                if ((t = Vt(t)) && (e = t.J[e.toString()]))
                    for (e = e.concat(), t = 0; t < e.length; t++) {
                        var o = e[t];
                        o && o.capture == n && !o.Sa && (o = Bt(o, r), i = i && !1 !== o)
                    }
                return i
            }

            function Bt(t, e) {
                var n = t.listener,
                    r = t.Ob || t.src;
                return t.Eb && xt(t), n.call(r, e)
            }

            function Ut(t, e) {
                if (t.Sa) return !0;
                if (!bt) {
                    var n = e || p("window.event");
                    e = new Tt(n, this);
                    var r = !0;
                    if (!(0 > n.keyCode || void 0 != n.returnValue)) {
                        t: {
                            var i = !1;
                            if (0 == n.keyCode) try {
                                n.keyCode = -1;
                                break t
                            } catch (t) {
                                i = !0
                            }(i || void 0 == n.returnValue) && (n.returnValue = !0)
                        }
                        for (n = [], i = e.currentTarget; i; i = i.parentNode) n.push(i);
                        for (t = t.type, i = n.length - 1; !e.Ea && 0 <= i; i--) {
                            e.currentTarget = n[i];
                            var o = Ft(n[i], t, !0, e);
                            r = r && o
                        }
                        for (i = 0; !e.Ea && i < n.length; i++) e.currentTarget = n[i],
                        o = Ft(n[i], t, !1, e),
                        r = r && o
                    }
                    return r
                }
                return Bt(t, new Tt(e, this))
            }

            function Vt(t) {
                return (t = t[Mt]) instanceof kt ? t : null
            }
            var Qt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function Kt(t) {
                return b(t) ? t : (t[Qt] || (t[Qt] = function (e) {
                    return t.handleEvent(e)
                }), t[Qt])
            }

            function Wt() {
                M.call(this), this.ka = new kt(this), this.Pe = this, this.Uc = null
            }
            A(Wt, M), Wt.prototype[Ct] = !0, (c = Wt.prototype).addEventListener = function (t, e, n, r) {
                _t(this, t, e, n, r)
            }, c.removeEventListener = function (t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (g(n))
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                    else i = w(i) ? !!i.capture : !!i, r = Kt(r), Dt(e) ? e.ed(n, r, i, o) : e && (e = Vt(e)) && (n = e.jb(n, r, i, o)) && xt(n)
                }(this, t, e, n, r)
            }, c.dispatchEvent = function (t) {
                var e, n = this.Uc;
                if (n)
                    for (e = []; n; n = n.Uc) e.push(n);
                n = this.Pe;
                var r = t.type || t;
                if (d(t)) t = new St(t, n);
                else if (t instanceof St) t.target = t.target || n;
                else {
                    var i = t;
                    tt(t = new St(r, n), i)
                }
                if (i = !0, e)
                    for (var o = e.length - 1; !t.Ea && 0 <= o; o--) {
                        var s = t.currentTarget = e[o];
                        i = s.Lb(r, !0, t) && i
                    }
                if (t.Ea || (i = (s = t.currentTarget = n).Lb(r, !0, t) && i, t.Ea || (i = s.Lb(r, !1, t) && i)), e)
                    for (o = 0; !t.Ea && o < e.length; o++) i = (s = t.currentTarget = e[o]).Lb(r, !1, t) && i;
                return i
            }, c.F = function () {
                Wt.L.F.call(this), this.pg(), this.Uc = null
            }, c.nb = function (t, e, n, r) {
                return this.ka.add(String(t), e, !1, n, r)
            }, c.Oc = function (t, e, n, r) {
                return this.ka.add(String(t), e, !0, n, r)
            }, c.ed = function (t, e, n, r) {
                this.ka.remove(String(t), e, n, r)
            }, c.Le = function (t) {
                this.ka.ye(t)
            }, c.pg = function () {
                this.ka && this.ka.pb(void 0)
            }, c.Lb = function (t, e, n) {
                if (!(t = this.ka.J[String(t)])) return !0;
                t = t.concat();
                for (var r = !0, i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o && !o.Sa && o.capture == e) {
                        var s = o.listener,
                            a = o.Ob || o.src;
                        o.Eb && this.Le(o), r = !1 !== s.call(a, n) && r
                    }
                }
                return r && 0 != n.Be
            }, c.jb = function (t, e, n, r) {
                return this.ka.jb(String(t), e, n, r)
            };
            var jt = f.JSON.stringify;

            function zt(t, e) {
                this.Sf = 100, this.ef = t, this.ug = e, this.Zb = 0, this.Pb = null
            }

            function Gt() {
                this.lc = this.Va = null
            }
            zt.prototype.get = function () {
                if (0 < this.Zb) {
                    this.Zb--;
                    var t = this.Pb;
                    this.Pb = t.next, t.next = null
                } else t = this.ef();
                return t
            }, zt.prototype.put = function (t) {
                this.ug(t), this.Zb < this.Sf && (this.Zb++, t.next = this.Pb, this.Pb = t)
            };
            var Ht, Xt, Yt = new zt(function () {
                return new Jt
            }, function (t) {
                t.reset()
            });

            function Jt() {
                this.next = this.scope = this.Gc = null
            }

            function Zt(t) {
                f.setTimeout(function () {
                    throw t
                }, 0)
            }

            function $t() {
                if (f.Promise && f.Promise.resolve) {
                    var t = f.Promise.resolve(void 0);
                    Xt = function () {
                        t.then(ne)
                    }
                } else Xt = function () {
                    var t = ne;
                    !b(f.setImmediate) || f.Window && f.Window.prototype && !H("Edge") && f.Window.prototype.setImmediate == f.setImmediate ? (Ht || (Ht = function () {
                        var t = f.MessageChannel;
                        if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !H("Presto") && (t = function () {
                                var t = document.createElement("IFRAME");
                                t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
                                var e = t.contentWindow;
                                (t = e.document).open(), t.write(""), t.close();
                                var n = "callImmediate" + Math.random(),
                                    r = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                t = C(function (t) {
                                    "*" != r && t.origin != r || t.data != n || this.port1.onmessage()
                                }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                                    postMessage: function () {
                                        e.postMessage(n, r)
                                    }
                                }
                            }), void 0 !== t && !H("Trident") && !H("MSIE")) {
                            var e = new t,
                                n = {},
                                r = n;
                            return e.port1.onmessage = function () {
                                    if (void 0 !== n.next) {
                                        var t = (n = n.next).rd;
                                        n.rd = null, t()
                                    }
                                },
                                function (t) {
                                    r.next = {
                                        rd: t
                                    }, r = r.next, e.port2.postMessage(0)
                                }
                        }
                        return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (t) {
                            var e = document.createElement("SCRIPT");
                            e.onreadystatechange = function () {
                                e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
                            }, document.documentElement.appendChild(e)
                        } : function (t) {
                            f.setTimeout(t, 0)
                        }
                    }()), Ht(t)) : f.setImmediate(t)
                }
            }
            Gt.prototype.add = function (t, e) {
                var n = this.Af();
                n.set(t, e), this.lc ? this.lc.next = n : this.Va = n, this.lc = n
            }, Gt.prototype.remove = function () {
                var t = null;
                return this.Va && (t = this.Va, this.Va = this.Va.next, this.Va || (this.lc = null), t.next = null), t
            }, Gt.prototype.wg = function (t) {
                Yt.put(t)
            }, Gt.prototype.Af = function () {
                return Yt.get()
            }, Jt.prototype.set = function (t, e) {
                this.Gc = t, this.scope = e, this.next = null
            }, Jt.prototype.reset = function () {
                this.next = this.scope = this.Gc = null
            };
            var te = !1,
                ee = new Gt;

            function ne() {
                for (var t; t = ee.remove();) {
                    try {
                        t.Gc.call(t.scope)
                    } catch (t) {
                        Zt(t)
                    }
                    ee.wg(t)
                }
                te = !1
            }

            function re(t, e) {
                Wt.call(this), this.Na = t || 1, this.wb = e || f, this.nd = C(this.Rg, this), this.ie = N()
            }

            function ie(t, e, n) {
                if (b(t)) n && (t = C(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = C(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : f.setTimeout(t, e || 0)
            }

            function oe(t, e, n) {
                M.call(this), this.Uf = null != n ? C(t, n) : t, this.Na = e, this.Xe = C(this.fg, this), this.qc = []
            }

            function se(t) {
                M.call(this), this.i = t, this.o = {}
            }
            A(re, Wt), (c = re.prototype).enabled = !1, c.B = null, c.setInterval = function (t) {
                this.Na = t, this.B && this.enabled ? (this.stop(), this.start()) : this.B && this.stop()
            }, c.Rg = function () {
                if (this.enabled) {
                    var t = N() - this.ie;
                    0 < t && t < .8 * this.Na ? this.B = this.wb.setTimeout(this.nd, this.Na - t) : (this.B && (this.wb.clearTimeout(this.B), this.B = null), this.ff(), this.enabled && (this.stop(), this.start()))
                }
            }, c.ff = function () {
                this.dispatchEvent("tick")
            }, c.start = function () {
                this.enabled = !0, this.B || (this.B = this.wb.setTimeout(this.nd, this.Na), this.ie = N())
            }, c.stop = function () {
                this.enabled = !1, this.B && (this.wb.clearTimeout(this.B), this.B = null)
            }, c.F = function () {
                re.L.F.call(this), this.stop(), delete this.wb
            }, A(oe, M), (c = oe.prototype).Ta = !1, c.ob = 0, c.B = null, c.mf = function (t) {
                this.qc = arguments, this.B || this.ob ? this.Ta = !0 : this.Cc()
            }, c.stop = function () {
                this.B && (f.clearTimeout(this.B), this.B = null, this.Ta = !1, this.qc = [])
            }, c.pause = function () {
                this.ob++
            }, c.resume = function () {
                this.ob--, this.ob || !this.Ta || this.B || (this.Ta = !1, this.Cc())
            }, c.F = function () {
                oe.L.F.call(this), this.stop()
            }, c.fg = function () {
                this.B = null, this.Ta && !this.ob && (this.Ta = !1, this.Cc())
            }, c.Cc = function () {
                this.B = ie(this.Xe, this.Na), this.Uf.apply(null, this.qc)
            }, A(se, M);
            var ae = [];

            function ue(t, e, n) {
                this.reset(t, e, n, void 0, void 0)
            }

            function ce(t) {
                this.pe = t, this.Zd = this.uc = this.mb = this.$b = null
            }

            function he(t, e) {
                this.name = t, this.value = e
            }(c = se.prototype).nb = function (t, e, n, r) {
                return this.Tf(t, e, n, r)
            }, c.Tf = function (t, e, n, r) {
                g(e) || (e && (ae[0] = e.toString()), e = ae);
                for (var i = 0; i < e.length; i++) {
                    var o = _t(t, e[i], n || this.handleEvent, r || !1, this.i || this);
                    if (!o) break;
                    this.o[o.key] = o
                }
                return this
            }, c.Oc = function (t, e, n, r) {
                return this.je(t, e, n, r)
            }, c.je = function (t, e, n, r, i) {
                if (g(e))
                    for (var o = 0; o < e.length; o++) this.je(t, e[o], n, r, i);
                else {
                    if (!(t = Lt(t, e, n || this.handleEvent, r, i || this.i || this))) return this;
                    this.o[t.key] = t
                }
                return this
            }, c.ed = function (t, e, n, r, i) {
                if (g(e))
                    for (var o = 0; o < e.length; o++) this.ed(t, e[o], n, r, i);
                else n = n || this.handleEvent, r = w(r) ? !!r.capture : !!r, i = i || this.i || this, n = Kt(n), r = !!r, (e = Dt(t) ? t.jb(e, n, r, i) : t && (t = Vt(t)) ? t.jb(e, n, r, i) : null) && (xt(e), delete this.o[e.key])
            }, c.pb = function () {
                X(this.o, function (t, e) {
                    this.o.hasOwnProperty(e) && xt(t)
                }, this), this.o = {}
            }, c.F = function () {
                se.L.F.call(this), this.pb()
            }, c.handleEvent = function () {
                throw Error("EventHandler.handleEvent not implemented")
            }, ue.prototype.Md = null, ue.prototype.reset = function (t, e, n, r, i) {
                this.mb = t, delete this.Md
            }, ue.prototype.Bg = function (t) {
                this.Md = t
            }, ue.prototype.Ge = function (t) {
                this.mb = t
            }, he.prototype.toString = function () {
                return this.name
            };
            var le = new he("SEVERE", 1e3),
                fe = new he("WARNING", 900),
                de = new he("INFO", 800),
                pe = new he("CONFIG", 700),
                me = new he("FINE", 500);
            (c = ce.prototype).getName = function () {
                return this.pe
            }, c.getParent = function () {
                return this.$b
            }, c.pf = function () {
                return this.uc || (this.uc = {}), this.uc
            }, c.Ge = function (t) {
                this.mb = t
            }, c.Qd = function () {
                return this.mb ? this.mb : this.$b ? this.$b.Qd() : (function (t, e) {
                    throw new R("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
                }("Root logger has no level set."), null)
            }, c.Pf = function (t) {
                return t.value >= this.Qd().value
            }, c.log = function (t, e, n) {
                this.Pf(t) && (b(e) && (e = e()), this.gf(this.uf(t, e, n)))
            }, c.uf = function (t, e, n) {
                return t = new ue(t, String(e), this.pe), n && t.Bg(n), t
            }, c.ca = function (t, e) {
                this.log(le, t, e)
            }, c.T = function (t, e) {
                this.log(fe, t, e)
            }, c.info = function (t, e) {
                this.log(de, t, e)
            }, c.lf = function (t) {
                this.log(me, t, void 0)
            }, c.gf = function (t) {
                for (var e = this; e;) e.We(t), e = e.getParent()
            }, c.We = function (t) {
                if (this.Zd)
                    for (var e, n = 0; e = this.Zd[n]; n++) e(t)
            }, c.Fg = function (t) {
                this.$b = t
            }, c.Qe = function (t, e) {
                this.pf()[t] = e
            };
            var ye = {},
                ge = null;

            function ve(t) {
                var e;
                if (ge || (ge = new ce(""), ye[""] = ge, ge.Ge(pe)), !(e = ye[t])) {
                    e = new ce(t);
                    var n = t.lastIndexOf("."),
                        r = t.substr(n + 1);
                    (n = ve(t.substr(0, n))).Qe(r, e), e.Fg(n), ye[t] = e
                }
                return e
            }

            function be(t, e) {
                t && t.info(e, void 0)
            }

            function we(t, e) {
                t && t.lf(e)
            }

            function Ee() {
                this.s = ve("goog.labs.net.webChannel.WebChannelDebug"), this.Wc = !0
            }(c = Ee.prototype).Id = function () {
                this.Wc = !1
            }, c.Tg = function (t, e, n, r, i) {
                var o = this;
                this.info(function () {
                    return "XMLHTTP REQ (" + n + ") [attempt " + r + "]: " + t + "\n" + e + "\n" + o.Xf(i)
                })
            }, c.Ug = function (t, e, n, r, i, o) {
                this.info(function () {
                    return "XMLHTTP RESP (" + n + ") [ attempt " + r + "]: " + t + "\n" + e + "\n" + i + " " + o
                })
            }, c.Wa = function (t, e, n) {
                var r = this;
                this.info(function () {
                    return "XMLHTTP TEXT (" + t + "): " + r.ng(e) + (n ? " " + n : "")
                })
            }, c.Sg = function (t) {
                this.info(function () {
                    return "TIMEOUT: " + t
                })
            }, c.debug = function (t) {
                we(this.s, t)
            }, c.cb = function (t, e) {
                var n = this.s;
                n && n.ca(e || "Exception", t)
            }, c.info = function (t) {
                be(this.s, t)
            }, c.T = function (t) {
                var e = this.s;
                e && e.T(t, void 0)
            }, c.ca = function (t) {
                var e = this.s;
                e && e.ca(t, void 0)
            }, c.ng = function (t) {
                if (!this.Wc) return t;
                if (!t) return null;
                try {
                    var e = JSON.parse(t);
                    if (e)
                        for (var n = 0; n < e.length; n++) g(e[n]) && this.Wf(e[n]);
                    return jt(e)
                } catch (e) {
                    return this.debug("Exception parsing expected JS array - probably was not JS"), t
                }
            }, c.Wf = function (t) {
                if (!(2 > t.length || (t = t[1], !g(t) || 1 > t.length))) {
                    var e = t[0];
                    if ("noop" != e && "stop" != e && "close" != e)
                        for (e = 1; e < t.length; e++) t[e] = ""
                }
            }, c.Xf = function (t) {
                if (!this.Wc) return t;
                if (!t) return null;
                var e = "";
                t = t.split("&");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].split("=");
                    if (1 < r.length) {
                        var i = r[0];
                        r = r[1];
                        var o = i.split("_");
                        e = 2 <= o.length && "type" == o[1] ? e + (i + "=") + r + "&" : e + (i + "=redacted&")
                    }
                }
                return e
            };
            var Se = new Wt;

            function Te(t) {
                St.call(this, "serverreachability", t)
            }

            function Ie(t) {
                Se.dispatchEvent(new Te(Se, t))
            }

            function Ce(t, e) {
                St.call(this, "statevent", t), this.stat = e
            }

            function De(t) {
                Se.dispatchEvent(new Ce(Se, t))
            }

            function Ne(t, e, n) {
                St.call(this, "timingevent", t), this.size = e, this.rtt = n
            }

            function Ae(t, e) {
                if (!b(t)) throw Error("Fn must not be null and must be a function");
                return f.setTimeout(function () {
                    t()
                }, e)
            }
            A(Te, St), A(Ce, St), A(Ne, St);
            var ke = {
                    NO_ERROR: 0,
                    Vg: 1,
                    bh: 2,
                    ah: 3,
                    Yg: 4,
                    $g: 5,
                    dh: 6,
                    Ne: 7,
                    TIMEOUT: 8,
                    gh: 9
                },
                Re = {
                    Xg: "complete",
                    kh: "success",
                    Oe: "error",
                    Ne: "abort",
                    ih: "ready",
                    jh: "readystatechange",
                    TIMEOUT: "timeout",
                    eh: "incrementaldata",
                    hh: "progress",
                    Zg: "downloadprogress",
                    lh: "uploadprogress"
                };

            function Me() {}

            function Oe() {}
            Me.prototype.pd = null, Me.prototype.Vd = function () {
                return this.pd || (this.pd = this.Mf())
            };
            var _e, Pe = {
                OPEN: "a",
                Wg: "b",
                Oe: "c",
                fh: "d"
            };

            function Le() {
                St.call(this, "d")
            }

            function xe() {
                St.call(this, "c")
            }

            function qe() {}

            function Fe(t, e, n, r, i) {
                this.b = t, this.a = e, this.ra = n, this.R = r, this.Xc = i || 1, this.Fc = new se(this), this.Ua = Be, t = at ? 125 : void 0, this.Vc = new re(t), this.A = null, this.S = !1, this.Da = this.pa = this.ua = this.ic = this.qb = this.hd = this.Ga = null, this.ba = [], this.h = null, this.Bb = 0, this.I = this.Fa = null, this.w = -1, this.Za = !1, this.Ra = 0, this.ac = null, this.lb = this.Ed = this.yc = !1
            }
            A(Le, St), A(xe, St), A(qe, Me), qe.prototype.Dd = function () {
                var t = this.Wd();
                return t ? new ActiveXObject(t) : new XMLHttpRequest
            }, qe.prototype.Mf = function () {
                var t = {};
                return this.Wd() && (t[0] = !0, t[1] = !0), t
            }, qe.prototype.Wd = function () {
                if (!this.be && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                    for (var t = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0; e < t.length; e++) {
                        var n = t[e];
                        try {
                            return new ActiveXObject(n), this.be = n
                        } catch (t) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                }
                return this.be
            }, _e = new qe;
            var Be = 45e3;
            var Ue = {},
                Ve = {};

            function Qe(t) {
                if (t.H && "function" == typeof t.H) return t.H();
                if (d(t)) return t.split("");
                if (v(t)) {
                    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                    return e
                }
                return Y(t)
            }

            function Ke(t, e, n) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, n);
                else if (v(t) || d(t)) x(t, e, n);
                else {
                    if (t.W && "function" == typeof t.W) var r = t.W();
                    else if (t.H && "function" == typeof t.H) r = void 0;
                    else if (v(t) || d(t)) {
                        r = [];
                        for (var i = t.length, o = 0; o < i; o++) r.push(o)
                    } else r = J(t);
                    o = (i = Qe(t)).length;
                    for (var s = 0; s < o; s++) e.call(n, i[s], r && r[s], t)
                }
            }

            function We(t, e) {
                this.D = {}, this.o = [], this.j = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else t && this.addAll(t)
            }

            function je(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(c = Fe.prototype).ga = function (t) {
                this.A = t
            }, c.setTimeout = function (t) {
                this.Ua = t
            }, c.He = function (t) {
                this.Ra = t
            }, c.Gg = function (t) {
                this.ba = t
            }, c.la = function () {
                return this.ba
            }, c.kd = function (t, e) {
                this.ic = 1, this.ua = t.clone().Ub(), this.Da = e, this.yc = !0, this.Ce(null)
            }, c.jd = function (t, e, n) {
                this.ic = 1, this.ua = t.clone().Ub(), this.Da = null, this.yc = e, this.Ce(n)
            }, c.Ce = function (t) {
                this.qb = N(), this.eb(), this.pa = this.ua.clone(), this.pa.dc("t", this.Xc), this.Bb = 0, this.h = this.b.Jb(this.b.fc() ? t : null), 0 < this.Ra && (this.ac = new oe(C(this.Me, this, this.h), this.Ra)), this.Fc.nb(this.h, "readystatechange", this.mg), t = this.A ? Z(this.A) : {}, this.Da ? (this.Fa || (this.Fa = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", this.h.send(this.pa, this.Fa, this.Da, t)) : (this.Fa = "GET", this.h.send(this.pa, this.Fa, null, t)), Ie(1), this.a.Tg(this.Fa, this.pa, this.R, this.Xc, this.Da)
            }, c.mg = function (t) {
                t = t.target;
                var e = this.ac;
                e && 3 == t.ma() ? (this.a.debug("Throttling readystatechange."), e.mf()) : this.Me(t)
            }, c.Me = function (t) {
                try {
                    t == this.h ? this.hg() : this.a.T("Called back with an unexpected xmlhttp")
                } catch (t) {
                    if (this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.h && this.h.ya()) {
                        var e = this;
                        this.a.cb(t, function () {
                            return "ResponseText: " + e.h.ya()
                        })
                    } else this.a.cb(t, "No response text")
                }
            }, c.hg = function () {
                var t = this.h.ma(),
                    e = this.h.Ud(),
                    n = this.h.za();
                if (!(3 > t || 3 == t && !at && !this.h.ya())) {
                    this.Za || 4 != t || 7 == e || Ie(8 == e || 0 >= n ? 3 : 2), this.Fb();
                    var r = this.h.za();
                    if (this.w = r, !(e = this.h.ya())) {
                        var i = this;
                        this.a.debug(function () {
                            return "No response text for uri " + i.pa + " status " + r
                        })
                    }
                    if (this.S = 200 == r, this.a.Ug(this.Fa, this.pa, this.R, this.Xc, t, r), this.S) {
                        if (this.Ig()) {
                            if (!(n = this.sf())) return this.S = !1, this.I = 3, De(12), this.a.T("XMLHTTP Missing X_HTTP_INITIAL_RESPONSE (" + this.R + ")"), this.Ia(), void this.Kb();
                            this.a.Wa(this.R, n, "Initial handshake response via X-HTTP-Initial-Response"), this.lb = !0, this.Yc(n)
                        }
                        this.yc ? (this.Fd(t, e), at && this.S && 3 == t && this.Ng()) : (this.a.Wa(this.R, e, null), this.Yc(e)), 4 == t && this.Ia(), this.S && !this.Za && (4 == t ? this.b.Tc(this) : (this.S = !1, this.eb()))
                    } else 400 == r && 0 < e.indexOf("Unknown SID") ? (this.I = 3, De(12), this.a.T("XMLHTTP Unknown SID (" + this.R + ")")) : (this.I = 0, De(13), this.a.T("XMLHTTP Bad status " + r + " (" + this.R + ")")), this.Ia(), this.Kb()
                }
            }, c.Ig = function () {
                return this.Ed && !this.lb
            }, c.sf = function () {
                if (this.h) {
                    var t = this.h.kb("X-HTTP-Initial-Response");
                    if (t && !Q(t)) return t
                }
                return null
            }, c.Ag = function () {
                this.Ed = !0
            }, c.Fd = function (t, e) {
                for (var n = !0; !this.Za && this.Bb < e.length;) {
                    var r = this.vf(e);
                    if (r == Ve) {
                        4 == t && (this.I = 4, De(14), n = !1), this.a.Wa(this.R, null, "[Incomplete Response]");
                        break
                    }
                    if (r == Ue) {
                        this.I = 4, De(15), this.a.Wa(this.R, e, "[Invalid Chunk]"), n = !1;
                        break
                    }
                    this.a.Wa(this.R, r, null), this.Yc(r)
                }
                4 == t && 0 == e.length && (this.I = 1, De(16), n = !1), this.S = this.S && n, n || (this.a.Wa(this.R, e, "[Invalid Chunked Response]"), this.Ia(), this.Kb())
            }, c.kg = function () {
                if (this.h) {
                    var t = this.h.ma(),
                        e = this.h.ya();
                    this.Bb < e.length && (this.Fb(), this.Fd(t, e), this.S && 4 != t && this.eb())
                }
            }, c.Ng = function () {
                this.Fc.nb(this.Vc, "tick", this.kg), this.Vc.start()
            }, c.vf = function (t) {
                var e = this.Bb,
                    n = t.indexOf("\n", e);
                return -1 == n ? Ve : (e = Number(t.substring(e, n)), isNaN(e) ? Ue : (n += 1) + e > t.length ? Ve : (t = t.substr(n, e), this.Bb = n + e, t))
            }, c.yg = function (t) {
                this.ic = 2, this.ua = t.clone().Ub(), t = !1, f.navigator && f.navigator.sendBeacon && (t = f.navigator.sendBeacon(this.ua.toString(), "")), !t && f.Image && ((new Image).src = this.ua, t = !0), t || (this.h = this.b.Jb(null), this.h.send(this.ua)), this.qb = N(), this.eb()
            }, c.cancel = function () {
                this.Za = !0, this.Ia()
            }, c.tg = function (t) {
                t && this.setTimeout(t), this.Ga && (this.Fb(), this.eb())
            }, c.eb = function () {
                this.hd = N() + this.Ua, this.Ke(this.Ua)
            }, c.Ke = function (t) {
                if (null != this.Ga) throw Error("WatchDog timer not null");
                this.Ga = Ae(C(this.gg, this), t)
            }, c.Fb = function () {
                this.Ga && (f.clearTimeout(this.Ga), this.Ga = null)
            }, c.gg = function () {
                this.Ga = null;
                var t = N();
                0 <= t - this.hd ? this.Df() : (this.a.T("WatchDog timer called too early"), this.Ke(this.hd - t))
            }, c.Df = function () {
                this.S && this.a.ca("Received watchdog timeout even though request loaded successfully"), this.a.Sg(this.pa), 2 != this.ic && (Ie(3), De(17)), this.Ia(), this.I = 2, this.Kb()
            }, c.Kb = function () {
                this.b.de() || this.Za || this.b.Tc(this)
            }, c.Ia = function () {
                this.Fb();
                var t = this.ac;
                t && "function" == typeof t.bb && t.bb(), this.ac = null, this.Vc.stop(), this.Fc.pb(), this.h && (t = this.h, this.h = null, t.abort(), t.bb())
            }, c.Hc = function () {
                return this.I
            }, c.Yc = function (t) {
                try {
                    this.b.ue(this, t), Ie(4)
                } catch (t) {
                    this.a.cb(t, "Error in httprequest callback")
                }
            }, (c = We.prototype).C = function () {
                return this.j
            }, c.H = function () {
                this.wc();
                for (var t = [], e = 0; e < this.o.length; e++) t.push(this.D[this.o[e]]);
                return t
            }, c.W = function () {
                return this.wc(), this.o.concat()
            }, c.va = function (t) {
                return je(this.D, t)
            }, c.X = function () {
                return 0 == this.j
            }, c.clear = function () {
                this.D = {}, this.j = this.o.length = 0
            }, c.remove = function (t) {
                return !!je(this.D, t) && (delete this.D[t], this.j--, this.o.length > 2 * this.j && this.wc(), !0)
            }, c.wc = function () {
                if (this.j != this.o.length) {
                    for (var t = 0, e = 0; t < this.o.length;) {
                        var n = this.o[t];
                        je(this.D, n) && (this.o[e++] = n), t++
                    }
                    this.o.length = e
                }
                if (this.j != this.o.length) {
                    var r = {};
                    for (e = t = 0; t < this.o.length;) je(r, n = this.o[t]) || (this.o[e++] = n, r[n] = 1), t++;
                    this.o.length = e
                }
            }, c.get = function (t, e) {
                return je(this.D, t) ? this.D[t] : e
            }, c.set = function (t, e) {
                je(this.D, t) || (this.j++, this.o.push(t)), this.D[t] = e
            }, c.addAll = function (t) {
                if (t instanceof We)
                    for (var e = t.W(), n = 0; n < e.length; n++) this.set(e[n], t.get(e[n]));
                else
                    for (e in t) this.set(e, t[e])
            }, c.forEach = function (t, e) {
                for (var n = this.W(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            }, c.clone = function () {
                return new We(this)
            };
            var ze = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function Ge(t, e) {
                var n;
                this.xa = this.zb = this.qa = "", this.Ca = null, this.ib = this.K = "", this.O = this.Qf = !1, t instanceof Ge ? (this.O = void 0 !== e ? e : t.O, this.tb(t.qa), this.cd(t.zb), this.rb(t.xa), this.sb(t.Ca), this.ec(t.K), this.bd(t.P.clone()), this.$c(t.ib)) : t && (n = String(t).match(ze)) ? (this.O = !!e, this.tb(n[1] || "", !0), this.cd(n[2] || "", !0), this.rb(n[3] || "", !0), this.sb(n[4]), this.ec(n[5] || "", !0), this.bd(n[6] || "", !0), this.$c(n[7] || "", !0)) : (this.O = !!e, this.P = new nn(null, this.O))
            }

            function He(t, e) {
                return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
            }

            function Xe(t, e, n) {
                return d(t) ? (t = encodeURI(t).replace(e, Ye), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function Ye(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }(c = Ge.prototype).toString = function () {
                var t = [],
                    e = this.qa;
                e && t.push(Xe(e, Je, !0), ":");
                var n = this.xa;
                return (n || "file" == e) && (t.push("//"), (e = this.zb) && t.push(Xe(e, Je, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.Ca) && t.push(":", String(n))), (n = this.K) && (this.Ic() && "/" != n.charAt(0) && t.push("/"), t.push(Xe(n, "/" == n.charAt(0) ? $e : Ze, !0))), (n = this.Rd()) && t.push("?", n), (n = this.ib) && t.push("#", Xe(n, en)), t.join("")
            }, c.resolve = function (t) {
                var e = this.clone(),
                    n = t.Hf();
                n ? e.tb(t.qa) : n = t.If(), n ? e.cd(t.zb) : n = t.Ic(), n ? e.rb(t.xa) : n = t.Ff();
                var r = t.K;
                if (n) e.sb(t.Ca);
                else if (n = t.ae()) {
                    if ("/" != r.charAt(0))
                        if (this.Ic() && !this.ae()) r = "/" + r;
                        else {
                            var i = e.K.lastIndexOf("/"); - 1 != i && (r = e.K.substr(0, i + 1) + r)
                        } if (".." == (i = r) || "." == i) r = "";
                    else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                        r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                        for (var o = [], s = 0; s < i.length;) {
                            var a = i[s++];
                            "." == a ? r && s == i.length && o.push("") : ".." == a ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && s == i.length && o.push("")) : (o.push(a), r = !0)
                        }
                        r = o.join("/")
                    } else r = i
                }
                return n ? e.ec(r) : n = t.Gf(), n ? e.bd(t.P.clone()) : n = t.Ef(), n && e.$c(t.ib), e
            }, c.clone = function () {
                return new Ge(this)
            }, c.tb = function (t, e) {
                this.U(), (this.qa = e ? He(t, !0) : t) && (this.qa = this.qa.replace(/:$/, ""))
            }, c.Hf = function () {
                return !!this.qa
            }, c.cd = function (t, e) {
                this.U(), this.zb = e ? He(t) : t
            }, c.If = function () {
                return !!this.zb
            }, c.rb = function (t, e) {
                this.U(), this.xa = e ? He(t, !0) : t
            }, c.Ic = function () {
                return !!this.xa
            }, c.sb = function (t) {
                if (this.U(), t) {
                    if (t = Number(t), isNaN(t) || 0 > t) throw Error("Bad port number " + t);
                    this.Ca = t
                } else this.Ca = null
            }, c.Ff = function () {
                return null != this.Ca
            }, c.ec = function (t, e) {
                this.U(), this.K = e ? He(t, !0) : t
            }, c.ae = function () {
                return !!this.K
            }, c.Gf = function () {
                return "" !== this.P.toString()
            }, c.bd = function (t, e) {
                this.U(), t instanceof nn ? (this.P = t, this.P.ad(this.O)) : (e || (t = Xe(t, tn)), this.P = new nn(t, this.O))
            }, c.Rd = function () {
                return this.P.toString()
            }, c.getQuery = function () {
                return this.Rd()
            }, c.l = function (t, e) {
                this.U(), this.P.set(t, e)
            }, c.dc = function (t, e) {
                this.U(), g(e) || (e = [String(e)]), this.P.Ie(t, e)
            }, c.$c = function (t, e) {
                this.U(), this.ib = e ? He(t) : t
            }, c.Ef = function () {
                return !!this.ib
            }, c.Ub = function () {
                return this.U(), this.l("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ N()).toString(36)), this
            }, c.removeParameter = function (t) {
                return this.U(), this.P.remove(t), this
            }, c.U = function () {
                if (this.Qf) throw Error("Tried to modify a read-only Uri")
            }, c.ad = function (t) {
                this.O = t, this.P && this.P.ad(t)
            };
            var Je = /[#\/\?@]/g,
                Ze = /[#\?:]/g,
                $e = /[#\?]/g,
                tn = /[#\?@]/g,
                en = /#/g;

            function nn(t, e) {
                this.j = this.m = null, this.ja = t || null, this.O = !!e
            }

            function rn(t, e) {
                this.b = t, this.a = e, this.f = this.A = null, this.bc = !1, this.K = null, this.w = -1, this.Ad = this.na = null
            }

            function on(t) {
                this.D = new We, t && this.addAll(t)
            }

            function sn(t) {
                var e = typeof t;
                return "object" == e && t || "function" == e ? "o" + (t[E] || (t[E] = ++S)) : e.substr(0, 1) + t
            }

            function an(t) {
                this.me = t || un, f.PerformanceNavigationTiming ? t = 0 < (t = f.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : t = !!(f.vc && f.vc.ke && f.vc.ke() && f.vc.ke().nh), this.Xb = t ? this.me : 1, this.v = null, 1 < this.Xb && (this.v = new on), this.f = null, this.ba = []
            }(c = nn.prototype).$ = function () {
                if (!this.m && (this.m = new We, this.j = 0, this.ja)) {
                    var t = this;
                    ! function (t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].indexOf("="),
                                    i = null;
                                if (0 <= r) {
                                    var o = t[n].substring(0, r);
                                    i = t[n].substring(r + 1)
                                } else o = t[n];
                                e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(this.ja, function (e, n) {
                        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
                    })
                }
            }, c.C = function () {
                return this.$(), this.j
            }, c.add = function (t, e) {
                this.$(), this.Oa(), t = this.Ma(t);
                var n = this.m.get(t);
                return n || this.m.set(t, n = []), n.push(e), this.j += 1, this
            }, c.remove = function (t) {
                return this.$(), t = this.Ma(t), !!this.m.va(t) && (this.Oa(), this.j -= this.m.get(t).length, this.m.remove(t))
            }, c.clear = function () {
                this.Oa(), this.m = null, this.j = 0
            }, c.X = function () {
                return this.$(), 0 == this.j
            }, c.va = function (t) {
                return this.$(), t = this.Ma(t), this.m.va(t)
            }, c.forEach = function (t, e) {
                this.$(), this.m.forEach(function (n, r) {
                    x(n, function (n) {
                        t.call(e, n, r, this)
                    }, this)
                }, this)
            }, c.W = function () {
                this.$();
                for (var t = this.m.H(), e = this.m.W(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, c.H = function (t) {
                this.$();
                var e = [];
                if (d(t)) this.va(t) && (e = U(e, this.m.get(this.Ma(t))));
                else {
                    t = this.m.H();
                    for (var n = 0; n < t.length; n++) e = U(e, t[n])
                }
                return e
            }, c.set = function (t, e) {
                return this.$(), this.Oa(), t = this.Ma(t), this.va(t) && (this.j -= this.m.get(t).length), this.m.set(t, [e]), this.j += 1, this
            }, c.get = function (t, e) {
                return t && 0 < (t = this.H(t)).length ? String(t[0]) : e
            }, c.Ie = function (t, e) {
                this.remove(t), 0 < e.length && (this.Oa(), this.m.set(this.Ma(t), V(e)), this.j += e.length)
            }, c.toString = function () {
                if (this.ja) return this.ja;
                if (!this.m) return "";
                for (var t = [], e = this.m.W(), n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.H(r);
                    for (var o = 0; o < r.length; o++) {
                        var s = i;
                        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s)
                    }
                }
                return this.ja = t.join("&")
            }, c.Oa = function () {
                this.ja = null
            }, c.clone = function () {
                var t = new nn;
                return t.ja = this.ja, this.m && (t.m = this.m.clone(), t.j = this.j), t
            }, c.Ma = function (t) {
                return t = String(t), this.O && (t = t.toLowerCase()), t
            }, c.ad = function (t) {
                t && !this.O && (this.$(), this.Oa(), this.m.forEach(function (t, e) {
                    var n = e.toLowerCase();
                    e != n && (this.remove(e), this.Ie(n, t))
                }, this)), this.O = t
            }, c.extend = function (t) {
                for (var e = 0; e < arguments.length; e++) Ke(arguments[e], function (t, e) {
                    this.add(e, t)
                }, this)
            }, A(function () {}, function () {}), (c = rn.prototype).g = null, c.ga = function (t) {
                this.A = t
            }, c.connect = function (t) {
                this.K = t, t = this.b.Sd(this.K), De(3);
                var e = this.b.Ib.$d;
                null != e ? (this.na = this.b.$a(e[0]), this.g = 1, this.xd()) : (t.dc("MODE", "init"), !this.b.ta && this.b.aa && t.dc("X-HTTP-Session-Id", this.b.aa), this.f = new Fe(this, this.a, void 0, void 0, void 0), this.f.ga(this.A), this.f.jd(t, !1, null), this.g = 0)
            }, c.xd = function () {
                this.a.debug("TestConnection: starting stage 2");
                var t = this.b.Ib.od;
                if (null != t) this.a.debug(function () {
                    return "Buffered"
                }), De(4), t ? (De(10), this.b.ub(this, !1)) : (De(11), this.b.ub(this, !0));
                else {
                    this.f = new Fe(this, this.a, void 0, void 0, void 0), this.f.ga(this.A);
                    var e = this.b.Pd(this.na, this.K);
                    De(4), e.dc("TYPE", "xmlhttp");
                    var n = this.b.aa,
                        r = this.b.Kc;
                    n && r && e.l(n, r), this.f.jd(e, !1, this.na)
                }
            }, c.Jb = function (t) {
                return this.b.Jb(t)
            }, c.abort = function () {
                this.f && (this.f.cancel(), this.f = null), this.w = -1
            }, c.de = function () {
                return !1
            }, c.ue = function (t, e) {
                if (this.w = t.w, 0 == this.g)
                    if (this.a.debug("TestConnection: Got data for stage 1"), this.pc(t), e) {
                        try {
                            var n = this.b.kc.zc(e)
                        } catch (t) {
                            return this.a.cb(t), void this.b.dd(this)
                        }
                        this.na = this.b.$a(n[0])
                    } else this.a.debug("TestConnection: Null responseText"), this.b.dd(this);
                else 1 == this.g && (this.bc ? De(6) : "11111" == e ? (De(5), this.bc = !0, this.Ze() && (this.w = 200, this.f.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), De(11), this.b.ub(this, !0))) : (De(7), this.bc = !1))
            }, c.Tc = function () {
                this.w = this.f.w, this.f.S ? 0 == this.g ? (this.g = 1, this.a.debug("TestConnection: request complete for initial check"), this.xd()) : 1 == this.g && (this.a.debug("TestConnection: request complete for stage 2"), this.bc ? (this.a.debug("Test connection succeeded; using streaming connection"), De(11), this.b.ub(this, !0)) : (this.a.debug("Test connection failed; not using streaming"), De(10), this.b.ub(this, !1))) : (this.a.debug("TestConnection: request failed, in state " + this.g), 0 == this.g ? De(8) : 1 == this.g && De(9), this.b.dd(this))
            }, c.pc = function (t) {
                if (!this.b.ta && (t = t.h)) {
                    var e = t.kb("X-Client-Wire-Protocol");
                    this.Ad = e || null, this.b.aa && ((t = t.kb("X-HTTP-Session-Id")) ? this.b.Fe(t) : this.a.T("Missing X_HTTP_SESSION_ID in the handshake response"))
                }
            }, c.fc = function () {
                return this.b.fc()
            }, c.Ba = function () {
                return this.b.Ba()
            }, c.Ze = function () {
                return !ot || 10 <= Number(pt)
            }, (c = on.prototype).C = function () {
                return this.D.C()
            }, c.add = function (t) {
                this.D.set(sn(t), t)
            }, c.addAll = function (t) {
                for (var e = (t = Qe(t)).length, n = 0; n < e; n++) this.add(t[n])
            }, c.pb = function (t) {
                for (var e = (t = Qe(t)).length, n = 0; n < e; n++) this.remove(t[n])
            }, c.remove = function (t) {
                return this.D.remove(sn(t))
            }, c.clear = function () {
                this.D.clear()
            }, c.X = function () {
                return this.D.X()
            }, c.contains = function (t) {
                return this.D.va(sn(t))
            }, c.H = function () {
                return this.D.H()
            }, c.clone = function () {
                return new on(this)
            };
            var un = 10;

            function cn() {
                this.xg = this.rg = void 0
            }

            function hn() {
                this.jg = new cn
            }

            function ln(t, e, n, r, i) {
                try {
                    t.debug(n), e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                } catch (e) {
                    t.cb(e)
                }
            }(c = an.prototype).ld = function (t) {
                this.v || -1 == t.indexOf("spdy") && -1 == t.indexOf("quic") && -1 == t.indexOf("h2") || (this.Xb = this.me, this.v = new on, this.f && (this.oc(this.f), this.f = null))
            }, c.ee = function () {
                return !!this.f || !!this.v && this.v.C() >= this.Xb
            }, c.xf = function () {
                return this.f ? 1 : this.v ? this.v.C() : 0
            }, c.Jc = function (t) {
                return this.f ? this.f == t : !!this.v && this.v.contains(t)
            }, c.oc = function (t) {
                this.v ? this.v.add(t) : this.f = t
            }, c.ze = function (t) {
                this.f && this.f == t ? this.f = null : this.v && this.v.contains(t) && this.v.remove(t)
            }, c.cancel = function () {
                this.ba = this.la(), this.f ? (this.f.cancel(), this.f = null) : this.v && !this.v.X() && (x(this.v.H(), function (t) {
                    t.cancel()
                }), this.v.clear())
            }, c.la = function () {
                if (null != this.f) return this.ba.concat(this.f.la());
                if (null != this.v && !this.v.X()) {
                    var t = this.ba;
                    return x(this.v.H(), function (e) {
                        t = t.concat(e.la())
                    }), t
                }
                return V(this.ba)
            }, c.Re = function (t) {
                this.ba = this.ba.concat(t)
            }, c.$e = function () {
                this.ba.length = 0
            }, cn.prototype.stringify = function (t) {
                return f.JSON.stringify(t, this.rg)
            }, cn.prototype.parse = function (t) {
                return f.JSON.parse(t, this.xg)
            }, hn.prototype.hf = function (t, e, n) {
                var r = n || "";
                try {
                    Ke(t, function (t, n) {
                        var i = t;
                        w(t) && (i = jt(t)), e.push(r + n + "=" + encodeURIComponent(i))
                    })
                } catch (t) {
                    throw e.push(r + "type=" + encodeURIComponent("_badmap")), t
                }
            }, hn.prototype.jf = function (t, e, n) {
                for (var r = -1;;) {
                    var i = ["count=" + e]; - 1 == r ? 0 < e ? (r = t[0].Pc, i.push("ofs=" + r)) : r = 0 : i.push("ofs=" + r);
                    for (var o = !0, s = 0; s < e; s++) {
                        var a = t[s].Pc,
                            u = t[s].map;
                        if (0 > (a -= r)) r = Math.max(0, t[s].Pc - 100), o = !1;
                        else try {
                            this.hf(u, i, "req" + a + "_")
                        } catch (t) {
                            n && n(u)
                        }
                    }
                    if (o) return i.join("&")
                }
            }, hn.prototype.zc = function (t) {
                return this.jg.parse(t)
            };
            var fn = f.JSON.parse;

            function dn(t) {
                Wt.call(this), this.headers = new We, this.Xa = t || null, this.ha = !1, this.mc = this.c = null, this.ge = this.Tb = "", this.Pa = 0, this.I = "", this.Aa = this.Lc = this.Qb = this.Ec = !1, this.vb = 0, this.hc = null, this.Ae = pn, this.jc = this.lg = this.Ab = !1
            }
            A(dn, Wt);
            var pn = "";
            dn.prototype.s = ve("goog.net.XhrIo");
            var mn = /^https?$/i,
                yn = ["POST", "PUT"];

            function gn(t) {
                return "content-type" == t.toLowerCase()
            }

            function vn(t, e) {
                return {
                    type: e,
                    lengthComputable: t.lengthComputable,
                    loaded: t.loaded,
                    total: t.total
                }
            }

            function bn(t, e, n) {
                t: {
                    for (r in n) {
                        var r = !1;
                        break t
                    }
                    r = !0
                }
                if (r) return t;
                if (n = function (t) {
                        var e = "";
                        return X(t, function (t, n) {
                            e += n, e += ":", e += t, e += "\r\n"
                        }), e
                    }(n), d(t)) {
                    if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") {
                        if (0 > (n = t.indexOf("#")) && (n = t.length), 0 > (r = t.indexOf("?")) || r > n) {
                            r = n;
                            var i = ""
                        } else i = t.substring(r + 1, n);
                        n = (t = [t.substr(0, r), i, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                    }
                    return t
                }
                return t.l(e, n),
                t
            }

            function wn(t) {
                this.Bd = 22, this.De = 0, this.M = [], this.a = new Ee, this.Ib = new function () {
                    this.od = this.$d = null
                }, this.na = this.md = this.hb = this.K = this.u = this.Kc = this.aa = this.gb = this.N = this.Rb = this.A = null, this.Te = !0, this.ag = this.Yb = 0, this.kf = !!p("internalChannelParams.failFast", t), this.fd = this.Ja = this.wa = this.ia = this.ea = this.i = null, this.Se = !0, this.w = this.he = this.Sb = -1, this.rc = this.Ha = this.La = 0, this.Ve = p("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.vg = p("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.nf = p("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.Od = p("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.Xa = t && t.oh || void 0, this.Db = void 0, this.Ra = 0, this.gc = t && t.supportsCrossDomainXhr || !1, this.ra = "", this.G = new an(t && t.concurrentRequestLimit), this.kc = new hn, this.ta = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.Nd = t && t.fastHandshake || !1) && !this.ta && (this.a.T("Force backgroundChannelTest when fastHandshake is enabled."), this.ta = !0), t && t.Id && this.a.Id()
            }

            function En() {}

            function Sn() {
                if (ot && !(10 <= Number(pt))) throw Error("Environmental error: no available transport.")
            }

            function Tn(t, e) {
                Wt.call(this), this.b = new wn(e), this.yb = t, this.Qg = e && e.testUrl ? e.testUrl : function (t) {
                    for (var e = arguments[0], n = 1; n < arguments.length; n++) {
                        var r, i = arguments[n];
                        0 == i.lastIndexOf("/", 0) ? e = i : ((r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e = r ? e + i : e + "/" + i)
                    }
                    return e
                }(this.yb, "test"), this.s = ve("goog.labs.net.webChannel.WebChannelBaseTransport"), this.Rc = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                    "X-Client-Protocol": "webchannel"
                }), this.b.ga(t), t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                    "X-WebChannel-Content-Type": e.messageContentType
                }), e && e.zd && (t ? t["X-WebChannel-Client-Profile"] = e.zd : t = {
                    "X-WebChannel-Client-Profile": e.zd
                }), this.b.Eg(t), (t = e && e.httpHeadersOverwriteParam) && !Q(t) && this.b.Cg(t), this.Og = e && e.supportsCrossDomainXhr || !1, this.zg = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !Q(e) && (this.b.Dg(e), null !== (t = this.Rc) && e in t && (e in (t = this.Rc) && delete t[e], (t = this.s) && t.T("Ignore httpSessionIdParam also specified with messageUrlParams: " + e, void 0))), this.vd = new Dn(this)
            }

            function In(t) {
                Le.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) {
                            t = n;
                            break t
                        }
                        t = void 0
                    }(this.ne = t) && (t = this.ne, e = null !== e && t in e ? e[t] : void 0),
                    this.data = e
                }
                else this.data = t
            }

            function Cn(t) {
                xe.call(this), this.status = 1, this.errorCode = t
            }

            function Dn(t) {
                this.b = t
            }(c = dn.prototype).Je = function (t) {
                this.Ab = t
            }, c.send = function (t, e, n, r) {
                if (this.c) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Tb + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.Tb = t, this.I = "", this.Pa = 0, this.ge = e, this.Ec = !1, this.ha = !0, this.c = this.df(), this.mc = this.Xa ? this.Xa.Vd() : _e.Vd(), this.c.onreadystatechange = C(this.te, this), this.lg && "onprogress" in this.c && (this.c.onprogress = C(function (t) {
                    this.re(t, !0)
                }, this), this.c.upload && (this.c.upload.onprogress = C(this.re, this)));
                try {
                    we(this.s, this.da("Opening Xhr")), this.Lc = !0, this.c.open(e, String(t), !0), this.Lc = !1
                } catch (t) {
                    return we(this.s, this.da("Error opening Xhr: " + t.message)), void this.Ld(t)
                }
                t = n || "";
                var i = this.headers.clone();
                r && Ke(r, function (t, e) {
                    i.set(e, t)
                }), r = function (t) {
                    t: {
                        for (var e = gn, n = t.length, r = d(t) ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) {
                                e = i;
                                break t
                            } e = -1
                    }
                    return 0 > e ? null : d(t) ? t.charAt(e) : t[e]
                }(i.W()), n = f.FormData && t instanceof f.FormData, !(0 <= P(yn, e)) || r || n || i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach(function (t, e) {
                    this.c.setRequestHeader(e, t)
                }, this), this.Ae && (this.c.responseType = this.Ae), "withCredentials" in this.c && this.c.withCredentials !== this.Ab && (this.c.withCredentials = this.Ab);
                try {
                    this.yd(), 0 < this.vb && (this.jc = function (t) {
                        return ot && yt(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                    }(this.c), we(this.s, this.da("Will abort after " + this.vb + "ms if incomplete, xhr2 " + this.jc)), this.jc ? (this.c.timeout = this.vb, this.c.ontimeout = C(this.Ua, this)) : this.hc = ie(this.Ua, this.vb, this)), we(this.s, this.da("Sending request")), this.Qb = !0, this.c.send(t), this.Qb = !1
                } catch (t) {
                    we(this.s, this.da("Send error: " + t.message)), this.Ld(t)
                }
            }, c.df = function () {
                return this.Xa ? this.Xa.Dd() : _e.Dd()
            }, c.Ua = function () {
                void 0 !== l && this.c && (this.I = "Timed out after " + this.vb + "ms, aborting", this.Pa = 8, we(this.s, this.da(this.I)), this.dispatchEvent("timeout"), this.abort(8))
            }, c.Ld = function (t) {
                this.ha = !1, this.c && (this.Aa = !0, this.c.abort(), this.Aa = !1), this.I = t, this.Pa = 5, this.Jd(), this.Gb()
            }, c.Jd = function () {
                this.Ec || (this.Ec = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
            }, c.abort = function (t) {
                this.c && this.ha && (we(this.s, this.da("Aborting")), this.ha = !1, this.Aa = !0, this.c.abort(), this.Aa = !1, this.Pa = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.Gb())
            }, c.F = function () {
                this.c && (this.ha && (this.ha = !1, this.Aa = !0, this.c.abort(), this.Aa = !1), this.Gb(!0)), dn.L.F.call(this)
            }, c.te = function () {
                this.Ka || (this.Lc || this.Qb || this.Aa ? this.se() : this.eg())
            }, c.eg = function () {
                this.se()
            }, c.se = function () {
                if (this.ha && void 0 !== l)
                    if (this.mc[1] && 4 == this.ma() && 2 == this.za()) we(this.s, this.da("Local request error detected and ignored"));
                    else if (this.Qb && 4 == this.ma()) ie(this.te, 0, this);
                else if (this.dispatchEvent("readystatechange"), this.Mc()) {
                    we(this.s, this.da("Request complete")), this.ha = !1;
                    try {
                        this.Rf() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.Pa = 6, this.I = this.Yd() + " [" + this.za() + "]", this.Jd())
                    } finally {
                        this.Gb()
                    }
                }
            }, c.re = function (t, e) {
                this.dispatchEvent(vn(t, "progress")), this.dispatchEvent(vn(t, e ? "downloadprogress" : "uploadprogress"))
            }, c.Gb = function (t) {
                if (this.c) {
                    this.yd();
                    var e = this.c,
                        n = this.mc[0] ? m : null;
                    this.mc = this.c = null, t || this.dispatchEvent("ready");
                    try {
                        e.onreadystatechange = n
                    } catch (e) {
                        (t = this.s) && t.ca("Problem encountered resetting onreadystatechange: " + e.message, void 0)
                    }
                }
            }, c.yd = function () {
                this.c && this.jc && (this.c.ontimeout = null), this.hc && (f.clearTimeout(this.hc), this.hc = null)
            }, c.Ba = function () {
                return !!this.c
            }, c.Mc = function () {
                return 4 == this.ma()
            }, c.Rf = function () {
                var t = this.za();
                t: switch (t) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var e = !0;
                        break t;
                    default:
                        e = !1
                }
                return e || 0 === t && !this.Of()
            }, c.Of = function () {
                var t = String(this.Tb).match(ze)[1] || null;
                return !t && f.self && f.self.location && (t = (t = f.self.location.protocol).substr(0, t.length - 1)), mn.test(t ? t.toLowerCase() : "")
            }, c.ma = function () {
                return this.c ? this.c.readyState : 0
            }, c.za = function () {
                try {
                    return 2 < this.ma() ? this.c.status : -1
                } catch (t) {
                    return -1
                }
            }, c.Yd = function () {
                try {
                    return 2 < this.ma() ? this.c.statusText : ""
                } catch (t) {
                    return we(this.s, "Can not get status: " + t.message), ""
                }
            }, c.ya = function () {
                try {
                    return this.c ? this.c.responseText : ""
                } catch (t) {
                    return we(this.s, "Can not get responseText: " + t.message), ""
                }
            }, c.yf = function (t) {
                if (this.c) {
                    var e = this.c.responseText;
                    return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), fn(e)
                }
            }, c.getResponseHeader = function (t) {
                if (this.c && this.Mc()) return null === (t = this.c.getResponseHeader(t)) ? void 0 : t
            }, c.getAllResponseHeaders = function () {
                return this.c && this.Mc() && this.c.getAllResponseHeaders() || ""
            }, c.kb = function (t) {
                return this.c ? this.c.getResponseHeader(t) : null
            }, c.Ud = function () {
                return this.Pa
            }, c.Hc = function () {
                return d(this.I) ? this.I : String(this.I)
            }, c.da = function (t) {
                return t + " [" + this.ge + " " + this.Tb + " " + this.za() + "]"
            }, (c = wn.prototype).tc = 8, c.g = 1, c.connect = function (t, e, n, r, i) {
                this.a.debug("connect()"), De(0), this.K = e, this.gb = n || {}, r && void 0 !== i && (this.gb.OSID = r, this.gb.OAID = i), this.ta && (this.a.debug("connect() bypassed channel-test."), this.Ib.$d = [], this.Ib.od = !1), this.bf(t)
            }, c.disconnect = function () {
                if (this.a.debug("disconnect()"), this.qd(), 3 == this.g) {
                    var t = this.Yb++,
                        e = this.hb.clone();
                    e.l("SID", this.ra), e.l("RID", t), e.l("TYPE", "terminate"), this.Ya(e), new Fe(this, this.a, this.ra, t, void 0).yg(e)
                }
                this.qe()
            }, c.bf = function (t) {
                this.a.debug("connectTest_()"), this.Ja = new rn(this, this.a), null === this.N && this.Ja.ga(this.A);
                var e = t;
                this.N && this.A && (e = bn(t, this.N, this.A)), this.Ja.connect(e)
            }, c.af = function () {
                this.a.debug("connectChannel_()"), this.hb = this.Sd(this.K), this.Dc()
            }, c.qd = function () {
                this.Ja && (this.Ja.abort(), this.Ja = null), this.u && (this.u.cancel(), this.u = null), this.ia && (f.clearTimeout(this.ia), this.ia = null), this.Hb(), this.G.cancel(), this.ea && (f.clearTimeout(this.ea), this.ea = null)
            }, c.ga = function (t) {
                this.A = t
            }, c.Eg = function (t) {
                this.Rb = t
            }, c.Cg = function (t) {
                this.N = t
            }, c.Dg = function (t) {
                this.aa = t
            }, c.Fe = function (t) {
                this.Kc = t
            }, c.He = function (t) {
                this.Ra = t
            }, c.Hg = function () {
                this.gc = !0
            }, c.Ee = function (t) {
                this.i = t
            }, c.Nf = function () {
                return !this.fd
            }, c.Zc = function (t) {
                1e3 == this.M.length && this.a.ca(function () {
                    return "Already have 1000 queued maps upon queueing " + jt(t)
                }), this.M.push(new function (t, e) {
                    this.Pc = t, this.map = e, this.context = null
                }(this.ag++, t)), 3 == this.g && this.Dc()
            }, c.qf = function () {
                return this.kf ? 0 : this.nf
            }, c.de = function () {
                return 0 == this.g
            }, c.getState = function () {
                return this.g
            }, c.Dc = function () {
                this.G.ee() || this.ea || (this.ea = Ae(C(this.we, this), 0), this.La = 0)
            }, c.Yf = function (t) {
                return this.G.xf() >= this.G.Xb - (this.ea ? 1 : 0) ? (this.a.ca("Unexpected retry request is scheduled."), !1) : this.ea ? (this.a.debug("Use the retry request that is already scheduled."), this.M = t.la().concat(this.M), !0) : !(1 == this.g || 2 == this.g || this.La >= this.qf()) && (this.a.debug("Going to retry POST"), this.ea = Ae(C(this.we, this, t), this.Xd(this.La)), this.La++, !0)
            }, c.we = function (t) {
                this.ea = null, this.Mg(t)
            }, c.Mg = function (t) {
                this.a.debug("startForwardChannel_"), 1 == this.g ? t ? this.a.ca("Not supposed to retry the open") : (this.ig(), this.g = 2) : 3 == this.g && (t ? this.le(t) : 0 == this.M.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.G.ee() ? this.a.ca("startForwardChannel_ returned: connection already in progress") : (this.le(), this.a.debug("startForwardChannel_ finished, sent request")))
            }, c.ig = function () {
                this.a.debug("open_()"), this.Yb = Math.floor(1e5 * Math.random());
                var t = this.Yb++,
                    e = new Fe(this, this.a, "", t, void 0),
                    n = this.A;
                this.Rb && (n ? tt(n = Z(n), this.Rb) : n = this.Rb), null === this.N && e.ga(n);
                var r = this.Hd(e),
                    i = this.hb.clone();
                i.l("RID", t), 0 < this.Bd && i.l("CVER", this.Bd), this.ta && this.aa && i.l("X-HTTP-Session-Id", this.aa), this.Ya(i), this.N && n && bn(i, this.N, n), this.G.oc(e), this.Nd ? (i.l("$req", r), i.l("SID", "null"), e.Ag(), e.kd(i, null)) : e.kd(i, r)
            }, c.le = function (t) {
                var e = t ? t.R : this.Yb++,
                    n = this.hb.clone();
                n.l("SID", this.ra), n.l("RID", e), n.l("AID", this.Sb), this.Ya(n), this.N && this.A && bn(n, this.N, this.A), e = new Fe(this, this.a, this.ra, e, this.La + 1), null === this.N && e.ga(this.A), t && this.sg(t), t = this.Hd(e), e.setTimeout(Math.round(.5 * this.Od) + Math.round(.5 * this.Od * Math.random())), this.G.oc(e), e.kd(n, t)
            }, c.Ya = function (t) {
                this.i && Ke({}, function (e, n) {
                    t.l(n, e)
                })
            }, c.Hd = function (t) {
                var e = Math.min(this.M.length, 1e3),
                    n = this.i ? C(this.i.Ue, this.i, this) : null;
                return n = this.kc.jf(this.M, e, n), t.Gg(this.M.splice(0, e)), n
            }, c.sg = function (t) {
                this.M = t.la().concat(this.M)
            }, c.Kd = function () {
                if (!this.u && !this.ia) {
                    this.rc = 1;
                    var t = this.ve;
                    Xt || $t(), te || (Xt(), te = !0), ee.add(t, this), this.Ha = 0
                }
            }, c.Qc = function () {
                return this.u || this.ia ? (this.a.ca("Request already in progress"), !1) : !(3 <= this.Ha) && (this.a.debug("Going to retry GET"), this.rc++, this.ia = Ae(C(this.ve, this), this.Xd(this.Ha)), this.Ha++, !0)
            }, c.ve = function () {
                this.ia = null, this.Kg()
            }, c.Kg = function () {
                this.a.debug("Creating new HttpRequest"), this.u = new Fe(this, this.a, this.ra, "rpc", this.rc), null === this.N && this.u.ga(this.A), this.u.He(this.Ra);
                var t = this.md.clone();
                t.l("RID", "rpc"), t.l("SID", this.ra), t.l("CI", this.fd ? "0" : "1"), t.l("AID", this.Sb), this.Ya(t), t.l("TYPE", "xmlhttp"), this.N && this.A && bn(t, this.N, this.A), this.Db && this.u.setTimeout(this.Db), this.u.jd(t, !0, this.na), this.a.debug("New Request created")
            }, c.ub = function (t, e) {
                this.a.debug("Test Connection Finished");
                var n = t.Ad;
                n && this.G.ld(n), this.fd = this.Se && e, this.w = t.w, this.af()
            }, c.dd = function (t) {
                this.a.debug("Test Connection Failed"), this.w = t.w, this.sa(2)
            }, c.ue = function (t, e) {
                if (0 != this.g && (this.u == t || this.G.Jc(t)))
                    if (this.w = t.w, !t.lb && this.G.Jc(t) && 3 == this.g) {
                        try {
                            var n = this.kc.zc(e)
                        } catch (t) {
                            n = null
                        }
                        g(n) && 3 == n.length ? this.Cf(n, t) : (this.a.debug("Bad POST response data returned"), this.sa(11))
                    } else(t.lb || this.u == t) && this.Hb(), Q(e) || (n = this.kc.zc(e), this.dg(n, t))
            }, c.Cf = function (t, e) {
                0 == t[0] ? this.Bf(e) : (this.he = t[1], 0 < (e = this.he - this.Sb) && (t = t[2], this.a.debug(t + " bytes (in " + e + " arrays) are outstanding on the BackChannel"), this.Jg(t) && !this.wa && (this.wa = Ae(C(this.bg, this), 6e3))))
            }, c.Bf = function (t) {
                if (this.a.debug("Server claims our backchannel is missing."), this.ia) this.a.debug("But we are currently starting the request.");
                else {
                    if (this.u) {
                        if (!(this.u.qb + 3e3 < t.qb)) return;
                        this.Hb(), this.u.cancel(), this.u = null
                    } else this.a.T("We do not have a BackChannel established");
                    this.Qc(), De(18)
                }
            }, c.Jg = function (t) {
                return 37500 > t && !this.Nf() && 0 == this.Ha
            }, c.$a = function (t) {
                return this.Te ? this.i ? this.i.$a(t) : t : null
            }, c.bg = function () {
                null != this.wa && (this.wa = null, this.u.cancel(), this.u = null, this.Qc(), De(19))
            }, c.Hb = function () {
                null != this.wa && (f.clearTimeout(this.wa), this.wa = null)
            }, c.Tc = function (t) {
                this.a.debug("Request complete");
                var e = null;
                if (this.u == t) {
                    this.Hb(), this.u = null;
                    var n = 2
                } else {
                    if (!this.G.Jc(t)) return;
                    e = t.la(), this.G.ze(t), n = 1
                }
                if (this.w = t.w, 0 != this.g)
                    if (t.S) 1 == n ? (function (t, e, n) {
                        Se.dispatchEvent(new Ne(Se, t, e, n))
                    }(t.Da ? t.Da.length : 0, N() - t.qb, this.La), this.Dc()) : this.Kd();
                    else {
                        var r = t.Hc();
                        if (3 == r || 0 == r && 0 < this.w) this.a.debug("Not retrying due to error type");
                        else {
                            var i = this;
                            if (this.a.debug(function () {
                                    return "Maybe retrying, last error: " + function (t, e) {
                                        switch (t) {
                                            case 0:
                                                return "Non-200 return code (" + e + ")";
                                            case 1:
                                                return "XMLHTTP failure (no data)";
                                            case 2:
                                                return "HttpConnection timeout";
                                            default:
                                                return "Unknown error"
                                        }
                                    }(r, i.w)
                                }), 1 == n && this.Yf(t) || 2 == n && this.Qc()) return;
                            this.a.debug("Exceeded max number of retries")
                        }
                        switch (e && 0 < e.length && this.G.Re(e), this.a.debug("Error: HTTP request failed"), r) {
                            case 1:
                                this.sa(5);
                                break;
                            case 4:
                                this.sa(10);
                                break;
                            case 3:
                                this.sa(6);
                                break;
                            default:
                                this.sa(2)
                        }
                    }
            }, c.Xd = function (t) {
                var e = this.Ve + Math.floor(Math.random() * this.vg);
                return this.Ba() || (this.a.debug("Inactive channel"), e *= 2), e * t
            }, c.pc = function (t) {
                if (this.ta && (t = t.h)) {
                    var e = t.kb("X-Client-Wire-Protocol");
                    e && this.G.ld(e), this.aa && ((t = t.kb("X-HTTP-Session-Id")) ? (this.Fe(t), this.hb.l(this.aa, t)) : this.a.T("Missing X_HTTP_SESSION_ID in the handshake response"))
                }
            }, c.dg = function (t, e) {
                for (var n = this.i && this.i.sc ? [] : null, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (this.Sb = i[0], i = i[1], 2 == this.g)
                        if ("c" == i[0]) {
                            this.ra = i[1], this.na = this.$a(i[2]);
                            var o = i[3];
                            null != o && (this.tc = o, this.a.info("VER=" + this.tc)), null != (o = i[4]) && (this.De = o, this.a.info("SVER=" + this.De)), null != (i = i[5]) && "number" == typeof i && 0 < i && (this.Db = i *= 1.5, this.a.info("backChannelRequestTimeoutMs_=" + i)), this.pc(e), this.g = 3, this.i && this.i.wd(), this.Lg(e)
                        } else "stop" != i[0] && "close" != i[0] || this.sa(7);
                    else 3 == this.g && ("stop" == i[0] || "close" == i[0] ? (n && 0 != n.length && (this.i.sc(this, n), n.length = 0), "stop" == i[0] ? this.sa(7) : this.disconnect()) : "noop" != i[0] && (n ? n.push(i) : this.i && this.i.ud(i)), this.Ha = 0)
                }
                n && 0 != n.length && this.i.sc(this, n)
            }, c.Lg = function (t) {
                this.md = this.Pd(this.na, this.K), t.lb ? (this.a.debug("Upgrade the handshake request to a backchannel."), this.G.ze(t), t.tg(this.Db), this.u = t) : this.Kd()
            }, c.sa = function (t) {
                if (this.a.info("Error code " + t), 2 == t) {
                    var e = null;
                    this.i && (e = null);
                    var n = C(this.Pg, this);
                    e || (e = new Ge("//www.google.com/images/cleardot.gif"), f.location && "http" == f.location.protocol || e.tb("https"), e.Ub()),
                        function (t, e) {
                            var n = new Ee;
                            n.debug("TestLoadImage: loading " + t);
                            var r = new Image;
                            r.onload = D(ln, n, r, "TestLoadImage: loaded", !0, e), r.onerror = D(ln, n, r, "TestLoadImage: error", !1, e), r.onabort = D(ln, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = D(ln, n, r, "TestLoadImage: timeout", !1, e), f.setTimeout(function () {
                                r.ontimeout && r.ontimeout()
                            }, 1e4), r.src = t
                        }(e.toString(), n)
                } else De(2);
                this.cg(t)
            }, c.Pg = function (t) {
                t ? (this.a.info("Successfully pinged google.com"), De(2)) : (this.a.info("Failed to ping google.com"), De(1))
            }, c.cg = function (t) {
                this.a.debug("HttpChannel: error - " + t), this.g = 0, this.i && this.i.td(t), this.qe(), this.qd()
            }, c.qe = function () {
                if (this.g = 0, this.w = -1, this.i) {
                    var t = this.G.la();
                    if (0 != t.length || 0 != this.M.length) {
                        var e = this;
                        this.a.debug(function () {
                            return "Number of undelivered maps, pending: " + t.length + ", outgoing: " + e.M.length
                        }), this.G.$e(), V(this.M), this.M.length = 0
                    }
                    this.i.sd()
                }
            }, c.Sd = function (t) {
                return t = this.Cd(null, t), this.a.debug("GetForwardChannelUri: " + t), t
            }, c.Pd = function (t, e) {
                return t = this.Cd(this.fc() ? t : null, e), this.a.debug("GetBackChannelUri: " + t), t
            }, c.Cd = function (t, e) {
                var n = function (t) {
                    return t instanceof Ge ? t.clone() : new Ge(t, void 0)
                }(e);
                if ("" != n.xa) t && n.rb(t + "." + n.xa), n.sb(n.Ca);
                else {
                    var r = f.location;
                    n = function (t, e, n, r) {
                        var i = new Ge(null, void 0);
                        return t && i.tb(t), e && i.rb(e), n && i.sb(n), r && i.ec(r), i
                    }(r.protocol, t ? t + "." + r.hostname : r.hostname, +r.port, e)
                }
                return this.gb && X(this.gb, function (t, e) {
                    n.l(e, t)
                }), t = this.aa, e = this.Kc, t && e && n.l(t, e), n.l("VER", this.tc), this.Ya(n), n
            }, c.Jb = function (t) {
                if (t && !this.gc) throw Error("Can't create secondary domain capable XhrIo object.");
                return (t = new dn(this.Xa)).Je(this.gc), t
            }, c.Ba = function () {
                return !!this.i && this.i.Ba()
            }, c.fc = function () {
                return this.gc
            }, (c = En.prototype).sc = null, c.wd = function () {}, c.ud = function () {}, c.td = function () {}, c.sd = function () {}, c.Ba = function () {
                return !0
            }, c.Ue = function () {}, c.$a = function (t) {
                return t
            }, Sn.prototype.cf = function (t, e) {
                return new Tn(t, e)
            }, A(Tn, Wt), (c = Tn.prototype).addEventListener = function (t, e, n, r) {
                Tn.L.addEventListener.call(this, t, e, n, r)
            }, c.removeEventListener = function (t, e, n, r) {
                Tn.L.removeEventListener.call(this, t, e, n, r)
            }, c.open = function () {
                this.b.Ee(this.vd), this.Og && this.b.Hg(), this.b.connect(this.Qg, this.yb, this.Rc || void 0)
            }, c.close = function () {
                this.b.disconnect()
            }, c.send = function (t) {
                if (d(t)) {
                    var e = {};
                    e.__data__ = t, this.b.Zc(e)
                } else this.zg ? ((e = {}).__data__ = jt(t), this.b.Zc(e)) : this.b.Zc(t)
            }, c.F = function () {
                this.b.Ee(null), delete this.vd, this.b.disconnect(), delete this.b, Tn.L.F.call(this)
            }, A(In, Le), A(Cn, xe), A(Dn, En), Dn.prototype.wd = function () {
                be(this.b.s, "WebChannel opened on " + this.b.yb), this.b.dispatchEvent("a")
            }, Dn.prototype.ud = function (t) {
                this.b.dispatchEvent(new In(t))
            }, Dn.prototype.td = function (t) {
                be(this.b.s, "WebChannel aborted on " + this.b.yb + " due to channel error: " + t), this.b.dispatchEvent(new Cn(t))
            }, Dn.prototype.sd = function () {
                be(this.b.s, "WebChannel closed on " + this.b.yb), this.b.dispatchEvent("b")
            };
            var Nn = D(function (t, e) {
                function n() {}
                n.prototype = t.prototype;
                var r = new n;
                return t.apply(r, Array.prototype.slice.call(arguments, 1)), r
            }, Sn);

            function An() {
                this.V = [], this.Z = []
            }

            function kn(t, e) {
                if (M.call(this), this.oe = t || 0, this.Wb = e || 10, this.oe > this.Wb) throw Error(Rn);
                this.fa = new An, this.oa = new on, this.Ac = 0, this.Nc = null, this.Cb()
            }(c = An.prototype).Vf = function () {
                0 == this.V.length && (this.V = this.Z, this.V.reverse(), this.Z = [])
            }, c.enqueue = function (t) {
                this.Z.push(t)
            }, c.ab = function () {
                return this.Vf(), this.V.pop()
            }, c.C = function () {
                return this.V.length + this.Z.length
            }, c.X = function () {
                return 0 == this.V.length && 0 == this.Z.length
            }, c.clear = function () {
                this.V = [], this.Z = []
            }, c.contains = function (t) {
                return 0 <= P(this.V, t) || 0 <= P(this.Z, t)
            }, c.remove = function (t) {
                var e = this.V,
                    n = L(e, t);
                return 0 <= n ? (Array.prototype.splice.call(e, n, 1), e = !0) : e = !1, e || B(this.Z, t)
            }, c.H = function () {
                for (var t = [], e = this.V.length - 1; 0 <= e; --e) t.push(this.V[e]);
                var n = this.Z.length;
                for (e = 0; e < n; ++e) t.push(this.Z[e]);
                return t
            }, A(kn, M);
            var Rn = "[goog.structs.Pool] Min can not be greater than max";

            function Mn(t, e) {
                this.fe = t, this.gd = e
            }

            function On(t) {
                this.Y = [], t && this.Lf(t)
            }

            function _n() {
                On.call(this)
            }

            function Pn(t, e) {
                this.Gd = void 0, this.cc = new _n, kn.call(this, t, e)
            }

            function Ln(t, e, n, r) {
                this.Jf = t, this.Ab = !!r, Pn.call(this, e, n)
            }(c = kn.prototype).Mb = function () {
                var t = N();
                if (!(null != this.Nc && t - this.Nc < this.Ac)) {
                    var e = this.qg();
                    return e && (this.Nc = t, this.oa.add(e)), e
                }
            }, c.og = function (t) {
                return !!this.oa.remove(t) && (this.nc(t), !0)
            }, c.qg = function () {
                for (var t; 0 < this.Td() && (t = this.fa.ab(), !this.Sc(t));) this.Cb();
                return !t && this.C() < this.Wb && (t = this.xc()), t
            }, c.nc = function (t) {
                this.oa.remove(t), this.Sc(t) && this.C() < this.Wb ? this.fa.enqueue(t) : this.Bc(t)
            }, c.Cb = function () {
                for (var t = this.fa; this.C() < this.oe;) t.enqueue(this.xc());
                for (; this.C() > this.Wb && 0 < this.Td();) this.Bc(t.ab())
            }, c.xc = function () {
                return {}
            }, c.Bc = function (t) {
                if ("function" == typeof t.bb) t.bb();
                else
                    for (var e in t) t[e] = null
            }, c.Sc = function (t) {
                return "function" != typeof t.Ye || t.Ye()
            }, c.contains = function (t) {
                return this.fa.contains(t) || this.oa.contains(t)
            }, c.C = function () {
                return this.fa.C() + this.oa.C()
            }, c.rf = function () {
                return this.oa.C()
            }, c.Td = function () {
                return this.fa.C()
            }, c.X = function () {
                return this.fa.X() && this.oa.X()
            }, c.F = function () {
                if (kn.L.F.call(this), 0 < this.rf()) throw Error("[goog.structs.Pool] Objects not released");
                delete this.oa;
                for (var t = this.fa; !t.X();) this.Bc(t.ab());
                delete this.fa
            }, Mn.prototype.getKey = function () {
                return this.fe
            }, Mn.prototype.clone = function () {
                return new Mn(this.fe, this.gd)
            }, (c = On.prototype).ce = function (t, e) {
                var n = this.Y;
                n.push(new Mn(t, e)), this.$f(n.length - 1)
            }, c.Lf = function (t) {
                if (t instanceof On) {
                    var e = t.W();
                    if (t = t.H(), 0 >= this.C()) {
                        for (var n = this.Y, r = 0; r < e.length; r++) n.push(new Mn(e[r], t[r]));
                        return
                    }
                } else e = J(t), t = Y(t);
                for (r = 0; r < e.length; r++) this.ce(e[r], t[r])
            }, c.remove = function () {
                var t = this.Y,
                    e = t.length,
                    n = t[0];
                if (!(0 >= e)) return 1 == e ? F(t) : (t[0] = t.pop(), this.Zf()), n.gd
            }, c.Zf = function () {
                for (var t = 0, e = this.Y, n = e.length, r = e[t]; t < n >> 1;) {
                    var i = this.tf(t),
                        o = this.zf(t);
                    if (e[i = o < n && e[o].getKey() < e[i].getKey() ? o : i].getKey() > r.getKey()) break;
                    e[t] = e[i], t = i
                }
                e[t] = r
            }, c.$f = function (t) {
                for (var e = this.Y, n = e[t]; 0 < t;) {
                    var r = this.wf(t);
                    if (!(e[r].getKey() > n.getKey())) break;
                    e[t] = e[r], t = r
                }
                e[t] = n
            }, c.tf = function (t) {
                return 2 * t + 1
            }, c.zf = function (t) {
                return 2 * t + 2
            }, c.wf = function (t) {
                return t - 1 >> 1
            }, c.H = function () {
                for (var t = this.Y, e = [], n = t.length, r = 0; r < n; r++) e.push(t[r].gd);
                return e
            }, c.W = function () {
                for (var t = this.Y, e = [], n = t.length, r = 0; r < n; r++) e.push(t[r].getKey());
                return e
            }, c.va = function (t) {
                return q(this.Y, function (e) {
                    return e.getKey() == t
                })
            }, c.clone = function () {
                return new On(this)
            }, c.C = function () {
                return this.Y.length
            }, c.X = function () {
                return 0 == this.Y.length
            }, c.clear = function () {
                F(this.Y)
            }, A(_n, On), _n.prototype.enqueue = function (t, e) {
                this.ce(t, e)
            }, _n.prototype.ab = function () {
                return this.remove()
            }, A(Pn, kn), (c = Pn.prototype).Mb = function (t, e) {
                if (!t) return (t = Pn.L.Mb.call(this)) && this.Ac && (this.Gd = f.setTimeout(C(this.Nb, this), this.Ac)), t;
                this.cc.enqueue(void 0 !== e ? e : 100, t), this.Nb()
            }, c.Nb = function () {
                for (var t = this.cc; 0 < t.C();) {
                    var e = this.Mb();
                    if (!e) break;
                    t.ab().apply(this, [e])
                }
            }, c.nc = function (t) {
                Pn.L.nc.call(this, t), this.Nb()
            }, c.Cb = function () {
                Pn.L.Cb.call(this), this.Nb()
            }, c.F = function () {
                Pn.L.F.call(this), f.clearTimeout(this.Gd), this.cc.clear(), this.cc = null
            }, A(Ln, Pn), Ln.prototype.xc = function () {
                var t = new dn,
                    e = this.Jf;
                return e && e.forEach(function (e, n) {
                    t.headers.set(n, e)
                }), this.Ab && t.Je(!0), t
            }, Ln.prototype.Sc = function (t) {
                return !t.Ka && !t.Ba()
            }, Sn.prototype.createWebChannel = Sn.prototype.cf, Tn.prototype.send = Tn.prototype.send, Tn.prototype.open = Tn.prototype.open, Tn.prototype.close = Tn.prototype.close, ke.NO_ERROR = 0, ke.TIMEOUT = 8, ke.HTTP_ERROR = 6, Re.COMPLETE = "complete", Oe.EventType = Pe, Pe.OPEN = "a", Pe.CLOSE = "b", Pe.ERROR = "c", Pe.MESSAGE = "d", Wt.prototype.listen = Wt.prototype.nb, Ln.prototype.getObject = Ln.prototype.Mb, Ln.prototype.releaseObject = Ln.prototype.og, dn.prototype.listenOnce = dn.prototype.Oc, dn.prototype.getLastError = dn.prototype.Hc, dn.prototype.getLastErrorCode = dn.prototype.Ud, dn.prototype.getStatus = dn.prototype.za, dn.prototype.getStatusText = dn.prototype.Yd, dn.prototype.getResponseJson = dn.prototype.yf, dn.prototype.getResponseText = dn.prototype.ya, dn.prototype.getResponseText = dn.prototype.ya, dn.prototype.send = dn.prototype.send;
            var xn = {
                    createWebChannelTransport: Nn,
                    ErrorCode: ke,
                    EventType: Re,
                    WebChannel: Oe,
                    XhrIoPool: Ln
                },
                qn = xn.createWebChannelTransport,
                Fn = xn.ErrorCode,
                Bn = xn.EventType,
                Un = xn.WebChannel,
                Vn = xn.XhrIoPool,
                Qn = "FirebaseError",
                Kn = Error.captureStackTrace,
                Wn = function () {
                    return function (t, e) {
                        if (this.code = t, this.message = e, Kn) Kn(this, Gn.prototype.create);
                        else try {
                            throw Error.apply(this, arguments)
                        } catch (t) {
                            this.name = Qn, Object.defineProperty(this, "stack", {
                                get: function () {
                                    return t.stack
                                }
                            })
                        }
                    }
                }();
            Wn.prototype = Object.create(Error.prototype), Wn.prototype.constructor = Wn, Wn.prototype.name = Qn;
            var jn, zn, Gn = function () {
                    function t(t, e, n) {
                        this.service = t, this.serviceName = e, this.errors = n, this.pattern = /\{\$([^}]+)}/g
                    }
                    return t.prototype.create = function (t, e) {
                        void 0 === e && (e = {});
                        var n, r = this.errors[t],
                            i = this.service + "/" + t;
                        n = void 0 === r ? "Error" : r.replace(this.pattern, function (t, n) {
                            var r = e[n];
                            return void 0 !== r ? r.toString() : "<" + n + "?>"
                        }), n = this.serviceName + ": " + n + " (" + i + ").";
                        var o = new Wn(i, n);
                        for (var s in e) e.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = e[s]);
                        return o
                    }, t
                }(),
                Hn = (function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        e.chain_ = [], e.buf_ = [], e.W_ = [], e.pad_ = [], e.inbuf_ = 0, e.total_ = 0, e.blockSize = 64, e.pad_[0] = 128;
                        for (var n = 1; n < e.blockSize; ++n) e.pad_[n] = 0;
                        return e.reset(), e
                    }
                    s(e, t), e.prototype.reset = function () {
                        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                    }, e.prototype.compress_ = function (t, e) {
                        e || (e = 0);
                        var n = this.W_;
                        if ("string" == typeof t)
                            for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
                        else
                            for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
                        for (r = 16; r < 80; r++) {
                            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                            n[r] = 4294967295 & (i << 1 | i >>> 31)
                        }
                        var o, s, a = this.chain_[0],
                            u = this.chain_[1],
                            c = this.chain_[2],
                            h = this.chain_[3],
                            l = this.chain_[4];
                        for (r = 0; r < 80; r++) {
                            r < 40 ? r < 20 ? (o = h ^ u & (c ^ h), s = 1518500249) : (o = u ^ c ^ h, s = 1859775393) : r < 60 ? (o = u & c | h & (u | c), s = 2400959708) : (o = u ^ c ^ h, s = 3395469782);
                            i = (a << 5 | a >>> 27) + o + l + s + n[r] & 4294967295;
                            l = h, h = c, c = 4294967295 & (u << 30 | u >>> 2), u = a, a = i
                        }
                        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
                    }, e.prototype.update = function (t, e) {
                        if (null != t) {
                            void 0 === e && (e = t.length);
                            for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) {
                                if (0 == o)
                                    for (; r <= n;) this.compress_(t, r), r += this.blockSize;
                                if ("string" == typeof t) {
                                    for (; r < e;)
                                        if (i[o] = t.charCodeAt(r), ++r, ++o == this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                                } else
                                    for (; r < e;)
                                        if (i[o] = t[r], ++r, ++o == this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                            }
                            this.inbuf_ = o, this.total_ += e
                        }
                    }, e.prototype.digest = function () {
                        var t = [],
                            e = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & e, e /= 256;
                        this.compress_(this.buf_);
                        var r = 0;
                        for (n = 0; n < 5; n++)
                            for (var i = 24; i >= 0; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r;
                        return t
                    }
                }(function () {
                    return function () {
                        this.blockSize = -1
                    }
                }()), t.SDK_VERSION),
                Xn = new i("@firebase/firestore");

            function Yn() {
                return Xn.logLevel === e.DEBUG ? jn.DEBUG : Xn.logLevel === e.SILENT ? jn.SILENT : jn.ERROR
            }

            function Jn(t) {
                switch (t) {
                    case jn.DEBUG:
                        Xn.logLevel = e.DEBUG;
                        break;
                    case jn.ERROR:
                        Xn.logLevel = e.ERROR;
                        break;
                    case jn.SILENT:
                        Xn.logLevel = e.SILENT;
                        break;
                    default:
                        Xn.error("Firestore (" + Hn + "): Invalid value passed to `setLogLevel`")
                }
            }

            function Zn(t, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                if (Xn.logLevel <= e.DEBUG) {
                    var o = r.map(tr);
                    Xn.debug.apply(Xn, ["Firestore (" + Hn + ") [" + t + "]: " + n].concat(o))
                }
            }

            function $n(t) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                if (Xn.logLevel <= e.ERROR) {
                    var i = n.map(tr);
                    Xn.error.apply(Xn, ["Firestore (" + Hn + "): " + t].concat(i))
                }
            }

            function tr(t) {
                if ("string" == typeof t) return t;
                var e = rr.getPlatform();
                try {
                    return e.formatJSON(t)
                } catch (e) {
                    return t
                }
            }

            function er(t) {
                var e = "FIRESTORE (" + Hn + ") INTERNAL ASSERTION FAILED: " + t;
                throw $n(e), new Error(e)
            }

            function nr(t, e) {
                t || er(e)
            }(zn = jn || (jn = {}))[zn.DEBUG = 0] = "DEBUG", zn[zn.ERROR = 1] = "ERROR", zn[zn.SILENT = 2] = "SILENT";
            var rr = function () {
                function t() {}
                return t.setPlatform = function (e) {
                    t.platform && er("Platform already defined"), t.platform = e
                }, t.getPlatform = function () {
                    return t.platform || er("Platform not set"), t.platform
                }, t
            }();

            function ir() {
                return rr.getPlatform().emptyByteString
            }
            var or = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                sr = function (t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return r.code = e, r.message = n, r.name = "FirebaseError", r.toString = function () {
                            return r.name + ": [code=" + r.code + "]: " + r.message
                        }, r
                    }
                    return s(e, t), e
                }(Error);

            function ar(t, e) {
                function n() {
                    var t = "This constructor is private.";
                    throw e && (t += " ", t += e), new sr(or.INVALID_ARGUMENT, t)
                }
                for (var r in n.prototype = t.prototype, t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }

            function ur(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function cr(t, e) {
                return void 0 !== t ? t : e
            }

            function hr(t, e) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Number(n);
                        isNaN(r) || e(r, t[n])
                    }
            }

            function lr(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function fr(t) {
                for (var e in nr(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function dr(t, e, n) {
                if (e.length !== n) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires " + kr(n, "argument") + ", but was called with " + kr(e.length, "argument") + ".")
            }

            function pr(t, e, n) {
                if (e.length < n) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires at least " + kr(n, "argument") + ", but was called with " + kr(e.length, "argument") + ".")
            }

            function mr(t, e, n, r) {
                if (e.length < n || e.length > r) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + kr(e.length, "argument") + ".")
            }

            function yr(t, e, n, r) {
                Sr(t, e, Ar(n) + " argument", r)
            }

            function gr(t, e, n, r) {
                void 0 !== r && yr(t, e, n, r)
            }

            function vr(t, e, n, r) {
                Sr(t, e, n + " option", r)
            }

            function br(t, e, n, r) {
                void 0 !== r && vr(t, e, n, r)
            }

            function wr(t, e, n, r, i) {
                void 0 !== r && function (t, e, n, r, i) {
                    if (!(r instanceof Array)) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + Ir(r));
                    for (var o = 0; o < r.length; ++o)
                        if (!i(r[o])) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + Ir(r[o]))
                }(t, e, n, r, i)
            }

            function Er(t, e, n, r, i) {
                void 0 !== r && function (t, e, n, r, i) {
                    for (var o = [], s = 0, a = i; s < a.length; s++) {
                        var u = a[s];
                        if (u === r) return;
                        o.push(Ir(u))
                    }
                    var c = Ir(r);
                    throw new sr(or.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
                }(t, 0, n, r, i)
            }

            function Sr(t, e, n, r) {
                if (!("object" === e ? Tr(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
                    var i = Ir(r);
                    throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
                }
            }

            function Tr(t) {
                return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
            }

            function Ir(t) {
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
                if ("number" == typeof t || "boolean" == typeof t) return "" + t;
                if ("object" == typeof t) {
                    if (t instanceof Array) return "an array";
                    var e = function (t) {
                        if (t.constructor) {
                            var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                            if (e && e.length > 1) return e[1]
                        }
                        return null
                    }(t);
                    return e ? "a custom " + e + " object" : "an object"
                }
                return "function" == typeof t ? "a function" : er("Unknown wrong type: " + typeof t)
            }

            function Cr(t, e, n) {
                if (void 0 === n) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Ar(e) + " argument, but it was undefined.")
            }

            function Dr(t, e, n) {
                lr(e, function (e, r) {
                    if (n.indexOf(e) < 0) throw new sr(or.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "))
                })
            }

            function Nr(t, e, n, r) {
                var i = Ir(r);
                return new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires its " + Ar(n) + " argument to be a " + e + ", but it was: " + i)
            }

            function Ar(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function kr(t, e) {
                return t + " " + e + (1 === t ? "" : "s")
            }
            var Rr = function () {
                function t() {}
                return t.newId = function () {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                    return nr(20 === e.length, "Invalid auto ID: " + e), e
                }, t
            }();

            function Mr(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }

            function Or(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (!t[n].isEqual(e[n])) return !1;
                return !0
            }

            function _r() {
                if ("undefined" == typeof Uint8Array) throw new sr(or.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function Pr() {
                if (!rr.getPlatform().base64Available) throw new sr(or.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Lr, xr, qr = function () {
                    function t(t) {
                        Pr(), this._binaryString = t
                    }
                    return t.fromBase64String = function (e) {
                        dr("Blob.fromBase64String", arguments, 1), yr("Blob.fromBase64String", "string", 1, e), Pr();
                        try {
                            return new t(rr.getPlatform().atob(e))
                        } catch (t) {
                            throw new sr(or.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
                        }
                    }, t.fromUint8Array = function (e) {
                        if (dr("Blob.fromUint8Array", arguments, 1), _r(), !(e instanceof Uint8Array)) throw Nr("Blob.fromUint8Array", "Uint8Array", 1, e);
                        return new t(Array.prototype.map.call(e, function (t) {
                            return String.fromCharCode(t)
                        }).join(""))
                    }, t.prototype.toBase64 = function () {
                        return dr("Blob.toBase64", arguments, 0), Pr(), rr.getPlatform().btoa(this._binaryString)
                    }, t.prototype.toUint8Array = function () {
                        dr("Blob.toUint8Array", arguments, 0), _r();
                        for (var t = new Uint8Array(this._binaryString.length), e = 0; e < this._binaryString.length; e++) t[e] = this._binaryString.charCodeAt(e);
                        return t
                    }, t.prototype.toString = function () {
                        return "Blob(base64: " + this.toBase64() + ")"
                    }, t.prototype.isEqual = function (t) {
                        return this._binaryString === t._binaryString
                    }, t.prototype._compareTo = function (t) {
                        return Mr(this._binaryString, t._binaryString)
                    }, t
                }(),
                Fr = ar(qr, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                Br = function () {
                    function t(t, e) {
                        if (dr("GeoPoint", arguments, 2), yr("GeoPoint", "number", 1, t), yr("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new sr(or.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                        if (!isFinite(e) || e < -180 || e > 180) throw new sr(or.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                        this._lat = t, this._long = e
                    }
                    return Object.defineProperty(t.prototype, "latitude", {
                        get: function () {
                            return this._lat
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "longitude", {
                        get: function () {
                            return this._long
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function (t) {
                        return this._lat === t._lat && this._long === t._long
                    }, t.prototype._compareTo = function (t) {
                        return Mr(this._lat, t._lat) || Mr(this._long, t._long)
                    }, t
                }(),
                Ur = function () {
                    function t(t, e) {
                        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new sr(or.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                        if (e >= 1e9) throw new sr(or.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                        if (t < -62135596800) throw new sr(or.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                        if (t >= 253402300800) throw new sr(or.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
                    }
                    return t.now = function () {
                        return t.fromMillis(Date.now())
                    }, t.fromDate = function (e) {
                        return t.fromMillis(e.getTime())
                    }, t.fromMillis = function (e) {
                        var n = Math.floor(e / 1e3);
                        return new t(n, 1e6 * (e - 1e3 * n))
                    }, t.prototype.toDate = function () {
                        return new Date(this.toMillis())
                    }, t.prototype.toMillis = function () {
                        return 1e3 * this.seconds + this.nanoseconds / 1e6
                    }, t.prototype._compareTo = function (t) {
                        return this.seconds === t.seconds ? Mr(this.nanoseconds, t.nanoseconds) : Mr(this.seconds, t.seconds)
                    }, t.prototype.isEqual = function (t) {
                        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                    }, t.prototype.toString = function () {
                        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                    }, t
                }(),
                Vr = function () {
                    return function (t, e, n, r) {
                        this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r
                    }
                }(),
                Qr = "(default)",
                Kr = function () {
                    function t(t, e) {
                        this.projectId = t, this.database = e || Qr
                    }
                    return Object.defineProperty(t.prototype, "isDefaultDatabase", {
                        get: function () {
                            return this.database === Qr
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function (e) {
                        return e instanceof t && e.projectId === this.projectId && e.database === this.database
                    }, t.prototype.compareTo = function (t) {
                        return Mr(this.projectId, t.projectId) || Mr(this.database, t.database)
                    }, t
                }(),
                Wr = function () {
                    function t(t, e, n) {
                        this.init(t, e, n)
                    }
                    return t.prototype.init = function (t, e, n) {
                        void 0 === e ? e = 0 : e > t.length && er("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && er("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n
                    }, t.prototype.construct = function (t, e, n) {
                        var r = Object.create(Object.getPrototypeOf(this));
                        return r.init(t, e, n), r
                    }, Object.defineProperty(t.prototype, "length", {
                        get: function () {
                            return this.len
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function (e) {
                        return 0 === t.comparator(this, e)
                    }, t.prototype.child = function (e) {
                        var n = this.segments.slice(this.offset, this.limit());
                        return e instanceof t ? e.forEach(function (t) {
                            n.push(t)
                        }) : "string" == typeof e ? n.push(e) : er("Unknown parameter type for Path.child(): " + e), this.construct(n)
                    }, t.prototype.limit = function () {
                        return this.offset + this.length
                    }, t.prototype.popFirst = function (t) {
                        return t = void 0 === t ? 1 : t, nr(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t)
                    }, t.prototype.popLast = function () {
                        return nr(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1)
                    }, t.prototype.firstSegment = function () {
                        return nr(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset]
                    }, t.prototype.lastSegment = function () {
                        return nr(!this.isEmpty(), "Can't call lastSegment() on empty path"), this.segments[this.limit() - 1]
                    }, t.prototype.get = function (t) {
                        return nr(t < this.length, "Index out of range"), this.segments[this.offset + t]
                    }, t.prototype.isEmpty = function () {
                        return 0 === this.length
                    }, t.prototype.isPrefixOf = function (t) {
                        if (t.length < this.length) return !1;
                        for (var e = 0; e < this.length; e++)
                            if (this.get(e) !== t.get(e)) return !1;
                        return !0
                    }, t.prototype.isImmediateParentOf = function (t) {
                        if (this.length + 1 !== t.length) return !1;
                        for (var e = 0; e < this.length; e++)
                            if (this.get(e) !== t.get(e)) return !1;
                        return !0
                    }, t.prototype.forEach = function (t) {
                        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                    }, t.prototype.toArray = function () {
                        return this.segments.slice(this.offset, this.limit())
                    }, t.comparator = function (t, e) {
                        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                            var i = t.get(r),
                                o = e.get(r);
                            if (i < o) return -1;
                            if (i > o) return 1
                        }
                        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                    }, t
                }(),
                jr = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s(e, t), e.prototype.canonicalString = function () {
                        return this.toArray().join("/")
                    }, e.prototype.toString = function () {
                        return this.canonicalString()
                    }, e.fromString = function (t) {
                        if (t.indexOf("//") >= 0) throw new sr(or.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                        return new e(t.split("/").filter(function (t) {
                            return t.length > 0
                        }))
                    }, e.EMPTY_PATH = new e([]), e
                }(Wr),
                zr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                Gr = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return s(e, t), e.isValidIdentifier = function (t) {
                        return zr.test(t)
                    }, e.prototype.canonicalString = function () {
                        return this.toArray().map(function (t) {
                            return t = t.replace("\\", "\\\\").replace("`", "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), t
                        }).join(".")
                    }, e.prototype.toString = function () {
                        return this.canonicalString()
                    }, e.prototype.isKeyField = function () {
                        return 1 === this.length && "__name__" === this.get(0)
                    }, e.keyField = function () {
                        return new e(["__name__"])
                    }, e.fromServerFormat = function (t) {
                        for (var n = [], r = "", i = 0, o = function () {
                                if (0 === r.length) throw new sr(or.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                                n.push(r), r = ""
                            }, s = !1; i < t.length;) {
                            var a = t[i];
                            if ("\\" === a) {
                                if (i + 1 === t.length) throw new sr(or.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                                var u = t[i + 1];
                                if ("\\" !== u && "." !== u && "`" !== u) throw new sr(or.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                                r += u, i += 2
                            } else "`" === a ? (s = !s, i++) : "." !== a || s ? (r += a, i++) : (o(), i++)
                        }
                        if (o(), s) throw new sr(or.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                        return new e(n)
                    }, e.EMPTY_PATH = new e([]), e
                }(Wr),
                Hr = function () {
                    function t(e) {
                        this.path = e, nr(t.isDocumentKey(e), "Invalid DocumentKey with an odd number of segments: " + e.toArray().join("/"))
                    }
                    return t.prototype.isEqual = function (t) {
                        return null !== t && 0 === jr.comparator(this.path, t.path)
                    }, t.prototype.toString = function () {
                        return this.path.toString()
                    }, t.comparator = function (t, e) {
                        return jr.comparator(t.path, e.path)
                    }, t.isDocumentKey = function (t) {
                        return t.length % 2 == 0
                    }, t.fromSegments = function (e) {
                        return new t(new jr(e.slice()))
                    }, t.fromPathString = function (e) {
                        return new t(jr.fromString(e))
                    }, t.EMPTY = new t(new jr([])), t
                }(),
                Xr = function () {
                    function t(t, e) {
                        this.key = t, this.version = e
                    }
                    return t.compareByKey = function (t, e) {
                        return Hr.comparator(t.key, e.key)
                    }, t
                }(),
                Yr = function (t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, n) || this;
                        return s.data = r, s.proto = o, s.hasLocalMutations = !!i.hasLocalMutations, s.hasCommittedMutations = !!i.hasCommittedMutations, s
                    }
                    return s(e, t), e.prototype.field = function (t) {
                        return this.data.field(t)
                    }, e.prototype.fieldValue = function (t) {
                        var e = this.field(t);
                        return e ? e.value() : void 0
                    }, e.prototype.value = function () {
                        return this.data.value()
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.data.isEqual(t.data) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations
                    }, e.prototype.toString = function () {
                        return "Document(" + this.key + ", " + this.version + ", " + this.data.toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function () {
                            return this.hasLocalMutations || this.hasCommittedMutations
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.compareByField = function (t, e, n) {
                        var r = e.field(t),
                            i = n.field(t);
                        return void 0 !== r && void 0 !== i ? r.compareTo(i) : er("Trying to compare documents on fields that don't exist")
                    }, e
                }(Xr),
                Jr = function (t) {
                    function e(e, n, r) {
                        var i = t.call(this, e, n) || this;
                        return i.hasCommittedMutations = !(!r || !r.hasCommittedMutations), i
                    }
                    return s(e, t), e.prototype.toString = function () {
                        return "NoDocument(" + this.key + ", " + this.version + ")"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function () {
                            return this.hasCommittedMutations
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function (t) {
                        return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                    }, e
                }(Xr),
                Zr = function (t) {
                    function e(e, n) {
                        return t.call(this, e, n) || this
                    }
                    return s(e, t), e.prototype.toString = function () {
                        return "UnknownDocument(" + this.key + ", " + this.version + ")"
                    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                        get: function () {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isEqual = function (t) {
                        return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                    }, e
                }(Xr),
                $r = function () {
                    function t(t, e) {
                        this.comparator = t, this.root = e || ei.EMPTY
                    }
                    return t.prototype.insert = function (e, n) {
                        return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, ei.BLACK, null, null))
                    }, t.prototype.remove = function (e) {
                        return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, ei.BLACK, null, null))
                    }, t.prototype.get = function (t) {
                        for (var e = this.root; !e.isEmpty();) {
                            var n = this.comparator(t, e.key);
                            if (0 === n) return e.value;
                            n < 0 ? e = e.left : n > 0 && (e = e.right)
                        }
                        return null
                    }, t.prototype.indexOf = function (t) {
                        for (var e = 0, n = this.root; !n.isEmpty();) {
                            var r = this.comparator(t, n.key);
                            if (0 === r) return e + n.left.size;
                            r < 0 ? n = n.left : (e += n.left.size + 1, n = n.right)
                        }
                        return -1
                    }, t.prototype.isEmpty = function () {
                        return this.root.isEmpty()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this.root.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.minKey = function () {
                        return this.root.minKey()
                    }, t.prototype.maxKey = function () {
                        return this.root.maxKey()
                    }, t.prototype.inorderTraversal = function (t) {
                        return this.root.inorderTraversal(t)
                    }, t.prototype.forEach = function (t) {
                        this.inorderTraversal(function (e, n) {
                            return t(e, n), !1
                        })
                    }, t.prototype.reverseTraversal = function (t) {
                        return this.root.reverseTraversal(t)
                    }, t.prototype.getIterator = function () {
                        return new ti(this.root, null, this.comparator, !1)
                    }, t.prototype.getIteratorFrom = function (t) {
                        return new ti(this.root, t, this.comparator, !1)
                    }, t.prototype.getReverseIterator = function () {
                        return new ti(this.root, null, this.comparator, !0)
                    }, t.prototype.getReverseIteratorFrom = function (t) {
                        return new ti(this.root, t, this.comparator, !0)
                    }, t
                }(),
                ti = function () {
                    function t(t, e, n, r) {
                        this.isReverse = r, this.nodeStack = [];
                        for (var i = 1; !t.isEmpty();)
                            if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                            else {
                                if (0 === i) {
                                    this.nodeStack.push(t);
                                    break
                                }
                                this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                            }
                    }
                    return t.prototype.getNext = function () {
                        nr(this.nodeStack.length > 0, "getNext() called on iterator when hasNext() is false.");
                        var t = this.nodeStack.pop(),
                            e = {
                                key: t.key,
                                value: t.value
                            };
                        if (this.isReverse)
                            for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                        else
                            for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left;
                        return e
                    }, t.prototype.hasNext = function () {
                        return this.nodeStack.length > 0
                    }, t.prototype.peek = function () {
                        if (0 === this.nodeStack.length) return null;
                        var t = this.nodeStack[this.nodeStack.length - 1];
                        return {
                            key: t.key,
                            value: t.value
                        }
                    }, t
                }(),
                ei = function () {
                    function t(e, n, r, i, o) {
                        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size
                    }
                    return t.prototype.copy = function (e, n, r, i, o) {
                        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
                    }, t.prototype.isEmpty = function () {
                        return !1
                    }, t.prototype.inorderTraversal = function (t) {
                        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                    }, t.prototype.reverseTraversal = function (t) {
                        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                    }, t.prototype.min = function () {
                        return this.left.isEmpty() ? this : this.left.min()
                    }, t.prototype.minKey = function () {
                        return this.min().key
                    }, t.prototype.maxKey = function () {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }, t.prototype.insert = function (t, e, n) {
                        var r = this,
                            i = n(t, r.key);
                        return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp()
                    }, t.prototype.removeMin = function () {
                        if (this.left.isEmpty()) return t.EMPTY;
                        var e = this;
                        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
                    }, t.prototype.remove = function (e, n) {
                        var r, i = this;
                        if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, n), null);
                        else {
                            if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 0 === n(e, i.key)) {
                                if (i.right.isEmpty()) return t.EMPTY;
                                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin())
                            }
                            i = i.copy(null, null, null, null, i.right.remove(e, n))
                        }
                        return i.fixUp()
                    }, t.prototype.isRed = function () {
                        return this.color
                    }, t.prototype.fixUp = function () {
                        var t = this;
                        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t
                    }, t.prototype.moveRedLeft = function () {
                        var t = this.colorFlip();
                        return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t
                    }, t.prototype.moveRedRight = function () {
                        var t = this.colorFlip();
                        return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t
                    }, t.prototype.rotateLeft = function () {
                        var e = this.copy(null, null, t.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, e, null)
                    }, t.prototype.rotateRight = function () {
                        var e = this.copy(null, null, t.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, e)
                    }, t.prototype.colorFlip = function () {
                        var t = this.left.copy(null, null, !this.left.color, null, null),
                            e = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, t, e)
                    }, t.prototype.checkMaxDepth = function () {
                        var t = this.check();
                        return Math.pow(2, t) <= this.size + 1
                    }, t.prototype.check = function () {
                        if (this.isRed() && this.left.isRed()) throw er("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed()) throw er("Right child of (" + this.key + "," + this.value + ") is red");
                        var t = this.left.check();
                        if (t !== this.right.check()) throw er("Black depths differ");
                        return t + (this.isRed() ? 0 : 1)
                    }, t.EMPTY = null, t.RED = !0, t.BLACK = !1, t
                }(),
                ni = function () {
                    function t() {
                        this.size = 0
                    }
                    return t.prototype.copy = function (t, e, n, r, i) {
                        return this
                    }, t.prototype.insert = function (t, e, n) {
                        return new ei(t, e)
                    }, t.prototype.remove = function (t, e) {
                        return this
                    }, t.prototype.isEmpty = function () {
                        return !0
                    }, t.prototype.inorderTraversal = function (t) {
                        return !1
                    }, t.prototype.reverseTraversal = function (t) {
                        return !1
                    }, t.prototype.minKey = function () {
                        return null
                    }, t.prototype.maxKey = function () {
                        return null
                    }, t.prototype.isRed = function () {
                        return !1
                    }, t.prototype.checkMaxDepth = function () {
                        return !0
                    }, t.prototype.check = function () {
                        return 0
                    }, t
                }();
            ei.EMPTY = new ni,
                function (t) {
                    t[t.NullValue = 0] = "NullValue", t[t.BooleanValue = 1] = "BooleanValue", t[t.NumberValue = 2] = "NumberValue", t[t.TimestampValue = 3] = "TimestampValue", t[t.StringValue = 4] = "StringValue", t[t.BlobValue = 5] = "BlobValue", t[t.RefValue = 6] = "RefValue", t[t.GeoPointValue = 7] = "GeoPointValue", t[t.ArrayValue = 8] = "ArrayValue", t[t.ObjectValue = 9] = "ObjectValue"
                }(Lr || (Lr = {})),
                function (t) {
                    t[t.Default = 0] = "Default", t[t.Estimate = 1] = "Estimate", t[t.Previous = 2] = "Previous"
                }(xr || (xr = {}));
            var ri = function () {
                    function t(t, e) {
                        this.serverTimestampBehavior = t, this.timestampsInSnapshots = e
                    }
                    return t.fromSnapshotOptions = function (e, n) {
                        switch (e.serverTimestamps) {
                            case "estimate":
                                return new t(xr.Estimate, n);
                            case "previous":
                                return new t(xr.Previous, n);
                            case "none":
                            case void 0:
                                return new t(xr.Default, n);
                            default:
                                return er("fromSnapshotOptions() called with invalid options.")
                        }
                    }, t
                }(),
                ii = function () {
                    function t() {}
                    return t.prototype.toString = function () {
                        var t = this.value();
                        return null === t ? "null" : t.toString()
                    }, t.prototype.defaultCompareTo = function (t) {
                        return nr(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), Mr(this.typeOrder, t.typeOrder)
                    }, t
                }(),
                oi = function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.typeOrder = Lr.NullValue, e.internalValue = null, e
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return null
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? 0 : this.defaultCompareTo(t)
                    }, e.INSTANCE = new e, e
                }(ii),
                si = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.BooleanValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? Mr(this, t) : this.defaultCompareTo(t)
                    }, e.of = function (t) {
                        return t ? e.TRUE : e.FALSE
                    }, e.TRUE = new e(!0), e.FALSE = new e(!1), e
                }(ii),
                ai = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.NumberValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? (n = this.internalValue, r = t.internalValue, n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1) : this.defaultCompareTo(t);
                        var n, r
                    }, e
                }(ii);

            function ui(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
            var ci = function (t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return s(e, t), e.prototype.isEqual = function (t) {
                        return t instanceof e && ui(this.internalValue, t.internalValue)
                    }, e
                }(ai),
                hi = function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.internalValue = e, n
                    }
                    return s(e, t), e.prototype.isEqual = function (t) {
                        return t instanceof e && ui(this.internalValue, t.internalValue)
                    }, e.NAN = new e(NaN), e.POSITIVE_INFINITY = new e(1 / 0), e.NEGATIVE_INFINITY = new e(-1 / 0), e
                }(ai),
                li = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.StringValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? Mr(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ii),
                fi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.TimestampValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return !t || t.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate()
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : t instanceof di ? -1 : this.defaultCompareTo(t)
                    }, e
                }(ii),
                di = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.localWriteTime = e, r.previousValue = n, r.typeOrder = Lr.TimestampValue, r
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return t && t.serverTimestampBehavior === xr.Estimate ? new fi(this.localWriteTime).value(t) : t && t.serverTimestampBehavior === xr.Previous && this.previousValue ? this.previousValue.value(t) : null
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.localWriteTime.isEqual(t.localWriteTime)
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? this.localWriteTime._compareTo(t.localWriteTime) : t instanceof fi ? 1 : this.defaultCompareTo(t)
                    }, e.prototype.toString = function () {
                        return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">"
                    }, e
                }(ii),
                pi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.BlobValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ii),
                mi = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.databaseId = e, r.key = n, r.typeOrder = Lr.RefValue, r
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.key
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && (this.key.isEqual(t.key) && this.databaseId.isEqual(t.databaseId))
                    }, e.prototype.compareTo = function (t) {
                        if (t instanceof e) {
                            var n = this.databaseId.compareTo(t.databaseId);
                            return 0 !== n ? n : Hr.comparator(this.key, t.key)
                        }
                        return this.defaultCompareTo(t)
                    }, e
                }(ii),
                yi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.GeoPointValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.internalValue.isEqual(t.internalValue)
                    }, e.prototype.compareTo = function (t) {
                        return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ii),
                gi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.ObjectValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        var e = {};
                        return this.internalValue.inorderTraversal(function (n, r) {
                            e[n] = r.value(t)
                        }), e
                    }, e.prototype.forEach = function (t) {
                        this.internalValue.inorderTraversal(t)
                    }, e.prototype.isEqual = function (t) {
                        if (t instanceof e) {
                            for (var n = this.internalValue.getIterator(), r = t.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                                var i = n.getNext(),
                                    o = r.getNext();
                                if (i.key !== o.key || !i.value.isEqual(o.value)) return !1
                            }
                            return !n.hasNext() && !r.hasNext()
                        }
                        return !1
                    }, e.prototype.compareTo = function (t) {
                        if (t instanceof e) {
                            for (var n = this.internalValue.getIterator(), r = t.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                                var i = n.getNext(),
                                    o = r.getNext(),
                                    s = Mr(i.key, o.key) || i.value.compareTo(o.value);
                                if (s) return s
                            }
                            return Mr(n.hasNext(), r.hasNext())
                        }
                        return this.defaultCompareTo(t)
                    }, e.prototype.set = function (t, n) {
                        if (nr(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), n);
                        var r = this.child(t.firstSegment());
                        r instanceof e || (r = e.EMPTY);
                        var i = r.set(t.popFirst(), n);
                        return this.setChild(t.firstSegment(), i)
                    }, e.prototype.delete = function (t) {
                        if (nr(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new e(this.internalValue.remove(t.firstSegment()));
                        var n = this.child(t.firstSegment());
                        if (n instanceof e) {
                            var r = n.delete(t.popFirst());
                            return new e(this.internalValue.insert(t.firstSegment(), r))
                        }
                        return this
                    }, e.prototype.contains = function (t) {
                        return void 0 !== this.field(t)
                    }, e.prototype.field = function (t) {
                        nr(!t.isEmpty(), "Can't get field of empty path");
                        var n = this;
                        return t.forEach(function (t) {
                            n = n instanceof e && n.internalValue.get(t) || void 0
                        }), n
                    }, e.prototype.toString = function () {
                        return JSON.stringify(this.value())
                    }, e.prototype.child = function (t) {
                        return this.internalValue.get(t) || void 0
                    }, e.prototype.setChild = function (t, n) {
                        return new e(this.internalValue.insert(t, n))
                    }, e.EMPTY = new e(new $r(Mr)), e
                }(ii),
                vi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = Lr.ArrayValue, n
                    }
                    return s(e, t), e.prototype.value = function (t) {
                        return this.internalValue.map(function (e) {
                            return e.value(t)
                        })
                    }, e.prototype.forEach = function (t) {
                        this.internalValue.forEach(t)
                    }, e.prototype.isEqual = function (t) {
                        if (t instanceof e) {
                            if (this.internalValue.length !== t.internalValue.length) return !1;
                            for (var n = 0; n < this.internalValue.length; n++)
                                if (!this.internalValue[n].isEqual(t.internalValue[n])) return !1;
                            return !0
                        }
                        return !1
                    }, e.prototype.compareTo = function (t) {
                        if (t instanceof e) {
                            for (var n = Math.min(this.internalValue.length, t.internalValue.length), r = 0; r < n; r++) {
                                var i = this.internalValue[r].compareTo(t.internalValue[r]);
                                if (i) return i
                            }
                            return Mr(this.internalValue.length, t.internalValue.length)
                        }
                        return this.defaultCompareTo(t)
                    }, e.prototype.toString = function () {
                        return JSON.stringify(this.value())
                    }, e
                }(ii),
                bi = Number,
                wi = bi.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
                Ei = bi.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                Si = bi.isInteger || function (t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
                };

            function Ti(t) {
                return null === t || void 0 === t
            }

            function Ii(t) {
                return Si(t) && t <= Ei && t >= wi
            }
            var Ci, Di = function () {
                    function t(t, e, n, r, i, o) {
                        void 0 === e && (e = []), void 0 === n && (n = []), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), this.path = t, this.explicitOrderBy = e, this.filters = n, this.limit = r, this.startAt = i, this.endAt = o, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt)
                    }
                    return t.atPath = function (e) {
                        return new t(e)
                    }, Object.defineProperty(t.prototype, "orderBy", {
                        get: function () {
                            if (null === this.memoizedOrderBy) {
                                var t = this.getInequalityFilterField(),
                                    e = this.getFirstOrderByField();
                                if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [Li] : this.memoizedOrderBy = [new Pi(t), Li];
                                else {
                                    nr(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field."), this.memoizedOrderBy = [];
                                    for (var n = !1, r = 0, i = this.explicitOrderBy; r < i.length; r++) {
                                        var o = i[r];
                                        this.memoizedOrderBy.push(o), o.field.isKeyField() && (n = !0)
                                    }
                                    if (!n) {
                                        var s = this.explicitOrderBy.length > 0 ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : Oi.ASCENDING;
                                        this.memoizedOrderBy.push(s === Oi.ASCENDING ? Li : xi)
                                    }
                                }
                            }
                            return this.memoizedOrderBy
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.addFilter = function (e) {
                        nr(null == this.getInequalityFilterField() || !(e instanceof ki) || !e.isInequality() || e.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), nr(!Hr.isDocumentKey(this.path), "No filtering allowed for document query");
                        var n = this.filters.concat([e]);
                        return new t(this.path, this.explicitOrderBy.slice(), n, this.limit, this.startAt, this.endAt)
                    }, t.prototype.addOrderBy = function (e) {
                        nr(!Hr.isDocumentKey(this.path), "No ordering allowed for document query"), nr(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
                        var n = this.explicitOrderBy.concat([e]);
                        return new t(this.path, n, this.filters.slice(), this.limit, this.startAt, this.endAt)
                    }, t.prototype.withLimit = function (e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), e, this.startAt, this.endAt)
                    }, t.prototype.withStartAt = function (e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, e, this.endAt)
                    }, t.prototype.withEndAt = function (e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, e)
                    }, t.prototype.canonicalId = function () {
                        if (null === this.memoizedCanonicalId) {
                            var t = this.path.canonicalString();
                            t += "|f:";
                            for (var e = 0, n = this.filters; e < n.length; e++) {
                                t += n[e].canonicalId(), t += ","
                            }
                            t += "|ob:";
                            for (var r = 0, i = this.orderBy; r < i.length; r++) {
                                t += i[r].canonicalId(), t += ","
                            }
                            Ti(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t
                        }
                        return this.memoizedCanonicalId
                    }, t.prototype.toString = function () {
                        var t = "Query(" + this.path.canonicalString();
                        return this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), Ti(this.limit) || (t += ", limit: " + this.limit), this.explicitOrderBy.length > 0 && (t += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), t + ")"
                    }, t.prototype.isEqual = function (t) {
                        if (this.limit !== t.limit) return !1;
                        if (this.orderBy.length !== t.orderBy.length) return !1;
                        for (var e = 0; e < this.orderBy.length; e++)
                            if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                        if (this.filters.length !== t.filters.length) return !1;
                        for (e = 0; e < this.filters.length; e++)
                            if (!this.filters[e].isEqual(t.filters[e])) return !1;
                        return !!this.path.isEqual(t.path) && (!(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt))
                    }, t.prototype.docComparator = function (t, e) {
                        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                            var o = i[r],
                                s = o.compare(t, e);
                            if (0 !== s) return s;
                            n = n || o.field.isKeyField()
                        }
                        return nr(n, "orderBy used that doesn't compare on key field"), 0
                    }, t.prototype.matches = function (t) {
                        return this.matchesAncestor(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t)
                    }, t.prototype.hasLimit = function () {
                        return !Ti(this.limit)
                    }, t.prototype.getFirstOrderByField = function () {
                        return this.explicitOrderBy.length > 0 ? this.explicitOrderBy[0].field : null
                    }, t.prototype.getInequalityFilterField = function () {
                        for (var t = 0, e = this.filters; t < e.length; t++) {
                            var n = e[t];
                            if (n instanceof ki && n.isInequality()) return n.field
                        }
                        return null
                    }, t.prototype.hasArrayContainsFilter = function () {
                        return void 0 !== this.filters.find(function (t) {
                            return t instanceof ki && t.op === Ai.ARRAY_CONTAINS
                        })
                    }, t.prototype.isDocumentQuery = function () {
                        return Hr.isDocumentKey(this.path) && 0 === this.filters.length
                    }, t.prototype.matchesAncestor = function (t) {
                        var e = t.key.path;
                        return Hr.isDocumentKey(this.path) ? this.path.isEqual(e) : this.path.isPrefixOf(e) && this.path.length === e.length - 1
                    }, t.prototype.matchesOrderBy = function (t) {
                        for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) {
                            var r = n[e];
                            if (!r.field.isKeyField() && void 0 === t.field(r.field)) return !1
                        }
                        return !0
                    }, t.prototype.matchesFilters = function (t) {
                        for (var e = 0, n = this.filters; e < n.length; e++) {
                            if (!n[e].matches(t)) return !1
                        }
                        return !0
                    }, t.prototype.matchesBounds = function (t) {
                        return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t)) && (!this.endAt || !this.endAt.sortsBeforeDocument(this.orderBy, t))
                    }, t.prototype.assertValidBound = function (t) {
                        nr(t.position.length <= this.orderBy.length, "Bound is longer than orderBy")
                    }, t
                }(),
                Ni = function () {
                    function t() {}
                    return t.create = function (t, e, n) {
                        if (n.isEqual(oi.INSTANCE)) {
                            if (e !== Ai.EQUAL) throw new sr(or.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on null.");
                            return new Ri(t)
                        }
                        if (n.isEqual(hi.NAN)) {
                            if (e !== Ai.EQUAL) throw new sr(or.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on NaN.");
                            return new Mi(t)
                        }
                        return new ki(t, e, n)
                    }, t
                }(),
                Ai = function () {
                    function t(t) {
                        this.name = t
                    }
                    return t.fromString = function (e) {
                        switch (e) {
                            case "<":
                                return t.LESS_THAN;
                            case "<=":
                                return t.LESS_THAN_OR_EQUAL;
                            case "==":
                                return t.EQUAL;
                            case ">=":
                                return t.GREATER_THAN_OR_EQUAL;
                            case ">":
                                return t.GREATER_THAN;
                            case "array-contains":
                                return t.ARRAY_CONTAINS;
                            default:
                                return er("Unknown relation: " + e)
                        }
                    }, t.prototype.toString = function () {
                        return this.name
                    }, t.prototype.isEqual = function (t) {
                        return this.name === t.name
                    }, t.LESS_THAN = new t("<"), t.LESS_THAN_OR_EQUAL = new t("<="), t.EQUAL = new t("=="), t.GREATER_THAN = new t(">"), t.GREATER_THAN_OR_EQUAL = new t(">="), t.ARRAY_CONTAINS = new t("array-contains"), t
                }(),
                ki = function (t) {
                    function e(e, n, r) {
                        var i = t.call(this) || this;
                        return i.field = e, i.op = n, i.value = r, i
                    }
                    return s(e, t), e.prototype.matches = function (t) {
                        if (this.field.isKeyField()) {
                            nr(this.value instanceof mi, "Comparing on key, but filter value not a RefValue"), nr(this.op !== Ai.ARRAY_CONTAINS, "array-contains queries don't make sense on document keys.");
                            var e = this.value,
                                n = Hr.comparator(t.key, e.key);
                            return this.matchesComparison(n)
                        }
                        var r = t.field(this.field);
                        return void 0 !== r && this.matchesValue(r)
                    }, e.prototype.matchesValue = function (t) {
                        var e = this;
                        return this.op === Ai.ARRAY_CONTAINS ? t instanceof vi && void 0 !== t.internalValue.find(function (t) {
                            return t.isEqual(e.value)
                        }) : this.value.typeOrder === t.typeOrder && this.matchesComparison(t.compareTo(this.value))
                    }, e.prototype.matchesComparison = function (t) {
                        switch (this.op) {
                            case Ai.LESS_THAN:
                                return t < 0;
                            case Ai.LESS_THAN_OR_EQUAL:
                                return t <= 0;
                            case Ai.EQUAL:
                                return 0 === t;
                            case Ai.GREATER_THAN:
                                return t > 0;
                            case Ai.GREATER_THAN_OR_EQUAL:
                                return t >= 0;
                            default:
                                return er("Unknown relation op" + this.op)
                        }
                    }, e.prototype.isInequality = function () {
                        return this.op !== Ai.EQUAL && this.op !== Ai.ARRAY_CONTAINS
                    }, e.prototype.canonicalId = function () {
                        return this.field.canonicalString() + this.op.toString() + this.value.toString()
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && (this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value))
                    }, e.prototype.toString = function () {
                        return this.field.canonicalString() + " " + this.op + " " + this.value.value()
                    }, e
                }(Ni),
                Ri = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.field = e, n
                    }
                    return s(e, t), e.prototype.matches = function (t) {
                        var e = t.field(this.field);
                        return void 0 !== e && null === e.value()
                    }, e.prototype.canonicalId = function () {
                        return this.field.canonicalString() + " IS null"
                    }, e.prototype.toString = function () {
                        return this.field.canonicalString() + " IS null"
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.field.isEqual(t.field)
                    }, e
                }(Ni),
                Mi = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.field = e, n
                    }
                    return s(e, t), e.prototype.matches = function (t) {
                        var e = t.field(this.field),
                            n = e && e.value();
                        return "number" == typeof n && isNaN(n)
                    }, e.prototype.canonicalId = function () {
                        return this.field.canonicalString() + " IS NaN"
                    }, e.prototype.toString = function () {
                        return this.field.canonicalString() + " IS NaN"
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.field.isEqual(t.field)
                    }, e
                }(Ni),
                Oi = function () {
                    function t(t) {
                        this.name = t
                    }
                    return t.prototype.toString = function () {
                        return this.name
                    }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t
                }(),
                _i = function () {
                    function t(t, e) {
                        this.position = t, this.before = e
                    }
                    return t.prototype.canonicalId = function () {
                        for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) {
                            t += n[e].toString()
                        }
                        return t
                    }, t.prototype.sortsBeforeDocument = function (t, e) {
                        nr(this.position.length <= t.length, "Bound has more components than query's orderBy");
                        for (var n = 0, r = 0; r < this.position.length; r++) {
                            var i = t[r],
                                o = this.position[r];
                            if (i.field.isKeyField()) nr(o instanceof mi, "Bound has a non-key value where the key path is being used."), n = Hr.comparator(o.key, e.key);
                            else {
                                var s = e.field(i.field);
                                nr(void 0 !== s, "Field should exist since document matched the orderBy already."), n = o.compareTo(s)
                            }
                            if (i.dir === Oi.DESCENDING && (n *= -1), 0 !== n) break
                        }
                        return this.before ? n <= 0 : n < 0
                    }, t.prototype.isEqual = function (t) {
                        if (null === t) return !1;
                        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                        for (var e = 0; e < this.position.length; e++) {
                            var n = this.position[e],
                                r = t.position[e];
                            return n.isEqual(r)
                        }
                        return !0
                    }, t
                }(),
                Pi = function () {
                    function t(t, e) {
                        this.field = t, void 0 === e && (e = Oi.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField()
                    }
                    return t.prototype.compare = function (t, e) {
                        var n = this.isKeyOrderBy ? Yr.compareByKey(t, e) : Yr.compareByField(this.field, t, e);
                        switch (this.dir) {
                            case Oi.ASCENDING:
                                return n;
                            case Oi.DESCENDING:
                                return -1 * n;
                            default:
                                return er("Unknown direction: " + this.dir)
                        }
                    }, t.prototype.canonicalId = function () {
                        return this.field.canonicalString() + this.dir.toString()
                    }, t.prototype.toString = function () {
                        return this.field.canonicalString() + " (" + this.dir + ")"
                    }, t.prototype.isEqual = function (t) {
                        return this.dir === t.dir && this.field.isEqual(t.field)
                    }, t
                }(),
                Li = new Pi(Gr.keyField(), Oi.ASCENDING),
                xi = new Pi(Gr.keyField(), Oi.DESCENDING),
                qi = function () {
                    function t(t) {
                        this.timestamp = t
                    }
                    return t.fromMicroseconds = function (e) {
                        var n = Math.floor(e / 1e6);
                        return new t(new Ur(n, e % 1e6 * 1e3))
                    }, t.fromTimestamp = function (e) {
                        return new t(e)
                    }, t.forDeletedDoc = function () {
                        return t.MIN
                    }, t.prototype.compareTo = function (t) {
                        return this.timestamp._compareTo(t.timestamp)
                    }, t.prototype.isEqual = function (t) {
                        return this.timestamp.isEqual(t.timestamp)
                    }, t.prototype.toMicroseconds = function () {
                        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                    }, t.prototype.toString = function () {
                        return "SnapshotVersion(" + this.timestamp.toString() + ")"
                    }, t.prototype.toTimestamp = function () {
                        return this.timestamp
                    }, t.MIN = new t(new Ur(0, 0)), t
                }();
            ! function (t) {
                t[t.Listen = 0] = "Listen", t[t.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", t[t.LimboResolution = 2] = "LimboResolution"
            }(Ci || (Ci = {}));
            var Fi, Bi = function () {
                    function t(t, e, n, r, i, o) {
                        void 0 === i && (i = qi.MIN), void 0 === o && (o = ir()), this.query = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.resumeToken = o
                    }
                    return t.prototype.copy = function (e) {
                        return new t(this.query, this.targetId, this.purpose, void 0 === e.sequenceNumber ? this.sequenceNumber : e.sequenceNumber, void 0 === e.snapshotVersion ? this.snapshotVersion : e.snapshotVersion, void 0 === e.resumeToken ? this.resumeToken : e.resumeToken)
                    }, t.prototype.isEqual = function (t) {
                        return this.targetId === t.targetId && this.purpose === t.purpose && this.sequenceNumber === t.sequenceNumber && this.snapshotVersion.isEqual(t.snapshotVersion) && this.resumeToken === t.resumeToken && this.query.isEqual(t.query)
                    }, t
                }(),
                Ui = function () {
                    function t(t) {
                        this.comparator = t, this.data = new $r(this.comparator)
                    }
                    return t.fromMapKeys = function (e) {
                        var n = new t(e.comparator);
                        return e.forEach(function (t) {
                            n = n.add(t)
                        }), n
                    }, t.prototype.has = function (t) {
                        return null !== this.data.get(t)
                    }, t.prototype.first = function () {
                        return this.data.minKey()
                    }, t.prototype.last = function () {
                        return this.data.maxKey()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this.data.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.indexOf = function (t) {
                        return this.data.indexOf(t)
                    }, t.prototype.forEach = function (t) {
                        this.data.inorderTraversal(function (e, n) {
                            return t(e), !1
                        })
                    }, t.prototype.forEachInRange = function (t, e) {
                        for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                            var r = n.getNext();
                            if (this.comparator(r.key, t[1]) >= 0) return;
                            e(r.key)
                        }
                    }, t.prototype.forEachWhile = function (t, e) {
                        var n;
                        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();) {
                            if (!t(n.getNext().key)) return
                        }
                    }, t.prototype.firstAfterOrEqual = function (t) {
                        var e = this.data.getIteratorFrom(t);
                        return e.hasNext() ? e.getNext().key : null
                    }, t.prototype.getIterator = function () {
                        return new Vi(this.data.getIterator())
                    }, t.prototype.getIteratorFrom = function (t) {
                        return new Vi(this.data.getIteratorFrom(t))
                    }, t.prototype.add = function (t) {
                        return this.copy(this.data.remove(t).insert(t, !0))
                    }, t.prototype.delete = function (t) {
                        return this.has(t) ? this.copy(this.data.remove(t)) : this
                    }, t.prototype.isEmpty = function () {
                        return this.data.isEmpty()
                    }, t.prototype.unionWith = function (t) {
                        var e = this;
                        return t.forEach(function (t) {
                            e = e.add(t)
                        }), e
                    }, t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) return !1;
                        if (this.size !== e.size) return !1;
                        for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext();) {
                            var i = n.getNext().key,
                                o = r.getNext().key;
                            if (0 !== this.comparator(i, o)) return !1
                        }
                        return !0
                    }, t.prototype.toArray = function () {
                        var t = [];
                        return this.forEach(function (e) {
                            t.push(e)
                        }), t
                    }, t.prototype.toString = function () {
                        var t = [];
                        return this.forEach(function (e) {
                            return t.push(e)
                        }), "SortedSet(" + t.toString() + ")"
                    }, t.prototype.copy = function (e) {
                        var n = new t(this.comparator);
                        return n.data = e, n
                    }, t
                }(),
                Vi = function () {
                    function t(t) {
                        this.iter = t
                    }
                    return t.prototype.getNext = function () {
                        return this.iter.getNext().key
                    }, t.prototype.hasNext = function () {
                        return this.iter.hasNext()
                    }, t
                }(),
                Qi = function () {
                    function t(t) {
                        this.fields = t
                    }
                    return t.fromSet = function (e) {
                        return new t(e)
                    }, t.fromArray = function (e) {
                        var n = new Ui(Gr.comparator);
                        return e.forEach(function (t) {
                            return n = n.add(t)
                        }), new t(n)
                    }, t.prototype.covers = function (t) {
                        var e = !1;
                        return this.fields.forEach(function (n) {
                            n.isPrefixOf(t) && (e = !0)
                        }), e
                    }, t.prototype.isEqual = function (t) {
                        return this.fields.isEqual(t.fields)
                    }, t
                }(),
                Ki = function () {
                    function t(t, e) {
                        this.field = t, this.transform = e
                    }
                    return t.prototype.isEqual = function (t) {
                        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
                    }, t
                }(),
                Wi = function () {
                    return function (t, e) {
                        this.version = t, this.transformResults = e
                    }
                }();
            ! function (t) {
                t[t.Set = 0] = "Set", t[t.Patch = 1] = "Patch", t[t.Transform = 2] = "Transform", t[t.Delete = 3] = "Delete"
            }(Fi || (Fi = {}));
            var ji = function () {
                    function t(t, e) {
                        this.updateTime = t, this.exists = e, nr(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both')
                    }
                    return t.exists = function (e) {
                        return new t(void 0, e)
                    }, t.updateTime = function (e) {
                        return new t(e)
                    }, Object.defineProperty(t.prototype, "isNone", {
                        get: function () {
                            return void 0 === this.updateTime && void 0 === this.exists
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isValidFor = function (t) {
                        return void 0 !== this.updateTime ? t instanceof Yr && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof Yr : (nr(this.isNone, "Precondition should be empty"), !0)
                    }, t.prototype.isEqual = function (t) {
                        return e = this.updateTime, n = t.updateTime, (null !== e && void 0 !== e ? !(!n || !e.isEqual(n)) : e === n) && this.exists === t.exists;
                        var e, n
                    }, t.NONE = new t, t
                }(),
                zi = function () {
                    function t() {}
                    return t.prototype.verifyKeyMatches = function (t) {
                        null != t && nr(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key")
                    }, t.getPostMutationVersion = function (t) {
                        return t instanceof Yr ? t.version : qi.MIN
                    }, t
                }(),
                Gi = function (t) {
                    function e(e, n, r) {
                        var i = t.call(this) || this;
                        return i.key = e, i.value = n, i.precondition = r, i.type = Fi.Set, i
                    }
                    return s(e, t), e.prototype.applyToRemoteDocument = function (t, e) {
                        this.verifyKeyMatches(t), nr(null == e.transformResults, "Transform results received by SetMutation.");
                        var n = e.version;
                        return new Yr(this.key, n, this.value, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function (t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = zi.getPostMutationVersion(t);
                        return new Yr(this.key, r, this.value, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.precondition.isEqual(t.precondition)
                    }, e
                }(zi),
                Hi = function (t) {
                    function e(e, n, r, i) {
                        var o = t.call(this) || this;
                        return o.key = e, o.data = n, o.fieldMask = r, o.precondition = i, o.type = Fi.Patch, o
                    }
                    return s(e, t), e.prototype.applyToRemoteDocument = function (t, e) {
                        if (this.verifyKeyMatches(t), nr(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return new Zr(this.key, e.version);
                        var n = this.patchDocument(t);
                        return new Yr(this.key, e.version, n, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function (t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = zi.getPostMutationVersion(t),
                            i = this.patchDocument(t);
                        return new Yr(this.key, r, i, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.fieldMask.isEqual(t.fieldMask) && this.precondition.isEqual(t.precondition)
                    }, e.prototype.patchDocument = function (t) {
                        var e;
                        return e = t instanceof Yr ? t.data : gi.EMPTY, this.patchObject(e)
                    }, e.prototype.patchObject = function (t) {
                        var e = this;
                        return this.fieldMask.fields.forEach(function (n) {
                            if (!n.isEmpty()) {
                                var r = e.data.field(n);
                                t = void 0 !== r ? t.set(n, r) : t.delete(n)
                            }
                        }), t
                    }, e
                }(zi),
                Xi = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.key = e, r.fieldTransforms = n, r.type = Fi.Transform, r.precondition = ji.exists(!0), r
                    }
                    return s(e, t), e.prototype.applyToRemoteDocument = function (t, e) {
                        if (this.verifyKeyMatches(t), nr(null != e.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(t)) return new Zr(this.key, e.version);
                        var n = this.requireDocument(t),
                            r = this.serverTransformResults(t, e.transformResults),
                            i = e.version,
                            o = this.transformObject(n.data, r);
                        return new Yr(this.key, i, o, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function (t, e, n) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var r = this.requireDocument(t),
                            i = this.localTransformResults(n, e),
                            o = this.transformObject(r.data, i);
                        return new Yr(this.key, r.version, o, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.key.isEqual(t.key) && Or(this.fieldTransforms, t.fieldTransforms) && this.precondition.isEqual(t.precondition)
                    }, e.prototype.requireDocument = function (t) {
                        nr(t instanceof Yr, "Unknown MaybeDocument type " + t);
                        var e = t;
                        return nr(e.key.isEqual(this.key), "Can only transform a document with the same key"), e
                    }, e.prototype.serverTransformResults = function (t, e) {
                        var n = [];
                        nr(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
                        for (var r = 0; r < e.length; r++) {
                            var i = this.fieldTransforms[r],
                                o = i.transform,
                                s = null;
                            t instanceof Yr && (s = t.field(i.field) || null), n.push(o.applyToRemoteDocument(s, e[r]))
                        }
                        return n
                    }, e.prototype.localTransformResults = function (t, e) {
                        for (var n = [], r = 0, i = this.fieldTransforms; r < i.length; r++) {
                            var o = i[r],
                                s = o.transform,
                                a = null;
                            e instanceof Yr && (a = e.field(o.field) || null), n.push(s.applyToLocalView(a, t))
                        }
                        return n
                    }, e.prototype.transformObject = function (t, e) {
                        nr(e.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                        for (var n = 0; n < this.fieldTransforms.length; n++) {
                            var r = this.fieldTransforms[n].field;
                            t = t.set(r, e[n])
                        }
                        return t
                    }, e
                }(zi),
                Yi = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.key = e, r.precondition = n, r.type = Fi.Delete, r
                    }
                    return s(e, t), e.prototype.applyToRemoteDocument = function (t, e) {
                        return this.verifyKeyMatches(t), nr(null == e.transformResults, "Transform results received by DeleteMutation."), new Jr(this.key, e.version, {
                            hasCommittedMutations: !0
                        })
                    }, e.prototype.applyToLocalView = function (t, e, n) {
                        return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && nr(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new Jr(this.key, qi.forDeletedDoc())) : t
                    }, e.prototype.isEqual = function (t) {
                        return t instanceof e && this.key.isEqual(t.key) && this.precondition.isEqual(t.precondition)
                    }, e
                }(zi),
                Ji = function () {
                    function t() {}
                    return t.prototype.applyToLocalView = function (t, e) {
                        return new di(e, t)
                    }, t.prototype.applyToRemoteDocument = function (t, e) {
                        return e
                    }, t.prototype.isEqual = function (e) {
                        return e instanceof t
                    }, t.instance = new t, t
                }(),
                Zi = function () {
                    function t(t) {
                        this.elements = t
                    }
                    return t.prototype.applyToLocalView = function (t, e) {
                        return this.apply(t)
                    }, t.prototype.applyToRemoteDocument = function (t, e) {
                        return this.apply(t)
                    }, t.prototype.apply = function (t) {
                        for (var e = to(t), n = function (t) {
                                e.find(function (e) {
                                    return e.isEqual(t)
                                }) || e.push(t)
                            }, r = 0, i = this.elements; r < i.length; r++) {
                            n(i[r])
                        }
                        return new vi(e)
                    }, t.prototype.isEqual = function (e) {
                        return e instanceof t && Or(e.elements, this.elements)
                    }, t
                }(),
                $i = function () {
                    function t(t) {
                        this.elements = t
                    }
                    return t.prototype.applyToLocalView = function (t, e) {
                        return this.apply(t)
                    }, t.prototype.applyToRemoteDocument = function (t, e) {
                        return this.apply(t)
                    }, t.prototype.apply = function (t) {
                        for (var e = to(t), n = function (t) {
                                e = e.filter(function (e) {
                                    return !e.isEqual(t)
                                })
                            }, r = 0, i = this.elements; r < i.length; r++) {
                            n(i[r])
                        }
                        return new vi(e)
                    }, t.prototype.isEqual = function (e) {
                        return e instanceof t && Or(e.elements, this.elements)
                    }, t
                }();

            function to(t) {
                return t instanceof vi ? t.internalValue.slice() : []
            }
            var eo, no = function () {
                function t(t) {
                    this.count = t
                }
                return t.prototype.isEqual = function (t) {
                    return t && t.count === this.count
                }, t
            }();

            function ro(t) {
                switch (t) {
                    case or.OK:
                        return er("Treated status OK as error");
                    case or.CANCELLED:
                    case or.UNKNOWN:
                    case or.DEADLINE_EXCEEDED:
                    case or.RESOURCE_EXHAUSTED:
                    case or.INTERNAL:
                    case or.UNAVAILABLE:
                    case or.UNAUTHENTICATED:
                        return !1;
                    case or.INVALID_ARGUMENT:
                    case or.NOT_FOUND:
                    case or.ALREADY_EXISTS:
                    case or.PERMISSION_DENIED:
                    case or.FAILED_PRECONDITION:
                    case or.ABORTED:
                    case or.OUT_OF_RANGE:
                    case or.UNIMPLEMENTED:
                    case or.DATA_LOSS:
                        return !0;
                    default:
                        return er("Unknown status code: " + t)
                }
            }

            function io(t) {
                if (void 0 === t) return $n("GRPC error has no .code"), or.UNKNOWN;
                switch (t) {
                    case eo.OK:
                        return or.OK;
                    case eo.CANCELLED:
                        return or.CANCELLED;
                    case eo.UNKNOWN:
                        return or.UNKNOWN;
                    case eo.DEADLINE_EXCEEDED:
                        return or.DEADLINE_EXCEEDED;
                    case eo.RESOURCE_EXHAUSTED:
                        return or.RESOURCE_EXHAUSTED;
                    case eo.INTERNAL:
                        return or.INTERNAL;
                    case eo.UNAVAILABLE:
                        return or.UNAVAILABLE;
                    case eo.UNAUTHENTICATED:
                        return or.UNAUTHENTICATED;
                    case eo.INVALID_ARGUMENT:
                        return or.INVALID_ARGUMENT;
                    case eo.NOT_FOUND:
                        return or.NOT_FOUND;
                    case eo.ALREADY_EXISTS:
                        return or.ALREADY_EXISTS;
                    case eo.PERMISSION_DENIED:
                        return or.PERMISSION_DENIED;
                    case eo.FAILED_PRECONDITION:
                        return or.FAILED_PRECONDITION;
                    case eo.ABORTED:
                        return or.ABORTED;
                    case eo.OUT_OF_RANGE:
                        return or.OUT_OF_RANGE;
                    case eo.UNIMPLEMENTED:
                        return or.UNIMPLEMENTED;
                    case eo.DATA_LOSS:
                        return or.DATA_LOSS;
                    default:
                        return er("Unknown status code: " + t)
                }
            }! function (t) {
                t[t.OK = 0] = "OK", t[t.CANCELLED = 1] = "CANCELLED", t[t.UNKNOWN = 2] = "UNKNOWN", t[t.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", t[t.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", t[t.NOT_FOUND = 5] = "NOT_FOUND", t[t.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", t[t.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", t[t.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", t[t.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", t[t.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", t[t.ABORTED = 10] = "ABORTED", t[t.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", t[t.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", t[t.INTERNAL = 13] = "INTERNAL", t[t.UNAVAILABLE = 14] = "UNAVAILABLE", t[t.DATA_LOSS = 15] = "DATA_LOSS"
            }(eo || (eo = {}));
            var oo = new $r(Hr.comparator);

            function so() {
                return oo
            }

            function ao() {
                return so()
            }
            var uo = new $r(Hr.comparator);

            function co() {
                return uo
            }
            var ho = new $r(Hr.comparator);

            function lo() {
                return ho
            }
            var fo = new Ui(Hr.comparator);

            function po() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = fo, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var mo = new Ui(Mr);

            function yo() {
                return mo
            }
            var go, vo, bo = function () {
                function t(t) {
                    this.comparator = t ? function (e, n) {
                        return t(e, n) || Hr.comparator(e.key, n.key)
                    } : function (t, e) {
                        return Hr.comparator(t.key, e.key)
                    }, this.keyedMap = co(), this.sortedSet = new $r(this.comparator)
                }
                return t.emptySet = function (e) {
                    return new t(e.comparator)
                }, t.prototype.has = function (t) {
                    return null != this.keyedMap.get(t)
                }, t.prototype.get = function (t) {
                    return this.keyedMap.get(t)
                }, t.prototype.first = function () {
                    return this.sortedSet.minKey()
                }, t.prototype.last = function () {
                    return this.sortedSet.maxKey()
                }, t.prototype.isEmpty = function () {
                    return this.sortedSet.isEmpty()
                }, t.prototype.indexOf = function (t) {
                    var e = this.keyedMap.get(t);
                    return e ? this.sortedSet.indexOf(e) : -1
                }, Object.defineProperty(t.prototype, "size", {
                    get: function () {
                        return this.sortedSet.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.forEach = function (t) {
                    this.sortedSet.inorderTraversal(function (e, n) {
                        return t(e), !1
                    })
                }, t.prototype.add = function (t) {
                    var e = this.delete(t.key);
                    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
                }, t.prototype.delete = function (t) {
                    var e = this.get(t);
                    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
                }, t.prototype.isEqual = function (e) {
                    if (!(e instanceof t)) return !1;
                    if (this.size !== e.size) return !1;
                    for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext();) {
                        var i = n.getNext().key,
                            o = r.getNext().key;
                        if (!i.isEqual(o)) return !1
                    }
                    return !0
                }, t.prototype.toString = function () {
                    var t = [];
                    return this.forEach(function (e) {
                        t.push(e.toString())
                    }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
                }, t.prototype.copy = function (e, n) {
                    var r = new t;
                    return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r
                }, t
            }();
            ! function (t) {
                t[t.Added = 0] = "Added", t[t.Removed = 1] = "Removed", t[t.Modified = 2] = "Modified", t[t.Metadata = 3] = "Metadata"
            }(go || (go = {})),
            function (t) {
                t[t.Local = 0] = "Local", t[t.Synced = 1] = "Synced"
            }(vo || (vo = {}));
            var wo, Eo = function () {
                    function t() {
                        this.changeMap = new $r(Hr.comparator)
                    }
                    return t.prototype.track = function (t) {
                        var e = t.doc.key,
                            n = this.changeMap.get(e);
                        n ? t.type !== go.Added && n.type === go.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === go.Metadata && n.type !== go.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: n.type,
                            doc: t.doc
                        }) : t.type === go.Modified && n.type === go.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: go.Modified,
                            doc: t.doc
                        }) : t.type === go.Modified && n.type === go.Added ? this.changeMap = this.changeMap.insert(e, {
                            type: go.Added,
                            doc: t.doc
                        }) : t.type === go.Removed && n.type === go.Added ? this.changeMap = this.changeMap.remove(e) : t.type === go.Removed && n.type === go.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: go.Removed,
                            doc: n.doc
                        }) : t.type === go.Added && n.type === go.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: go.Modified,
                            doc: t.doc
                        }) : er("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(e, t)
                    }, t.prototype.getChanges = function () {
                        var t = [];
                        return this.changeMap.inorderTraversal(function (e, n) {
                            t.push(n)
                        }), t
                    }, t
                }(),
                So = function () {
                    function t(t, e, n, r, i, o, s, a) {
                        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = a
                    }
                    return t.fromInitialDocuments = function (e, n, r, i) {
                        var o = [];
                        return n.forEach(function (t) {
                            o.push({
                                type: go.Added,
                                doc: t
                            })
                        }), new t(e, n, bo.emptySet(n), o, r, i, !0, !1)
                    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
                        get: function () {
                            return !this.mutatedKeys.isEmpty()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function (t) {
                        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
                        var e = this.docChanges,
                            n = t.docChanges;
                        if (e.length !== n.length) return !1;
                        for (var r = 0; r < e.length; r++)
                            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                        return !0
                    }, t
                }(),
                To = function () {
                    function t(t, e, n, r, i) {
                        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
                    }
                    return t.createSynthesizedRemoteEventForCurrentChange = function (e, n) {
                        var r, i = ((r = {})[e] = Io.createSynthesizedTargetChangeForCurrentChange(e, n), r);
                        return new t(qi.MIN, i, yo(), so(), po())
                    }, t
                }(),
                Io = function () {
                    function t(t, e, n, r, i) {
                        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
                    }
                    return t.createSynthesizedTargetChangeForCurrentChange = function (e, n) {
                        return new t(ir(), n, po(), po(), po())
                    }, t
                }(),
                Co = function () {
                    return function (t, e, n, r) {
                        this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r
                    }
                }(),
                Do = function () {
                    return function (t, e) {
                        this.targetId = t, this.existenceFilter = e
                    }
                }();
            ! function (t) {
                t[t.NoChange = 0] = "NoChange", t[t.Added = 1] = "Added", t[t.Removed = 2] = "Removed", t[t.Current = 3] = "Current", t[t.Reset = 4] = "Reset"
            }(wo || (wo = {}));
            var No = function () {
                    return function (t, e, n, r) {
                        void 0 === n && (n = ir()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                    }
                }(),
                Ao = function () {
                    function t() {
                        this.pendingResponses = 0, this.documentChanges = Mo(), this._resumeToken = ir(), this._current = !1, this._hasPendingChanges = !0
                    }
                    return Object.defineProperty(t.prototype, "current", {
                        get: function () {
                            return this._current
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "resumeToken", {
                        get: function () {
                            return this._resumeToken
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPending", {
                        get: function () {
                            return 0 !== this.pendingResponses
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasPendingChanges", {
                        get: function () {
                            return this._hasPendingChanges
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.updateResumeToken = function (t) {
                        t.length > 0 && (this._hasPendingChanges = !0, this._resumeToken = t)
                    }, t.prototype.toTargetChange = function () {
                        var t = po(),
                            e = po(),
                            n = po();
                        return this.documentChanges.forEach(function (r, i) {
                            switch (i) {
                                case go.Added:
                                    t = t.add(r);
                                    break;
                                case go.Modified:
                                    e = e.add(r);
                                    break;
                                case go.Removed:
                                    n = n.add(r);
                                    break;
                                default:
                                    er("Encountered invalid change type: " + i)
                            }
                        }), new Io(this._resumeToken, this._current, t, e, n)
                    }, t.prototype.clearPendingChanges = function () {
                        this._hasPendingChanges = !1, this.documentChanges = Mo()
                    }, t.prototype.addDocumentChange = function (t, e) {
                        this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.insert(t, e)
                    }, t.prototype.removeDocumentChange = function (t) {
                        this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.remove(t)
                    }, t.prototype.recordPendingTargetRequest = function () {
                        this.pendingResponses += 1
                    }, t.prototype.recordTargetResponse = function () {
                        this.pendingResponses -= 1
                    }, t.prototype.markCurrent = function () {
                        this._hasPendingChanges = !0, this._current = !0
                    }, t
                }(),
                ko = function () {
                    function t(t) {
                        this.metadataProvider = t, this.targetStates = {}, this.pendingDocumentUpdates = so(), this.pendingDocumentTargetMapping = Ro(), this.pendingTargetResets = new Ui(Mr)
                    }
                    return t.prototype.handleDocumentChange = function (t) {
                        for (var e = 0, n = t.updatedTargetIds; e < n.length; e++) {
                            var r = n[e];
                            t.newDoc instanceof Yr ? this.addDocumentToTarget(r, t.newDoc) : t.newDoc instanceof Jr && this.removeDocumentFromTarget(r, t.key, t.newDoc)
                        }
                        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
                            r = o[i];
                            this.removeDocumentFromTarget(r, t.key, t.newDoc)
                        }
                    }, t.prototype.handleTargetChange = function (t) {
                        var e = this;
                        this.forEachTarget(t, function (n) {
                            var r = e.ensureTargetState(n);
                            switch (t.state) {
                                case wo.NoChange:
                                    e.isActiveTarget(n) && r.updateResumeToken(t.resumeToken);
                                    break;
                                case wo.Added:
                                    r.recordTargetResponse(), r.isPending || r.clearPendingChanges(), r.updateResumeToken(t.resumeToken);
                                    break;
                                case wo.Removed:
                                    r.recordTargetResponse(), r.isPending || e.removeTarget(n), nr(!t.cause, "WatchChangeAggregator does not handle errored targets");
                                    break;
                                case wo.Current:
                                    e.isActiveTarget(n) && (r.markCurrent(), r.updateResumeToken(t.resumeToken));
                                    break;
                                case wo.Reset:
                                    e.isActiveTarget(n) && (e.resetTarget(n), r.updateResumeToken(t.resumeToken));
                                    break;
                                default:
                                    er("Unknown target watch change state: " + t.state)
                            }
                        })
                    }, t.prototype.forEachTarget = function (t, e) {
                        t.targetIds.length > 0 ? t.targetIds.forEach(e) : hr(this.targetStates, e)
                    }, t.prototype.handleExistenceFilter = function (t) {
                        var e = t.targetId,
                            n = t.existenceFilter.count,
                            r = this.queryDataForActiveTarget(e);
                        if (r) {
                            var i = r.query;
                            if (i.isDocumentQuery())
                                if (0 === n) {
                                    var o = new Hr(i.path);
                                    this.removeDocumentFromTarget(e, o, new Jr(o, qi.forDeletedDoc()))
                                } else nr(1 === n, "Single document existence filter with count: " + n);
                            else this.getCurrentDocumentCountForTarget(e) !== n && (this.resetTarget(e), this.pendingTargetResets = this.pendingTargetResets.add(e))
                        }
                    }, t.prototype.createRemoteEvent = function (t) {
                        var e = this,
                            n = {};
                        hr(this.targetStates, function (r, i) {
                            var o = e.queryDataForActiveTarget(r);
                            if (o) {
                                if (i.current && o.query.isDocumentQuery()) {
                                    var s = new Hr(o.query.path);
                                    null !== e.pendingDocumentUpdates.get(s) || e.targetContainsDocument(r, s) || e.removeDocumentFromTarget(r, s, new Jr(s, t))
                                }
                                i.hasPendingChanges && (n[r] = i.toTargetChange(), i.clearPendingChanges())
                            }
                        });
                        var r = po();
                        this.pendingDocumentTargetMapping.forEach(function (t, n) {
                            var i = !0;
                            n.forEachWhile(function (t) {
                                var n = e.queryDataForActiveTarget(t);
                                return !n || n.purpose === Ci.LimboResolution || (i = !1, !1)
                            }), i && (r = r.add(t))
                        });
                        var i = new To(t, n, this.pendingTargetResets, this.pendingDocumentUpdates, r);
                        return this.pendingDocumentUpdates = so(), this.pendingDocumentTargetMapping = Ro(), this.pendingTargetResets = new Ui(Mr), i
                    }, t.prototype.addDocumentToTarget = function (t, e) {
                        if (this.isActiveTarget(t)) {
                            var n = this.targetContainsDocument(t, e.key) ? go.Modified : go.Added;
                            this.ensureTargetState(t).addDocumentChange(e.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e.key, e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e.key, this.ensureDocumentTargetMapping(e.key).add(t))
                        }
                    }, t.prototype.removeDocumentFromTarget = function (t, e, n) {
                        if (this.isActiveTarget(t)) {
                            var r = this.ensureTargetState(t);
                            this.targetContainsDocument(t, e) ? r.addDocumentChange(e, go.Removed) : r.removeDocumentChange(e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, this.ensureDocumentTargetMapping(e).delete(t)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e, n))
                        }
                    }, t.prototype.removeTarget = function (t) {
                        delete this.targetStates[t]
                    }, t.prototype.getCurrentDocumentCountForTarget = function (t) {
                        var e = this.ensureTargetState(t).toTargetChange();
                        return this.metadataProvider.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size
                    }, t.prototype.recordPendingTargetRequest = function (t) {
                        this.ensureTargetState(t).recordPendingTargetRequest()
                    }, t.prototype.ensureTargetState = function (t) {
                        return this.targetStates[t] || (this.targetStates[t] = new Ao), this.targetStates[t]
                    }, t.prototype.ensureDocumentTargetMapping = function (t) {
                        var e = this.pendingDocumentTargetMapping.get(t);
                        return e || (e = new Ui(Mr), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, e)), e
                    }, t.prototype.isActiveTarget = function (t) {
                        return null !== this.queryDataForActiveTarget(t)
                    }, t.prototype.queryDataForActiveTarget = function (t) {
                        var e = this.targetStates[t];
                        return e && e.isPending ? null : this.metadataProvider.getQueryDataForTarget(t)
                    }, t.prototype.resetTarget = function (t) {
                        var e = this;
                        nr(!this.targetStates[t].isPending, "Should only reset active targets"), this.targetStates[t] = new Ao, this.metadataProvider.getRemoteKeysForTarget(t).forEach(function (n) {
                            e.removeDocumentFromTarget(t, n, null)
                        })
                    }, t.prototype.targetContainsDocument = function (t, e) {
                        return this.metadataProvider.getRemoteKeysForTarget(t).has(e)
                    }, t
                }();

            function Ro() {
                return new $r(Hr.comparator)
            }

            function Mo() {
                return new $r(Hr.comparator)
            }
            var Oo, _o, Po = ((Oo = {})[Oi.ASCENDING.name] = "ASCENDING", Oo[Oi.DESCENDING.name] = "DESCENDING", Oo),
                Lo = ((_o = {})[Ai.LESS_THAN.name] = "LESS_THAN", _o[Ai.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", _o[Ai.GREATER_THAN.name] = "GREATER_THAN", _o[Ai.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", _o[Ai.EQUAL.name] = "EQUAL", _o[Ai.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", _o),
                xo = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function qo(t, e) {
                nr(!Ti(t), e + " is missing")
            }

            function Fo(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : er("can't parse " + t)
            }
            var Bo = function () {
                function t(t, e) {
                    this.databaseId = t, this.options = e
                }
                return t.prototype.emptyByteString = function () {
                    return this.options.useProto3Json ? "" : new Uint8Array(0)
                }, t.prototype.unsafeCastProtoByteString = function (t) {
                    return t
                }, t.prototype.fromRpcStatus = function (t) {
                    var e = void 0 === t.code ? or.UNKNOWN : io(t.code);
                    return new sr(e, t.message || "")
                }, t.prototype.toInt32Value = function (t) {
                    return Ti(t) ? void 0 : {
                        value: t
                    }
                }, t.prototype.fromInt32Value = function (t) {
                    var e;
                    return Ti(e = "object" == typeof t ? t.value : t) ? null : e
                }, t.prototype.toTimestamp = function (t) {
                    return {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }, t.prototype.fromTimestamp = function (t) {
                    if ("string" == typeof t) return this.fromIso8601String(t);
                    nr(!!t, "Cannot deserialize null or undefined timestamp.");
                    var e = Fo(t.seconds || "0"),
                        n = t.nanos || 0;
                    return new Ur(e, n)
                }, t.prototype.fromIso8601String = function (t) {
                    var e = 0,
                        n = xo.exec(t);
                    if (nr(!!n, "invalid timestamp: " + t), n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9), e = Number(r)
                    }
                    var i = new Date(t),
                        o = Math.floor(i.getTime() / 1e3);
                    return new Ur(o, e)
                }, t.prototype.toBytes = function (t) {
                    return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array())
                }, t.prototype.fromBlob = function (t) {
                    return "string" == typeof t ? (nr(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), qr.fromBase64String(t)) : (nr(!this.options.useProto3Json, "Expected bytes to be passed in as string, but got something else instead."), qr.fromUint8Array(t))
                }, t.prototype.toVersion = function (t) {
                    return this.toTimestamp(t.toTimestamp())
                }, t.prototype.fromVersion = function (t) {
                    return nr(!!t, "Trying to deserialize version that isn't set"), qi.fromTimestamp(this.fromTimestamp(t))
                }, t.prototype.toResourceName = function (t, e) {
                    return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()
                }, t.prototype.fromResourceName = function (t) {
                    var e = jr.fromString(t);
                    return nr(this.isValidResourceName(e), "Tried to deserialize invalid key " + e.toString()), e
                }, t.prototype.toName = function (t) {
                    return this.toResourceName(this.databaseId, t.path)
                }, t.prototype.fromName = function (t) {
                    var e = this.fromResourceName(t);
                    return nr(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), nr(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new Hr(this.extractLocalPathFromResourceName(e))
                }, t.prototype.toQueryPath = function (t) {
                    return this.toResourceName(this.databaseId, t)
                }, t.prototype.fromQueryPath = function (t) {
                    var e = this.fromResourceName(t);
                    return 4 === e.length ? jr.EMPTY_PATH : this.extractLocalPathFromResourceName(e)
                }, Object.defineProperty(t.prototype, "encodedDatabaseId", {
                    get: function () {
                        return new jr(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.fullyQualifiedPrefixPath = function (t) {
                    return new jr(["projects", t.projectId, "databases", t.database])
                }, t.prototype.extractLocalPathFromResourceName = function (t) {
                    return nr(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.popFirst(5)
                }, t.prototype.isValidResourceName = function (t) {
                    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
                }, t.prototype.toValue = function (t) {
                    if (t instanceof oi) return {
                        nullValue: "NULL_VALUE"
                    };
                    if (t instanceof si) return {
                        booleanValue: t.value()
                    };
                    if (t instanceof ci) return {
                        integerValue: "" + t.value()
                    };
                    if (t instanceof hi) {
                        var e = t.value();
                        if (this.options.useProto3Json) {
                            if (isNaN(e)) return {
                                doubleValue: "NaN"
                            };
                            if (e === 1 / 0) return {
                                doubleValue: "Infinity"
                            };
                            if (e === -1 / 0) return {
                                doubleValue: "-Infinity"
                            }
                        }
                        return {
                            doubleValue: t.value()
                        }
                    }
                    return t instanceof li ? {
                        stringValue: t.value()
                    } : t instanceof gi ? {
                        mapValue: this.toMapValue(t)
                    } : t instanceof vi ? {
                        arrayValue: this.toArrayValue(t)
                    } : t instanceof fi ? {
                        timestampValue: this.toTimestamp(t.internalValue)
                    } : t instanceof yi ? {
                        geoPointValue: {
                            latitude: t.value().latitude,
                            longitude: t.value().longitude
                        }
                    } : t instanceof pi ? {
                        bytesValue: this.toBytes(t.value())
                    } : t instanceof mi ? {
                        referenceValue: this.toResourceName(t.databaseId, t.key.path)
                    } : er("Unknown FieldValue " + JSON.stringify(t))
                }, t.prototype.fromValue = function (t) {
                    var e = this,
                        n = t.value_type;
                    if (Uo(t, n, "nullValue")) return oi.INSTANCE;
                    if (Uo(t, n, "booleanValue")) return si.of(t.booleanValue);
                    if (Uo(t, n, "integerValue")) return new ci(Fo(t.integerValue));
                    if (Uo(t, n, "doubleValue")) {
                        if (this.options.useProto3Json) {
                            if ("NaN" === t.doubleValue) return hi.NAN;
                            if ("Infinity" === t.doubleValue) return hi.POSITIVE_INFINITY;
                            if ("-Infinity" === t.doubleValue) return hi.NEGATIVE_INFINITY
                        }
                        return new hi(t.doubleValue)
                    }
                    if (Uo(t, n, "stringValue")) return new li(t.stringValue);
                    if (Uo(t, n, "mapValue")) return this.fromFields(t.mapValue.fields || {});
                    if (Uo(t, n, "arrayValue")) {
                        qo(t.arrayValue, "arrayValue");
                        var r = t.arrayValue.values || [];
                        return new vi(r.map(function (t) {
                            return e.fromValue(t)
                        }))
                    }
                    if (Uo(t, n, "timestampValue")) return qo(t.timestampValue, "timestampValue"), new fi(this.fromTimestamp(t.timestampValue));
                    if (Uo(t, n, "geoPointValue")) {
                        qo(t.geoPointValue, "geoPointValue");
                        var i = t.geoPointValue.latitude || 0,
                            o = t.geoPointValue.longitude || 0;
                        return new yi(new Br(i, o))
                    }
                    if (Uo(t, n, "bytesValue")) {
                        qo(t.bytesValue, "bytesValue");
                        var s = this.fromBlob(t.bytesValue);
                        return new pi(s)
                    }
                    if (Uo(t, n, "referenceValue")) {
                        qo(t.referenceValue, "referenceValue");
                        var a = this.fromResourceName(t.referenceValue),
                            u = new Kr(a.get(1), a.get(3)),
                            c = new Hr(this.extractLocalPathFromResourceName(a));
                        return new mi(u, c)
                    }
                    return er("Unknown Value proto " + JSON.stringify(t))
                }, t.prototype.toMutationDocument = function (t, e) {
                    return {
                        name: this.toName(t),
                        fields: this.toFields(e)
                    }
                }, t.prototype.toDocument = function (t) {
                    return nr(!t.hasLocalMutations, "Can't serialize documents with mutations."), {
                        name: this.toName(t.key),
                        fields: this.toFields(t.data),
                        updateTime: this.toTimestamp(t.version.toTimestamp())
                    }
                }, t.prototype.fromDocument = function (t, e) {
                    return new Yr(this.fromName(t.name), this.fromVersion(t.updateTime), this.fromFields(t.fields || {}), {
                        hasCommittedMutations: !!e
                    })
                }, t.prototype.toFields = function (t) {
                    var e = this,
                        n = {};
                    return t.forEach(function (t, r) {
                        n[t] = e.toValue(r)
                    }), n
                }, t.prototype.fromFields = function (t) {
                    var e = this,
                        n = t,
                        r = gi.EMPTY;
                    return lr(n, function (t, n) {
                        r = r.set(new Gr([t]), e.fromValue(n))
                    }), r
                }, t.prototype.toMapValue = function (t) {
                    return {
                        fields: this.toFields(t)
                    }
                }, t.prototype.toArrayValue = function (t) {
                    var e = this,
                        n = [];
                    return t.forEach(function (t) {
                        n.push(e.toValue(t))
                    }), {
                        values: n
                    }
                }, t.prototype.fromFound = function (t) {
                    nr(!!t.found, "Tried to deserialize a found document from a missing document."), qo(t.found.name, "doc.found.name"), qo(t.found.updateTime, "doc.found.updateTime");
                    var e = this.fromName(t.found.name),
                        n = this.fromVersion(t.found.updateTime),
                        r = this.fromFields(t.found.fields || {});
                    return new Yr(e, n, r, {}, t.found)
                }, t.prototype.fromMissing = function (t) {
                    nr(!!t.missing, "Tried to deserialize a missing document from a found document."), nr(!!t.readTime, "Tried to deserialize a missing document without a read time.");
                    var e = this.fromName(t.missing),
                        n = this.fromVersion(t.readTime);
                    return new Jr(e, n)
                }, t.prototype.fromMaybeDocument = function (t) {
                    var e = t.result;
                    return Uo(t, e, "found") ? this.fromFound(t) : Uo(t, e, "missing") ? this.fromMissing(t) : er("invalid batch get response: " + JSON.stringify(t))
                }, t.prototype.toWatchTargetChangeState = function (t) {
                    switch (t) {
                        case wo.Added:
                            return "ADD";
                        case wo.Current:
                            return "CURRENT";
                        case wo.NoChange:
                            return "NO_CHANGE";
                        case wo.Removed:
                            return "REMOVE";
                        case wo.Reset:
                            return "RESET";
                        default:
                            return er("Unknown WatchTargetChangeState: " + t)
                    }
                }, t.prototype.toTestWatchChange = function (t) {
                    if (t instanceof Do) return {
                        filter: {
                            count: t.existenceFilter.count,
                            targetId: t.targetId
                        }
                    };
                    if (t instanceof Co) {
                        if (t.newDoc instanceof Yr) {
                            var e = t.newDoc;
                            return {
                                documentChange: {
                                    document: {
                                        name: this.toName(e.key),
                                        fields: this.toFields(e.data),
                                        updateTime: this.toVersion(e.version)
                                    },
                                    targetIds: t.updatedTargetIds,
                                    removedTargetIds: t.removedTargetIds
                                }
                            }
                        }
                        if (t.newDoc instanceof Jr) {
                            e = t.newDoc;
                            return {
                                documentDelete: {
                                    document: this.toName(e.key),
                                    readTime: this.toVersion(e.version),
                                    removedTargetIds: t.removedTargetIds
                                }
                            }
                        }
                        if (null === t.newDoc) return {
                            documentRemove: {
                                document: this.toName(t.key),
                                removedTargetIds: t.removedTargetIds
                            }
                        }
                    }
                    if (t instanceof No) {
                        var n = void 0;
                        return t.cause && (n = {
                            code: function (t) {
                                if (void 0 === t) return eo.OK;
                                switch (t) {
                                    case or.OK:
                                        return eo.OK;
                                    case or.CANCELLED:
                                        return eo.CANCELLED;
                                    case or.UNKNOWN:
                                        return eo.UNKNOWN;
                                    case or.DEADLINE_EXCEEDED:
                                        return eo.DEADLINE_EXCEEDED;
                                    case or.RESOURCE_EXHAUSTED:
                                        return eo.RESOURCE_EXHAUSTED;
                                    case or.INTERNAL:
                                        return eo.INTERNAL;
                                    case or.UNAVAILABLE:
                                        return eo.UNAVAILABLE;
                                    case or.UNAUTHENTICATED:
                                        return eo.UNAUTHENTICATED;
                                    case or.INVALID_ARGUMENT:
                                        return eo.INVALID_ARGUMENT;
                                    case or.NOT_FOUND:
                                        return eo.NOT_FOUND;
                                    case or.ALREADY_EXISTS:
                                        return eo.ALREADY_EXISTS;
                                    case or.PERMISSION_DENIED:
                                        return eo.PERMISSION_DENIED;
                                    case or.FAILED_PRECONDITION:
                                        return eo.FAILED_PRECONDITION;
                                    case or.ABORTED:
                                        return eo.ABORTED;
                                    case or.OUT_OF_RANGE:
                                        return eo.OUT_OF_RANGE;
                                    case or.UNIMPLEMENTED:
                                        return eo.UNIMPLEMENTED;
                                    case or.DATA_LOSS:
                                        return eo.DATA_LOSS;
                                    default:
                                        return er("Unknown status code: " + t)
                                }
                            }(t.cause.code),
                            message: t.cause.message
                        }), {
                            targetChange: {
                                targetChangeType: this.toWatchTargetChangeState(t.state),
                                targetIds: t.targetIds,
                                resumeToken: this.unsafeCastProtoByteString(t.resumeToken),
                                cause: n
                            }
                        }
                    }
                    return er("Unrecognized watch change: " + JSON.stringify(t))
                }, t.prototype.fromWatchChange = function (t) {
                    var e, n = t.response_type;
                    if (Uo(t, n, "targetChange")) {
                        qo(t.targetChange, "targetChange");
                        var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                            i = t.targetChange.targetIds || [],
                            o = t.targetChange.resumeToken || this.emptyByteString(),
                            s = t.targetChange.cause,
                            a = s && this.fromRpcStatus(s);
                        e = new No(r, i, o, a || null)
                    } else if (Uo(t, n, "documentChange")) {
                        qo(t.documentChange, "documentChange"), qo(t.documentChange.document, "documentChange.name"), qo(t.documentChange.document.name, "documentChange.document.name"), qo(t.documentChange.document.updateTime, "documentChange.document.updateTime");
                        var u = t.documentChange,
                            c = this.fromName(u.document.name),
                            h = this.fromVersion(u.document.updateTime),
                            l = this.fromFields(u.document.fields || {}),
                            f = new Yr(c, h, l, {}, u.document),
                            d = u.targetIds || [],
                            p = u.removedTargetIds || [];
                        e = new Co(d, p, f.key, f)
                    } else if (Uo(t, n, "documentDelete")) {
                        qo(t.documentDelete, "documentDelete"), qo(t.documentDelete.document, "documentDelete.document");
                        var m = t.documentDelete;
                        c = this.fromName(m.document), h = m.readTime ? this.fromVersion(m.readTime) : qi.forDeletedDoc(), f = new Jr(c, h), p = m.removedTargetIds || [];
                        e = new Co([], p, f.key, f)
                    } else if (Uo(t, n, "documentRemove")) {
                        qo(t.documentRemove, "documentRemove"), qo(t.documentRemove.document, "documentRemove");
                        var y = t.documentRemove;
                        c = this.fromName(y.document), p = y.removedTargetIds || [];
                        e = new Co([], p, c, null)
                    } else {
                        if (!Uo(t, n, "filter")) return er("Unknown change type " + JSON.stringify(t));
                        qo(t.filter, "filter"), qo(t.filter.targetId, "filter.targetId");
                        var g = t.filter,
                            v = g.count || 0,
                            b = new no(v),
                            w = g.targetId;
                        e = new Do(w, b)
                    }
                    return e
                }, t.prototype.fromWatchTargetChangeState = function (t) {
                    return "NO_CHANGE" === t ? wo.NoChange : "ADD" === t ? wo.Added : "REMOVE" === t ? wo.Removed : "CURRENT" === t ? wo.Current : "RESET" === t ? wo.Reset : er("Got unexpected TargetChange.state: " + t)
                }, t.prototype.versionFromListenResponse = function (t) {
                    if (!Uo(t, t.response_type, "targetChange")) return qi.MIN;
                    var e = t.targetChange;
                    return e.targetIds && e.targetIds.length ? qi.MIN : e.readTime ? this.fromVersion(e.readTime) : qi.MIN
                }, t.prototype.toMutation = function (t) {
                    var e, n = this;
                    if (t instanceof Gi) e = {
                        update: this.toMutationDocument(t.key, t.value)
                    };
                    else if (t instanceof Yi) e = {
                        delete: this.toName(t.key)
                    };
                    else if (t instanceof Hi) e = {
                        update: this.toMutationDocument(t.key, t.data),
                        updateMask: this.toDocumentMask(t.fieldMask)
                    };
                    else {
                        if (!(t instanceof Xi)) return er("Unknown mutation type " + t.type);
                        e = {
                            transform: {
                                document: this.toName(t.key),
                                fieldTransforms: t.fieldTransforms.map(function (t) {
                                    return n.toFieldTransform(t)
                                })
                            }
                        }
                    }
                    return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e
                }, t.prototype.fromMutation = function (t) {
                    var e = this,
                        n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : ji.NONE;
                    if (t.update) {
                        qo(t.update.name, "name");
                        var r = this.fromName(t.update.name),
                            i = this.fromFields(t.update.fields || {});
                        if (t.updateMask) {
                            var o = this.fromDocumentMask(t.updateMask);
                            return new Hi(r, i, o, n)
                        }
                        return new Gi(r, i, n)
                    }
                    if (t.delete) {
                        r = this.fromName(t.delete);
                        return new Yi(r, n)
                    }
                    if (t.transform) {
                        r = this.fromName(t.transform.document);
                        var s = t.transform.fieldTransforms.map(function (t) {
                            return e.fromFieldTransform(t)
                        });
                        return nr(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new Xi(r, s)
                    }
                    return er("unknown mutation proto: " + JSON.stringify(t))
                }, t.prototype.toPrecondition = function (t) {
                    return nr(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
                        updateTime: this.toVersion(t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : er("Unknown precondition")
                }, t.prototype.fromPrecondition = function (t) {
                    return void 0 !== t.updateTime ? ji.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? ji.exists(t.exists) : ji.NONE
                }, t.prototype.fromWriteResult = function (t, e) {
                    var n = this,
                        r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e),
                        i = null;
                    return t.transformResults && t.transformResults.length > 0 && (i = t.transformResults.map(function (t) {
                        return n.fromValue(t)
                    })), new Wi(r, i)
                }, t.prototype.fromWriteResults = function (t, e) {
                    var n = this;
                    return t && t.length > 0 ? (nr(void 0 !== e, "Received a write result without a commit time"), t.map(function (t) {
                        return n.fromWriteResult(t, e)
                    })) : []
                }, t.prototype.toFieldTransform = function (t) {
                    var e = this,
                        n = t.transform;
                    if (n instanceof Ji) return {
                        fieldPath: t.field.canonicalString(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof Zi) return {
                        fieldPath: t.field.canonicalString(),
                        appendMissingElements: {
                            values: n.elements.map(function (t) {
                                return e.toValue(t)
                            })
                        }
                    };
                    if (n instanceof $i) return {
                        fieldPath: t.field.canonicalString(),
                        removeAllFromArray: {
                            values: n.elements.map(function (t) {
                                return e.toValue(t)
                            })
                        }
                    };
                    throw er("Unknown transform: " + t.transform)
                }, t.prototype.fromFieldTransform = function (t) {
                    var e = this,
                        n = t.transform_type,
                        r = null;
                    if (Uo(t, n, "setToServerValue")) nr("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), r = Ji.instance;
                    else if (Uo(t, n, "appendMissingElements")) {
                        var i = t.appendMissingElements.values || [];
                        r = new Zi(i.map(function (t) {
                            return e.fromValue(t)
                        }))
                    } else if (Uo(t, n, "removeAllFromArray")) {
                        i = t.removeAllFromArray.values || [];
                        r = new $i(i.map(function (t) {
                            return e.fromValue(t)
                        }))
                    } else er("Unknown transform proto: " + JSON.stringify(t));
                    var o = Gr.fromServerFormat(t.fieldPath);
                    return new Ki(o, r)
                }, t.prototype.toDocumentsTarget = function (t) {
                    return {
                        documents: [this.toQueryPath(t.path)]
                    }
                }, t.prototype.fromDocumentsTarget = function (t) {
                    var e = t.documents.length;
                    nr(1 === e, "DocumentsTarget contained other than 1 document: " + e);
                    var n = t.documents[0];
                    return Di.atPath(this.fromQueryPath(n))
                }, t.prototype.toQueryTarget = function (t) {
                    var e = {
                        structuredQuery: {}
                    };
                    if (t.path.isEmpty()) e.parent = this.toQueryPath(jr.EMPTY_PATH);
                    else {
                        var n = t.path;
                        nr(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{
                            collectionId: n.lastSegment()
                        }]
                    }
                    var r = this.toFilter(t.filters);
                    r && (e.structuredQuery.where = r);
                    var i = this.toOrder(t.orderBy);
                    i && (e.structuredQuery.orderBy = i);
                    var o = this.toInt32Value(t.limit);
                    return void 0 !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e
                }, t.prototype.fromQueryTarget = function (t) {
                    var e = this.fromQueryPath(t.parent),
                        n = t.structuredQuery,
                        r = n.from ? n.from.length : 0;
                    if (r > 0) {
                        nr(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                        var i = n.from[0];
                        e = e.child(i.collectionId)
                    }
                    var o = [];
                    n.where && (o = this.fromFilter(n.where));
                    var s = [];
                    n.orderBy && (s = this.fromOrder(n.orderBy));
                    var a = null;
                    n.limit && (a = this.fromInt32Value(n.limit));
                    var u = null;
                    n.startAt && (u = this.fromCursor(n.startAt));
                    var c = null;
                    return n.endAt && (c = this.fromCursor(n.endAt)), new Di(e, s, o, a, u, c)
                }, t.prototype.toListenRequestLabels = function (t) {
                    var e = this.toLabel(t.purpose);
                    return null == e ? null : {
                        "goog-listen-tags": e
                    }
                }, t.prototype.toLabel = function (t) {
                    switch (t) {
                        case Ci.Listen:
                            return null;
                        case Ci.ExistenceFilterMismatch:
                            return "existence-filter-mismatch";
                        case Ci.LimboResolution:
                            return "limbo-document";
                        default:
                            return er("Unrecognized query purpose: " + t)
                    }
                }, t.prototype.toTarget = function (t) {
                    var e, n = t.query;
                    return (e = n.isDocumentQuery() ? {
                        documents: this.toDocumentsTarget(n)
                    } : {
                        query: this.toQueryTarget(n)
                    }).targetId = t.targetId, t.resumeToken.length > 0 && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e
                }, t.prototype.toFilter = function (t) {
                    var e = this;
                    if (0 !== t.length) {
                        var n = t.map(function (t) {
                            return t instanceof ki ? e.toRelationFilter(t) : e.toUnaryFilter(t)
                        });
                        return 1 === n.length ? n[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: n
                            }
                        }
                    }
                }, t.prototype.fromFilter = function (t) {
                    var e = this;
                    return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromRelationFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
                        return e.fromFilter(t)
                    }).reduce(function (t, e) {
                        return t.concat(e)
                    }) : er("Unknown filter: " + JSON.stringify(t)) : []
                }, t.prototype.toOrder = function (t) {
                    var e = this;
                    if (0 !== t.length) return t.map(function (t) {
                        return e.toPropertyOrder(t)
                    })
                }, t.prototype.fromOrder = function (t) {
                    var e = this;
                    return t.map(function (t) {
                        return e.fromPropertyOrder(t)
                    })
                }, t.prototype.toCursor = function (t) {
                    var e = this;
                    return {
                        before: t.before,
                        values: t.position.map(function (t) {
                            return e.toValue(t)
                        })
                    }
                }, t.prototype.fromCursor = function (t) {
                    var e = this,
                        n = !!t.before,
                        r = t.values.map(function (t) {
                            return e.fromValue(t)
                        });
                    return new _i(r, n)
                }, t.prototype.toDirection = function (t) {
                    return Po[t.name]
                }, t.prototype.fromDirection = function (t) {
                    switch (t) {
                        case "ASCENDING":
                            return Oi.ASCENDING;
                        case "DESCENDING":
                            return Oi.DESCENDING;
                        default:
                            return
                    }
                }, t.prototype.toOperatorName = function (t) {
                    return Lo[t.name]
                }, t.prototype.fromOperatorName = function (t) {
                    switch (t) {
                        case "EQUAL":
                            return Ai.EQUAL;
                        case "GREATER_THAN":
                            return Ai.GREATER_THAN;
                        case "GREATER_THAN_OR_EQUAL":
                            return Ai.GREATER_THAN_OR_EQUAL;
                        case "LESS_THAN":
                            return Ai.LESS_THAN;
                        case "LESS_THAN_OR_EQUAL":
                            return Ai.LESS_THAN_OR_EQUAL;
                        case "ARRAY_CONTAINS":
                            return Ai.ARRAY_CONTAINS;
                        case "OPERATOR_UNSPECIFIED":
                            return er("Unspecified relation");
                        default:
                            return er("Unknown relation")
                    }
                }, t.prototype.toFieldPathReference = function (t) {
                    return {
                        fieldPath: t.canonicalString()
                    }
                }, t.prototype.fromFieldPathReference = function (t) {
                    return Gr.fromServerFormat(t.fieldPath)
                }, t.prototype.toPropertyOrder = function (t) {
                    return {
                        field: this.toFieldPathReference(t.field),
                        direction: this.toDirection(t.dir)
                    }
                }, t.prototype.fromPropertyOrder = function (t) {
                    return new Pi(this.fromFieldPathReference(t.field), this.fromDirection(t.direction))
                }, t.prototype.toRelationFilter = function (t) {
                    return t instanceof ki ? {
                        fieldFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: this.toOperatorName(t.op),
                            value: this.toValue(t.value)
                        }
                    } : er("Unrecognized filter: " + JSON.stringify(t))
                }, t.prototype.fromRelationFilter = function (t) {
                    return new ki(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value))
                }, t.prototype.toUnaryFilter = function (t) {
                    return t instanceof Mi ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NAN"
                        }
                    } : t instanceof Ri ? {
                        unaryFilter: {
                            field: this.toFieldPathReference(t.field),
                            op: "IS_NULL"
                        }
                    } : er("Unrecognized filter: " + JSON.stringify(t))
                }, t.prototype.fromUnaryFilter = function (t) {
                    switch (t.unaryFilter.op) {
                        case "IS_NAN":
                            var e = this.fromFieldPathReference(t.unaryFilter.field);
                            return new Mi(e);
                        case "IS_NULL":
                            var n = this.fromFieldPathReference(t.unaryFilter.field);
                            return new Ri(n);
                        case "OPERATOR_UNSPECIFIED":
                            return er("Unspecified filter");
                        default:
                            return er("Unknown filter")
                    }
                }, t.prototype.toDocumentMask = function (t) {
                    var e = [];
                    return t.fields.forEach(function (t) {
                        return e.push(t.canonicalString())
                    }), {
                        fieldPaths: e
                    }
                }, t.prototype.fromDocumentMask = function (t) {
                    var e = (t.fieldPaths || []).map(function (t) {
                        return Gr.fromServerFormat(t)
                    });
                    return Qi.fromArray(e)
                }, t
            }();

            function Uo(t, e, n) {
                return e === n || !e && n in t
            }
            var Vo = function () {
                    function t(t) {
                        this.sendFn = t.sendFn, this.closeFn = t.closeFn
                    }
                    return t.prototype.onOpen = function (t) {
                        nr(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t
                    }, t.prototype.onClose = function (t) {
                        nr(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t
                    }, t.prototype.onMessage = function (t) {
                        nr(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t
                    }, t.prototype.close = function () {
                        this.closeFn()
                    }, t.prototype.send = function (t) {
                        this.sendFn(t)
                    }, t.prototype.callOnOpen = function () {
                        nr(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen()
                    }, t.prototype.callOnClose = function (t) {
                        nr(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t)
                    }, t.prototype.callOnMessage = function (t) {
                        nr(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t)
                    }, t
                }(),
                Qo = "Connection",
                Ko = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit"
                },
                Wo = "gl-js/ fire/" + Hn,
                jo = function () {
                    function t(t) {
                        this.databaseId = t.databaseId, this.pool = new Vn;
                        var e = t.ssl ? "https" : "http";
                        this.baseUrl = e + "://" + t.host
                    }
                    return t.prototype.modifyHeadersForRequest = function (t, e) {
                        if (e)
                            for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                        t["X-Goog-Api-Client"] = Wo
                    }, t.prototype.invokeRPC = function (t, e, n) {
                        var r = this,
                            i = this.makeUrl(t);
                        return new Promise(function (o, s) {
                            r.pool.getObject(function (a) {
                                a.listenOnce(Bn.COMPLETE, function () {
                                    try {
                                        switch (a.getLastErrorCode()) {
                                            case Fn.NO_ERROR:
                                                var e = a.getResponseJson();
                                                Zn(Qo, "XHR received:", JSON.stringify(e)), o(e);
                                                break;
                                            case Fn.TIMEOUT:
                                                Zn(Qo, 'RPC "' + t + '" timed out'), s(new sr(or.DEADLINE_EXCEEDED, "Request time out"));
                                                break;
                                            case Fn.HTTP_ERROR:
                                                var n = a.getStatus();
                                                Zn(Qo, 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), n > 0 ? s(new sr(function (t) {
                                                    switch (t) {
                                                        case 200:
                                                            return or.OK;
                                                        case 400:
                                                            return or.INVALID_ARGUMENT;
                                                        case 401:
                                                            return or.UNAUTHENTICATED;
                                                        case 403:
                                                            return or.PERMISSION_DENIED;
                                                        case 404:
                                                            return or.NOT_FOUND;
                                                        case 409:
                                                            return or.ABORTED;
                                                        case 416:
                                                            return or.OUT_OF_RANGE;
                                                        case 429:
                                                            return or.RESOURCE_EXHAUSTED;
                                                        case 499:
                                                            return or.CANCELLED;
                                                        case 500:
                                                            return or.UNKNOWN;
                                                        case 501:
                                                            return or.UNIMPLEMENTED;
                                                        case 503:
                                                            return or.UNAVAILABLE;
                                                        case 504:
                                                            return or.DEADLINE_EXCEEDED;
                                                        default:
                                                            return t >= 200 && t < 300 ? or.OK : t >= 400 && t < 500 ? or.FAILED_PRECONDITION : t >= 500 && t < 600 ? or.INTERNAL : or.UNKNOWN
                                                    }
                                                }(n), "Server responded with status " + a.getStatusText())) : (Zn(Qo, 'RPC "' + t + '" failed'), s(new sr(or.UNAVAILABLE, "Connection failed.")));
                                                break;
                                            default:
                                                er('RPC "' + t + '" failed with unanticipated webchannel error ' + a.getLastErrorCode() + ": " + a.getLastError() + ", giving up.")
                                        }
                                    } finally {
                                        Zn(Qo, 'RPC "' + t + '" completed.'), r.pool.releaseObject(a)
                                    }
                                });
                                var u = JSON.stringify(e);
                                Zn(Qo, "XHR sending: ", i + " " + u);
                                var c = {
                                    "Content-Type": "text/plain"
                                };
                                r.modifyHeadersForRequest(c, n), a.send(i, "POST", u, c, 15)
                            })
                        })
                    }, t.prototype.invokeStreamingRPC = function (t, e, n) {
                        return this.invokeRPC(t, e, n)
                    }, t.prototype.openStream = function (t, e) {
                        var n = [this.baseUrl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                            r = qn(),
                            i = {
                                backgroundChannelTest: !0,
                                httpSessionIdParam: "gsessionid",
                                initMessageHeaders: {},
                                messageUrlParams: {
                                    database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                                },
                                sendRawJson: !0,
                                supportsCrossDomainXhr: !0
                            };
                        this.modifyHeadersForRequest(i.initMessageHeaders, e), "object" == typeof navigator && "ReactNative" === navigator.product || (i.httpHeadersOverwriteParam = "$httpHeaders");
                        var o = n.join("");
                        Zn(Qo, "Creating WebChannel: " + o + " " + i);
                        var s = r.createWebChannel(o, i),
                            a = !1,
                            u = !1,
                            c = new Vo({
                                sendFn: function (t) {
                                    u ? Zn(Qo, "Not sending because WebChannel is closed:", t) : (a || (Zn(Qo, "Opening WebChannel transport."), s.open(), a = !0), Zn(Qo, "WebChannel sending:", t), s.send(t))
                                },
                                closeFn: function () {
                                    return s.close()
                                }
                            }),
                            h = function (t, e) {
                                s.listen(t, function (t) {
                                    try {
                                        e(t)
                                    } catch (t) {
                                        setTimeout(function () {
                                            throw t
                                        }, 0)
                                    }
                                })
                            };
                        return h(Un.EventType.OPEN, function () {
                            u || Zn(Qo, "WebChannel transport opened.")
                        }), h(Un.EventType.CLOSE, function () {
                            u || (u = !0, Zn(Qo, "WebChannel transport closed"), c.callOnClose())
                        }), h(Un.EventType.ERROR, function (t) {
                            u || (u = !0, Zn(Qo, "WebChannel transport errored:", t), c.callOnClose(new sr(or.UNAVAILABLE, "The operation could not be completed")))
                        }), h(Un.EventType.MESSAGE, function (t) {
                            if (!u) {
                                var e = t.data[0];
                                nr(!!e, "Got a webchannel message without data.");
                                var n = e.error || e[0] && e[0].error;
                                if (n) {
                                    Zn(Qo, "WebChannel received error:", n);
                                    var r = n.status,
                                        i = function (t) {
                                            var e = eo[t];
                                            if (void 0 !== e) return io(e)
                                        }(r),
                                        o = n.message;
                                    void 0 === i && (i = or.INTERNAL, o = "Unknown error status: " + r + " with message " + n.message), u = !0, c.callOnClose(new sr(i, o)), s.close()
                                } else Zn(Qo, "WebChannel received:", e), c.callOnMessage(e)
                            }
                        }), setTimeout(function () {
                            c.callOnOpen()
                        }, 0), c
                    }, t.prototype.makeUrl = function (t) {
                        var e = Ko[t];
                        nr(void 0 !== e, "Unknown REST mapping for: " + t);
                        var n = [this.baseUrl, "/", "v1"];
                        return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(e), n.join("")
                    }, t
                }(),
                zo = function () {
                    function t() {
                        this.emptyByteString = "", this.base64Available = "undefined" != typeof atob
                    }
                    return Object.defineProperty(t.prototype, "document", {
                        get: function () {
                            return "undefined" != typeof document ? document : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "window", {
                        get: function () {
                            return "undefined" != typeof window ? window : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.loadConnection = function (t) {
                        return Promise.resolve(new jo(t))
                    }, t.prototype.newSerializer = function (t) {
                        return new Bo(t, {
                            useProto3Json: !0
                        })
                    }, t.prototype.formatJSON = function (t) {
                        return JSON.stringify(t)
                    }, t.prototype.atob = function (t) {
                        return atob(t)
                    }, t.prototype.btoa = function (t) {
                        return btoa(t)
                    }, t
                }();
            rr.setPlatform(new zo);
            var Go, Ho = function () {
                    function t(t, e) {
                        var n = this;
                        this.previousValue = t, e && (e.sequenceNumberHandler = function (t) {
                            return n.setPreviousValue(t)
                        }, this.writeNewSequenceNumber = function (t) {
                            return e.writeSequenceNumber(t)
                        })
                    }
                    return t.prototype.setPreviousValue = function (t) {
                        return this.previousValue = Math.max(t, this.previousValue), this.previousValue
                    }, t.prototype.next = function () {
                        var t = ++this.previousValue;
                        return this.writeNewSequenceNumber && this.writeNewSequenceNumber(t), t
                    }, t.INVALID = -1, t
                }(),
                Xo = function () {
                    return function () {
                        var t = this;
                        this.promise = new Promise(function (e, n) {
                            t.resolve = e, t.reject = n
                        })
                    }
                }();
            ! function (t) {
                t.All = "all", t.ListenStreamIdle = "listen_stream_idle", t.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", t.WriteStreamIdle = "write_stream_idle", t.WriteStreamConnectionBackoff = "write_stream_connection_backoff", t.OnlineStateTimeout = "online_state_timeout", t.ClientMetadataRefresh = "client_metadata_refresh", t.LruGarbageCollection = "lru_garbage_collection"
            }(Go || (Go = {}));
            var Yo = function () {
                    function t(t, e, n, r, i) {
                        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Xo, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function (t) {})
                    }
                    return t.createAndSchedule = function (e, n, r, i, o) {
                        var s = new t(e, n, Date.now() + r, i, o);
                        return s.start(r), s
                    }, t.prototype.start = function (t) {
                        var e = this;
                        this.timerHandle = setTimeout(function () {
                            return e.handleDelayElapsed()
                        }, t)
                    }, t.prototype.skipDelay = function () {
                        return this.handleDelayElapsed()
                    }, t.prototype.cancel = function (t) {
                        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new sr(or.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
                    }, t.prototype.handleDelayElapsed = function () {
                        var t = this;
                        this.asyncQueue.enqueueAndForget(function () {
                            return null !== t.timerHandle ? (t.clearTimeout(), t.op().then(function (e) {
                                return t.deferred.resolve(e)
                            })) : Promise.resolve()
                        })
                    }, t.prototype.clearTimeout = function () {
                        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
                    }, t
                }(),
                Jo = function () {
                    function t() {
                        this.tail = Promise.resolve(), this.delayedOperations = [], this.operationInProgress = !1
                    }
                    return t.prototype.enqueueAndForget = function (t) {
                        this.enqueue(t)
                    }, t.prototype.enqueue = function (t) {
                        var e = this;
                        this.verifyNotFailed();
                        var n = this.tail.then(function () {
                            return e.operationInProgress = !0, t().catch(function (t) {
                                e.failure = t, e.operationInProgress = !1;
                                var n = t.stack || t.message || "";
                                throw $n("INTERNAL UNHANDLED ERROR: ", n), n.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function () {
                                    throw t
                                }, 0), t
                            }).then(function (t) {
                                return e.operationInProgress = !1, t
                            })
                        });
                        return this.tail = n, n
                    }, t.prototype.enqueueAfterDelay = function (t, e, n) {
                        var r = this;
                        this.verifyNotFailed(), nr(e >= 0, "Attempted to schedule an operation with a negative delay of " + e), nr(!this.containsDelayedOperation(t), "Attempted to schedule multiple operations with timer id " + t + ".");
                        var i = Yo.createAndSchedule(this, t, e, n, function (t) {
                            return r.removeDelayedOperation(t)
                        });
                        return this.delayedOperations.push(i), i
                    }, t.prototype.verifyNotFailed = function () {
                        this.failure && er("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message))
                    }, t.prototype.verifyOperationInProgress = function () {
                        nr(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.")
                    }, t.prototype.drain = function () {
                        return this.enqueue(function () {
                            return Promise.resolve()
                        })
                    }, t.prototype.containsDelayedOperation = function (t) {
                        for (var e = 0, n = this.delayedOperations; e < n.length; e++) {
                            if (n[e].timerId === t) return !0
                        }
                        return !1
                    }, t.prototype.runDelayedOperationsEarly = function (t) {
                        var e = this;
                        return this.drain().then(function () {
                            nr(t === Go.All || e.containsDelayedOperation(t), "Attempted to drain to missing operation " + t), e.delayedOperations.sort(function (t, e) {
                                return t.targetTimeMs - e.targetTimeMs
                            });
                            for (var n = 0, r = e.delayedOperations; n < r.length; n++) {
                                var i = r[n];
                                if (i.skipDelay(), t !== Go.All && i.timerId === t) break
                            }
                            return e.drain()
                        })
                    }, t.prototype.removeDelayedOperation = function (t) {
                        var e = this.delayedOperations.indexOf(t);
                        nr(e >= 0, "Delayed operation not found."), this.delayedOperations.splice(e, 1)
                    }, t
                }(),
                Zo = "",
                $o = "",
                ts = "",
                es = "";

            function ns(t) {
                for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = is(e)), e = rs(t.get(n), e);
                return is(e)
            }

            function rs(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                        case "\0":
                            n += Zo + ts;
                            break;
                        case Zo:
                            n += Zo + es;
                            break;
                        default:
                            n += o
                    }
                }
                return n
            }

            function is(t) {
                return t + Zo + $o
            }

            function os(t) {
                var e = t.length;
                if (nr(e >= 2, "Invalid path " + t), 2 === e) return nr(t.charAt(0) === Zo && t.charAt(1) === $o, "Non-empty path " + t + " had length 2"), jr.EMPTY_PATH;
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var s = t.indexOf(Zo, o);
                    switch ((s < 0 || s > n) && er('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
                        case $o:
                            var a = t.substring(o, s),
                                u = void 0;
                            0 === i.length ? u = a : (u = i += a, i = ""), r.push(u);
                            break;
                        case ts:
                            i += t.substring(o, s), i += "\0";
                            break;
                        case es:
                            i += t.substring(o, s + 1);
                            break;
                        default:
                            er('Invalid encoded resource path: "' + t + '"')
                    }
                    o = s + 2
                }
                return new jr(r)
            }
            var ss, as = function () {
                    function t(t, e, n) {
                        this.batchId = t, this.localWriteTime = e, this.mutations = n, nr(n.length > 0, "Cannot create an empty mutation batch")
                    }
                    return t.prototype.applyToRemoteDocument = function (t, e, n) {
                        e && nr(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        var r = n.mutationResults;
                        nr(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                        for (var i = 0; i < this.mutations.length; i++) {
                            var o = this.mutations[i];
                            if (o.key.isEqual(t)) {
                                var s = r[i];
                                e = o.applyToRemoteDocument(e, s)
                            }
                        }
                        return e
                    }, t.prototype.applyToLocalView = function (t, e) {
                        e && nr(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        for (var n = e, r = 0; r < this.mutations.length; r++) {
                            var i = this.mutations[r];
                            i.key.isEqual(t) && (e = i.applyToLocalView(e, n, this.localWriteTime))
                        }
                        return e
                    }, t.prototype.keys = function () {
                        for (var t = po(), e = 0, n = this.mutations; e < n.length; e++) {
                            var r = n[e];
                            t = t.add(r.key)
                        }
                        return t
                    }, t.prototype.isEqual = function (t) {
                        return this.batchId === t.batchId && Or(this.mutations, t.mutations)
                    }, t
                }(),
                us = function () {
                    function t(t, e, n, r, i) {
                        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = i
                    }
                    return t.from = function (e, n, r, i) {
                        nr(e.mutations.length === r.length, "Mutations sent " + e.mutations.length + " must equal results received " + r.length);
                        for (var o = lo(), s = e.mutations, a = 0; a < s.length; a++) o = o.insert(s[a].key, r[a].version);
                        return new t(e, n, r, i, o)
                    }, t
                }(),
                cs = 1;
            ! function (t) {
                t[t.QueryCache = 0] = "QueryCache", t[t.SyncEngine = 1] = "SyncEngine"
            }(ss || (ss = {}));
            var hs = function () {
                    function t(t, e) {
                        this.generatorId = t, nr((t & cs) === t, "Generator ID " + t + " contains more than " + cs + " reserved bits"), this.seek(void 0 !== e ? e : this.generatorId)
                    }
                    return t.prototype.next = function () {
                        var t = this.nextId;
                        return this.nextId += 1 << cs, t
                    }, t.prototype.after = function (t) {
                        return this.seek(t + (1 << cs)), this.next()
                    }, t.prototype.seek = function (t) {
                        nr((t & cs) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = t
                    }, t.forQueryCache = function () {
                        return new t(ss.QueryCache, 2)
                    }, t.forSyncEngine = function () {
                        return new t(ss.SyncEngine)
                    }, t
                }(),
                ls = function () {
                    function t(t) {
                        var e = this;
                        this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function (t) {
                            e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t)
                        }, function (t) {
                            e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t)
                        })
                    }
                    return t.prototype.catch = function (t) {
                        return this.next(void 0, t)
                    }, t.prototype.next = function (e, n) {
                        var r = this;
                        return this.callbackAttached && er("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t(function (t, i) {
                            r.nextCallback = function (n) {
                                r.wrapSuccess(e, n).next(t, i)
                            }, r.catchCallback = function (e) {
                                r.wrapFailure(n, e).next(t, i)
                            }
                        })
                    }, t.prototype.toPromise = function () {
                        var t = this;
                        return new Promise(function (e, n) {
                            t.next(e, n)
                        })
                    }, t.prototype.wrapUserFunction = function (e) {
                        try {
                            var n = e();
                            return n instanceof t ? n : t.resolve(n)
                        } catch (e) {
                            return t.reject(e)
                        }
                    }, t.prototype.wrapSuccess = function (e, n) {
                        return e ? this.wrapUserFunction(function () {
                            return e(n)
                        }) : t.resolve(n)
                    }, t.prototype.wrapFailure = function (e, n) {
                        return e ? this.wrapUserFunction(function () {
                            return e(n)
                        }) : t.reject(n)
                    }, t.resolve = function (e) {
                        return new t(function (t, n) {
                            t(e)
                        })
                    }, t.reject = function (e) {
                        return new t(function (t, n) {
                            n(e)
                        })
                    }, t.waitFor = function (e) {
                        return new t(function (t, n) {
                            var r = 0,
                                i = 0,
                                o = !1;
                            e.forEach(function (e) {
                                ++r, e.next(function () {
                                    ++i, o && i === r && t()
                                }, function (t) {
                                    return n(t)
                                })
                            }), o = !0, i === r && t()
                        })
                    }, t.or = function (e) {
                        for (var n = t.resolve(!1), r = function (e) {
                                n = n.next(function (n) {
                                    return n ? t.resolve(n) : e()
                                })
                            }, i = 0, o = e; i < o.length; i++) {
                            r(o[i])
                        }
                        return n
                    }, t.forEach = function (t, e) {
                        var n = this,
                            r = [];
                        return t.forEach(function (t, i) {
                            r.push(e.call(n, t, i))
                        }), this.waitFor(r)
                    }, t
                }(),
                fs = function () {
                    function t(t) {
                        this.db = t
                    }
                    return t.openOrCreate = function (e, n, r) {
                        return nr(t.isAvailable(), "IndexedDB not supported in current environment."), Zn("SimpleDb", "Opening database:", e), new ls(function (i, o) {
                            var s = window.indexedDB.open(e, n);
                            s.onsuccess = function (e) {
                                var n = e.target.result;
                                i(new t(n))
                            }, s.onblocked = function () {
                                o(new sr(or.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                            }, s.onerror = function (t) {
                                var e = t.target.error;
                                "VersionError" === e.name ? o(new sr(or.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e)
                            }, s.onupgradeneeded = function (t) {
                                Zn("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
                                var n = t.target.result,
                                    i = new ps(s.transaction);
                                r.createOrUpgrade(n, i, t.oldVersion, Os).next(function () {
                                    Zn("SimpleDb", "Database upgrade to version " + Os + " complete")
                                })
                            }
                        }).toPromise()
                    }, t.delete = function (t) {
                        return Zn("SimpleDb", "Removing database:", t), ys(window.indexedDB.deleteDatabase(t)).toPromise()
                    }, t.isAvailable = function () {
                        if ("undefined" == typeof window || null == window.indexedDB) return !1;
                        if (void 0 === window.navigator) return "YES" === process.env.USE_MOCK_PERSISTENCE;
                        var t = window.navigator.userAgent;
                        return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0)
                    }, t.getStore = function (t, e) {
                        return t.store(e)
                    }, t.prototype.runTransaction = function (t, e, n) {
                        var r = ps.open(this.db, t, e),
                            i = n(r).catch(function (t) {
                                return r.abort(t), ls.reject(t)
                            }).toPromise();
                        return r.completionPromise.then(function () {
                            return i
                        })
                    }, t.prototype.close = function () {
                        this.db.close()
                    }, t
                }(),
                ds = function () {
                    function t(t) {
                        this.dbCursor = t, this.shouldStop = !1, this.nextKey = null
                    }
                    return Object.defineProperty(t.prototype, "isDone", {
                        get: function () {
                            return this.shouldStop
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipToKey", {
                        get: function () {
                            return this.nextKey
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "cursor", {
                        set: function (t) {
                            this.dbCursor = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.done = function () {
                        this.shouldStop = !0
                    }, t.prototype.skip = function (t) {
                        this.nextKey = t
                    }, t.prototype.delete = function () {
                        return ys(this.dbCursor.delete())
                    }, t
                }(),
                ps = function () {
                    function t(t) {
                        var e = this;
                        this.transaction = t, this.aborted = !1, this.completionDeferred = new Xo, this.transaction.oncomplete = function () {
                            e.completionDeferred.resolve()
                        }, this.transaction.onabort = function () {
                            t.error ? e.completionDeferred.reject(t.error) : e.completionDeferred.resolve()
                        }, this.transaction.onerror = function (t) {
                            e.completionDeferred.reject(t.target.error)
                        }
                    }
                    return t.open = function (e, n, r) {
                        return new t(e.transaction(r, n))
                    }, Object.defineProperty(t.prototype, "completionPromise", {
                        get: function () {
                            return this.completionDeferred.promise
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.abort = function (t) {
                        t && this.completionDeferred.reject(t), this.aborted || (Zn("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                    }, t.prototype.store = function (t) {
                        var e = this.transaction.objectStore(t);
                        return nr(!!e, "Object store not part of transaction: " + t), new ms(e)
                    }, t
                }(),
                ms = function () {
                    function t(t) {
                        this.store = t
                    }
                    return t.prototype.put = function (t, e) {
                        var n;
                        return void 0 !== e ? (Zn("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (Zn("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), ys(n)
                    }, t.prototype.add = function (t) {
                        return Zn("SimpleDb", "ADD", this.store.name, t, t), ys(this.store.add(t))
                    }, t.prototype.get = function (t) {
                        var e = this;
                        return ys(this.store.get(t)).next(function (n) {
                            return void 0 === n && (n = null), Zn("SimpleDb", "GET", e.store.name, t, n), n
                        })
                    }, t.prototype.delete = function (t) {
                        return Zn("SimpleDb", "DELETE", this.store.name, t), ys(this.store.delete(t))
                    }, t.prototype.count = function () {
                        return Zn("SimpleDb", "COUNT", this.store.name), ys(this.store.count())
                    }, t.prototype.loadAll = function (t, e) {
                        var n = this.cursor(this.options(t, e)),
                            r = [];
                        return this.iterateCursor(n, function (t, e) {
                            r.push(e)
                        }).next(function () {
                            return r
                        })
                    }, t.prototype.deleteAll = function (t, e) {
                        Zn("SimpleDb", "DELETE ALL", this.store.name);
                        var n = this.options(t, e);
                        n.keysOnly = !1;
                        var r = this.cursor(n);
                        return this.iterateCursor(r, function (t, e, n) {
                            return n.delete()
                        })
                    }, t.prototype.iterate = function (t, e) {
                        var n;
                        e ? n = t : (n = {}, e = t);
                        var r = this.cursor(n);
                        return this.iterateCursor(r, e)
                    }, t.prototype.iterateSerial = function (t) {
                        var e = this.cursor({});
                        return new ls(function (n, r) {
                            e.onerror = function (t) {
                                r(t.target.error)
                            }, e.onsuccess = function (e) {
                                var r = e.target.result;
                                r ? t(r.primaryKey, r.value).next(function (t) {
                                    t ? r.continue() : n()
                                }) : n()
                            }
                        })
                    }, t.prototype.iterateCursor = function (t, e) {
                        var n = [];
                        return new ls(function (r, i) {
                            t.onerror = function (t) {
                                i(t.target.error)
                            }, t.onsuccess = function (t) {
                                var i = t.target.result;
                                if (i) {
                                    var o = new ds(i),
                                        s = e(i.primaryKey, i.value, o);
                                    if (s instanceof ls) {
                                        var a = s.catch(function (t) {
                                            return o.done(), ls.reject(t)
                                        });
                                        n.push(a)
                                    }
                                    o.isDone ? r() : null === o.skipToKey ? i.continue() : i.continue(o.skipToKey)
                                } else r()
                            }
                        }).next(function () {
                            return ls.waitFor(n)
                        })
                    }, t.prototype.options = function (t, e) {
                        var n = void 0;
                        return void 0 !== t && ("string" == typeof t ? n = t : (nr(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), {
                            index: n,
                            range: e
                        }
                    }, t.prototype.cursor = function (t) {
                        var e = "next";
                        if (t.reverse && (e = "prev"), t.index) {
                            var n = this.store.index(t.index);
                            return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                        }
                        return this.store.openCursor(t.range, e)
                    }, t
                }();

            function ys(t) {
                return new ls(function (e, n) {
                    t.onsuccess = function (t) {
                        var n = t.target.result;
                        e(n)
                    }, t.onerror = function (t) {
                        n(t.target.error)
                    }
                })
            }
            var gs = function () {
                function t(t, e) {
                    this.referenceDelegate = t, this.serializer = e, this.targetIdGenerator = hs.forQueryCache()
                }
                return t.prototype.allocateTargetId = function (t) {
                    var e = this;
                    return this.retrieveMetadata(t).next(function (n) {
                        return n.highestTargetId = e.targetIdGenerator.after(n.highestTargetId), e.saveMetadata(t, n).next(function () {
                            return n.highestTargetId
                        })
                    })
                }, t.prototype.getLastRemoteSnapshotVersion = function (t) {
                    return this.retrieveMetadata(t).next(function (t) {
                        return qi.fromTimestamp(new Ur(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                    })
                }, t.prototype.getHighestSequenceNumber = function (t) {
                    return ws(t.simpleDbTransaction)
                }, t.prototype.setTargetsMetadata = function (t, e, n) {
                    var r = this;
                    return this.retrieveMetadata(t).next(function (i) {
                        return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.saveMetadata(t, i)
                    })
                }, t.prototype.addQueryData = function (t, e) {
                    var n = this;
                    return this.saveQueryData(t, e).next(function () {
                        return n.retrieveMetadata(t).next(function (r) {
                            return r.targetCount += 1, n.updateMetadataFromQueryData(e, r), n.saveMetadata(t, r)
                        })
                    })
                }, t.prototype.updateQueryData = function (t, e) {
                    return this.saveQueryData(t, e)
                }, t.prototype.removeQueryData = function (t, e) {
                    var n = this;
                    return this.removeMatchingKeysForTargetId(t, e.targetId).next(function () {
                        return vs(t).delete(e.targetId)
                    }).next(function () {
                        return n.retrieveMetadata(t)
                    }).next(function (e) {
                        return nr(e.targetCount > 0, "Removing from an empty query cache"), e.targetCount -= 1, n.saveMetadata(t, e)
                    })
                }, t.prototype.removeTargets = function (t, e, n) {
                    var r = this,
                        i = 0,
                        o = [];
                    return vs(t).iterate(function (s, a) {
                        var u = r.serializer.fromDbTarget(a);
                        u.sequenceNumber <= e && void 0 === n[u.targetId] && (i++, o.push(r.removeQueryData(t, u)))
                    }).next(function () {
                        return ls.waitFor(o)
                    }).next(function () {
                        return i
                    })
                }, t.prototype.forEachTarget = function (t, e) {
                    var n = this;
                    return vs(t).iterate(function (t, r) {
                        var i = n.serializer.fromDbTarget(r);
                        e(i)
                    })
                }, t.prototype.retrieveMetadata = function (t) {
                    return bs(t.simpleDbTransaction)
                }, t.prototype.saveMetadata = function (t, e) {
                    return (n = t, ma.getStore(n, js.store)).put(js.key, e);
                    var n
                }, t.prototype.saveQueryData = function (t, e) {
                    return vs(t).put(this.serializer.toDbTarget(e))
                }, t.prototype.updateMetadataFromQueryData = function (t, e) {
                    var n = !1;
                    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
                }, t.prototype.getQueryCount = function (t) {
                    return this.retrieveMetadata(t).next(function (t) {
                        return t.targetCount
                    })
                }, t.prototype.getQueryData = function (t, e) {
                    var n = this,
                        r = e.canonicalId(),
                        i = IDBKeyRange.bound([r, Number.NEGATIVE_INFINITY], [r, Number.POSITIVE_INFINITY]),
                        o = null;
                    return vs(t).iterate({
                        range: i,
                        index: Ks.queryTargetsIndexName
                    }, function (t, r, i) {
                        var s = n.serializer.fromDbTarget(r);
                        e.isEqual(s.query) && (o = s, i.done())
                    }).next(function () {
                        return o
                    })
                }, t.prototype.addMatchingKeys = function (t, e, n) {
                    var r = this,
                        i = [],
                        o = Es(t);
                    return e.forEach(function (e) {
                        var s = ns(e.path);
                        i.push(o.put(new Ws(n, s))), i.push(r.referenceDelegate.addReference(t, e))
                    }), ls.waitFor(i)
                }, t.prototype.removeMatchingKeys = function (t, e, n) {
                    var r = this,
                        i = Es(t);
                    return ls.forEach(e, function (e) {
                        var o = ns(e.path);
                        return ls.waitFor([i.delete([n, o]), r.referenceDelegate.removeReference(t, e)])
                    })
                }, t.prototype.removeMatchingKeysForTargetId = function (t, e) {
                    var n = Es(t),
                        r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                    return n.delete(r)
                }, t.prototype.getMatchingKeysForTargetId = function (t, e) {
                    var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                        r = Es(t),
                        i = po();
                    return r.iterate({
                        range: n,
                        keysOnly: !0
                    }, function (t, e, n) {
                        var r = os(t[1]),
                            o = new Hr(r);
                        i = i.add(o)
                    }).next(function () {
                        return i
                    })
                }, t.prototype.containsKey = function (t, e) {
                    var n, r = ns(e.path),
                        i = IDBKeyRange.bound([r], [(n = r, n + "\0")], !1, !0),
                        o = 0;
                    return Es(t).iterate({
                        index: Ws.documentTargetsIndex,
                        keysOnly: !0,
                        range: i
                    }, function (t, e, n) {
                        var r = t[0];
                        t[1];
                        0 !== r && (o++, n.done())
                    }).next(function () {
                        return o > 0
                    })
                }, t.prototype.getQueryDataForTarget = function (t, e) {
                    var n = this;
                    return vs(t).get(e).next(function (t) {
                        return t ? n.serializer.fromDbTarget(t) : null
                    })
                }, t
            }();

            function vs(t) {
                return ma.getStore(t, Ks.store)
            }

            function bs(t) {
                return fs.getStore(t, js.store).get(js.key).next(function (t) {
                    return nr(null !== t, "Missing metadata row."), t
                })
            }

            function ws(t) {
                return bs(t).next(function (t) {
                    return t.highestListenSequenceNumber
                })
            }

            function Es(t) {
                return ma.getStore(t, Ws.store)
            }
            var Ss = function () {
                    function t(t) {
                        this.mapKeyFn = t, this.inner = {}
                    }
                    return t.prototype.get = function (t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 !== n)
                            for (var r = 0, i = n; r < i.length; r++) {
                                var o = i[r],
                                    s = o[0],
                                    a = o[1];
                                if (s.isEqual(t)) return a
                            }
                    }, t.prototype.has = function (t) {
                        return void 0 !== this.get(t)
                    }, t.prototype.set = function (t, e) {
                        var n = this.mapKeyFn(t),
                            r = this.inner[n];
                        if (void 0 !== r) {
                            for (var i = 0; i < r.length; i++)
                                if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                            r.push([t, e])
                        } else this.inner[n] = [
                            [t, e]
                        ]
                    }, t.prototype.delete = function (t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 === n) return !1;
                        for (var r = 0; r < n.length; r++)
                            if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                        return !1
                    }, t.prototype.forEach = function (t) {
                        lr(this.inner, function (e, n) {
                            for (var r = 0, i = n; r < i.length; r++) {
                                var o = i[r],
                                    s = o[0],
                                    a = o[1];
                                t(s, a)
                            }
                        })
                    }, t.prototype.isEmpty = function () {
                        return fr(this.inner)
                    }, t
                }(),
                Ts = function () {
                    function t() {
                        this.changes = so(), this.documentSizes = new Ss(function (t) {
                            return t.toString()
                        })
                    }
                    return t.prototype.addEntry = function (t) {
                        var e = this.assertChanges();
                        this.changes = e.insert(t.key, t)
                    }, t.prototype.getEntry = function (t, e) {
                        var n = this,
                            r = this.assertChanges().get(e);
                        return r ? ls.resolve(r) : this.getFromCache(t, e).next(function (t) {
                            return null === t ? (n.documentSizes.set(e, 0), null) : (n.documentSizes.set(e, t.size), t.maybeDocument)
                        })
                    }, t.prototype.getEntries = function (t, e) {
                        var n = this;
                        return this.getAllFromCache(t, e).next(function (t) {
                            var e = t.maybeDocuments;
                            return t.sizeMap.forEach(function (t, e) {
                                n.documentSizes.set(t, e)
                            }), e
                        })
                    }, t.prototype.apply = function (t) {
                        var e = this.applyChanges(t);
                        return this.changes = null, e
                    }, t.prototype.assertChanges = function () {
                        return nr(null !== this.changes, "Changes have already been applied."), this.changes
                    }, t
                }(),
                Is = "The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",
                Cs = function () {
                    function t(t, e) {
                        this.serializer = t, this.keepDocumentChangeLog = e, this._lastProcessedDocumentChangeId = 0
                    }
                    return Object.defineProperty(t.prototype, "lastProcessedDocumentChangeId", {
                        get: function () {
                            return this._lastProcessedDocumentChangeId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.start = function (t) {
                        var e = fs.getStore(t, Gs.store);
                        return this.synchronizeLastDocumentChangeId(e)
                    }, t.prototype.addEntries = function (t, e, n) {
                        var r = [];
                        if (e.length > 0) {
                            for (var i = As(t), o = po(), s = 0, a = e; s < a.length; s++) {
                                var u = a[s],
                                    c = u.key,
                                    h = u.doc;
                                r.push(i.put(Rs(c), h)), o = o.add(c)
                            }
                            this.keepDocumentChangeLog && r.push(ks(t).put({
                                changes: this.serializer.toDbResourcePaths(o)
                            })), r.push(this.updateSize(t, n))
                        }
                        return ls.waitFor(r)
                    }, t.prototype.removeEntry = function (t, e) {
                        var n = As(t),
                            r = Rs(e);
                        return n.get(r).next(function (t) {
                            return t ? n.delete(r).next(function () {
                                return Ms(t)
                            }) : ls.resolve(0)
                        })
                    }, t.prototype.getEntry = function (t, e) {
                        var n = this;
                        return As(t).get(Rs(e)).next(function (t) {
                            return t ? n.serializer.fromDbRemoteDocument(t) : null
                        })
                    }, t.prototype.getSizedEntry = function (t, e) {
                        var n = this;
                        return As(t).get(Rs(e)).next(function (t) {
                            return t ? {
                                maybeDocument: n.serializer.fromDbRemoteDocument(t),
                                size: Ms(t)
                            } : null
                        })
                    }, t.prototype.getEntries = function (t, e) {
                        var n = this,
                            r = ao();
                        return this.forEachDbEntry(t, e, function (t, e) {
                            r = e ? r.insert(t, n.serializer.fromDbRemoteDocument(e)) : r.insert(t, null)
                        }).next(function () {
                            return r
                        })
                    }, t.prototype.getSizedEntries = function (t, e) {
                        var n = this,
                            r = ao(),
                            i = new $r(Hr.comparator);
                        return this.forEachDbEntry(t, e, function (t, e) {
                            e ? (r = r.insert(t, n.serializer.fromDbRemoteDocument(e)), i = i.insert(t, Ms(e))) : (r = r.insert(t, null), i = i.insert(t, 0))
                        }).next(function () {
                            return {
                                maybeDocuments: r,
                                sizeMap: i
                            }
                        })
                    }, t.prototype.forEachDbEntry = function (t, e, n) {
                        if (e.isEmpty()) return ls.resolve();
                        var r = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                            i = e.getIterator(),
                            o = i.getNext();
                        return As(t).iterate({
                            range: r
                        }, function (t, e, r) {
                            for (var s = Hr.fromSegments(t); o && Hr.comparator(o, s) < 0;) n(o, null), o = i.getNext();
                            o && o.isEqual(s) && (n(o, e), o = i.hasNext() ? i.getNext() : null), o ? r.skip(o.path.toArray()) : r.done()
                        }).next(function () {
                            for (; o;) n(o, null), o = i.hasNext() ? i.getNext() : null
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function (t, e) {
                        var n = this,
                            r = co(),
                            i = e.path.toArray(),
                            o = IDBKeyRange.lowerBound(i);
                        return As(t).iterate({
                            range: o
                        }, function (t, i, o) {
                            var s = n.serializer.fromDbRemoteDocument(i);
                            e.path.isPrefixOf(s.key.path) ? s instanceof Yr && e.matches(s) && (r = r.insert(s.key, s)) : o.done()
                        }).next(function () {
                            return r
                        })
                    }, t.prototype.getNewDocumentChanges = function (t) {
                        var e = this;
                        nr(this.keepDocumentChangeLog, "Can only call getNewDocumentChanges() when document change log is enabled");
                        var n = po(),
                            r = so(),
                            i = IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId + 1),
                            o = !0,
                            s = ks(t);
                        return s.iterate({
                            range: i
                        }, function (t, r) {
                            if (o && (o = !1, e._lastProcessedDocumentChangeId + 1 !== r.id)) return e.synchronizeLastDocumentChangeId(s).next(function () {
                                return ls.reject(new sr(or.DATA_LOSS, Is))
                            });
                            n = n.unionWith(e.serializer.fromDbResourcePaths(r.changes)), e._lastProcessedDocumentChangeId = r.id
                        }).next(function () {
                            var i = [];
                            return n.forEach(function (n) {
                                i.push(e.getEntry(t, n).next(function (t) {
                                    var e = t || new Jr(n, qi.forDeletedDoc());
                                    r = r.insert(n, e)
                                }))
                            }), ls.waitFor(i)
                        }).next(function () {
                            return r
                        })
                    }, t.prototype.removeDocumentChangesThroughChangeId = function (t, e) {
                        var n = IDBKeyRange.upperBound(e);
                        return ks(t).delete(n)
                    }, t.prototype.synchronizeLastDocumentChangeId = function (t) {
                        var e = this;
                        return this._lastProcessedDocumentChangeId = 0, t.iterate({
                            keysOnly: !0,
                            reverse: !0
                        }, function (t, n, r) {
                            e._lastProcessedDocumentChangeId = t, r.done()
                        })
                    }, t.prototype.newChangeBuffer = function () {
                        return new Ns(this)
                    }, t.prototype.getSize = function (t) {
                        return this.getMetadata(t).next(function (t) {
                            return t.byteSize
                        })
                    }, t.prototype.getMetadata = function (t) {
                        return Ds(t).get(Qs.key).next(function (t) {
                            return nr(!!t, "Missing document cache metadata"), t
                        })
                    }, t.prototype.setMetadata = function (t, e) {
                        return Ds(t).put(Qs.key, e)
                    }, t.prototype.updateSize = function (t, e) {
                        var n = this;
                        return this.getMetadata(t).next(function (r) {
                            return r.byteSize += e, n.setMetadata(t, r)
                        })
                    }, t
                }();

            function Ds(t) {
                return ma.getStore(t, Qs.store)
            }
            var Ns = function (t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.documentCache = e, n
                }
                return s(e, t), e.prototype.applyChanges = function (t) {
                    var e = this,
                        n = 0,
                        r = [];
                    return this.assertChanges().forEach(function (t, i) {
                        var o = e.documentCache.serializer.toDbRemoteDocument(i),
                            s = e.documentSizes.get(t);
                        nr(void 0 !== s, "Attempting to change document " + t.toString() + " without having read it first");
                        var a = Ms(o);
                        n += a - s, r.push({
                            key: t,
                            doc: o
                        })
                    }), this.documentCache.addEntries(t, r, n)
                }, e.prototype.getFromCache = function (t, e) {
                    return this.documentCache.getSizedEntry(t, e)
                }, e.prototype.getAllFromCache = function (t, e) {
                    return this.documentCache.getSizedEntries(t, e)
                }, e
            }(Ts);

            function As(t) {
                return ma.getStore(t, Vs.store)
            }

            function ks(t) {
                return ma.getStore(t, Gs.store)
            }

            function Rs(t) {
                return t.path.toArray()
            }

            function Ms(t) {
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw er("Unknown remote document type");
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            var Os = 7,
                _s = function () {
                    function t(t) {
                        this.serializer = t
                    }
                    return t.prototype.createOrUpgrade = function (t, e, n, r) {
                        var i = this;
                        nr(n < r && n >= 0 && r <= Os, "Unexpected schema upgrade from v" + n + " to v{toVersion}."), n < 1 && r >= 1 && (function (t) {
                            t.createObjectStore(Ls.store)
                        }(t), function (t) {
                            t.createObjectStore(xs.store, {
                                keyPath: xs.keyPath
                            }), t.createObjectStore(qs.store, {
                                keyPath: qs.keyPath,
                                autoIncrement: !0
                            }).createIndex(qs.userMutationsIndex, qs.userMutationsKeyPath, {
                                unique: !0
                            }), t.createObjectStore(Fs.store)
                        }(t), zs(t), function (t) {
                            t.createObjectStore(Vs.store)
                        }(t));
                        var o = ls.resolve();
                        return n < 3 && r >= 3 && (0 !== n && (! function (t) {
                            t.deleteObjectStore(Ws.store), t.deleteObjectStore(Ks.store), t.deleteObjectStore(js.store)
                        }(t), zs(t)), o = o.next(function () {
                            return function (t) {
                                var e = t.store(js.store),
                                    n = new js(0, 0, qi.MIN.toTimestamp(), 0);
                                return e.put(js.key, n)
                            }(e)
                        })), n < 4 && r >= 4 && (0 !== n && (o = o.next(function () {
                            return function (t, e) {
                                return e.store(qs.store).loadAll().next(function (n) {
                                    t.deleteObjectStore(qs.store);
                                    var r = t.createObjectStore(qs.store, {
                                        keyPath: qs.keyPath,
                                        autoIncrement: !0
                                    });
                                    r.createIndex(qs.userMutationsIndex, qs.userMutationsKeyPath, {
                                        unique: !0
                                    });
                                    var i = e.store(qs.store),
                                        o = n.map(function (t) {
                                            return i.put(t)
                                        });
                                    return ls.waitFor(o)
                                })
                            }(t, e)
                        })), o = o.next(function () {
                            ! function (t) {
                                t.createObjectStore(Hs.store, {
                                    keyPath: Hs.keyPath
                                })
                            }(t),
                            function (t) {
                                t.createObjectStore(Gs.store, {
                                    keyPath: "id",
                                    autoIncrement: !0
                                })
                            }(t)
                        })), n < 5 && r >= 5 && (o = o.next(function () {
                            return i.removeAcknowledgedMutations(e)
                        })), n < 6 && r >= 6 && (o = o.next(function () {
                            return function (t) {
                                t.createObjectStore(Qs.store)
                            }(t), i.addDocumentGlobal(e)
                        })), n < 7 && r >= 7 && (o = o.next(function () {
                            return i.ensureSequenceNumbers(e)
                        })), o
                    }, t.prototype.addDocumentGlobal = function (t) {
                        var e = 0;
                        return t.store(Vs.store).iterate(function (t, n) {
                            e += Ms(n)
                        }).next(function () {
                            var n = new Qs(e);
                            return t.store(Qs.store).put(Qs.key, n)
                        })
                    }, t.prototype.removeAcknowledgedMutations = function (t) {
                        var e = this,
                            n = t.store(xs.store),
                            r = t.store(qs.store);
                        return n.loadAll().next(function (n) {
                            return ls.forEach(n, function (n) {
                                var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                                return r.loadAll(qs.userMutationsIndex, i).next(function (r) {
                                    return ls.forEach(r, function (r) {
                                        nr(r.userId === n.userId, "Cannot process batch " + r.batchId + " from unexpected user");
                                        var i = e.serializer.fromDbMutationBatch(r);
                                        return Zs(t, n.userId, i).next(function () {})
                                    })
                                })
                            })
                        })
                    }, t.prototype.ensureSequenceNumbers = function (t) {
                        var e = t.store(Ws.store),
                            n = t.store(Vs.store);
                        return ws(t).next(function (t) {
                            var r = [];
                            return n.iterate(function (n, i) {
                                var o = new jr(n),
                                    s = function (t) {
                                        return [0, ns(t)]
                                    }(o);
                                r.push(e.get(s).next(function (n) {
                                    return n ? ls.resolve() : function (n) {
                                        return e.put(new Ws(0, ns(n), t))
                                    }(o)
                                }))
                            }).next(function () {
                                return ls.waitFor(r)
                            })
                        })
                    }, t
                }();
            var Ps = function () {
                    return function (t, e) {
                        this.seconds = t, this.nanoseconds = e
                    }
                }(),
                Ls = function () {
                    function t(t, e, n) {
                        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
                    }
                    return t.store = "owner", t.key = "owner", t
                }();
            var xs = function () {
                    function t(t, e, n) {
                        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
                    }
                    return t.store = "mutationQueues", t.keyPath = "userId", t
                }(),
                qs = function () {
                    function t(t, e, n, r) {
                        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.mutations = r
                    }
                    return t.store = "mutations", t.keyPath = "batchId", t.userMutationsIndex = "userMutationsIndex", t.userMutationsKeyPath = ["userId", "batchId"], t
                }();
            var Fs = function () {
                function t() {}
                return t.prefixForUser = function (t) {
                    return [t]
                }, t.prefixForPath = function (t, e) {
                    return [t, ns(e)]
                }, t.key = function (t, e, n) {
                    return [t, ns(e), n]
                }, t.store = "documentMutations", t.PLACEHOLDER = new t, t
            }();
            var Bs = function () {
                    return function (t, e) {
                        this.path = t, this.readTime = e
                    }
                }(),
                Us = function () {
                    return function (t, e) {
                        this.path = t, this.version = e
                    }
                }(),
                Vs = function () {
                    function t(t, e, n, r) {
                        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r
                    }
                    return t.store = "remoteDocuments", t
                }(),
                Qs = function () {
                    function t(t) {
                        this.byteSize = t
                    }
                    return t.store = "remoteDocumentGlobal", t.key = "remoteDocumentGlobalKey", t
                }();
            var Ks = function () {
                    function t(t, e, n, r, i, o) {
                        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.query = o
                    }
                    return t.store = "targets", t.keyPath = "targetId", t.queryTargetsIndexName = "queryTargetsIndex", t.queryTargetsKeyPath = ["canonicalId", "targetId"], t
                }(),
                Ws = function () {
                    function t(t, e, n) {
                        this.targetId = t, this.path = e, this.sequenceNumber = n, nr(0 === t == (void 0 !== n), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number")
                    }
                    return t.store = "targetDocuments", t.keyPath = ["targetId", "path"], t.documentTargetsIndex = "documentTargetsIndex", t.documentTargetsKeyPath = ["path", "targetId"], t
                }(),
                js = function () {
                    function t(t, e, n, r) {
                        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
                    }
                    return t.key = "targetGlobalKey", t.store = "targetGlobal", t
                }();

            function zs(t) {
                t.createObjectStore(Ws.store, {
                    keyPath: Ws.keyPath
                }).createIndex(Ws.documentTargetsIndex, Ws.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Ks.store, {
                    keyPath: Ks.keyPath
                }).createIndex(Ks.queryTargetsIndexName, Ks.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(js.store)
            }
            var Gs = function () {
                function t(t) {
                    this.changes = t
                }
                return t.store = "remoteDocumentChanges", t.keyPath = "id", t
            }();
            var Hs = function () {
                function t(t, e, n, r, i) {
                    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r, this.lastProcessedDocumentChangeId = i
                }
                return t.store = "clientMetadata", t.keyPath = "clientId", t
            }();
            var Xs = [xs.store, qs.store, Fs.store, Vs.store, Ks.store, Ls.store, js.store, Ws.store].concat([Hs.store, Gs.store]).concat([Qs.store]),
                Ys = function () {
                    function t(t, e, n) {
                        this.userId = t, this.serializer = e, this.referenceDelegate = n, this.documentKeysByBatchId = {}
                    }
                    return t.forUser = function (e, n, r) {
                        return nr("" !== e.uid, "UserID must not be an empty string."), new t(e.isAuthenticated() ? e.uid : "", n, r)
                    }, t.prototype.checkEmpty = function (t) {
                        var e = !0,
                            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                        return ta(t).iterate({
                            index: qs.userMutationsIndex,
                            range: n
                        }, function (t, n, r) {
                            e = !1, r.done()
                        }).next(function () {
                            return e
                        })
                    }, t.prototype.acknowledgeBatch = function (t, e, n) {
                        return this.getMutationQueueMetadata(t).next(function (e) {
                            return e.lastStreamToken = $s(n), na(t).put(e)
                        })
                    }, t.prototype.getLastStreamToken = function (t) {
                        return this.getMutationQueueMetadata(t).next(function (t) {
                            return t.lastStreamToken
                        })
                    }, t.prototype.setLastStreamToken = function (t, e) {
                        return this.getMutationQueueMetadata(t).next(function (n) {
                            return n.lastStreamToken = $s(e), na(t).put(n)
                        })
                    }, t.prototype.addMutationBatch = function (t, e, n) {
                        var r = this,
                            i = ea(t),
                            o = ta(t);
                        return o.add({}).next(function (t) {
                            nr("number" == typeof t, "Auto-generated key is not a number");
                            var s = new as(t, e, n),
                                a = r.serializer.toDbMutationBatch(r.userId, s);
                            r.documentKeysByBatchId[t] = s.keys();
                            for (var u = [], c = 0, h = n; c < h.length; c++) {
                                var l = h[c],
                                    f = Fs.key(r.userId, l.key.path, t);
                                u.push(o.put(a)), u.push(i.put(f, Fs.PLACEHOLDER))
                            }
                            return ls.waitFor(u).next(function () {
                                return s
                            })
                        })
                    }, t.prototype.lookupMutationBatch = function (t, e) {
                        var n = this;
                        return ta(t).get(e).next(function (t) {
                            return t ? (nr(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.fromDbMutationBatch(t)) : null
                        })
                    }, t.prototype.lookupMutationKeys = function (t, e) {
                        var n = this;
                        return this.documentKeysByBatchId[e] ? ls.resolve(this.documentKeysByBatchId[e]) : this.lookupMutationBatch(t, e).next(function (t) {
                            if (t) {
                                var r = t.keys();
                                return n.documentKeysByBatchId[e] = r, r
                            }
                            return null
                        })
                    }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
                        var n = this;
                        return this.getMutationQueueMetadata(t).next(function (r) {
                            var i = e + 1,
                                o = IDBKeyRange.lowerBound([n.userId, i]),
                                s = null;
                            return ta(t).iterate({
                                index: qs.userMutationsIndex,
                                range: o
                            }, function (t, e, r) {
                                e.userId === n.userId && (nr(e.batchId >= i, "Should have found mutation after " + i), s = n.serializer.fromDbMutationBatch(e)), r.done()
                            }).next(function () {
                                return s
                            })
                        })
                    }, t.prototype.getAllMutationBatches = function (t) {
                        var e = this,
                            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                        return ta(t).loadAll(qs.userMutationsIndex, n).next(function (t) {
                            return t.map(function (t) {
                                return e.serializer.fromDbMutationBatch(t)
                            })
                        })
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
                        var n = this,
                            r = Fs.prefixForPath(this.userId, e.path),
                            i = IDBKeyRange.lowerBound(r),
                            o = [];
                        return ea(t).iterate({
                            range: i
                        }, function (r, i, s) {
                            var a = r[0],
                                u = r[1],
                                c = r[2],
                                h = os(u);
                            if (a === n.userId && e.path.isEqual(h)) return ta(t).get(c).next(function (t) {
                                if (!t) throw er("Dangling document-mutation reference found: " + r + " which points to " + c);
                                nr(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + c), o.push(n.serializer.fromDbMutationBatch(t))
                            });
                            s.done()
                        }).next(function () {
                            return o
                        })
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) {
                        var n = this,
                            r = new Ui(Mr),
                            i = [];
                        return e.forEach(function (e) {
                            var o = Fs.prefixForPath(n.userId, e.path),
                                s = IDBKeyRange.lowerBound(o),
                                a = ea(t).iterate({
                                    range: s
                                }, function (t, i, o) {
                                    var s = t[0],
                                        a = t[1],
                                        u = t[2],
                                        c = os(a);
                                    s === n.userId && e.path.isEqual(c) ? r = r.add(u) : o.done()
                                });
                            i.push(a)
                        }), ls.waitFor(i).next(function () {
                            return n.lookupMutationBatches(t, r)
                        })
                    }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
                        var n = this;
                        nr(!e.isDocumentQuery(), "Document queries shouldn't go down this path");
                        var r = e.path,
                            i = r.length + 1,
                            o = Fs.prefixForPath(this.userId, r),
                            s = IDBKeyRange.lowerBound(o),
                            a = new Ui(Mr);
                        return ea(t).iterate({
                            range: s
                        }, function (t, e, o) {
                            var s = t[0],
                                u = t[1],
                                c = t[2],
                                h = os(u);
                            s === n.userId && r.isPrefixOf(h) ? h.length === i && (a = a.add(c)) : o.done()
                        }).next(function () {
                            return n.lookupMutationBatches(t, a)
                        })
                    }, t.prototype.lookupMutationBatches = function (t, e) {
                        var n = this,
                            r = [],
                            i = [];
                        return e.forEach(function (e) {
                            i.push(ta(t).get(e).next(function (t) {
                                if (null === t) throw er("Dangling document-mutation reference found, which points to " + e);
                                nr(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.fromDbMutationBatch(t))
                            }))
                        }), ls.waitFor(i).next(function () {
                            return r
                        })
                    }, t.prototype.removeMutationBatch = function (t, e) {
                        var n = this;
                        return Zs(t.simpleDbTransaction, this.userId, e).next(function (r) {
                            return n.removeCachedMutationKeys(e.batchId), ls.forEach(r, function (e) {
                                return n.referenceDelegate.removeMutationReference(t, e)
                            })
                        })
                    }, t.prototype.removeCachedMutationKeys = function (t) {
                        delete this.documentKeysByBatchId[t]
                    }, t.prototype.performConsistencyCheck = function (t) {
                        var e = this;
                        return this.checkEmpty(t).next(function (n) {
                            if (!n) return ls.resolve();
                            var r = IDBKeyRange.lowerBound(Fs.prefixForUser(e.userId)),
                                i = [];
                            return ea(t).iterate({
                                range: r
                            }, function (t, n, r) {
                                if (t[0] === e.userId) {
                                    var o = os(t[1]);
                                    i.push(o)
                                } else r.done()
                            }).next(function () {
                                nr(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function (t) {
                                    return t.canonicalString()
                                }))
                            })
                        })
                    }, t.prototype.containsKey = function (t, e) {
                        return Js(t, this.userId, e)
                    }, t.prototype.getMutationQueueMetadata = function (t) {
                        var e = this;
                        return na(t).get(this.userId).next(function (t) {
                            return t || new xs(e.userId, -1, "")
                        })
                    }, t
                }();

            function Js(t, e, n) {
                var r = Fs.prefixForPath(e, n.path),
                    i = r[1],
                    o = IDBKeyRange.lowerBound(r),
                    s = !1;
                return ea(t).iterate({
                    range: o,
                    keysOnly: !0
                }, function (t, n, r) {
                    var o = t[0],
                        a = t[1];
                    t[2];
                    o === e && a === i && (s = !0), r.done()
                }).next(function () {
                    return s
                })
            }

            function Zs(t, e, n) {
                var r = t.store(qs.store),
                    i = t.store(Fs.store),
                    o = [],
                    s = IDBKeyRange.only(n.batchId),
                    a = 0,
                    u = r.iterate({
                        range: s
                    }, function (t, e, n) {
                        return a++, n.delete()
                    });
                o.push(u.next(function () {
                    nr(1 === a, "Dangling document-mutation reference found: Missing batch " + n.batchId)
                }));
                for (var c = [], h = 0, l = n.mutations; h < l.length; h++) {
                    var f = l[h],
                        d = Fs.key(e, f.key.path, n.batchId);
                    o.push(i.delete(d)), c.push(f.key)
                }
                return ls.waitFor(o).next(function () {
                    return c
                })
            }

            function $s(t) {
                return t instanceof Uint8Array ? (nr("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence."), t.toString()) : t
            }

            function ta(t) {
                return ma.getStore(t, qs.store)
            }

            function ea(t) {
                return ma.getStore(t, Fs.store)
            }

            function na(t) {
                return ma.getStore(t, xs.store)
            }
            var ra = function () {
                function t(t) {
                    this.remoteSerializer = t
                }
                return t.prototype.fromDbRemoteDocument = function (t) {
                    if (t.document) return this.remoteSerializer.fromDocument(t.document, !!t.hasCommittedMutations);
                    if (t.noDocument) {
                        var e = Hr.fromSegments(t.noDocument.path),
                            n = this.fromDbTimestamp(t.noDocument.readTime);
                        return new Jr(e, n, {
                            hasCommittedMutations: !!t.hasCommittedMutations
                        })
                    }
                    if (t.unknownDocument) {
                        e = Hr.fromSegments(t.unknownDocument.path), n = this.fromDbTimestamp(t.unknownDocument.version);
                        return new Zr(e, n)
                    }
                    return er("Unexpected DbRemoteDocument")
                }, t.prototype.toDbRemoteDocument = function (t) {
                    if (t instanceof Yr) {
                        var e = t.proto ? t.proto : this.remoteSerializer.toDocument(t),
                            n = t.hasCommittedMutations;
                        return new Vs(null, null, e, n)
                    }
                    if (t instanceof Jr) {
                        var r = t.key.path.toArray(),
                            i = this.toDbTimestamp(t.version);
                        n = t.hasCommittedMutations;
                        return new Vs(null, new Bs(r, i), null, n)
                    }
                    if (t instanceof Zr) {
                        r = t.key.path.toArray(), i = this.toDbTimestamp(t.version);
                        return new Vs(new Us(r, i), null, null, !0)
                    }
                    return er("Unexpected MaybeDocumment")
                }, t.prototype.toDbTimestamp = function (t) {
                    var e = t.toTimestamp();
                    return new Ps(e.seconds, e.nanoseconds)
                }, t.prototype.fromDbTimestamp = function (t) {
                    var e = new Ur(t.seconds, t.nanoseconds);
                    return qi.fromTimestamp(e)
                }, t.prototype.toDbMutationBatch = function (t, e) {
                    var n = this,
                        r = e.mutations.map(function (t) {
                            return n.remoteSerializer.toMutation(t)
                        });
                    return new qs(t, e.batchId, e.localWriteTime.toMillis(), r)
                }, t.prototype.fromDbMutationBatch = function (t) {
                    var e = this,
                        n = t.mutations.map(function (t) {
                            return e.remoteSerializer.fromMutation(t)
                        }),
                        r = Ur.fromMillis(t.localWriteTimeMs);
                    return new as(t.batchId, r, n)
                }, t.prototype.toDbResourcePaths = function (t) {
                    var e = [];
                    return t.forEach(function (t) {
                        e.push(ns(t.path))
                    }), e
                }, t.prototype.fromDbResourcePaths = function (t) {
                    for (var e = po(), n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        e = e.add(new Hr(os(i)))
                    }
                    return e
                }, t.prototype.fromDbTarget = function (t) {
                    var e, n = this.fromDbTimestamp(t.readTime);
                    return e = void 0 !== t.query.documents ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new Bi(e, t.targetId, Ci.Listen, t.lastListenSequenceNumber, n, t.resumeToken)
                }, t.prototype.toDbTarget = function (t) {
                    nr(Ci.Listen === t.purpose, "Only queries with purpose " + Ci.Listen + " may be stored, got " + t.purpose);
                    var e, n, r = this.toDbTimestamp(t.snapshotVersion);
                    return e = t.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.query) : this.remoteSerializer.toQueryTarget(t.query), t.resumeToken instanceof Uint8Array ? (nr("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence ."), n = t.resumeToken.toString()) : n = t.resumeToken, new Ks(t.targetId, t.query.canonicalId(), r, n, t.sequenceNumber, e)
                }, t
            }();

            function ia(t, e) {
                var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    s = Mr(n, i);
                return 0 === s ? Mr(r, o) : s
            }
            var oa = function () {
                    function t(t) {
                        this.maxElements = t, this.buffer = new Ui(ia), this.previousIndex = 0
                    }
                    return t.prototype.nextIndex = function () {
                        return ++this.previousIndex
                    }, t.prototype.addElement = function (t) {
                        var e = [t, this.nextIndex()];
                        if (this.buffer.size < this.maxElements) this.buffer = this.buffer.add(e);
                        else {
                            var n = this.buffer.last();
                            ia(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                        }
                    }, Object.defineProperty(t.prototype, "maxValue", {
                        get: function () {
                            return this.buffer.last()[0]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                sa = {
                    didRun: !1,
                    sequenceNumbersCollected: 0,
                    targetsRemoved: 0,
                    documentsRemoved: 0
                },
                aa = function () {
                    function t(t, e, n) {
                        this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n
                    }
                    return t.withCacheSize = function (e) {
                        return new t(e, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                    }, t.COLLECTION_DISABLED = -1, t.MINIMUM_CACHE_SIZE_BYTES = 1048576, t.DEFAULT_CACHE_SIZE_BYTES = 41943040, t.DEFAULT_COLLECTION_PERCENTILE = 10, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, t.DEFAULT = new t(t.DEFAULT_CACHE_SIZE_BYTES, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), t.DISABLED = new t(t.COLLECTION_DISABLED, 0, 0), t
                }(),
                ua = function () {
                    function t(t, e, n) {
                        this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.gcTask = null
                    }
                    return t.prototype.start = function () {
                        nr(null === this.gcTask, "Cannot start an already started LruScheduler"), this.garbageCollector.params.cacheSizeCollectionThreshold !== aa.COLLECTION_DISABLED && this.scheduleGC()
                    }, t.prototype.stop = function () {
                        this.gcTask && (this.gcTask.cancel(), this.gcTask = null)
                    }, Object.defineProperty(t.prototype, "started", {
                        get: function () {
                            return null !== this.gcTask
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.scheduleGC = function () {
                        var t = this;
                        nr(null === this.gcTask, "Cannot schedule GC while a task is pending");
                        var e = this.hasRun ? 3e5 : 6e4;
                        Zn("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.gcTask = this.asyncQueue.enqueueAfterDelay(Go.LruGarbageCollection, e, function () {
                            return t.gcTask = null, t.hasRun = !0, t.localStore.collectGarbage(t.garbageCollector).then(function () {
                                return t.scheduleGC()
                            }).catch(ya)
                        })
                    }, t
                }(),
                ca = function () {
                    function t(t, e) {
                        this.delegate = t, this.params = e
                    }
                    return t.prototype.calculateTargetCount = function (t, e) {
                        return this.delegate.getSequenceNumberCount(t).next(function (t) {
                            return Math.floor(e / 100 * t)
                        })
                    }, t.prototype.nthSequenceNumber = function (t, e) {
                        var n = this;
                        if (0 === e) return ls.resolve(Ho.INVALID);
                        var r = new oa(e);
                        return this.delegate.forEachTarget(t, function (t) {
                            return r.addElement(t.sequenceNumber)
                        }).next(function () {
                            return n.delegate.forEachOrphanedDocumentSequenceNumber(t, function (t) {
                                return r.addElement(t)
                            })
                        }).next(function () {
                            return r.maxValue
                        })
                    }, t.prototype.removeTargets = function (t, e, n) {
                        return this.delegate.removeTargets(t, e, n)
                    }, t.prototype.removeOrphanedDocuments = function (t, e) {
                        return this.delegate.removeOrphanedDocuments(t, e)
                    }, t.prototype.collect = function (t, e) {
                        var n = this;
                        return this.params.cacheSizeCollectionThreshold === aa.COLLECTION_DISABLED ? (Zn("LruGarbageCollector", "Garbage collection skipped; disabled"), ls.resolve(sa)) : this.getCacheSize(t).next(function (r) {
                            return r < n.params.cacheSizeCollectionThreshold ? (Zn("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold), sa) : n.runGarbageCollection(t, e)
                        })
                    }, t.prototype.getCacheSize = function (t) {
                        return this.delegate.getCacheSize(t)
                    }, t.prototype.runGarbageCollection = function (t, e) {
                        var n, r, i, o, s, a, u, c, h = this;
                        return o = Date.now(), this.calculateTargetCount(t, this.params.percentileToCollect).next(function (e) {
                            return e > h.params.maximumSequenceNumbersToCollect ? (Zn("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + e), r = h.params.maximumSequenceNumbersToCollect) : r = e, s = Date.now(), h.nthSequenceNumber(t, r)
                        }).next(function (r) {
                            return n = r, a = Date.now(), h.removeTargets(t, n, e)
                        }).next(function (e) {
                            return i = e, u = Date.now(), h.removeOrphanedDocuments(t, n)
                        }).next(function (t) {
                            (c = Date.now(), Yn() <= jn.DEBUG) && Zn("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - o) + "ms\n\tDetermined least recently used " + r + " in " + (a - s) + "ms\n\tRemoved " + i + " targets in " + (u - a) + "ms\n\tRemoved " + t + " documents in " + (c - u) + "ms\nTotal Duration: " + (c - o) + "ms");
                            return ls.resolve({
                                didRun: !0,
                                sequenceNumbersCollected: r,
                                targetsRemoved: i,
                                documentsRemoved: t
                            })
                        })
                    }, t
                }(),
                ha = "IndexedDbPersistence",
                la = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                fa = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `experimentalTabSynchronization:true` in all tabs.",
                da = "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.",
                pa = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.simpleDbTransaction = e, r.currentSequenceNumber = n, r
                    }
                    return s(e, t), e
                }(function () {
                    return function () {}
                }()),
                ma = function () {
                    function t(e, n, r, i, o, s, a) {
                        if (this.persistenceKey = e, this.clientId = n, this.queue = i, this.multiClientParams = a, this._started = !1, this.isPrimary = !1, this.networkEnabled = !0, this.inForeground = !1, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function (t) {
                                return Promise.resolve()
                            }, !t.isAvailable()) throw new sr(or.UNIMPLEMENTED, da);
                        if (this.referenceDelegate = new ba(this, s), this.dbName = e + t.MAIN_DATABASE, this.serializer = new ra(o), this.document = r.document, this.allowTabSynchronization = void 0 !== a, this.queryCache = new gs(this.referenceDelegate, this.serializer), this.remoteDocumentCache = new Cs(this.serializer, this.allowTabSynchronization), !r.window || !r.window.localStorage) throw new sr(or.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                        this.window = r.window, this.webStorage = this.window.localStorage
                    }
                    return t.getStore = function (t, e) {
                        if (t instanceof pa) return fs.getStore(t.simpleDbTransaction, e);
                        throw er("IndexedDbPersistence must use instances of IndexedDbTransaction")
                    }, t.createIndexedDbPersistence = function (e, n, r, i, o, s) {
                        return a(this, void 0, void 0, function () {
                            var a;
                            return u(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, (a = new t(e, n, r, i, o, s)).start()];
                                    case 1:
                                        return u.sent(), [2, a]
                                }
                            })
                        })
                    }, t.createMultiClientIndexedDbPersistence = function (e, n, r, i, o, s, c) {
                        return a(this, void 0, void 0, function () {
                            var a;
                            return u(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, (a = new t(e, n, r, i, o, s, c)).start()];
                                    case 1:
                                        return u.sent(), [2, a]
                                }
                            })
                        })
                    }, t.prototype.start = function () {
                        var t = this;
                        return nr(!this.started, "IndexedDbPersistence double-started!"), nr(null !== this.window, "Expected 'window' to be defined"), fs.openOrCreate(this.dbName, Os, new _s(this.serializer)).then(function (e) {
                            t.simpleDb = e
                        }).then(function () {
                            return t.startRemoteDocumentCache()
                        }).then(function () {
                            return t.attachVisibilityHandler(), t.attachWindowUnloadHook(), t.updateClientMetadataAndTryBecomePrimary().then(function () {
                                return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                            })
                        }).then(function () {
                            return t.simpleDb.runTransaction("readonly", [js.store], function (e) {
                                return ws(e).next(function (e) {
                                    var n = t.multiClientParams ? t.multiClientParams.sequenceNumberSyncer : void 0;
                                    t.listenSequence = new Ho(e, n)
                                })
                            })
                        }).then(function () {
                            t._started = !0
                        }).catch(function (e) {
                            return t.simpleDb && t.simpleDb.close(), Promise.reject(e)
                        })
                    }, t.prototype.startRemoteDocumentCache = function () {
                        var t = this;
                        return this.simpleDb.runTransaction("readonly", Xs, function (e) {
                            return t.remoteDocumentCache.start(e)
                        })
                    }, t.prototype.setPrimaryStateListener = function (t) {
                        var e = this;
                        return this.primaryStateListener = function (n) {
                            return a(e, void 0, void 0, function () {
                                return u(this, function (e) {
                                    return this.started ? [2, t(n)] : [2]
                                })
                            })
                        }, t(this.isPrimary)
                    }, t.prototype.setNetworkEnabled = function (t) {
                        var e = this;
                        this.networkEnabled !== t && (this.networkEnabled = t, this.queue.enqueueAndForget(function () {
                            return a(e, void 0, void 0, function () {
                                return u(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }))
                    }, t.prototype.updateClientMetadataAndTryBecomePrimary = function () {
                        var t = this;
                        return this.simpleDb.runTransaction("readwrite", Xs, function (e) {
                            return va(e).put(new Hs(t.clientId, Date.now(), t.networkEnabled, t.inForeground, t.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function () {
                                if (t.isPrimary) return t.verifyPrimaryLease(e).next(function (e) {
                                    e || (t.isPrimary = !1, t.queue.enqueueAndForget(function () {
                                        return t.primaryStateListener(!1)
                                    }))
                                })
                            }).next(function () {
                                return t.canActAsPrimary(e)
                            }).next(function (n) {
                                var r = t.isPrimary;
                                return t.isPrimary = n, r !== t.isPrimary && t.queue.enqueueAndForget(function () {
                                    return t.primaryStateListener(t.isPrimary)
                                }), r && !t.isPrimary ? t.releasePrimaryLeaseIfHeld(e) : t.isPrimary ? t.acquireOrExtendPrimaryLease(e) : void 0
                            })
                        })
                    }, t.prototype.verifyPrimaryLease = function (t) {
                        var e = this;
                        return ga(t).get(Ls.key).next(function (t) {
                            return ls.resolve(e.isLocalClient(t))
                        })
                    }, t.prototype.removeClientMetadata = function (t) {
                        return va(t).delete(this.clientId)
                    }, t.prototype.maybeGarbageCollectMultiClientState = function () {
                        return a(this, void 0, void 0, function () {
                            var e, n, r = this;
                            return u(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, 18e5) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), n = [], [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (i) {
                                            var o = t.getStore(i, Hs.store);
                                            return o.loadAll().next(function (t) {
                                                e = r.filterActiveClients(t, 18e5), n = t.filter(function (t) {
                                                    return -1 === e.indexOf(t)
                                                })
                                            }).next(function () {
                                                return ls.forEach(n, function (t) {
                                                    return o.delete(t.clientId)
                                                })
                                            }).next(function () {
                                                if ((e = e.filter(function (t) {
                                                        return t.clientId !== r.clientId
                                                    })).length > 0) {
                                                    var t = e.map(function (t) {
                                                            return t.lastProcessedDocumentChangeId || 0
                                                        }),
                                                        n = Math.min.apply(Math, t);
                                                    return r.remoteDocumentCache.removeDocumentChangesThroughChangeId(i, n)
                                                }
                                            })
                                        })]);
                                    case 1:
                                        i.sent(), n.forEach(function (t) {
                                            r.window.localStorage.removeItem(r.zombiedClientLocalStorageKey(t.clientId))
                                        }), i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function () {
                        var t = this;
                        this.clientMetadataRefresher = this.queue.enqueueAfterDelay(Go.ClientMetadataRefresh, 4e3, function () {
                            return t.updateClientMetadataAndTryBecomePrimary().then(function () {
                                return t.maybeGarbageCollectMultiClientState()
                            }).then(function () {
                                return t.scheduleClientMetadataAndPrimaryLeaseRefreshes()
                            })
                        })
                    }, t.prototype.isLocalClient = function (t) {
                        return !!t && t.ownerId === this.clientId
                    }, t.prototype.canActAsPrimary = function (t) {
                        var e = this;
                        return ga(t).get(Ls.key).next(function (n) {
                            if (null !== n && e.isWithinAge(n.leaseTimestampMs, 5e3) && !e.isClientZombied(n.ownerId)) {
                                if (e.isLocalClient(n) && e.networkEnabled) return !0;
                                if (!e.isLocalClient(n)) {
                                    if (!n.allowTabSynchronization) throw new sr(or.FAILED_PRECONDITION, fa);
                                    return !1
                                }
                            }
                            return !(!e.networkEnabled || !e.inForeground) || va(t).loadAll().next(function (t) {
                                return void 0 === e.filterActiveClients(t, 5e3).find(function (t) {
                                    if (e.clientId !== t.clientId) {
                                        var n = !e.networkEnabled && t.networkEnabled,
                                            r = !e.inForeground && t.inForeground,
                                            i = e.networkEnabled === t.networkEnabled;
                                        if (n || r && i) return !0
                                    }
                                    return !1
                                })
                            })
                        }).next(function (t) {
                            return e.isPrimary !== t && Zn(ha, "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                        })
                    }, t.prototype.shutdown = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e = this;
                            return u(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return this._started = !1, this.markClientZombied(), this.clientMetadataRefresher && this.clientMetadataRefresher.cancel(), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite", [Ls.store, Hs.store], function (t) {
                                            return e.releasePrimaryLeaseIfHeld(t).next(function () {
                                                return e.removeClientMetadata(t)
                                            })
                                        })];
                                    case 1:
                                        return n.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), t ? [4, fs.delete(this.dbName)] : [3, 3];
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.filterActiveClients = function (t, e) {
                        var n = this;
                        return t.filter(function (t) {
                            return n.isWithinAge(t.updateTimeMs, e) && !n.isClientZombied(t.clientId)
                        })
                    }, t.prototype.getActiveClients = function () {
                        var t = this;
                        return this.simpleDb.runTransaction("readonly", [Hs.store], function (e) {
                            return va(e).loadAll().next(function (e) {
                                return t.filterActiveClients(e, 18e5).map(function (t) {
                                    return t.clientId
                                })
                            })
                        })
                    }, Object.defineProperty(t.prototype, "started", {
                        get: function () {
                            return this._started
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getMutationQueue = function (t) {
                        return nr(this.started, "Cannot initialize MutationQueue before persistence is started."), Ys.forUser(t, this.serializer, this.referenceDelegate)
                    }, t.prototype.getQueryCache = function () {
                        return nr(this.started, "Cannot initialize QueryCache before persistence is started."), this.queryCache
                    }, t.prototype.getRemoteDocumentCache = function () {
                        return nr(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache
                    }, t.prototype.runTransaction = function (t, e, n) {
                        var r = this;
                        return Zn(ha, "Starting transaction:", t), this.simpleDb.runTransaction("readonly" === e ? "readonly" : "readwrite", Xs, function (i) {
                            return "readwrite-primary" === e ? r.verifyPrimaryLease(i).next(function (e) {
                                if (!e) throw $n("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.queue.enqueueAndForget(function () {
                                    return r.primaryStateListener(!1)
                                }), new sr(or.FAILED_PRECONDITION, la);
                                return n(new pa(i, r.listenSequence.next()))
                            }).next(function (t) {
                                return r.acquireOrExtendPrimaryLease(i).next(function () {
                                    return t
                                })
                            }) : r.verifyAllowTabSynchronization(i).next(function () {
                                return n(new pa(i, r.listenSequence.next()))
                            })
                        })
                    }, t.prototype.verifyAllowTabSynchronization = function (t) {
                        var e = this;
                        return ga(t).get(Ls.key).next(function (t) {
                            if (null !== t && e.isWithinAge(t.leaseTimestampMs, 5e3) && !e.isClientZombied(t.ownerId) && !e.isLocalClient(t) && !t.allowTabSynchronization) throw new sr(or.FAILED_PRECONDITION, fa)
                        })
                    }, t.prototype.acquireOrExtendPrimaryLease = function (t) {
                        var e = new Ls(this.clientId, this.allowTabSynchronization, Date.now());
                        return ga(t).put(Ls.key, e)
                    }, t.isAvailable = function () {
                        return fs.isAvailable()
                    }, t.buildStoragePrefix = function (t) {
                        var e = t.databaseId.projectId;
                        return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/"
                    }, t.prototype.releasePrimaryLeaseIfHeld = function (t) {
                        var e = this,
                            n = ga(t);
                        return n.get(Ls.key).next(function (t) {
                            return e.isLocalClient(t) ? (Zn(ha, "Releasing primary lease."), n.delete(Ls.key)) : ls.resolve()
                        })
                    }, t.prototype.isWithinAge = function (t, e) {
                        var n = Date.now();
                        return !(t < n - e) && (!(t > n) || ($n("Detected an update time that is in the future: " + t + " > " + n), !1))
                    }, t.prototype.attachVisibilityHandler = function () {
                        var t = this;
                        null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function () {
                            t.queue.enqueueAndForget(function () {
                                return t.inForeground = "visible" === t.document.visibilityState, t.updateClientMetadataAndTryBecomePrimary()
                            })
                        }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState)
                    }, t.prototype.detachVisibilityHandler = function () {
                        this.documentVisibilityHandler && (nr(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null)
                    }, t.prototype.attachWindowUnloadHook = function () {
                        var t = this;
                        "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function () {
                            t.markClientZombied(), t.queue.enqueueAndForget(function () {
                                return t.shutdown()
                            })
                        }, this.window.addEventListener("unload", this.windowUnloadHandler))
                    }, t.prototype.detachWindowUnloadHook = function () {
                        this.windowUnloadHandler && (nr("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null)
                    }, t.prototype.isClientZombied = function (t) {
                        try {
                            var e = null !== this.webStorage.getItem(this.zombiedClientLocalStorageKey(t));
                            return Zn(ha, "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e
                        } catch (t) {
                            return $n(ha, "Failed to get zombied client id.", t), !1
                        }
                    }, t.prototype.markClientZombied = function () {
                        try {
                            this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now()))
                        } catch (t) {
                            $n("Failed to set zombie client id.", t)
                        }
                    }, t.prototype.removeClientZombiedEntry = function () {
                        try {
                            this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId))
                        } catch (t) {}
                    }, t.prototype.zombiedClientLocalStorageKey = function (t) {
                        return "firestore_zombie_" + this.persistenceKey + "_" + t
                    }, t.MAIN_DATABASE = "main", t
                }();

            function ya(t) {
                return a(this, void 0, void 0, function () {
                    return u(this, function (e) {
                        if (! function (t) {
                                return t.code === or.FAILED_PRECONDITION && t.message === la
                            }(t)) throw t;
                        return Zn(ha, "Unexpectedly lost primary lease"), [2]
                    })
                })
            }

            function ga(t) {
                return t.store(Ls.store)
            }

            function va(t) {
                return t.store(Hs.store)
            }
            var ba = function () {
                function t(t, e) {
                    this.db = t, this.garbageCollector = new ca(this, e)
                }
                return t.prototype.getSequenceNumberCount = function (t) {
                    var e = this.orphanedDocmentCount(t);
                    return this.db.getQueryCache().getQueryCount(t).next(function (t) {
                        return e.next(function (e) {
                            return t + e
                        })
                    })
                }, t.prototype.orphanedDocmentCount = function (t) {
                    var e = 0;
                    return this.forEachOrphanedDocumentSequenceNumber(t, function (t) {
                        e++
                    }).next(function () {
                        return e
                    })
                }, t.prototype.forEachTarget = function (t, e) {
                    return this.db.getQueryCache().forEachTarget(t, e)
                }, t.prototype.forEachOrphanedDocumentSequenceNumber = function (t, e) {
                    return this.forEachOrphanedDocument(t, function (t, n) {
                        return e(n)
                    })
                }, t.prototype.setInMemoryPins = function (t) {
                    this.inMemoryPins = t
                }, t.prototype.addReference = function (t, e) {
                    return wa(t, e)
                }, t.prototype.removeReference = function (t, e) {
                    return wa(t, e)
                }, t.prototype.removeTargets = function (t, e, n) {
                    return this.db.getQueryCache().removeTargets(t, e, n)
                }, t.prototype.removeMutationReference = function (t, e) {
                    return wa(t, e)
                }, t.prototype.isPinned = function (t, e) {
                    return this.inMemoryPins.containsKey(e) ? ls.resolve(!0) : function (t, e) {
                        var n = !1;
                        return na(t).iterateSerial(function (r) {
                            return Js(t, r, e).next(function (t) {
                                return t && (n = !0), ls.resolve(!t)
                            })
                        }).next(function () {
                            return n
                        })
                    }(t, e)
                }, t.prototype.removeOrphanedDocuments = function (t, e) {
                    var n = this,
                        r = 0,
                        i = 0,
                        o = [];
                    return this.forEachOrphanedDocument(t, function (s, a) {
                        if (a <= e) {
                            var u = n.isPinned(t, s).next(function (e) {
                                if (!e) return r++, n.removeOrphanedDocument(t, s).next(function (t) {
                                    i += t
                                })
                            });
                            o.push(u)
                        }
                    }).next(function () {
                        return ls.waitFor(o)
                    }).next(function () {
                        return n.db.getRemoteDocumentCache().updateSize(t, -i)
                    }).next(function () {
                        return r
                    })
                }, t.prototype.removeOrphanedDocument = function (t, e) {
                    var n, r = 0,
                        i = this.db.getRemoteDocumentCache();
                    return ls.waitFor([Es(t).delete((n = e, [0, ns(n.path)])), i.removeEntry(t, e).next(function (t) {
                        r += t
                    })]).next(function () {
                        return r
                    })
                }, t.prototype.removeTarget = function (t, e) {
                    var n = e.copy({
                        sequenceNumber: t.currentSequenceNumber
                    });
                    return this.db.getQueryCache().updateQueryData(t, n)
                }, t.prototype.updateLimboDocument = function (t, e) {
                    return wa(t, e)
                }, t.prototype.forEachOrphanedDocument = function (t, e) {
                    var n, r = Es(t),
                        i = Ho.INVALID;
                    return r.iterate({
                        index: Ws.documentTargetsIndex
                    }, function (t, r) {
                        var o = t[0],
                            s = (t[1], r.path),
                            a = r.sequenceNumber;
                        0 === o ? (i !== Ho.INVALID && e(new Hr(os(n)), i), i = a, n = s) : i = Ho.INVALID
                    }).next(function () {
                        i !== Ho.INVALID && e(new Hr(os(n)), i)
                    })
                }, t.prototype.getCacheSize = function (t) {
                    return this.db.getRemoteDocumentCache().getSize(t)
                }, t
            }();

            function wa(t, e) {
                return Es(t).put(function (t, e) {
                    return new Ws(0, ns(t.path), e)
                }(e, t.currentSequenceNumber))
            }
            var Ea = function () {
                    function t(t, e) {
                        this.remoteDocumentCache = t, this.mutationQueue = e
                    }
                    return t.prototype.getDocument = function (t, e) {
                        var n = this;
                        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(t, e).next(function (r) {
                            return n.getDocumentInternal(t, e, r)
                        })
                    }, t.prototype.getDocumentInternal = function (t, e, n) {
                        return this.remoteDocumentCache.getEntry(t, e).next(function (t) {
                            for (var r = 0, i = n; r < i.length; r++) {
                                t = i[r].applyToLocalView(e, t)
                            }
                            return t
                        })
                    }, t.prototype.applyLocalMutationsToDocuments = function (t, e, n) {
                        var r = ao();
                        return e.forEach(function (t, e) {
                            for (var i = 0, o = n; i < o.length; i++) {
                                e = o[i].applyToLocalView(t, e)
                            }
                            r = r.insert(t, e)
                        }), r
                    }, t.prototype.getDocuments = function (t, e) {
                        var n = this;
                        return this.remoteDocumentCache.getEntries(t, e).next(function (e) {
                            return n.getLocalViewOfDocuments(t, e)
                        })
                    }, t.prototype.getLocalViewOfDocuments = function (t, e) {
                        var n = this;
                        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, e).next(function (r) {
                            var i = n.applyLocalMutationsToDocuments(t, e, r),
                                o = so();
                            return i.forEach(function (t, e) {
                                e || (e = new Jr(t, qi.forDeletedDoc())), o = o.insert(t, e)
                            }), o
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function (t, e) {
                        return Hr.isDocumentKey(e.path) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : this.getDocumentsMatchingCollectionQuery(t, e)
                    }, t.prototype.getDocumentsMatchingDocumentQuery = function (t, e) {
                        return this.getDocument(t, new Hr(e)).next(function (t) {
                            var e = co();
                            return t instanceof Yr && (e = e.insert(t.key, t)), e
                        })
                    }, t.prototype.getDocumentsMatchingCollectionQuery = function (t, e) {
                        var n, r = this;
                        return this.remoteDocumentCache.getDocumentsMatchingQuery(t, e).next(function (i) {
                            return n = i, r.mutationQueue.getAllMutationBatchesAffectingQuery(t, e)
                        }).next(function (t) {
                            for (var r = 0, i = t; r < i.length; r++)
                                for (var o = i[r], s = 0, a = o.mutations; s < a.length; s++) {
                                    var u = a[s],
                                        c = u.key;
                                    if (e.path.isImmediateParentOf(c.path)) {
                                        var h = n.get(c),
                                            l = u.applyToLocalView(h, h, o.localWriteTime);
                                        n = l instanceof Yr ? n.insert(c, l) : n.remove(c)
                                    }
                                }
                        }).next(function () {
                            return n.forEach(function (t, r) {
                                e.matches(r) || (n = n.remove(t))
                            }), n
                        })
                    }, t
                }(),
                Sa = function () {
                    function t() {
                        this.refsByKey = new Ui(Ta.compareByKey), this.refsByTarget = new Ui(Ta.compareByTargetId)
                    }
                    return t.prototype.isEmpty = function () {
                        return this.refsByKey.isEmpty()
                    }, t.prototype.addReference = function (t, e) {
                        var n = new Ta(t, e);
                        this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
                    }, t.prototype.addReferences = function (t, e) {
                        var n = this;
                        t.forEach(function (t) {
                            return n.addReference(t, e)
                        })
                    }, t.prototype.removeReference = function (t, e) {
                        this.removeRef(new Ta(t, e))
                    }, t.prototype.removeReferences = function (t, e) {
                        var n = this;
                        t.forEach(function (t) {
                            return n.removeReference(t, e)
                        })
                    }, t.prototype.removeReferencesForId = function (t) {
                        var e = this,
                            n = Hr.EMPTY,
                            r = new Ta(n, t),
                            i = new Ta(n, t + 1),
                            o = [];
                        return this.refsByTarget.forEachInRange([r, i], function (t) {
                            e.removeRef(t), o.push(t.key)
                        }), o
                    }, t.prototype.removeAllReferences = function () {
                        var t = this;
                        this.refsByKey.forEach(function (e) {
                            return t.removeRef(e)
                        })
                    }, t.prototype.removeRef = function (t) {
                        this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t)
                    }, t.prototype.referencesForId = function (t) {
                        var e = Hr.EMPTY,
                            n = new Ta(e, t),
                            r = new Ta(e, t + 1),
                            i = po();
                        return this.refsByTarget.forEachInRange([n, r], function (t) {
                            i = i.add(t.key)
                        }), i
                    }, t.prototype.containsKey = function (t) {
                        var e = new Ta(t, 0),
                            n = this.refsByKey.firstAfterOrEqual(e);
                        return null !== n && t.isEqual(n.key)
                    }, t
                }(),
                Ta = function () {
                    function t(t, e) {
                        this.key = t, this.targetOrBatchId = e
                    }
                    return t.compareByKey = function (t, e) {
                        return Hr.comparator(t.key, e.key) || Mr(t.targetOrBatchId, e.targetOrBatchId)
                    }, t.compareByTargetId = function (t, e) {
                        return Mr(t.targetOrBatchId, e.targetOrBatchId) || Hr.comparator(t.key, e.key)
                    }, t
                }(),
                Ia = function () {
                    function t(t, e) {
                        this.persistence = t, this.localViewReferences = new Sa, this.queryDataByTarget = {}, nr(t.started, "LocalStore was passed an unstarted persistence implementation"), this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences), this.mutationQueue = t.getMutationQueue(e), this.remoteDocuments = t.getRemoteDocumentCache(), this.queryCache = t.getQueryCache(), this.localDocuments = new Ea(this.remoteDocuments, this.mutationQueue)
                    }
                    return t.prototype.handleUserChange = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Handle user change", "readonly", function (n) {
                            var r;
                            return e.mutationQueue.getAllMutationBatches(n).next(function (i) {
                                return r = i, e.mutationQueue = e.persistence.getMutationQueue(t), e.localDocuments = new Ea(e.remoteDocuments, e.mutationQueue), e.mutationQueue.getAllMutationBatches(n)
                            }).next(function (t) {
                                for (var i = [], o = [], s = po(), a = 0, u = r; a < u.length; a++) {
                                    var c = u[a];
                                    i.push(c.batchId);
                                    for (var h = 0, l = c.mutations; h < l.length; h++) {
                                        var f = l[h];
                                        s = s.add(f.key)
                                    }
                                }
                                for (var d = 0, p = t; d < p.length; d++) {
                                    c = p[d];
                                    o.push(c.batchId);
                                    for (var m = 0, y = c.mutations; m < y.length; m++) {
                                        f = y[m];
                                        s = s.add(f.key)
                                    }
                                }
                                return e.localDocuments.getDocuments(n, s).next(function (t) {
                                    return {
                                        affectedDocuments: t,
                                        removedBatchIds: i,
                                        addedBatchIds: o
                                    }
                                })
                            })
                        })
                    }, t.prototype.localWrite = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Locally write mutations", "readwrite", function (n) {
                            var r, i = Ur.now();
                            return e.mutationQueue.addMutationBatch(n, i, t).next(function (t) {
                                var i = (r = t).keys();
                                return e.localDocuments.getDocuments(n, i)
                            }).next(function (t) {
                                return {
                                    batchId: r.batchId,
                                    changes: t
                                }
                            })
                        })
                    }, t.prototype.lookupMutationDocuments = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Lookup mutation documents", "readonly", function (n) {
                            return e.mutationQueue.lookupMutationKeys(n, t).next(function (t) {
                                return t ? e.localDocuments.getDocuments(n, t) : ls.resolve(null)
                            })
                        })
                    }, t.prototype.acknowledgeBatch = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (n) {
                            var r = t.batch.keys(),
                                i = e.remoteDocuments.newChangeBuffer();
                            return e.mutationQueue.acknowledgeBatch(n, t.batch, t.streamToken).next(function () {
                                return e.applyWriteToRemoteDocuments(n, t, i)
                            }).next(function () {
                                return i.apply(n)
                            }).next(function () {
                                return e.mutationQueue.performConsistencyCheck(n)
                            }).next(function () {
                                return e.localDocuments.getDocuments(n, r)
                            })
                        })
                    }, t.prototype.rejectBatch = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Reject batch", "readwrite-primary", function (n) {
                            var r;
                            return e.mutationQueue.lookupMutationBatch(n, t).next(function (t) {
                                return nr(null !== t, "Attempt to reject nonexistent batch!"), r = t.keys(), e.mutationQueue.removeMutationBatch(n, t)
                            }).next(function () {
                                return e.mutationQueue.performConsistencyCheck(n)
                            }).next(function () {
                                return e.localDocuments.getDocuments(n, r)
                            })
                        })
                    }, t.prototype.getLastStreamToken = function () {
                        var t = this;
                        return this.persistence.runTransaction("Get last stream token", "readonly", function (e) {
                            return t.mutationQueue.getLastStreamToken(e)
                        })
                    }, t.prototype.setLastStreamToken = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function (n) {
                            return e.mutationQueue.setLastStreamToken(n, t)
                        })
                    }, t.prototype.getLastRemoteSnapshotVersion = function () {
                        var t = this;
                        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function (e) {
                            return t.queryCache.getLastRemoteSnapshotVersion(e)
                        })
                    }, t.prototype.applyRemoteEvent = function (e) {
                        var n = this,
                            r = this.remoteDocuments.newChangeBuffer();
                        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function (i) {
                            var o = [],
                                s = po();
                            hr(e.targetChanges, function (r, a) {
                                var u = n.queryDataByTarget[r];
                                if (u) {
                                    a.addedDocuments.forEach(function (t) {
                                        s = s.add(t)
                                    }), a.modifiedDocuments.forEach(function (t) {
                                        s = s.add(t)
                                    }), o.push(n.queryCache.removeMatchingKeys(i, a.removedDocuments, r).next(function () {
                                        return n.queryCache.addMatchingKeys(i, a.addedDocuments, r)
                                    }));
                                    var c = a.resumeToken;
                                    if (c.length > 0) {
                                        var h = u;
                                        u = u.copy({
                                            resumeToken: c,
                                            snapshotVersion: e.snapshotVersion
                                        }), n.queryDataByTarget[r] = u, t.shouldPersistQueryData(h, u, a) && o.push(n.queryCache.updateQueryData(i, u))
                                    }
                                }
                            });
                            var a = so(),
                                u = po();
                            e.documentUpdates.forEach(function (t, e) {
                                u = u.add(t)
                            }), o.push(r.getEntries(i, u).next(function (t) {
                                e.documentUpdates.forEach(function (u, c) {
                                    var h = t.get(u);
                                    null == h || c.version.isEqual(qi.MIN) || s.has(c.key) && !h.hasPendingWrites || c.version.compareTo(h.version) >= 0 ? (r.addEntry(c), a = a.insert(u, c)) : Zn("LocalStore", "Ignoring outdated watch update for ", u, ". Current version:", h.version, " Watch version:", c.version), e.resolvedLimboDocuments.has(u) && o.push(n.persistence.referenceDelegate.updateLimboDocument(i, u))
                                })
                            }));
                            var c = e.snapshotVersion;
                            if (!c.isEqual(qi.MIN)) {
                                var h = n.queryCache.getLastRemoteSnapshotVersion(i).next(function (t) {
                                    return nr(c.compareTo(t) >= 0, "Watch stream reverted to previous snapshot?? " + c + " < " + t), n.queryCache.setTargetsMetadata(i, i.currentSequenceNumber, c)
                                });
                                o.push(h)
                            }
                            return ls.waitFor(o).next(function () {
                                return r.apply(i)
                            }).next(function () {
                                return n.localDocuments.getLocalViewOfDocuments(i, a)
                            })
                        })
                    }, t.shouldPersistQueryData = function (t, e, n) {
                        return 0 !== e.resumeToken.length && (0 === t.resumeToken.length || (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0))
                    }, t.prototype.notifyLocalViewChanges = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (n) {
                            return ls.forEach(t, function (t) {
                                return e.localViewReferences.addReferences(t.addedKeys, t.targetId), e.localViewReferences.removeReferences(t.removedKeys, t.targetId), ls.forEach(t.removedKeys, function (t) {
                                    return e.persistence.referenceDelegate.removeReference(n, t)
                                })
                            })
                        })
                    }, t.prototype.nextMutationBatch = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Get next mutation batch", "readonly", function (n) {
                            return void 0 === t && (t = -1), e.mutationQueue.getNextMutationBatchAfterBatchId(n, t)
                        })
                    }, t.prototype.readDocument = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("read document", "readonly", function (n) {
                            return e.localDocuments.getDocument(n, t)
                        })
                    }, t.prototype.allocateQuery = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Allocate query", "readwrite", function (n) {
                            var r;
                            return e.queryCache.getQueryData(n, t).next(function (i) {
                                return i ? (r = i, ls.resolve()) : e.queryCache.allocateTargetId(n).next(function (i) {
                                    return r = new Bi(t, i, Ci.Listen, n.currentSequenceNumber), e.queryCache.addQueryData(n, r)
                                })
                            }).next(function () {
                                return nr(!e.queryDataByTarget[r.targetId], "Tried to allocate an already allocated query: " + t), e.queryDataByTarget[r.targetId] = r, r
                            })
                        })
                    }, t.prototype.releaseQuery = function (t, e) {
                        var n = this,
                            r = e ? "readwrite" : "readwrite-primary";
                        return this.persistence.runTransaction("Release query", r, function (r) {
                            return n.queryCache.getQueryData(r, t).next(function (i) {
                                nr(null != i, "Tried to release nonexistent query: " + t);
                                var o = i.targetId,
                                    s = n.queryDataByTarget[o],
                                    a = n.localViewReferences.removeReferencesForId(o);
                                return delete n.queryDataByTarget[o], e ? ls.resolve() : ls.forEach(a, function (t) {
                                    return n.persistence.referenceDelegate.removeReference(r, t)
                                }).next(function () {
                                    return n.persistence.referenceDelegate.removeTarget(r, s)
                                })
                            })
                        })
                    }, t.prototype.executeQuery = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Execute query", "readonly", function (n) {
                            return e.localDocuments.getDocumentsMatchingQuery(n, t)
                        })
                    }, t.prototype.remoteDocumentKeys = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Remote document keys", "readonly", function (n) {
                            return e.queryCache.getMatchingKeysForTargetId(n, t)
                        })
                    }, t.prototype.getActiveClients = function () {
                        return this.persistence.getActiveClients()
                    }, t.prototype.removeCachedMutationBatchMetadata = function (t) {
                        this.mutationQueue.removeCachedMutationKeys(t)
                    }, t.prototype.setNetworkEnabled = function (t) {
                        this.persistence.setNetworkEnabled(t)
                    }, t.prototype.applyWriteToRemoteDocuments = function (t, e, n) {
                        var r = this,
                            i = e.batch,
                            o = i.keys(),
                            s = ls.resolve();
                        return o.forEach(function (r) {
                            s = s.next(function () {
                                return n.getEntry(t, r)
                            }).next(function (t) {
                                var o = t,
                                    s = e.docVersions.get(r);
                                nr(null !== s, "ackVersions should contain every doc in the write."), (!o || o.version.compareTo(s) < 0) && ((o = i.applyToRemoteDocument(r, o, e)) ? n.addEntry(o) : nr(!t, "Mutation batch " + i + " applied to document " + t + " resulted in null"))
                            })
                        }), s.next(function () {
                            return r.mutationQueue.removeMutationBatch(t, i)
                        })
                    }, t.prototype.collectGarbage = function (t) {
                        var e = this;
                        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
                            return t.collect(n, e.queryDataByTarget)
                        })
                    }, t.prototype.getQueryForTarget = function (t) {
                        var e = this;
                        return this.queryDataByTarget[t] ? Promise.resolve(this.queryDataByTarget[t].query) : this.persistence.runTransaction("Get query data", "readonly", function (n) {
                            return e.queryCache.getQueryDataForTarget(n, t).next(function (t) {
                                return t ? t.query : null
                            })
                        })
                    }, t.prototype.getNewDocumentChanges = function () {
                        var t = this;
                        return this.persistence.runTransaction("Get new document changes", "readonly", function (e) {
                            return t.remoteDocuments.getNewDocumentChanges(e)
                        })
                    }, t.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, t
                }(),
                Ca = function () {
                    function t(t) {
                        this.referenceDelegate = t, this.mutationQueue = [], this.nextBatchId = 1, this.lastStreamToken = ir(), this.batchesByDocumentKey = new Ui(Ta.compareByKey)
                    }
                    return t.prototype.checkEmpty = function (t) {
                        return ls.resolve(0 === this.mutationQueue.length)
                    }, t.prototype.acknowledgeBatch = function (t, e, n) {
                        var r = e.batchId,
                            i = this.indexOfExistingBatchId(r, "acknowledged");
                        nr(0 === i, "Can only acknowledge the first batch in the mutation queue");
                        var o = this.mutationQueue[i];
                        return nr(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, ls.resolve()
                    }, t.prototype.getLastStreamToken = function (t) {
                        return ls.resolve(this.lastStreamToken)
                    }, t.prototype.setLastStreamToken = function (t, e) {
                        return this.lastStreamToken = e, ls.resolve()
                    }, t.prototype.addMutationBatch = function (t, e, n) {
                        nr(0 !== n.length, "Mutation batches should not be empty");
                        var r = this.nextBatchId;
                        (this.nextBatchId++, this.mutationQueue.length > 0) && nr(this.mutationQueue[this.mutationQueue.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order");
                        var i = new as(r, e, n);
                        this.mutationQueue.push(i);
                        for (var o = 0, s = n; o < s.length; o++) {
                            var a = s[o];
                            this.batchesByDocumentKey = this.batchesByDocumentKey.add(new Ta(a.key, r))
                        }
                        return ls.resolve(i)
                    }, t.prototype.lookupMutationBatch = function (t, e) {
                        return ls.resolve(this.findMutationBatch(e))
                    }, t.prototype.lookupMutationKeys = function (t, e) {
                        var n = this.findMutationBatch(e);
                        return nr(null != n, "Failed to find local mutation batch."), ls.resolve(n.keys())
                    }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
                        var n = e + 1,
                            r = this.indexOfBatchId(n),
                            i = r < 0 ? 0 : r;
                        return ls.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null)
                    }, t.prototype.getAllMutationBatches = function (t) {
                        return ls.resolve(this.mutationQueue.slice())
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
                        var n = this,
                            r = new Ta(e, 0),
                            i = new Ta(e, Number.POSITIVE_INFINITY),
                            o = [];
                        return this.batchesByDocumentKey.forEachInRange([r, i], function (t) {
                            nr(e.isEqual(t.key), "Should only iterate over a single key's batches");
                            var r = n.findMutationBatch(t.targetOrBatchId);
                            nr(null !== r, "Batches in the index must exist in the main table"), o.push(r)
                        }), ls.resolve(o)
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) {
                        var n = this,
                            r = new Ui(Mr);
                        return e.forEach(function (t) {
                            var e = new Ta(t, 0),
                                i = new Ta(t, Number.POSITIVE_INFINITY);
                            n.batchesByDocumentKey.forEachInRange([e, i], function (e) {
                                nr(t.isEqual(e.key), "For each key, should only iterate over a single key's batches"), r = r.add(e.targetOrBatchId)
                            })
                        }), ls.resolve(this.findMutationBatches(r))
                    }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
                        var n = e.path,
                            r = n.length + 1,
                            i = n;
                        Hr.isDocumentKey(i) || (i = i.child(""));
                        var o = new Ta(new Hr(i), 0),
                            s = new Ui(Mr);
                        return this.batchesByDocumentKey.forEachWhile(function (t) {
                            var e = t.key.path;
                            return !!n.isPrefixOf(e) && (e.length === r && (s = s.add(t.targetOrBatchId)), !0)
                        }, o), ls.resolve(this.findMutationBatches(s))
                    }, t.prototype.findMutationBatches = function (t) {
                        var e = this,
                            n = [];
                        return t.forEach(function (t) {
                            var r = e.findMutationBatch(t);
                            null !== r && n.push(r)
                        }), n
                    }, t.prototype.removeMutationBatch = function (t, e) {
                        var n = this;
                        nr(0 === this.indexOfExistingBatchId(e.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.mutationQueue.shift();
                        var r = this.batchesByDocumentKey;
                        return ls.forEach(e.mutations, function (i) {
                            var o = new Ta(i.key, e.batchId);
                            return r = r.delete(o), n.referenceDelegate.removeMutationReference(t, i.key)
                        }).next(function () {
                            n.batchesByDocumentKey = r
                        })
                    }, t.prototype.removeCachedMutationKeys = function (t) {}, t.prototype.containsKey = function (t, e) {
                        var n = new Ta(e, 0),
                            r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                        return ls.resolve(e.isEqual(r && r.key))
                    }, t.prototype.performConsistencyCheck = function (t) {
                        return 0 === this.mutationQueue.length && nr(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), ls.resolve()
                    }, t.prototype.indexOfExistingBatchId = function (t, e) {
                        var n = this.indexOfBatchId(t);
                        return nr(n >= 0 && n < this.mutationQueue.length, "Batches must exist to be " + e), n
                    }, t.prototype.indexOfBatchId = function (t) {
                        return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId
                    }, t.prototype.findMutationBatch = function (t) {
                        var e = this.indexOfBatchId(t);
                        if (e < 0 || e >= this.mutationQueue.length) return null;
                        var n = this.mutationQueue[e];
                        return nr(n.batchId === t, "If found batch must match"), n
                    }, t
                }(),
                Da = function () {
                    function t(t) {
                        this.persistence = t, this.queries = new Ss(function (t) {
                            return t.canonicalId()
                        }), this.lastRemoteSnapshotVersion = qi.MIN, this.highestTargetId = 0, this.highestSequenceNumber = 0, this.references = new Sa, this.targetCount = 0, this.targetIdGenerator = hs.forQueryCache()
                    }
                    return t.prototype.getTargetCount = function (t) {
                        return ls.resolve(this.targetCount)
                    }, t.prototype.forEachTarget = function (t, e) {
                        return this.queries.forEach(function (t, n) {
                            return e(n)
                        }), ls.resolve()
                    }, t.prototype.getLastRemoteSnapshotVersion = function (t) {
                        return ls.resolve(this.lastRemoteSnapshotVersion)
                    }, t.prototype.getHighestSequenceNumber = function (t) {
                        return ls.resolve(this.highestSequenceNumber)
                    }, t.prototype.allocateTargetId = function (t) {
                        var e = this.targetIdGenerator.after(this.highestTargetId);
                        return this.highestTargetId = e, ls.resolve(e)
                    }, t.prototype.setTargetsMetadata = function (t, e, n) {
                        return n && (this.lastRemoteSnapshotVersion = n), e > this.highestSequenceNumber && (this.highestSequenceNumber = e), ls.resolve()
                    }, t.prototype.saveQueryData = function (t) {
                        this.queries.set(t.query, t);
                        var e = t.targetId;
                        e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.highestSequenceNumber && (this.highestSequenceNumber = t.sequenceNumber)
                    }, t.prototype.addQueryData = function (t, e) {
                        return nr(!this.queries.has(e.query), "Adding a query that already exists"), this.saveQueryData(e), this.targetCount += 1, ls.resolve()
                    }, t.prototype.updateQueryData = function (t, e) {
                        return nr(this.queries.has(e.query), "Updating a non-existent query"), this.saveQueryData(e), ls.resolve()
                    }, t.prototype.removeQueryData = function (t, e) {
                        return nr(this.targetCount > 0, "Removing a target from an empty cache"), nr(this.queries.has(e.query), "Removing a non-existent target from the cache"), this.queries.delete(e.query), this.references.removeReferencesForId(e.targetId), this.targetCount -= 1, ls.resolve()
                    }, t.prototype.removeTargets = function (t, e, n) {
                        var r = this,
                            i = 0,
                            o = [];
                        return this.queries.forEach(function (s, a) {
                            a.sequenceNumber <= e && !n[a.targetId] && (r.queries.delete(s), o.push(r.removeMatchingKeysForTargetId(t, a.targetId)), i++)
                        }), ls.waitFor(o).next(function () {
                            return i
                        })
                    }, t.prototype.getQueryCount = function (t) {
                        return ls.resolve(this.targetCount)
                    }, t.prototype.getQueryData = function (t, e) {
                        var n = this.queries.get(e) || null;
                        return ls.resolve(n)
                    }, t.prototype.getQueryDataForTarget = function (t, e) {
                        return er("Not yet implemented.")
                    }, t.prototype.addMatchingKeys = function (t, e, n) {
                        this.references.addReferences(e, n);
                        var r = this.persistence.referenceDelegate,
                            i = [];
                        return r && e.forEach(function (e) {
                            i.push(r.addReference(t, e))
                        }), ls.waitFor(i)
                    }, t.prototype.removeMatchingKeys = function (t, e, n) {
                        this.references.removeReferences(e, n);
                        var r = this.persistence.referenceDelegate,
                            i = [];
                        return r && e.forEach(function (e) {
                            i.push(r.removeReference(t, e))
                        }), ls.waitFor(i)
                    }, t.prototype.removeMatchingKeysForTargetId = function (t, e) {
                        return this.references.removeReferencesForId(e), ls.resolve()
                    }, t.prototype.getMatchingKeysForTargetId = function (t, e) {
                        var n = this.references.referencesForId(e);
                        return ls.resolve(n)
                    }, t.prototype.containsKey = function (t, e) {
                        return ls.resolve(this.references.containsKey(e))
                    }, t
                }();
            var Na, Aa = function () {
                    function t(t) {
                        this.sizer = t, this.docs = new $r(Hr.comparator), this.newDocumentChanges = po(), this.size = 0
                    }
                    return t.prototype.addEntries = function (t, e, n) {
                        for (var r = 0, i = e; r < i.length; r++) {
                            var o = i[r],
                                s = o.maybeDocument.key;
                            this.docs = this.docs.insert(s, o), this.newDocumentChanges = this.newDocumentChanges.add(s)
                        }
                        return this.size += n, ls.resolve()
                    }, t.prototype.removeEntry = function (t, e) {
                        var n = this.docs.get(e);
                        return n ? (this.docs = this.docs.remove(e), this.size -= n.size, ls.resolve(n.size)) : ls.resolve(0)
                    }, t.prototype.getEntry = function (t, e) {
                        var n = this.docs.get(e);
                        return ls.resolve(n ? n.maybeDocument : null)
                    }, t.prototype.getSizedEntry = function (t, e) {
                        return ls.resolve(this.docs.get(e))
                    }, t.prototype.getEntries = function (t, e) {
                        var n = this,
                            r = ao();
                        return e.forEach(function (t) {
                            var e = n.docs.get(t);
                            r = r.insert(t, e ? e.maybeDocument : null)
                        }), ls.resolve(r)
                    }, t.prototype.getSizedEntries = function (t, e) {
                        var n = this,
                            r = ao(),
                            i = new $r(Hr.comparator);
                        return e.forEach(function (t) {
                            var e = n.docs.get(t);
                            r = r.insert(t, e ? e.maybeDocument : null), i = i.insert(t, e ? e.size : 0)
                        }), ls.resolve({
                            maybeDocuments: r,
                            sizeMap: i
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function (t, e) {
                        for (var n = co(), r = new Hr(e.path.child("")), i = this.docs.getIteratorFrom(r); i.hasNext();) {
                            var o = i.getNext(),
                                s = o.key,
                                a = o.value.maybeDocument;
                            if (!e.path.isPrefixOf(s.path)) break;
                            a instanceof Yr && e.matches(a) && (n = n.insert(a.key, a))
                        }
                        return ls.resolve(n)
                    }, t.prototype.forEachDocumentKey = function (t, e) {
                        return ls.forEach(this.docs, function (t) {
                            return e(t)
                        })
                    }, t.prototype.getNewDocumentChanges = function (t) {
                        var e = this,
                            n = so();
                        return this.newDocumentChanges.forEach(function (t) {
                            var r = e.docs.get(t),
                                i = r ? r.maybeDocument : new Jr(t, qi.forDeletedDoc());
                            n = n.insert(t, i)
                        }), this.newDocumentChanges = po(), ls.resolve(n)
                    }, t.prototype.newChangeBuffer = function () {
                        return new ka(this.sizer, this)
                    }, t.prototype.getSize = function (t) {
                        return ls.resolve(this.size)
                    }, t
                }(),
                ka = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.sizer = e, r.documentCache = n, r
                    }
                    return s(e, t), e.prototype.applyChanges = function (t) {
                        var e = this,
                            n = 0,
                            r = [];
                        return this.assertChanges().forEach(function (t, i) {
                            var o = e.documentSizes.get(t);
                            nr(void 0 !== o, "Attempting to change document " + t.toString() + " without having read it first");
                            var s = e.sizer(i);
                            n += s - o, r.push({
                                maybeDocument: i,
                                size: s
                            })
                        }), this.documentCache.addEntries(t, r, n)
                    }, e.prototype.getFromCache = function (t, e) {
                        return this.documentCache.getSizedEntry(t, e)
                    }, e.prototype.getAllFromCache = function (t, e) {
                        return this.documentCache.getSizedEntries(t, e)
                    }, e
                }(Ts),
                Ra = function () {
                    function t(t, e) {
                        var n = this;
                        this.clientId = t, this.mutationQueues = {}, this.listenSequence = new Ho(0), this._started = !1, this._started = !0, this.referenceDelegate = e(this), this.queryCache = new Da(this);
                        this.remoteDocumentCache = new Aa(function (t) {
                            return n.referenceDelegate.documentSize(t)
                        })
                    }
                    return t.createLruPersistence = function (e, n, r) {
                        return new t(e, function (t) {
                            return new _a(t, new ra(n), r)
                        })
                    }, t.createEagerPersistence = function (e) {
                        return new t(e, function (t) {
                            return new Oa(t)
                        })
                    }, t.prototype.shutdown = function (t) {
                        return this._started = !1, Promise.resolve()
                    }, Object.defineProperty(t.prototype, "started", {
                        get: function () {
                            return this._started
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getActiveClients = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                return [2, [this.clientId]]
                            })
                        })
                    }, t.prototype.setPrimaryStateListener = function (t) {
                        return t(!0)
                    }, t.prototype.setNetworkEnabled = function (t) {}, t.prototype.getMutationQueue = function (t) {
                        var e = this.mutationQueues[t.toKey()];
                        return e || (e = new Ca(this.referenceDelegate), this.mutationQueues[t.toKey()] = e), e
                    }, t.prototype.getQueryCache = function () {
                        return this.queryCache
                    }, t.prototype.getRemoteDocumentCache = function () {
                        return this.remoteDocumentCache
                    }, t.prototype.runTransaction = function (t, e, n) {
                        var r = this;
                        Zn("MemoryPersistence", "Starting transaction:", t);
                        var i = new Ma(this.listenSequence.next());
                        return this.referenceDelegate.onTransactionStarted(), n(i).next(function (t) {
                            return r.referenceDelegate.onTransactionCommitted(i).next(function () {
                                return t
                            })
                        }).toPromise()
                    }, t.prototype.mutationQueuesContainKey = function (t, e) {
                        return ls.or((n = this.mutationQueues, r = [], lr(n, function (t, e) {
                            return r.push(e)
                        }), r).map(function (n) {
                            return function () {
                                return n.containsKey(t, e)
                            }
                        }));
                        var n, r
                    }, t
                }(),
                Ma = function () {
                    return function (t) {
                        this.currentSequenceNumber = t
                    }
                }(),
                Oa = function () {
                    function t(t) {
                        this.persistence = t
                    }
                    return t.prototype.setInMemoryPins = function (t) {
                        this.inMemoryPins = t
                    }, t.prototype.addReference = function (t, e) {
                        return this.orphanedDocuments.delete(e), ls.resolve()
                    }, t.prototype.removeReference = function (t, e) {
                        return this.orphanedDocuments.add(e), ls.resolve()
                    }, t.prototype.removeMutationReference = function (t, e) {
                        return this.orphanedDocuments.add(e), ls.resolve()
                    }, t.prototype.removeTarget = function (t, e) {
                        var n = this,
                            r = this.persistence.getQueryCache();
                        return r.getMatchingKeysForTargetId(t, e.targetId).next(function (t) {
                            t.forEach(function (t) {
                                return n.orphanedDocuments.add(t)
                            })
                        }).next(function () {
                            return r.removeQueryData(t, e)
                        })
                    }, t.prototype.onTransactionStarted = function () {
                        this.orphanedDocuments = new Set
                    }, t.prototype.onTransactionCommitted = function (t) {
                        var e = this,
                            n = this.persistence.getRemoteDocumentCache();
                        return ls.forEach(this.orphanedDocuments, function (r) {
                            return e.isReferenced(t, r).next(function (e) {
                                return e ? ls.resolve() : n.removeEntry(t, r).next(function () {})
                            })
                        })
                    }, t.prototype.updateLimboDocument = function (t, e) {
                        var n = this;
                        return this.isReferenced(t, e).next(function (t) {
                            t ? n.orphanedDocuments.delete(e) : n.orphanedDocuments.add(e)
                        })
                    }, t.prototype.documentSize = function (t) {
                        return 0
                    }, t.prototype.isReferenced = function (t, e) {
                        var n = this;
                        return ls.or([function () {
                            return n.persistence.getQueryCache().containsKey(t, e)
                        }, function () {
                            return n.persistence.mutationQueuesContainKey(t, e)
                        }, function () {
                            return ls.resolve(n.inMemoryPins.containsKey(e))
                        }])
                    }, t
                }(),
                _a = function () {
                    function t(t, e, n) {
                        this.persistence = t, this.serializer = e, this.orphanedSequenceNumbers = new Ss(function (t) {
                            return ns(t.path)
                        }), this.garbageCollector = new ca(this, n)
                    }
                    return t.prototype.onTransactionStarted = function () {}, t.prototype.onTransactionCommitted = function (t) {
                        return ls.resolve()
                    }, t.prototype.forEachTarget = function (t, e) {
                        return this.persistence.getQueryCache().forEachTarget(t, e)
                    }, t.prototype.getSequenceNumberCount = function (t) {
                        var e = this.orphanedDocumentCount(t);
                        return this.persistence.getQueryCache().getTargetCount(t).next(function (t) {
                            return e.next(function (e) {
                                return t + e
                            })
                        })
                    }, t.prototype.orphanedDocumentCount = function (t) {
                        var e = 0;
                        return this.forEachOrphanedDocumentSequenceNumber(t, function (t) {
                            e++
                        }).next(function () {
                            return e
                        })
                    }, t.prototype.forEachOrphanedDocumentSequenceNumber = function (t, e) {
                        var n = this;
                        return ls.forEach(this.orphanedSequenceNumbers, function (r, i) {
                            return n.isPinned(t, r, i).next(function (t) {
                                return t ? ls.resolve() : e(i)
                            })
                        })
                    }, t.prototype.setInMemoryPins = function (t) {
                        this.inMemoryPins = t
                    }, t.prototype.removeTargets = function (t, e, n) {
                        return this.persistence.getQueryCache().removeTargets(t, e, n)
                    }, t.prototype.removeOrphanedDocuments = function (t, e) {
                        var n = this,
                            r = 0,
                            i = this.persistence.getRemoteDocumentCache();
                        return i.forEachDocumentKey(t, function (o) {
                            return n.isPinned(t, o, e).next(function (e) {
                                return e ? ls.resolve() : (r++, i.removeEntry(t, o).next())
                            })
                        }).next(function () {
                            return r
                        })
                    }, t.prototype.removeMutationReference = function (t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), ls.resolve()
                    }, t.prototype.removeTarget = function (t, e) {
                        var n = e.copy({
                            sequenceNumber: t.currentSequenceNumber
                        });
                        return this.persistence.getQueryCache().updateQueryData(t, n)
                    }, t.prototype.addReference = function (t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), ls.resolve()
                    }, t.prototype.removeReference = function (t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), ls.resolve()
                    }, t.prototype.updateLimboDocument = function (t, e) {
                        return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), ls.resolve()
                    }, t.prototype.documentSize = function (t) {
                        var e, n = this.serializer.toDbRemoteDocument(t);
                        if (n.document) e = n.document;
                        else if (n.unknownDocument) e = n.unknownDocument;
                        else {
                            if (!n.noDocument) throw er("Unknown remote document type");
                            e = n.noDocument
                        }
                        return JSON.stringify(e).length
                    }, t.prototype.isPinned = function (t, e, n) {
                        var r = this;
                        return ls.or([function () {
                            return r.persistence.mutationQueuesContainKey(t, e)
                        }, function () {
                            return ls.resolve(r.inMemoryPins.containsKey(e))
                        }, function () {
                            return r.persistence.getQueryCache().containsKey(t, e)
                        }, function () {
                            var t = r.orphanedSequenceNumbers.get(e);
                            return ls.resolve(void 0 !== t && t > n)
                        }])
                    }, t.prototype.getCacheSize = function (t) {
                        return this.persistence.getRemoteDocumentCache().getSize(t)
                    }, t
                }(),
                Pa = function () {
                    function t(t, e, n, r, i) {
                        this.queue = t, this.timerId = e, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset()
                    }
                    return t.prototype.reset = function () {
                        this.currentBaseMs = 0
                    }, t.prototype.resetToMax = function () {
                        this.currentBaseMs = this.maxDelayMs
                    }, t.prototype.backoffAndRun = function (t) {
                        var e = this;
                        this.cancel();
                        var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()),
                            r = Math.max(0, Date.now() - this.lastAttemptTime),
                            i = Math.max(0, n - r);
                        this.currentBaseMs > 0 && Zn("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function () {
                            return e.lastAttemptTime = Date.now(), t()
                        }), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs)
                    }, t.prototype.cancel = function () {
                        null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null)
                    }, t.prototype.jitterDelayMs = function () {
                        return (Math.random() - .5) * this.currentBaseMs
                    }, t
                }();
            ! function (t) {
                t[t.Initial = 0] = "Initial", t[t.Starting = 1] = "Starting", t[t.Open = 2] = "Open", t[t.Error = 3] = "Error", t[t.Backoff = 4] = "Backoff"
            }(Na || (Na = {}));
            var La, xa, qa = 1e3,
                Fa = 6e4,
                Ba = 1.5,
                Ua = function () {
                    function t(t, e, n, r, i, o) {
                        this.queue = t, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = Na.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new Pa(t, e, qa, Ba, Fa)
                    }
                    return t.prototype.isStarted = function () {
                        return this.state === Na.Starting || this.state === Na.Open || this.state === Na.Backoff
                    }, t.prototype.isOpen = function () {
                        return this.state === Na.Open
                    }, t.prototype.start = function () {
                        this.state !== Na.Error ? (nr(this.state === Na.Initial, "Already started"), this.auth()) : this.performBackoff()
                    }, t.prototype.stop = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.isStarted() ? [4, this.close(Na.Initial)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.inhibitBackoff = function () {
                        nr(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = Na.Initial, this.backoff.reset()
                    }, t.prototype.markIdle = function () {
                        var t = this;
                        this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, 6e4, function () {
                            return t.handleIdleCloseTimer()
                        }))
                    }, t.prototype.sendRequest = function (t) {
                        this.cancelIdleCheck(), this.stream.send(t)
                    }, t.prototype.handleIdleCloseTimer = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                return this.isOpen() ? [2, this.close(Na.Initial)] : [2]
                            })
                        })
                    }, t.prototype.cancelIdleCheck = function () {
                        this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null)
                    }, t.prototype.close = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return nr(this.isStarted(), "Only started streams should be closed."), nr(t === Na.Error || Ti(e), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, t !== Na.Error ? this.backoff.reset() : e && e.code === or.RESOURCE_EXHAUSTED ? ($n(e.toString()), $n("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : e && e.code === or.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = t, [4, this.listener.onClose(e)];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.tearDown = function () {}, t.prototype.auth = function () {
                        var t = this;
                        nr(this.state === Na.Initial, "Must be in initial state to auth"), this.state = Na.Starting;
                        var e = this.getCloseGuardedDispatcher(this.closeCount),
                            n = this.closeCount;
                        this.credentialsProvider.getToken().then(function (e) {
                            t.closeCount === n && t.startStream(e)
                        }, function (n) {
                            e(function () {
                                var e = new sr(or.UNKNOWN, "Fetching auth token failed: " + n.message);
                                return t.handleStreamClose(e)
                            })
                        })
                    }, t.prototype.startStream = function (t) {
                        var e = this;
                        nr(this.state === Na.Starting, "Trying to start stream in a non-starting state");
                        var n = this.getCloseGuardedDispatcher(this.closeCount);
                        this.stream = this.startRpc(t), this.stream.onOpen(function () {
                            n(function () {
                                return nr(e.state === Na.Starting, "Expected stream to be in state Starting, but was " + e.state), e.state = Na.Open, e.listener.onOpen()
                            })
                        }), this.stream.onClose(function (t) {
                            n(function () {
                                return e.handleStreamClose(t)
                            })
                        }), this.stream.onMessage(function (t) {
                            n(function () {
                                return e.onMessage(t)
                            })
                        })
                    }, t.prototype.performBackoff = function () {
                        var t = this;
                        nr(this.state === Na.Error, "Should only perform backoff when in Error state"), this.state = Na.Backoff, this.backoff.backoffAndRun(function () {
                            return a(t, void 0, void 0, function () {
                                return u(this, function (t) {
                                    return nr(this.state === Na.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = Na.Initial, this.start(), nr(this.isStarted(), "PersistentStream should have started"), [2]
                                })
                            })
                        })
                    }, t.prototype.handleStreamClose = function (t) {
                        return nr(this.isStarted(), "Can't handle server close on non-started stream"), Zn("PersistentStream", "close with error: " + t), this.stream = null, this.close(Na.Error, t)
                    }, t.prototype.getCloseGuardedDispatcher = function (t) {
                        var e = this;
                        return function (n) {
                            e.queue.enqueueAndForget(function () {
                                return e.closeCount === t ? n() : (Zn("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                            })
                        }
                    }, t
                }(),
                Va = function (t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, Go.ListenStreamConnectionBackoff, Go.ListenStreamIdle, n, r, o) || this;
                        return s.serializer = i, s
                    }
                    return s(e, t), e.prototype.startRpc = function (t) {
                        return this.connection.openStream("Listen", t)
                    }, e.prototype.onMessage = function (t) {
                        this.backoff.reset();
                        var e = this.serializer.fromWatchChange(t),
                            n = this.serializer.versionFromListenResponse(t);
                        return this.listener.onWatchChange(e, n)
                    }, e.prototype.watch = function (t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t);
                        var n = this.serializer.toListenRequestLabels(t);
                        n && (e.labels = n), this.sendRequest(e)
                    }, e.prototype.unwatch = function (t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e)
                    }, e
                }(Ua),
                Qa = function (t) {
                    function e(e, n, r, i, o) {
                        var s = t.call(this, e, Go.WriteStreamConnectionBackoff, Go.WriteStreamIdle, n, r, o) || this;
                        return s.serializer = i, s.handshakeComplete_ = !1, s
                    }
                    return s(e, t), Object.defineProperty(e.prototype, "handshakeComplete", {
                        get: function () {
                            return this.handshakeComplete_
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.start = function () {
                        this.handshakeComplete_ = !1, t.prototype.start.call(this)
                    }, e.prototype.tearDown = function () {
                        this.handshakeComplete_ && this.writeMutations([])
                    }, e.prototype.startRpc = function (t) {
                        return this.connection.openStream("Write", t)
                    }, e.prototype.onMessage = function (t) {
                        if (nr(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.handshakeComplete_) {
                            this.backoff.reset();
                            var e = this.serializer.fromWriteResults(t.writeResults, t.commitTime),
                                n = this.serializer.fromVersion(t.commitTime);
                            return this.listener.onMutationResult(n, e)
                        }
                        return nr(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_ = !0, this.listener.onHandshakeComplete()
                    }, e.prototype.writeHandshake = function () {
                        nr(this.isOpen(), "Writing handshake requires an opened stream"), nr(!this.handshakeComplete_, "Handshake already completed");
                        var t = {};
                        t.database = this.serializer.encodedDatabaseId, this.sendRequest(t)
                    }, e.prototype.writeMutations = function (t) {
                        var e = this;
                        nr(this.isOpen(), "Writing mutations requires an opened stream"), nr(this.handshakeComplete_, "Handshake must be complete before writing mutations"), nr(this.lastStreamToken.length > 0, "Trying to write mutation without a token");
                        var n = {
                            streamToken: this.lastStreamToken,
                            writes: t.map(function (t) {
                                return e.serializer.toMutation(t)
                            })
                        };
                        this.sendRequest(n)
                    }, e
                }(Ua),
                Ka = function () {
                    function t(t, e, n, r) {
                        this.queue = t, this.connection = e, this.credentials = n, this.serializer = r
                    }
                    return t.prototype.newPersistentWriteStream = function (t) {
                        return new Qa(this.queue, this.connection, this.credentials, this.serializer, t)
                    }, t.prototype.newPersistentWatchStream = function (t) {
                        return new Va(this.queue, this.connection, this.credentials, this.serializer, t)
                    }, t.prototype.commit = function (t) {
                        var e = this,
                            n = {
                                database: this.serializer.encodedDatabaseId,
                                writes: t.map(function (t) {
                                    return e.serializer.toMutation(t)
                                })
                            };
                        return this.invokeRPC("Commit", n).then(function (t) {
                            return e.serializer.fromWriteResults(t.writeResults, t.commitTime)
                        })
                    }, t.prototype.lookup = function (t) {
                        var e = this,
                            n = {
                                database: this.serializer.encodedDatabaseId,
                                documents: t.map(function (t) {
                                    return e.serializer.toName(t)
                                })
                            };
                        return this.invokeStreamingRPC("BatchGetDocuments", n).then(function (n) {
                            var r = so();
                            n.forEach(function (t) {
                                var n = e.serializer.fromMaybeDocument(t);
                                r = r.insert(n.key, n)
                            });
                            var i = [];
                            return t.forEach(function (t) {
                                var e = r.get(t);
                                nr(!!e, "Missing entity in write response for " + t), i.push(e)
                            }), i
                        })
                    }, t.prototype.invokeRPC = function (t, e) {
                        var n = this;
                        return this.credentials.getToken().then(function (r) {
                            return n.connection.invokeRPC(t, e, r)
                        }).catch(function (t) {
                            throw t.code === or.UNAUTHENTICATED && n.credentials.invalidateToken(), t
                        })
                    }, t.prototype.invokeStreamingRPC = function (t, e) {
                        var n = this;
                        return this.credentials.getToken().then(function (r) {
                            return n.connection.invokeStreamingRPC(t, e, r)
                        }).catch(function (t) {
                            throw t.code === or.UNAUTHENTICATED && n.credentials.invalidateToken(), t
                        })
                    }, t
                }(),
                Wa = function () {
                    function t(t) {
                        this.datastore = t, this.readVersions = lo(), this.mutations = [], this.committed = !1
                    }
                    return t.prototype.recordVersion = function (t) {
                        var e;
                        if (t instanceof Yr) e = t.version;
                        else {
                            if (!(t instanceof Jr)) throw er("Document in a transaction was a " + t.constructor.name);
                            e = qi.forDeletedDoc()
                        }
                        var n = this.readVersions.get(t.key);
                        if (null !== n) {
                            if (!e.isEqual(n)) throw new sr(or.ABORTED, "Document version changed between two reads.")
                        } else this.readVersions = this.readVersions.insert(t.key, e)
                    }, t.prototype.lookup = function (t) {
                        var e = this;
                        return this.committed ? Promise.reject("Transaction has already completed.") : this.mutations.length > 0 ? Promise.reject("Transactions lookups are invalid after writes.") : this.datastore.lookup(t).then(function (t) {
                            return t.forEach(function (t) {
                                t instanceof Jr || t instanceof Yr ? e.recordVersion(t) : er("Document in a transaction was a " + t.constructor.name)
                            }), t
                        })
                    }, t.prototype.write = function (t) {
                        if (this.committed) throw new sr(or.FAILED_PRECONDITION, "Transaction has already completed.");
                        this.mutations = this.mutations.concat(t)
                    }, t.prototype.precondition = function (t) {
                        var e = this.readVersions.get(t);
                        return e ? ji.updateTime(e) : ji.NONE
                    }, t.prototype.preconditionForUpdate = function (t) {
                        var e = this.readVersions.get(t);
                        if (e && e.isEqual(qi.forDeletedDoc())) throw new sr(or.FAILED_PRECONDITION, "Can't update a document that doesn't exist.");
                        return e ? ji.updateTime(e) : ji.exists(!0)
                    }, t.prototype.set = function (t, e) {
                        this.write(e.toMutations(t, this.precondition(t)))
                    }, t.prototype.update = function (t, e) {
                        this.write(e.toMutations(t, this.preconditionForUpdate(t)))
                    }, t.prototype.delete = function (t) {
                        this.write([new Yi(t, this.precondition(t))]), this.readVersions = this.readVersions.insert(t, qi.forDeletedDoc())
                    }, t.prototype.commit = function () {
                        var t = this,
                            e = this.readVersions;
                        return this.mutations.forEach(function (t) {
                            e = e.remove(t.key)
                        }), e.isEmpty() ? this.datastore.commit(this.mutations).then(function () {
                            t.committed = !0
                        }) : Promise.reject(Error("Every document read in a transaction must also be written."))
                    }, t
                }();
            ! function (t) {
                t[t.Unknown = 0] = "Unknown", t[t.Online = 1] = "Online", t[t.Offline = 2] = "Offline"
            }(La || (La = {})),
            function (t) {
                t[t.RemoteStore = 0] = "RemoteStore", t[t.SharedClientState = 1] = "SharedClientState"
            }(xa || (xa = {}));
            var ja = function () {
                    function t(t, e) {
                        this.asyncQueue = t, this.onlineStateHandler = e, this.state = La.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline = !0
                    }
                    return t.prototype.handleWatchStreamStart = function () {
                        var t = this;
                        0 === this.watchStreamFailures && (this.setAndBroadcast(La.Unknown), nr(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(Go.OnlineStateTimeout, 1e4, function () {
                            return t.onlineStateTimer = null, nr(t.state === La.Unknown, "Timer should be canceled if we transitioned to a different state."), t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."), t.setAndBroadcast(La.Offline), Promise.resolve()
                        }))
                    }, t.prototype.handleWatchStreamFailure = function (t) {
                        this.state === La.Online ? (this.setAndBroadcast(La.Unknown), nr(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), nr(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, this.watchStreamFailures >= 1 && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: " + t.toString()), this.setAndBroadcast(La.Offline)))
                    }, t.prototype.set = function (t) {
                        this.clearOnlineStateTimer(), this.watchStreamFailures = 0, t === La.Online && (this.shouldWarnClientIsOffline = !1), this.setAndBroadcast(t)
                    }, t.prototype.setAndBroadcast = function (t) {
                        t !== this.state && (this.state = t, this.onlineStateHandler(t))
                    }, t.prototype.logClientOfflineWarningIfNecessary = function (t) {
                        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                        this.shouldWarnClientIsOffline ? ($n(e), this.shouldWarnClientIsOffline = !1) : Zn("OnlineStateTracker", e)
                    }, t.prototype.clearOnlineStateTimer = function () {
                        null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null)
                    }, t
                }(),
                za = function () {
                    function t(t, e, n, r) {
                        this.localStore = t, this.datastore = e, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled = !1, this.isPrimary = !1, this.onlineStateTracker = new ja(n, r), this.watchStream = this.datastore.newPersistentWatchStream({
                            onOpen: this.onWatchStreamOpen.bind(this),
                            onClose: this.onWatchStreamClose.bind(this),
                            onWatchChange: this.onWatchStreamChange.bind(this)
                        }), this.writeStream = this.datastore.newPersistentWriteStream({
                            onOpen: this.onWriteStreamOpen.bind(this),
                            onClose: this.onWriteStreamClose.bind(this),
                            onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                            onMutationResult: this.onMutationResult.bind(this)
                        })
                    }
                    return t.prototype.start = function () {
                        return this.enableNetwork()
                    }, t.prototype.enableNetwork = function () {
                        return a(this, void 0, void 0, function () {
                            var t;
                            return u(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return this.networkEnabled = !0, this.canUseNetwork() ? (t = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                                    case 1:
                                        return t.lastStreamToken = e.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(La.Unknown), [4, this.fillWritePipeline()];
                                    case 2:
                                        e.sent(), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.disableNetwork = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(La.Offline), [2]
                                }
                            })
                        })
                    }, t.prototype.disableNetworkInternal = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.writeStream.stop()];
                                    case 1:
                                        return t.sent(), [4, this.watchStream.stop()];
                                    case 2:
                                        return t.sent(), this.writePipeline.length > 0 && (Zn("RemoteStore", "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2]
                                }
                            })
                        })
                    }, t.prototype.shutdown = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return Zn("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(La.Unknown), [2]
                                }
                            })
                        })
                    }, t.prototype.listen = function (t) {
                        nr(!ur(this.listenTargets, t.targetId), "listen called with duplicate targetId!"), this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(t)
                    }, t.prototype.unlisten = function (t) {
                        nr(ur(this.listenTargets, t), "unlisten called without assigned target ID!"), delete this.listenTargets[t], this.watchStream.isOpen() && this.sendUnwatchRequest(t), fr(this.listenTargets) && (this.watchStream.isOpen() ? this.watchStream.markIdle() : this.canUseNetwork() && this.onlineStateTracker.set(La.Unknown))
                    }, t.prototype.getQueryDataForTarget = function (t) {
                        return this.listenTargets[t] || null
                    }, t.prototype.getRemoteKeysForTarget = function (t) {
                        return this.syncEngine.getRemoteKeysForTarget(t)
                    }, t.prototype.sendWatchRequest = function (t) {
                        this.watchChangeAggregator.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t)
                    }, t.prototype.sendUnwatchRequest = function (t) {
                        this.watchChangeAggregator.recordPendingTargetRequest(t), this.watchStream.unwatch(t)
                    }, t.prototype.startWatchStream = function () {
                        nr(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new ko(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart()
                    }, t.prototype.shouldStartWatchStream = function () {
                        return this.canUseNetwork() && !this.watchStream.isStarted() && !fr(this.listenTargets)
                    }, t.prototype.canUseNetwork = function () {
                        return this.isPrimary && this.networkEnabled
                    }, t.prototype.cleanUpWatchStreamState = function () {
                        this.watchChangeAggregator = null
                    }, t.prototype.onWatchStreamOpen = function () {
                        return a(this, void 0, void 0, function () {
                            var t = this;
                            return u(this, function (e) {
                                return hr(this.listenTargets, function (e, n) {
                                    t.sendWatchRequest(n)
                                }), [2]
                            })
                        })
                    }, t.prototype.onWatchStreamClose = function (t) {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (e) {
                                return void 0 === t && nr(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(t), this.startWatchStream()) : this.onlineStateTracker.set(La.Unknown), [2]
                            })
                        })
                    }, t.prototype.onWatchStreamChange = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            var n;
                            return u(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return this.onlineStateTracker.set(La.Online), t instanceof No && t.state === wo.Removed && t.cause ? [2, this.handleTargetError(t)] : (t instanceof Co ? this.watchChangeAggregator.handleDocumentChange(t) : t instanceof Do ? this.watchChangeAggregator.handleExistenceFilter(t) : (nr(t instanceof No, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(t)), e.isEqual(qi.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                                    case 1:
                                        return n = r.sent(), e.compareTo(n) >= 0 ? [4, this.raiseWatchSnapshot(e)] : [3, 3];
                                    case 2:
                                        r.sent(), r.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.raiseWatchSnapshot = function (t) {
                        var e = this;
                        nr(!t.isEqual(qi.MIN), "Can't raise event for unknown SnapshotVersion");
                        var n = this.watchChangeAggregator.createRemoteEvent(t);
                        return hr(n.targetChanges, function (n, r) {
                            if (r.resumeToken.length > 0) {
                                var i = e.listenTargets[n];
                                i && (e.listenTargets[n] = i.copy({
                                    resumeToken: r.resumeToken,
                                    snapshotVersion: t
                                }))
                            }
                        }), n.targetMismatches.forEach(function (t) {
                            var n = e.listenTargets[t];
                            if (n) {
                                e.listenTargets[t] = n.copy({
                                    resumeToken: ir()
                                }), e.sendUnwatchRequest(t);
                                var r = new Bi(n.query, t, Ci.ExistenceFilterMismatch, n.sequenceNumber);
                                e.sendWatchRequest(r)
                            }
                        }), this.syncEngine.applyRemoteEvent(n)
                    }, t.prototype.handleTargetError = function (t) {
                        var e = this;
                        nr(!!t.cause, "Handling target error without a cause");
                        var n = t.cause,
                            r = Promise.resolve();
                        return t.targetIds.forEach(function (t) {
                            r = r.then(function () {
                                return a(e, void 0, void 0, function () {
                                    return u(this, function (e) {
                                        return ur(this.listenTargets, t) ? (delete this.listenTargets[t], this.watchChangeAggregator.removeTarget(t), [2, this.syncEngine.rejectListen(t, n)]) : [2]
                                    })
                                })
                            })
                        }), r
                    }, t.prototype.fillWritePipeline = function () {
                        return a(this, void 0, void 0, function () {
                            var t, e;
                            return u(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return this.canAddToWritePipeline() ? (t = this.writePipeline.length > 0 ? this.writePipeline[this.writePipeline.length - 1].batchId : -1, [4, this.localStore.nextMutationBatch(t)]) : [3, 4];
                                    case 1:
                                        return null !== (e = n.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                                    case 2:
                                        return this.addToWritePipeline(e), [4, this.fillWritePipeline()];
                                    case 3:
                                        n.sent(), n.label = 4;
                                    case 4:
                                        return this.shouldStartWriteStream() && this.startWriteStream(), [2]
                                }
                            })
                        })
                    }, t.prototype.canAddToWritePipeline = function () {
                        return this.canUseNetwork() && this.writePipeline.length < 10
                    }, t.prototype.outstandingWrites = function () {
                        return this.writePipeline.length
                    }, t.prototype.addToWritePipeline = function (t) {
                        nr(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(t), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations)
                    }, t.prototype.shouldStartWriteStream = function () {
                        return this.canUseNetwork() && !this.writeStream.isStarted() && this.writePipeline.length > 0
                    }, t.prototype.startWriteStream = function () {
                        nr(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start()
                    }, t.prototype.onWriteStreamOpen = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                return this.writeStream.writeHandshake(), [2]
                            })
                        })
                    }, t.prototype.onWriteHandshakeComplete = function () {
                        var t = this;
                        return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function () {
                            for (var e = 0, n = t.writePipeline; e < n.length; e++) {
                                var r = n[e];
                                t.writeStream.writeMutations(r.mutations)
                            }
                        }).catch(ya)
                    }, t.prototype.onMutationResult = function (t, e) {
                        var n = this;
                        nr(this.writePipeline.length > 0, "Got result for empty write pipeline");
                        var r = this.writePipeline.shift(),
                            i = us.from(r, t, e, this.writeStream.lastStreamToken);
                        return this.syncEngine.applySuccessfulWrite(i).then(function () {
                            return n.fillWritePipeline()
                        })
                    }, t.prototype.onWriteStreamClose = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e = this;
                            return u(this, function (n) {
                                return void 0 === t && nr(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), t && this.writePipeline.length > 0 ? (void 0, [2, (this.writeStream.handshakeComplete ? this.handleWriteError(t) : this.handleHandshakeError(t)).then(function () {
                                    e.shouldStartWriteStream() && e.startWriteStream()
                                })]) : [2]
                            })
                        })
                    }, t.prototype.handleHandshakeError = function (t) {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (e) {
                                return ro(t.code) ? (Zn("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = ir(), [2, this.localStore.setLastStreamToken(ir()).catch(ya)]) : [2]
                            })
                        })
                    }, t.prototype.handleWriteError = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n = this;
                            return u(this, function (r) {
                                return ro(i = t.code) && i !== or.ABORTED ? (e = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(e.batchId, t).then(function () {
                                    return n.fillWritePipeline()
                                })]) : [2];
                                var i
                            })
                        })
                    }, t.prototype.createTransaction = function () {
                        return new Wa(this.datastore)
                    }, t.prototype.handleCredentialChange = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canUseNetwork() ? (Zn("RemoteStore", "RemoteStore restarting streams for new credential"), this.networkEnabled = !1, [4, this.disableNetworkInternal()]) : [3, 3];
                                    case 1:
                                        return t.sent(), this.onlineStateTracker.set(La.Unknown), [4, this.enableNetwork()];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyPrimaryState = function (t) {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return this.isPrimary = t, t && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return t ? [3, 4] : [4, this.disableNetworkInternal()];
                                    case 3:
                                        e.sent(), this.onlineStateTracker.set(La.Unknown), e.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(),
                Ga = function () {
                    return function () {
                        this.listeners = []
                    }
                }(),
                Ha = function () {
                    function t(t) {
                        this.syncEngine = t, this.queries = new Ss(function (t) {
                            return t.canonicalId()
                        }), this.onlineState = La.Unknown, this.syncEngine.subscribe(this)
                    }
                    return t.prototype.listen = function (t) {
                        var e = t.query,
                            n = !1,
                            r = this.queries.get(e);
                        return r || (n = !0, r = new Ga, this.queries.set(e, r)), r.listeners.push(t), t.applyOnlineStateChange(this.onlineState), r.viewSnap && t.onViewSnapshot(r.viewSnap), n ? this.syncEngine.listen(e).then(function (t) {
                            return r.targetId = t, t
                        }) : Promise.resolve(r.targetId)
                    }, t.prototype.unlisten = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n, r, i;
                            return u(this, function (o) {
                                return e = t.query, n = !1, (r = this.queries.get(e)) && (i = r.listeners.indexOf(t)) >= 0 && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(e), [2, this.syncEngine.unlisten(e)]) : [2]
                            })
                        })
                    }, t.prototype.onWatchChange = function (t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e],
                                i = r.query,
                                o = this.queries.get(i);
                            if (o) {
                                for (var s = 0, a = o.listeners; s < a.length; s++) {
                                    a[s].onViewSnapshot(r)
                                }
                                o.viewSnap = r
                            }
                        }
                    }, t.prototype.onWatchError = function (t, e) {
                        var n = this.queries.get(t);
                        if (n)
                            for (var r = 0, i = n.listeners; r < i.length; r++) {
                                i[r].onError(e)
                            }
                        this.queries.delete(t)
                    }, t.prototype.onOnlineStateChange = function (t) {
                        this.onlineState = t, this.queries.forEach(function (e, n) {
                            for (var r = 0, i = n.listeners; r < i.length; r++) {
                                i[r].applyOnlineStateChange(t)
                            }
                        })
                    }, t
                }(),
                Xa = function () {
                    function t(t, e, n) {
                        this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.onlineState = La.Unknown, this.options = n || {}
                    }
                    return t.prototype.onViewSnapshot = function (t) {
                        if (nr(t.docChanges.length > 0 || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) {
                            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                                var i = r[n];
                                i.type !== go.Metadata && e.push(i)
                            }
                            t = new So(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0)
                        }
                        this.raisedInitialEvent ? this.shouldRaiseEvent(t) && this.queryObserver.next(t) : this.shouldRaiseInitialEvent(t, this.onlineState) && this.raiseInitialEvent(t), this.snap = t
                    }, t.prototype.onError = function (t) {
                        this.queryObserver.error(t)
                    }, t.prototype.applyOnlineStateChange = function (t) {
                        this.onlineState = t, this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && this.raiseInitialEvent(this.snap)
                    }, t.prototype.shouldRaiseInitialEvent = function (t, e) {
                        if (nr(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0;
                        var n = e !== La.Offline;
                        return this.options.waitForSyncWhenOnline && n ? (nr(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === La.Offline
                    }, t.prototype.shouldRaiseEvent = function (t) {
                        if (t.docChanges.length > 0) return !0;
                        var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites;
                        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges
                    }, t.prototype.raiseInitialEvent = function (t) {
                        nr(!this.raisedInitialEvent, "Trying to raise initial events for second time"), t = So.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.raisedInitialEvent = !0, this.queryObserver.next(t)
                    }, t
                }(),
                Ya = function () {
                    function t(t, e, n) {
                        this.targetId = t, this.addedKeys = e, this.removedKeys = n
                    }
                    return t.fromSnapshot = function (e, n) {
                        for (var r = po(), i = po(), o = 0, s = n.docChanges; o < s.length; o++) {
                            var a = s[o];
                            switch (a.type) {
                                case go.Added:
                                    r = r.add(a.doc.key);
                                    break;
                                case go.Removed:
                                    i = i.add(a.doc.key)
                            }
                        }
                        return new t(e, r, i)
                    }, t
                }(),
                Ja = function () {
                    return function (t) {
                        this.key = t
                    }
                }(),
                Za = function () {
                    return function (t) {
                        this.key = t
                    }
                }(),
                $a = function () {
                    function t(t, e) {
                        this.query = t, this._syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = po(), this.mutatedKeys = po(), this.documentSet = new bo(t.docComparator.bind(t))
                    }
                    return Object.defineProperty(t.prototype, "syncedDocuments", {
                        get: function () {
                            return this._syncedDocuments
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.computeDocChanges = function (t, e) {
                        var n = this,
                            r = e ? e.changeSet : new Eo,
                            i = e ? e.documentSet : this.documentSet,
                            o = e ? e.mutatedKeys : this.mutatedKeys,
                            s = i,
                            a = !1,
                            u = this.query.hasLimit() && i.size === this.query.limit ? i.last() : null;
                        if (t.inorderTraversal(function (t, e) {
                                var c = i.get(t),
                                    h = e instanceof Yr ? e : null;
                                h && (nr(t.isEqual(h.key), "Mismatching keys found in document changes: " + t + " != " + h.key), h = n.query.matches(h) ? h : null);
                                var l = !!c && n.mutatedKeys.has(c.key),
                                    f = !!h && (h.hasLocalMutations || n.mutatedKeys.has(h.key) && h.hasCommittedMutations),
                                    d = !1;
                                c && h ? c.data.isEqual(h.data) ? l !== f && (r.track({
                                    type: go.Metadata,
                                    doc: h
                                }), d = !0) : n.shouldWaitForSyncedDocument(c, h) || (r.track({
                                    type: go.Modified,
                                    doc: h
                                }), d = !0, u && n.query.docComparator(h, u) > 0 && (a = !0)) : !c && h ? (r.track({
                                    type: go.Added,
                                    doc: h
                                }), d = !0) : c && !h && (r.track({
                                    type: go.Removed,
                                    doc: c
                                }), d = !0, u && (a = !0));
                                d && (h ? (s = s.add(h), o = f ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)))
                            }), this.query.hasLimit())
                            for (; s.size > this.query.limit;) {
                                var c = s.last();
                                s = s.delete(c.key), o = o.delete(c.key), r.track({
                                    type: go.Removed,
                                    doc: c
                                })
                            }
                        return nr(!a || !e, "View was refilled using docs that themselves needed refilling."), {
                            documentSet: s,
                            changeSet: r,
                            needsRefill: a,
                            mutatedKeys: o
                        }
                    }, t.prototype.shouldWaitForSyncedDocument = function (t, e) {
                        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
                    }, t.prototype.applyChanges = function (t, e, n) {
                        var r = this;
                        nr(!t.needsRefill, "Cannot apply changes that need a refill");
                        var i = this.documentSet;
                        this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys;
                        var o = t.changeSet.getChanges();
                        o.sort(function (t, e) {
                            return function (t, e) {
                                var n = function (t) {
                                    switch (t) {
                                        case go.Added:
                                            return 1;
                                        case go.Modified:
                                        case go.Metadata:
                                            return 2;
                                        case go.Removed:
                                            return 0;
                                        default:
                                            return er("Unknown ChangeType: " + t)
                                    }
                                };
                                return n(t) - n(e)
                            }(t.type, e.type) || r.query.docComparator(t.doc, e.doc)
                        }), this.applyTargetChange(n);
                        var s = e ? this.updateLimboDocuments() : [],
                            a = 0 === this.limboDocuments.size && this.current ? vo.Synced : vo.Local,
                            u = a !== this.syncState;
                        return this.syncState = a, 0 !== o.length || u ? {
                            snapshot: new So(this.query, t.documentSet, i, o, t.mutatedKeys, a === vo.Local, u, !1),
                            limboChanges: s
                        } : {
                            limboChanges: s
                        }
                    }, t.prototype.applyOnlineStateChange = function (t) {
                        return this.current && t === La.Offline ? (this.current = !1, this.applyChanges({
                            documentSet: this.documentSet,
                            changeSet: new Eo,
                            mutatedKeys: this.mutatedKeys,
                            needsRefill: !1
                        }, !1)) : {
                            limboChanges: []
                        }
                    }, t.prototype.shouldBeInLimbo = function (t) {
                        return !this._syncedDocuments.has(t) && (!!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations)
                    }, t.prototype.applyTargetChange = function (t) {
                        var e = this;
                        t && (t.addedDocuments.forEach(function (t) {
                            return e._syncedDocuments = e._syncedDocuments.add(t)
                        }), t.modifiedDocuments.forEach(function (t) {
                            return nr(e._syncedDocuments.has(t), "Modified document " + t + " not found in view.")
                        }), t.removedDocuments.forEach(function (t) {
                            return e._syncedDocuments = e._syncedDocuments.delete(t)
                        }), this.current = t.current)
                    }, t.prototype.updateLimboDocuments = function () {
                        var t = this;
                        if (!this.current) return [];
                        var e = this.limboDocuments;
                        this.limboDocuments = po(), this.documentSet.forEach(function (e) {
                            t.shouldBeInLimbo(e.key) && (t.limboDocuments = t.limboDocuments.add(e.key))
                        });
                        var n = [];
                        return e.forEach(function (e) {
                            t.limboDocuments.has(e) || n.push(new Za(e))
                        }), this.limboDocuments.forEach(function (t) {
                            e.has(t) || n.push(new Ja(t))
                        }), n
                    }, t.prototype.synchronizeWithPersistedState = function (t, e) {
                        this._syncedDocuments = e, this.limboDocuments = po();
                        var n = this.computeDocChanges(t);
                        return this.applyChanges(n, !0)
                    }, t.prototype.computeInitialSnapshot = function () {
                        return So.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === vo.Local)
                    }, t
                }();
            var tu = function () {
                    return function (t, e, n) {
                        this.query = t, this.targetId = e, this.view = n
                    }
                }(),
                eu = function () {
                    return function (t) {
                        this.key = t
                    }
                }(),
                nu = function () {
                    function t(t, e, n, r) {
                        this.localStore = t, this.remoteStore = e, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new Ss(function (t) {
                            return t.canonicalId()
                        }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new $r(Hr.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new Sa, this.mutationUserCallbacks = {}, this.limboTargetIdGenerator = hs.forSyncEngine(), this.isPrimary = void 0, this.onlineState = La.Unknown
                    }
                    return Object.defineProperty(t.prototype, "isPrimaryClient", {
                        get: function () {
                            return !0 === this.isPrimary
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.subscribe = function (t) {
                        nr(null !== t, "SyncEngine listener cannot be null"), nr(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = t
                    }, t.prototype.listen = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n, r, i, o;
                            return u(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(t)) ? (e = r.targetId, this.sharedClientState.addLocalQueryTarget(e), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                                    case 1:
                                        return [4, this.localStore.allocateQuery(t)];
                                    case 2:
                                        return i = s.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), e = i.targetId, [4, this.initializeViewAndComputeSnapshot(i, "current" === o)];
                                    case 3:
                                        n = s.sent(), this.isPrimary && this.remoteStore.listen(i), s.label = 4;
                                    case 4:
                                        return this.syncEngineListener.onWatchChange([n]), [2, e]
                                }
                            })
                        })
                    }, t.prototype.initializeViewAndComputeSnapshot = function (t, e) {
                        var n = this,
                            r = t.query;
                        return this.localStore.executeQuery(r).then(function (i) {
                            return n.localStore.remoteDocumentKeys(t.targetId).then(function (o) {
                                var s = new $a(r, o),
                                    a = s.computeDocChanges(i),
                                    u = Io.createSynthesizedTargetChangeForCurrentChange(t.targetId, e && n.onlineState !== La.Offline),
                                    c = s.applyChanges(a, !0 === n.isPrimary, u);
                                nr(0 === c.limboChanges.length, "View returned limbo docs before target ack from the server."), nr(!!c.snapshot, "applyChanges for new view should always return a snapshot");
                                var h = new tu(r, t.targetId, s);
                                return n.queryViewsByQuery.set(r, h), n.queryViewsByTarget[t.targetId] = h, c.snapshot
                            })
                        })
                    }, t.prototype.synchronizeViewAndComputeSnapshot = function (t) {
                        var e = this;
                        return this.localStore.executeQuery(t.query).then(function (n) {
                            return e.localStore.remoteDocumentKeys(t.targetId).then(function (r) {
                                return a(e, void 0, void 0, function () {
                                    var e;
                                    return u(this, function (i) {
                                        return e = t.view.synchronizeWithPersistedState(n, r), this.isPrimary && this.updateTrackedLimbos(t.targetId, e.limboChanges), [2, e]
                                    })
                                })
                            })
                        })
                    }, t.prototype.unlisten = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n = this;
                            return u(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return this.assertSubscribed("unlisten()"), nr(!!(e = this.queryViewsByQuery.get(t)), "Trying to unlisten on query not found:" + t), this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(e.targetId), this.sharedClientState.isActiveQueryTarget(e.targetId) ? [3, 2] : [4, this.localStore.releaseQuery(t, !1).then(function () {
                                            n.sharedClientState.clearQueryState(e.targetId), n.remoteStore.unlisten(e.targetId), n.removeAndCleanupQuery(e)
                                        }).catch(ya)]) : [3, 3];
                                    case 1:
                                        r.sent(), r.label = 2;
                                    case 2:
                                        return [3, 5];
                                    case 3:
                                        return this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(t, !0)];
                                    case 4:
                                        r.sent(), r.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.write = function (t, e) {
                        var n = this;
                        return this.assertSubscribed("write()"), this.localStore.localWrite(t).then(function (t) {
                            return n.sharedClientState.addPendingMutation(t.batchId), n.addMutationCallback(t.batchId, e), n.emitNewSnapsAndNotifyLocalStore(t.changes)
                        }).then(function () {
                            return n.remoteStore.fillWritePipeline()
                        })
                    }, t.prototype.wrapUpdateFunctionError = function (t) {
                        return t
                    }, t.prototype.runTransaction = function (t, e) {
                        var n = this;
                        void 0 === e && (e = 5), nr(e >= 0, "Got negative number of retries for transaction.");
                        var r = this.remoteStore.createTransaction();
                        return function () {
                            try {
                                var e = t(r);
                                return !Ti(e) && e.catch && e.then ? e.catch(function (t) {
                                    return Promise.reject(n.wrapUpdateFunctionError(t))
                                }) : Promise.reject(Error("Transaction callback must return a Promise"))
                            } catch (t) {
                                return Promise.reject(n.wrapUpdateFunctionError(t))
                            }
                        }().then(function (i) {
                            return r.commit().then(function () {
                                return i
                            }).catch(function (r) {
                                return 0 === e ? Promise.reject(r) : n.runTransaction(t, e - 1)
                            })
                        })
                    }, t.prototype.applyRemoteEvent = function (t) {
                        var e = this;
                        return this.assertSubscribed("applyRemoteEvent()"), this.localStore.applyRemoteEvent(t).then(function (n) {
                            return lr(t.targetChanges, function (t, n) {
                                var r = e.limboResolutionsByTarget[t];
                                r && (nr(n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), n.addedDocuments.size > 0 ? r.receivedDocument = !0 : n.modifiedDocuments.size > 0 ? nr(r.receivedDocument, "Received change for limbo target document without add.") : n.removedDocuments.size > 0 && (nr(r.receivedDocument, "Received remove for limbo target document without add."), r.receivedDocument = !1))
                            }), e.emitNewSnapsAndNotifyLocalStore(n, t)
                        }).catch(ya)
                    }, t.prototype.applyOnlineStateChange = function (t, e) {
                        if (this.isPrimary && e === xa.RemoteStore || !this.isPrimary && e === xa.SharedClientState) {
                            var n = [];
                            this.queryViewsByQuery.forEach(function (e, r) {
                                var i = r.view.applyOnlineStateChange(t);
                                nr(0 === i.limboChanges.length, "OnlineState should not affect limbo documents."), i.snapshot && n.push(i.snapshot)
                            }), this.syncEngineListener.onOnlineStateChange(t), this.syncEngineListener.onWatchChange(n), this.onlineState = t, this.isPrimary && this.sharedClientState.setOnlineState(t)
                        }
                    }, t.prototype.rejectListen = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            var n, r, i, o, s, a, c = this;
                            return u(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(t, "rejected", e), n = this.limboResolutionsByTarget[t], (r = n && n.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(r), delete this.limboResolutionsByTarget[t], i = (i = new $r(Hr.comparator)).insert(r, new Jr(r, qi.forDeletedDoc())), o = po().add(r), s = new To(qi.MIN, {}, new Ui(Mr), i, o), [2, this.applyRemoteEvent(s)]) : [3, 1];
                                    case 1:
                                        return nr(!!(a = this.queryViewsByTarget[t]), "Unknown targetId: " + t), [4, this.localStore.releaseQuery(a.query, !1).then(function () {
                                            return c.removeAndCleanupQuery(a)
                                        }).catch(ya)];
                                    case 2:
                                        u.sent(), this.syncEngineListener.onWatchError(a.query, e), u.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyBatchState = function (t, e, n) {
                        return a(this, void 0, void 0, function () {
                            var r;
                            return u(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(t)];
                                    case 1:
                                        return null === (r = i.sent()) ? (Zn("SyncEngine", "Cannot apply mutation batch with id: " + t), [2]) : "pending" !== e ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        "acknowledged" === e || "rejected" === e ? (this.processUserCallback(t, n || null), this.localStore.removeCachedMutationBatchMetadata(t)) : er("Unknown batchState: " + e), i.label = 4;
                                    case 4:
                                        return [4, this.emitNewSnapsAndNotifyLocalStore(r)];
                                    case 5:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.applySuccessfulWrite = function (t) {
                        var e = this;
                        this.assertSubscribed("applySuccessfulWrite()");
                        var n = t.batch.batchId;
                        return this.processUserCallback(n, null), this.localStore.acknowledgeBatch(t).then(function (t) {
                            return e.sharedClientState.updateMutationState(n, "acknowledged"), e.emitNewSnapsAndNotifyLocalStore(t)
                        }).catch(ya)
                    }, t.prototype.rejectFailedWrite = function (t, e) {
                        var n = this;
                        return this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(t, e), this.localStore.rejectBatch(t).then(function (r) {
                            return n.sharedClientState.updateMutationState(t, "rejected", e), n.emitNewSnapsAndNotifyLocalStore(r)
                        }).catch(ya)
                    }, t.prototype.addMutationCallback = function (t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        n || (n = new $r(Mr)), n = n.insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }, t.prototype.processUserCallback = function (t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        if (n) {
                            var r = n.get(t);
                            r && (nr(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                        }
                    }, t.prototype.removeAndCleanupQuery = function (t) {
                        var e = this;
                        if (this.sharedClientState.removeLocalQueryTarget(t.targetId), this.queryViewsByQuery.delete(t.query), delete this.queryViewsByTarget[t.targetId], this.isPrimary) {
                            var n = this.limboDocumentRefs.referencesForId(t.targetId);
                            this.limboDocumentRefs.removeReferencesForId(t.targetId), n.forEach(function (t) {
                                e.limboDocumentRefs.containsKey(t) || e.removeLimboTarget(t)
                            })
                        }
                    }, t.prototype.removeLimboTarget = function (t) {
                        var e = this.limboTargetsByKey.get(t);
                        null !== e && (this.remoteStore.unlisten(e), this.limboTargetsByKey = this.limboTargetsByKey.remove(t), delete this.limboResolutionsByTarget[e])
                    }, t.prototype.updateTrackedLimbos = function (t, e) {
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            if (i instanceof Ja) this.limboDocumentRefs.addReference(i.key, t), this.trackLimboChange(i);
                            else if (i instanceof Za) {
                                Zn("SyncEngine", "Document no longer in limbo: " + i.key), this.limboDocumentRefs.removeReference(i.key, t), this.limboDocumentRefs.containsKey(i.key) || this.removeLimboTarget(i.key)
                            } else er("Unknown limbo change: " + JSON.stringify(i))
                        }
                    }, t.prototype.trackLimboChange = function (t) {
                        var e = t.key;
                        if (!this.limboTargetsByKey.get(e)) {
                            Zn("SyncEngine", "New document in limbo: " + e);
                            var n = this.limboTargetIdGenerator.next(),
                                r = Di.atPath(e.path);
                            this.limboResolutionsByTarget[n] = new eu(e), this.remoteStore.listen(new Bi(r, n, Ci.LimboResolution, Ho.INVALID)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n)
                        }
                    }, t.prototype.currentLimboDocs = function () {
                        return this.limboTargetsByKey
                    }, t.prototype.emitNewSnapsAndNotifyLocalStore = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            var n, r, i, o = this;
                            return u(this, function (s) {
                                switch (s.label) {
                                    case 0:
                                        return n = [], r = [], i = [], this.queryViewsByQuery.forEach(function (s, a) {
                                            i.push(Promise.resolve().then(function () {
                                                var e = a.view.computeDocChanges(t);
                                                return e.needsRefill ? o.localStore.executeQuery(a.query).then(function (t) {
                                                    return a.view.computeDocChanges(t, e)
                                                }) : e
                                            }).then(function (t) {
                                                var i = e && e.targetChanges[a.targetId],
                                                    s = a.view.applyChanges(t, !0 === o.isPrimary, i);
                                                if (o.updateTrackedLimbos(a.targetId, s.limboChanges), s.snapshot) {
                                                    o.isPrimary && o.sharedClientState.updateQueryState(a.targetId, s.snapshot.fromCache ? "not-current" : "current"), n.push(s.snapshot);
                                                    var u = Ya.fromSnapshot(a.targetId, s.snapshot);
                                                    r.push(u)
                                                }
                                            }))
                                        }), [4, Promise.all(i)];
                                    case 1:
                                        return s.sent(), this.syncEngineListener.onWatchChange(n), [4, this.localStore.notifyLocalViewChanges(r)];
                                    case 2:
                                        return s.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.assertSubscribed = function (t) {
                        nr(null !== this.syncEngineListener, "Trying to call " + t + " before calling subscribe().")
                    }, t.prototype.handleCredentialChange = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n;
                            return u(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return e = !this.currentUser.isEqual(t), this.currentUser = t, e ? [4, this.localStore.handleUserChange(t)] : [3, 3];
                                    case 1:
                                        return n = r.sent(), this.sharedClientState.handleUserChange(t, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                                    case 2:
                                        r.sent(), r.label = 3;
                                    case 3:
                                        return [4, this.remoteStore.handleCredentialChange()];
                                    case 4:
                                        return r.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.applyPrimaryState = function (t) {
                        return a(this, void 0, void 0, function () {
                            var e, n, r, i, o, s, a, c = this;
                            return u(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return !0 !== t || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.remoteStore.applyPrimaryState(!0)]);
                                    case 1:
                                        return u.sent(), e = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];
                                    case 2:
                                        for (n = u.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.remoteStore.listen(o);
                                        return [3, 7];
                                    case 3:
                                        return !1 !== t || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, s = [], a = Promise.resolve(), hr(this.queryViewsByTarget, function (t, e) {
                                            c.sharedClientState.isLocalQueryTarget(t) ? s.push(t) : a = a.then(function () {
                                                return c.unlisten(e.query)
                                            }), c.remoteStore.unlisten(e.targetId)
                                        }), [4, a]);
                                    case 4:
                                        return u.sent(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(s)];
                                    case 5:
                                        return u.sent(), this.resetLimboDocuments(), [4, this.remoteStore.applyPrimaryState(!1)];
                                    case 6:
                                        u.sent(), u.label = 7;
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.resetLimboDocuments = function () {
                        var t = this;
                        hr(this.limboResolutionsByTarget, function (e) {
                            t.remoteStore.unlisten(e)
                        }), this.limboDocumentRefs.removeAllReferences(), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new $r(Hr.comparator)
                    }, t.prototype.synchronizeQueryViewsAndRaiseSnapshots = function (t) {
                        for (var e = this, n = Promise.resolve(), r = [], i = [], o = function (t) {
                                n = n.then(function () {
                                    return a(e, void 0, void 0, function () {
                                        var e, n, o, s;
                                        return u(this, function (a) {
                                            switch (a.label) {
                                                case 0:
                                                    return (n = this.queryViewsByTarget[t]) ? [4, this.localStore.releaseQuery(n.query, !0)] : [3, 4];
                                                case 1:
                                                    return a.sent(), [4, this.localStore.allocateQuery(n.query)];
                                                case 2:
                                                    return e = a.sent(), [4, this.synchronizeViewAndComputeSnapshot(n)];
                                                case 3:
                                                    return (o = a.sent()).snapshot && i.push(o.snapshot), [3, 8];
                                                case 4:
                                                    return nr(!0 === this.isPrimary, "A secondary tab should never have an active query without an active view."), [4, this.localStore.getQueryForTarget(t)];
                                                case 5:
                                                    return nr(!!(s = a.sent()), "Query data for target " + t + " not found"), [4, this.localStore.allocateQuery(s)];
                                                case 6:
                                                    return e = a.sent(), [4, this.initializeViewAndComputeSnapshot(e, !1)];
                                                case 7:
                                                    a.sent(), a.label = 8;
                                                case 8:
                                                    return r.push(e), [2]
                                            }
                                        })
                                    })
                                })
                            }, s = 0, c = t; s < c.length; s++) {
                            o(c[s])
                        }
                        return n.then(function () {
                            return e.syncEngineListener.onWatchChange(i), r
                        })
                    }, t.prototype.getActiveClients = function () {
                        return this.localStore.getActiveClients()
                    }, t.prototype.applyTargetState = function (t, e, n) {
                        return a(this, void 0, void 0, function () {
                            var r, i = this;
                            return u(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.isPrimary) return Zn("SyncEngine", "Ignoring unexpected query state notification."), [2];
                                        if (!this.queryViewsByTarget[t]) return [3, 5];
                                        switch (e) {
                                            case "current":
                                            case "not-current":
                                                return [3, 1];
                                            case "rejected":
                                                return [3, 2]
                                        }
                                        return [3, 4];
                                    case 1:
                                        return [2, this.localStore.getNewDocumentChanges().then(function (n) {
                                            return a(i, void 0, void 0, function () {
                                                var r;
                                                return u(this, function (i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return r = To.createSynthesizedRemoteEventForCurrentChange(t, "current" === e), [4, this.emitNewSnapsAndNotifyLocalStore(n, r)];
                                                        case 1:
                                                            return i.sent(), [2]
                                                    }
                                                })
                                            })
                                        }, function (t) {
                                            return a(i, void 0, void 0, function () {
                                                var e;
                                                return u(this, function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return function (t) {
                                                                return t.code === or.DATA_LOSS && t.message === Is
                                                            }(t) ? (e = [], hr(this.queryViewsByTarget, function (t) {
                                                                return e.push(t)
                                                            }), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e)]) : [3, 2];
                                                        case 1:
                                                            return n.sent(), [3, 3];
                                                        case 2:
                                                            throw t;
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 2:
                                        return r = this.queryViewsByTarget[t], this.removeAndCleanupQuery(r), [4, this.localStore.releaseQuery(r.query, !0)];
                                    case 3:
                                        return o.sent(), this.syncEngineListener.onWatchError(r.query, n), [3, 5];
                                    case 4:
                                        er("Unexpected target state: " + e), o.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.applyActiveTargetsChange = function (t, e) {
                        return a(this, void 0, void 0, function () {
                            var n, r, i, o, s, a, c, h, l, f = this;
                            return u(this, function (d) {
                                switch (d.label) {
                                    case 0:
                                        if (!this.isPrimary) return [2];
                                        n = 0, r = t, d.label = 1;
                                    case 1:
                                        return n < r.length ? (l = r[n], nr(!this.queryViewsByTarget[l], "Trying to add an already active target"), [4, this.localStore.getQueryForTarget(l)]) : [3, 6];
                                    case 2:
                                        return nr(!!(i = d.sent()), "Query data for active target " + l + " not found"), [4, this.localStore.allocateQuery(i)];
                                    case 3:
                                        return o = d.sent(), [4, this.initializeViewAndComputeSnapshot(o, !1)];
                                    case 4:
                                        d.sent(), this.remoteStore.listen(o), d.label = 5;
                                    case 5:
                                        return n++, [3, 1];
                                    case 6:
                                        s = function (t) {
                                            var e;
                                            return u(this, function (n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return (e = a.queryViewsByTarget[t]) ? [4, a.localStore.releaseQuery(e.query, !1).then(function () {
                                                            f.remoteStore.unlisten(t), f.removeAndCleanupQuery(e)
                                                        }).catch(ya)] : [3, 2];
                                                    case 1:
                                                        n.sent(), n.label = 2;
                                                    case 2:
                                                        return [2]
                                                }
                                            })
                                        }, a = this, c = 0, h = e, d.label = 7;
                                    case 7:
                                        return c < h.length ? (l = h[c], [5, s(l)]) : [3, 10];
                                    case 8:
                                        d.sent(), d.label = 9;
                                    case 9:
                                        return c++, [3, 7];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.enableNetwork = function () {
                        return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork()
                    }, t.prototype.disableNetwork = function () {
                        return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork()
                    }, t.prototype.getRemoteKeysForTarget = function (t) {
                        var e = this.limboResolutionsByTarget[t];
                        return e && e.receivedDocument ? po().add(e.key) : this.queryViewsByTarget[t] ? this.queryViewsByTarget[t].view.syncedDocuments : po()
                    }, t
                }(),
                ru = function () {
                    function t(t) {
                        this.uid = t
                    }
                    return t.prototype.isAuthenticated = function () {
                        return null != this.uid
                    }, t.prototype.toKey = function () {
                        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                    }, t.prototype.isEqual = function (t) {
                        return t.uid === this.uid
                    }, t.UNAUTHENTICATED = new t(null), t.GOOGLE_CREDENTIALS = new t("google-credentials-uid"), t.FIRST_PARTY = new t("first-party-uid"), t
                }(),
                iu = "SharedClientState",
                ou = "firestore_clients",
                su = "firestore_mutations",
                au = "firestore_targets",
                uu = "firestore_online_state",
                cu = "firestore_sequence_number",
                hu = function () {
                    function t(t, e, n, r) {
                        this.user = t, this.batchId = e, this.state = n, this.error = r, nr(void 0 !== r == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'")
                    }
                    return t.fromWebStorageEntry = function (e, n, r) {
                        var i = JSON.parse(r),
                            o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
                            s = void 0;
                        return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new sr(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : ($n(iu, "Failed to parse mutation state for ID '" + n + "': " + r), null)
                    }, t.prototype.toWebStorageJSON = function () {
                        var t = {
                            state: this.state,
                            updateTimeMs: Date.now()
                        };
                        return this.error && (t.error = {
                            code: this.error.code,
                            message: this.error.message
                        }), JSON.stringify(t)
                    }, t
                }(),
                lu = function () {
                    function t(t, e, n) {
                        this.targetId = t, this.state = e, this.error = n, nr(void 0 !== n == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'")
                    }
                    return t.fromWebStorageEntry = function (e, n) {
                        var r = JSON.parse(n),
                            i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                            o = void 0;
                        return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new sr(r.error.code, r.error.message)), i ? new t(e, r.state, o) : ($n(iu, "Failed to parse target state for ID '" + e + "': " + n), null)
                    }, t.prototype.toWebStorageJSON = function () {
                        var t = {
                            state: this.state,
                            updateTimeMs: Date.now()
                        };
                        return this.error && (t.error = {
                            code: this.error.code,
                            message: this.error.message
                        }), JSON.stringify(t)
                    }, t
                }(),
                fu = function () {
                    function t(t, e) {
                        this.clientId = t, this.activeTargetIds = e
                    }
                    return t.fromWebStorageEntry = function (e, n) {
                        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = yo(), s = 0; i && s < r.activeTargetIds.length; ++s) i = Ii(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
                        return i ? new t(e, o) : ($n(iu, "Failed to parse client data for instance '" + e + "': " + n), null)
                    }, t
                }(),
                du = function () {
                    function t(t, e) {
                        this.clientId = t, this.onlineState = e
                    }
                    return t.fromWebStorageEntry = function (e) {
                        var n = JSON.parse(e);
                        return "object" == typeof n && void 0 !== La[n.onlineState] && "string" == typeof n.clientId ? new t(n.clientId, La[n.onlineState]) : ($n(iu, "Failed to parse online state: " + e), null)
                    }, t
                }(),
                pu = function () {
                    function t() {
                        this.activeTargetIds = yo()
                    }
                    return t.prototype.addQueryTarget = function (t) {
                        nr(!this.activeTargetIds.has(t), "Target with ID '" + t + "' already active."), this.activeTargetIds = this.activeTargetIds.add(t)
                    }, t.prototype.removeQueryTarget = function (t) {
                        this.activeTargetIds = this.activeTargetIds.delete(t)
                    }, t.prototype.toWebStorageJSON = function () {
                        var t = {
                            activeTargetIds: this.activeTargetIds.toArray(),
                            updateTimeMs: Date.now()
                        };
                        return JSON.stringify(t)
                    }, t
                }(),
                mu = function () {
                    function t(e, n, r, i, o) {
                        if (this.queue = e, this.platform = n, this.persistenceKey = r, this.localClientId = i, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.activeClients = {}, this.storageListener = this.handleWebStorageEvent.bind(this), this.started = !1, this.earlyEvents = [], !t.isAvailable(this.platform)) throw new sr(or.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                        var s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        this.storage = this.platform.window.localStorage, this.currentUser = o, this.localClientStorageKey = this.toWebStorageClientStateKey(this.localClientId), this.sequenceNumberKey = cu + "_" + r, this.activeClients[this.localClientId] = new pu, this.clientStateKeyRe = new RegExp("^" + ou + "_" + s + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + su + "_" + s + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + au + "_" + s + "_(\\d+)$"), this.onlineStateKey = uu + "_" + r, this.platform.window.addEventListener("storage", this.storageListener)
                    }
                    return t.isAvailable = function (t) {
                        return !(!t.window || null == t.window.localStorage)
                    }, t.prototype.start = function () {
                        return a(this, void 0, void 0, function () {
                            var t, e, n, r, i, o, s, a, c, h, l, f = this;
                            return u(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return nr(!this.started, "WebStorageSharedClientState already started"), nr(null !== this.syncEngine, "syncEngine property must be set before calling start()"), nr(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                                    case 1:
                                        for (t = u.sent(), e = 0, n = t; e < n.length; e++)(r = n[e]) !== this.localClientId && (i = this.getItem(this.toWebStorageClientStateKey(r))) && (o = fu.fromWebStorageEntry(r, i)) && (this.activeClients[o.clientId] = o);
                                        for (this.persistClientState(), (s = this.storage.getItem(this.onlineStateKey)) && (a = this.fromWebStorageOnlineState(s)) && this.handleOnlineStateEvent(a), c = 0, h = this.earlyEvents; c < h.length; c++) l = h[c], this.handleWebStorageEvent(l);
                                        return this.earlyEvents = [], this.platform.window.addEventListener("unload", function () {
                                            return f.shutdown()
                                        }), this.started = !0, [2]
                                }
                            })
                        })
                    }, t.prototype.writeSequenceNumber = function (t) {
                        this.setItem(this.sequenceNumberKey, JSON.stringify(t))
                    }, t.prototype.getAllActiveQueryTargets = function () {
                        var t = yo();
                        return lr(this.activeClients, function (e, n) {
                            t = t.unionWith(n.activeTargetIds)
                        }), t
                    }, t.prototype.isActiveQueryTarget = function (t) {
                        for (var e in this.activeClients)
                            if (this.activeClients.hasOwnProperty(e) && this.activeClients[e].activeTargetIds.has(t)) return !0;
                        return !1
                    }, t.prototype.addPendingMutation = function (t) {
                        this.persistMutationState(t, "pending")
                    }, t.prototype.updateMutationState = function (t, e, n) {
                        this.persistMutationState(t, e, n), this.removeMutationState(t)
                    }, t.prototype.addLocalQueryTarget = function (t) {
                        var e = "not-current";
                        if (this.isActiveQueryTarget(t)) {
                            var n = this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t));
                            if (n) {
                                var r = lu.fromWebStorageEntry(t, n);
                                r && (e = r.state)
                            }
                        }
                        return this.localClientState.addQueryTarget(t), this.persistClientState(), e
                    }, t.prototype.removeLocalQueryTarget = function (t) {
                        this.localClientState.removeQueryTarget(t), this.persistClientState()
                    }, t.prototype.isLocalQueryTarget = function (t) {
                        return this.localClientState.activeTargetIds.has(t)
                    }, t.prototype.clearQueryState = function (t) {
                        this.removeItem(this.toWebStorageQueryTargetMetadataKey(t))
                    }, t.prototype.updateQueryState = function (t, e, n) {
                        this.persistQueryTargetState(t, e, n)
                    }, t.prototype.handleUserChange = function (t, e, n) {
                        var r = this;
                        e.forEach(function (t) {
                            r.removeMutationState(t)
                        }), this.currentUser = t, n.forEach(function (t) {
                            r.addPendingMutation(t)
                        })
                    }, t.prototype.setOnlineState = function (t) {
                        this.persistOnlineState(t)
                    }, t.prototype.shutdown = function () {
                        this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started = !1)
                    }, t.prototype.getItem = function (t) {
                        var e = this.storage.getItem(t);
                        return Zn(iu, "READ", t, e), e
                    }, t.prototype.setItem = function (t, e) {
                        Zn(iu, "SET", t, e), this.storage.setItem(t, e)
                    }, t.prototype.removeItem = function (t) {
                        Zn(iu, "REMOVE", t), this.storage.removeItem(t)
                    }, t.prototype.handleWebStorageEvent = function (t) {
                        var e = this;
                        if (t.storageArea === this.storage) {
                            if (Zn(iu, "EVENT", t.key, t.newValue), t.key === this.localClientStorageKey) return void $n("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                            this.queue.enqueueAndForget(function () {
                                return a(e, void 0, void 0, function () {
                                    var e, n, r, i, o, s;
                                    return u(this, function (a) {
                                        if (!this.started) return this.earlyEvents.push(t), [2];
                                        if (null === t.key) return [2];
                                        if (this.clientStateKeyRe.test(t.key)) {
                                            if (null == t.newValue) return n = this.fromWebStorageClientStateKey(t.key), [2, this.handleClientStateEvent(n, null)];
                                            if (e = this.fromWebStorageClientState(t.key, t.newValue)) return [2, this.handleClientStateEvent(e.clientId, e)]
                                        } else if (this.mutationBatchKeyRe.test(t.key)) {
                                            if (null !== t.newValue && (r = this.fromWebStorageMutationMetadata(t.key, t.newValue))) return [2, this.handleMutationBatchEvent(r)]
                                        } else if (this.queryTargetKeyRe.test(t.key)) {
                                            if (null !== t.newValue && (i = this.fromWebStorageQueryTargetMetadata(t.key, t.newValue))) return [2, this.handleQueryTargetEvent(i)]
                                        } else if (t.key === this.onlineStateKey) {
                                            if (null !== t.newValue && (o = this.fromWebStorageOnlineState(t.newValue))) return [2, this.handleOnlineStateEvent(o)]
                                        } else t.key === this.sequenceNumberKey && (nr(!!this.sequenceNumberHandler, "Missing sequenceNumberHandler"), (s = function (t) {
                                            var e = Ho.INVALID;
                                            if (null != t) try {
                                                var n = JSON.parse(t);
                                                nr("number" == typeof n, "Found non-numeric sequence number"), e = n
                                            } catch (t) {
                                                $n(iu, "Failed to read sequence number from WebStorage", t)
                                            }
                                            return e
                                        }(t.newValue)) !== Ho.INVALID && this.sequenceNumberHandler(s));
                                        return [2]
                                    })
                                })
                            })
                        }
                    }, Object.defineProperty(t.prototype, "localClientState", {
                        get: function () {
                            return this.activeClients[this.localClientId]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.persistClientState = function () {
                        this.setItem(this.localClientStorageKey, this.localClientState.toWebStorageJSON())
                    }, t.prototype.persistMutationState = function (t, e, n) {
                        var r = new hu(this.currentUser, t, e, n),
                            i = this.toWebStorageMutationBatchKey(t);
                        this.setItem(i, r.toWebStorageJSON())
                    }, t.prototype.removeMutationState = function (t) {
                        var e = this.toWebStorageMutationBatchKey(t);
                        this.removeItem(e)
                    }, t.prototype.persistOnlineState = function (t) {
                        var e = {
                            clientId: this.localClientId,
                            onlineState: La[t]
                        };
                        this.storage.setItem(this.onlineStateKey, JSON.stringify(e))
                    }, t.prototype.persistQueryTargetState = function (t, e, n) {
                        var r = this.toWebStorageQueryTargetMetadataKey(t),
                            i = new lu(t, e, n);
                        this.setItem(r, i.toWebStorageJSON())
                    }, t.prototype.toWebStorageClientStateKey = function (t) {
                        return nr(-1 === t.indexOf("_"), "Client key cannot contain '_', but was '" + t + "'"), ou + "_" + this.persistenceKey + "_" + t
                    }, t.prototype.toWebStorageQueryTargetMetadataKey = function (t) {
                        return au + "_" + this.persistenceKey + "_" + t
                    }, t.prototype.toWebStorageMutationBatchKey = function (t) {
                        var e = su + "_" + this.persistenceKey + "_" + t;
                        return this.currentUser.isAuthenticated() && (e += "_" + this.currentUser.uid), e
                    }, t.prototype.fromWebStorageClientStateKey = function (t) {
                        var e = this.clientStateKeyRe.exec(t);
                        return e ? e[1] : null
                    }, t.prototype.fromWebStorageClientState = function (t, e) {
                        var n = this.fromWebStorageClientStateKey(t);
                        return nr(null !== n, "Cannot parse client state key '" + t + "'"), fu.fromWebStorageEntry(n, e)
                    }, t.prototype.fromWebStorageMutationMetadata = function (t, e) {
                        var n = this.mutationBatchKeyRe.exec(t);
                        nr(null !== n, "Cannot parse mutation batch key '" + t + "'");
                        var r = Number(n[1]),
                            i = void 0 !== n[2] ? n[2] : null;
                        return hu.fromWebStorageEntry(new ru(i), r, e)
                    }, t.prototype.fromWebStorageQueryTargetMetadata = function (t, e) {
                        var n = this.queryTargetKeyRe.exec(t);
                        nr(null !== n, "Cannot parse query target key '" + t + "'");
                        var r = Number(n[1]);
                        return lu.fromWebStorageEntry(r, e)
                    }, t.prototype.fromWebStorageOnlineState = function (t) {
                        return du.fromWebStorageEntry(t)
                    }, t.prototype.handleMutationBatchEvent = function (t) {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (e) {
                                return t.user.uid !== this.currentUser.uid ? (Zn(iu, "Ignoring mutation for non-active user " + t.user.uid), [2]) : [2, this.syncEngine.applyBatchState(t.batchId, t.state, t.error)]
                            })
                        })
                    }, t.prototype.handleQueryTargetEvent = function (t) {
                        return this.syncEngine.applyTargetState(t.targetId, t.state, t.error)
                    }, t.prototype.handleClientStateEvent = function (t, e) {
                        var n = this,
                            r = this.getAllActiveQueryTargets();
                        e ? this.activeClients[t] = e : delete this.activeClients[t];
                        var i = this.getAllActiveQueryTargets(),
                            o = [],
                            s = [];
                        return i.forEach(function (t) {
                            return a(n, void 0, void 0, function () {
                                return u(this, function (e) {
                                    return r.has(t) || o.push(t), [2]
                                })
                            })
                        }), r.forEach(function (t) {
                            return a(n, void 0, void 0, function () {
                                return u(this, function (e) {
                                    return i.has(t) || s.push(t), [2]
                                })
                            })
                        }), this.syncEngine.applyActiveTargetsChange(o, s)
                    }, t.prototype.handleOnlineStateEvent = function (t) {
                        this.activeClients[t.clientId] && this.onlineStateHandler(t.onlineState)
                    }, t
                }();
            var yu = function () {
                    function t() {
                        this.localState = new pu, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null
                    }
                    return t.prototype.addPendingMutation = function (t) {}, t.prototype.updateMutationState = function (t, e, n) {}, t.prototype.addLocalQueryTarget = function (t) {
                        return this.localState.addQueryTarget(t), this.queryState[t] || "not-current"
                    }, t.prototype.updateQueryState = function (t, e, n) {
                        this.queryState[t] = e
                    }, t.prototype.removeLocalQueryTarget = function (t) {
                        this.localState.removeQueryTarget(t)
                    }, t.prototype.isLocalQueryTarget = function (t) {
                        return this.localState.activeTargetIds.has(t)
                    }, t.prototype.clearQueryState = function (t) {
                        delete this.queryState[t]
                    }, t.prototype.getAllActiveQueryTargets = function () {
                        return this.localState.activeTargetIds
                    }, t.prototype.isActiveQueryTarget = function (t) {
                        return this.localState.activeTargetIds.has(t)
                    }, t.prototype.start = function () {
                        return this.localState = new pu, Promise.resolve()
                    }, t.prototype.handleUserChange = function (t, e, n) {}, t.prototype.setOnlineState = function (t) {}, t.prototype.shutdown = function () {}, t.prototype.writeSequenceNumber = function (t) {}, t
                }(),
                gu = function () {
                    function t(t, e) {
                        this.cacheSizeBytes = t, this.experimentalTabSynchronization = e
                    }
                    return t.prototype.lruParams = function () {
                        return aa.withCacheSize(this.cacheSizeBytes)
                    }, t
                }(),
                vu = function () {
                    return function () {}
                }(),
                bu = function () {
                    function t(t, e, n, r) {
                        this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r, this.clientId = Rr.newId()
                    }
                    return t.prototype.start = function (t) {
                        var e = this,
                            n = new Xo,
                            r = new Xo,
                            i = !1;
                        return this.credentials.setChangeListener(function (o) {
                            i ? e.asyncQueue.enqueueAndForget(function () {
                                return e.handleCredentialChange(o)
                            }) : (i = !0, e.initializePersistence(t, r, o).then(function (t) {
                                return e.initializeRest(o, t)
                            }).then(n.resolve, n.reject))
                        }), this.asyncQueue.enqueueAndForget(function () {
                            return n.promise
                        }), r.promise
                    }, t.prototype.enableNetwork = function () {
                        var t = this;
                        return this.asyncQueue.enqueue(function () {
                            return t.syncEngine.enableNetwork()
                        })
                    }, t.prototype.initializePersistence = function (t, e, n) {
                        var r = this;
                        return t instanceof gu ? this.startIndexedDbPersistence(n, t).then(function (t) {
                            return e.resolve(), t
                        }).catch(function (t) {
                            if (e.reject(t), !r.canFallback(t)) throw t;
                            return console.warn("Error enabling offline storage. Falling back to storage disabled: " + t), r.startMemoryPersistence()
                        }) : (e.resolve(), this.startMemoryPersistence())
                    }, t.prototype.canFallback = function (t) {
                        return t instanceof sr ? t.code === or.FAILED_PRECONDITION || t.code === or.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code)
                    }, t.prototype.startIndexedDbPersistence = function (t, e) {
                        var n = this,
                            r = ma.buildStoragePrefix(this.databaseInfo),
                            i = new Bo(this.databaseInfo.databaseId, {
                                useProto3Json: !0
                            });
                        return Promise.resolve().then(function () {
                            return a(n, void 0, void 0, function () {
                                var n, o;
                                return u(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e.experimentalTabSynchronization && !mu.isAvailable(this.platform)) throw new sr(or.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                                            return o = e.lruParams(), e.experimentalTabSynchronization ? (this.sharedClientState = new mu(this.asyncQueue, this.platform, r, this.clientId, t), [4, ma.createMultiClientIndexedDbPersistence(r, this.clientId, this.platform, this.asyncQueue, i, o, {
                                                sequenceNumberSyncer: this.sharedClientState
                                            })]) : [3, 2];
                                        case 1:
                                            return n = s.sent(), [3, 4];
                                        case 2:
                                            return this.sharedClientState = new yu, [4, ma.createIndexedDbPersistence(r, this.clientId, this.platform, this.asyncQueue, i, o)];
                                        case 3:
                                            n = s.sent(), s.label = 4;
                                        case 4:
                                            return this.persistence = n, [2, n.referenceDelegate.garbageCollector]
                                    }
                                })
                            })
                        })
                    }, t.prototype.startMemoryPersistence = function () {
                        return this.persistence = Ra.createEagerPersistence(this.clientId), this.sharedClientState = new yu, Promise.resolve(null)
                    }, t.prototype.initializeRest = function (t, e) {
                        var n = this;
                        return Zn("FirestoreClient", "Initializing. user=", t.uid), this.platform.loadConnection(this.databaseInfo).then(function (r) {
                            return a(n, void 0, void 0, function () {
                                var n, i, o, s, c = this;
                                return u(this, function (h) {
                                    switch (h.label) {
                                        case 0:
                                            return this.localStore = new Ia(this.persistence, t), e && (this.lruScheduler = new ua(e, this.asyncQueue, this.localStore)), n = this.platform.newSerializer(this.databaseInfo.databaseId), i = new Ka(this.asyncQueue, r, this.credentials, n), o = function (t) {
                                                return c.syncEngine.applyOnlineStateChange(t, xa.RemoteStore)
                                            }, s = function (t) {
                                                return c.syncEngine.applyOnlineStateChange(t, xa.SharedClientState)
                                            }, this.remoteStore = new za(this.localStore, i, this.asyncQueue, o), this.syncEngine = new nu(this.localStore, this.remoteStore, this.sharedClientState, t), this.sharedClientState.onlineStateHandler = s, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new Ha(this.syncEngine), [4, this.sharedClientState.start()];
                                        case 1:
                                            return h.sent(), [4, this.remoteStore.start()];
                                        case 2:
                                            return h.sent(), [4, this.persistence.setPrimaryStateListener(function (t) {
                                                return a(c, void 0, void 0, function () {
                                                    return u(this, function (e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return [4, this.syncEngine.applyPrimaryState(t)];
                                                            case 1:
                                                                return e.sent(), this.lruScheduler && (t && !this.lruScheduler.started ? this.lruScheduler.start() : t || this.lruScheduler.stop()), [2]
                                                        }
                                                    })
                                                })
                                            })];
                                        case 3:
                                            return h.sent(), [2]
                                    }
                                })
                            })
                        })
                    }, t.prototype.handleCredentialChange = function (t) {
                        return this.asyncQueue.verifyOperationInProgress(), Zn("FirestoreClient", "Credential Changed. Current user: " + t.uid), this.syncEngine.handleCredentialChange(t)
                    }, t.prototype.disableNetwork = function () {
                        var t = this;
                        return this.asyncQueue.enqueue(function () {
                            return t.syncEngine.disableNetwork()
                        })
                    }, t.prototype.shutdown = function (t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function () {
                            return a(e, void 0, void 0, function () {
                                return u(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.lruScheduler && this.lruScheduler.stop(), [4, this.remoteStore.shutdown()];
                                        case 1:
                                            return e.sent(), [4, this.sharedClientState.shutdown()];
                                        case 2:
                                            return e.sent(), [4, this.persistence.shutdown(t && t.purgePersistenceWithDataLoss)];
                                        case 3:
                                            return e.sent(), this.credentials.removeChangeListener(), [2]
                                    }
                                })
                            })
                        })
                    }, t.prototype.listen = function (t, e, n) {
                        var r = this,
                            i = new Xa(t, e, n);
                        return this.asyncQueue.enqueueAndForget(function () {
                            return r.eventMgr.listen(i)
                        }), i
                    }, t.prototype.unlisten = function (t) {
                        var e = this;
                        this.asyncQueue.enqueueAndForget(function () {
                            return e.eventMgr.unlisten(t)
                        })
                    }, t.prototype.getDocumentFromLocalCache = function (t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function () {
                            return e.localStore.readDocument(t)
                        }).then(function (t) {
                            if (t instanceof Yr) return t;
                            if (t instanceof Jr) return null;
                            throw new sr(or.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")
                        })
                    }, t.prototype.getDocumentsFromLocalCache = function (t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function () {
                            return e.localStore.executeQuery(t)
                        }).then(function (e) {
                            var n = po(),
                                r = new $a(t, n),
                                i = r.computeDocChanges(e);
                            return r.applyChanges(i, !1).snapshot
                        })
                    }, t.prototype.write = function (t) {
                        var e = this,
                            n = new Xo;
                        return this.asyncQueue.enqueueAndForget(function () {
                            return e.syncEngine.write(t, n)
                        }), n.promise
                    }, t.prototype.databaseId = function () {
                        return this.databaseInfo.databaseId
                    }, t.prototype.transaction = function (t) {
                        var e = this;
                        return this.asyncQueue.enqueue(function () {
                            return a(e, void 0, void 0, function () {
                                return u(this, function (t) {
                                    return [2]
                                })
                            })
                        }).then(function () {
                            return e.syncEngine.runTransaction(t)
                        })
                    }, t
                }(),
                wu = function () {
                    function t(t) {
                        this.observer = t, this.muted = !1
                    }
                    return t.prototype.next = function (t) {
                        this.scheduleEvent(this.observer.next, t)
                    }, t.prototype.error = function (t) {
                        this.scheduleEvent(this.observer.error, t)
                    }, t.prototype.mute = function () {
                        this.muted = !0
                    }, t.prototype.scheduleEvent = function (t, e) {
                        var n = this;
                        this.muted || setTimeout(function () {
                            n.muted || t(e)
                        }, 0)
                    }, t
                }(),
                Eu = function () {
                    function t() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        ! function (t, e, n, r) {
                            if (!(e instanceof Array) || e.length < r) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + kr(r, "element") + ".")
                        }("FieldPath", t, "fieldNames", 1);
                        for (var n = 0; n < t.length; ++n)
                            if (yr("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new sr(or.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                        this._internalPath = new Gr(t)
                    }
                    return t.documentId = function () {
                        return t._DOCUMENT_ID
                    }, t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) throw Nr("isEqual", "FieldPath", 1, e);
                        return this._internalPath.isEqual(e._internalPath)
                    }, t._DOCUMENT_ID = new t(Gr.keyField().canonicalString()), t
                }(),
                Su = new RegExp("[~\\*/\\[\\]]");
            var Tu = function () {
                    return function (t, e) {
                        this.user = e, this.type = "OAuth", this.authHeaders = {
                            Authorization: "Bearer " + t
                        }
                    }
                }(),
                Iu = function () {
                    function t() {
                        this.changeListener = null
                    }
                    return t.prototype.getToken = function () {
                        return Promise.resolve(null)
                    }, t.prototype.invalidateToken = function () {}, t.prototype.setChangeListener = function (t) {
                        nr(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = t, t(ru.UNAUTHENTICATED)
                    }, t.prototype.removeChangeListener = function () {
                        nr(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null
                    }, t
                }(),
                Cu = function () {
                    function t(t) {
                        var e = this;
                        this.app = t, this.tokenListener = null, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh = !1, this.tokenListener = function () {
                            e.tokenCounter++, e.currentUser = e.getUser(), e.changeListener && e.changeListener(e.currentUser)
                        }, this.tokenCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
                    }
                    return t.prototype.getToken = function () {
                        var t = this;
                        nr(null != this.tokenListener, "getToken cannot be called after listener removed.");
                        var e = this.tokenCounter,
                            n = this.forceRefresh;
                        return this.forceRefresh = !1, this.app.INTERNAL.getToken(n).then(function (n) {
                            if (t.tokenCounter !== e) throw new sr(or.ABORTED, "getToken aborted due to token change.");
                            return n ? (nr("string" == typeof n.accessToken, "Invalid tokenData returned from getToken():" + n), new Tu(n.accessToken, t.currentUser)) : null
                        })
                    }, t.prototype.invalidateToken = function () {
                        this.forceRefresh = !0
                    }, t.prototype.setChangeListener = function (t) {
                        nr(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = t, this.currentUser && t(this.currentUser)
                    }, t.prototype.removeChangeListener = function () {
                        nr(null != this.tokenListener, "removeChangeListener() called twice"), nr(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null
                    }, t.prototype.getUser = function () {
                        var t = this.app.INTERNAL.getUid();
                        return nr(null === t || "string" == typeof t, "Received invalid UID: " + t), new ru(t)
                    }, t
                }(),
                Du = function () {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = ru.FIRST_PARTY, nr(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                    }
                    return Object.defineProperty(t.prototype, "authHeaders", {
                        get: function () {
                            return {
                                Authorization: this.gapi.auth.getAuthHeaderValueForFirstParty([]),
                                "X-Goog-AuthUser": this.sessionIndex
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                Nu = function () {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e, nr(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                    }
                    return t.prototype.getToken = function () {
                        return Promise.resolve(new Du(this.gapi, this.sessionIndex))
                    }, t.prototype.setChangeListener = function (t) {
                        t(ru.FIRST_PARTY)
                    }, t.prototype.removeChangeListener = function () {}, t.prototype.invalidateToken = function () {}, t
                }();

            function Au(t) {
                return function (t, e) {
                    if ("object" != typeof t || null === t) return !1;
                    for (var n = t, r = 0, i = e; r < i.length; r++) {
                        var o = i[r];
                        if (o in n && "function" == typeof n[o]) return !0
                    }
                    return !1
                }(t, ["next", "error", "complete"])
            }
            var ku, Ru = function () {
                    function t(t) {
                        this._methodName = t
                    }
                    return t.delete = function () {
                        return Mu.instance
                    }, t.serverTimestamp = function () {
                        return Ou.instance
                    }, t.arrayUnion = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return pr("FieldValue.arrayUnion", arguments, 1), new _u(t)
                    }, t.arrayRemove = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return pr("FieldValue.arrayRemove", arguments, 1), new Pu(t)
                    }, t.prototype.isEqual = function (t) {
                        return this === t
                    }, t
                }(),
                Mu = function (t) {
                    function e() {
                        return t.call(this, "FieldValue.delete") || this
                    }
                    return s(e, t), e.instance = new e, e
                }(Ru),
                Ou = function (t) {
                    function e() {
                        return t.call(this, "FieldValue.serverTimestamp") || this
                    }
                    return s(e, t), e.instance = new e, e
                }(Ru),
                _u = function (t) {
                    function e(e) {
                        var n = t.call(this, "FieldValue.arrayUnion") || this;
                        return n._elements = e, n
                    }
                    return s(e, t), e
                }(Ru),
                Pu = function (t) {
                    function e(e) {
                        var n = t.call(this, "FieldValue.arrayRemove") || this;
                        return n._elements = e, n
                    }
                    return s(e, t), e
                }(Ru),
                Lu = ar(Ru, "Use FieldValue.<field>() instead."),
                xu = /^__.*__$/,
                qu = function () {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function (t, e) {
                        var n = [];
                        return null !== this.fieldMask ? n.push(new Hi(t, this.data, this.fieldMask, e)) : n.push(new Gi(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new Xi(t, this.fieldTransforms)), n
                    }, t
                }(),
                Fu = function () {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function (t, e) {
                        var n = [new Hi(t, this.data, this.fieldMask, e)];
                        return this.fieldTransforms.length > 0 && n.push(new Xi(t, this.fieldTransforms)), n
                    }, t
                }();

            function Bu(t) {
                switch (t) {
                    case ku.Set:
                    case ku.MergeSet:
                    case ku.Update:
                        return !0;
                    case ku.Argument:
                        return !1;
                    default:
                        throw er("Unexpected case for UserDataSource: " + t)
                }
            }! function (t) {
                t[t.Set = 0] = "Set", t[t.Update = 1] = "Update", t[t.MergeSet = 2] = "MergeSet", t[t.Argument = 3] = "Argument"
            }(ku || (ku = {}));
            var Uu = function () {
                    function t(t, e, n, r, i, o) {
                        this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || []
                    }
                    return t.prototype.childContextForField = function (e) {
                        var n = null == this.path ? null : this.path.child(e),
                            r = new t(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                        return r.validatePathSegment(e), r
                    }, t.prototype.childContextForFieldPath = function (e) {
                        var n = null == this.path ? null : this.path.child(e),
                            r = new t(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                        return r.validatePath(), r
                    }, t.prototype.childContextForArray = function (e) {
                        return new t(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask)
                    }, t.prototype.createError = function (t) {
                        var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path.toString() + ")";
                        return new sr(or.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e)
                    }, t.prototype.contains = function (t) {
                        return void 0 !== this.fieldMask.find(function (e) {
                            return t.isPrefixOf(e)
                        }) || void 0 !== this.fieldTransforms.find(function (e) {
                            return t.isPrefixOf(e.field)
                        })
                    }, t.prototype.validatePath = function () {
                        if (null !== this.path)
                            for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t))
                    }, t.prototype.validatePathSegment = function (t) {
                        if (Bu(this.dataSource) && xu.test(t)) throw this.createError("Document fields cannot begin and end with __")
                    }, t
                }(),
                Vu = function () {
                    return function (t, e) {
                        this.databaseId = t, this.key = e
                    }
                }(),
                Qu = function () {
                    function t(t) {
                        this.preConverter = t
                    }
                    return t.prototype.parseSetData = function (t, e) {
                        var n = new Uu(ku.Set, t, Gr.EMPTY_PATH);
                        Wu("Data must be an object, but it was:", n, e);
                        var r = this.parseData(e, n);
                        return new qu(r, null, n.fieldTransforms)
                    }, t.prototype.parseMergeData = function (t, e, n) {
                        var r = new Uu(ku.MergeSet, t, Gr.EMPTY_PATH);
                        Wu("Data must be an object, but it was:", r, e);
                        var i, o, s = this.parseData(e, r);
                        if (n) {
                            for (var a = new Ui(Gr.comparator), u = 0, c = n; u < c.length; u++) {
                                var h = c[u],
                                    l = void 0;
                                if (h instanceof Eu) l = h._internalPath;
                                else {
                                    if ("string" != typeof h) throw er("Expected stringOrFieldPath to be a string or a FieldPath");
                                    l = zu(t, h)
                                }
                                if (!r.contains(l)) throw new sr(or.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                                a = a.add(l)
                            }
                            i = Qi.fromSet(a), o = r.fieldTransforms.filter(function (t) {
                                return i.covers(t.field)
                            })
                        } else i = Qi.fromArray(r.fieldMask), o = r.fieldTransforms;
                        return new qu(s, i, o)
                    }, t.prototype.parseUpdateData = function (t, e) {
                        var n = this,
                            r = new Uu(ku.Update, t, Gr.EMPTY_PATH);
                        Wu("Data must be an object, but it was:", r, e);
                        var i = new Ui(Gr.comparator),
                            o = gi.EMPTY;
                        lr(e, function (e, s) {
                            var a = zu(t, e),
                                u = r.childContextForFieldPath(a);
                            if ((s = n.runPreConverter(s, u)) instanceof Mu) i = i.add(a);
                            else {
                                var c = n.parseData(s, u);
                                null != c && (i = i.add(a), o = o.set(a, c))
                            }
                        });
                        var s = Qi.fromSet(i);
                        return new Fu(o, s, r.fieldTransforms)
                    }, t.prototype.parseUpdateVarargs = function (t, e, n, r) {
                        var i = new Uu(ku.Update, t, Gr.EMPTY_PATH),
                            o = [ju(t, e)],
                            s = [n];
                        if (r.length % 2 != 0) throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                        for (var a = 0; a < r.length; a += 2) o.push(ju(t, r[a])), s.push(r[a + 1]);
                        var u = new Ui(Gr.comparator),
                            c = gi.EMPTY;
                        for (a = 0; a < o.length; ++a) {
                            var h = o[a],
                                l = i.childContextForFieldPath(h),
                                f = this.runPreConverter(s[a], l);
                            if (f instanceof Mu) u = u.add(h);
                            else {
                                var d = this.parseData(f, l);
                                null != d && (u = u.add(h), c = c.set(h, d))
                            }
                        }
                        var p = Qi.fromSet(u);
                        return new Fu(c, p, i.fieldTransforms)
                    }, t.prototype.parseQueryValue = function (t, e) {
                        var n = new Uu(ku.Argument, t, Gr.EMPTY_PATH),
                            r = this.parseData(e, n);
                        return nr(null != r, "Parsed data should not be null."), nr(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r
                    }, t.prototype.runPreConverter = function (t, e) {
                        try {
                            return this.preConverter(t)
                        } catch (t) {
                            var n = Gu(t);
                            throw e.createError(n)
                        }
                    }, t.prototype.parseData = function (t, e) {
                        if (Ku(t = this.runPreConverter(t, e))) return Wu("Unsupported field value:", e, t), this.parseObject(t, e);
                        if (t instanceof Ru) return this.parseSentinelFieldValue(t, e), null;
                        if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
                            if (e.arrayElement) throw e.createError("Nested arrays are not supported");
                            return this.parseArray(t, e)
                        }
                        return this.parseScalarValue(t, e)
                    }, t.prototype.parseObject = function (t, e) {
                        var n = this,
                            r = new $r(Mr);
                        return fr(t) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : lr(t, function (t, i) {
                            var o = n.parseData(i, e.childContextForField(t));
                            null != o && (r = r.insert(t, o))
                        }), new gi(r)
                    }, t.prototype.parseArray = function (t, e) {
                        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                            var s = o[i],
                                a = this.parseData(s, e.childContextForArray(r));
                            null == a && (a = oi.INSTANCE), n.push(a), r++
                        }
                        return new vi(n)
                    }, t.prototype.parseSentinelFieldValue = function (t, e) {
                        if (!Bu(e.dataSource)) throw e.createError(t._methodName + "() can only be used with update() and set()");
                        if (null === e.path) throw e.createError(t._methodName + "() is not currently supported inside arrays");
                        if (t instanceof Mu) {
                            if (e.dataSource !== ku.MergeSet) throw e.dataSource === ku.Update ? (nr(e.path.length > 0, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                            e.fieldMask.push(e.path)
                        } else if (t instanceof Ou) e.fieldTransforms.push(new Ki(e.path, Ji.instance));
                        else if (t instanceof _u) {
                            var n = this.parseArrayTransformElements(t._methodName, t._elements),
                                r = new Zi(n);
                            e.fieldTransforms.push(new Ki(e.path, r))
                        } else if (t instanceof Pu) {
                            n = this.parseArrayTransformElements(t._methodName, t._elements);
                            var i = new $i(n);
                            e.fieldTransforms.push(new Ki(e.path, i))
                        } else er("Unknown FieldValue type: " + t)
                    }, t.prototype.parseScalarValue = function (t, e) {
                        if (null === t) return oi.INSTANCE;
                        if ("number" == typeof t) return Ii(t) ? new ci(t) : new hi(t);
                        if ("boolean" == typeof t) return si.of(t);
                        if ("string" == typeof t) return new li(t);
                        if (t instanceof Date) return new fi(Ur.fromDate(t));
                        if (t instanceof Ur) return new fi(new Ur(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)));
                        if (t instanceof Br) return new yi(t);
                        if (t instanceof qr) return new pi(t);
                        if (t instanceof Vu) return new mi(t.databaseId, t.key);
                        throw e.createError("Unsupported field value: " + Ir(t))
                    }, t.prototype.parseArrayTransformElements = function (t, e) {
                        var n = this;
                        return e.map(function (e, r) {
                            var i = new Uu(ku.Argument, t, Gr.EMPTY_PATH);
                            return n.parseData(e, i.childContextForArray(r))
                        })
                    }, t
                }();

            function Ku(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Ur || t instanceof Br || t instanceof qr || t instanceof Vu || t instanceof Ru)
            }

            function Wu(t, e, n) {
                if (!Ku(n) || !Tr(n)) {
                    var r = Ir(n);
                    throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r)
                }
            }

            function ju(t, e) {
                if (e instanceof Eu) return e._internalPath;
                if ("string" == typeof e) return zu(t, e);
                throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }

            function zu(t, e) {
                try {
                    return function (t) {
                        if (t.search(Su) >= 0) throw new sr(or.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
                        try {
                            return new(Eu.bind.apply(Eu, [void 0].concat(t.split("."))))
                        } catch (e) {
                            throw new sr(or.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                        }
                    }(e)._internalPath
                } catch (e) {
                    var n = Gu(e);
                    throw new sr(or.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n)
                }
            }

            function Gu(t) {
                return t instanceof Error ? t.message : t.toString()
            }
            var Hu = "firestore.googleapis.com",
                Xu = !0,
                Yu = !0,
                Ju = aa.COLLECTION_DISABLED,
                Zu = function () {
                    function t(t) {
                        if (void 0 === t.host) {
                            if (void 0 !== t.ssl) throw new sr(or.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                            this.host = Hu, this.ssl = Xu
                        } else vr("settings", "non-empty string", "host", t.host), this.host = t.host, br("settings", "boolean", "ssl", t.ssl), this.ssl = cr(t.ssl, Xu);
                        if (Dr("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes"]), br("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, br("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? $n("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && $n("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = cr(t.timestampsInSnapshots, Yu), br("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = aa.DEFAULT_CACHE_SIZE_BYTES;
                        else {
                            if (t.cacheSizeBytes !== Ju && t.cacheSizeBytes < aa.MINIMUM_CACHE_SIZE_BYTES) throw new sr(or.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + aa.MINIMUM_CACHE_SIZE_BYTES);
                            this.cacheSizeBytes = t.cacheSizeBytes
                        }
                    }
                    return t.prototype.isEqual = function (t) {
                        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes
                    }, t
                }(),
                $u = function () {
                    return function () {}
                }(),
                tc = function () {
                    function t(e) {
                        var n = this;
                        this._queue = new Jo, this.INTERNAL = {
                            delete: function (t) {
                                return a(n, void 0, void 0, function () {
                                    return u(this, function (e) {
                                        return this._firestoreClient ? [2, this._firestoreClient.shutdown(t)] : [2]
                                    })
                                })
                            }
                        };
                        var r = new $u;
                        if ("object" == typeof e.options) {
                            var i = e;
                            r.firebaseApp = i, r.databaseId = t.databaseIdFromApp(i), r.persistenceKey = r.firebaseApp.name, r.credentials = new Cu(i)
                        } else {
                            var o = e;
                            if (!o.projectId) throw new sr(or.INVALID_ARGUMENT, "Must provide projectId");
                            r.databaseId = new Kr(o.projectId, o.database), r.persistenceKey = "[DEFAULT]", r.credentials = new Iu
                        }
                        r.settings = new Zu({}), this._config = r, this._databaseId = r.databaseId
                    }
                    return t.prototype.settings = function (t) {
                        if (dr("Firestore.settings", arguments, 1), yr("Firestore.settings", "object", 1, t), ur(t, "persistence")) throw new sr(or.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                        var e = new Zu(t);
                        if (this._firestoreClient && !this._config.settings.isEqual(e)) throw new sr(or.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                        this._config.settings = e, void 0 !== e.credentials && (this._config.credentials = function (t) {
                            if (!t) return new Iu;
                            switch (t.type) {
                                case "gapi":
                                    return new Nu(t.client, t.sessionIndex || "0");
                                case "provider":
                                    return t.client;
                                default:
                                    throw new sr(or.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                            }
                        }(e.credentials))
                    }, t.prototype.enableNetwork = function () {
                        return this.ensureClientConfigured(), this._firestoreClient.enableNetwork()
                    }, t.prototype.disableNetwork = function () {
                        return this.ensureClientConfigured(), this._firestoreClient.disableNetwork()
                    }, t.prototype.enablePersistence = function (t) {
                        if (this._firestoreClient) throw new sr(or.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                        return this.configureClient(new gu(this._config.settings.cacheSizeBytes, void 0 !== t && cr(t.experimentalTabSynchronization, !1)))
                    }, t.prototype.ensureClientConfigured = function () {
                        return this._firestoreClient || this.configureClient(new vu), this._firestoreClient
                    }, t.prototype.configureClient = function (t) {
                        var e = this;
                        nr(!!this._config.settings.host, "FirestoreSettings.host cannot be falsey"), nr(!this._firestoreClient, "configureClient() called multiple times");
                        var n = new Vr(this._config.databaseId, this._config.persistenceKey, this._config.settings.host, this._config.settings.ssl);
                        return this._dataConverter = new Qu(function (t) {
                            if (t instanceof rc) {
                                var n = e._config.databaseId,
                                    r = t.firestore._config.databaseId;
                                if (!r.isEqual(n)) throw new sr(or.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                                return new Vu(e._config.databaseId, t._key)
                            }
                            return t
                        }), this._firestoreClient = new bu(rr.getPlatform(), n, this._config.credentials, this._queue), this._firestoreClient.start(t)
                    }, t.databaseIdFromApp = function (t) {
                        var e = t.options;
                        if (!ur(e, "projectId")) throw new sr(or.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                        var n = e.projectId;
                        if (!n || "string" != typeof n) throw new sr(or.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                        return new Kr(n)
                    }, Object.defineProperty(t.prototype, "app", {
                        get: function () {
                            if (!this._config.firebaseApp) throw new sr(or.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                            return this._config.firebaseApp
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.collection = function (t) {
                        if (dr("Firestore.collection", arguments, 1), yr("Firestore.collection", "non-empty string", 1, t), !t) throw new sr(or.INVALID_ARGUMENT, "Must provide a non-empty collection path to collection()");
                        return this.ensureClientConfigured(), new cc(jr.fromString(t), this)
                    }, t.prototype.doc = function (t) {
                        if (dr("Firestore.doc", arguments, 1), yr("Firestore.doc", "non-empty string", 1, t), !t) throw new sr(or.INVALID_ARGUMENT, "Must provide a non-empty document path to doc()");
                        return this.ensureClientConfigured(), rc.forPath(jr.fromString(t), this)
                    }, t.prototype.runTransaction = function (t) {
                        var e = this;
                        return dr("Firestore.runTransaction", arguments, 1), yr("Firestore.runTransaction", "function", 1, t), this.ensureClientConfigured().transaction(function (n) {
                            return t(new ec(e, n))
                        })
                    }, t.prototype.batch = function () {
                        return this.ensureClientConfigured(), new nc(this)
                    }, Object.defineProperty(t, "logLevel", {
                        get: function () {
                            switch (Yn()) {
                                case jn.DEBUG:
                                    return "debug";
                                case jn.ERROR:
                                    return "error";
                                case jn.SILENT:
                                    return "silent";
                                default:
                                    return er("Unknown log level: " + Yn())
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.setLogLevel = function (t) {
                        switch (dr("Firestore.setLogLevel", arguments, 1), yr("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                            case "debug":
                                Jn(jn.DEBUG);
                                break;
                            case "error":
                                Jn(jn.ERROR);
                                break;
                            case "silent":
                                Jn(jn.SILENT);
                                break;
                            default:
                                throw new sr(or.INVALID_ARGUMENT, "Invalid log level: " + t)
                        }
                    }, t.prototype._areTimestampsInSnapshotsEnabled = function () {
                        return this._config.settings.timestampsInSnapshots
                    }, t
                }(),
                ec = function () {
                    function t(t, e) {
                        this._firestore = t, this._transaction = e
                    }
                    return t.prototype.get = function (t) {
                        var e = this;
                        dr("Transaction.get", arguments, 1);
                        var n = dc("Transaction.get", t, this._firestore);
                        return this._transaction.lookup([n._key]).then(function (t) {
                            if (!t || 1 !== t.length) return er("Mismatch in docs returned from document lookup.");
                            var r = t[0];
                            if (r instanceof Jr) return new oc(e._firestore, n._key, null, !1, !1);
                            if (r instanceof Yr) return new oc(e._firestore, n._key, r, !1, !1);
                            throw er("BatchGetDocumentsRequest returned unexpected document type: " + r.constructor.name)
                        })
                    }, t.prototype.set = function (t, e, n) {
                        mr("Transaction.set", arguments, 2, 3);
                        var r = dc("Transaction.set", t, this._firestore),
                            i = (n = hc("Transaction.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("Transaction.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("Transaction.set", e);
                        return this._transaction.set(r._key, i), this
                    }, t.prototype.update = function (t, e, n) {
                        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                        return "string" == typeof e || e instanceof Eu ? (pr("Transaction.update", arguments, 3), r = dc("Transaction.update", t, this._firestore), i = this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", e, n, o)) : (dr("Transaction.update", arguments, 2), r = dc("Transaction.update", t, this._firestore), i = this._firestore._dataConverter.parseUpdateData("Transaction.update", e)), this._transaction.update(r._key, i), this
                    }, t.prototype.delete = function (t) {
                        dr("Transaction.delete", arguments, 1);
                        var e = dc("Transaction.delete", t, this._firestore);
                        return this._transaction.delete(e._key), this
                    }, t
                }(),
                nc = function () {
                    function t(t) {
                        this._firestore = t, this._mutations = [], this._committed = !1
                    }
                    return t.prototype.set = function (t, e, n) {
                        mr("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                        var r = dc("WriteBatch.set", t, this._firestore),
                            i = (n = hc("WriteBatch.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("WriteBatch.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("WriteBatch.set", e);
                        return this._mutations = this._mutations.concat(i.toMutations(r._key, ji.NONE)), this
                    }, t.prototype.update = function (t, e, n) {
                        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                        return this.verifyNotCommitted(), "string" == typeof e || e instanceof Eu ? (pr("WriteBatch.update", arguments, 3), r = dc("WriteBatch.update", t, this._firestore), i = this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, o)) : (dr("WriteBatch.update", arguments, 2), r = dc("WriteBatch.update", t, this._firestore), i = this._firestore._dataConverter.parseUpdateData("WriteBatch.update", e)), this._mutations = this._mutations.concat(i.toMutations(r._key, ji.exists(!0))), this
                    }, t.prototype.delete = function (t) {
                        dr("WriteBatch.delete", arguments, 1), this.verifyNotCommitted();
                        var e = dc("WriteBatch.delete", t, this._firestore);
                        return this._mutations = this._mutations.concat(new Yi(e._key, ji.NONE)), this
                    }, t.prototype.commit = function () {
                        return a(this, void 0, void 0, function () {
                            return u(this, function (t) {
                                return this.verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2]
                            })
                        })
                    }, t.prototype.verifyNotCommitted = function () {
                        if (this._committed) throw new sr(or.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                    }, t
                }(),
                rc = function () {
                    function t(t, e) {
                        this._key = t, this.firestore = e, this._firestoreClient = this.firestore.ensureClientConfigured()
                    }
                    return t.forPath = function (e, n) {
                        if (e.length % 2 != 0) throw new sr(or.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.canonicalString() + " has " + e.length);
                        return new t(new Hr(e), n)
                    }, Object.defineProperty(t.prototype, "id", {
                        get: function () {
                            return this._key.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "parent", {
                        get: function () {
                            return new cc(this._key.path.popLast(), this.firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "path", {
                        get: function () {
                            return this._key.path.canonicalString()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.collection = function (t) {
                        if (dr("DocumentReference.collection", arguments, 1), yr("DocumentReference.collection", "non-empty string", 1, t), !t) throw new sr(or.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                        var e = jr.fromString(t);
                        return new cc(this._key.path.child(e), this.firestore)
                    }, t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) throw Nr("isEqual", "DocumentReference", 1, e);
                        return this.firestore === e.firestore && this._key.isEqual(e._key)
                    }, t.prototype.set = function (t, e) {
                        mr("DocumentReference.set", arguments, 1, 2);
                        var n = (e = hc("DocumentReference.set", e)).merge || e.mergeFields ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", t, e.mergeFields) : this.firestore._dataConverter.parseSetData("DocumentReference.set", t);
                        return this._firestoreClient.write(n.toMutations(this._key, ji.NONE))
                    }, t.prototype.update = function (t, e) {
                        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                        return "string" == typeof t || t instanceof Eu ? (pr("DocumentReference.update", arguments, 2), n = this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, r)) : (dr("DocumentReference.update", arguments, 1), n = this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._firestoreClient.write(n.toMutations(this._key, ji.exists(!0)))
                    }, t.prototype.delete = function () {
                        return dr("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new Yi(this._key, ji.NONE)])
                    }, t.prototype.onSnapshot = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        mr("DocumentReference.onSnapshot", arguments, 1, 4);
                        var n, r = {
                                includeMetadataChanges: !1
                            },
                            i = 0;
                        "object" != typeof t[i] || Au(t[i]) || (Dr("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), br("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                        var o = {
                            includeMetadataChanges: r.includeMetadataChanges
                        };
                        return Au(t[i]) ? n = t[i] : (yr("DocumentReference.onSnapshot", "function", i, t[i]), gr("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), gr("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), n = {
                            next: t[i],
                            error: t[i + 1],
                            complete: t[i + 2]
                        }), this.onSnapshotInternal(o, n)
                    }, t.prototype.onSnapshotInternal = function (t, e) {
                        var n = this,
                            r = function (t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        e.error && (r = e.error.bind(e));
                        var i = new wu({
                                next: function (t) {
                                    if (e.next) {
                                        nr(t.docs.size <= 1, "Too many documents returned on a document query");
                                        var r = t.docs.get(n._key);
                                        e.next(new oc(n.firestore, n._key, r, t.fromCache, t.hasPendingWrites))
                                    }
                                },
                                error: r
                            }),
                            o = this._firestoreClient.listen(Di.atPath(this._key.path), i, t);
                        return function () {
                            i.mute(), n._firestoreClient.unlisten(o)
                        }
                    }, t.prototype.get = function (t) {
                        var e = this;
                        return mr("DocumentReference.get", arguments, 0, 1), fc("DocumentReference.get", t), new Promise(function (n, r) {
                            t && "cache" === t.source ? e.firestore.ensureClientConfigured().getDocumentFromLocalCache(e._key).then(function (t) {
                                n(new oc(e.firestore, e._key, t, !0, t instanceof Yr && t.hasLocalMutations))
                            }, r) : e.getViaSnapshotListener(n, r, t)
                        })
                    }, t.prototype.getViaSnapshotListener = function (t, e, n) {
                        var r = this.onSnapshotInternal({
                            includeMetadataChanges: !0,
                            waitForSyncWhenOnline: !0
                        }, {
                            next: function (i) {
                                r(), !i.exists && i.metadata.fromCache ? e(new sr(or.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new sr(or.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i)
                            },
                            error: e
                        })
                    }, t
                }(),
                ic = function () {
                    function t(t, e) {
                        this.hasPendingWrites = t, this.fromCache = e
                    }
                    return t.prototype.isEqual = function (t) {
                        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                    }, t
                }(),
                oc = function () {
                    function t(t, e, n, r, i) {
                        this._firestore = t, this._key = e, this._document = n, this._fromCache = r, this._hasPendingWrites = i
                    }
                    return t.prototype.data = function (t) {
                        return mr("DocumentSnapshot.data", arguments, 0, 1), t = lc("DocumentSnapshot.data", t), this._document ? this.convertObject(this._document.data, ri.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled())) : void 0
                    }, t.prototype.get = function (t, e) {
                        if (mr("DocumentSnapshot.get", arguments, 1, 2), e = lc("DocumentSnapshot.get", e), this._document) {
                            var n = this._document.data.field(ju("DocumentSnapshot.get", t));
                            if (void 0 !== n) return this.convertValue(n, ri.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled()))
                        }
                    }, Object.defineProperty(t.prototype, "id", {
                        get: function () {
                            return this._key.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ref", {
                        get: function () {
                            return new rc(this._key, this._firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "exists", {
                        get: function () {
                            return null !== this._document
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "metadata", {
                        get: function () {
                            return new ic(this._hasPendingWrites, this._fromCache)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) throw Nr("isEqual", "DocumentSnapshot", 1, e);
                        return this._firestore === e._firestore && this._fromCache === e._fromCache && this._key.isEqual(e._key) && (null === this._document ? null === e._document : this._document.isEqual(e._document))
                    }, t.prototype.convertObject = function (t, e) {
                        var n = this,
                            r = {};
                        return t.forEach(function (t, i) {
                            r[t] = n.convertValue(i, e)
                        }), r
                    }, t.prototype.convertValue = function (t, e) {
                        if (t instanceof gi) return this.convertObject(t, e);
                        if (t instanceof vi) return this.convertArray(t, e);
                        if (t instanceof mi) {
                            var n = t.value(e),
                                r = this._firestore.ensureClientConfigured().databaseId();
                            return t.databaseId.isEqual(r) || $n("Document " + this._key.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new rc(n, this._firestore)
                        }
                        return t.value(e)
                    }, t.prototype.convertArray = function (t, e) {
                        var n = this;
                        return t.internalValue.map(function (t) {
                            return n.convertValue(t, e)
                        })
                    }, t
                }(),
                sc = function (t) {
                    function e(e, n, r, i, o) {
                        return t.call(this, e, n, r, i, o) || this
                    }
                    return s(e, t), e.prototype.data = function (e) {
                        var n = t.prototype.data.call(this, e);
                        return nr("object" == typeof n, "Document in a QueryDocumentSnapshot should exist"), n
                    }, e
                }(oc),
                ac = function () {
                    function t(t, e) {
                        this._query = t, this.firestore = e
                    }
                    return t.prototype.where = function (e, n, r) {
                        var i;
                        dr("Query.where", arguments, 3), yr("Query.where", "non-empty string", 2, n), Cr("Query.where", 3, r);
                        var o = ju("Query.where", e),
                            s = Ai.fromString(n);
                        if (o.isKeyField()) {
                            if (s === Ai.ARRAY_CONTAINS) throw new sr(or.INVALID_ARGUMENT, "Invalid Query. You can't perform array-contains queries on FieldPath.documentId() since document IDs are not arrays.");
                            if ("string" == typeof r) {
                                if (-1 !== r.indexOf("/")) throw new sr(or.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it contains a slash.");
                                if ("" === r) throw new sr(or.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string.");
                                var a = this._query.path.child(new jr([r]));
                                nr(a.length % 2 == 0, "Path should be a document key"), i = new mi(this.firestore._databaseId, new Hr(a))
                            } else {
                                if (!(r instanceof rc)) throw new sr(or.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: " + Ir(r) + ".");
                                var u = r;
                                i = new mi(this.firestore._databaseId, u._key)
                            }
                        } else i = this.firestore._dataConverter.parseQueryValue("Query.where", r);
                        var c = Ni.create(o, s, i);
                        return this.validateNewFilter(c), new t(this._query.addFilter(c), this.firestore)
                    }, t.prototype.orderBy = function (e, n) {
                        var r;
                        if (mr("Query.orderBy", arguments, 1, 2), gr("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = Oi.ASCENDING;
                        else {
                            if ("desc" !== n) throw new sr(or.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
                            r = Oi.DESCENDING
                        }
                        if (null !== this._query.startAt) throw new sr(or.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                        if (null !== this._query.endAt) throw new sr(or.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                        var i = ju("Query.orderBy", e),
                            o = new Pi(i, r);
                        return this.validateNewOrderBy(o), new t(this._query.addOrderBy(o), this.firestore)
                    }, t.prototype.limit = function (e) {
                        if (dr("Query.limit", arguments, 1), yr("Query.limit", "number", 1, e), e <= 0) throw new sr(or.INVALID_ARGUMENT, "Invalid Query. Query limit (" + e + ") is invalid. Limit must be positive.");
                        return new t(this._query.withLimit(e), this.firestore)
                    }, t.prototype.startAt = function (e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        pr("Query.startAt", arguments, 1);
                        var i = this.boundFromDocOrFields("Query.startAt", e, n, !0);
                        return new t(this._query.withStartAt(i), this.firestore)
                    }, t.prototype.startAfter = function (e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        pr("Query.startAfter", arguments, 1);
                        var i = this.boundFromDocOrFields("Query.startAfter", e, n, !1);
                        return new t(this._query.withStartAt(i), this.firestore)
                    }, t.prototype.endBefore = function (e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        pr("Query.endBefore", arguments, 1);
                        var i = this.boundFromDocOrFields("Query.endBefore", e, n, !0);
                        return new t(this._query.withEndAt(i), this.firestore)
                    }, t.prototype.endAt = function (e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        pr("Query.endAt", arguments, 1);
                        var i = this.boundFromDocOrFields("Query.endAt", e, n, !1);
                        return new t(this._query.withEndAt(i), this.firestore)
                    }, t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) throw Nr("isEqual", "Query", 1, e);
                        return this.firestore === e.firestore && this._query.isEqual(e._query)
                    }, t.prototype.boundFromDocOrFields = function (t, e, n, r) {
                        if (Cr(t, 1, e), e instanceof oc) {
                            if (n.length > 0) throw new sr(or.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                            var i = e;
                            if (!i.exists) throw new sr(or.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                            return this.boundFromDocument(t, i._document, r)
                        }
                        var o = [e].concat(n);
                        return this.boundFromFields(t, o, r)
                    }, t.prototype.boundFromDocument = function (t, e, n) {
                        for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) {
                            var s = o[i];
                            if (s.field.isKeyField()) r.push(new mi(this.firestore._databaseId, e.key));
                            else {
                                var a = e.field(s.field);
                                if (void 0 === a) {
                                    var u = s.field.canonicalString();
                                    throw new sr(or.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                                }
                                r.push(a)
                            }
                        }
                        return new _i(r, n)
                    }, t.prototype.boundFromFields = function (t, e, n) {
                        var r = this._query.explicitOrderBy;
                        if (e.length > r.length) throw new sr(or.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                        for (var i = [], o = 0; o < e.length; o++) {
                            var s = e[o];
                            if (r[o].field.isKeyField()) {
                                if ("string" != typeof s) throw new sr(or.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                                if (-1 !== s.indexOf("/")) throw new sr(or.INVALID_ARGUMENT, "Invalid query. Document ID '" + s + "' contains a slash in " + t + "()");
                                var a = new Hr(this._query.path.child(s));
                                i.push(new mi(this.firestore._databaseId, a))
                            } else {
                                var u = this.firestore._dataConverter.parseQueryValue(t, s);
                                i.push(u)
                            }
                        }
                        return new _i(i, n)
                    }, t.prototype.onSnapshot = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        mr("Query.onSnapshot", arguments, 1, 4);
                        var n, r = {},
                            i = 0;
                        return "object" != typeof t[i] || Au(t[i]) || (Dr("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), br("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), Au(t[i]) ? n = t[i] : (yr("Query.onSnapshot", "function", i, t[i]), gr("Query.onSnapshot", "function", i + 1, t[i + 1]), gr("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
                            next: t[i],
                            error: t[i + 1],
                            complete: t[i + 2]
                        }), this.onSnapshotInternal(r, n)
                    }, t.prototype.onSnapshotInternal = function (t, e) {
                        var n = this,
                            r = function (t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        e.error && (r = e.error.bind(e));
                        var i = new wu({
                                next: function (t) {
                                    e.next && e.next(new uc(n.firestore, n._query, t))
                                },
                                error: r
                            }),
                            o = this.firestore.ensureClientConfigured(),
                            s = o.listen(this._query, i, t);
                        return function () {
                            i.mute(), o.unlisten(s)
                        }
                    }, t.prototype.get = function (t) {
                        var e = this;
                        return mr("Query.get", arguments, 0, 1), fc("Query.get", t), new Promise(function (n, r) {
                            t && "cache" === t.source ? e.firestore.ensureClientConfigured().getDocumentsFromLocalCache(e._query).then(function (t) {
                                n(new uc(e.firestore, e._query, t))
                            }, r) : e.getViaSnapshotListener(n, r, t)
                        })
                    }, t.prototype.getViaSnapshotListener = function (t, e, n) {
                        var r = this.onSnapshotInternal({
                            includeMetadataChanges: !0,
                            waitForSyncWhenOnline: !0
                        }, {
                            next: function (i) {
                                r(), i.metadata.fromCache && n && "server" === n.source ? e(new sr(or.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i)
                            },
                            error: e
                        })
                    }, t.prototype.validateNewFilter = function (t) {
                        if (t instanceof ki)
                            if (t.isInequality()) {
                                var e = this._query.getInequalityFilterField();
                                if (null !== e && !e.isEqual(t.field)) throw new sr(or.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + e.toString() + "' and '" + t.field.toString() + "'");
                                var n = this._query.getFirstOrderByField();
                                null !== n && this.validateOrderByAndInequalityMatch(t.field, n)
                            } else if (t.op === Ai.ARRAY_CONTAINS && this._query.hasArrayContainsFilter()) throw new sr(or.INVALID_ARGUMENT, "Invalid query. Queries only support a single array-contains filter.")
                    }, t.prototype.validateNewOrderBy = function (t) {
                        if (null === this._query.getFirstOrderByField()) {
                            var e = this._query.getInequalityFilterField();
                            null !== e && this.validateOrderByAndInequalityMatch(e, t.field)
                        }
                    }, t.prototype.validateOrderByAndInequalityMatch = function (t, e) {
                        if (!e.isEqual(t)) throw new sr(or.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.")
                    }, t
                }(),
                uc = function () {
                    function t(t, e, n) {
                        this._firestore = t, this._originalQuery = e, this._snapshot = n, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new ic(n.hasPendingWrites, n.fromCache)
                    }
                    return Object.defineProperty(t.prototype, "docs", {
                        get: function () {
                            var t = [];
                            return this.forEach(function (e) {
                                return t.push(e)
                            }), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "empty", {
                        get: function () {
                            return this._snapshot.docs.isEmpty()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this._snapshot.docs.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEach = function (t, e) {
                        var n = this;
                        mr("QuerySnapshot.forEach", arguments, 1, 2), yr("QuerySnapshot.forEach", "function", 1, t), this._snapshot.docs.forEach(function (r) {
                            t.call(e, n.convertToDocumentImpl(r))
                        })
                    }, Object.defineProperty(t.prototype, "query", {
                        get: function () {
                            return new ac(this._originalQuery, this._firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.docChanges = function (t) {
                        t && (Dr("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), br("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                        var e = !(!t || !t.includeMetadataChanges);
                        if (e && this._snapshot.excludesMetadataChanges) throw new sr(or.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function (t, e, n) {
                            if (n.oldDocs.isEmpty()) {
                                var r, i = 0;
                                return n.docChanges.map(function (e) {
                                    var o = new sc(t, e.doc.key, e.doc, n.fromCache, n.mutatedKeys.has(e.doc.key));
                                    return nr(e.type === go.Added, "Invalid event type for first snapshot"), nr(!r || n.query.docComparator(r, e.doc) < 0, "Got added events in wrong order"), r = e.doc, {
                                        type: "added",
                                        doc: o,
                                        oldIndex: -1,
                                        newIndex: i++
                                    }
                                })
                            }
                            var o = n.oldDocs;
                            return n.docChanges.filter(function (t) {
                                return e || t.type !== go.Metadata
                            }).map(function (e) {
                                var r = new sc(t, e.doc.key, e.doc, n.fromCache, n.mutatedKeys.has(e.doc.key)),
                                    i = -1,
                                    s = -1;
                                return e.type !== go.Added && (nr((i = o.indexOf(e.doc.key)) >= 0, "Index for document not found"), o = o.delete(e.doc.key)), e.type !== go.Removed && (o = o.add(e.doc), s = o.indexOf(e.doc.key)), {
                                    type: function (t) {
                                        switch (t) {
                                            case go.Added:
                                                return "added";
                                            case go.Modified:
                                            case go.Metadata:
                                                return "modified";
                                            case go.Removed:
                                                return "removed";
                                            default:
                                                return er("Unknown change type: " + t)
                                        }
                                    }(e.type),
                                    doc: r,
                                    oldIndex: i,
                                    newIndex: s
                                }
                            })
                        }(this._firestore, e, this._snapshot), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges
                    }, t.prototype.isEqual = function (e) {
                        if (!(e instanceof t)) throw Nr("isEqual", "QuerySnapshot", 1, e);
                        return this._firestore === e._firestore && this._originalQuery.isEqual(e._originalQuery) && this._snapshot.isEqual(e._snapshot)
                    }, t.prototype.convertToDocumentImpl = function (t) {
                        return new sc(this._firestore, t.key, t, this.metadata.fromCache, this._snapshot.mutatedKeys.has(t.key))
                    }, t
                }();
            ["length", "forEach", "map"].concat("undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function (t) {
                try {
                    Object.defineProperty(uc.prototype.docChanges, t, {
                        get: function () {
                            return function () {
                                throw new sr(or.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"')
                            }()
                        }
                    })
                } catch (t) {}
            });
            var cc = function (t) {
                function e(e, n) {
                    var r = t.call(this, Di.atPath(e), n) || this;
                    if (e.length % 2 != 1) throw new sr(or.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.canonicalString() + " has " + e.length);
                    return r
                }
                return s(e, t), Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._query.path.lastSegment()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "parent", {
                    get: function () {
                        var t = this._query.path.popLast();
                        return t.isEmpty() ? null : new rc(new Hr(t), this.firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "path", {
                    get: function () {
                        return this._query.path.canonicalString()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.doc = function (t) {
                    if (mr("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = Rr.newId()), yr("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new sr(or.INVALID_ARGUMENT, "Document path must be a non-empty string");
                    var e = jr.fromString(t);
                    return rc.forPath(this._query.path.child(e), this.firestore)
                }, e.prototype.add = function (t) {
                    dr("CollectionReference.add", arguments, 1), yr("CollectionReference.add", "object", 1, t);
                    var e = this.doc();
                    return e.set(t).then(function () {
                        return e
                    })
                }, e
            }(ac);

            function hc(t, e) {
                if (void 0 === e) return {
                    merge: !1
                };
                if (Dr(t, e, ["merge", "mergeFields"]), br(t, "boolean", "merge", e.merge), wr(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function (t) {
                        return "string" == typeof t || t instanceof Eu
                    }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new sr(or.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                return e
            }

            function lc(t, e) {
                return void 0 === e ? {} : (Dr(t, e, ["serverTimestamps"]), Er(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
            }

            function fc(t, e) {
                gr(t, "object", 1, e), e && (Dr(t, e, ["source"]), Er(t, 0, "source", e.source, ["default", "server", "cache"]))
            }

            function dc(t, e, n) {
                if (e instanceof rc) {
                    if (e.firestore !== n) throw new sr(or.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return e
                }
                throw Nr(t, "DocumentReference", 1, e)
            }
            var pc = ar(tc, "Use firebase.firestore() instead."),
                mc = ar(ec, "Use firebase.firestore().runTransaction() instead."),
                yc = ar(nc, "Use firebase.firestore().batch() instead."),
                gc = ar(rc, "Use firebase.firestore().doc() instead."),
                vc = ar(oc),
                bc = ar(sc),
                wc = ar(ac),
                Ec = ar(uc),
                Sc = ar(cc, "Use firebase.firestore().collection() instead."),
                Tc = {
                    Firestore: pc,
                    GeoPoint: Br,
                    Timestamp: Ur,
                    Blob: Fr,
                    Transaction: mc,
                    WriteBatch: yc,
                    DocumentReference: gc,
                    DocumentSnapshot: vc,
                    Query: wc,
                    QueryDocumentSnapshot: bc,
                    QuerySnapshot: Ec,
                    CollectionReference: Sc,
                    FieldPath: Eu,
                    FieldValue: Lu,
                    setLogLevel: tc.setLogLevel,
                    CACHE_SIZE_UNLIMITED: Ju
                };

            function Ic(t) {
                t.INTERNAL.registerService("firestore", function (t) {
                    return new tc(t)
                }, function (t) {
                    nr(t && "object" == typeof t, "shallowCopy() expects object parameter.");
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(Tc))
            }
            Ic(t)
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-firestore.js.map