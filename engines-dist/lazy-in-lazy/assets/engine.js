define('lazy-in-lazy/config/environment', ['exports'], function (exports) {
  var config;

  try {
    var metaName = 'lazy-in-lazy/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports['default'] = config;
});
define('lazy-in-lazy/engine', ['exports', 'ember-engines/engine', 'ember-engines/resolver', 'ember-load-initializers', 'lazy-in-lazy/config/environment'], function (exports, _emberEnginesEngine, _emberEnginesResolver, _emberLoadInitializers, _lazyInLazyConfigEnvironment) {
  var modulePrefix = _lazyInLazyConfigEnvironment['default'].modulePrefix;

  var Eng = _emberEnginesEngine['default'].extend({
    modulePrefix: modulePrefix,
    Resolver: _emberEnginesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(Eng, modulePrefix);

  exports['default'] = Eng;
});
define("lazy-in-lazy/lazy-in-lazy-import-target", ["exports"], function (exports) {
  exports["default"] = {};
});
define("lazy-in-lazy/routes/lazy-in-lazy-route", ["exports"], function (exports) {
  exports["default"] = {};
});
define('lazy-in-lazy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("lazy-in-lazy/templates/application", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "g9COECkw", "block": "{\"statements\":[[\"text\",\"lazy-in-lazy/addon/templates/application.hbs\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "lazy-in-lazy/templates/application.hbs" } });
});//# sourceMappingURL=engine.map
