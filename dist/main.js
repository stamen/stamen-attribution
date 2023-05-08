var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire2010"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire2010"] = parcelRequire;
}
parcelRequire.register("3DunG", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;
var $2a5c94a40c65bd39$var$doThing = function doThing() {
    return "success";
};
var $2a5c94a40c65bd39$var$_default = $2a5c94a40c65bd39$var$doThing;
module.exports["default"] = $2a5c94a40c65bd39$var$_default;

});

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "doThing", {
    enumerable: true,
    get: function get() {
        return $4fa36e821943b400$var$_doThing["default"];
    }
});

var $4fa36e821943b400$var$_doThing = $4fa36e821943b400$var$_interopRequireDefault((parcelRequire("3DunG")));
function $4fa36e821943b400$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


//# sourceMappingURL=main.js.map
