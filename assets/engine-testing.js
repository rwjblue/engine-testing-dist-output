"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('engine-testing/app', ['exports', 'ember', 'ember-engines/resolver', 'ember-load-initializers', 'engine-testing/config/environment'], function (exports, _ember, _emberEnginesResolver, _emberLoadInitializers, _engineTestingConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _engineTestingConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _engineTestingConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberEnginesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _engineTestingConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('engine-testing/components/link-to-external', ['exports', 'ember-engines/components/link-to-external-component'], function (exports, _emberEnginesComponentsLinkToExternalComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesComponentsLinkToExternalComponent['default'];
    }
  });
});
define('engine-testing/config/asset-manifest', ['exports', 'engine-testing/config/environment'], function (exports, _engineTestingConfigEnvironment) {

  var modulePrefix = _engineTestingConfigEnvironment['default'].modulePrefix;
  var metaName = modulePrefix + '/config/asset-manifest';
  var nodeName = modulePrefix + '/config/node-asset-manifest';

  var config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (require.has(nodeName)) {
      config = require(nodeName)['default']; // eslint-disable-line
    } else {
        var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
        config = JSON.parse(unescape(rawConfig));
      }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports['default'] = config;
});
define('engine-testing/eager/tests/eager/eager-import-target.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - eager/eager-import-target.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'eager/eager-import-target.js should pass ESLint.\n');
  });
});
define('engine-testing/eager/tests/eager/engine.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - eager/engine.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'eager/engine.js should pass ESLint.\n');
  });
});
define('engine-testing/eager/tests/eager/routes.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - eager/routes.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'eager/routes.js should pass ESLint.\n');
  });
});
define('engine-testing/eager/tests/eager/routes/eager-route.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - eager/routes/eager-route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'eager/routes/eager-route.js should pass ESLint.\n');
  });
});
define('engine-testing/helpers/app-version', ['exports', 'ember', 'engine-testing/config/environment'], function (exports, _ember, _engineTestingConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _engineTestingConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('engine-testing/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('engine-testing/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('engine-testing/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'engine-testing/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _engineTestingConfigEnvironment) {
  var _config$APP = _engineTestingConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('engine-testing/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('engine-testing/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('engine-testing/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('engine-testing/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _emberEnginesInitializersEngines) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberEnginesInitializersEngines.initialize;
    }
  });
});
define('engine-testing/initializers/export-application-global', ['exports', 'ember', 'engine-testing/config/environment'], function (exports, _ember, _engineTestingConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_engineTestingConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _engineTestingConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_engineTestingConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('engine-testing/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('engine-testing/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('engine-testing/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("engine-testing/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('engine-testing/instance-initializers/load-asset-manifest', ['exports', 'engine-testing/config/asset-manifest'], function (exports, _engineTestingConfigAssetManifest) {
  exports.initialize = initialize;

  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */

  function initialize(instance) {
    var service = instance.lookup('service:asset-loader');
    service.pushManifest(_engineTestingConfigAssetManifest['default']);
  }

  exports['default'] = {
    name: 'load-asset-manifest',
    initialize: initialize
  };
});
define('engine-testing/lazy/tests/lazy/engine.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - lazy/engine.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lazy/engine.js should pass ESLint.\n');
  });
});
define('engine-testing/lazy/tests/lazy/lazy-import-target.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - lazy/lazy-import-target.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lazy/lazy-import-target.js should pass ESLint.\n');
  });
});
define('engine-testing/lazy/tests/lazy/routes.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - lazy/routes.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lazy/routes.js should pass ESLint.\n');
  });
});
define('engine-testing/lazy/tests/lazy/routes/lazy-route.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - lazy/routes/lazy-route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'lazy/routes/lazy-route.js should pass ESLint.\n');
  });
});
define('engine-testing/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('engine-testing/router', ['exports', 'ember', 'engine-testing/config/environment'], function (exports, _ember, _engineTestingConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _engineTestingConfigEnvironment['default'].locationType,
    rootURL: _engineTestingConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.mount('lazy');
    this.mount('eager');
  });

  exports['default'] = Router;
});
define('engine-testing/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('engine-testing/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _emberAssetLoaderServicesAssetLoader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAssetLoaderServicesAssetLoader['default'];
    }
  });
});
define("engine-testing/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "375I5LwR", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Host Application\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"eager\"],null,0],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Eager Engine\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "engine-testing/templates/application.hbs" } });
});
define('engine-testing/tree-invocation-order/tests/tree-invocation-order/engine.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - tree-invocation-order/engine.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree-invocation-order/engine.js should pass ESLint.\n');
  });
});
define('engine-testing/tree-invocation-order/tests/tree-invocation-order/routes.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - tree-invocation-order/routes.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree-invocation-order/routes.js should pass ESLint.\n');
  });
});
define('engine-testing/tree-invocation-order/tests/tree-invocation-order/routes/tree-invocation-order-route.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - tree-invocation-order/routes/tree-invocation-order-route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree-invocation-order/routes/tree-invocation-order-route.js should pass ESLint.\n');
  });
});
define('engine-testing/tree-invocation-order/tests/tree-invocation-order/tree-invocation-order-import-target.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - tree-invocation-order/tree-invocation-order-import-target.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree-invocation-order/tree-invocation-order-import-target.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('engine-testing/config/environment', ['ember'], function(Ember) {
  var prefix = 'engine-testing';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("engine-testing/app")["default"].create({"name":"engine-testing","version":"0.0.0+987f62a0"});
}

/* jshint ignore:end */
//# sourceMappingURL=engine-testing.map
