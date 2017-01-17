define('tree-invocation-order/config/environment', ['exports'], function (exports) {
  var config;

  try {
    var metaName = 'tree-invocation-order/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports['default'] = config;
});
define('tree-invocation-order/engine', ['exports', 'ember-engines/engine', 'ember-resolver', 'ember-load-initializers', 'tree-invocation-order/config/environment'], function (exports, _emberEnginesEngine, _emberResolver, _emberLoadInitializers, _treeInvocationOrderConfigEnvironment) {
  var modulePrefix = _treeInvocationOrderConfigEnvironment['default'].modulePrefix;

  var Eng = _emberEnginesEngine['default'].extend({
    modulePrefix: modulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(Eng, modulePrefix);

  exports['default'] = Eng;
});
define("tree-invocation-order/routes/tree-invocation-order-route", ["exports"], function (exports) {
  exports["default"] = {};
});
define("tree-invocation-order/templates/application", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "oj+bZ0Be", "block": "{\"statements\":[[\"text\",\"tree-invocation-order/addon/templates/application.hbs\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "tree-invocation-order/templates/application.hbs" } });
});//# sourceMappingURL=engine.map
