// eager-in-lazy/vendor/js/thisimport.js

;// lazy/vendor/js/thisimport.js

;define('eager-in-lazy/config/environment', ['exports'], function (exports) {
  var config;

  try {
    var metaName = 'eager-in-lazy/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports['default'] = config;
});
define("eager-in-lazy/eager-in-lazy-import-target", ["exports"], function (exports) {
  exports["default"] = {};
});
define('eager-in-lazy/engine', ['exports', 'ember-engines/engine', 'ember-engines/resolver', 'ember-load-initializers', 'eager-in-lazy/config/environment'], function (exports, _emberEnginesEngine, _emberEnginesResolver, _emberLoadInitializers, _eagerInLazyConfigEnvironment) {
  var modulePrefix = _eagerInLazyConfigEnvironment['default'].modulePrefix;

  var Eng = _emberEnginesEngine['default'].extend({
    modulePrefix: modulePrefix,
    Resolver: _emberEnginesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(Eng, modulePrefix);

  exports['default'] = Eng;
});
define("eager-in-lazy/routes/eager-in-lazy-route", ["exports"], function (exports) {
  exports["default"] = {};
});
define('eager-in-lazy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("eager-in-lazy/templates/application", ["exports"], function (exports) {
  exports.default = Ember.HTMLBars.template({ "id": "7iRtuSu+", "block": "{\"statements\":[[\"text\",\"eager-in-lazy/addon/templates/application.hbs\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "eager-in-lazy/templates/application.hbs" } });
});
define('ember-ajax/ajax-request', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  var EmberObject = _ember['default'].Object;
  exports['default'] = EmberObject.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/errors', ['exports', 'ember'], function (exports, _ember) {
  exports.AjaxError = AjaxError;
  exports.InvalidError = InvalidError;
  exports.UnauthorizedError = UnauthorizedError;
  exports.ForbiddenError = ForbiddenError;
  exports.BadRequestError = BadRequestError;
  exports.NotFoundError = NotFoundError;
  exports.TimeoutError = TimeoutError;
  exports.AbortError = AbortError;
  exports.ConflictError = ConflictError;
  exports.ServerError = ServerError;
  exports.isAjaxError = isAjaxError;
  exports.isUnauthorizedError = isUnauthorizedError;
  exports.isForbiddenError = isForbiddenError;
  exports.isInvalidError = isInvalidError;
  exports.isBadRequestError = isBadRequestError;
  exports.isNotFoundError = isNotFoundError;
  exports.isTimeoutError = isTimeoutError;
  exports.isAbortError = isAbortError;
  exports.isConflictError = isConflictError;
  exports.isServerError = isServerError;
  exports.isSuccess = isSuccess;
  var EmberError = _ember['default'].Error;

  /**
   * @class AjaxError
   * @private
   */

  function AjaxError(errors) {
    var message = arguments.length <= 1 || arguments[1] === undefined ? 'Ajax operation failed' : arguments[1];

    EmberError.call(this, message);

    this.errors = errors || [{
      title: 'Ajax Error',
      detail: message
    }];
  }

  AjaxError.prototype = Object.create(EmberError.prototype);

  /**
   * @class InvalidError
   * @public
   * @extends AjaxError
   */

  function InvalidError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because it was invalid');
  }

  InvalidError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class UnauthorizedError
   * @public
   * @extends AjaxError
   */

  function UnauthorizedError(errors) {
    AjaxError.call(this, errors, 'Ajax authorization failed');
  }

  UnauthorizedError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ForbiddenError
   * @public
   * @extends AjaxError
   */

  function ForbiddenError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because user is not permitted to perform this operation.');
  }

  ForbiddenError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class BadRequestError
   * @public
   * @extends AjaxError
   */

  function BadRequestError(errors) {
    AjaxError.call(this, errors, 'Request was formatted incorrectly.');
  }

  BadRequestError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class NotFoundError
   * @public
   * @extends AjaxError
   */

  function NotFoundError(errors) {
    AjaxError.call(this, errors, 'Resource was not found.');
  }

  NotFoundError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class TimeoutError
   * @public
   * @extends AjaxError
   */

  function TimeoutError() {
    AjaxError.call(this, null, 'The ajax operation timed out');
  }

  TimeoutError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class AbortError
   * @public
   * @extends AjaxError
   */

  function AbortError() {
    AjaxError.call(this, null, 'The ajax operation was aborted');
  }

  AbortError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ConflictError
   * @public
   * @extends AjaxError
   */

  function ConflictError(errors) {
    AjaxError.call(this, errors, 'The ajax operation failed due to a conflict');
  }

  ConflictError.prototype = Object.create(AjaxError.prototype);

  /**
   * @class ServerError
   * @public
   * @extends AjaxError
   */

  function ServerError(errors) {
    AjaxError.call(this, errors, 'Request was rejected due to server error');
  }

  ServerError.prototype = Object.create(AjaxError.prototype);

  /**
   * Checks if the given error is or inherits from AjaxError
   *
   * @method isAjaxError
   * @public
   * @param  {Error} error
   * @return {Boolean}
   */

  function isAjaxError(error) {
    return error instanceof AjaxError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * unauthorized request error
   *
   * @method isUnauthorizedError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isUnauthorizedError(error) {
    if (isAjaxError(error)) {
      return error instanceof UnauthorizedError;
    } else {
      return error === 401;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a forbidden
   * request error
   *
   * @method isForbiddenError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isForbiddenError(error) {
    if (isAjaxError(error)) {
      return error instanceof ForbiddenError;
    } else {
      return error === 403;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents an invalid
   * request error
   *
   * @method isInvalidError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isInvalidError(error) {
    if (isAjaxError(error)) {
      return error instanceof InvalidError;
    } else {
      return error === 422;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a bad request
   * error
   *
   * @method isBadRequestError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isBadRequestError(error) {
    if (isAjaxError(error)) {
      return error instanceof BadRequestError;
    } else {
      return error === 400;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "not found" error
   *
   * @method isNotFoundError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isNotFoundError(error) {
    if (isAjaxError(error)) {
      return error instanceof NotFoundError;
    } else {
      return error === 404;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * "timeout" error
   *
   * @method isTimeoutError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isTimeoutError(error) {
    return error instanceof TimeoutError;
  }

  /**
   * Checks if the given status code or AjaxError object represents an
   * "abort" error
   *
   * @method isAbortError
   * @public
   * @param  {AjaxError} error
   * @return {Boolean}
   */

  function isAbortError(error) {
    return error instanceof AbortError;
  }

  /**
   * Checks if the given status code or AjaxError object represents a
   * conflict error
   *
   * @method isConflictError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isConflictError(error) {
    if (isAjaxError(error)) {
      return error instanceof ConflictError;
    } else {
      return error === 409;
    }
  }

  /**
   * Checks if the given status code or AjaxError object represents a server error
   *
   * @method isServerError
   * @public
   * @param  {Number | AjaxError} error
   * @return {Boolean}
   */

  function isServerError(error) {
    if (isAjaxError(error)) {
      return error instanceof ServerError;
    } else {
      return error >= 500 && error < 600;
    }
  }

  /**
   * Checks if the given status code represents a successful request
   *
   * @method isSuccess
   * @public
   * @param  {Number} status
   * @return {Boolean}
   */

  function isSuccess(status) {
    var s = parseInt(status, 10);
    return s >= 200 && s < 300 || s === 304;
  }
});
define('ember-ajax/index', ['exports', 'ember-ajax/request'], function (exports, _emberAjaxRequest) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxRequest['default'];
    }
  });
});
define('ember-ajax/mixins/ajax-request', ['exports', 'ember', 'ember-ajax/errors', 'ember-ajax/utils/parse-response-headers', 'ember-ajax/utils/get-header', 'ember-ajax/utils/url-helpers', 'ember-ajax/utils/ajax'], function (exports, _ember, _emberAjaxErrors, _emberAjaxUtilsParseResponseHeaders, _emberAjaxUtilsGetHeader, _emberAjaxUtilsUrlHelpers, _emberAjaxUtilsAjax) {
  var $ = _ember['default'].$;
  var A = _ember['default'].A;
  var EmberError = _ember['default'].Error;
  var Logger = _ember['default'].Logger;
  var Mixin = _ember['default'].Mixin;
  var Promise = _ember['default'].RSVP.Promise;
  var Test = _ember['default'].Test;
  var get = _ember['default'].get;
  var isArray = _ember['default'].isArray;
  var isEmpty = _ember['default'].isEmpty;
  var isNone = _ember['default'].isNone;
  var merge = _ember['default'].merge;
  var run = _ember['default'].run;
  var runInDebug = _ember['default'].runInDebug;
  var testing = _ember['default'].testing;
  var warn = _ember['default'].warn;

  var JSONAPIContentType = /^application\/vnd\.api\+json/i;

  function isJSONAPIContentType(header) {
    if (isNone(header)) {
      return false;
    }
    return !!header.match(JSONAPIContentType);
  }

  function startsWithSlash(string) {
    return string.charAt(0) === '/';
  }

  function endsWithSlash(string) {
    return string.charAt(string.length - 1) === '/';
  }

  function stripSlashes(path) {
    // make sure path starts with `/`
    if (startsWithSlash(path)) {
      path = path.substring(1);
    }

    // remove end `/`
    if (endsWithSlash(path)) {
      path = path.slice(0, -1);
    }
    return path;
  }

  function isObject(object) {
    return typeof object === 'object';
  }

  function isString(object) {
    return typeof object === 'string';
  }

  var pendingRequestCount = 0;
  if (testing) {
    Test.registerWaiter(function () {
      return pendingRequestCount === 0;
    });
  }

  /**
   * AjaxRequest Mixin
   *
   * @public
   * @mixin
   */
  exports['default'] = Mixin.create({

    /**
     * The default value for the request `contentType`
     *
     * For now, defaults to the same value that jQuery would assign.  In the
     * future, the default value will be for JSON requests.
     * @property {string} contentType
     * @public
     * @default
     */
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    /**
     * Headers to include on the request
     *
     * Some APIs require HTTP headers, e.g. to provide an API key. Arbitrary
     * headers can be set as key/value pairs on the `RESTAdapter`'s `headers`
     * object and Ember Data will send them along with each ajax request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * export default AjaxService.extend({
     *   headers: {
     *     'API_KEY': 'secret key',
     *     'ANOTHER_HEADER': 'Some header value'
     *   }
     * });
     * ```
     *
     * `headers` can also be used as a computed property to support dynamic
     * headers.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(this, 'session.authToken'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   })
     * });
     * ```
     *
     * In some cases, your dynamic headers may require data from some object
     * outside of Ember's observer system (for example `document.cookie`). You
     * can use the `volatile` function to set the property into a non-cached mode
     * causing the headers to be recomputed with every request.
     *
     * ```javascript
     * // app/services/ajax.js
     * import Ember from 'ember';
     * import AjaxService from 'ember-ajax/services/ajax';
     *
     * const {
     *   computed,
     *   get,
     *   inject: { service }
     * } = Ember;
     *
     * export default AjaxService.extend({
     *   session: service(),
     *   headers: computed('session.authToken', function() {
     *     return {
     *       'API_KEY': get(document.cookie.match(/apiKey\=([^;]*)/), '1'),
     *       'ANOTHER_HEADER': 'Some header value'
     *     };
     *   }).volatile()
     * });
     * ```
     *
     * @property {Object} headers
     * @public
     * @default
     */
    headers: {},

    /**
     * Make an AJAX request, ignoring the raw XHR object and dealing only with
     * the response
     *
     * @method request
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    request: function request(url, options) {
      var _this = this;

      var hash = this.options(url, options);
      return new Promise(function (resolve, reject) {
        _this._makeRequest(hash).then(function (_ref) {
          var response = _ref.response;

          resolve(response);
        })['catch'](function (_ref2) {
          var response = _ref2.response;

          reject(response);
        });
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url + ' response');
    },

    /**
     * Make an AJAX request, returning the raw XHR object along with the response
     *
     * @method raw
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    raw: function raw(url, options) {
      var hash = this.options(url, options);
      return this._makeRequest(hash);
    },

    /**
     * Shared method to actually make an AJAX request
     *
     * @method _makeRequest
     * @private
     * @param {Object} hash The options for the request
     * @param {string} hash.url The URL to make the request to
     * @return {Promise} The result of the request
     */
    _makeRequest: function _makeRequest(hash) {
      var _this2 = this;

      var requestData = {
        type: hash.type,
        url: hash.url
      };

      if (isJSONAPIContentType((0, _emberAjaxUtilsGetHeader['default'])(hash.headers, 'Content-Type')) && requestData.type !== 'GET') {
        if (typeof hash.data === 'object') {
          hash.data = JSON.stringify(hash.data);
        }
      }

      return new Promise(function (resolve, reject) {
        hash.success = function (payload, textStatus, jqXHR) {
          var response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);

          pendingRequestCount = pendingRequestCount - 1;

          if ((0, _emberAjaxErrors.isAjaxError)(response)) {
            run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          } else {
            run.join(null, resolve, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, response: response });
          }
        };

        hash.error = function (jqXHR, textStatus, errorThrown) {
          runInDebug(function () {
            var message = 'The server returned an empty string for ' + requestData.type + ' ' + requestData.url + ', which cannot be parsed into a valid JSON. Return either null or {}.';
            var validJSONString = !(textStatus === 'parsererror' && jqXHR.responseText === '');
            warn(message, validJSONString, {
              id: 'ds.adapter.returned-empty-string-as-JSON'
            });
          });

          var payload = _this2.parseErrorResponse(jqXHR.responseText) || errorThrown;
          var response = undefined;

          if (errorThrown instanceof Error) {
            response = errorThrown;
          } else if (textStatus === 'timeout') {
            response = new _emberAjaxErrors.TimeoutError();
          } else if (textStatus === 'abort') {
            response = new _emberAjaxErrors.AbortError();
          } else {
            response = _this2.handleResponse(jqXHR.status, (0, _emberAjaxUtilsParseResponseHeaders['default'])(jqXHR.getAllResponseHeaders()), payload, requestData);
          }

          pendingRequestCount = pendingRequestCount - 1;

          run.join(null, reject, { payload: payload, textStatus: textStatus, jqXHR: jqXHR, errorThrown: errorThrown, response: response });
        };

        pendingRequestCount = pendingRequestCount + 1;

        (0, _emberAjaxUtilsAjax['default'])(hash);
      }, 'ember-ajax: ' + hash.type + ' ' + hash.url);
    },

    /**
     * calls `request()` but forces `options.type` to `POST`
     *
     * @method post
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    post: function post(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'POST'));
    },

    /**
     * calls `request()` but forces `options.type` to `PUT`
     *
     * @method put
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    put: function put(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PUT'));
    },

    /**
     * calls `request()` but forces `options.type` to `PATCH`
     *
     * @method patch
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    patch: function patch(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'PATCH'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * @method del
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    del: function del(url, options) {
      return this.request(url, this._addTypeToOptionsFor(options, 'DELETE'));
    },

    /**
     * calls `request()` but forces `options.type` to `DELETE`
     *
     * Alias for `del()`
     *
     * @method delete
     * @public
     * @param {string} url The url to make a request to
     * @param {Object} options The options for the request
     * @return {Promise} The result of the request
     */
    'delete': function _delete() {
      return this.del.apply(this, arguments);
    },

    /**
     * Wrap the `.get` method so that we issue a warning if
     *
     * Since `.get` is both an AJAX pattern _and_ an Ember pattern, we want to try
     * to warn users when they try using `.get` to make a request
     *
     * @method get
     * @public
     */
    get: function get(url) {
      if (arguments.length > 1 || url.charAt(0) === '/') {
        throw new EmberError('It seems you tried to use `.get` to make a request! Use the `.request` method instead.');
      }
      return this._super.apply(this, arguments);
    },

    /**
     * Manipulates the options hash to include the HTTP method on the type key
     *
     * @method _addTypeToOptionsFor
     * @private
     * @param {Object} options The original request options
     * @param {string} method The method to enforce
     * @return {Object} The new options, with the method set
     */
    _addTypeToOptionsFor: function _addTypeToOptionsFor(options, method) {
      options = options || {};
      options.type = method;
      return options;
    },

    /**
     * Get the full "headers" hash, combining the service-defined headers with
     * the ones provided for the request
     *
     * @method _getFullHeadersHash
     * @private
     * @param {Object} headers
     * @return {Object}
     */
    _getFullHeadersHash: function _getFullHeadersHash(headers) {
      var classHeaders = get(this, 'headers');
      var _headers = merge({}, classHeaders);
      return merge(_headers, headers);
    },

    /**
     * @method options
     * @private
     * @param {string} url
     * @param {Object} options
     * @return {Object}
     */
    options: function options(url) {
      var _options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _options.url = this._buildURL(url, _options);
      _options.type = _options.type || 'GET';
      _options.dataType = _options.dataType || 'json';
      _options.contentType = isEmpty(_options.contentType) ? get(this, 'contentType') : _options.contentType;

      if (this._shouldSendHeaders(_options)) {
        _options.headers = this._getFullHeadersHash(_options.headers);
      } else {
        _options.headers = _options.headers || {};
      }

      return _options;
    },

    /**
     * Build a URL for a request
     *
     * If the provided `url` is deemed to be a complete URL, it will be returned
     * directly.  If it is not complete, then the segment provided will be combined
     * with the `host` and `namespace` options of the request class to create the
     * full URL.
     *
     * @private
     * @param {string} url the url, or url segment, to request
     * @param {Object} [options={}] the options for the request being made
     * @param {string} [options.host] the host to use for this request
     * @returns {string} the URL to make a request to
     */
    _buildURL: function _buildURL(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);

      // If the URL passed is not relative, return the whole URL
      if (urlObject.isComplete) {
        return urlObject.href;
      }

      var host = options.host || get(this, 'host');
      var namespace = options.namespace || get(this, 'namespace');
      if (namespace) {
        namespace = stripSlashes(namespace);
      }

      // If the URL has already been constructed (presumably, by Ember Data), then we should just leave it alone
      var hasNamespaceRegex = new RegExp('^(/)?' + namespace);
      if (hasNamespaceRegex.test(url)) {
        return url;
      }

      var fullUrl = '';
      // Add the host, if it exists
      if (host) {
        fullUrl += host;
      }
      // Add the namespace, if it exists
      if (namespace) {
        if (!endsWithSlash(fullUrl)) {
          fullUrl += '/';
        }
        fullUrl += namespace;
      }
      // Add the URL segment, if it exists
      if (url) {
        if (!startsWithSlash(url)) {
          fullUrl += '/';
        }
        fullUrl += url;
      }

      return fullUrl;
    },

    /**
     * Takes an ajax response, and returns the json payload or an error.
     *
     * By default this hook just returns the json payload passed to it.
     * You might want to override it in two cases:
     *
     * 1. Your API might return useful results in the response headers.
     *    Response headers are passed in as the second argument.
     *
     * 2. Your API might return errors as successful responses with status code
     *    200 and an Errors text or object.
     *
     * @method handleResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object | AjaxError} response
     */
    handleResponse: function handleResponse(status, headers, payload, requestData) {
      payload = payload === null || payload === undefined ? {} : payload;
      var errors = this.normalizeErrorResponse(status, headers, payload);

      if (this.isSuccess(status, headers, payload)) {
        return payload;
      } else if (this.isUnauthorizedError(status, headers, payload)) {
        return new _emberAjaxErrors.UnauthorizedError(errors);
      } else if (this.isForbiddenError(status, headers, payload)) {
        return new _emberAjaxErrors.ForbiddenError(errors);
      } else if (this.isInvalidError(status, headers, payload)) {
        return new _emberAjaxErrors.InvalidError(errors);
      } else if (this.isBadRequestError(status, headers, payload)) {
        return new _emberAjaxErrors.BadRequestError(errors);
      } else if (this.isNotFoundError(status, headers, payload)) {
        return new _emberAjaxErrors.NotFoundError(errors);
      } else if (this.isAbortError(status, headers, payload)) {
        return new _emberAjaxErrors.AbortError(errors);
      } else if (this.isConflictError(status, headers, payload)) {
        return new _emberAjaxErrors.ConflictError(errors);
      } else if (this.isServerError(status, headers, payload)) {
        return new _emberAjaxErrors.ServerError(errors);
      }

      var detailedMessage = this.generateDetailedMessage(status, headers, payload, requestData);
      return new _emberAjaxErrors.AjaxError(errors, detailedMessage);
    },

    /**
     * Match the host to a provided array of strings or regexes that can match to a host
     *
     * @method matchHosts
     * @private
     * @param {string} host the host you are sending too
     * @param {RegExp | string} matcher a string or regex that you can match the host to.
     * @returns {Boolean} if the host passed the matcher
     */
    _matchHosts: function _matchHosts(host, matcher) {
      if (matcher.constructor === RegExp) {
        return matcher.test(host);
      } else if (typeof matcher === 'string') {
        return matcher === host;
      } else {
        Logger.warn('trustedHosts only handles strings or regexes.', matcher, 'is neither.');
        return false;
      }
    },

    /**
     * Determine whether the headers should be added for this request
     *
     * This hook is used to help prevent sending headers to every host, regardless
     * of the destination, since this could be a security issue if authentication
     * tokens are accidentally leaked to third parties.
     *
     * To avoid that problem, subclasses should utilize the `headers` computed
     * property to prevent authentication from being sent to third parties, or
     * implement this hook for more fine-grain control over when headers are sent.
     *
     * By default, the headers are sent if the host of the request matches the
     * `host` property designated on the class.
     *
     * @method _shouldSendHeaders
     * @private
     * @property {Object} hash request options hash
     * @returns {Boolean} whether or not headers should be sent
     */
    _shouldSendHeaders: function _shouldSendHeaders(_ref3) {
      var _this3 = this;

      var url = _ref3.url;
      var host = _ref3.host;

      url = url || '';
      host = host || get(this, 'host') || '';

      var urlObject = new _emberAjaxUtilsUrlHelpers.RequestURL(url);
      var trustedHosts = get(this, 'trustedHosts') || A();

      // Add headers on relative URLs
      if (!urlObject.isComplete) {
        return true;
      } else if (trustedHosts.find(function (matcher) {
        return _this3._matchHosts(urlObject.hostname, matcher);
      })) {
        return true;
      }

      // Add headers on matching host
      var hostObject = new _emberAjaxUtilsUrlHelpers.RequestURL(host);
      return urlObject.sameHost(hostObject);
    },

    /**
     * Generates a detailed ("friendly") error message, with plenty
     * of information for debugging (good luck!)
     *
     * @method generateDetailedMessage
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @param  {Object} requestData the original request information
     * @return {Object} request information
     */
    generateDetailedMessage: function generateDetailedMessage(status, headers, payload, requestData) {
      var shortenedPayload = undefined;
      var payloadContentType = (0, _emberAjaxUtilsGetHeader['default'])(headers, 'Content-Type') || 'Empty Content-Type';

      if (payloadContentType.toLowerCase() === 'text/html' && payload.length > 250) {
        shortenedPayload = '[Omitted Lengthy HTML]';
      } else {
        shortenedPayload = JSON.stringify(payload);
      }

      var requestDescription = requestData.type + ' ' + requestData.url;
      var payloadDescription = 'Payload (' + payloadContentType + ')';

      return ['Ember AJAX Request ' + requestDescription + ' returned a ' + status, payloadDescription, shortenedPayload].join('\n');
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an authorized error.
     *
     * @method isUnauthorizedError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isUnauthorizedError: function isUnauthorizedError(status) {
      return (0, _emberAjaxErrors.isUnauthorizedError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a forbidden error.
     *
     * @method isForbiddenError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isForbiddenError: function isForbiddenError(status) {
      return (0, _emberAjaxErrors.isForbiddenError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a an invalid error.
     *
     * @method isInvalidError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isInvalidError: function isInvalidError(status) {
      return (0, _emberAjaxErrors.isInvalidError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a bad request error.
     *
     * @method isBadRequestError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isBadRequestError: function isBadRequestError(status) {
      return (0, _emberAjaxErrors.isBadRequestError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "not found" error.
     *
     * @method isNotFoundError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isNotFoundError: function isNotFoundError(status) {
      return (0, _emberAjaxErrors.isNotFoundError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is an "abort" error.
     *
     * @method isAbortError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isAbortError: function isAbortError(status) {
      return (0, _emberAjaxErrors.isAbortError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a "conflict" error.
     *
     * @method isConflictError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isConflictError: function isConflictError(status) {
      return (0, _emberAjaxErrors.isConflictError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a server error.
     *
     * @method isServerError
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isServerError: function isServerError(status) {
      return (0, _emberAjaxErrors.isServerError)(status);
    },

    /**
     * Default `handleResponse` implementation uses this hook to decide if the
     * response is a success.
     *
     * @method isSuccess
     * @private
     * @param {Number} status
     * @param {Object} headers
     * @param {Object} payload
     * @return {Boolean}
     */
    isSuccess: function isSuccess(status) {
      return (0, _emberAjaxErrors.isSuccess)(status);
    },

    /**
     * @method parseErrorResponse
     * @private
     * @param {string} responseText
     * @return {Object}
     */
    parseErrorResponse: function parseErrorResponse(responseText) {
      try {
        return JSON.parse(responseText);
      } catch (e) {
        return responseText;
      }
    },

    /**
     * Normalize the error from the server into the same format
     *
     * The format we normalize to is based on the JSON API specification.  The
     * return value should be an array of objects that match the format they
     * describe. More details about the object format can be found
     * [here](http://jsonapi.org/format/#error-objects)
     *
     * The basics of the format are as follows:
     *
     * ```javascript
     * [
     *   {
     *     status: 'The status code for the error',
     *     title: 'The human-readable title of the error'
     *     detail: 'The human-readable details of the error'
     *   }
     * ]
     * ```
     *
     * In cases where the server returns an array, then there should be one item
     * in the array for each of the payload.  If your server returns a JSON API
     * formatted payload already, it will just be returned directly.
     *
     * If your server returns something other than a JSON API format, it's
     * suggested that you override this method to convert your own errors into the
     * one described above.
     *
     * @method normalizeErrorResponse
     * @private
     * @param  {Number} status
     * @param  {Object} headers
     * @param  {Object} payload
     * @return {Array} An array of JSON API-formatted error objects
     */
    normalizeErrorResponse: function normalizeErrorResponse(status, headers, payload) {
      if (isArray(payload.errors)) {
        return payload.errors.map(function (error) {
          if (isObject(error)) {
            var ret = merge({}, error);
            ret.status = '' + error.status;
            return ret;
          } else {
            return {
              status: '' + status,
              title: error
            };
          }
        });
      } else if (isArray(payload)) {
        return payload.map(function (error) {
          if (isObject(error)) {
            return {
              status: '' + status,
              title: error.title || 'The backend responded with an error',
              detail: error
            };
          } else {
            return {
              status: '' + status,
              title: '' + error
            };
          }
        });
      } else {
        if (isString(payload)) {
          return [{
            status: '' + status,
            title: payload
          }];
        } else {
          return [{
            status: '' + status,
            title: payload.title || 'The backend responded with an error',
            detail: payload
          }];
        }
      }
    }
  });
});
define('ember-ajax/mixins/ajax-support', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var service = _ember['default'].inject.service;
  var alias = _ember['default'].computed.alias;
  exports['default'] = Mixin.create({

    /**
     * The AJAX service to send requests through
     *
     * @property {AjaxService} ajaxService
     * @public
     */
    ajaxService: service('ajax'),

    /**
     * @property {string} host
     * @public
     */
    host: alias('ajaxService.host'),

    /**
     * @property {string} namespace
     * @public
     */
    namespace: alias('ajaxService.namespace'),

    /**
     * @property {object} headers
     * @public
     */
    headers: alias('ajaxService.headers'),

    ajax: function ajax(url, type) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var augmentedOptions = this.ajaxOptions.apply(this, arguments);

      return this.get('ajaxService').request(url, augmentedOptions);
    }
  });
});
define('ember-ajax/raw', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  exports['default'] = raw;

  /**
   * Same as `request` except it resolves an object with
   *
   *   {response, textStatus, jqXHR}
   *
   * Useful if you need access to the jqXHR object for headers, etc.
   *
   * @public
   */

  function raw() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.raw.apply(ajax, arguments);
  }
});
define('ember-ajax/request', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  exports['default'] = request;

  /**
   * Helper function that allows you to use the default `ember-ajax` to make
   * requests without using the service.
   *
   * Note: Unlike `ic-ajax`'s `request` helper function, this will *not* return a
   * jqXHR object in the error handler.  If you need jqXHR, you can use the `raw`
   * function instead.
   *
   * @public
   */

  function request() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.request.apply(ajax, arguments);
  }
});
define('ember-ajax/services/ajax', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  var Service = _ember['default'].Service;
  exports['default'] = Service.extend(_emberAjaxMixinsAjaxRequest['default']);
});
define('ember-ajax/utils/ajax', ['exports', 'ember', 'ember-ajax/utils/is-fastboot'], function (exports, _ember, _emberAjaxUtilsIsFastboot) {
  var $ = _ember['default'].$;
  exports['default'] = _emberAjaxUtilsIsFastboot['default'] ? najax : $.ajax;
});
/* global najax */
define('ember-ajax/utils/get-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = getHeader;
  var A = _ember['default'].A;
  var isNone = _ember['default'].isNone;

  /**
   * Do a case-insensitive lookup of an HTTP header
   *
   * @function getHeader
   * @private
   * @param {Object} headers
   * @param {string} name
   * @return {string}
   */

  function getHeader(headers, name) {
    if (isNone(headers) || isNone(name)) {
      return; // ask for nothing, get nothing.
    }

    var matchedKey = A(Object.keys(headers)).find(function (key) {
      return key.toLowerCase() === name.toLowerCase();
    });

    return headers[matchedKey];
  }
});
define('ember-ajax/utils/is-fastboot', ['exports'], function (exports) {
  /* global FastBoot */
  var isFastBoot = typeof FastBoot !== 'undefined';
  exports['default'] = isFastBoot;
});
define('ember-ajax/utils/parse-response-headers', ['exports'], function (exports) {
  exports['default'] = parseResponseHeaders;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  var CLRF = '\r\n';

  function parseResponseHeaders(headersString) {
    var headers = {};

    if (!headersString) {
      return headers;
    }

    var headerPairs = headersString.split(CLRF);

    headerPairs.forEach(function (header) {
      var _header$split = header.split(':');

      var _header$split2 = _toArray(_header$split);

      var field = _header$split2[0];

      var value = _header$split2.slice(1);

      field = field.trim();
      value = value.join(':').trim();

      if (value) {
        headers[field] = value;
      }
    });

    return headers;
  }
});
define('ember-ajax/utils/url-helpers', ['exports', 'ember-ajax/utils/is-fastboot'], function (exports, _emberAjaxUtilsIsFastboot) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var completeUrlRegex = /^(http|https)/;

  /*
   * Isomorphic URL parsing
   * Borrowed from
   * http://www.sitepoint.com/url-parsing-isomorphic-javascript/
   */
  var isNode = typeof module === 'object' && module.exports;
  var url = getUrlModule();

  /**
   * Get the node url module or an anchor element
   *
   * @function getUrlModule
   * @private
   * @return {Object|HTMLAnchorElement} Object to parse urls
   */
  function getUrlModule() {
    if (_emberAjaxUtilsIsFastboot['default']) {
      // ember-fastboot-server provides the node url module as URL global
      return URL;
    }

    if (isNode) {
      return require('url');
    }

    return document.createElement('a');
  }

  /**
   * Parse a URL string into an object that defines its structure
   *
   * The returned object will have the following properties:
   *
   *   href: the full URL
   *   protocol: the request protocol
   *   hostname: the target for the request
   *   port: the port for the request
   *   pathname: any URL after the host
   *   search: query parameters
   *   hash: the URL hash
   *
   * @function parseUrl
   * @private
   * @param {string} str The string to parse
   * @return {Object} URL structure
   */
  function parseUrl(str) {
    var fullObject = undefined;
    if (isNode || _emberAjaxUtilsIsFastboot['default']) {
      fullObject = url.parse(str);
    } else {
      url.href = str;
      fullObject = url;
    }
    var desiredProps = {};
    desiredProps.href = fullObject.href;
    desiredProps.protocol = fullObject.protocol;
    desiredProps.hostname = fullObject.hostname;
    desiredProps.port = fullObject.port;
    desiredProps.pathname = fullObject.pathname;
    desiredProps.search = fullObject.search;
    desiredProps.hash = fullObject.hash;
    return desiredProps;
  }

  /**
   * RequestURL
   *
   * Converts a URL string into an object for easy comparison to other URLs
   *
   * @public
   */

  var RequestURL = (function () {
    function RequestURL(url) {
      _classCallCheck(this, RequestURL);

      this.url = url;
    }

    _createClass(RequestURL, [{
      key: 'sameHost',
      value: function sameHost(other) {
        var _this = this;

        return ['protocol', 'hostname', 'port'].reduce(function (previous, prop) {
          return previous && _this[prop] === other[prop];
        }, true);
      }
    }, {
      key: 'url',
      get: function get() {
        return this._url;
      },
      set: function set(value) {
        this._url = value;

        var explodedUrl = parseUrl(value);
        for (var prop in explodedUrl) {
          if (({}).hasOwnProperty.call(explodedUrl, prop)) {
            this[prop] = explodedUrl[prop];
          }
        }

        return this._url;
      }
    }, {
      key: 'isComplete',
      get: function get() {
        return this.url.match(completeUrlRegex);
      }
    }]);

    return RequestURL;
  })();

  exports.RequestURL = RequestURL;
});
/* global require, module, URL */
define("vanilla-addon-in-lazy/utils/utils-in-vanilla-addon", ["exports"], function (exports) {
  exports["default"] = {};
});//# sourceMappingURL=engine-vendor.map
