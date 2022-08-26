/*! jQuery v3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (g, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    v = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    m = {},
    b = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    w = g.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function C(e, t, n) {
    var r,
      i,
      o = (n = n || w).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function T(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f =
      "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = T(e);
    return (
      !b(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || b(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || E.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = E.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    E.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        C(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? E.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return v(a);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    var e,
      p,
      x,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      C,
      T,
      a,
      E,
      v,
      s,
      c,
      y,
      A = "sizzle" + 1 * new Date(),
      d = n.document,
      N = 0,
      r = 0,
      m = ue(),
      b = ue(),
      S = ue(),
      k = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      L = {}.hasOwnProperty,
      t = [],
      j = t.pop,
      q = t.push,
      O = t.push,
      P = t.slice,
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      B =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        R +
        "*(" +
        B +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        B +
        "))|)" +
        R +
        "*\\]",
      W =
        ":(" +
        B +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      F = new RegExp(R + "+", "g"),
      $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      z = new RegExp("^" + R + "*," + R + "*"),
      _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      U = new RegExp(R + "|>"),
      V = new RegExp(W),
      X = new RegExp("^" + B + "$"),
      Q = {
        ID: new RegExp("^#(" + B + ")"),
        CLASS: new RegExp("^\\.(" + B + ")"),
        TAG: new RegExp("^(" + B + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        C();
      },
      ae = xe(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((t = P.call(d.childNodes)), d.childNodes),
        t[d.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: t.length
          ? function (e, t) {
              q.apply(e, P.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        d = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (!r && (C(e), (e = e || T), E)) {
        if (11 !== d && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === d) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              p.getElementsByClassName &&
              e.getElementsByClassName
            )
              return O.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          p.qsa &&
          !k[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== d || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === d && (U.test(t) || _.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && p.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = A))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
            c = l.join(",");
          }
          try {
            return O.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            k(t, !0);
          } finally {
            s === A && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > x.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[A] = !0), e;
    }
    function ce(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) x.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((p = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (C = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : d;
        return (
          r != T &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (T = r).documentElement),
            (E = !i(T)),
            d != T &&
              (n = T.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (p.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(T.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (p.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (p.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (p.getElementsByClassName = J.test(T.getElementsByClassName)),
            (p.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = A),
                !T.getElementsByName || !T.getElementsByName(A).length
              );
            })),
            p.getById
              ? ((x.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((x.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (x.find.TAG = p.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : p.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (x.find.CLASS =
              p.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (p.qsa = J.test(T.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  A +
                  "'></a><select id='" +
                  A +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + R + "*(?:value|" + I + ")"),
                  e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="),
                  (t = T.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + A + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (p.matchesSelector = J.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (p.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", W);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = J.test(a.compareDocumentPosition)),
            (y =
              t || J.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!p.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == T || (e.ownerDocument == d && y(d, e))
                        ? -1
                        : t == T || (t.ownerDocument == d && y(d, t))
                        ? 1
                        : u
                        ? H(u, e) - H(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == T
                      ? -1
                      : t == T
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? H(u, e) - H(u, t)
                      : 0;
                  if (i === o) return de(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? de(a[r], s[r])
                    : a[r] == d
                    ? -1
                    : s[r] == d
                    ? 1
                    : 0;
                })),
          T
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (C(e),
        p.matchesSelector &&
          E &&
          !k[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          k(t, !0);
        }
      return 0 < se(t, T, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != T && C(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != T && C(e);
      var n = x.attrHandle[t.toLowerCase()],
        r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : p.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !p.detectDuplicates),
        (u = !p.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((x = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: Q,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Q.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    p = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            b
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && d)) {
                      (p =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++p && a === e) {
                          i[h] = [N, s, p];
                          break;
                        }
                    } else if (
                      (d &&
                        (p = s =
                          (r =
                            (i =
                              (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]),
                      !1 === p)
                    )
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (
                          (b
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++p &&
                          (d &&
                            ((i =
                              (o = a[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [N, p]),
                          a === e)
                        )
                          break;
                    return (p -= v) === g || (p % g == 0 && 0 <= p / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                x.pseudos[e] ||
                x.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[A]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                x.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = H(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[A]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              X.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = pe(e);
    for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);
    function me() {}
    function be(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function xe(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        d = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [N, d];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[A] || (e[A] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === N && r[1] === d)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Ce(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(p, h, g, v, y, e) {
      return (
        v && !v[A] && (v = Te(v)),
        y && !y[A] && (y = Te(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !p || (!e && h) ? c : Ce(c, s, p, n, r),
            d = g ? (y || (e ? p : l || v) ? [] : t) : f;
          if ((g && g(f, d, n, r), v)) {
            (i = Ce(d, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || p) {
              if (y) {
                (i = []), (o = d.length);
                while (o--) (a = d[o]) && i.push((f[o] = a));
                y(null, (d = []), i, r);
              }
              o = d.length;
              while (o--)
                (a = d[o]) &&
                  -1 < (i = y ? H(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (d = Ce(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : O.apply(t, d);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          u = xe(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = xe(
            function (e) {
              return -1 < H(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = x.relative[e[s].type])) c = [xe(we(c), t)];
        else {
          if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
            for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;
            return Te(
              1 < s && we(c),
              1 < s &&
                be(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && be(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = x.filters = x.pseudos),
      (x.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = b[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = x.preFilter);
          while (a) {
            for (o in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = _.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            x.filter))
              !(r = Q[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            b,
            r,
            i = [],
            o = [],
            a = S[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
            (a = S(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (b = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  d = w,
                  p = e || (b && x.find.TAG("*", i)),
                  h = (N += null == d ? 1 : Math.random() || 0.1),
                  g = p.length;
                for (
                  i && (w = t == T || t || i);
                  l !== g && null != (o = p[l]);
                  l++
                ) {
                  if (b && o) {
                    (a = 0), t || o.ownerDocument == T || (C(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || T, n)) {
                        r.push(o);
                        break;
                      }
                    i && (N = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = j.call(r));
                    f = Ce(f);
                  }
                  O.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((N = h), (w = d)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              x.relative[o[1].type]
            ) {
              if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = Q.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), x.relative[(s = a.type)])) break;
              if (
                (u = x.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && be(o))))
                  return O.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (p.sortStable = A.split("").sort(D).join("") === A),
      (p.detectDuplicates = !!l),
      C(),
      (p.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(I, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(g);
  (E.find = p),
    (E.expr = p.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = p.uniqueSort),
    (E.text = p.getText),
    (E.isXMLDoc = p.isXML),
    (E.contains = p.contains),
    (E.escapeSelector = p.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && E(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    A = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = E.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return b(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var L,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof E ? t[0] : t),
          E.merge(
            this,
            E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)
          ),
          k.test(r[1]) && E.isPlainObject(t))
        )
          for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = w.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : b(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(E)
      : E.makeArray(e, this);
  }).prototype = E.fn),
    (L = E(w));
  var q = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return A(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (S(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length &&
              (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function B(e, t, n, r) {
    var i;
    try {
      e && b((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && b((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          E.each(e.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  b(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== T(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = E.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = b(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          b(t)
                            ? s
                              ? t.call(e, l(u, o, I, s), l(u, o, R, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, I, s),
                                  l(u, o, R, s),
                                  l(u, o, I, o.notifyWith)
                                ))
                            : (a !== I && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== R && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      g.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)),
                  o[1][3].add(l(0, e, b(t) ? t : I)),
                  o[2][3].add(l(0, e, b(n) ? n : R));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = E.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (B(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || b(i[t] && i[t].then))
        )
          return o.then();
        while (t--) B(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    g.console &&
      g.console.warn &&
      e &&
      M.test(e.name) &&
      g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      g.setTimeout(function () {
        throw e;
      });
    });
  var W = E.Deferred();
  function F() {
    w.removeEventListener("DOMContentLoaded", F),
      g.removeEventListener("load", F),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      W.then(e)["catch"](function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          W.resolveWith(w, [E]);
      },
    }),
    (E.ready.then = W.then),
    "complete" === w.readyState ||
    ("loading" !== w.readyState && !w.documentElement.doScroll)
      ? g.setTimeout(E.ready)
      : (w.addEventListener("DOMContentLoaded", F),
        g.addEventListener("load", F));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === T(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        b(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(E(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    _ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(_, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = E.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(H) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || E.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var Y = new Q(),
    G = new Q(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return G.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = G.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              G.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = G.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  G.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = E.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = w.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === E.css(e, "display"))
    );
  };
  var se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = se[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = E.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (se[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var le,
    ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (le = w.createDocumentFragment().appendChild(w.createElement("div"))),
    (ce = w.createElement("input")).setAttribute("type", "radio"),
    ce.setAttribute("checked", "checked"),
    ce.setAttribute("name", "t"),
    le.appendChild(ce),
    (m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (le.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue),
    (le.innerHTML = "<option></option>"),
    (m.option = !!le.lastChild);
  var he = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S(e, t)) ? E.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
    (he.th = he.td),
    m.option ||
      (he.optgroup = he.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = he[s] || he._default),
            (a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          E.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    (f.textContent = ""), (p = 0);
    while ((o = d[p++]))
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ge(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) pe.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function we() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return w.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Te(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Te(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = we;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function Ee(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && E.event.add(e, i, xe);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.get(t);
      if (X(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && E.find.matchesSelector(re, i),
          n.guid || (n.guid = E.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(H) || [""]).length);
        while (l--)
          (p = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = E.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = E.event.special[p] || {}),
              (c = E.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                (((d = u[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(p, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (E.event.global[p] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(H) || [""]).length;
        while (l--)
          if (
            ((p = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            (f = E.event.special[p] || {}),
              (d = u[(p = (r ? f.delegateType : f.bindType) || p)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = d.length);
            while (o--)
              (c = d[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                E.removeEvent(e, p, v.handle),
              delete u[p]);
          } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = E.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (fe.test(t.type) &&
              t.click &&
              S(t, "input") &&
              Y.get(t, "click")) ||
            S(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : we),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: we,
      isPropagationStopped: we,
      isImmediatePropagationStopped: we,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      E.event.addProp
    ),
    E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return Ee(this, e, Ce), !1;
        },
        trigger: function () {
          return Ee(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Te(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Te(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = we),
          this.each(function () {
            E.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ae = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function ke(e, t) {
    return (
      (S(e, "table") &&
        S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function je(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      G.hasData(e) && ((o = G.access(e)), (a = E.extend({}, o)), G.set(t, a));
    }
  }
  function qe(n, r, i, o) {
    r = v(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = b(p);
    if (h || (1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== d &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, ge(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++)
          (u = a[c]),
            pe.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              E.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : C(u.textContent.replace(Se, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(ge(r)),
        r.parentNode &&
          (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++)
            je(o[r], a[r]);
        else je(e, c);
      return (
        0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ke(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ke(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !he[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return qe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(ge(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = g), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Re = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || He(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = E.style(e, t)),
        !m.pixelBoxStyles() &&
          Pe.test(a) &&
          Re.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Me(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = g.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = w.createElement("div"),
      l = w.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
      E.extend(m, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = w.createElement("table")),
              (t = w.createElement("tr")),
              (n = w.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = g.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var We = ["Webkit", "Moz", "ms"],
    Fe = w.createElement("div").style,
    $e = {};
  function ze(e) {
    var t = E.cssProps[e] || $e[e];
    return (
      t ||
      (e in Fe
        ? e
        : ($e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = We.length;
              while (n--) if ((e = We[n] + t) in Fe) return e;
            })(e) || e))
    );
  }
  var _e,
    Ue,
    Ve = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Qe = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Ge(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= E.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += E.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += E.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += E.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = He(e),
      i =
        (!m.boxSizingReliable() || n) &&
        "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!m.boxSizingReliable() && i) ||
        (!m.reliableTrDimensions() && S(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(E.css(e, t));
            if (c && c[3] !== l) {
              (u /= 2), (l = l || c[3]), (c = +u || 1);
              while (a--)
                E.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          })(e, t, i)),
          (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
            m.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = E.cssHooks[t] || E.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Ye && (i = Ye[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    E.each(["height", "width"], function (e, u) {
      E.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Ie(e, Qe, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = He(e),
            o = !m.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = E.css(e, u))),
            Ge(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Me(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (E.cssHooks[i + o].set = Ge);
    }),
    E.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = He(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = g.setTimeout(e, r);
          t.stop = function () {
            g.clearTimeout(n);
          };
        })
      );
    }),
    (_e = w.createElement("input")),
    (Ue = w.createElement("select").appendChild(w.createElement("option"))),
    (_e.type = "checkbox"),
    (m.checkOn = "" !== _e.value),
    (m.optSelected = Ue.selected),
    ((_e = w.createElement("input")).value = "t"),
    (_e.type = "radio"),
    (m.radioValue = "t" === _e.value);
  var Ze,
    et = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? Ze : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (Ze = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = et[t] || E.find.attr;
      et[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = et[o]),
            (et[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (et[o] = i)),
          r
        );
      };
    });
  var tt = /^(?:input|select|textarea|button)$/i,
    nt = /^(?:a|area)$/i;
  function rt(e) {
    return (e.match(H) || []).join(" ");
  }
  function it(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ot(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : tt.test(e.nodeName) || (nt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, it(this)));
          });
        if ((e = ot(t)).length)
          while ((n = this[u++]))
            if (((i = it(n)), (r = 1 === n.nodeType && " " + rt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = rt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, it(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = ot(t)).length)
          while ((n = this[u++]))
            if (((i = it(n)), (r = 1 === n.nodeType && " " + rt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = rt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : b(i)
          ? this.each(function (e) {
              E(this).toggleClass(i.call(this, e, it(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = E(this)), (r = ot(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = it(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + rt(it(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var at = /\r/g;
  E.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = b(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, E(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = E.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(at, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : rt(E.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
              ) {
                if (((t = E(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = E.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        m.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (m.focusin = "onfocusin" in g);
  var st = /^(?:focusinfocus|focusoutblur)$/,
    ut = function (e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [n || w],
        p = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || w),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !st.test(p + E.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          ((e = e[E.expando]
            ? e
            : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : E.makeArray(t, [e])),
          (c = E.event.special[p] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || p, st.test(s + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            d.push(o), (a = o);
          a === (n.ownerDocument || w) &&
            d.push(a.defaultView || a.parentWindow || g);
        }
        i = 0;
        while ((o = d[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || p),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              X(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(d.pop(), t)) ||
            !X(n) ||
            (u &&
              b(n[p]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (E.event.triggered = p),
              e.isPropagationStopped() && f.addEventListener(p, ut),
              n[p](),
              e.isPropagationStopped() && f.removeEventListener(p, ut),
              (E.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    m.focusin ||
      E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        };
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      }),
    (E.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new g.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          E.error(
            "Invalid XML: " +
              (n
                ? E.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    });
  var lt,
    ct = /\[\]$/,
    ft = /\r?\n/g,
    dt = /^(?:submit|button|image|reset|file)$/i,
    pt = /^(?:input|select|textarea|keygen)/i;
  function ht(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      E.each(e, function (e, t) {
        r || ct.test(n)
          ? i(n, t)
          : ht(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== T(e)) i(n, e);
    else for (t in e) ht(n + "[" + t + "]", e[t], r, i);
  }
  (E.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = b(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) ht(n, e[n], t, i);
    return r.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              pt.test(this.nodeName) &&
              !dt.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(ft, "\r\n") };
                })
              : { name: t.name, value: n.replace(ft, "\r\n") };
          })
          .get();
      },
    }),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (b(e) && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return b(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = b(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (m.createHTMLDocument =
      (((lt = w.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === lt.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t =
                  w.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = w.location.href),
                t.head.appendChild(r))
              : (t = w)),
          (o = !n && []),
          (i = k.exec(e))
            ? [t.createElement(i[1])]
            : ((i = me([e], t, o)),
              o && o.length && E(o).remove(),
              E.merge([], i.childNodes)));
      var r, i, o;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, "position"),
          c = E(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = E.css(e, "top")),
          (u = E.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          b(t) && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === E.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
              (i.left += E.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - E.css(r, "marginTop", !0),
            left: t.left - i.left - E.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === E.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = Me(m.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? E(e).position()[n] + "px" : t;
      });
    }),
    E.each({ Height: "height", Width: "width" }, function (a, s) {
      E.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || E.guid++),
        i
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = S),
    (E.isFunction = b),
    (E.isWindow = x),
    (E.camelCase = V),
    (E.type = T),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? "" : (e + "").replace(gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var vt = g.jQuery,
    yt = g.$;
  return (
    (E.noConflict = function (e) {
      return g.$ === E && (g.$ = yt), e && g.jQuery === E && (g.jQuery = vt), E;
    }),
    "undefined" == typeof e && (g.jQuery = g.$ = E),
    E
  );
});

/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
    },
    e = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    i = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    n = (t) => {
      const e = i(t);
      return e && document.querySelector(e) ? e : null;
    },
    s = (t) => {
      const e = i(t);
      return e ? document.querySelector(e) : null;
    },
    o = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    r = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    a = (e) =>
      r(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? t.findOne(e)
        : null,
    l = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          o = e[n],
          a =
            o && r(o)
              ? "element"
              : null == (l = o)
              ? "" + l
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    c = (t) =>
      !(!r(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    h = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    d = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? d(t.parentNode)
        : null;
    },
    u = () => {},
    f = (t) => t.offsetHeight,
    p = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    m = [],
    g = () => "rtl" === document.documentElement.dir,
    _ = (t) => {
      var e;
      (e = () => {
        const e = p();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (m.length ||
              document.addEventListener("DOMContentLoaded", () => {
                m.forEach((t) => t());
              }),
            m.push(e))
          : e();
    },
    b = (t) => {
      "function" == typeof t && t();
    },
    v = (t, e, i = !0) => {
      if (!i) return void b(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const r = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener("transitionend", r), b(t));
      };
      e.addEventListener("transitionend", r),
        setTimeout(() => {
          s || o(e);
        }, n);
    },
    y = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    w = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    A = /::\d+$/,
    T = {};
  let O = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
    k = /^(mouseenter|mouseleave)/i,
    L = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function x(t, e) {
    return (e && `${e}::${O++}`) || t.uidEvent || O++;
  }
  function D(t) {
    const e = x(t);
    return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
  }
  function S(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function I(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = M(t);
    return L.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), k.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = I(e, i, n),
      l = D(t),
      c = l[a] || (l[a] = {}),
      h = S(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = x(r, e.replace(w, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function j(t, e, i, n, s) {
    const o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function M(t) {
    return (t = t.replace(E, "")), C[t] || t;
  }
  const P = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = I(e, i, n),
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void j(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  j(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(A, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            j(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = p(),
          s = M(e),
          o = e !== s,
          r = L.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    H = new Map();
  var R = {
    set(t, e, i) {
      H.has(t) || H.set(t, new Map());
      const n = H.get(t);
      n.has(e) || 0 === n.size
        ? n.set(e, i)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
    },
    get: (t, e) => (H.has(t) && H.get(t).get(e)) || null,
    remove(t, e) {
      if (!H.has(t)) return;
      const i = H.get(t);
      i.delete(e), 0 === i.size && H.delete(t);
    },
  };
  class B {
    constructor(t) {
      (t = a(t)) &&
        ((this._element = t),
        R.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      v(t, e, i);
    }
    static getInstance(t) {
      return R.get(t, this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class W extends B {
    static get NAME() {
      return "alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        i = this._triggerCloseEvent(e);
      null === i || i.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return s(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return P.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t), t, e);
    }
    _destroyElement(t) {
      t.remove(), P.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = W.getOrCreateInstance(this);
        "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  P.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    W.handleDismiss(new W())
  ),
    _(W);
  class q extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function z(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function $(t) {
    return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
  }
  P.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      q.getOrCreateInstance(e).toggle();
    }
  ),
    _(q);
  const U = {
      setDataAttribute(t, e, i) {
        t.setAttribute("data-bs-" + $(e), i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-" + $(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = z(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    V = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    K = "next",
    X = "prev",
    Y = "left",
    Q = "right",
    G = { ArrowLeft: Q, ArrowRight: Y };
  class Z extends B {
    constructor(e, i) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(i)),
        (this._indicatorsElement = t.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return F;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(K);
    }
    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next();
    }
    prev() {
      this._slide(X);
    }
    pause(e) {
      e || (this._isPaused = !0),
        t.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (o(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = t.findOne(".active.carousel-item", this._element);
      const i = this._getItemIndex(this._activeElement);
      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding)
        return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
      if (i === e) return this.pause(), void this.cycle();
      const n = e > i ? K : X;
      this._slide(n, this._items[e]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...F,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("carousel", t, V),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : Y);
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          P.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const e = (t) => {
          !this._pointerEvent ||
          ("pen" !== t.pointerType && "touch" !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      t.find(".carousel-item img", this._element).forEach((t) => {
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            P.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            P.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
            P.on(this._element, "touchend.bs.carousel", (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = G[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? t.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === K;
      return y(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(e, i) {
      const n = this._getItemIndex(e),
        s = this._getItemIndex(
          t.findOne(".active.carousel-item", this._element)
        );
      return P.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: e,
        direction: i,
        from: s,
        to: n,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        const i = t.findOne(".active", this._indicatorsElement);
        i.classList.remove("active"), i.removeAttribute("aria-current");
        const n = t.find("[data-bs-target]", this._indicatorsElement);
        for (let t = 0; t < n.length; t++)
          if (
            Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            n[t].classList.add("active"),
              n[t].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const e =
        this._activeElement ||
        t.findOne(".active.carousel-item", this._element);
      if (!e) return;
      const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      i
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = i))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, i) {
      const n = this._directionToOrder(e),
        s = t.findOne(".active.carousel-item", this._element),
        o = this._getItemIndex(s),
        r = i || this._getItemByOrder(n, s),
        a = this._getItemIndex(r),
        l = Boolean(this._interval),
        c = n === K,
        h = c ? "carousel-item-start" : "carousel-item-end",
        d = c ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(n);
      if (r && r.classList.contains("active"))
        return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, u).defaultPrevented) return;
      if (!s || !r) return;
      (this._isSliding = !0),
        l && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      const p = () => {
        P.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: u,
          from: o,
          to: a,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
        const t = () => {
          r.classList.remove(h, d),
            r.classList.add("active"),
            s.classList.remove("active", d, h),
            (this._isSliding = !1),
            setTimeout(p, 0);
        };
        this._queueCallback(t, s, !0);
      } else s.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), p();
      l && this.cycle();
    }
    _directionToOrder(t) {
      return [Q, Y].includes(t)
        ? g()
          ? t === Y
            ? X
            : K
          : t === Y
          ? K
          : X
        : t;
    }
    _orderToDirection(t) {
      return [K, X].includes(t)
        ? g()
          ? t === X
            ? Y
            : Q
          : t === X
          ? Q
          : Y
        : t;
    }
    static carouselInterface(t, e) {
      const i = Z.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Z.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = s(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        Z.carouselInterface(e, i),
        n && Z.getInstance(e).to(n),
        t.preventDefault();
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    Z.dataApiClickHandler
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const e = t.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        Z.carouselInterface(e[t], Z.getInstance(e[t]));
    }),
    _(Z);
  const J = { toggle: !0, parent: "" },
    tt = { toggle: "boolean", parent: "(string|element)" };
  class et extends B {
    constructor(e, i) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(i)),
        (this._triggerArray = t.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = t.find('[data-bs-toggle="collapse"]');
      for (let e = 0, i = s.length; e < i; e++) {
        const i = s[e],
          o = n(i),
          r = t.find(o).filter((t) => t === this._element);
        null !== o &&
          r.length &&
          ((this._selector = o), this._triggerArray.push(i));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return J;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show"))
        return;
      let e, i;
      this._parent &&
        ((e = t
          .find(".show, .collapsing", this._parent)
          .filter((t) =>
            "string" == typeof this._config.parent
              ? t.getAttribute("data-bs-parent") === this._config.parent
              : t.classList.contains("collapse")
          )),
        0 === e.length && (e = null));
      const n = t.findOne(this._selector);
      if (e) {
        const t = e.find((t) => n !== t);
        if (((i = t ? et.getInstance(t) : null), i && i._isTransitioning))
          return;
      }
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e &&
        e.forEach((t) => {
          n !== t && et.collapseInterface(t, "hide"),
            i || R.set(t, "bs.collapse", null);
        });
      const s = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[s] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove("collapsed"),
              t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
      this._queueCallback(
        () => {
          this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse", "show"),
            (this._element.style[s] = ""),
            this.setTransitioning(!1),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[s] = this._element[o] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show"))
        return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + "px"),
        f(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            i = s(e);
          i &&
            !i.classList.contains("show") &&
            (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            this.setTransitioning(!1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse"),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    _getConfig(t) {
      return (
        ((t = { ...J, ...t }).toggle = Boolean(t.toggle)),
        l("collapse", t, tt),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: e } = this._config;
      e = a(e);
      const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
      return (
        t.find(i, e).forEach((t) => {
          const e = s(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        e
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const i = t.classList.contains("show");
      e.forEach((t) => {
        i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", i);
      });
    }
    static collapseInterface(t, e) {
      let i = et.getInstance(t);
      const n = {
        ...J,
        ...U.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!i &&
          n.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (n.toggle = !1),
        i || (i = new et(t, n)),
        "string" == typeof e)
      ) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        et.collapseInterface(this, t);
      });
    }
  }
  P.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (e) {
      ("A" === e.target.tagName ||
        (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
        e.preventDefault();
      const i = U.getDataAttributes(this),
        s = n(this);
      t.find(s).forEach((t) => {
        const e = et.getInstance(t);
        let n;
        e
          ? (null === e._parent &&
              "string" == typeof i.parent &&
              ((e._config.parent = i.parent), (e._parent = e._getParent())),
            (n = "toggle"))
          : (n = i),
          et.collapseInterface(t, n);
      });
    }
  ),
    _(et);
  var it = "top",
    nt = "bottom",
    st = "right",
    ot = "left",
    rt = [it, nt, st, ot],
    at = rt.reduce(function (t, e) {
      return t.concat([e + "-start", e + "-end"]);
    }, []),
    lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
      return t.concat([e, e + "-start", e + "-end"]);
    }, []),
    ct = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function dt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function ut(t) {
    return t instanceof dt(t).Element || t instanceof Element;
  }
  function ft(t) {
    return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
  }
  function pt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  var mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        ft(s) &&
          ht(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            ft(n) &&
              ht(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function gt(t) {
    return t.split("-")[0];
  }
  function _t(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function bt(t) {
    var e = _t(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function vt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && pt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function yt(t) {
    return dt(t).getComputedStyle(t);
  }
  function wt(t) {
    return ["table", "td", "th"].indexOf(ht(t)) >= 0;
  }
  function Et(t) {
    return (
      (ut(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function At(t) {
    return "html" === ht(t)
      ? t
      : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
  }
  function Tt(t) {
    return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
  }
  function Ot(t) {
    for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position; )
      i = Tt(i);
    return i &&
      ("html" === ht(i) || ("body" === ht(i) && "static" === yt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ft(t) &&
              "fixed" === yt(t).position
            )
              return null;
            for (
              var i = At(t);
              ft(i) && ["html", "body"].indexOf(ht(i)) < 0;

            ) {
              var n = yt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Ct(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var kt = Math.max,
    Lt = Math.min,
    xt = Math.round;
  function Dt(t, e, i) {
    return kt(t, Lt(e, i));
  }
  function St(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function It(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  var Nt = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = gt(i.placement),
          l = Ct(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
        if (o && r) {
          var h = (function (t, e) {
              return St(
                "number" !=
                  typeof (t =
                    "function" == typeof t
                      ? t(
                          Object.assign({}, e.rects, { placement: e.placement })
                        )
                      : t)
                  ? t
                  : It(t, rt)
              );
            })(s.padding, i),
            d = bt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p =
              i.rects.reference[c] +
              i.rects.reference[l] -
              r[l] -
              i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Ot(o),
            _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Dt(v, w, y),
            A = l;
          i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
        }
      },
      effect: function (t) {
        var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
        null != n &&
          ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
          vt(e.elements.popper, n) &&
          (e.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Mt(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.offsets,
      r = t.position,
      a = t.gpuAcceleration,
      l = t.adaptive,
      c = t.roundOffsets,
      h =
        !0 === c
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: xt(xt(e * n) / n) || 0, y: xt(xt(i * n) / n) || 0 };
            })(o)
          : "function" == typeof c
          ? c(o)
          : o,
      d = h.x,
      u = void 0 === d ? 0 : d,
      f = h.y,
      p = void 0 === f ? 0 : f,
      m = o.hasOwnProperty("x"),
      g = o.hasOwnProperty("y"),
      _ = ot,
      b = it,
      v = window;
    if (l) {
      var y = Ot(i),
        w = "clientHeight",
        E = "clientWidth";
      y === dt(i) &&
        "static" !== yt((y = Et(i))).position &&
        ((w = "scrollHeight"), (E = "scrollWidth")),
        (y = y),
        s === it && ((b = nt), (p -= y[w] - n.height), (p *= a ? 1 : -1)),
        s === ot && ((_ = st), (u -= y[E] - n.width), (u *= a ? 1 : -1));
    }
    var A,
      T = Object.assign({ position: r }, l && jt);
    return a
      ? Object.assign(
          {},
          T,
          (((A = {})[b] = g ? "0" : ""),
          (A[_] = m ? "0" : ""),
          (A.transform =
            (v.devicePixelRatio || 1) < 2
              ? "translate(" + u + "px, " + p + "px)"
              : "translate3d(" + u + "px, " + p + "px, 0)"),
          A)
        )
      : Object.assign(
          {},
          T,
          (((e = {})[b] = g ? p + "px" : ""),
          (e[_] = m ? u + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  var Pt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
            placement: gt(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s,
          };
        null != e.modifiersData.popperOffsets &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            Mt(
              Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l,
              })
            )
          )),
          null != e.modifiersData.arrow &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              Mt(
                Object.assign({}, c, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: l,
                })
              )
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
          }));
      },
      data: {},
    },
    Ht = { passive: !0 },
    Rt = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = dt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            c.forEach(function (t) {
              t.addEventListener("scroll", i.update, Ht);
            }),
          a && l.addEventListener("resize", i.update, Ht),
          function () {
            o &&
              c.forEach(function (t) {
                t.removeEventListener("scroll", i.update, Ht);
              }),
              a && l.removeEventListener("resize", i.update, Ht);
          }
        );
      },
      data: {},
    },
    Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Wt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Bt[t];
    });
  }
  var qt = { start: "end", end: "start" };
  function zt(t) {
    return t.replace(/start|end/g, function (t) {
      return qt[t];
    });
  }
  function $t(t) {
    var e = dt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Ut(t) {
    return _t(Et(t)).left + $t(t).scrollLeft;
  }
  function Ft(t) {
    var e = yt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Vt(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = (function t(e) {
        return ["html", "body", "#document"].indexOf(ht(e)) >= 0
          ? e.ownerDocument.body
          : ft(e) && Ft(e)
          ? e
          : t(At(e));
      })(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = dt(n),
      r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Vt(At(r)));
  }
  function Kt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Xt(t, e) {
    return "viewport" === e
      ? Kt(
          (function (t) {
            var e = dt(t),
              i = Et(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + Ut(t), y: a }
            );
          })(t)
        )
      : ft(e)
      ? (function (t) {
          var e = _t(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : Kt(
          (function (t) {
            var e,
              i = Et(t),
              n = $t(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = kt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = kt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Ut(t),
              l = -n.scrollTop;
            return (
              "rtl" === yt(s || i).direction &&
                (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(Et(t))
        );
  }
  function Yt(t) {
    return t.split("-")[1];
  }
  function Qt(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? gt(s) : null,
      r = s ? Yt(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case it:
        e = { x: a, y: i.y - n.height };
        break;
      case nt:
        e = { x: a, y: i.y + i.height };
        break;
      case st:
        e = { x: i.x + i.width, y: l };
        break;
      case ot:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? Ct(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case "end":
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Gt(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? "clippingParents" : o,
      a = i.rootBoundary,
      l = void 0 === a ? "viewport" : a,
      c = i.elementContext,
      h = void 0 === c ? "popper" : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      m = St("number" != typeof p ? p : It(p, rt)),
      g = "popper" === h ? "reference" : "popper",
      _ = t.elements.reference,
      b = t.rects.popper,
      v = t.elements[u ? g : h],
      y = (function (t, e, i) {
        var n =
            "clippingParents" === e
              ? (function (t) {
                  var e = Vt(At(t)),
                    i =
                      ["absolute", "fixed"].indexOf(yt(t).position) >= 0 &&
                      ft(t)
                        ? Ot(t)
                        : t;
                  return ut(i)
                    ? e.filter(function (t) {
                        return ut(t) && vt(t, i) && "body" !== ht(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
            var n = Xt(t, i);
            return (
              (e.top = kt(n.top, e.top)),
              (e.right = Lt(n.right, e.right)),
              (e.bottom = Lt(n.bottom, e.bottom)),
              (e.left = kt(n.left, e.left)),
              e
            );
          }, Xt(t, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      })(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
      w = _t(_),
      E = Qt({ reference: w, element: b, strategy: "absolute", placement: s }),
      A = Kt(Object.assign({}, b, E)),
      T = "popper" === h ? A : w,
      O = {
        top: y.top - T.top + m.top,
        bottom: T.bottom - y.bottom + m.bottom,
        left: y.left - T.left + m.left,
        right: T.right - y.right + m.right,
      },
      C = t.modifiersData.offset;
    if ("popper" === h && C) {
      var k = C[s];
      Object.keys(O).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
          i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function Zt(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? lt : l,
      h = Yt(n),
      d = h
        ? a
          ? at
          : at.filter(function (t) {
              return Yt(t) === h;
            })
        : rt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Gt(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[gt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var Jt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = gt(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if ("auto" === gt(t)) return [];
                    var e = Wt(t);
                    return [zt(t), e, zt(e)];
                  })(g)
                : [Wt(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                "auto" === gt(i)
                  ? Zt(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = gt(C),
            L = "start" === Yt(C),
            x = [it, nt].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = Gt(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = x ? (L ? st : ot) : L ? nt : it;
          y[D] > w[D] && (I = Wt(I));
          var N = Wt(I),
            j = [];
          if (
            (o && j.push(S[k] <= 0),
            a && j.push(S[I] <= 0, S[N] <= 0),
            j.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, j);
        }
        if (A)
          for (
            var M = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              P = p ? 3 : 1;
            P > 0 && "break" !== M(P);
            P--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function te(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function ee(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }
  var ie = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Gt(e, { elementContext: "reference" }),
          a = Gt(e, { altBoundary: !0 }),
          l = te(r, n),
          c = te(a, s, o),
          h = ee(l),
          d = ee(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    ne = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = lt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = gt(t),
                  s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [ot, st].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    se = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Qt({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    oe = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Gt(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = gt(e.placement),
          b = Yt(e.placement),
          v = !b,
          y = Ct(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          C = { x: 0, y: 0 };
        if (E) {
          if (o || a) {
            var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              I = E[y] - g[L],
              N = f ? -T[x] / 2 : 0,
              j = "start" === b ? A[x] : T[x],
              M = "start" === b ? -T[x] : -A[x],
              P = e.elements.arrow,
              H = f && P ? bt(P) : { width: 0, height: 0 },
              R = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              B = R[k],
              W = R[L],
              q = Dt(0, A[x], H[x]),
              z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
              $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
              U = e.elements.arrow && Ot(e.elements.arrow),
              F = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
              V = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement][y]
                : 0,
              K = E[y] + z - V - F,
              X = E[y] + $ - V;
            if (o) {
              var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
              (E[y] = Y), (C[y] = Y - D);
            }
            if (a) {
              var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
              (E[w] = et), (C[w] = et - Z);
            }
          }
          e.modifiersData[n] = C;
        }
      },
      requiresIfExists: ["offset"],
    };
  function re(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = Et(e),
      r = _t(t),
      a = ft(e),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (a || (!a && !i)) &&
        (("body" !== ht(e) || Ft(o)) &&
          (l =
            (n = e) !== dt(n) && ft(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : $t(n)),
        ft(e)
          ? (((c = _t(e)).x += e.clientLeft), (c.y += e.clientTop))
          : o && (c.x = Ut(o))),
      {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height,
      }
    );
  }
  var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function le() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function ce(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? ae : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ae, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            d(),
              (a.options = Object.assign({}, o, a.options, i)),
              (a.scrollParents = {
                reference: ut(t)
                  ? Vt(t)
                  : t.contextElement
                  ? Vt(t.contextElement)
                  : [],
                popper: Vt(e),
              });
            var s,
              r,
              c = (function (t) {
                var e = (function (t) {
                  var e = new Map(),
                    i = new Set(),
                    n = [];
                  return (
                    t.forEach(function (t) {
                      e.set(t.name, t);
                    }),
                    t.forEach(function (t) {
                      i.has(t.name) ||
                        (function t(s) {
                          i.add(s.name),
                            []
                              .concat(
                                s.requires || [],
                                s.requiresIfExists || []
                              )
                              .forEach(function (n) {
                                if (!i.has(n)) {
                                  var s = e.get(n);
                                  s && t(s);
                                }
                              }),
                            n.push(s);
                        })(t);
                    }),
                    n
                  );
                })(t);
                return ct.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((s = [].concat(n, a.options.modifiers)),
                (r = s.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(r).map(function (t) {
                  return r[t];
                }))
              );
            return (
              (a.orderedModifiers = c.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (le(e, i)) {
                (a.rects = {
                  reference: re(e, Ot(i), "fixed" === a.options.strategy),
                  popper: bt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!le(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var he = ce(),
    de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
    ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
    fe = Object.freeze({
      __proto__: null,
      popperGenerator: ce,
      detectOverflow: Gt,
      createPopperBase: he,
      createPopper: ue,
      createPopperLite: de,
      top: it,
      bottom: nt,
      right: st,
      left: ot,
      auto: "auto",
      basePlacements: rt,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: at,
      placements: lt,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: ct,
      applyStyles: mt,
      arrow: Nt,
      computeStyles: Pt,
      eventListeners: Rt,
      flip: Jt,
      hide: ie,
      offset: ne,
      popperOffsets: se,
      preventOverflow: oe,
    });
  const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
    me = g() ? "top-end" : "top-start",
    ge = g() ? "top-start" : "top-end",
    _e = g() ? "bottom-end" : "bottom-start",
    be = g() ? "bottom-start" : "bottom-end",
    ve = g() ? "left-start" : "right-start",
    ye = g() ? "right-start" : "left-start",
    we = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Ee = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class Ae extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return we;
    }
    static get DefaultType() {
      return Ee;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      h(this._element) ||
        (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (h(this._element) || this._menu.classList.contains("show")) return;
      const t = Ae.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === fe)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : r(this._config.reference)
            ? (e = a(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = ue(e, this._menu, i)),
            n && U.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, "mouseover", u)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          P.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (h(this._element) || !this._menu.classList.contains("show")) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      P.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _completeHide(t) {
      P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        U.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...U.getDataAttributes(this._element),
          ...t,
        }),
        l("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !r(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          "dropdown".toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return t.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ve;
      if (t.classList.contains("dropstart")) return ye;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ge : me) : e ? be : _e;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: e, target: i }) {
      const n = t
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(c);
      n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
    }
    static dropdownInterface(t, e) {
      const i = Ae.getOrCreateInstance(t, e);
      if ("string" == typeof e) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Ae.dropdownInterface(this, t);
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
        return;
      const i = t.find('[data-bs-toggle="dropdown"]');
      for (let t = 0, n = i.length; t < n; t++) {
        const n = Ae.getInstance(i[t]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._element.classList.contains("show")) continue;
        const s = { relatedTarget: n._element };
        if (e) {
          const t = e.composedPath(),
            i = t.includes(n._menu);
          if (
            t.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(e.target) &&
            (("keyup" === e.type && "Tab" === e.key) ||
              /input|select|option|textarea|form/i.test(e.target.tagName))
          )
            continue;
          "click" === e.type && (s.clickEvent = e);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return s(t) || t.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? "Space" === e.key ||
            ("Escape" !== e.key &&
              (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                e.target.closest(".dropdown-menu")))
          : !pe.test(e.key)
      )
        return;
      const i = this.classList.contains("show");
      if (!i && "Escape" === e.key) return;
      if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
      const n = () =>
        this.matches('[data-bs-toggle="dropdown"]')
          ? this
          : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
      return "Escape" === e.key
        ? (n().focus(), void Ae.clearMenus())
        : "ArrowUp" === e.key || "ArrowDown" === e.key
        ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e))
        : void ((i && "Space" !== e.key) || Ae.clearMenus());
    }
  }
  P.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    Ae.dataApiKeydownHandler
  ),
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ae.dataApiKeydownHandler
    ),
    P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus),
    P.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), Ae.dropdownInterface(this);
      }
    ),
    _(Ae);
  class Te {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (e) => e + t
        ),
        this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = i(Number.parseFloat(s)) + "px";
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
        this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && U.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = U.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (U.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(e, i) {
      r(e) ? i(e) : t.find(e, this._element).forEach(i);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Oe = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Ce = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    };
  class ke {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && f(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            b(t);
          }))
        : b(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), b(t);
          }))
        : b(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = "modal-backdrop"),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...Oe, ...("object" == typeof t ? t : {}) }).rootElement = a(
          t.rootElement
        )),
        l("backdrop", t, Ce),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.appendChild(this._getElement()),
        P.on(this._getElement(), "mousedown.bs.backdrop", () => {
          b(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      v(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Le = { backdrop: !0, keyboard: !0, focus: !0 },
    xe = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class De extends B {
    constructor(e, i) {
      super(e),
        (this._config = this._getConfig(i)),
        (this._dialog = t.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Te());
    }
    static get Default() {
      return Le;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, "show.bs.modal", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if (
        (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
        !this._isShown || this._isTransitioning)
      )
        return;
      if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.off(document, "focusin.bs.modal"),
        this._element.classList.remove("show"),
        P.off(this._element, "click.dismiss.bs.modal"),
        P.off(this._dialog, "mousedown.dismiss.bs.modal"),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((t) => P.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.modal");
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new ke({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Le,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("modal", t, xe),
        t
      );
    }
    _showElement(e) {
      const i = this._isAnimated(),
        n = t.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        n && (n.scrollTop = 0),
        i && f(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus(),
        this._queueCallback(
          () => {
            this._config.focus && this._element.focus(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
          },
          this._dialog,
          i
        );
    }
    _enforceFocus() {
      P.off(document, "focusin.bs.modal"),
        P.on(document, "focusin.bs.modal", (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
        : P.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(t) {
      P.on(this._element, "click.dismiss.bs.modal", (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains("modal-static") ||
        (n || (i.overflowY = "hidden"),
        t.add("modal-static"),
        this._queueCallback(() => {
          t.remove("modal-static"),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !g()) || (i && !t && g())) &&
        (this._element.style.paddingLeft = e + "px"),
        ((i && !t && !g()) || (!i && t && g())) &&
          (this._element.style.paddingRight = e + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = De.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = s(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            P.one(e, "hidden.bs.modal", () => {
              c(this) && this.focus();
            });
        }),
        De.getOrCreateInstance(e).toggle(this);
    }
  ),
    _(De);
  const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
    Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class Ne extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return Se;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll ||
          (new Te().hide(), this._enforceFocusOnElement(this._element)),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            P.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (P.off(document, "focusin.bs.offcanvas"),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove("show"),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new Te().reset(),
                P.trigger(this._element, "hidden.bs.offcanvas");
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.offcanvas");
    }
    _getConfig(t) {
      return (
        (t = {
          ...Se,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("offcanvas", t, Ie),
        t
      );
    }
    _initializeBackDrop() {
      return new ke({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _enforceFocusOnElement(t) {
      P.off(document, "focusin.bs.offcanvas"),
        P.on(document, "focusin.bs.offcanvas", (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
          this._config.keyboard && "Escape" === t.key && this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ne.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (e) {
      const i = s(this);
      if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)))
        return;
      P.one(i, "hidden.bs.offcanvas", () => {
        c(this) && this.focus();
      });
      const n = t.findOne(".offcanvas.show");
      n && n !== i && Ne.getInstance(n).hide(),
        Ne.getOrCreateInstance(i).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () =>
      t.find(".offcanvas.show").forEach((t) => Ne.getOrCreateInstance(t).show())
    ),
    _(Ne);
  const je = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    Pe =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    He = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    };
  function Re(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = Object.keys(e),
      o = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = o.length; t < i; t++) {
      const i = o[t],
        n = i.nodeName.toLowerCase();
      if (!s.includes(n)) {
        i.remove();
        continue;
      }
      const r = [].concat(...i.attributes),
        a = [].concat(e["*"] || [], e[n] || []);
      r.forEach((t) => {
        He(t, a) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    We = new Set(["sanitize", "allowList", "sanitizeFn"]),
    qe = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ze = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left",
    },
    $e = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Ue = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class Fe extends B {
    constructor(t, e) {
      if (void 0 === fe)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return $e;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return Ue;
    }
    static get DefaultType() {
      return qe;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip && this.tip.remove(),
        this._popper && this._popper.destroy(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        i = d(this._element),
        n =
          null === i
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : i.contains(this._element);
      if (t.defaultPrevented || !n) return;
      const s = this.getTipElement(),
        o = e(this.constructor.NAME);
      s.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this.setContent(),
        this._config.animation && s.classList.add("fade");
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, s, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      R.set(s, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.appendChild(s),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = ue(this._element, s, this._getPopperConfig(a))),
        s.classList.add("show");
      const c =
        "function" == typeof this._config.customClass
          ? this._config.customClass()
          : this._config.customClass;
      c && s.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, "mouseover", u);
          });
      const h = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            P.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        },
        this.tip,
        h
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove("show"),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", u)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this._config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()),
        e.classList.remove("fade", "show");
    }
    setElementContent(t, e) {
      if (null !== t)
        return r(e)
          ? ((e = a(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Re(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this._config.title
              ? this._config.title.call(this._element)
              : this._config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const i = this.constructor.DATA_KEY;
      return (
        (e = e || R.get(t.delegateTarget, i)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          R.set(t.delegateTarget, i, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(t)
      );
    }
    _getAttachment(t) {
      return ze[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            P.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = U.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          We.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : a(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        l("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this._config)
        for (const e in this._config)
          this.constructor.Default[e] !== this._config[e] &&
            (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Be);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(Fe);
  const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Ke = {
      ...Fe.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    Xe = { ...Fe.DefaultType, content: "(string|element|function)" },
    Ye = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Qe extends Fe {
    static get Default() {
      return Ke;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Ye;
    }
    static get DefaultType() {
      return Xe;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return (
        this.tip ||
          ((this.tip = super.getTipElement()),
          this.getTitle() || t.findOne(".popover-header", this.tip).remove(),
          this._getContent() || t.findOne(".popover-body", this.tip).remove()),
        this.tip
      );
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
      let i = this._getContent();
      "function" == typeof i && (i = i.call(this._element)),
        this.setElementContent(t.findOne(".popover-body", e), i),
        e.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this._config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Ve);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Qe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(Qe);
  const Ge = { offset: 10, method: "auto", target: "" },
    Ze = { offset: "number", method: "string", target: "(string|element)" };
  class Je extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Ge;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const e =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        i = "auto" === this._config.method ? e : this._config.method,
        s = "position" === i ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        t
          .find(this._selector)
          .map((e) => {
            const o = n(e),
              r = o ? t.findOne(o) : null;
            if (r) {
              const t = r.getBoundingClientRect();
              if (t.width || t.height) return [U[i](r).top + s, o];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = {
            ...Ge,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }).target &&
        r(t.target)
      ) {
        let { id: i } = t.target;
        i || ((i = e("scrollspy")), (t.target.id = i)), (t.target = "#" + i);
      }
      return l("scrollspy", t, Ze), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      const i = this._selector
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        n = t.findOne(i.join(","));
      n.classList.contains("dropdown-item")
        ? (t
            .findOne(".dropdown-toggle", n.closest(".dropdown"))
            .classList.add("active"),
          n.classList.add("active"))
        : (n.classList.add("active"),
          t.parents(n, ".nav, .list-group").forEach((e) => {
            t
              .prev(e, ".nav-link, .list-group-item")
              .forEach((t) => t.classList.add("active")),
              t.prev(e, ".nav-item").forEach((e) => {
                t.children(e, ".nav-link").forEach((t) =>
                  t.classList.add("active")
                );
              });
          })),
        P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e,
        });
    }
    _clear() {
      t.find(this._selector)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Je.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    t.find('[data-bs-spy="scroll"]').forEach((t) => new Je(t));
  }),
    _(Je);
  class ti extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains("active")
      )
        return;
      let e;
      const i = s(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const i =
          "UL" === n.nodeName || "OL" === n.nodeName
            ? ":scope > li > .active"
            : ".active";
        (e = t.find(i, n)), (e = e[e.length - 1]);
      }
      const o = e
        ? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        P.trigger(this._element, "show.bs.tab", { relatedTarget: e })
          .defaultPrevented ||
        (null !== o && o.defaultPrevented)
      )
        return;
      this._activate(this._element, n);
      const r = () => {
        P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
          P.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
      };
      i ? this._activate(i, i.parentNode, r) : r();
    }
    _activate(e, i, n) {
      const s = (
          !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
            ? t.children(i, ".active")
            : t.find(":scope > li > .active", i)
        )[0],
        o = n && s && s.classList.contains("fade"),
        r = () => this._transitionComplete(e, s, n);
      s && o
        ? (s.classList.remove("show"), this._queueCallback(r, e, !0))
        : r();
    }
    _transitionComplete(e, i, n) {
      if (i) {
        i.classList.remove("active");
        const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
        e && e.classList.remove("active"),
          "tab" === i.getAttribute("role") &&
            i.setAttribute("aria-selected", !1);
      }
      e.classList.add("active"),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        f(e),
        e.classList.contains("fade") && e.classList.add("show");
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        const i = e.closest(".dropdown");
        i &&
          t
            .find(".dropdown-toggle", i)
            .forEach((t) => t.classList.add("active")),
          e.setAttribute("aria-expanded", !0);
      }
      n && n();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ti.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        h(this) || ti.getOrCreateInstance(this).show();
    }
  ),
    _(ti);
  const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
    ii = { animation: !0, autohide: !0, delay: 5e3 };
  class ni extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return ei;
    }
    static get Default() {
      return ii;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        f(this._element),
        this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.remove("showing"),
              this._element.classList.add("show"),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains("show") &&
        (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.remove("show"),
          this._queueCallback(
            () => {
              this._element.classList.add("hide"),
                P.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...ii,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        l("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      ),
        P.on(this._element, "mouseover.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    _(ni),
    {
      Alert: W,
      Button: q,
      Carousel: Z,
      Collapse: et,
      Dropdown: Ae,
      Modal: De,
      Offcanvas: Ne,
      Popover: Qe,
      ScrollSpy: Je,
      Tab: ti,
      Toast: ni,
      Tooltip: Fe,
    }
  );
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
