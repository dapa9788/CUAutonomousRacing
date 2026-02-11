var Pf = e => {
    throw TypeError(e)
}
;
var xc = (e, t, n) => t.has(e) || Pf("Cannot " + n);
var E = (e, t, n) => (xc(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , le = (e, t, n) => t.has(e) ? Pf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , J = (e, t, n, r) => (xc(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ke = (e, t, n) => (xc(e, t, "access private method"),
n);
var Gi = (e, t, n, r) => ({
    set _(s) {
        J(e, t, s, n)
    },
    get _() {
        return E(e, t, r)
    }
});
function Eb(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, s);
                    o && Object.defineProperty(e, s, o.get ? o : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function Tb(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var cg = {
    exports: {}
}
  , El = {}
  , ug = {
    exports: {}
}
  , se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oi = Symbol.for("react.element")
  , Pb = Symbol.for("react.portal")
  , Rb = Symbol.for("react.fragment")
  , Ab = Symbol.for("react.strict_mode")
  , Ob = Symbol.for("react.profiler")
  , Ib = Symbol.for("react.provider")
  , Mb = Symbol.for("react.context")
  , Lb = Symbol.for("react.forward_ref")
  , $b = Symbol.for("react.suspense")
  , Db = Symbol.for("react.memo")
  , Fb = Symbol.for("react.lazy")
  , Rf = Symbol.iterator;
function Ub(e) {
    return e === null || typeof e != "object" ? null : (e = Rf && e[Rf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var dg = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , hg = Object.assign
  , fg = {};
function ho(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fg,
    this.updater = n || dg
}
ho.prototype.isReactComponent = {};
ho.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ho.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function pg() {}
pg.prototype = ho.prototype;
function Hd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fg,
    this.updater = n || dg
}
var qd = Hd.prototype = new pg;
qd.constructor = Hd;
hg(qd, ho.prototype);
qd.isPureReactComponent = !0;
var Af = Array.isArray
  , mg = Object.prototype.hasOwnProperty
  , Kd = {
    current: null
}
  , gg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function vg(e, t, n) {
    var r, s = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            mg.call(t, r) && !gg.hasOwnProperty(r) && (s[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        s.children = n;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++)
            c[u] = arguments[u + 2];
        s.children = c
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            s[r] === void 0 && (s[r] = l[r]);
    return {
        $$typeof: Oi,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: Kd.current
    }
}
function zb(e, t) {
    return {
        $$typeof: Oi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Gd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Oi
}
function Bb(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Of = /\/+/g;
function wc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Bb("" + e.key) : t.toString(36)
}
function _a(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Oi:
            case Pb:
                i = !0
            }
        }
    if (i)
        return i = e,
        s = s(i),
        e = r === "" ? "." + wc(i, 0) : r,
        Af(s) ? (n = "",
        e != null && (n = e.replace(Of, "$&/") + "/"),
        _a(s, t, n, "", function(u) {
            return u
        })) : s != null && (Gd(s) && (s = zb(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(Of, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Af(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var c = r + wc(o, l);
            i += _a(o, t, n, c, s)
        }
    else if (c = Ub(e),
    typeof c == "function")
        for (e = c.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            c = r + wc(o, l++),
            i += _a(o, t, n, c, s);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Qi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return _a(e, r, "", "", function(o) {
        return t.call(n, o, s++)
    }),
    r
}
function Wb(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ot = {
    current: null
}
  , Na = {
    transition: null
}
  , Vb = {
    ReactCurrentDispatcher: ot,
    ReactCurrentBatchConfig: Na,
    ReactCurrentOwner: Kd
};
function yg() {
    throw Error("act(...) is not supported in production builds of React.")
}
se.Children = {
    map: Qi,
    forEach: function(e, t, n) {
        Qi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Qi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Qi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Gd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
se.Component = ho;
se.Fragment = Rb;
se.Profiler = Ob;
se.PureComponent = Hd;
se.StrictMode = Ab;
se.Suspense = $b;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vb;
se.act = yg;
se.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hg({}, e.props)
      , s = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = Kd.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (c in t)
            mg.call(t, c) && !gg.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Oi,
        type: e.type,
        key: s,
        ref: o,
        props: r,
        _owner: i
    }
}
;
se.createContext = function(e) {
    return e = {
        $$typeof: Mb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ib,
        _context: e
    },
    e.Consumer = e
}
;
se.createElement = vg;
se.createFactory = function(e) {
    var t = vg.bind(null, e);
    return t.type = e,
    t
}
;
se.createRef = function() {
    return {
        current: null
    }
}
;
se.forwardRef = function(e) {
    return {
        $$typeof: Lb,
        render: e
    }
}
;
se.isValidElement = Gd;
se.lazy = function(e) {
    return {
        $$typeof: Fb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Wb
    }
}
;
se.memo = function(e, t) {
    return {
        $$typeof: Db,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
se.startTransition = function(e) {
    var t = Na.transition;
    Na.transition = {};
    try {
        e()
    } finally {
        Na.transition = t
    }
}
;
se.unstable_act = yg;
se.useCallback = function(e, t) {
    return ot.current.useCallback(e, t)
}
;
se.useContext = function(e) {
    return ot.current.useContext(e)
}
;
se.useDebugValue = function() {}
;
se.useDeferredValue = function(e) {
    return ot.current.useDeferredValue(e)
}
;
se.useEffect = function(e, t) {
    return ot.current.useEffect(e, t)
}
;
se.useId = function() {
    return ot.current.useId()
}
;
se.useImperativeHandle = function(e, t, n) {
    return ot.current.useImperativeHandle(e, t, n)
}
;
se.useInsertionEffect = function(e, t) {
    return ot.current.useInsertionEffect(e, t)
}
;
se.useLayoutEffect = function(e, t) {
    return ot.current.useLayoutEffect(e, t)
}
;
se.useMemo = function(e, t) {
    return ot.current.useMemo(e, t)
}
;
se.useReducer = function(e, t, n) {
    return ot.current.useReducer(e, t, n)
}
;
se.useRef = function(e) {
    return ot.current.useRef(e)
}
;
se.useState = function(e) {
    return ot.current.useState(e)
}
;
se.useSyncExternalStore = function(e, t, n) {
    return ot.current.useSyncExternalStore(e, t, n)
}
;
se.useTransition = function() {
    return ot.current.useTransition()
}
;
se.version = "18.3.1";
ug.exports = se;
var g = ug.exports;
const O = lg(g)
  , Qd = Eb({
    __proto__: null,
    default: O
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb = g
  , qb = Symbol.for("react.element")
  , Kb = Symbol.for("react.fragment")
  , Gb = Object.prototype.hasOwnProperty
  , Qb = Hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Yb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xg(e, t, n) {
    var r, s = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Gb.call(t, r) && !Yb.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: qb,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: Qb.current
    }
}
El.Fragment = Kb;
El.jsx = xg;
El.jsxs = xg;
cg.exports = El;
var a = cg.exports
  , wg = {
    exports: {}
}
  , St = {}
  , bg = {
    exports: {}
}
  , Sg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, T) {
        var L = C.length;
        C.push(T);
        e: for (; 0 < L; ) {
            var K = L - 1 >>> 1
              , z = C[K];
            if (0 < s(z, T))
                C[K] = T,
                C[L] = z,
                L = K;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var T = C[0]
          , L = C.pop();
        if (L !== T) {
            C[0] = L;
            e: for (var K = 0, z = C.length, ee = z >>> 1; K < ee; ) {
                var Q = 2 * (K + 1) - 1
                  , ve = C[Q]
                  , Ee = Q + 1
                  , $ = C[Ee];
                if (0 > s(ve, L))
                    Ee < z && 0 > s($, ve) ? (C[K] = $,
                    C[Ee] = L,
                    K = Ee) : (C[K] = ve,
                    C[Q] = L,
                    K = Q);
                else if (Ee < z && 0 > s($, L))
                    C[K] = $,
                    C[Ee] = L,
                    K = Ee;
                else
                    break e
            }
        }
        return T
    }
    function s(C, T) {
        var L = C.sortIndex - T.sortIndex;
        return L !== 0 ? L : C.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var c = []
      , u = []
      , d = 1
      , h = null
      , p = 3
      , f = !1
      , b = !1
      , v = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , x = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(C) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= C)
                r(u),
                T.sortIndex = T.expirationTime,
                t(c, T);
            else
                break;
            T = n(u)
        }
    }
    function S(C) {
        if (v = !1,
        y(C),
        !b)
            if (n(c) !== null)
                b = !0,
                D(j);
            else {
                var T = n(u);
                T !== null && W(S, T.startTime - C)
            }
    }
    function j(C, T) {
        b = !1,
        v && (v = !1,
        x(N),
        N = -1),
        f = !0;
        var L = p;
        try {
            for (y(T),
            h = n(c); h !== null && (!(h.expirationTime > T) || C && !U()); ) {
                var K = h.callback;
                if (typeof K == "function") {
                    h.callback = null,
                    p = h.priorityLevel;
                    var z = K(h.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof z == "function" ? h.callback = z : h === n(c) && r(c),
                    y(T)
                } else
                    r(c);
                h = n(c)
            }
            if (h !== null)
                var ee = !0;
            else {
                var Q = n(u);
                Q !== null && W(S, Q.startTime - T),
                ee = !1
            }
            return ee
        } finally {
            h = null,
            p = L,
            f = !1
        }
    }
    var k = !1
      , _ = null
      , N = -1
      , A = 5
      , R = -1;
    function U() {
        return !(e.unstable_now() - R < A)
    }
    function M() {
        if (_ !== null) {
            var C = e.unstable_now();
            R = C;
            var T = !0;
            try {
                T = _(!0, C)
            } finally {
                T ? V() : (k = !1,
                _ = null)
            }
        } else
            k = !1
    }
    var V;
    if (typeof m == "function")
        V = function() {
            m(M)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , q = I.port2;
        I.port1.onmessage = M,
        V = function() {
            q.postMessage(null)
        }
    } else
        V = function() {
            w(M, 0)
        }
        ;
    function D(C) {
        _ = C,
        k || (k = !0,
        V())
    }
    function W(C, T) {
        N = w(function() {
            C(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || f || (b = !0,
        D(j))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(c)
    }
    ,
    e.unstable_next = function(C) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = p
        }
        var L = p;
        p = T;
        try {
            return C()
        } finally {
            p = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, T) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var L = p;
        p = C;
        try {
            return T()
        } finally {
            p = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, T, L) {
        var K = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? K + L : K) : L = K,
        C) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = L + z,
        C = {
            id: d++,
            callback: T,
            priorityLevel: C,
            startTime: L,
            expirationTime: z,
            sortIndex: -1
        },
        L > K ? (C.sortIndex = L,
        t(u, C),
        n(c) === null && C === n(u) && (v ? (x(N),
        N = -1) : v = !0,
        W(S, L - K))) : (C.sortIndex = z,
        t(c, C),
        b || f || (b = !0,
        D(j))),
        C
    }
    ,
    e.unstable_shouldYield = U,
    e.unstable_wrapCallback = function(C) {
        var T = p;
        return function() {
            var L = p;
            p = T;
            try {
                return C.apply(this, arguments)
            } finally {
                p = L
            }
        }
    }
}
)(Sg);
bg.exports = Sg;
var Jb = bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xb = g
  , bt = Jb;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jg = new Set
  , si = {};
function ss(e, t) {
    to(e, t),
    to(e + "Capture", t)
}
function to(e, t) {
    for (si[e] = t,
    e = 0; e < t.length; e++)
        jg.add(t[e])
}
var Cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , gu = Object.prototype.hasOwnProperty
  , Zb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , If = {}
  , Mf = {};
function e1(e) {
    return gu.call(Mf, e) ? !0 : gu.call(If, e) ? !1 : Zb.test(e) ? Mf[e] = !0 : (If[e] = !0,
    !1)
}
function t1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function n1(e, t, n, r) {
    if (t === null || typeof t > "u" || t1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function it(e, t, n, r, s, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ve[e] = new it(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ve[t] = new it(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ve[e] = new it(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ve[e] = new it(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ve[e] = new it(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ve[e] = new it(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ve[e] = new it(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ve[e] = new it(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ve[e] = new it(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Yd = /[\-:]([a-z])/g;
function Jd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Yd, Jd);
    Ve[t] = new it(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Yd, Jd);
    Ve[t] = new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Yd, Jd);
    Ve[t] = new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ve[e] = new it(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ve.xlinkHref = new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ve[e] = new it(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Xd(e, t, n, r) {
    var s = Ve.hasOwnProperty(t) ? Ve[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (n1(t, n, s, r) && (n = null),
    r || s === null ? e1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var On = Xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Yi = Symbol.for("react.element")
  , Ns = Symbol.for("react.portal")
  , Cs = Symbol.for("react.fragment")
  , Zd = Symbol.for("react.strict_mode")
  , vu = Symbol.for("react.profiler")
  , kg = Symbol.for("react.provider")
  , _g = Symbol.for("react.context")
  , eh = Symbol.for("react.forward_ref")
  , yu = Symbol.for("react.suspense")
  , xu = Symbol.for("react.suspense_list")
  , th = Symbol.for("react.memo")
  , qn = Symbol.for("react.lazy")
  , Ng = Symbol.for("react.offscreen")
  , Lf = Symbol.iterator;
function Co(e) {
    return e === null || typeof e != "object" ? null : (e = Lf && e[Lf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, bc;
function Do(e) {
    if (bc === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            bc = t && t[1] || ""
        }
    return `
` + bc + e
}
var Sc = !1;
function jc(e, t) {
    if (!e || Sc)
        return "";
    Sc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, l = o.length - 1; 1 <= i && 0 <= l && s[i] !== o[l]; )
                l--;
            for (; 1 <= i && 0 <= l; i--,
            l--)
                if (s[i] !== o[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--,
                            l--,
                            0 > l || s[i] !== o[l]) {
                                var c = `
` + s[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Sc = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Do(e) : ""
}
function r1(e) {
    switch (e.tag) {
    case 5:
        return Do(e.type);
    case 16:
        return Do("Lazy");
    case 13:
        return Do("Suspense");
    case 19:
        return Do("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = jc(e.type, !1),
        e;
    case 11:
        return e = jc(e.type.render, !1),
        e;
    case 1:
        return e = jc(e.type, !0),
        e;
    default:
        return ""
    }
}
function wu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Cs:
        return "Fragment";
    case Ns:
        return "Portal";
    case vu:
        return "Profiler";
    case Zd:
        return "StrictMode";
    case yu:
        return "Suspense";
    case xu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case _g:
            return (e.displayName || "Context") + ".Consumer";
        case kg:
            return (e._context.displayName || "Context") + ".Provider";
        case eh:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case th:
            return t = e.displayName || null,
            t !== null ? t : wu(e.type) || "Memo";
        case qn:
            t = e._payload,
            e = e._init;
            try {
                return wu(e(t))
            } catch {}
        }
    return null
}
function s1(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return wu(t);
    case 8:
        return t === Zd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function mr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Cg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function o1(e) {
    var t = Cg(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ji(e) {
    e._valueTracker || (e._valueTracker = o1(e))
}
function Eg(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Cg(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Wa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function bu(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function $f(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = mr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Tg(e, t) {
    t = t.checked,
    t != null && Xd(e, "checked", t, !1)
}
function Su(e, t) {
    Tg(e, t);
    var n = mr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ju(e, t.type, n) : t.hasOwnProperty("defaultValue") && ju(e, t.type, mr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Df(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ju(e, t, n) {
    (t !== "number" || Wa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Fo = Array.isArray;
function Ds(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + mr(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function ku(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ff(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (Fo(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: mr(n)
    }
}
function Pg(e, t) {
    var n = mr(t.value)
      , r = mr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Uf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Rg(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function _u(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Rg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xi, Ag = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Xi = Xi || document.createElement("div"),
        Xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Xi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function oi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , i1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function(e) {
    i1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ho[t] = Ho[e]
    })
});
function Og(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ho.hasOwnProperty(e) && Ho[e] ? ("" + t).trim() : t + "px"
}
function Ig(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = Og(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var a1 = Ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Nu(e, t) {
    if (t) {
        if (a1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Cu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Eu = null;
function nh(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Tu = null
  , Fs = null
  , Us = null;
function zf(e) {
    if (e = Li(e)) {
        if (typeof Tu != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = Ol(t),
        Tu(e.stateNode, e.type, t))
    }
}
function Mg(e) {
    Fs ? Us ? Us.push(e) : Us = [e] : Fs = e
}
function Lg() {
    if (Fs) {
        var e = Fs
          , t = Us;
        if (Us = Fs = null,
        zf(e),
        t)
            for (e = 0; e < t.length; e++)
                zf(t[e])
    }
}
function $g(e, t) {
    return e(t)
}
function Dg() {}
var kc = !1;
function Fg(e, t, n) {
    if (kc)
        return e(t, n);
    kc = !0;
    try {
        return $g(e, t, n)
    } finally {
        kc = !1,
        (Fs !== null || Us !== null) && (Dg(),
        Lg())
    }
}
function ii(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ol(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var Pu = !1;
if (Cn)
    try {
        var Eo = {};
        Object.defineProperty(Eo, "passive", {
            get: function() {
                Pu = !0
            }
        }),
        window.addEventListener("test", Eo, Eo),
        window.removeEventListener("test", Eo, Eo)
    } catch {
        Pu = !1
    }
function l1(e, t, n, r, s, o, i, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var qo = !1
  , Va = null
  , Ha = !1
  , Ru = null
  , c1 = {
    onError: function(e) {
        qo = !0,
        Va = e
    }
};
function u1(e, t, n, r, s, o, i, l, c) {
    qo = !1,
    Va = null,
    l1.apply(c1, arguments)
}
function d1(e, t, n, r, s, o, i, l, c) {
    if (u1.apply(this, arguments),
    qo) {
        if (qo) {
            var u = Va;
            qo = !1,
            Va = null
        } else
            throw Error(P(198));
        Ha || (Ha = !0,
        Ru = u)
    }
}
function os(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ug(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Bf(e) {
    if (os(e) !== e)
        throw Error(P(188))
}
function h1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = os(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var o = s.alternate;
        if (o === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o; ) {
                if (o === n)
                    return Bf(s),
                    e;
                if (o === r)
                    return Bf(s),
                    t;
                o = o.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = s,
            r = o;
        else {
            for (var i = !1, l = s.child; l; ) {
                if (l === n) {
                    i = !0,
                    n = s,
                    r = o;
                    break
                }
                if (l === r) {
                    i = !0,
                    r = s,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!i) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        i = !0,
                        n = o,
                        r = s;
                        break
                    }
                    if (l === r) {
                        i = !0,
                        r = o,
                        n = s;
                        break
                    }
                    l = l.sibling
                }
                if (!i)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function zg(e) {
    return e = h1(e),
    e !== null ? Bg(e) : null
}
function Bg(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Bg(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Wg = bt.unstable_scheduleCallback
  , Wf = bt.unstable_cancelCallback
  , f1 = bt.unstable_shouldYield
  , p1 = bt.unstable_requestPaint
  , Oe = bt.unstable_now
  , m1 = bt.unstable_getCurrentPriorityLevel
  , rh = bt.unstable_ImmediatePriority
  , Vg = bt.unstable_UserBlockingPriority
  , qa = bt.unstable_NormalPriority
  , g1 = bt.unstable_LowPriority
  , Hg = bt.unstable_IdlePriority
  , Tl = null
  , hn = null;
function v1(e) {
    if (hn && typeof hn.onCommitFiberRoot == "function")
        try {
            hn.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Qt = Math.clz32 ? Math.clz32 : w1
  , y1 = Math.log
  , x1 = Math.LN2;
function w1(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (y1(e) / x1 | 0) | 0
}
var Zi = 64
  , ea = 4194304;
function Uo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ka(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var l = i & ~s;
        l !== 0 ? r = Uo(l) : (o &= i,
        o !== 0 && (r = Uo(o)))
    } else
        i = n & ~s,
        i !== 0 ? r = Uo(i) : o !== 0 && (r = Uo(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    o = t & -t,
    s >= o || s === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Qt(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function b1(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function S1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Qt(o)
          , l = 1 << i
          , c = s[i];
        c === -1 ? (!(l & n) || l & r) && (s[i] = b1(l, t)) : c <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function Au(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qg() {
    var e = Zi;
    return Zi <<= 1,
    !(Zi & 4194240) && (Zi = 64),
    e
}
function _c(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ii(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Qt(t),
    e[t] = n
}
function j1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Qt(n)
          , o = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~o
    }
}
function sh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Qt(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var he = 0;
function Kg(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gg, oh, Qg, Yg, Jg, Ou = !1, ta = [], or = null, ir = null, ar = null, ai = new Map, li = new Map, Gn = [], k1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        or = null;
        break;
    case "dragenter":
    case "dragleave":
        ir = null;
        break;
    case "mouseover":
    case "mouseout":
        ar = null;
        break;
    case "pointerover":
    case "pointerout":
        ai.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        li.delete(t.pointerId)
    }
}
function To(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s]
    },
    t !== null && (t = Li(t),
    t !== null && oh(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function _1(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return or = To(or, e, t, n, r, s),
        !0;
    case "dragenter":
        return ir = To(ir, e, t, n, r, s),
        !0;
    case "mouseover":
        return ar = To(ar, e, t, n, r, s),
        !0;
    case "pointerover":
        var o = s.pointerId;
        return ai.set(o, To(ai.get(o) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return o = s.pointerId,
        li.set(o, To(li.get(o) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function Xg(e) {
    var t = Lr(e.target);
    if (t !== null) {
        var n = os(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ug(n),
                t !== null) {
                    e.blockedOn = t,
                    Jg(e.priority, function() {
                        Qg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ca(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Eu = r,
            n.target.dispatchEvent(r),
            Eu = null
        } else
            return t = Li(n),
            t !== null && oh(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Hf(e, t, n) {
    Ca(e) && n.delete(t)
}
function N1() {
    Ou = !1,
    or !== null && Ca(or) && (or = null),
    ir !== null && Ca(ir) && (ir = null),
    ar !== null && Ca(ar) && (ar = null),
    ai.forEach(Hf),
    li.forEach(Hf)
}
function Po(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ou || (Ou = !0,
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, N1)))
}
function ci(e) {
    function t(s) {
        return Po(s, e)
    }
    if (0 < ta.length) {
        Po(ta[0], e);
        for (var n = 1; n < ta.length; n++) {
            var r = ta[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (or !== null && Po(or, e),
    ir !== null && Po(ir, e),
    ar !== null && Po(ar, e),
    ai.forEach(t),
    li.forEach(t),
    n = 0; n < Gn.length; n++)
        r = Gn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Gn.length && (n = Gn[0],
    n.blockedOn === null); )
        Xg(n),
        n.blockedOn === null && Gn.shift()
}
var zs = On.ReactCurrentBatchConfig
  , Ga = !0;
function C1(e, t, n, r) {
    var s = he
      , o = zs.transition;
    zs.transition = null;
    try {
        he = 1,
        ih(e, t, n, r)
    } finally {
        he = s,
        zs.transition = o
    }
}
function E1(e, t, n, r) {
    var s = he
      , o = zs.transition;
    zs.transition = null;
    try {
        he = 4,
        ih(e, t, n, r)
    } finally {
        he = s,
        zs.transition = o
    }
}
function ih(e, t, n, r) {
    if (Ga) {
        var s = Iu(e, t, n, r);
        if (s === null)
            Mc(e, t, r, Qa, n),
            Vf(e, r);
        else if (_1(s, e, t, n, r))
            r.stopPropagation();
        else if (Vf(e, r),
        t & 4 && -1 < k1.indexOf(e)) {
            for (; s !== null; ) {
                var o = Li(s);
                if (o !== null && Gg(o),
                o = Iu(e, t, n, r),
                o === null && Mc(e, t, r, Qa, n),
                o === s)
                    break;
                s = o
            }
            s !== null && r.stopPropagation()
        } else
            Mc(e, t, r, null, n)
    }
}
var Qa = null;
function Iu(e, t, n, r) {
    if (Qa = null,
    e = nh(r),
    e = Lr(e),
    e !== null)
        if (t = os(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ug(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Qa = e,
    null
}
function Zg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (m1()) {
        case rh:
            return 1;
        case Vg:
            return 4;
        case qa:
        case g1:
            return 16;
        case Hg:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var nr = null
  , ah = null
  , Ea = null;
function ev() {
    if (Ea)
        return Ea;
    var e, t = ah, n = t.length, r, s = "value"in nr ? nr.value : nr.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === s[o - r]; r++)
        ;
    return Ea = s.slice(e, 1 < r ? 1 - r : void 0)
}
function Ta(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function na() {
    return !0
}
function qf() {
    return !1
}
function jt(e) {
    function t(n, r, s, o, i) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? na : qf,
        this.isPropagationStopped = qf,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = na)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = na)
        },
        persist: function() {},
        isPersistent: na
    }),
    t
}
var fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, lh = jt(fo), Mi = Ce({}, fo, {
    view: 0,
    detail: 0
}), T1 = jt(Mi), Nc, Cc, Ro, Pl = Ce({}, Mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ch,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ro && (Ro && e.type === "mousemove" ? (Nc = e.screenX - Ro.screenX,
        Cc = e.screenY - Ro.screenY) : Cc = Nc = 0,
        Ro = e),
        Nc)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Cc
    }
}), Kf = jt(Pl), P1 = Ce({}, Pl, {
    dataTransfer: 0
}), R1 = jt(P1), A1 = Ce({}, Mi, {
    relatedTarget: 0
}), Ec = jt(A1), O1 = Ce({}, fo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), I1 = jt(O1), M1 = Ce({}, fo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), L1 = jt(M1), $1 = Ce({}, fo, {
    data: 0
}), Gf = jt($1), D1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, F1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, U1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function z1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = U1[e]) ? !!t[e] : !1
}
function ch() {
    return z1
}
var B1 = Ce({}, Mi, {
    key: function(e) {
        if (e.key) {
            var t = D1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ta(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? F1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ch,
    charCode: function(e) {
        return e.type === "keypress" ? Ta(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ta(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , W1 = jt(B1)
  , V1 = Ce({}, Pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    iswarning: 0
})
  , Qf = jt(V1)
  , H1 = Ce({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ch
})
  , q1 = jt(H1)
  , K1 = Ce({}, fo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , G1 = jt(K1)
  , Q1 = Ce({}, Pl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Y1 = jt(Q1)
  , J1 = [9, 13, 27, 32]
  , uh = Cn && "CompositionEvent"in window
  , Ko = null;
Cn && "documentMode"in document && (Ko = document.documentMode);
var X1 = Cn && "TextEvent"in window && !Ko
  , tv = Cn && (!uh || Ko && 8 < Ko && 11 >= Ko)
  , Yf = " "
  , Jf = !1;
function nv(e, t) {
    switch (e) {
    case "keyup":
        return J1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function rv(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Es = !1;
function Z1(e, t) {
    switch (e) {
    case "compositionend":
        return rv(t);
    case "keypress":
        return t.which !== 32 ? null : (Jf = !0,
        Yf);
    case "textInput":
        return e = t.data,
        e === Yf && Jf ? null : e;
    default:
        return null
    }
}
function eS(e, t) {
    if (Es)
        return e === "compositionend" || !uh && nv(e, t) ? (e = ev(),
        Ea = ah = nr = null,
        Es = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return tv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var tS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Xf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tS[e.type] : t === "textarea"
}
function sv(e, t, n, r) {
    Mg(r),
    t = Ya(t, "onChange"),
    0 < t.length && (n = new lh("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Go = null
  , ui = null;
function nS(e) {
    mv(e, 0)
}
function Rl(e) {
    var t = Rs(e);
    if (Eg(t))
        return e
}
function rS(e, t) {
    if (e === "change")
        return t
}
var ov = !1;
if (Cn) {
    var Tc;
    if (Cn) {
        var Pc = "oninput"in document;
        if (!Pc) {
            var Zf = document.createElement("div");
            Zf.setAttribute("oninput", "return;"),
            Pc = typeof Zf.oninput == "function"
        }
        Tc = Pc
    } else
        Tc = !1;
    ov = Tc && (!document.documentMode || 9 < document.documentMode)
}
function ep() {
    Go && (Go.detachEvent("onpropertychange", iv),
    ui = Go = null)
}
function iv(e) {
    if (e.propertyName === "value" && Rl(ui)) {
        var t = [];
        sv(t, ui, e, nh(e)),
        Fg(nS, t)
    }
}
function sS(e, t, n) {
    e === "focusin" ? (ep(),
    Go = t,
    ui = n,
    Go.attachEvent("onpropertychange", iv)) : e === "focusout" && ep()
}
function oS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Rl(ui)
}
function iS(e, t) {
    if (e === "click")
        return Rl(t)
}
function aS(e, t) {
    if (e === "input" || e === "change")
        return Rl(t)
}
function lS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Jt = typeof Object.is == "function" ? Object.is : lS;
function di(e, t) {
    if (Jt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!gu.call(t, s) || !Jt(e[s], t[s]))
            return !1
    }
    return !0
}
function tp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function np(e, t) {
    var n = tp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = tp(n)
    }
}
function av(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? av(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function lv() {
    for (var e = window, t = Wa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Wa(e.document)
    }
    return t
}
function dh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function cS(e) {
    var t = lv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && av(n.ownerDocument.documentElement, n)) {
        if (r !== null && dh(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , o = Math.min(r.start, s);
                r = r.end === void 0 ? o : Math.min(r.end, s),
                !e.extend && o > r && (s = r,
                r = o,
                o = s),
                s = np(n, o);
                var i = np(n, r);
                s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var uS = Cn && "documentMode"in document && 11 >= document.documentMode
  , Ts = null
  , Mu = null
  , Qo = null
  , Lu = !1;
function rp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Lu || Ts == null || Ts !== Wa(r) || (r = Ts,
    "selectionStart"in r && dh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Qo && di(Qo, r) || (Qo = r,
    r = Ya(Mu, "onSelect"),
    0 < r.length && (t = new lh("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ts)))
}
function ra(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ps = {
    animationend: ra("Animation", "AnimationEnd"),
    animationiteration: ra("Animation", "AnimationIteration"),
    animationstart: ra("Animation", "AnimationStart"),
    transitionend: ra("Transition", "TransitionEnd")
}
  , Rc = {}
  , cv = {};
Cn && (cv = document.createElement("div").style,
"AnimationEvent"in window || (delete Ps.animationend.animation,
delete Ps.animationiteration.animation,
delete Ps.animationstart.animation),
"TransitionEvent"in window || delete Ps.transitionend.transition);
function Al(e) {
    if (Rc[e])
        return Rc[e];
    if (!Ps[e])
        return e;
    var t = Ps[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in cv)
            return Rc[e] = t[n];
    return e
}
var uv = Al("animationend")
  , dv = Al("animationiteration")
  , hv = Al("animationstart")
  , fv = Al("transitionend")
  , pv = new Map
  , sp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xr(e, t) {
    pv.set(e, t),
    ss(t, [e])
}
for (var Ac = 0; Ac < sp.length; Ac++) {
    var Oc = sp[Ac]
      , dS = Oc.toLowerCase()
      , hS = Oc[0].toUpperCase() + Oc.slice(1);
    xr(dS, "on" + hS)
}
xr(uv, "onAnimationEnd");
xr(dv, "onAnimationIteration");
xr(hv, "onAnimationStart");
xr("dblclick", "onDoubleClick");
xr("focusin", "onFocus");
xr("focusout", "onBlur");
xr(fv, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
ss("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ss("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ss("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ss("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ss("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ss("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , fS = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function op(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    d1(r, t, void 0, e),
    e.currentTarget = null
}
function mv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i]
                      , c = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    c !== o && s.isPropagationStopped())
                        break e;
                    op(s, l, u),
                    o = c
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (l = r[i],
                    c = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    c !== o && s.isPropagationStopped())
                        break e;
                    op(s, l, u),
                    o = c
                }
        }
    }
    if (Ha)
        throw e = Ru,
        Ha = !1,
        Ru = null,
        e
}
function xe(e, t) {
    var n = t[zu];
    n === void 0 && (n = t[zu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (gv(t, e, 2, !1),
    n.add(r))
}
function Ic(e, t, n) {
    var r = 0;
    t && (r |= 4),
    gv(n, e, r, t)
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function hi(e) {
    if (!e[sa]) {
        e[sa] = !0,
        jg.forEach(function(n) {
            n !== "selectionchange" && (fS.has(n) || Ic(n, !1, e),
            Ic(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[sa] || (t[sa] = !0,
        Ic("selectionchange", !1, t))
    }
}
function gv(e, t, n, r) {
    switch (Zg(t)) {
    case 1:
        var s = C1;
        break;
    case 4:
        s = E1;
        break;
    default:
        s = ih
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function Mc(e, t, n, r, s) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var l = r.stateNode.containerInfo;
                if (l === s || l.nodeType === 8 && l.parentNode === s)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var c = i.tag;
                        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo,
                        c === s || c.nodeType === 8 && c.parentNode === s))
                            return;
                        i = i.return
                    }
                for (; l !== null; ) {
                    if (i = Lr(l),
                    i === null)
                        return;
                    if (c = i.tag,
                    c === 5 || c === 6) {
                        r = o = i;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Fg(function() {
        var u = o
          , d = nh(n)
          , h = [];
        e: {
            var p = pv.get(e);
            if (p !== void 0) {
                var f = lh
                  , b = e;
                switch (e) {
                case "keypress":
                    if (Ta(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = W1;
                    break;
                case "focusin":
                    b = "focus",
                    f = Ec;
                    break;
                case "focusout":
                    b = "blur",
                    f = Ec;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = Ec;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = Kf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = R1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = q1;
                    break;
                case uv:
                case dv:
                case hv:
                    f = I1;
                    break;
                case fv:
                    f = G1;
                    break;
                case "scroll":
                    f = T1;
                    break;
                case "wheel":
                    f = Y1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = L1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = Qf
                }
                var v = (t & 4) !== 0
                  , w = !v && e === "scroll"
                  , x = v ? p !== null ? p + "Capture" : null : p;
                v = [];
                for (var m = u, y; m !== null; ) {
                    y = m;
                    var S = y.stateNode;
                    if (y.tag === 5 && S !== null && (y = S,
                    x !== null && (S = ii(m, x),
                    S != null && v.push(fi(m, S, y)))),
                    w)
                        break;
                    m = m.return
                }
                0 < v.length && (p = new f(p,b,null,n,d),
                h.push({
                    event: p,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                p && n !== Eu && (b = n.relatedTarget || n.fromElement) && (Lr(b) || b[En]))
                    break e;
                if ((f || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window,
                f ? (b = n.relatedTarget || n.toElement,
                f = u,
                b = b ? Lr(b) : null,
                b !== null && (w = os(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (f = null,
                b = u),
                f !== b)) {
                    if (v = Kf,
                    S = "onMouseLeave",
                    x = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Qf,
                    S = "onPointerLeave",
                    x = "onPointerEnter",
                    m = "pointer"),
                    w = f == null ? p : Rs(f),
                    y = b == null ? p : Rs(b),
                    p = new v(S,m + "leave",f,n,d),
                    p.target = w,
                    p.relatedTarget = y,
                    S = null,
                    Lr(d) === u && (v = new v(x,m + "enter",b,n,d),
                    v.target = y,
                    v.relatedTarget = w,
                    S = v),
                    w = S,
                    f && b)
                        t: {
                            for (v = f,
                            x = b,
                            m = 0,
                            y = v; y; y = ms(y))
                                m++;
                            for (y = 0,
                            S = x; S; S = ms(S))
                                y++;
                            for (; 0 < m - y; )
                                v = ms(v),
                                m--;
                            for (; 0 < y - m; )
                                x = ms(x),
                                y--;
                            for (; m--; ) {
                                if (v === x || x !== null && v === x.alternate)
                                    break t;
                                v = ms(v),
                                x = ms(x)
                            }
                            v = null
                        }
                    else
                        v = null;
                    f !== null && ip(h, p, f, v, !1),
                    b !== null && w !== null && ip(h, w, b, v, !0)
                }
            }
            e: {
                if (p = u ? Rs(u) : window,
                f = p.nodeName && p.nodeName.toLowerCase(),
                f === "select" || f === "input" && p.type === "file")
                    var j = rS;
                else if (Xf(p))
                    if (ov)
                        j = aS;
                    else {
                        j = oS;
                        var k = sS
                    }
                else
                    (f = p.nodeName) && f.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (j = iS);
                if (j && (j = j(e, u))) {
                    sv(h, j, n, d);
                    break e
                }
                k && k(e, p, u),
                e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && ju(p, "number", p.value)
            }
            switch (k = u ? Rs(u) : window,
            e) {
            case "focusin":
                (Xf(k) || k.contentEditable === "true") && (Ts = k,
                Mu = u,
                Qo = null);
                break;
            case "focusout":
                Qo = Mu = Ts = null;
                break;
            case "mousedown":
                Lu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Lu = !1,
                rp(h, n, d);
                break;
            case "selectionchange":
                if (uS)
                    break;
            case "keydown":
            case "keyup":
                rp(h, n, d)
            }
            var _;
            if (uh)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                Es ? nv(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (tv && n.locale !== "ko" && (Es || N !== "onCompositionStart" ? N === "onCompositionEnd" && Es && (_ = ev()) : (nr = d,
            ah = "value"in nr ? nr.value : nr.textContent,
            Es = !0)),
            k = Ya(u, N),
            0 < k.length && (N = new Gf(N,e,null,n,d),
            h.push({
                event: N,
                listeners: k
            }),
            _ ? N.data = _ : (_ = rv(n),
            _ !== null && (N.data = _)))),
            (_ = X1 ? Z1(e, n) : eS(e, n)) && (u = Ya(u, "onBeforeInput"),
            0 < u.length && (d = new Gf("onBeforeInput","beforeinput",null,n,d),
            h.push({
                event: d,
                listeners: u
            }),
            d.data = _))
        }
        mv(h, t)
    })
}
function fi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ya(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , o = s.stateNode;
        s.tag === 5 && o !== null && (s = o,
        o = ii(e, n),
        o != null && r.unshift(fi(e, o, s)),
        o = ii(e, t),
        o != null && r.push(fi(e, o, s))),
        e = e.return
    }
    return r
}
function ms(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ip(e, t, n, r, s) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var l = n
          , c = l.alternate
          , u = l.stateNode;
        if (c !== null && c === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        s ? (c = ii(n, o),
        c != null && i.unshift(fi(n, c, l))) : s || (c = ii(n, o),
        c != null && i.push(fi(n, c, l)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var pS = /\r\n?/g
  , mS = /\u0000|\uFFFD/g;
function ap(e) {
    return (typeof e == "string" ? e : "" + e).replace(pS, `
`).replace(mS, "")
}
function oa(e, t, n) {
    if (t = ap(t),
    ap(e) !== t && n)
        throw Error(P(425))
}
function Ja() {}
var $u = null
  , Du = null;
function Fu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Uu = typeof setTimeout == "function" ? setTimeout : void 0
  , gS = typeof clearTimeout == "function" ? clearTimeout : void 0
  , lp = typeof Promise == "function" ? Promise : void 0
  , vS = typeof queueMicrotask == "function" ? queueMicrotask : typeof lp < "u" ? function(e) {
    return lp.resolve(null).then(e).catch(yS)
}
: Uu;
function yS(e) {
    setTimeout(function() {
        throw e
    })
}
function Lc(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    ci(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    ci(t)
}
function lr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function cp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var po = Math.random().toString(36).slice(2)
  , cn = "__reactFiber$" + po
  , pi = "__reactProps$" + po
  , En = "__reactContainer$" + po
  , zu = "__reactEvents$" + po
  , xS = "__reactListeners$" + po
  , wS = "__reactHandles$" + po;
function Lr(e) {
    var t = e[cn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[En] || n[cn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = cp(e); e !== null; ) {
                    if (n = e[cn])
                        return n;
                    e = cp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Li(e) {
    return e = e[cn] || e[En],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Rs(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function Ol(e) {
    return e[pi] || null
}
var Bu = []
  , As = -1;
function wr(e) {
    return {
        current: e
    }
}
function be(e) {
    0 > As || (e.current = Bu[As],
    Bu[As] = null,
    As--)
}
function ge(e, t) {
    As++,
    Bu[As] = e.current,
    e.current = t
}
var gr = {}
  , Xe = wr(gr)
  , ht = wr(!1)
  , Qr = gr;
function no(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return gr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n)
        s[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function ft(e) {
    return e = e.childContextTypes,
    e != null
}
function Xa() {
    be(ht),
    be(Xe)
}
function up(e, t, n) {
    if (Xe.current !== gr)
        throw Error(P(168));
    ge(Xe, t),
    ge(ht, n)
}
function vv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(P(108, s1(e) || "Unknown", s));
    return Ce({}, n, r)
}
function Za(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gr,
    Qr = Xe.current,
    ge(Xe, e),
    ge(ht, ht.current),
    !0
}
function dp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = vv(e, t, Qr),
    r.__reactInternalMemoizedMergedChildContext = e,
    be(ht),
    be(Xe),
    ge(Xe, e)) : be(ht),
    ge(ht, n)
}
var Sn = null
  , Il = !1
  , $c = !1;
function yv(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}
function bS(e) {
    Il = !0,
    yv(e)
}
function br() {
    if (!$c && Sn !== null) {
        $c = !0;
        var e = 0
          , t = he;
        try {
            var n = Sn;
            for (he = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Sn = null,
            Il = !1
        } catch (s) {
            throw Sn !== null && (Sn = Sn.slice(e + 1)),
            Wg(rh, br),
            s
        } finally {
            he = t,
            $c = !1
        }
    }
    return null
}
var Os = []
  , Is = 0
  , el = null
  , tl = 0
  , Ct = []
  , Et = 0
  , Yr = null
  , kn = 1
  , _n = "";
function Ar(e, t) {
    Os[Is++] = tl,
    Os[Is++] = el,
    el = e,
    tl = t
}
function xv(e, t, n) {
    Ct[Et++] = kn,
    Ct[Et++] = _n,
    Ct[Et++] = Yr,
    Yr = e;
    var r = kn;
    e = _n;
    var s = 32 - Qt(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var o = 32 - Qt(t) + s;
    if (30 < o) {
        var i = s - s % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        s -= i,
        kn = 1 << 32 - Qt(t) + s | n << s | r,
        _n = o + e
    } else
        kn = 1 << o | n << s | r,
        _n = e
}
function hh(e) {
    e.return !== null && (Ar(e, 1),
    xv(e, 1, 0))
}
function fh(e) {
    for (; e === el; )
        el = Os[--Is],
        Os[Is] = null,
        tl = Os[--Is],
        Os[Is] = null;
    for (; e === Yr; )
        Yr = Ct[--Et],
        Ct[Et] = null,
        _n = Ct[--Et],
        Ct[Et] = null,
        kn = Ct[--Et],
        Ct[Et] = null
}
var xt = null
  , yt = null
  , ke = !1
  , Gt = null;
function wv(e, t) {
    var n = Tt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function hp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        xt = e,
        yt = lr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        xt = e,
        yt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Yr !== null ? {
            id: kn,
            overflow: _n
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Tt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        xt = e,
        yt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Wu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vu(e) {
    if (ke) {
        var t = yt;
        if (t) {
            var n = t;
            if (!hp(e, t)) {
                if (Wu(e))
                    throw Error(P(418));
                t = lr(n.nextSibling);
                var r = xt;
                t && hp(e, t) ? wv(r, n) : (e.flags = e.flags & -4097 | 2,
                ke = !1,
                xt = e)
            }
        } else {
            if (Wu(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            ke = !1,
            xt = e
        }
    }
}
function fp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    xt = e
}
function ia(e) {
    if (e !== xt)
        return !1;
    if (!ke)
        return fp(e),
        ke = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Fu(e.type, e.memoizedProps)),
    t && (t = yt)) {
        if (Wu(e))
            throw bv(),
            Error(P(418));
        for (; t; )
            wv(e, t),
            t = lr(t.nextSibling)
    }
    if (fp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            yt = lr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            yt = null
        }
    } else
        yt = xt ? lr(e.stateNode.nextSibling) : null;
    return !0
}
function bv() {
    for (var e = yt; e; )
        e = lr(e.nextSibling)
}
function ro() {
    yt = xt = null,
    ke = !1
}
function ph(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}
var SS = On.ReactCurrentBatchConfig;
function Ao(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var s = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var l = s.refs;
                i === null ? delete l[o] : l[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function aa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function pp(e) {
    var t = e._init;
    return t(e._payload)
}
function Sv(e) {
    function t(x, m) {
        if (e) {
            var y = x.deletions;
            y === null ? (x.deletions = [m],
            x.flags |= 16) : y.push(m)
        }
    }
    function n(x, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(x, m),
            m = m.sibling;
        return null
    }
    function r(x, m) {
        for (x = new Map; m !== null; )
            m.key !== null ? x.set(m.key, m) : x.set(m.index, m),
            m = m.sibling;
        return x
    }
    function s(x, m) {
        return x = hr(x, m),
        x.index = 0,
        x.sibling = null,
        x
    }
    function o(x, m, y) {
        return x.index = y,
        e ? (y = x.alternate,
        y !== null ? (y = y.index,
        y < m ? (x.flags |= 2,
        m) : y) : (x.flags |= 2,
        m)) : (x.flags |= 1048576,
        m)
    }
    function i(x) {
        return e && x.alternate === null && (x.flags |= 2),
        x
    }
    function l(x, m, y, S) {
        return m === null || m.tag !== 6 ? (m = Vc(y, x.mode, S),
        m.return = x,
        m) : (m = s(m, y),
        m.return = x,
        m)
    }
    function c(x, m, y, S) {
        var j = y.type;
        return j === Cs ? d(x, m, y.props.children, S, y.key) : m !== null && (m.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qn && pp(j) === m.type) ? (S = s(m, y.props),
        S.ref = Ao(x, m, y),
        S.return = x,
        S) : (S = La(y.type, y.key, y.props, null, x.mode, S),
        S.ref = Ao(x, m, y),
        S.return = x,
        S)
    }
    function u(x, m, y, S) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Hc(y, x.mode, S),
        m.return = x,
        m) : (m = s(m, y.children || []),
        m.return = x,
        m)
    }
    function d(x, m, y, S, j) {
        return m === null || m.tag !== 7 ? (m = qr(y, x.mode, S, j),
        m.return = x,
        m) : (m = s(m, y),
        m.return = x,
        m)
    }
    function h(x, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Vc("" + m, x.mode, y),
            m.return = x,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Yi:
                return y = La(m.type, m.key, m.props, null, x.mode, y),
                y.ref = Ao(x, null, m),
                y.return = x,
                y;
            case Ns:
                return m = Hc(m, x.mode, y),
                m.return = x,
                m;
            case qn:
                var S = m._init;
                return h(x, S(m._payload), y)
            }
            if (Fo(m) || Co(m))
                return m = qr(m, x.mode, y, null),
                m.return = x,
                m;
            aa(x, m)
        }
        return null
    }
    function p(x, m, y, S) {
        var j = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return j !== null ? null : l(x, m, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Yi:
                return y.key === j ? c(x, m, y, S) : null;
            case Ns:
                return y.key === j ? u(x, m, y, S) : null;
            case qn:
                return j = y._init,
                p(x, m, j(y._payload), S)
            }
            if (Fo(y) || Co(y))
                return j !== null ? null : d(x, m, y, S, null);
            aa(x, y)
        }
        return null
    }
    function f(x, m, y, S, j) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return x = x.get(y) || null,
            l(m, x, "" + S, j);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Yi:
                return x = x.get(S.key === null ? y : S.key) || null,
                c(m, x, S, j);
            case Ns:
                return x = x.get(S.key === null ? y : S.key) || null,
                u(m, x, S, j);
            case qn:
                var k = S._init;
                return f(x, m, y, k(S._payload), j)
            }
            if (Fo(S) || Co(S))
                return x = x.get(y) || null,
                d(m, x, S, j, null);
            aa(m, S)
        }
        return null
    }
    function b(x, m, y, S) {
        for (var j = null, k = null, _ = m, N = m = 0, A = null; _ !== null && N < y.length; N++) {
            _.index > N ? (A = _,
            _ = null) : A = _.sibling;
            var R = p(x, _, y[N], S);
            if (R === null) {
                _ === null && (_ = A);
                break
            }
            e && _ && R.alternate === null && t(x, _),
            m = o(R, m, N),
            k === null ? j = R : k.sibling = R,
            k = R,
            _ = A
        }
        if (N === y.length)
            return n(x, _),
            ke && Ar(x, N),
            j;
        if (_ === null) {
            for (; N < y.length; N++)
                _ = h(x, y[N], S),
                _ !== null && (m = o(_, m, N),
                k === null ? j = _ : k.sibling = _,
                k = _);
            return ke && Ar(x, N),
            j
        }
        for (_ = r(x, _); N < y.length; N++)
            A = f(_, x, N, y[N], S),
            A !== null && (e && A.alternate !== null && _.delete(A.key === null ? N : A.key),
            m = o(A, m, N),
            k === null ? j = A : k.sibling = A,
            k = A);
        return e && _.forEach(function(U) {
            return t(x, U)
        }),
        ke && Ar(x, N),
        j
    }
    function v(x, m, y, S) {
        var j = Co(y);
        if (typeof j != "function")
            throw Error(P(150));
        if (y = j.call(y),
        y == null)
            throw Error(P(151));
        for (var k = j = null, _ = m, N = m = 0, A = null, R = y.next(); _ !== null && !R.done; N++,
        R = y.next()) {
            _.index > N ? (A = _,
            _ = null) : A = _.sibling;
            var U = p(x, _, R.value, S);
            if (U === null) {
                _ === null && (_ = A);
                break
            }
            e && _ && U.alternate === null && t(x, _),
            m = o(U, m, N),
            k === null ? j = U : k.sibling = U,
            k = U,
            _ = A
        }
        if (R.done)
            return n(x, _),
            ke && Ar(x, N),
            j;
        if (_ === null) {
            for (; !R.done; N++,
            R = y.next())
                R = h(x, R.value, S),
                R !== null && (m = o(R, m, N),
                k === null ? j = R : k.sibling = R,
                k = R);
            return ke && Ar(x, N),
            j
        }
        for (_ = r(x, _); !R.done; N++,
        R = y.next())
            R = f(_, x, N, R.value, S),
            R !== null && (e && R.alternate !== null && _.delete(R.key === null ? N : R.key),
            m = o(R, m, N),
            k === null ? j = R : k.sibling = R,
            k = R);
        return e && _.forEach(function(M) {
            return t(x, M)
        }),
        ke && Ar(x, N),
        j
    }
    function w(x, m, y, S) {
        if (typeof y == "object" && y !== null && y.type === Cs && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Yi:
                e: {
                    for (var j = y.key, k = m; k !== null; ) {
                        if (k.key === j) {
                            if (j = y.type,
                            j === Cs) {
                                if (k.tag === 7) {
                                    n(x, k.sibling),
                                    m = s(k, y.props.children),
                                    m.return = x,
                                    x = m;
                                    break e
                                }
                            } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qn && pp(j) === k.type) {
                                n(x, k.sibling),
                                m = s(k, y.props),
                                m.ref = Ao(x, k, y),
                                m.return = x,
                                x = m;
                                break e
                            }
                            n(x, k);
                            break
                        } else
                            t(x, k);
                        k = k.sibling
                    }
                    y.type === Cs ? (m = qr(y.props.children, x.mode, S, y.key),
                    m.return = x,
                    x = m) : (S = La(y.type, y.key, y.props, null, x.mode, S),
                    S.ref = Ao(x, m, y),
                    S.return = x,
                    x = S)
                }
                return i(x);
            case Ns:
                e: {
                    for (k = y.key; m !== null; ) {
                        if (m.key === k)
                            if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                n(x, m.sibling),
                                m = s(m, y.children || []),
                                m.return = x,
                                x = m;
                                break e
                            } else {
                                n(x, m);
                                break
                            }
                        else
                            t(x, m);
                        m = m.sibling
                    }
                    m = Hc(y, x.mode, S),
                    m.return = x,
                    x = m
                }
                return i(x);
            case qn:
                return k = y._init,
                w(x, m, k(y._payload), S)
            }
            if (Fo(y))
                return b(x, m, y, S);
            if (Co(y))
                return v(x, m, y, S);
            aa(x, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        m !== null && m.tag === 6 ? (n(x, m.sibling),
        m = s(m, y),
        m.return = x,
        x = m) : (n(x, m),
        m = Vc(y, x.mode, S),
        m.return = x,
        x = m),
        i(x)) : n(x, m)
    }
    return w
}
var so = Sv(!0)
  , jv = Sv(!1)
  , nl = wr(null)
  , rl = null
  , Ms = null
  , mh = null;
function gh() {
    mh = Ms = rl = null
}
function vh(e) {
    var t = nl.current;
    be(nl),
    e._currentValue = t
}
function Hu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Bs(e, t) {
    rl = e,
    mh = Ms = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (dt = !0),
    e.firstContext = null)
}
function At(e) {
    var t = e._currentValue;
    if (mh !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ms === null) {
            if (rl === null)
                throw Error(P(308));
            Ms = e,
            rl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ms = Ms.next = e;
    return t
}
var $r = null;
function yh(e) {
    $r === null ? $r = [e] : $r.push(e)
}
function kv(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    yh(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    Tn(e, r)
}
function Tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Kn = !1;
function xh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function _v(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Nn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function cr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ie & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        Tn(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    yh(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    Tn(e, n)
}
function Pa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        sh(e, n)
    }
}
function mp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? s = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? s = o = t : o = o.next = t
        } else
            s = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function sl(e, t, n, r) {
    var s = e.updateQueue;
    Kn = !1;
    var o = s.firstBaseUpdate
      , i = s.lastBaseUpdate
      , l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var c = l
          , u = c.next;
        c.next = null,
        i === null ? o = u : i.next = u,
        i = c;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== i && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = c))
    }
    if (o !== null) {
        var h = s.baseState;
        i = 0,
        d = u = c = null,
        l = o;
        do {
            var p = l.lane
              , f = l.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: f,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var b = e
                      , v = l;
                    switch (p = t,
                    f = n,
                    v.tag) {
                    case 1:
                        if (b = v.payload,
                        typeof b == "function") {
                            h = b.call(f, h, p);
                            break e
                        }
                        h = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = v.payload,
                        p = typeof b == "function" ? b.call(f, h, p) : b,
                        p == null)
                            break e;
                        h = Ce({}, h, p);
                        break e;
                    case 2:
                        Kn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                p = s.effects,
                p === null ? s.effects = [l] : p.push(l))
            } else
                f = {
                    eventTime: f,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = f,
                c = h) : d = d.next = f,
                i |= p;
            if (l = l.next,
            l === null) {
                if (l = s.shared.pending,
                l === null)
                    break;
                p = l,
                l = p.next,
                p.next = null,
                s.lastBaseUpdate = p,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (c = h),
        s.baseState = c,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                i |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            o === null && (s.shared.lanes = 0);
        Xr |= i,
        e.lanes = i,
        e.memoizedState = h
    }
}
function gp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(P(191, s));
                s.call(r)
            }
        }
}
var $i = {}
  , fn = wr($i)
  , mi = wr($i)
  , gi = wr($i);
function Dr(e) {
    if (e === $i)
        throw Error(P(174));
    return e
}
function wh(e, t) {
    switch (ge(gi, t),
    ge(mi, e),
    ge(fn, $i),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _u(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = _u(t, e)
    }
    be(fn),
    ge(fn, t)
}
function oo() {
    be(fn),
    be(mi),
    be(gi)
}
function Nv(e) {
    Dr(gi.current);
    var t = Dr(fn.current)
      , n = _u(t, e.type);
    t !== n && (ge(mi, e),
    ge(fn, n))
}
function bh(e) {
    mi.current === e && (be(fn),
    be(mi))
}
var _e = wr(0);
function ol(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Dc = [];
function Sh() {
    for (var e = 0; e < Dc.length; e++)
        Dc[e]._workInProgressVersionwarning = null;
    Dc.length = 0
}
var Ra = On.ReactCurrentDispatcher
  , Fc = On.ReactCurrentBatchConfig
  , Jr = 0
  , Ne = null
  , De = null
  , Ue = null
  , il = !1
  , Yo = !1
  , vi = 0
  , jS = 0;
function Ge() {
    throw Error(P(321))
}
function jh(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Jt(e[n], t[n]))
            return !1;
    return !0
}
function kh(e, t, n, r, s, o) {
    if (Jr = o,
    Ne = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ra.current = e === null || e.memoizedState === null ? CS : ES,
    e = n(r, s),
    Yo) {
        o = 0;
        do {
            if (Yo = !1,
            vi = 0,
            25 <= o)
                throw Error(P(301));
            o += 1,
            Ue = De = null,
            t.updateQueue = null,
            Ra.current = TS,
            e = n(r, s)
        } while (Yo)
    }
    if (Ra.current = al,
    t = De !== null && De.next !== null,
    Jr = 0,
    Ue = De = Ne = null,
    il = !1,
    t)
        throw Error(P(300));
    return e
}
function _h() {
    var e = vi !== 0;
    return vi = 0,
    e
}
function rn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ue === null ? Ne.memoizedState = Ue = e : Ue = Ue.next = e,
    Ue
}
function Ot() {
    if (De === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = De.next;
    var t = Ue === null ? Ne.memoizedState : Ue.next;
    if (t !== null)
        Ue = t,
        De = e;
    else {
        if (e === null)
            throw Error(P(310));
        De = e,
        e = {
            memoizedState: De.memoizedState,
            baseState: De.baseState,
            baseQueue: De.baseQueue,
            queue: De.queue,
            next: null
        },
        Ue === null ? Ne.memoizedState = Ue = e : Ue = Ue.next = e
    }
    return Ue
}
function yi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Uc(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = De
      , s = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (s !== null) {
            var i = s.next;
            s.next = o.next,
            o.next = i
        }
        r.baseQueue = s = o,
        n.pending = null
    }
    if (s !== null) {
        o = s.next,
        r = r.baseState;
        var l = i = null
          , c = null
          , u = o;
        do {
            var d = u.lane;
            if ((Jr & d) === d)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (l = c = h,
                i = r) : c = c.next = h,
                Ne.lanes |= d,
                Xr |= d
            }
            u = u.next
        } while (u !== null && u !== o);
        c === null ? i = r : c.next = l,
        Jt(r, t.memoizedState) || (dt = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = c,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            o = s.lane,
            Ne.lanes |= o,
            Xr |= o,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function zc(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , o = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var i = s = s.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== s);
        Jt(o, t.memoizedState) || (dt = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Cv() {}
function Ev(e, t) {
    var n = Ne
      , r = Ot()
      , s = t()
      , o = !Jt(r.memoizedState, s);
    if (o && (r.memoizedState = s,
    dt = !0),
    r = r.queue,
    Nh(Rv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ue !== null && Ue.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        xi(9, Pv.bind(null, n, r, s, t), void 0, null),
        ze === null)
            throw Error(P(349));
        Jr & 30 || Tv(n, t, s)
    }
    return s
}
function Tv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ne.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Pv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Av(t) && Ov(e)
}
function Rv(e, t, n) {
    return n(function() {
        Av(t) && Ov(e)
    })
}
function Av(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Jt(e, n)
    } catch {
        return !0
    }
}
function Ov(e) {
    var t = Tn(e, 1);
    t !== null && Yt(t, e, 1, -1)
}
function vp(e) {
    var t = rn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = NS.bind(null, Ne, e),
    [t.memoizedState, e]
}
function xi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ne.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Iv() {
    return Ot().memoizedState
}
function Aa(e, t, n, r) {
    var s = rn();
    Ne.flags |= e,
    s.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ml(e, t, n, r) {
    var s = Ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (De !== null) {
        var i = De.memoizedState;
        if (o = i.destroy,
        r !== null && jh(r, i.deps)) {
            s.memoizedState = xi(t, n, o, r);
            return
        }
    }
    Ne.flags |= e,
    s.memoizedState = xi(1 | t, n, o, r)
}
function yp(e, t) {
    return Aa(8390656, 8, e, t)
}
function Nh(e, t) {
    return Ml(2048, 8, e, t)
}
function Mv(e, t) {
    return Ml(4, 2, e, t)
}
function Lv(e, t) {
    return Ml(4, 4, e, t)
}
function $v(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Dv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ml(4, 4, $v.bind(null, t, e), n)
}
function Ch() {}
function Fv(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jh(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Uv(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jh(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function zv(e, t, n) {
    return Jr & 21 ? (Jt(n, t) || (n = qg(),
    Ne.lanes |= n,
    Xr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    dt = !0),
    e.memoizedState = n)
}
function kS(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Fc.transition;
    Fc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        he = n,
        Fc.transition = r
    }
}
function Bv() {
    return Ot().memoizedState
}
function _S(e, t, n) {
    var r = dr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Wv(e))
        Vv(t, n);
    else if (n = kv(e, t, n, r),
    n !== null) {
        var s = st();
        Yt(n, e, r, s),
        Hv(n, t, r)
    }
}
function NS(e, t, n) {
    var r = dr(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Wv(e))
        Vv(t, s);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , l = o(i, n);
                if (s.hasEagerState = !0,
                s.eagerState = l,
                Jt(l, i)) {
                    var c = t.interleaved;
                    c === null ? (s.next = s,
                    yh(t)) : (s.next = c.next,
                    c.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = kv(e, t, s, r),
        n !== null && (s = st(),
        Yt(n, e, r, s),
        Hv(n, t, r))
    }
}
function Wv(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne
}
function Vv(e, t) {
    Yo = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Hv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        sh(e, n)
    }
}
var al = {
    readContext: At,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1
}
  , CS = {
    readContext: At,
    useCallback: function(e, t) {
        return rn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: At,
    useEffect: yp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Aa(4194308, 4, $v.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Aa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Aa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = rn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = rn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = _S.bind(null, Ne, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = rn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: vp,
    useDebugValue: Ch,
    useDeferredValue: function(e) {
        return rn().memoizedState = e
    },
    useTransition: function() {
        var e = vp(!1)
          , t = e[0];
        return e = kS.bind(null, e[1]),
        rn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Ne
          , s = rn();
        if (ke) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            ze === null)
                throw Error(P(349));
            Jr & 30 || Tv(r, t, n)
        }
        s.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return s.queue = o,
        yp(Rv.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        xi(9, Pv.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = rn()
          , t = ze.identifierPrefix;
        if (ke) {
            var n = _n
              , r = kn;
            n = (r & ~(1 << 32 - Qt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = vi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = jS++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ES = {
    readContext: At,
    useCallback: Fv,
    useContext: At,
    useEffect: Nh,
    useImperativeHandle: Dv,
    useInsertionEffect: Mv,
    useLayoutEffect: Lv,
    useMemo: Uv,
    useReducer: Uc,
    useRef: Iv,
    useState: function() {
        return Uc(yi)
    },
    useDebugValue: Ch,
    useDeferredValue: function(e) {
        var t = Ot();
        return zv(t, De.memoizedState, e)
    },
    useTransition: function() {
        var e = Uc(yi)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Cv,
    useSyncExternalStore: Ev,
    useId: Bv,
    unstable_isNewReconciler: !1
}
  , TS = {
    readContext: At,
    useCallback: Fv,
    useContext: At,
    useEffect: Nh,
    useImperativeHandle: Dv,
    useInsertionEffect: Mv,
    useLayoutEffect: Lv,
    useMemo: Uv,
    useReducer: zc,
    useRef: Iv,
    useState: function() {
        return zc(yi)
    },
    useDebugValue: Ch,
    useDeferredValue: function(e) {
        var t = Ot();
        return De === null ? t.memoizedState = e : zv(t, De.memoizedState, e)
    },
    useTransition: function() {
        var e = zc(yi)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Cv,
    useSyncExternalStore: Ev,
    useId: Bv,
    unstable_isNewReconciler: !1
};
function Bt(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function qu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ll = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? os(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = st()
          , s = dr(e)
          , o = Nn(r, s);
        o.payload = t,
        n != null && (o.callback = n),
        t = cr(e, o, s),
        t !== null && (Yt(t, e, s, r),
        Pa(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = st()
          , s = dr(e)
          , o = Nn(r, s);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = cr(e, o, s),
        t !== null && (Yt(t, e, s, r),
        Pa(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = st()
          , r = dr(e)
          , s = Nn(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = cr(e, s, r),
        t !== null && (Yt(t, e, r, n),
        Pa(t, e, r))
    }
};
function xp(e, t, n, r, s, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !di(n, r) || !di(s, o) : !0
}
function qv(e, t, n) {
    var r = !1
      , s = gr
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = At(o) : (s = ft(t) ? Qr : Xe.current,
    r = t.contextTypes,
    o = (r = r != null) ? no(e, s) : gr),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ll,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function wp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null)
}
function Ku(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    xh(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = At(o) : (o = ft(t) ? Qr : Xe.current,
    s.context = no(e, o)),
    s.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (qu(e, t, o, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Ll.enqueueReplaceState(s, s.state, null),
    sl(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function io(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += r1(r),
            r = r.return;
        while (r);
        var s = n
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Bc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Gu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var PS = typeof WeakMap == "function" ? WeakMap : Map;
function Kv(e, t, n) {
    n = Nn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        cl || (cl = !0,
        sd = r),
        Gu(e, t)
    }
    ,
    n
}
function Gv(e, t, n) {
    n = Nn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Gu(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Gu(e, t),
        typeof r != "function" && (ur === null ? ur = new Set([this]) : ur.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function bp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new PS;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = VS.bind(null, e, t, n),
    t.then(e, e))
}
function Sp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function jp(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nn(-1, 1),
    t.tag = 2,
    cr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var RS = On.ReactCurrentOwner
  , dt = !1;
function tt(e, t, n, r) {
    t.child = e === null ? jv(t, null, n, r) : so(t, e.child, n, r)
}
function kp(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Bs(t, s),
    r = kh(e, t, n, r, o, s),
    n = _h(),
    e !== null && !dt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    Pn(e, t, s)) : (ke && n && hh(t),
    t.flags |= 1,
    tt(e, t, r, s),
    t.child)
}
function _p(e, t, n, r, s) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Mh(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Qv(e, t, o, r, s)) : (e = La(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & s)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : di,
        n(i, r) && e.ref === t.ref)
            return Pn(e, t, s)
    }
    return t.flags |= 1,
    e = hr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Qv(e, t, n, r, s) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (di(o, r) && e.ref === t.ref)
            if (dt = !1,
            t.pendingProps = r = o,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (dt = !0);
            else
                return t.lanes = e.lanes,
                Pn(e, t, s)
    }
    return Qu(e, t, n, r, s)
}
function Yv(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ge($s, gt),
            gt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ge($s, gt),
                gt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ge($s, gt),
            gt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ge($s, gt),
        gt |= r;
    return tt(e, t, s, n),
    t.child
}
function Jv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Qu(e, t, n, r, s) {
    var o = ft(n) ? Qr : Xe.current;
    return o = no(t, o),
    Bs(t, s),
    n = kh(e, t, n, r, o, s),
    r = _h(),
    e !== null && !dt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    Pn(e, t, s)) : (ke && r && hh(t),
    t.flags |= 1,
    tt(e, t, n, s),
    t.child)
}
function Np(e, t, n, r, s) {
    if (ft(n)) {
        var o = !0;
        Za(t)
    } else
        o = !1;
    if (Bs(t, s),
    t.stateNode === null)
        Oa(e, t),
        qv(t, n, r),
        Ku(t, n, r, s),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , l = t.memoizedProps;
        i.props = l;
        var c = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = At(u) : (u = ft(n) ? Qr : Xe.current,
        u = no(t, u));
        var d = n.getDerivedStateFromProps
          , h = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || c !== u) && wp(t, i, r, u),
        Kn = !1;
        var p = t.memoizedState;
        i.state = p,
        sl(t, r, i, s),
        c = t.memoizedState,
        l !== r || p !== c || ht.current || Kn ? (typeof d == "function" && (qu(t, n, d, r),
        c = t.memoizedState),
        (l = Kn || xp(t, n, l, r, p, c, u)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = c),
        i.props = r,
        i.state = c,
        i.context = u,
        r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        _v(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Bt(t.type, l),
        i.props = u,
        h = t.pendingProps,
        p = i.context,
        c = n.contextType,
        typeof c == "object" && c !== null ? c = At(c) : (c = ft(n) ? Qr : Xe.current,
        c = no(t, c));
        var f = n.getDerivedStateFromProps;
        (d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== h || p !== c) && wp(t, i, r, c),
        Kn = !1,
        p = t.memoizedState,
        i.state = p,
        sl(t, r, i, s);
        var b = t.memoizedState;
        l !== h || p !== b || ht.current || Kn ? (typeof f == "function" && (qu(t, n, f, r),
        b = t.memoizedState),
        (u = Kn || xp(t, n, u, r, p, b, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, b, c),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, b, c)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        i.props = r,
        i.state = b,
        i.context = c,
        r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Yu(e, t, n, r, o, s)
}
function Yu(e, t, n, r, s, o) {
    Jv(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return s && dp(t, n, !1),
        Pn(e, t, o);
    r = t.stateNode,
    RS.current = t;
    var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = so(t, e.child, null, o),
    t.child = so(t, null, l, o)) : tt(e, t, l, o),
    t.memoizedState = r.state,
    s && dp(t, n, !0),
    t.child
}
function Xv(e) {
    var t = e.stateNode;
    t.pendingContext ? up(e, t.pendingContext, t.pendingContext !== t.context) : t.context && up(e, t.context, !1),
    wh(e, t.containerInfo)
}
function Cp(e, t, n, r, s) {
    return ro(),
    ph(s),
    t.flags |= 256,
    tt(e, t, n, r),
    t.child
}
var Ju = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Xu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Zv(e, t, n) {
    var r = t.pendingProps, s = _e.current, o = !1, i = (t.flags & 128) !== 0, l;
    if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    ge(_e, s & 1),
    e === null)
        return Vu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Fl(i, r, 0, null),
        e = qr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Xu(n),
        t.memoizedState = Ju,
        e) : Eh(t, i));
    if (s = e.memoizedState,
    s !== null && (l = s.dehydrated,
    l !== null))
        return AS(e, t, i, r, l, s, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        s = e.child,
        l = s.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = c,
        t.deletions = null) : (r = hr(s, c),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        l !== null ? o = hr(l, o) : (o = qr(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? Xu(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Ju,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = hr(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Eh(e, t) {
    return t = Fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function la(e, t, n, r) {
    return r !== null && ph(r),
    so(t, e.child, null, n),
    e = Eh(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function AS(e, t, n, r, s, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Bc(Error(P(422))),
        la(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        s = t.mode,
        r = Fl({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        o = qr(o, s, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && so(t, e.child, null, i),
        t.child.memoizedState = Xu(i),
        t.memoizedState = Ju,
        o);
    if (!(t.mode & 1))
        return la(e, t, i, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(P(419)),
        r = Bc(o, r, void 0),
        la(e, t, i, r)
    }
    if (l = (i & e.childLanes) !== 0,
    dt || l) {
        if (r = ze,
        r !== null) {
            switch (i & -i) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | i) ? 0 : s,
            s !== 0 && s !== o.retryLane && (o.retryLane = s,
            Tn(e, s),
            Yt(r, e, s, -1))
        }
        return Ih(),
        r = Bc(Error(P(421))),
        la(e, t, i, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = HS.bind(null, e),
    s._reactRetry = t,
    null) : (e = o.treeContext,
    yt = lr(s.nextSibling),
    xt = t,
    ke = !0,
    Gt = null,
    e !== null && (Ct[Et++] = kn,
    Ct[Et++] = _n,
    Ct[Et++] = Yr,
    kn = e.id,
    _n = e.overflow,
    Yr = t),
    t = Eh(t, r.children),
    t.flags |= 4096,
    t)
}
function Ep(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Hu(e.return, t, n)
}
function Wc(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = s)
}
function ey(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , o = r.tail;
    if (tt(e, t, r.children, n),
    r = _e.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ep(e, n, t);
                else if (e.tag === 19)
                    Ep(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ge(_e, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && ol(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            Wc(t, !1, s, n, o);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && ol(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            Wc(t, !0, n, null, o);
            break;
        case "together":
            Wc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Oa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Xr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = hr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = hr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function OS(e, t, n) {
    switch (t.tag) {
    case 3:
        Xv(t),
        ro();
        break;
    case 5:
        Nv(t);
        break;
    case 1:
        ft(t.type) && Za(t);
        break;
    case 4:
        wh(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        ge(nl, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ge(_e, _e.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Zv(e, t, n) : (ge(_e, _e.current & 1),
            e = Pn(e, t, n),
            e !== null ? e.sibling : null);
        ge(_e, _e.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ey(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        ge(_e, _e.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Yv(e, t, n)
    }
    return Pn(e, t, n)
}
var ty, Zu, ny, ry;
ty = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Zu = function() {}
;
ny = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Dr(fn.current);
        var o = null;
        switch (n) {
        case "input":
            s = bu(e, s),
            r = bu(e, r),
            o = [];
            break;
        case "select":
            s = Ce({}, s, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            s = ku(e, s),
            r = ku(e, r),
            o = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ja)
        }
        Nu(n, r);
        var i;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var l = s[u];
                    for (i in l)
                        l.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (si.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (l = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && c !== l && (c != null || l != null))
                if (u === "style")
                    if (l) {
                        for (i in l)
                            !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in c)
                            c.hasOwnProperty(i) && l[i] !== c[i] && (n || (n = {}),
                            n[i] = c[i])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    l = l ? l.__html : void 0,
                    c != null && l !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (si.hasOwnProperty(u) ? (c != null && u === "onScroll" && xe("scroll", e),
                    o || l === c || (o = [])) : (o = o || []).push(u, c))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ry = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Oo(e, t) {
    if (!ke)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function IS(e, t, n) {
    var r = t.pendingProps;
    switch (fh(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Qe(t),
        null;
    case 1:
        return ft(t.type) && Xa(),
        Qe(t),
        null;
    case 3:
        return r = t.stateNode,
        oo(),
        be(ht),
        be(Xe),
        Sh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ia(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Gt !== null && (ad(Gt),
        Gt = null))),
        Zu(e, t),
        Qe(t),
        null;
    case 5:
        bh(t);
        var s = Dr(gi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            ny(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return Qe(t),
                null
            }
            if (e = Dr(fn.current),
            ia(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[cn] = t,
                r[pi] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    xe("cancel", r),
                    xe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    xe("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < zo.length; s++)
                        xe(zo[s], r);
                    break;
                case "source":
                    xe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    xe("error", r),
                    xe("load", r);
                    break;
                case "details":
                    xe("toggle", r);
                    break;
                case "input":
                    $f(r, o),
                    xe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    xe("invalid", r);
                    break;
                case "textarea":
                    Ff(r, o),
                    xe("invalid", r)
                }
                Nu(n, o),
                s = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var l = o[i];
                        i === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && oa(r.textContent, l, e),
                        s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && oa(r.textContent, l, e),
                        s = ["children", "" + l]) : si.hasOwnProperty(i) && l != null && i === "onScroll" && xe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ji(r),
                    Df(r, o, !0);
                    break;
                case "textarea":
                    Ji(r),
                    Uf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Ja)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Rg(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[cn] = t,
                e[pi] = r,
                ty(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Cu(n, r),
                    n) {
                    case "dialog":
                        xe("cancel", e),
                        xe("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xe("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < zo.length; s++)
                            xe(zo[s], e);
                        s = r;
                        break;
                    case "source":
                        xe("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xe("error", e),
                        xe("load", e),
                        s = r;
                        break;
                    case "details":
                        xe("toggle", e),
                        s = r;
                        break;
                    case "input":
                        $f(e, r),
                        s = bu(e, r),
                        xe("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = Ce({}, r, {
                            value: void 0
                        }),
                        xe("invalid", e);
                        break;
                    case "textarea":
                        Ff(e, r),
                        s = ku(e, r),
                        xe("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    Nu(n, s),
                    l = s;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var c = l[o];
                            o === "style" ? Ig(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && Ag(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && oi(e, c) : typeof c == "number" && oi(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (si.hasOwnProperty(o) ? c != null && o === "onScroll" && xe("scroll", e) : c != null && Xd(e, o, c, i))
                        }
                    switch (n) {
                    case "input":
                        Ji(e),
                        Df(e, r, !1);
                        break;
                    case "textarea":
                        Ji(e),
                        Uf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + mr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Ds(e, !!r.multiple, o, !1) : r.defaultValue != null && Ds(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = Ja)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Qe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ry(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = Dr(gi.current),
            Dr(fn.current),
            ia(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[cn] = t,
                (o = r.nodeValue !== n) && (e = xt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        oa(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && oa(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[cn] = t,
                t.stateNode = r
        }
        return Qe(t),
        null;
    case 13:
        if (be(_e),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ke && yt !== null && t.mode & 1 && !(t.flags & 128))
                bv(),
                ro(),
                t.flags |= 98560,
                o = !1;
            else if (o = ia(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(P(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(P(317));
                    o[cn] = t
                } else
                    ro(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Qe(t),
                o = !1
            } else
                Gt !== null && (ad(Gt),
                Gt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || _e.current & 1 ? Fe === 0 && (Fe = 3) : Ih())),
        t.updateQueue !== null && (t.flags |= 4),
        Qe(t),
        null);
    case 4:
        return oo(),
        Zu(e, t),
        e === null && hi(t.stateNode.containerInfo),
        Qe(t),
        null;
    case 10:
        return vh(t.type._context),
        Qe(t),
        null;
    case 17:
        return ft(t.type) && Xa(),
        Qe(t),
        null;
    case 19:
        if (be(_e),
        o = t.memoizedState,
        o === null)
            return Qe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                Oo(o, !1);
            else {
                if (Fe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = ol(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Oo(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ge(_e, _e.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Oe() > ao && (t.flags |= 128,
                r = !0,
                Oo(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ol(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Oo(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !ke)
                        return Qe(t),
                        null
                } else
                    2 * Oe() - o.renderingStartTime > ao && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Oo(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Oe(),
        t.sibling = null,
        n = _e.current,
        ge(_e, r ? n & 1 | 2 : n & 1),
        t) : (Qe(t),
        null);
    case 22:
    case 23:
        return Oh(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? gt & 1073741824 && (Qe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function MS(e, t) {
    switch (fh(t),
    t.tag) {
    case 1:
        return ft(t.type) && Xa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return oo(),
        be(ht),
        be(Xe),
        Sh(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return bh(t),
        null;
    case 13:
        if (be(_e),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            ro()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return be(_e),
        null;
    case 4:
        return oo(),
        null;
    case 10:
        return vh(t.type._context),
        null;
    case 22:
    case 23:
        return Oh(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ca = !1
  , Je = !1
  , LS = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function Ls(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Re(e, t, r)
            }
        else
            n.current = null
}
function ed(e, t, n) {
    try {
        n()
    } catch (r) {
        Re(e, t, r)
    }
}
var Tp = !1;
function $S(e, t) {
    if ($u = Ga,
    e = lv(),
    dh(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , l = -1
                      , c = -1
                      , u = 0
                      , d = 0
                      , h = e
                      , p = null;
                    t: for (; ; ) {
                        for (var f; h !== n || s !== 0 && h.nodeType !== 3 || (l = i + s),
                        h !== o || r !== 0 && h.nodeType !== 3 || (c = i + r),
                        h.nodeType === 3 && (i += h.nodeValue.length),
                        (f = h.firstChild) !== null; )
                            p = h,
                            h = f;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (p === n && ++u === s && (l = i),
                            p === o && ++d === r && (c = i),
                            (f = h.nextSibling) !== null)
                                break;
                            h = p,
                            p = h.parentNode
                        }
                        h = f
                    }
                    n = l === -1 || c === -1 ? null : {
                        start: l,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Du = {
        focusedElem: e,
        selectionRange: n
    },
    Ga = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var v = b.memoizedProps
                                  , w = b.memoizedState
                                  , x = t.stateNode
                                  , m = x.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Bt(t.type, v), w);
                                x.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (S) {
                    Re(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return b = Tp,
    Tp = !1,
    b
}
function Jo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var o = s.destroy;
                s.destroy = void 0,
                o !== void 0 && ed(t, n, o)
            }
            s = s.next
        } while (s !== r)
    }
}
function $l(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function td(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function sy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    sy(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[cn],
    delete t[pi],
    delete t[zu],
    delete t[xS],
    delete t[wS])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function oy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Pp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || oy(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function nd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ja));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (nd(e, t, n),
        e = e.sibling; e !== null; )
            nd(e, t, n),
            e = e.sibling
}
function rd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (rd(e, t, n),
        e = e.sibling; e !== null; )
            rd(e, t, n),
            e = e.sibling
}
var Be = null
  , qt = !1;
function Fn(e, t, n) {
    for (n = n.child; n !== null; )
        iy(e, t, n),
        n = n.sibling
}
function iy(e, t, n) {
    if (hn && typeof hn.onCommitFiberUnmount == "function")
        try {
            hn.onCommitFiberUnmount(Tl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Je || Ls(n, t);
    case 6:
        var r = Be
          , s = qt;
        Be = null,
        Fn(e, t, n),
        Be = r,
        qt = s,
        Be !== null && (qt ? (e = Be,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
    case 18:
        Be !== null && (qt ? (e = Be,
        n = n.stateNode,
        e.nodeType === 8 ? Lc(e.parentNode, n) : e.nodeType === 1 && Lc(e, n),
        ci(e)) : Lc(Be, n.stateNode));
        break;
    case 4:
        r = Be,
        s = qt,
        Be = n.stateNode.containerInfo,
        qt = !0,
        Fn(e, t, n),
        Be = r,
        qt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Je && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var o = s
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && ed(n, t, i),
                s = s.next
            } while (s !== r)
        }
        Fn(e, t, n);
        break;
    case 1:
        if (!Je && (Ls(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Re(n, t, l)
            }
        Fn(e, t, n);
        break;
    case 21:
        Fn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Je = (r = Je) || n.memoizedState !== null,
        Fn(e, t, n),
        Je = r) : Fn(e, t, n);
        break;
    default:
        Fn(e, t, n)
    }
}
function Rp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new LS),
        t.forEach(function(r) {
            var s = qS.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var o = e
                  , i = t
                  , l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Be = l.stateNode,
                        qt = !1;
                        break e;
                    case 3:
                        Be = l.stateNode.containerInfo,
                        qt = !0;
                        break e;
                    case 4:
                        Be = l.stateNode.containerInfo,
                        qt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Be === null)
                    throw Error(P(160));
                iy(o, i, s),
                Be = null,
                qt = !1;
                var c = s.alternate;
                c !== null && (c.return = null),
                s.return = null
            } catch (u) {
                Re(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            ay(t, e),
            t = t.sibling
}
function ay(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Dt(t, e),
        nn(e),
        r & 4) {
            try {
                Jo(3, e, e.return),
                $l(3, e)
            } catch (v) {
                Re(e, e.return, v)
            }
            try {
                Jo(5, e, e.return)
            } catch (v) {
                Re(e, e.return, v)
            }
        }
        break;
    case 1:
        Dt(t, e),
        nn(e),
        r & 512 && n !== null && Ls(n, n.return);
        break;
    case 5:
        if (Dt(t, e),
        nn(e),
        r & 512 && n !== null && Ls(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                oi(s, "")
            } catch (v) {
                Re(e, e.return, v)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , l = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && Tg(s, o),
                    Cu(l, i);
                    var u = Cu(l, o);
                    for (i = 0; i < c.length; i += 2) {
                        var d = c[i]
                          , h = c[i + 1];
                        d === "style" ? Ig(s, h) : d === "dangerouslySetInnerHTML" ? Ag(s, h) : d === "children" ? oi(s, h) : Xd(s, d, h, u)
                    }
                    switch (l) {
                    case "input":
                        Su(s, o);
                        break;
                    case "textarea":
                        Pg(s, o);
                        break;
                    case "select":
                        var p = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!o.multiple;
                        var f = o.value;
                        f != null ? Ds(s, !!o.multiple, f, !1) : p !== !!o.multiple && (o.defaultValue != null ? Ds(s, !!o.multiple, o.defaultValue, !0) : Ds(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[pi] = o
                } catch (v) {
                    Re(e, e.return, v)
                }
        }
        break;
    case 6:
        if (Dt(t, e),
        nn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            s = e.stateNode,
            o = e.memoizedProps;
            try {
                s.nodeValue = o
            } catch (v) {
                Re(e, e.return, v)
            }
        }
        break;
    case 3:
        if (Dt(t, e),
        nn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ci(t.containerInfo)
            } catch (v) {
                Re(e, e.return, v)
            }
        break;
    case 4:
        Dt(t, e),
        nn(e);
        break;
    case 13:
        Dt(t, e),
        nn(e),
        s = e.child,
        s.flags & 8192 && (o = s.memoizedState !== null,
        s.stateNode.isHidden = o,
        !o || s.alternate !== null && s.alternate.memoizedState !== null || (Rh = Oe())),
        r & 4 && Rp(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Je = (u = Je) || d,
        Dt(t, e),
        Je = u) : Dt(t, e),
        nn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (F = e,
                d = e.child; d !== null; ) {
                    for (h = F = d; F !== null; ) {
                        switch (p = F,
                        f = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Jo(4, p, p.return);
                            break;
                        case 1:
                            Ls(p, p.return);
                            var b = p.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (v) {
                                    Re(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Ls(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Op(h);
                                continue
                            }
                        }
                        f !== null ? (f.return = p,
                        F = f) : Op(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            s = h.stateNode,
                            u ? (o = s.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode,
                            c = h.memoizedProps.style,
                            i = c != null && c.hasOwnProperty("display") ? c.display : null,
                            l.style.display = Og("display", i))
                        } catch (v) {
                            Re(e, e.return, v)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (v) {
                            Re(e, e.return, v)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Dt(t, e),
        nn(e),
        r & 4 && Rp(e);
        break;
    case 21:
        break;
    default:
        Dt(t, e),
        nn(e)
    }
}
function nn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (oy(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (oi(s, ""),
                r.flags &= -33);
                var o = Pp(e);
                rd(e, o, s);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , l = Pp(e);
                nd(e, l, i);
                break;
            default:
                throw Error(P(161))
            }
        } catch (c) {
            Re(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function DS(e, t, n) {
    F = e,
    ly(e)
}
function ly(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var s = F
          , o = s.child;
        if (s.tag === 22 && r) {
            var i = s.memoizedState !== null || ca;
            if (!i) {
                var l = s.alternate
                  , c = l !== null && l.memoizedState !== null || Je;
                l = ca;
                var u = Je;
                if (ca = i,
                (Je = c) && !u)
                    for (F = s; F !== null; )
                        i = F,
                        c = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Ip(s) : c !== null ? (c.return = i,
                        F = c) : Ip(s);
                for (; o !== null; )
                    F = o,
                    ly(o),
                    o = o.sibling;
                F = s,
                ca = l,
                Je = u
            }
            Ap(e)
        } else
            s.subtreeFlags & 8772 && o !== null ? (o.return = s,
            F = o) : Ap(e)
    }
}
function Ap(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Je || $l(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Je)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && gp(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            gp(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && n.focus();
                                break;
                            case "img":
                                c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && ci(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                Je || t.flags & 512 && td(t)
            } catch (p) {
                Re(t, t.return, p)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Op(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Ip(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    $l(4, t)
                } catch (c) {
                    Re(t, n, c)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (c) {
                        Re(t, s, c)
                    }
                }
                var o = t.return;
                try {
                    td(t)
                } catch (c) {
                    Re(t, o, c)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    td(t)
                } catch (c) {
                    Re(t, i, c)
                }
            }
        } catch (c) {
            Re(t, t.return, c)
        }
        if (t === e) {
            F = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            F = l;
            break
        }
        F = t.return
    }
}
var FS = Math.ceil
  , ll = On.ReactCurrentDispatcher
  , Th = On.ReactCurrentOwner
  , Pt = On.ReactCurrentBatchConfig
  , ie = 0
  , ze = null
  , Ie = null
  , We = 0
  , gt = 0
  , $s = wr(0)
  , Fe = 0
  , wi = null
  , Xr = 0
  , Dl = 0
  , Ph = 0
  , Xo = null
  , lt = null
  , Rh = 0
  , ao = 1 / 0
  , wn = null
  , cl = !1
  , sd = null
  , ur = null
  , ua = !1
  , rr = null
  , ul = 0
  , Zo = 0
  , od = null
  , Ia = -1
  , Ma = 0;
function st() {
    return ie & 6 ? Oe() : Ia !== -1 ? Ia : Ia = Oe()
}
function dr(e) {
    return e.mode & 1 ? ie & 2 && We !== 0 ? We & -We : SS.transition !== null ? (Ma === 0 && (Ma = qg()),
    Ma) : (e = he,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Zg(e.type)),
    e) : 1
}
function Yt(e, t, n, r) {
    if (50 < Zo)
        throw Zo = 0,
        od = null,
        Error(P(185));
    Ii(e, n, r),
    (!(ie & 2) || e !== ze) && (e === ze && (!(ie & 2) && (Dl |= n),
    Fe === 4 && Qn(e, We)),
    pt(e, r),
    n === 1 && ie === 0 && !(t.mode & 1) && (ao = Oe() + 500,
    Il && br()))
}
function pt(e, t) {
    var n = e.callbackNode;
    S1(e, t);
    var r = Ka(e, e === ze ? We : 0);
    if (r === 0)
        n !== null && Wf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Wf(n),
        t === 1)
            e.tag === 0 ? bS(Mp.bind(null, e)) : yv(Mp.bind(null, e)),
            vS(function() {
                !(ie & 6) && br()
            }),
            n = null;
        else {
            switch (Kg(r)) {
            case 1:
                n = rh;
                break;
            case 4:
                n = Vg;
                break;
            case 16:
                n = qa;
                break;
            case 536870912:
                n = Hg;
                break;
            default:
                n = qa
            }
            n = gy(n, cy.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function cy(e, t) {
    if (Ia = -1,
    Ma = 0,
    ie & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (Ws() && e.callbackNode !== n)
        return null;
    var r = Ka(e, e === ze ? We : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = dl(e, r);
    else {
        t = r;
        var s = ie;
        ie |= 2;
        var o = dy();
        (ze !== e || We !== t) && (wn = null,
        ao = Oe() + 500,
        Hr(e, t));
        do
            try {
                BS();
                break
            } catch (l) {
                uy(e, l)
            }
        while (!0);
        gh(),
        ll.current = o,
        ie = s,
        Ie !== null ? t = 0 : (ze = null,
        We = 0,
        t = Fe)
    }
    if (t !== 0) {
        if (t === 2 && (s = Au(e),
        s !== 0 && (r = s,
        t = id(e, s))),
        t === 1)
            throw n = wi,
            Hr(e, 0),
            Qn(e, r),
            pt(e, Oe()),
            n;
        if (t === 6)
            Qn(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !US(s) && (t = dl(e, r),
            t === 2 && (o = Au(e),
            o !== 0 && (r = o,
            t = id(e, o))),
            t === 1))
                throw n = wi,
                Hr(e, 0),
                Qn(e, r),
                pt(e, Oe()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                Or(e, lt, wn);
                break;
            case 3:
                if (Qn(e, r),
                (r & 130023424) === r && (t = Rh + 500 - Oe(),
                10 < t)) {
                    if (Ka(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        st(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = Uu(Or.bind(null, e, lt, wn), t);
                    break
                }
                Or(e, lt, wn);
                break;
            case 4:
                if (Qn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var i = 31 - Qt(r);
                    o = 1 << i,
                    i = t[i],
                    i > s && (s = i),
                    r &= ~o
                }
                if (r = s,
                r = Oe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * FS(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Uu(Or.bind(null, e, lt, wn), r);
                    break
                }
                Or(e, lt, wn);
                break;
            case 5:
                Or(e, lt, wn);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return pt(e, Oe()),
    e.callbackNode === n ? cy.bind(null, e) : null
}
function id(e, t) {
    var n = Xo;
    return e.current.memoizedState.isDehydrated && (Hr(e, t).flags |= 256),
    e = dl(e, t),
    e !== 2 && (t = lt,
    lt = n,
    t !== null && ad(t)),
    e
}
function ad(e) {
    lt === null ? lt = e : lt.push.apply(lt, e)
}
function US(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , o = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Jt(o(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Qn(e, t) {
    for (t &= ~Ph,
    t &= ~Dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Qt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Mp(e) {
    if (ie & 6)
        throw Error(P(327));
    Ws();
    var t = Ka(e, 0);
    if (!(t & 1))
        return pt(e, Oe()),
        null;
    var n = dl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Au(e);
        r !== 0 && (t = r,
        n = id(e, r))
    }
    if (n === 1)
        throw n = wi,
        Hr(e, 0),
        Qn(e, t),
        pt(e, Oe()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Or(e, lt, wn),
    pt(e, Oe()),
    null
}
function Ah(e, t) {
    var n = ie;
    ie |= 1;
    try {
        return e(t)
    } finally {
        ie = n,
        ie === 0 && (ao = Oe() + 500,
        Il && br())
    }
}
function Zr(e) {
    rr !== null && rr.tag === 0 && !(ie & 6) && Ws();
    var t = ie;
    ie |= 1;
    var n = Pt.transition
      , r = he;
    try {
        if (Pt.transition = null,
        he = 1,
        e)
            return e()
    } finally {
        he = r,
        Pt.transition = n,
        ie = t,
        !(ie & 6) && br()
    }
}
function Oh() {
    gt = $s.current,
    be($s)
}
function Hr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    gS(n)),
    Ie !== null)
        for (n = Ie.return; n !== null; ) {
            var r = n;
            switch (fh(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Xa();
                break;
            case 3:
                oo(),
                be(ht),
                be(Xe),
                Sh();
                break;
            case 5:
                bh(r);
                break;
            case 4:
                oo();
                break;
            case 13:
                be(_e);
                break;
            case 19:
                be(_e);
                break;
            case 10:
                vh(r.type._context);
                break;
            case 22:
            case 23:
                Oh()
            }
            n = n.return
        }
    if (ze = e,
    Ie = e = hr(e.current, null),
    We = gt = t,
    Fe = 0,
    wi = null,
    Ph = Dl = Xr = 0,
    lt = Xo = null,
    $r !== null) {
        for (t = 0; t < $r.length; t++)
            if (n = $r[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = s,
                    r.next = i
                }
                n.pending = r
            }
        $r = null
    }
    return e
}
function uy(e, t) {
    do {
        var n = Ie;
        try {
            if (gh(),
            Ra.current = al,
            il) {
                for (var r = Ne.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                il = !1
            }
            if (Jr = 0,
            Ue = De = Ne = null,
            Yo = !1,
            vi = 0,
            Th.current = null,
            n === null || n.return === null) {
                Fe = 1,
                wi = t,
                Ie = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , l = n
                  , c = t;
                if (t = We,
                l.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                      , d = l
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue,
                        d.memoizedState = p.memoizedState,
                        d.lanes = p.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var f = Sp(i);
                    if (f !== null) {
                        f.flags &= -257,
                        jp(f, i, l, o, t),
                        f.mode & 1 && bp(o, u, t),
                        t = f,
                        c = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var v = new Set;
                            v.add(c),
                            t.updateQueue = v
                        } else
                            b.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bp(o, u, t),
                            Ih();
                            break e
                        }
                        c = Error(P(426))
                    }
                } else if (ke && l.mode & 1) {
                    var w = Sp(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        jp(w, i, l, o, t),
                        ph(io(c, l));
                        break e
                    }
                }
                o = c = io(c, l),
                Fe !== 4 && (Fe = 2),
                Xo === null ? Xo = [o] : Xo.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var x = Kv(o, c, t);
                        mp(o, x);
                        break e;
                    case 1:
                        l = c;
                        var m = o.type
                          , y = o.stateNode;
                        if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (ur === null || !ur.has(y)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var S = Gv(o, l, t);
                            mp(o, S);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            fy(n)
        } catch (j) {
            t = j,
            Ie === n && n !== null && (Ie = n = n.return);
            continue
        }
        break
    } while (!0)
}
function dy() {
    var e = ll.current;
    return ll.current = al,
    e === null ? al : e
}
function Ih() {
    (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
    ze === null || !(Xr & 268435455) && !(Dl & 268435455) || Qn(ze, We)
}
function dl(e, t) {
    var n = ie;
    ie |= 2;
    var r = dy();
    (ze !== e || We !== t) && (wn = null,
    Hr(e, t));
    do
        try {
            zS();
            break
        } catch (s) {
            uy(e, s)
        }
    while (!0);
    if (gh(),
    ie = n,
    ll.current = r,
    Ie !== null)
        throw Error(P(261));
    return ze = null,
    We = 0,
    Fe
}
function zS() {
    for (; Ie !== null; )
        hy(Ie)
}
function BS() {
    for (; Ie !== null && !f1(); )
        hy(Ie)
}
function hy(e) {
    var t = my(e.alternate, e, gt);
    e.memoizedProps = e.pendingProps,
    t === null ? fy(e) : Ie = t,
    Th.current = null
}
function fy(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = MS(n, t),
            n !== null) {
                n.flags &= 32767,
                Ie = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Fe = 6,
                Ie = null;
                return
            }
        } else if (n = IS(n, t, gt),
        n !== null) {
            Ie = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ie = t;
            return
        }
        Ie = t = e
    } while (t !== null);
    Fe === 0 && (Fe = 5)
}
function Or(e, t, n) {
    var r = he
      , s = Pt.transition;
    try {
        Pt.transition = null,
        he = 1,
        WS(e, t, n, r)
    } finally {
        Pt.transition = s,
        he = r
    }
    return null
}
function WS(e, t, n, r) {
    do
        Ws();
    while (rr !== null);
    if (ie & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (j1(e, o),
    e === ze && (Ie = ze = null,
    We = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0,
    gy(qa, function() {
        return Ws(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Pt.transition,
        Pt.transition = null;
        var i = he;
        he = 1;
        var l = ie;
        ie |= 4,
        Th.current = null,
        $S(e, n),
        ay(n, e),
        cS(Du),
        Ga = !!$u,
        Du = $u = null,
        e.current = n,
        DS(n),
        p1(),
        ie = l,
        he = i,
        Pt.transition = o
    } else
        e.current = n;
    if (ua && (ua = !1,
    rr = e,
    ul = s),
    o = e.pendingLanes,
    o === 0 && (ur = null),
    v1(n.stateNode),
    pt(e, Oe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (cl)
        throw cl = !1,
        e = sd,
        sd = null,
        e;
    return ul & 1 && e.tag !== 0 && Ws(),
    o = e.pendingLanes,
    o & 1 ? e === od ? Zo++ : (Zo = 0,
    od = e) : Zo = 0,
    br(),
    null
}
function Ws() {
    if (rr !== null) {
        var e = Kg(ul)
          , t = Pt.transition
          , n = he;
        try {
            if (Pt.transition = null,
            he = 16 > e ? 16 : e,
            rr === null)
                var r = !1;
            else {
                if (e = rr,
                rr = null,
                ul = 0,
                ie & 6)
                    throw Error(P(331));
                var s = ie;
                for (ie |= 4,
                F = e.current; F !== null; ) {
                    var o = F
                      , i = o.child;
                    if (F.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (F = u; F !== null; ) {
                                    var d = F;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jo(8, d, o)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        F = h;
                                    else
                                        for (; F !== null; ) {
                                            d = F;
                                            var p = d.sibling
                                              , f = d.return;
                                            if (sy(d),
                                            d === u) {
                                                F = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = f,
                                                F = p;
                                                break
                                            }
                                            F = f
                                        }
                                }
                            }
                            var b = o.alternate;
                            if (b !== null) {
                                var v = b.child;
                                if (v !== null) {
                                    b.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null,
                                        v = w
                                    } while (v !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        F = i;
                    else
                        e: for (; F !== null; ) {
                            if (o = F,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jo(9, o, o.return)
                                }
                            var x = o.sibling;
                            if (x !== null) {
                                x.return = o.return,
                                F = x;
                                break e
                            }
                            F = o.return
                        }
                }
                var m = e.current;
                for (F = m; F !== null; ) {
                    i = F;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null)
                        y.return = i,
                        F = y;
                    else
                        e: for (i = m; F !== null; ) {
                            if (l = F,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $l(9, l)
                                    }
                                } catch (j) {
                                    Re(l, l.return, j)
                                }
                            if (l === i) {
                                F = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                F = S;
                                break e
                            }
                            F = l.return
                        }
                }
                if (ie = s,
                br(),
                hn && typeof hn.onPostCommitFiberRoot == "function")
                    try {
                        hn.onPostCommitFiberRoot(Tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            he = n,
            Pt.transition = t
        }
    }
    return !1
}
function Lp(e, t, n) {
    t = io(n, t),
    t = Kv(e, t, 1),
    e = cr(e, t, 1),
    t = st(),
    e !== null && (Ii(e, 1, t),
    pt(e, t))
}
function Re(e, t, n) {
    if (e.tag === 3)
        Lp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Lp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ur === null || !ur.has(r))) {
                    e = io(n, e),
                    e = Gv(t, e, 1),
                    t = cr(t, e, 1),
                    e = st(),
                    t !== null && (Ii(t, 1, e),
                    pt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function VS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = st(),
    e.pingedLanes |= e.suspendedLanes & n,
    ze === e && (We & n) === n && (Fe === 4 || Fe === 3 && (We & 130023424) === We && 500 > Oe() - Rh ? Hr(e, 0) : Ph |= n),
    pt(e, t)
}
function py(e, t) {
    t === 0 && (e.mode & 1 ? (t = ea,
    ea <<= 1,
    !(ea & 130023424) && (ea = 4194304)) : t = 1);
    var n = st();
    e = Tn(e, t),
    e !== null && (Ii(e, t, n),
    pt(e, n))
}
function HS(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    py(e, n)
}
function qS(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    py(e, n)
}
var my;
my = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ht.current)
            dt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return dt = !1,
                OS(e, t, n);
            dt = !!(e.flags & 131072)
        }
    else
        dt = !1,
        ke && t.flags & 1048576 && xv(t, tl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Oa(e, t),
        e = t.pendingProps;
        var s = no(t, Xe.current);
        Bs(t, n),
        s = kh(null, t, r, e, s, n);
        var o = _h();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ft(r) ? (o = !0,
        Za(t)) : o = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        xh(t),
        s.updater = Ll,
        t.stateNode = s,
        s._reactInternals = t,
        Ku(t, r, e, n),
        t = Yu(null, t, r, !0, o, n)) : (t.tag = 0,
        ke && o && hh(t),
        tt(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Oa(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = GS(r),
            e = Bt(r, e),
            s) {
            case 0:
                t = Qu(null, t, r, e, n);
                break e;
            case 1:
                t = Np(null, t, r, e, n);
                break e;
            case 11:
                t = kp(null, t, r, e, n);
                break e;
            case 14:
                t = _p(null, t, r, Bt(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Bt(r, s),
        Qu(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Bt(r, s),
        Np(e, t, r, s, n);
    case 3:
        e: {
            if (Xv(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            o = t.memoizedState,
            s = o.element,
            _v(e, t),
            sl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    s = io(Error(P(423)), t),
                    t = Cp(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = io(Error(P(424)), t),
                    t = Cp(e, t, r, n, s);
                    break e
                } else
                    for (yt = lr(t.stateNode.containerInfo.firstChild),
                    xt = t,
                    ke = !0,
                    Gt = null,
                    n = jv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ro(),
                r === s) {
                    t = Pn(e, t, n);
                    break e
                }
                tt(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Nv(t),
        e === null && Vu(t),
        r = t.type,
        s = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = s.children,
        Fu(r, s) ? i = null : o !== null && Fu(r, o) && (t.flags |= 32),
        Jv(e, t),
        tt(e, t, i, n),
        t.child;
    case 6:
        return e === null && Vu(t),
        null;
    case 13:
        return Zv(e, t, n);
    case 4:
        return wh(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = so(t, null, r, n) : tt(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Bt(r, s),
        kp(e, t, r, s, n);
    case 7:
        return tt(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return tt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return tt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            o = t.memoizedProps,
            i = s.value,
            ge(nl, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Jt(o.value, i)) {
                    if (o.children === s.children && !ht.current) {
                        t = Pn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            i = o.child;
                            for (var c = l.firstContext; c !== null; ) {
                                if (c.context === r) {
                                    if (o.tag === 1) {
                                        c = Nn(-1, n & -n),
                                        c.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? c.next = c : (c.next = d.next,
                                            d.next = c),
                                            u.pending = c
                                        }
                                    }
                                    o.lanes |= n,
                                    c = o.alternate,
                                    c !== null && (c.lanes |= n),
                                    Hu(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(P(341));
                            i.lanes |= n,
                            l = i.alternate,
                            l !== null && (l.lanes |= n),
                            Hu(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            tt(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Bs(t, n),
        s = At(s),
        r = r(s),
        t.flags |= 1,
        tt(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = Bt(r, t.pendingProps),
        s = Bt(r.type, s),
        _p(e, t, r, s, n);
    case 15:
        return Qv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Bt(r, s),
        Oa(e, t),
        t.tag = 1,
        ft(r) ? (e = !0,
        Za(t)) : e = !1,
        Bs(t, n),
        qv(t, r, s),
        Ku(t, r, s, n),
        Yu(null, t, r, !0, e, n);
    case 19:
        return ey(e, t, n);
    case 22:
        return Yv(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function gy(e, t) {
    return Wg(e, t)
}
function KS(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Tt(e, t, n, r) {
    return new KS(e,t,n,r)
}
function Mh(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function GS(e) {
    if (typeof e == "function")
        return Mh(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === eh)
            return 11;
        if (e === th)
            return 14
    }
    return 2
}
function hr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Tt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function La(e, t, n, r, s, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Mh(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Cs:
            return qr(n.children, s, o, t);
        case Zd:
            i = 8,
            s |= 8;
            break;
        case vu:
            return e = Tt(12, n, t, s | 2),
            e.elementType = vu,
            e.lanes = o,
            e;
        case yu:
            return e = Tt(13, n, t, s),
            e.elementType = yu,
            e.lanes = o,
            e;
        case xu:
            return e = Tt(19, n, t, s),
            e.elementType = xu,
            e.lanes = o,
            e;
        case Ng:
            return Fl(n, s, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case kg:
                    i = 10;
                    break e;
                case _g:
                    i = 9;
                    break e;
                case eh:
                    i = 11;
                    break e;
                case th:
                    i = 14;
                    break e;
                case qn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = Tt(i, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function qr(e, t, n, r) {
    return e = Tt(7, e, r, t),
    e.lanes = n,
    e
}
function Fl(e, t, n, r) {
    return e = Tt(22, e, r, t),
    e.elementType = Ng,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Vc(e, t, n) {
    return e = Tt(6, e, null, t),
    e.lanes = n,
    e
}
function Hc(e, t, n) {
    return t = Tt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function QS(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = _c(0),
    this.expirationTimes = _c(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = _c(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Lh(e, t, n, r, s, o, i, l, c) {
    return e = new QS(e,t,n,l,c),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Tt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    xh(o),
    e
}
function YS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ns,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function vy(e) {
    if (!e)
        return gr;
    e = e._reactInternals;
    e: {
        if (os(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ft(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ft(n))
            return vv(e, n, t)
    }
    return t
}
function yy(e, t, n, r, s, o, i, l, c) {
    return e = Lh(n, r, !0, e, s, o, i, l, c),
    e.context = vy(null),
    n = e.current,
    r = st(),
    s = dr(n),
    o = Nn(r, s),
    o.callback = t ?? null,
    cr(n, o, s),
    e.current.lanes = s,
    Ii(e, s, r),
    pt(e, r),
    e
}
function Ul(e, t, n, r) {
    var s = t.current
      , o = st()
      , i = dr(s);
    return n = vy(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Nn(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = cr(s, t, i),
    e !== null && (Yt(e, s, i, o),
    Pa(e, s, i)),
    i
}
function hl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function $p(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function $h(e, t) {
    $p(e, t),
    (e = e.alternate) && $p(e, t)
}
function JS() {
    return null
}
var xy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Dh(e) {
    this._internalRoot = e
}
zl.prototype.render = Dh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    Ul(e, t, null, null)
}
;
zl.prototype.unmount = Dh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zr(function() {
            Ul(null, e, null, null)
        }),
        t[En] = null
    }
}
;
function zl(e) {
    this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Yg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++)
            ;
        Gn.splice(n, 0, e),
        n === 0 && Xg(e)
    }
}
;
function Fh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Bl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Dp() {}
function XS(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = hl(i);
                o.call(u)
            }
        }
        var i = yy(t, r, e, 0, null, !1, !1, "", Dp);
        return e._reactRootContainer = i,
        e[En] = i.current,
        hi(e.nodeType === 8 ? e.parentNode : e),
        Zr(),
        i
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = hl(c);
            l.call(u)
        }
    }
    var c = Lh(e, 0, !1, null, null, !1, !1, "", Dp);
    return e._reactRootContainer = c,
    e[En] = c.current,
    hi(e.nodeType === 8 ? e.parentNode : e),
    Zr(function() {
        Ul(t, c, n, r)
    }),
    c
}
function Wl(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof s == "function") {
            var l = s;
            s = function() {
                var c = hl(i);
                l.call(c)
            }
        }
        Ul(t, i, e, s)
    } else
        i = XS(n, t, e, s, r);
    return hl(i)
}
Gg = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Uo(t.pendingLanes);
            n !== 0 && (sh(t, n | 1),
            pt(t, Oe()),
            !(ie & 6) && (ao = Oe() + 500,
            br()))
        }
        break;
    case 13:
        Zr(function() {
            var r = Tn(e, 1);
            if (r !== null) {
                var s = st();
                Yt(r, e, 1, s)
            }
        }),
        $h(e, 1)
    }
}
;
oh = function(e) {
    if (e.tag === 13) {
        var t = Tn(e, 134217728);
        if (t !== null) {
            var n = st();
            Yt(t, e, 134217728, n)
        }
        $h(e, 134217728)
    }
}
;
Qg = function(e) {
    if (e.tag === 13) {
        var t = dr(e)
          , n = Tn(e, t);
        if (n !== null) {
            var r = st();
            Yt(n, e, t, r)
        }
        $h(e, t)
    }
}
;
Yg = function() {
    return he
}
;
Jg = function(e, t) {
    var n = he;
    try {
        return he = e,
        t()
    } finally {
        he = n
    }
}
;
Tu = function(e, t, n) {
    switch (t) {
    case "input":
        if (Su(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = Ol(r);
                    if (!s)
                        throw Error(P(90));
                    Eg(r),
                    Su(r, s)
                }
            }
        }
        break;
    case "textarea":
        Pg(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ds(e, !!n.multiple, t, !1)
    }
}
;
$g = Ah;
Dg = Zr;
var ZS = {
    usingClientEntryPoint: !1,
    Events: [Li, Rs, Ol, Mg, Lg, Ah]
}
  , Io = {
    findFiberByHostInstance: Lr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , ej = {
    bundleType: Io.bundleType,
    version: Io.version,
    rendererPackageName: Io.rendererPackageName,
    rendererConfig: Io.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: On.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zg(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Io.findFiberByHostInstance || JS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!da.isDisabled && da.supportsFiber)
        try {
            Tl = da.inject(ej),
            hn = da
        } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ZS;
St.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fh(t))
        throw Error(P(200));
    return YS(e, t, null, n)
}
;
St.createRoot = function(e, t) {
    if (!Fh(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , s = xy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Lh(e, 1, !1, null, null, n, !1, r, s),
    e[En] = t.current,
    hi(e.nodeType === 8 ? e.parentNode : e),
    new Dh(t)
}
;
St.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = zg(t),
    e = e === null ? null : e.stateNode,
    e
}
;
St.flushSync = function(e) {
    return Zr(e)
}
;
St.hydrate = function(e, t, n) {
    if (!Bl(t))
        throw Error(P(200));
    return Wl(null, e, t, !0, n)
}
;
St.hydrateRoot = function(e, t, n) {
    if (!Fh(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , o = ""
      , i = xy;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = yy(t, null, e, 1, n ?? null, s, !1, o, i),
    e[En] = t.current,
    hi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new zl(t)
}
;
St.render = function(e, t, n) {
    if (!Bl(t))
        throw Error(P(200));
    return Wl(null, e, t, !1, n)
}
;
St.unmountComponentAtNode = function(e) {
    if (!Bl(e))
        throw Error(P(40));
    return e._reactRootContainer ? (Zr(function() {
        Wl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[En] = null
        })
    }),
    !0) : !1
}
;
St.unstable_batchedUpdates = Ah;
St.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Bl(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return Wl(e, t, n, !1, r)
}
;
St.version = "18.3.1-next-f1338f8080-20240426";
function wy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy)
        } catch (e) {
            console.error(e)
        }
}
wy(),
wg.exports = St;
var is = wg.exports;
const by = lg(is);
var Sy, Fp = is;
Sy = Fp.createRoot,
Fp.hydrateRoot;
const tj = 1
  , nj = 1e6;
let qc = 0;
function rj() {
    return qc = (qc + 1) % Number.MAX_SAFE_INTEGER,
    qc.toString()
}
const Kc = new Map
  , Up = e => {
    if (Kc.has(e))
        return;
    const t = setTimeout( () => {
        Kc.delete(e),
        ei({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , nj);
    Kc.set(e, t)
}
  , sj = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, tj)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Up(n) : e.toasts.forEach(r => {
                Up(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , $a = [];
let Da = {
    toasts: []
};
function ei(e) {
    Da = sj(Da, e),
    $a.forEach(t => {
        t(Da)
    }
    )
}
function ld({...e}) {
    const t = rj()
      , n = s => ei({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: t
        }
    })
      , r = () => ei({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ei({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: s => {
                s || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Di() {
    const [e,t] = g.useState(Da);
    return g.useEffect( () => ($a.push(t),
    () => {
        const n = $a.indexOf(t);
        n > -1 && $a.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: ld,
        dismiss: n => ei({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function G(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        n === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function zp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function jy(...e) {
    return t => {
        let n = !1;
        const r = e.map(s => {
            const o = zp(s, t);
            return !n && typeof o == "function" && (n = !0),
            o
        }
        );
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const o = r[s];
                    typeof o == "function" ? o() : zp(e[s], null)
                }
            }
    }
}
function Se(...e) {
    return g.useCallback(jy(...e), e)
}
function In(e, t=[]) {
    let n = [];
    function r(o, i) {
        const l = g.createContext(i)
          , c = n.length;
        n = [...n, i];
        const u = h => {
            var x;
            const {scope: p, children: f, ...b} = h
              , v = ((x = p == null ? void 0 : p[e]) == null ? void 0 : x[c]) || l
              , w = g.useMemo( () => b, Object.values(b));
            return a.jsx(v.Provider, {
                value: w,
                children: f
            })
        }
        ;
        u.displayName = o + "Provider";
        function d(h, p) {
            var v;
            const f = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[c]) || l
              , b = g.useContext(f);
            if (b)
                return b;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return [u, d]
    }
    const s = () => {
        const o = n.map(i => g.createContext(i));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || o;
            return g.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return s.scopeName = e,
    [r, oj(s, ...t)]
}
function oj(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (l, {useScope: c, scopeName: u}) => {
                const h = c(o)[`__scope${u}`];
                return {
                    ...l,
                    ...h
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function bi(e) {
    const t = aj(e)
      , n = g.forwardRef( (r, s) => {
        const {children: o, ...i} = r
          , l = g.Children.toArray(o)
          , c = l.find(cj);
        if (c) {
            const u = c.props.children
              , d = l.map(h => h === c ? g.Children.count(u) > 1 ? g.Children.only(null) : g.isValidElement(u) ? u.props.children : null : h);
            return a.jsx(t, {
                ...i,
                ref: s,
                children: g.isValidElement(u) ? g.cloneElement(u, void 0, d) : null
            })
        }
        return a.jsx(t, {
            ...i,
            ref: s,
            children: o
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var ij = bi("Slot");
function aj(e) {
    const t = g.forwardRef( (n, r) => {
        const {children: s, ...o} = n;
        if (g.isValidElement(s)) {
            const i = dj(s)
              , l = uj(o, s.props);
            return s.type !== g.Fragment && (l.ref = r ? jy(r, i) : i),
            g.cloneElement(s, l)
        }
        return g.Children.count(s) > 1 ? g.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var ky = Symbol("radix.slottable");
function lj(e) {
    const t = ({children: n}) => a.jsx(a.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = ky,
    t
}
function cj(e) {
    return g.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === ky
}
function uj(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const s = e[r]
          , o = t[r];
        /^on[A-Z]/.test(r) ? s && o ? n[r] = (...l) => {
            const c = o(...l);
            return s(...l),
            c
        }
        : s && (n[r] = s) : r === "style" ? n[r] = {
            ...s,
            ...o
        } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function dj(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Uh(e) {
    const t = e + "CollectionProvider"
      , [n,r] = In(t)
      , [s,o] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = v => {
        const {scope: w, children: x} = v
          , m = O.useRef(null)
          , y = O.useRef(new Map).current;
        return a.jsx(s, {
            scope: w,
            itemMap: y,
            collectionRef: m,
            children: x
        })
    }
    ;
    i.displayName = t;
    const l = e + "CollectionSlot"
      , c = bi(l)
      , u = O.forwardRef( (v, w) => {
        const {scope: x, children: m} = v
          , y = o(l, x)
          , S = Se(w, y.collectionRef);
        return a.jsx(c, {
            ref: S,
            children: m
        })
    }
    );
    u.displayName = l;
    const d = e + "CollectionItemSlot"
      , h = "data-radix-collection-item"
      , p = bi(d)
      , f = O.forwardRef( (v, w) => {
        const {scope: x, children: m, ...y} = v
          , S = O.useRef(null)
          , j = Se(w, S)
          , k = o(d, x);
        return O.useEffect( () => (k.itemMap.set(S, {
            ref: S,
            ...y
        }),
        () => void k.itemMap.delete(S))),
        a.jsx(p, {
            [h]: "",
            ref: j,
            children: m
        })
    }
    );
    f.displayName = d;
    function b(v) {
        const w = o(e + "CollectionConsumer", v);
        return O.useCallback( () => {
            const m = w.collectionRef.current;
            if (!m)
                return [];
            const y = Array.from(m.querySelectorAll(`[${h}]`));
            return Array.from(w.itemMap.values()).sort( (k, _) => y.indexOf(k.ref.current) - y.indexOf(_.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: f
    }, b, r]
}
var hj = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ne = hj.reduce( (e, t) => {
    const n = bi(`Primitive.${t}`)
      , r = g.forwardRef( (s, o) => {
        const {asChild: i, ...l} = s
          , c = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(c, {
            ...l,
            ref: o
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function _y(e, t) {
    e && is.flushSync( () => e.dispatchEvent(t))
}
function It(e) {
    const t = g.useRef(e);
    return g.useEffect( () => {
        t.current = e
    }
    ),
    g.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function fj(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = It(e);
    g.useEffect( () => {
        const r = s => {
            s.key === "Escape" && n(s)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var pj = "DismissableLayer", cd = "dismissableLayer.update", mj = "dismissableLayer.pointerDownOutside", gj = "dismissableLayer.focusOutside", Bp, Ny = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Vl = g.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: o, onInteractOutside: i, onDismiss: l, ...c} = e
      , u = g.useContext(Ny)
      , [d,h] = g.useState(null)
      , p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = g.useState({})
      , b = Se(t, _ => h(_))
      , v = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , x = v.indexOf(w)
      , m = d ? v.indexOf(d) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = m >= x
      , j = yj(_ => {
        const N = _.target
          , A = [...u.branches].some(R => R.contains(N));
        !S || A || (s == null || s(_),
        i == null || i(_),
        _.defaultPrevented || l == null || l())
    }
    , p)
      , k = xj(_ => {
        const N = _.target;
        [...u.branches].some(R => R.contains(N)) || (o == null || o(_),
        i == null || i(_),
        _.defaultPrevented || l == null || l())
    }
    , p);
    return fj(_ => {
        m === u.layers.size - 1 && (r == null || r(_),
        !_.defaultPrevented && l && (_.preventDefault(),
        l()))
    }
    , p),
    g.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bp = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Wp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Bp)
            }
    }
    , [d, p, n, u]),
    g.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Wp())
    }
    , [d, u]),
    g.useEffect( () => {
        const _ = () => f({});
        return document.addEventListener(cd, _),
        () => document.removeEventListener(cd, _)
    }
    , []),
    a.jsx(ne.div, {
        ...c,
        ref: b,
        style: {
            pointerEvents: y ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: G(e.onPointerDownCapture, j.onPointerDownCapture)
    })
}
);
Vl.displayName = pj;
var vj = "DismissableLayerBranch"
  , Cy = g.forwardRef( (e, t) => {
    const n = g.useContext(Ny)
      , r = g.useRef(null)
      , s = Se(t, r);
    return g.useEffect( () => {
        const o = r.current;
        if (o)
            return n.branches.add(o),
            () => {
                n.branches.delete(o)
            }
    }
    , [n.branches]),
    a.jsx(ne.div, {
        ...e,
        ref: s
    })
}
);
Cy.displayName = vj;
function yj(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = It(e)
      , r = g.useRef(!1)
      , s = g.useRef( () => {}
    );
    return g.useEffect( () => {
        const o = l => {
            if (l.target && !r.current) {
                let c = function() {
                    Ey(mj, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = c,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : c()
            } else
                t.removeEventListener("click", s.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", o)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", o),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function xj(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = It(e)
      , r = g.useRef(!1);
    return g.useEffect( () => {
        const s = o => {
            o.target && !r.current && Ey(gj, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Wp() {
    const e = new CustomEvent(cd);
    document.dispatchEvent(e)
}
function Ey(e, t, n, {discrete: r}) {
    const s = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? _y(s, o) : s.dispatchEvent(o)
}
var wj = Vl
  , bj = Cy
  , He = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {}
  , Sj = "Portal"
  , zh = g.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [s,o] = g.useState(!1);
    He( () => o(!0), []);
    const i = n || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return i ? by.createPortal(a.jsx(ne.div, {
        ...r,
        ref: t
    }), i) : null
}
);
zh.displayName = Sj;
function jj(e, t) {
    return g.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Fi = e => {
    const {present: t, children: n} = e
      , r = kj(t)
      , s = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n)
      , o = Se(r.ref, _j(s));
    return typeof n == "function" || r.isPresent ? g.cloneElement(s, {
        ref: o
    }) : null
}
;
Fi.displayName = "Presence";
function kj(e) {
    const [t,n] = g.useState()
      , r = g.useRef(null)
      , s = g.useRef(e)
      , o = g.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [l,c] = jj(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect( () => {
        const u = ha(r.current);
        o.current = l === "mounted" ? u : "none"
    }
    , [l]),
    He( () => {
        const u = r.current
          , d = s.current;
        if (d !== e) {
            const p = o.current
              , f = ha(u);
            e ? c("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && p !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, c]),
    He( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , h = f => {
                const v = ha(r.current).includes(f.animationName);
                if (f.target === t && v && (c("ANIMATION_END"),
                !s.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , p = f => {
                f.target === t && (o.current = ha(r.current))
            }
            ;
            return t.addEventListener("animationstart", p),
            t.addEventListener("animationcancel", h),
            t.addEventListener("animationend", h),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", p),
                t.removeEventListener("animationcancel", h),
                t.removeEventListener("animationend", h)
            }
        } else
            c("ANIMATION_END")
    }
    , [t, c]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: g.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ha(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function _j(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Nj = Qd[" useInsertionEffect ".trim().toString()] || He;
function es({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [s,o,i] = Cj({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , c = l ? e : s;
    {
        const d = g.useRef(e !== void 0);
        g.useEffect( () => {
            const h = d.current;
            h !== l && console.warn(`${r} is changing from ${h ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = l
        }
        , [l, r])
    }
    const u = g.useCallback(d => {
        var h;
        if (l) {
            const p = Ej(d) ? d(e) : d;
            p !== e && ((h = i.current) == null || h.call(i, p))
        } else
            o(d)
    }
    , [l, e, o, i]);
    return [c, u]
}
function Cj({defaultProp: e, onChange: t}) {
    const [n,r] = g.useState(e)
      , s = g.useRef(n)
      , o = g.useRef(t);
    return Nj( () => {
        o.current = t
    }
    , [t]),
    g.useEffect( () => {
        var i;
        s.current !== n && ((i = o.current) == null || i.call(o, n),
        s.current = n)
    }
    , [n, s]),
    [n, r, o]
}
function Ej(e) {
    return typeof e == "function"
}
var Ty = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Tj = "VisuallyHidden"
  , Hl = g.forwardRef( (e, t) => a.jsx(ne.span, {
    ...e,
    ref: t,
    style: {
        ...Ty,
        ...e.style
    }
}));
Hl.displayName = Tj;
var Pj = Hl
  , Bh = "ToastProvider"
  , [Wh,Rj,Aj] = Uh("Toast")
  , [Py,WA] = In("Toast", [Aj])
  , [Oj,ql] = Py(Bh)
  , Ry = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: s="right", swipeThreshold: o=50, children: i} = e
      , [l,c] = g.useState(null)
      , [u,d] = g.useState(0)
      , h = g.useRef(!1)
      , p = g.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Bh}\`. Expected non-empty \`string\`.`),
    a.jsx(Wh.Provider, {
        scope: t,
        children: a.jsx(Oj, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: s,
            swipeThreshold: o,
            toastCount: u,
            viewport: l,
            onViewportChange: c,
            onToastAdd: g.useCallback( () => d(f => f + 1), []),
            onToastRemove: g.useCallback( () => d(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: h,
            isClosePausedRef: p,
            children: i
        })
    })
}
;
Ry.displayName = Bh;
var Ay = "ToastViewport"
  , Ij = ["F8"]
  , ud = "toast.viewportPause"
  , dd = "toast.viewportResume"
  , Oy = g.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Ij, label: s="Notifications ({hotkey})", ...o} = e
      , i = ql(Ay, n)
      , l = Rj(n)
      , c = g.useRef(null)
      , u = g.useRef(null)
      , d = g.useRef(null)
      , h = g.useRef(null)
      , p = Se(t, h, i.onViewportChange)
      , f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = i.toastCount > 0;
    g.useEffect( () => {
        const w = x => {
            var y;
            r.length !== 0 && r.every(S => x[S] || x.code === S) && ((y = h.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    g.useEffect( () => {
        const w = c.current
          , x = h.current;
        if (b && w && x) {
            const m = () => {
                if (!i.isClosePausedRef.current) {
                    const k = new CustomEvent(ud);
                    x.dispatchEvent(k),
                    i.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (i.isClosePausedRef.current) {
                    const k = new CustomEvent(dd);
                    x.dispatchEvent(k),
                    i.isClosePausedRef.current = !1
                }
            }
              , S = k => {
                !w.contains(k.relatedTarget) && y()
            }
              , j = () => {
                w.contains(document.activeElement) || y()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", j),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", j),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [b, i.isClosePausedRef]);
    const v = g.useCallback( ({tabbingDirection: w}) => {
        const m = l().map(y => {
            const S = y.ref.current
              , j = [S, ...Kj(S)];
            return w === "forwards" ? j : j.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [l]);
    return g.useEffect( () => {
        const w = h.current;
        if (w) {
            const x = m => {
                var j, k, _;
                const y = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !y) {
                    const N = document.activeElement
                      , A = m.shiftKey;
                    if (m.target === w && A) {
                        (j = u.current) == null || j.focus();
                        return
                    }
                    const M = v({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , V = M.findIndex(I => I === N);
                    Gc(M.slice(V + 1)) ? m.preventDefault() : A ? (k = u.current) == null || k.focus() : (_ = d.current) == null || _.focus()
                }
            }
            ;
            return w.addEventListener("keydown", x),
            () => w.removeEventListener("keydown", x)
        }
    }
    , [l, v]),
    a.jsxs(bj, {
        ref: c,
        role: "region",
        "aria-label": s.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && a.jsx(hd, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "forwards"
                });
                Gc(w)
            }
        }), a.jsx(Wh.Slot, {
            scope: n,
            children: a.jsx(ne.ol, {
                tabIndex: -1,
                ...o,
                ref: p
            })
        }), b && a.jsx(hd, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "backwards"
                });
                Gc(w)
            }
        })]
    })
}
);
Oy.displayName = Ay;
var Iy = "ToastFocusProxy"
  , hd = g.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...s} = e
      , o = ql(Iy, n);
    return a.jsx(Hl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const l = i.relatedTarget;
            !((u = o.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
hd.displayName = Iy;
var Ui = "Toast"
  , Mj = "toast.swipeStart"
  , Lj = "toast.swipeMove"
  , $j = "toast.swipeCancel"
  , Dj = "toast.swipeEnd"
  , My = g.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: s, onOpenChange: o, ...i} = e
      , [l,c] = es({
        prop: r,
        defaultProp: s ?? !0,
        onChange: o,
        caller: Ui
    });
    return a.jsx(Fi, {
        present: n || l,
        children: a.jsx(zj, {
            open: l,
            ...i,
            ref: t,
            onClose: () => c(!1),
            onPause: It(e.onPause),
            onResume: It(e.onResume),
            onSwipeStart: G(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: G(e.onSwipeMove, u => {
                const {x: d, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${h}px`)
            }
            ),
            onSwipeCancel: G(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: G(e.onSwipeEnd, u => {
                const {x: d, y: h} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${h}px`),
                c(!1)
            }
            )
        })
    })
}
);
My.displayName = Ui;
var [Fj,Uj] = Py(Ui, {
    onClose() {}
})
  , zj = g.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: s, open: o, onClose: i, onEscapeKeyDown: l, onPause: c, onResume: u, onSwipeStart: d, onSwipeMove: h, onSwipeCancel: p, onSwipeEnd: f, ...b} = e
      , v = ql(Ui, n)
      , [w,x] = g.useState(null)
      , m = Se(t, I => x(I))
      , y = g.useRef(null)
      , S = g.useRef(null)
      , j = s || v.duration
      , k = g.useRef(0)
      , _ = g.useRef(j)
      , N = g.useRef(0)
      , {onToastAdd: A, onToastRemove: R} = v
      , U = It( () => {
        var q;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((q = v.viewport) == null || q.focus()),
        i()
    }
    )
      , M = g.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(N.current),
        k.current = new Date().getTime(),
        N.current = window.setTimeout(U, I))
    }
    , [U]);
    g.useEffect( () => {
        const I = v.viewport;
        if (I) {
            const q = () => {
                M(_.current),
                u == null || u()
            }
              , D = () => {
                const W = new Date().getTime() - k.current;
                _.current = _.current - W,
                window.clearTimeout(N.current),
                c == null || c()
            }
            ;
            return I.addEventListener(ud, D),
            I.addEventListener(dd, q),
            () => {
                I.removeEventListener(ud, D),
                I.removeEventListener(dd, q)
            }
        }
    }
    , [v.viewport, j, c, u, M]),
    g.useEffect( () => {
        o && !v.isClosePausedRef.current && M(j)
    }
    , [o, j, v.isClosePausedRef, M]),
    g.useEffect( () => (A(),
    () => R()), [A, R]);
    const V = g.useMemo( () => w ? By(w) : null, [w]);
    return v.viewport ? a.jsxs(a.Fragment, {
        children: [V && a.jsx(Bj, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: V
        }), a.jsx(Fj, {
            scope: n,
            onClose: U,
            children: is.createPortal(a.jsx(Wh.ItemSlot, {
                scope: n,
                children: a.jsx(wj, {
                    asChild: !0,
                    onEscapeKeyDown: G(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || U(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: a.jsx(ne.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...b,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: G(e.onKeyDown, I => {
                            I.key === "Escape" && (l == null || l(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            U()))
                        }
                        ),
                        onPointerDown: G(e.onPointerDown, I => {
                            I.button === 0 && (y.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: G(e.onPointerMove, I => {
                            if (!y.current)
                                return;
                            const q = I.clientX - y.current.x
                              , D = I.clientY - y.current.y
                              , W = !!S.current
                              , C = ["left", "right"].includes(v.swipeDirection)
                              , T = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , L = C ? T(0, q) : 0
                              , K = C ? 0 : T(0, D)
                              , z = I.pointerType === "touch" ? 10 : 2
                              , ee = {
                                x: L,
                                y: K
                            }
                              , Q = {
                                originalEvent: I,
                                delta: ee
                            };
                            W ? (S.current = ee,
                            fa(Lj, h, Q, {
                                discrete: !1
                            })) : Vp(ee, v.swipeDirection, z) ? (S.current = ee,
                            fa(Mj, d, Q, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(q) > z || Math.abs(D) > z) && (y.current = null)
                        }
                        ),
                        onPointerUp: G(e.onPointerUp, I => {
                            const q = S.current
                              , D = I.target;
                            if (D.hasPointerCapture(I.pointerId) && D.releasePointerCapture(I.pointerId),
                            S.current = null,
                            y.current = null,
                            q) {
                                const W = I.currentTarget
                                  , C = {
                                    originalEvent: I,
                                    delta: q
                                };
                                Vp(q, v.swipeDirection, v.swipeThreshold) ? fa(Dj, f, C, {
                                    discrete: !0
                                }) : fa($j, p, C, {
                                    discrete: !0
                                }),
                                W.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , Bj = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , s = ql(Ui, t)
      , [o,i] = g.useState(!1)
      , [l,c] = g.useState(!1);
    return Hj( () => i(!0)),
    g.useEffect( () => {
        const u = window.setTimeout( () => c(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : a.jsx(zh, {
        asChild: !0,
        children: a.jsx(Hl, {
            ...r,
            children: o && a.jsxs(a.Fragment, {
                children: [s.label, " ", n]
            })
        })
    })
}
  , Wj = "ToastTitle"
  , Ly = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
Ly.displayName = Wj;
var Vj = "ToastDescription"
  , $y = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
$y.displayName = Vj;
var Dy = "ToastAction"
  , Fy = g.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? a.jsx(zy, {
        altText: n,
        asChild: !0,
        children: a.jsx(Vh, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Dy}\`. Expected non-empty \`string\`.`),
    null)
}
);
Fy.displayName = Dy;
var Uy = "ToastClose"
  , Vh = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , s = Uj(Uy, n);
    return a.jsx(zy, {
        asChild: !0,
        children: a.jsx(ne.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: G(e.onClick, s.onClose)
        })
    })
}
);
Vh.displayName = Uy;
var zy = g.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...s} = e;
    return a.jsx(ne.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t
    })
}
);
function By(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        qj(r)) {
            const s = r.ariaHidden || r.hidden || r.style.display === "none"
              , o = r.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (o) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...By(r))
        }
    }
    ),
    t
}
function fa(e, t, n, {discrete: r}) {
    const s = n.originalEvent.currentTarget
      , o = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? _y(s, o) : s.dispatchEvent(o)
}
var Vp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , s = Math.abs(e.y)
      , o = r > s;
    return t === "left" || t === "right" ? o && r > n : !o && s > n
}
;
function Hj(e= () => {}
) {
    const t = It(e);
    He( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function qj(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Kj(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Gc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Gj = Ry
  , Wy = Oy
  , Vy = My
  , Hy = Ly
  , qy = $y
  , Ky = Fy
  , Gy = Vh;
function Qy(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (n = Qy(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Yy() {
    for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = Qy(e)) && (r && (r += " "),
        r += t);
    return r
}
const Hp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , qp = Yy
  , Kl = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return qp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: s, defaultVariants: o} = t
      , i = Object.keys(s).map(u => {
        const d = n == null ? void 0 : n[u]
          , h = o == null ? void 0 : o[u];
        if (d === null)
            return null;
        const p = Hp(d) || Hp(h);
        return s[u][p]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[h,p] = d;
        return p === void 0 || (u[h] = p),
        u
    }
    , {})
      , c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: h, className: p, ...f} = d;
        return Object.entries(f).every(b => {
            let[v,w] = b;
            return Array.isArray(w) ? w.includes({
                ...o,
                ...l
            }[v]) : {
                ...o,
                ...l
            }[v] === w
        }
        ) ? [...u, h, p] : u
    }
    , []);
    return qp(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qj = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Jy = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yj = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jj = g.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: s="", children: o, iconNode: i, ...l}, c) => g.createElement("svg", {
    ref: c,
    ...Yj,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Jy("lucide", s),
    ...l
}, [...i.map( ([u,d]) => g.createElement(u, d)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (e, t) => {
    const n = g.forwardRef( ({className: r, ...s}, o) => g.createElement(Jj, {
        ref: o,
        iconNode: t,
        className: Jy(`lucide-${Qj(e)}`, r),
        ...s
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = X("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xj = X("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = X("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zj = X("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = X("Briefcase", [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = X("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = X("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = X("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = X("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = X("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = X("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = X("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = X("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = X("Cpu", [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = X("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = X("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = X("Flag", [["path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
    key: "i9b6wo"
}], ["line", {
    x1: "4",
    x2: "4",
    y1: "22",
    y2: "15",
    key: "1cm3nv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = X("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = X("Gauge", [["path", {
    d: "m12 14 4-4",
    key: "9kzdfg"
}], ["path", {
    d: "M3.34 19a10 10 0 1 1 17.32 0",
    key: "19p75a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = X("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = X("GraduationCap", [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = X("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = X("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s0 = X("Lightbulb", [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = X("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = X("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = X("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = X("Medal", [["path", {
    d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
    key: "143lza"
}], ["path", {
    d: "M11 12 5.12 2.2",
    key: "qhuxz6"
}], ["path", {
    d: "m13 12 5.88-9.8",
    key: "hbye0f"
}], ["path", {
    d: "M8 7h8",
    key: "i86dvs"
}], ["circle", {
    cx: "12",
    cy: "17",
    r: "5",
    key: "qbz8iq"
}], ["path", {
    d: "M12 18v-2h-.5",
    key: "fawc4q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = X("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = X("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = X("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = X("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = X("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = X("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = X("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = X("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = X("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = X("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = X("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = X("Wrench", [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = X("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = X("Youtube", [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = X("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Qh = "-"
  , vk = e => {
    const t = xk(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const l = i.split(Qh);
            return l[0] === "" && l.length !== 1 && l.shift(),
            a0(l, t) || yk(i)
        }
        ,
        getConflictingClassGroupIds: (i, l) => {
            const c = n[i] || [];
            return l && r[i] ? [...c, ...r[i]] : c
        }
    }
}
  , a0 = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , s = r ? a0(e.slice(1), r) : void 0;
    if (s)
        return s;
    if (t.validators.length === 0)
        return;
    const o = e.join(Qh);
    return (i = t.validators.find( ({validator: l}) => l(o))) == null ? void 0 : i.classGroupId
}
  , Qp = /^\[(.+)\]$/
  , yk = e => {
    if (Qp.test(e)) {
        const t = Qp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , xk = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return bk(Object.entries(e.classGroups), n).forEach( ([o,i]) => {
        fd(i, r, o, t)
    }
    ),
    r
}
  , fd = (e, t, n, r) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const o = s === "" ? t : Yp(t, s);
            o.classGroupId = n;
            return
        }
        if (typeof s == "function") {
            if (wk(s)) {
                fd(s(r), t, n, r);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: n
            });
            return
        }
        Object.entries(s).forEach( ([o,i]) => {
            fd(i, Yp(t, o), n, r)
        }
        )
    }
    )
}
  , Yp = (e, t) => {
    let n = e;
    return t.split(Qh).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , wk = e => e.isThemeGetter
  , bk = (e, t) => t ? e.map( ([n,r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([i,l]) => [t + i, l])) : o);
    return [n, s]
}
) : e
  , Sk = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const s = (o, i) => {
        n.set(o, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let i = n.get(o);
            if (i !== void 0)
                return i;
            if ((i = r.get(o)) !== void 0)
                return s(o, i),
                i
        },
        set(o, i) {
            n.has(o) ? n.set(o, i) : s(o, i)
        }
    }
}
  , l0 = "!"
  , jk = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , s = t[0]
      , o = t.length
      , i = l => {
        const c = [];
        let u = 0, d = 0, h;
        for (let w = 0; w < l.length; w++) {
            let x = l[w];
            if (u === 0) {
                if (x === s && (r || l.slice(w, w + o) === t)) {
                    c.push(l.slice(d, w)),
                    d = w + o;
                    continue
                }
                if (x === "/") {
                    h = w;
                    continue
                }
            }
            x === "[" ? u++ : x === "]" && u--
        }
        const p = c.length === 0 ? l : l.substring(d)
          , f = p.startsWith(l0)
          , b = f ? p.substring(1) : p
          , v = h && h > d ? h - d : void 0;
        return {
            modifiers: c,
            hasImportantModifier: f,
            baseClassName: b,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: i
    }) : i
}
  , kk = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , _k = e => ({
    cache: Sk(e.cacheSize),
    parseClassName: jk(e),
    ...vk(e)
})
  , Nk = /\s+/
  , Ck = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s} = t
      , o = []
      , i = e.trim().split(Nk);
    let l = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
        const u = i[c]
          , {modifiers: d, hasImportantModifier: h, baseClassName: p, maybePostfixModifierPosition: f} = n(u);
        let b = !!f
          , v = r(b ? p.substring(0, f) : p);
        if (!v) {
            if (!b) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (v = r(p),
            !v) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            b = !1
        }
        const w = kk(d).join(":")
          , x = h ? w + l0 : w
          , m = x + v;
        if (o.includes(m))
            continue;
        o.push(m);
        const y = s(v, b);
        for (let S = 0; S < y.length; ++S) {
            const j = y[S];
            o.push(x + j)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Ek() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = c0(t)) && (r && (r += " "),
        r += n);
    return r
}
const c0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = c0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Tk(e, ...t) {
    let n, r, s, o = i;
    function i(c) {
        const u = t.reduce( (d, h) => h(d), e());
        return n = _k(u),
        r = n.cache.get,
        s = n.cache.set,
        o = l,
        l(c)
    }
    function l(c) {
        const u = r(c);
        if (u)
            return u;
        const d = Ck(c, n);
        return s(c, d),
        d
    }
    return function() {
        return o(Ek.apply(null, arguments))
    }
}
const ye = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , u0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Pk = /^\d+\/\d+$/
  , Rk = new Set(["px", "full", "screen"])
  , Ak = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Ok = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Ik = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Mk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Lk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , vn = e => Vs(e) || Rk.has(e) || Pk.test(e)
  , Un = e => go(e, "length", Vk)
  , Vs = e => !!e && !Number.isNaN(Number(e))
  , Qc = e => go(e, "number", Vs)
  , Mo = e => !!e && Number.isInteger(Number(e))
  , $k = e => e.endsWith("%") && Vs(e.slice(0, -1))
  , te = e => u0.test(e)
  , zn = e => Ak.test(e)
  , Dk = new Set(["length", "size", "percentage"])
  , Fk = e => go(e, Dk, d0)
  , Uk = e => go(e, "position", d0)
  , zk = new Set(["image", "url"])
  , Bk = e => go(e, zk, qk)
  , Wk = e => go(e, "", Hk)
  , Lo = () => !0
  , go = (e, t, n) => {
    const r = u0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Vk = e => Ok.test(e) && !Ik.test(e)
  , d0 = () => !1
  , Hk = e => Mk.test(e)
  , qk = e => Lk.test(e)
  , Kk = () => {
    const e = ye("colors")
      , t = ye("spacing")
      , n = ye("blur")
      , r = ye("brightness")
      , s = ye("borderColor")
      , o = ye("borderRadius")
      , i = ye("borderSpacing")
      , l = ye("borderWidth")
      , c = ye("contrast")
      , u = ye("grayscale")
      , d = ye("hueRotate")
      , h = ye("invert")
      , p = ye("gap")
      , f = ye("gradientColorStops")
      , b = ye("gradientColorStopPositions")
      , v = ye("inset")
      , w = ye("margin")
      , x = ye("opacity")
      , m = ye("padding")
      , y = ye("saturate")
      , S = ye("scale")
      , j = ye("sepia")
      , k = ye("skew")
      , _ = ye("space")
      , N = ye("translate")
      , A = () => ["auto", "contain", "none"]
      , R = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , U = () => ["auto", te, t]
      , M = () => [te, t]
      , V = () => ["", vn, Un]
      , I = () => ["auto", Vs, te]
      , q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , D = () => ["solid", "dashed", "dotted", "double", "none"]
      , W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", te]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [Vs, te];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Lo],
            spacing: [vn, Un],
            blur: ["none", "", zn, te],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", zn, te],
            borderSpacing: M(),
            borderWidth: V(),
            contrast: K(),
            grayscale: T(),
            hueRotate: K(),
            invert: T(),
            gap: M(),
            gradientColorStops: [e],
            gradientColorStopPositions: [$k, Un],
            inset: U(),
            margin: U(),
            opacity: K(),
            padding: M(),
            saturate: K(),
            scale: K(),
            sepia: T(),
            skew: K(),
            space: M(),
            translate: M()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", te]
            }],
            container: ["container"],
            columns: [{
                columns: [zn]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...q(), te]
            }],
            overflow: [{
                overflow: R()
            }],
            "overflow-x": [{
                "overflow-x": R()
            }],
            "overflow-y": [{
                "overflow-y": R()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Mo, te]
            }],
            basis: [{
                basis: U()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", te]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", Mo, te]
            }],
            "grid-cols": [{
                "grid-cols": [Lo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Mo, te]
                }, te]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [Lo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Mo, te]
                }, te]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", te]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", te]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", ...C()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...C(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...C(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [_]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [_]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, t]
            }],
            "min-w": [{
                "min-w": [te, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [te, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [zn]
                }, zn]
            }],
            h: [{
                h: [te, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [te, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", zn, Un]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qc]
            }],
            "font-family": [{
                font: [Lo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", te]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Vs, Qc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vn, te]
            }],
            "list-image": [{
                "list-image": ["none", te]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", te]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [x]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...D(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", vn, Un]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", vn, te]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: M()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", te]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [x]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...q(), Uk]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Fk]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Bk]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [x]
            }],
            "border-style": [{
                border: [...D(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [x]
            }],
            "divide-style": [{
                divide: D()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...D()]
            }],
            "outline-offset": [{
                "outline-offset": [vn, te]
            }],
            "outline-w": [{
                outline: [vn, Un]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: V()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [x]
            }],
            "ring-offset-w": [{
                "ring-offset": [vn, Un]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", zn, Wk]
            }],
            "shadow-color": [{
                shadow: [Lo]
            }],
            opacity: [{
                opacity: [x]
            }],
            "mix-blend": [{
                "mix-blend": [...W(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": W()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", zn, te]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [h]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [j]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [h]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [j]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", te]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", te]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", te]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Mo, te]
            }],
            "translate-x": [{
                "translate-x": [N]
            }],
            "translate-y": [{
                "translate-y": [N]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", te]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": M()
            }],
            "scroll-mx": [{
                "scroll-mx": M()
            }],
            "scroll-my": [{
                "scroll-my": M()
            }],
            "scroll-ms": [{
                "scroll-ms": M()
            }],
            "scroll-me": [{
                "scroll-me": M()
            }],
            "scroll-mt": [{
                "scroll-mt": M()
            }],
            "scroll-mr": [{
                "scroll-mr": M()
            }],
            "scroll-mb": [{
                "scroll-mb": M()
            }],
            "scroll-ml": [{
                "scroll-ml": M()
            }],
            "scroll-p": [{
                "scroll-p": M()
            }],
            "scroll-px": [{
                "scroll-px": M()
            }],
            "scroll-py": [{
                "scroll-py": M()
            }],
            "scroll-ps": [{
                "scroll-ps": M()
            }],
            "scroll-pe": [{
                "scroll-pe": M()
            }],
            "scroll-pt": [{
                "scroll-pt": M()
            }],
            "scroll-pr": [{
                "scroll-pr": M()
            }],
            "scroll-pb": [{
                "scroll-pb": M()
            }],
            "scroll-pl": [{
                "scroll-pl": M()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", te]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [vn, Un, Qc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Gk = Tk(Kk);
function ce(...e) {
    return Gk(Yy(e))
}
const Qk = Gj
  , h0 = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Wy, {
    ref: n,
    className: ce("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
h0.displayName = Wy.displayName;
const Yk = Kl("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , f0 = g.forwardRef( ({className: e, variant: t, ...n}, r) => a.jsx(Vy, {
    ref: r,
    className: ce(Yk({
        variant: t
    }), e),
    ...n
}));
f0.displayName = Vy.displayName;
const Jk = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Ky, {
    ref: n,
    className: ce("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Jk.displayName = Ky.displayName;
const p0 = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Gy, {
    ref: n,
    className: ce("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: a.jsx(i0, {
        className: "h-4 w-4"
    })
}));
p0.displayName = Gy.displayName;
const m0 = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Hy, {
    ref: n,
    className: ce("text-sm font-semibold", e),
    ...t
}));
m0.displayName = Hy.displayName;
const g0 = g.forwardRef( ({className: e, ...t}, n) => a.jsx(qy, {
    ref: n,
    className: ce("text-sm opacity-90", e),
    ...t
}));
g0.displayName = qy.displayName;
function Xk() {
    const {toasts: e} = Di();
    return a.jsxs(Qk, {
        children: [e.map(function({id: t, title: n, description: r, action: s, ...o}) {
            return a.jsxs(f0, {
                ...o,
                children: [a.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && a.jsx(m0, {
                        children: n
                    }), r && a.jsx(g0, {
                        children: r
                    })]
                }), s, a.jsx(p0, {})]
            }, t)
        }), a.jsx(h0, {})]
    })
}
var Jp = ["light", "dark"]
  , Zk = "(prefers-color-scheme: dark)"
  , e_ = g.createContext(void 0)
  , t_ = {
    setTheme: e => {}
    ,
    themes: []
}
  , n_ = () => {
    var e;
    return (e = g.useContext(e_)) != null ? e : t_
}
;
g.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: s, defaultTheme: o, value: i, attrs: l, nonce: c}) => {
    let u = o === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , h = s ? Jp.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , p = (b, v=!1, w=!0) => {
        let x = i ? i[b] : b
          , m = v ? b + "|| ''" : `'${x}'`
          , y = "";
        return s && w && !v && Jp.includes(b) && (y += `d.style.colorScheme = '${b}';`),
        n === "class" ? v || x ? y += `c.add(${m})` : y += "null" : x && (y += `d[s](n,${m})`),
        y
    }
      , f = e ? `!function(){${d}${p(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Zk}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(o, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}else{${p(o, !1, !1)};}${h}}catch(t){}}();`;
    return g.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var r_ = e => {
    switch (e) {
    case "success":
        return i_;
    case "info":
        return l_;
    case "warning":
        return a_;
    case "error":
        return c_;
    default:
        return null
    }
}
  , s_ = Array(12).fill(0)
  , o_ = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, s_.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , i_ = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , a_ = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , l_ = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , c_ = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , u_ = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , d_ = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , pd = 1
  , h_ = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : pd++
              , o = this.toasts.find(l => l.id === s)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            o ? this.toasts = this.toasts.map(l => l.id === s ? (this.publish({
                ...l,
                ...e,
                id: s,
                title: n
            }),
            {
                ...l,
                ...e,
                id: s,
                dismissible: i,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: s
            }),
            s
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), s = n !== void 0, o, i = r.then(async c => {
                if (o = ["resolve", c],
                O.isValidElement(c))
                    s = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: c
                    });
                else if (p_(c) && !c.ok) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${c.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${c.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    s = !1;
                    let u = typeof t.success == "function" ? await t.success(c) : t.success
                      , d = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async c => {
                if (o = ["reject", c],
                t.error !== void 0) {
                    s = !1;
                    let u = typeof t.error == "function" ? await t.error(c) : t.error
                      , d = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var c;
                s && (this.dismiss(n),
                n = void 0),
                (c = t.finally) == null || c.call(t)
            }
            ), l = () => new Promise( (c, u) => i.then( () => o[0] === "reject" ? u(o[1]) : c(o[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || pd++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , at = new h_
  , f_ = (e, t) => {
    let n = (t == null ? void 0 : t.id) || pd++;
    return at.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , p_ = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , m_ = f_
  , g_ = () => at.toasts
  , v_ = () => at.getActiveToasts();
Object.assign(m_, {
    success: at.success,
    info: at.info,
    warning: at.warning,
    error: at.error,
    custom: at.custom,
    message: at.message,
    promise: at.promise,
    dismiss: at.dismiss,
    loading: at.loading
}, {
    getHistory: g_,
    getToasts: v_
});
function y_(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
y_(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function pa(e) {
    return e.label !== void 0
}
var x_ = 3
  , w_ = "32px"
  , b_ = "16px"
  , Xp = 4e3
  , S_ = 356
  , j_ = 14
  , k_ = 20
  , __ = 200;
function Ft(...e) {
    return e.filter(Boolean).join(" ")
}
function N_(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var C_ = e => {
    var t, n, r, s, o, i, l, c, u, d, h;
    let {invert: p, toast: f, unstyled: b, interacting: v, setHeights: w, visibleToasts: x, heights: m, index: y, toasts: S, expanded: j, removeToast: k, defaultRichColors: _, closeButton: N, style: A, cancelButtonStyle: R, actionButtonStyle: U, className: M="", descriptionClassName: V="", duration: I, position: q, gap: D, loadingIcon: W, expandByDefault: C, classNames: T, icons: L, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: z} = e
      , [ee,Q] = O.useState(null)
      , [ve,Ee] = O.useState(null)
      , [$,de] = O.useState(!1)
      , [Te,ue] = O.useState(!1)
      , [oe,ae] = O.useState(!1)
      , [qe,kt] = O.useState(!1)
      , [Nr,Mn] = O.useState(!1)
      , [Cr,_o] = O.useState(0)
      , [ds,kf] = O.useState(0)
      , No = O.useRef(f.duration || I || Xp)
      , _f = O.useRef(null)
      , Er = O.useRef(null)
      , xb = y === 0
      , wb = y + 1 <= x
      , _t = f.type
      , hs = f.dismissible !== !1
      , bb = f.className || ""
      , Sb = f.descriptionClassName || ""
      , Ki = O.useMemo( () => m.findIndex(Y => Y.toastId === f.id) || 0, [m, f.id])
      , jb = O.useMemo( () => {
        var Y;
        return (Y = f.closeButton) != null ? Y : N
    }
    , [f.closeButton, N])
      , Nf = O.useMemo( () => f.duration || I || Xp, [f.duration, I])
      , vc = O.useRef(0)
      , fs = O.useRef(0)
      , Cf = O.useRef(0)
      , ps = O.useRef(null)
      , [kb,_b] = q.split("-")
      , Ef = O.useMemo( () => m.reduce( (Y, fe, je) => je >= Ki ? Y : Y + fe.height, 0), [m, Ki])
      , Tf = d_()
      , Nb = f.invert || p
      , yc = _t === "loading";
    fs.current = O.useMemo( () => Ki * D + Ef, [Ki, Ef]),
    O.useEffect( () => {
        No.current = Nf
    }
    , [Nf]),
    O.useEffect( () => {
        de(!0)
    }
    , []),
    O.useEffect( () => {
        let Y = Er.current;
        if (Y) {
            let fe = Y.getBoundingClientRect().height;
            return kf(fe),
            w(je => [{
                toastId: f.id,
                height: fe,
                position: f.position
            }, ...je]),
            () => w(je => je.filter(Mt => Mt.toastId !== f.id))
        }
    }
    , [w, f.id]),
    O.useLayoutEffect( () => {
        if (!$)
            return;
        let Y = Er.current
          , fe = Y.style.height;
        Y.style.height = "auto";
        let je = Y.getBoundingClientRect().height;
        Y.style.height = fe,
        kf(je),
        w(Mt => Mt.find(Lt => Lt.toastId === f.id) ? Mt.map(Lt => Lt.toastId === f.id ? {
            ...Lt,
            height: je
        } : Lt) : [{
            toastId: f.id,
            height: je,
            position: f.position
        }, ...Mt])
    }
    , [$, f.title, f.description, w, f.id]);
    let Ln = O.useCallback( () => {
        ue(!0),
        _o(fs.current),
        w(Y => Y.filter(fe => fe.toastId !== f.id)),
        setTimeout( () => {
            k(f)
        }
        , __)
    }
    , [f, k, w, fs]);
    O.useEffect( () => {
        if (f.promise && _t === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let Y;
        return j || v || z && Tf ? ( () => {
            if (Cf.current < vc.current) {
                let fe = new Date().getTime() - vc.current;
                No.current = No.current - fe
            }
            Cf.current = new Date().getTime()
        }
        )() : No.current !== 1 / 0 && (vc.current = new Date().getTime(),
        Y = setTimeout( () => {
            var fe;
            (fe = f.onAutoClose) == null || fe.call(f, f),
            Ln()
        }
        , No.current)),
        () => clearTimeout(Y)
    }
    , [j, v, f, _t, z, Tf, Ln]),
    O.useEffect( () => {
        f.delete && Ln()
    }
    , [Ln, f.delete]);
    function Cb() {
        var Y, fe, je;
        return L != null && L.loading ? O.createElement("div", {
            className: Ft(T == null ? void 0 : T.loader, (Y = f == null ? void 0 : f.classNames) == null ? void 0 : Y.loader, "sonner-loader"),
            "data-visible": _t === "loading"
        }, L.loading) : W ? O.createElement("div", {
            className: Ft(T == null ? void 0 : T.loader, (fe = f == null ? void 0 : f.classNames) == null ? void 0 : fe.loader, "sonner-loader"),
            "data-visible": _t === "loading"
        }, W) : O.createElement(o_, {
            className: Ft(T == null ? void 0 : T.loader, (je = f == null ? void 0 : f.classNames) == null ? void 0 : je.loader),
            visible: _t === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: Er,
        className: Ft(M, bb, T == null ? void 0 : T.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[_t], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[_t]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : _,
        "data-styled": !(f.jsx || f.unstyled || b),
        "data-mounted": $,
        "data-promise": !!f.promise,
        "data-swiped": Nr,
        "data-removed": Te,
        "data-visible": wb,
        "data-y-position": kb,
        "data-x-position": _b,
        "data-index": y,
        "data-front": xb,
        "data-swiping": oe,
        "data-dismissible": hs,
        "data-type": _t,
        "data-invert": Nb,
        "data-swipe-out": qe,
        "data-swipe-direction": ve,
        "data-expanded": !!(j || C && $),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${Te ? Cr : fs.current}px`,
            "--initial-height": C ? "auto" : `${ds}px`,
            ...A,
            ...f.style
        },
        onDragEnd: () => {
            ae(!1),
            Q(null),
            ps.current = null
        }
        ,
        onPointerDown: Y => {
            yc || !hs || (_f.current = new Date,
            _o(fs.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" && (ae(!0),
            ps.current = {
                x: Y.clientX,
                y: Y.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Y, fe, je, Mt;
            if (qe || !hs)
                return;
            ps.current = null;
            let Lt = Number(((Y = Er.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , $n = Number(((fe = Er.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Tr = new Date().getTime() - ((je = _f.current) == null ? void 0 : je.getTime())
              , $t = ee === "x" ? Lt : $n
              , Dn = Math.abs($t) / Tr;
            if (Math.abs($t) >= k_ || Dn > .11) {
                _o(fs.current),
                (Mt = f.onDismiss) == null || Mt.call(f, f),
                Ee(ee === "x" ? Lt > 0 ? "right" : "left" : $n > 0 ? "down" : "up"),
                Ln(),
                kt(!0),
                Mn(!1);
                return
            }
            ae(!1),
            Q(null)
        }
        ,
        onPointerMove: Y => {
            var fe, je, Mt, Lt;
            if (!ps.current || !hs || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0)
                return;
            let $n = Y.clientY - ps.current.y
              , Tr = Y.clientX - ps.current.x
              , $t = (je = e.swipeDirections) != null ? je : N_(q);
            !ee && (Math.abs(Tr) > 1 || Math.abs($n) > 1) && Q(Math.abs(Tr) > Math.abs($n) ? "x" : "y");
            let Dn = {
                x: 0,
                y: 0
            };
            ee === "y" ? ($t.includes("top") || $t.includes("bottom")) && ($t.includes("top") && $n < 0 || $t.includes("bottom") && $n > 0) && (Dn.y = $n) : ee === "x" && ($t.includes("left") || $t.includes("right")) && ($t.includes("left") && Tr < 0 || $t.includes("right") && Tr > 0) && (Dn.x = Tr),
            (Math.abs(Dn.x) > 0 || Math.abs(Dn.y) > 0) && Mn(!0),
            (Mt = Er.current) == null || Mt.style.setProperty("--swipe-amount-x", `${Dn.x}px`),
            (Lt = Er.current) == null || Lt.style.setProperty("--swipe-amount-y", `${Dn.y}px`)
        }
    }, jb && !f.jsx ? O.createElement("button", {
        "aria-label": K,
        "data-disabled": yc,
        "data-close-button": !0,
        onClick: yc || !hs ? () => {}
        : () => {
            var Y;
            Ln(),
            (Y = f.onDismiss) == null || Y.call(f, f)
        }
        ,
        className: Ft(T == null ? void 0 : T.closeButton, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.closeButton)
    }, (o = L == null ? void 0 : L.close) != null ? o : u_) : null, f.jsx || g.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : O.createElement(O.Fragment, null, _t || f.icon || f.promise ? O.createElement("div", {
        "data-icon": "",
        className: Ft(T == null ? void 0 : T.icon, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || Cb() : null, f.type !== "loading" ? f.icon || (L == null ? void 0 : L[_t]) || r_(_t) : null) : null, O.createElement("div", {
        "data-content": "",
        className: Ft(T == null ? void 0 : T.content, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.content)
    }, O.createElement("div", {
        "data-title": "",
        className: Ft(T == null ? void 0 : T.title, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? O.createElement("div", {
        "data-description": "",
        className: Ft(V, Sb, T == null ? void 0 : T.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), g.isValidElement(f.cancel) ? f.cancel : f.cancel && pa(f.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || R,
        onClick: Y => {
            var fe, je;
            pa(f.cancel) && hs && ((je = (fe = f.cancel).onClick) == null || je.call(fe, Y),
            Ln())
        }
        ,
        className: Ft(T == null ? void 0 : T.cancelButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.cancelButton)
    }, f.cancel.label) : null, g.isValidElement(f.action) ? f.action : f.action && pa(f.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || U,
        onClick: Y => {
            var fe, je;
            pa(f.action) && ((je = (fe = f.action).onClick) == null || je.call(fe, Y),
            !Y.defaultPrevented && Ln())
        }
        ,
        className: Ft(T == null ? void 0 : T.actionButton, (h = f == null ? void 0 : f.classNames) == null ? void 0 : h.actionButton)
    }, f.action.label) : null))
}
;
function Zp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function E_(e, t) {
    let n = {};
    return [e, t].forEach( (r, s) => {
        let o = s === 1
          , i = o ? "--mobile-offset" : "--offset"
          , l = o ? b_ : w_;
        function c(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? c(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = l : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : c(l)
    }
    ),
    n
}
var T_ = g.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: s=["altKey", "KeyT"], expand: o, closeButton: i, className: l, offset: c, mobileOffset: u, theme: d="light", richColors: h, duration: p, style: f, visibleToasts: b=x_, toastOptions: v, dir: w=Zp(), gap: x=j_, loadingIcon: m, icons: y, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: j} = e
      , [k,_] = O.useState([])
      , N = O.useMemo( () => Array.from(new Set([r].concat(k.filter(z => z.position).map(z => z.position)))), [k, r])
      , [A,R] = O.useState([])
      , [U,M] = O.useState(!1)
      , [V,I] = O.useState(!1)
      , [q,D] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , W = O.useRef(null)
      , C = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = O.useRef(null)
      , L = O.useRef(!1)
      , K = O.useCallback(z => {
        _(ee => {
            var Q;
            return (Q = ee.find(ve => ve.id === z.id)) != null && Q.delete || at.dismiss(z.id),
            ee.filter( ({id: ve}) => ve !== z.id)
        }
        )
    }
    , []);
    return O.useEffect( () => at.subscribe(z => {
        if (z.dismiss) {
            _(ee => ee.map(Q => Q.id === z.id ? {
                ...Q,
                delete: !0
            } : Q));
            return
        }
        setTimeout( () => {
            by.flushSync( () => {
                _(ee => {
                    let Q = ee.findIndex(ve => ve.id === z.id);
                    return Q !== -1 ? [...ee.slice(0, Q), {
                        ...ee[Q],
                        ...z
                    }, ...ee.slice(Q + 1)] : [z, ...ee]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (d !== "system") {
            D(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: ee}) => {
                D(ee ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: Q}) => {
                try {
                    D(Q ? "dark" : "light")
                } catch (ve) {
                    console.error(ve)
                }
            }
            )
        }
    }
    , [d]),
    O.useEffect( () => {
        k.length <= 1 && M(!1)
    }
    , [k]),
    O.useEffect( () => {
        let z = ee => {
            var Q, ve;
            s.every(Ee => ee[Ee] || ee.code === Ee) && (M(!0),
            (Q = W.current) == null || Q.focus()),
            ee.code === "Escape" && (document.activeElement === W.current || (ve = W.current) != null && ve.contains(document.activeElement)) && M(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [s]),
    O.useEffect( () => {
        if (W.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                L.current = !1)
            }
    }
    , [W.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${S} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, N.map( (z, ee) => {
        var Q;
        let[ve,Ee] = z.split("-");
        return k.length ? O.createElement("ol", {
            key: z,
            dir: w === "auto" ? Zp() : w,
            tabIndex: -1,
            ref: W,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": q,
            "data-y-position": ve,
            "data-lifted": U && k.length > 1 && !o,
            "data-x-position": Ee,
            style: {
                "--front-toast-height": `${((Q = A[0]) == null ? void 0 : Q.height) || 0}px`,
                "--width": `${S_}px`,
                "--gap": `${x}px`,
                ...f,
                ...E_(c, u)
            },
            onBlur: $ => {
                L.current && !$.currentTarget.contains($.relatedTarget) && (L.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: $ => {
                $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                T.current = $.relatedTarget)
            }
            ,
            onMouseEnter: () => M(!0),
            onMouseMove: () => M(!0),
            onMouseLeave: () => {
                V || M(!1)
            }
            ,
            onDragEnd: () => M(!1),
            onPointerDown: $ => {
                $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || I(!0)
            }
            ,
            onPointerUp: () => I(!1)
        }, k.filter($ => !$.position && ee === 0 || $.position === z).map( ($, de) => {
            var Te, ue;
            return O.createElement(C_, {
                key: $.id,
                icons: y,
                index: de,
                toast: $,
                defaultRichColors: h,
                duration: (Te = v == null ? void 0 : v.duration) != null ? Te : p,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (ue = v == null ? void 0 : v.closeButton) != null ? ue : i,
                interacting: V,
                position: z,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: K,
                toasts: k.filter(oe => oe.position == $.position),
                heights: A.filter(oe => oe.position == $.position),
                setHeights: R,
                expandByDefault: o,
                gap: x,
                loadingIcon: m,
                expanded: U,
                pauseWhenPageIsHidden: j,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const P_ = ({...e}) => {
    const {theme: t="system"} = n_();
    return a.jsx(T_, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-warning group-[.toast]:text-warning-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var R_ = Qd[" useId ".trim().toString()] || ( () => {}
)
  , A_ = 0;
function vo(e) {
    const [t,n] = g.useState(R_());
    return He( () => {
        e || n(r => r ?? String(A_++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const O_ = ["top", "right", "bottom", "left"]
  , vr = Math.min
  , vt = Math.max
  , ml = Math.round
  , ma = Math.floor
  , pn = e => ({
    x: e,
    y: e
})
  , I_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , M_ = {
    start: "end",
    end: "start"
};
function md(e, t, n) {
    return vt(e, vr(t, n))
}
function Rn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function An(e) {
    return e.split("-")[0]
}
function yo(e) {
    return e.split("-")[1]
}
function Yh(e) {
    return e === "x" ? "y" : "x"
}
function Jh(e) {
    return e === "y" ? "height" : "width"
}
const L_ = new Set(["top", "bottom"]);
function dn(e) {
    return L_.has(An(e)) ? "y" : "x"
}
function Xh(e) {
    return Yh(dn(e))
}
function $_(e, t, n) {
    n === void 0 && (n = !1);
    const r = yo(e)
      , s = Xh(e)
      , o = Jh(s);
    let i = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (i = gl(i)),
    [i, gl(i)]
}
function D_(e) {
    const t = gl(e);
    return [gd(e), t, gd(t)]
}
function gd(e) {
    return e.replace(/start|end/g, t => M_[t])
}
const em = ["left", "right"]
  , tm = ["right", "left"]
  , F_ = ["top", "bottom"]
  , U_ = ["bottom", "top"];
function z_(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? tm : em : t ? em : tm;
    case "left":
    case "right":
        return t ? F_ : U_;
    default:
        return []
    }
}
function B_(e, t, n, r) {
    const s = yo(e);
    let o = z_(An(e), n === "start", r);
    return s && (o = o.map(i => i + "-" + s),
    t && (o = o.concat(o.map(gd)))),
    o
}
function gl(e) {
    return e.replace(/left|right|bottom|top/g, t => I_[t])
}
function W_(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function v0(e) {
    return typeof e != "number" ? W_(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function vl(e) {
    const {x: t, y: n, width: r, height: s} = e;
    return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n
    }
}
function nm(e, t, n) {
    let {reference: r, floating: s} = e;
    const o = dn(t)
      , i = Xh(t)
      , l = Jh(i)
      , c = An(t)
      , u = o === "y"
      , d = r.x + r.width / 2 - s.width / 2
      , h = r.y + r.height / 2 - s.height / 2
      , p = r[l] / 2 - s[l] / 2;
    let f;
    switch (c) {
    case "top":
        f = {
            x: d,
            y: r.y - s.height
        };
        break;
    case "bottom":
        f = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: h
        };
        break;
    case "left":
        f = {
            x: r.x - s.width,
            y: h
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (yo(t)) {
    case "start":
        f[i] -= p * (n && u ? -1 : 1);
        break;
    case "end":
        f[i] += p * (n && u ? -1 : 1);
        break
    }
    return f
}
const V_ = async (e, t, n) => {
    const {placement: r="bottom", strategy: s="absolute", middleware: o=[], platform: i} = n
      , l = o.filter(Boolean)
      , c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: d, y: h} = nm(u, r, c)
      , p = r
      , f = {}
      , b = 0;
    for (let v = 0; v < l.length; v++) {
        const {name: w, fn: x} = l[v]
          , {x: m, y, data: S, reset: j} = await x({
            x: d,
            y: h,
            initialPlacement: r,
            placement: p,
            strategy: s,
            middlewareData: f,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = m ?? d,
        h = y ?? h,
        f = {
            ...f,
            [w]: {
                ...f[w],
                ...S
            }
        },
        j && b <= 50 && (b++,
        typeof j == "object" && (j.placement && (p = j.placement),
        j.rects && (u = j.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : j.rects),
        {x: d, y: h} = nm(u, p, c)),
        v = -1)
    }
    return {
        x: d,
        y: h,
        placement: p,
        strategy: s,
        middlewareData: f
    }
}
;
async function Si(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: s, platform: o, rects: i, elements: l, strategy: c} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: h="floating", altBoundary: p=!1, padding: f=0} = Rn(t, e)
      , b = v0(f)
      , w = l[p ? h === "floating" ? "reference" : "floating" : h]
      , x = vl(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: c
    }))
      , m = h === "floating" ? {
        x: r,
        y: s,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating))
      , S = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , j = vl(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: m,
        offsetParent: y,
        strategy: c
    }) : m);
    return {
        top: (x.top - j.top + b.top) / S.y,
        bottom: (j.bottom - x.bottom + b.bottom) / S.y,
        left: (x.left - j.left + b.left) / S.x,
        right: (j.right - x.right + b.right) / S.x
    }
}
const H_ = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: s, rects: o, platform: i, elements: l, middlewareData: c} = t
          , {element: u, padding: d=0} = Rn(e, t) || {};
        if (u == null)
            return {};
        const h = v0(d)
          , p = {
            x: n,
            y: r
        }
          , f = Xh(s)
          , b = Jh(f)
          , v = await i.getDimensions(u)
          , w = f === "y"
          , x = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , y = w ? "clientHeight" : "clientWidth"
          , S = o.reference[b] + o.reference[f] - p[f] - o.floating[b]
          , j = p[f] - o.reference[f]
          , k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let _ = k ? k[y] : 0;
        (!_ || !await (i.isElement == null ? void 0 : i.isElement(k))) && (_ = l.floating[y] || o.floating[b]);
        const N = S / 2 - j / 2
          , A = _ / 2 - v[b] / 2 - 1
          , R = vr(h[x], A)
          , U = vr(h[m], A)
          , M = R
          , V = _ - v[b] - U
          , I = _ / 2 - v[b] / 2 + N
          , q = md(M, I, V)
          , D = !c.arrow && yo(s) != null && I !== q && o.reference[b] / 2 - (I < M ? R : U) - v[b] / 2 < 0
          , W = D ? I < M ? I - M : I - V : 0;
        return {
            [f]: p[f] + W,
            data: {
                [f]: q,
                centerOffset: I - q - W,
                ...D && {
                    alignmentOffset: W
                }
            },
            reset: D
        }
    }
})
  , q_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, middlewareData: o, rects: i, initialPlacement: l, platform: c, elements: u} = t
              , {mainAxis: d=!0, crossAxis: h=!0, fallbackPlacements: p, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: v=!0, ...w} = Rn(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const x = An(s)
              , m = dn(l)
              , y = An(l) === l
              , S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating))
              , j = p || (y || !v ? [gl(l)] : D_(l))
              , k = b !== "none";
            !p && k && j.push(...B_(l, v, b, S));
            const _ = [l, ...j]
              , N = await Si(t, w)
              , A = [];
            let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (d && A.push(N[x]),
            h) {
                const I = $_(s, i, S);
                A.push(N[I[0]], N[I[1]])
            }
            if (R = [...R, {
                placement: s,
                overflows: A
            }],
            !A.every(I => I <= 0)) {
                var U, M;
                const I = (((U = o.flip) == null ? void 0 : U.index) || 0) + 1
                  , q = _[I];
                if (q && (!(h === "alignment" ? m !== dn(q) : !1) || R.every(C => C.overflows[0] > 0 && dn(C.placement) === m)))
                    return {
                        data: {
                            index: I,
                            overflows: R
                        },
                        reset: {
                            placement: q
                        }
                    };
                let D = (M = R.filter(W => W.overflows[0] <= 0).sort( (W, C) => W.overflows[1] - C.overflows[1])[0]) == null ? void 0 : M.placement;
                if (!D)
                    switch (f) {
                    case "bestFit":
                        {
                            var V;
                            const W = (V = R.filter(C => {
                                if (k) {
                                    const T = dn(C.placement);
                                    return T === m || T === "y"
                                }
                                return !0
                            }
                            ).map(C => [C.placement, C.overflows.filter(T => T > 0).reduce( (T, L) => T + L, 0)]).sort( (C, T) => C[1] - T[1])[0]) == null ? void 0 : V[0];
                            W && (D = W);
                            break
                        }
                    case "initialPlacement":
                        D = l;
                        break
                    }
                if (s !== D)
                    return {
                        reset: {
                            placement: D
                        }
                    }
            }
            return {}
        }
    }
};
function rm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function sm(e) {
    return O_.some(t => e[t] >= 0)
}
const K_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...s} = Rn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const o = await Si(t, {
                        ...s,
                        elementContext: "reference"
                    })
                      , i = rm(o, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: sm(i)
                        }
                    }
                }
            case "escaped":
                {
                    const o = await Si(t, {
                        ...s,
                        altBoundary: !0
                    })
                      , i = rm(o, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: sm(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , y0 = new Set(["left", "top"]);
async function G_(e, t) {
    const {placement: n, platform: r, elements: s} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating))
      , i = An(n)
      , l = yo(n)
      , c = dn(n) === "y"
      , u = y0.has(i) ? -1 : 1
      , d = o && c ? -1 : 1
      , h = Rn(t, e);
    let {mainAxis: p, crossAxis: f, alignmentAxis: b} = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis
    };
    return l && typeof b == "number" && (f = l === "end" ? b * -1 : b),
    c ? {
        x: f * d,
        y: p * u
    } : {
        x: p * u,
        y: f * d
    }
}
const Q_ = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: s, y: o, placement: i, middlewareData: l} = t
              , c = await G_(t, e);
            return i === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: s + c.x,
                y: o + c.y,
                data: {
                    ...c,
                    placement: i
                }
            }
        }
    }
}
  , Y_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: s} = t
              , {mainAxis: o=!0, crossAxis: i=!1, limiter: l={
                fn: w => {
                    let {x, y: m} = w;
                    return {
                        x,
                        y: m
                    }
                }
            }, ...c} = Rn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await Si(t, c)
              , h = dn(An(s))
              , p = Yh(h);
            let f = u[p]
              , b = u[h];
            if (o) {
                const w = p === "y" ? "top" : "left"
                  , x = p === "y" ? "bottom" : "right"
                  , m = f + d[w]
                  , y = f - d[x];
                f = md(m, f, y)
            }
            if (i) {
                const w = h === "y" ? "top" : "left"
                  , x = h === "y" ? "bottom" : "right"
                  , m = b + d[w]
                  , y = b - d[x];
                b = md(m, b, y)
            }
            const v = l.fn({
                ...t,
                [p]: f,
                [h]: b
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [p]: o,
                        [h]: i
                    }
                }
            }
        }
    }
}
  , J_ = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: s, rects: o, middlewareData: i} = t
              , {offset: l=0, mainAxis: c=!0, crossAxis: u=!0} = Rn(e, t)
              , d = {
                x: n,
                y: r
            }
              , h = dn(s)
              , p = Yh(h);
            let f = d[p]
              , b = d[h];
            const v = Rn(l, t)
              , w = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (c) {
                const y = p === "y" ? "height" : "width"
                  , S = o.reference[p] - o.floating[y] + w.mainAxis
                  , j = o.reference[p] + o.reference[y] - w.mainAxis;
                f < S ? f = S : f > j && (f = j)
            }
            if (u) {
                var x, m;
                const y = p === "y" ? "width" : "height"
                  , S = y0.has(An(s))
                  , j = o.reference[h] - o.floating[y] + (S && ((x = i.offset) == null ? void 0 : x[h]) || 0) + (S ? 0 : w.crossAxis)
                  , k = o.reference[h] + o.reference[y] + (S ? 0 : ((m = i.offset) == null ? void 0 : m[h]) || 0) - (S ? w.crossAxis : 0);
                b < j ? b = j : b > k && (b = k)
            }
            return {
                [p]: f,
                [h]: b
            }
        }
    }
}
  , X_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, rects: o, platform: i, elements: l} = t
              , {apply: c= () => {}
            , ...u} = Rn(e, t)
              , d = await Si(t, u)
              , h = An(s)
              , p = yo(s)
              , f = dn(s) === "y"
              , {width: b, height: v} = o.floating;
            let w, x;
            h === "top" || h === "bottom" ? (w = h,
            x = p === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = h,
            w = p === "end" ? "top" : "bottom");
            const m = v - d.top - d.bottom
              , y = b - d.left - d.right
              , S = vr(v - d[w], m)
              , j = vr(b - d[x], y)
              , k = !t.middlewareData.shift;
            let _ = S
              , N = j;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (_ = m),
            k && !p) {
                const R = vt(d.left, 0)
                  , U = vt(d.right, 0)
                  , M = vt(d.top, 0)
                  , V = vt(d.bottom, 0);
                f ? N = b - 2 * (R !== 0 || U !== 0 ? R + U : vt(d.left, d.right)) : _ = v - 2 * (M !== 0 || V !== 0 ? M + V : vt(d.top, d.bottom))
            }
            await c({
                ...t,
                availableWidth: N,
                availableHeight: _
            });
            const A = await i.getDimensions(l.floating);
            return b !== A.width || v !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Yl() {
    return typeof window < "u"
}
function xo(e) {
    return x0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function wt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function gn(e) {
    var t;
    return (t = (x0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function x0(e) {
    return Yl() ? e instanceof Node || e instanceof wt(e).Node : !1
}
function Xt(e) {
    return Yl() ? e instanceof Element || e instanceof wt(e).Element : !1
}
function mn(e) {
    return Yl() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1
}
function om(e) {
    return !Yl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot
}
const Z_ = new Set(["inline", "contents"]);
function zi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: s} = Zt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Z_.has(s)
}
const eN = new Set(["table", "td", "th"]);
function tN(e) {
    return eN.has(xo(e))
}
const nN = [":popover-open", ":modal"];
function Jl(e) {
    return nN.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const rN = ["transform", "translate", "scale", "rotate", "perspective"]
  , sN = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , oN = ["paint", "layout", "strict", "content"];
function Zh(e) {
    const t = ef()
      , n = Xt(e) ? Zt(e) : e;
    return rN.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || sN.some(r => (n.willChange || "").includes(r)) || oN.some(r => (n.contain || "").includes(r))
}
function iN(e) {
    let t = yr(e);
    for (; mn(t) && !lo(t); ) {
        if (Zh(t))
            return t;
        if (Jl(t))
            return null;
        t = yr(t)
    }
    return null
}
function ef() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const aN = new Set(["html", "body", "#document"]);
function lo(e) {
    return aN.has(xo(e))
}
function Zt(e) {
    return wt(e).getComputedStyle(e)
}
function Xl(e) {
    return Xt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function yr(e) {
    if (xo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || om(e) && e.host || gn(e);
    return om(t) ? t.host : t
}
function w0(e) {
    const t = yr(e);
    return lo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && zi(t) ? t : w0(t)
}
function ji(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const s = w0(e)
      , o = s === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = wt(s);
    if (o) {
        const l = vd(i);
        return t.concat(i, i.visualViewport || [], zi(s) ? s : [], l && n ? ji(l) : [])
    }
    return t.concat(s, ji(s, [], n))
}
function vd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function b0(e) {
    const t = Zt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const s = mn(e)
      , o = s ? e.offsetWidth : n
      , i = s ? e.offsetHeight : r
      , l = ml(n) !== o || ml(r) !== i;
    return l && (n = o,
    r = i),
    {
        width: n,
        height: r,
        $: l
    }
}
function tf(e) {
    return Xt(e) ? e : e.contextElement
}
function Hs(e) {
    const t = tf(e);
    if (!mn(t))
        return pn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: s, $: o} = b0(t);
    let i = (o ? ml(n.width) : n.width) / r
      , l = (o ? ml(n.height) : n.height) / s;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: i,
        y: l
    }
}
const lN = pn(0);
function S0(e) {
    const t = wt(e);
    return !ef() || !t.visualViewport ? lN : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function cN(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== wt(e) ? !1 : t
}
function ts(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , o = tf(e);
    let i = pn(1);
    t && (r ? Xt(r) && (i = Hs(r)) : i = Hs(e));
    const l = cN(o, n, r) ? S0(o) : pn(0);
    let c = (s.left + l.x) / i.x
      , u = (s.top + l.y) / i.y
      , d = s.width / i.x
      , h = s.height / i.y;
    if (o) {
        const p = wt(o)
          , f = r && Xt(r) ? wt(r) : r;
        let b = p
          , v = vd(b);
        for (; v && r && f !== b; ) {
            const w = Hs(v)
              , x = v.getBoundingClientRect()
              , m = Zt(v)
              , y = x.left + (v.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , S = x.top + (v.clientTop + parseFloat(m.paddingTop)) * w.y;
            c *= w.x,
            u *= w.y,
            d *= w.x,
            h *= w.y,
            c += y,
            u += S,
            b = wt(v),
            v = vd(b)
        }
    }
    return vl({
        width: d,
        height: h,
        x: c,
        y: u
    })
}
function nf(e, t) {
    const n = Xl(e).scrollLeft;
    return t ? t.left + n : ts(gn(e)).left + n
}
function j0(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , s = r.left + t.scrollLeft - (n ? 0 : nf(e, r))
      , o = r.top + t.scrollTop;
    return {
        x: s,
        y: o
    }
}
function uN(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: s} = e;
    const o = s === "fixed"
      , i = gn(r)
      , l = t ? Jl(t.floating) : !1;
    if (r === i || l && o)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = pn(1);
    const d = pn(0)
      , h = mn(r);
    if ((h || !h && !o) && ((xo(r) !== "body" || zi(i)) && (c = Xl(r)),
    mn(r))) {
        const f = ts(r);
        u = Hs(r),
        d.x = f.x + r.clientLeft,
        d.y = f.y + r.clientTop
    }
    const p = i && !h && !o ? j0(i, c, !0) : pn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + d.x + p.x,
        y: n.y * u.y - c.scrollTop * u.y + d.y + p.y
    }
}
function dN(e) {
    return Array.from(e.getClientRects())
}
function hN(e) {
    const t = gn(e)
      , n = Xl(e)
      , r = e.ownerDocument.body
      , s = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + nf(e);
    const l = -n.scrollTop;
    return Zt(r).direction === "rtl" && (i += vt(t.clientWidth, r.clientWidth) - s),
    {
        width: s,
        height: o,
        x: i,
        y: l
    }
}
function fN(e, t) {
    const n = wt(e)
      , r = gn(e)
      , s = n.visualViewport;
    let o = r.clientWidth
      , i = r.clientHeight
      , l = 0
      , c = 0;
    if (s) {
        o = s.width,
        i = s.height;
        const u = ef();
        (!u || u && t === "fixed") && (l = s.offsetLeft,
        c = s.offsetTop)
    }
    return {
        width: o,
        height: i,
        x: l,
        y: c
    }
}
const pN = new Set(["absolute", "fixed"]);
function mN(e, t) {
    const n = ts(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , s = n.left + e.clientLeft
      , o = mn(e) ? Hs(e) : pn(1)
      , i = e.clientWidth * o.x
      , l = e.clientHeight * o.y
      , c = s * o.x
      , u = r * o.y;
    return {
        width: i,
        height: l,
        x: c,
        y: u
    }
}
function im(e, t, n) {
    let r;
    if (t === "viewport")
        r = fN(e, n);
    else if (t === "document")
        r = hN(gn(e));
    else if (Xt(t))
        r = mN(t, n);
    else {
        const s = S0(e);
        r = {
            x: t.x - s.x,
            y: t.y - s.y,
            width: t.width,
            height: t.height
        }
    }
    return vl(r)
}
function k0(e, t) {
    const n = yr(e);
    return n === t || !Xt(n) || lo(n) ? !1 : Zt(n).position === "fixed" || k0(n, t)
}
function gN(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = ji(e, [], !1).filter(l => Xt(l) && xo(l) !== "body")
      , s = null;
    const o = Zt(e).position === "fixed";
    let i = o ? yr(e) : e;
    for (; Xt(i) && !lo(i); ) {
        const l = Zt(i)
          , c = Zh(i);
        !c && l.position === "fixed" && (s = null),
        (o ? !c && !s : !c && l.position === "static" && !!s && pN.has(s.position) || zi(i) && !c && k0(e, i)) ? r = r.filter(d => d !== i) : s = l,
        i = yr(i)
    }
    return t.set(e, r),
    r
}
function vN(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: s} = e;
    const i = [...n === "clippingAncestors" ? Jl(t) ? [] : gN(t, this._c) : [].concat(n), r]
      , l = i[0]
      , c = i.reduce( (u, d) => {
        const h = im(t, d, s);
        return u.top = vt(h.top, u.top),
        u.right = vr(h.right, u.right),
        u.bottom = vr(h.bottom, u.bottom),
        u.left = vt(h.left, u.left),
        u
    }
    , im(t, l, s));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}
function yN(e) {
    const {width: t, height: n} = b0(e);
    return {
        width: t,
        height: n
    }
}
function xN(e, t, n) {
    const r = mn(t)
      , s = gn(t)
      , o = n === "fixed"
      , i = ts(e, !0, o, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = pn(0);
    function u() {
        c.x = nf(s)
    }
    if (r || !r && !o)
        if ((xo(t) !== "body" || zi(s)) && (l = Xl(t)),
        r) {
            const f = ts(t, !0, o, t);
            c.x = f.x + t.clientLeft,
            c.y = f.y + t.clientTop
        } else
            s && u();
    o && !r && s && u();
    const d = s && !r && !o ? j0(s, l) : pn(0)
      , h = i.left + l.scrollLeft - c.x - d.x
      , p = i.top + l.scrollTop - c.y - d.y;
    return {
        x: h,
        y: p,
        width: i.width,
        height: i.height
    }
}
function Yc(e) {
    return Zt(e).position === "static"
}
function am(e, t) {
    if (!mn(e) || Zt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return gn(e) === n && (n = n.ownerDocument.body),
    n
}
function _0(e, t) {
    const n = wt(e);
    if (Jl(e))
        return n;
    if (!mn(e)) {
        let s = yr(e);
        for (; s && !lo(s); ) {
            if (Xt(s) && !Yc(s))
                return s;
            s = yr(s)
        }
        return n
    }
    let r = am(e, t);
    for (; r && tN(r) && Yc(r); )
        r = am(r, t);
    return r && lo(r) && Yc(r) && !Zh(r) ? n : r || iN(e) || n
}
const wN = async function(e) {
    const t = this.getOffsetParent || _0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: xN(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function bN(e) {
    return Zt(e).direction === "rtl"
}
const SN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: uN,
    getDocumentElement: gn,
    getClippingRect: vN,
    getOffsetParent: _0,
    getElementRects: wN,
    getClientRects: dN,
    getDimensions: yN,
    getScale: Hs,
    isElement: Xt,
    isRTL: bN
};
function N0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function jN(e, t) {
    let n = null, r;
    const s = gn(e);
    function o() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function i(l, c) {
        l === void 0 && (l = !1),
        c === void 0 && (c = 1),
        o();
        const u = e.getBoundingClientRect()
          , {left: d, top: h, width: p, height: f} = u;
        if (l || t(),
        !p || !f)
            return;
        const b = ma(h)
          , v = ma(s.clientWidth - (d + p))
          , w = ma(s.clientHeight - (h + f))
          , x = ma(d)
          , y = {
            rootMargin: -b + "px " + -v + "px " + -w + "px " + -x + "px",
            threshold: vt(0, vr(1, c)) || 1
        };
        let S = !0;
        function j(k) {
            const _ = k[0].intersectionRatio;
            if (_ !== c) {
                if (!S)
                    return i();
                _ ? i(!1, _) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            _ === 1 && !N0(u, e.getBoundingClientRect()) && i(),
            S = !1
        }
        try {
            n = new IntersectionObserver(j,{
                ...y,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(j,y)
        }
        n.observe(e)
    }
    return i(!0),
    o
}
function kN(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: s=!0, ancestorResize: o=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: c=!1} = r
      , u = tf(e)
      , d = s || o ? [...u ? ji(u) : [], ...ji(t)] : [];
    d.forEach(x => {
        s && x.addEventListener("scroll", n, {
            passive: !0
        }),
        o && x.addEventListener("resize", n)
    }
    );
    const h = u && l ? jN(u, n) : null;
    let p = -1
      , f = null;
    i && (f = new ResizeObserver(x => {
        let[m] = x;
        m && m.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(p),
        p = requestAnimationFrame( () => {
            var y;
            (y = f) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !c && f.observe(u),
    f.observe(t));
    let b, v = c ? ts(e) : null;
    c && w();
    function w() {
        const x = ts(e);
        v && !N0(v, x) && n(),
        v = x,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var x;
        d.forEach(m => {
            s && m.removeEventListener("scroll", n),
            o && m.removeEventListener("resize", n)
        }
        ),
        h == null || h(),
        (x = f) == null || x.disconnect(),
        f = null,
        c && cancelAnimationFrame(b)
    }
}
const _N = Q_
  , NN = Y_
  , CN = q_
  , EN = X_
  , TN = K_
  , lm = H_
  , PN = J_
  , RN = (e, t, n) => {
    const r = new Map
      , s = {
        platform: SN,
        ...n
    }
      , o = {
        ...s.platform,
        _c: r
    };
    return V_(e, t, {
        ...s,
        platform: o
    })
}
;
var AN = typeof document < "u"
  , ON = function() {}
  , Ua = AN ? g.useLayoutEffect : ON;
function yl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!yl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        n = s.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, s[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const o = s[r];
            if (!(o === "_owner" && e.$$typeof) && !yl(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function C0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function cm(e, t) {
    const n = C0(e);
    return Math.round(t * n) / n
}
function Jc(e) {
    const t = g.useRef(e);
    return Ua( () => {
        t.current = e
    }
    ),
    t
}
function IN(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: s, elements: {reference: o, floating: i}={}, transform: l=!0, whileElementsMounted: c, open: u} = e
      , [d,h] = g.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [p,f] = g.useState(r);
    yl(p, r) || f(r);
    const [b,v] = g.useState(null)
      , [w,x] = g.useState(null)
      , m = g.useCallback(C => {
        C !== k.current && (k.current = C,
        v(C))
    }
    , [])
      , y = g.useCallback(C => {
        C !== _.current && (_.current = C,
        x(C))
    }
    , [])
      , S = o || b
      , j = i || w
      , k = g.useRef(null)
      , _ = g.useRef(null)
      , N = g.useRef(d)
      , A = c != null
      , R = Jc(c)
      , U = Jc(s)
      , M = Jc(u)
      , V = g.useCallback( () => {
        if (!k.current || !_.current)
            return;
        const C = {
            placement: t,
            strategy: n,
            middleware: p
        };
        U.current && (C.platform = U.current),
        RN(k.current, _.current, C).then(T => {
            const L = {
                ...T,
                isPositioned: M.current !== !1
            };
            I.current && !yl(N.current, L) && (N.current = L,
            is.flushSync( () => {
                h(L)
            }
            ))
        }
        )
    }
    , [p, t, n, U, M]);
    Ua( () => {
        u === !1 && N.current.isPositioned && (N.current.isPositioned = !1,
        h(C => ({
            ...C,
            isPositioned: !1
        })))
    }
    , [u]);
    const I = g.useRef(!1);
    Ua( () => (I.current = !0,
    () => {
        I.current = !1
    }
    ), []),
    Ua( () => {
        if (S && (k.current = S),
        j && (_.current = j),
        S && j) {
            if (R.current)
                return R.current(S, j, V);
            V()
        }
    }
    , [S, j, V, R, A]);
    const q = g.useMemo( () => ({
        reference: k,
        floating: _,
        setReference: m,
        setFloating: y
    }), [m, y])
      , D = g.useMemo( () => ({
        reference: S,
        floating: j
    }), [S, j])
      , W = g.useMemo( () => {
        const C = {
            position: n,
            left: 0,
            top: 0
        };
        if (!D.floating)
            return C;
        const T = cm(D.floating, d.x)
          , L = cm(D.floating, d.y);
        return l ? {
            ...C,
            transform: "translate(" + T + "px, " + L + "px)",
            ...C0(D.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: L
        }
    }
    , [n, l, D.floating, d.x, d.y]);
    return g.useMemo( () => ({
        ...d,
        update: V,
        refs: q,
        elements: D,
        floatingStyles: W
    }), [d, V, q, D, W])
}
const MN = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: s} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? lm({
                element: r.current,
                padding: s
            }).fn(n) : {} : r ? lm({
                element: r,
                padding: s
            }).fn(n) : {}
        }
    }
}
  , LN = (e, t) => ({
    ..._N(e),
    options: [e, t]
})
  , $N = (e, t) => ({
    ...NN(e),
    options: [e, t]
})
  , DN = (e, t) => ({
    ...PN(e),
    options: [e, t]
})
  , FN = (e, t) => ({
    ...CN(e),
    options: [e, t]
})
  , UN = (e, t) => ({
    ...EN(e),
    options: [e, t]
})
  , zN = (e, t) => ({
    ...TN(e),
    options: [e, t]
})
  , BN = (e, t) => ({
    ...MN(e),
    options: [e, t]
});
var WN = "Arrow"
  , E0 = g.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: s=5, ...o} = e;
    return a.jsx(ne.svg, {
        ...o,
        ref: t,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : a.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
E0.displayName = WN;
var VN = E0;
function T0(e) {
    const [t,n] = g.useState(void 0);
    return He( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const o = s[0];
                let i, l;
                if ("borderBoxSize"in o) {
                    const c = o.borderBoxSize
                      , u = Array.isArray(c) ? c[0] : c;
                    i = u.inlineSize,
                    l = u.blockSize
                } else
                    i = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: i,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var rf = "Popper"
  , [P0,Zl] = In(rf)
  , [HN,R0] = P0(rf)
  , A0 = e => {
    const {__scopePopper: t, children: n} = e
      , [r,s] = g.useState(null);
    return a.jsx(HN, {
        scope: t,
        anchor: r,
        onAnchorChange: s,
        children: n
    })
}
;
A0.displayName = rf;
var O0 = "PopperAnchor"
  , I0 = g.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...s} = e
      , o = R0(O0, n)
      , i = g.useRef(null)
      , l = Se(t, i);
    return g.useEffect( () => {
        o.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : a.jsx(ne.div, {
        ...s,
        ref: l
    })
}
);
I0.displayName = O0;
var sf = "PopperContent"
  , [qN,KN] = P0(sf)
  , M0 = g.forwardRef( (e, t) => {
    var $, de, Te, ue, oe, ae;
    const {__scopePopper: n, side: r="bottom", sideOffset: s=0, align: o="center", alignOffset: i=0, arrowPadding: l=0, avoidCollisions: c=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: h="partial", hideWhenDetached: p=!1, updatePositionStrategy: f="optimized", onPlaced: b, ...v} = e
      , w = R0(sf, n)
      , [x,m] = g.useState(null)
      , y = Se(t, qe => m(qe))
      , [S,j] = g.useState(null)
      , k = T0(S)
      , _ = (k == null ? void 0 : k.width) ?? 0
      , N = (k == null ? void 0 : k.height) ?? 0
      , A = r + (o !== "center" ? "-" + o : "")
      , R = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , U = Array.isArray(u) ? u : [u]
      , M = U.length > 0
      , V = {
        padding: R,
        boundary: U.filter(QN),
        altBoundary: M
    }
      , {refs: I, floatingStyles: q, placement: D, isPositioned: W, middlewareData: C} = IN({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...qe) => kN(...qe, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [LN({
            mainAxis: s + N,
            alignmentAxis: i
        }), c && $N({
            mainAxis: !0,
            crossAxis: !1,
            limiter: h === "partial" ? DN() : void 0,
            ...V
        }), c && FN({
            ...V
        }), UN({
            ...V,
            apply: ({elements: qe, rects: kt, availableWidth: Nr, availableHeight: Mn}) => {
                const {width: Cr, height: _o} = kt.reference
                  , ds = qe.floating.style;
                ds.setProperty("--radix-popper-available-width", `${Nr}px`),
                ds.setProperty("--radix-popper-available-height", `${Mn}px`),
                ds.setProperty("--radix-popper-anchor-width", `${Cr}px`),
                ds.setProperty("--radix-popper-anchor-height", `${_o}px`)
            }
        }), S && BN({
            element: S,
            padding: l
        }), YN({
            arrowWidth: _,
            arrowHeight: N
        }), p && zN({
            strategy: "referenceHidden",
            ...V
        })]
    })
      , [T,L] = D0(D)
      , K = It(b);
    He( () => {
        W && (K == null || K())
    }
    , [W, K]);
    const z = ($ = C.arrow) == null ? void 0 : $.x
      , ee = (de = C.arrow) == null ? void 0 : de.y
      , Q = ((Te = C.arrow) == null ? void 0 : Te.centerOffset) !== 0
      , [ve,Ee] = g.useState();
    return He( () => {
        x && Ee(window.getComputedStyle(x).zIndex)
    }
    , [x]),
    a.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...q,
            transform: W ? q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ve,
            "--radix-popper-transform-origin": [(ue = C.transformOrigin) == null ? void 0 : ue.x, (oe = C.transformOrigin) == null ? void 0 : oe.y].join(" "),
            ...((ae = C.hide) == null ? void 0 : ae.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: a.jsx(qN, {
            scope: n,
            placedSide: T,
            onArrowChange: j,
            arrowX: z,
            arrowY: ee,
            shouldHideArrow: Q,
            children: a.jsx(ne.div, {
                "data-side": T,
                "data-align": L,
                ...v,
                ref: y,
                style: {
                    ...v.style,
                    animation: W ? void 0 : "none"
                }
            })
        })
    })
}
);
M0.displayName = sf;
var L0 = "PopperArrow"
  , GN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , $0 = g.forwardRef(function(t, n) {
    const {__scopePopper: r, ...s} = t
      , o = KN(L0, r)
      , i = GN[o.placedSide];
    return a.jsx("span", {
        ref: o.onArrowChange,
        style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[o.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: a.jsx(VN, {
            ...s,
            ref: n,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
$0.displayName = L0;
function QN(e) {
    return e !== null
}
var YN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, x, m;
        const {placement: n, rects: r, middlewareData: s} = t
          , i = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = i ? 0 : e.arrowWidth
          , c = i ? 0 : e.arrowHeight
          , [u,d] = D0(n)
          , h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , p = (((x = s.arrow) == null ? void 0 : x.x) ?? 0) + l / 2
          , f = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + c / 2;
        let b = ""
          , v = "";
        return u === "bottom" ? (b = i ? h : `${p}px`,
        v = `${-c}px`) : u === "top" ? (b = i ? h : `${p}px`,
        v = `${r.floating.height + c}px`) : u === "right" ? (b = `${-c}px`,
        v = i ? h : `${f}px`) : u === "left" && (b = `${r.floating.width + c}px`,
        v = i ? h : `${f}px`),
        {
            data: {
                x: b,
                y: v
            }
        }
    }
});
function D0(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var F0 = A0
  , U0 = I0
  , z0 = M0
  , B0 = $0
  , [ec,VA] = In("Tooltip", [Zl])
  , tc = Zl()
  , W0 = "TooltipProvider"
  , JN = 700
  , yd = "tooltip.open"
  , [XN,of] = ec(W0)
  , V0 = e => {
    const {__scopeTooltip: t, delayDuration: n=JN, skipDelayDuration: r=300, disableHoverableContent: s=!1, children: o} = e
      , i = g.useRef(!0)
      , l = g.useRef(!1)
      , c = g.useRef(0);
    return g.useEffect( () => {
        const u = c.current;
        return () => window.clearTimeout(u)
    }
    , []),
    a.jsx(XN, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: g.useCallback( () => {
            window.clearTimeout(c.current),
            i.current = !1
        }
        , []),
        onClose: g.useCallback( () => {
            window.clearTimeout(c.current),
            c.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: g.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: s,
        children: o
    })
}
;
V0.displayName = W0;
var ki = "Tooltip"
  , [ZN,nc] = ec(ki)
  , H0 = e => {
    const {__scopeTooltip: t, children: n, open: r, defaultOpen: s, onOpenChange: o, disableHoverableContent: i, delayDuration: l} = e
      , c = of(ki, e.__scopeTooltip)
      , u = tc(t)
      , [d,h] = g.useState(null)
      , p = vo()
      , f = g.useRef(0)
      , b = i ?? c.disableHoverableContent
      , v = l ?? c.delayDuration
      , w = g.useRef(!1)
      , [x,m] = es({
        prop: r,
        defaultProp: s ?? !1,
        onChange: _ => {
            _ ? (c.onOpen(),
            document.dispatchEvent(new CustomEvent(yd))) : c.onClose(),
            o == null || o(_)
        }
        ,
        caller: ki
    })
      , y = g.useMemo( () => x ? w.current ? "delayed-open" : "instant-open" : "closed", [x])
      , S = g.useCallback( () => {
        window.clearTimeout(f.current),
        f.current = 0,
        w.current = !1,
        m(!0)
    }
    , [m])
      , j = g.useCallback( () => {
        window.clearTimeout(f.current),
        f.current = 0,
        m(!1)
    }
    , [m])
      , k = g.useCallback( () => {
        window.clearTimeout(f.current),
        f.current = window.setTimeout( () => {
            w.current = !0,
            m(!0),
            f.current = 0
        }
        , v)
    }
    , [v, m]);
    return g.useEffect( () => () => {
        f.current && (window.clearTimeout(f.current),
        f.current = 0)
    }
    , []),
    a.jsx(F0, {
        ...u,
        children: a.jsx(ZN, {
            scope: t,
            contentId: p,
            open: x,
            stateAttribute: y,
            trigger: d,
            onTriggerChange: h,
            onTriggerEnter: g.useCallback( () => {
                c.isOpenDelayedRef.current ? k() : S()
            }
            , [c.isOpenDelayedRef, k, S]),
            onTriggerLeave: g.useCallback( () => {
                b ? j() : (window.clearTimeout(f.current),
                f.current = 0)
            }
            , [j, b]),
            onOpen: S,
            onClose: j,
            disableHoverableContent: b,
            children: n
        })
    })
}
;
H0.displayName = ki;
var xd = "TooltipTrigger"
  , q0 = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = nc(xd, n)
      , o = of(xd, n)
      , i = tc(n)
      , l = g.useRef(null)
      , c = Se(t, l, s.onTriggerChange)
      , u = g.useRef(!1)
      , d = g.useRef(!1)
      , h = g.useCallback( () => u.current = !1, []);
    return g.useEffect( () => () => document.removeEventListener("pointerup", h), [h]),
    a.jsx(U0, {
        asChild: !0,
        ...i,
        children: a.jsx(ne.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...r,
            ref: c,
            onPointerMove: G(e.onPointerMove, p => {
                p.pointerType !== "touch" && !d.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: G(e.onPointerLeave, () => {
                s.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: G(e.onPointerDown, () => {
                s.open && s.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", h, {
                    once: !0
                })
            }
            ),
            onFocus: G(e.onFocus, () => {
                u.current || s.onOpen()
            }
            ),
            onBlur: G(e.onBlur, s.onClose),
            onClick: G(e.onClick, s.onClose)
        })
    })
}
);
q0.displayName = xd;
var eC = "TooltipPortal"
  , [HA,tC] = ec(eC, {
    forceMount: void 0
})
  , co = "TooltipContent"
  , K0 = g.forwardRef( (e, t) => {
    const n = tC(co, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: s="top", ...o} = e
      , i = nc(co, e.__scopeTooltip);
    return a.jsx(Fi, {
        present: r || i.open,
        children: i.disableHoverableContent ? a.jsx(G0, {
            side: s,
            ...o,
            ref: t
        }) : a.jsx(nC, {
            side: s,
            ...o,
            ref: t
        })
    })
}
)
  , nC = g.forwardRef( (e, t) => {
    const n = nc(co, e.__scopeTooltip)
      , r = of(co, e.__scopeTooltip)
      , s = g.useRef(null)
      , o = Se(t, s)
      , [i,l] = g.useState(null)
      , {trigger: c, onClose: u} = n
      , d = s.current
      , {onPointerInTransitChange: h} = r
      , p = g.useCallback( () => {
        l(null),
        h(!1)
    }
    , [h])
      , f = g.useCallback( (b, v) => {
        const w = b.currentTarget
          , x = {
            x: b.clientX,
            y: b.clientY
        }
          , m = aC(x, w.getBoundingClientRect())
          , y = lC(x, m)
          , S = cC(v.getBoundingClientRect())
          , j = dC([...y, ...S]);
        l(j),
        h(!0)
    }
    , [h]);
    return g.useEffect( () => () => p(), [p]),
    g.useEffect( () => {
        if (c && d) {
            const b = w => f(w, d)
              , v = w => f(w, c);
            return c.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", v),
            () => {
                c.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [c, d, f, p]),
    g.useEffect( () => {
        if (i) {
            const b = v => {
                const w = v.target
                  , x = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , m = (c == null ? void 0 : c.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , y = !uC(x, i);
                m ? p() : y && (p(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [c, d, i, u, p]),
    a.jsx(G0, {
        ...e,
        ref: o
    })
}
)
  , [rC,sC] = ec(ki, {
    isInside: !1
})
  , oC = lj("TooltipContent")
  , G0 = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": s, onEscapeKeyDown: o, onPointerDownOutside: i, ...l} = e
      , c = nc(co, n)
      , u = tc(n)
      , {onClose: d} = c;
    return g.useEffect( () => (document.addEventListener(yd, d),
    () => document.removeEventListener(yd, d)), [d]),
    g.useEffect( () => {
        if (c.trigger) {
            const h = p => {
                const f = p.target;
                f != null && f.contains(c.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", h, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", h, {
                capture: !0
            })
        }
    }
    , [c.trigger, d]),
    a.jsx(Vl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: h => h.preventDefault(),
        onDismiss: d,
        children: a.jsxs(z0, {
            "data-state": c.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [a.jsx(oC, {
                children: r
            }), a.jsx(rC, {
                scope: n,
                isInside: !0,
                children: a.jsx(Pj, {
                    id: c.contentId,
                    role: "tooltip",
                    children: s || r
                })
            })]
        })
    })
}
);
K0.displayName = co;
var Q0 = "TooltipArrow"
  , iC = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = tc(n);
    return sC(Q0, n).isInside ? null : a.jsx(B0, {
        ...s,
        ...r,
        ref: t
    })
}
);
iC.displayName = Q0;
function aC(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, o)) {
    case o:
        return "left";
    case s:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function lC(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function cC(e) {
    const {top: t, right: n, bottom: r, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: s,
        y: r
    }]
}
function uC(e, t) {
    const {x: n, y: r} = e;
    let s = !1;
    for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
        const l = t[o]
          , c = t[i]
          , u = l.x
          , d = l.y
          , h = c.x
          , p = c.y;
        d > r != p > r && n < (h - u) * (r - d) / (p - d) + u && (s = !s)
    }
    return s
}
function dC(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    hC(t)
}
function hC(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , i = t[t.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , i = n[n.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                n.pop();
            else
                break
        }
        n.push(s)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var fC = V0
  , pC = H0
  , mC = q0
  , Y0 = K0;
const J0 = fC
  , gC = pC
  , vC = mC
  , X0 = g.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => a.jsx(Y0, {
    ref: r,
    sideOffset: t,
    className: ce("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
X0.displayName = Y0.displayName;
var rc = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , sc = typeof window > "u" || "Deno"in globalThis;
function Wt() {}
function yC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function xC(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function wC(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function wd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function bC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function um(e, t) {
    const {type: n="all", exact: r, fetchStatus: s, predicate: o, queryKey: i, stale: l} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== af(i, t.options))
                return !1
        } else if (!Ni(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const c = t.isActive();
        if (n === "active" && !c || n === "inactive" && c)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || s && s !== t.state.fetchStatus || o && !o(t))
}
function dm(e, t) {
    const {exact: n, status: r, predicate: s, mutationKey: o} = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (_i(t.options.mutationKey) !== _i(o))
                return !1
        } else if (!Ni(t.options.mutationKey, o))
            return !1
    }
    return !(r && t.state.status !== r || s && !s(t))
}
function af(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || _i)(e)
}
function _i(e) {
    return JSON.stringify(e, (t, n) => bd(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
    r), {}) : n)
}
function Ni(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Ni(e[n], t[n])) : !1
}
function Z0(e, t) {
    if (e === t)
        return e;
    const n = hm(e) && hm(t);
    if (n || bd(e) && bd(t)) {
        const r = n ? e : Object.keys(e)
          , s = r.length
          , o = n ? t : Object.keys(t)
          , i = o.length
          , l = n ? [] : {}
          , c = new Set(r);
        let u = 0;
        for (let d = 0; d < i; d++) {
            const h = n ? d : o[d];
            (!n && c.has(h) || n) && e[h] === void 0 && t[h] === void 0 ? (l[h] = void 0,
            u++) : (l[h] = Z0(e[h], t[h]),
            l[h] === e[h] && e[h] !== void 0 && u++)
        }
        return s === i && u === s ? e : l
    }
    return t
}
function hm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function bd(e) {
    if (!fm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!fm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function fm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function SC(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function jC(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Z0(e, t) : t
}
function kC(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function _C(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var lf = Symbol();
function ex(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === lf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Fr, Jn, Ks, eg, NC = (eg = class extends rc {
    constructor() {
        super();
        le(this, Fr);
        le(this, Jn);
        le(this, Ks);
        J(this, Ks, t => {
            if (!sc && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, Jn) || this.setEventListener(E(this, Ks))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = E(this, Jn)) == null || t.call(this),
        J(this, Jn, void 0))
    }
    setEventListener(t) {
        var n;
        J(this, Ks, t),
        (n = E(this, Jn)) == null || n.call(this),
        J(this, Jn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        E(this, Fr) !== t && (J(this, Fr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof E(this, Fr) == "boolean" ? E(this, Fr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Fr = new WeakMap,
Jn = new WeakMap,
Ks = new WeakMap,
eg), tx = new NC, Gs, Xn, Qs, tg, CC = (tg = class extends rc {
    constructor() {
        super();
        le(this, Gs, !0);
        le(this, Xn);
        le(this, Qs);
        J(this, Qs, t => {
            if (!sc && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, Xn) || this.setEventListener(E(this, Qs))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = E(this, Xn)) == null || t.call(this),
        J(this, Xn, void 0))
    }
    setEventListener(t) {
        var n;
        J(this, Qs, t),
        (n = E(this, Xn)) == null || n.call(this),
        J(this, Xn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        E(this, Gs) !== t && (J(this, Gs, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return E(this, Gs)
    }
}
,
Gs = new WeakMap,
Xn = new WeakMap,
Qs = new WeakMap,
tg), xl = new CC;
function EC() {
    let e, t;
    const n = new Promise( (s, o) => {
        e = s,
        t = o
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(s) {
        Object.assign(n, s),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = s => {
        r({
            status: "fulfilled",
            value: s
        }),
        e(s)
    }
    ,
    n.reject = s => {
        r({
            status: "rejected",
            reason: s
        }),
        t(s)
    }
    ,
    n
}
function TC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function nx(e) {
    return (e ?? "online") === "online" ? xl.isOnline() : !0
}
var rx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Xc(e) {
    return e instanceof rx
}
function sx(e) {
    let t = !1, n = 0, r = !1, s;
    const o = EC()
      , i = v => {
        var w;
        r || (p(new rx(v)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , c = () => {
        t = !1
    }
      , u = () => tx.isFocused() && (e.networkMode === "always" || xl.isOnline()) && e.canRun()
      , d = () => nx(e.networkMode) && e.canRun()
      , h = v => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, v),
        s == null || s(),
        o.resolve(v))
    }
      , p = v => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, v),
        s == null || s(),
        o.reject(v))
    }
      , f = () => new Promise(v => {
        var w;
        s = x => {
            (r || u()) && v(x)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var v;
        s = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            v = w ?? e.fn()
        } catch (x) {
            v = Promise.reject(x)
        }
        Promise.resolve(v).then(h).catch(x => {
            var k;
            if (r)
                return;
            const m = e.retry ?? (sc ? 0 : 3)
              , y = e.retryDelay ?? TC
              , S = typeof y == "function" ? y(n, x) : y
              , j = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, x);
            if (t || !j) {
                p(x);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, x),
            SC(S).then( () => u() ? void 0 : f()).then( () => {
                t ? p(x) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        cancel: i,
        continue: () => (s == null || s(),
        o),
        cancelRetry: l,
        continueRetry: c,
        canStart: d,
        start: () => (d() ? b() : f().then(b),
        o)
    }
}
var PC = e => setTimeout(e, 0);
function RC() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , s = PC;
    const o = l => {
        t ? e.push(l) : s( () => {
            n(l)
        }
        )
    }
      , i = () => {
        const l = e;
        e = [],
        l.length && s( () => {
            r( () => {
                l.forEach(c => {
                    n(c)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let c;
            t++;
            try {
                c = l()
            } finally {
                t--,
                t || i()
            }
            return c
        }
        ,
        batchCalls: l => (...c) => {
            o( () => {
                l(...c)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            s = l
        }
    }
}
var rt = RC(), Ur, ng, ox = (ng = class {
    constructor() {
        le(this, Ur)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        xC(this.gcTime) && J(this, Ur, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (sc ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        E(this, Ur) && (clearTimeout(E(this, Ur)),
        J(this, Ur, void 0))
    }
}
,
Ur = new WeakMap,
ng), Ys, zr, Nt, Br, Ye, Ri, Wr, Vt, yn, rg, AC = (rg = class extends ox {
    constructor(t) {
        super();
        le(this, Vt);
        le(this, Ys);
        le(this, zr);
        le(this, Nt);
        le(this, Br);
        le(this, Ye);
        le(this, Ri);
        le(this, Wr);
        J(this, Wr, !1),
        J(this, Ri, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        J(this, Br, t.client),
        J(this, Nt, E(this, Br).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        J(this, Ys, IC(this.options)),
        this.state = t.state ?? E(this, Ys),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = E(this, Ye)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...E(this, Ri),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && E(this, Nt).remove(this)
    }
    setData(t, n) {
        const r = jC(this.state.data, t, this.options);
        return Ke(this, Vt, yn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ke(this, Vt, yn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, s;
        const n = (r = E(this, Ye)) == null ? void 0 : r.promise;
        return (s = E(this, Ye)) == null || s.cancel(t),
        n ? n.then(Wt).catch(Wt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(E(this, Ys))
    }
    isActive() {
        return this.observers.some(t => bC(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === lf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => wd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !wC(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, Ye)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, Ye)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        E(this, Nt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (E(this, Ye) && (E(this, Wr) ? E(this, Ye).cancel({
            revert: !0
        }) : E(this, Ye).cancelRetry()),
        this.scheduleGc()),
        E(this, Nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ke(this, Vt, yn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, h;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (E(this, Ye))
                return E(this, Ye).continueRetry(),
                E(this, Ye).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(f => f.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , s = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (J(this, Wr, !0),
                r.signal)
            })
        }
          , o = () => {
            const p = ex(this.options, n)
              , b = ( () => {
                const v = {
                    client: E(this, Br),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(v),
                v
            }
            )();
            return J(this, Wr, !1),
            this.options.persister ? this.options.persister(p, b, this) : p(b)
        }
          , l = ( () => {
            const p = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: E(this, Br),
                state: this.state,
                fetchFn: o
            };
            return s(p),
            p
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        J(this, zr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)) && Ke(this, Vt, yn).call(this, {
            type: "fetch",
            meta: (h = l.fetchOptions) == null ? void 0 : h.meta
        });
        const c = p => {
            var f, b, v, w;
            Xc(p) && p.silent || Ke(this, Vt, yn).call(this, {
                type: "error",
                error: p
            }),
            Xc(p) || ((b = (f = E(this, Nt).config).onError) == null || b.call(f, p, this),
            (w = (v = E(this, Nt).config).onSettled) == null || w.call(v, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return J(this, Ye, sx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                var f, b, v, w;
                if (p === void 0) {
                    c(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (x) {
                    c(x);
                    return
                }
                (b = (f = E(this, Nt).config).onSuccess) == null || b.call(f, p, this),
                (w = (v = E(this, Nt).config).onSettled) == null || w.call(v, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: c,
            onFail: (p, f) => {
                Ke(this, Vt, yn).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: f
                })
            }
            ,
            onPause: () => {
                Ke(this, Vt, yn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ke(this, Vt, yn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        E(this, Ye).start()
    }
}
,
Ys = new WeakMap,
zr = new WeakMap,
Nt = new WeakMap,
Br = new WeakMap,
Ye = new WeakMap,
Ri = new WeakMap,
Wr = new WeakMap,
Vt = new WeakSet,
yn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...OC(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return J(this, zr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = t.error;
            return Xc(s) && s.revert && E(this, zr) ? {
                ...E(this, zr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    rt.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        E(this, Nt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
rg);
function OC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: nx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function IC(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var on, sg, MC = (sg = class extends rc {
    constructor(t={}) {
        super();
        le(this, on);
        this.config = t,
        J(this, on, new Map)
    }
    build(t, n, r) {
        const s = n.queryKey
          , o = n.queryHash ?? af(s, n);
        let i = this.get(o);
        return i || (i = new AC({
            client: t,
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(i)),
        i
    }
    add(t) {
        E(this, on).has(t.queryHash) || (E(this, on).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = E(this, on).get(t.queryHash);
        n && (t.destroy(),
        n === t && E(this, on).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        rt.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return E(this, on).get(t)
    }
    getAll() {
        return [...E(this, on).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => um(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => um(t, r)) : n
    }
    notify(t) {
        rt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        rt.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        rt.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
on = new WeakMap,
sg), an, et, Vr, ln, Wn, og, LC = (og = class extends ox {
    constructor(t) {
        super();
        le(this, ln);
        le(this, an);
        le(this, et);
        le(this, Vr);
        this.mutationId = t.mutationId,
        J(this, et, t.mutationCache),
        J(this, an, []),
        this.state = t.state || $C(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        E(this, an).includes(t) || (E(this, an).push(t),
        this.clearGcTimeout(),
        E(this, et).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        J(this, an, E(this, an).filter(n => n !== t)),
        this.scheduleGc(),
        E(this, et).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        E(this, an).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, et).remove(this))
    }
    continue() {
        var t;
        return ((t = E(this, Vr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, l, c, u, d, h, p, f, b, v, w, x, m, y, S, j, k, _, N;
        const n = () => {
            Ke(this, ln, Wn).call(this, {
                type: "continue"
            })
        }
        ;
        J(this, Vr, sx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, R) => {
                Ke(this, ln, Wn).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: R
                })
            }
            ,
            onPause: () => {
                Ke(this, ln, Wn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, et).canRun(this)
        }));
        const r = this.state.status === "pending"
          , s = !E(this, Vr).canStart();
        try {
            if (r)
                n();
            else {
                Ke(this, ln, Wn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: s
                }),
                await ((i = (o = E(this, et).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const R = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t));
                R !== this.state.context && Ke(this, ln, Wn).call(this, {
                    type: "pending",
                    context: R,
                    variables: t,
                    isPaused: s
                })
            }
            const A = await E(this, Vr).start();
            return await ((d = (u = E(this, et).config).onSuccess) == null ? void 0 : d.call(u, A, t, this.state.context, this)),
            await ((p = (h = this.options).onSuccess) == null ? void 0 : p.call(h, A, t, this.state.context)),
            await ((b = (f = E(this, et).config).onSettled) == null ? void 0 : b.call(f, A, null, this.state.variables, this.state.context, this)),
            await ((w = (v = this.options).onSettled) == null ? void 0 : w.call(v, A, null, t, this.state.context)),
            Ke(this, ln, Wn).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((m = (x = E(this, et).config).onError) == null ? void 0 : m.call(x, A, t, this.state.context, this)),
                await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, A, t, this.state.context)),
                await ((k = (j = E(this, et).config).onSettled) == null ? void 0 : k.call(j, void 0, A, this.state.variables, this.state.context, this)),
                await ((N = (_ = this.options).onSettled) == null ? void 0 : N.call(_, void 0, A, t, this.state.context)),
                A
            } finally {
                Ke(this, ln, Wn).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            E(this, et).runNext(this)
        }
    }
}
,
an = new WeakMap,
et = new WeakMap,
Vr = new WeakMap,
ln = new WeakSet,
Wn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    rt.batch( () => {
        E(this, an).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        E(this, et).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
og);
function $C() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var jn, Ht, Ai, ig, DC = (ig = class extends rc {
    constructor(t={}) {
        super();
        le(this, jn);
        le(this, Ht);
        le(this, Ai);
        this.config = t,
        J(this, jn, new Set),
        J(this, Ht, new Map),
        J(this, Ai, 0)
    }
    build(t, n, r) {
        const s = new LC({
            mutationCache: this,
            mutationId: ++Gi(this, Ai)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(s),
        s
    }
    add(t) {
        E(this, jn).add(t);
        const n = ga(t);
        if (typeof n == "string") {
            const r = E(this, Ht).get(n);
            r ? r.push(t) : E(this, Ht).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (E(this, jn).delete(t)) {
            const n = ga(t);
            if (typeof n == "string") {
                const r = E(this, Ht).get(n);
                if (r)
                    if (r.length > 1) {
                        const s = r.indexOf(t);
                        s !== -1 && r.splice(s, 1)
                    } else
                        r[0] === t && E(this, Ht).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ga(t);
        if (typeof n == "string") {
            const r = E(this, Ht).get(n)
              , s = r == null ? void 0 : r.find(o => o.state.status === "pending");
            return !s || s === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ga(t);
        if (typeof n == "string") {
            const s = (r = E(this, Ht).get(n)) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        rt.batch( () => {
            E(this, jn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            E(this, jn).clear(),
            E(this, Ht).clear()
        }
        )
    }
    getAll() {
        return Array.from(E(this, jn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => dm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => dm(t, n))
    }
    notify(t) {
        rt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return rt.batch( () => Promise.all(t.map(n => n.continue().catch(Wt))))
    }
}
,
jn = new WeakMap,
Ht = new WeakMap,
Ai = new WeakMap,
ig);
function ga(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function pm(e) {
    return {
        onFetch: (t, n) => {
            var d, h, p, f, b;
            const r = t.options
              , s = (p = (h = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : p.direction
              , o = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , c = 0;
            const u = async () => {
                let v = !1;
                const w = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , x = ex(t.options, t.fetchOptions)
                  , m = async (y, S, j) => {
                    if (v)
                        return Promise.reject();
                    if (S == null && y.pages.length)
                        return Promise.resolve(y);
                    const _ = ( () => {
                        const U = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: j ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(U),
                        U
                    }
                    )()
                      , N = await x(_)
                      , {maxPages: A} = t.options
                      , R = j ? _C : kC;
                    return {
                        pages: R(y.pages, N, A),
                        pageParams: R(y.pageParams, S, A)
                    }
                }
                ;
                if (s && o.length) {
                    const y = s === "backward"
                      , S = y ? FC : mm
                      , j = {
                        pages: o,
                        pageParams: i
                    }
                      , k = S(r, j);
                    l = await m(j, k, y)
                } else {
                    const y = e ?? o.length;
                    do {
                        const S = c === 0 ? i[0] ?? r.initialPageParam : mm(r, l);
                        if (c > 0 && S == null)
                            break;
                        l = await m(l, S),
                        c++
                    } while (c < y)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, w;
                return (w = (v = t.options).persister) == null ? void 0 : w.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function mm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function FC(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Pe, Zn, er, Js, Xs, tr, Zs, eo, ag, UC = (ag = class {
    constructor(e={}) {
        le(this, Pe);
        le(this, Zn);
        le(this, er);
        le(this, Js);
        le(this, Xs);
        le(this, tr);
        le(this, Zs);
        le(this, eo);
        J(this, Pe, e.queryCache || new MC),
        J(this, Zn, e.mutationCache || new DC),
        J(this, er, e.defaultOptions || {}),
        J(this, Js, new Map),
        J(this, Xs, new Map),
        J(this, tr, 0)
    }
    mount() {
        Gi(this, tr)._++,
        E(this, tr) === 1 && (J(this, Zs, tx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            E(this, Pe).onFocus())
        }
        )),
        J(this, eo, xl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            E(this, Pe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Gi(this, tr)._--,
        E(this, tr) === 0 && ((e = E(this, Zs)) == null || e.call(this),
        J(this, Zs, void 0),
        (t = E(this, eo)) == null || t.call(this),
        J(this, eo, void 0))
    }
    isFetching(e) {
        return E(this, Pe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return E(this, Zn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = E(this, Pe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = E(this, Pe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(wd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return E(this, Pe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , s = E(this, Pe).get(r.queryHash)
          , o = s == null ? void 0 : s.state.data
          , i = yC(t, o);
        if (i !== void 0)
            return E(this, Pe).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return rt.batch( () => E(this, Pe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = E(this, Pe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = E(this, Pe);
        rt.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = E(this, Pe);
        return rt.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = rt.batch( () => E(this, Pe).findAll(e).map(s => s.cancel(n)));
        return Promise.all(r).then(Wt).catch(Wt)
    }
    invalidateQueries(e, t={}) {
        return rt.batch( () => (E(this, Pe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = rt.batch( () => E(this, Pe).findAll(e).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let o = s.fetch(void 0, n);
            return n.throwOnError || (o = o.catch(Wt)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : o
        }
        ));
        return Promise.all(r).then(Wt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, Pe).build(this, t);
        return n.isStaleByTime(wd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Wt).catch(Wt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = pm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Wt).catch(Wt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = pm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return xl.isOnline() ? E(this, Zn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return E(this, Pe)
    }
    getMutationCache() {
        return E(this, Zn)
    }
    getDefaultOptions() {
        return E(this, er)
    }
    setDefaultOptions(e) {
        J(this, er, e)
    }
    setQueryDefaults(e, t) {
        E(this, Js).set(_i(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...E(this, Js).values()]
          , n = {};
        return t.forEach(r => {
            Ni(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        E(this, Xs).set(_i(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...E(this, Xs).values()]
          , n = {};
        return t.forEach(r => {
            Ni(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...E(this, er).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = af(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === lf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...E(this, er).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        E(this, Pe).clear(),
        E(this, Zn).clear()
    }
}
,
Pe = new WeakMap,
Zn = new WeakMap,
er = new WeakMap,
Js = new WeakMap,
Xs = new WeakMap,
tr = new WeakMap,
Zs = new WeakMap,
eo = new WeakMap,
ag), zC = g.createContext(void 0), BC = ({client: e, children: t}) => (g.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
a.jsx(zC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ci() {
    return Ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ci.apply(this, arguments)
}
var sr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(sr || (sr = {}));
const gm = "popstate";
function WC(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let {pathname: o, search: i, hash: l} = r.location;
        return Sd("", {
            pathname: o,
            search: i,
            hash: l
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : wl(s)
    }
    return HC(t, n, null, e)
}
function Me(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function ix(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function VC() {
    return Math.random().toString(36).substr(2, 8)
}
function vm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Sd(e, t, n, r) {
    return n === void 0 && (n = null),
    Ci({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? wo(t) : t, {
        state: n,
        key: t && t.key || r || VC()
    })
}
function wl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function wo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function HC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: o=!1} = r
      , i = s.history
      , l = sr.Pop
      , c = null
      , u = d();
    u == null && (u = 0,
    i.replaceState(Ci({}, i.state, {
        idx: u
    }), ""));
    function d() {
        return (i.state || {
            idx: null
        }).idx
    }
    function h() {
        l = sr.Pop;
        let w = d()
          , x = w == null ? null : w - u;
        u = w,
        c && c({
            action: l,
            location: v.location,
            delta: x
        })
    }
    function p(w, x) {
        l = sr.Push;
        let m = Sd(v.location, w, x);
        u = d() + 1;
        let y = vm(m, u)
          , S = v.createHref(m);
        try {
            i.pushState(y, "", S)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            s.location.assign(S)
        }
        o && c && c({
            action: l,
            location: v.location,
            delta: 1
        })
    }
    function f(w, x) {
        l = sr.Replace;
        let m = Sd(v.location, w, x);
        u = d();
        let y = vm(m, u)
          , S = v.createHref(m);
        i.replaceState(y, "", S),
        o && c && c({
            action: l,
            location: v.location,
            delta: 0
        })
    }
    function b(w) {
        let x = s.location.origin !== "null" ? s.location.origin : s.location.href
          , m = typeof w == "string" ? w : wl(w);
        return m = m.replace(/ $/, "%20"),
        Me(x, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,x)
    }
    let v = {
        get action() {
            return l
        },
        get location() {
            return e(s, i)
        },
        listen(w) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(gm, h),
            c = w,
            () => {
                s.removeEventListener(gm, h),
                c = null
            }
        },
        createHref(w) {
            return t(s, w)
        },
        createURL: b,
        encodeLocation(w) {
            let x = b(w);
            return {
                pathname: x.pathname,
                search: x.search,
                hash: x.hash
            }
        },
        push: p,
        replace: f,
        go(w) {
            return i.go(w)
        }
    };
    return v
}
var ym;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ym || (ym = {}));
function qC(e, t, n) {
    return n === void 0 && (n = "/"),
    KC(e, t, n, !1)
}
function KC(e, t, n, r) {
    let s = typeof t == "string" ? wo(t) : t
      , o = cf(s.pathname || "/", n);
    if (o == null)
        return null;
    let i = ax(e);
    GC(i);
    let l = null;
    for (let c = 0; l == null && c < i.length; ++c) {
        let u = oE(o);
        l = rE(i[c], u, r)
    }
    return l
}
function ax(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (o, i, l) => {
        let c = {
            relativePath: l === void 0 ? o.path || "" : l,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        c.relativePath.startsWith("/") && (Me(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        c.relativePath = c.relativePath.slice(r.length));
        let u = fr([r, c.relativePath])
          , d = n.concat(c);
        o.children && o.children.length > 0 && (Me(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        ax(o.children, t, d, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: tE(u, o.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (o, i) => {
        var l;
        if (o.path === "" || !((l = o.path) != null && l.includes("?")))
            s(o, i);
        else
            for (let c of lx(o.path))
                s(o, i, c)
    }
    ),
    t
}
function lx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [o, ""] : [o];
    let i = lx(r.join("/"))
      , l = [];
    return l.push(...i.map(c => c === "" ? o : [o, c].join("/"))),
    s && l.push(...i),
    l.map(c => e.startsWith("/") && c === "" ? "/" : c)
}
function GC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : nE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const QC = /^:[\w-]+$/
  , YC = 3
  , JC = 2
  , XC = 1
  , ZC = 10
  , eE = -2
  , xm = e => e === "*";
function tE(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(xm) && (r += eE),
    t && (r += JC),
    n.filter(s => !xm(s)).reduce( (s, o) => s + (QC.test(o) ? YC : o === "" ? XC : ZC), r)
}
function nE(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function rE(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , o = "/"
      , i = [];
    for (let l = 0; l < r.length; ++l) {
        let c = r[l]
          , u = l === r.length - 1
          , d = o === "/" ? t : t.slice(o.length) || "/"
          , h = wm({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: u
        }, d)
          , p = c.route;
        if (!h && u && n && !r[r.length - 1].route.index && (h = wm({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        i.push({
            params: s,
            pathname: fr([o, h.pathname]),
            pathnameBase: cE(fr([o, h.pathnameBase])),
            route: p
        }),
        h.pathnameBase !== "/" && (o = fr([o, h.pathnameBase]))
    }
    return i
}
function wm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = sE(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let o = s[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , l = s.slice(1);
    return {
        params: r.reduce( (u, d, h) => {
            let {paramName: p, isOptional: f} = d;
            if (p === "*") {
                let v = l[h] || "";
                i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const b = l[h];
            return f && !b ? u[p] = void 0 : u[p] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function sE(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ix(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, c) => (r.push({
        paramName: l,
        isOptional: c != null
    }),
    c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function oE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ix(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function cf(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function iE(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: s=""} = typeof e == "string" ? wo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : aE(n, t) : t,
        search: uE(r),
        hash: dE(s)
    }
}
function aE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Zc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function lE(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function cx(e, t) {
    let n = lE(e);
    return t ? n.map( (r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function ux(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = wo(e) : (s = Ci({}, e),
    Me(!s.pathname || !s.pathname.includes("?"), Zc("?", "pathname", "search", s)),
    Me(!s.pathname || !s.pathname.includes("#"), Zc("#", "pathname", "hash", s)),
    Me(!s.search || !s.search.includes("#"), Zc("#", "search", "hash", s)));
    let o = e === "" || s.pathname === "", i = o ? "/" : s.pathname, l;
    if (i == null)
        l = n;
    else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === ".."; )
                p.shift(),
                h -= 1;
            s.pathname = p.join("/")
        }
        l = h >= 0 ? t[h] : "/"
    }
    let c = iE(s, l)
      , u = i && i !== "/" && i.endsWith("/")
      , d = (o || i === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"),
    c
}
const fr = e => e.join("/").replace(/\/\/+/g, "/")
  , cE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , uE = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , dE = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function hE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const dx = ["post", "put", "patch", "delete"];
new Set(dx);
const fE = ["get", ...dx];
new Set(fE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ei() {
    return Ei = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ei.apply(this, arguments)
}
const uf = g.createContext(null)
  , pE = g.createContext(null)
  , ls = g.createContext(null)
  , oc = g.createContext(null)
  , cs = g.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , hx = g.createContext(null);
function mE(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Bi() || Me(!1);
    let {basename: r, navigator: s} = g.useContext(ls)
      , {hash: o, pathname: i, search: l} = mx(e, {
        relative: n
    })
      , c = i;
    return r !== "/" && (c = i === "/" ? r : fr([r, i])),
    s.createHref({
        pathname: c,
        search: l,
        hash: o
    })
}
function Bi() {
    return g.useContext(oc) != null
}
function bo() {
    return Bi() || Me(!1),
    g.useContext(oc).location
}
function fx(e) {
    g.useContext(ls).static || g.useLayoutEffect(e)
}
function px() {
    let {isDataRoute: e} = g.useContext(cs);
    return e ? EE() : gE()
}
function gE() {
    Bi() || Me(!1);
    let e = g.useContext(uf)
      , {basename: t, future: n, navigator: r} = g.useContext(ls)
      , {matches: s} = g.useContext(cs)
      , {pathname: o} = bo()
      , i = JSON.stringify(cx(s, n.v7_relativeSplatPath))
      , l = g.useRef(!1);
    return fx( () => {
        l.current = !0
    }
    ),
    g.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let h = ux(u, JSON.parse(i), o, d.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : fr([t, h.pathname])),
        (d.replace ? r.replace : r.push)(h, d.state, d)
    }, [t, r, i, o, e])
}
function mx(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = g.useContext(ls)
      , {matches: s} = g.useContext(cs)
      , {pathname: o} = bo()
      , i = JSON.stringify(cx(s, r.v7_relativeSplatPath));
    return g.useMemo( () => ux(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function vE(e, t) {
    return yE(e, t)
}
function yE(e, t, n, r) {
    Bi() || Me(!1);
    let {navigator: s} = g.useContext(ls)
      , {matches: o} = g.useContext(cs)
      , i = o[o.length - 1]
      , l = i ? i.params : {};
    i && i.pathname;
    let c = i ? i.pathnameBase : "/";
    i && i.route;
    let u = bo(), d;
    if (t) {
        var h;
        let w = typeof t == "string" ? wo(t) : t;
        c === "/" || (h = w.pathname) != null && h.startsWith(c) || Me(!1),
        d = w
    } else
        d = u;
    let p = d.pathname || "/"
      , f = p;
    if (c !== "/") {
        let w = c.replace(/^\//, "").split("/");
        f = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = qC(e, {
        pathname: f
    })
      , v = jE(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: fr([c, s.encodeLocation ? s.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? c : fr([c, s.encodeLocation ? s.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r);
    return t && v ? g.createElement(oc.Provider, {
        value: {
            location: Ei({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: sr.Pop
        }
    }, v) : v
}
function xE() {
    let e = CE()
      , t = hE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? g.createElement("pre", {
        style: s
    }, n) : null, null)
}
const wE = g.createElement(xE, null);
class bE extends g.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(cs.Provider, {
            value: this.props.routeContext
        }, g.createElement(hx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function SE(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = g.useContext(uf);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(cs.Provider, {
        value: t
    }, r)
}
function jE(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , l = (s = n) == null ? void 0 : s.errors;
    if (l != null) {
        let d = i.findIndex(h => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0);
        d >= 0 || Me(!1),
        i = i.slice(0, Math.min(i.length, d + 1))
    }
    let c = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < i.length; d++) {
            let h = i[d];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = d),
            h.route.id) {
                let {loaderData: p, errors: f} = n
                  , b = h.route.loader && p[h.route.id] === void 0 && (!f || f[h.route.id] === void 0);
                if (h.route.lazy || b) {
                    c = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (d, h, p) => {
        let f, b = !1, v = null, w = null;
        n && (f = l && h.route.id ? l[h.route.id] : void 0,
        v = h.route.errorElement || wE,
        c && (u < 0 && p === 0 ? (b = !0,
        w = null) : u === p && (b = !0,
        w = h.route.hydrateFallbackElement || null)));
        let x = t.concat(i.slice(0, p + 1))
          , m = () => {
            let y;
            return f ? y = v : b ? y = w : h.route.Component ? y = g.createElement(h.route.Component, null) : h.route.element ? y = h.route.element : y = d,
            g.createElement(SE, {
                match: h,
                routeContext: {
                    outlet: d,
                    matches: x,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0) ? g.createElement(bE, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: f,
            children: m(),
            routeContext: {
                outlet: null,
                matches: x,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var gx = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(gx || {})
  , bl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(bl || {});
function kE(e) {
    let t = g.useContext(uf);
    return t || Me(!1),
    t
}
function _E(e) {
    let t = g.useContext(pE);
    return t || Me(!1),
    t
}
function NE(e) {
    let t = g.useContext(cs);
    return t || Me(!1),
    t
}
function vx(e) {
    let t = NE()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Me(!1),
    n.route.id
}
function CE() {
    var e;
    let t = g.useContext(hx)
      , n = _E(bl.UseRouteError)
      , r = vx(bl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function EE() {
    let {router: e} = kE(gx.UseNavigateStable)
      , t = vx(bl.UseNavigateStable)
      , n = g.useRef(!1);
    return fx( () => {
        n.current = !0
    }
    ),
    g.useCallback(function(s, o) {
        o === void 0 && (o = {}),
        n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Ei({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function TE(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function mt(e) {
    Me(!1)
}
function PE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=sr.Pop, navigator: o, static: i=!1, future: l} = e;
    Bi() && Me(!1);
    let c = t.replace(/^\/*/, "/")
      , u = g.useMemo( () => ({
        basename: c,
        navigator: o,
        static: i,
        future: Ei({
            v7_relativeSplatPath: !1
        }, l)
    }), [c, l, o, i]);
    typeof r == "string" && (r = wo(r));
    let {pathname: d="/", search: h="", hash: p="", state: f=null, key: b="default"} = r
      , v = g.useMemo( () => {
        let w = cf(d, c);
        return w == null ? null : {
            location: {
                pathname: w,
                search: h,
                hash: p,
                state: f,
                key: b
            },
            navigationType: s
        }
    }
    , [c, d, h, p, f, b, s]);
    return v == null ? null : g.createElement(ls.Provider, {
        value: u
    }, g.createElement(oc.Provider, {
        children: n,
        value: v
    }))
}
function RE(e) {
    let {children: t, location: n} = e;
    return vE(jd(t), n)
}
new Promise( () => {}
);
function jd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return g.Children.forEach(e, (r, s) => {
        if (!g.isValidElement(r))
            return;
        let o = [...t, s];
        if (r.type === g.Fragment) {
            n.push.apply(n, jd(r.props.children, o));
            return
        }
        r.type !== mt && Me(!1),
        !r.props.index || !r.props.children || Me(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = jd(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kd() {
    return kd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    kd.apply(this, arguments)
}
function AE(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, o;
    for (o = 0; o < r.length; o++)
        s = r[o],
        !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function OE(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function IE(e, t) {
    return e.button === 0 && (!t || t === "_self") && !OE(e)
}
const ME = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , LE = "6";
try {
    window.__reactRouterVersion = LE
} catch {}
const $E = "startTransition"
  , bm = Qd[$E];
function DE(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , o = g.useRef();
    o.current == null && (o.current = WC({
        window: s,
        v5Compat: !0
    }));
    let i = o.current
      , [l,c] = g.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , d = g.useCallback(h => {
        u && bm ? bm( () => c(h)) : c(h)
    }
    , [c, u]);
    return g.useLayoutEffect( () => i.listen(d), [i, d]),
    g.useEffect( () => TE(r), [r]),
    g.createElement(PE, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: i,
        future: r
    })
}
const FE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , UE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , me = g.forwardRef(function(t, n) {
    let {onClick: r, relative: s, reloadDocument: o, replace: i, state: l, target: c, to: u, preventScrollReset: d, viewTransition: h} = t, p = AE(t, ME), {basename: f} = g.useContext(ls), b, v = !1;
    if (typeof u == "string" && UE.test(u) && (b = u,
    FE))
        try {
            let y = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
              , j = cf(S.pathname, f);
            S.origin === y.origin && j != null ? u = j + S.search + S.hash : v = !0
        } catch {}
    let w = mE(u, {
        relative: s
    })
      , x = zE(u, {
        replace: i,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function m(y) {
        r && r(y),
        y.defaultPrevented || x(y)
    }
    return g.createElement("a", kd({}, p, {
        href: b || w,
        onClick: v || o ? r : m,
        ref: n,
        target: c
    }))
});
var Sm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Sm || (Sm = {}));
var jm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(jm || (jm = {}));
function zE(e, t) {
    let {target: n, replace: r, state: s, preventScrollReset: o, relative: i, viewTransition: l} = t === void 0 ? {} : t
      , c = px()
      , u = bo()
      , d = mx(e, {
        relative: i
    });
    return g.useCallback(h => {
        if (IE(h, n)) {
            h.preventDefault();
            let p = r !== void 0 ? r : wl(u) === wl(d);
            c(e, {
                replace: p,
                state: s,
                preventScrollReset: o,
                relative: i,
                viewTransition: l
            })
        }
    }
    , [u, c, d, r, s, n, e, o, i, l])
}
const BE = Kl("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-neon-blue",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-neon-red",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            racing: "bg-gradient-primary text-primary-foreground shadow-neon-gold hover:shadow-lg hover:scale-105 font-semibold",
            hero: "bg-gradient-secondary text-white shadow-lg hover:shadow-neon-red hover:scale-105 font-semibold border border-secondary/20",
            glow: "bg-transparent border-2 border-warning text-warning shadow-neon-gold hover:bg-warning hover:text-warning-foreground"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , B = g.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...s}, o) => {
    const i = r ? ij : "button";
    return a.jsx(i, {
        className: ce(BE({
            variant: t,
            size: n,
            className: e
        })),
        ref: o,
        ...s
    })
}
);
B.displayName = "Button";
const en = () => {
    const [e,t] = g.useState(!1)
      , [n,r] = g.useState(!1);
    g.useEffect( () => {
        const o = () => {
            t(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", o),
        () => window.removeEventListener("scroll", o)
    }
    , []);
    const s = [{
        href: "/",
        label: "Home"
    }, {
        href: "/about",
        label: "About"
    }, {
        href: "/team",
        label: "Team"
    }, {
        href: "/sponsors",
        label: "Sponsors"
    }];
    return a.jsx("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [a.jsx(me, {
                    to: "/",
                    className: "flex items-center gap-2",
                    children: a.jsx("img", {
                        src: "/assets/cuautonomous.png",
                        alt: "CU Autonomous Racing",
                        className: "h-11 w-auto object-contain"
                        })
                }), a.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [s.map(o => a.jsxs(me, {
                        to: o.href,
                        className: "text-sm font-medium text-muted-foreground hover:text-warning transition-colors relative group",
                        children: [o.label, a.jsx("span", {
                            className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-warning transition-all duration-300 group-hover:w-full"
                        })]
                    }, o.href)), a.jsx(B, {
                        variant: "racing",
                        size: "sm",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Join Us"
                        })
                    }), a.jsx("a", {
                        href: "https://instagram.com/cuautonomousracing",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-white hover:text-warning transition-colors p-2",
                        children: a.jsx(lk, {
                            className: "h-5 w-5"
                        })
                    })]
                }), a.jsx("button", {
                    onClick: () => r(!n),
                    className: "md:hidden p-2 text-foreground",
                    "aria-label": "Toggle menu",
                    children: n ? a.jsx(i0, {}) : a.jsx(uk, {})
                })]
            }), n && a.jsx("div", {
                className: "md:hidden py-4 border-t border-border animate-fade-in",
                children: a.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [s.map(o => a.jsx(me, {
                        to: o.href,
                        onClick: () => r(!1),
                        className: "text-sm font-medium text-muted-foreground hover:text-warning transition-colors",
                        children: o.label
                    }, o.href)), a.jsx(B, {
                        variant: "racing",
                        size: "sm",
                        className: "w-full",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Join Us"
                        })
                    })]
                })
            })]
        })
    })
}
  , WE = "/assets/hero-bg-CfPuGlFO.jpg"
  , VE = () => {
    const e = g.useRef(null)
      , [t,n] = g.useState(!1);
    g.useEffect( () => {
        const o = e.current;
        if (!o)
            return;
        const i = o.getContext("2d");
        if (!i)
            return;
        o.width = window.innerWidth,
        o.height = window.innerHeight;
        const l = 30
          , c = [];
        for (let h = 0; h < o.width; h += l)
            for (let p = 0; p < o.height; p += l)
                c.push({
                    x: h,
                    y: p,
                    opacity: Math.random() * .5
                });
        const u = () => {
            i.clearRect(0, 0, o.width, o.height),
            c.forEach(h => {
                h.opacity += (Math.random() - .5) * .02,
                h.opacity = Math.max(.1, Math.min(.5, h.opacity)),
                i.beginPath(),
                i.arc(h.x, h.y, 1, 0, Math.PI * 2),
                i.fillStyle = `hsla(200, 100%, 50%, ${h.opacity})`,
                i.fill()
            }
            ),
            requestAnimationFrame(u)
        }
        ;
        u();
        const d = () => {
            o.width = window.innerWidth,
            o.height = window.innerHeight
        }
        ;
        return window.addEventListener("resize", d),
        () => window.removeEventListener("resize", d)
    }
    , []);
    const r = () => {
        const o = document.getElementById("about");
        o == null || o.scrollIntoView({
            behavior: "smooth"
        })
    }
      , s = () => {
        n(!0),
        setTimeout( () => n(!1), 600);
        const o = document.getElementById("get-involved");
        o == null || o.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return a.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 z-0",
            style: {
                backgroundImage: `url(${WE})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            },
            children: a.jsx("div", {
                className: "absolute inset-0 bg-background/70"
            })
        }), a.jsx("div", {
            className: "relative z-20 container mx-auto px-4 text-center",
            children: a.jsxs("div", {
                className: "space-y-8 animate-fade-in",
                children: [a.jsxs("h1", {
                    className: "text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold tracking-tight text-center",
                    children: [a.jsx("span", {
                        className: "block text-foreground",
                        children: "CU AUTONOMOUS"
                    }), a.jsx("span", {
                        className: "block bg-gradient-racing bg-clip-text text-transparent",
                        children: "RACING"
                    })]
                }), a.jsx("p", {
                    className: "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light text-center",
                    children: "Where cutting-edge AI meets high-speed racing. Building the next generation of autonomous vehicles at the intersection of innovation and adrenaline."
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8",
                    children: [a.jsx(J0, {
                        children: a.jsxs(gC, {
                            children: [a.jsx(vC, {
                                asChild: !0,
                                children: a.jsxs(B, {
                                    size: "lg",
                                    variant: "racing",
                                    className: `group relative overflow-hidden ${t ? "animate-rev" : ""}`,
                                    onClick: s,
                                    children: [a.jsxs("span", {
                                        className: "relative z-10 flex items-center",
                                        children: ["Join the Race", a.jsx(r0, {
                                            className: `ml-2 h-4 w-4 transition-all ${t ? "animate-flag-wave" : "group-hover:translate-x-1"}`
                                        })]
                                    }), t && a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                                    })]
                                })
                            }), a.jsx(X0, {
                                children: a.jsx("p", {
                                    children: "Be part of CU's fastest-growing team!"
                                })
                            })]
                        })
                    }), a.jsx(B, {
                        size: "lg",
                        variant: "glow",
                        onClick: () => {
                            var o;
                            return (o = document.getElementById("car-poll")) == null ? void 0 : o.scrollIntoView({
                                behavior: "smooth"
                            })
                        }
                        ,
                        children: "Name our First Car"
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto",
                    children: [a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsx("div", {
                            className: "text-3xl font-bold text-warning font-orbitron",
                            children: "30+"
                        }), a.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Active Members"
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsx("div", {
                            className: "text-3xl font-bold text-secondary font-orbitron",
                            children: "5"
                        }), a.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Sensors Integrating"
                        })]
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsx("div", {
                            className: "text-3xl font-bold text-accent font-orbitron",
                            children: "10,000+"
                        }), a.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Lines of Code"
                        })]
                    })]
                })]
            })
        }), a.jsx("button", {
            onClick: r,
            className:
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-8 z-20 animate-bounce flex items-center justify-center",
            children: a.jsx(qh, {
                className: "h-8 w-8 text-warning"
            })
        })]
    })
}
  , H = g.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: ce("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
H.displayName = "Card";
const HE = g.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: ce("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
HE.displayName = "CardHeader";
const qE = g.forwardRef( ({className: e, ...t}, n) => a.jsx("h3", {
    ref: n,
    className: ce("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
qE.displayName = "CardTitle";
const KE = g.forwardRef( ({className: e, ...t}, n) => a.jsx("p", {
    ref: n,
    className: ce("text-sm text-muted-foreground", e),
    ...t
}));
KE.displayName = "CardDescription";
const GE = g.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: ce("p-6 pt-0", e),
    ...t
}));
GE.displayName = "CardContent";
const QE = g.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: ce("flex items-center p-6 pt-0", e),
    ...t
}));
QE.displayName = "CardFooter";
const YE = () => {
    const e = [{
        icon: fl,
        title: "AI-Powered",
        description: "State-of-the-art machine learning for real-time decision making"
    }, {
        icon: pl,
        title: "High Performance",
        description: "Optimized systems achieving 10ms response times"
    }, {
        icon: as,
        title: "Competition Ready",
        description: "Built to compete at the highest levels of autonomous racing"
    }, {
        icon: Sr,
        title: "Collaborative",
        description: "Cross-disciplinary teams pushing technological boundaries"
    }];
    return a.jsx("section", {
        id: "about",
        className: "py-20 relative",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsxs("div", {
                className: "text-center mb-16 space-y-4",
                children: [a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-orbitron font-bold",
                    children: a.jsx("span", {
                        className: "bg-gradient-warning bg-clip-text text-transparent",
                        children: "About Our Mission"
                    })
                }), a.jsx("p", {
                    className: "text-lg text-muted-foreground max-w-3xl mx-auto",
                    children: "We're a passionate team of engineers, programmers, and innovators building the future of autonomous racing technology."
                })]
            }), a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center mb-16",
                children: [a.jsxs("div", {
                    className: "space-y-6",
                    children: [a.jsx("h3", {
                        className: "text-2xl font-semibold text-foreground",
                        children: "Pioneering Autonomous Racing Technology"
                    }), a.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: "CU Autonomous Racing stands at the forefront of collegiate autonomous vehicle development. Our team combines cutting-edge AI, computer vision, and control systems to create vehicles that can navigate complex racing environments at high speeds without human intervention."
                    }), a.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: "From sensor fusion to path planning, from real-time decision making to predictive modeling, we're tackling the most challenging problems in autonomous systems. Our work doesn't just push the boundaries of racing – it contributes to the broader field of autonomous transportation."
                    }), a.jsxs("div", {
                        className: "flex gap-8 pt-4",
                        children: [a.jsxs("div", {
                            children: [a.jsx("div", {
                                className: "text-3xl font-bold text-warning font-orbitron",
                                children: "2025"
                            }), a.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Founded"
                            })]
                        })]
                    })]
                }), a.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: e.map( (t, n) => a.jsxs(H, {
                        className: "p-6 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-warning/50 group cursor-pointer",
                        children: [a.jsx(t.icon, {
                            className: "h-8 w-8 text-warning mb-3 group-hover:text-warning-glow transition-colors"
                        }), a.jsx("h4", {
                            className: "text-lg font-semibold mb-2",
                            children: t.title
                        }), a.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: t.description
                        })]
                    }, n))
                })]
            }), a.jsxs(H, {
                className: "p-8 bg-gradient-dark border-warning/20 relative overflow-hidden",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-warning opacity-5"
                }), a.jsxs("div", {
                    className: "relative z-10 text-center space-y-4",
                    children: [a.jsx("h3", {
                        className: "text-2xl font-semibold",
                        children: "Our Vision"
                    }), a.jsx("p", {
                        className: "text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed",
                        children: "To lead the development of autonomous racing technology while inspiring the next generation of engineers to solve complex real-world problems through innovation, collaboration, and relentless pursuit of excellence."
                    })]
                })]
            })]
        })
    })
}
  , JE = Kl("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function we({className: e, variant: t, ...n}) {
    return a.jsx("div", {
        className: ce(JE({
            variant: t
        }), e),
        ...n
    })
}
const XE = "/assets/project1-CawQbjMe.jpg"
  , ZE = "/assets/project2-Ce_qX6wU.jpg"
  , e2 = "/assets/project3-uZEIcjEK.jpg"
  , t2 = "/assets/train-ai-preview-CuX0vZEE.jpg"
  , n2 = () => {
    const e = px()
      , t = [{
        title: "Vision AI System",
        description: "Advanced computer vision system using deep learning for real-time object detection and tracking at high speeds.",
        image: XE,
        tags: ["Computer Vision", "PyTorch", "YOLO", "ROS2"],
        status: "Active",
        link: "#",
        github: "#",
        isInteractive: !1
    }, {
        title: '"Train the AI" Mini-Game',
        description: "Interactive browser game that demonstrates how we train perception algorithms for autonomous racing. Help label training data!",
        image: t2,
        tags: ["Machine Learning", "Interactive", "Training Data", "Computer Vision"],
        status: "Active",
        link: "/train-ai",
        github: "#",
        isInteractive: !0
    }, {
        title: "Race Strategy Optimizer",
        description: "ML-powered race strategy optimization using reinforcement learning to make split-second tactical decisions.",
        image: ZE,
        tags: ["Reinforcement Learning", "Python", "TensorFlow", "Simulation"],
        status: "Completed",
        link: "#",
        github: "#",
        isInteractive: !1
    }, {
        title: "Vehicle Control System",
        description: "Low-latency control system for precise steering, throttle, and brake management with predictive modeling.",
        image: e2,
        tags: ["Control Systems", "C++", "MATLAB", "Hardware"],
        status: "In Progress",
        link: "#",
        github: "#",
        isInteractive: !1
    }]
      , n = r => {
        switch (r) {
        case "Active":
            return "bg-warning/20 text-warning border-warning/30";
        case "Completed":
            return "bg-accent/20 text-accent border-accent/30";
        case "In Progress":
            return "bg-secondary/20 text-secondary border-secondary/30";
        default:
            return ""
        }
    }
    ;
}
  , r2 = () => {
    const e = g.useRef(null);
    g.useEffect( () => {
        var s;
        const n = new IntersectionObserver(o => {
            o.forEach(i => {
                i.isIntersecting && i.target.classList.add("animate-fade-in")
            }
            )
        }
        ,{
            threshold: .1
        })
          , r = (s = e.current) == null ? void 0 : s.querySelectorAll(".sponsor-card");
        return r == null || r.forEach(o => n.observe(o)),
        () => n.disconnect()
    }
    , []);
    const t = [{
        id: 1,
        name: "SponsorOne",
        placeholder: "Reserved for Future Partner"
    }, {
        id: 2,
        name: "SponsorTwo",
        placeholder: "Reserved for Future Partner"
    }, {
        id: 3,
        name: "SponsorThree",
        placeholder: "Reserved for Future Partner"
    }, {
        id: 4,
        name: "SponsorFour",
        placeholder: "Reserved for Future Partner"
    }]
}
  , ut = g.forwardRef( ({className: e, type: t, ...n}, r) => a.jsx("input", {
    type: t,
    className: ce("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
ut.displayName = "Input";
const s2 = () => {
    const {toast: e} = Di()
      , [t,n] = g.useState([{
        id: 1,
        name: "Kartificial Intelligence",
        votes: 42
    }, {
        id: 2,
        name: "Envy",
        votes: 38
    }, {
        id: 3,
        name: "BuffBolt",
        votes: 35
    }])
      , [r,s] = g.useState("")
      , [o,i] = g.useState(!1)
      , l = h => {
        if (o) {
            e({
                title: "Already Voted!",
                description: "You've already cast your vote for this poll.",
                variant: "destructive"
            });
            return
        }
        n(t.map(p => p.id === h ? {
            ...p,
            votes: p.votes + 1
        } : p).sort( (p, f) => f.votes - p.votes)),
        i(!0),
        e({
            title: "Vote Recorded!",
            description: "Thanks for helping us name our first autonomous car!"
        })
    }
      , c = () => {
        if (!r.trim()) {
            e({
                title: "Enter a Name",
                description: "Please enter a name for the car.",
                variant: "destructive"
            });
            return
        }
        const h = {
            id: Date.now(),
            name: r,
            votes: 0
        };
        n([...t, h]),
        s(""),
        e({
            title: "Name Suggested!",
            description: `"${r}" has been added to the poll.`
        })
    }
      , u = h => {
        switch (h) {
        case 0:
            return a.jsx(as, {
                className: "w-5 h-5 text-yellow-500"
            });
        case 1:
            return a.jsx(Xj, {
                className: "w-5 h-5 text-gray-400"
            });
        case 2:
            return a.jsx(ck, {
                className: "w-5 h-5 text-orange-600"
            });
        default:
            return a.jsx(r0, {
                className: "w-5 h-5 text-primary"
            })
        }
    }
      , d = Math.max(...t.map(h => h.votes));
    return a.jsx("section", {
        id: "car-poll",
        className: "py-20 relative overflow-hidden",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h2", {
                    className: "text-4xl md:text-5xl font-orbitron font-bold mb-6",
                    children: a.jsx("span", {
                        className: "bg-gradient-secondary bg-clip-text text-transparent",
                        children: "Name Our First Car"
                    })
                }), a.jsx("p", {
                    className: "text-lg text-muted-foreground max-w-3xl mx-auto mb-4",
                    children: "Help us choose the name of CU Autonomous Racing's very first autonomous car! Suggest your idea and vote for your favorites."
                })]
            }), a.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [a.jsxs("div", {
                    className: "bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8",
                    children: [a.jsx("h3", {
                        className: "text-2xl font-orbitron font-bold mb-6 text-center",
                        children: "🏁 Leaderboard"
                    }), a.jsx("div", {
                        className: "space-y-4",
                        children: t.map( (h, p) => a.jsxs("div", {
                            className: "relative flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-warning/50 transition-all duration-300 group",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [u(p), a.jsxs("span", {
                                    className: "font-orbitron font-bold text-lg min-w-[30px]",
                                    children: ["#", p + 1]
                                })]
                            }), a.jsxs("div", {
                                className: "flex-1",
                                children: [a.jsxs("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [a.jsx("span", {
                                        className: "font-semibold text-lg",
                                        children: h.name
                                    }), a.jsxs("span", {
                                        className: "text-warning font-orbitron font-bold",
                                        children: [h.votes, " votes"]
                                    })]
                                }), a.jsx("div", {
                                    className: "w-full bg-background rounded-full h-2.5 overflow-hidden",
                                    children: a.jsx("div", {
                                        className: "h-full bg-gradient-primary transition-all duration-500 ease-out rounded-full",
                                        style: {
                                            width: `${h.votes / d * 100}%`
                                        }
                                    })
                                })]
                            })]
                        }, h.id))
                    })]
                }), a.jsxs("div", {
                    className: "bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6",
                    children: [a.jsx("h3", {
                        className: "text-xl font-semibold mb-4",
                        children: "Voting Coming Soon!"
                    })]
                }), a.jsx("p", {
                    className: "text-center mt-8 text-muted-foreground italic",
                    children: "The winning name will officially represent our first car in CU Autonomous Racing history!"
                })]
            })]
        })
    })
}
  , o2 = () => {
    const e = [{
        name: "Alex Chen",
        role: "Team Lead",
        department: "Computer Science",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        skills: ["AI/ML", "Strategy"],
        linkedin: "#",
        github: "#",
        email: "alex@example.com"
    }, {
        name: "Sarah Johnson",
        role: "Software Lead",
        department: "Software Engineering",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        skills: ["ROS2", "Python", "C++"],
        linkedin: "#",
        github: "#",
        email: "sarah@example.com"
    }, {
        name: "Marcus Rivera",
        role: "Hardware Lead",
        department: "Mechanical Engineering",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
        skills: ["CAD", "Electronics", "Systems"],
        linkedin: "#",
        github: "#",
        email: "marcus@example.com"
    }, {
        name: "Emily Zhang",
        role: "Vision Systems",
        department: "Electrical Engineering",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        skills: ["Computer Vision", "Sensors"],
        linkedin: "#",
        github: "#",
        email: "emily@example.com"
    }, {
        name: "David Park",
        role: "Controls Engineer",
        department: "Aerospace Engineering",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        skills: ["Control Theory", "MATLAB"],
        linkedin: "#",
        github: "#",
        email: "david@example.com"
    }, {
        name: "Lisa Thompson",
        role: "Data Scientist",
        department: "Data Science",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        skills: ["ML", "Analytics", "Python"],
        linkedin: "#",
        github: "#",
        email: "lisa@example.com"
    }];
}
  , i2 = () => {
    const e = [{
        icon: ik,
        title: "Students",
        description: "Join our team and gain hands-on experience with cutting-edge autonomous vehicle technology. All majors welcome!",
        action: "Join the Team",
        variant: "racing",
        link: "/join"
    }, {
        icon: Zy,
        title: "Sponsors",
        description: "Partner with us to support innovation and gain exposure to top engineering talent and breakthrough technology.",
        action: "Become a Sponsor",
        variant: "hero",
        link: "/sponsors"
    }, {
        icon: Sr,
        title: "Collaborators",
        description: "Academic institutions and research labs - let's advance autonomous racing technology together.",
        action: "Collaborate",
        variant: "glow",
        link: "/collaborate"
    }, {
        icon: mo,
        title: "Mentors",
        description: "Industry professionals - share your expertise and guide the next generation of autonomous vehicle engineers.",
        action: "Mentor Us",
        variant: "outline",
        link: "/mentors"
    }];
}
  , Ti = g.forwardRef( ({className: e, ...t}, n) => a.jsx("textarea", {
    className: ce("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
Ti.displayName = "Textarea";
var a2 = "Label"
  , yx = g.forwardRef( (e, t) => a.jsx(ne.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var s;
        n.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
yx.displayName = a2;
var xx = yx;
const l2 = Kl("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Ae = g.forwardRef( ({className: e, ...t}, n) => a.jsx(xx, {
    ref: n,
    className: ce(l2(), e),
    ...t
}));
Ae.displayName = xx.displayName;
const c2 = () => {
    const o = [
        { icon: Ql, label: "Email", value: "cuautonomousracing@colorado.edu", link: "mailto:cuautonomousracing@colorado.edu" },
        { icon: Fa, label: "Location", value: "ECES 112 @ Engineering Center, University of Colorado, Boulder", link: "#" },
        { icon: dk, label: "Time", value: "Meetings Sundays @ 2:30PM" }
    ];

    const i = [
    ];

    return a.jsx("section", {
        id: "contact",
        className: "py-20 relative",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
                // Colorful section title
                a.jsxs("div", {
                    className: "text-center mb-16 space-y-4",
                    children: [
                        a.jsx("h2", {
                            className: "text-4xl md:text-5xl font-orbitron font-bold",
                            children: a.jsx("span", {
                                className: "bg-gradient-warning bg-clip-text text-transparent",
                                children: "Get In Touch"
                            })
                        }),
                        a.jsx("p", {
                            className: "text-lg text-muted-foreground max-w-3xl mx-auto",
                            children: "Have questions? Want to join or sponsor us? We'd love to hear from you."
                        })
                    ]
                }),

                // Contact Information card
                a.jsx(H, {
                    className: "p-8 bg-card border-border max-w-2xl mx-auto mb-12",
                    children: a.jsxs("div", {
                        children: [
                            a.jsx("h3", { className: "text-xl font-semibold mb-6", children: "Contact Information" }),
                            a.jsx("div", {
                                className: "space-y-4",
                                children: o.map((l, c) =>
                                    a.jsxs(
                                        "a",
                                        {
                                            href: l.link,
                                            className: "flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors group",
                                            children: [
                                                a.jsx("div", {
                                                    className: "p-2 rounded-md bg-warning/10 group-hover:bg-warning/20 transition-colors",
                                                    children: a.jsx(l.icon, { className: "h-5 w-5 text-warning" })
                                                }),
                                                a.jsxs("div", {
                                                    children: [
                                                        a.jsx("p", { className: "text-sm text-muted-foreground", children: l.label }),
                                                        a.jsx("p", { className: "text-foreground font-medium", children: l.value })
                                                    ]
                                                })
                                            ]
                                        },
                                        c
                                    )
                                )
                            })
                        ]
                    })
                }),

                // Compact Follow Us bar
                a.jsxs("div", {
                    className: "flex justify-center gap-4",
                    children: i.map((l, c) =>
                        a.jsx(
                            "a",
                            {
                                href: l.href,
                                className: "p-3 rounded-md bg-muted hover:bg-warning hover:text-warning-foreground transition-all duration-300 group",
                                "aria-label": l.label,
                                children: a.jsx(l.icon, { className: "h-5 w-5" })
                            },
                            c
                        )
                    )
                })
            ]
        })
    });
}
  , tn = () => {
    const e = new Date().getFullYear()
      , n = bo().pathname === "/";
    return a.jsx("footer", {
        className: "bg-gradient-dark border-t border-border",
        children: a.jsx("div", {
            className: "container mx-auto px-4 py-8",
            children: a.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-4",
                children: [a.jsxs("div", {
                    className: "flex flex-col items-center md:items-start gap-2",
                    children: [a.jsx("div", {
                        className: "flex items-center gap-2",
                        children: a.jsx("span", {
                            className: "text-2xl font-orbitron font-bold bg-gradient-racing bg-clip-text text-transparent",
                            children: "CU AUTONOMOUS RACING"
                        })
                    }), a.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: ["© ", e, " CU Autonomous Racing. All rights reserved."]
                    })]
                }), a.jsx("nav", {
                    className: "flex flex-wrap gap-6 text-sm",
                    children: n ? a.jsxs(a.Fragment, {
                        children: [a.jsx("a", {
                            href: "#home",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Home"
                        }), a.jsx("a", {
                            href: "#about",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "About"
                        }), a.jsx("a", {
                            href: "#team",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Team"
                        }), a.jsx("a", {
                            href: "#get-involved",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Get Involved"
                        }), a.jsx("a", {
                            href: "#contact",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Contact"
                        })]
                    }) : a.jsxs(a.Fragment, {
                        children: [a.jsx(me, {
                            to: "/",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Home"
                        }), a.jsx(me, {
                            to: "/about",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "About"
                        }), a.jsx(me, {
                            to: "/team",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Team"
                        }), a.jsx(me, {
                            to: "/sponsors",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Sponsors"
                        }), a.jsx(me, {
                            to: "/join",
                            className: "text-muted-foreground hover:text-warning transition-colors",
                            children: "Join Us"
                        })]
                    })
                }), a.jsxs("div", {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [a.jsx("span", {
                        children: "Made with"
                    }), a.jsx(ak, {
                        className: "h-4 w-4 text-secondary fill-secondary"
                    }), a.jsx("span", {
                        children: "at University of Colorado"
                    })]
                })]
            })
        })
    })
}
  , u2 = () => a.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [a.jsx(en, {}), a.jsxs("main", {
        children: [a.jsx(VE, {}), a.jsx(YE, {}), a.jsx(n2, {}), a.jsx(r2, {}), a.jsx(s2, {}), a.jsx(o2, {}), a.jsx(i2, {}), a.jsx(c2, {})]
    }), a.jsx(tn, {})]
})
  , d2 = () => a.jsxs("div", {
    className: "min-h-screen bg-gradient-dark",
    children: [a.jsx(en, {}), a.jsx("section", {
        className: "pt-24 pb-12 px-4",
        children: a.jsxs("div", {
            className: "container mx-auto",
            children: [a.jsx("h1", {
                className: "text-4xl md:text-6xl font-orbitron font-bold text-center mb-6 bg-gradient-racing bg-clip-text text-transparent",
                children: "About CU Autonomous Racing"
            }), a.jsx("p", {
                className: "text-xl text-muted-foreground text-center max-w-3xl mx-auto",
                children: "Building the future of autonomous racing at the University of Colorado Boulder"
            })]
        })
    }), a.jsx("section", {
  className: "py-16 px-4",
  children: a.jsx("div", {
    className: "container mx-auto",
    children: a.jsxs("div", {
      className: "flex flex-col gap-16",

      children: [
        // ===== ABOUT GRID =====
        a.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12 items-center",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("h2", {
                  className: "text-3xl font-orbitron font-bold mb-6 text-warning",
                  children: "About the Founders"
                }),
                a.jsx("p", {
                  className: "text-muted-foreground mb-4",
                  children:
                    "CU Autonomous Racing was created as an opportunity for students to get the most out of their college experience and prepare them for tackling real world challenges. We wanted to create an environment where students could gain leadership experience and practice hands-on engineering working as a team."
                }),
                a.jsx("p", {
                  className: "text-muted-foreground mb-4",
                  children:
                    "From the beginning, we knew we wanted to create a racing team and compete in annual, international competition. But we saw something bigger: autonomous driving is rapidly changing the transportation industry. CU Boulder’s students have the talent to lead that space yet there wasn’t a club focused primarily on autonomous vehicle development. CU Autonomous Racing was created to fill that gap."
                }),
                a.jsx("p", {
                  className: "text-muted-foreground mb-4",
                  children:
                    "July 2025 marked the beginning of CU Autonomous Racing. To kickstart our launch, we quickly built a small demonstration vehicle with a basic automatic braking system and lane keeping system. This gave us a simple proof-of-concept for our recruitment video."
                }),
                a.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "In Fall 2025, we grew into a dedicated and enthusiastic team. We built and tested our first full prototype. This Spring 2026, we’re building on that momentum as we take major steps toward our full-size autonomous race kart. With steady progress and a driven team behind it, we’re on track to compete this June."
                })
              ]
            }),

            a.jsx("div", {
              className: "relative",
              children: a.jsx("div", {
                className: "aspect-[3/4] bg-card rounded-lg",
                children: a.jsx("img", {
                  src: "/assets/execphoto.jpg",
                  alt: "CU Autonomous Racing Team",
                  className: "w-full h-full object-cover"
                })
              })
            })
          ]
        }),

        // ===== VIDEO BELOW =====
        a.jsxs("div", {
          className: "flex flex-col items-center mt-24",
          children: [
            a.jsx("h3", {
              className:
                "text-2xl font-orbitron font-bold mb-6 text-warning text-center",
              children: "Recruitment Video: 1:10 Scale Demo (Fall 2025)"
            }),
            a.jsx("video", {
              className: "w-full max-w-4xl rounded-lg shadow-lg",
              controls: true,
              children: a.jsx("source", {
                src: "/assets/Media1.mp4",
                type: "video/mp4"
              })
            })
          ]
        })
      ]
    })
  })
})
, a.jsx(tn, {})]
})
  , h2 = () => {
    const e = [{
        name: "Bronze",
        price: "$1,000+",
        color: "bg-amber-700/20 border-amber-700",
        benefits: ["Logo on team website", "Social media recognition", "Team newsletter mentions", "Event invitations"]
    }, {
        name: "Silver",
        price: "$5,000+",
        color: "bg-slate-400/20 border-slate-400",
        benefits: ["All Bronze benefits", "Logo on race car", "Recruitment booth access", "Technical collaboration opportunities", "Quarterly progress reports"]
    }, {
        name: "Gold",
        price: "$10,000+",
        color: "bg-yellow-500/20 border-yellow-500",
        featured: !0,
        benefits: ["All Silver benefits", "Prominent logo placement", "Named sponsorship opportunities", "VIP event access", "Direct mentorship programs", "Custom partnership options"]
    }, {
        name: "Platinum",
        price: "$25,000+",
        color: "bg-purple-500/20 border-purple-500",
        benefits: ["All Gold benefits", "Title sponsorship", "Executive advisory role", "Exclusive branding rights", "Priority recruitment access", "Innovation showcase opportunities"]
    }]
      , t = [{
        icon: as,
        title: "Brand Visibility",
        description: "Showcase your brand to thousands of spectators, online viewers, and industry professionals at racing events."
    }, {
        icon: Sr,
        title: "Talent Pipeline",
        description: "Connect with top engineering students passionate about autonomous systems, AI, and cutting-edge technology."
    }, {
        icon: mo,
        title: "Innovation Partnership",
        description: "Collaborate on breakthrough autonomous vehicle research and development projects."
    }, {
        icon: Gh,
        title: "Marketing Impact",
        description: "Align your brand with innovation, sustainability, and the future of transportation."
    }];
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Become a Sponsor"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-8",
                    children: "Partner with CU Autonomous Racing and drive the future of autonomous vehicle technology"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx("a", {
                        href: "/assets/sponsor-package.pdf",
                        download: "CU-Autonomous-Racing-Sponsor-Package.pdf",
                        children: a.jsxs(B, {
                            variant: "racing",
                            size: "lg",
                            className: "group",
                            children: ["Download Sponsor Package", a.jsx(Hh, {
                                className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx("a", {
                            href: "/#contact",
                            children: "Contact Us"
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsxs("div", {
                className: "container mx-auto",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold text-center mb-12",
                    children: "Why Partner With Us?"
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: t.map( (n, r) => a.jsxs(H, {
                        className: "p-6 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all hover:scale-105",
                        children: [a.jsx(n.icon, {
                            className: "h-12 w-12 text-warning mb-4"
                        }), a.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: n.title
                        }), a.jsx("p", {
                            className: "text-muted-foreground",
                            children: n.description
                        })]
                    }, r))
                })]
            })
        }), a.jsx("section", {
  className: "py-16 px-4",
  children: a.jsxs("div", {
    className: "container mx-auto",
    children: [
      a.jsx("h2", {
        className: "text-3xl font-orbitron font-bold text-center mb-12",
        children: "Our Partners"
      }),

      a.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto",
        children: [

          // Partner 1
          a.jsx("div", {
            className: "flex items-center justify-center",
            children: a.jsx("div", {
              className: "w-64 h-64 flex items-center justify-center",
              children: a.jsx("img", {
                src: "/assets/ride.png",
                alt: "Partner 1",
                className: "w-full h-full object-contain"
              })
            })
          }),

          // Partner 2
          a.jsx("div", {
            className: "flex items-center justify-center",
            children: a.jsx("div", {
              className: "w-64 h-64 flex items-center justify-center",
              children: a.jsx("img", {
                src: "/assets/partner2.png",
                alt: "Partner 2",
                className: "w-full h-full object-contain"
              })
            })
          }),

          a.jsx("div", {
            className: "flex items-center justify-center",
            children: a.jsx("div", {
              className: "w-64 h-64 flex items-center justify-center",
              children: a.jsx("img", {
                src: "/assets/image0.jpg",
                alt: "Partner 3",
                className: "w-full h-full object-contain"
              })
            })
          })

        ]
      })
    ]
  })
}), a.jsx("section", {
            className: "py-16 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold mb-6",
                    children: "Ready to Accelerate Innovation?"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                    children: "Join us in shaping the future of autonomous racing and transportation technology"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx(B, {
                        variant: "racing",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/sponsor-contact",
                            children: "Become a Sponsor"
                        })
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/sponsor-contact",
                            children: "Schedule a Meeting"
                        })
                    })]
                })]
            })
        }), a.jsx(tn, {})]
    })
}
  , f2 = () => {
    const e = [
    {
        name: "Executives",
        members: [
            {
                name: "Hampton Langenbeck",
                role: "President",
                image: "assets/hampton.jpg",
                skills: [],
                linkedin: "#",
                github: "#",
                email: "james@curacing.com"
            },
            {
                name: "Gabriel Wardell",
                role: "Chief Engineer",
                image: "assets/gabe.jpg",
                skills: [],
                linkedin: "#",
                github: "#",
                email: "emily@curacing.com"
            }
        ]
    },
    {
        name: "Team Leads",
        members: [
            {
                name: "Alexander Gholmieh",
                role: "Software Team Lead",
                image: "assets/alexander.jpg",
                skills: [],
                linkedin: "#",
                github: "#",
                email: "alex@curacing.com"
            },
            {
                name: "Lincoln Lovelace",
                role: "Mechanical Team Lead",
                image: "assets/lincoln.png",
                skills: [],
                linkedin: "#",
                github: "#",
                email: "emily@curacing.com"
            },
            {
                name: "Caleb Cease",
                role: "Electrical Team Lead",
                image: "assets/Cease_Caleb_2024.png",
                skills: [],
                linkedin: "#",
                github: "#",
                email: "caleb@curacing.com"
            },
            {
            name: "Frida Rodriguez",
            role: "Business Team Lead",
            image: "assets/alexa.jpg",
            skills: [],
            linkedin: "#",
            github: "#",
            email: "rachel@curacing.com"
            }
        ]
    }]
      , t = [];
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), 
            a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Meet Our Team"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-8",
                    children: "Passionate engineers and innovators driving the future of autonomous racing"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx(B, {
                        variant: "racing",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Join Our Team"
                        })
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx("a", {
                            href: "/#contact",
                            children: "Contact Us"
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            className: "py-12 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",
                    children: [{
                        label: "Active Members",
                        value: "30+"
                    }, {
                        label: "Departments",
                        value: "4"
                    }, {
                        label: "Subteams",
                        value: "5"
                    }].map( (n, r) => a.jsxs(H, {
                        className: "p-6 text-center bg-gradient-card border-warning/20",
                        children: [a.jsx("p", {
                            className: "text-3xl font-bold text-warning",
                            children: n.value
                        }), a.jsx("p", {
                            className: "text-muted-foreground",
                            children: n.label
                        })]
                    }, r))
                })
            })
        }), e.map( (n, r) => a.jsx("section", {
            className: `py-16 px-4 ${r % 2 === 1 ? "bg-gradient-dark" : ""}`,
            children: a.jsxs("div", {
                className: "container mx-auto",
                children: [a.jsxs("div", {
                    className: "mb-12 text-center",
                    children: [a.jsx("h2", {
                        className: "text-3xl font-orbitron font-bold mb-4",
                        children: n.name
                    }), a.jsx("p", {
                        className: "text-muted-foreground max-w-2xl mx-auto",
                        children: n.description
                    })]
                }), a.jsx("div", {
                    className: "grid gap-6 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto",
                    children: n.members.map( (s, o) => a.jsx(H, {
                        className: "p-8 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all hover:scale-105 group",
                        children: a.jsxs("div", {
                            className: "flex flex-col items-center text-center",
                            children: [a.jsx("div", {
                                className: "w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-warning/20 group-hover:ring-warning/40 transition-all",
                                children: a.jsx("img", {
                                    src: s.image,
                                    alt: s.name,
                                    className: "w-full h-full object-cover"
                                })
                            }), a.jsx("h3", {
                                className: "text-xl font-bold mb-1",
                                children: s.name
                            }), a.jsx("p", {
                                className: "text-sm text-warning mb-3",
                                children: s.role
                            }), a.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-4 justify-center",
                                children: s.skills.map( (i, l) => a.jsx(we, {
                                    variant: "secondary",
                                    className: "text-xs",
                                    children: i
                                }, l))
                            })]
                        })
                    }, o))
                })]
            })
        }, r)), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsxs(H, {
                    className: "p-12 bg-gradient-card border-warning/20 text-center",
                    children: [a.jsx(Sr, {
                        className: "h-16 w-16 text-warning mx-auto mb-6"
                    }), a.jsx("h2", {
                        className: "text-3xl font-orbitron font-bold mb-4",
                        children: "Join Our Team"
                    }), a.jsx("p", {
                        className: "text-muted-foreground mb-8 max-w-2xl mx-auto",
                        children: "We're always looking for passionate individuals to join our mission. Whether you're interested in software, hardware, or operations, there's a place for you at CU Autonomous Racing."
                    }), a.jsxs("div", {
                        className: "flex gap-4 justify-center",
                        children: [a.jsx(B, {
                            variant: "racing",
                            size: "lg",
                            asChild: !0,
                            children: a.jsx(me, {
                                to: "/join",
                                children: "Apply Now"
                            })
                        }), a.jsx(B, {
                            variant: "outline",
                            size: "lg",
                            asChild: !0,
                            children: a.jsx(me, {
                                to: "/about",
                                children: "Learn More"
                            })
                        })]
                    })]
                })
            })
        }), a.jsx(tn, {})]
    })
}
;
var p2 = g.createContext(void 0);
function df(e) {
    const t = g.useContext(p2);
    return e || t || "ltr"
}
var eu = "rovingFocusGroup.onEntryFocus"
  , m2 = {
    bubbles: !1,
    cancelable: !0
}
  , Wi = "RovingFocusGroup"
  , [_d,wx,g2] = Uh(Wi)
  , [v2,bx] = In(Wi, [g2])
  , [y2,x2] = v2(Wi)
  , Sx = g.forwardRef( (e, t) => a.jsx(_d.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: a.jsx(_d.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: a.jsx(w2, {
            ...e,
            ref: t
        })
    })
}));
Sx.displayName = Wi;
var w2 = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: s=!1, dir: o, currentTabStopId: i, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: c, onEntryFocus: u, preventScrollOnEntryFocus: d=!1, ...h} = e
      , p = g.useRef(null)
      , f = Se(t, p)
      , b = df(o)
      , [v,w] = es({
        prop: i,
        defaultProp: l ?? null,
        onChange: c,
        caller: Wi
    })
      , [x,m] = g.useState(!1)
      , y = It(u)
      , S = wx(n)
      , j = g.useRef(!1)
      , [k,_] = g.useState(0);
    return g.useEffect( () => {
        const N = p.current;
        if (N)
            return N.addEventListener(eu, y),
            () => N.removeEventListener(eu, y)
    }
    , [y]),
    a.jsx(y2, {
        scope: n,
        orientation: r,
        dir: b,
        loop: s,
        currentTabStopId: v,
        onItemFocus: g.useCallback(N => w(N), [w]),
        onItemShiftTab: g.useCallback( () => m(!0), []),
        onFocusableItemAdd: g.useCallback( () => _(N => N + 1), []),
        onFocusableItemRemove: g.useCallback( () => _(N => N - 1), []),
        children: a.jsx(ne.div, {
            tabIndex: x || k === 0 ? -1 : 0,
            "data-orientation": r,
            ...h,
            ref: f,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: G(e.onMouseDown, () => {
                j.current = !0
            }
            ),
            onFocus: G(e.onFocus, N => {
                const A = !j.current;
                if (N.target === N.currentTarget && A && !x) {
                    const R = new CustomEvent(eu,m2);
                    if (N.currentTarget.dispatchEvent(R),
                    !R.defaultPrevented) {
                        const U = S().filter(D => D.focusable)
                          , M = U.find(D => D.active)
                          , V = U.find(D => D.id === v)
                          , q = [M, V, ...U].filter(Boolean).map(D => D.ref.current);
                        _x(q, d)
                    }
                }
                j.current = !1
            }
            ),
            onBlur: G(e.onBlur, () => m(!1))
        })
    })
}
)
  , jx = "RovingFocusGroupItem"
  , kx = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: s=!1, tabStopId: o, children: i, ...l} = e
      , c = vo()
      , u = o || c
      , d = x2(jx, n)
      , h = d.currentTabStopId === u
      , p = wx(n)
      , {onFocusableItemAdd: f, onFocusableItemRemove: b, currentTabStopId: v} = d;
    return g.useEffect( () => {
        if (r)
            return f(),
            () => b()
    }
    , [r, f, b]),
    a.jsx(_d.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: s,
        children: a.jsx(ne.span, {
            tabIndex: h ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: t,
            onMouseDown: G(e.onMouseDown, w => {
                r ? d.onItemFocus(u) : w.preventDefault()
            }
            ),
            onFocus: G(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: G(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    d.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const x = j2(w, d.orientation, d.dir);
                if (x !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let y = p().filter(S => S.focusable).map(S => S.ref.current);
                    if (x === "last")
                        y.reverse();
                    else if (x === "prev" || x === "next") {
                        x === "prev" && y.reverse();
                        const S = y.indexOf(w.currentTarget);
                        y = d.loop ? k2(y, S + 1) : y.slice(S + 1)
                    }
                    setTimeout( () => _x(y))
                }
            }
            ),
            children: typeof i == "function" ? i({
                isCurrentTabStop: h,
                hasTabStop: v != null
            }) : i
        })
    })
}
);
kx.displayName = jx;
var b2 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function S2(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function j2(e, t, n) {
    const r = S2(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return b2[r]
}
function _x(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function k2(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var _2 = Sx
  , N2 = kx
  , ic = "Tabs"
  , [C2,qA] = In(ic, [bx])
  , Nx = bx()
  , [E2,hf] = C2(ic)
  , Cx = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: s, defaultValue: o, orientation: i="horizontal", dir: l, activationMode: c="automatic", ...u} = e
      , d = df(l)
      , [h,p] = es({
        prop: r,
        onChange: s,
        defaultProp: o ?? "",
        caller: ic
    });
    return a.jsx(E2, {
        scope: n,
        baseId: vo(),
        value: h,
        onValueChange: p,
        orientation: i,
        dir: d,
        activationMode: c,
        children: a.jsx(ne.div, {
            dir: d,
            "data-orientation": i,
            ...u,
            ref: t
        })
    })
}
);
Cx.displayName = ic;
var Ex = "TabsList"
  , Tx = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...s} = e
      , o = hf(Ex, n)
      , i = Nx(n);
    return a.jsx(_2, {
        asChild: !0,
        ...i,
        orientation: o.orientation,
        dir: o.dir,
        loop: r,
        children: a.jsx(ne.div, {
            role: "tablist",
            "aria-orientation": o.orientation,
            ...s,
            ref: t
        })
    })
}
);
Tx.displayName = Ex;
var Px = "TabsTrigger"
  , Rx = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: s=!1, ...o} = e
      , i = hf(Px, n)
      , l = Nx(n)
      , c = Ix(i.baseId, r)
      , u = Mx(i.baseId, r)
      , d = r === i.value;
    return a.jsx(N2, {
        asChild: !0,
        ...l,
        focusable: !s,
        active: d,
        children: a.jsx(ne.button, {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: c,
            ...o,
            ref: t,
            onMouseDown: G(e.onMouseDown, h => {
                !s && h.button === 0 && h.ctrlKey === !1 ? i.onValueChange(r) : h.preventDefault()
            }
            ),
            onKeyDown: G(e.onKeyDown, h => {
                [" ", "Enter"].includes(h.key) && i.onValueChange(r)
            }
            ),
            onFocus: G(e.onFocus, () => {
                const h = i.activationMode !== "manual";
                !d && !s && h && i.onValueChange(r)
            }
            )
        })
    })
}
);
Rx.displayName = Px;
var Ax = "TabsContent"
  , Ox = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: s, children: o, ...i} = e
      , l = hf(Ax, n)
      , c = Ix(l.baseId, r)
      , u = Mx(l.baseId, r)
      , d = r === l.value
      , h = g.useRef(d);
    return g.useEffect( () => {
        const p = requestAnimationFrame( () => h.current = !1);
        return () => cancelAnimationFrame(p)
    }
    , []),
    a.jsx(Fi, {
        present: s || d,
        children: ({present: p}) => a.jsx(ne.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": l.orientation,
            role: "tabpanel",
            "aria-labelledby": c,
            hidden: !p,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                ...e.style,
                animationDuration: h.current ? "0s" : void 0
            },
            children: p && o
        })
    })
}
);
Ox.displayName = Ax;
function Ix(e, t) {
    return `${e}-trigger-${t}`
}
function Mx(e, t) {
    return `${e}-content-${t}`
}
var T2 = Cx
  , Lx = Tx
  , $x = Rx
  , Dx = Ox;
const Fx = T2
  , ff = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Lx, {
    ref: n,
    className: ce("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
ff.displayName = Lx.displayName;
const Kr = g.forwardRef( ({className: e, ...t}, n) => a.jsx($x, {
    ref: n,
    className: ce("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Kr.displayName = $x.displayName;
const Gr = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Dx, {
    ref: n,
    className: ce("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
Gr.displayName = Dx.displayName;
const P2 = () => {
    const e = [{
        title: "Autonomous Navigation System",
        category: "Software",
        status: "In Progress",
        description: "Developing advanced path planning and obstacle avoidance algorithms using LiDAR and computer vision.",
        image: "/api/placeholder/600/400",
        tags: ["ROS2", "Python", "SLAM", "Path Planning"],
        progress: 75,
        team: ["AI Team", "Perception Team"],
        startDate: "Sep 2024",
        estimatedCompletion: "May 2025"
    }, {
        title: "Custom Racing Platform",
        category: "Hardware",
        status: "In Progress",
        description: "Building a 1/10 scale autonomous racing platform with custom chassis and suspension system.",
        image: "/api/placeholder/600/400",
        tags: ["CAD", "3D Printing", "Electronics", "Sensors"],
        progress: 60,
        team: ["Mechanical Team", "Hardware Team"],
        startDate: "Oct 2024",
        estimatedCompletion: "Apr 2025"
    }, {
        title: "Real-time Control System",
        category: "Software",
        status: "Active",
        description: "Implementing low-latency control algorithms for high-speed autonomous racing.",
        image: "/api/placeholder/600/400",
        tags: ["C++", "Control Theory", "Real-time OS"],
        progress: 45,
        team: ["Control Team", "Software Team"],
        startDate: "Nov 2024",
        estimatedCompletion: "Jun 2025"
    }]
      , t = [{
        title: "Multi-Agent Racing",
        description: "Coordinate multiple autonomous vehicles for team racing strategies.",
        icon: Zj,
        estimatedStart: "Fall 2025"
    }, {
        title: "Energy Optimization",
        description: "Develop intelligent power management for extended racing performance.",
        icon: pl,
        estimatedStart: "Spring 2026"
    }, {
        title: "Safety Systems",
        description: "Advanced collision prediction and prevention systems.",
        icon: hk,
        estimatedStart: "Summer 2025"
    }]
      , n = [{
        title: "Deep Learning for Racing Line Optimization",
        authors: ["CU Autonomous Racing AI Team"],
        conference: "ICRA 2025 (Submitted)",
        abstract: "Novel approach to racing line optimization using reinforcement learning...",
        status: "Under Review"
    }, {
        title: "Sensor Fusion in High-Speed Environments",
        authors: ["CU Autonomous Racing Perception Team"],
        conference: "IROS 2025 (Target)",
        abstract: "Multi-modal sensor fusion techniques for reliable perception at high speeds...",
        status: "In Progress"
    }]
      , r = s => {
        switch (s) {
        case "Active":
            return "bg-green-500/10 text-green-500 border-green-500/20";
        case "In Progress":
            return "bg-blue-500/10 text-blue-500 border-blue-500/20";
        case "Completed":
            return "bg-purple-500/10 text-purple-500 border-purple-500/20";
        default:
            return "bg-gray-500/10 text-gray-500 border-gray-500/20"
        }
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Projects & Research"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-8",
                    children: "Pushing the boundaries of autonomous racing through innovative engineering and research"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx(B, {
                        variant: "racing",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Join a Project"
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            className: "py-12 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                    children: [{
                        icon: fl,
                        label: "Active Projects",
                        value: "8"
                    }, {
                        icon: rk,
                        label: "Research Papers",
                        value: "12"
                    }, {
                        icon: ok,
                        label: "Competitions",
                        value: "5"
                    }, {
                        icon: pl,
                        label: "Innovations",
                        value: "20+"
                    }].map( (s, o) => a.jsxs(H, {
                        className: "p-6 text-center bg-gradient-card border-warning/20 hover:border-warning/40 transition-all group",
                        children: [a.jsx(s.icon, {
                            className: "h-8 w-8 text-warning mx-auto mb-3 group-hover:scale-110 transition-transform"
                        }), a.jsx("p", {
                            className: "text-3xl font-bold text-warning",
                            children: s.value
                        }), a.jsx("p", {
                            className: "text-muted-foreground",
                            children: s.label
                        })]
                    }, o))
                })
            })
        }), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsxs(Fx, {
                    defaultValue: "current",
                    className: "w-full",
                    children: [a.jsxs(ff, {
                        className: "grid w-full max-w-md mx-auto grid-cols-3 mb-12",
                        children: [a.jsx(Kr, {
                            value: "current",
                            children: "Current"
                        }), a.jsx(Kr, {
                            value: "future",
                            children: "Future"
                        }), a.jsx(Kr, {
                            value: "research",
                            children: "Research"
                        })]
                    }), a.jsx(Gr, {
                        value: "current",
                        className: "space-y-8",
                        children: a.jsx("div", {
                            className: "grid lg:grid-cols-2 gap-8",
                            children: e.map( (s, o) => a.jsxs(H, {
                                className: "overflow-hidden bg-gradient-card border-warning/20 hover:border-warning/40 transition-all",
                                children: [a.jsxs("div", {
                                    className: "aspect-video bg-muted/20 relative overflow-hidden",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-warning/20 to-secondary/20 flex items-center justify-center",
                                        children: a.jsx(fl, {
                                            className: "h-24 w-24 text-muted-foreground/20"
                                        })
                                    }), a.jsx(we, {
                                        className: `absolute top-4 right-4 ${r(s.status)}`,
                                        children: s.status
                                    })]
                                }), a.jsxs("div", {
                                    className: "p-6",
                                    children: [a.jsx("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: a.jsxs("div", {
                                            children: [a.jsx("h3", {
                                                className: "text-2xl font-bold mb-2",
                                                children: s.title
                                            }), a.jsx(we, {
                                                variant: "outline",
                                                className: "mb-3",
                                                children: s.category
                                            })]
                                        })
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground mb-4",
                                        children: s.description
                                    }), a.jsxs("div", {
                                        className: "mb-4",
                                        children: [a.jsxs("div", {
                                            className: "flex justify-between text-sm mb-2",
                                            children: [a.jsx("span", {
                                                className: "text-muted-foreground",
                                                children: "Progress"
                                            }), a.jsxs("span", {
                                                className: "text-warning",
                                                children: [s.progress, "%"]
                                            })]
                                        }), a.jsx("div", {
                                            className: "h-2 bg-muted rounded-full overflow-hidden",
                                            children: a.jsx("div", {
                                                className: "h-full bg-gradient-to-r from-warning to-secondary transition-all",
                                                style: {
                                                    width: `${s.progress}%`
                                                }
                                            })
                                        })]
                                    }), a.jsx("div", {
                                        className: "flex flex-wrap gap-2 mb-4",
                                        children: s.tags.map( (i, l) => a.jsx(we, {
                                            variant: "secondary",
                                            className: "text-xs",
                                            children: i
                                        }, l))
                                    }), a.jsxs("div", {
                                        className: "flex items-center justify-between text-sm text-muted-foreground mb-4",
                                        children: [a.jsxs("span", {
                                            children: ["Start: ", s.startDate]
                                        }), a.jsxs("span", {
                                            children: ["Est. Complete: ", s.estimatedCompletion]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [a.jsx(B, {
                                            variant: "racing",
                                            size: "sm",
                                            className: "flex-1",
                                            children: "View Details"
                                        }), a.jsx(B, {
                                            variant: "outline",
                                            size: "sm",
                                            children: a.jsx(Gl, {
                                                className: "h-4 w-4"
                                            })
                                        })]
                                    })]
                                })]
                            }, o))
                        })
                    }), a.jsx(Gr, {
                        value: "future",
                        className: "space-y-8",
                        children: a.jsx("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: t.map( (s, o) => a.jsxs(H, {
                                className: "p-6 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all hover:scale-105 group",
                                children: [a.jsx(s.icon, {
                                    className: "h-12 w-12 text-warning mb-4 group-hover:scale-110 transition-transform"
                                }), a.jsx("h3", {
                                    className: "text-xl font-bold mb-2",
                                    children: s.title
                                }), a.jsx("p", {
                                    className: "text-muted-foreground mb-4",
                                    children: s.description
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [a.jsxs(we, {
                                        variant: "outline",
                                        children: ["Planned: ", s.estimatedStart]
                                    }), a.jsx(B, {
                                        variant: "ghost",
                                        size: "sm",
                                        children: "Learn More"
                                    })]
                                })]
                            }, o))
                        })
                    }), a.jsx(Gr, {
                        value: "research",
                        className: "space-y-8",
                        children: a.jsx("div", {
                            className: "grid gap-6",
                            children: n.map( (s, o) => a.jsxs(H, {
                                className: "p-6 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all",
                                children: [a.jsxs("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: [a.jsxs("div", {
                                        className: "flex-1",
                                        children: [a.jsx("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: s.title
                                        }), a.jsx("p", {
                                            className: "text-sm text-muted-foreground mb-2",
                                            children: s.authors.join(", ")
                                        }), a.jsx(we, {
                                            variant: "outline",
                                            className: "mb-3",
                                            children: s.conference
                                        })]
                                    }), a.jsx(we, {
                                        className: r(s.status),
                                        children: s.status
                                    })]
                                }), a.jsx("p", {
                                    className: "text-muted-foreground mb-4",
                                    children: s.abstract
                                }), a.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [a.jsxs(B, {
                                        variant: "outline",
                                        size: "sm",
                                        children: [a.jsx(n0, {
                                            className: "h-4 w-4 mr-2"
                                        }), "Read Paper"]
                                    }), a.jsx(B, {
                                        variant: "ghost",
                                        size: "sm",
                                        children: "View Presentation"
                                    })]
                                })]
                            }, o))
                        })
                    })]
                })
            })
        }), a.jsx("section", {
            className: "py-16 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold mb-6",
                    children: "Have an Idea? Let's Build It Together"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                    children: "We're always exploring new projects and research opportunities. Join us in pushing the boundaries of autonomous racing."
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx(B, {
                        variant: "racing",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Propose a Project"
                        })
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/contact",
                            children: "Collaborate With Us"
                        })
                    })]
                })]
            })
        }), a.jsx(tn, {})]
    })
}
  , R2 = () => {
    const e = [{
        title: "Autonomous Racing Workshop",
        type: "Workshop",
        date: "January 15, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Engineering Center, Room 265",
        description: "Learn the basics of autonomous vehicle programming and control systems.",
        attendees: 45,
        maxAttendees: 60,
        tags: ["Beginner Friendly", "Hands-on", "Programming"]
    }, {
        title: "Spring Recruitment Fair",
        type: "Recruitment",
        date: "January 22, 2025",
        time: "4:00 PM - 7:00 PM",
        location: "UMC Ballroom",
        description: "Meet the team, learn about our projects, and find your place in CU Autonomous Racing.",
        attendees: 120,
        maxAttendees: 200,
        tags: ["Open to All", "Food Provided", "Networking"]
    }, {
        title: "Tech Talk: AI in Racing",
        type: "Talk",
        date: "February 5, 2025",
        time: "6:00 PM - 7:30 PM",
        location: "Virtual + In-Person",
        description: "Industry expert discusses the latest AI advances in autonomous racing.",
        attendees: 78,
        maxAttendees: 150,
        tags: ["Technical", "Industry Speaker", "Q&A"]
    }, {
        title: "Regional Autonomous Racing Competition",
        type: "Competition",
        date: "March 20-22, 2025",
        time: "All Day",
        location: "Denver Speedway",
        description: "Our team competes against 15 other universities in the regional championship.",
        attendees: 0,
        maxAttendees: 0,
        tags: ["Competition", "Team Event", "Spectators Welcome"]
    }]
      , t = [{
        title: "Fall Kickoff Meeting",
        type: "Meeting",
        date: "September 5, 2024",
        location: "Engineering Center",
        attendees: 65,
        highlights: ["New member orientation", "Project roadmap revealed", "Team formation"],
        images: 3
    }, {
        title: "Build-a-Bot Workshop",
        type: "Workshop",
        date: "October 12, 2024",
        location: "ITLL",
        attendees: 38,
        highlights: ["Built 5 prototype vehicles", "Hands-on electronics", "Team bonding"],
        images: 12
    }, {
        title: "Industry Panel: Future of Autonomous Vehicles",
        type: "Panel",
        date: "November 8, 2024",
        location: "Virtual",
        attendees: 156,
        highlights: ["5 industry speakers", "Career insights", "Networking session"],
        images: 8
    }]
      , n = [{
        title: "Weekly Build Sessions",
        schedule: "Every Tuesday & Thursday",
        time: "5:00 PM - 8:00 PM",
        location: "ITLL Garage",
        description: "Regular hands-on building and testing sessions open to all team members.",
        icon: mo
    }, {
        title: "Tech Talks Series",
        schedule: "First Friday of each month",
        time: "6:00 PM - 7:30 PM",
        location: "Engineering Center",
        description: "Monthly technical presentations on cutting-edge autonomous racing topics.",
        icon: Xy
    }, {
        title: "Racing Simulation Training",
        schedule: "Saturdays",
        time: "10:00 AM - 12:00 PM",
        location: "Computer Lab",
        description: "Practice with our racing simulators and test algorithms in virtual environments.",
        icon: as
    }]
      , r = s => {
        switch (s) {
        case "Workshop":
            return "bg-blue-500/10 text-blue-500 border-blue-500/20";
        case "Competition":
            return "bg-red-500/10 text-red-500 border-red-500/20";
        case "Recruitment":
            return "bg-green-500/10 text-green-500 border-green-500/20";
        case "Talk":
        case "Panel":
            return "bg-purple-500/10 text-purple-500 border-purple-500/20";
        case "Meeting":
            return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        default:
            return "bg-gray-500/10 text-gray-500 border-gray-500/20"
        }
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Events & Competitions"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-8",
                    children: "Join us for workshops, competitions, and networking events throughout the year"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsxs(B, {
                        variant: "racing",
                        size: "lg",
                        children: [a.jsx(Bo, {
                            className: "mr-2 h-4 w-4"
                        }), "Subscribe to Calendar"]
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/join",
                            children: "Join Our Team"
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            className: "py-12 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                    children: [{
                        label: "Events This Year",
                        value: "24"
                    }, {
                        label: "Competitions",
                        value: "5"
                    }, {
                        label: "Workshop Hours",
                        value: "120+"
                    }, {
                        label: "Total Attendees",
                        value: "800+"
                    }].map( (s, o) => a.jsxs(H, {
                        className: "p-6 text-center bg-gradient-card border-warning/20",
                        children: [a.jsx("p", {
                            className: "text-3xl font-bold text-warning",
                            children: s.value
                        }), a.jsx("p", {
                            className: "text-muted-foreground",
                            children: s.label
                        })]
                    }, o))
                })
            })
        }), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsx("div", {
                className: "container mx-auto",
                children: a.jsxs(Fx, {
                    defaultValue: "upcoming",
                    className: "w-full",
                    children: [a.jsxs(ff, {
                        className: "grid w-full max-w-md mx-auto grid-cols-3 mb-12",
                        children: [a.jsx(Kr, {
                            value: "upcoming",
                            children: "Upcoming"
                        }), a.jsx(Kr, {
                            value: "past",
                            children: "Past Events"
                        }), a.jsx(Kr, {
                            value: "series",
                            children: "Event Series"
                        })]
                    }), a.jsx(Gr, {
                        value: "upcoming",
                        className: "space-y-6",
                        children: e.map( (s, o) => a.jsx(H, {
                            className: "p-6 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all",
                            children: a.jsxs("div", {
                                className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6",
                                children: [a.jsxs("div", {
                                    className: "flex-1",
                                    children: [a.jsxs("div", {
                                        className: "flex items-start gap-4 mb-4",
                                        children: [a.jsx(we, {
                                            className: r(s.type),
                                            children: s.type
                                        }), a.jsx("h3", {
                                            className: "text-2xl font-bold flex-1",
                                            children: s.title
                                        })]
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground mb-4",
                                        children: s.description
                                    }), a.jsxs("div", {
                                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4",
                                        children: [a.jsxs("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [a.jsx(Bo, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.date
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [a.jsx(Kp, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.time
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [a.jsx(Fa, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.location
                                            })]
                                        })]
                                    }), s.maxAttendees > 0 && a.jsxs("div", {
                                        className: "mb-4",
                                        children: [a.jsxs("div", {
                                            className: "flex justify-between text-sm mb-2",
                                            children: [a.jsx("span", {
                                                className: "text-muted-foreground",
                                                children: "Registration"
                                            }), a.jsxs("span", {
                                                className: "text-warning",
                                                children: [s.attendees, "/", s.maxAttendees, " spots filled"]
                                            })]
                                        }), a.jsx("div", {
                                            className: "h-2 bg-muted rounded-full overflow-hidden",
                                            children: a.jsx("div", {
                                                className: "h-full bg-gradient-to-r from-warning to-secondary transition-all",
                                                style: {
                                                    width: `${s.attendees / s.maxAttendees * 100}%`
                                                }
                                            })
                                        })]
                                    }), a.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: s.tags.map( (i, l) => a.jsx(we, {
                                            variant: "secondary",
                                            className: "text-xs",
                                            children: i
                                        }, l))
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex flex-col gap-2",
                                    children: [a.jsxs(B, {
                                        variant: "racing",
                                        className: "group",
                                        children: ["Register Now", a.jsx(Hh, {
                                            className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                                        })]
                                    }), a.jsx(B, {
                                        variant: "outline",
                                        children: "Add to Calendar"
                                    })]
                                })]
                            })
                        }, o))
                    }), a.jsx(Gr, {
                        value: "past",
                        className: "space-y-6",
                        children: t.map( (s, o) => a.jsxs(H, {
                            className: "p-6 bg-gradient-card border-warning/20",
                            children: [a.jsxs("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [a.jsxs("div", {
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [a.jsx(we, {
                                            className: r(s.type),
                                            variant: "outline",
                                            children: s.type
                                        }), a.jsx("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: s.date
                                        })]
                                    }), a.jsx("h3", {
                                        className: "text-xl font-bold",
                                        children: s.title
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                                    children: [a.jsx(Sr, {
                                        className: "h-4 w-4"
                                    }), a.jsxs("span", {
                                        children: [s.attendees, " attended"]
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground mb-4",
                                children: [a.jsx(Fa, {
                                    className: "h-4 w-4"
                                }), a.jsx("span", {
                                    children: s.location
                                })]
                            }), a.jsxs("div", {
                                className: "space-y-2 mb-4",
                                children: [a.jsx("p", {
                                    className: "text-sm font-semibold",
                                    children: "Event Highlights:"
                                }), a.jsx("ul", {
                                    className: "list-disc list-inside text-sm text-muted-foreground space-y-1",
                                    children: s.highlights.map( (i, l) => a.jsx("li", {
                                        children: i
                                    }, l))
                                })]
                            }), a.jsxs("div", {
                                className: "flex gap-2",
                                children: [a.jsxs(B, {
                                    variant: "outline",
                                    size: "sm",
                                    children: ["View Photos (", s.images, ")"]
                                }), a.jsx(B, {
                                    variant: "ghost",
                                    size: "sm",
                                    children: "Event Recap"
                                })]
                            })]
                        }, o))
                    }), a.jsx(Gr, {
                        value: "series",
                        className: "space-y-6",
                        children: n.map( (s, o) => a.jsx(H, {
                            className: "p-6 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all group",
                            children: a.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [a.jsx("div", {
                                    className: "p-3 rounded-lg bg-warning/10 group-hover:bg-warning/20 transition-colors",
                                    children: a.jsx(s.icon, {
                                        className: "h-8 w-8 text-warning"
                                    })
                                }), a.jsxs("div", {
                                    className: "flex-1",
                                    children: [a.jsx("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: s.title
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground mb-3",
                                        children: s.description
                                    }), a.jsxs("div", {
                                        className: "flex flex-wrap gap-4 text-sm",
                                        children: [a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx(Bo, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.schedule
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx(Kp, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.time
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx(Fa, {
                                                className: "h-4 w-4 text-warning"
                                            }), a.jsx("span", {
                                                children: s.location
                                            })]
                                        })]
                                    })]
                                }), a.jsx(B, {
                                    variant: "outline",
                                    children: "Learn More"
                                })]
                            })
                        }, o))
                    })]
                })
            })
        }), a.jsx("section", {
            className: "py-16 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold mb-6",
                    children: "Never Miss an Event"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                    children: "Subscribe to our newsletter and calendar to stay updated on all CU Autonomous Racing events"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsx(B, {
                        variant: "racing",
                        size: "lg",
                        children: "Subscribe to Updates"
                    }), a.jsxs(B, {
                        variant: "outline",
                        size: "lg",
                        children: [a.jsx(Bo, {
                            className: "mr-2 h-4 w-4"
                        }), "Add to Google Calendar"]
                    })]
                })]
            })
        }), a.jsx(tn, {})]
    })
}
;
function km(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var tu = 0;
function A2() {
    g.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? _m()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? _m()),
        tu++,
        () => {
            tu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            tu--
        }
    }
    , [])
}
function _m() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var nu = "focusScope.autoFocusOnMount"
  , ru = "focusScope.autoFocusOnUnmount"
  , Nm = {
    bubbles: !1,
    cancelable: !0
}
  , O2 = "FocusScope"
  , Ux = g.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: s, onUnmountAutoFocus: o, ...i} = e
      , [l,c] = g.useState(null)
      , u = It(s)
      , d = It(o)
      , h = g.useRef(null)
      , p = Se(t, v => c(v))
      , f = g.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    g.useEffect( () => {
        if (r) {
            let v = function(y) {
                if (f.paused || !l)
                    return;
                const S = y.target;
                l.contains(S) ? h.current = S : Vn(h.current, {
                    select: !0
                })
            }
              , w = function(y) {
                if (f.paused || !l)
                    return;
                const S = y.relatedTarget;
                S !== null && (l.contains(S) || Vn(h.current, {
                    select: !0
                }))
            }
              , x = function(y) {
                if (document.activeElement === document.body)
                    for (const j of y)
                        j.removedNodes.length > 0 && Vn(l)
            };
            document.addEventListener("focusin", v),
            document.addEventListener("focusout", w);
            const m = new MutationObserver(x);
            return l && m.observe(l, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", v),
                document.removeEventListener("focusout", w),
                m.disconnect()
            }
        }
    }
    , [r, l, f.paused]),
    g.useEffect( () => {
        if (l) {
            Em.add(f);
            const v = document.activeElement;
            if (!l.contains(v)) {
                const x = new CustomEvent(nu,Nm);
                l.addEventListener(nu, u),
                l.dispatchEvent(x),
                x.defaultPrevented || (I2(F2(zx(l)), {
                    select: !0
                }),
                document.activeElement === v && Vn(l))
            }
            return () => {
                l.removeEventListener(nu, u),
                setTimeout( () => {
                    const x = new CustomEvent(ru,Nm);
                    l.addEventListener(ru, d),
                    l.dispatchEvent(x),
                    x.defaultPrevented || Vn(v ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(ru, d),
                    Em.remove(f)
                }
                , 0)
            }
        }
    }
    , [l, u, d, f]);
    const b = g.useCallback(v => {
        if (!n && !r || f.paused)
            return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
          , x = document.activeElement;
        if (w && x) {
            const m = v.currentTarget
              , [y,S] = M2(m);
            y && S ? !v.shiftKey && x === S ? (v.preventDefault(),
            n && Vn(y, {
                select: !0
            })) : v.shiftKey && x === y && (v.preventDefault(),
            n && Vn(S, {
                select: !0
            })) : x === m && v.preventDefault()
        }
    }
    , [n, r, f.paused]);
    return a.jsx(ne.div, {
        tabIndex: -1,
        ...i,
        ref: p,
        onKeyDown: b
    })
}
);
Ux.displayName = O2;
function I2(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Vn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function M2(e) {
    const t = zx(e)
      , n = Cm(t, e)
      , r = Cm(t.reverse(), e);
    return [n, r]
}
function zx(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Cm(e, t) {
    for (const n of e)
        if (!L2(n, {
            upTo: t
        }))
            return n
}
function L2(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function $2(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Vn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && $2(e) && t && e.select()
    }
}
var Em = D2();
function D2() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Tm(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Tm(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Tm(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function F2(e) {
    return e.filter(t => t.tagName !== "A")
}
function Bx(e) {
    const t = g.useRef({
        value: e,
        previous: e
    });
    return g.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var U2 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , gs = new WeakMap
  , va = new WeakMap
  , ya = {}
  , su = 0
  , Wx = function(e) {
    return e && (e.host || Wx(e.parentNode))
}
  , z2 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Wx(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , B2 = function(e, t, n, r) {
    var s = z2(t, Array.isArray(e) ? e : [e]);
    ya[n] || (ya[n] = new WeakMap);
    var o = ya[n]
      , i = []
      , l = new Set
      , c = new Set(s)
      , u = function(h) {
        !h || l.has(h) || (l.add(h),
        u(h.parentNode))
    };
    s.forEach(u);
    var d = function(h) {
        !h || c.has(h) || Array.prototype.forEach.call(h.children, function(p) {
            if (l.has(p))
                d(p);
            else
                try {
                    var f = p.getAttribute(r)
                      , b = f !== null && f !== "false"
                      , v = (gs.get(p) || 0) + 1
                      , w = (o.get(p) || 0) + 1;
                    gs.set(p, v),
                    o.set(p, w),
                    i.push(p),
                    v === 1 && b && va.set(p, !0),
                    w === 1 && p.setAttribute(n, "true"),
                    b || p.setAttribute(r, "true")
                } catch (x) {
                    console.error("aria-hidden: cannot operate on ", p, x)
                }
        })
    };
    return d(t),
    l.clear(),
    su++,
    function() {
        i.forEach(function(h) {
            var p = gs.get(h) - 1
              , f = o.get(h) - 1;
            gs.set(h, p),
            o.set(h, f),
            p || (va.has(h) || h.removeAttribute(r),
            va.delete(h)),
            f || h.removeAttribute(n)
        }),
        su--,
        su || (gs = new WeakMap,
        gs = new WeakMap,
        va = new WeakMap,
        ya = {})
    }
}
  , W2 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , s = U2(e);
    return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
    B2(r, s, n, "aria-hidden")) : function() {
        return null
    }
}
  , un = function() {
    return un = Object.assign || function(t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ,
    un.apply(this, arguments)
};
function Vx(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
}
function V2(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, s = t.length, o; r < s; r++)
            (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
            o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var za = "right-scroll-bar-position"
  , Ba = "width-before-scroll-bar"
  , H2 = "with-scroll-bars-hidden"
  , q2 = "--removed-body-scroll-bar-size";
function ou(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function K2(e, t) {
    var n = g.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var s = n.value;
                    s !== r && (n.value = r,
                    n.callback(r, s))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var G2 = typeof window < "u" ? g.useLayoutEffect : g.useEffect
  , Pm = new WeakMap;
function Q2(e, t) {
    var n = K2(null, function(r) {
        return e.forEach(function(s) {
            return ou(s, r)
        })
    });
    return G2(function() {
        var r = Pm.get(n);
        if (r) {
            var s = new Set(r)
              , o = new Set(e)
              , i = n.current;
            s.forEach(function(l) {
                o.has(l) || ou(l, null)
            }),
            o.forEach(function(l) {
                s.has(l) || ou(l, i)
            })
        }
        Pm.set(n, e)
    }, [e]),
    n
}
function Y2(e) {
    return e
}
function J2(e, t) {
    t === void 0 && (t = Y2);
    var n = []
      , r = !1
      , s = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(o) {
            var i = t(o, r);
            return n.push(i),
            function() {
                n = n.filter(function(l) {
                    return l !== i
                })
            }
        },
        assignSyncMedium: function(o) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(o)
            }
            n = {
                push: function(l) {
                    return o(l)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(o) {
            r = !0;
            var i = [];
            if (n.length) {
                var l = n;
                n = [],
                l.forEach(o),
                i = n
            }
            var c = function() {
                var d = i;
                i = [],
                d.forEach(o)
            }
              , u = function() {
                return Promise.resolve().then(c)
            };
            u(),
            n = {
                push: function(d) {
                    i.push(d),
                    u()
                },
                filter: function(d) {
                    return i = i.filter(d),
                    n
                }
            }
        }
    };
    return s
}
function X2(e) {
    e === void 0 && (e = {});
    var t = J2(null);
    return t.options = un({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Hx = function(e) {
    var t = e.sideCar
      , n = Vx(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return g.createElement(r, un({}, n))
};
Hx.isSideCarExport = !0;
function Z2(e, t) {
    return e.useMedium(t),
    Hx
}
var qx = X2()
  , iu = function() {}
  , ac = g.forwardRef(function(e, t) {
    var n = g.useRef(null)
      , r = g.useState({
        onScrollCapture: iu,
        onWheelCapture: iu,
        onTouchMoveCapture: iu
    })
      , s = r[0]
      , o = r[1]
      , i = e.forwardProps
      , l = e.children
      , c = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , h = e.shards
      , p = e.sideCar
      , f = e.noRelative
      , b = e.noIsolation
      , v = e.inert
      , w = e.allowPinchZoom
      , x = e.as
      , m = x === void 0 ? "div" : x
      , y = e.gapMode
      , S = Vx(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , j = p
      , k = Q2([n, t])
      , _ = un(un({}, S), s);
    return g.createElement(g.Fragment, null, d && g.createElement(j, {
        sideCar: qx,
        removeScrollBar: u,
        shards: h,
        noRelative: f,
        noIsolation: b,
        inert: v,
        setCallbacks: o,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: y
    }), i ? g.cloneElement(g.Children.only(l), un(un({}, _), {
        ref: k
    })) : g.createElement(m, un({}, _, {
        className: c,
        ref: k
    }), l))
});
ac.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ac.classNames = {
    fullWidth: Ba,
    zeroRight: za
};
var eT = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function tT() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = eT();
    return t && e.setAttribute("nonce", t),
    e
}
function nT(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function rT(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var sT = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = tT()) && (nT(t, n),
            rT(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , oT = function() {
    var e = sT();
    return function(t, n) {
        g.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Kx = function() {
    var e = oT()
      , t = function(n) {
        var r = n.styles
          , s = n.dynamic;
        return e(r, s),
        null
    };
    return t
}
  , iT = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , au = function(e) {
    return parseInt(e || "", 10) || 0
}
  , aT = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [au(n), au(r), au(s)]
}
  , lT = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return iT;
    var t = aT(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , cT = Kx()
  , qs = "data-scroll-locked"
  , uT = function(e, t, n, r) {
    var s = e.left
      , o = e.top
      , i = e.right
      , l = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(H2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(qs, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(za, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ba, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(za, " .").concat(za, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ba, " .").concat(Ba, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qs, `] {
    `).concat(q2, ": ").concat(l, `px;
  }
`)
}
  , Rm = function() {
    var e = parseInt(document.body.getAttribute(qs) || "0", 10);
    return isFinite(e) ? e : 0
}
  , dT = function() {
    g.useEffect(function() {
        return document.body.setAttribute(qs, (Rm() + 1).toString()),
        function() {
            var e = Rm() - 1;
            e <= 0 ? document.body.removeAttribute(qs) : document.body.setAttribute(qs, e.toString())
        }
    }, [])
}
  , hT = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , s = r === void 0 ? "margin" : r;
    dT();
    var o = g.useMemo(function() {
        return lT(s)
    }, [s]);
    return g.createElement(cT, {
        styles: uT(o, !t, s, n ? "" : "!important")
    })
}
  , Nd = !1;
if (typeof window < "u")
    try {
        var xa = Object.defineProperty({}, "passive", {
            get: function() {
                return Nd = !0,
                !0
            }
        });
        window.addEventListener("test", xa, xa),
        window.removeEventListener("test", xa, xa)
    } catch {
        Nd = !1
    }
var vs = Nd ? {
    passive: !1
} : !1
  , fT = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Gx = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !fT(e) && n[t] === "visible")
}
  , pT = function(e) {
    return Gx(e, "overflowY")
}
  , mT = function(e) {
    return Gx(e, "overflowX")
}
  , Am = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var s = Qx(e, r);
        if (s) {
            var o = Yx(e, r)
              , i = o[1]
              , l = o[2];
            if (i > l)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , gT = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , vT = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Qx = function(e, t) {
    return e === "v" ? pT(t) : mT(t)
}
  , Yx = function(e, t) {
    return e === "v" ? gT(t) : vT(t)
}
  , yT = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , xT = function(e, t, n, r, s) {
    var o = yT(e, window.getComputedStyle(t).direction)
      , i = o * r
      , l = n.target
      , c = t.contains(l)
      , u = !1
      , d = i > 0
      , h = 0
      , p = 0;
    do {
        if (!l)
            break;
        var f = Yx(e, l)
          , b = f[0]
          , v = f[1]
          , w = f[2]
          , x = v - w - o * b;
        (b || x) && Qx(e, l) && (h += x,
        p += b);
        var m = l.parentNode;
        l = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
    return (d && (Math.abs(h) < 1 || !s) || !d && (Math.abs(p) < 1 || !s)) && (u = !0),
    u
}
  , wa = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Om = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Im = function(e) {
    return e && "current"in e ? e.current : e
}
  , wT = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , bT = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , ST = 0
  , ys = [];
function jT(e) {
    var t = g.useRef([])
      , n = g.useRef([0, 0])
      , r = g.useRef()
      , s = g.useState(ST++)[0]
      , o = g.useState(Kx)[0]
      , i = g.useRef(e);
    g.useEffect(function() {
        i.current = e
    }, [e]),
    g.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var v = V2([e.lockRef.current], (e.shards || []).map(Im), !0).filter(Boolean);
            return v.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(s))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(s)),
                v.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(s))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var l = g.useCallback(function(v, w) {
        if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
            return !i.current.allowPinchZoom;
        var x = wa(v), m = n.current, y = "deltaX"in v ? v.deltaX : m[0] - x[0], S = "deltaY"in v ? v.deltaY : m[1] - x[1], j, k = v.target, _ = Math.abs(y) > Math.abs(S) ? "h" : "v";
        if ("touches"in v && _ === "h" && k.type === "range")
            return !1;
        var N = Am(_, k);
        if (!N)
            return !0;
        if (N ? j = _ : (j = _ === "v" ? "h" : "v",
        N = Am(_, k)),
        !N)
            return !1;
        if (!r.current && "changedTouches"in v && (y || S) && (r.current = j),
        !j)
            return !0;
        var A = r.current || j;
        return xT(A, w, v, A === "h" ? y : S, !0)
    }, [])
      , c = g.useCallback(function(v) {
        var w = v;
        if (!(!ys.length || ys[ys.length - 1] !== o)) {
            var x = "deltaY"in w ? Om(w) : wa(w)
              , m = t.current.filter(function(j) {
                return j.name === w.type && (j.target === w.target || w.target === j.shadowParent) && wT(j.delta, x)
            })[0];
            if (m && m.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!m) {
                var y = (i.current.shards || []).map(Im).filter(Boolean).filter(function(j) {
                    return j.contains(w.target)
                })
                  , S = y.length > 0 ? l(w, y[0]) : !i.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = g.useCallback(function(v, w, x, m) {
        var y = {
            name: v,
            delta: w,
            target: x,
            should: m,
            shadowParent: kT(x)
        };
        t.current.push(y),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== y
            })
        }, 1)
    }, [])
      , d = g.useCallback(function(v) {
        n.current = wa(v),
        r.current = void 0
    }, [])
      , h = g.useCallback(function(v) {
        u(v.type, Om(v), v.target, l(v, e.lockRef.current))
    }, [])
      , p = g.useCallback(function(v) {
        u(v.type, wa(v), v.target, l(v, e.lockRef.current))
    }, []);
    g.useEffect(function() {
        return ys.push(o),
        e.setCallbacks({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: p
        }),
        document.addEventListener("wheel", c, vs),
        document.addEventListener("touchmove", c, vs),
        document.addEventListener("touchstart", d, vs),
        function() {
            ys = ys.filter(function(v) {
                return v !== o
            }),
            document.removeEventListener("wheel", c, vs),
            document.removeEventListener("touchmove", c, vs),
            document.removeEventListener("touchstart", d, vs)
        }
    }, []);
    var f = e.removeScrollBar
      , b = e.inert;
    return g.createElement(g.Fragment, null, b ? g.createElement(o, {
        styles: bT(s)
    }) : null, f ? g.createElement(hT, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function kT(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const _T = Z2(qx, jT);
var Jx = g.forwardRef(function(e, t) {
    return g.createElement(ac, un({}, e, {
        ref: t,
        sideCar: _T
    }))
});
Jx.classNames = ac.classNames;
var NT = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , CT = [" ", "Enter"]
  , ns = "Select"
  , [lc,cc,ET] = Uh(ns)
  , [So,KA] = In(ns, [ET, Zl])
  , uc = Zl()
  , [TT,jr] = So(ns)
  , [PT,RT] = So(ns)
  , Xx = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: s, onOpenChange: o, value: i, defaultValue: l, onValueChange: c, dir: u, name: d, autoComplete: h, disabled: p, required: f, form: b} = e
      , v = uc(t)
      , [w,x] = g.useState(null)
      , [m,y] = g.useState(null)
      , [S,j] = g.useState(!1)
      , k = df(u)
      , [_,N] = es({
        prop: r,
        defaultProp: s ?? !1,
        onChange: o,
        caller: ns
    })
      , [A,R] = es({
        prop: i,
        defaultProp: l,
        onChange: c,
        caller: ns
    })
      , U = g.useRef(null)
      , M = w ? b || !!w.closest("form") : !0
      , [V,I] = g.useState(new Set)
      , q = Array.from(V).map(D => D.props.value).join(";");
    return a.jsx(F0, {
        ...v,
        children: a.jsxs(TT, {
            required: f,
            scope: t,
            trigger: w,
            onTriggerChange: x,
            valueNode: m,
            onValueNodeChange: y,
            valueNodeHasChildren: S,
            onValueNodeHasChildrenChange: j,
            contentId: vo(),
            value: A,
            onValueChange: R,
            open: _,
            onOpenChange: N,
            dir: k,
            triggerPointerDownPosRef: U,
            disabled: p,
            children: [a.jsx(lc.Provider, {
                scope: t,
                children: a.jsx(PT, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: g.useCallback(D => {
                        I(W => new Set(W).add(D))
                    }
                    , []),
                    onNativeOptionRemove: g.useCallback(D => {
                        I(W => {
                            const C = new Set(W);
                            return C.delete(D),
                            C
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), M ? a.jsxs(Sw, {
                "aria-hidden": !0,
                required: f,
                tabIndex: -1,
                name: d,
                autoComplete: h,
                value: A,
                onChange: D => R(D.target.value),
                disabled: p,
                form: b,
                children: [A === void 0 ? a.jsx("option", {
                    value: ""
                }) : null, Array.from(V)]
            }, q) : null]
        })
    })
}
;
Xx.displayName = ns;
var Zx = "SelectTrigger"
  , ew = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...s} = e
      , o = uc(n)
      , i = jr(Zx, n)
      , l = i.disabled || r
      , c = Se(t, i.onTriggerChange)
      , u = cc(n)
      , d = g.useRef("touch")
      , [h,p,f] = kw(v => {
        const w = u().filter(y => !y.disabled)
          , x = w.find(y => y.value === i.value)
          , m = _w(w, v, x);
        m !== void 0 && i.onValueChange(m.value)
    }
    )
      , b = v => {
        l || (i.onOpenChange(!0),
        f()),
        v && (i.triggerPointerDownPosRef.current = {
            x: Math.round(v.pageX),
            y: Math.round(v.pageY)
        })
    }
    ;
    return a.jsx(U0, {
        asChild: !0,
        ...o,
        children: a.jsx(ne.button, {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: l,
            "data-disabled": l ? "" : void 0,
            "data-placeholder": jw(i.value) ? "" : void 0,
            ...s,
            ref: c,
            onClick: G(s.onClick, v => {
                v.currentTarget.focus(),
                d.current !== "mouse" && b(v)
            }
            ),
            onPointerDown: G(s.onPointerDown, v => {
                d.current = v.pointerType;
                const w = v.target;
                w.hasPointerCapture(v.pointerId) && w.releasePointerCapture(v.pointerId),
                v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (b(v),
                v.preventDefault())
            }
            ),
            onKeyDown: G(s.onKeyDown, v => {
                const w = h.current !== "";
                !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key),
                !(w && v.key === " ") && NT.includes(v.key) && (b(),
                v.preventDefault())
            }
            )
        })
    })
}
);
ew.displayName = Zx;
var tw = "SelectValue"
  , nw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: s, children: o, placeholder: i="", ...l} = e
      , c = jr(tw, n)
      , {onValueNodeHasChildrenChange: u} = c
      , d = o !== void 0
      , h = Se(t, c.onValueNodeChange);
    return He( () => {
        u(d)
    }
    , [u, d]),
    a.jsx(ne.span, {
        ...l,
        ref: h,
        style: {
            pointerEvents: "none"
        },
        children: jw(c.value) ? a.jsx(a.Fragment, {
            children: i
        }) : o
    })
}
);
nw.displayName = tw;
var AT = "SelectIcon"
  , rw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...s} = e;
    return a.jsx(ne.span, {
        "aria-hidden": !0,
        ...s,
        ref: t,
        children: r || "▼"
    })
}
);
rw.displayName = AT;
var OT = "SelectPortal"
  , sw = e => a.jsx(zh, {
    asChild: !0,
    ...e
});
sw.displayName = OT;
var rs = "SelectContent"
  , ow = g.forwardRef( (e, t) => {
    const n = jr(rs, e.__scopeSelect)
      , [r,s] = g.useState();
    if (He( () => {
        s(new DocumentFragment)
    }
    , []),
    !n.open) {
        const o = r;
        return o ? is.createPortal(a.jsx(iw, {
            scope: e.__scopeSelect,
            children: a.jsx(lc.Slot, {
                scope: e.__scopeSelect,
                children: a.jsx("div", {
                    children: e.children
                })
            })
        }), o) : null
    }
    return a.jsx(aw, {
        ...e,
        ref: t
    })
}
);
ow.displayName = rs;
var zt = 10
  , [iw,kr] = So(rs)
  , IT = "SelectContentImpl"
  , MT = bi("SelectContent.RemoveScroll")
  , aw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: o, onPointerDownOutside: i, side: l, sideOffset: c, align: u, alignOffset: d, arrowPadding: h, collisionBoundary: p, collisionPadding: f, sticky: b, hideWhenDetached: v, avoidCollisions: w, ...x} = e
      , m = jr(rs, n)
      , [y,S] = g.useState(null)
      , [j,k] = g.useState(null)
      , _ = Se(t, $ => S($))
      , [N,A] = g.useState(null)
      , [R,U] = g.useState(null)
      , M = cc(n)
      , [V,I] = g.useState(!1)
      , q = g.useRef(!1);
    g.useEffect( () => {
        if (y)
            return W2(y)
    }
    , [y]),
    A2();
    const D = g.useCallback($ => {
        const [de,...Te] = M().map(ae => ae.ref.current)
          , [ue] = Te.slice(-1)
          , oe = document.activeElement;
        for (const ae of $)
            if (ae === oe || (ae == null || ae.scrollIntoView({
                block: "nearest"
            }),
            ae === de && j && (j.scrollTop = 0),
            ae === ue && j && (j.scrollTop = j.scrollHeight),
            ae == null || ae.focus(),
            document.activeElement !== oe))
                return
    }
    , [M, j])
      , W = g.useCallback( () => D([N, y]), [D, N, y]);
    g.useEffect( () => {
        V && W()
    }
    , [V, W]);
    const {onOpenChange: C, triggerPointerDownPosRef: T} = m;
    g.useEffect( () => {
        if (y) {
            let $ = {
                x: 0,
                y: 0
            };
            const de = ue => {
                var oe, ae;
                $ = {
                    x: Math.abs(Math.round(ue.pageX) - (((oe = T.current) == null ? void 0 : oe.x) ?? 0)),
                    y: Math.abs(Math.round(ue.pageY) - (((ae = T.current) == null ? void 0 : ae.y) ?? 0))
                }
            }
              , Te = ue => {
                $.x <= 10 && $.y <= 10 ? ue.preventDefault() : y.contains(ue.target) || C(!1),
                document.removeEventListener("pointermove", de),
                T.current = null
            }
            ;
            return T.current !== null && (document.addEventListener("pointermove", de),
            document.addEventListener("pointerup", Te, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", de),
                document.removeEventListener("pointerup", Te, {
                    capture: !0
                })
            }
        }
    }
    , [y, C, T]),
    g.useEffect( () => {
        const $ = () => C(!1);
        return window.addEventListener("blur", $),
        window.addEventListener("resize", $),
        () => {
            window.removeEventListener("blur", $),
            window.removeEventListener("resize", $)
        }
    }
    , [C]);
    const [L,K] = kw($ => {
        const de = M().filter(oe => !oe.disabled)
          , Te = de.find(oe => oe.ref.current === document.activeElement)
          , ue = _w(de, $, Te);
        ue && setTimeout( () => ue.ref.current.focus())
    }
    )
      , z = g.useCallback( ($, de, Te) => {
        const ue = !q.current && !Te;
        (m.value !== void 0 && m.value === de || ue) && (A($),
        ue && (q.current = !0))
    }
    , [m.value])
      , ee = g.useCallback( () => y == null ? void 0 : y.focus(), [y])
      , Q = g.useCallback( ($, de, Te) => {
        const ue = !q.current && !Te;
        (m.value !== void 0 && m.value === de || ue) && U($)
    }
    , [m.value])
      , ve = r === "popper" ? Cd : lw
      , Ee = ve === Cd ? {
        side: l,
        sideOffset: c,
        align: u,
        alignOffset: d,
        arrowPadding: h,
        collisionBoundary: p,
        collisionPadding: f,
        sticky: b,
        hideWhenDetached: v,
        avoidCollisions: w
    } : {};
    return a.jsx(iw, {
        scope: n,
        content: y,
        viewport: j,
        onViewportChange: k,
        itemRefCallback: z,
        selectedItem: N,
        onItemLeave: ee,
        itemTextRefCallback: Q,
        focusSelectedItem: W,
        selectedItemText: R,
        position: r,
        isPositioned: V,
        searchRef: L,
        children: a.jsx(Jx, {
            as: MT,
            allowPinchZoom: !0,
            children: a.jsx(Ux, {
                asChild: !0,
                trapped: m.open,
                onMountAutoFocus: $ => {
                    $.preventDefault()
                }
                ,
                onUnmountAutoFocus: G(s, $ => {
                    var de;
                    (de = m.trigger) == null || de.focus({
                        preventScroll: !0
                    }),
                    $.preventDefault()
                }
                ),
                children: a.jsx(Vl, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: o,
                    onPointerDownOutside: i,
                    onFocusOutside: $ => $.preventDefault(),
                    onDismiss: () => m.onOpenChange(!1),
                    children: a.jsx(ve, {
                        role: "listbox",
                        id: m.contentId,
                        "data-state": m.open ? "open" : "closed",
                        dir: m.dir,
                        onContextMenu: $ => $.preventDefault(),
                        ...x,
                        ...Ee,
                        onPlaced: () => I(!0),
                        ref: _,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...x.style
                        },
                        onKeyDown: G(x.onKeyDown, $ => {
                            const de = $.ctrlKey || $.altKey || $.metaKey;
                            if ($.key === "Tab" && $.preventDefault(),
                            !de && $.key.length === 1 && K($.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                                let ue = M().filter(oe => !oe.disabled).map(oe => oe.ref.current);
                                if (["ArrowUp", "End"].includes($.key) && (ue = ue.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes($.key)) {
                                    const oe = $.target
                                      , ae = ue.indexOf(oe);
                                    ue = ue.slice(ae + 1)
                                }
                                setTimeout( () => D(ue)),
                                $.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
aw.displayName = IT;
var LT = "SelectItemAlignedPosition"
  , lw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...s} = e
      , o = jr(rs, n)
      , i = kr(rs, n)
      , [l,c] = g.useState(null)
      , [u,d] = g.useState(null)
      , h = Se(t, _ => d(_))
      , p = cc(n)
      , f = g.useRef(!1)
      , b = g.useRef(!0)
      , {viewport: v, selectedItem: w, selectedItemText: x, focusSelectedItem: m} = i
      , y = g.useCallback( () => {
        if (o.trigger && o.valueNode && l && u && v && w && x) {
            const _ = o.trigger.getBoundingClientRect()
              , N = u.getBoundingClientRect()
              , A = o.valueNode.getBoundingClientRect()
              , R = x.getBoundingClientRect();
            if (o.dir !== "rtl") {
                const oe = R.left - N.left
                  , ae = A.left - oe
                  , qe = _.left - ae
                  , kt = _.width + qe
                  , Nr = Math.max(kt, N.width)
                  , Mn = window.innerWidth - zt
                  , Cr = km(ae, [zt, Math.max(zt, Mn - Nr)]);
                l.style.minWidth = kt + "px",
                l.style.left = Cr + "px"
            } else {
                const oe = N.right - R.right
                  , ae = window.innerWidth - A.right - oe
                  , qe = window.innerWidth - _.right - ae
                  , kt = _.width + qe
                  , Nr = Math.max(kt, N.width)
                  , Mn = window.innerWidth - zt
                  , Cr = km(ae, [zt, Math.max(zt, Mn - Nr)]);
                l.style.minWidth = kt + "px",
                l.style.right = Cr + "px"
            }
            const U = p()
              , M = window.innerHeight - zt * 2
              , V = v.scrollHeight
              , I = window.getComputedStyle(u)
              , q = parseInt(I.borderTopWidth, 10)
              , D = parseInt(I.paddingTop, 10)
              , W = parseInt(I.borderBottomWidth, 10)
              , C = parseInt(I.paddingBottom, 10)
              , T = q + D + V + C + W
              , L = Math.min(w.offsetHeight * 5, T)
              , K = window.getComputedStyle(v)
              , z = parseInt(K.paddingTop, 10)
              , ee = parseInt(K.paddingBottom, 10)
              , Q = _.top + _.height / 2 - zt
              , ve = M - Q
              , Ee = w.offsetHeight / 2
              , $ = w.offsetTop + Ee
              , de = q + D + $
              , Te = T - de;
            if (de <= Q) {
                const oe = U.length > 0 && w === U[U.length - 1].ref.current;
                l.style.bottom = "0px";
                const ae = u.clientHeight - v.offsetTop - v.offsetHeight
                  , qe = Math.max(ve, Ee + (oe ? ee : 0) + ae + W)
                  , kt = de + qe;
                l.style.height = kt + "px"
            } else {
                const oe = U.length > 0 && w === U[0].ref.current;
                l.style.top = "0px";
                const qe = Math.max(Q, q + v.offsetTop + (oe ? z : 0) + Ee) + Te;
                l.style.height = qe + "px",
                v.scrollTop = de - Q + v.offsetTop
            }
            l.style.margin = `${zt}px 0`,
            l.style.minHeight = L + "px",
            l.style.maxHeight = M + "px",
            r == null || r(),
            requestAnimationFrame( () => f.current = !0)
        }
    }
    , [p, o.trigger, o.valueNode, l, u, v, w, x, o.dir, r]);
    He( () => y(), [y]);
    const [S,j] = g.useState();
    He( () => {
        u && j(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const k = g.useCallback(_ => {
        _ && b.current === !0 && (y(),
        m == null || m(),
        b.current = !1)
    }
    , [y, m]);
    return a.jsx(DT, {
        scope: n,
        contentWrapper: l,
        shouldExpandOnScrollRef: f,
        onScrollButtonChange: k,
        children: a.jsx("div", {
            ref: c,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: S
            },
            children: a.jsx(ne.div, {
                ...s,
                ref: h,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...s.style
                }
            })
        })
    })
}
);
lw.displayName = LT;
var $T = "SelectPopperPosition"
  , Cd = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: s=zt, ...o} = e
      , i = uc(n);
    return a.jsx(z0, {
        ...i,
        ...o,
        ref: t,
        align: r,
        collisionPadding: s,
        style: {
            boxSizing: "border-box",
            ...o.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Cd.displayName = $T;
var [DT,pf] = So(rs, {})
  , Ed = "SelectViewport"
  , cw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...s} = e
      , o = kr(Ed, n)
      , i = pf(Ed, n)
      , l = Se(t, o.onViewportChange)
      , c = g.useRef(0);
    return a.jsxs(a.Fragment, {
        children: [a.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), a.jsx(lc.Slot, {
            scope: n,
            children: a.jsx(ne.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...s,
                ref: l,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...s.style
                },
                onScroll: G(s.onScroll, u => {
                    const d = u.currentTarget
                      , {contentWrapper: h, shouldExpandOnScrollRef: p} = i;
                    if (p != null && p.current && h) {
                        const f = Math.abs(c.current - d.scrollTop);
                        if (f > 0) {
                            const b = window.innerHeight - zt * 2
                              , v = parseFloat(h.style.minHeight)
                              , w = parseFloat(h.style.height)
                              , x = Math.max(v, w);
                            if (x < b) {
                                const m = x + f
                                  , y = Math.min(b, m)
                                  , S = m - y;
                                h.style.height = y + "px",
                                h.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0,
                                h.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    c.current = d.scrollTop
                }
                )
            })
        })]
    })
}
);
cw.displayName = Ed;
var uw = "SelectGroup"
  , [FT,UT] = So(uw)
  , zT = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , s = vo();
    return a.jsx(FT, {
        scope: n,
        id: s,
        children: a.jsx(ne.div, {
            role: "group",
            "aria-labelledby": s,
            ...r,
            ref: t
        })
    })
}
);
zT.displayName = uw;
var dw = "SelectLabel"
  , hw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , s = UT(dw, n);
    return a.jsx(ne.div, {
        id: s.id,
        ...r,
        ref: t
    })
}
);
hw.displayName = dw;
var Sl = "SelectItem"
  , [BT,fw] = So(Sl)
  , pw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: s=!1, textValue: o, ...i} = e
      , l = jr(Sl, n)
      , c = kr(Sl, n)
      , u = l.value === r
      , [d,h] = g.useState(o ?? "")
      , [p,f] = g.useState(!1)
      , b = Se(t, m => {
        var y;
        return (y = c.itemRefCallback) == null ? void 0 : y.call(c, m, r, s)
    }
    )
      , v = vo()
      , w = g.useRef("touch")
      , x = () => {
        s || (l.onValueChange(r),
        l.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return a.jsx(BT, {
        scope: n,
        value: r,
        disabled: s,
        textId: v,
        isSelected: u,
        onItemTextChange: g.useCallback(m => {
            h(y => y || ((m == null ? void 0 : m.textContent) ?? "").trim())
        }
        , []),
        children: a.jsx(lc.ItemSlot, {
            scope: n,
            value: r,
            disabled: s,
            textValue: d,
            children: a.jsx(ne.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: G(i.onFocus, () => f(!0)),
                onBlur: G(i.onBlur, () => f(!1)),
                onClick: G(i.onClick, () => {
                    w.current !== "mouse" && x()
                }
                ),
                onPointerUp: G(i.onPointerUp, () => {
                    w.current === "mouse" && x()
                }
                ),
                onPointerDown: G(i.onPointerDown, m => {
                    w.current = m.pointerType
                }
                ),
                onPointerMove: G(i.onPointerMove, m => {
                    var y;
                    w.current = m.pointerType,
                    s ? (y = c.onItemLeave) == null || y.call(c) : w.current === "mouse" && m.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: G(i.onPointerLeave, m => {
                    var y;
                    m.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c))
                }
                ),
                onKeyDown: G(i.onKeyDown, m => {
                    var S;
                    ((S = c.searchRef) == null ? void 0 : S.current) !== "" && m.key === " " || (CT.includes(m.key) && x(),
                    m.key === " " && m.preventDefault())
                }
                )
            })
        })
    })
}
);
pw.displayName = Sl;
var Wo = "SelectItemText"
  , mw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: s, ...o} = e
      , i = jr(Wo, n)
      , l = kr(Wo, n)
      , c = fw(Wo, n)
      , u = RT(Wo, n)
      , [d,h] = g.useState(null)
      , p = Se(t, x => h(x), c.onItemTextChange, x => {
        var m;
        return (m = l.itemTextRefCallback) == null ? void 0 : m.call(l, x, c.value, c.disabled)
    }
    )
      , f = d == null ? void 0 : d.textContent
      , b = g.useMemo( () => a.jsx("option", {
        value: c.value,
        disabled: c.disabled,
        children: f
    }, c.value), [c.disabled, c.value, f])
      , {onNativeOptionAdd: v, onNativeOptionRemove: w} = u;
    return He( () => (v(b),
    () => w(b)), [v, w, b]),
    a.jsxs(a.Fragment, {
        children: [a.jsx(ne.span, {
            id: c.textId,
            ...o,
            ref: p
        }), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? is.createPortal(o.children, i.valueNode) : null]
    })
}
);
mw.displayName = Wo;
var gw = "SelectItemIndicator"
  , vw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return fw(gw, n).isSelected ? a.jsx(ne.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
vw.displayName = gw;
var Td = "SelectScrollUpButton"
  , yw = g.forwardRef( (e, t) => {
    const n = kr(Td, e.__scopeSelect)
      , r = pf(Td, e.__scopeSelect)
      , [s,o] = g.useState(!1)
      , i = Se(t, r.onScrollButtonChange);
    return He( () => {
        if (n.viewport && n.isPositioned) {
            let l = function() {
                const u = c.scrollTop > 0;
                o(u)
            };
            const c = n.viewport;
            return l(),
            c.addEventListener("scroll", l),
            () => c.removeEventListener("scroll", l)
        }
    }
    , [n.viewport, n.isPositioned]),
    s ? a.jsx(ww, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: l, selectedItem: c} = n;
            l && c && (l.scrollTop = l.scrollTop - c.offsetHeight)
        }
    }) : null
}
);
yw.displayName = Td;
var Pd = "SelectScrollDownButton"
  , xw = g.forwardRef( (e, t) => {
    const n = kr(Pd, e.__scopeSelect)
      , r = pf(Pd, e.__scopeSelect)
      , [s,o] = g.useState(!1)
      , i = Se(t, r.onScrollButtonChange);
    return He( () => {
        if (n.viewport && n.isPositioned) {
            let l = function() {
                const u = c.scrollHeight - c.clientHeight
                  , d = Math.ceil(c.scrollTop) < u;
                o(d)
            };
            const c = n.viewport;
            return l(),
            c.addEventListener("scroll", l),
            () => c.removeEventListener("scroll", l)
        }
    }
    , [n.viewport, n.isPositioned]),
    s ? a.jsx(ww, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: l, selectedItem: c} = n;
            l && c && (l.scrollTop = l.scrollTop + c.offsetHeight)
        }
    }) : null
}
);
xw.displayName = Pd;
var ww = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...s} = e
      , o = kr("SelectScrollButton", n)
      , i = g.useRef(null)
      , l = cc(n)
      , c = g.useCallback( () => {
        i.current !== null && (window.clearInterval(i.current),
        i.current = null)
    }
    , []);
    return g.useEffect( () => () => c(), [c]),
    He( () => {
        var d;
        const u = l().find(h => h.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({
            block: "nearest"
        })
    }
    , [l]),
    a.jsx(ne.div, {
        "aria-hidden": !0,
        ...s,
        ref: t,
        style: {
            flexShrink: 0,
            ...s.style
        },
        onPointerDown: G(s.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: G(s.onPointerMove, () => {
            var u;
            (u = o.onItemLeave) == null || u.call(o),
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: G(s.onPointerLeave, () => {
            c()
        }
        )
    })
}
)
  , WT = "SelectSeparator"
  , bw = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return a.jsx(ne.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
bw.displayName = WT;
var Rd = "SelectArrow"
  , VT = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , s = uc(n)
      , o = jr(Rd, n)
      , i = kr(Rd, n);
    return o.open && i.position === "popper" ? a.jsx(B0, {
        ...s,
        ...r,
        ref: t
    }) : null
}
);
VT.displayName = Rd;
var HT = "SelectBubbleInput"
  , Sw = g.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const s = g.useRef(null)
      , o = Se(r, s)
      , i = Bx(t);
    return g.useEffect( () => {
        const l = s.current;
        if (!l)
            return;
        const c = window.HTMLSelectElement.prototype
          , d = Object.getOwnPropertyDescriptor(c, "value").set;
        if (i !== t && d) {
            const h = new Event("change",{
                bubbles: !0
            });
            d.call(l, t),
            l.dispatchEvent(h)
        }
    }
    , [i, t]),
    a.jsx(ne.select, {
        ...n,
        style: {
            ...Ty,
            ...n.style
        },
        ref: o,
        defaultValue: t
    })
}
);
Sw.displayName = HT;
function jw(e) {
    return e === "" || e === void 0
}
function kw(e) {
    const t = It(e)
      , n = g.useRef("")
      , r = g.useRef(0)
      , s = g.useCallback(i => {
        const l = n.current + i;
        t(l),
        function c(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => c(""), 1e3))
        }(l)
    }
    , [t])
      , o = g.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return g.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, s, o]
}
function _w(e, t, n) {
    const s = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , o = n ? e.indexOf(n) : -1;
    let i = qT(e, Math.max(o, 0));
    s.length === 1 && (i = i.filter(u => u !== n));
    const c = i.find(u => u.textValue.toLowerCase().startsWith(s.toLowerCase()));
    return c !== n ? c : void 0
}
function qT(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var KT = Xx
  , Nw = ew
  , GT = nw
  , QT = rw
  , YT = sw
  , Cw = ow
  , JT = cw
  , Ew = hw
  , Tw = pw
  , XT = mw
  , ZT = vw
  , Pw = yw
  , Rw = xw
  , Aw = bw;
const Ad = KT
  , Od = GT
  , jl = g.forwardRef( ({className: e, children: t, ...n}, r) => a.jsxs(Nw, {
    ref: r,
    className: ce("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, a.jsx(QT, {
        asChild: !0,
        children: a.jsx(qh, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
jl.displayName = Nw.displayName;
const Ow = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Pw, {
    ref: n,
    className: ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: a.jsx(tk, {
        className: "h-4 w-4"
    })
}));
Ow.displayName = Pw.displayName;
const Iw = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Rw, {
    ref: n,
    className: ce("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: a.jsx(qh, {
        className: "h-4 w-4"
    })
}));
Iw.displayName = Rw.displayName;
const kl = g.forwardRef( ({className: e, children: t, position: n="popper", ...r}, s) => a.jsx(YT, {
    children: a.jsxs(Cw, {
        ref: s,
        className: ce("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [a.jsx(Ow, {}), a.jsx(JT, {
            className: ce("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), a.jsx(Iw, {})]
    })
}));
kl.displayName = Cw.displayName;
const eP = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Ew, {
    ref: n,
    className: ce("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
eP.displayName = Ew.displayName;
const nt = g.forwardRef( ({className: e, children: t, ...n}, r) => a.jsxs(Tw, {
    ref: r,
    className: ce("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", e),
    ...n,
    children: [a.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(ZT, {
            children: a.jsx(e0, {
                className: "h-4 w-4"
            })
        })
    }), a.jsx(XT, {
        children: t
    })]
}));
nt.displayName = Tw.displayName;
const tP = g.forwardRef( ({className: e, ...t}, n) => a.jsx(Aw, {
    ref: n,
    className: ce("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
tP.displayName = Aw.displayName;
var dc = "Checkbox"
  , [nP,GA] = In(dc)
  , [rP,mf] = nP(dc);
function sP(e) {
    const {__scopeCheckbox: t, checked: n, children: r, defaultChecked: s, disabled: o, form: i, name: l, onCheckedChange: c, required: u, value: d="on", internal_do_not_use_render: h} = e
      , [p,f] = es({
        prop: n,
        defaultProp: s ?? !1,
        onChange: c,
        caller: dc
    })
      , [b,v] = g.useState(null)
      , [w,x] = g.useState(null)
      , m = g.useRef(!1)
      , y = b ? !!i || !!b.closest("form") : !0
      , S = {
        checked: p,
        disabled: o,
        setChecked: f,
        control: b,
        setControl: v,
        name: l,
        form: i,
        value: d,
        hasConsumerStoppedPropagationRef: m,
        required: u,
        defaultChecked: pr(s) ? !1 : s,
        isFormControl: y,
        bubbleInput: w,
        setBubbleInput: x
    };
    return a.jsx(rP, {
        scope: t,
        ...S,
        children: oP(h) ? h(S) : r
    })
}
var Mw = "CheckboxTrigger"
  , Lw = g.forwardRef( ({__scopeCheckbox: e, onKeyDown: t, onClick: n, ...r}, s) => {
    const {control: o, value: i, disabled: l, checked: c, required: u, setControl: d, setChecked: h, hasConsumerStoppedPropagationRef: p, isFormControl: f, bubbleInput: b} = mf(Mw, e)
      , v = Se(s, d)
      , w = g.useRef(c);
    return g.useEffect( () => {
        const x = o == null ? void 0 : o.form;
        if (x) {
            const m = () => h(w.current);
            return x.addEventListener("reset", m),
            () => x.removeEventListener("reset", m)
        }
    }
    , [o, h]),
    a.jsx(ne.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": pr(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": zw(c),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: i,
        ...r,
        ref: v,
        onKeyDown: G(t, x => {
            x.key === "Enter" && x.preventDefault()
        }
        ),
        onClick: G(n, x => {
            h(m => pr(m) ? !0 : !m),
            b && f && (p.current = x.isPropagationStopped(),
            p.current || x.stopPropagation())
        }
        )
    })
}
);
Lw.displayName = Mw;
var gf = g.forwardRef( (e, t) => {
    const {__scopeCheckbox: n, name: r, checked: s, defaultChecked: o, required: i, disabled: l, value: c, onCheckedChange: u, form: d, ...h} = e;
    return a.jsx(sP, {
        __scopeCheckbox: n,
        checked: s,
        defaultChecked: o,
        disabled: l,
        required: i,
        onCheckedChange: u,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({isFormControl: p}) => a.jsxs(a.Fragment, {
            children: [a.jsx(Lw, {
                ...h,
                ref: t,
                __scopeCheckbox: n
            }), p && a.jsx(Uw, {
                __scopeCheckbox: n
            })]
        })
    })
}
);
gf.displayName = dc;
var $w = "CheckboxIndicator"
  , Dw = g.forwardRef( (e, t) => {
    const {__scopeCheckbox: n, forceMount: r, ...s} = e
      , o = mf($w, n);
    return a.jsx(Fi, {
        present: r || pr(o.checked) || o.checked === !0,
        children: a.jsx(ne.span, {
            "data-state": zw(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...s,
            ref: t,
            style: {
                pointerEvents: "none",
                ...e.style
            }
        })
    })
}
);
Dw.displayName = $w;
var Fw = "CheckboxBubbleInput"
  , Uw = g.forwardRef( ({__scopeCheckbox: e, ...t}, n) => {
    const {control: r, hasConsumerStoppedPropagationRef: s, checked: o, defaultChecked: i, required: l, disabled: c, name: u, value: d, form: h, bubbleInput: p, setBubbleInput: f} = mf(Fw, e)
      , b = Se(n, f)
      , v = Bx(o)
      , w = T0(r);
    g.useEffect( () => {
        const m = p;
        if (!m)
            return;
        const y = window.HTMLInputElement.prototype
          , j = Object.getOwnPropertyDescriptor(y, "checked").set
          , k = !s.current;
        if (v !== o && j) {
            const _ = new Event("click",{
                bubbles: k
            });
            m.indeterminate = pr(o),
            j.call(m, pr(o) ? !1 : o),
            m.dispatchEvent(_)
        }
    }
    , [p, v, o, s]);
    const x = g.useRef(pr(o) ? !1 : o);
    return a.jsx(ne.input, {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? x.current,
        required: l,
        disabled: c,
        name: u,
        value: d,
        form: h,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
            ...t.style,
            ...w,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
            transform: "translateX(-100%)"
        }
    })
}
);
Uw.displayName = Fw;
function oP(e) {
    return typeof e == "function"
}
function pr(e) {
    return e === "indeterminate"
}
function zw(e) {
    return pr(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
const Bw = g.forwardRef( ({className: e, ...t}, n) => a.jsx(gf, {
    ref: n,
    className: ce("peer h-4 w-4 shrink-0 rounded-sm border border-warning ring-offset-background data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ...t,
    children: a.jsx(Dw, {
        className: ce("flex items-center justify-center text-current"),
        children: a.jsx(e0, {
            className: "h-4 w-4"
        })
    })
}));
Bw.displayName = gf.displayName;
const iP = "modulepreload"
  , aP = function(e) {
    return "/" + e
}
  , Mm = {}
  , Vi = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        s = Promise.allSettled(n.map(c => {
            if (c = aP(c),
            c in Mm)
                return;
            Mm[c] = !0;
            const u = c.endsWith(".css")
              , d = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${c}"]${d}`))
                return;
            const h = document.createElement("link");
            if (h.rel = u ? "stylesheet" : iP,
            u || (h.as = "script"),
            h.crossOrigin = "",
            h.href = c,
            l && h.setAttribute("nonce", l),
            document.head.appendChild(h),
            u)
                return new Promise( (p, f) => {
                    h.addEventListener("load", p),
                    h.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function o(i) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = i,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw i
    }
    return s.then(i => {
        for (const l of i || [])
            l.status === "rejected" && o(l.reason);
        return t().catch(o)
    }
    )
}
  , lP = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => Vi(async () => {
        const {default: r} = await Promise.resolve().then( () => jo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
;
class vf extends Error {
    constructor(t, n="FunctionsError", r) {
        super(t),
        this.name = n,
        this.context = r
    }
}
class cP extends vf {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class Lm extends vf {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class $m extends vf {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Id;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)(Id || (Id = {}));
var uP = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class dP {
    constructor(t, {headers: n={}, customFetch: r, region: s=Id.Any}={}) {
        this.url = t,
        this.headers = n,
        this.region = s,
        this.fetch = lP(r)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, n={}) {
        var r;
        return uP(this, void 0, void 0, function*() {
            try {
                const {headers: s, method: o, body: i} = n;
                let l = {}
                  , {region: c} = n;
                c || (c = this.region);
                const u = new URL(`${this.url}/${t}`);
                c && c !== "any" && (l["x-region"] = c,
                u.searchParams.set("forceFunctionRegion", c));
                let d;
                i && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream",
                d = i) : typeof i == "string" ? (l["Content-Type"] = "text/plain",
                d = i) : typeof FormData < "u" && i instanceof FormData ? d = i : (l["Content-Type"] = "application/json",
                d = JSON.stringify(i)));
                const h = yield this.fetch(u.toString(), {
                    method: o || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), s),
                    body: d
                }).catch(v => {
                    throw new cP(v)
                }
                )
                  , p = h.headers.get("x-relay-error");
                if (p && p === "true")
                    throw new Lm(h);
                if (!h.ok)
                    throw new $m(h);
                let f = ((r = h.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), b;
                return f === "application/json" ? b = yield h.json() : f === "application/octet-stream" ? b = yield h.blob() : f === "text/event-stream" ? b = h : f === "multipart/form-data" ? b = yield h.formData() : b = yield h.text(),
                {
                    data: b,
                    error: null,
                    response: h
                }
            } catch (s) {
                return {
                    data: null,
                    error: s,
                    response: s instanceof $m || s instanceof Lm ? s.context : void 0
                }
            }
        })
    }
}
var ct = {}
  , yf = {}
  , hc = {}
  , Hi = {}
  , fc = {}
  , pc = {}
  , hP = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , uo = hP();
const fP = uo.fetch
  , Ww = uo.fetch.bind(uo)
  , Vw = uo.Headers
  , pP = uo.Request
  , mP = uo.Response
  , jo = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: Vw,
    Request: pP,
    Response: mP,
    default: Ww,
    fetch: fP
}, Symbol.toStringTag, {
    value: "Module"
}))
  , gP = Tb(jo);
var mc = {};
Object.defineProperty(mc, "__esModule", {
    value: !0
});
let vP = class extends Error {
    constructor(t) {
        super(t.message),
        this.name = "PostgrestError",
        this.details = t.details,
        this.hint = t.hint,
        this.code = t.code
    }
}
;
mc.default = vP;
var Hw = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(pc, "__esModule", {
    value: !0
});
const yP = Hw(gP)
  , xP = Hw(mc);
let wP = class {
    constructor(t) {
        var n, r;
        this.shouldThrowOnError = !1,
        this.method = t.method,
        this.url = t.url,
        this.headers = new Headers(t.headers),
        this.schema = t.schema,
        this.body = t.body,
        this.shouldThrowOnError = (n = t.shouldThrowOnError) !== null && n !== void 0 ? n : !1,
        this.signal = t.signal,
        this.isMaybeSingle = (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1,
        t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = yP.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(t, n) {
        return this.headers = new Headers(this.headers),
        this.headers.set(t, n),
        this
    }
    then(t, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const r = this.fetch;
        let s = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async o => {
            var i, l, c, u;
            let d = null
              , h = null
              , p = null
              , f = o.status
              , b = o.statusText;
            if (o.ok) {
                if (this.method !== "HEAD") {
                    const m = await o.text();
                    m === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((i = this.headers.get("Accept")) === null || i === void 0) && i.includes("application/vnd.pgrst.plan+text")) ? h = m : h = JSON.parse(m))
                }
                const w = (l = this.headers.get("Prefer")) === null || l === void 0 ? void 0 : l.match(/count=(exact|planned|estimated)/)
                  , x = (c = o.headers.get("content-range")) === null || c === void 0 ? void 0 : c.split("/");
                w && x && x.length > 1 && (p = parseInt(x[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(h) && (h.length > 1 ? (d = {
                    code: "PGRST116",
                    details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                h = null,
                p = null,
                f = 406,
                b = "Not Acceptable") : h.length === 1 ? h = h[0] : h = null)
            } else {
                const w = await o.text();
                try {
                    d = JSON.parse(w),
                    Array.isArray(d) && o.status === 404 && (h = [],
                    d = null,
                    f = 200,
                    b = "OK")
                } catch {
                    o.status === 404 && w === "" ? (f = 204,
                    b = "No Content") : d = {
                        message: w
                    }
                }
                if (d && this.isMaybeSingle && (!((u = d == null ? void 0 : d.details) === null || u === void 0) && u.includes("0 rows")) && (d = null,
                f = 200,
                b = "OK"),
                d && this.shouldThrowOnError)
                    throw new xP.default(d)
            }
            return {
                error: d,
                data: h,
                count: p,
                status: f,
                statusText: b
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(o => {
            var i, l, c;
            return {
                error: {
                    message: `${(i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : "FetchError"}: ${o == null ? void 0 : o.message}`,
                    details: `${(l = o == null ? void 0 : o.stack) !== null && l !== void 0 ? l : ""}`,
                    hint: "",
                    code: `${(c = o == null ? void 0 : o.code) !== null && c !== void 0 ? c : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(t, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
;
pc.default = wP;
var bP = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(fc, "__esModule", {
    value: !0
});
const SP = bP(pc);
let jP = class extends SP.default {
    select(t) {
        let n = !1;
        const r = (t ?? "*").split("").map(s => /\s/.test(s) && !n ? "" : (s === '"' && (n = !n),
        s)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
    }
    order(t, {ascending: n=!0, nullsFirst: r, foreignTable: s, referencedTable: o=s}={}) {
        const i = o ? `${o}.order` : "order"
          , l = this.url.searchParams.get(i);
        return this.url.searchParams.set(i, `${l ? `${l},` : ""}${t}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(s, `${t}`),
        this
    }
    range(t, n, {foreignTable: r, referencedTable: s=r}={}) {
        const o = typeof s > "u" ? "offset" : `${s}.offset`
          , i = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(o, `${t}`),
        this.url.searchParams.set(i, `${n - t + 1}`),
        this
    }
    abortSignal(t) {
        return this.signal = t,
        this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"),
        this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"),
        this
    }
    explain({analyze: t=!1, verbose: n=!1, settings: r=!1, buffers: s=!1, wal: o=!1, format: i="text"}={}) {
        var l;
        const c = [t ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, o ? "wal" : null].filter(Boolean).join("|")
          , u = (l = this.headers.get("Accept")) !== null && l !== void 0 ? l : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${u}"; options=${c};`),
        i === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"),
        this
    }
    returns() {
        return this
    }
    maxAffected(t) {
        return this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${t}`),
        this
    }
}
;
fc.default = jP;
var kP = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
const _P = kP(fc);
let NP = class extends _P.default {
    eq(t, n) {
        return this.url.searchParams.append(t, `eq.${n}`),
        this
    }
    neq(t, n) {
        return this.url.searchParams.append(t, `neq.${n}`),
        this
    }
    gt(t, n) {
        return this.url.searchParams.append(t, `gt.${n}`),
        this
    }
    gte(t, n) {
        return this.url.searchParams.append(t, `gte.${n}`),
        this
    }
    lt(t, n) {
        return this.url.searchParams.append(t, `lt.${n}`),
        this
    }
    lte(t, n) {
        return this.url.searchParams.append(t, `lte.${n}`),
        this
    }
    like(t, n) {
        return this.url.searchParams.append(t, `like.${n}`),
        this
    }
    likeAllOf(t, n) {
        return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(t, n) {
        return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(t, n) {
        return this.url.searchParams.append(t, `ilike.${n}`),
        this
    }
    ilikeAllOf(t, n) {
        return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(t, n) {
        return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`),
        this
    }
    is(t, n) {
        return this.url.searchParams.append(t, `is.${n}`),
        this
    }
    in(t, n) {
        const r = Array.from(new Set(n)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(t, `in.(${r})`),
        this
    }
    contains(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(t, n) {
        return this.url.searchParams.append(t, `sr.${n}`),
        this
    }
    rangeGte(t, n) {
        return this.url.searchParams.append(t, `nxl.${n}`),
        this
    }
    rangeLt(t, n) {
        return this.url.searchParams.append(t, `sl.${n}`),
        this
    }
    rangeLte(t, n) {
        return this.url.searchParams.append(t, `nxr.${n}`),
        this
    }
    rangeAdjacent(t, n) {
        return this.url.searchParams.append(t, `adj.${n}`),
        this
    }
    overlaps(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(t, n, {config: r, type: s}={}) {
        let o = "";
        s === "plain" ? o = "pl" : s === "phrase" ? o = "ph" : s === "websearch" && (o = "w");
        const i = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(t, `${o}fts${i}.${n}`),
        this
    }
    match(t) {
        return Object.entries(t).forEach( ([n,r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }
        ),
        this
    }
    not(t, n, r) {
        return this.url.searchParams.append(t, `not.${n}.${r}`),
        this
    }
    or(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = r ? `${r}.or` : "or";
        return this.url.searchParams.append(s, `(${t})`),
        this
    }
    filter(t, n, r) {
        return this.url.searchParams.append(t, `${n}.${r}`),
        this
    }
}
;
Hi.default = NP;
var CP = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(hc, "__esModule", {
    value: !0
});
const $o = CP(Hi);
let EP = class {
    constructor(t, {headers: n={}, schema: r, fetch: s}) {
        this.url = t,
        this.headers = new Headers(n),
        this.schema = r,
        this.fetch = s
    }
    select(t, {head: n=!1, count: r}={}) {
        const s = n ? "HEAD" : "GET";
        let o = !1;
        const i = (t ?? "*").split("").map(l => /\s/.test(l) && !o ? "" : (l === '"' && (o = !o),
        l)).join("");
        return this.url.searchParams.set("select", i),
        r && this.headers.append("Prefer", `count=${r}`),
        new $o.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        })
    }
    insert(t, {count: n, defaultToNull: r=!0}={}) {
        var s;
        const o = "POST";
        if (n && this.headers.append("Prefer", `count=${n}`),
        r || this.headers.append("Prefer", "missing=default"),
        Array.isArray(t)) {
            const i = t.reduce( (l, c) => l.concat(Object.keys(c)), []);
            if (i.length > 0) {
                const l = [...new Set(i)].map(c => `"${c}"`);
                this.url.searchParams.set("columns", l.join(","))
            }
        }
        return new $o.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
        })
    }
    upsert(t, {onConflict: n, ignoreDuplicates: r=!1, count: s, defaultToNull: o=!0}={}) {
        var i;
        const l = "POST";
        if (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        n !== void 0 && this.url.searchParams.set("on_conflict", n),
        s && this.headers.append("Prefer", `count=${s}`),
        o || this.headers.append("Prefer", "missing=default"),
        Array.isArray(t)) {
            const c = t.reduce( (u, d) => u.concat(Object.keys(d)), []);
            if (c.length > 0) {
                const u = [...new Set(c)].map(d => `"${d}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new $o.default({
            method: l,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
        })
    }
    update(t, {count: n}={}) {
        var r;
        const s = "PATCH";
        return n && this.headers.append("Prefer", `count=${n}`),
        new $o.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch
        })
    }
    delete({count: t}={}) {
        var n;
        const r = "DELETE";
        return t && this.headers.append("Prefer", `count=${t}`),
        new $o.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
}
;
hc.default = EP;
var qw = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(yf, "__esModule", {
    value: !0
});
const TP = qw(hc)
  , PP = qw(Hi);
let RP = class Kw {
    constructor(t, {headers: n={}, schema: r, fetch: s}={}) {
        this.url = t,
        this.headers = new Headers(n),
        this.schemaName = r,
        this.fetch = s
    }
    from(t) {
        const n = new URL(`${this.url}/${t}`);
        return new TP.default(n,{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new Kw(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, n={}, {head: r=!1, get: s=!1, count: o}={}) {
        var i;
        let l;
        const c = new URL(`${this.url}/rpc/${t}`);
        let u;
        r || s ? (l = r ? "HEAD" : "GET",
        Object.entries(n).filter( ([h,p]) => p !== void 0).map( ([h,p]) => [h, Array.isArray(p) ? `{${p.join(",")}}` : `${p}`]).forEach( ([h,p]) => {
            c.searchParams.append(h, p)
        }
        )) : (l = "POST",
        u = n);
        const d = new Headers(this.headers);
        return o && d.set("Prefer", `count=${o}`),
        new PP.default({
            method: l,
            url: c,
            headers: d,
            schema: this.schemaName,
            body: u,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
        })
    }
}
;
yf.default = RP;
var ko = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ct, "__esModule", {
    value: !0
});
ct.PostgrestError = ct.PostgrestBuilder = ct.PostgrestTransformBuilder = ct.PostgrestFilterBuilder = ct.PostgrestQueryBuilder = ct.PostgrestClient = void 0;
const Gw = ko(yf);
ct.PostgrestClient = Gw.default;
const Qw = ko(hc);
ct.PostgrestQueryBuilder = Qw.default;
const Yw = ko(Hi);
ct.PostgrestFilterBuilder = Yw.default;
const Jw = ko(fc);
ct.PostgrestTransformBuilder = Jw.default;
const Xw = ko(pc);
ct.PostgrestBuilder = Xw.default;
const Zw = ko(mc);
ct.PostgrestError = Zw.default;
var AP = ct.default = {
    PostgrestClient: Gw.default,
    PostgrestQueryBuilder: Qw.default,
    PostgrestFilterBuilder: Yw.default,
    PostgrestTransformBuilder: Jw.default,
    PostgrestBuilder: Xw.default,
    PostgrestError: Zw.default
};
const {PostgrestClient: OP, PostgrestQueryBuilder: eO, PostgrestFilterBuilder: tO, PostgrestTransformBuilder: nO, PostgrestBuilder: rO, PostgrestError: sO} = AP;
class IP {
    static detectEnvironment() {
        var t;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        if (typeof process < "u") {
            const n = process.versions;
            if (n && n.node) {
                const r = n.node
                  , s = parseInt(r.replace(/^v/, "").split(".")[0]);
                return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const t = this.detectEnvironment();
        if (t.constructor)
            return t.constructor;
        let n = t.error || "WebSocket not supported in this environment.";
        throw t.workaround && (n += `

Suggested solution: ${t.workaround}`),
        new Error(n)
    }
    static createWebSocket(t, n) {
        const r = this.getWebSocketConstructor();
        return new r(t,n)
    }
    static isWebSocketSupported() {
        try {
            const t = this.detectEnvironment();
            return t.type === "native" || t.type === "ws"
        } catch {
            return !1
        }
    }
}
const MP = "2.15.5"
  , LP = `realtime-js/${MP}`
  , $P = "1.0.0"
  , Md = 1e4
  , DP = 1e3
  , FP = 100;
var ti;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(ti || (ti = {}));
var Le;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(Le || (Le = {}));
var Kt;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(Kt || (Kt = {}));
var Ld;
(function(e) {
    e.websocket = "websocket"
}
)(Ld || (Ld = {}));
var Mr;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(Mr || (Mr = {}));
class UP {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, n) {
        return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const n = new DataView(t)
          , r = new TextDecoder;
        return this._decodeBroadcast(t, n, r)
    }
    _decodeBroadcast(t, n, r) {
        const s = n.getUint8(1)
          , o = n.getUint8(2);
        let i = this.HEADER_LENGTH + 2;
        const l = r.decode(t.slice(i, i + s));
        i = i + s;
        const c = r.decode(t.slice(i, i + o));
        i = i + o;
        const u = JSON.parse(r.decode(t.slice(i, t.byteLength)));
        return {
            ref: null,
            topic: l,
            event: c,
            payload: u
        }
    }
}
class eb {
    constructor(t, n) {
        this.callback = t,
        this.timerCalc = n,
        this.timer = void 0,
        this.tries = 0,
        this.callback = t,
        this.timerCalc = n
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer),
        this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var pe;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(pe || (pe = {}));
const Dm = (e, t, n={}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce( (o, i) => (o[i] = zP(i, e, t, s),
    o), {})
}
  , zP = (e, t, n, r) => {
    const s = t.find(l => l.name === e)
      , o = s == null ? void 0 : s.type
      , i = n[e];
    return o && !r.includes(o) ? tb(o, i) : $d(i)
}
  , tb = (e, t) => {
    if (e.charAt(0) === "_") {
        const n = e.slice(1, e.length);
        return HP(t, n)
    }
    switch (e) {
    case pe.bool:
        return BP(t);
    case pe.float4:
    case pe.float8:
    case pe.int2:
    case pe.int4:
    case pe.int8:
    case pe.numeric:
    case pe.oid:
        return WP(t);
    case pe.json:
    case pe.jsonb:
        return VP(t);
    case pe.timestamp:
        return qP(t);
    case pe.abstime:
    case pe.date:
    case pe.daterange:
    case pe.int4range:
    case pe.int8range:
    case pe.money:
    case pe.reltime:
    case pe.text:
    case pe.time:
    case pe.timestamptz:
    case pe.timetz:
    case pe.tsrange:
    case pe.tstzrange:
        return $d(t);
    default:
        return $d(t)
    }
}
  , $d = e => e
  , BP = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , WP = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , VP = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`),
            e
        }
    return e
}
  , HP = (e, t) => {
    if (typeof e != "string")
        return e;
    const n = e.length - 1
      , r = e[n];
    if (e[0] === "{" && r === "}") {
        let o;
        const i = e.slice(1, n);
        try {
            o = JSON.parse("[" + i + "]")
        } catch {
            o = i ? i.split(",") : []
        }
        return o.map(l => tb(t, l))
    }
    return e
}
  , qP = e => typeof e == "string" ? e.replace(" ", "T") : e
  , nb = e => {
    let t = e;
    return t = t.replace(/^ws/i, "http"),
    t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    t.replace(/\/+$/, "") + "/api/broadcast"
}
;
class lu {
    constructor(t, n, r={}, s=Md) {
        this.channel = t,
        this.event = n,
        this.payload = r,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(t) {
        this.timeout = t,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, n) {
        var r;
        return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
        this.recHooks.push({
            status: t,
            callback: n
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const t = n => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = n,
            this._matchReceive(n)
        }
        ;
        this.channel._on(this.refEvent, {}, t),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(t, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: t, response: n}) {
        this.recHooks.filter(r => r.status === t).forEach(r => r.callback(n))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var Fm;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(Fm || (Fm = {}));
class ni {
    constructor(t, n) {
        this.channel = t,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.enabled = !1,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, s => {
            const {onJoin: o, onLeave: i, onSync: l} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = ni.syncState(this.state, s, o, i),
            this.pendingDiffs.forEach(c => {
                this.state = ni.syncDiff(this.state, c, o, i)
            }
            ),
            this.pendingDiffs = [],
            l()
        }
        ),
        this.channel._on(r.diff, {}, s => {
            const {onJoin: o, onLeave: i, onSync: l} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = ni.syncDiff(this.state, s, o, i),
            l())
        }
        ),
        this.onJoin( (s, o, i) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: o,
                newPresences: i
            })
        }
        ),
        this.onLeave( (s, o, i) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: o,
                leftPresences: i
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(t, n, r, s) {
        const o = this.cloneDeep(t)
          , i = this.transformState(n)
          , l = {}
          , c = {};
        return this.map(o, (u, d) => {
            i[u] || (c[u] = d)
        }
        ),
        this.map(i, (u, d) => {
            const h = o[u];
            if (h) {
                const p = d.map(w => w.presence_ref)
                  , f = h.map(w => w.presence_ref)
                  , b = d.filter(w => f.indexOf(w.presence_ref) < 0)
                  , v = h.filter(w => p.indexOf(w.presence_ref) < 0);
                b.length > 0 && (l[u] = b),
                v.length > 0 && (c[u] = v)
            } else
                l[u] = d
        }
        ),
        this.syncDiff(o, {
            joins: l,
            leaves: c
        }, r, s)
    }
    static syncDiff(t, n, r, s) {
        const {joins: o, leaves: i} = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(o, (l, c) => {
            var u;
            const d = (u = t[l]) !== null && u !== void 0 ? u : [];
            if (t[l] = this.cloneDeep(c),
            d.length > 0) {
                const h = t[l].map(f => f.presence_ref)
                  , p = d.filter(f => h.indexOf(f.presence_ref) < 0);
                t[l].unshift(...p)
            }
            r(l, d, c)
        }
        ),
        this.map(i, (l, c) => {
            let u = t[l];
            if (!u)
                return;
            const d = c.map(h => h.presence_ref);
            u = u.filter(h => d.indexOf(h.presence_ref) < 0),
            t[l] = u,
            s(l, u, c),
            u.length === 0 && delete t[l]
        }
        ),
        t
    }
    static map(t, n) {
        return Object.getOwnPropertyNames(t).map(r => n(r, t[r]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t),
        Object.getOwnPropertyNames(t).reduce( (n, r) => {
            const s = t[r];
            return "metas"in s ? n[r] = s.metas.map(o => (o.presence_ref = o.phx_ref,
            delete o.phx_ref,
            delete o.phx_ref_prev,
            o)) : n[r] = s,
            n
        }
        , {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var Um;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(Um || (Um = {}));
var ri;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(ri || (ri = {}));
var bn;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(bn || (bn = {}));
class xf {
    constructor(t, n={
        config: {}
    }, r) {
        this.topic = t,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = Le.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, n.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new lu(this,Kt.join,this.params,this.timeout),
        this.rejoinTimer = new eb( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = Le.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = Le.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = Le.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = Le.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = Le.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Kt.reply, {}, (s, o) => {
            this._trigger(this._replyEventName(o), s)
        }
        ),
        this.presence = new ni(this),
        this.broadcastEndpointURL = nb(this.socket.endPoint),
        this.private = this.params.config.private || !1
    }
    subscribe(t, n=this.timeout) {
        var r, s, o;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == Le.closed) {
            const {config: {broadcast: i, presence: l, private: c}} = this.params
              , u = (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(f => f.filter)) !== null && s !== void 0 ? s : []
              , d = !!this.bindings[ri.PRESENCE] && this.bindings[ri.PRESENCE].length > 0 || ((o = this.params.config.presence) === null || o === void 0 ? void 0 : o.enabled) === !0
              , h = {}
              , p = {
                broadcast: i,
                presence: Object.assign(Object.assign({}, l), {
                    enabled: d
                }),
                postgres_changes: u,
                private: c
            };
            this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue),
            this._onError(f => t == null ? void 0 : t(bn.CHANNEL_ERROR, f)),
            this._onClose( () => t == null ? void 0 : t(bn.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: p
            }, h)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: f}) => {
                var b;
                if (this.socket.setAuth(),
                f === void 0) {
                    t == null || t(bn.SUBSCRIBED);
                    return
                } else {
                    const v = this.bindings.postgres_changes
                      , w = (b = v == null ? void 0 : v.length) !== null && b !== void 0 ? b : 0
                      , x = [];
                    for (let m = 0; m < w; m++) {
                        const y = v[m]
                          , {filter: {event: S, schema: j, table: k, filter: _}} = y
                          , N = f && f[m];
                        if (N && N.event === S && N.schema === j && N.table === k && N.filter === _)
                            x.push(Object.assign(Object.assign({}, y), {
                                id: N.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = Le.errored,
                            t == null || t(bn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = x,
                    t && t(bn.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", f => {
                this.state = Le.errored,
                t == null || t(bn.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(f).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(bn.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, n={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, n.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, n, r) {
        return this.state === Le.joined && t === ri.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
        this.unsubscribe().then( () => this.subscribe())),
        this._on(t, n, r)
    }
    async send(t, n={}) {
        var r, s;
        if (!this._canPush() && t.type === "broadcast") {
            const {event: o, payload: i} = t
              , c = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: o,
                        payload: i,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, c, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
                u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(o => {
                var i, l, c;
                const u = this._push(t.type, t, n.timeout || this.timeout);
                t.type === "broadcast" && !(!((c = (l = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || l === void 0 ? void 0 : l.broadcast) === null || c === void 0) && c.ack) && o("ok"),
                u.receive("ok", () => o("ok")),
                u.receive("error", () => o("error")),
                u.receive("timeout", () => o("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t=this.timeout) {
        this.state = Le.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Kt.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let r = null;
        return new Promise(s => {
            r = new lu(this,Kt.leave,{},t),
            r.receive("ok", () => {
                n(),
                s("ok")
            }
            ).receive("timeout", () => {
                n(),
                s("timed out")
            }
            ).receive("error", () => {
                s("error")
            }
            ),
            r.send(),
            this._canPush() || r.trigger("ok", {})
        }
        ).finally( () => {
            r == null || r.destroy()
        }
        )
    }
    teardown() {
        this.pushBuffer.forEach(t => t.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = Le.closed,
        this.bindings = {}
    }
    async _fetchWithTimeout(t, n, r) {
        const s = new AbortController
          , o = setTimeout( () => s.abort(), r)
          , i = await this.socket.fetch(t, Object.assign(Object.assign({}, n), {
            signal: s.signal
        }));
        return clearTimeout(o),
        i
    }
    _push(t, n, r=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new lu(this,t,n,r);
        return this._canPush() ? s.send() : this._addToPushBuffer(s),
        s
    }
    _addToPushBuffer(t) {
        if (t.startTimeout(),
        this.pushBuffer.push(t),
        this.pushBuffer.length > FP) {
            const n = this.pushBuffer.shift();
            n && (n.destroy(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${n.event}`, n.payload))
        }
    }
    _onMessage(t, n, r) {
        return n
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, n, r) {
        var s, o;
        const i = t.toLocaleLowerCase()
          , {close: l, error: c, leave: u, join: d} = Kt;
        if (r && [l, c, u, d].indexOf(i) >= 0 && r !== this._joinRef())
            return;
        let p = this._onMessage(i, n, r);
        if (n && !p)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(i) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(f => {
            var b, v, w;
            return ((b = f.filter) === null || b === void 0 ? void 0 : b.event) === "*" || ((w = (v = f.filter) === null || v === void 0 ? void 0 : v.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === i
        }
        ).map(f => f.callback(p, r)) : (o = this.bindings[i]) === null || o === void 0 || o.filter(f => {
            var b, v, w, x, m, y;
            if (["broadcast", "presence", "postgres_changes"].includes(i))
                if ("id"in f) {
                    const S = f.id
                      , j = (b = f.filter) === null || b === void 0 ? void 0 : b.event;
                    return S && ((v = n.ids) === null || v === void 0 ? void 0 : v.includes(S)) && (j === "*" || (j == null ? void 0 : j.toLocaleLowerCase()) === ((w = n.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()))
                } else {
                    const S = (m = (x = f == null ? void 0 : f.filter) === null || x === void 0 ? void 0 : x.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase();
                    return S === "*" || S === ((y = n == null ? void 0 : n.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase())
                }
            else
                return f.type.toLocaleLowerCase() === i
        }
        ).map(f => {
            if (typeof p == "object" && "ids"in p) {
                const b = p.data
                  , {schema: v, table: w, commit_timestamp: x, type: m, errors: y} = b;
                p = Object.assign(Object.assign({}, {
                    schema: v,
                    table: w,
                    commit_timestamp: x,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: y
                }), this._getPayloadRecords(b))
            }
            f.callback(p, r)
        }
        )
    }
    _isClosed() {
        return this.state === Le.closed
    }
    _isJoined() {
        return this.state === Le.joined
    }
    _isJoining() {
        return this.state === Le.joining
    }
    _isLeaving() {
        return this.state === Le.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, n, r) {
        const s = t.toLocaleLowerCase()
          , o = {
            type: s,
            filter: n,
            callback: r
        };
        return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o],
        this
    }
    _off(t, n) {
        const r = t.toLocaleLowerCase();
        return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter(s => {
            var o;
            return !(((o = s.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === r && xf.isEqual(s.filter, n))
        }
        )),
        this
    }
    static isEqual(t, n) {
        if (Object.keys(t).length !== Object.keys(n).length)
            return !1;
        for (const r in t)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Kt.close, {}, t)
    }
    _onError(t) {
        this._on(Kt.error, {}, n => t(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = Le.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const n = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (n.new = Dm(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (n.old = Dm(t.columns, t.old_record)),
        n
    }
}
const cu = () => {}
  , ba = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , KP = [1e3, 2e3, 5e3, 1e4]
  , GP = 1e4
  , QP = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class YP {
    constructor(t, n) {
        var r;
        if (this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = new Array,
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.timeout = Md,
        this.transport = null,
        this.heartbeatIntervalMs = ba.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = cu,
        this.ref = 0,
        this.reconnectTimer = null,
        this.logger = cu,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new UP,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._connectionState = "disconnected",
        this._wasManualDisconnect = !1,
        this._authPromise = null,
        this._resolveFetch = s => {
            let o;
            return s ? o = s : typeof fetch > "u" ? o = (...i) => Vi(async () => {
                const {default: l} = await Promise.resolve().then( () => jo);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...i)).catch(l => {
                throw new Error(`Failed to load @supabase/node-fetch: ${l.message}. This is required for HTTP requests in Node.js environments without native fetch.`)
            }
            ) : o = fetch,
            (...i) => o(...i)
        }
        ,
        !(!((r = n == null ? void 0 : n.params) === null || r === void 0) && r.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = n.params.apikey,
        this.endPoint = `${t}/${Ld.websocket}`,
        this.httpEndpoint = nb(t),
        this._initializeOptions(n),
        this._setupReconnectionTimer(),
        this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"),
            this._setAuthSafely("connect"),
            this.transport)
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = IP.createWebSocket(this.endpointURL())
                } catch (t) {
                    this._setConnectionState("disconnected");
                    const n = t.message;
                    throw n.includes("Node.js") ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${n}`)
                }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: $P
        }))
    }
    disconnect(t, n) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0),
            this.conn) {
                const r = setTimeout( () => {
                    this._setConnectionState("disconnected")
                }
                , 100);
                this.conn.onclose = () => {
                    clearTimeout(r),
                    this._setConnectionState("disconnected")
                }
                ,
                t ? this.conn.close(t, n ?? "") : this.conn.close(),
                this._teardownConnection()
            } else
                this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const n = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        n
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.channels = [],
        this.disconnect(),
        t
    }
    log(t, n, r) {
        this.logger(t, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case ti.connecting:
            return Mr.Connecting;
        case ti.open:
            return Mr.Open;
        case ti.closing:
            return Mr.Closing;
        default:
            return Mr.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Mr.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(t, n={
        config: {}
    }) {
        const r = `realtime:${t}`
          , s = this.getChannels().find(o => o.topic === r);
        if (s)
            return s;
        {
            const o = new xf(`realtime:${t}`,n,this);
            return this.channels.push(o),
            o
        }
    }
    push(t) {
        const {topic: n, event: r, payload: s, ref: o} = t
          , i = () => {
            this.encode(t, l => {
                var c;
                (c = this.conn) === null || c === void 0 || c.send(l)
            }
            )
        }
        ;
        this.log("push", `${n} ${r} (${o})`, s),
        this.isConnected() ? i() : this.sendBuffer.push(i)
    }
    async setAuth(t=null) {
        this._authPromise = this._performAuth(t);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    async sendHeartbeat() {
        var t;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            this._wasManualDisconnect = !1,
            (t = this.conn) === null || t === void 0 || t.close(DP, "heartbeat timeout"),
            setTimeout( () => {
                var n;
                this.isConnected() || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout()
            }
            , ba.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (n) {
            this.log("error", "error in heartbeat callback", n)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(t) {
        this.heartbeatCallback = t
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t,
        this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let n = this.channels.find(r => r.topic === t && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${t}"`),
        n.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(n => n.topic !== t.topic)
    }
    _onConnMessage(t) {
        this.decode(t.data, n => {
            if (n.topic === "phoenix" && n.event === "phx_reply")
                try {
                    this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error")
                } catch (u) {
                    this.log("error", "error in heartbeat callback", u)
                }
            n.ref && n.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {topic: r, event: s, payload: o, ref: i} = n
              , l = i ? `(${i})` : ""
              , c = o.status || "";
            this.log("receive", `${c} ${r} ${s} ${l}`.trim(), o),
            this.channels.filter(u => u._isMember(r)).forEach(u => u._trigger(s, o, i)),
            this._triggerStateCallbacks("message", n)
        }
        )
    }
    _clearTimer(t) {
        var n;
        t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = void 0) : t === "reconnect" && ((n = this.reconnectTimer) === null || n === void 0 || n.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"),
        this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = t => this._onConnError(t),
        this.conn.onmessage = t => this._onConnMessage(t),
        this.conn.onclose = t => this._onConnClose(t))
    }
    _teardownConnection() {
        this.conn && (this.conn.onopen = null,
        this.conn.onerror = null,
        this.conn.onmessage = null,
        this.conn.onclose = null,
        this.conn = null),
        this._clearAllTimers(),
        this.channels.forEach(t => t.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
        this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this._clearTimer("reconnect"),
        this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
        this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const t = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(t),
        this.workerRef.onerror = n => {
            this.log("worker", "worker error", n.message),
            this.workerRef.terminate()
        }
        ,
        this.workerRef.onmessage = n => {
            n.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _onConnClose(t) {
        var n;
        this._setConnectionState("disconnected"),
        this.log("transport", "close", t),
        this._triggerChanError(),
        this._clearTimer("heartbeat"),
        this._wasManualDisconnect || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout(),
        this._triggerStateCallbacks("close", t)
    }
    _onConnError(t) {
        this._setConnectionState("disconnected"),
        this.log("transport", `${t}`),
        this._triggerChanError(),
        this._triggerStateCallbacks("error", t)
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Kt.error))
    }
    _appendParams(t, n) {
        if (Object.keys(n).length === 0)
            return t;
        const r = t.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(n);
        return `${t}${r}${s}`
    }
    _workerObjectUrl(t) {
        let n;
        if (t)
            n = t;
        else {
            const r = new Blob([QP],{
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
    _setConnectionState(t, n=!1) {
        this._connectionState = t,
        t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = n)
    }
    async _performAuth(t=null) {
        let n;
        t ? n = t : this.accessToken ? n = await this.accessToken() : n = this.accessTokenValue,
        this.accessTokenValue != n && (this.accessTokenValue = n,
        this.channels.forEach(r => {
            const s = {
                access_token: n,
                version: LP
            };
            n && r.updateJoinPayload(s),
            r.joinedOnce && r._isJoined() && r._push(Kt.access_token, {
                access_token: n
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(t="general") {
        this.setAuth().catch(n => {
            this.log("error", `error setting auth in ${t}`, n)
        }
        )
    }
    _triggerStateCallbacks(t, n) {
        try {
            this.stateChangeCallbacks[t].forEach(r => {
                try {
                    r(n)
                } catch (s) {
                    this.log("error", `error in ${t} callback`, s)
                }
            }
            )
        } catch (r) {
            this.log("error", `error triggering ${t} callbacks`, r)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new eb(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , ba.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(t) {
        var n, r, s, o, i, l, c, u, d;
        if (this.transport = (n = t == null ? void 0 : t.transport) !== null && n !== void 0 ? n : null,
        this.timeout = (r = t == null ? void 0 : t.timeout) !== null && r !== void 0 ? r : Md,
        this.heartbeatIntervalMs = (s = t == null ? void 0 : t.heartbeatIntervalMs) !== null && s !== void 0 ? s : ba.HEARTBEAT_INTERVAL,
        this.worker = (o = t == null ? void 0 : t.worker) !== null && o !== void 0 ? o : !1,
        this.accessToken = (i = t == null ? void 0 : t.accessToken) !== null && i !== void 0 ? i : null,
        this.heartbeatCallback = (l = t == null ? void 0 : t.heartbeatCallback) !== null && l !== void 0 ? l : cu,
        t != null && t.params && (this.params = t.params),
        t != null && t.logger && (this.logger = t.logger),
        (t != null && t.logLevel || t != null && t.log_level) && (this.logLevel = t.logLevel || t.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (c = t == null ? void 0 : t.reconnectAfterMs) !== null && c !== void 0 ? c : h => KP[h - 1] || GP,
        this.encode = (u = t == null ? void 0 : t.encode) !== null && u !== void 0 ? u : (h, p) => p(JSON.stringify(h)),
        this.decode = (d = t == null ? void 0 : t.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer),
        this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = t == null ? void 0 : t.workerUrl
        }
    }
}
class wf extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function $e(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class JP extends wf {
    constructor(t, n, r) {
        super(t),
        this.name = "StorageApiError",
        this.status = n,
        this.statusCode = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class Dd extends wf {
    constructor(t, n) {
        super(t),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
var XP = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const rb = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => Vi(async () => {
        const {default: r} = await Promise.resolve().then( () => jo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , ZP = () => XP(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield Vi( () => Promise.resolve().then( () => jo), void 0)).Response : Response
})
  , Fd = e => {
    if (Array.isArray(e))
        return e.map(n => Fd(n));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        const s = n.replace(/([-_][a-z])/gi, o => o.toUpperCase().replace(/[-_]/g, ""));
        t[s] = Fd(r)
    }
    ),
    t
}
  , eR = e => {
    if (typeof e != "object" || e === null)
        return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
;
var us = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const uu = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , tR = (e, t, n) => us(void 0, void 0, void 0, function*() {
    const r = yield ZP();
    e instanceof r && !(n != null && n.noResolveJson) ? e.json().then(s => {
        const o = e.status || 500
          , i = (s == null ? void 0 : s.statusCode) || o + "";
        t(new JP(uu(s),o,i))
    }
    ).catch(s => {
        t(new Dd(uu(s),s))
    }
    ) : t(new Dd(uu(e),e))
})
  , nR = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" || !r ? s : (eR(r) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(r)) : s.body = r,
    t != null && t.duplex && (s.duplex = t.duplex),
    Object.assign(Object.assign({}, s), n))
}
;
function qi(e, t, n, r, s, o) {
    return us(this, void 0, void 0, function*() {
        return new Promise( (i, l) => {
            e(n, nR(t, r, s, o)).then(c => {
                if (!c.ok)
                    throw c;
                return r != null && r.noResolveJson ? c : c.json()
            }
            ).then(c => i(c)).catch(c => tR(c, l, r))
        }
        )
    })
}
function _l(e, t, n, r) {
    return us(this, void 0, void 0, function*() {
        return qi(e, "GET", t, n, r)
    })
}
function sn(e, t, n, r, s) {
    return us(this, void 0, void 0, function*() {
        return qi(e, "POST", t, r, s, n)
    })
}
function Ud(e, t, n, r, s) {
    return us(this, void 0, void 0, function*() {
        return qi(e, "PUT", t, r, s, n)
    })
}
function rR(e, t, n, r) {
    return us(this, void 0, void 0, function*() {
        return qi(e, "HEAD", t, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function sb(e, t, n, r, s) {
    return us(this, void 0, void 0, function*() {
        return qi(e, "DELETE", t, r, s, n)
    })
}
var Ze = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const sR = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , zm = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class oR {
    constructor(t, n={}, r, s) {
        this.shouldThrowOnError = !1,
        this.url = t,
        this.headers = n,
        this.bucketId = r,
        this.fetch = rb(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    uploadOrUpdate(t, n, r, s) {
        return Ze(this, void 0, void 0, function*() {
            try {
                let o;
                const i = Object.assign(Object.assign({}, zm), s);
                let l = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(i.upsert)
                });
                const c = i.metadata;
                typeof Blob < "u" && r instanceof Blob ? (o = new FormData,
                o.append("cacheControl", i.cacheControl),
                c && o.append("metadata", this.encodeMetadata(c)),
                o.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (o = r,
                o.append("cacheControl", i.cacheControl),
                c && o.append("metadata", this.encodeMetadata(c))) : (o = r,
                l["cache-control"] = `max-age=${i.cacheControl}`,
                l["content-type"] = i.contentType,
                c && (l["x-metadata"] = this.toBase64(this.encodeMetadata(c)))),
                s != null && s.headers && (l = Object.assign(Object.assign({}, l), s.headers));
                const u = this._removeEmptyFolders(n)
                  , d = this._getFinalPath(u)
                  , h = yield(t == "PUT" ? Ud : sn)(this.fetch, `${this.url}/object/${d}`, o, Object.assign({
                    headers: l
                }, i != null && i.duplex ? {
                    duplex: i.duplex
                } : {}));
                return {
                    data: {
                        path: u,
                        id: h.Id,
                        fullPath: h.Key
                    },
                    error: null
                }
            } catch (o) {
                if (this.shouldThrowOnError)
                    throw o;
                if ($e(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    upload(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, n, r)
        })
    }
    uploadToSignedUrl(t, n, r, s) {
        return Ze(this, void 0, void 0, function*() {
            const o = this._removeEmptyFolders(t)
              , i = this._getFinalPath(o)
              , l = new URL(this.url + `/object/upload/sign/${i}`);
            l.searchParams.set("token", n);
            try {
                let c;
                const u = Object.assign({
                    upsert: zm.upsert
                }, s)
                  , d = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(u.upsert)
                });
                typeof Blob < "u" && r instanceof Blob ? (c = new FormData,
                c.append("cacheControl", u.cacheControl),
                c.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (c = r,
                c.append("cacheControl", u.cacheControl)) : (c = r,
                d["cache-control"] = `max-age=${u.cacheControl}`,
                d["content-type"] = u.contentType);
                const h = yield Ud(this.fetch, l.toString(), c, {
                    headers: d
                });
                return {
                    data: {
                        path: o,
                        fullPath: h.Key
                    },
                    error: null
                }
            } catch (c) {
                if (this.shouldThrowOnError)
                    throw c;
                if ($e(c))
                    return {
                        data: null,
                        error: c
                    };
                throw c
            }
        })
    }
    createSignedUploadUrl(t, n) {
        return Ze(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const o = yield sn(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: s
                })
                  , i = new URL(this.url + o.url)
                  , l = i.searchParams.get("token");
                if (!l)
                    throw new wf("No token returned by API");
                return {
                    data: {
                        signedUrl: i.toString(),
                        path: t,
                        token: l
                    },
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, n, r)
        })
    }
    move(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sn(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if ($e(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield sn(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if ($e(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t)
                  , o = yield sn(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: n
                }, r != null && r.transform ? {
                    transform: r.transform
                } : {}), {
                    headers: this.headers
                });
                const i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return o = {
                    signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`)
                },
                {
                    data: o,
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if ($e(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            try {
                const s = yield sn(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: t
                }, {
                    headers: this.headers
                })
                  , o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: s.map(i => Object.assign(Object.assign({}, i), {
                        signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if ($e(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(t, n) {
        return Ze(this, void 0, void 0, function*() {
            const s = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object"
              , o = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
              , i = o ? `?${o}` : "";
            try {
                const l = this._getFinalPath(t);
                return {
                    data: yield(yield _l(this.fetch, `${this.url}/${s}/${l}${i}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (l) {
                if (this.shouldThrowOnError)
                    throw l;
                if ($e(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    info(t) {
        return Ze(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                const r = yield _l(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: Fd(r),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(t) {
        return Ze(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                return yield rR(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r) && r instanceof Dd) {
                    const s = r.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: r
                        }
                }
                throw r
            }
        })
    }
    getPublicUrl(t, n) {
        const r = this._getFinalPath(t)
          , s = []
          , o = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        o !== "" && s.push(o);
        const l = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object"
          , c = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        c !== "" && s.push(c);
        let u = s.join("&");
        return u !== "" && (u = `?${u}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${l}/public/${r}${u}`)
            }
        }
    }
    remove(t) {
        return Ze(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sb(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if ($e(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(t, n, r) {
        return Ze(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, sR), n), {
                    prefix: t || ""
                });
                return {
                    data: yield sn(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if ($e(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    listV2(t, n) {
        return Ze(this, void 0, void 0, function*() {
            try {
                const r = Object.assign({}, t);
                return {
                    data: yield sn(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const n = [];
        return t.width && n.push(`width=${t.width}`),
        t.height && n.push(`height=${t.height}`),
        t.resize && n.push(`resize=${t.resize}`),
        t.format && n.push(`format=${t.format}`),
        t.quality && n.push(`quality=${t.quality}`),
        n.join("&")
    }
}
const iR = "2.12.1"
  , aR = {
    "X-Client-Info": `storage-js/${iR}`
};
var xs = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class lR {
    constructor(t, n={}, r, s) {
        this.shouldThrowOnError = !1;
        const o = new URL(t);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(o.hostname) && !o.hostname.includes("storage.supabase.") && (o.hostname = o.hostname.replace("supabase.", "storage.supabase.")),
        this.url = o.href,
        this.headers = Object.assign(Object.assign({}, aR), n),
        this.fetch = rb(r)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    listBuckets() {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _l(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (this.shouldThrowOnError)
                    throw t;
                if ($e(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield _l(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if ($e(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    createBucket(t, n={
        public: !1
    }) {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sn(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        type: n.type,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(t, n) {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ud(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if ($e(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(t) {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sn(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if ($e(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(t) {
        return xs(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sb(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if ($e(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class cR extends lR {
    constructor(t, n={}, r, s) {
        super(t, n, r, s)
    }
    from(t) {
        return new oR(this.url,this.headers,t,this.fetch)
    }
}
const uR = "2.57.4";
let Vo = "";
typeof Deno < "u" ? Vo = "deno" : typeof document < "u" ? Vo = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Vo = "react-native" : Vo = "node";
const dR = {
    "X-Client-Info": `supabase-js-${Vo}/${uR}`
}
  , hR = {
    headers: dR
}
  , fR = {
    schema: "public"
}
  , pR = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , mR = {};
var gR = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
const vR = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = Ww : t = fetch,
    (...n) => t(...n)
}
  , yR = () => typeof Headers > "u" ? Vw : Headers
  , xR = (e, t, n) => {
    const r = vR(n)
      , s = yR();
    return (o, i) => gR(void 0, void 0, void 0, function*() {
        var l;
        const c = (l = yield t()) !== null && l !== void 0 ? l : e;
        let u = new s(i == null ? void 0 : i.headers);
        return u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${c}`),
        r(o, Object.assign(Object.assign({}, i), {
            headers: u
        }))
    })
}
;
var wR = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
function bR(e) {
    return e.endsWith("/") ? e : e + "/"
}
function SR(e, t) {
    var n, r;
    const {db: s, auth: o, realtime: i, global: l} = e
      , {db: c, auth: u, realtime: d, global: h} = t
      , p = {
        db: Object.assign(Object.assign({}, c), s),
        auth: Object.assign(Object.assign({}, u), o),
        realtime: Object.assign(Object.assign({}, d), i),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, h), l), {
            headers: Object.assign(Object.assign({}, (n = h == null ? void 0 : h.headers) !== null && n !== void 0 ? n : {}), (r = l == null ? void 0 : l.headers) !== null && r !== void 0 ? r : {})
        }),
        accessToken: () => wR(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? p.accessToken = e.accessToken : delete p.accessToken,
    p
}
function jR(e) {
    const t = e == null ? void 0 : e.trim();
    if (!t)
        throw new Error("supabaseUrl is required.");
    if (!t.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(bR(t))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
const ob = "2.71.1"
  , ks = 30 * 1e3
  , zd = 3
  , du = zd * ks
  , kR = "http://localhost:9999"
  , _R = "supabase.auth.token"
  , NR = {
    "X-Client-Info": `gotrue-js/${ob}`
}
  , Bd = "X-Supabase-Api-Version"
  , ib = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , CR = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , ER = 10 * 60 * 1e3;
class bf extends Error {
    constructor(t, n, r) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = n,
        this.code = r
    }
}
function Z(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class TR extends bf {
    constructor(t, n, r) {
        super(t, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function PR(e) {
    return Z(e) && e.name === "AuthApiError"
}
class ab extends bf {
    constructor(t, n) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = n
    }
}
class _r extends bf {
    constructor(t, n, r, s) {
        super(t, r, s),
        this.name = n,
        this.status = r
    }
}
class Hn extends _r {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function RR(e) {
    return Z(e) && e.name === "AuthSessionMissingError"
}
class Sa extends _r {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class ja extends _r {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class ka extends _r {
    constructor(t, n=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function AR(e) {
    return Z(e) && e.name === "AuthImplicitGrantRedirectError"
}
class Bm extends _r {
    constructor(t, n=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class Wd extends _r {
    constructor(t, n) {
        super(t, "AuthRetryableFetchError", n, void 0)
    }
}
function hu(e) {
    return Z(e) && e.name === "AuthRetryableFetchError"
}
class Wm extends _r {
    constructor(t, n, r) {
        super(t, "AuthWeakPasswordError", n, "weak_password"),
        this.reasons = r
    }
}
class Vd extends _r {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Nl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , Vm = ` 	
\r=`.split("")
  , OR = ( () => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < Vm.length; t += 1)
        e[Vm[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Nl.length; t += 1)
        e[Nl[t].charCodeAt(0)] = t;
    return e
}
)();
function Hm(e, t, n) {
    if (e !== null)
        for (t.queue = t.queue << 8 | e,
        t.queuedBits += 8; t.queuedBits >= 6; ) {
            const r = t.queue >> t.queuedBits - 6 & 63;
            n(Nl[r]),
            t.queuedBits -= 6
        }
    else if (t.queuedBits > 0)
        for (t.queue = t.queue << 6 - t.queuedBits,
        t.queuedBits = 6; t.queuedBits >= 6; ) {
            const r = t.queue >> t.queuedBits - 6 & 63;
            n(Nl[r]),
            t.queuedBits -= 6
        }
}
function lb(e, t, n) {
    const r = OR[e];
    if (r > -1)
        for (t.queue = t.queue << 6 | r,
        t.queuedBits += 6; t.queuedBits >= 8; )
            n(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else {
        if (r === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}
function qm(e) {
    const t = []
      , n = i => {
        t.push(String.fromCodePoint(i))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , o = i => {
        LR(i, r, n)
    }
    ;
    for (let i = 0; i < e.length; i += 1)
        lb(e.charCodeAt(i), s, o);
    return t.join("")
}
function IR(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function MR(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = (r - 55296) * 1024 & 65535;
            r = (e.charCodeAt(n + 1) - 56320 & 65535 | s) + 65536,
            n += 1
        }
        IR(r, t)
    }
}
function LR(e, t, n) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            n(e);
            return
        }
        for (let r = 1; r < 6; r += 1)
            if (!(e >> 7 - r & 1)) {
                t.utf8seq = r;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63,
        t.utf8seq -= 1,
        t.utf8seq === 0 && n(t.codepoint)
    }
}
function $R(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        t.push(s)
    }
    ;
    for (let s = 0; s < e.length; s += 1)
        lb(e.charCodeAt(s), n, r);
    return new Uint8Array(t)
}
function DR(e) {
    const t = [];
    return MR(e, n => t.push(n)),
    new Uint8Array(t)
}
function FR(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        t.push(s)
    }
    ;
    return e.forEach(s => Hm(s, n, r)),
    Hm(null, n, r),
    t.join("")
}
function UR(e) {
    return Math.round(Date.now() / 1e3) + e
}
function zR() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const Ut = () => typeof window < "u" && typeof document < "u"
  , Pr = {
    tested: !1,
    writable: !1
}
  , cb = () => {
    if (!Ut())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Pr.tested)
        return Pr.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        Pr.tested = !0,
        Pr.writable = !0
    } catch {
        Pr.tested = !0,
        Pr.writable = !1
    }
    return Pr.writable
}
;
function BR(e) {
    const t = {}
      , n = new URL(e);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (s, o) => {
                t[o] = s
            }
            )
        } catch {}
    return n.searchParams.forEach( (r, s) => {
        t[s] = r
    }
    ),
    t
}
const ub = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => Vi(async () => {
        const {default: r} = await Promise.resolve().then( () => jo);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , WR = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , _s = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n))
}
  , Rr = async (e, t) => {
    const n = await e.getItem(t);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
  , Bn = async (e, t) => {
    await e.removeItem(t)
}
;
class gc {
    constructor() {
        this.promise = new gc.promiseConstructor( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
}
gc.promiseConstructor = Promise;
function fu(e) {
    const t = e.split(".");
    if (t.length !== 3)
        throw new Vd("Invalid JWT structure");
    for (let r = 0; r < t.length; r++)
        if (!CR.test(t[r]))
            throw new Vd("JWT not in base64url format");
    return {
        header: JSON.parse(qm(t[0])),
        payload: JSON.parse(qm(t[1])),
        signature: $R(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function VR(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function HR(e, t) {
    return new Promise( (r, s) => {
        (async () => {
            for (let o = 0; o < 1 / 0; o++)
                try {
                    const i = await e(o);
                    if (!t(o, null, i)) {
                        r(i);
                        return
                    }
                } catch (i) {
                    if (!t(o, i)) {
                        s(i);
                        return
                    }
                }
        }
        )()
    }
    )
}
function qR(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function KR() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , r = n.length;
        let s = "";
        for (let o = 0; o < 56; o++)
            s += n.charAt(Math.floor(Math.random() * r));
        return s
    }
    return crypto.getRandomValues(t),
    Array.from(t, qR).join("")
}
async function GR(e) {
    const n = new TextEncoder().encode(e)
      , r = await crypto.subtle.digest("SHA-256", n)
      , s = new Uint8Array(r);
    return Array.from(s).map(o => String.fromCharCode(o)).join("")
}
async function QR(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const n = await GR(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function ws(e, t, n=!1) {
    const r = KR();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"),
    await _s(e, `${t}-code-verifier`, s);
    const o = await QR(r);
    return [o, r === o ? "plain" : "s256"]
}
const YR = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function JR(e) {
    const t = e.headers.get(Bd);
    if (!t || !t.match(YR))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function XR(e) {
    if (!e)
        throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t)
        throw new Error("JWT has expired")
}
function ZR(e) {
    switch (e) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const eA = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function bs(e) {
    if (!eA.test(e))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function pu() {
    const e = {};
    return new Proxy(e,{
        get: (t, n) => {
            if (n === "__isUserNotAvailableProxy")
                return !0;
            if (typeof n == "symbol") {
                const r = n.toString();
                if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (t, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (t, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function Km(e) {
    return JSON.parse(JSON.stringify(e))
}
var tA = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
const Ir = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , nA = [502, 503, 504];
async function Gm(e) {
    var t;
    if (!WR(e))
        throw new Wd(Ir(e),0);
    if (nA.includes(e.status))
        throw new Wd(Ir(e),e.status);
    let n;
    try {
        n = await e.json()
    } catch (o) {
        throw new ab(Ir(o),o)
    }
    let r;
    const s = JR(e);
    if (s && s.getTime() >= ib["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new Wm(Ir(n),e.status,((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (r === "session_not_found")
            throw new Hn
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (o, i) => o && typeof i == "string", !0))
        throw new Wm(Ir(n),e.status,n.weak_password.reasons);
    throw new TR(Ir(n),e.status || 500,r)
}
const rA = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(r),
    Object.assign(Object.assign({}, s), n))
}
;
async function re(e, t, n, r) {
    var s;
    const o = Object.assign({}, r == null ? void 0 : r.headers);
    o[Bd] || (o[Bd] = ib["2024-01-01"].name),
    r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
    const i = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (i.redirect_to = r.redirectTo);
    const l = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : ""
      , c = await sA(e, t, n + l, {
        headers: o,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(c) : {
        data: Object.assign({}, c),
        error: null
    }
}
async function sA(e, t, n, r, s, o) {
    const i = rA(t, r, s, o);
    let l;
    try {
        l = await e(n, Object.assign({}, i))
    } catch (c) {
        throw console.error(c),
        new Wd(Ir(c),0)
    }
    if (l.ok || await Gm(l),
    r != null && r.noResolveJson)
        return l;
    try {
        return await l.json()
    } catch (c) {
        await Gm(c)
    }
}
function xn(e) {
    var t;
    let n = null;
    lA(e) && (n = Object.assign({}, e),
    e.expires_at || (n.expires_at = UR(e.expires_in)));
    const r = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function Qm(e) {
    const t = xn(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (n, r) => n && typeof r == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function Yn(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function oA(e) {
    return {
        data: e,
        error: null
    }
}
function iA(e) {
    const {action_link: t, email_otp: n, hashed_token: r, redirect_to: s, verification_type: o} = e
      , i = tA(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , l = {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: o
    }
      , c = Object.assign({}, i);
    return {
        data: {
            properties: l,
            user: c
        },
        error: null
    }
}
function aA(e) {
    return e
}
function lA(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
const mu = ["global", "local", "others"];
var cA = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
class uA {
    constructor({url: t="", headers: n={}, fetch: r}) {
        this.url = t,
        this.headers = n,
        this.fetch = ub(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, n=mu[0]) {
        if (mu.indexOf(n) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${mu.join(", ")}`);
        try {
            return await re(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (Z(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async inviteUserByEmail(t, n={}) {
        try {
            return await re(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Yn
            })
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async generateLink(t) {
        try {
            const {options: n} = t
              , r = cA(t, ["options"])
              , s = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (s.new_email = r == null ? void 0 : r.newEmail,
            delete s.newEmail),
            await re(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: iA,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async createUser(t) {
        try {
            return await re(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Yn
            })
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async listUsers(t) {
        var n, r, s, o, i, l, c;
        try {
            const u = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , d = await re(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (o = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : ""
                },
                xform: aA
            });
            if (d.error)
                throw d.error;
            const h = await d.json()
              , p = (i = d.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0
              , f = (c = (l = d.headers.get("link")) === null || l === void 0 ? void 0 : l.split(",")) !== null && c !== void 0 ? c : [];
            return f.length > 0 && (f.forEach(b => {
                const v = parseInt(b.split(";")[0].split("=")[1].substring(0, 1))
                  , w = JSON.parse(b.split(";")[1].split("=")[1]);
                u[`${w}Page`] = v
            }
            ),
            u.total = parseInt(p)),
            {
                data: Object.assign(Object.assign({}, h), u),
                error: null
            }
        } catch (u) {
            if (Z(u))
                return {
                    data: {
                        users: []
                    },
                    error: u
                };
            throw u
        }
    }
    async getUserById(t) {
        bs(t);
        try {
            return await re(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Yn
            })
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUserById(t, n) {
        bs(t);
        try {
            return await re(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: n,
                headers: this.headers,
                xform: Yn
            })
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async deleteUser(t, n=!1) {
        bs(t);
        try {
            return await re(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Yn
            })
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _listFactors(t) {
        bs(t.userId);
        try {
            const {data: n, error: r} = await re(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteFactor(t) {
        bs(t.userId),
        bs(t.id);
        try {
            return {
                data: await re(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
function Ym(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
function dA() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const Ss = {
    debug: !!(globalThis && cb() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class db extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class hA extends db {
}
async function fA(e, t, n) {
    Ss.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const r = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        r.abort(),
        Ss.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async s => {
        if (s) {
            Ss.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await n()
            } finally {
                Ss.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0)
                throw Ss.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new hA(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (Ss.debug)
                try {
                    const o = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "))
                } catch (o) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await n()
        }
    }
    ))
}
dA();
const pA = {
    url: kR,
    storageKey: _R,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: NR,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Jm(e, t, n) {
    return await n()
}
const js = {};
class Pi {
    constructor(t) {
        var n, r;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Pi.nextInstanceID,
        Pi.nextInstanceID += 1,
        this.instanceID > 0 && Ut() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, pA), t);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new uA({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = ub(s.fetch),
        this.lock = s.lock || Jm,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Ut() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = fA : this.lock = Jm,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? (s.storage ? this.storage = s.storage : cb() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = Ym(this.memoryStorage)),
        s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {},
        this.storage = Ym(this.memoryStorage)),
        Ut() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (o) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o)
            }
            (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async o => {
                this._debug("received broadcast notification from other tab or client", o),
                await this._notifyAllSubscribers(o.data.event, o.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    get jwks() {
        var t, n;
        return (n = (t = js[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && n !== void 0 ? n : {
            keys: []
        }
    }
    set jwks(t) {
        js[this.storageKey] = Object.assign(Object.assign({}, js[this.storageKey]), {
            jwks: t
        })
    }
    get jwks_cached_at() {
        var t, n;
        return (n = (t = js[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && n !== void 0 ? n : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(t) {
        js[this.storageKey] = Object.assign(Object.assign({}, js[this.storageKey]), {
            cachedAt: t
        })
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${ob}) ${new Date().toISOString()}`, ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const n = BR(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            Ut() && this.detectSessionInUrl && r !== "none") {
                const {data: s, error: o} = await this._getSessionFromURL(n, r);
                if (o) {
                    if (this._debug("#_initialize()", "error detecting session from URL", o),
                    AR(o)) {
                        const c = (t = o.details) === null || t === void 0 ? void 0 : t.code;
                        if (c === "identity_already_exists" || c === "identity_not_found" || c === "single_identity_not_deletable")
                            return {
                                error: o
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: o
                    }
                }
                const {session: i, redirectType: l} = s;
                return this._debug("#_initialize()", "detected session in URL", i, "redirect type", l),
                await this._saveSession(i),
                setTimeout(async () => {
                    l === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (n) {
            return Z(n) ? {
                error: n
            } : {
                error: new ab("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var n, r, s;
        try {
            const o = await re(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = t == null ? void 0 : t.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: xn
            })
              , {data: i, error: l} = o;
            if (l || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            const c = i.session
              , u = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", c)),
            {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (o) {
            if (Z(o))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signUp(t) {
        var n, r, s;
        try {
            let o;
            if ("email"in t) {
                const {email: d, password: h, options: p} = t;
                let f = null
                  , b = null;
                this.flowType === "pkce" && ([f,b] = await ws(this.storage, this.storageKey)),
                o = await re(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: p == null ? void 0 : p.emailRedirectTo,
                    body: {
                        email: d,
                        password: h,
                        data: (n = p == null ? void 0 : p.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: p == null ? void 0 : p.captchaToken
                        },
                        code_challenge: f,
                        code_challenge_method: b
                    },
                    xform: xn
                })
            } else if ("phone"in t) {
                const {phone: d, password: h, options: p} = t;
                o = await re(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: h,
                        data: (r = p == null ? void 0 : p.data) !== null && r !== void 0 ? r : {},
                        channel: (s = p == null ? void 0 : p.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: p == null ? void 0 : p.captchaToken
                        }
                    },
                    xform: xn
                })
            } else
                throw new ja("You must provide either an email or phone number and a password");
            const {data: i, error: l} = o;
            if (l || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            const c = i.session
              , u = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", c)),
            {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (o) {
            if (Z(o))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signInWithPassword(t) {
        try {
            let n;
            if ("email"in t) {
                const {email: o, password: i, options: l} = t;
                n = await re(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: o,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: Qm
                })
            } else if ("phone"in t) {
                const {phone: o, password: i, options: l} = t;
                n = await re(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: o,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: Qm
                })
            } else
                throw new ja("You must provide either an email or phone number and a password");
            const {data: r, error: s} = n;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Sa
            } : (r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: s
            })
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOAuth(t) {
        var n, r, s, o;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (o = t.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async signInWithWeb3(t) {
        const {chain: n} = t;
        if (n === "solana")
            return await this.signInWithSolana(t);
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`)
    }
    async signInWithSolana(t) {
        var n, r, s, o, i, l, c, u, d, h, p, f;
        let b, v;
        if ("message"in t)
            b = t.message,
            v = t.signature;
        else {
            const {chain: w, wallet: x, statement: m, options: y} = t;
            let S;
            if (Ut())
                if (typeof x == "object")
                    S = x;
                else {
                    const k = window;
                    if ("solana"in k && typeof k.solana == "object" && ("signIn"in k.solana && typeof k.solana.signIn == "function" || "signMessage"in k.solana && typeof k.solana.signMessage == "function"))
                        S = k.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof x != "object" || !(y != null && y.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                S = x
            }
            const j = new URL((n = y == null ? void 0 : y.url) !== null && n !== void 0 ? n : window.location.href);
            if ("signIn"in S && S.signIn) {
                const k = await S.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, y == null ? void 0 : y.signInWithSolana), {
                    version: "1",
                    domain: j.host,
                    uri: j.href
                }), m ? {
                    statement: m
                } : null));
                let _;
                if (Array.isArray(k) && k[0] && typeof k[0] == "object")
                    _ = k[0];
                else if (k && typeof k == "object" && "signedMessage"in k && "signature"in k)
                    _ = k;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in _ && "signature"in _ && (typeof _.signedMessage == "string" || _.signedMessage instanceof Uint8Array) && _.signature instanceof Uint8Array)
                    b = typeof _.signedMessage == "string" ? _.signedMessage : new TextDecoder().decode(_.signedMessage),
                    v = _.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in S) || typeof S.signMessage != "function" || !("publicKey"in S) || typeof S != "object" || !S.publicKey || !("toBase58"in S.publicKey) || typeof S.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                b = [`${j.host} wants you to sign in with your Solana account:`, S.publicKey.toBase58(), ...m ? ["", m, ""] : [""], "Version: 1", `URI: ${j.href}`, `Issued At: ${(s = (r = y == null ? void 0 : y.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((o = y == null ? void 0 : y.signInWithSolana) === null || o === void 0) && o.notBefore ? [`Not Before: ${y.signInWithSolana.notBefore}`] : [], ...!((i = y == null ? void 0 : y.signInWithSolana) === null || i === void 0) && i.expirationTime ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`] : [], ...!((l = y == null ? void 0 : y.signInWithSolana) === null || l === void 0) && l.chainId ? [`Chain ID: ${y.signInWithSolana.chainId}`] : [], ...!((c = y == null ? void 0 : y.signInWithSolana) === null || c === void 0) && c.nonce ? [`Nonce: ${y.signInWithSolana.nonce}`] : [], ...!((u = y == null ? void 0 : y.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${y.signInWithSolana.requestId}`] : [], ...!((h = (d = y == null ? void 0 : y.signInWithSolana) === null || d === void 0 ? void 0 : d.resources) === null || h === void 0) && h.length ? ["Resources", ...y.signInWithSolana.resources.map(_ => `- ${_}`)] : []].join(`
`);
                const k = await S.signMessage(new TextEncoder().encode(b), "utf8");
                if (!k || !(k instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                v = k
            }
        }
        try {
            const {data: w, error: x} = await re(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: b,
                    signature: FR(v)
                }, !((p = t.options) === null || p === void 0) && p.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (f = t.options) === null || f === void 0 ? void 0 : f.captchaToken
                    }
                } : null),
                xform: xn
            });
            if (x)
                throw x;
            return !w || !w.session || !w.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Sa
            } : (w.session && (await this._saveSession(w.session),
            await this._notifyAllSubscribers("SIGNED_IN", w.session)),
            {
                data: Object.assign({}, w),
                error: x
            })
        } catch (w) {
            if (Z(w))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: w
                };
            throw w
        }
    }
    async _exchangeCodeForSession(t) {
        const n = await Rr(this.storage, `${this.storageKey}-code-verifier`)
          , [r,s] = (n ?? "").split("/");
        try {
            const {data: o, error: i} = await re(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: r
                },
                xform: xn
            });
            if (await Bn(this.storage, `${this.storageKey}-code-verifier`),
            i)
                throw i;
            return !o || !o.session || !o.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Sa
            } : (o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", o.session)),
            {
                data: Object.assign(Object.assign({}, o), {
                    redirectType: s ?? null
                }),
                error: i
            })
        } catch (o) {
            if (Z(o))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: n, provider: r, token: s, access_token: o, nonce: i} = t
              , l = await re(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: s,
                    access_token: o,
                    nonce: i,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: xn
            })
              , {data: c, error: u} = l;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !c || !c.session || !c.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Sa
            } : (c.session && (await this._saveSession(c.session),
            await this._notifyAllSubscribers("SIGNED_IN", c.session)),
            {
                data: c,
                error: u
            })
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOtp(t) {
        var n, r, s, o, i;
        try {
            if ("email"in t) {
                const {email: l, options: c} = t;
                let u = null
                  , d = null;
                this.flowType === "pkce" && ([u,d] = await ws(this.storage, this.storageKey));
                const {error: h} = await re(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: l,
                        data: (n = c == null ? void 0 : c.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = c == null ? void 0 : c.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: d
                    },
                    redirectTo: c == null ? void 0 : c.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }
            }
            if ("phone"in t) {
                const {phone: l, options: c} = t
                  , {data: u, error: d} = await re(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: l,
                        data: (s = c == null ? void 0 : c.data) !== null && s !== void 0 ? s : {},
                        create_user: (o = c == null ? void 0 : c.shouldCreateUser) !== null && o !== void 0 ? o : !0,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        },
                        channel: (i = c == null ? void 0 : c.channel) !== null && i !== void 0 ? i : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: d
                }
            }
            throw new ja("You must provide either an email or phone number.")
        } catch (l) {
            if (Z(l))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            throw l
        }
    }
    async verifyOtp(t) {
        var n, r;
        try {
            let s, o;
            "options"in t && (s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            o = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {data: i, error: l} = await re(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: o
                    }
                }),
                redirectTo: s,
                xform: xn
            });
            if (l)
                throw l;
            if (!i)
                throw new Error("An error occurred on token verification.");
            const c = i.session
              , u = i.user;
            return c != null && c.access_token && (await this._saveSession(c),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c)),
            {
                data: {
                    user: u,
                    session: c
                },
                error: null
            }
        } catch (s) {
            if (Z(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(t) {
        var n, r, s;
        try {
            let o = null
              , i = null;
            return this.flowType === "pkce" && ([o,i] = await ws(this.storage, this.storageKey)),
            await re(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: i
                }),
                headers: this.headers,
                xform: oA
            })
        } catch (o) {
            if (Z(o))
                return {
                    data: null,
                    error: o
                };
            throw o
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: n}, error: r} = t;
                if (r)
                    throw r;
                if (!n)
                    throw new Hn;
                const {error: s} = await re(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (t) {
            if (Z(t))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                };
            throw t
        }
    }
    async resend(t) {
        try {
            const n = `${this.url}/resend`;
            if ("email"in t) {
                const {email: r, type: s, options: o} = t
                  , {error: i} = await re(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    redirectTo: o == null ? void 0 : o.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                }
            } else if ("phone"in t) {
                const {phone: r, type: s, options: o} = t
                  , {data: i, error: l} = await re(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: i == null ? void 0 : i.message_id
                    },
                    error: l
                }
            }
            throw new ja("You must provide either an email or phone number and a type")
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(t, n) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await r,
                await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch {}
                    }
                    )()),
                    await r; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await t(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const n = await Rr(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n),
            n !== null && (this._isValidSession(n) ? t = n : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < du : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", t.expires_at),
            !r) {
                if (this.userStorage) {
                    const i = await Rr(this.userStorage, this.storageKey + "-user");
                    i != null && i.user ? t.user = i.user : t.user = pu()
                }
                if (this.storage.isServer && t.user) {
                    let i = this.suppressGetSessionWarning;
                    t = new Proxy(t,{
                        get: (c, u, d) => (!i && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        i = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(c, u, d))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {session: s, error: o} = await this._callRefreshToken(t.refresh_token);
            return o ? {
                data: {
                    session: null
                },
                error: o
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await re(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Yn
            }) : await this._useSession(async n => {
                var r, s, o;
                const {data: i, error: l} = n;
                if (l)
                    throw l;
                return !(!((r = i.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new Hn
                } : await re(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (o = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && o !== void 0 ? o : void 0,
                    xform: Yn
                })
            }
            )
        } catch (n) {
            if (Z(n))
                return RR(n) && (await this._removeSession(),
                await Bn(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUser(t, n={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(t, n))
    }
    async _updateUser(t, n={}) {
        try {
            return await this._useSession(async r => {
                const {data: s, error: o} = r;
                if (o)
                    throw o;
                if (!s.session)
                    throw new Hn;
                const i = s.session;
                let l = null
                  , c = null;
                this.flowType === "pkce" && t.email != null && ([l,c] = await ws(this.storage, this.storageKey));
                const {data: u, error: d} = await re(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: l,
                        code_challenge_method: c
                    }),
                    jwt: i.access_token,
                    xform: Yn
                });
                if (d)
                    throw d;
                return i.user = u.user,
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                {
                    data: {
                        user: i.user
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new Hn;
            const n = Date.now() / 1e3;
            let r = n
              , s = !0
              , o = null;
            const {payload: i} = fu(t.access_token);
            if (i.exp && (r = i.exp,
            s = r <= n),
            s) {
                const {session: l, error: c} = await this._callRefreshToken(t.refresh_token);
                if (c)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: c
                    };
                if (!l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                o = l
            } else {
                const {data: l, error: c} = await this._getUser(t.access_token);
                if (c)
                    throw c;
                o = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: l.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                },
                await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o)
            }
            return {
                data: {
                    user: o.user,
                    session: o
                },
                error: null
            }
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!t) {
                    const {data: i, error: l} = n;
                    if (l)
                        throw l;
                    t = (r = i.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new Hn;
                const {session: s, error: o} = await this._callRefreshToken(t.refresh_token);
                return o ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (Z(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _getSessionFromURL(t, n) {
        try {
            if (!Ut())
                throw new ka("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new ka(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new Bm("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new ka("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new Bm("No code detected.");
                const {data: m, error: y} = await this._exchangeCodeForSession(t.code);
                if (y)
                    throw y;
                const S = new URL(window.location.href);
                return S.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", S.toString()),
                {
                    data: {
                        session: m.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: s, access_token: o, refresh_token: i, expires_in: l, expires_at: c, token_type: u} = t;
            if (!o || !l || !i || !u)
                throw new ka("No session defined in URL");
            const d = Math.round(Date.now() / 1e3)
              , h = parseInt(l);
            let p = d + h;
            c && (p = parseInt(c));
            const f = p - d;
            f * 1e3 <= ks && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${h}s`);
            const b = p - h;
            d - b >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", b, p, d) : d - b < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", b, p, d);
            const {data: v, error: w} = await this._getUser(o);
            if (w)
                throw w;
            const x = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: o,
                expires_in: h,
                expires_at: p,
                refresh_token: i,
                token_type: u,
                user: v.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: x,
                    redirectType: t.type
                },
                error: null
            }
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: r
                };
            throw r
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const n = await Rr(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && n)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {data: s, error: o} = n;
            if (o)
                return {
                    error: o
                };
            const i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
            if (i) {
                const {error: l} = await this.admin.signOut(i, t);
                if (l && !(PR(l) && (l.status === 404 || l.status === 401 || l.status === 403)))
                    return {
                        error: l
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await Bn(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(t) {
        const n = zR()
          , r = {
            id: n,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", n),
                this.stateChangeEmitters.delete(n)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        }
        )))(),
        {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async n => {
            var r, s;
            try {
                const {data: {session: o}, error: i} = n;
                if (i)
                    throw i;
                await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", o)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", o)
            } catch (o) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", o),
                console.error(o)
            }
        }
        )
    }
    async resetPasswordForEmail(t, n={}) {
        let r = null
          , s = null;
        this.flowType === "pkce" && ([r,s] = await ws(this.storage, this.storageKey, !0));
        try {
            return await re(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: r,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (o) {
            if (Z(o))
                return {
                    data: null,
                    error: o
                };
            throw o
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: n, error: r} = await this.getUser();
            if (r)
                throw r;
            return {
                data: {
                    identities: (t = n.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async linkIdentity(t) {
        var n;
        try {
            const {data: r, error: s} = await this._useSession(async o => {
                var i, l, c, u, d;
                const {data: h, error: p} = o;
                if (p)
                    throw p;
                const f = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (i = t.options) === null || i === void 0 ? void 0 : i.redirectTo,
                    scopes: (l = t.options) === null || l === void 0 ? void 0 : l.scopes,
                    queryParams: (c = t.options) === null || c === void 0 ? void 0 : c.queryParams,
                    skipBrowserRedirect: !0
                });
                return await re(this.fetch, "GET", f, {
                    headers: this.headers,
                    jwt: (d = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && d !== void 0 ? d : void 0
                })
            }
            );
            if (s)
                throw s;
            return Ut() && !(!((n = t.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
            {
                data: {
                    provider: t.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (Z(r))
                return {
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: r
                };
            throw r
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: o, error: i} = n;
                if (i)
                    throw i;
                return await re(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (r = o.session) === null || r === void 0 ? void 0 : r.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _refreshAccessToken(t) {
        const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await HR(async s => (s > 0 && await VR(200 * Math.pow(2, s - 1)),
            this._debug(n, "refreshing attempt", s),
            await re(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: xn
            })), (s, o) => {
                const i = 200 * Math.pow(2, s);
                return o && hu(o) && Date.now() + i - r < ks
            }
            )
        } catch (r) {
            if (this._debug(n, "error", r),
            Z(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", n, "url", r),
        Ut() && !n.skipBrowserRedirect && window.location.assign(r),
        {
            data: {
                provider: t,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t, n;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const s = await Rr(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let i = await Rr(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !i && (i = {
                    user: s.user
                },
                await _s(this.userStorage, this.storageKey + "-user", i)),
                s.user = (t = i == null ? void 0 : i.user) !== null && t !== void 0 ? t : pu()
            } else if (s && !s.user && !s.user) {
                const i = await Rr(this.storage, this.storageKey + "-user");
                i && (i != null && i.user) ? (s.user = i.user,
                await Bn(this.storage, this.storageKey + "-user"),
                await _s(this.storage, this.storageKey, s)) : s.user = pu()
            }
            if (this._debug(r, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(r, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const o = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < du;
            if (this._debug(r, `session has${o ? "" : " not"} expired with margin of ${du}s`),
            o) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: i} = await this._callRefreshToken(s.refresh_token);
                    i && (console.error(i),
                    hu(i) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", i),
                    await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: i, error: l} = await this._getUser(s.access_token);
                    !l && (i != null && i.user) ? (s.user = i.user,
                    await this._saveSession(s),
                    await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification")
                } catch (i) {
                    console.error("Error getting user data:", i),
                    this._debug(r, "error getting user data, skipping SIGNED_IN notification", i)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(r, "error", s),
            console.error(s);
            return
        } finally {
            this._debug(r, "end")
        }
    }
    async _callRefreshToken(t) {
        var n, r;
        if (!t)
            throw new Hn;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new gc;
            const {data: o, error: i} = await this._refreshAccessToken(t);
            if (i)
                throw i;
            if (!o.session)
                throw new Hn;
            await this._saveSession(o.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
            const l = {
                session: o.session,
                error: null
            };
            return this.refreshingDeferred.resolve(l),
            l
        } catch (o) {
            if (this._debug(s, "error", o),
            Z(o)) {
                const i = {
                    session: null,
                    error: o
                };
                return hu(o) || await this._removeSession(),
                (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(i),
                i
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(o),
            o
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, n, r=!0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: t,
                session: n
            });
            const o = []
              , i = Array.from(this.stateChangeEmitters.values()).map(async l => {
                try {
                    await l.callback(t, n)
                } catch (c) {
                    o.push(c)
                }
            }
            );
            if (await Promise.all(i),
            o.length > 0) {
                for (let l = 0; l < o.length; l += 1)
                    console.error(o[l]);
                throw o[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0;
        const n = Object.assign({}, t)
          , r = n.user && n.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !r && n.user && await _s(this.userStorage, this.storageKey + "-user", {
                user: n.user
            });
            const s = Object.assign({}, n);
            delete s.user;
            const o = Km(s);
            await _s(this.storage, this.storageKey, o)
        } else {
            const s = Km(n);
            await _s(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await Bn(this.storage, this.storageKey),
        await Bn(this.storage, this.storageKey + "-code-verifier"),
        await Bn(this.storage, this.storageKey + "-user"),
        this.userStorage && await Bn(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Ut() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), ks);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {data: {session: r}} = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((r.expires_at * 1e3 - t) / ks);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${ks}ms, refresh threshold is ${zd} ticks`),
                            s <= zd && await this._callRefreshToken(r.refresh_token)
                        }
                        )
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof db)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Ut() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const n = `#_onVisibilityChanged(${t})`;
        this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, n, r) {
        const s = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce") {
            const [o,i] = await ws(this.storage, this.storageKey)
              , l = new URLSearchParams({
                code_challenge: `${encodeURIComponent(o)}`,
                code_challenge_method: `${encodeURIComponent(i)}`
            });
            s.push(l.toString())
        }
        if (r != null && r.queryParams) {
            const o = new URLSearchParams(r.queryParams);
            s.push(o.toString())
        }
        return r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async n => {
                var r;
                const {data: s, error: o} = n;
                return o ? {
                    data: null,
                    error: o
                } : await re(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                })
            }
            )
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: o, error: i} = n;
                if (i)
                    return {
                        data: null,
                        error: i
                    };
                const l = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : {
                    issuer: t.issuer
                })
                  , {data: c, error: u} = await re(this.fetch, "POST", `${this.url}/factors`, {
                    body: l,
                    headers: this.headers,
                    jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                });
                return u ? {
                    data: null,
                    error: u
                } : (t.factorType === "totp" && (!((s = c == null ? void 0 : c.totp) === null || s === void 0) && s.qr_code) && (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
                {
                    data: c,
                    error: null
                })
            }
            )
        } catch (n) {
            if (Z(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: o} = n;
                    if (o)
                        return {
                            data: null,
                            error: o
                        };
                    const {data: i, error: l} = await re(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return l ? {
                        data: null,
                        error: l
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + i.expires_in
                    }, i)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i),
                    {
                        data: i,
                        error: l
                    })
                }
                )
            } catch (n) {
                if (Z(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: o} = n;
                    return o ? {
                        data: null,
                        error: o
                    } : await re(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                }
                )
            } catch (n) {
                if (Z(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: n, error: r} = await this._challenge({
            factorId: t.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: t.factorId,
            challengeId: n.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {data: {user: t}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const r = (t == null ? void 0 : t.factors) || []
          , s = r.filter(i => i.factor_type === "totp" && i.status === "verified")
          , o = r.filter(i => i.factor_type === "phone" && i.status === "verified");
        return {
            data: {
                all: r,
                totp: s,
                phone: o
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var n, r;
            const {data: {session: s}, error: o} = t;
            if (o)
                return {
                    data: null,
                    error: o
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: i} = fu(s.access_token);
            let l = null;
            i.aal && (l = i.aal);
            let c = l;
            ((r = (n = s.user.factors) === null || n === void 0 ? void 0 : n.filter(h => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (c = "aal2");
            const d = i.amr || [];
            return {
                data: {
                    currentLevel: l,
                    nextLevel: c,
                    currentAuthenticationMethods: d
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(t, n={
        keys: []
    }) {
        let r = n.keys.find(l => l.kid === t);
        if (r)
            return r;
        const s = Date.now();
        if (r = this.jwks.keys.find(l => l.kid === t),
        r && this.jwks_cached_at + ER > s)
            return r;
        const {data: o, error: i} = await re(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (i)
            throw i;
        return !o.keys || o.keys.length === 0 || (this.jwks = o,
        this.jwks_cached_at = s,
        r = o.keys.find(l => l.kid === t),
        !r) ? null : r
    }
    async getClaims(t, n={}) {
        try {
            let r = t;
            if (!r) {
                const {data: f, error: b} = await this.getSession();
                if (b || !f.session)
                    return {
                        data: null,
                        error: b
                    };
                r = f.session.access_token
            }
            const {header: s, payload: o, signature: i, raw: {header: l, payload: c}} = fu(r);
            n != null && n.allowExpired || XR(o.exp);
            const u = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, n != null && n.keys ? {
                keys: n.keys
            } : n == null ? void 0 : n.jwks);
            if (!u) {
                const {error: f} = await this.getUser(r);
                if (f)
                    throw f;
                return {
                    data: {
                        claims: o,
                        header: s,
                        signature: i
                    },
                    error: null
                }
            }
            const d = ZR(s.alg)
              , h = await crypto.subtle.importKey("jwk", u, d, !0, ["verify"]);
            if (!await crypto.subtle.verify(d, h, i, DR(`${l}.${c}`)))
                throw new Vd("Invalid JWT signature");
            return {
                data: {
                    claims: o,
                    header: s,
                    signature: i
                },
                error: null
            }
        } catch (r) {
            if (Z(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
Pi.nextInstanceID = 0;
const mA = Pi;
class gA extends mA {
    constructor(t) {
        super(t)
    }
}
var vA = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function l(d) {
            try {
                u(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            try {
                u(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function u(d) {
            d.done ? o(d.value) : s(d.value).then(l, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
};
class yA {
    constructor(t, n, r) {
        var s, o, i;
        this.supabaseUrl = t,
        this.supabaseKey = n;
        const l = jR(t);
        if (!n)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",l),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",l),
        this.storageUrl = new URL("storage/v1",l),
        this.functionsUrl = new URL("functions/v1",l);
        const c = `sb-${l.hostname.split(".")[0]}-auth-token`
          , u = {
            db: fR,
            realtime: mR,
            auth: Object.assign(Object.assign({}, pR), {
                storageKey: c
            }),
            global: hR
        }
          , d = SR(r ?? {}, u);
        this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (o = d.global.headers) !== null && o !== void 0 ? o : {},
        d.accessToken ? (this.accessToken = d.accessToken,
        this.auth = new Proxy({},{
            get: (h, p) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((i = d.auth) !== null && i !== void 0 ? i : {}, this.headers, d.global.fetch),
        this.fetch = xR(n, this._getAccessToken.bind(this), d.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, d.realtime)),
        this.rest = new OP(new URL("rest/v1",l).href,{
            headers: this.headers,
            schema: d.db.schema,
            fetch: this.fetch
        }),
        this.storage = new cR(this.storageUrl.href,this.headers,this.fetch,r == null ? void 0 : r.storage),
        d.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new dP(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, n={}, r={}) {
        return this.rest.rpc(t, n, r)
    }
    channel(t, n={
        config: {}
    }) {
        return this.realtime.channel(t, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, n;
        return vA(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : this.supabaseKey
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: s, userStorage: o, storageKey: i, flowType: l, lock: c, debug: u}, d, h) {
        const p = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new gA({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, p), d),
            storageKey: i,
            autoRefreshToken: t,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            userStorage: o,
            flowType: l,
            lock: c,
            debug: u,
            fetch: h,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(f => f.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(t) {
        return new YP(this.realtimeUrl.href,Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        }
        )
    }
    _handleTokenChanged(t, n, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : t === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const xA = (e, t, n) => new yA(e,t,n);
function wA() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const e = process.version;
    if (e == null)
        return !1;
    const t = e.match(/^v(\d+)\./);
    return t ? parseInt(t[1], 10) <= 18 : !1
}
wA() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const bA = "https://qojocowsjvvoqezhmiwu.supabase.co"
  , SA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvam9jb3dzanZ2b3FlemhtaXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5Nzg3NDIsImV4cCI6MjA3MzU1NDc0Mn0.qtqpfcDPE4wrOs0uALCUVGKaqJ0lSyZO2uB3Ri-jlHw"
  , hb = xA(bA, SA, {
    auth: {
        storage: localStorage,
        persistSession: !0,
        autoRefreshToken: !0
    }
})
  , jA = () => {
    const {toast: e} = Di()
      , [t,n] = g.useState({
        name: "",
        email: "",
        phone: "",
        major: "",
        year: "",
        department: "",
        experience: "",
        interests: [],
        availability: "",
        resume: null,
        additionalInfo: ""
    })
      , r = [{
        name: "Software & AI",
        icon: nk,
        description: "Work on autonomous driving algorithms, computer vision, and control systems",
        skills: ["tbd"],
        openRoles: ["tbd"]
    }, {
        name: "Hardware & Mechanical",
        icon: mk,
        description: "Design and build the physical racing platform and electronic systems",
        skills: ["tbd"],
        openRoles: ["tbd"]
    }, {
        name: "Electrical & Sensors",
        icon: mk,
        description: "Develop and integrate the car’s electrical systems, including power distribution, sensors, and signal processing for autonomous control.",
        skills: ["tbd"],
        openRoles: ["tbd"]
    }, {
        name: "Operations & Business",
        icon: Zy,
        description: "Manage team operations, sponsorships, events, and outreach",
        skills: ["tbd"],
        openRoles: ["tbd"]
    }]
      , s = ["Hands-on experience with cutting-edge technology", "Networking with industry professionals", "Competition participation and travel opportunities", "Portfolio projects for career advancement", "Mentorship from faculty and alumni", "Access to advanced lab facilities and equipment"]
      , o = async l => {
        l.preventDefault();
        try {
            const {error: c} = await hb.from("applications").insert({
                name: t.name,
                email: t.email,
                phone: t.phone || null,
                major: t.major || null,
                year: t.year || null,
                department: t.department || null,
                experience: t.experience || null,
                availability: t.availability || null,
                additional_info: t.additionalInfo || null
            });
            if (c)
                throw c;
            e({
                title: "✅ Application Submitted!",
                description: "We'll review your application and get back to you within 48 hours."
            }),
            n({
                name: "",
                email: "",
                phone: "",
                major: "",
                year: "",
                department: "",
                experience: "",
                interests: [],
                availability: "",
                resume: null,
                additionalInfo: ""
            })
        } catch (c) {
            console.error("Error submitting application:", c),
            e({
                title: "Error",
                description: "Failed to submit application. Please try again.",
                variant: "destructive"
            })
        }
    }
      , i = l => {
        n({
            ...t,
            [l.target.name]: l.target.value
        })
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Join CU Autonomous Racing"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-8",
                    children: "Be part of Colorado's premier autonomous racing team and help shape the future of transportation"
                }), a.jsxs("div", {
                    className: "flex gap-4 justify-center",
                    children: [a.jsxs(B, {
                        variant: "racing",
                        size: "lg",
                        children: [a.jsx(mo, {
                            className: "mr-2 h-4 w-4"
                        }), "Apply Now"]
                    }), a.jsx(B, {
                        variant: "outline",
                        size: "lg",
                        asChild: !0,
                        children: a.jsx(me, {
                            to: "/team",
                            children: "Meet the Team"
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsxs("div", {
                className: "container mx-auto",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold text-center mb-12",
                    children: "Why Join CU Autonomous Racing?"
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto",
                    children: s.map( (l, c) => a.jsx(H, {
                        className: "p-4 bg-gradient-card border-warning/20 hover:border-warning/40 transition-all",
                        children: a.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [a.jsx(t0, {
                                className: "h-5 w-5 text-warning shrink-0 mt-0.5"
                            }), a.jsx("span", {
                                className: "text-sm",
                                children: l
                            })]
                        })
                    }, c))
                })]
            })
        }), a.jsx("section", {
            className: "py-16 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto max-w-3xl",
                children: [a.jsx("h2", {
                    className: "text-3xl font-orbitron font-bold text-center mb-12",
                    children: "Frequently Asked Questions"
                }), a.jsx("div", {
                    className: "space-y-4",
                    children: [{
                        q: "Do I need prior experience to join?",
                        a: "No! We welcome students from all backgrounds and skill levels. We provide training and mentorship."
                    }, {
                        q: "What's the time commitment?",
                        a: "We expect members to contribute roughly 6 hours per week, but this can be flexible based on your schedule."
                    }, {
                        q: "Can I join multiple departments?",
                        a: "Yes! Many members contribute to multiple areas based on their interests and skills."
                    }].map( (l, c) => a.jsxs(H, {
                        className: "p-6 bg-gradient-card border-warning/20",
                        children: [a.jsx("h3", {
                            className: "font-bold mb-2",
                            children: l.q
                        }), a.jsx("p", {
                            className: "text-muted-foreground",
                            children: l.a
                        })]
                    }, c))
                })]
            })
        }), a.jsx(tn, {})]
    })
}
  , kA = () => {
    const e = [{
        icon: fl,
        title: "Research Partnerships",
        description: "Joint research projects in autonomous systems, machine learning, and sensor fusion."
    }, {
        icon: Sr,
        title: "Academic Collaboration",
        description: "Cross-university initiatives and knowledge sharing in autonomous vehicle development."
    }, {
        icon: s0,
        title: "Industry Innovation",
        description: "Partner with us to test new technologies and advance the field of autonomous racing."
    }, {
        icon: mo,
        title: "Technical Exchange",
        description: "Share expertise, resources, and facilities to accelerate autonomous vehicle research."
    }];
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsxs("main", {
            className: "pt-20",
            children: [a.jsxs("section", {
                className: "py-20 relative overflow-hidden",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-mesh opacity-5"
                }), a.jsx("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: a.jsxs("div", {
                        className: "text-center max-w-4xl mx-auto space-y-6",
                        children: [a.jsx("h1", {
                            className: "text-5xl md:text-6xl font-orbitron font-bold",
                            children: a.jsx("span", {
                                className: "bg-gradient-racing bg-clip-text text-transparent",
                                children: "Collaborate With Us"
                            })
                        }), a.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed",
                            children: "We welcome partnerships with universities, research labs, and innovators. Together we can push the boundaries of autonomous racing technology."
                        }), a.jsxs("div", {
                            className: "flex gap-4 justify-center pt-4",
                            children: [a.jsx(B, {
                                variant: "racing",
                                size: "lg",
                                children: "Start a Partnership"
                            }), a.jsx(B, {
                                variant: "outline",
                                size: "lg",
                                children: "Learn More"
                            })]
                        })]
                    })
                })]
            }), a.jsx("section", {
                className: "py-20 bg-background-secondary",
                children: a.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [a.jsxs("h2", {
                        className: "text-3xl md:text-4xl font-orbitron font-bold text-center mb-12",
                        children: ["Ways to ", a.jsx("span", {
                            className: "text-warning",
                            children: "Collaborate"
                        })]
                    }), a.jsx("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: e.map( (t, n) => a.jsx(H, {
                            className: "p-8 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-warning/50",
                            children: a.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [a.jsx("div", {
                                    className: "p-3 rounded-lg bg-warning/10",
                                    children: a.jsx(t.icon, {
                                        className: "h-8 w-8 text-warning"
                                    })
                                }), a.jsxs("div", {
                                    className: "space-y-2",
                                    children: [a.jsx("h3", {
                                        className: "text-xl font-semibold",
                                        children: t.title
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: t.description
                                    })]
                                })]
                            })
                        }, n))
                    })]
                })
            }), a.jsx("section", {
                className: "py-20",
                children: a.jsx("div", {
                    className: "container mx-auto px-4",
                    children: a.jsxs(H, {
                        className: "p-12 bg-card border-warning/20 max-w-3xl mx-auto text-center",
                        children: [a.jsxs("h3", {
                            className: "text-2xl font-orbitron font-bold mb-4",
                            children: ["Ready to ", a.jsx("span", {
                                className: "text-warning",
                                children: "Collaborate?"
                            })]
                        }), a.jsx("p", {
                            className: "text-muted-foreground mb-8",
                            children: "Reach out to discuss partnership opportunities and how we can work together to advance autonomous racing technology."
                        }), a.jsx(B, {
                            variant: "racing",
                            size: "lg",
                            children: "Contact Our Team"
                        })]
                    })
                })
            })]
        }), a.jsx(tn, {})]
    })
}
  , _A = () => {
    const e = [{
        icon: as,
        title: "Technical Guidance",
        description: "Share expertise in autonomous systems, AI/ML, robotics, and vehicle dynamics.",
        skills: ["ROS2", "Computer Vision", "Control Systems", "Sensor Fusion"]
    }, {
        icon: Sr,
        title: "Project Management",
        description: "Guide our team in agile methodologies, project planning, and team coordination.",
        skills: ["Agile", "Leadership", "Strategy", "Resource Planning"]
    }, {
        icon: s0,
        title: "Industry Insights",
        description: "Provide perspective on industry trends, career paths, and real-world applications.",
        skills: ["Career Development", "Industry Trends", "Networking", "Best Practices"]
    }, {
        icon: Xy,
        title: "Competition Strategy",
        description: "Help prepare our team for competitions with technical and strategic advice.",
        skills: ["Race Strategy", "Technical Rules", "Performance Optimization", "Safety"]
    }]
      , t = [{
        type: "Advisory",
        hours: "2-4 hours/month",
        description: "Strategic guidance and periodic reviews"
    }, {
        type: "Technical",
        hours: "5-10 hours/month",
        description: "Hands-on technical mentorship"
    }, {
        type: "Project-based",
        hours: "Flexible",
        description: "Support for specific projects or milestones"
    }];
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsxs("main", {
            className: "pt-20",
            children: [a.jsxs("section", {
                className: "py-20 relative overflow-hidden",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-mesh opacity-5"
                }), a.jsx("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: a.jsxs("div", {
                        className: "text-center max-w-4xl mx-auto space-y-6",
                        children: [a.jsx("h1", {
                            className: "text-5xl md:text-6xl font-orbitron font-bold",
                            children: a.jsx("span", {
                                className: "bg-gradient-racing bg-clip-text text-transparent",
                                children: "Become a Mentor"
                            })
                        }), a.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed",
                            children: "Industry professionals — share your knowledge and guide the next generation of autonomous vehicle engineers. Your expertise can help shape the future of autonomous racing."
                        }), a.jsxs("div", {
                            className: "flex gap-4 justify-center pt-4",
                            children: [a.jsx(B, {
                                variant: "racing",
                                size: "lg",
                                children: "Apply to Mentor"
                            }), a.jsx(B, {
                                variant: "outline",
                                size: "lg",
                                children: "Learn More"
                            })]
                        })]
                    })
                })]
            }), a.jsx("section", {
                className: "py-20 bg-background-secondary",
                children: a.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [a.jsxs("h2", {
                        className: "text-3xl md:text-4xl font-orbitron font-bold text-center mb-12",
                        children: ["Mentorship ", a.jsx("span", {
                            className: "text-warning",
                            children: "Opportunities"
                        })]
                    }), a.jsx("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: e.map( (n, r) => a.jsx(H, {
                            className: "p-8 bg-card hover:bg-card-hover transition-all duration-300 border-border hover:border-warning/50",
                            children: a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [a.jsx("div", {
                                        className: "p-3 rounded-lg bg-warning/10",
                                        children: a.jsx(n.icon, {
                                            className: "h-8 w-8 text-warning"
                                        })
                                    }), a.jsx("h3", {
                                        className: "text-xl font-semibold",
                                        children: n.title
                                    })]
                                }), a.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: n.description
                                }), a.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: n.skills.map( (s, o) => a.jsx(we, {
                                        variant: "secondary",
                                        className: "bg-secondary/20",
                                        children: s
                                    }, o))
                                })]
                            })
                        }, r))
                    })]
                })
            }), a.jsx("section", {
                className: "py-20",
                children: a.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [a.jsxs("h2", {
                        className: "text-3xl md:text-4xl font-orbitron font-bold text-center mb-12",
                        children: ["Flexible ", a.jsx("span", {
                            className: "text-warning",
                            children: "Time Commitment"
                        })]
                    }), a.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                        children: t.map( (n, r) => a.jsxs(H, {
                            className: "p-6 bg-card border-border text-center",
                            children: [a.jsx(Bo, {
                                className: "h-8 w-8 text-warning mx-auto mb-4"
                            }), a.jsx("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: n.type
                            }), a.jsx("p", {
                                className: "text-warning font-mono mb-2",
                                children: n.hours
                            }), a.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: n.description
                            })]
                        }, r))
                    })]
                })
            }), a.jsx("section", {
                className: "py-20 bg-background-secondary",
                children: a.jsx("div", {
                    className: "container mx-auto px-4",
                    children: a.jsxs(H, {
                        className: "p-12 bg-card border-warning/20 max-w-4xl mx-auto",
                        children: [a.jsxs("h3", {
                            className: "text-2xl font-orbitron font-bold mb-6 text-center",
                            children: ["Why Mentor ", a.jsx("span", {
                                className: "text-warning",
                                children: "Our Team?"
                            })]
                        }), a.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Shape the future of autonomous vehicle technology"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Work with passionate and talented engineering students"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Stay connected with cutting-edge research and innovation"
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Build your professional network and give back"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Recognition as a team mentor and advisor"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("div", {
                                        className: "w-2 h-2 rounded-full bg-warning mt-2"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "Invitations to team events and competitions"
                                    })]
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "text-center mt-8",
                            children: a.jsxs(B, {
                                variant: "racing",
                                size: "lg",
                                children: [a.jsx(Ql, {
                                    className: "h-4 w-4 mr-2"
                                }), "Contact Us to Get Started"]
                            })
                        })]
                    })
                })
            })]
        }), a.jsx(tn, {})]
    })
}
  , NA = () => {
    const {toast: e} = Di()
      , [t,n] = g.useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        tier: "",
        message: ""
    })
      , [r,s] = g.useState(!1)
      , o = l => {
        n({
            ...t,
            [l.target.name]: l.target.value
        })
    }
      , i = async l => {
        l.preventDefault(),
        s(!0);
        try {
            const {error: c} = await hb.from("sponsors").insert({
                name: t.name,
                company: t.company,
                email: t.email,
                phone: t.phone || null,
                tier: t.tier || null,
                message: t.message || null
            });
            if (c)
                throw c;
            e({
                title: "✅ Your sponsorship inquiry has been submitted!",
                description: "Our team will contact you within 24-48 hours."
            }),
            n({
                name: "",
                company: "",
                email: "",
                phone: "",
                tier: "",
                message: ""
            })
        } catch (c) {
            console.error("Error submitting sponsor inquiry:", c),
            e({
                title: "Error",
                description: "Failed to submit inquiry. Please try again.",
                variant: "destructive"
            })
        } finally {
            s(!1)
        }
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsx("section", {
            className: "pt-24 pb-12 px-4 bg-gradient-dark",
            children: a.jsxs("div", {
                className: "container mx-auto text-center",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-racing bg-clip-text text-transparent",
                    children: "Become a Sponsor"
                }), a.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                    children: "Partner with CU Autonomous Racing and support the future of autonomous vehicle technology"
                })]
            })
        }), a.jsx("section", {
            className: "py-16 px-4",
            children: a.jsx("div", {
                className: "container mx-auto max-w-2xl",
                children: a.jsxs(H, {
                    className: "p-8 bg-gradient-card border-warning/20",
                    children: [a.jsx("h2", {
                        className: "text-2xl font-orbitron font-bold mb-6",
                        children: "Sponsorship Inquiry Form"
                    }), a.jsxs("form", {
                        onSubmit: i,
                        className: "space-y-6",
                        children: [a.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [a.jsxs("div", {
                                children: [a.jsx(Ae, {
                                    htmlFor: "name",
                                    children: "Contact Name *"
                                }), a.jsx(ut, {
                                    id: "name",
                                    name: "name",
                                    value: t.name,
                                    onChange: o,
                                    required: !0,
                                    className: "mt-1"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx(Ae, {
                                    htmlFor: "company",
                                    children: "Company *"
                                }), a.jsx(ut, {
                                    id: "company",
                                    name: "company",
                                    value: t.company,
                                    onChange: o,
                                    required: !0,
                                    className: "mt-1"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [a.jsxs("div", {
                                children: [a.jsx(Ae, {
                                    htmlFor: "email",
                                    children: "Email *"
                                }), a.jsx(ut, {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    value: t.email,
                                    onChange: o,
                                    required: !0,
                                    className: "mt-1"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx(Ae, {
                                    htmlFor: "phone",
                                    children: "Phone Number"
                                }), a.jsx(ut, {
                                    id: "phone",
                                    name: "phone",
                                    type: "tel",
                                    value: t.phone,
                                    onChange: o,
                                    className: "mt-1"
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx(Ae, {
                                htmlFor: "tier",
                                children: "Preferred Sponsorship Tier"
                            }), a.jsxs(Ad, {
                                value: t.tier,
                                onValueChange: l => n({
                                    ...t,
                                    tier: l
                                }),
                                children: [a.jsx(jl, {
                                    className: "mt-1",
                                    children: a.jsx(Od, {
                                        placeholder: "Select a tier (optional)"
                                    })
                                }), a.jsxs(kl, {
                                    children: [a.jsx(nt, {
                                        value: "bronze",
                                        children: "Bronze ($1,000 - $5,000)"
                                    }), a.jsx(nt, {
                                        value: "silver",
                                        children: "Silver ($5,000 - $10,000)"
                                    }), a.jsx(nt, {
                                        value: "gold",
                                        children: "Gold ($10,000 - $25,000)"
                                    }), a.jsx(nt, {
                                        value: "platinum",
                                        children: "Platinum ($25,000+)"
                                    }), a.jsx(nt, {
                                        value: "custom",
                                        children: "Custom Partnership"
                                    })]
                                })]
                            })]
                        }), a.jsxs("div", {
                            children: [a.jsx(Ae, {
                                htmlFor: "message",
                                children: "Message"
                            }), a.jsx(Ti, {
                                id: "message",
                                name: "message",
                                value: t.message,
                                onChange: o,
                                placeholder: "Tell us about your interest in sponsoring CU Autonomous Racing...",
                                className: "mt-1",
                                rows: 5
                            })]
                        }), a.jsxs(B, {
                            type: "submit",
                            variant: "racing",
                            size: "lg",
                            className: "w-full",
                            disabled: r,
                            children: [a.jsx(o0, {
                                className: "mr-2 h-4 w-4"
                            }), r ? "Submitting..." : "Submit Sponsorship Inquiry"]
                        })]
                    })]
                })
            })
        }), a.jsx(tn, {})]
    })
}
;
var Sf = "Progress"
  , jf = 100
  , [CA,oO] = In(Sf)
  , [EA,TA] = CA(Sf)
  , fb = g.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: s, getValueLabel: o=PA, ...i} = e;
    (s || s === 0) && !Xm(s) && console.error(RA(`${s}`, "Progress"));
    const l = Xm(s) ? s : jf;
    r !== null && !Zm(r, l) && console.error(AA(`${r}`, "Progress"));
    const c = Zm(r, l) ? r : null
      , u = Cl(c) ? o(c, l) : void 0;
    return a.jsx(EA, {
        scope: n,
        value: c,
        max: l,
        children: a.jsx(ne.div, {
            "aria-valuemax": l,
            "aria-valuemin": 0,
            "aria-valuenow": Cl(c) ? c : void 0,
            "aria-valuetext": u,
            role: "progressbar",
            "data-state": gb(c, l),
            "data-value": c ?? void 0,
            "data-max": l,
            ...i,
            ref: t
        })
    })
}
);
fb.displayName = Sf;
var pb = "ProgressIndicator"
  , mb = g.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , s = TA(pb, n);
    return a.jsx(ne.div, {
        "data-state": gb(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...r,
        ref: t
    })
}
);
mb.displayName = pb;
function PA(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function gb(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function Cl(e) {
    return typeof e == "number"
}
function Xm(e) {
    return Cl(e) && !isNaN(e) && e > 0
}
function Zm(e, t) {
    return Cl(e) && !isNaN(e) && e <= t && e >= 0
}
function RA(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${jf}\`.`
}
function AA(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${jf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var vb = fb
  , OA = mb;
const yb = g.forwardRef( ({className: e, value: t, ...n}, r) => a.jsx(vb, {
    ref: r,
    className: ce("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: a.jsx(OA, {
        className: "h-full w-full flex-1 bg-warning transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
yb.displayName = vb.displayName;
const IA = "/assets/track1-BT8KkInV.jpg"
  , MA = "/assets/track2-DJK23GaA.jpg"
  , LA = "/assets/track3-CttMdlJE.jpg"
  , $A = "/assets/track4-C8kvq84x.jpg"
  , DA = () => {
    const e = [IA, MA, LA, $A]
      , [t,n] = g.useState(0)
      , [r,s] = g.useState([])
      , [o,i] = g.useState(0)
      , [l,c] = g.useState(0)
      , u = f => {
        const b = f.currentTarget.getBoundingClientRect()
          , v = (f.clientX - b.left) / b.width * 100
          , w = (f.clientY - b.top) / b.height * 100
          , x = {
            x: v,
            y: w,
            id: `marker-${Date.now()}`
        };
        s([...r, x]),
        i(o + 1);
        const m = document.createElement("div");
        m.className = "absolute pointer-events-none animate-ping",
        m.style.left = `${v}%`,
        m.style.top = `${w}%`,
        m.style.transform = "translate(-50%, -50%)",
        m.innerHTML = '<div class="w-8 h-8 rounded-full bg-warning/50"></div>',
        f.currentTarget.appendChild(m),
        setTimeout( () => m.remove(), 600)
    }
      , d = () => {
        t < e.length - 1 ? (n(t + 1),
        s([]),
        c(l + 1)) : (n(0),
        s([]),
        c(l + 1),
        ld({
            title: "Dataset Complete!",
            description: `You've labeled ${o} objects across all images. Great work!`
        }))
    }
      , h = () => {
        ld({
            title: "Thanks for your contribution! 🎉",
            description: "You've helped train our AI to better detect track obstacles!"
        }),
        c(l + 1)
    }
      , p = (t + 1) / e.length * 100;
    return a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsx(en, {}), a.jsxs("section", {
            className: "pt-24 pb-12 relative overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-accent/5"
            }), a.jsx("div", {
                className: "container mx-auto px-4 relative",
                children: a.jsxs("div", {
                    className: "text-center space-y-4 max-w-4xl mx-auto",
                    children: [a.jsxs(we, {
                        variant: "outline",
                        className: "mb-4",
                        children: [a.jsx(Gp, {
                            className: "mr-1 h-3 w-3"
                        }), "Interactive Training"]
                    }), a.jsx("h1", {
                        className: "text-4xl md:text-5xl font-orbitron font-bold",
                        children: a.jsx("span", {
                            className: "bg-gradient-warning bg-clip-text text-transparent",
                            children: "Train the AI"
                        })
                    }), a.jsx("p", {
                        className: "text-lg text-muted-foreground",
                        children: "Help us train our AI! Click on the cones or obstacles in each image to label them. This is how real-world machine learning datasets are created."
                    })]
                })
            })]
        }), a.jsx("section", {
            className: "pb-20",
            children: a.jsx("div", {
                className: "container mx-auto px-4",
                children: a.jsxs("div", {
                    className: "max-w-5xl mx-auto space-y-6",
                    children: [a.jsxs(H, {
                        className: "p-4",
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [a.jsx("span", {
                                className: "text-sm font-medium",
                                children: "Progress"
                            }), a.jsxs("span", {
                                className: "text-sm text-muted-foreground",
                                children: ["Image ", t + 1, " of ", e.length]
                            })]
                        }), a.jsx(yb, {
                            value: p,
                            className: "h-2"
                        })]
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [a.jsx(H, {
                            className: "p-4 bg-card hover:bg-card-hover transition-colors",
                            children: a.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [a.jsx(Gh, {
                                    className: "h-8 w-8 text-warning"
                                }), a.jsxs("div", {
                                    children: [a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Cones Identified"
                                    }), a.jsx("p", {
                                        className: "text-2xl font-bold",
                                        children: r.length
                                    })]
                                })]
                            })
                        }), a.jsx(H, {
                            className: "p-4 bg-card hover:bg-card-hover transition-colors",
                            children: a.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [a.jsx(as, {
                                    className: "h-8 w-8 text-accent"
                                }), a.jsxs("div", {
                                    children: [a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Labeled"
                                    }), a.jsx("p", {
                                        className: "text-2xl font-bold",
                                        children: o
                                    })]
                                })]
                            })
                        }), a.jsx(H, {
                            className: "p-4 bg-card hover:bg-card-hover transition-colors",
                            children: a.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [a.jsx(Gp, {
                                    className: "h-8 w-8 text-secondary"
                                }), a.jsxs("div", {
                                    children: [a.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Images Completed"
                                    }), a.jsx("p", {
                                        className: "text-2xl font-bold",
                                        children: l
                                    })]
                                })]
                            })
                        })]
                    }), a.jsxs(H, {
                        className: "overflow-hidden",
                        children: [a.jsxs("div", {
                            className: "relative cursor-crosshair select-none",
                            onClick: u,
                            children: [a.jsx("img", {
                                src: e[t],
                                alt: "Track with cones",
                                className: "w-full h-auto",
                                draggable: !1
                            }), r.map(f => a.jsx("div", {
                                className: "absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                                style: {
                                    left: `${f.x}%`,
                                    top: `${f.y}%`
                                },
                                children: a.jsxs("div", {
                                    className: "relative",
                                    children: [a.jsx("div", {
                                        className: "w-4 h-4 rounded-full bg-warning border-2 border-white shadow-lg animate-scale-in"
                                    }), a.jsx("div", {
                                        className: "absolute inset-0 w-4 h-4 rounded-full bg-warning/30 animate-ping"
                                    })]
                                })
                            }, f.id)), r.length === 0 && a.jsx("div", {
                                className: "absolute top-4 left-4 right-4",
                                children: a.jsx(we, {
                                    variant: "secondary",
                                    className: "bg-background/90 backdrop-blur",
                                    children: "Click on cones and obstacles to label them"
                                })
                            })]
                        }), a.jsx("div", {
                            className: "p-6 bg-card border-t border-border",
                            children: a.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [a.jsxs(B, {
                                    variant: "racing",
                                    size: "lg",
                                    className: "flex-1",
                                    onClick: h,
                                    disabled: r.length === 0,
                                    children: ["Submit Labels (", r.length, ")"]
                                }), a.jsxs(B, {
                                    variant: "outline",
                                    size: "lg",
                                    className: "flex-1",
                                    onClick: d,
                                    children: ["Next Image", a.jsx(ek, {
                                        className: "ml-2 h-4 w-4"
                                    })]
                                })]
                            })
                        })]
                    }), a.jsxs(H, {
                        className: "p-6 bg-gradient-to-r from-warning/5 to-accent/5",
                        children: [a.jsx("h3", {
                            className: "font-semibold mb-2",
                            children: "How This Helps"
                        }), a.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Every click you make helps our AI learn to identify track boundaries and obstacles. In real autonomous racing, this perception system runs hundreds of times per second to keep the car safely on track at high speeds. Your contributions directly improve the accuracy of our vision models!"
                        })]
                    })]
                })
            })
        }), a.jsx(tn, {})]
    })
}
  , FA = () => {
    const e = bo();
    return g.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    a.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: a.jsxs("div", {
            className: "text-center",
            children: [a.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), a.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), a.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , UA = new UC
  , zA = () => a.jsx(BC, {
    client: UA,
    children: a.jsxs(J0, {
        children: [a.jsx(Xk, {}), a.jsx(P_, {}), a.jsx(DE, {
            children: a.jsxs(RE, {
                children: [a.jsx(mt, {
                    path: "/",
                    element: a.jsx(u2, {})
                }), a.jsx(mt, {
                    path: "/about",
                    element: a.jsx(d2, {})
                }), a.jsx(mt, {
                    path: "/sponsors",
                    element: a.jsx(h2, {})
                }), a.jsx(mt, {
                    path: "/team",
                    element: a.jsx(f2, {})
                }), a.jsx(mt, {
                    path: "/projects",
                    element: a.jsx(P2, {})
                }), a.jsx(mt, {
                    path: "/events",
                    element: a.jsx(R2, {})
                }), a.jsx(mt, {
                    path: "/join",
                    element: a.jsx(jA, {})
                }), a.jsx(mt, {
                    path: "/collaborate",
                    element: a.jsx(kA, {})
                }), a.jsx(mt, {
                    path: "/mentors",
                    element: a.jsx(_A, {})
                }), a.jsx(mt, {
                    path: "/sponsor-contact",
                    element: a.jsx(NA, {})
                }), a.jsx(mt, {
                    path: "/train-ai",
                    element: a.jsx(DA, {})
                }), a.jsx(mt, {
                    path: "*",
                    element: a.jsx(FA, {})
                })]
            })
        })]
    })
});
Sy(document.getElementById("root")).render(a.jsx(zA, {}));
