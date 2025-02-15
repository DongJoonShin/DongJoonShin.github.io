(function (t, e, n, r) {
  function a() {
    return e && e.now ? e.now() : null;
  }
  if (!n.version) {
    n._events = [];
    n._errors = [];
    n._metadata = {};
    n._urlGroup = null;
    window.RM = n;
    n.install = function (e) {
      n._options = e;
      var a = t.createElement('script');
      a.async = true;
      a.crossOrigin = 'anonymous';
      a.src = r;
      var o = t.getElementsByTagName('script')[0];
      o.parentNode.insertBefore(a, o);
    };
    n.identify = function (t, e) {
      n._userId = t;
      n._identifyOptions = e;
    };
    n.sendEvent = function (t, e) {
      n._events.push({ eventName: t, metadata: e, time: a() });
    };
    n.setUrlGroup = function (t) {
      n._urlGroup = t;
    };
    n.track = function (t, e) {
      n._errors.push({ error: t, metadata: e, time: a() });
    };
    n.addMetadata = function (t) {
      n._metadata = Object.assign(n._metadata, t);
    };
  }
})(
  document,
  window.performance,
  window.RM || {},
  'https://cdn.requestmetrics.com/agent/current/rm.js'
);

RM.install({
  token: 'f5re5ga:e4xy3zq',
});
