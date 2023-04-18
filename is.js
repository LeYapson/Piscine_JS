
    num: function(value) {
      return typeof value === "number" && !isNaN(value);
    },
    nan: function(value) {
      return typeof value === "number" && isNaN(value);
    },
    str: function(value) {
      return typeof value === "string";
    },
    bool: function(value) {
      return typeof value === "boolean";
    },
    undef: function(value) {
      return typeof value === "undefined";
    },
    def: function(value) {
      return typeof value !== "undefined";
    },
    arr: function(value) {
      return Array.isArray(value);
    },
    obj: function(value) {
      return value !== null && typeof value === "object";
    },
    fun: function(value) {
      return typeof value === "function";
    },
    truthy: function(value) {
      return Boolean(value);
    },
    falsy: function(value) {
      return !Boolean(value);
    }