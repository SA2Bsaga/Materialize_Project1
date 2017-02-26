'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n,
      r,
      i = typeof t === 'undefined' ? 'undefined' : _typeof(t),
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = '1.10.2',
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function x(e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function H(e, t) {
    return t.toUpperCase();
  },
      q = function q(e) {
    (a.addEventListener || 'load' === e.type || 'complete' === a.readyState) && (_(), x.ready());
  },
      _ = function _() {
    a.addEventListener ? (a.removeEventListener('DOMContentLoaded', q, !1), e.removeEventListener('load', q, !1)) : (a.detachEvent('onreadystatechange', q), e.detachEvent('onload', q));
  };x.fn = x.prototype = { jquery: f, constructor: x, init: function init(e, n, r) {
      var i, o;if (!e) return this;if ('string' == typeof e) {
        if (i = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }return this;
        }if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);this.length = 1, this[0] = o;
        }return this.context = a, this.selector = e, this;
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    }, selector: '', length: 0, toArray: function toArray() {
      return g.call(this);
    }, get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function each(e, t) {
      return x.each(this, e, t);
    }, ready: function ready(e) {
      return x.ready.promise().done(e), this;
    }, slice: function slice() {
      return this.pushStack(g.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    }, map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;for ('boolean' == typeof s && (c = s, s = arguments[1] || {}, l = 2), 'object' == (typeof s === 'undefined' ? 'undefined' : _typeof(s)) || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
      if (null != (o = arguments[l])) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }return s;
  }, x.extend({ expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''), noConflict: function noConflict(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    }, ready: function ready(e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger('ready').off('ready'));
      }
    }, isFunction: function isFunction(e) {
      return 'function' === x.type(e);
    }, isArray: Array.isArray || function (e) {
      return 'array' === x.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e == e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return null == e ? e + '' : 'object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || 'function' == typeof e ? c[y.call(e)] || 'object' : typeof e === 'undefined' ? 'undefined' : _typeof(e);
    }, isPlainObject: function isPlainObject(e) {
      var n;if (!e || 'object' !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
        if (e.constructor && !v.call(e, 'constructor') && !v.call(e.constructor.prototype, 'isPrototypeOf')) return !1;
      } catch (r) {
        return !1;
      }if (x.support.ownLast) for (n in e) {
        return v.call(e, n);
      }for (n in e) {}return n === t || v.call(e, n);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, error: function error(e) {
      throw Error(e);
    }, parseHTML: function parseHTML(e, t, n) {
      if (!e || 'string' != typeof e) return null;'boolean' == typeof t && (n = t, t = !1), t = t || a;var r = k.exec(e),
          i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    }, parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : 'string' == typeof n && (n = x.trim(n), n && E.test(n.replace(A, '@').replace(j, ']').replace(S, ''))) ? Function('return ' + n)() : (x.error('Invalid JSON: ' + n), t);
    }, parseXML: function parseXML(n) {
      var r, i;if (!n || 'string' != typeof n) return null;try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, 'text/xml')) : (r = new ActiveXObject('Microsoft.XMLDOM'), r.async = 'false', r.loadXML(n));
      } catch (o) {
        r = t;
      }return r && r.documentElement && !r.getElementsByTagName('parsererror').length || x.error('Invalid XML: ' + n), r;
    }, noop: function noop() {}, globalEval: function globalEval(t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    }, camelCase: function camelCase(e) {
      return e.replace(D, 'ms-').replace(L, H);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }return e;
    }, trim: b && !b.call('\uFEFF\xA0') ? function (e) {
      return null == e ? '' : b.call(e);
    } : function (e) {
      return null == e ? '' : (e + '').replace(C, '');
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (M(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      var r;if (t) {
        if (m) return m.call(t, e, n);for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }return -1;
    }, merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;if ('number' == typeof r) for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];if (a) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      }return d.apply([], s);
    }, guid: 1, proxy: function proxy(e, n) {
      var r, i, o;return 'string' == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    }, access: function access(e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;if ('object' === x.type(r)) {
        o = !0;for (l in r) {
          x.access(e, n, l, r[l], !0, a, s);
        }
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(x(e), _n2);
      })), n)) for (; u > l; l++) {
        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      }return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    }, now: function now() {
      return new Date().getTime();
    }, swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }i = n.apply(e, r || []);for (o in t) {
        e.style[o] = a[o];
      }return i;
    } }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), 'complete' === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener('DOMContentLoaded', q, !1), e.addEventListener('load', q, !1);else {
      a.attachEvent('onreadystatechange', q), e.attachEvent('onload', q);var r = !1;try {
        r = null == e.frameElement && a.documentElement;
      } catch (i) {}r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll('left');
          } catch (e) {
            return setTimeout(o, 50);
          }_(), x.ready();
        }
      }();
    }return n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    c['[object ' + t + ']'] = t.toLowerCase();
  });function M(e) {
    var t = e.length,
        n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = 'sizzle' + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function A(e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = typeof t === 'undefined' ? 'undefined' : _typeof(t),
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;for (; n > t; t++) {
        if (this[t] === e) return t;
      }return -1;
    },
        B = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        P = '[\\x20\\t\\r\\n\\f]',
        R = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        W = R.replace('w', 'w#'),
        $ = '\\[' + P + '*(' + R + ')' + P + '*(?:([*^$|!~]?=)' + P + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + W + ')|)|)' + P + '*\\]',
        I = ':(' + R + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + $.replace(3, 8) + ')*)|.*)\\)|)',
        z = RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
        X = RegExp('^' + P + '*,' + P + '*'),
        U = RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
        V = RegExp(P + '*[+~]'),
        Y = RegExp('=' + P + '*([^\\]\'"]*)' + P + '*\\]', 'g'),
        J = RegExp(I),
        G = RegExp('^' + W + '$'),
        Q = { ID: RegExp('^#(' + R + ')'), CLASS: RegExp('^\\.(' + R + ')'), TAG: RegExp('^(' + R.replace('w', 'w*') + ')'), ATTR: RegExp('^' + $), PSEUDO: RegExp('^' + I), CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + P + '*(even|odd|(([+-]|)(\\d*)n|)' + P + '*(?:([+-]|)' + P + '*(\\d+)|))' + P + '*\\)|)', 'i'), bool: RegExp('^(?:' + B + ')$', 'i'), needsContext: RegExp('^' + P + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + P + '*((?:-\\d)?\\d*)' + P + '*\\)|)(?=[^-]|$)', 'i') },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
        it = function it(e, t, n) {
      var r = '0x' + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = { apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || 'string' != typeof e) return n;if (1 !== (l = t.nodeType) && 9 !== l) return [];if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (9 === l) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && 'object' !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute('id')) ? m = d.replace(nt, '\\$&') : t.setAttribute('id', m), m = '[id=\'' + m + '\'] ', u = c.length;while (u--) {
              c[u] = m + yt(c[u]);
            }y = V.test(e) && t.parentNode || t, x = c.join(',');
          }if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute('id');
          }
        }
      }return kt(e.replace(z, '$1'), t, n, i);
    }function st() {
      var e = [];function t(n, r) {
        return e.push(n += ' ') > o.cacheLength && delete t[e.shift()], t[n] = r;
      }return t;
    }function lt(e) {
      return e[b] = !0, e;
    }function ut(e) {
      var t = f.createElement('div');try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ct(e, t) {
      var n = e.split('|'),
          r = e.length;while (r--) {
        o.attrHandle[n[r]] = t;
      }
    }function pt(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return 'input' === n && t.type === e;
      };
    }function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ('input' === n || 'button' === n) && t.type === e;
      };
    }function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return t ? 'HTML' !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent('onbeforeunload', function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment('')), !e.getElementsByTagName('*').length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && h) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode('id');return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return _typeof(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ('*' === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return _typeof(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || g.push('\\[' + P + '*(?:value|' + B + ')'), e.querySelectorAll(':checked').length || g.push(':checked');
      }), ut(function (e) {
        var t = n.createElement('input');t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && g.push('[*^$]=' + P + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:');
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, 'div'), y.call(e, '[s!=\'\']:x'), m.push('!=', I);
      }), g = g.length && RegExp(g.join('|')), m = m.length && RegExp(m.join('|')), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];if (e === t) return S = !0, 0;if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;if (o === a) return pt(e, t);r = e;while (r = r.parentNode) {
          s.unshift(r);
        }r = t;while (r = r.parentNode) {
          l.unshift(r);
        }while (s[i] === l[i]) {
          i++;
        }return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, '=\'$1\']'), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = y.call(e, t);if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) {
          t === e[o] && (i = n.push(o));
        }while (i--) {
          e.splice(n[i], 1);
        }
      }return e;
    }, a = at.getText = function (e) {
      var t,
          n = '',
          r = 0,
          i = e.nodeType;if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += a(t);
      }return n;
    }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || '').replace(rt, it), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && at.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var n,
              r = !e[5] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(')', r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(rt, it).toLowerCase();return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = N[e + ' '];return t || (t = RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) && N(e, function (e) {
            return t.test('string' == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute('class') || '');
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = at.attr(r, e);return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > -1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1) : !0;
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              s = 'of-type' === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? 'nextSibling' : 'previousSibling',
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;if (m) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }h = g = 'only' === e && !h && 'nextSibling';
                }return !0;
              }if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [T, d, f];break;
                  }
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
              }return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error('unsupported pseudo: ' + e);return r[b] ? r(t) : r.length > 1 ? (n = [e, e, '', t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;while (a--) {
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, '$1'));return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }), has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }), contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }), lang: lt(function (e) {
          return G.test(e || '') || at.error('unsupported lang: ' + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;do {
              if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === d;
        }, focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function enabled(e) {
          return e.disabled === !1;
        }, disabled: function disabled(e) {
          return e.disabled === !0;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !o.pseudos.empty(e);
        }, header: function header(e) {
          return tt.test(e.nodeName);
        }, input: function input(e) {
          return et.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return 'input' === t && 'button' === e.type || 'button' === t;
        }, text: function text(e) {
          var t;return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        }, first: ht(function () {
          return [0];
        }), last: ht(function (e, t) {
          return [t - 1];
        }), eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: ht(function (e, t) {
          var n = 0;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), odd: ht(function (e, t) {
          var n = 1;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; t > ++r;) {
            e.push(r);
          }return e;
        }) } }, o.pseudos.nth = o.pseudos.eq;for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      o.pseudos[n] = ft(n);
    }for (n in { submit: !0, reset: !0 }) {
      o.pseudos[n] = dt(n);
    }function gt() {}gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + ' '];if (c) return t ? 0 : c.slice(0);s = e, l = [], u = o.preFilter;while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, ' ') }), s = s.slice(n.length));for (a in o.filter) {
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }function yt(e) {
      var t = 0,
          n = e.length,
          r = '';for (; n > t; t++) {
        r += e[t].value;
      }return r;
    }function vt(e, t, n) {
      var r = t.dir,
          o = n && 'parentNode' === r,
          a = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = T + ' ' + a;if (s) {
          while (t = t[r]) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
            if ((l = u[1]) === !0 || l === i) return l === !0;
          } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
        }
      };
    }function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;for (; l > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      }return a;
    }function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || '*', s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;while (c--) {
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;while (c--) {
                (p = y[c]) && u.push(m[c] = p);
              }i(null, y = [], u, l);
            }c = y.length;while (c--) {
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
            }
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[' '],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];for (; i > l; l++) {
        if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++) {
              if (o.relative[e[r].type]) break;
            }return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }f.push(n);
        }
      }return bt(f);
    }function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function s(_s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = '0',
            x = _s && [],
            w = null != d,
            C = u,
            N = _s || a && o.find.TAG('*', d && l.parentNode || l),
            k = T += null == C ? 1 : Math.random() || .1;for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
          if (a && h) {
            g = 0;while (m = e[g++]) {
              if (m(h, l, c)) {
                p.push(h);break;
              }
            }w && (T = k, i = ++n);
          }r && ((h = !m && h) && v--, _s && x.push(h));
        }if (v += b, r && b !== v) {
          g = 0;while (m = t[g++]) {
            m(x, y, l, c);
          }if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = q.call(p));
            }y = xt(y);
          }M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }return w && (T = k, u = C), x;
      };return r ? lt(s) : s;
    }l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E[e + ' '];if (!o) {
        t || (t = mt(e)), n = t.length;while (n--) {
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        }o = E(e, Ct(i, r));
      }return o;
    };function Nt(e, t, n) {
      var r = 0,
          i = t.length;for (; i > r; r++) {
        at(e, t[r], n);
      }return n;
    }function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && 'ID' === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;e = e.slice(s.shift().value.length);
        }a = Q.needsContext.test(e) ? 0 : s.length;while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;break;
          }
        }
      }return l(e, f)(i, t, !h, n, V.test(e)), n;
    }r.sortStable = b.split('').sort(A).join('') === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement('div'));
    }), ut(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || ct('type|href|height|width', function (e, n, r) {
      return r ? t : e.getAttribute(n, 'type' === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || ct('value', function (e, n, r) {
      return r || 'input' !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute('disabled');
    }) || ct(B, function (e, n, r) {
      var i;return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[':'] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);var O = {};function F(e) {
    var t = O[e] = {};return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }x.Callbacks = function (e) {
    e = 'string' == typeof e ? O[e] || F(e) : x.extend({}, e);var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
        if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;break;
        }
      }n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = { add: function add() {
        if (l) {
          var t = l.length;(function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);'function' === r ? e.unique && p.has(n) || l.push(n) : n && n.length && 'string' !== r && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = t, c(r));
        }return this;
      }, remove: function remove() {
        return l && x.each(arguments, function (e, t) {
          var r;while ((r = x.inArray(t, l, r)) > -1) {
            l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      }, has: function has(e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      }, empty: function empty() {
        return l = [], o = 0, this;
      }, disable: function disable() {
        return l = u = r = t, this;
      }, disabled: function disabled() {
        return !l;
      }, lock: function lock() {
        return u = t, r || p.disable(), this;
      }, locked: function locked() {
        return !u;
      }, fireWith: function fireWith(e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      }, fire: function fire() {
        return p.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return p;
  }, x.extend({ Deferred: function Deferred(e) {
      var t = [['resolve', 'done', x.Callbacks('once memory'), 'resolved'], ['reject', 'fail', x.Callbacks('once memory'), 'rejected'], ['notify', 'progress', x.Callbacks('memory')]],
          n = 'pending',
          r = { state: function state() {
          return n;
        }, always: function always() {
          return i.done(arguments).fail(arguments), this;
        }, then: function then() {
          var e = arguments;return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];i[o[1]](function () {
                var e = s && s.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + 'With'](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return null != e ? x.extend(e, r) : r;
        } },
          i = {};return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    }, when: function when(e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      }return i || o.resolveWith(u, n), o.promise();
    } }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement('div');if (d.setAttribute('className', 't'), d.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', n = d.getElementsByTagName('*') || [], r = d.getElementsByTagName('a')[0], !r || !r.style || !n.length) return t;s = a.createElement('select'), u = s.appendChild(a.createElement('option')), o = d.getElementsByTagName('input')[0], r.style.cssText = 'top:1px;float:left;opacity:.5', t.getSetAttribute = 't' !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName('tbody').length, t.htmlSerialize = !!d.getElementsByTagName('link').length, t.style = /top/.test(r.getAttribute('style')), t.hrefNormalized = '/a' === r.getAttribute('href'), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement('form').enctype, t.html5Clone = '<:nav></:nav>' !== a.createElement('nav').cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }o = a.createElement('input'), o.setAttribute('value', ''), t.input = '' === o.getAttribute('value'), o.value = 't', o.setAttribute('type', 'radio'), t.radioValue = 't' === o.value, o.setAttribute('checked', 't'), o.setAttribute('name', 't'), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent('onclick', function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());for (f in { submit: !0, change: !0, focusin: !0 }) {
      d.setAttribute(c = 'on' + f, 't'), t[f + 'Bubbles'] = c in e || d.attributes[c].expando === !1;
    }d.style.backgroundClip = 'content-box', d.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === d.style.backgroundClip;for (f in x(t)) {
      break;
    }return t.ownLast = '0' !== f, x(function () {
      var n,
          r,
          o,
          s = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
          l = a.getElementsByTagName('body')[0];l && (n = a.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', l.appendChild(n).appendChild(d), d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', o = d.getElementsByTagName('td'), o[0].style.cssText = 'padding:0;margin:0;border:0;display:none', p = 0 === o[0].offsetHeight, o[0].style.display = '', o[1].style.display = 'none', t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = '', d.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;', x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(d, null) || { width: '4px' }).width, r = d.appendChild(a.createElement('div')), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = '0', d.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = '', d.style.cssText = s + 'width:1px;padding:1px;display:inline;zoom:1', t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = 'block', d.innerHTML = '<div></div>', d.firstChild.style.width = '5px', t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;if (c && u[c] && (i || u[c].data) || r !== t || 'string' != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ('object' == (typeof n === 'undefined' ? 'undefined' : _typeof(n)) || 'function' == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), 'string' == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(' ')), i = t.length;while (i--) {
            delete r[t[i]];
          }if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' }, hasData: function hasData(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    }, data: function data(e, t, n) {
      return R(e, t, n);
    }, removeData: function removeData(e, t) {
      return W(e, t);
    }, _data: function _data(e, t, n) {
      return R(e, t, n, !0);
    }, _removeData: function _removeData(e, t) {
      return W(e, t, !0);
    }, acceptData: function acceptData(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];return !t || t !== !0 && e.getAttribute('classid') === t;
    } }), x.fn.extend({ data: function data(e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, 'parsedAttrs'))) {
          for (r = s.attributes; r.length > a; a++) {
            i = r[a].name, 0 === i.indexOf('data-') && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          }x._data(s, 'parsedAttrs', !0);
        }return o;
      }return 'object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    }, removeData: function removeData(e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    } });function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = 'data-' + n.replace(P, '-$1').toLowerCase();if (r = e.getAttribute(i), 'string' == typeof r) {
        try {
          r = 'true' === r ? !0 : 'false' === r ? !1 : 'null' === r ? null : +r + '' === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}x.data(e, n, r);
      } else r = t;
    }return r;
  }function I(e) {
    var t;for (t in e) {
      if (('data' !== t || !x.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
    }return !0;
  }x.extend({ queue: function queue(e, n, r) {
      var i;return e ? (n = (n || 'fx') + 'queue', i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    }, dequeue: function dequeue(e, t) {
      t = t || 'fx';var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function a() {
        x.dequeue(e, t);
      };'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + 'queueHooks';return x._data(e, n) || x._data(e, n, { empty: x.Callbacks('once memory').add(function () {
          x._removeData(e, t + 'queue'), x._removeData(e, n);
        }) });
    } }), x.fn.extend({ queue: function queue(e, n) {
      var r = 2;return 'string' != typeof e && (n = e, e = 'fx', r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);x._queueHooks(this, e), 'fx' === e && 'inprogress' !== t[0] && x.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);n.stop = function () {
          clearTimeout(r);
        };
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || 'fx', []);
    }, promise: function promise(e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function l() {
        --i || o.resolveWith(a, [a]);
      };'string' != typeof e && (n = e, e = t), e = e || 'fx';while (s--) {
        r = x._data(a[s], e + 'queueHooks'), r && r.empty && (i++, r.empty.add(l));
      }return l(), o.promise(n);
    } });var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;x.fn.extend({ attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    }, addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 'string' == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });if (l) for (t = (e || '').match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : ' ')) {
          o = 0;while (i = t[o++]) {
            0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
          }n.className = x.trim(r);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || 'string' == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });if (l) for (t = (e || '').match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : '')) {
          o = 0;while (i = t[o++]) {
            while (r.indexOf(' ' + i + ' ') >= 0) {
              r = r.replace(' ' + i + ' ', ' ');
            }
          }n.className = e ? x.trim(r) : '';
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === 'undefined' ? 'undefined' : _typeof(e);return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ('string' === n) {
          var t,
              r = 0,
              o = x(this),
              a = e.match(T) || [];while (t = a[r++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else (n === i || 'boolean' === n) && (this.className && x._data(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : x._data(this, '__className__') || '');
      });
    }, hasClass: function hasClass(e) {
      var t = ' ' + e + ' ',
          n = 0,
          r = this.length;for (; r > n; n++) {
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(U, ' ').indexOf(t) >= 0) return !0;
      }return !1;
    }, val: function val(e) {
      var n,
          r,
          i,
          o = this[0];{
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : x.isArray(o) && (o = x.map(o, function (e) {
            return null == e ? '' : e + '';
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && 'set' in r && r.set(this, o, 'value') !== t || (this.value = o));
        });if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && 'get' in r && (n = r.get(o, 'value')) !== t ? n : (n = o.value, 'string' == typeof n ? n.replace(V, '') : null == n ? '' : n);
      }
    } }), x.extend({ valHooks: { option: { get: function get(e) {
          var t = x.find.attr(e, 'value');return null != t ? t : e.text;
        } }, select: { get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = 'select-one' === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;for (; s > l; l++) {
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;while (a--) {
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } }, attr: function attr(e, n, r) {
      var o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && 'get' in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && 'set' in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ''), r) : (x.removeAttr(e, n), t));
    }, removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase('default-' + n)] = e[r] = !1 : x.attr(e, n, ''), e.removeAttribute(Q ? n : r);
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
            var n = e.value;return e.setAttribute('type', t), n && (e.value = n), t;
          }
        } } }, propFix: { 'for': 'htmlFor', 'class': 'className' }, prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && 'set' in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && 'get' in o && null !== (i = o.get(e, n)) ? i : e[n];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = x.find.attr(e, 'tabindex');return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        } } } }), X = { set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase('default-' + n)] = e[n] = !0, n;
    } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase('default-' + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = { set: function set(e, n, r) {
      return x.nodeName(e, 'input') ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    } }), Q || (z = { set: function set(e, n, r) {
      var i = e.getAttributeNode(r);return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += '', 'value' === r || n === e.getAttribute(r) ? n : t;
    } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;return r ? t : (i = e.getAttributeNode(n)) && '' !== i.value ? i.value : null;
  }, x.valHooks.button = { get: function get(e, n) {
      var r = e.getAttributeNode(n);return r && r.specified ? r.value : t;
    }, set: z.set }, x.attrHooks.contenteditable = { set: function set(e, t, n) {
      z.set(e, '' === t ? !1 : t, n);
    } }, x.each(['width', 'height'], function (e, n) {
    x.attrHooks[n] = { set: function set(e, r) {
        return '' === r ? (e.setAttribute(n, 'auto'), r) : t;
      } };
  })), x.support.hrefNormalized || x.each(['href', 'src'], function (e, t) {
    x.propHooks[t] = { get: function get(e) {
        return e.getAttribute(t, 4);
      } };
  }), x.support.style || (x.attrHooks.style = { get: function get(e) {
      return e.style.cssText || t;
    }, set: function set(e, t) {
      return e.style.cssText = t + '';
    } }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    } }), x.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = 'encoding'), x.each(['radio', 'checkbox'], function () {
    x.valHooks[this] = { set: function set(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      } }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;function it() {
    return !0;
  }function ot() {
    return !1;
  }function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }x.event = { global: {}, add: function add(e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || '').match(T) || [''], u = n.length;while (u--) {
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || '').split('.').sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join('.') }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent('on' + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        }e = null;
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);if (m && (c = m.events)) {
        t = (t || '').match(T) || [''], u = t.length;while (u--) {
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = o = f.length;while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ('**' !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            x.event.remove(e, d + t[u], n, r, !0);
          }
        }x.isEmptyObject(c) && (delete m.handle, x._removeData(e, 'events'));
      }
    }, trigger: function trigger(n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, 'type') ? n.type : n,
          m = v.call(n, 'namespace') ? n.namespace.split('.') : [];if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf('.') >= 0 && (m = g.split('.'), g = m.shift(), m.sort()), l = 0 > g.indexOf(':') && 'on' + g, n = n[x.expando] ? n : new x.Event(g, 'object' == (typeof n === 'undefined' ? 'undefined' : _typeof(n)) && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join('.'), n.namespace_re = n.namespace ? RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
            h.push(u), f = u;
          }f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }d = 0;while ((u = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, 'events') || {})[n.type] && x._data(u, 'handle'), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        }if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;try {
            i[g]();
          } catch (y) {}x.event.triggered = t, f && (i[l] = f);
        }return n.result;
      }
    }, dispatch: function dispatch(e) {
      e = x.event.fix(e);var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, 'events') || {})[e.type] || [],
          c = x.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    }, handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;if (l && u.nodeType && (!e.button || 'click' !== e.type)) for (; u != this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || 'click' !== e.type)) {
          for (o = [], a = 0; l > a; a++) {
            i = n[a], r = i.selector + ' ', o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
          }o.length && s.push({ elem: u, handlers: o });
        }
      }return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    }, fix: function fix(e) {
      if (e[x.expando]) return e;var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;while (t--) {
        n = r[t], e[n] = o[n];
      }return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    }, props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '), fixHooks: {}, keyHooks: { props: 'char charCode key keyCode'.split(' '), filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      } }, mouseHooks: { props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter: function filter(e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        }, delegateType: 'focusin' }, blur: { trigger: function trigger() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        }, delegateType: 'focusout' }, click: { trigger: function trigger() {
          return x.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : t;
        }, _default: function _default(e) {
          return x.nodeName(e.target, 'a');
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    } }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = 'on' + t;e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    } }, x.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (e, t) {
    x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), x.support.submitBubbles || (x.event.special.submit = { setup: function setup() {
      return x.nodeName(this, 'form') ? !1 : (x.event.add(this, 'click._submit keypress._submit', function (e) {
        var n = e.target,
            r = x.nodeName(n, 'input') || x.nodeName(n, 'button') ? n.form : t;r && !x._data(r, 'submitBubbles') && (x.event.add(r, 'submit._submit', function (e) {
          e._submit_bubble = !0;
        }), x._data(r, 'submitBubbles', !0));
      }), t);
    }, postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate('submit', this.parentNode, e, !0));
    }, teardown: function teardown() {
      return x.nodeName(this, 'form') ? !1 : (x.event.remove(this, '._submit'), t);
    } }), x.support.changeBubbles || (x.event.special.change = { setup: function setup() {
      return Z.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (x.event.add(this, 'propertychange._change', function (e) {
        'checked' === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, 'click._change', function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate('change', this, e, !0);
      })), !1) : (x.event.add(this, 'beforeactivate._change', function (e) {
        var t = e.target;Z.test(t.nodeName) && !x._data(t, 'changeBubbles') && (x.event.add(t, 'change._change', function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate('change', this.parentNode, e, !0);
        }), x._data(t, 'changeBubbles', !0));
      }), t);
    }, handle: function handle(e) {
      var n = e.target;return this !== n || e.isSimulated || e.isTrigger || 'radio' !== n.type && 'checkbox' !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    }, teardown: function teardown() {
      return x.event.remove(this, '._change'), !Z.test(this.nodeName);
    } }), x.support.focusinBubbles || x.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };x.event.special[t] = { setup: function setup() {
        0 === n++ && a.addEventListener(e, r, !0);
      }, teardown: function teardown() {
        0 === --n && a.removeEventListener(e, r, !0);
      } };
  }), x.fn.extend({ on: function on(e, n, r, i, o) {
      var a, s;if ('object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e))) {
        'string' != typeof n && (r = r || n, n = t);for (a in e) {
          this.on(a, n, r, e[a], o);
        }return this;
      }if (null == r && null == i ? (i = n, r = n = t) : null == i && ('string' == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;return 1 === o && (s = i, i = function i(e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    }, one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function off(e, n, r) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler), this;if ('object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e))) {
        for (o in e) {
          this.off(o, n, e[o]);
        }return this;
      }return (n === !1 || 'function' == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, n) {
      var r = this[0];return r ? x.event.trigger(e, n, r, !0) : t;
    } });var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;if ('string' != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (x.contains(r[t], this)) return !0;
        }
      }));for (t = 0; i > t; t++) {
        x.find(e, r[t], n);
      }return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    }, has: function has(e) {
      var t,
          n = x(e, this),
          r = n.length;return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (x.contains(this, n[t])) return !0;
        }
      });
    }, not: function not(e) {
      return this.pushStack(ft(this, e || [], !0));
    }, filter: function filter(e) {
      return this.pushStack(ft(this, e || [], !1));
    }, is: function is(e) {
      return !!ft(this, 'string' == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? x.unique(o) : o);
    }, index: function index(e) {
      return e ? 'string' == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function pt(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);return e;
  }x.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return x.dir(e, 'parentNode');
    }, parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, 'parentNode', n);
    }, next: function next(e) {
      return pt(e, 'nextSibling');
    }, prev: function prev(e) {
      return pt(e, 'previousSibling');
    }, nextAll: function nextAll(e) {
      return x.dir(e, 'nextSibling');
    }, prevAll: function prevAll(e) {
      return x.dir(e, 'previousSibling');
    }, nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, 'nextSibling', n);
    }, prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, 'previousSibling', n);
    }, siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x.sibling(e.firstChild);
    }, contents: function contents(e) {
      return x.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    } }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({ filter: function filter(e, t, n) {
      var r = t[0];return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function dir(e, n, r) {
      var i = [],
          o = e[n];while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
        1 === o.nodeType && i.push(o), o = o[n];
      }return i;
    }, sibling: function sibling(e, t) {
      var n = [];for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    } });function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });if ('string' == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
    }return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }function dt(e) {
    var t = ht.split('|'),
        n = e.createDocumentFragment();if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }return n;
  }var ht = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp('<(?:' + ht + ')[\\s/>]', 'i'),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = { option: [1, '<select multiple=\'multiple\'>', '</select>'], legend: [1, '<fieldset>', '</fieldset>'], area: [1, '<map>', '</map>'], param: [1, '<object>', '</object>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: x.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'] },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement('div'));At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function text(e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;for (; null != (n = r[i]); i++) {
        t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, 'script')), n.parentNode.removeChild(n));
      }return this;
    }, empty: function empty() {
      var e,
          t = 0;for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));while (e.firstChild) {
          e.removeChild(e.firstChild);
        }e.options && x.nodeName(e, 'select') && (e.options.length = 0);
      }return this;
    }, clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    }, html: function html(e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, '') : t;if (!('string' != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ['', ''])[1].toLowerCase()])) {
          e = e.replace(vt, '<$1></$2>');try {
            for (; i > r; r++) {
              n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            }n = 0;
          } catch (o) {}
        }n && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, t, n) {
      e = d.apply([], e);var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);if (g || !(1 >= c || 'string' != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, 'script'), Ht), o = a.length; c > u; u++) {
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, 'script'))), t.call(this[u], i, u);
        }if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
          i = a[u], kt.test(i.type || '') && !x._data(i, 'globalEval') && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || '').replace(St, '')));
        }l = r = null;
      }return this;
    } });function Lt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }function Ht(e) {
    return e.type = (null !== x.find.attr(e, 'type')) + '/' + e.type, e;
  }function qt(e) {
    var t = Et.exec(e.type);return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }function _t(e, t) {
    var n,
        r = 0;for (; null != (n = e[r]); r++) {
      x._data(n, 'globalEval', !t || x._data(t[r], 'globalEval'));
    }
  }function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;if (s) {
        delete a.handle, a.events = {};for (n in s) {
          for (r = 0, i = s[n].length; i > r; r++) {
            x.event.add(t, n, s[n][r]);
          }
        }
      }a.data && (a.data = x.extend({}, a.data));
    }
  }function Ot(e, t) {
    var n, r, i;if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);for (r in i.events) {
          x.removeEvent(t, r, i.handle);
        }t.removeAttribute(x.expando);
      }'script' === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : 'object' === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : 'input' === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : 'option' === n ? t.defaultSelected = t.selected = e.defaultSelected : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
    }
  }x.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      }return this.pushStack(i);
    };
  });function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || '*') : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || '*') : t;if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
      !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    }return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }x.extend({ clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test('<' + e.nodeName + '>') ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && Ot(i, r[a]);
      }if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
        Mt(i, r[a]);
      } else Mt(e, o);return r = Ft(o, 'script'), r.length > 0 && _t(r, !l && Ft(e, 'script')), r = s = i = null, o;
    }, buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;for (; p > h; h++) {
        if (o = e[h], o || 0 === o) if ('object' === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement('div')), l = (bt.exec(o) || ['', ''])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, '<$1></$2>') + c[2], i = c[0];while (i--) {
            s = s.lastChild;
          }if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
            o = 'table' !== l || xt.test(o) ? '<table>' !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;while (i--) {
              x.nodeName(u = o.childNodes[i], 'tbody') && !u.childNodes.length && o.removeChild(u);
            }
          }x.merge(d, s.childNodes), s.textContent = '';while (s.firstChild) {
            s.removeChild(s.firstChild);
          }s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, 'input'), Bt), h = 0;while (o = d[h++]) {
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), 'script'), a && _t(s), n)) {
          i = 0;while (o = s[i++]) {
            kt.test(o.type || '') && n.push(o);
          }
        }
      }return s = null, f;
    }, cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;for (; null != (n = e[s]); s++) {
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          }u[o] && (delete u[o], c ? delete n[l] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
      }
    }, _evalUrl: function _evalUrl(e) {
      return x.ajax({ url: e, type: 'GET', dataType: 'script', async: !1, global: !1, 'throws': !0 });
    } }), x.fn.extend({ wrapAll: function wrapAll(e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;while (e.firstChild && 1 === e.firstChild.nodeType) {
            e = e.firstChild;
          }return e;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = x.isFunction(e);return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    } });var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp('^(' + w + ')(.*)$', 'i'),
      Yt = RegExp('^(' + w + ')(?!px)[a-z%]+$', 'i'),
      Jt = RegExp('^([+-])=(' + w + ')', 'i'),
      Gt = { BODY: 'block' },
      Qt = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Kt = { letterSpacing: 0, fontWeight: 400 },
      Zt = ['Top', 'Right', 'Bottom', 'Left'],
      en = ['Webkit', 'O', 'Moz', 'ms'];function tn(e, t) {
    if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;while (i--) {
      if (t = en[i] + n, t in e) return t;
    }return r;
  }function nn(e, t) {
    return e = t || e, 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
  }function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;for (; s > a; a++) {
      r = e[a], r.style && (o[a] = x._data(r, 'olddisplay'), n = r.style.display, t ? (o[a] || 'none' !== n || (r.style.display = ''), '' === r.style.display && nn(r) && (o[a] = x._data(r, 'olddisplay', ln(r.nodeName)))) : o[a] || (i = nn(r), (n && 'none' !== n || !i) && x._data(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    }for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[a] || '' : 'none'));
    }return e;
  }x.fn.extend({ css: function css(e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = x.css(e, n[s], !1, o);
          }return a;
        }return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    }, show: function show() {
      return rn(this, !0);
    }, hide: function hide() {
      return rn(this);
    }, toggle: function toggle(e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    } }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Wt(e, 'opacity');return '' === n ? '1' : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { 'float': x.support.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function style(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && 'get' in s && (o = s.get(e, !1, i)) !== t ? o : u[n];if (a = typeof r === 'undefined' ? 'undefined' : _typeof(r), 'string' === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = 'number'), !(null == r || 'number' === a && isNaN(r) || ('number' !== a || x.cssNumber[l] || (r += 'px'), x.support.clearCloneStyle || '' !== r || 0 !== n.indexOf('background') || (u[n] = 'inherit'), s && 'set' in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (c) {}
      }
    }, css: function css(e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && 'get' in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), 'normal' === a && n in Kt && (a = Kt[n]), '' === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    } }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;return s && ('' !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = 'fontSize' === n ? '1em' : l, l = u.pixelLeft + 'px', u.left = i, a && (o.left = a)), '' === l ? 'auto' : l;
  });function on(e, t, n) {
    var r = Vt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }function an(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        a = 0;for (; 4 > o; o += 2) {
      'margin' === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ('content' === n && (a -= x.css(e, 'padding' + Zt[o], !0, i)), 'margin' !== n && (a -= x.css(e, 'border' + Zt[o] + 'Width', !0, i))) : (a += x.css(e, 'padding' + Zt[o], !0, i), 'padding' !== n && (a += x.css(e, 'border' + Zt[o] + 'Width', !0, i)));
    }return a;
  }function sn(e, t, n) {
    var r = !0,
        i = 'width' === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }return i + an(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
  }function ln(e) {
    var t = a,
        n = Gt[e];return n || (n = un(e, t), 'none' !== n && n || (Pt = (Pt || x('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], 'display');return n.remove(), r;
  }x.each(['height', 'width'], function (e, n) {
    x.cssHooks[n] = { get: function get(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, 'display')) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      }, set: function set(e, t, r) {
        var i = r && Rt(e);return on(e, t, r ? an(e, n, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
      } };
  }), x.support.opacity || (x.cssHooks.opacity = { get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : t ? '1' : '';
    }, set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
          o = r && r.filter || n.filter || '';n.zoom = 1, (t >= 1 || '' === t) && '' === x.trim(o.replace($t, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + ' ' + i);
    } }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, n) {
        return n ? x.swap(e, { display: 'inline-block' }, Wt, [e, 'marginRight']) : t;
      } }), !x.support.pixelPosition && x.fn.position && x.each(['top', 'left'], function (e, n) {
      x.cssHooks[n] = { get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + 'px' : r) : t;
        } };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && 'none' === (e.style && e.style.display || x.css(e, 'display'));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
    x.cssHooks[e + t] = { expand: function expand(n) {
        var r = 0,
            i = {},
            o = 'string' == typeof n ? n.split(' ') : [n];for (; 4 > r; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
      return x.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, 'elements');return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !x(this).is(':disabled') && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return { name: t.name, value: e.replace(fn, '\r\n') };
        }) : { name: t.name, value: n.replace(fn, '\r\n') };
      }).get();
    } }), x.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = x.isFunction(t) ? t() : null == t ? '' : t, i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
    };if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }return i.join('&').replace(cn, '+');
  };function gn(e, t, n, r) {
    var i;if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + '[' + ('object' == (typeof i === 'undefined' ? 'undefined' : _typeof(i)) ? t : '') + ']', i, n, r);
    });else if (n || 'object' !== x.type(t)) r(e, t);else for (i in t) {
      gn(e + '[' + i + ']', t[i], n, r);
    }
  }x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    } });var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = '*/'.concat('*');try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement('a'), yn.href = '', yn = yn.href;
  }mn = En.exec(yn.toLowerCase()) || [];function Hn(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];if (x.isFunction(n)) while (r = o[i++]) {
        '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function qn(e, n, r, i) {
    var o = {},
        a = e === jn;function s(l) {
      var u;return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);return 'string' != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }return s(n.dataTypes[0]) || !o['*'] && s('*');
  }function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }return r && x.extend(!0, e, r), e;
  }x.fn.load = function (e, n, r) {
    if ('string' != typeof e && Sn) return Sn.apply(this, arguments);var i,
        o,
        a,
        s = this,
        l = e.indexOf(' ');return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && 'object' == (typeof n === 'undefined' ? 'undefined' : _typeof(n)) && (a = 'POST'), s.length > 0 && x.ajax({ url: e, type: a, dataType: 'html', data: n }).done(function (e) {
      o = arguments, s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: 'GET', isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { '*': Dn, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { '* text': String, 'text html': !0, 'text json': x.parseJSON, 'text xml': x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function ajax(e, n) {
      'object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && (n = e, e = t), n = n || {};var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks('once memory'),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = 'canceled',
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (2 === b) {
            if (!c) {
              c = {};while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }t = c[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();return b || (e = v[n] = v[n] || e, y[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return b || (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (2 > b) for (t in e) {
            m[t] = [m[t], e[t]];
          } else C.always(e[C.status]);return this;
        }, abort: function abort(e) {
          var t = e || w;return u && u.abort(t), k(0, t), this;
        } };if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + '').replace(xn, '').replace(kn, mn[1] + '//'), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || '*').toLowerCase().match(T) || [''], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ('http:' === r[1] ? '80' : '443')) === (mn[3] || ('http:' === mn[1] ? '80' : '443')))), p.data && p.processData && 'string' != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;l = p.global, l && 0 === x.active++ && x.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? '&' : '?') + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, '$1_=' + vn++) : o + (bn.test(o) ? '&' : '?') + '_=' + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader('If-Modified-Since', x.lastModified[o]), x.etag[o] && C.setRequestHeader('If-None-Match', x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader('Content-Type', p.contentType), C.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Dn + '; q=0.01' : '') : p.accepts['*']);for (i in p.headers) {
        C.setRequestHeader(i, p.headers[i]);
      }if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();w = 'abort';for (i in { success: 1, error: 1, complete: 1 }) {
        C[i](p[i]);
      }if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger('ajaxSend', [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort('timeout');
        }, p.timeout));try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;k(-1, N);
        }
      } else k(-1, 'No Transport');function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || '', C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader('Last-Modified'), T && (x.lastModified[o] = T), T = C.getResponseHeader('etag'), T && (x.etag[o] = T)), 204 === e || 'HEAD' === p.type ? N = 'nocontent' : 304 === e ? N = 'notmodified' : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = 'error', 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + '', c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger('ajaxComplete', [C, p]), --x.active || x.event.trigger('ajaxStop')));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, 'json');
    }, getScript: function getScript(e, n) {
      return x.get(e, t, n, 'script');
    } }), x.each(['get', 'post'], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i });
    };
  });function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;while ('*' === u[0]) {
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader('Content-Type'));
    }if (o) for (s in l) {
      if (l[s] && l[s].test(o)) {
        u.unshift(s);break;
      }
    }if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + ' ' + u[0]]) {
          a = s;break;
        }i || (i = s);
      }a = a || i;
    }return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      u[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ('*' === o) o = l;else if ('*' !== l && l !== o) {
        if (a = u[l + ' ' + o] || u['* ' + o], !a) for (i in u) {
          if (s = i.split(' '), s[1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
          }
        }if (a !== !0) if (a && e['throws']) t = a(t);else try {
          t = a(t);
        } catch (p) {
          return { state: 'parsererror', error: a ? p : 'No conversion from ' + l + ' to ' + o };
        }
      }
    }return { state: 'success', data: t };
  }x.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /(?:java|ecma)script/ }, converters: { 'text script': function textScript(e) {
        return x.globalEval(e), e;
      } } }), x.ajaxPrefilter('script', function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1);
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var n,
          r = a.head || x('head')[0] || a.documentElement;return { send: function send(t, i) {
          n = a.createElement('script'), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, 'success'));
          }, r.insertBefore(n, r.firstChild);
        }, abort: function abort() {
          n && n.onload(t, !0);
        } };
    }
  });var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: 'callback', jsonpCallback: function jsonpCallback() {
      var e = Fn.pop() || x.expando + '_' + vn++;return this[e] = !0, e;
    } }), x.ajaxPrefilter('json jsonp', function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? 'url' : 'string' == typeof n.data && !(n.contentType || '').indexOf('application/x-www-form-urlencoded') && Bn.test(n.data) && 'data');return l || 'jsonp' === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, '$1' + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? '&' : '?') + n.jsonp + '=' + o), n.converters['script json'] = function () {
      return s || x.error(o + ' was not called'), s[0];
    }, n.dataTypes[0] = 'json', a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), 'script') : t;
  });var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;for (e in Pn) {
      Pn[e](t, !0);
    }
  };function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }function zn() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && 'withCredentials' in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var _r;return { send: function send(i, o) {
          var a,
              s,
              l = n.xhr();if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            l[s] = n.xhrFields[s];
          }n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');try {
            for (s in i) {
              l.setRequestHeader(s, i[s]);
            }
          } catch (u) {}l.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var s, u, c, p;try {
              if (_r && (i || 4 === l.readyState)) if (_r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), 'string' == typeof l.responseText && (p.text = l.responseText);try {
                  c = l.statusText;
                } catch (f) {
                  c = '';
                }s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r), l.onreadystatechange = _r) : _r();
        }, abort: function abort() {
          _r && _r(t, !0);
        } };
    }
  });var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp('^(?:([+-])=|)(' + w + ')([a-z%]*)$', 'i'),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = { '*': [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? '' : 'px'),
          a = (x.cssNumber[e] || 'px' !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;do {
          s = s || '.5', a /= s, x.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }] };function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn['*']),
        o = 0,
        a = i.length;for (; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (i) return !1;var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;for (; l > a; a++) {
        u.tweens[a].run(o);
      }return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
          u.tweens[n].run(1);
        }return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (tr(c, u.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    }return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }function tr(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && 'expand' in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }x.Animation = x.extend(er, { tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');var n,
          r = 0,
          i = e.length;for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    }, prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    } });function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, 'fxshow');n.queue || (s = x._queueHooks(e, 'fx'), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], 'inline' === x.css(e, 'display') && 'none' === x.css(e, 'float') && (x.support.inlineBlockNeedsLayout && 'inline' !== ln(e.nodeName) ? p.zoom = 1 : p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));for (r in t) {
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (f ? 'hide' : 'show')) continue;c[r] = d && d[r] || x.style(e, r);
      }
    }if (!x.isEmptyObject(c)) {
      d ? 'hidden' in d && (f = d.hidden) : d = x._data(e, 'fxshow', {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;x._removeData(e, 'fxshow');for (t in c) {
          x.style(e, t, c[t]);
        }
      });for (r in c) {
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0));
      }
    }
  }function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }x.Tween = rr, rr.prototype = { constructor: rr, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    }, cur: function cur() {
      var e = rr.propHooks[this.prop];return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function get(e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      }, set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, x.each(['toggle', 'show', 'hide'], function (e, t) {
    var n = x.fn[t];x.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function a() {
        var t = er(this, x.extend({}, e), o);(i || x._data(this, 'finish')) && t.stop(!0);
      };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(r);
      };return 'string' != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0,
            n = null != e && e + 'queueHooks',
            o = x.timers,
            a = x._data(this);if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }for (n = o.length; n--;) {
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }(t || !r) && x.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t,
            n = x._data(this),
            r = n[e + 'queue'],
            i = n[e + 'queueHooks'],
            o = x.timers,
            a = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } });function ir(e, t) {
    var n,
        r = { height: e },
        i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = Zt[i], r['margin' + n] = r['padding' + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }x.each({ slideDown: ir('show'), slideUp: ir('hide'), slideToggle: ir('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && 'object' == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;for (Xn = x.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });var n,
        r,
        o = { top: 0, left: 0 },
        a = this[0],
        s = a && a.ownerDocument;if (s) return n = s.documentElement, x.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o;
  }, x.offset = { setOffset: function setOffset(e, t, n) {
      var r = x.css(e, 'position');'static' === r && (e.style.position = 'relative');var i = x(e),
          o = i.offset(),
          a = x.css(e, 'top'),
          s = x.css(e, 'left'),
          l = ('absolute' === r || 'fixed' === r) && x.inArray('auto', [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), 'using' in t ? t.using.call(e, u) : i.css(u);
    } }, x.fn.extend({ position: function position() {
      if (this[0]) {
        var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];return 'fixed' === x.css(r, 'position') ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], 'html') || (n = e.offset()), n.top += x.css(e[0], 'borderTopWidth', !0), n.left += x.css(e[0], 'borderLeftWidth', !0)), { top: t.top - n.top - x.css(r, 'marginTop', !0), left: t.left - n.left - x.css(r, 'marginLeft', !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position')) {
          e = e.offsetParent;
        }return e || s;
      });
    } }), x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, n) {
    var r = /Y/.test(n);x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }x.each({ Height: 'height', Width: 'width' }, function (e, n) {
    x.each({ padding: 'inner' + e, content: n, '': 'outer' + e }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || 'boolean' != typeof i),
            s = r || (i === !0 || o === !0 ? 'margin' : 'border');return x.access(this, function (n, r, i) {
          var o;return x.isWindow(n) ? n.document.documentElement['client' + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body['scroll' + e], o['scroll' + e], n.body['offset' + e], o['offset' + e], o['client' + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, 'object' == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module && 'object' == _typeof(module.exports) ? module.exports = x : (e.jQuery = e.$ = x, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return x;
  }));
})(window);
"use strict";

document.alphabet = { A79: { W: 75, P: [[64, 89, 9, -102], [57, 103, 9, -102], [5, 89, 9, -79], [16, 104, 8, -35], [51, 122, 8, -35], [23, 118, 8, -35], [31, 133, 8, 50], [46, 136, 8, 50], [34, 153, 8, 69], [28, 168, 7, 112], [21, 183, 7, 112]] }, A78: { W: 85, P: [[10, 148, 8, -103], [21, 137, 8, -92], [33, 125, 7, -79], [50, 124, 7, -35], [58, 135, 7, -35], [68, 148, 7, -35], [40, 111, 7, 51], [33, 103, 7, 51], [21, 86, 7, 51], [56, 106, 7, 51], [67, 92, 7, 112]] }, A77: { W: 98, P: [[24, 148, 10, -102], [67, 151, 10, -102], [34, 133, 9, -36], [61, 134, 9, -36], [76, 132, 8, -36], [16, 130, 8, -36], [14, 112, 7, 50], [40, 118, 7, 50], [58, 117, 7, 50], [82, 117, 7, 83], [86, 100, 7, 83], [51, 101, 7, 83], [11, 95, 7, 83]] }, A76: { W: 70, P: [[12, 88, 9, -84], [32, 138, 5, -84], [36, 148, 9, -84], [44, 133, 8, -84], [60, 84, 6, 119], [57, 96, 6, 102], [53, 107, 6, 50], [50, 120, 7, -35], [26, 115, 7, 51], [29, 127, 6, 69], [20, 101, 8, 11]] }, A75: { W: 75, P: [[58, 148, 9, -103], [60, 128, 8, -84], [38, 150, 8, -35], [21, 147, 7, -35], [61, 109, 7, -35], [17, 128, 7, 42], [13, 110, 7, 80], [62, 92, 7, 80], [14, 90, 7, 80]] }, A74: { W: 68, P: [[33, 149, 9, -103], [35, 130, 9, -79], [34, 108, 9, -36], [33, 90, 8, 5], [48, 89, 8, 50], [14, 89, 8, 56], [34, 68, 8, 112]] }, A73: { W: 70, P: [[10, 143, 8, -103], [23, 150, 8, -92], [44, 149, 8, -79], [57, 135, 8, -38], [44, 122, 8, -35], [25, 114, 8, 39], [17, 98, 7, 39], [33, 91, 7, 56], [45, 88, 7, 102], [57, 91, 7, 102]] }, A72: { W: 69, P: [[58, 105, 7, -102], [56, 88, 8, -35], [42, 91, 7, 51], [29, 96, 7, 91], [16, 90, 7, 91], [18, 105, 8, 37], [17, 120, 7, -50], [17, 134, 6, -79], [17, 149, 8, -102]] }, A71: { W: 75, P: [[51, 182, 10, -103], [51, 159, 9, -79], [55, 138, 9, -79], [35, 149, 8, -35], [18, 143, 7, 11], [58, 123, 7, 11], [12, 126, 7, 50], [57, 103, 7, 69], [16, 109, 6, 69], [26, 95, 6, 69], [49, 88, 6, 69], [37, 88, 6, 119]] }, A70: { W: 77, P: [[15, 88, 10, -103], [18, 108, 9, -91], [31, 97, 9, -50], [18, 126, 8, -50], [45, 96, 7, -35], [57, 103, 7, 5], [17, 143, 7, 5], [60, 117, 7, 56], [60, 131, 7, 56], [20, 158, 7, 50], [51, 143, 7, 50], [31, 148, 6, 102], [17, 172, 6, 102], [16, 186, 5, 119]] }, A6d: { W: 111, P: [[15, 148, 10, -102], [58, 152, 10, -102], [98, 151, 10, -50], [98, 134, 9, -50], [56, 133, 9, -50], [15, 129, 8, 11], [94, 116, 8, 11], [56, 113, 8, 11], [14, 111, 7, 51], [15, 93, 7, 51], [25, 105, 7, 51], [55, 98, 7, 51], [89, 99, 7, 83], [77, 92, 7, 112], [36, 94, 7, 112]] }, A6e: { W: 75, P: [[17, 148, 10, -92], [62, 149, 10, -92], [17, 125, 9, -50], [62, 127, 9, -35], [61, 107, 8, 29], [23, 104, 8, 69], [15, 86, 7, 69], [36, 94, 7, 69], [55, 92, 7, 69]] }, A6f: { W: 76, P: [[24, 147, 10, -103], [46, 149, 9, -84], [14, 129, 9, -50], [58, 134, 8, -35], [18, 107, 8, 29], [61, 114, 7, 51], [56, 98, 7, 51], [31, 92, 7, 102], [45, 91, 7, 102]] }, A6a: { W: 58, P: [[34, 62, 10, -92], [35, 95, 9, -92], [37, 117, 8, -35], [38, 133, 8, -35], [37, 152, 8, 37], [36, 168, 8, 56], [29, 185, 7, 56], [14, 181, 6, 112], [6, 170, 5, 119]] }, A6b: { W: 78, P: [[19, 148, 8, -84], [20, 131, 7, -84], [68, 149, 10, -84], [58, 134, 8, -84], [50, 123, 6, -84], [65, 83, 6, -35], [21, 44, 7, 51], [21, 59, 6, 83], [21, 72, 5, 112], [21, 85, 6, 112], [21, 99, 6, 69], [53, 99, 5, 102], [59, 90, 6, 50], [42, 110, 10, 29], [20, 115, 7, -35], [31, 122, 5, 5]] }, A6c: { W: 40, P: [[20, 150, 10, 56], [22, 52, 10, 56], [20, 71, 9, -35], [21, 133, 8, -50], [21, 88, 7, -84], [21, 120, 6, -103], [20, 104, 6, -103]] }, A68: { W: 83, P: [[18, 149, 10, -102], [69, 147, 10, -102], [18, 131, 9, -36], [64, 126, 8, -36], [65, 109, 8, -36], [19, 109, 8, 51], [57, 93, 7, 69], [39, 94, 8, 37], [20, 89, 8, 37], [18, 69, 8, 91], [17, 52, 7, 119]] }, A69: { W: 41, P: [[23, 60, 10, -92], [22, 91, 9, -36], [21, 111, 8, 39], [19, 130, 7, 56], [21, 148, 6, 112]] }, A64: { W: 84, P: [[68, 147, 10, -103], [45, 151, 9, -92], [22, 145, 9, -50], [15, 124, 8, -50], [17, 104, 8, 39], [29, 91, 8, 39], [46, 90, 8, 39], [59, 96, 8, -50], [67, 129, 8, -50], [68, 110, 8, 69], [68, 83, 7, 69], [70, 68, 7, 102], [71, 47, 7, 119]] }, A65: { W: 79, P: [[16, 127, 10, -103], [23, 145, 9, -50], [41, 151, 8, 11], [54, 148, 7, 102], [70, 142, 6, 119], [61, 96, 7, 51], [54, 109, 7, 51], [44, 90, 8, 51], [41, 117, 8, -50], [27, 92, 8, -50], [17, 107, 8, -50]] }, A66: { W: 73, P: [[29, 156, 10, -103], [31, 136, 9, -84], [31, 116, 9, -50], [30, 95, 8, -35], [45, 93, 7, -35], [58, 92, 7, 39], [14, 95, 7, 39], [33, 79, 7, 69], [36, 67, 7, 69], [47, 55, 7, 69], [65, 52, 6, 119]] }, A67: { W: 76, P: [[61, 97, 10, -102], [61, 118, 9, -102], [42, 90, 9, -79], [24, 97, 8, -35], [53, 137, 8, -35], [12, 110, 8, -35], [40, 148, 7, 29], [26, 151, 7, 42], [11, 124, 6, 56], [13, 139, 6, 83], [60, 156, 7, -50], [54, 172, 7, 50], [42, 185, 7, 69], [25, 187, 7, 102], [7, 183, 7, 119]] }, A61: { W: 74, P: [[58, 94, 8, 42], [45, 89, 7, 69], [31, 91, 7, 119], [20, 99, 7, 91], [12, 111, 7, 51], [11, 124, 8, -35], [29, 151, 8, -35], [45, 149, 7, -35], [65, 153, 6, -35], [57, 126, 6, -35], [57, 112, 6, -102], [58, 142, 8, -102], [15, 140, 9, -102]] }, A62: { W: 85, P: [[17, 143, 8, -102], [31, 148, 8, -102], [44, 152, 7, -102], [60, 147, 6, -36], [67, 133, 6, -36], [73, 116, 6, 39], [65, 98, 6, 83], [56, 90, 6, 119], [42, 89, 6, 51], [30, 93, 7, 11], [17, 102, 8, -35], [18, 124, 10, -72], [17, 79, 7, 51], [17, 60, 7, 51], [17, 47, 7, 102]] }, A63: { W: 74, P: [[24, 142, 9, -103], [37, 152, 8, -38], [54, 150, 7, 50], [66, 143, 6, 56], [14, 123, 8, -79], [20, 106, 7, 5], [32, 92, 6, 29], [47, 88, 6, 102], [59, 94, 6, 102]] }, A7e: { W: 86, P: [[13, 113, 5, -103], [22, 103, 5, -103], [31, 96, 5, 11], [40, 98, 5, 11], [44, 108, 5, 11], [52, 115, 7, 11], [66, 116, 7, 11], [72, 99, 9, 11]] }, A7d: { W: 53, P: [[42, 115, 9, -103], [31, 104, 7, 5], [30, 86, 7, 5], [30, 72, 7, 5], [25, 57, 7, 5], [32, 128, 7, 5], [30, 144, 7, 5], [27, 158, 7, 5], [24, 170, 7, 5], [11, 174, 5, 112], [12, 51, 5, 112]] }, A7c: { W: 61, P: [[33, 41, 5, -161], [33, 53, 5, 5], [31, 65, 5, 5], [32, 79, 5, 69], [32, 92, 5, 69], [31, 107, 5, 112], [30, 122, 5, 50], [29, 136, 5, -50], [28, 147, 5, -50], [28, 159, 5, -91], [27, 171, 5, -91]] }, A7b: { W: 53, P: [[6, 115, 10, -50], [20, 105, 7, -50], [20, 89, 7, -50], [20, 73, 7, -50], [22, 58, 7, -50], [18, 126, 7, -50], [20, 140, 7, -50], [21, 152, 7, -50], [23, 166, 6, 80], [31, 172, 6, 80], [44, 172, 6, 80], [33, 49, 6, 80], [47, 49, 6, 80]] }, A7a: { W: 77, P: [[19, 152, 10, -103], [37, 150, 9, -79], [53, 150, 8, -35], [31, 132, 8, -35], [42, 121, 7, 50], [53, 109, 7, 50], [61, 92, 7, 50], [40, 89, 7, 83], [23, 89, 7, 112]] }, A4f: { W: 114, P: [[40, 147, 10, -102], [82, 142, 10, -102], [16, 119, 9, -72], [63, 151, 9, -72], [22, 136, 8, 11], [91, 122, 8, 11], [17, 96, 8, 11], [97, 108, 7, 11], [97, 89, 7, 11], [24, 78, 7, 69], [94, 71, 7, 69], [40, 66, 6, 69], [54, 60, 6, 69], [87, 60, 6, 112], [73, 59, 6, 112]] }, A4d: { W: 126, P: [[38, 60, 10, -72], [92, 59, 10, -72], [112, 150, 8, -72], [83, 75, 5, -72], [81, 87, 6, -72], [78, 100, 6, -72], [74, 113, 6, -72], [69, 128, 7, -72], [54, 129, 7, -72], [50, 113, 6, -72], [46, 100, 5, -72], [43, 86, 6, -72], [31, 78, 7, -72], [43, 74, 6, 112], [28, 94, 8, -72], [16, 150, 10, -72], [20, 131, 9, 51], [23, 113, 8, 69], [103, 106, 6, 119], [100, 93, 6, 56], [104, 119, 7, 83], [108, 134, 8, 39], [97, 79, 7, 50], [61, 146, 9, 112]] }, A4e: { W: 114, P: [[16, 151, 8, -91], [19, 55, 8, -91], [95, 59, 8, -91], [98, 147, 8, -91], [98, 132, 7, -91], [16, 133, 7, -91], [17, 71, 7, -91], [100, 72, 7, 5], [101, 119, 7, 5], [103, 86, 7, 5], [17, 119, 7, 5], [84, 138, 7, 5], [74, 126, 7, 5], [32, 68, 6, 56], [37, 80, 6, 56], [45, 90, 6, 56], [63, 112, 6, 56], [101, 102, 6, 56], [17, 108, 6, 112], [54, 101, 6, 112], [18, 93, 6, 112], [16, 81, 6, 112]] }, A4b: { W: 88, P: [[24, 155, 9, -92], [78, 150, 9, -92], [23, 135, 8, -92], [61, 136, 8, -92], [46, 126, 8, -36], [22, 117, 8, -36], [36, 110, 8, 5], [22, 95, 7, 50], [43, 92, 7, 50], [52, 82, 7, 50], [21, 78, 7, 83], [23, 59, 7, 83], [67, 71, 7, 83], [75, 57, 7, 83]] }, A4c: { W: 79, P: [[16, 152, 9, -50], [15, 135, 8, -50], [16, 118, 8, -50], [17, 86, 7, -50], [19, 71, 6, -50], [18, 55, 7, -50], [68, 145, 10, -50], [56, 148, 9, 69], [44, 151, 7, 119], [32, 153, 7, 50], [17, 101, 7, 69]] }, A4a: { W: 95, P: [[32, 55, 10, -103], [84, 57, 9, -84], [49, 59, 9, -84], [65, 58, 8, -36], [60, 71, 8, -36], [60, 90, 8, 11], [61, 105, 8, 11], [55, 126, 8, 50], [54, 141, 7, 56], [46, 153, 7, 56], [28, 151, 7, 112], [14, 136, 7, 112]] }, A51: { W: 125, P: [[113, 176, 10, -92], [97, 161, 9, -92], [82, 147, 9, -92], [64, 133, 7, -50], [97, 136, 7, -50], [62, 154, 7, -35], [106, 120, 7, -35], [41, 151, 6, 11], [108, 103, 6, 11], [24, 142, 6, 11], [103, 88, 6, 11], [15, 124, 6, 50], [97, 73, 6, 50], [12, 107, 6, 50], [15, 94, 6, 69], [84, 61, 6, 69], [24, 80, 6, 69], [35, 71, 5, 112], [71, 57, 5, 112], [55, 58, 5, 112], [43, 63, 5, 112]] }, A50: { W: 75, P: [[49, 56, 5, -161], [56, 65, 5, -102], [62, 78, 5, -102], [34, 54, 6, -102], [56, 93, 6, -72], [17, 51, 6, -72], [17, 64, 6, -72], [49, 100, 6, 11], [34, 104, 6, 11], [15, 78, 7, 11], [19, 96, 7, 11], [16, 111, 7, 83], [13, 125, 7, 83], [13, 140, 7, 83]] }, A53: { W: 99, P: [[18, 139, 8, -84], [32, 149, 7, -84], [47, 150, 6, -84], [65, 146, 6, -84], [79, 138, 6, 50], [86, 126, 6, 50], [81, 112, 6, 50], [69, 103, 6, 102], [58, 101, 6, 102], [44, 98, 6, 102], [30, 92, 7, 50], [29, 76, 6, 5], [42, 63, 6, 5], [56, 62, 6, -84], [70, 60, 6, -84], [81, 64, 6, -84]] }, A52: { W: 90, P: [[17, 148, 8, -161], [17, 134, 7, 39], [17, 120, 8, -72], [18, 71, 8, -72], [19, 57, 10, -72], [51, 63, 8, -72], [64, 72, 8, -72], [30, 114, 8, -72], [42, 124, 5, -72], [54, 127, 6, -72], [64, 134, 7, -72], [75, 145, 8, -72], [73, 85, 8, 51], [70, 98, 8, 119], [59, 108, 8, 83], [46, 114, 8, 56], [18, 86, 8, 102], [18, 103, 9, 51], [35, 59, 9, 11]] }, A55: { W: 105, P: [[34, 145, 9, -92], [51, 151, 8, -92], [20, 128, 7, -92], [67, 145, 7, -50], [19, 107, 7, -35], [80, 137, 7, 37], [86, 122, 7, 37], [18, 88, 7, 37], [89, 105, 6, 80], [19, 68, 6, 80], [88, 87, 6, 80], [91, 70, 6, 119]] }, A54: { W: 97, P: [[14, 57, 9, -102], [92, 59, 9, -102], [54, 144, 9, -50], [55, 125, 8, -50], [75, 60, 7, 29], [30, 59, 7, 29], [58, 59, 6, 29], [46, 59, 6, 51], [51, 72, 6, 69], [53, 109, 6, 69], [53, 97, 6, 102], [53, 85, 6, 119]] }, A57: { W: 148, P: [[45, 143, 10, -72], [78, 62, 10, -72], [100, 150, 10, -72], [137, 58, 10, -72], [92, 133, 9, -72], [54, 126, 9, -72], [37, 126, 9, -72], [67, 81, 9, -72], [82, 81, 8, -72], [59, 112, 8, -72], [63, 97, 7, -72], [33, 109, 7, -72], [87, 99, 7, -72], [120, 104, 7, 119], [113, 120, 8, 112], [127, 90, 8, 83], [132, 76, 9, 39], [109, 134, 9, 56], [88, 118, 7, 69], [23, 76, 9, 112], [30, 91, 8, 51], [20, 58, 10, 50]] }, A56: { W: 93, P: [[47, 146, 10, -72], [38, 128, 9, -72], [33, 111, 8, -72], [26, 81, 8, -72], [22, 66, 7, -72], [19, 54, 8, -72], [56, 130, 8, -72], [86, 55, 8, -72], [77, 70, 8, 42], [72, 85, 8, 56], [66, 100, 8, 119], [61, 115, 8, 56], [30, 96, 8, 56]] }, A59: { W: 91, P: [[8, 59, 9, -102], [77, 58, 9, -102], [34, 151, 8, -50], [43, 135, 8, -50], [71, 73, 7, 5], [18, 71, 7, 5], [25, 80, 7, 50], [63, 89, 7, 50], [34, 95, 7, 50], [48, 121, 6, 102], [57, 102, 6, 102], [39, 109, 6, 102]] }, A58: { W: 103, P: [[11, 149, 8, -103], [23, 140, 8, -103], [87, 148, 8, -84], [76, 134, 7, -50], [69, 121, 7, -50], [34, 126, 7, -50], [45, 114, 6, 5], [62, 109, 6, 5], [53, 99, 6, 29], [65, 92, 6, 29], [41, 86, 6, 69], [76, 77, 6, 69], [32, 78, 6, 69], [87, 64, 6, 69], [25, 64, 6, 69], [14, 57, 6, 69], [94, 55, 6, 69]] }, A5a: { W: 99, P: [[15, 146, 10, -92], [89, 148, 10, -92], [33, 149, 9, -92], [52, 150, 9, -92], [69, 150, 8, -36], [27, 129, 8, -36], [38, 112, 7, 11], [47, 97, 7, 11], [57, 87, 7, 56], [67, 74, 7, 56], [79, 68, 7, 56], [91, 61, 7, 119], [15, 56, 7, -35], [29, 58, 7, 11], [45, 60, 7, 50], [61, 58, 7, 112], [75, 55, 7, 56]] }, A5c: { W: 79, P: [[19, 58, 5, -35], [25, 67, 5, -35], [31, 76, 6, -35], [35, 86, 6, -35], [40, 95, 7, -35], [45, 106, 6, -35], [48, 116, 6, -35], [54, 125, 6, -35], [58, 136, 5, -35], [63, 146, 5, -35], [65, 152, 5, -35]] }, A5b: { W: 55, P: [[40, 57, 5, -35], [31, 58, 5, -35], [20, 57, 8, -35], [20, 72, 8, -35], [20, 85, 8, -35], [20, 100, 8, -35], [20, 115, 8, -35], [20, 127, 8, -35], [19, 144, 8, -35], [17, 160, 8, -35], [17, 175, 8, -35], [29, 177, 6, -35], [41, 176, 5, -35]] }, A5e: { W: 83, P: [[20, 70, 9, -79], [65, 68, 9, -79], [33, 58, 7, 50], [52, 58, 7, 50], [42, 48, 6, 112]] }, A5d: { W: 55, P: [[20, 58, 5, -35], [30, 58, 5, -35], [40, 58, 8, -35], [41, 74, 8, -35], [41, 92, 8, -35], [41, 109, 8, -35], [41, 127, 8, -35], [41, 144, 8, -35], [40, 159, 8, -35], [40, 172, 8, -35], [27, 174, 6, -35], [15, 175, 6, -35]] }, A5f: { W: 90, P: [[0, 172, 5, -35], [11, 171, 5, -35], [21, 169, 5, -35], [33, 172, 5, -35], [45, 172, 5, -35], [55, 170, 5, -35], [66, 172, 5, -35], [74, 170, 5, -35], [85, 170, 5, -35]] }, A46: { W: 87, P: [[20, 149, 9, -103], [20, 128, 8, -84], [20, 108, 8, -84], [33, 98, 8, -36], [20, 86, 8, -36], [51, 96, 7, 29], [68, 98, 7, 29], [21, 63, 7, 56], [35, 54, 7, 56], [52, 54, 7, 112], [68, 53, 7, 112]] }, A47: { W: 97, P: [[25, 148, 8, -103], [61, 145, 8, -103], [16, 109, 8, -79], [43, 151, 8, -79], [15, 132, 7, -36], [77, 132, 7, -36], [23, 83, 7, 37], [83, 110, 7, 37], [36, 66, 6, 37], [49, 53, 6, 37], [67, 106, 6, 56], [53, 112, 6, 56], [63, 57, 6, 112], [40, 114, 6, 112], [76, 59, 6, 112]] }, A44: { W: 103, P: [[19, 148, 8, -161], [34, 154, 8, -79], [60, 149, 8, -36], [80, 141, 7, -36], [86, 123, 7, 29], [20, 128, 8, -92], [20, 110, 8, -92], [21, 91, 8, -50], [21, 73, 8, 5], [23, 57, 8, 42], [37, 63, 8, 51], [52, 70, 7, 69], [66, 78, 7, 69], [86, 109, 7, 112], [79, 90, 7, 112]] }, A45: { W: 89, P: [[19, 149, 10, -102], [18, 103, 10, -102], [22, 55, 9, -72], [17, 126, 9, -72], [20, 79, 8, 5], [36, 155, 8, 5], [38, 101, 8, 5], [40, 52, 7, 50], [54, 157, 7, 50], [53, 100, 7, 50], [56, 53, 7, 91], [71, 155, 7, 91], [70, 99, 7, 91], [73, 51, 7, 91]] }, A42: { W: 90, P: [[26, 56, 9, -102], [22, 68, 5, -102], [23, 79, 5, -102], [21, 92, 5, -84], [22, 103, 6, -50], [20, 114, 6, -50], [22, 125, 6, 91], [22, 137, 6, 91], [32, 104, 7, -35], [24, 151, 7, -35], [48, 148, 7, -35], [68, 115, 7, -35], [35, 152, 6, 51], [43, 110, 6, 51], [61, 144, 6, 51], [76, 124, 6, 51], [72, 137, 9, 119], [52, 107, 9, -79], [66, 81, 7, 80], [66, 92, 9, 11], [42, 52, 9, 42], [64, 64, 9, -102], [55, 54, 6, -102]] }, A43: { W: 86, P: [[77, 69, 8, -103], [76, 56, 7, 56], [64, 60, 7, 119], [50, 61, 7, 29], [30, 78, 7, -72], [23, 88, 7, -35], [17, 100, 8, -35], [15, 116, 8, 50], [39, 69, 6, 83], [17, 131, 9, -72], [29, 145, 9, -72], [46, 147, 8, 29], [61, 142, 8, 83], [72, 134, 8, -103]] }, A40: { W: 132, P: [[95, 150, 7, 51], [81, 154, 8, 11], [64, 156, 9, 11], [46, 151, 9, -79], [29, 140, 9, -79], [20, 123, 9, -103], [17, 104, 9, -103], [19, 85, 9, 50], [28, 68, 9, 56], [41, 55, 9, 80], [58, 49, 9, 112], [75, 51, 8, 119], [91, 56, 8, 91], [104, 66, 8, 51], [113, 80, 8, 50], [113, 97, 8, 5], [107, 113, 8, -36], [90, 118, 9, -36], [75, 113, 7, -36], [68, 108, 5, 5], [60, 115, 7, -79], [47, 114, 7, -79], [42, 102, 7, -103], [47, 91, 7, -35], [55, 81, 6, -35], [67, 77, 8, -103], [76, 97, 8, -79]] }, A41: { W: 104, P: [[88, 148, 10, -102], [29, 118, 10, -102], [68, 57, 5, -102], [23, 134, 8, 11], [16, 148, 8, 119], [39, 103, 8, 51], [47, 90, 7, 51], [55, 77, 7, 51], [62, 67, 6, 83], [76, 95, 5, -35], [77, 107, 6, -35], [73, 83, 5, 83], [71, 71, 5, 83], [79, 121, 7, -35], [84, 134, 8, -50], [65, 111, 6, -50], [52, 114, 6, -50]] }, A48: { W: 110, P: [[16, 152, 10, -103], [92, 148, 9, -91], [92, 129, 9, -91], [18, 130, 8, -50], [90, 109, 8, -50], [19, 109, 8, -50], [33, 110, 8, 11], [53, 106, 8, 11], [70, 104, 8, 11], [94, 90, 8, 51], [95, 68, 8, 51], [18, 85, 7, 102], [22, 66, 7, 102], [22, 47, 7, 102], [95, 49, 7, 102]] }, A49: { W: 78, P: [[13, 152, 9, -103], [36, 146, 9, -84], [53, 146, 8, 11], [68, 145, 8, 11], [35, 125, 8, -36], [38, 105, 7, -36], [37, 88, 7, 56], [38, 72, 7, 56], [52, 61, 7, 91], [65, 60, 7, 119], [40, 58, 7, 50], [24, 58, 6, -72], [12, 59, 6, -102]] }, A33: { W: 87, P: [[22, 65, 10, -35], [16, 136, 10, -35], [32, 100, 10, -35], [38, 56, 8, -35], [54, 57, 7, -35], [63, 67, 6, -35], [66, 80, 6, -35], [57, 91, 7, -35], [47, 99, 7, -35], [56, 106, 7, -35], [64, 117, 6, -35], [65, 129, 6, -35], [59, 138, 7, -35], [49, 144, 7, -35], [31, 144, 7, -35]] }, A32: { W: 87, P: [[69, 148, 10, -35], [51, 149, 9, -35], [33, 149, 9, -35], [14, 149, 8, -35], [19, 133, 8, -35], [28, 118, 8, -35], [42, 109, 8, -35], [56, 100, 7, -35], [66, 88, 7, -35], [68, 73, 7, -35], [60, 57, 6, -35], [47, 56, 6, -35], [34, 57, 6, -35], [24, 65, 6, -35], [16, 72, 6, -35]] }, A31: { W: 65, P: [[19, 149, 9, -35], [51, 148, 9, -35], [39, 53, 9, -35], [36, 147, 6, -35], [35, 135, 6, -35], [34, 120, 5, -35], [34, 109, 5, -35], [34, 98, 6, -35], [35, 84, 6, -35], [37, 69, 6, -35], [27, 62, 6, -35], [19, 68, 6, -35]] }, A30: { W: 87, P: [[67, 138, 10, -102], [48, 148, 10, -102], [73, 117, 9, -50], [74, 95, 9, -50], [22, 144, 8, 11], [69, 76, 8, 11], [15, 126, 8, 11], [12, 104, 7, 56], [58, 63, 7, 56], [13, 87, 6, 56], [46, 57, 6, 56], [20, 75, 6, 112], [27, 64, 6, 112]] }, A37: { W: 87, P: [[26, 152, 10, -102], [36, 133, 9, -102], [47, 116, 9, -50], [57, 100, 9, 5], [66, 86, 9, 5], [80, 70, 8, 56], [62, 65, 8, 56], [44, 63, 7, 56], [26, 64, 6, 56], [11, 64, 6, 56]] }, A36: { W: 87, P: [[65, 145, 10, -79], [46, 151, 9, -79], [70, 127, 8, -79], [66, 111, 8, -79], [26, 148, 7, -79], [52, 100, 7, -79], [18, 131, 7, 11], [15, 114, 7, 11], [37, 97, 7, 51], [20, 102, 7, 51], [23, 86, 7, 51], [34, 72, 7, 80], [44, 61, 7, 112], [55, 49, 7, 112]] }, A35: { W: 87, P: [[21, 55, 9, -50], [38, 56, 9, -50], [53, 57, 9, -50], [69, 55, 9, -50], [20, 71, 8, -50], [18, 87, 8, -50], [18, 104, 8, -50], [32, 95, 8, -50], [46, 89, 7, -50], [57, 91, 7, 50], [64, 101, 7, 50], [71, 113, 7, 83], [69, 127, 7, 83], [61, 140, 7, 83], [49, 146, 6, 83], [34, 146, 6, 83], [22, 140, 6, 83]] }, A34: { W: 87, P: [[10, 117, 9, -35], [25, 118, 9, -35], [39, 117, 9, -35], [55, 117, 9, -35], [70, 117, 9, -35], [61, 98, 8, -35], [61, 78, 7, -35], [61, 58, 7, -35], [46, 68, 7, -35], [36, 82, 7, -35], [27, 94, 7, -35], [61, 136, 7, -35], [61, 149, 7, -35]] }, A39: { W: 87, P: [[69, 103, 10, -103], [60, 122, 9, -92], [47, 134, 8, -50], [33, 144, 8, -50], [17, 155, 8, -50], [70, 82, 8, -50], [48, 106, 7, 51], [64, 68, 7, 51], [53, 58, 7, 51], [34, 107, 7, 51], [21, 97, 7, 51], [17, 82, 7, 51], [38, 59, 7, 51], [26, 65, 7, 51]] }, A38: { W: 87, P: [[43, 98, 10, -103], [61, 90, 8, -103], [58, 105, 8, -79], [27, 107, 8, -79], [24, 91, 7, -36], [67, 73, 7, -36], [21, 75, 7, -36], [29, 61, 7, -36], [58, 61, 6, 102], [46, 55, 6, 102], [17, 118, 7, 37], [67, 118, 7, 37], [69, 131, 7, 37], [16, 133, 6, 56], [66, 142, 6, 56], [23, 146, 6, 56], [33, 151, 6, 56], [57, 151, 5, 119], [46, 154, 5, 119]] }, A2a: { W: 76, P: [[35, 69, 9, -103], [44, 83, 7, -35], [27, 83, 7, -35], [20, 67, 7, -35], [36, 54, 7, -35], [51, 67, 7, -35], [53, 92, 5, 83], [17, 92, 5, 83], [7, 63, 5, 83], [35, 42, 5, 83], [63, 67, 5, 83]] }, A2b: { W: 69, P: [[32, 109, 10, -102], [32, 92, 6, 37], [47, 109, 6, 37], [32, 126, 6, 37], [14, 109, 6, 37], [33, 137, 6, 37], [60, 110, 6, 37], [32, 79, 6, 37], [4, 109, 6, 37]] }, A2c: { W: 41, P: [[30, 150, 10, -79], [24, 164, 7, 50], [17, 177, 6, 102]] }, A2d: { W: 60, P: [[12, 118, 9, -84], [29, 117, 8, 69], [46, 117, 6, 5]] }, A2e: { W: 37, P: [[19, 152, 6, -35]] }, A2f: { W: 74, P: [[14, 154, 10, -102], [23, 133, 9, -72], [34, 114, 9, 5], [42, 96, 9, 5], [50, 77, 8, 83], [59, 62, 8, 83]] }, A20: { W: 40, P: [] }, A21: { W: 35, P: [[17, 151, 9, -35], [18, 50, 8, -35], [17, 67, 8, -35], [17, 85, 7, -35], [18, 100, 6, -35], [18, 114, 5, -35], [19, 128, 5, -35]] }, A22: { W: 61, P: [[15, 51, 5, -35], [16, 61, 5, -35], [14, 73, 5, -35], [14, 85, 5, -35], [44, 53, 5, -35], [43, 66, 5, -35], [42, 77, 5, -35], [40, 87, 5, -35]] }, A23: { W: 120, P: [[31, 120, 9, -102], [79, 120, 9, -102], [90, 79, 9, -102], [43, 80, 9, -102], [48, 120, 7, 29], [62, 121, 7, 29], [83, 103, 7, 29], [86, 92, 7, 29], [73, 79, 7, 29], [59, 79, 7, 29], [26, 79, 7, 29], [11, 79, 7, 29], [47, 64, 7, 29], [51, 49, 7, 29], [94, 62, 7, 29], [98, 46, 7, 29], [107, 79, 7, 29], [118, 79, 7, 29], [92, 121, 7, 29], [107, 120, 7, 29], [75, 137, 7, 29], [70, 150, 7, 29], [28, 135, 7, 29], [23, 147, 7, 29], [37, 104, 7, 29], [39, 93, 7, 29], [17, 121, 7, 29], [3, 120, 7, 29]] }, A24: { W: 99, P: [[21, 144, 9, -35], [36, 150, 8, -35], [54, 150, 8, -35], [71, 145, 7, -35], [78, 133, 7, -35], [81, 118, 6, -35], [73, 108, 6, -35], [60, 102, 6, -35], [46, 101, 7, -35], [31, 95, 7, -35], [24, 80, 8, -35], [37, 67, 8, -35], [52, 58, 9, -35], [71, 61, 9, -35], [51, 39, 6, -35], [52, 76, 6, -35], [52, 88, 6, -35], [51, 115, 6, -35], [51, 127, 6, -35], [51, 138, 6, -35], [51, 165, 6, -35], [51, 177, 6, -35]] }, A26: { W: 94, P: [[80, 151, 10, -103], [68, 134, 9, 11], [58, 117, 9, 11], [48, 98, 9, 11], [39, 80, 9, 11], [32, 99, 7, 91], [20, 108, 7, 91], [11, 120, 6, 91], [10, 133, 6, 91], [17, 143, 5, 91], [27, 148, 6, 56], [40, 150, 6, -72], [54, 147, 6, -72], [76, 123, 6, -72], [81, 108, 6, -72], [56, 81, 6, -72], [63, 69, 5, -92], [60, 57, 5, -92], [47, 52, 5, -92], [44, 63, 5, -92]] }, A27: { W: 56, P: [[27, 72, 5, -35], [25, 62, 5, -35], [27, 51, 5, -35]] }, A28: { W: 53, P: [[39, 177, 10, -35], [41, 49, 10, -35], [27, 63, 9, -35], [17, 80, 8, -35], [25, 168, 8, -35], [14, 152, 8, -35], [10, 135, 7, -35], [10, 120, 7, -35], [13, 93, 7, -35], [9, 108, 7, -35]] }, A29: { W: 53, P: [[15, 179, 10, -92], [15, 51, 10, -92], [29, 165, 9, -35], [27, 63, 9, -35], [34, 79, 9, -35], [37, 151, 8, 56], [41, 133, 8, 56], [41, 96, 8, 56], [44, 113, 7, 119]] }, A3c: { W: 55, P: [[36, 88, 5, -35], [28, 94, 5, -35], [20, 100, 5, -35], [14, 106, 5, -35], [10, 113, 5, -35], [16, 116, 5, -35], [22, 120, 5, -35], [30, 126, 5, -35], [36, 133, 5, -35]] }, A3b: { W: 44, P: [[21, 91, 10, -79], [21, 144, 8, 42], [11, 155, 6, 102]] }, A3a: { W: 44, P: [[21, 134, 10, -79], [23, 86, 10, 51]] }, A3f: { W: 75, P: [[24, 150, 10, -103], [10, 68, 9, 11], [26, 61, 8, 11], [41, 61, 8, 11], [26, 125, 8, 11], [36, 117, 7, 11], [48, 108, 7, 11], [57, 99, 6, 11], [52, 70, 6, 11], [59, 84, 6, 11]] }, A3e: { W: 55, P: [[15, 83, 5, -35], [24, 90, 5, -35], [31, 97, 5, -35], [39, 105, 5, -35], [34, 114, 5, -35], [26, 120, 5, -35], [19, 125, 5, -35], [10, 132, 5, -35]] }, A3d: { W: 73, P: [[11, 91, 9, -50], [27, 90, 9, -50], [44, 90, 9, -50], [59, 90, 9, -50], [11, 127, 6, 69], [21, 128, 6, 69], [33, 129, 6, 69], [44, 129, 6, 69], [53, 129, 6, 69]] } };
'use strict';

function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
}

function PointCollection() {
    this.mousePos = new Vector(0, 0);
    this.pointCollectionX = 0;
    this.pointCollectionY = 0;
    this.points = [];

    this.update = function () {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];

            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = dx * dx + dy * dy;
            var d = Math.sqrt(dd);

            point.targetPos.x = d < 150 ? point.curPos.x - dx : point.originalPos.x;
            point.targetPos.y = d < 150 ? point.curPos.y - dy : point.originalPos.y;

            point.update();
        }
    };

    this.shake = function () {
        var randomNum = Math.floor(Math.random() * 5) - 2;

        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = dx * dx + dy * dy;
            var d = Math.sqrt(dd);
            if (d < 50) {
                this.pointCollectionX = Math.floor(Math.random() * 5) - 2;
                this.pointCollectionY = Math.floor(Math.random() * 5) - 2;
            }
            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY);
        }
    };

    this.draw = function (bubbleShape, reset) {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];

            if (point === null) continue;

            if (window.reset) {
                this.pointCollectionX = 0;
                this.pointCollectionY = 0;
                this.mousePos = new Vector(0, 0);
            }

            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY, reset);
        }
    };

    this.reset = function (bubbleShape) {};
}

