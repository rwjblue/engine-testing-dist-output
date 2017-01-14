define('lazy-in-eager/config/environment', ['exports'], function (exports) {
  var config;

  try {
    var metaName = 'lazy-in-eager/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports['default'] = config;
});
define('lazy-in-eager/engine', ['exports', 'ember-engines/engine', 'ember-engines/resolver', 'ember-load-initializers', 'lazy-in-eager/config/environment'], function (exports, _emberEnginesEngine, _emberEnginesResolver, _emberLoadInitializers, _lazyInEagerConfigEnvironment) {
  var modulePrefix = _lazyInEagerConfigEnvironment['default'].modulePrefix;

  var Eng = _emberEnginesEngine['default'].extend({
    modulePrefix: modulePrefix,
    Resolver: _emberEnginesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(Eng, modulePrefix);

  exports['default'] = Eng;
});
define("lazy-in-eager/lazy-in-eager-import-target", ["exports"], function (exports) {
  exports["default"] = {};
});
define("lazy-in-eager/routes/lazy-in-lazy-route", ["exports"], function (exports) {
  exports["default"] = {};
});
define('lazy-in-eager/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("lazy-in-eager/templates/application", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "TxCxJ/vO", "block": "{\"statements\":[[\"text\",\"lazy-in-eager/addon/templates/application.hbs\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "lazy-in-eager/templates/application.hbs" } });
});//# sourceMappingURL=engine.map
