!(function(t) {
  function n(r) {
    if (e[r]) return e[r].exports;
    var u = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  var e = {};
  (n.m = t), (n.c = e), (n.i = function(t) {
    return t;
  }), (n.d = function(t, e, r) {
    n.o(t, e) ||
      Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
  }), (n.n = function(t) {
    var e = t && t.__esModule
      ? function() {
          return t.default;
        }
      : function() {
          return t;
        };
    return n.d(e, "a", e), e;
  }), (n.o = function(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }), (n.p = ""), n((n.s = 4));
})([
  function(t, n, e) {
    "use strict";
    var r = e(1);
    e(2), e(3);
    e.d(n, "a", function() {
      return r.a;
    });
  },
  function(t, n, e) {
    "use strict";
    n.a = "A";
  },
  function(t, n, e) {
    "use strict";
    x("B");
  },
  function(t, n, e) {
    "use strict";
  },
  function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = e(0);
    console.log(r.a);
  }
]);
