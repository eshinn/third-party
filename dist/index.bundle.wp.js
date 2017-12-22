!function(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(); else if ("function" == typeof define && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__SayHi__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__SayBye__ = __webpack_require__(3);
        __webpack_require__.d(__webpack_exports__, "SayHi", function() {
            return __WEBPACK_IMPORTED_MODULE_0__SayHi__.a;
        }), __webpack_require__.d(__webpack_exports__, "SayBye", function() {
            return __WEBPACK_IMPORTED_MODULE_1__SayBye__.a;
        });
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = function() {
            var msg = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "World";
            return console.log("Hello, " + msg);
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = function() {
            var msg = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "World";
            return console.log("Bye, " + msg);
        };
    } ]);
});