function Point(x, y, z, size, color) {
    this.curPos = new Vector(x, y, z);
    this.color = color;

    this.friction = document.Friction;
    this.rotationForce = document.rotationForce;
    this.springStrength = 0.1;

    this.originalPos = new Vector(x, y, z);
    this.radius = size;
    this.size = size;
    this.targetPos = new Vector(x, y, z);
    this.velocity = new Vector(0.0, 0.0, 0.0);

    this.update = function () {
        var dx = this.targetPos.x - this.curPos.x;
        var dy = this.targetPos.y - this.curPos.y;
        // Orthogonal vector is [-dy,dx]
        var ax = dx * this.springStrength - this.rotationForce * dy;
        var ay = dy * this.springStrength + this.rotationForce * dx;

        this.velocity.x += ax;
        this.velocity.x *= this.friction;
        this.curPos.x += this.velocity.x;

        this.velocity.y += ay;
        this.velocity.y *= this.friction;
        this.curPos.y += this.velocity.y;

        var dox = this.originalPos.x - this.curPos.x;
        var doy = this.originalPos.y - this.curPos.y;
        var dd = dox * dox + doy * doy;
        var d = Math.sqrt(dd);

        this.targetPos.z = d / 100 + 1;
        var dz = this.targetPos.z - this.curPos.z;
        var az = dz * this.springStrength;
        this.velocity.z += az;
        this.velocity.z *= this.friction;
        this.curPos.z += this.velocity.z;

        this.radius = this.size * this.curPos.z;
        if (this.radius < 1) this.radius = 1;
    };

    this.draw = function (bubbleShape, dx, dy) {
        ctx.fillStyle = this.color;
        if (bubbleShape == 'square') {
            ctx.beginPath();
            ctx.fillRect(this.curPos.x + dx, this.curPos.y + dy, this.radius * 1.5, this.radius * 1.5);
        } else {
            ctx.beginPath();
            ctx.arc(this.curPos.x + dx, this.curPos.y + dy, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
}

function makeColor(hslList, fade) {
    var hue = hslList[0] /*- 17.0 * fade / 1000.0*/;
    var sat = hslList[1] /*+ 81.0 * fade / 1000.0*/;
    var lgt = hslList[2] /*+ 58.0 * fade / 1000.0*/;
    return 'hsl(' + hue + ',' + sat + '%,' + lgt + '%)';
}

function phraseToHex(phrase) {
    var hexphrase = '';
    for (var i = 0; i < phrase.length; i++) {
        hexphrase += phrase.charCodeAt(i).toString(16);
    }
    return hexphrase;
}

function initEventListeners() {
    $(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

    canvas.ontouchmove = function (e) {
        e.preventDefault();
        onTouchMove(e);
    };

    canvas.ontouchstart = function (e) {
        e.preventDefault();
    };
}

function updateCanvasDimensions() {
    canvas.attr({
        height: 500,
        width: 1250
    });
    canvasWidth = canvas.width();
    canvasHeight = canvas.height();
    draw();
}

function onMove(e) {
    if (pointCollection) {
        pointCollection.mousePos.set(e.pageX - canvas.offset().left, e.pageY - canvas.offset().top);
    }
}

function onTouchMove(e) {
    if (pointCollection) {
        pointCollection.mousePos.set(e.targetTouches[0].pageX - canvas.offset().left, e.targetTouches[0].pageY - canvas.offset().top);
    }
}

function bounceName() {
    shake();
    setTimeout(bounceName, 30);
}

function bounceBubbles() {
    draw();
    update();
    setTimeout(bounceBubbles, 30);
}

function draw(reset) {
    var tmpCanvas = canvas.get(0);

    if (tmpCanvas.getContext === null) {
        return;
    }

    ctx = tmpCanvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : 'circle';

    if (pointCollection) {
        pointCollection.draw(bubbleShape, reset);
    }
}

function shake() {
    var tmpCanvas = canvas.get(0);

    if (tmpCanvas.getContext === null) {
        return;
    }

    ctx = tmpCanvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : 'circle';

    if (pointCollection) {
        pointCollection.shake(bubbleShape);
    }
}

function update() {
    if (pointCollection) pointCollection.update();
}

function drawName(name, letterColors) {
    updateCanvasDimensions();
    var g = [];
    var offset = 0;

    function addLetter(cc_hex, ix, letterCols) {
        if (typeof letterCols !== 'undefined') {
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && Object.prototype.toString.call(letterCols[0]) === '[object Array]') {
                letterColors = letterCols;
            }
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && typeof letterCols[0] === 'number') {
                letterColors = [letterCols];
            }
        } else {
            // if undefined set black
            letterColors = [[0, 0, 27]];
        }

        if (document.alphabet.hasOwnProperty(cc_hex)) {
            var chr_data = document.alphabet[cc_hex].P;
            var bc = letterColors[ix % letterColors.length];

            for (var i = 0; i < chr_data.length; ++i) {
                point = chr_data[i];

                g.push(new Point(point[0] + offset, point[1], 0.0, point[2], makeColor(bc, point[3])));
            }
            offset += document.alphabet[cc_hex].W;
        }
    }

    var hexphrase = phraseToHex(name);

    var col_ix = -1;
    for (var i = 0; i < hexphrase.length; i += 2) {
        var cc_hex = 'A' + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
        if (cc_hex != 'A20') {
            col_ix++;
        }
        addLetter(cc_hex, col_ix, letterColors);
    }

    for (var j = 0; j < g.length; j++) {
        g[j].curPos.x = canvasWidth / 2 - offset / 2 + g[j].curPos.x;
        g[j].curPos.y = canvasHeight / 2 - 105 + g[j].curPos.y;
        g[j].originalPos.x = canvasWidth / 2 - offset / 2 + g[j].originalPos.x;
        g[j].originalPos.y = canvasHeight / 2 - 105 + g[j].originalPos.y;
    }

    pointCollection = new PointCollection();
    pointCollection.points = g;
    initEventListeners();
}

window.reset = false;

$(window).mouseleave(function () {
    window.reset = true;
});

$(window).mouseenter(function () {
    window.reset = false;
});

var canvas = $('#myCanvas');
var canvasHeight;
var canvasWidth;
var ctx;
var pointCollection;
var point;

document.rotationForce = 0.0;
document.Friction = 0.85;

var white = [0, 0, 100];
var black = [0, 0, 27];
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

setTimeout(updateCanvasDimensions, 30);
'use strict';

var yellow = [60, 200, 50];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var color = [yellow, blue, purple];

var title1 = 'Iel Cunanan';
var title2 = 'Web techie';
var title3 = 'Avid game watcher';

window.onload = function timedDraw() {
	setInterval(drawTitle1, 2500);
	setInterval(drawTitle2, 5000);
	setInterval(drawTitle3, 7500);
};

function drawTitle1() {
	drawName(title1, color);
};
function drawTitle2() {
	drawName(title2, color);
};
function drawTitle3() {
	drawName(title3, color);
};

var bubbleShape = 'circle';

function bounceThis() {
	bounceBubbles();
};