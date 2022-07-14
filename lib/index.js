"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = require("cross-fetch");
var types_1 = require("./types");
var DEFAULT_HOST = 'https://api.rss.app';
var DEFAULT_BASE_PATH = '/api/v1/';
var RssApp = /** @class */ (function () {
    /**
     *
     * @param credentials - API key and API secret
     * @param options
     *
     * @see {@link https://rss.app/docs/api/authentication | Authentication Documentation}
     */
    function RssApp(credentials, options) {
        var _this = this;
        this.feed = {
            /**
             * Returns a list of feeds in the account.
             *
             * @param options - Limit and offset options
             * @returns Promise<Feed[]>
             *
             * @see {@link https://rss.app/docs/api/feed/list | List Feed Documentation}
             */
            list: function (options) {
                return _this._makeRequest({
                    method: types_1.ERssAppRequestMethod.GET,
                    path: 'feed',
                    params: options && { $limit: options.limit, $offset: options.offset },
                });
            },
            /**
             * A feed is returned. Otherwise, an error is returned.
             *
             * @param feedId - Feed id
             * @returns Promise<Feed>
             *
             * @see {@link https://rss.app/docs/api/feed/get | Get Feed Documentation}
             */
            get: function (feedId) {
                return _this._makeRequest({
                    method: types_1.ERssAppRequestMethod.GET,
                    path: "feed/".concat(feedId),
                });
            },
            /**
             * A feed with posts is returned. Otherwise, an error is returned.
             *
             * @param createFeedOptions - A valid website URL is required
             * @returns Promise<Feed>
             *
             * @example https://bbc.com
             *
             * @see {@link https://rss.app/docs/api/feed/create | Create Feed Documentation}
             */
            create: function (createFeedOptions) {
                return _this._makeRequest({
                    method: types_1.ERssAppRequestMethod.POST,
                    path: "feed",
                    body: createFeedOptions,
                });
            },
            /**
             * A feed with posts is returned. Otherwise, an error is returned.
             *
             * @param feedId - Feed id
             * @returns Promise<{ id: string; deleted: boolean }>
             *
             * @see {@link https://rss.app/docs/api/feed/delete | Delete Feed Documentation}
             */
            delete: function (feedId) {
                return _this._makeRequest({
                    method: types_1.ERssAppRequestMethod.DELETE,
                    path: "feed/".concat(feedId),
                });
            },
        };
        this._credentials = credentials;
        this._api = {
            host: (options === null || options === void 0 ? void 0 : options.host) || DEFAULT_HOST,
            protocol: (options === null || options === void 0 ? void 0 : options.protocol) || 'https',
            basePath: DEFAULT_BASE_PATH,
        };
    }
    RssApp.prototype._getHeaders = function () {
        return {
            'Content-Type': 'application/json',
            Authorization: "Bearer ".concat(this._credentials.apiKey, ":").concat(this._credentials.apiSecret),
        };
    };
    RssApp.prototype._getUrl = function (path, queryParams) {
        var url = new URL("".concat(this._api.host).concat(this._api.basePath).concat(path));
        for (var k in queryParams) {
            if (queryParams.hasOwnProperty(k)) {
                url.searchParams.append(k, queryParams[k]);
            }
        }
        return url;
    };
    RssApp.prototype._makeRequest = function (options) {
        var _this = this;
        return (0, cross_fetch_1.default)(this._getUrl(options.path, options.params), {
            method: options.method,
            headers: this._getHeaders(),
            body: options.body && JSON.stringify(options.body),
        }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var err, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!response.ok) return [3 /*break*/, 2];
                        err = new Error('HTTP status code: ' + response.status);
                        _a = err;
                        return [4 /*yield*/, response.json()];
                    case 1:
                        _a.response = _b.sent();
                        err.status = response.status;
                        throw err;
                    case 2: return [2 /*return*/, response.json()];
                }
            });
        }); });
    };
    return RssApp;
}());
exports.default = RssApp;
module.exports = RssApp;
module.exports.default = RssApp;
module.exports.RssApp = RssApp;
