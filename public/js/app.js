var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/jquery/dist-module/jquery.module.js
var exports_jquery_module = {};
__export(exports_jquery_module, {
  jQuery: () => jQuery2,
  default: () => jquery_module_default,
  $: () => jQuery2
});
function jQueryFactory(window2, noGlobal) {
  if (typeof window2 === "undefined" || !window2.document) {
    throw new Error("jQuery requires a window with a document");
  }
  var arr = [];
  var getProto2 = Object.getPrototypeOf;
  var slice = arr.slice;
  var flat = arr.flat ? function(array) {
    return arr.flat.call(array);
  } : function(array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn2 = class2type.hasOwnProperty;
  var fnToString = hasOwn2.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  function isWindow(obj) {
    return obj != null && obj === obj.window;
  }
  function isArrayLike(obj) {
    var length = !!obj && obj.length, type = toType(obj);
    if (typeof obj === "function" || isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  var document$1 = window2.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function DOMEval(code, node, doc) {
    doc = doc || document$1;
    var i2, script = doc.createElement("script");
    script.text = code;
    for (i2 in preservedScriptAttributes) {
      if (node && node[i2]) {
        script[i2] = node[i2];
      }
    }
    if (doc.head.appendChild(script).parentNode) {
      script.parentNode.removeChild(script);
    }
  }
  var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
    return new jQuery2.fn.init(selector, context);
  };
  jQuery2.fn = jQuery2.prototype = {
    jquery: version,
    constructor: jQuery2,
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function(elems) {
      var ret = jQuery2.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function(callback) {
      return jQuery2.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery2.map(this, function(elem, i2) {
        return callback.call(elem, i2, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    even: function() {
      return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
        return (i2 + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
        return i2 % 2;
      }));
    },
    eq: function(i2) {
      var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  };
  jQuery2.extend = jQuery2.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone2, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i2] || {};
      i2++;
    }
    if (typeof target !== "object" && typeof target !== "function") {
      target = {};
    }
    if (i2 === length) {
      target = this;
      i2--;
    }
    for (;i2 < length; i2++) {
      if ((options = arguments[i2]) != null) {
        for (name in options) {
          copy = options[name];
          if (name === "__proto__" || target === copy) {
            continue;
          }
          if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name];
            if (copyIsArray && !Array.isArray(src)) {
              clone2 = [];
            } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
              clone2 = {};
            } else {
              clone2 = src;
            }
            copyIsArray = false;
            target[name] = jQuery2.extend(deep, clone2, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery2.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isPlainObject: function(obj) {
      var proto, Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto2(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn2.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    globalEval: function(code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc);
    },
    each: function(obj, callback) {
      var length, i2 = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (;i2 < length; i2++) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      } else {
        for (i2 in obj) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    text: function(elem) {
      var node, ret = "", i2 = 0, nodeType = elem.nodeType;
      if (!nodeType) {
        while (node = elem[i2++]) {
          ret += jQuery2.text(node);
        }
      }
      if (nodeType === 1 || nodeType === 11) {
        return elem.textContent;
      }
      if (nodeType === 9) {
        return elem.documentElement.textContent;
      }
      if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    },
    makeArray: function(arr2, results) {
      var ret = results || [];
      if (arr2 != null) {
        if (isArrayLike(Object(arr2))) {
          jQuery2.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
        } else {
          push.call(ret, arr2);
        }
      }
      return ret;
    },
    inArray: function(elem, arr2, i2) {
      return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
    },
    isXMLDoc: function(elem) {
      var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
      return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
    },
    contains: function(a, b) {
      var bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    },
    merge: function(first, second) {
      var len = +second.length, j = 0, i2 = first.length;
      for (;j < len; j++) {
        first[i2++] = second[j];
      }
      first.length = i2;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
      for (;i2 < length; i2++) {
        callbackInverse = !callback(elems[i2], i2);
        if (callbackInverse !== callbackExpect) {
          matches2.push(elems[i2]);
        }
      }
      return matches2;
    },
    map: function(elems, callback, arg) {
      var length, value, i2 = 0, ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (;i2 < length; i2++) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i2 in elems) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return flat(ret);
    },
    guid: 1,
    support
  });
  if (typeof Symbol === "function") {
    jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var whitespace = "[\\x20\\t\\r\\n\\f]";
  var isIE = document$1.documentMode;
  var rbuggyQSA = isIE && new RegExp(":enabled|:disabled|" + "\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
  var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
  var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+";
  var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
  var rdescend = new RegExp(whitespace + "|>");
  var rsibling = /[+~]/;
  var documentElement$1 = document$1.documentElement;
  var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
  function createCache() {
    var keys = [];
    function cache(key, value) {
      if (keys.push(key + " ") > jQuery2.expr.cacheLength) {
        delete cache[keys.shift()];
      }
      return cache[key + " "] = value;
    }
    return cache;
  }
  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  }
  var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
  var pseudos = ":(" + identifier + ")(?:\\((" + `('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|` + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)";
  var filterMatchExpr = {
    ID: new RegExp("^#(" + identifier + ")"),
    CLASS: new RegExp("^\\.(" + identifier + ")"),
    TAG: new RegExp("^(" + identifier + "|[*])"),
    ATTR: new RegExp("^" + attributes),
    PSEUDO: new RegExp("^" + pseudos),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i")
  };
  var rpseudo = new RegExp(pseudos);
  var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
    var high = "0x" + escape.slice(1) - 65536;
    if (nonHex) {
      return nonHex;
    }
    return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
  };
  function unescapeSelector(sel) {
    return sel.replace(runescape, funescape);
  }
  function selectorError(msg) {
    jQuery2.error("Syntax error, unrecognized expression: " + msg);
  }
  var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
  var tokenCache = createCache();
  function tokenize(selector, parseOnly) {
    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }
    soFar = selector;
    groups = [];
    preFilters = jQuery2.expr.preFilter;
    while (soFar) {
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          soFar = soFar.slice(match[0].length) || soFar;
        }
        groups.push(tokens = []);
      }
      matched = false;
      if (match = rleadingCombinator.exec(soFar)) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: match[0].replace(rtrimCSS, " ")
        });
        soFar = soFar.slice(matched.length);
      }
      for (type in filterMatchExpr) {
        if ((match = jQuery2.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type,
            matches: match
          });
          soFar = soFar.slice(matched.length);
        }
      }
      if (!matched) {
        break;
      }
    }
    if (parseOnly) {
      return soFar.length;
    }
    return soFar ? selectorError(selector) : tokenCache(selector, groups).slice(0);
  }
  var preFilter = {
    ATTR: function(match) {
      match[1] = unescapeSelector(match[1]);
      match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
      if (match[2] === "~=") {
        match[3] = " " + match[3] + " ";
      }
      return match.slice(0, 4);
    },
    CHILD: function(match) {
      match[1] = match[1].toLowerCase();
      if (match[1].slice(0, 3) === "nth") {
        if (!match[3]) {
          selectorError(match[0]);
        }
        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
        match[5] = +(match[7] + match[8] || match[3] === "odd");
      } else if (match[3]) {
        selectorError(match[0]);
      }
      return match;
    },
    PSEUDO: function(match) {
      var excess, unquoted = !match[6] && match[2];
      if (filterMatchExpr.CHILD.test(match[0])) {
        return null;
      }
      if (match[3]) {
        match[2] = match[4] || match[5] || "";
      } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
        match[0] = match[0].slice(0, excess);
        match[2] = unquoted.slice(0, excess);
      }
      return match.slice(0, 3);
    }
  };
  function toSelector(tokens) {
    var i2 = 0, len = tokens.length, selector = "";
    for (;i2 < len; i2++) {
      selector += tokens[i2].value;
    }
    return selector;
  }
  function access(elems, fn, key, value, chainable, emptyGet, raw2) {
    var i2 = 0, len = elems.length, bulk = key == null;
    if (toType(key) === "object") {
      chainable = true;
      for (i2 in key) {
        access(elems, fn, i2, key[i2], true, emptyGet, raw2);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (typeof value !== "function") {
        raw2 = true;
      }
      if (bulk) {
        if (raw2) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, _key, value2) {
            return bulk.call(jQuery2(elem), value2);
          };
        }
      }
      if (fn) {
        for (;i2 < len; i2++) {
          fn(elems[i2], key, raw2 ? value : value.call(elems[i2], i2, fn(elems[i2], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  }
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
  jQuery2.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery2.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery2.removeAttr(this, name);
      });
    }
  });
  jQuery2.extend({
    attr: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery2.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
        hooks = jQuery2.attrHooks[name.toLowerCase()];
      }
      if (value !== undefined) {
        if (value === null || value === false && name.toLowerCase().indexOf("aria-") !== 0) {
          jQuery2.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value);
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = elem.getAttribute(name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {},
    removeAttr: function(elem, value) {
      var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i2++]) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  if (isIE) {
    jQuery2.attrHooks.type = {
      set: function(elem, value) {
        if (value === "radio" && nodeName(elem, "input")) {
          var val = elem.value;
          elem.setAttribute("type", value);
          if (val) {
            elem.value = val;
          }
          return value;
        }
      }
    };
  }
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      if (ch === "\x00") {
        return "�";
      }
      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    }
    return "\\" + ch;
  }
  jQuery2.escapeSelector = function(sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };
  var sort = arr.sort;
  var splice = arr.splice;
  var hasDuplicate;
  function sortOrder(a, b) {
    if (a === b) {
      hasDuplicate = true;
      return 0;
    }
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if (compare) {
      return compare;
    }
    compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
    if (compare & 1) {
      if (a == document$1 || a.ownerDocument == document$1 && jQuery2.contains(document$1, a)) {
        return -1;
      }
      if (b == document$1 || b.ownerDocument == document$1 && jQuery2.contains(document$1, b)) {
        return 1;
      }
      return 0;
    }
    return compare & 4 ? -1 : 1;
  }
  jQuery2.uniqueSort = function(results) {
    var elem, duplicates = [], j = 0, i2 = 0;
    hasDuplicate = false;
    sort.call(results, sortOrder);
    if (hasDuplicate) {
      while (elem = results[i2++]) {
        if (elem === results[i2]) {
          j = duplicates.push(i2);
        }
      }
      while (j--) {
        splice.call(results, duplicates[j], 1);
      }
    }
    return results;
  };
  jQuery2.fn.uniqueSort = function() {
    return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
  };
  var i, outermostContext, document2, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery2.extend({
    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
    setDocument();
  }, inDisabledFieldset = addCombinator(function(elem) {
    return elem.disabled === true && nodeName(elem, "fieldset");
  }, { dir: "parentNode", next: "legend" });
  function find(selector, context, results, seed) {
    var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
    results = results || [];
    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    }
    if (!seed) {
      setDocument(context);
      context = context || document2;
      if (documentIsHTML) {
        if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
          if (m = match[1]) {
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                push.call(results, elem);
              }
              return results;
            } else {
              if (newContext && (elem = newContext.getElementById(m)) && jQuery2.contains(context, elem)) {
                push.call(results, elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = match[3]) && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          newSelector = selector;
          newContext = context;
          if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            if (newContext != context || isIE) {
              if (nid = context.getAttribute("id")) {
                nid = jQuery2.escapeSelector(nid);
              } else {
                context.setAttribute("id", nid = jQuery2.expando);
              }
            }
            groups = tokenize(selector);
            i2 = groups.length;
            while (i2--) {
              groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
            }
            newSelector = groups.join(",");
          }
          try {
            push.apply(results, newContext.querySelectorAll(newSelector));
            return results;
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true);
          } finally {
            if (nid === jQuery2.expando) {
              context.removeAttribute("id");
            }
          }
        }
      }
    }
    return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
  }
  function markFunction(fn) {
    fn[jQuery2.expando] = true;
    return fn;
  }
  function createInputPseudo(type) {
    return function(elem) {
      return nodeName(elem, "input") && elem.type === type;
    };
  }
  function createButtonPseudo(type) {
    return function(elem) {
      return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
    };
  }
  function createDisabledPseudo(disabled) {
    return function(elem) {
      if ("form" in elem) {
        if (elem.parentNode && elem.disabled === false) {
          if ("label" in elem) {
            if ("label" in elem.parentNode) {
              return elem.parentNode.disabled === disabled;
            } else {
              return elem.disabled === disabled;
            }
          }
          return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
        }
        return elem.disabled === disabled;
      } else if ("label" in elem) {
        return elem.disabled === disabled;
      }
      return false;
    };
  }
  function createPositionalPseudo(fn) {
    return markFunction(function(argument) {
      argument = +argument;
      return markFunction(function(seed, matches2) {
        var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
        while (i2--) {
          if (seed[j = matchIndexes[i2]]) {
            seed[j] = !(matches2[j] = seed[j]);
          }
        }
      });
    });
  }
  function setDocument(node) {
    var subWindow, doc = node ? node.ownerDocument || node : document$1;
    if (doc == document2 || doc.nodeType !== 9) {
      return;
    }
    document2 = doc;
    documentElement = document2.documentElement;
    documentIsHTML = !jQuery2.isXMLDoc(document2);
    if (isIE && document$1 != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
      subWindow.addEventListener("unload", unloadHandler);
    }
  }
  find.matches = function(expr, elements) {
    return find(expr, null, null, elements);
  };
  find.matchesSelector = function(elem, expr) {
    setDocument(elem);
    if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        return matches.call(elem, expr);
      } catch (e) {
        nonnativeSelectorCache(expr, true);
      }
    }
    return find(expr, document2, null, [elem]).length > 0;
  };
  jQuery2.expr = {
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    find: {
      ID: function(id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      },
      TAG: function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else {
          return context.querySelectorAll(tag);
        }
      },
      CLASS: function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      }
    },
    relative: {
      ">": { dir: "parentNode", first: true },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: true },
      "~": { dir: "previousSibling" }
    },
    preFilter,
    filter: {
      ID: function(id) {
        var attrId = unescapeSelector(id);
        return function(elem) {
          return elem.getAttribute("id") === attrId;
        };
      },
      TAG: function(nodeNameSelector) {
        var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
        return nodeNameSelector === "*" ? function() {
          return true;
        } : function(elem) {
          return nodeName(elem, expectedNodeName);
        };
      },
      CLASS: function(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
          return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
        });
      },
      ATTR: function(name, operator, check) {
        return function(elem) {
          var result = jQuery2.attr(elem, name);
          if (result == null) {
            return operator === "!=";
          }
          if (!operator) {
            return true;
          }
          result += "";
          if (operator === "=") {
            return result === check;
          }
          if (operator === "!=") {
            return result !== check;
          }
          if (operator === "^=") {
            return check && result.indexOf(check) === 0;
          }
          if (operator === "*=") {
            return check && result.indexOf(check) > -1;
          }
          if (operator === "$=") {
            return check && result.slice(-check.length) === check;
          }
          if (operator === "~=") {
            return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
          }
          if (operator === "|=") {
            return result === check || result.slice(0, check.length + 1) === check + "-";
          }
          return false;
        };
      },
      CHILD: function(type, what, _argument, first, last) {
        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
        return first === 1 && last === 0 ? function(elem) {
          return !!elem.parentNode;
        } : function(elem, _context, xml) {
          var cache, outerCache, node, nodeIndex, start2, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
          if (parent) {
            if (simple) {
              while (dir2) {
                node = elem;
                while (node = node[dir2]) {
                  if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                    return false;
                  }
                }
                start2 = dir2 = type === "only" && !start2 && "nextSibling";
              }
              return true;
            }
            start2 = [forward ? parent.firstChild : parent.lastChild];
            if (forward && useCache) {
              outerCache = parent[jQuery2.expando] || (parent[jQuery2.expando] = {});
              cache = outerCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];
              while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                if (node.nodeType === 1 && ++diff && node === elem) {
                  outerCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              if (useCache) {
                outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              }
              if (diff === false) {
                while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                  if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      outerCache = node[jQuery2.expando] || (node[jQuery2.expando] = {});
                      outerCache[type] = [dirruns, diff];
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
            }
            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
          }
        };
      },
      PSEUDO: function(pseudo, argument) {
        var fn = jQuery2.expr.pseudos[pseudo] || jQuery2.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
        if (fn[jQuery2.expando]) {
          return fn(argument);
        }
        return fn;
      }
    },
    pseudos: {
      not: markFunction(function(selector) {
        var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
        return matcher[jQuery2.expando] ? markFunction(function(seed, matches2, _context, xml) {
          var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
          while (i2--) {
            if (elem = unmatched[i2]) {
              seed[i2] = !(matches2[i2] = elem);
            }
          }
        }) : function(elem, _context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results);
          input[0] = null;
          return !results.pop();
        };
      }),
      has: markFunction(function(selector) {
        return function(elem) {
          return find(selector, elem).length > 0;
        };
      }),
      contains: markFunction(function(text) {
        text = unescapeSelector(text);
        return function(elem) {
          return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
        };
      }),
      lang: markFunction(function(lang) {
        if (!ridentifier.test(lang || "")) {
          selectorError("unsupported lang: " + lang);
        }
        lang = unescapeSelector(lang).toLowerCase();
        return function(elem) {
          var elemLang;
          do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);
          return false;
        };
      }),
      target: function(elem) {
        var hash = window2.location && window2.location.hash;
        return hash && hash.slice(1) === elem.id;
      },
      root: function(elem) {
        return elem === documentElement;
      },
      focus: function(elem) {
        return elem === document2.activeElement && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      enabled: createDisabledPseudo(false),
      disabled: createDisabledPseudo(true),
      checked: function(elem) {
        return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
      },
      selected: function(elem) {
        if (isIE && elem.parentNode) {
          elem.parentNode.selectedIndex;
        }
        return elem.selected === true;
      },
      empty: function(elem) {
        for (elem = elem.firstChild;elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false;
          }
        }
        return true;
      },
      parent: function(elem) {
        return !jQuery2.expr.pseudos.empty(elem);
      },
      header: function(elem) {
        return rheader.test(elem.nodeName);
      },
      input: function(elem) {
        return rinputs.test(elem.nodeName);
      },
      button: function(elem) {
        return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
      },
      text: function(elem) {
        return nodeName(elem, "input") && elem.type === "text";
      },
      first: createPositionalPseudo(function() {
        return [0];
      }),
      last: createPositionalPseudo(function(_matchIndexes, length) {
        return [length - 1];
      }),
      eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),
      even: createPositionalPseudo(function(matchIndexes, length) {
        var i2 = 0;
        for (;i2 < length; i2 += 2) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      odd: createPositionalPseudo(function(matchIndexes, length) {
        var i2 = 1;
        for (;i2 < length; i2 += 2) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      lt: createPositionalPseudo(function(matchIndexes, length, argument) {
        var i2;
        if (argument < 0) {
          i2 = argument + length;
        } else if (argument > length) {
          i2 = length;
        } else {
          i2 = argument;
        }
        for (;--i2 >= 0; ) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      gt: createPositionalPseudo(function(matchIndexes, length, argument) {
        var i2 = argument < 0 ? argument + length : argument;
        for (;++i2 < length; ) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      })
    }
  };
  jQuery2.expr.pseudos.nth = jQuery2.expr.pseudos.eq;
  for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
    jQuery2.expr.pseudos[i] = createInputPseudo(i);
  }
  for (i in { submit: true, reset: true }) {
    jQuery2.expr.pseudos[i] = createButtonPseudo(i);
  }
  function setFilters() {}
  setFilters.prototype = jQuery2.expr.pseudos;
  jQuery2.expr.setFilters = new setFilters;
  function addCombinator(matcher, combinator, base) {
    var { dir: dir2, next: skip } = combinator, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
    return combinator.first ? function(elem, context, xml) {
      while (elem = elem[dir2]) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml);
        }
      }
      return false;
    } : function(elem, context, xml) {
      var oldCache, outerCache, newCache = [dirruns, doneName];
      if (xml) {
        while (elem = elem[dir2]) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true;
            }
          }
        }
      } else {
        while (elem = elem[dir2]) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
            if (skip && nodeName(elem, skip)) {
              elem = elem[dir2] || elem;
            } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
              return newCache[2] = oldCache[2];
            } else {
              outerCache[key] = newCache;
              if (newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
  }
  function elementMatcher(matchers) {
    return matchers.length > 1 ? function(elem, context, xml) {
      var i2 = matchers.length;
      while (i2--) {
        if (!matchers[i2](elem, context, xml)) {
          return false;
        }
      }
      return true;
    } : matchers[0];
  }
  function multipleContexts(selector, contexts, results) {
    var i2 = 0, len = contexts.length;
    for (;i2 < len; i2++) {
      find(selector, contexts[i2], results);
    }
    return results;
  }
  function condense(unmatched, map, filter, context, xml) {
    var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
    for (;i2 < len; i2++) {
      if (elem = unmatched[i2]) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem);
          if (mapped) {
            map.push(i2);
          }
        }
      }
    }
    return newUnmatched;
  }
  function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[jQuery2.expando]) {
      postFilter = setMatcher(postFilter);
    }
    if (postFinder && !postFinder[jQuery2.expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }
    return markFunction(function(seed, results, context, xml) {
      var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
      if (matcher) {
        matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? [] : results;
        matcher(matcherIn, matcherOut, context, xml);
      } else {
        matcherOut = matcherIn;
      }
      if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml);
        i2 = temp.length;
        while (i2--) {
          if (elem = temp[i2]) {
            matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
          }
        }
      }
      if (seed) {
        if (postFinder || preFilter2) {
          if (postFinder) {
            temp = [];
            i2 = matcherOut.length;
            while (i2--) {
              if (elem = matcherOut[i2]) {
                temp.push(matcherIn[i2] = elem);
              }
            }
            postFinder(null, matcherOut = [], temp, xml);
          }
          i2 = matcherOut.length;
          while (i2--) {
            if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
              seed[temp] = !(results[temp] = elem);
            }
          }
        }
      } else {
        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
        if (postFinder) {
          postFinder(null, results, matcherOut, xml);
        } else {
          push.apply(results, matcherOut);
        }
      }
    });
  }
  function matcherFromTokens(tokens) {
    var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery2.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery2.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
      return elem === checkContext;
    }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
      return indexOf.call(checkContext, elem) > -1;
    }, implicitRelative, true), matchers = [function(elem, context, xml) {
      var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      checkContext = null;
      return ret;
    }];
    for (;i2 < len; i2++) {
      if (matcher = jQuery2.expr.relative[tokens[i2].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = jQuery2.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
        if (matcher[jQuery2.expando]) {
          j = ++i2;
          for (;j < len; j++) {
            if (jQuery2.expr.relative[tokens[j].type]) {
              break;
            }
          }
          return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrimCSS, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
        }
        matchers.push(matcher);
      }
    }
    return elementMatcher(matchers);
  }
  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
      var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery2.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
      if (outermost) {
        outermostContext = context == document2 || context || outermost;
      }
      for (;(elem = elems[i2]) != null; i2++) {
        if (byElement && elem) {
          j = 0;
          if (!context && elem.ownerDocument != document2) {
            setDocument(elem);
            xml = !documentIsHTML;
          }
          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document2, xml)) {
              push.call(results, elem);
              break;
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
          }
        }
        if (bySet) {
          if (elem = !matcher && elem) {
            matchedCount--;
          }
          if (seed) {
            unmatched.push(elem);
          }
        }
      }
      matchedCount += i2;
      if (bySet && i2 !== matchedCount) {
        j = 0;
        while (matcher = setMatchers[j++]) {
          matcher(unmatched, setMatched, context, xml);
        }
        if (seed) {
          if (matchedCount > 0) {
            while (i2--) {
              if (!(unmatched[i2] || setMatched[i2])) {
                setMatched[i2] = pop.call(results);
              }
            }
          }
          setMatched = condense(setMatched);
        }
        push.apply(results, setMatched);
        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
          jQuery2.uniqueSort(results);
        }
      }
      if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }
      return unmatched;
    };
    return bySet ? markFunction(superMatcher) : superMatcher;
  }
  function compile(selector, match) {
    var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
    if (!cached) {
      if (!match) {
        match = tokenize(selector);
      }
      i2 = match.length;
      while (i2--) {
        cached = matcherFromTokens(match[i2]);
        if (cached[jQuery2.expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      }
      cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
      cached.selector = selector;
    }
    return cached;
  }
  function select(selector, context, results, seed) {
    var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || [];
    if (match.length === 1) {
      tokens = match[0] = match[0].slice(0);
      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery2.expr.relative[tokens[1].type]) {
        context = (jQuery2.expr.find.ID(unescapeSelector(token.matches[0]), context) || [])[0];
        if (!context) {
          return results;
        } else if (compiled) {
          context = context.parentNode;
        }
        selector = selector.slice(tokens.shift().value.length);
      }
      i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
      while (i2--) {
        token = tokens[i2];
        if (jQuery2.expr.relative[type = token.type]) {
          break;
        }
        if (find2 = jQuery2.expr.find[type]) {
          if (seed = find2(unescapeSelector(token.matches[0]), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
            tokens.splice(i2, 1);
            selector = seed.length && toSelector(tokens);
            if (!selector) {
              push.apply(results, seed);
              return results;
            }
            break;
          }
        }
      }
    }
    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
  }
  setDocument();
  jQuery2.find = find;
  find.compile = compile;
  find.select = select;
  find.setDocument = setDocument;
  find.tokenize = tokenize;
  function dir(elem, dir2, until) {
    var matched = [], truncate = until !== undefined;
    while ((elem = elem[dir2]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery2(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  }
  function siblings(n, elem) {
    var matched = [];
    for (;n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  }
  var rneedsContext = jQuery2.expr.match.needsContext;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function isObviousHtml(input) {
    return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
  }
  function winnow(elements, qualifier, not) {
    if (typeof qualifier === "function") {
      return jQuery2.grep(elements, function(elem, i2) {
        return !!qualifier.call(elem, i2, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery2.grep(elements, function(elem) {
        return elem === qualifier !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery2.grep(elements, function(elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    }
    return jQuery2.filter(qualifier, elements, not);
  }
  jQuery2.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
      return elem2.nodeType === 1;
    }));
  };
  jQuery2.fn.extend({
    find: function(selector) {
      var i2, ret, len = this.length, self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery2(selector).filter(function() {
          for (i2 = 0;i2 < len; i2++) {
            if (jQuery2.contains(self[i2], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i2 = 0;i2 < len; i2++) {
        jQuery2.find(selector, self[i2], ret);
      }
      return len > 1 ? jQuery2.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [], false).length;
    }
  });
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context) {
    var match, elem;
    if (!selector) {
      return this;
    }
    if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    } else if (typeof selector === "function") {
      return rootjQuery.ready !== undefined ? rootjQuery.ready(selector) : selector(jQuery2);
    } else {
      match = selector + "";
      if (isObviousHtml(match)) {
        match = [null, selector, null];
      } else if (typeof selector === "string") {
        match = rquickExpr.exec(selector);
      } else {
        return jQuery2.makeArray(selector, this);
      }
      if (match && (match[1] || !context)) {
        if (match[1]) {
          context = context instanceof jQuery2 ? context[0] : context;
          jQuery2.merge(this, jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document$1, true));
          if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
            for (match in context) {
              if (typeof this[match] === "function") {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        } else {
          elem = document$1.getElementById(match[2]);
          if (elem) {
            this[0] = elem;
            this.length = 1;
          }
          return this;
        }
      } else if (!context || context.jquery) {
        return (context || rootjQuery).find(selector);
      } else {
        return this.constructor(context).find(selector);
      }
    }
  };
  init.prototype = jQuery2.fn;
  rootjQuery = jQuery2(document$1);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery2.fn.extend({
    has: function(target) {
      var targets = jQuery2(target, this), l = targets.length;
      return this.filter(function() {
        var i2 = 0;
        for (;i2 < l; i2++) {
          if (jQuery2.contains(this, targets[i2])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
      if (!rneedsContext.test(selectors)) {
        for (;i2 < l; i2++) {
          for (cur = this[i2];cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery2(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery2.uniqueSort(jQuery2.merge(this.get(), jQuery2(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir2) {
    while ((cur = cur[dir2]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery2.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      if (elem.contentDocument != null && getProto2(elem.contentDocument)) {
        return elem.contentDocument;
      }
      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }
      return jQuery2.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery2.fn[name] = function(until, selector) {
      var matched = jQuery2.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery2.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery2.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  function createOptions(options) {
    var object = {};
    jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery2.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
    var firing, memory, fired, locked, list = [], queue2 = [], firingIndex = -1, fire = function() {
      locked = locked || options.once;
      fired = firing = true;
      for (;queue2.length; firingIndex = -1) {
        memory = queue2.shift();
        while (++firingIndex < list.length) {
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      if (!options.memory) {
        memory = false;
      }
      firing = false;
      if (locked) {
        if (memory) {
          list = [];
        } else {
          list = "";
        }
      }
    }, self = {
      add: function() {
        if (list) {
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue2.push(memory);
          }
          (function add(args) {
            jQuery2.each(args, function(_, arg) {
              if (typeof arg === "function") {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                add(arg);
              }
            });
          })(arguments);
          if (memory && !firing) {
            fire();
          }
        }
        return this;
      },
      remove: function() {
        jQuery2.each(arguments, function(_, arg) {
          var index;
          while ((index = jQuery2.inArray(arg, list, index)) > -1) {
            list.splice(index, 1);
            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      has: function(fn) {
        return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
      },
      empty: function() {
        if (list) {
          list = [];
        }
        return this;
      },
      disable: function() {
        locked = queue2 = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      lock: function() {
        locked = queue2 = [];
        if (!memory && !firing) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      fireWith: function(context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue2.push(args);
          if (!firing) {
            fire();
          }
        }
        return this;
      },
      fire: function() {
        self.fireWith(this, arguments);
        return this;
      },
      fired: function() {
        return !!fired;
      }
    };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    var method;
    try {
      if (value && typeof (method = value.promise) === "function") {
        method.call(value).done(resolve).fail(reject);
      } else if (value && typeof (method = value.then) === "function") {
        method.call(value, resolve, reject);
      } else {
        resolve.apply(undefined, [value].slice(noValue));
      }
    } catch (value2) {
      reject(value2);
    }
  }
  jQuery2.extend({
    Deferred: function(func) {
      var tuples = [
        [
          "notify",
          "progress",
          jQuery2.Callbacks("memory"),
          jQuery2.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          jQuery2.Callbacks("once memory"),
          jQuery2.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          jQuery2.Callbacks("once memory"),
          jQuery2.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], state = "pending", promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        catch: function(fn) {
          return promise.then(null, fn);
        },
        pipe: function() {
          var fns = arguments;
          return jQuery2.Deferred(function(newDefer) {
            jQuery2.each(tuples, function(_i, tuple) {
              var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && typeof returned.promise === "function") {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;
          function resolve(depth, deferred2, handler4, special) {
            return function() {
              var that = this, args = arguments, mightThrow = function() {
                var returned, then;
                if (depth < maxDepth) {
                  return;
                }
                returned = handler4.apply(that, args);
                if (returned === deferred2.promise()) {
                  throw new TypeError("Thenable self-resolution");
                }
                then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                if (typeof then === "function") {
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                  } else {
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                  }
                } else {
                  if (handler4 !== Identity) {
                    that = undefined;
                    args = [returned];
                  }
                  (special || deferred2.resolveWith)(that, args);
                }
              }, process = special ? mightThrow : function() {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery2.Deferred.exceptionHook) {
                    jQuery2.Deferred.exceptionHook(e, process.error);
                  }
                  if (depth + 1 >= maxDepth) {
                    if (handler4 !== Thrower) {
                      that = undefined;
                      args = [e];
                    }
                    deferred2.rejectWith(that, args);
                  }
                }
              };
              if (depth) {
                process();
              } else {
                if (jQuery2.Deferred.getErrorHook) {
                  process.error = jQuery2.Deferred.getErrorHook();
                }
                window2.setTimeout(process);
              }
            };
          }
          return jQuery2.Deferred(function(newDefer) {
            tuples[0][3].add(resolve(0, newDefer, typeof onProgress === "function" ? onProgress : Identity, newDefer.notifyWith));
            tuples[1][3].add(resolve(0, newDefer, typeof onFulfilled === "function" ? onFulfilled : Identity));
            tuples[2][3].add(resolve(0, newDefer, typeof onRejected === "function" ? onRejected : Thrower));
          }).promise();
        },
        promise: function(obj) {
          return obj != null ? jQuery2.extend(obj, promise) : promise;
        }
      }, deferred = {};
      jQuery2.each(tuples, function(i2, tuple) {
        var list = tuple[2], stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[3 - i2][2].disable, tuples[3 - i2][3].disable, tuples[0][2].lock, tuples[0][3].lock);
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(singleValue) {
      var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
        return function(value) {
          resolveContexts[i3] = this;
          resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
          if (!--remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      };
      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i2)).resolve, primary.reject, !remaining);
        if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {
          return primary.then();
        }
      }
      while (i2--) {
        adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
      }
      return primary.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery2.Deferred.exceptionHook = function(error2, asyncError) {
    if (error2 && rerrorNames.test(error2.name)) {
      window2.console.warn("jQuery.Deferred exception", error2, asyncError);
    }
  };
  jQuery2.readyException = function(error2) {
    window2.setTimeout(function() {
      throw error2;
    });
  };
  var readyList = jQuery2.Deferred();
  jQuery2.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error2) {
      jQuery2.readyException(error2);
    });
    return this;
  };
  jQuery2.extend({
    isReady: false,
    readyWait: 1,
    ready: function(wait) {
      if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
        return;
      }
      jQuery2.isReady = true;
      if (wait !== true && --jQuery2.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document$1, [jQuery2]);
    }
  });
  jQuery2.ready.then = readyList.then;
  function completed() {
    document$1.removeEventListener("DOMContentLoaded", completed);
    window2.removeEventListener("load", completed);
    jQuery2.ready();
  }
  if (document$1.readyState !== "loading") {
    window2.setTimeout(jQuery2.ready);
  } else {
    document$1.addEventListener("DOMContentLoaded", completed);
    window2.addEventListener("load", completed);
  }
  var rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }
  function camelCase3(string) {
    return string.replace(rdashAlpha, fcamelCase);
  }
  function acceptData(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  }
  function Data() {
    this.expando = jQuery2.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = Object.create(null);
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data2, value) {
      var prop, cache = this.cache(owner);
      if (typeof data2 === "string") {
        cache[camelCase3(data2)] = value;
      } else {
        for (prop in data2) {
          cache[camelCase3(prop)] = data2[prop];
        }
      }
      return value;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase3(key)];
    },
    access: function(owner, key, value) {
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i2, cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (Array.isArray(key)) {
          key = key.map(camelCase3);
        } else {
          key = camelCase3(key);
          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }
        i2 = key.length;
        while (i2--) {
          delete cache[key[i2]];
        }
      }
      if (key === undefined || jQuery2.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery2.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data;
  var dataUser = new Data;
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
  function getData(data2) {
    if (data2 === "true") {
      return true;
    }
    if (data2 === "false") {
      return false;
    }
    if (data2 === "null") {
      return null;
    }
    if (data2 === +data2 + "") {
      return +data2;
    }
    if (rbrace.test(data2)) {
      return JSON.parse(data2);
    }
    return data2;
  }
  function dataAttr(elem, key, data2) {
    var name;
    if (data2 === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data2 = elem.getAttribute(name);
      if (typeof data2 === "string") {
        try {
          data2 = getData(data2);
        } catch (e) {}
        dataUser.set(elem, key, data2);
      } else {
        data2 = undefined;
      }
    }
    return data2;
  }
  jQuery2.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data2) {
      return dataUser.access(elem, name, data2);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data2) {
      return dataPriv.access(elem, name, data2);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery2.fn.extend({
    data: function(key, value) {
      var i2, name, data2, elem = this[0], attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data2 = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i2 = attrs.length;
            while (i2--) {
              if (attrs[i2]) {
                name = attrs[i2].name;
                if (name.indexOf("data-") === 0) {
                  name = camelCase3(name.slice(5));
                  dataAttr(elem, name, data2[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data2;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value2) {
        var data3;
        if (elem && value2 === undefined) {
          data3 = dataUser.get(elem, key);
          if (data3 !== undefined) {
            return data3;
          }
          data3 = dataAttr(elem, key);
          if (data3 !== undefined) {
            return data3;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value2);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery2.extend({
    queue: function(elem, type, data2) {
      var queue2;
      if (elem) {
        type = (type || "fx") + "queue";
        queue2 = dataPriv.get(elem, type);
        if (data2) {
          if (!queue2 || Array.isArray(data2)) {
            queue2 = dataPriv.set(elem, type, jQuery2.makeArray(data2));
          } else {
            queue2.push(data2);
          }
        }
        return queue2 || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue2 = jQuery2.queue(elem, type), startLength = queue2.length, fn = queue2.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
        jQuery2.dequeue(elem, type);
      };
      if (fn === "inprogress") {
        fn = queue2.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue2.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.set(elem, key, {
        empty: jQuery2.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery2.fn.extend({
    queue: function(type, data2) {
      var setter = 2;
      if (typeof type !== "string") {
        data2 = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery2.queue(this[0], type);
      }
      return data2 === undefined ? this : this.each(function() {
        var queue2 = jQuery2.queue(this, type, data2);
        jQuery2._queueHooks(this, type);
        if (type === "fx" && queue2[0] !== "inprogress") {
          jQuery2.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery2.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
        if (!--count) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i2--) {
        tmp = dataPriv.get(elements[i2], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  function isHiddenWithinTree(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery2.css(elem, "display") === "none";
  }
  var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function isAutoPx(prop) {
    return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
  }
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery2.css(elem, prop, "");
    }, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      initialInUnit = +initial || 1;
      while (maxIterations--) {
        jQuery2.style(elem, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }
        initialInUnit = initialInUnit / scale;
      }
      initialInUnit = initialInUnit * 2;
      jQuery2.style(elem, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var rmsPrefix = /^-ms-/;
  function cssCamelCase(string) {
    return camelCase3(string.replace(rmsPrefix, "ms-"));
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName2));
    display = jQuery2.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName2] = display;
    return display;
  }
  function showHide(elements, show) {
    var display, elem, values = [], index = 0, length = elements.length;
    for (;index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem, "display", display);
        }
      }
    }
    for (index = 0;index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery2.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery2(this).show();
        } else {
          jQuery2(this).hide();
        }
      });
    }
  });
  var isAttached = function(elem) {
    return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
  }, composed = { composed: true };
  if (!documentElement$1.getRootNode) {
    isAttached = function(elem) {
      return jQuery2.contains(elem.ownerDocument, elem);
    };
  }
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var wrapMap = {
    thead: ["table"],
    col: ["colgroup", "table"],
    tr: ["tbody", "table"],
    td: ["tr", "tbody", "table"]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = arr.slice.call(context.getElementsByTagName(tag || "*"));
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery2.merge([context], ret);
    }
    return ret;
  }
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  function setGlobalEval(elems, refElements) {
    var i2 = 0, l = elems.length;
    for (;i2 < l; i2++) {
      dataPriv.set(elems[i2], "globalEval", !refElements || dataPriv.get(refElements[i2], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
    for (;i2 < l; i2++) {
      elem = elems[i2];
      if (elem || elem === 0) {
        if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) {
          jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || arr;
          j = wrap.length;
          while (--j > -1) {
            tmp = tmp.appendChild(context.createElement(wrap[j]));
          }
          tmp.innerHTML = jQuery2.htmlPrefilter(elem);
          jQuery2.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i2 = 0;
    while (elem = nodes[i2++]) {
      if (selection && jQuery2.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      attached = isAttached(elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (attached) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function domManip(collection, args, callback, ignored) {
    args = flat(args);
    var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";
    if (valueIsFunction) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        args[0] = value.call(this, index, self.html());
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (;i2 < l; i2++) {
          node = fragment;
          if (i2 !== iNoClone) {
            node = jQuery2.clone(node, true, true);
            if (hasScripts) {
              jQuery2.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i2], node, i2);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery2.map(scripts, restoreScript);
          for (i2 = 0;i2 < hasScripts; i2++) {
            node = scripts[i2];
            if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery2.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                if (jQuery2._evalUrl && !node.noModule) {
                  jQuery2._evalUrl(node.src, {
                    nonce: node.nonce,
                    crossOrigin: node.crossOrigin
                  }, doc);
                }
              } else {
                DOMEval(node.textContent, node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function on2(elem, types, selector, data2, fn, one) {
    var origFn, type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data2 = data2 || selector;
        selector = undefined;
      }
      for (type in types) {
        on2(elem, type, selector, data2, types[type], one);
      }
      return elem;
    }
    if (data2 == null && fn == null) {
      fn = selector;
      data2 = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data2;
        data2 = undefined;
      } else {
        fn = data2;
        data2 = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery2().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
    }
    return elem.each(function() {
      jQuery2.event.add(this, types, fn, data2, selector);
    });
  }
  jQuery2.event = {
    add: function(elem, types, handler4, data2, selector) {
      var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
      if (!acceptData(elem)) {
        return;
      }
      if (handler4.handler) {
        handleObjIn = handler4;
        handler4 = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery2.find.matchesSelector(documentElement$1, selector);
      }
      if (!handler4.guid) {
        handler4.guid = jQuery2.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery2.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery2.event.special[type] || {};
        handleObj = jQuery2.extend({
          type,
          origType,
          data: data2,
          handler: handler4,
          guid: handler4.guid,
          selector,
          needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data2, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler4.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
      }
    },
    remove: function(elem, types, handler4, selector, mappedTypes) {
      var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery2.event.remove(elem, type + types[t], handler4, selector, true);
          }
          continue;
        }
        special = jQuery2.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler4 || handler4.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery2.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery2.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
      args[0] = event;
      for (i2 = 1;i2 < arguments.length; i2++) {
        args[i2] = arguments[i2];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
      i2 = 0;
      while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && !(event.type === "click" && event.button >= 1)) {
        for (;cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i2 = 0;i2 < delegateCount; i2++) {
              handleObj = handlers[i2];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({ elem: cur, handlers: matchedHandlers });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery2.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: typeof hook === "function" ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
    },
    special: jQuery2.extend(Object.create(null), {
      load: {
        noBubble: true
      },
      click: {
        setup: function(data2) {
          var el = this || data2;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click", true);
          }
          return false;
        },
        trigger: function(data2) {
          var el = this || data2;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          }
          return true;
        },
        _default: function(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(event) {
          if (event.result !== undefined) {
            event.preventDefault();
          }
        }
      }
    })
  };
  function leverageNative(el, type, isSetup) {
    if (!isSetup) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery2.event.add(el, type, returnTrue);
      }
      return;
    }
    dataPriv.set(el, type, false);
    jQuery2.event.add(el, type, {
      namespace: false,
      handler: function(event) {
        var result, saved = dataPriv.get(this, type);
        if (event.isTrigger & 1 && this[type]) {
          if (!saved.length) {
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved);
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              event.stopImmediatePropagation();
              event.preventDefault();
              return result && result.value;
            }
          } else if ((jQuery2.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          }
        } else if (saved.length) {
          dataPriv.set(this, type, {
            value: jQuery2.event.trigger(saved[0], saved.slice(1), this)
          });
          event.stopPropagation();
          event.isImmediatePropagationStopped = returnTrue;
        }
      }
    });
  }
  jQuery2.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery2.Event = function(src, props) {
    if (!(this instanceof jQuery2.Event)) {
      return new jQuery2.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
      this.target = src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery2.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || Date.now();
    this[jQuery2.expando] = true;
  };
  jQuery2.Event.prototype = {
    constructor: jQuery2.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery2.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery2.event.addProp);
  jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
    function focusMappedHandler(nativeEvent) {
      var event = jQuery2.event.fix(nativeEvent);
      event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
      event.isSimulated = true;
      if (event.target === event.currentTarget) {
        dataPriv.get(this, "handle")(event);
      }
    }
    jQuery2.event.special[type] = {
      setup: function() {
        leverageNative(this, type, true);
        if (isIE) {
          this.addEventListener(delegateType, focusMappedHandler);
        } else {
          return false;
        }
      },
      trigger: function() {
        leverageNative(this, type);
        return true;
      },
      teardown: function() {
        if (isIE) {
          this.removeEventListener(delegateType, focusMappedHandler);
        } else {
          return false;
        }
      },
      _default: function(event) {
        return dataPriv.get(event.target, type);
      },
      delegateType
    };
  });
  jQuery2.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery2.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
        if (!related || related !== target && !jQuery2.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery2.fn.extend({
    on: function(types, selector, data2, fn) {
      return on2(this, types, selector, data2, fn);
    },
    one: function(types, selector, data2, fn) {
      return on2(this, types, selector, data2, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery2.event.remove(this, types, fn, selector);
      });
    }
  });
  var rnoInnerhtml = /<script|<style|<link/i;
  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery2(elem).children("tbody")[0] || elem;
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var type, i2, l, events = dataPriv.get(src, "events");
    if (dest.nodeType !== 1) {
      return;
    }
    if (events) {
      dataPriv.remove(dest, "handle events");
      for (type in events) {
        for (i2 = 0, l = events[type].length;i2 < l; i2++) {
          jQuery2.event.add(dest, type, events[type][i2]);
        }
      }
    }
    if (dataUser.hasData(src)) {
      dataUser.set(dest, jQuery2.extend({}, dataUser.get(src)));
    }
  }
  function remove(elem, selector, keepData) {
    var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
    for (;(node = nodes[i2]) != null; i2++) {
      if (!keepData && node.nodeType === 1) {
        jQuery2.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery2.extend({
    htmlPrefilter: function(html) {
      return html;
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i2, l, srcElements, destElements, clone2 = elem.cloneNode(true), inPage = isAttached(elem);
      if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
        destElements = getAll(clone2);
        srcElements = getAll(elem);
        for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
          if (nodeName(destElements[i2], "textarea")) {
            destElements[i2].defaultValue = srcElements[i2].defaultValue;
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone2);
          for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
            cloneCopyEvent(srcElements[i2], destElements[i2]);
          }
        } else {
          cloneCopyEvent(elem, clone2);
        }
      }
      destElements = getAll(clone2, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone2;
    },
    cleanData: function(elems) {
      var data2, elem, type, special = jQuery2.event.special, i2 = 0;
      for (;(elem = elems[i2]) !== undefined; i2++) {
        if (acceptData(elem)) {
          if (data2 = elem[dataPriv.expando]) {
            if (data2.events) {
              for (type in data2.events) {
                if (special[type]) {
                  jQuery2.event.remove(elem, type);
                } else {
                  jQuery2.removeEvent(elem, type, data2.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery2.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value2) {
        return value2 === undefined ? jQuery2.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value2;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem, i2 = 0;
      for (;(elem = this[i2]) != null; i2++) {
        if (elem.nodeType === 1) {
          jQuery2.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value2) {
        var elem = this[0] || {}, i2 = 0, l = this.length;
        if (value2 === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = jQuery2.htmlPrefilter(value2);
          try {
            for (;i2 < l; i2++) {
              elem = this[i2] || {};
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
                elem.innerHTML = value2;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value2);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery2.inArray(this, ignored) < 0) {
          jQuery2.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery2.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery2.fn[name] = function(selector) {
      var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
      for (;i2 <= last; i2++) {
        elems = i2 === last ? this : this.clone(true);
        jQuery2(insert[i2])[original](elems);
        push.apply(ret, elems);
      }
      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var rcustomProp = /^--/;
  function getStyles(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view) {
      view = window2;
    }
    return view.getComputedStyle(elem);
  }
  function swap(elem, options, callback) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.call(elem);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  }
  function curCSS(elem, name, computed) {
    var ret, isCustomProp = rcustomProp.test(name);
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        ret = ret.replace(rtrimCSS, "$1") || undefined;
      }
      if (ret === "" && !isAttached(elem)) {
        ret = jQuery2.style(elem, name);
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style;
  function vendorPropName(name) {
    var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
    while (i2--) {
      name = cssPrefixes[i2] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function finalPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    return vendorPropName(name) || name;
  }
  var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");
  function computeTableStyleTests() {
    if (!table || !table.style) {
      return;
    }
    var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");
    table.style.cssText = "position:absolute;left:-11111px;" + "border-collapse:separate;border-spacing:0";
    tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";
    td.style.cssText = "height:9px;width:9px;padding:0";
    col.span = 2;
    documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));
    if (table.offsetWidth === 0) {
      documentElement$1.removeChild(table);
      return;
    }
    trStyle = window2.getComputedStyle(tr);
    reliableColDimensionsVal = isIE || Math.round(parseFloat(window2.getComputedStyle(col).width)) === 18;
    reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
    documentElement$1.removeChild(table);
    table = null;
  }
  jQuery2.extend(support, {
    reliableTrDimensions: function() {
      computeTableStyleTests();
      return reliableTrDimensionsVal;
    },
    reliableColDimensions: function() {
      computeTableStyleTests();
      return reliableColDimensionsVal;
    }
  });
  var cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function setPositiveNumber(_elem, value, subtract) {
    var matches2 = rcssNum.exec(value);
    return matches2 ? Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px") : value;
  }
  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (;i2 < 4; i2 += 2) {
      if (box === "margin") {
        marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
      }
      if (!isBorderBox) {
        delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
        if (box !== "padding") {
          delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        } else {
          extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      } else {
        if (box === "content") {
          delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
        }
        if (box !== "margin") {
          delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      }
    }
    if (!isBorderBox && computedVal >= 0) {
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
    }
    return delta + marginDelta;
  }
  function getWidthOrHeight(elem, dimension, extra) {
    var styles = getStyles(elem), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = "auto";
    }
    if ((val === "auto" || isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem, "col") || !support.reliableTrDimensions() && nodeName(elem, "tr")) && elem.getClientRects().length) {
      isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
      valueIsBorderBox = offsetProp in elem;
      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    }
    val = parseFloat(val) || 0;
    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
  }
  jQuery2.extend({
    cssHooks: {},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
        }
        if (isIE && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery2.each(["height", "width"], function(_i, dimension) {
    jQuery2.cssHooks[dimension] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return jQuery2.css(elem, "display") === "none" ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches2, styles = getStyles(elem), isBorderBox = extra && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
        if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery2.css(elem, dimension);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery2.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix2, suffix) {
    jQuery2.cssHooks[prefix2 + suffix] = {
      expand: function(value) {
        var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
        for (;i2 < 4; i2++) {
          expanded[prefix2 + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (prefix2 !== "margin") {
      jQuery2.cssHooks[prefix2 + suffix].set = setPositiveNumber;
    }
  });
  jQuery2.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name2, value2) {
        var styles, len, map = {}, i2 = 0;
        if (Array.isArray(name2)) {
          styles = getStyles(elem);
          len = name2.length;
          for (;i2 < len; i2++) {
            map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
          }
          return map;
        }
        return value2 !== undefined ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
      }, name, value, arguments.length > 1);
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery2.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery2.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (isAutoPx(prop) ? "px" : "");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery2.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery2.fx.step[tween.prop]) {
          jQuery2.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };
  jQuery2.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery2.fx = Tween.prototype.init;
  jQuery2.fx.step = {};
  var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
  function schedule() {
    if (inProgress) {
      if (document$1.hidden === false && window2.requestAnimationFrame) {
        window2.requestAnimationFrame(schedule);
      } else {
        window2.setTimeout(schedule, 13);
      }
      jQuery2.fx.tick();
    }
  }
  function createFxNow() {
    window2.setTimeout(function() {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  }
  function genFx(type, includeWidth) {
    var which, i2 = 0, attrs = { height: type };
    includeWidth = includeWidth ? 1 : 0;
    for (;i2 < 4; i2 += 2 - includeWidth) {
      which = cssExpand[i2];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
    for (;index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery2._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery2.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
      }
    }
    propTween = !jQuery2.isEmptyObject(props);
    if (!propTween && jQuery2.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = jQuery2.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery2.css(elem, "display");
          showHide([elem]);
        }
      }
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery2.css(elem, "float") === "none") {
          if (!propTween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function() {
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            jQuery2.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;
    for (index in props) {
      name = cssCamelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery2.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
      delete tick.elem;
    }), tick = function() {
      if (stopped) {
        return false;
      }
      var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index2 = 0, length2 = animation.tweens.length;
      for (;index2 < length2; index2++) {
        animation.tweens[index2].run(percent);
      }
      deferred.notifyWith(elem, [animation, percent, remaining]);
      if (percent < 1 && length2) {
        return remaining;
      }
      if (!length2) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      }
      deferred.resolveWith(elem, [animation]);
      return false;
    }, animation = deferred.promise({
      elem,
      props: jQuery2.extend({}, properties),
      opts: jQuery2.extend(true, {
        specialEasing: {},
        easing: jQuery2.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function(prop, end) {
        var tween = jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function(gotoEnd) {
        var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
        if (stopped) {
          return this;
        }
        stopped = true;
        for (;index2 < length2; index2++) {
          animation.tweens[index2].run(1);
        }
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }
        return this;
      }
    }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (;index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (typeof result.stop === "function") {
          jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }
        return result;
      }
    }
    jQuery2.map(props, createTween, animation);
    if (typeof animation.opts.start === "function") {
      animation.opts.start.call(elem, animation);
    }
    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery2.fx.timer(jQuery2.extend(tick, {
      elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }
  jQuery2.Animation = jQuery2.extend(Animation, {
    tweeners: {
      "*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function(props, callback) {
      if (typeof props === "function") {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop, index = 0, length = props.length;
      for (;index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery2.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
      complete: fn || easing || typeof speed === "function" && speed,
      duration: speed,
      easing: fn && easing || easing && typeof easing !== "function" && easing
    };
    if (jQuery2.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery2.fx.speeds) {
          opt.duration = jQuery2.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery2.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (typeof opt.old === "function") {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery2.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery2.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
        var anim = Animation(this, jQuery2.extend({}, prop), optall);
        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop2 = hooks.stop;
        delete hooks.stop;
        stop2(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data2 = dataPriv.get(this);
        if (index) {
          if (data2[index] && data2[index].stop) {
            stopQueue(data2[index]);
          }
        } else {
          for (index in data2) {
            if (data2[index] && data2[index].stop && rrun.test(index)) {
              stopQueue(data2[index]);
            }
          }
        }
        for (index = timers.length;index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery2.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index, data2 = dataPriv.get(this), queue2 = data2[type + "queue"], hooks = data2[type + "queueHooks"], timers = jQuery2.timers, length = queue2 ? queue2.length : 0;
        data2.finish = true;
        jQuery2.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length;index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0;index < length; index++) {
          if (queue2[index] && queue2[index].finish) {
            queue2[index].finish.call(this);
          }
        }
        delete data2.finish;
      });
    }
  });
  jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
    var cssFn = jQuery2.fn[name];
    jQuery2.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery2.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(name, props) {
    jQuery2.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery2.timers = [];
  jQuery2.fx.tick = function() {
    var timer, i2 = 0, timers = jQuery2.timers;
    fxNow = Date.now();
    for (;i2 < timers.length; i2++) {
      timer = timers[i2];
      if (!timer() && timers[i2] === timer) {
        timers.splice(i2--, 1);
      }
    }
    if (!timers.length) {
      jQuery2.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery2.fx.timer = function(timer) {
    jQuery2.timers.push(timer);
    jQuery2.fx.start();
  };
  jQuery2.fx.start = function() {
    if (inProgress) {
      return;
    }
    inProgress = true;
    schedule();
  };
  jQuery2.fx.stop = function() {
    inProgress = null;
  };
  jQuery2.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery2.fn.delay = function(time, type) {
    time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window2.setTimeout(next, time);
      hooks.stop = function() {
        window2.clearTimeout(timeout);
      };
    });
  };
  var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
  jQuery2.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery2.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery2.propFix[name] || name];
      });
    }
  });
  jQuery2.extend({
    prop: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
        name = jQuery2.propFix[name] || name;
        hooks = jQuery2.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return elem[name] = value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function(elem) {
          var tabindex = elem.getAttribute("tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  });
  if (isIE) {
    jQuery2.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery2.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    jQuery2.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }
    return [];
  }
  jQuery2.fn.extend({
    addClass: function(value) {
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
        return this.each(function(j) {
          jQuery2(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i2 = 0;i2 < classNames.length; i2++) {
              className = classNames[i2];
              if (cur.indexOf(" " + className + " ") < 0) {
                cur += className + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    removeClass: function(value) {
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
        return this.each(function(j) {
          jQuery2(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i2 = 0;i2 < classNames.length; i2++) {
              className = classNames[i2];
              while (cur.indexOf(" " + className + " ") > -1) {
                cur = cur.replace(" " + className + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var classNames, className, i2, self;
      if (typeof value === "function") {
        return this.each(function(i3) {
          jQuery2(this).toggleClass(value.call(this, i3, getClass(this), stateVal), stateVal);
        });
      }
      if (typeof stateVal === "boolean") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          self = jQuery2(this);
          for (i2 = 0;i2 < classNames.length; i2++) {
            className = classNames[i2];
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        });
      }
      return this;
    },
    hasClass: function(selector) {
      var className, elem, i2 = 0;
      className = " " + selector + " ";
      while (elem = this[i2++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  jQuery2.fn.extend({
    val: function(value) {
      var hooks, ret, valueIsFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return ret == null ? "" : ret;
        }
        return;
      }
      valueIsFunction = typeof value === "function";
      return this.each(function(i2) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i2, jQuery2(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery2.map(val, function(value2) {
            return value2 == null ? "" : value2 + "";
          });
        }
        hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery2.extend({
    valHooks: {
      select: {
        get: function(elem) {
          var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
          if (index < 0) {
            i2 = max;
          } else {
            i2 = one ? index : 0;
          }
          for (;i2 < max; i2++) {
            option = options[i2];
            if (option.selected && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              value = jQuery2(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
          while (i2--) {
            option = options[i2];
            if (option.selected = jQuery2.inArray(jQuery2(option).val(), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }
  });
  if (isIE) {
    jQuery2.valHooks.option = {
      get: function(elem) {
        var val = elem.getAttribute("value");
        return val != null ? val : stripAndCollapse(jQuery2.text(elem));
      }
    };
  }
  jQuery2.each(["radio", "checkbox"], function() {
    jQuery2.valHooks[this] = {
      set: function(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
        }
      }
    };
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
    e.stopPropagation();
  };
  jQuery2.extend(jQuery2.event, {
    trigger: function(event, data2, elem, onlyHandlers) {
      var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn2.call(event, "type") ? event.type : event, namespaces = hasOwn2.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document$1;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery2.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data2 = data2 == null ? [event] : jQuery2.makeArray(data2, [event]);
      special = jQuery2.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data2) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (;cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document$1)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
        }
      }
      i2 = 0;
      while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i2 > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data2);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data2);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data2) === false) && acceptData(elem)) {
          if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery2.event.triggered = type;
            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }
            elem[type]();
            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }
            jQuery2.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery2.extend(new jQuery2.Event, event, {
        type,
        isSimulated: true
      });
      jQuery2.event.trigger(e, null, elem);
    }
  });
  jQuery2.fn.extend({
    trigger: function(type, data2) {
      return this.each(function() {
        jQuery2.event.trigger(type, data2, this);
      });
    },
    triggerHandler: function(type, data2) {
      var elem = this[0];
      if (elem) {
        return jQuery2.event.trigger(type, data2, elem, true);
      }
    }
  });
  var location2 = window2.location;
  var nonce = { guid: Date.now() };
  var rquery = /\?/;
  jQuery2.parseXML = function(data2) {
    var xml, parserErrorElem;
    if (!data2 || typeof data2 !== "string") {
      return null;
    }
    try {
      xml = new window2.DOMParser().parseFromString(data2, "text/xml");
    } catch (e) {}
    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
    if (!xml || parserErrorElem) {
      jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
        return el.textContent;
      }).join(`
`) : data2));
    }
    return xml;
  };
  var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix2, obj, traditional, add2) {
    var name;
    if (Array.isArray(obj)) {
      jQuery2.each(obj, function(i2, v) {
        if (traditional || rbracket.test(prefix2)) {
          add2(prefix2, v);
        } else {
          buildParams(prefix2 + "[" + (typeof v === "object" && v != null ? i2 : "") + "]", v, traditional, add2);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      for (name in obj) {
        buildParams(prefix2 + "[" + name + "]", obj[name], traditional, add2);
      }
    } else {
      add2(prefix2, obj);
    }
  }
  jQuery2.param = function(a, traditional) {
    var prefix2, s = [], add2 = function(key, valueOrFunction) {
      var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };
    if (a == null) {
      return "";
    }
    if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
      jQuery2.each(a, function() {
        add2(this.name, this.value);
      });
    } else {
      for (prefix2 in a) {
        buildParams(prefix2, a[prefix2], traditional, add2);
      }
    }
    return s.join("&");
  };
  jQuery2.fn.extend({
    serialize: function() {
      return jQuery2.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery2.prop(this, "elements");
        return elements ? jQuery2.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(_i, elem) {
        var val = jQuery2(this).val();
        if (val == null) {
          return null;
        }
        if (Array.isArray(val)) {
          return jQuery2.map(val, function(val2) {
            return { name: elem.name, value: val2.replace(rCRLF, `\r
`) };
          });
        }
        return { name: elem.name, value: val.replace(rCRLF, `\r
`) };
      }).get();
    }
  });
  var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
  originAnchor.href = location2.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (typeof func === "function") {
        while (dataType = dataTypes[i2++]) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {}, seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery2.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return { state: "success", data: response };
  }
  jQuery2.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location2.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location2.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery2.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
        readyState: 0,
        getResponseHeader: function(key) {
          var match;
          if (completed2) {
            if (!responseHeaders) {
              responseHeaders = {};
              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }
            match = responseHeaders[key.toLowerCase() + " "];
          }
          return match == null ? null : match.join(", ");
        },
        getAllResponseHeaders: function() {
          return completed2 ? responseHeadersString : null;
        },
        setRequestHeader: function(name, value) {
          if (completed2 == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }
          return this;
        },
        overrideMimeType: function(type) {
          if (completed2 == null) {
            s.mimeType = type;
          }
          return this;
        },
        statusCode: function(map) {
          var code;
          if (map) {
            if (completed2) {
              jqXHR.always(map[jqXHR.status]);
            } else {
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]];
              }
            }
          }
          return this;
        },
        abort: function(statusText) {
          var finalText = statusText || strAbort;
          if (transport) {
            transport.abort(finalText);
          }
          done2(0, finalText);
          return this;
        }
      };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document$1.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery2.param(s.data, s.traditional);
      }
      if (completed2) {
        return jqXHR;
      }
      fireGlobals = jQuery2.event && s.global;
      if (fireGlobals && jQuery2.active++ === 0) {
        jQuery2.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, "");
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        }
        s.url = cacheURL + uncached;
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }
      if (s.ifModified) {
        if (jQuery2.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
        }
        if (jQuery2.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i2 in s.headers) {
        jqXHR.setRequestHeader(i2, s.headers[i2]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done2(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (completed2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window2.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed2 = false;
          transport.send(requestHeaders, done2);
        } catch (e) {
          if (completed2) {
            throw e;
          }
          done2(-1, e);
        }
      }
      function done2(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error2, response, modified, statusText = nativeStatusText;
        if (completed2) {
          return;
        }
        completed2 = true;
        if (timeoutTimer) {
          window2.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function() {};
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery2.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery2.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error2 = response.error;
            isSuccess = !error2;
          }
        } else {
          error2 = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error2]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error2]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!--jQuery2.active) {
            jQuery2.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data2, callback) {
      return jQuery2.get(url, data2, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery2.get(url, undefined, callback, "script");
    }
  });
  jQuery2.each(["get", "post"], function(_i, method) {
    jQuery2[method] = function(url, data2, callback, type) {
      if (typeof data2 === "function" || data2 === null) {
        type = type || callback;
        callback = data2;
        data2 = undefined;
      }
      return jQuery2.ajax(jQuery2.extend({
        url,
        type: method,
        dataType: type,
        data: data2,
        success: callback
      }, jQuery2.isPlainObject(url) && url));
    };
  });
  jQuery2.ajaxPrefilter(function(s) {
    var i2;
    for (i2 in s.headers) {
      if (i2.toLowerCase() === "content-type") {
        s.contentType = s.headers[i2] || "";
      }
    }
  });
  jQuery2._evalUrl = function(url, options, doc) {
    return jQuery2.ajax({
      url,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      scriptAttrs: options.crossOrigin ? { crossOrigin: options.crossOrigin } : undefined,
      converters: {
        "text script": function() {}
      },
      dataFilter: function(response) {
        jQuery2.globalEval(response, options, doc);
      }
    });
  };
  jQuery2.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (typeof html === "function") {
          html = html.call(this[0]);
        }
        wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (typeof html === "function") {
        return this.each(function(i2) {
          jQuery2(this).wrapInner(html.call(this, i2));
        });
      }
      return this.each(function() {
        var self = jQuery2(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var htmlIsFunction = typeof html === "function";
      return this.each(function(i2) {
        jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery2(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery2.expr.pseudos.hidden = function(elem) {
    return !jQuery2.expr.pseudos.visible(elem);
  };
  jQuery2.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  jQuery2.ajaxSettings.xhr = function() {
    return new window2.XMLHttpRequest;
  };
  var xhrSuccessStatus = {
    0: 200
  };
  jQuery2.ajaxTransport(function(options) {
    var callback;
    return {
      send: function(headers, complete) {
        var i2, xhr = options.xhr();
        xhr.open(options.type, options.url, options.async, options.username, options.password);
        if (options.xhrFields) {
          for (i2 in options.xhrFields) {
            xhr[i2] = options.xhrFields[i2];
          }
        }
        if (options.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(options.mimeType);
        }
        if (!options.crossDomain && !headers["X-Requested-With"]) {
          headers["X-Requested-With"] = "XMLHttpRequest";
        }
        for (i2 in headers) {
          xhr.setRequestHeader(i2, headers[i2]);
        }
        callback = function(type) {
          return function() {
            if (callback) {
              callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
              if (type === "abort") {
                xhr.abort();
              } else if (type === "error") {
                complete(xhr.status, xhr.statusText);
              } else {
                complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response }, xhr.getAllResponseHeaders());
              }
            }
          };
        };
        xhr.onload = callback();
        xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
        callback = callback("abort");
        try {
          xhr.send(options.hasContent && options.data || null);
        } catch (e) {
          if (callback) {
            throw e;
          }
        }
      },
      abort: function() {
        if (callback) {
          callback();
        }
      }
    };
  });
  function canUseScriptTag(s) {
    return s.scriptAttrs || !s.headers && (s.crossDomain || s.async && jQuery2.inArray("json", s.dataTypes) < 0);
  }
  jQuery2.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    converters: {
      "text script": function(text) {
        jQuery2.globalEval(text);
        return text;
      }
    }
  });
  jQuery2.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (canUseScriptTag(s)) {
      s.type = "GET";
    }
  });
  jQuery2.ajaxTransport("script", function(s) {
    if (canUseScriptTag(s)) {
      var script, callback;
      return {
        send: function(_, complete) {
          script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document$1.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery2.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  });
  jQuery2.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
    if (jsonProp) {
      s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
    } else if (s.jsonp !== false) {
      s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
    }
    s.converters["script json"] = function() {
      if (!responseContainer) {
        jQuery2.error(callbackName + " was not called");
      }
      return responseContainer[0];
    };
    s.dataTypes[0] = "json";
    overwritten = window2[callbackName];
    window2[callbackName] = function() {
      responseContainer = arguments;
    };
    jqXHR.always(function() {
      if (overwritten === undefined) {
        jQuery2(window2).removeProp(callbackName);
      } else {
        window2[callbackName] = overwritten;
      }
      if (s[callbackName]) {
        s.jsonpCallback = originalSettings.jsonpCallback;
        oldCallbacks.push(callbackName);
      }
      if (responseContainer && typeof overwritten === "function") {
        overwritten(responseContainer[0]);
      }
      responseContainer = overwritten = undefined;
    });
    return "script";
  });
  jQuery2.ajaxPrefilter(function(s, origOptions) {
    if (typeof s.data !== "string" && !jQuery2.isPlainObject(s.data) && !Array.isArray(s.data) && !("processData" in origOptions)) {
      s.processData = false;
    }
    if (s.data instanceof window2.FormData) {
      s.contentType = false;
    }
  });
  jQuery2.parseHTML = function(data2, context, keepScripts) {
    if (typeof data2 !== "string" && !isObviousHtml(data2 + "")) {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var parsed, scripts;
    if (!context) {
      context = new window2.DOMParser().parseFromString("", "text/html");
    }
    parsed = rsingleTag.exec(data2);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data2], context, scripts);
    if (scripts && scripts.length) {
      jQuery2(scripts).remove();
    }
    return jQuery2.merge([], parsed.childNodes);
  };
  jQuery2.fn.load = function(url, params, callback) {
    var selector, type, response, self = this, off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (typeof params === "function") {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery2.ajax({
        url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery2.expr.pseudos.animated = function(elem) {
    return jQuery2.grep(jQuery2.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  jQuery2.offset = {
    setOffset: function(elem, options, i2) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery2.css(elem, "top");
      curCSSLeft = jQuery2.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (typeof options === "function") {
        options = options.call(elem, i2, jQuery2.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery2.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i2) {
          jQuery2.offset.setOffset(this, options, i2);
        });
      }
      var rect, win, elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
      }
      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
      if (jQuery2.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset();
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (offsetParent && offsetParent !== doc.documentElement && jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent || doc.documentElement;
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery2.css(offsetParent, "position") !== "static") {
          parentOffset = jQuery2(offsetParent).offset();
          parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
        }
      }
      return {
        top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement$1;
      });
    }
  });
  jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
    var top = prop === "pageYOffset";
    jQuery2.fn[method] = function(val) {
      return access(this, function(elem, method2, val2) {
        var win;
        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }
        if (val2 === undefined) {
          return win ? win[prop] : elem[method2];
        }
        if (win) {
          win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
        } else {
          elem[method2] = val2;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
    jQuery2.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery2.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type2, value2) {
          var doc;
          if (isWindow(elem)) {
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value2 === undefined ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery2.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(_i, type) {
    jQuery2.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery2.fn.extend({
    bind: function(types, data2, fn) {
      return this.on(types, null, data2, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data2, fn) {
      return this.on(types, selector, data2, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function(fnOver, fnOut) {
      return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
    }
  });
  jQuery2.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(_i, name) {
    jQuery2.fn[name] = function(data2, fn) {
      return arguments.length > 0 ? this.on(name, null, data2, fn) : this.trigger(name);
    };
  });
  jQuery2.proxy = function(fn, context) {
    var tmp, args, proxy;
    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }
    if (typeof fn !== "function") {
      return;
    }
    args = slice.call(arguments, 2);
    proxy = function() {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    };
    proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
    return proxy;
  };
  jQuery2.holdReady = function(hold) {
    if (hold) {
      jQuery2.readyWait++;
    } else {
      jQuery2.ready(true);
    }
  };
  jQuery2.expr[":"] = jQuery2.expr.filters = jQuery2.expr.pseudos;
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return jQuery2;
    });
  }
  var { jQuery: _jQuery, $: _$ } = window2;
  jQuery2.noConflict = function(deep) {
    if (window2.$ === jQuery2) {
      window2.$ = _$;
    }
    if (deep && window2.jQuery === jQuery2) {
      window2.jQuery = _jQuery;
    }
    return jQuery2;
  };
  if (typeof noGlobal === "undefined") {
    window2.jQuery = window2.$ = jQuery2;
  }
  return jQuery2;
}
var jQuery2, jquery_module_default;
var init_jquery_module = __esm(() => {
  /*!
   * jQuery JavaScript Library v4.0.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.com/license/
   *
   * Date: 2026-01-18T00:20Z
   */
  jQuery2 = jQueryFactory(window, true);
  jquery_module_default = jQuery2;
});

// node_modules/jquery/dist/wrappers/jquery.bundler-require-wrapper.js
var require_jquery_bundler_require_wrapper = __commonJS((exports, module) => {
  var { jQuery: jQuery3 } = (init_jquery_module(), __toCommonJS(exports_jquery_module));
  module.exports = jQuery3;
});

// node_modules/select2/dist/js/select2.js
var require_select2 = __commonJS((exports, module) => {
  /*!
   * Select2 4.1.0-rc.0
   * https://select2.github.io
   *
   * Released under the MIT license
   * https://github.com/select2/select2/blob/master/LICENSE.md
   */
  (function(factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
      module.exports = function(root, jQuery3) {
        if (jQuery3 === undefined) {
          if (typeof window !== "undefined") {
            jQuery3 = require_jquery_bundler_require_wrapper();
          } else {
            jQuery3 = require_jquery_bundler_require_wrapper()(root);
          }
        }
        factory(jQuery3);
        return jQuery3;
      };
    } else {
      factory(jQuery);
    }
  })(function(jQuery3) {
    var S2 = function() {
      if (jQuery3 && jQuery3.fn && jQuery3.fn.select2 && jQuery3.fn.select2.amd) {
        var S22 = jQuery3.fn.select2.amd;
      }
      var S22;
      (function() {
        if (!S22 || !S22.requirejs) {
          if (!S22) {
            S22 = {};
          } else {
            require2 = S22;
          }
          var requirejs, require2, define2;
          (function(undef) {
            var main, req, makeMap2, handlers, defined = {}, waiting = {}, config = {}, defining = {}, hasOwn2 = Object.prototype.hasOwnProperty, aps = [].slice, jsSuffixRegExp = /\.js$/;
            function hasProp(obj, prop) {
              return hasOwn2.call(obj, prop);
            }
            function normalize(name, baseName) {
              var nameParts, nameSegment, mapValue, foundMap, lastIndex, foundI, foundStarMap, starI, i2, j, part, normalizedBaseParts, baseParts = baseName && baseName.split("/"), map = config.map, starMap = map && map["*"] || {};
              if (name) {
                name = name.split("/");
                lastIndex = name.length - 1;
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "");
                }
                if (name[0].charAt(0) === "." && baseParts) {
                  normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                  name = normalizedBaseParts.concat(name);
                }
                for (i2 = 0;i2 < name.length; i2++) {
                  part = name[i2];
                  if (part === ".") {
                    name.splice(i2, 1);
                    i2 -= 1;
                  } else if (part === "..") {
                    if (i2 === 0 || i2 === 1 && name[2] === ".." || name[i2 - 1] === "..") {
                      continue;
                    } else if (i2 > 0) {
                      name.splice(i2 - 1, 2);
                      i2 -= 2;
                    }
                  }
                }
                name = name.join("/");
              }
              if ((baseParts || starMap) && map) {
                nameParts = name.split("/");
                for (i2 = nameParts.length;i2 > 0; i2 -= 1) {
                  nameSegment = nameParts.slice(0, i2).join("/");
                  if (baseParts) {
                    for (j = baseParts.length;j > 0; j -= 1) {
                      mapValue = map[baseParts.slice(0, j).join("/")];
                      if (mapValue) {
                        mapValue = mapValue[nameSegment];
                        if (mapValue) {
                          foundMap = mapValue;
                          foundI = i2;
                          break;
                        }
                      }
                    }
                  }
                  if (foundMap) {
                    break;
                  }
                  if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i2;
                  }
                }
                if (!foundMap && foundStarMap) {
                  foundMap = foundStarMap;
                  foundI = starI;
                }
                if (foundMap) {
                  nameParts.splice(0, foundI, foundMap);
                  name = nameParts.join("/");
                }
              }
              return name;
            }
            function makeRequire(relName, forceSync) {
              return function() {
                var args = aps.call(arguments, 0);
                if (typeof args[0] !== "string" && args.length === 1) {
                  args.push(null);
                }
                return req.apply(undef, args.concat([relName, forceSync]));
              };
            }
            function makeNormalize(relName) {
              return function(name) {
                return normalize(name, relName);
              };
            }
            function makeLoad(depName) {
              return function(value) {
                defined[depName] = value;
              };
            }
            function callDep(name) {
              if (hasProp(waiting, name)) {
                var args = waiting[name];
                delete waiting[name];
                defining[name] = true;
                main.apply(undef, args);
              }
              if (!hasProp(defined, name) && !hasProp(defining, name)) {
                throw new Error("No " + name);
              }
              return defined[name];
            }
            function splitPrefix(name) {
              var prefix2, index = name ? name.indexOf("!") : -1;
              if (index > -1) {
                prefix2 = name.substring(0, index);
                name = name.substring(index + 1, name.length);
              }
              return [prefix2, name];
            }
            function makeRelParts(relName) {
              return relName ? splitPrefix(relName) : [];
            }
            makeMap2 = function(name, relParts) {
              var plugin2, parts = splitPrefix(name), prefix2 = parts[0], relResourceName = relParts[1];
              name = parts[1];
              if (prefix2) {
                prefix2 = normalize(prefix2, relResourceName);
                plugin2 = callDep(prefix2);
              }
              if (prefix2) {
                if (plugin2 && plugin2.normalize) {
                  name = plugin2.normalize(name, makeNormalize(relResourceName));
                } else {
                  name = normalize(name, relResourceName);
                }
              } else {
                name = normalize(name, relResourceName);
                parts = splitPrefix(name);
                prefix2 = parts[0];
                name = parts[1];
                if (prefix2) {
                  plugin2 = callDep(prefix2);
                }
              }
              return {
                f: prefix2 ? prefix2 + "!" + name : name,
                n: name,
                pr: prefix2,
                p: plugin2
              };
            };
            function makeConfig(name) {
              return function() {
                return config && config.config && config.config[name] || {};
              };
            }
            handlers = {
              require: function(name) {
                return makeRequire(name);
              },
              exports: function(name) {
                var e = defined[name];
                if (typeof e !== "undefined") {
                  return e;
                } else {
                  return defined[name] = {};
                }
              },
              module: function(name) {
                return {
                  id: name,
                  uri: "",
                  exports: defined[name],
                  config: makeConfig(name)
                };
              }
            };
            main = function(name, deps, callback, relName) {
              var cjsModule, depName, ret, map, i2, relParts, args = [], callbackType = typeof callback, usingExports;
              relName = relName || name;
              relParts = makeRelParts(relName);
              if (callbackType === "undefined" || callbackType === "function") {
                deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps;
                for (i2 = 0;i2 < deps.length; i2 += 1) {
                  map = makeMap2(deps[i2], relParts);
                  depName = map.f;
                  if (depName === "require") {
                    args[i2] = handlers.require(name);
                  } else if (depName === "exports") {
                    args[i2] = handlers.exports(name);
                    usingExports = true;
                  } else if (depName === "module") {
                    cjsModule = args[i2] = handlers.module(name);
                  } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                    args[i2] = callDep(depName);
                  } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i2] = defined[depName];
                  } else {
                    throw new Error(name + " missing " + depName);
                  }
                }
                ret = callback ? callback.apply(defined[name], args) : undefined;
                if (name) {
                  if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                  } else if (ret !== undef || !usingExports) {
                    defined[name] = ret;
                  }
                }
              } else if (name) {
                defined[name] = callback;
              }
            };
            requirejs = require2 = req = function(deps, callback, relName, forceSync, alt) {
              if (typeof deps === "string") {
                if (handlers[deps]) {
                  return handlers[deps](callback);
                }
                return callDep(makeMap2(deps, makeRelParts(callback)).f);
              } else if (!deps.splice) {
                config = deps;
                if (config.deps) {
                  req(config.deps, config.callback);
                }
                if (!callback) {
                  return;
                }
                if (callback.splice) {
                  deps = callback;
                  callback = relName;
                  relName = null;
                } else {
                  deps = undef;
                }
              }
              callback = callback || function() {};
              if (typeof relName === "function") {
                relName = forceSync;
                forceSync = alt;
              }
              if (forceSync) {
                main(undef, deps, callback, relName);
              } else {
                setTimeout(function() {
                  main(undef, deps, callback, relName);
                }, 4);
              }
              return req;
            };
            req.config = function(cfg) {
              return req(cfg);
            };
            requirejs._defined = defined;
            define2 = function(name, deps, callback) {
              if (typeof name !== "string") {
                throw new Error("See almond README: incorrect module build, no module name");
              }
              if (!deps.splice) {
                callback = deps;
                deps = [];
              }
              if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                waiting[name] = [name, deps, callback];
              }
            };
            define2.amd = {
              jQuery: true
            };
          })();
          S22.requirejs = requirejs;
          S22.require = require2;
          S22.define = define2;
        }
      })();
      S22.define("almond", function() {});
      S22.define("jquery", [], function() {
        var _$ = jQuery3 || $;
        if (_$ == null && console && console.error) {
          console.error("Select2: An instance of jQuery or a jQuery-compatible library was not " + "found. Make sure that you are including jQuery before Select2 on your " + "web page.");
        }
        return _$;
      });
      S22.define("select2/utils", [
        "jquery"
      ], function($3) {
        var Utils = {};
        Utils.Extend = function(ChildClass, SuperClass) {
          var __hasProp = {}.hasOwnProperty;
          function BaseConstructor() {
            this.constructor = ChildClass;
          }
          for (var key in SuperClass) {
            if (__hasProp.call(SuperClass, key)) {
              ChildClass[key] = SuperClass[key];
            }
          }
          BaseConstructor.prototype = SuperClass.prototype;
          ChildClass.prototype = new BaseConstructor;
          ChildClass.__super__ = SuperClass.prototype;
          return ChildClass;
        };
        function getMethods(theClass) {
          var proto = theClass.prototype;
          var methods = [];
          for (var methodName in proto) {
            var m = proto[methodName];
            if (typeof m !== "function") {
              continue;
            }
            if (methodName === "constructor") {
              continue;
            }
            methods.push(methodName);
          }
          return methods;
        }
        Utils.Decorate = function(SuperClass, DecoratorClass) {
          var decoratedMethods = getMethods(DecoratorClass);
          var superMethods = getMethods(SuperClass);
          function DecoratedClass() {
            var unshift = Array.prototype.unshift;
            var argCount = DecoratorClass.prototype.constructor.length;
            var calledConstructor = SuperClass.prototype.constructor;
            if (argCount > 0) {
              unshift.call(arguments, SuperClass.prototype.constructor);
              calledConstructor = DecoratorClass.prototype.constructor;
            }
            calledConstructor.apply(this, arguments);
          }
          DecoratorClass.displayName = SuperClass.displayName;
          function ctr() {
            this.constructor = DecoratedClass;
          }
          DecoratedClass.prototype = new ctr;
          for (var m = 0;m < superMethods.length; m++) {
            var superMethod = superMethods[m];
            DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
          }
          var calledMethod = function(methodName) {
            var originalMethod = function() {};
            if (methodName in DecoratedClass.prototype) {
              originalMethod = DecoratedClass.prototype[methodName];
            }
            var decoratedMethod2 = DecoratorClass.prototype[methodName];
            return function() {
              var unshift = Array.prototype.unshift;
              unshift.call(arguments, originalMethod);
              return decoratedMethod2.apply(this, arguments);
            };
          };
          for (var d = 0;d < decoratedMethods.length; d++) {
            var decoratedMethod = decoratedMethods[d];
            DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
          }
          return DecoratedClass;
        };
        var Observable = function() {
          this.listeners = {};
        };
        Observable.prototype.on = function(event, callback) {
          this.listeners = this.listeners || {};
          if (event in this.listeners) {
            this.listeners[event].push(callback);
          } else {
            this.listeners[event] = [callback];
          }
        };
        Observable.prototype.trigger = function(event) {
          var slice = Array.prototype.slice;
          var params = slice.call(arguments, 1);
          this.listeners = this.listeners || {};
          if (params == null) {
            params = [];
          }
          if (params.length === 0) {
            params.push({});
          }
          params[0]._type = event;
          if (event in this.listeners) {
            this.invoke(this.listeners[event], slice.call(arguments, 1));
          }
          if ("*" in this.listeners) {
            this.invoke(this.listeners["*"], arguments);
          }
        };
        Observable.prototype.invoke = function(listeners, params) {
          for (var i2 = 0, len = listeners.length;i2 < len; i2++) {
            listeners[i2].apply(this, params);
          }
        };
        Utils.Observable = Observable;
        Utils.generateChars = function(length) {
          var chars = "";
          for (var i2 = 0;i2 < length; i2++) {
            var randomChar = Math.floor(Math.random() * 36);
            chars += randomChar.toString(36);
          }
          return chars;
        };
        Utils.bind = function(func, context) {
          return function() {
            func.apply(context, arguments);
          };
        };
        Utils._convertData = function(data2) {
          for (var originalKey in data2) {
            var keys = originalKey.split("-");
            var dataLevel = data2;
            if (keys.length === 1) {
              continue;
            }
            for (var k = 0;k < keys.length; k++) {
              var key = keys[k];
              key = key.substring(0, 1).toLowerCase() + key.substring(1);
              if (!(key in dataLevel)) {
                dataLevel[key] = {};
              }
              if (k == keys.length - 1) {
                dataLevel[key] = data2[originalKey];
              }
              dataLevel = dataLevel[key];
            }
            delete data2[originalKey];
          }
          return data2;
        };
        Utils.hasScroll = function(index, el) {
          var $el = $3(el);
          var overflowX = el.style.overflowX;
          var overflowY = el.style.overflowY;
          if (overflowX === overflowY && (overflowY === "hidden" || overflowY === "visible")) {
            return false;
          }
          if (overflowX === "scroll" || overflowY === "scroll") {
            return true;
          }
          return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
        };
        Utils.escapeMarkup = function(markup) {
          var replaceMap = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          if (typeof markup !== "string") {
            return markup;
          }
          return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
            return replaceMap[match];
          });
        };
        Utils.__cache = {};
        var id = 0;
        Utils.GetUniqueElementId = function(element) {
          var select2Id = element.getAttribute("data-select2-id");
          if (select2Id != null) {
            return select2Id;
          }
          if (element.id) {
            select2Id = "select2-data-" + element.id;
          } else {
            select2Id = "select2-data-" + (++id).toString() + "-" + Utils.generateChars(4);
          }
          element.setAttribute("data-select2-id", select2Id);
          return select2Id;
        };
        Utils.StoreData = function(element, name, value) {
          var id2 = Utils.GetUniqueElementId(element);
          if (!Utils.__cache[id2]) {
            Utils.__cache[id2] = {};
          }
          Utils.__cache[id2][name] = value;
        };
        Utils.GetData = function(element, name) {
          var id2 = Utils.GetUniqueElementId(element);
          if (name) {
            if (Utils.__cache[id2]) {
              if (Utils.__cache[id2][name] != null) {
                return Utils.__cache[id2][name];
              }
              return $3(element).data(name);
            }
            return $3(element).data(name);
          } else {
            return Utils.__cache[id2];
          }
        };
        Utils.RemoveData = function(element) {
          var id2 = Utils.GetUniqueElementId(element);
          if (Utils.__cache[id2] != null) {
            delete Utils.__cache[id2];
          }
          element.removeAttribute("data-select2-id");
        };
        Utils.copyNonInternalCssClasses = function(dest, src) {
          var classes;
          var destinationClasses = dest.getAttribute("class").trim().split(/\s+/);
          destinationClasses = destinationClasses.filter(function(clazz) {
            return clazz.indexOf("select2-") === 0;
          });
          var sourceClasses = src.getAttribute("class").trim().split(/\s+/);
          sourceClasses = sourceClasses.filter(function(clazz) {
            return clazz.indexOf("select2-") !== 0;
          });
          var replacements = destinationClasses.concat(sourceClasses);
          dest.setAttribute("class", replacements.join(" "));
        };
        return Utils;
      });
      S22.define("select2/results", [
        "jquery",
        "./utils"
      ], function($3, Utils) {
        function Results($element, options, dataAdapter) {
          this.$element = $element;
          this.data = dataAdapter;
          this.options = options;
          Results.__super__.constructor.call(this);
        }
        Utils.Extend(Results, Utils.Observable);
        Results.prototype.render = function() {
          var $results = $3('<ul class="select2-results__options" role="listbox"></ul>');
          if (this.options.get("multiple")) {
            $results.attr("aria-multiselectable", "true");
          }
          this.$results = $results;
          return $results;
        };
        Results.prototype.clear = function() {
          this.$results.empty();
        };
        Results.prototype.displayMessage = function(params) {
          var escapeMarkup = this.options.get("escapeMarkup");
          this.clear();
          this.hideLoading();
          var $message = $3('<li role="alert" aria-live="assertive"' + ' class="select2-results__option"></li>');
          var message = this.options.get("translations").get(params.message);
          $message.append(escapeMarkup(message(params.args)));
          $message[0].className += " select2-results__message";
          this.$results.append($message);
        };
        Results.prototype.hideMessages = function() {
          this.$results.find(".select2-results__message").remove();
        };
        Results.prototype.append = function(data2) {
          this.hideLoading();
          var $options = [];
          if (data2.results == null || data2.results.length === 0) {
            if (this.$results.children().length === 0) {
              this.trigger("results:message", {
                message: "noResults"
              });
            }
            return;
          }
          data2.results = this.sort(data2.results);
          for (var d = 0;d < data2.results.length; d++) {
            var item = data2.results[d];
            var $option = this.option(item);
            $options.push($option);
          }
          this.$results.append($options);
        };
        Results.prototype.position = function($results, $dropdown) {
          var $resultsContainer = $dropdown.find(".select2-results");
          $resultsContainer.append($results);
        };
        Results.prototype.sort = function(data2) {
          var sorter = this.options.get("sorter");
          return sorter(data2);
        };
        Results.prototype.highlightFirstItem = function() {
          var $options = this.$results.find(".select2-results__option--selectable");
          var $selected = $options.filter(".select2-results__option--selected");
          if ($selected.length > 0) {
            $selected.first().trigger("mouseenter");
          } else {
            $options.first().trigger("mouseenter");
          }
          this.ensureHighlightVisible();
        };
        Results.prototype.setClasses = function() {
          var self = this;
          this.data.current(function(selected) {
            var selectedIds = selected.map(function(s) {
              return s.id.toString();
            });
            var $options = self.$results.find(".select2-results__option--selectable");
            $options.each(function() {
              var $option = $3(this);
              var item = Utils.GetData(this, "data");
              var id = "" + item.id;
              if (item.element != null && item.element.selected || item.element == null && selectedIds.indexOf(id) > -1) {
                this.classList.add("select2-results__option--selected");
                $option.attr("aria-selected", "true");
              } else {
                this.classList.remove("select2-results__option--selected");
                $option.attr("aria-selected", "false");
              }
            });
          });
        };
        Results.prototype.showLoading = function(params) {
          this.hideLoading();
          var loadingMore = this.options.get("translations").get("searching");
          var loading = {
            disabled: true,
            loading: true,
            text: loadingMore(params)
          };
          var $loading = this.option(loading);
          $loading.className += " loading-results";
          this.$results.prepend($loading);
        };
        Results.prototype.hideLoading = function() {
          this.$results.find(".loading-results").remove();
        };
        Results.prototype.option = function(data2) {
          var option = document.createElement("li");
          option.classList.add("select2-results__option");
          option.classList.add("select2-results__option--selectable");
          var attrs = {
            role: "option"
          };
          var matches = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
          if (data2.element != null && matches.call(data2.element, ":disabled") || data2.element == null && data2.disabled) {
            attrs["aria-disabled"] = "true";
            option.classList.remove("select2-results__option--selectable");
            option.classList.add("select2-results__option--disabled");
          }
          if (data2.id == null) {
            option.classList.remove("select2-results__option--selectable");
          }
          if (data2._resultId != null) {
            option.id = data2._resultId;
          }
          if (data2.title) {
            option.title = data2.title;
          }
          if (data2.children) {
            attrs.role = "group";
            attrs["aria-label"] = data2.text;
            option.classList.remove("select2-results__option--selectable");
            option.classList.add("select2-results__option--group");
          }
          for (var attr in attrs) {
            var val = attrs[attr];
            option.setAttribute(attr, val);
          }
          if (data2.children) {
            var $option = $3(option);
            var label = document.createElement("strong");
            label.className = "select2-results__group";
            this.template(data2, label);
            var $children = [];
            for (var c = 0;c < data2.children.length; c++) {
              var child = data2.children[c];
              var $child = this.option(child);
              $children.push($child);
            }
            var $childrenContainer = $3("<ul></ul>", {
              class: "select2-results__options select2-results__options--nested",
              role: "none"
            });
            $childrenContainer.append($children);
            $option.append(label);
            $option.append($childrenContainer);
          } else {
            this.template(data2, option);
          }
          Utils.StoreData(option, "data", data2);
          return option;
        };
        Results.prototype.bind = function(container, $container) {
          var self = this;
          var id = container.id + "-results";
          this.$results.attr("id", id);
          container.on("results:all", function(params) {
            self.clear();
            self.append(params.data);
            if (container.isOpen()) {
              self.setClasses();
              self.highlightFirstItem();
            }
          });
          container.on("results:append", function(params) {
            self.append(params.data);
            if (container.isOpen()) {
              self.setClasses();
            }
          });
          container.on("query", function(params) {
            self.hideMessages();
            self.showLoading(params);
          });
          container.on("select", function() {
            if (!container.isOpen()) {
              return;
            }
            self.setClasses();
            if (self.options.get("scrollAfterSelect")) {
              self.highlightFirstItem();
            }
          });
          container.on("unselect", function() {
            if (!container.isOpen()) {
              return;
            }
            self.setClasses();
            if (self.options.get("scrollAfterSelect")) {
              self.highlightFirstItem();
            }
          });
          container.on("open", function() {
            self.$results.attr("aria-expanded", "true");
            self.$results.attr("aria-hidden", "false");
            self.setClasses();
            self.ensureHighlightVisible();
          });
          container.on("close", function() {
            self.$results.attr("aria-expanded", "false");
            self.$results.attr("aria-hidden", "true");
            self.$results.removeAttr("aria-activedescendant");
          });
          container.on("results:toggle", function() {
            var $highlighted = self.getHighlightedResults();
            if ($highlighted.length === 0) {
              return;
            }
            $highlighted.trigger("mouseup");
          });
          container.on("results:select", function() {
            var $highlighted = self.getHighlightedResults();
            if ($highlighted.length === 0) {
              return;
            }
            var data2 = Utils.GetData($highlighted[0], "data");
            if ($highlighted.hasClass("select2-results__option--selected")) {
              self.trigger("close", {});
            } else {
              self.trigger("select", {
                data: data2
              });
            }
          });
          container.on("results:previous", function() {
            var $highlighted = self.getHighlightedResults();
            var $options = self.$results.find(".select2-results__option--selectable");
            var currentIndex = $options.index($highlighted);
            if (currentIndex <= 0) {
              return;
            }
            var nextIndex = currentIndex - 1;
            if ($highlighted.length === 0) {
              nextIndex = 0;
            }
            var $next = $options.eq(nextIndex);
            $next.trigger("mouseenter");
            var currentOffset = self.$results.offset().top;
            var nextTop = $next.offset().top;
            var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
            if (nextIndex === 0) {
              self.$results.scrollTop(0);
            } else if (nextTop - currentOffset < 0) {
              self.$results.scrollTop(nextOffset);
            }
          });
          container.on("results:next", function() {
            var $highlighted = self.getHighlightedResults();
            var $options = self.$results.find(".select2-results__option--selectable");
            var currentIndex = $options.index($highlighted);
            var nextIndex = currentIndex + 1;
            if (nextIndex >= $options.length) {
              return;
            }
            var $next = $options.eq(nextIndex);
            $next.trigger("mouseenter");
            var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
            var nextBottom = $next.offset().top + $next.outerHeight(false);
            var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
            if (nextIndex === 0) {
              self.$results.scrollTop(0);
            } else if (nextBottom > currentOffset) {
              self.$results.scrollTop(nextOffset);
            }
          });
          container.on("results:focus", function(params) {
            params.element[0].classList.add("select2-results__option--highlighted");
            params.element[0].setAttribute("aria-selected", "true");
          });
          container.on("results:message", function(params) {
            self.displayMessage(params);
          });
          if ($3.fn.mousewheel) {
            this.$results.on("mousewheel", function(e) {
              var top = self.$results.scrollTop();
              var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
              var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
              var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
              if (isAtTop) {
                self.$results.scrollTop(0);
                e.preventDefault();
                e.stopPropagation();
              } else if (isAtBottom) {
                self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
          this.$results.on("mouseup", ".select2-results__option--selectable", function(evt) {
            var $this = $3(this);
            var data2 = Utils.GetData(this, "data");
            if ($this.hasClass("select2-results__option--selected")) {
              if (self.options.get("multiple")) {
                self.trigger("unselect", {
                  originalEvent: evt,
                  data: data2
                });
              } else {
                self.trigger("close", {});
              }
              return;
            }
            self.trigger("select", {
              originalEvent: evt,
              data: data2
            });
          });
          this.$results.on("mouseenter", ".select2-results__option--selectable", function(evt) {
            var data2 = Utils.GetData(this, "data");
            self.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false");
            self.trigger("results:focus", {
              data: data2,
              element: $3(this)
            });
          });
        };
        Results.prototype.getHighlightedResults = function() {
          var $highlighted = this.$results.find(".select2-results__option--highlighted");
          return $highlighted;
        };
        Results.prototype.destroy = function() {
          this.$results.remove();
        };
        Results.prototype.ensureHighlightVisible = function() {
          var $highlighted = this.getHighlightedResults();
          if ($highlighted.length === 0) {
            return;
          }
          var $options = this.$results.find(".select2-results__option--selectable");
          var currentIndex = $options.index($highlighted);
          var currentOffset = this.$results.offset().top;
          var nextTop = $highlighted.offset().top;
          var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
          var offsetDelta = nextTop - currentOffset;
          nextOffset -= $highlighted.outerHeight(false) * 2;
          if (currentIndex <= 2) {
            this.$results.scrollTop(0);
          } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
            this.$results.scrollTop(nextOffset);
          }
        };
        Results.prototype.template = function(result, container) {
          var template = this.options.get("templateResult");
          var escapeMarkup = this.options.get("escapeMarkup");
          var content = template(result, container);
          if (content == null) {
            container.style.display = "none";
          } else if (typeof content === "string") {
            container.innerHTML = escapeMarkup(content);
          } else {
            $3(container).append(content);
          }
        };
        return Results;
      });
      S22.define("select2/keys", [], function() {
        var KEYS = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
        return KEYS;
      });
      S22.define("select2/selection/base", [
        "jquery",
        "../utils",
        "../keys"
      ], function($3, Utils, KEYS) {
        function BaseSelection($element, options) {
          this.$element = $element;
          this.options = options;
          BaseSelection.__super__.constructor.call(this);
        }
        Utils.Extend(BaseSelection, Utils.Observable);
        BaseSelection.prototype.render = function() {
          var $selection = $3('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + "</span>");
          this._tabindex = 0;
          if (Utils.GetData(this.$element[0], "old-tabindex") != null) {
            this._tabindex = Utils.GetData(this.$element[0], "old-tabindex");
          } else if (this.$element.attr("tabindex") != null) {
            this._tabindex = this.$element.attr("tabindex");
          }
          $selection.attr("title", this.$element.attr("title"));
          $selection.attr("tabindex", this._tabindex);
          $selection.attr("aria-disabled", "false");
          this.$selection = $selection;
          return $selection;
        };
        BaseSelection.prototype.bind = function(container, $container) {
          var self = this;
          var resultsId = container.id + "-results";
          this.container = container;
          this.$selection.on("focus", function(evt) {
            self.trigger("focus", evt);
          });
          this.$selection.on("blur", function(evt) {
            self._handleBlur(evt);
          });
          this.$selection.on("keydown", function(evt) {
            self.trigger("keypress", evt);
            if (evt.which === KEYS.SPACE) {
              evt.preventDefault();
            }
          });
          container.on("results:focus", function(params) {
            self.$selection.attr("aria-activedescendant", params.data._resultId);
          });
          container.on("selection:update", function(params) {
            self.update(params.data);
          });
          container.on("open", function() {
            self.$selection.attr("aria-expanded", "true");
            self.$selection.attr("aria-owns", resultsId);
            self._attachCloseHandler(container);
          });
          container.on("close", function() {
            self.$selection.attr("aria-expanded", "false");
            self.$selection.removeAttr("aria-activedescendant");
            self.$selection.removeAttr("aria-owns");
            self.$selection.trigger("focus");
            self._detachCloseHandler(container);
          });
          container.on("enable", function() {
            self.$selection.attr("tabindex", self._tabindex);
            self.$selection.attr("aria-disabled", "false");
          });
          container.on("disable", function() {
            self.$selection.attr("tabindex", "-1");
            self.$selection.attr("aria-disabled", "true");
          });
        };
        BaseSelection.prototype._handleBlur = function(evt) {
          var self = this;
          window.setTimeout(function() {
            if (document.activeElement == self.$selection[0] || $3.contains(self.$selection[0], document.activeElement)) {
              return;
            }
            self.trigger("blur", evt);
          }, 1);
        };
        BaseSelection.prototype._attachCloseHandler = function(container) {
          $3(document.body).on("mousedown.select2." + container.id, function(e) {
            var $target = $3(e.target);
            var $select = $target.closest(".select2");
            var $all = $3(".select2.select2-container--open");
            $all.each(function() {
              if (this == $select[0]) {
                return;
              }
              var $element = Utils.GetData(this, "element");
              $element.select2("close");
            });
          });
        };
        BaseSelection.prototype._detachCloseHandler = function(container) {
          $3(document.body).off("mousedown.select2." + container.id);
        };
        BaseSelection.prototype.position = function($selection, $container) {
          var $selectionContainer = $container.find(".selection");
          $selectionContainer.append($selection);
        };
        BaseSelection.prototype.destroy = function() {
          this._detachCloseHandler(this.container);
        };
        BaseSelection.prototype.update = function(data2) {
          throw new Error("The `update` method must be defined in child classes.");
        };
        BaseSelection.prototype.isEnabled = function() {
          return !this.isDisabled();
        };
        BaseSelection.prototype.isDisabled = function() {
          return this.options.get("disabled");
        };
        return BaseSelection;
      });
      S22.define("select2/selection/single", [
        "jquery",
        "./base",
        "../utils",
        "../keys"
      ], function($3, BaseSelection, Utils, KEYS) {
        function SingleSelection() {
          SingleSelection.__super__.constructor.apply(this, arguments);
        }
        Utils.Extend(SingleSelection, BaseSelection);
        SingleSelection.prototype.render = function() {
          var $selection = SingleSelection.__super__.render.call(this);
          $selection[0].classList.add("select2-selection--single");
          $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + "</span>");
          return $selection;
        };
        SingleSelection.prototype.bind = function(container, $container) {
          var self = this;
          SingleSelection.__super__.bind.apply(this, arguments);
          var id = container.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", id).attr("role", "textbox").attr("aria-readonly", "true");
          this.$selection.attr("aria-labelledby", id);
          this.$selection.attr("aria-controls", id);
          this.$selection.on("mousedown", function(evt) {
            if (evt.which !== 1) {
              return;
            }
            self.trigger("toggle", {
              originalEvent: evt
            });
          });
          this.$selection.on("focus", function(evt) {});
          this.$selection.on("blur", function(evt) {});
          container.on("focus", function(evt) {
            if (!container.isOpen()) {
              self.$selection.trigger("focus");
            }
          });
        };
        SingleSelection.prototype.clear = function() {
          var $rendered = this.$selection.find(".select2-selection__rendered");
          $rendered.empty();
          $rendered.removeAttr("title");
        };
        SingleSelection.prototype.display = function(data2, container) {
          var template = this.options.get("templateSelection");
          var escapeMarkup = this.options.get("escapeMarkup");
          return escapeMarkup(template(data2, container));
        };
        SingleSelection.prototype.selectionContainer = function() {
          return $3("<span></span>");
        };
        SingleSelection.prototype.update = function(data2) {
          if (data2.length === 0) {
            this.clear();
            return;
          }
          var selection = data2[0];
          var $rendered = this.$selection.find(".select2-selection__rendered");
          var formatted = this.display(selection, $rendered);
          $rendered.empty().append(formatted);
          var title = selection.title || selection.text;
          if (title) {
            $rendered.attr("title", title);
          } else {
            $rendered.removeAttr("title");
          }
        };
        return SingleSelection;
      });
      S22.define("select2/selection/multiple", [
        "jquery",
        "./base",
        "../utils"
      ], function($3, BaseSelection, Utils) {
        function MultipleSelection($element, options) {
          MultipleSelection.__super__.constructor.apply(this, arguments);
        }
        Utils.Extend(MultipleSelection, BaseSelection);
        MultipleSelection.prototype.render = function() {
          var $selection = MultipleSelection.__super__.render.call(this);
          $selection[0].classList.add("select2-selection--multiple");
          $selection.html('<ul class="select2-selection__rendered"></ul>');
          return $selection;
        };
        MultipleSelection.prototype.bind = function(container, $container) {
          var self = this;
          MultipleSelection.__super__.bind.apply(this, arguments);
          var id = container.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", id);
          this.$selection.on("click", function(evt) {
            self.trigger("toggle", {
              originalEvent: evt
            });
          });
          this.$selection.on("click", ".select2-selection__choice__remove", function(evt) {
            if (self.isDisabled()) {
              return;
            }
            var $remove = $3(this);
            var $selection = $remove.parent();
            var data2 = Utils.GetData($selection[0], "data");
            self.trigger("unselect", {
              originalEvent: evt,
              data: data2
            });
          });
          this.$selection.on("keydown", ".select2-selection__choice__remove", function(evt) {
            if (self.isDisabled()) {
              return;
            }
            evt.stopPropagation();
          });
        };
        MultipleSelection.prototype.clear = function() {
          var $rendered = this.$selection.find(".select2-selection__rendered");
          $rendered.empty();
          $rendered.removeAttr("title");
        };
        MultipleSelection.prototype.display = function(data2, container) {
          var template = this.options.get("templateSelection");
          var escapeMarkup = this.options.get("escapeMarkup");
          return escapeMarkup(template(data2, container));
        };
        MultipleSelection.prototype.selectionContainer = function() {
          var $container = $3('<li class="select2-selection__choice">' + '<button type="button" class="select2-selection__choice__remove" ' + 'tabindex="-1">' + '<span aria-hidden="true">&times;</span>' + "</button>" + '<span class="select2-selection__choice__display"></span>' + "</li>");
          return $container;
        };
        MultipleSelection.prototype.update = function(data2) {
          this.clear();
          if (data2.length === 0) {
            return;
          }
          var $selections = [];
          var selectionIdPrefix = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-";
          for (var d = 0;d < data2.length; d++) {
            var selection = data2[d];
            var $selection = this.selectionContainer();
            var formatted = this.display(selection, $selection);
            var selectionId = selectionIdPrefix + Utils.generateChars(4) + "-";
            if (selection.id) {
              selectionId += selection.id;
            } else {
              selectionId += Utils.generateChars(4);
            }
            $selection.find(".select2-selection__choice__display").append(formatted).attr("id", selectionId);
            var title = selection.title || selection.text;
            if (title) {
              $selection.attr("title", title);
            }
            var removeItem = this.options.get("translations").get("removeItem");
            var $remove = $selection.find(".select2-selection__choice__remove");
            $remove.attr("title", removeItem());
            $remove.attr("aria-label", removeItem());
            $remove.attr("aria-describedby", selectionId);
            Utils.StoreData($selection[0], "data", selection);
            $selections.push($selection);
          }
          var $rendered = this.$selection.find(".select2-selection__rendered");
          $rendered.append($selections);
        };
        return MultipleSelection;
      });
      S22.define("select2/selection/placeholder", [], function() {
        function Placeholder(decorated, $element, options) {
          this.placeholder = this.normalizePlaceholder(options.get("placeholder"));
          decorated.call(this, $element, options);
        }
        Placeholder.prototype.normalizePlaceholder = function(_, placeholder) {
          if (typeof placeholder === "string") {
            placeholder = {
              id: "",
              text: placeholder
            };
          }
          return placeholder;
        };
        Placeholder.prototype.createPlaceholder = function(decorated, placeholder) {
          var $placeholder = this.selectionContainer();
          $placeholder.html(this.display(placeholder));
          $placeholder[0].classList.add("select2-selection__placeholder");
          $placeholder[0].classList.remove("select2-selection__choice");
          var placeholderTitle = placeholder.title || placeholder.text || $placeholder.text();
          this.$selection.find(".select2-selection__rendered").attr("title", placeholderTitle);
          return $placeholder;
        };
        Placeholder.prototype.update = function(decorated, data2) {
          var singlePlaceholder = data2.length == 1 && data2[0].id != this.placeholder.id;
          var multipleSelections = data2.length > 1;
          if (multipleSelections || singlePlaceholder) {
            return decorated.call(this, data2);
          }
          this.clear();
          var $placeholder = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append($placeholder);
        };
        return Placeholder;
      });
      S22.define("select2/selection/allowClear", [
        "jquery",
        "../keys",
        "../utils"
      ], function($3, KEYS, Utils) {
        function AllowClear() {}
        AllowClear.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          if (this.placeholder == null) {
            if (this.options.get("debug") && window.console && console.error) {
              console.error("Select2: The `allowClear` option should be used in combination " + "with the `placeholder` option.");
            }
          }
          this.$selection.on("mousedown", ".select2-selection__clear", function(evt) {
            self._handleClear(evt);
          });
          container.on("keypress", function(evt) {
            self._handleKeyboardClear(evt, container);
          });
        };
        AllowClear.prototype._handleClear = function(_, evt) {
          if (this.isDisabled()) {
            return;
          }
          var $clear = this.$selection.find(".select2-selection__clear");
          if ($clear.length === 0) {
            return;
          }
          evt.stopPropagation();
          var data2 = Utils.GetData($clear[0], "data");
          var previousVal = this.$element.val();
          this.$element.val(this.placeholder.id);
          var unselectData = {
            data: data2
          };
          this.trigger("clear", unselectData);
          if (unselectData.prevented) {
            this.$element.val(previousVal);
            return;
          }
          for (var d = 0;d < data2.length; d++) {
            unselectData = {
              data: data2[d]
            };
            this.trigger("unselect", unselectData);
            if (unselectData.prevented) {
              this.$element.val(previousVal);
              return;
            }
          }
          this.$element.trigger("input").trigger("change");
          this.trigger("toggle", {});
        };
        AllowClear.prototype._handleKeyboardClear = function(_, evt, container) {
          if (container.isOpen()) {
            return;
          }
          if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
            this._handleClear(evt);
          }
        };
        AllowClear.prototype.update = function(decorated, data2) {
          decorated.call(this, data2);
          this.$selection.find(".select2-selection__clear").remove();
          this.$selection[0].classList.remove("select2-selection--clearable");
          if (this.$selection.find(".select2-selection__placeholder").length > 0 || data2.length === 0) {
            return;
          }
          var selectionId = this.$selection.find(".select2-selection__rendered").attr("id");
          var removeAll = this.options.get("translations").get("removeAllItems");
          var $remove = $3('<button type="button" class="select2-selection__clear" tabindex="-1">' + '<span aria-hidden="true">&times;</span>' + "</button>");
          $remove.attr("title", removeAll());
          $remove.attr("aria-label", removeAll());
          $remove.attr("aria-describedby", selectionId);
          Utils.StoreData($remove[0], "data", data2);
          this.$selection.prepend($remove);
          this.$selection[0].classList.add("select2-selection--clearable");
        };
        return AllowClear;
      });
      S22.define("select2/selection/search", [
        "jquery",
        "../utils",
        "../keys"
      ], function($3, Utils, KEYS) {
        function Search(decorated, $element, options) {
          decorated.call(this, $element, options);
        }
        Search.prototype.render = function(decorated) {
          var searchLabel = this.options.get("translations").get("search");
          var $search = $3('<span class="select2-search select2-search--inline">' + '<textarea class="select2-search__field"' + ' type="search" tabindex="-1"' + ' autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' + "</textarea>" + "</span>");
          this.$searchContainer = $search;
          this.$search = $search.find("textarea");
          this.$search.prop("autocomplete", this.options.get("autocomplete"));
          this.$search.attr("aria-label", searchLabel());
          var $rendered = decorated.call(this);
          this._transferTabIndex();
          $rendered.append(this.$searchContainer);
          return $rendered;
        };
        Search.prototype.bind = function(decorated, container, $container) {
          var self = this;
          var resultsId = container.id + "-results";
          var selectionId = container.id + "-container";
          decorated.call(this, container, $container);
          self.$search.attr("aria-describedby", selectionId);
          container.on("open", function() {
            self.$search.attr("aria-controls", resultsId);
            self.$search.trigger("focus");
          });
          container.on("close", function() {
            self.$search.val("");
            self.resizeSearch();
            self.$search.removeAttr("aria-controls");
            self.$search.removeAttr("aria-activedescendant");
            self.$search.trigger("focus");
          });
          container.on("enable", function() {
            self.$search.prop("disabled", false);
            self._transferTabIndex();
          });
          container.on("disable", function() {
            self.$search.prop("disabled", true);
          });
          container.on("focus", function(evt) {
            self.$search.trigger("focus");
          });
          container.on("results:focus", function(params) {
            if (params.data._resultId) {
              self.$search.attr("aria-activedescendant", params.data._resultId);
            } else {
              self.$search.removeAttr("aria-activedescendant");
            }
          });
          this.$selection.on("focusin", ".select2-search--inline", function(evt) {
            self.trigger("focus", evt);
          });
          this.$selection.on("focusout", ".select2-search--inline", function(evt) {
            self._handleBlur(evt);
          });
          this.$selection.on("keydown", ".select2-search--inline", function(evt) {
            evt.stopPropagation();
            self.trigger("keypress", evt);
            self._keyUpPrevented = evt.isDefaultPrevented();
            var key = evt.which;
            if (key === KEYS.BACKSPACE && self.$search.val() === "") {
              var $previousChoice = self.$selection.find(".select2-selection__choice").last();
              if ($previousChoice.length > 0) {
                var item = Utils.GetData($previousChoice[0], "data");
                self.searchRemoveChoice(item);
                evt.preventDefault();
              }
            }
          });
          this.$selection.on("click", ".select2-search--inline", function(evt) {
            if (self.$search.val()) {
              evt.stopPropagation();
            }
          });
          var msie = document.documentMode;
          var disableInputEvents = msie && msie <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function(evt) {
            if (disableInputEvents) {
              self.$selection.off("input.search input.searchcheck");
              return;
            }
            self.$selection.off("keyup.search");
          });
          this.$selection.on("keyup.search input.search", ".select2-search--inline", function(evt) {
            if (disableInputEvents && evt.type === "input") {
              self.$selection.off("input.search input.searchcheck");
              return;
            }
            var key = evt.which;
            if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
              return;
            }
            if (key == KEYS.TAB) {
              return;
            }
            self.handleSearch(evt);
          });
        };
        Search.prototype._transferTabIndex = function(decorated) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex"));
          this.$selection.attr("tabindex", "-1");
        };
        Search.prototype.createPlaceholder = function(decorated, placeholder) {
          this.$search.attr("placeholder", placeholder.text);
        };
        Search.prototype.update = function(decorated, data2) {
          var searchHadFocus = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", "");
          decorated.call(this, data2);
          this.resizeSearch();
          if (searchHadFocus) {
            this.$search.trigger("focus");
          }
        };
        Search.prototype.handleSearch = function() {
          this.resizeSearch();
          if (!this._keyUpPrevented) {
            var input = this.$search.val();
            this.trigger("query", {
              term: input
            });
          }
          this._keyUpPrevented = false;
        };
        Search.prototype.searchRemoveChoice = function(decorated, item) {
          this.trigger("unselect", {
            data: item
          });
          this.$search.val(item.text);
          this.handleSearch();
        };
        Search.prototype.resizeSearch = function() {
          this.$search.css("width", "25px");
          var width = "100%";
          if (this.$search.attr("placeholder") === "") {
            var minimumWidth = this.$search.val().length + 1;
            width = minimumWidth * 0.75 + "em";
          }
          this.$search.css("width", width);
        };
        return Search;
      });
      S22.define("select2/selection/selectionCss", [
        "../utils"
      ], function(Utils) {
        function SelectionCSS() {}
        SelectionCSS.prototype.render = function(decorated) {
          var $selection = decorated.call(this);
          var selectionCssClass = this.options.get("selectionCssClass") || "";
          if (selectionCssClass.indexOf(":all:") !== -1) {
            selectionCssClass = selectionCssClass.replace(":all:", "");
            Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
          }
          $selection.addClass(selectionCssClass);
          return $selection;
        };
        return SelectionCSS;
      });
      S22.define("select2/selection/eventRelay", [
        "jquery"
      ], function($3) {
        function EventRelay() {}
        EventRelay.prototype.bind = function(decorated, container, $container) {
          var self = this;
          var relayEvents = [
            "open",
            "opening",
            "close",
            "closing",
            "select",
            "selecting",
            "unselect",
            "unselecting",
            "clear",
            "clearing"
          ];
          var preventableEvents = [
            "opening",
            "closing",
            "selecting",
            "unselecting",
            "clearing"
          ];
          decorated.call(this, container, $container);
          container.on("*", function(name, params) {
            if (relayEvents.indexOf(name) === -1) {
              return;
            }
            params = params || {};
            var evt = $3.Event("select2:" + name, {
              params
            });
            self.$element.trigger(evt);
            if (preventableEvents.indexOf(name) === -1) {
              return;
            }
            params.prevented = evt.isDefaultPrevented();
          });
        };
        return EventRelay;
      });
      S22.define("select2/translation", [
        "jquery",
        "require"
      ], function($3, require2) {
        function Translation(dict) {
          this.dict = dict || {};
        }
        Translation.prototype.all = function() {
          return this.dict;
        };
        Translation.prototype.get = function(key) {
          return this.dict[key];
        };
        Translation.prototype.extend = function(translation) {
          this.dict = $3.extend({}, translation.all(), this.dict);
        };
        Translation._cache = {};
        Translation.loadPath = function(path) {
          if (!(path in Translation._cache)) {
            var translations = require2(path);
            Translation._cache[path] = translations;
          }
          return new Translation(Translation._cache[path]);
        };
        return Translation;
      });
      S22.define("select2/diacritics", [], function() {
        var diacritics = {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
        return diacritics;
      });
      S22.define("select2/data/base", [
        "../utils"
      ], function(Utils) {
        function BaseAdapter($element, options) {
          BaseAdapter.__super__.constructor.call(this);
        }
        Utils.Extend(BaseAdapter, Utils.Observable);
        BaseAdapter.prototype.current = function(callback) {
          throw new Error("The `current` method must be defined in child classes.");
        };
        BaseAdapter.prototype.query = function(params, callback) {
          throw new Error("The `query` method must be defined in child classes.");
        };
        BaseAdapter.prototype.bind = function(container, $container) {};
        BaseAdapter.prototype.destroy = function() {};
        BaseAdapter.prototype.generateResultId = function(container, data2) {
          var id = container.id + "-result-";
          id += Utils.generateChars(4);
          if (data2.id != null) {
            id += "-" + data2.id.toString();
          } else {
            id += "-" + Utils.generateChars(4);
          }
          return id;
        };
        return BaseAdapter;
      });
      S22.define("select2/data/select", [
        "./base",
        "../utils",
        "jquery"
      ], function(BaseAdapter, Utils, $3) {
        function SelectAdapter($element, options) {
          this.$element = $element;
          this.options = options;
          SelectAdapter.__super__.constructor.call(this);
        }
        Utils.Extend(SelectAdapter, BaseAdapter);
        SelectAdapter.prototype.current = function(callback) {
          var self = this;
          var data2 = Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function(selectedElement) {
            return self.item($3(selectedElement));
          });
          callback(data2);
        };
        SelectAdapter.prototype.select = function(data2) {
          var self = this;
          data2.selected = true;
          if (data2.element != null && data2.element.tagName.toLowerCase() === "option") {
            data2.element.selected = true;
            this.$element.trigger("input").trigger("change");
            return;
          }
          if (this.$element.prop("multiple")) {
            this.current(function(currentData) {
              var val2 = [];
              data2 = [data2];
              data2.push.apply(data2, currentData);
              for (var d = 0;d < data2.length; d++) {
                var id = data2[d].id;
                if (val2.indexOf(id) === -1) {
                  val2.push(id);
                }
              }
              self.$element.val(val2);
              self.$element.trigger("input").trigger("change");
            });
          } else {
            var val = data2.id;
            this.$element.val(val);
            this.$element.trigger("input").trigger("change");
          }
        };
        SelectAdapter.prototype.unselect = function(data2) {
          var self = this;
          if (!this.$element.prop("multiple")) {
            return;
          }
          data2.selected = false;
          if (data2.element != null && data2.element.tagName.toLowerCase() === "option") {
            data2.element.selected = false;
            this.$element.trigger("input").trigger("change");
            return;
          }
          this.current(function(currentData) {
            var val = [];
            for (var d = 0;d < currentData.length; d++) {
              var id = currentData[d].id;
              if (id !== data2.id && val.indexOf(id) === -1) {
                val.push(id);
              }
            }
            self.$element.val(val);
            self.$element.trigger("input").trigger("change");
          });
        };
        SelectAdapter.prototype.bind = function(container, $container) {
          var self = this;
          this.container = container;
          container.on("select", function(params) {
            self.select(params.data);
          });
          container.on("unselect", function(params) {
            self.unselect(params.data);
          });
        };
        SelectAdapter.prototype.destroy = function() {
          this.$element.find("*").each(function() {
            Utils.RemoveData(this);
          });
        };
        SelectAdapter.prototype.query = function(params, callback) {
          var data2 = [];
          var self = this;
          var $options = this.$element.children();
          $options.each(function() {
            if (this.tagName.toLowerCase() !== "option" && this.tagName.toLowerCase() !== "optgroup") {
              return;
            }
            var $option = $3(this);
            var option = self.item($option);
            var matches = self.matches(params, option);
            if (matches !== null) {
              data2.push(matches);
            }
          });
          callback({
            results: data2
          });
        };
        SelectAdapter.prototype.addOptions = function($options) {
          this.$element.append($options);
        };
        SelectAdapter.prototype.option = function(data2) {
          var option;
          if (data2.children) {
            option = document.createElement("optgroup");
            option.label = data2.text;
          } else {
            option = document.createElement("option");
            if (option.textContent !== undefined) {
              option.textContent = data2.text;
            } else {
              option.innerText = data2.text;
            }
          }
          if (data2.id !== undefined) {
            option.value = data2.id;
          }
          if (data2.disabled) {
            option.disabled = true;
          }
          if (data2.selected) {
            option.selected = true;
          }
          if (data2.title) {
            option.title = data2.title;
          }
          var normalizedData = this._normalizeItem(data2);
          normalizedData.element = option;
          Utils.StoreData(option, "data", normalizedData);
          return $3(option);
        };
        SelectAdapter.prototype.item = function($option) {
          var data2 = {};
          data2 = Utils.GetData($option[0], "data");
          if (data2 != null) {
            return data2;
          }
          var option = $option[0];
          if (option.tagName.toLowerCase() === "option") {
            data2 = {
              id: $option.val(),
              text: $option.text(),
              disabled: $option.prop("disabled"),
              selected: $option.prop("selected"),
              title: $option.prop("title")
            };
          } else if (option.tagName.toLowerCase() === "optgroup") {
            data2 = {
              text: $option.prop("label"),
              children: [],
              title: $option.prop("title")
            };
            var $children = $option.children("option");
            var children = [];
            for (var c = 0;c < $children.length; c++) {
              var $child = $3($children[c]);
              var child = this.item($child);
              children.push(child);
            }
            data2.children = children;
          }
          data2 = this._normalizeItem(data2);
          data2.element = $option[0];
          Utils.StoreData($option[0], "data", data2);
          return data2;
        };
        SelectAdapter.prototype._normalizeItem = function(item) {
          if (item !== Object(item)) {
            item = {
              id: item,
              text: item
            };
          }
          item = $3.extend({}, {
            text: ""
          }, item);
          var defaults = {
            selected: false,
            disabled: false
          };
          if (item.id != null) {
            item.id = item.id.toString();
          }
          if (item.text != null) {
            item.text = item.text.toString();
          }
          if (item._resultId == null && item.id && this.container != null) {
            item._resultId = this.generateResultId(this.container, item);
          }
          return $3.extend({}, defaults, item);
        };
        SelectAdapter.prototype.matches = function(params, data2) {
          var matcher = this.options.get("matcher");
          return matcher(params, data2);
        };
        return SelectAdapter;
      });
      S22.define("select2/data/array", [
        "./select",
        "../utils",
        "jquery"
      ], function(SelectAdapter, Utils, $3) {
        function ArrayAdapter($element, options) {
          this._dataToConvert = options.get("data") || [];
          ArrayAdapter.__super__.constructor.call(this, $element, options);
        }
        Utils.Extend(ArrayAdapter, SelectAdapter);
        ArrayAdapter.prototype.bind = function(container, $container) {
          ArrayAdapter.__super__.bind.call(this, container, $container);
          this.addOptions(this.convertToOptions(this._dataToConvert));
        };
        ArrayAdapter.prototype.select = function(data2) {
          var $option = this.$element.find("option").filter(function(i2, elm) {
            return elm.value == data2.id.toString();
          });
          if ($option.length === 0) {
            $option = this.option(data2);
            this.addOptions($option);
          }
          ArrayAdapter.__super__.select.call(this, data2);
        };
        ArrayAdapter.prototype.convertToOptions = function(data2) {
          var self = this;
          var $existing = this.$element.find("option");
          var existingIds = $existing.map(function() {
            return self.item($3(this)).id;
          }).get();
          var $options = [];
          function onlyItem(item2) {
            return function() {
              return $3(this).val() == item2.id;
            };
          }
          for (var d = 0;d < data2.length; d++) {
            var item = this._normalizeItem(data2[d]);
            if (existingIds.indexOf(item.id) >= 0) {
              var $existingOption = $existing.filter(onlyItem(item));
              var existingData = this.item($existingOption);
              var newData = $3.extend(true, {}, item, existingData);
              var $newOption = this.option(newData);
              $existingOption.replaceWith($newOption);
              continue;
            }
            var $option = this.option(item);
            if (item.children) {
              var $children = this.convertToOptions(item.children);
              $option.append($children);
            }
            $options.push($option);
          }
          return $options;
        };
        return ArrayAdapter;
      });
      S22.define("select2/data/ajax", [
        "./array",
        "../utils",
        "jquery"
      ], function(ArrayAdapter, Utils, $3) {
        function AjaxAdapter($element, options) {
          this.ajaxOptions = this._applyDefaults(options.get("ajax"));
          if (this.ajaxOptions.processResults != null) {
            this.processResults = this.ajaxOptions.processResults;
          }
          AjaxAdapter.__super__.constructor.call(this, $element, options);
        }
        Utils.Extend(AjaxAdapter, ArrayAdapter);
        AjaxAdapter.prototype._applyDefaults = function(options) {
          var defaults = {
            data: function(params) {
              return $3.extend({}, params, {
                q: params.term
              });
            },
            transport: function(params, success, failure) {
              var $request = $3.ajax(params);
              $request.then(success);
              $request.fail(failure);
              return $request;
            }
          };
          return $3.extend({}, defaults, options, true);
        };
        AjaxAdapter.prototype.processResults = function(results) {
          return results;
        };
        AjaxAdapter.prototype.query = function(params, callback) {
          var matches = [];
          var self = this;
          if (this._request != null) {
            if (typeof this._request.abort === "function") {
              this._request.abort();
            }
            this._request = null;
          }
          var options = $3.extend({
            type: "GET"
          }, this.ajaxOptions);
          if (typeof options.url === "function") {
            options.url = options.url.call(this.$element, params);
          }
          if (typeof options.data === "function") {
            options.data = options.data.call(this.$element, params);
          }
          function request() {
            var $request = options.transport(options, function(data2) {
              var results = self.processResults(data2, params);
              if (self.options.get("debug") && window.console && console.error) {
                if (!results || !results.results || !Array.isArray(results.results)) {
                  console.error("Select2: The AJAX results did not return an array in the " + "`results` key of the response.");
                }
              }
              callback(results);
            }, function() {
              if ("status" in $request && ($request.status === 0 || $request.status === "0")) {
                return;
              }
              self.trigger("results:message", {
                message: "errorLoading"
              });
            });
            self._request = $request;
          }
          if (this.ajaxOptions.delay && params.term != null) {
            if (this._queryTimeout) {
              window.clearTimeout(this._queryTimeout);
            }
            this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
          } else {
            request();
          }
        };
        return AjaxAdapter;
      });
      S22.define("select2/data/tags", [
        "jquery"
      ], function($3) {
        function Tags(decorated, $element, options) {
          var tags = options.get("tags");
          var createTag = options.get("createTag");
          if (createTag !== undefined) {
            this.createTag = createTag;
          }
          var insertTag = options.get("insertTag");
          if (insertTag !== undefined) {
            this.insertTag = insertTag;
          }
          decorated.call(this, $element, options);
          if (Array.isArray(tags)) {
            for (var t = 0;t < tags.length; t++) {
              var tag = tags[t];
              var item = this._normalizeItem(tag);
              var $option = this.option(item);
              this.$element.append($option);
            }
          }
        }
        Tags.prototype.query = function(decorated, params, callback) {
          var self = this;
          this._removeOldTags();
          if (params.term == null || params.page != null) {
            decorated.call(this, params, callback);
            return;
          }
          function wrapper(obj, child) {
            var data2 = obj.results;
            for (var i2 = 0;i2 < data2.length; i2++) {
              var option = data2[i2];
              var checkChildren = option.children != null && !wrapper({
                results: option.children
              }, true);
              var optionText = (option.text || "").toUpperCase();
              var paramsTerm = (params.term || "").toUpperCase();
              var checkText = optionText === paramsTerm;
              if (checkText || checkChildren) {
                if (child) {
                  return false;
                }
                obj.data = data2;
                callback(obj);
                return;
              }
            }
            if (child) {
              return true;
            }
            var tag = self.createTag(params);
            if (tag != null) {
              var $option = self.option(tag);
              $option.attr("data-select2-tag", "true");
              self.addOptions([$option]);
              self.insertTag(data2, tag);
            }
            obj.results = data2;
            callback(obj);
          }
          decorated.call(this, params, wrapper);
        };
        Tags.prototype.createTag = function(decorated, params) {
          if (params.term == null) {
            return null;
          }
          var term = params.term.trim();
          if (term === "") {
            return null;
          }
          return {
            id: term,
            text: term
          };
        };
        Tags.prototype.insertTag = function(_, data2, tag) {
          data2.unshift(tag);
        };
        Tags.prototype._removeOldTags = function(_) {
          var $options = this.$element.find("option[data-select2-tag]");
          $options.each(function() {
            if (this.selected) {
              return;
            }
            $3(this).remove();
          });
        };
        return Tags;
      });
      S22.define("select2/data/tokenizer", [
        "jquery"
      ], function($3) {
        function Tokenizer(decorated, $element, options) {
          var tokenizer = options.get("tokenizer");
          if (tokenizer !== undefined) {
            this.tokenizer = tokenizer;
          }
          decorated.call(this, $element, options);
        }
        Tokenizer.prototype.bind = function(decorated, container, $container) {
          decorated.call(this, container, $container);
          this.$search = container.dropdown.$search || container.selection.$search || $container.find(".select2-search__field");
        };
        Tokenizer.prototype.query = function(decorated, params, callback) {
          var self = this;
          function createAndSelect(data2) {
            var item = self._normalizeItem(data2);
            var $existingOptions = self.$element.find("option").filter(function() {
              return $3(this).val() === item.id;
            });
            if (!$existingOptions.length) {
              var $option = self.option(item);
              $option.attr("data-select2-tag", true);
              self._removeOldTags();
              self.addOptions([$option]);
            }
            select(item);
          }
          function select(data2) {
            self.trigger("select", {
              data: data2
            });
          }
          params.term = params.term || "";
          var tokenData = this.tokenizer(params, this.options, createAndSelect);
          if (tokenData.term !== params.term) {
            if (this.$search.length) {
              this.$search.val(tokenData.term);
              this.$search.trigger("focus");
            }
            params.term = tokenData.term;
          }
          decorated.call(this, params, callback);
        };
        Tokenizer.prototype.tokenizer = function(_, params, options, callback) {
          var separators = options.get("tokenSeparators") || [];
          var term = params.term;
          var i2 = 0;
          var createTag = this.createTag || function(params2) {
            return {
              id: params2.term,
              text: params2.term
            };
          };
          while (i2 < term.length) {
            var termChar = term[i2];
            if (separators.indexOf(termChar) === -1) {
              i2++;
              continue;
            }
            var part = term.substr(0, i2);
            var partParams = $3.extend({}, params, {
              term: part
            });
            var data2 = createTag(partParams);
            if (data2 == null) {
              i2++;
              continue;
            }
            callback(data2);
            term = term.substr(i2 + 1) || "";
            i2 = 0;
          }
          return {
            term
          };
        };
        return Tokenizer;
      });
      S22.define("select2/data/minimumInputLength", [], function() {
        function MinimumInputLength(decorated, $e, options) {
          this.minimumInputLength = options.get("minimumInputLength");
          decorated.call(this, $e, options);
        }
        MinimumInputLength.prototype.query = function(decorated, params, callback) {
          params.term = params.term || "";
          if (params.term.length < this.minimumInputLength) {
            this.trigger("results:message", {
              message: "inputTooShort",
              args: {
                minimum: this.minimumInputLength,
                input: params.term,
                params
              }
            });
            return;
          }
          decorated.call(this, params, callback);
        };
        return MinimumInputLength;
      });
      S22.define("select2/data/maximumInputLength", [], function() {
        function MaximumInputLength(decorated, $e, options) {
          this.maximumInputLength = options.get("maximumInputLength");
          decorated.call(this, $e, options);
        }
        MaximumInputLength.prototype.query = function(decorated, params, callback) {
          params.term = params.term || "";
          if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
            this.trigger("results:message", {
              message: "inputTooLong",
              args: {
                maximum: this.maximumInputLength,
                input: params.term,
                params
              }
            });
            return;
          }
          decorated.call(this, params, callback);
        };
        return MaximumInputLength;
      });
      S22.define("select2/data/maximumSelectionLength", [], function() {
        function MaximumSelectionLength(decorated, $e, options) {
          this.maximumSelectionLength = options.get("maximumSelectionLength");
          decorated.call(this, $e, options);
        }
        MaximumSelectionLength.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          container.on("select", function() {
            self._checkIfMaximumSelected();
          });
        };
        MaximumSelectionLength.prototype.query = function(decorated, params, callback) {
          var self = this;
          this._checkIfMaximumSelected(function() {
            decorated.call(self, params, callback);
          });
        };
        MaximumSelectionLength.prototype._checkIfMaximumSelected = function(_, successCallback) {
          var self = this;
          this.current(function(currentData) {
            var count = currentData != null ? currentData.length : 0;
            if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
              self.trigger("results:message", {
                message: "maximumSelected",
                args: {
                  maximum: self.maximumSelectionLength
                }
              });
              return;
            }
            if (successCallback) {
              successCallback();
            }
          });
        };
        return MaximumSelectionLength;
      });
      S22.define("select2/dropdown", [
        "jquery",
        "./utils"
      ], function($3, Utils) {
        function Dropdown($element, options) {
          this.$element = $element;
          this.options = options;
          Dropdown.__super__.constructor.call(this);
        }
        Utils.Extend(Dropdown, Utils.Observable);
        Dropdown.prototype.render = function() {
          var $dropdown = $3('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + "</span>");
          $dropdown.attr("dir", this.options.get("dir"));
          this.$dropdown = $dropdown;
          return $dropdown;
        };
        Dropdown.prototype.bind = function() {};
        Dropdown.prototype.position = function($dropdown, $container) {};
        Dropdown.prototype.destroy = function() {
          this.$dropdown.remove();
        };
        return Dropdown;
      });
      S22.define("select2/dropdown/search", [
        "jquery"
      ], function($3) {
        function Search() {}
        Search.prototype.render = function(decorated) {
          var $rendered = decorated.call(this);
          var searchLabel = this.options.get("translations").get("search");
          var $search = $3('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + "</span>");
          this.$searchContainer = $search;
          this.$search = $search.find("input");
          this.$search.prop("autocomplete", this.options.get("autocomplete"));
          this.$search.attr("aria-label", searchLabel());
          $rendered.prepend($search);
          return $rendered;
        };
        Search.prototype.bind = function(decorated, container, $container) {
          var self = this;
          var resultsId = container.id + "-results";
          decorated.call(this, container, $container);
          this.$search.on("keydown", function(evt) {
            self.trigger("keypress", evt);
            self._keyUpPrevented = evt.isDefaultPrevented();
          });
          this.$search.on("input", function(evt) {
            $3(this).off("keyup");
          });
          this.$search.on("keyup input", function(evt) {
            self.handleSearch(evt);
          });
          container.on("open", function() {
            self.$search.attr("tabindex", 0);
            self.$search.attr("aria-controls", resultsId);
            self.$search.trigger("focus");
            window.setTimeout(function() {
              self.$search.trigger("focus");
            }, 0);
          });
          container.on("close", function() {
            self.$search.attr("tabindex", -1);
            self.$search.removeAttr("aria-controls");
            self.$search.removeAttr("aria-activedescendant");
            self.$search.val("");
            self.$search.trigger("blur");
          });
          container.on("focus", function() {
            if (!container.isOpen()) {
              self.$search.trigger("focus");
            }
          });
          container.on("results:all", function(params) {
            if (params.query.term == null || params.query.term === "") {
              var showSearch = self.showSearch(params);
              if (showSearch) {
                self.$searchContainer[0].classList.remove("select2-search--hide");
              } else {
                self.$searchContainer[0].classList.add("select2-search--hide");
              }
            }
          });
          container.on("results:focus", function(params) {
            if (params.data._resultId) {
              self.$search.attr("aria-activedescendant", params.data._resultId);
            } else {
              self.$search.removeAttr("aria-activedescendant");
            }
          });
        };
        Search.prototype.handleSearch = function(evt) {
          if (!this._keyUpPrevented) {
            var input = this.$search.val();
            this.trigger("query", {
              term: input
            });
          }
          this._keyUpPrevented = false;
        };
        Search.prototype.showSearch = function(_, params) {
          return true;
        };
        return Search;
      });
      S22.define("select2/dropdown/hidePlaceholder", [], function() {
        function HidePlaceholder(decorated, $element, options, dataAdapter) {
          this.placeholder = this.normalizePlaceholder(options.get("placeholder"));
          decorated.call(this, $element, options, dataAdapter);
        }
        HidePlaceholder.prototype.append = function(decorated, data2) {
          data2.results = this.removePlaceholder(data2.results);
          decorated.call(this, data2);
        };
        HidePlaceholder.prototype.normalizePlaceholder = function(_, placeholder) {
          if (typeof placeholder === "string") {
            placeholder = {
              id: "",
              text: placeholder
            };
          }
          return placeholder;
        };
        HidePlaceholder.prototype.removePlaceholder = function(_, data2) {
          var modifiedData = data2.slice(0);
          for (var d = data2.length - 1;d >= 0; d--) {
            var item = data2[d];
            if (this.placeholder.id === item.id) {
              modifiedData.splice(d, 1);
            }
          }
          return modifiedData;
        };
        return HidePlaceholder;
      });
      S22.define("select2/dropdown/infiniteScroll", [
        "jquery"
      ], function($3) {
        function InfiniteScroll(decorated, $element, options, dataAdapter) {
          this.lastParams = {};
          decorated.call(this, $element, options, dataAdapter);
          this.$loadingMore = this.createLoadingMore();
          this.loading = false;
        }
        InfiniteScroll.prototype.append = function(decorated, data2) {
          this.$loadingMore.remove();
          this.loading = false;
          decorated.call(this, data2);
          if (this.showLoadingMore(data2)) {
            this.$results.append(this.$loadingMore);
            this.loadMoreIfNeeded();
          }
        };
        InfiniteScroll.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          container.on("query", function(params) {
            self.lastParams = params;
            self.loading = true;
          });
          container.on("query:append", function(params) {
            self.lastParams = params;
            self.loading = true;
          });
          this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        };
        InfiniteScroll.prototype.loadMoreIfNeeded = function() {
          var isLoadMoreVisible = $3.contains(document.documentElement, this.$loadingMore[0]);
          if (this.loading || !isLoadMoreVisible) {
            return;
          }
          var currentOffset = this.$results.offset().top + this.$results.outerHeight(false);
          var loadingMoreOffset = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false);
          if (currentOffset + 50 >= loadingMoreOffset) {
            this.loadMore();
          }
        };
        InfiniteScroll.prototype.loadMore = function() {
          this.loading = true;
          var params = $3.extend({}, { page: 1 }, this.lastParams);
          params.page++;
          this.trigger("query:append", params);
        };
        InfiniteScroll.prototype.showLoadingMore = function(_, data2) {
          return data2.pagination && data2.pagination.more;
        };
        InfiniteScroll.prototype.createLoadingMore = function() {
          var $option = $3("<li " + 'class="select2-results__option select2-results__option--load-more"' + 'role="option" aria-disabled="true"></li>');
          var message = this.options.get("translations").get("loadingMore");
          $option.html(message(this.lastParams));
          return $option;
        };
        return InfiniteScroll;
      });
      S22.define("select2/dropdown/attachBody", [
        "jquery",
        "../utils"
      ], function($3, Utils) {
        function AttachBody(decorated, $element, options) {
          this.$dropdownParent = $3(options.get("dropdownParent") || document.body);
          decorated.call(this, $element, options);
        }
        AttachBody.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          container.on("open", function() {
            self._showDropdown();
            self._attachPositioningHandler(container);
            self._bindContainerResultHandlers(container);
          });
          container.on("close", function() {
            self._hideDropdown();
            self._detachPositioningHandler(container);
          });
          this.$dropdownContainer.on("mousedown", function(evt) {
            evt.stopPropagation();
          });
        };
        AttachBody.prototype.destroy = function(decorated) {
          decorated.call(this);
          this.$dropdownContainer.remove();
        };
        AttachBody.prototype.position = function(decorated, $dropdown, $container) {
          $dropdown.attr("class", $container.attr("class"));
          $dropdown[0].classList.remove("select2");
          $dropdown[0].classList.add("select2-container--open");
          $dropdown.css({
            position: "absolute",
            top: -999999
          });
          this.$container = $container;
        };
        AttachBody.prototype.render = function(decorated) {
          var $container = $3("<span></span>");
          var $dropdown = decorated.call(this);
          $container.append($dropdown);
          this.$dropdownContainer = $container;
          return $container;
        };
        AttachBody.prototype._hideDropdown = function(decorated) {
          this.$dropdownContainer.detach();
        };
        AttachBody.prototype._bindContainerResultHandlers = function(decorated, container) {
          if (this._containerResultsHandlersBound) {
            return;
          }
          var self = this;
          container.on("results:all", function() {
            self._positionDropdown();
            self._resizeDropdown();
          });
          container.on("results:append", function() {
            self._positionDropdown();
            self._resizeDropdown();
          });
          container.on("results:message", function() {
            self._positionDropdown();
            self._resizeDropdown();
          });
          container.on("select", function() {
            self._positionDropdown();
            self._resizeDropdown();
          });
          container.on("unselect", function() {
            self._positionDropdown();
            self._resizeDropdown();
          });
          this._containerResultsHandlersBound = true;
        };
        AttachBody.prototype._attachPositioningHandler = function(decorated, container) {
          var self = this;
          var scrollEvent = "scroll.select2." + container.id;
          var resizeEvent = "resize.select2." + container.id;
          var orientationEvent = "orientationchange.select2." + container.id;
          var $watchers = this.$container.parents().filter(Utils.hasScroll);
          $watchers.each(function() {
            Utils.StoreData(this, "select2-scroll-position", {
              x: $3(this).scrollLeft(),
              y: $3(this).scrollTop()
            });
          });
          $watchers.on(scrollEvent, function(ev) {
            var position = Utils.GetData(this, "select2-scroll-position");
            $3(this).scrollTop(position.y);
          });
          $3(window).on(scrollEvent + " " + resizeEvent + " " + orientationEvent, function(e) {
            self._positionDropdown();
            self._resizeDropdown();
          });
        };
        AttachBody.prototype._detachPositioningHandler = function(decorated, container) {
          var scrollEvent = "scroll.select2." + container.id;
          var resizeEvent = "resize.select2." + container.id;
          var orientationEvent = "orientationchange.select2." + container.id;
          var $watchers = this.$container.parents().filter(Utils.hasScroll);
          $watchers.off(scrollEvent);
          $3(window).off(scrollEvent + " " + resizeEvent + " " + orientationEvent);
        };
        AttachBody.prototype._positionDropdown = function() {
          var $window = $3(window);
          var isCurrentlyAbove = this.$dropdown[0].classList.contains("select2-dropdown--above");
          var isCurrentlyBelow = this.$dropdown[0].classList.contains("select2-dropdown--below");
          var newDirection = null;
          var offset = this.$container.offset();
          offset.bottom = offset.top + this.$container.outerHeight(false);
          var container = {
            height: this.$container.outerHeight(false)
          };
          container.top = offset.top;
          container.bottom = offset.top + container.height;
          var dropdown = {
            height: this.$dropdown.outerHeight(false)
          };
          var viewport = {
            top: $window.scrollTop(),
            bottom: $window.scrollTop() + $window.height()
          };
          var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
          var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;
          var css = {
            left: offset.left,
            top: container.bottom
          };
          var $offsetParent = this.$dropdownParent;
          if ($offsetParent.css("position") === "static") {
            $offsetParent = $offsetParent.offsetParent();
          }
          var parentOffset = {
            top: 0,
            left: 0
          };
          if ($3.contains(document.body, $offsetParent[0]) || $offsetParent[0].isConnected) {
            parentOffset = $offsetParent.offset();
          }
          css.top -= parentOffset.top;
          css.left -= parentOffset.left;
          if (!isCurrentlyAbove && !isCurrentlyBelow) {
            newDirection = "below";
          }
          if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
            newDirection = "above";
          } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
            newDirection = "below";
          }
          if (newDirection == "above" || isCurrentlyAbove && newDirection !== "below") {
            css.top = container.top - parentOffset.top - dropdown.height;
          }
          if (newDirection != null) {
            this.$dropdown[0].classList.remove("select2-dropdown--below");
            this.$dropdown[0].classList.remove("select2-dropdown--above");
            this.$dropdown[0].classList.add("select2-dropdown--" + newDirection);
            this.$container[0].classList.remove("select2-container--below");
            this.$container[0].classList.remove("select2-container--above");
            this.$container[0].classList.add("select2-container--" + newDirection);
          }
          this.$dropdownContainer.css(css);
        };
        AttachBody.prototype._resizeDropdown = function() {
          var css = {
            width: this.$container.outerWidth(false) + "px"
          };
          if (this.options.get("dropdownAutoWidth")) {
            css.minWidth = css.width;
            css.position = "relative";
            css.width = "auto";
          }
          this.$dropdown.css(css);
        };
        AttachBody.prototype._showDropdown = function(decorated) {
          this.$dropdownContainer.appendTo(this.$dropdownParent);
          this._positionDropdown();
          this._resizeDropdown();
        };
        return AttachBody;
      });
      S22.define("select2/dropdown/minimumResultsForSearch", [], function() {
        function countResults(data2) {
          var count = 0;
          for (var d = 0;d < data2.length; d++) {
            var item = data2[d];
            if (item.children) {
              count += countResults(item.children);
            } else {
              count++;
            }
          }
          return count;
        }
        function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
          this.minimumResultsForSearch = options.get("minimumResultsForSearch");
          if (this.minimumResultsForSearch < 0) {
            this.minimumResultsForSearch = Infinity;
          }
          decorated.call(this, $element, options, dataAdapter);
        }
        MinimumResultsForSearch.prototype.showSearch = function(decorated, params) {
          if (countResults(params.data.results) < this.minimumResultsForSearch) {
            return false;
          }
          return decorated.call(this, params);
        };
        return MinimumResultsForSearch;
      });
      S22.define("select2/dropdown/selectOnClose", [
        "../utils"
      ], function(Utils) {
        function SelectOnClose() {}
        SelectOnClose.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          container.on("close", function(params) {
            self._handleSelectOnClose(params);
          });
        };
        SelectOnClose.prototype._handleSelectOnClose = function(_, params) {
          if (params && params.originalSelect2Event != null) {
            var event = params.originalSelect2Event;
            if (event._type === "select" || event._type === "unselect") {
              return;
            }
          }
          var $highlightedResults = this.getHighlightedResults();
          if ($highlightedResults.length < 1) {
            return;
          }
          var data2 = Utils.GetData($highlightedResults[0], "data");
          if (data2.element != null && data2.element.selected || data2.element == null && data2.selected) {
            return;
          }
          this.trigger("select", {
            data: data2
          });
        };
        return SelectOnClose;
      });
      S22.define("select2/dropdown/closeOnSelect", [], function() {
        function CloseOnSelect() {}
        CloseOnSelect.prototype.bind = function(decorated, container, $container) {
          var self = this;
          decorated.call(this, container, $container);
          container.on("select", function(evt) {
            self._selectTriggered(evt);
          });
          container.on("unselect", function(evt) {
            self._selectTriggered(evt);
          });
        };
        CloseOnSelect.prototype._selectTriggered = function(_, evt) {
          var originalEvent = evt.originalEvent;
          if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
            return;
          }
          this.trigger("close", {
            originalEvent,
            originalSelect2Event: evt
          });
        };
        return CloseOnSelect;
      });
      S22.define("select2/dropdown/dropdownCss", [
        "../utils"
      ], function(Utils) {
        function DropdownCSS() {}
        DropdownCSS.prototype.render = function(decorated) {
          var $dropdown = decorated.call(this);
          var dropdownCssClass = this.options.get("dropdownCssClass") || "";
          if (dropdownCssClass.indexOf(":all:") !== -1) {
            dropdownCssClass = dropdownCssClass.replace(":all:", "");
            Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
          }
          $dropdown.addClass(dropdownCssClass);
          return $dropdown;
        };
        return DropdownCSS;
      });
      S22.define("select2/dropdown/tagsSearchHighlight", [
        "../utils"
      ], function(Utils) {
        function TagsSearchHighlight() {}
        TagsSearchHighlight.prototype.highlightFirstItem = function(decorated) {
          var $options = this.$results.find(".select2-results__option--selectable" + ":not(.select2-results__option--selected)");
          if ($options.length > 0) {
            var $firstOption = $options.first();
            var data2 = Utils.GetData($firstOption[0], "data");
            var firstElement = data2.element;
            if (firstElement && firstElement.getAttribute) {
              if (firstElement.getAttribute("data-select2-tag") === "true") {
                $firstOption.trigger("mouseenter");
                return;
              }
            }
          }
          decorated.call(this);
        };
        return TagsSearchHighlight;
      });
      S22.define("select2/i18n/en", [], function() {
        return {
          errorLoading: function() {
            return "The results could not be loaded.";
          },
          inputTooLong: function(args) {
            var overChars = args.input.length - args.maximum;
            var message = "Please delete " + overChars + " character";
            if (overChars != 1) {
              message += "s";
            }
            return message;
          },
          inputTooShort: function(args) {
            var remainingChars = args.minimum - args.input.length;
            var message = "Please enter " + remainingChars + " or more characters";
            return message;
          },
          loadingMore: function() {
            return "Loading more results…";
          },
          maximumSelected: function(args) {
            var message = "You can only select " + args.maximum + " item";
            if (args.maximum != 1) {
              message += "s";
            }
            return message;
          },
          noResults: function() {
            return "No results found";
          },
          searching: function() {
            return "Searching…";
          },
          removeAllItems: function() {
            return "Remove all items";
          },
          removeItem: function() {
            return "Remove item";
          },
          search: function() {
            return "Search";
          }
        };
      });
      S22.define("select2/defaults", [
        "jquery",
        "./results",
        "./selection/single",
        "./selection/multiple",
        "./selection/placeholder",
        "./selection/allowClear",
        "./selection/search",
        "./selection/selectionCss",
        "./selection/eventRelay",
        "./utils",
        "./translation",
        "./diacritics",
        "./data/select",
        "./data/array",
        "./data/ajax",
        "./data/tags",
        "./data/tokenizer",
        "./data/minimumInputLength",
        "./data/maximumInputLength",
        "./data/maximumSelectionLength",
        "./dropdown",
        "./dropdown/search",
        "./dropdown/hidePlaceholder",
        "./dropdown/infiniteScroll",
        "./dropdown/attachBody",
        "./dropdown/minimumResultsForSearch",
        "./dropdown/selectOnClose",
        "./dropdown/closeOnSelect",
        "./dropdown/dropdownCss",
        "./dropdown/tagsSearchHighlight",
        "./i18n/en"
      ], function($3, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, SelectionCSS, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, DropdownCSS, TagsSearchHighlight, EnglishTranslation) {
        function Defaults() {
          this.reset();
        }
        Defaults.prototype.apply = function(options) {
          options = $3.extend(true, {}, this.defaults, options);
          if (options.dataAdapter == null) {
            if (options.ajax != null) {
              options.dataAdapter = AjaxData;
            } else if (options.data != null) {
              options.dataAdapter = ArrayData;
            } else {
              options.dataAdapter = SelectData;
            }
            if (options.minimumInputLength > 0) {
              options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
            }
            if (options.maximumInputLength > 0) {
              options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
            }
            if (options.maximumSelectionLength > 0) {
              options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
            }
            if (options.tags) {
              options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
            }
            if (options.tokenSeparators != null || options.tokenizer != null) {
              options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
            }
          }
          if (options.resultsAdapter == null) {
            options.resultsAdapter = ResultsList;
            if (options.ajax != null) {
              options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
            }
            if (options.placeholder != null) {
              options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
            }
            if (options.selectOnClose) {
              options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
            }
            if (options.tags) {
              options.resultsAdapter = Utils.Decorate(options.resultsAdapter, TagsSearchHighlight);
            }
          }
          if (options.dropdownAdapter == null) {
            if (options.multiple) {
              options.dropdownAdapter = Dropdown;
            } else {
              var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
              options.dropdownAdapter = SearchableDropdown;
            }
            if (options.minimumResultsForSearch !== 0) {
              options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
            }
            if (options.closeOnSelect) {
              options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
            }
            if (options.dropdownCssClass != null) {
              options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
            }
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
          }
          if (options.selectionAdapter == null) {
            if (options.multiple) {
              options.selectionAdapter = MultipleSelection;
            } else {
              options.selectionAdapter = SingleSelection;
            }
            if (options.placeholder != null) {
              options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
            }
            if (options.allowClear) {
              options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
            }
            if (options.multiple) {
              options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
            }
            if (options.selectionCssClass != null) {
              options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionCSS);
            }
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
          }
          options.language = this._resolveLanguage(options.language);
          options.language.push("en");
          var uniqueLanguages = [];
          for (var l = 0;l < options.language.length; l++) {
            var language = options.language[l];
            if (uniqueLanguages.indexOf(language) === -1) {
              uniqueLanguages.push(language);
            }
          }
          options.language = uniqueLanguages;
          options.translations = this._processTranslations(options.language, options.debug);
          return options;
        };
        Defaults.prototype.reset = function() {
          function stripDiacritics(text) {
            function match(a) {
              return DIACRITICS[a] || a;
            }
            return text.replace(/[^\u0000-\u007E]/g, match);
          }
          function matcher(params, data2) {
            if (params.term == null || params.term.trim() === "") {
              return data2;
            }
            if (data2.children && data2.children.length > 0) {
              var match = $3.extend(true, {}, data2);
              for (var c = data2.children.length - 1;c >= 0; c--) {
                var child = data2.children[c];
                var matches = matcher(params, child);
                if (matches == null) {
                  match.children.splice(c, 1);
                }
              }
              if (match.children.length > 0) {
                return match;
              }
              return matcher(params, match);
            }
            var original = stripDiacritics(data2.text).toUpperCase();
            var term = stripDiacritics(params.term).toUpperCase();
            if (original.indexOf(term) > -1) {
              return data2;
            }
            return null;
          }
          this.defaults = {
            amdLanguageBase: "./i18n/",
            autocomplete: "off",
            closeOnSelect: true,
            debug: false,
            dropdownAutoWidth: false,
            escapeMarkup: Utils.escapeMarkup,
            language: {},
            matcher,
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: false,
            scrollAfterSelect: false,
            sorter: function(data2) {
              return data2;
            },
            templateResult: function(result) {
              return result.text;
            },
            templateSelection: function(selection) {
              return selection.text;
            },
            theme: "default",
            width: "resolve"
          };
        };
        Defaults.prototype.applyFromElement = function(options, $element) {
          var optionLanguage = options.language;
          var defaultLanguage = this.defaults.language;
          var elementLanguage = $element.prop("lang");
          var parentLanguage = $element.closest("[lang]").prop("lang");
          var languages = Array.prototype.concat.call(this._resolveLanguage(elementLanguage), this._resolveLanguage(optionLanguage), this._resolveLanguage(defaultLanguage), this._resolveLanguage(parentLanguage));
          options.language = languages;
          return options;
        };
        Defaults.prototype._resolveLanguage = function(language) {
          if (!language) {
            return [];
          }
          if ($3.isEmptyObject(language)) {
            return [];
          }
          if ($3.isPlainObject(language)) {
            return [language];
          }
          var languages;
          if (!Array.isArray(language)) {
            languages = [language];
          } else {
            languages = language;
          }
          var resolvedLanguages = [];
          for (var l = 0;l < languages.length; l++) {
            resolvedLanguages.push(languages[l]);
            if (typeof languages[l] === "string" && languages[l].indexOf("-") > 0) {
              var languageParts = languages[l].split("-");
              var baseLanguage = languageParts[0];
              resolvedLanguages.push(baseLanguage);
            }
          }
          return resolvedLanguages;
        };
        Defaults.prototype._processTranslations = function(languages, debug) {
          var translations = new Translation;
          for (var l = 0;l < languages.length; l++) {
            var languageData = new Translation;
            var language = languages[l];
            if (typeof language === "string") {
              try {
                languageData = Translation.loadPath(language);
              } catch (e) {
                try {
                  language = this.defaults.amdLanguageBase + language;
                  languageData = Translation.loadPath(language);
                } catch (ex) {
                  if (debug && window.console && console.warn) {
                    console.warn('Select2: The language file for "' + language + '" could ' + "not be automatically loaded. A fallback will be used instead.");
                  }
                }
              }
            } else if ($3.isPlainObject(language)) {
              languageData = new Translation(language);
            } else {
              languageData = language;
            }
            translations.extend(languageData);
          }
          return translations;
        };
        Defaults.prototype.set = function(key, value) {
          var camelKey = $3.camelCase(key);
          var data2 = {};
          data2[camelKey] = value;
          var convertedData = Utils._convertData(data2);
          $3.extend(true, this.defaults, convertedData);
        };
        var defaults = new Defaults;
        return defaults;
      });
      S22.define("select2/options", [
        "jquery",
        "./defaults",
        "./utils"
      ], function($3, Defaults, Utils) {
        function Options(options, $element) {
          this.options = options;
          if ($element != null) {
            this.fromElement($element);
          }
          if ($element != null) {
            this.options = Defaults.applyFromElement(this.options, $element);
          }
          this.options = Defaults.apply(this.options);
        }
        Options.prototype.fromElement = function($e) {
          var excludedData = ["select2"];
          if (this.options.multiple == null) {
            this.options.multiple = $e.prop("multiple");
          }
          if (this.options.disabled == null) {
            this.options.disabled = $e.prop("disabled");
          }
          if (this.options.autocomplete == null && $e.prop("autocomplete")) {
            this.options.autocomplete = $e.prop("autocomplete");
          }
          if (this.options.dir == null) {
            if ($e.prop("dir")) {
              this.options.dir = $e.prop("dir");
            } else if ($e.closest("[dir]").prop("dir")) {
              this.options.dir = $e.closest("[dir]").prop("dir");
            } else {
              this.options.dir = "ltr";
            }
          }
          $e.prop("disabled", this.options.disabled);
          $e.prop("multiple", this.options.multiple);
          if (Utils.GetData($e[0], "select2Tags")) {
            if (this.options.debug && window.console && console.warn) {
              console.warn("Select2: The `data-select2-tags` attribute has been changed to " + 'use the `data-data` and `data-tags="true"` attributes and will be ' + "removed in future versions of Select2.");
            }
            Utils.StoreData($e[0], "data", Utils.GetData($e[0], "select2Tags"));
            Utils.StoreData($e[0], "tags", true);
          }
          if (Utils.GetData($e[0], "ajaxUrl")) {
            if (this.options.debug && window.console && console.warn) {
              console.warn("Select2: The `data-ajax-url` attribute has been changed to " + "`data-ajax--url` and support for the old attribute will be removed" + " in future versions of Select2.");
            }
            $e.attr("ajax--url", Utils.GetData($e[0], "ajaxUrl"));
            Utils.StoreData($e[0], "ajax-Url", Utils.GetData($e[0], "ajaxUrl"));
          }
          var dataset = {};
          function upperCaseLetter(_, letter) {
            return letter.toUpperCase();
          }
          for (var attr = 0;attr < $e[0].attributes.length; attr++) {
            var attributeName = $e[0].attributes[attr].name;
            var prefix2 = "data-";
            if (attributeName.substr(0, prefix2.length) == prefix2) {
              var dataName = attributeName.substring(prefix2.length);
              var dataValue = Utils.GetData($e[0], dataName);
              var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);
              dataset[camelDataName] = dataValue;
            }
          }
          if ($3.fn.jquery && $3.fn.jquery.substr(0, 2) == "1." && $e[0].dataset) {
            dataset = $3.extend(true, {}, $e[0].dataset, dataset);
          }
          var data2 = $3.extend(true, {}, Utils.GetData($e[0]), dataset);
          data2 = Utils._convertData(data2);
          for (var key in data2) {
            if (excludedData.indexOf(key) > -1) {
              continue;
            }
            if ($3.isPlainObject(this.options[key])) {
              $3.extend(this.options[key], data2[key]);
            } else {
              this.options[key] = data2[key];
            }
          }
          return this;
        };
        Options.prototype.get = function(key) {
          return this.options[key];
        };
        Options.prototype.set = function(key, val) {
          this.options[key] = val;
        };
        return Options;
      });
      S22.define("select2/core", [
        "jquery",
        "./options",
        "./utils",
        "./keys"
      ], function($3, Options, Utils, KEYS) {
        var Select2 = function($element, options) {
          if (Utils.GetData($element[0], "select2") != null) {
            Utils.GetData($element[0], "select2").destroy();
          }
          this.$element = $element;
          this.id = this._generateId($element);
          options = options || {};
          this.options = new Options(options, $element);
          Select2.__super__.constructor.call(this);
          var tabindex = $element.attr("tabindex") || 0;
          Utils.StoreData($element[0], "old-tabindex", tabindex);
          $element.attr("tabindex", "-1");
          var DataAdapter = this.options.get("dataAdapter");
          this.dataAdapter = new DataAdapter($element, this.options);
          var $container = this.render();
          this._placeContainer($container);
          var SelectionAdapter = this.options.get("selectionAdapter");
          this.selection = new SelectionAdapter($element, this.options);
          this.$selection = this.selection.render();
          this.selection.position(this.$selection, $container);
          var DropdownAdapter = this.options.get("dropdownAdapter");
          this.dropdown = new DropdownAdapter($element, this.options);
          this.$dropdown = this.dropdown.render();
          this.dropdown.position(this.$dropdown, $container);
          var ResultsAdapter = this.options.get("resultsAdapter");
          this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
          this.$results = this.results.render();
          this.results.position(this.$results, this.$dropdown);
          var self = this;
          this._bindAdapters();
          this._registerDomEvents();
          this._registerDataEvents();
          this._registerSelectionEvents();
          this._registerDropdownEvents();
          this._registerResultsEvents();
          this._registerEvents();
          this.dataAdapter.current(function(initialData) {
            self.trigger("selection:update", {
              data: initialData
            });
          });
          $element[0].classList.add("select2-hidden-accessible");
          $element.attr("aria-hidden", "true");
          this._syncAttributes();
          Utils.StoreData($element[0], "select2", this);
          $element.data("select2", this);
        };
        Utils.Extend(Select2, Utils.Observable);
        Select2.prototype._generateId = function($element) {
          var id = "";
          if ($element.attr("id") != null) {
            id = $element.attr("id");
          } else if ($element.attr("name") != null) {
            id = $element.attr("name") + "-" + Utils.generateChars(2);
          } else {
            id = Utils.generateChars(4);
          }
          id = id.replace(/(:|\.|\[|\]|,)/g, "");
          id = "select2-" + id;
          return id;
        };
        Select2.prototype._placeContainer = function($container) {
          $container.insertAfter(this.$element);
          var width = this._resolveWidth(this.$element, this.options.get("width"));
          if (width != null) {
            $container.css("width", width);
          }
        };
        Select2.prototype._resolveWidth = function($element, method) {
          var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
          if (method == "resolve") {
            var styleWidth = this._resolveWidth($element, "style");
            if (styleWidth != null) {
              return styleWidth;
            }
            return this._resolveWidth($element, "element");
          }
          if (method == "element") {
            var elementWidth = $element.outerWidth(false);
            if (elementWidth <= 0) {
              return "auto";
            }
            return elementWidth + "px";
          }
          if (method == "style") {
            var style = $element.attr("style");
            if (typeof style !== "string") {
              return null;
            }
            var attrs = style.split(";");
            for (var i2 = 0, l = attrs.length;i2 < l; i2 = i2 + 1) {
              var attr = attrs[i2].replace(/\s/g, "");
              var matches = attr.match(WIDTH);
              if (matches !== null && matches.length >= 1) {
                return matches[1];
              }
            }
            return null;
          }
          if (method == "computedstyle") {
            var computedStyle = window.getComputedStyle($element[0]);
            return computedStyle.width;
          }
          return method;
        };
        Select2.prototype._bindAdapters = function() {
          this.dataAdapter.bind(this, this.$container);
          this.selection.bind(this, this.$container);
          this.dropdown.bind(this, this.$container);
          this.results.bind(this, this.$container);
        };
        Select2.prototype._registerDomEvents = function() {
          var self = this;
          this.$element.on("change.select2", function() {
            self.dataAdapter.current(function(data2) {
              self.trigger("selection:update", {
                data: data2
              });
            });
          });
          this.$element.on("focus.select2", function(evt) {
            self.trigger("focus", evt);
          });
          this._syncA = Utils.bind(this._syncAttributes, this);
          this._syncS = Utils.bind(this._syncSubtree, this);
          this._observer = new window.MutationObserver(function(mutations) {
            self._syncA();
            self._syncS(mutations);
          });
          this._observer.observe(this.$element[0], {
            attributes: true,
            childList: true,
            subtree: false
          });
        };
        Select2.prototype._registerDataEvents = function() {
          var self = this;
          this.dataAdapter.on("*", function(name, params) {
            self.trigger(name, params);
          });
        };
        Select2.prototype._registerSelectionEvents = function() {
          var self = this;
          var nonRelayEvents = ["toggle", "focus"];
          this.selection.on("toggle", function() {
            self.toggleDropdown();
          });
          this.selection.on("focus", function(params) {
            self.focus(params);
          });
          this.selection.on("*", function(name, params) {
            if (nonRelayEvents.indexOf(name) !== -1) {
              return;
            }
            self.trigger(name, params);
          });
        };
        Select2.prototype._registerDropdownEvents = function() {
          var self = this;
          this.dropdown.on("*", function(name, params) {
            self.trigger(name, params);
          });
        };
        Select2.prototype._registerResultsEvents = function() {
          var self = this;
          this.results.on("*", function(name, params) {
            self.trigger(name, params);
          });
        };
        Select2.prototype._registerEvents = function() {
          var self = this;
          this.on("open", function() {
            self.$container[0].classList.add("select2-container--open");
          });
          this.on("close", function() {
            self.$container[0].classList.remove("select2-container--open");
          });
          this.on("enable", function() {
            self.$container[0].classList.remove("select2-container--disabled");
          });
          this.on("disable", function() {
            self.$container[0].classList.add("select2-container--disabled");
          });
          this.on("blur", function() {
            self.$container[0].classList.remove("select2-container--focus");
          });
          this.on("query", function(params) {
            if (!self.isOpen()) {
              self.trigger("open", {});
            }
            this.dataAdapter.query(params, function(data2) {
              self.trigger("results:all", {
                data: data2,
                query: params
              });
            });
          });
          this.on("query:append", function(params) {
            this.dataAdapter.query(params, function(data2) {
              self.trigger("results:append", {
                data: data2,
                query: params
              });
            });
          });
          this.on("keypress", function(evt) {
            var key = evt.which;
            if (self.isOpen()) {
              if (key === KEYS.ESC || key === KEYS.UP && evt.altKey) {
                self.close(evt);
                evt.preventDefault();
              } else if (key === KEYS.ENTER || key === KEYS.TAB) {
                self.trigger("results:select", {});
                evt.preventDefault();
              } else if (key === KEYS.SPACE && evt.ctrlKey) {
                self.trigger("results:toggle", {});
                evt.preventDefault();
              } else if (key === KEYS.UP) {
                self.trigger("results:previous", {});
                evt.preventDefault();
              } else if (key === KEYS.DOWN) {
                self.trigger("results:next", {});
                evt.preventDefault();
              }
            } else {
              if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
                self.open();
                evt.preventDefault();
              }
            }
          });
        };
        Select2.prototype._syncAttributes = function() {
          this.options.set("disabled", this.$element.prop("disabled"));
          if (this.isDisabled()) {
            if (this.isOpen()) {
              this.close();
            }
            this.trigger("disable", {});
          } else {
            this.trigger("enable", {});
          }
        };
        Select2.prototype._isChangeMutation = function(mutations) {
          var self = this;
          if (mutations.addedNodes && mutations.addedNodes.length > 0) {
            for (var n = 0;n < mutations.addedNodes.length; n++) {
              var node = mutations.addedNodes[n];
              if (node.selected) {
                return true;
              }
            }
          } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
            return true;
          } else if (Array.isArray(mutations)) {
            return mutations.some(function(mutation) {
              return self._isChangeMutation(mutation);
            });
          }
          return false;
        };
        Select2.prototype._syncSubtree = function(mutations) {
          var changed = this._isChangeMutation(mutations);
          var self = this;
          if (changed) {
            this.dataAdapter.current(function(currentData) {
              self.trigger("selection:update", {
                data: currentData
              });
            });
          }
        };
        Select2.prototype.trigger = function(name, args) {
          var actualTrigger = Select2.__super__.trigger;
          var preTriggerMap = {
            open: "opening",
            close: "closing",
            select: "selecting",
            unselect: "unselecting",
            clear: "clearing"
          };
          if (args === undefined) {
            args = {};
          }
          if (name in preTriggerMap) {
            var preTriggerName = preTriggerMap[name];
            var preTriggerArgs = {
              prevented: false,
              name,
              args
            };
            actualTrigger.call(this, preTriggerName, preTriggerArgs);
            if (preTriggerArgs.prevented) {
              args.prevented = true;
              return;
            }
          }
          actualTrigger.call(this, name, args);
        };
        Select2.prototype.toggleDropdown = function() {
          if (this.isDisabled()) {
            return;
          }
          if (this.isOpen()) {
            this.close();
          } else {
            this.open();
          }
        };
        Select2.prototype.open = function() {
          if (this.isOpen()) {
            return;
          }
          if (this.isDisabled()) {
            return;
          }
          this.trigger("query", {});
        };
        Select2.prototype.close = function(evt) {
          if (!this.isOpen()) {
            return;
          }
          this.trigger("close", { originalEvent: evt });
        };
        Select2.prototype.isEnabled = function() {
          return !this.isDisabled();
        };
        Select2.prototype.isDisabled = function() {
          return this.options.get("disabled");
        };
        Select2.prototype.isOpen = function() {
          return this.$container[0].classList.contains("select2-container--open");
        };
        Select2.prototype.hasFocus = function() {
          return this.$container[0].classList.contains("select2-container--focus");
        };
        Select2.prototype.focus = function(data2) {
          if (this.hasFocus()) {
            return;
          }
          this.$container[0].classList.add("select2-container--focus");
          this.trigger("focus", {});
        };
        Select2.prototype.enable = function(args) {
          if (this.options.get("debug") && window.console && console.warn) {
            console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + " instead.");
          }
          if (args == null || args.length === 0) {
            args = [true];
          }
          var disabled = !args[0];
          this.$element.prop("disabled", disabled);
        };
        Select2.prototype.data = function() {
          if (this.options.get("debug") && arguments.length > 0 && window.console && console.warn) {
            console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + "should consider setting the value instead using `$element.val()`.");
          }
          var data2 = [];
          this.dataAdapter.current(function(currentData) {
            data2 = currentData;
          });
          return data2;
        };
        Select2.prototype.val = function(args) {
          if (this.options.get("debug") && window.console && console.warn) {
            console.warn('Select2: The `select2("val")` method has been deprecated and will be' + " removed in later Select2 versions. Use $element.val() instead.");
          }
          if (args == null || args.length === 0) {
            return this.$element.val();
          }
          var newVal = args[0];
          if (Array.isArray(newVal)) {
            newVal = newVal.map(function(obj) {
              return obj.toString();
            });
          }
          this.$element.val(newVal).trigger("input").trigger("change");
        };
        Select2.prototype.destroy = function() {
          Utils.RemoveData(this.$container[0]);
          this.$container.remove();
          this._observer.disconnect();
          this._observer = null;
          this._syncA = null;
          this._syncS = null;
          this.$element.off(".select2");
          this.$element.attr("tabindex", Utils.GetData(this.$element[0], "old-tabindex"));
          this.$element[0].classList.remove("select2-hidden-accessible");
          this.$element.attr("aria-hidden", "false");
          Utils.RemoveData(this.$element[0]);
          this.$element.removeData("select2");
          this.dataAdapter.destroy();
          this.selection.destroy();
          this.dropdown.destroy();
          this.results.destroy();
          this.dataAdapter = null;
          this.selection = null;
          this.dropdown = null;
          this.results = null;
        };
        Select2.prototype.render = function() {
          var $container = $3('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + "</span>");
          $container.attr("dir", this.options.get("dir"));
          this.$container = $container;
          this.$container[0].classList.add("select2-container--" + this.options.get("theme"));
          Utils.StoreData($container[0], "element", this.$element);
          return $container;
        };
        return Select2;
      });
      S22.define("jquery-mousewheel", [
        "jquery"
      ], function($3) {
        return $3;
      });
      S22.define("jquery.select2", [
        "jquery",
        "jquery-mousewheel",
        "./select2/core",
        "./select2/defaults",
        "./select2/utils"
      ], function($3, _, Select2, Defaults, Utils) {
        if ($3.fn.select2 == null) {
          var thisMethods = ["open", "close", "destroy"];
          $3.fn.select2 = function(options) {
            options = options || {};
            if (typeof options === "object") {
              this.each(function() {
                var instanceOptions = $3.extend(true, {}, options);
                var instance = new Select2($3(this), instanceOptions);
              });
              return this;
            } else if (typeof options === "string") {
              var ret;
              var args = Array.prototype.slice.call(arguments, 1);
              this.each(function() {
                var instance = Utils.GetData(this, "select2");
                if (instance == null && window.console && console.error) {
                  console.error("The select2('" + options + "') method was called on an " + "element that is not using Select2.");
                }
                ret = instance[options].apply(instance, args);
              });
              if (thisMethods.indexOf(options) > -1) {
                return this;
              }
              return ret;
            } else {
              throw new Error("Invalid arguments for Select2: " + options);
            }
          };
        }
        if ($3.fn.select2.defaults == null) {
          $3.fn.select2.defaults = Defaults;
        }
        return Select2;
      });
      return {
        define: S22.define,
        require: S22.require
      };
    }();
    var select2 = S2.require("jquery.select2");
    jQuery3.fn.select2.amd = S2;
    return select2;
  });
});

// node_modules/alpinejs/dist/module.esm.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
var transactionActive = false;
function scheduler(callback) {
  queueJob(callback);
}
function startTransaction() {
  transactionActive = true;
}
function commitTransaction() {
  transactionActive = false;
  queueFlush();
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    if (transactionActive)
      return;
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0;i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {};
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set;
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === undefined)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}
function watch(getter, callback) {
  let firstTime = true;
  let oldValue;
  let effectReference = effect(() => {
    let value = getter();
    JSON.stringify(value);
    if (!firstTime) {
      if (typeof value === "object" || value !== oldValue) {
        let previousValue = oldValue;
        queueMicrotask(() => {
          callback(value, previousValue);
        });
      }
    }
    oldValue = value;
    firstTime = false;
  });
  return () => release(effectReference);
}
async function transaction(callback) {
  startTransaction();
  try {
    await callback();
    await Promise.resolve();
  } finally {
    commitTransaction();
  }
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === undefined || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  el._x_effects?.forEach(dequeueJob);
  while (el._x_cleanups?.length)
    el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
  let records = observer.takeRecords();
  queuedMutations.push(() => records.length > 0 && onMutate(records));
  let queueLengthWhenTriggered = queuedMutations.length;
  queueMicrotask(() => {
    if (queuedMutations.length === queueLengthWhenTriggered) {
      while (queuedMutations.length > 0)
        queuedMutations.shift()();
    }
  });
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = /* @__PURE__ */ new Set;
  let addedAttributes = /* @__PURE__ */ new Map;
  let removedAttributes = /* @__PURE__ */ new Map;
  for (let i = 0;i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].removedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (!node._x_marker)
          return;
        removedNodes.add(node);
      });
      mutations[i].addedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (removedNodes.has(node)) {
          removedNodes.delete(node);
          return;
        }
        if (node._x_marker)
          return;
        addedNodes.push(node);
      });
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.some((i) => i.contains(node)))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  for (let node of addedNodes) {
    if (!node.isConnected)
      continue;
    onElAddeds.forEach((i) => i(node));
  }
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some((obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name));
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(objects.find((obj) => Reflect.has(obj, name)) || {}, name, thisProxy);
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find((obj) => Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if (descriptor?.set && descriptor?.get)
      return descriptor.set.call(thisProxy, value) || true;
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === undefined)
        return;
      if (typeof value === "object" && value !== null && value.__v_skip)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {}) {
  let obj = {
    initialValue: undefined,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  let memoizedUtilities = getUtilities(el);
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, memoizedUtilities);
      },
      enumerable: false
    });
  });
  return obj;
}
function getUtilities(el) {
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  let utils = { interceptor, ...utilities };
  onElRemoved(el, cleanup2);
  return utils;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(...args) {
  return errorHandler(...args);
}
var errorHandler = normalErrorHandler;
function setErrorHandler(handler4) {
  errorHandler = handler4;
}
function normalErrorHandler(error2, el, expression = undefined) {
  error2 = Object.assign(error2 ?? { message: "No error message given." }, { el, expression });
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + `"

` : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
var theRawEvaluatorFunction;
function setRawEvaluator(newEvaluator) {
  theRawEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {}, { scope: scope2 = {}, params = [], context } = {}) => {
    if (!shouldAutoEvaluateFunctions) {
      runIfTypeOfFunction(receiver, func, mergeProxies([scope2, ...dataStack]), params);
      return;
    }
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {}, { scope: scope2 = {}, params = [], context } = {}) => {
    func.result = undefined;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func.call(context, func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = undefined;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = undefined);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}
function evaluateRaw(...args) {
  return theRawEvaluatorFunction(...args);
}
function normalRawEvaluator(el, expression, extras = {}) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let scope2 = mergeProxies([extras.scope ?? {}, ...dataStack]);
  let params = extras.params ?? [];
  if (expression.includes("await")) {
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    let func = new AsyncFunction(["scope"], `with (scope) { let __result = ${rightSideSafeExpression}; return __result }`);
    let result = func.call(extras.context, scope2);
    return result;
  } else {
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(()=>{ ${expression} })()` : expression;
    let func = new Function(["scope"], `with (scope) { let __result = ${rightSideSafeExpression}; return __result }`);
    let result = func.call(extras.context, scope2);
    if (typeof result === "function" && shouldAutoEvaluateFunctions) {
      return result.apply(scope2, params);
    }
    return result;
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directiveExists(name) {
  return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map;
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {};
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    if (name === value)
      value = "";
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
  setTimeout(() => {
    warnAboutMissingPlugins();
  });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (el.parentNode instanceof ShadowRoot) {
    return findClosest(el.parentNode.host, callback);
  }
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
  initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = () => {}) {
  if (findClosest(el, (i) => i._x_ignore))
    return;
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      if (el2._x_marker)
        return;
      intercept(el2, skip);
      initInterceptors2.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      if (!el2._x_ignore)
        el2._x_marker = markerDispenser++;
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root, walker = walk) {
  walker(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el._x_marker;
  });
}
function warnAboutMissingPlugins() {
  let pluginDirectives = [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]]
  ];
  pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
    if (directiveExists(directive2))
      return;
    selectors.some((selector) => {
      if (document.querySelector(selector)) {
        warn(`found "${selector}", but missing ${plugin2} plugin`);
        return true;
      }
    });
  });
}
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0) / 1000;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1000;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1000;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {}, after = () => {}) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {}, after = () => {}) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {}, () => resolve(hide));
    el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i?.());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {}, after = () => {}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1000;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1000;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1000;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
  interceptors.push(callback);
}
function cloneNode(from, to) {
  interceptors.forEach((i) => i(from, to));
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {});
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {};
  });
  callback();
  overrideEffect(cache);
}
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (isRadio(el)) {
    if (el.attributes.value === undefined) {
      el.value = value;
    }
    if (window.fromModel) {
      if (typeof value === "boolean") {
        el.checked = safeParseBoolean(el.value) === value;
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    }
  } else if (isCheckbox(el)) {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, undefined].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === undefined ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, undefined, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function safeParseBoolean(rawValue) {
  if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
    return true;
  }
  if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
    return false;
  }
  return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
  return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== undefined)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== undefined)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== undefined) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}
function isCheckbox(el) {
  return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
  return el.type === "radio" || el.localName === "ui-radio";
}
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let innerHash;
  let reference = effect(() => {
    let outer = outerGet();
    let inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
    } else {
      let outerHashLatest = JSON.stringify(outer);
      let innerHashLatest = JSON.stringify(inner);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
      } else if (outerHashLatest !== innerHashLatest) {
        outerSet(cloneIfObject(inner));
      } else {}
    }
    outerHash = JSON.stringify(outerGet());
    innerHash = JSON.stringify(innerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === undefined) {
    return stores[name];
  }
  stores[name] = value;
  initInterceptors(stores[name]);
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
}
function getStores() {
  return stores;
}
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {};
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  get transaction() {
    return transaction;
  },
  version: "3.15.8",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  setErrorHandler,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  initInterceptors,
  injectMagics,
  setEvaluator,
  setRawEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  evaluateRaw,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  cloneNode,
  bound: getBinding,
  $data: scope,
  watch,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0;i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
var targetMap = /* @__PURE__ */ new WeakMap;
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const { deps } = effect3;
  if (deps.length) {
    for (let i = 0;i < deps.length; i++) {
      deps[i].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = /* @__PURE__ */ new Map);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = /* @__PURE__ */ new Set);
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = /* @__PURE__ */ new Set;
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== undefined) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length;i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, undefined, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var toReactive = (value) => isObject(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : undefined;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, undefined, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", undefined, undefined, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap;
var shallowReactiveMap = /* @__PURE__ */ new WeakMap;
var readonlyMap = /* @__PURE__ */ new WeakMap;
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap;
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
  let evaluate2 = evaluateLater2(key);
  let getter = () => {
    let value;
    evaluate2((i) => value = i);
    return value;
  };
  let unwatch = watch(getter, callback);
  cleanup2(unwatch);
});
magic("store", getStores);
magic("data", (el) => scope(el));
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  findClosest(el, (i) => {
    if (i._x_refs)
      refObjects.push(i._x_refs);
  });
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
  let cacheKey = `${name}${key ? `-${key}` : ""}`;
  return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
});
interceptClone((from, to) => {
  if (from._x_id) {
    to._x_id = from._x_id;
  }
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
  if (!el._x_id)
    el._x_id = {};
  if (el._x_id[cacheKey])
    return el._x_id[cacheKey];
  let output = callback();
  el._x_id[cacheKey] = output;
  cleanup2(() => {
    delete el._x_id[cacheKey];
  });
  return output;
}
magic("el", (el) => el);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {}, { scope: { __placeholder: val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle({
      get() {
        return outerGet();
      },
      set(value) {
        outerSet(value);
      }
    }, {
      get() {
        return innerGet();
      },
      set(value) {
        innerSet(value);
      }
    });
    cleanup2(releaseEntanglement);
  });
});
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    skipDuringClone(() => {
      initTree(clone2);
    })();
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup2(() => mutateDom(() => {
    clone2.remove();
    destroyTree(clone2);
  }));
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}
var handler = () => {};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression));
}));
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (event === "submit") {
    handler4 = wrapHandler(handler4, (next, e) => {
      if (e.target._x_pendingModelUpdates) {
        e.target._x_pendingModelUpdates.forEach((fn) => fn());
      }
      next(e);
    });
  }
  if (isKeyEvent(event) || isClickEvent(event)) {
    handler4 = wrapHandler(handler4, (next, e) => {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
      next(e);
    });
  }
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(subject))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isClickEvent(event) {
  return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive", "preserve-scroll", "blur", "change", "lazy"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (isClickEvent(e.type))
        return false;
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    comma: ",",
    equal: "=",
    minus: "-",
    underscore: "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {};
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {}, {
        scope: { __placeholder: value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  let hasChangeModifier = modifiers.includes("change") || modifiers.includes("lazy");
  let hasBlurModifier = modifiers.includes("blur");
  let hasEnterModifier = modifiers.includes("enter");
  let hasExplicitEventModifiers = hasChangeModifier || hasBlurModifier || hasEnterModifier;
  let removeListener;
  if (isCloning) {
    removeListener = () => {};
  } else if (hasExplicitEventModifiers) {
    let listeners = [];
    let syncValue = (e) => setValue(getInputValue(el, modifiers, e, getValue()));
    if (hasChangeModifier) {
      listeners.push(on(el, "change", modifiers, syncValue));
    }
    if (hasBlurModifier) {
      listeners.push(on(el, "blur", modifiers, syncValue));
      if (el.form) {
        let syncCallback = () => syncValue({ target: el });
        if (!el.form._x_pendingModelUpdates)
          el.form._x_pendingModelUpdates = [];
        el.form._x_pendingModelUpdates.push(syncCallback);
        cleanup2(() => el.form._x_pendingModelUpdates.splice(el.form._x_pendingModelUpdates.indexOf(syncCallback), 1));
      }
    }
    if (hasEnterModifier) {
      listeners.push(on(el, "keydown", modifiers, (e) => {
        if (e.key === "Enter")
          syncValue(e);
      }));
    }
    removeListener = () => listeners.forEach((remove) => remove());
  } else {
    let event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) ? "change" : "input";
    removeListener = on(el, event, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
  }
  if (modifiers.includes("fill")) {
    if ([undefined, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
      setValue(getInputValue(el, modifiers, { target: el }, getValue()));
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === undefined && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== undefined)
      return event.detail !== null && event.detail !== undefined ? event.detail : event.target.value;
    else if (isCheckbox(el)) {
      if (Array.isArray(currentValue)) {
        let newValue = null;
        if (modifiers.includes("number")) {
          newValue = safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          newValue = safeParseBoolean(event.target.value);
        } else {
          newValue = event.target.value;
        }
        return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      if (modifiers.includes("number")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        });
      } else if (modifiers.includes("boolean")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseBoolean(rawValue);
        });
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let newValue;
      if (isRadio(el)) {
        if (event.target.checked) {
          newValue = event.target.value;
        } else {
          newValue = currentValue;
        }
      } else {
        newValue = event.target.value;
      }
      if (modifiers.includes("number")) {
        return safeParseNumber(newValue);
      } else if (modifiers.includes("boolean")) {
        return safeParseBoolean(newValue);
      } else if (modifiers.includes("trim")) {
        return newValue.trim();
      } else {
        return newValue;
      }
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate2(expression, {}, false);
  }
  return evaluate2(expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === undefined && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
  cleanup2(() => {
    el._x_undoAddedClasses && el._x_undoAddedClasses();
    el._x_undoAddedStyles && el._x_undoAddedStyles();
  });
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === undefined || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
});
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate2 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : undefined);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once((value) => value ? show() : hide(), (value) => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => mutateDom(() => {
      destroyTree(el2);
      el2.remove();
    }));
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === undefined)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => {
          if (keys.includes(value2))
            warn("Duplicate key on x-for", el);
          keys.push(value2);
        }, { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0;i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => {
          if (keys.includes(value))
            warn("Duplicate key on x-for", el);
          keys.push(value);
        }, { scope: { index: i, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0;i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0;i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0;i < removes.length; i++) {
      let key = removes[i];
      if (!(key in lookup))
        continue;
      mutateDom(() => {
        destroyTree(lookup[key]);
        lookup[key].remove();
      });
      delete lookup[key];
    }
    for (let i = 0;i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0;i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0;i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      skipDuringClone(() => initTree(clone2))();
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      mutateDom(() => {
        destroyTree(clone2);
        clone2.remove();
      });
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});
interceptClone((from, to) => {
  if (from._x_ids) {
    to._x_ids = from._x_ids;
  }
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {};
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {}, { scope: { $event: e }, params: [e] });
  });
  cleanup2(() => removeListener());
}));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setRawEvaluator(normalRawEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default;
var module_default = src_default;

// src/js/app.js
init_jquery_module();

// node_modules/datatables.net/js/dataTables.mjs
init_jquery_module();
/*! DataTables 2.3.7
 * © SpryMedia Ltd - datatables.net/license
 */
var $2 = jquery_module_default;
var DataTable = function(selector, options) {
  if (DataTable.factory(selector, options)) {
    return DataTable;
  }
  if (this instanceof DataTable) {
    return $2(selector).DataTable(options);
  } else {
    options = selector;
  }
  var _that = this;
  var emptyInit = options === undefined;
  var len = this.length;
  if (emptyInit) {
    options = {};
  }
  this.api = function() {
    return new _Api(this);
  };
  this.each(function() {
    var o = {};
    var oInit = len > 1 ? _fnExtend(o, options, true) : options;
    var i = 0, iLen;
    var sId = this.getAttribute("id");
    var defaults = DataTable.defaults;
    var $this = $2(this);
    if (this.nodeName.toLowerCase() != "table") {
      _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    if (oInit.on && oInit.on.options) {
      _fnListener($this, "options", oInit.on.options);
    }
    $this.trigger("options.dt", oInit);
    _fnCompatOpts(defaults);
    _fnCompatCols(defaults.column);
    _fnCamelToHungarian(defaults, defaults, true);
    _fnCamelToHungarian(defaults.column, defaults.column, true);
    _fnCamelToHungarian(defaults, $2.extend(oInit, _fnEscapeObject($this.data())), true);
    var allSettings = DataTable.settings;
    for (i = 0, iLen = allSettings.length;i < iLen; i++) {
      var s = allSettings[i];
      if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
        var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
        var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
        if (emptyInit || bRetrieve) {
          return s.oInstance;
        } else if (bDestroy) {
          new DataTable.Api(s).destroy();
          break;
        } else {
          _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (s.sTableId == this.id) {
        allSettings.splice(i, 1);
        break;
      }
    }
    if (sId === null || sId === "") {
      sId = "DataTables_Table_" + DataTable.ext._unique++;
      this.id = sId;
    }
    $this.children("colgroup").remove();
    var oSettings = $2.extend(true, {}, DataTable.models.oSettings, {
      sDestroyWidth: $this[0].style.width,
      sInstance: sId,
      sTableId: sId,
      colgroup: $2("<colgroup>"),
      fastData: function(row, column, type) {
        return _fnGetCellData(oSettings, row, column, type);
      }
    });
    oSettings.nTable = this;
    oSettings.oInit = oInit;
    allSettings.push(oSettings);
    oSettings.api = new _Api(oSettings);
    oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
    _fnCompatOpts(oInit);
    if (oInit.aLengthMenu && !oInit.iDisplayLength) {
      oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $2.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
    }
    oInit = _fnExtend($2.extend(true, {}, defaults), oInit);
    _fnMap(oSettings.oFeatures, oInit, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]);
    _fnMap(oSettings, oInit, [
      "ajax",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "iStateDuration",
      "bSortCellsTop",
      "iTabIndex",
      "sDom",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      "caption",
      "layout",
      "orderDescReverse",
      "orderIndicators",
      "orderHandler",
      "titleRow",
      "typeDetect",
      "columnTitleTag",
      ["iCookieDuration", "iStateDuration"],
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]);
    _fnMap(oSettings.oScroll, oInit, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]);
    _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
    _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
    _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
    _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
    _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
    _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
    _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
    _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
    _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
    _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
    _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
    oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
    if (oInit.on) {
      Object.keys(oInit.on).forEach(function(key) {
        _fnListener($this, key, oInit.on[key]);
      });
    }
    _fnBrowserDetect(oSettings);
    var oClasses = oSettings.oClasses;
    $2.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
    $this.addClass(oClasses.table);
    if (!oSettings.oFeatures.bPaginate) {
      oInit.iDisplayStart = 0;
    }
    if (oSettings.iInitDisplayStart === undefined) {
      oSettings.iInitDisplayStart = oInit.iDisplayStart;
      oSettings._iDisplayStart = oInit.iDisplayStart;
    }
    var defer = oInit.iDeferLoading;
    if (defer !== null) {
      oSettings.deferLoading = true;
      var tmp = Array.isArray(defer);
      oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
      oSettings._iRecordsTotal = tmp ? defer[1] : defer;
    }
    var columnsInit = [];
    var thead = this.getElementsByTagName("thead");
    var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
    if (oInit.aoColumns) {
      columnsInit = oInit.aoColumns;
    } else if (initHeaderLayout.length) {
      for (i = 0, iLen = initHeaderLayout[0].length;i < iLen; i++) {
        columnsInit.push(null);
      }
    }
    for (i = 0, iLen = columnsInit.length;i < iLen; i++) {
      _fnAddColumn(oSettings);
    }
    _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
      _fnColumnOptions(oSettings, iCol, oDef);
    });
    var rowOne = $this.children("tbody").find("tr:first-child").eq(0);
    if (rowOne.length) {
      var a = function(cell, name) {
        return cell.getAttribute("data-" + name) !== null ? name : null;
      };
      $2(rowOne[0]).children("th, td").each(function(i2, cell) {
        var col = oSettings.aoColumns[i2];
        if (!col) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        if (col.mData === i2) {
          var sort = a(cell, "sort") || a(cell, "order");
          var filter = a(cell, "filter") || a(cell, "search");
          if (sort !== null || filter !== null) {
            col.mData = {
              _: i2 + ".display",
              sort: sort !== null ? i2 + ".@data-" + sort : undefined,
              type: sort !== null ? i2 + ".@data-" + sort : undefined,
              filter: filter !== null ? i2 + ".@data-" + filter : undefined
            };
            col._isArrayHost = true;
            _fnColumnOptions(oSettings, i2);
          }
        }
      });
    }
    _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
    var features = oSettings.oFeatures;
    if (oInit.bStateSave) {
      features.bStateSave = true;
    }
    if (oInit.aaSorting === undefined) {
      var sorting = oSettings.aaSorting;
      for (i = 0, iLen = sorting.length;i < iLen; i++) {
        sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
      }
    }
    _fnSortingClasses(oSettings);
    _fnCallbackReg(oSettings, "aoDrawCallback", function() {
      if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
        _fnSortingClasses(oSettings);
      }
    });
    var caption = $this.children("caption");
    if (oSettings.caption) {
      if (caption.length === 0) {
        caption = $2("<caption/>").prependTo($this);
      }
      caption.html(oSettings.caption);
    }
    if (caption.length) {
      caption[0]._captionSide = caption.css("caption-side");
      oSettings.captionNode = caption[0];
    }
    if (caption.length) {
      oSettings.colgroup.insertAfter(caption);
    } else {
      oSettings.colgroup.prependTo(oSettings.nTable);
    }
    if (thead.length === 0) {
      thead = $2("<thead/>").appendTo($this);
    }
    oSettings.nTHead = thead[0];
    var tbody = $this.children("tbody");
    if (tbody.length === 0) {
      tbody = $2("<tbody/>").insertAfter(thead);
    }
    oSettings.nTBody = tbody[0];
    var tfoot = $this.children("tfoot");
    if (tfoot.length === 0) {
      tfoot = $2("<tfoot/>").appendTo($this);
    }
    oSettings.nTFoot = tfoot[0];
    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    oSettings.bInitialised = true;
    var oLanguage = oSettings.oLanguage;
    $2.extend(true, oLanguage, oInit.oLanguage);
    if (oLanguage.sUrl) {
      $2.ajax({
        dataType: "json",
        url: oLanguage.sUrl,
        success: function(json) {
          _fnCamelToHungarian(defaults.oLanguage, json);
          $2.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
          _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
          _fnInitialise(oSettings);
        },
        error: function() {
          _fnLog(oSettings, 0, "i18n file loading error", 21);
          _fnInitialise(oSettings);
        }
      });
    } else {
      _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
      _fnInitialise(oSettings);
    }
  });
  _that = null;
  return this;
};
DataTable.ext = _ext = {
  builder: "-source-",
  buttons: {},
  ccContent: {},
  classes: {},
  errMode: "alert",
  escape: {
    attributes: false
  },
  feature: [],
  features: {},
  search: [],
  selector: {
    cell: [],
    column: [],
    row: []
  },
  legacy: {
    ajax: null
  },
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  order: {},
  type: {
    className: {},
    detect: [],
    render: {},
    search: {},
    order: {}
  },
  _unique: 0,
  fnVersionCheck: DataTable.fnVersionCheck,
  iApiIndex: 0,
  sVersion: DataTable.version
};
$2.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$2.extend(DataTable.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  layout: {
    row: "dt-layout-row",
    cell: "dt-layout-cell",
    tableRow: "dt-layout-table",
    tableCell: "",
    start: "dt-layout-start",
    end: "dt-layout-end",
    full: "dt-layout-full"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled",
    nav: ""
  }
});
var _ext;
var _Api;
var _api_register;
var _api_registerPlural;
var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<([^>]*>)/g;
var _max_str_len = Math.pow(2, 28);
var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
var _empty = function(d) {
  return !d || d === true || d === "-" ? true : false;
};
var _intVal = function(s) {
  var integer = parseInt(s, 10);
  return !isNaN(integer) && isFinite(s) ? integer : null;
};
var _numToDecimal = function(num, decimalPoint) {
  if (!_re_dic[decimalPoint]) {
    _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
  }
  return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
};
var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
  var type = typeof d;
  var strType = type === "string";
  if (type === "number" || type === "bigint") {
    return true;
  }
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (decimalPoint && strType) {
    d = _numToDecimal(d, decimalPoint);
  }
  if (formatted && strType) {
    d = d.replace(_re_formatted_numeric, "");
  }
  return !isNaN(parseFloat(d)) && isFinite(d);
};
var _isHtml = function(d) {
  return _empty(d) || typeof d === "string";
};
var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (typeof d === "string" && d.match(/<(input|select)/i)) {
    return null;
  }
  var html = _isHtml(d);
  return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null;
};
var _pluck = function(a, prop, prop2) {
  var out = [];
  var i = 0, iLen = a.length;
  if (prop2 !== undefined) {
    for (;i < iLen; i++) {
      if (a[i] && a[i][prop]) {
        out.push(a[i][prop][prop2]);
      }
    }
  } else {
    for (;i < iLen; i++) {
      if (a[i]) {
        out.push(a[i][prop]);
      }
    }
  }
  return out;
};
var _pluck_order = function(a, order, prop, prop2) {
  var out = [];
  var i = 0, iLen = order.length;
  if (prop2 !== undefined) {
    for (;i < iLen; i++) {
      if (a[order[i]] && a[order[i]][prop]) {
        out.push(a[order[i]][prop][prop2]);
      }
    }
  } else {
    for (;i < iLen; i++) {
      if (a[order[i]]) {
        out.push(a[order[i]][prop]);
      }
    }
  }
  return out;
};
var _range = function(len, start2) {
  var out = [];
  var end;
  if (start2 === undefined) {
    start2 = 0;
    end = len;
  } else {
    end = start2;
    start2 = len;
  }
  for (var i = start2;i < end; i++) {
    out.push(i);
  }
  return out;
};
var _removeEmpty = function(a) {
  var out = [];
  for (var i = 0, iLen = a.length;i < iLen; i++) {
    if (a[i]) {
      out.push(a[i]);
    }
  }
  return out;
};
var _stripHtml = function(input, replacement) {
  if (!input || typeof input !== "string") {
    return input;
  }
  if (input.length > _max_str_len) {
    throw new Error("Exceeded max str len");
  }
  var previous;
  input = input.replace(_re_html, replacement || "");
  do {
    previous = input;
    input = input.replace(/<script/i, "");
  } while (input !== previous);
  return previous;
};
var _escapeHtml = function(d) {
  if (Array.isArray(d)) {
    d = d.join(",");
  }
  return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
};
var _normalize = function(str, both) {
  if (typeof str !== "string") {
    return str;
  }
  var res = str.normalize ? str.normalize("NFD") : str;
  return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
};
var _areAllUnique = function(src) {
  if (src.length < 2) {
    return true;
  }
  var sorted = src.slice().sort();
  var last = sorted[0];
  for (var i = 1, iLen = sorted.length;i < iLen; i++) {
    if (sorted[i] === last) {
      return false;
    }
    last = sorted[i];
  }
  return true;
};
var _unique = function(src) {
  if (Array.from && Set) {
    return Array.from(new Set(src));
  }
  if (_areAllUnique(src)) {
    return src.slice();
  }
  var out = [], val, i, iLen = src.length, j, k = 0;
  again:
    for (i = 0;i < iLen; i++) {
      val = src[i];
      for (j = 0;j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k++;
    }
  return out;
};
var _flatten = function(out, val) {
  if (Array.isArray(val)) {
    for (var i = 0;i < val.length; i++) {
      _flatten(out, val[i]);
    }
  } else {
    out.push(val);
  }
  return out;
};
function _addClass(el, name) {
  if (name) {
    name.split(" ").forEach(function(n) {
      if (n) {
        el.classList.add(n);
      }
    });
  }
}
DataTable.util = {
  diacritics: function(mixed, both) {
    var type = typeof mixed;
    if (type !== "function") {
      return _normalize(mixed, both);
    }
    _normalize = mixed;
  },
  debounce: function(fn, timeout) {
    var timer;
    return function() {
      var that = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(that, args);
      }, timeout || 250);
    };
  },
  throttle: function(fn, freq) {
    var frequency = freq !== undefined ? freq : 200, last, timer;
    return function() {
      var that = this, now = +new Date, args = arguments;
      if (last && now < last + frequency) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = undefined;
          fn.apply(that, args);
        }, frequency);
      } else {
        last = now;
        fn.apply(that, args);
      }
    };
  },
  escapeRegex: function(val) {
    return val.replace(_re_escape_regex, "\\$1");
  },
  set: function(source) {
    if ($2.isPlainObject(source)) {
      return DataTable.util.set(source._);
    } else if (source === null) {
      return function() {};
    } else if (typeof source === "function") {
      return function(data2, val, meta) {
        source(data2, "set", val, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var setData = function(data2, val, src) {
        var a = _fnSplitObjNotation(src), b;
        var aLast = a[a.length - 1];
        var arrayNotation, funcNotation, o, innerSrc;
        for (var i = 0, iLen = a.length - 1;i < iLen; i++) {
          if (a[i] === "__proto__" || a[i] === "constructor") {
            throw new Error("Cannot set prototype values");
          }
          arrayNotation = a[i].match(__reArray);
          funcNotation = a[i].match(__reFn);
          if (arrayNotation) {
            a[i] = a[i].replace(__reArray, "");
            data2[a[i]] = [];
            b = a.slice();
            b.splice(0, i + 1);
            innerSrc = b.join(".");
            if (Array.isArray(val)) {
              for (var j = 0, jLen = val.length;j < jLen; j++) {
                o = {};
                setData(o, val[j], innerSrc);
                data2[a[i]].push(o);
              }
            } else {
              data2[a[i]] = val;
            }
            return;
          } else if (funcNotation) {
            a[i] = a[i].replace(__reFn, "");
            data2 = data2[a[i]](val);
          }
          if (data2[a[i]] === null || data2[a[i]] === undefined) {
            data2[a[i]] = {};
          }
          data2 = data2[a[i]];
        }
        if (aLast.match(__reFn)) {
          data2 = data2[aLast.replace(__reFn, "")](val);
        } else {
          data2[aLast.replace(__reArray, "")] = val;
        }
      };
      return function(data2, val) {
        return setData(data2, val, source);
      };
    } else {
      return function(data2, val) {
        data2[source] = val;
      };
    }
  },
  get: function(source) {
    if ($2.isPlainObject(source)) {
      var o = {};
      $2.each(source, function(key, val) {
        if (val) {
          o[key] = DataTable.util.get(val);
        }
      });
      return function(data2, type, row, meta) {
        var t = o[type] || o._;
        return t !== undefined ? t(data2, type, row, meta) : data2;
      };
    } else if (source === null) {
      return function(data2) {
        return data2;
      };
    } else if (typeof source === "function") {
      return function(data2, type, row, meta) {
        return source(data2, type, row, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var fetchData = function(data2, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;
        if (src !== "") {
          var a = _fnSplitObjNotation(src);
          for (var i = 0, iLen = a.length;i < iLen; i++) {
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              if (a[i] !== "") {
                data2 = data2[a[i]];
              }
              out = [];
              a.splice(0, i + 1);
              innerSrc = a.join(".");
              if (Array.isArray(data2)) {
                for (var j = 0, jLen = data2.length;j < jLen; j++) {
                  out.push(fetchData(data2[j], type, innerSrc));
                }
              }
              var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
              data2 = join === "" ? out : out.join(join);
              break;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data2 = data2[a[i]]();
              continue;
            }
            if (data2 === null || data2[a[i]] === null) {
              return null;
            } else if (data2 === undefined || data2[a[i]] === undefined) {
              return;
            }
            data2 = data2[a[i]];
          }
        }
        return data2;
      };
      return function(data2, type) {
        return fetchData(data2, type, source);
      };
    } else {
      return function(data2) {
        return data2[source];
      };
    }
  },
  stripHtml: function(mixed, replacement) {
    var type = typeof mixed;
    if (type === "function") {
      _stripHtml = mixed;
      return;
    } else if (type === "string") {
      return _stripHtml(mixed, replacement);
    }
    return mixed;
  },
  escapeHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _escapeHtml = mixed;
      return;
    } else if (type === "string" || Array.isArray(mixed)) {
      return _escapeHtml(mixed);
    }
    return mixed;
  },
  unique: _unique
};
function _fnHungarianMap(o) {
  var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
  $2.each(o, function(key) {
    match = key.match(/^([^A-Z]+?)([A-Z])/);
    if (match && hungarian.indexOf(match[1] + " ") !== -1) {
      newKey = key.replace(match[0], match[2].toLowerCase());
      map[newKey] = key;
      if (match[1] === "o") {
        _fnHungarianMap(o[key]);
      }
    }
  });
  o._hungarianMap = map;
}
function _fnCamelToHungarian(src, user, force) {
  if (!src._hungarianMap) {
    _fnHungarianMap(src);
  }
  var hungarianKey;
  $2.each(user, function(key) {
    hungarianKey = src._hungarianMap[key];
    if (hungarianKey !== undefined && (force || user[hungarianKey] === undefined)) {
      if (hungarianKey.charAt(0) === "o") {
        if (!user[hungarianKey]) {
          user[hungarianKey] = {};
        }
        $2.extend(true, user[hungarianKey], user[key]);
        _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
      } else {
        user[hungarianKey] = user[key];
      }
    }
  });
}
var _fnCompatMap = function(o, knew, old) {
  if (o[knew] !== undefined) {
    o[old] = o[knew];
  }
};
function _fnCompatOpts(init) {
  _fnCompatMap(init, "ordering", "bSort");
  _fnCompatMap(init, "orderMulti", "bSortMulti");
  _fnCompatMap(init, "orderClasses", "bSortClasses");
  _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
  _fnCompatMap(init, "order", "aaSorting");
  _fnCompatMap(init, "orderFixed", "aaSortingFixed");
  _fnCompatMap(init, "paging", "bPaginate");
  _fnCompatMap(init, "pagingType", "sPaginationType");
  _fnCompatMap(init, "pageLength", "iDisplayLength");
  _fnCompatMap(init, "searching", "bFilter");
  if (typeof init.sScrollX === "boolean") {
    init.sScrollX = init.sScrollX ? "100%" : "";
  }
  if (typeof init.scrollX === "boolean") {
    init.scrollX = init.scrollX ? "100%" : "";
  }
  if (typeof init.bSort === "object") {
    init.orderIndicators = init.bSort.indicators !== undefined ? init.bSort.indicators : true;
    init.orderHandler = init.bSort.handler !== undefined ? init.bSort.handler : true;
    init.bSort = true;
  } else if (init.bSort === false) {
    init.orderIndicators = false;
    init.orderHandler = false;
  } else if (init.bSort === true) {
    init.orderIndicators = true;
    init.orderHandler = true;
  }
  if (typeof init.bSortCellsTop === "boolean") {
    init.titleRow = init.bSortCellsTop;
  }
  var searchCols = init.aoSearchCols;
  if (searchCols) {
    for (var i = 0, iLen = searchCols.length;i < iLen; i++) {
      if (searchCols[i]) {
        _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i]);
      }
    }
  }
  if (init.serverSide && !init.searchDelay) {
    init.searchDelay = 400;
  }
}
function _fnCompatCols(init) {
  _fnCompatMap(init, "orderable", "bSortable");
  _fnCompatMap(init, "orderData", "aDataSort");
  _fnCompatMap(init, "orderSequence", "asSorting");
  _fnCompatMap(init, "orderDataType", "sortDataType");
  var dataSort = init.aDataSort;
  if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
    init.aDataSort = [dataSort];
  }
}
function _fnBrowserDetect(settings) {
  if (!DataTable.__browser) {
    var browser = {};
    DataTable.__browser = browser;
    var n = $2("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append($2("<div/>").css({
      position: "absolute",
      top: 1,
      left: 1,
      width: 100,
      overflow: "scroll"
    }).append($2("<div/>").css({
      width: "100%",
      height: 10
    }))).appendTo("body");
    var outer = n.children();
    var inner = outer.children();
    browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
    browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
    n.remove();
  }
  $2.extend(settings.oBrowser, DataTable.__browser);
  settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
}
function _fnAddColumn(oSettings) {
  var oDefaults = DataTable.defaults.column;
  var iCol = oSettings.aoColumns.length;
  var oCol = $2.extend({}, DataTable.models.oColumn, oDefaults, {
    aDataSort: oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
    mData: oDefaults.mData ? oDefaults.mData : iCol,
    idx: iCol,
    searchFixed: {},
    colEl: $2("<col>").attr("data-dt-column", iCol)
  });
  oSettings.aoColumns.push(oCol);
  var searchCols = oSettings.aoPreSearchCols;
  searchCols[iCol] = $2.extend({}, DataTable.models.oSearch, searchCols[iCol]);
}
function _fnColumnOptions(oSettings, iCol, oOptions) {
  var oCol = oSettings.aoColumns[iCol];
  if (oOptions !== undefined && oOptions !== null) {
    _fnCompatCols(oOptions);
    _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
    if (oOptions.mDataProp !== undefined && !oOptions.mData) {
      oOptions.mData = oOptions.mDataProp;
    }
    if (oOptions.sType) {
      oCol._sManualType = oOptions.sType;
    }
    if (oOptions.className && !oOptions.sClass) {
      oOptions.sClass = oOptions.className;
    }
    var origClass = oCol.sClass;
    $2.extend(oCol, oOptions);
    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
    if (origClass !== oCol.sClass) {
      oCol.sClass = origClass + " " + oCol.sClass;
    }
    if (oOptions.iDataSort !== undefined) {
      oCol.aDataSort = [oOptions.iDataSort];
    }
    _fnMap(oCol, oOptions, "aDataSort");
  }
  var mDataSrc = oCol.mData;
  var mData = _fnGetObjectDataFn(mDataSrc);
  if (oCol.mRender && Array.isArray(oCol.mRender)) {
    var copy = oCol.mRender.slice();
    var name = copy.shift();
    oCol.mRender = DataTable.render[name].apply(window, copy);
  }
  oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
  var attrTest = function(src) {
    return typeof src === "string" && src.indexOf("@") !== -1;
  };
  oCol._bAttrSrc = $2.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
  oCol._setter = null;
  oCol.fnGetData = function(rowData, type, meta) {
    var innerData = mData(rowData, type, undefined, meta);
    return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
  };
  oCol.fnSetData = function(rowData, val, meta) {
    return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
  };
  if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
    oSettings._rowReadObject = true;
  }
  if (!oSettings.oFeatures.bSort) {
    oCol.bSortable = false;
  }
}
function _fnAdjustColumnSizing(settings) {
  _fnCalculateColumnWidths(settings);
  _fnColumnSizes(settings);
  var scroll = settings.oScroll;
  if (scroll.sY !== "" || scroll.sX !== "") {
    _fnScrollDraw(settings);
  }
  _fnCallbackFire(settings, null, "column-sizing", [settings]);
}
function _fnColumnSizes(settings) {
  var cols = settings.aoColumns;
  for (var i = 0;i < cols.length; i++) {
    var width = _fnColumnsSumWidth(settings, [i], false, false);
    cols[i].colEl.css("width", width);
    if (settings.oScroll.sX) {
      cols[i].colEl.css("min-width", width);
    }
  }
}
function _fnVisibleToColumnIndex(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
}
function _fnColumnIndexToVisible(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  var iPos = aiVis.indexOf(iMatch);
  return iPos !== -1 ? iPos : null;
}
function _fnVisibleColumns(settings) {
  var layout = settings.aoHeader;
  var columns = settings.aoColumns;
  var vis = 0;
  if (layout.length) {
    for (var i = 0, iLen = layout[0].length;i < iLen; i++) {
      if (columns[i].bVisible && $2(layout[0][i].cell).css("display") !== "none") {
        vis++;
      }
    }
  }
  return vis;
}
function _fnGetColumns(oSettings, sParam) {
  var a = [];
  oSettings.aoColumns.map(function(val, i) {
    if (val[sParam]) {
      a.push(i);
    }
  });
  return a;
}
function _typeResult(typeDetect, res) {
  return res === true ? typeDetect._name : res;
}
function _fnColumnTypes(settings) {
  var columns = settings.aoColumns;
  var data2 = settings.aoData;
  var types = DataTable.ext.type.detect;
  var i, iLen, j, jen, k, ken;
  var col, detectedType, cache;
  for (i = 0, iLen = columns.length;i < iLen; i++) {
    col = columns[i];
    cache = [];
    if (!col.sType && col._sManualType) {
      col.sType = col._sManualType;
    } else if (!col.sType) {
      if (!settings.typeDetect) {
        return;
      }
      for (j = 0, jen = types.length;j < jen; j++) {
        var typeDetect = types[j];
        var oneOf = typeDetect.oneOf;
        var allOf = typeDetect.allOf || typeDetect;
        var init = typeDetect.init;
        var one = false;
        detectedType = null;
        if (init) {
          detectedType = _typeResult(typeDetect, init(settings, col, i));
          if (detectedType) {
            col.sType = detectedType;
            break;
          }
        }
        for (k = 0, ken = data2.length;k < ken; k++) {
          if (!data2[k]) {
            continue;
          }
          if (cache[k] === undefined) {
            cache[k] = _fnGetCellData(settings, k, i, "type");
          }
          if (oneOf && !one) {
            one = _typeResult(typeDetect, oneOf(cache[k], settings));
          }
          detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
          if (!detectedType && j !== types.length - 3) {
            break;
          }
          if (detectedType === "html" && !_empty(cache[k])) {
            break;
          }
        }
        if (oneOf && one && detectedType || !oneOf && detectedType) {
          col.sType = detectedType;
          break;
        }
      }
      if (!col.sType) {
        col.sType = "string";
      }
    }
    var autoClass = _ext.type.className[col.sType];
    if (autoClass) {
      _columnAutoClass(settings.aoHeader, i, autoClass);
      _columnAutoClass(settings.aoFooter, i, autoClass);
    }
    var renderer = _ext.type.render[col.sType];
    if (renderer && !col._render) {
      col._render = DataTable.util.get(renderer);
      _columnAutoRender(settings, i);
    }
  }
}
function _columnAutoRender(settings, colIdx) {
  var data2 = settings.aoData;
  for (var i = 0;i < data2.length; i++) {
    if (data2[i].nTr) {
      var display = _fnGetCellData(settings, i, colIdx, "display");
      data2[i].displayData[colIdx] = display;
      _fnWriteCell(data2[i].anCells[colIdx], display);
    }
  }
}
function _columnAutoClass(container, colIdx, className) {
  container.forEach(function(row) {
    if (row[colIdx] && row[colIdx].unique) {
      _addClass(row[colIdx].cell, className);
    }
  });
}
function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
  var i, iLen, j, jLen, k, kLen, def;
  var columns = oSettings.aoColumns;
  if (aoCols) {
    for (i = 0, iLen = aoCols.length;i < iLen; i++) {
      if (aoCols[i] && aoCols[i].name) {
        columns[i].sName = aoCols[i].name;
      }
    }
  }
  if (aoColDefs) {
    for (i = aoColDefs.length - 1;i >= 0; i--) {
      def = aoColDefs[i];
      var aTargets = def.target !== undefined ? def.target : def.targets !== undefined ? def.targets : def.aTargets;
      if (!Array.isArray(aTargets)) {
        aTargets = [aTargets];
      }
      for (j = 0, jLen = aTargets.length;j < jLen; j++) {
        var target = aTargets[j];
        if (typeof target === "number" && target >= 0) {
          while (columns.length <= target) {
            _fnAddColumn(oSettings);
          }
          fn(target, def);
        } else if (typeof target === "number" && target < 0) {
          fn(columns.length + target, def);
        } else if (typeof target === "string") {
          for (k = 0, kLen = columns.length;k < kLen; k++) {
            if (target === "_all") {
              fn(k, def);
            } else if (target.indexOf(":name") !== -1) {
              if (columns[k].sName === target.replace(":name", "")) {
                fn(k, def);
              }
            } else {
              headerLayout.forEach(function(row) {
                if (row[k]) {
                  var cell = $2(row[k].cell);
                  if (target.match(/^[a-z][\w-]*$/i)) {
                    target = "." + target;
                  }
                  if (cell.is(target)) {
                    fn(k, def);
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  if (aoCols) {
    for (i = 0, iLen = aoCols.length;i < iLen; i++) {
      fn(i, aoCols[i]);
    }
  }
}
function _fnColumnsSumWidth(settings, targets, original, incVisible) {
  if (!Array.isArray(targets)) {
    targets = _fnColumnsFromHeader(targets);
  }
  var sum = 0;
  var unit;
  var columns = settings.aoColumns;
  for (var i = 0, iLen = targets.length;i < iLen; i++) {
    var column = columns[targets[i]];
    var definedWidth = original ? column.sWidthOrig : column.sWidth;
    if (!incVisible && column.bVisible === false) {
      continue;
    }
    if (definedWidth === null || definedWidth === undefined) {
      return null;
    } else if (typeof definedWidth === "number") {
      unit = "px";
      sum += definedWidth;
    } else {
      var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
      if (matched) {
        sum += matched[1] * 1;
        unit = matched.length === 3 ? matched[2] : "px";
      }
    }
  }
  return sum + unit;
}
function _fnColumnsFromHeader(cell) {
  var attr = $2(cell).closest("[data-dt-column]").attr("data-dt-column");
  if (!attr) {
    return [];
  }
  return attr.split(",").map(function(val) {
    return val * 1;
  });
}
function _fnAddData(settings, dataIn, tr, tds) {
  var rowIdx = settings.aoData.length;
  var rowModel = $2.extend(true, {}, DataTable.models.oRow, {
    src: tr ? "dom" : "data",
    idx: rowIdx
  });
  rowModel._aData = dataIn;
  settings.aoData.push(rowModel);
  var columns = settings.aoColumns;
  for (var i = 0, iLen = columns.length;i < iLen; i++) {
    columns[i].sType = null;
  }
  settings.aiDisplayMaster.push(rowIdx);
  var id = settings.rowIdFn(dataIn);
  if (id !== undefined) {
    settings.aIds[id] = rowModel;
  }
  if (tr || !settings.oFeatures.bDeferRender) {
    _fnCreateTr(settings, rowIdx, tr, tds);
  }
  return rowIdx;
}
function _fnAddTr(settings, trs) {
  var row;
  if (!(trs instanceof $2)) {
    trs = $2(trs);
  }
  return trs.map(function(i, el) {
    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
  });
}
function _fnGetCellData(settings, rowIdx, colIdx, type) {
  if (type === "search") {
    type = "filter";
  } else if (type === "order") {
    type = "sort";
  }
  var row = settings.aoData[rowIdx];
  if (!row) {
    return;
  }
  var draw = settings.iDraw;
  var col = settings.aoColumns[colIdx];
  var rowData = row._aData;
  var defaultContent = col.sDefaultContent;
  var cellData = col.fnGetData(rowData, type, {
    settings,
    row: rowIdx,
    col: colIdx
  });
  if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
    cellData = cellData.innerHTML;
  }
  if (cellData === undefined) {
    if (settings.iDrawError != draw && defaultContent === null) {
      _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
      settings.iDrawError = draw;
    }
    return defaultContent;
  }
  if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined) {
    cellData = defaultContent;
  } else if (typeof cellData === "function") {
    return cellData.call(rowData);
  }
  if (cellData === null && type === "display") {
    return "";
  }
  if (type === "filter") {
    var formatters = DataTable.ext.type.search;
    if (formatters[col.sType]) {
      cellData = formatters[col.sType](cellData);
    }
  }
  return cellData;
}
function _fnSetCellData(settings, rowIdx, colIdx, val) {
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  col.fnSetData(rowData, val, {
    settings,
    row: rowIdx,
    col: colIdx
  });
}
function _fnWriteCell(td, val) {
  if (val && typeof val === "object" && val.nodeName) {
    $2(td).empty().append(val);
  } else {
    td.innerHTML = val;
  }
}
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;
function _fnSplitObjNotation(str) {
  var parts = str.match(/(\\.|[^.])+/g) || [""];
  return parts.map(function(s) {
    return s.replace(/\\\./g, ".");
  });
}
var _fnGetObjectDataFn = DataTable.util.get;
var _fnSetObjectDataFn = DataTable.util.set;
function _fnGetDataMaster(settings) {
  return _pluck(settings.aoData, "_aData");
}
function _fnClearTable(settings) {
  settings.aoData.length = 0;
  settings.aiDisplayMaster.length = 0;
  settings.aiDisplay.length = 0;
  settings.aIds = {};
}
function _fnInvalidate(settings, rowIdx, src, colIdx) {
  var row = settings.aoData[rowIdx];
  var i, iLen;
  row._aSortData = null;
  row._aFilterData = null;
  row.displayData = null;
  if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
    row._aData = _fnGetRowElements(settings, row, colIdx, colIdx === undefined ? undefined : row._aData).data;
  } else {
    var cells = row.anCells;
    var display = _fnGetRowDisplay(settings, rowIdx);
    if (cells) {
      if (colIdx !== undefined) {
        _fnWriteCell(cells[colIdx], display[colIdx]);
      } else {
        for (i = 0, iLen = cells.length;i < iLen; i++) {
          _fnWriteCell(cells[i], display[i]);
        }
      }
    }
  }
  var cols = settings.aoColumns;
  if (colIdx !== undefined) {
    cols[colIdx].sType = null;
    cols[colIdx].wideStrings = null;
  } else {
    for (i = 0, iLen = cols.length;i < iLen; i++) {
      cols[i].sType = null;
      cols[i].wideStrings = null;
    }
    _fnRowAttributes(settings, row);
  }
}
function _fnGetRowElements(settings, row, colIdx, d) {
  var tds = [], td = row.firstChild, name, col, i = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
  d = d !== undefined ? d : objectRead ? {} : [];
  var attr = function(str, td2) {
    if (typeof str === "string") {
      var idx = str.indexOf("@");
      if (idx !== -1) {
        var attr2 = str.substring(idx + 1);
        var setter = _fnSetObjectDataFn(str);
        setter(d, td2.getAttribute(attr2));
      }
    }
  };
  var cellProcess = function(cell) {
    if (colIdx === undefined || colIdx === i) {
      col = columns[i];
      contents = cell.innerHTML.trim();
      if (col && col._bAttrSrc) {
        var setter = _fnSetObjectDataFn(col.mData._);
        setter(d, contents);
        attr(col.mData.sort, cell);
        attr(col.mData.type, cell);
        attr(col.mData.filter, cell);
      } else {
        if (objectRead) {
          if (!col._setter) {
            col._setter = _fnSetObjectDataFn(col.mData);
          }
          col._setter(d, contents);
        } else {
          d[i] = contents;
        }
      }
    }
    i++;
  };
  if (td) {
    while (td) {
      name = td.nodeName.toUpperCase();
      if (name == "TD" || name == "TH") {
        cellProcess(td);
        tds.push(td);
      }
      td = td.nextSibling;
    }
  } else {
    tds = row.anCells;
    for (var j = 0, jen = tds.length;j < jen; j++) {
      cellProcess(tds[j]);
    }
  }
  var rowNode = row.firstChild ? row : row.nTr;
  if (rowNode) {
    var id = rowNode.getAttribute("id");
    if (id) {
      _fnSetObjectDataFn(settings.rowId)(d, id);
    }
  }
  return {
    data: d,
    cells: tds
  };
}
function _fnGetRowDisplay(settings, rowIdx) {
  var rowModal = settings.aoData[rowIdx];
  var columns = settings.aoColumns;
  if (!rowModal.displayData) {
    rowModal.displayData = [];
    for (var colIdx = 0, len = columns.length;colIdx < len; colIdx++) {
      rowModal.displayData.push(_fnGetCellData(settings, rowIdx, colIdx, "display"));
    }
  }
  return rowModal.displayData;
}
function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
  var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i, iLen, create, trClass = oSettings.oClasses.tbody.row;
  if (row.nTr === null) {
    nTr = nTrIn || document.createElement("tr");
    row.nTr = nTr;
    row.anCells = cells;
    _addClass(nTr, trClass);
    nTr._DT_RowIndex = iRow;
    _fnRowAttributes(oSettings, row);
    for (i = 0, iLen = oSettings.aoColumns.length;i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      create = nTrIn && anTds[i] ? false : true;
      nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
      if (!nTd) {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
      nTd._DT_CellIndex = {
        row: iRow,
        column: i
      };
      cells.push(nTd);
      var display = _fnGetRowDisplay(oSettings, iRow);
      if (create || (oCol.mRender || oCol.mData !== i) && (!$2.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
        _fnWriteCell(nTd, display[i]);
      }
      _addClass(nTd, oCol.sClass);
      if (oCol.bVisible && create) {
        nTr.appendChild(nTd);
      } else if (!oCol.bVisible && !create) {
        nTd.parentNode.removeChild(nTd);
      }
      if (oCol.fnCreatedCell) {
        oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i), rowData, iRow, i);
      }
    }
    _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
  } else {
    _addClass(row.nTr, trClass);
  }
}
function _fnRowAttributes(settings, row) {
  var tr = row.nTr;
  var data2 = row._aData;
  if (tr) {
    var id = settings.rowIdFn(data2);
    if (id) {
      tr.id = id;
    }
    if (data2.DT_RowClass) {
      var a = data2.DT_RowClass.split(" ");
      row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
      $2(tr).removeClass(row.__rowc.join(" ")).addClass(data2.DT_RowClass);
    }
    if (data2.DT_RowAttr) {
      $2(tr).attr(data2.DT_RowAttr);
    }
    if (data2.DT_RowData) {
      $2(tr).data(data2.DT_RowData);
    }
  }
}
function _fnBuildHead(settings, side) {
  var classes = settings.oClasses;
  var columns = settings.aoColumns;
  var i, iLen, row;
  var target = side === "header" ? settings.nTHead : settings.nTFoot;
  var titleProp = side === "header" ? "sTitle" : side;
  if (!target) {
    return;
  }
  if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
    row = $2("tr", target);
    if (!row.length) {
      row = $2("<tr/>").appendTo(target);
    }
    if (row.length === 1) {
      var cellCount = 0;
      $2("td, th", row).each(function() {
        cellCount += this.colSpan;
      });
      for (i = cellCount, iLen = columns.length;i < iLen; i++) {
        $2("<th/>").html(columns[i][titleProp] || "").appendTo(row);
      }
    }
  }
  var detected = _fnDetectHeader(settings, target, true);
  if (side === "header") {
    settings.aoHeader = detected;
    $2("tr", target).addClass(classes.thead.row);
  } else {
    settings.aoFooter = detected;
    $2("tr", target).addClass(classes.tfoot.row);
  }
  $2(target).children("tr").children("th, td").each(function() {
    _fnRenderer(settings, side)(settings, $2(this), classes);
  });
}
function _fnHeaderLayout(settings, source, incColumns) {
  var row, column, cell;
  var local = [];
  var structure = [];
  var columns = settings.aoColumns;
  var columnCount = columns.length;
  var rowspan, colspan;
  if (!source) {
    return;
  }
  if (!incColumns) {
    incColumns = _range(columnCount).filter(function(idx) {
      return columns[idx].bVisible;
    });
  }
  for (row = 0;row < source.length; row++) {
    local[row] = source[row].slice().filter(function(cell2, i) {
      return incColumns.includes(i);
    });
    structure.push([]);
  }
  for (row = 0;row < local.length; row++) {
    for (column = 0;column < local[row].length; column++) {
      rowspan = 1;
      colspan = 1;
      if (structure[row][column] === undefined) {
        cell = local[row][column].cell;
        while (local[row + rowspan] !== undefined && local[row][column].cell == local[row + rowspan][column].cell) {
          structure[row + rowspan][column] = null;
          rowspan++;
        }
        while (local[row][column + colspan] !== undefined && local[row][column].cell == local[row][column + colspan].cell) {
          for (var k = 0;k < rowspan; k++) {
            structure[row + k][column + colspan] = null;
          }
          colspan++;
        }
        var titleSpan = $2(".dt-column-title", cell);
        structure[row][column] = {
          cell,
          colspan,
          rowspan,
          title: titleSpan.length ? titleSpan.html() : $2(cell).html()
        };
      }
    }
  }
  return structure;
}
function _fnDrawHead(settings, source) {
  var layout = _fnHeaderLayout(settings, source);
  var tr, n;
  for (var row = 0;row < source.length; row++) {
    tr = source[row].row;
    if (tr) {
      while (n = tr.firstChild) {
        tr.removeChild(n);
      }
    }
    for (var column = 0;column < layout[row].length; column++) {
      var point = layout[row][column];
      if (point) {
        $2(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
      }
    }
  }
}
function _fnDraw(oSettings, ajaxComplete) {
  _fnStart(oSettings);
  var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
  if (aPreDraw.indexOf(false) !== -1) {
    _fnProcessingDisplay(oSettings, false);
    return;
  }
  var anRows = [];
  var iRowCount = 0;
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var aiDisplay = oSettings.aiDisplay;
  var iDisplayStart = oSettings._iDisplayStart;
  var iDisplayEnd = oSettings.fnDisplayEnd();
  var columns = oSettings.aoColumns;
  var body = $2(oSettings.nTBody);
  oSettings.bDrawing = true;
  if (oSettings.deferLoading) {
    oSettings.deferLoading = false;
    oSettings.iDraw++;
    _fnProcessingDisplay(oSettings, false);
  } else if (!bServerSide) {
    oSettings.iDraw++;
  } else if (!oSettings.bDestroying && !ajaxComplete) {
    if (oSettings.iDraw === 0) {
      body.empty().append(_emptyRow(oSettings));
    }
    _fnAjaxUpdate(oSettings);
    return;
  }
  if (aiDisplay.length !== 0) {
    var iStart = bServerSide ? 0 : iDisplayStart;
    var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
    for (var j = iStart;j < iEnd; j++) {
      var iDataIndex = aiDisplay[j];
      var aoData = oSettings.aoData[iDataIndex];
      if (aoData === null) {
        continue;
      }
      if (aoData.nTr === null) {
        _fnCreateTr(oSettings, iDataIndex);
      }
      var nRow = aoData.nTr;
      for (var i = 0;i < columns.length; i++) {
        var col = columns[i];
        var td = aoData.anCells[i];
        _addClass(td, _ext.type.className[col.sType]);
        _addClass(td, oSettings.oClasses.tbody.cell);
      }
      _fnCallbackFire(oSettings, "aoRowCallback", null, [nRow, aoData._aData, iRowCount, j, iDataIndex]);
      anRows.push(nRow);
      iRowCount++;
    }
  } else {
    anRows[0] = _emptyRow(oSettings);
  }
  _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
    $2(oSettings.nTHead).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
    $2(oSettings.nTFoot).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  if (body[0].replaceChildren) {
    body[0].replaceChildren.apply(body[0], anRows);
  } else {
    body.children().detach();
    body.append($2(anRows));
  }
  $2(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $2("tr", oSettings.nTFoot).length === 0);
  _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
  oSettings.bSorted = false;
  oSettings.bFiltered = false;
  oSettings.bDrawing = false;
}
function _fnReDraw(settings, holdPosition, recompute) {
  var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
  if (recompute === undefined || recompute === true) {
    _fnColumnTypes(settings);
    if (sort) {
      _fnSort(settings);
    }
    if (filter) {
      _fnFilterComplete(settings, settings.oPreviousSearch);
    } else {
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }
  }
  if (holdPosition !== true) {
    settings._iDisplayStart = 0;
  }
  settings._drawHold = holdPosition;
  _fnDraw(settings);
  settings.api.one("draw", function() {
    settings._drawHold = false;
  });
}
function _emptyRow(settings) {
  var oLang = settings.oLanguage;
  var zero = oLang.sZeroRecords;
  var dataSrc = _fnDataSource(settings);
  if ((dataSrc === "ssp" || dataSrc === "ajax") && !settings.json) {
    zero = oLang.sLoadingRecords;
  } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
    zero = oLang.sEmptyTable;
  }
  return $2("<tr/>").append($2("<td />", {
    colSpan: _fnVisibleColumns(settings),
    class: settings.oClasses.empty.row
  }).html(zero))[0];
}
function _layoutItems(row, align, items) {
  if (Array.isArray(items)) {
    for (var i = 0;i < items.length; i++) {
      _layoutItems(row, align, items[i]);
    }
    return;
  }
  var rowCell = row[align];
  if ($2.isPlainObject(items)) {
    if (items.features) {
      if (items.rowId) {
        row.id = items.rowId;
      }
      if (items.rowClass) {
        row.className = items.rowClass;
      }
      rowCell.id = items.id;
      rowCell.className = items.className;
      _layoutItems(row, align, items.features);
    } else {
      Object.keys(items).map(function(key) {
        rowCell.contents.push({
          feature: key,
          opts: items[key]
        });
      });
    }
  } else {
    rowCell.contents.push(items);
  }
}
function _layoutGetRow(rows, rowNum, align) {
  var row;
  for (var i = 0;i < rows.length; i++) {
    row = rows[i];
    if (row.rowNum === rowNum) {
      if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
        if (!row[align]) {
          row[align] = {
            contents: []
          };
        }
        return row;
      }
    }
  }
  row = {
    rowNum
  };
  row[align] = {
    contents: []
  };
  rows.push(row);
  return row;
}
function _layoutArray(settings, layout, side) {
  var rows = [];
  $2.each(layout, function(pos, items) {
    if (items === null) {
      return;
    }
    var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
    var rowNum = parts[2] ? parts[2] * 1 : 0;
    var align = parts[3] ? parts[3].toLowerCase() : "full";
    if (parts[1] !== side) {
      return;
    }
    var row2 = _layoutGetRow(rows, rowNum, align);
    _layoutItems(row2, align, items);
  });
  rows.sort(function(a, b) {
    var order1 = a.rowNum;
    var order2 = b.rowNum;
    if (order1 === order2) {
      var ret = a.full && !b.full ? -1 : 1;
      return side === "bottom" ? ret * -1 : ret;
    }
    return order2 - order1;
  });
  if (side === "bottom") {
    rows.reverse();
  }
  for (var row = 0;row < rows.length; row++) {
    delete rows[row].rowNum;
    _layoutResolve(settings, rows[row]);
  }
  return rows;
}
function _layoutResolve(settings, row) {
  var getFeature = function(feature, opts) {
    if (!_ext.features[feature]) {
      _fnLog(settings, 0, "Unknown feature: " + feature);
    }
    return _ext.features[feature].apply(this, [settings, opts]);
  };
  var resolve = function(item) {
    if (!row[item]) {
      return;
    }
    var line = row[item].contents;
    for (var i = 0, iLen = line.length;i < iLen; i++) {
      if (!line[i]) {
        continue;
      } else if (typeof line[i] === "string") {
        line[i] = getFeature(line[i], null);
      } else if ($2.isPlainObject(line[i])) {
        line[i] = getFeature(line[i].feature, line[i].opts);
      } else if (typeof line[i].node === "function") {
        line[i] = line[i].node(settings);
      } else if (typeof line[i] === "function") {
        var inst = line[i](settings);
        line[i] = typeof inst.node === "function" ? inst.node() : inst;
      }
    }
  };
  resolve("start");
  resolve("end");
  resolve("full");
}
function _fnAddOptionsHtml(settings) {
  var classes = settings.oClasses;
  var table = $2(settings.nTable);
  var insert = $2("<div/>").attr({
    id: settings.sTableId + "_wrapper",
    class: classes.container
  }).insertBefore(table);
  settings.nTableWrapper = insert[0];
  if (settings.sDom) {
    _fnLayoutDom(settings, settings.sDom, insert);
  } else {
    var top = _layoutArray(settings, settings.layout, "top");
    var bottom = _layoutArray(settings, settings.layout, "bottom");
    var renderer = _fnRenderer(settings, "layout");
    top.forEach(function(item) {
      renderer(settings, insert, item);
    });
    renderer(settings, insert, {
      full: {
        table: true,
        contents: [_fnFeatureHtmlTable(settings)]
      }
    });
    bottom.forEach(function(item) {
      renderer(settings, insert, item);
    });
  }
  _processingHtml(settings);
}
function _fnLayoutDom(settings, dom, insert) {
  var parts = dom.match(/(".*?")|('.*?')|./g);
  var featureNode, option, newNode, next, attr;
  for (var i = 0;i < parts.length; i++) {
    featureNode = null;
    option = parts[i];
    if (option == "<") {
      newNode = $2("<div/>");
      next = parts[i + 1];
      if (next[0] == "'" || next[0] == '"') {
        attr = next.replace(/['"]/g, "");
        var id = "", className;
        if (attr.indexOf(".") != -1) {
          var split = attr.split(".");
          id = split[0];
          className = split[1];
        } else if (attr[0] == "#") {
          id = attr;
        } else {
          className = attr;
        }
        newNode.attr("id", id.substring(1)).addClass(className);
        i++;
      }
      insert.append(newNode);
      insert = newNode;
    } else if (option == ">") {
      insert = insert.parent();
    } else if (option == "t") {
      featureNode = _fnFeatureHtmlTable(settings);
    } else {
      DataTable.ext.feature.forEach(function(feature) {
        if (option == feature.cFeature) {
          featureNode = feature.fnInit(settings);
        }
      });
    }
    if (featureNode) {
      insert.append(featureNode);
    }
  }
}
function _fnDetectHeader(settings, thead, write) {
  var columns = settings.aoColumns;
  var rows = $2(thead).children("tr");
  var row, cell;
  var i, k, l, iLen, shifted, column, colspan, rowspan;
  var titleRow = settings.titleRow;
  var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
  var layout = [];
  var unique;
  var shift = function(a, i2, j) {
    var k2 = a[i2];
    while (k2[j]) {
      j++;
    }
    return j;
  };
  for (i = 0, iLen = rows.length;i < iLen; i++) {
    layout.push([]);
  }
  for (i = 0, iLen = rows.length;i < iLen; i++) {
    row = rows[i];
    column = 0;
    cell = row.firstChild;
    while (cell) {
      if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
        var cols = [];
        var jqCell = $2(cell);
        colspan = cell.getAttribute("colspan") * 1;
        rowspan = cell.getAttribute("rowspan") * 1;
        colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
        rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
        shifted = shift(layout, i, column);
        unique = colspan === 1 ? true : false;
        if (write) {
          if (unique) {
            _fnColumnOptions(settings, shifted, _fnEscapeObject(jqCell.data()));
            var columnDef = columns[shifted];
            var width = cell.getAttribute("width") || null;
            var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
            if (t) {
              width = t[1];
            }
            columnDef.sWidthOrig = columnDef.sWidth || width;
            if (isHeader) {
              if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                if (titleRow === true && i === 0 || titleRow === false && i === rows.length - 1 || titleRow === i || titleRow === null) {
                  cell.innerHTML = columnDef.sTitle;
                }
              }
              if (!columnDef.sTitle && unique) {
                columnDef.sTitle = _stripHtml(cell.innerHTML);
                columnDef.autoTitle = true;
              }
            } else {
              if (columnDef.footer) {
                cell.innerHTML = columnDef.footer;
              }
            }
            if (!columnDef.ariaTitle) {
              columnDef.ariaTitle = jqCell.attr("aria-label") || columnDef.sTitle;
            }
            if (columnDef.className) {
              jqCell.addClass(columnDef.className);
            }
          }
          if ($2(".dt-column-title", cell).length === 0) {
            $2(document.createElement(settings.columnTitleTag)).addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
          }
          if (settings.orderIndicators && isHeader && jqCell.filter(":not([data-dt-order=disable])").length !== 0 && jqCell.parent(":not([data-dt-order=disable])").length !== 0 && $2(".dt-column-order", cell).length === 0) {
            $2(document.createElement(settings.columnTitleTag)).addClass("dt-column-order").appendTo(cell);
          }
          var headerFooter = isHeader ? "header" : "footer";
          if ($2("div.dt-column-" + headerFooter, cell).length === 0) {
            $2("<div>").addClass("dt-column-" + headerFooter).append(cell.childNodes).appendTo(cell);
          }
        }
        for (l = 0;l < colspan; l++) {
          for (k = 0;k < rowspan; k++) {
            layout[i + k][shifted + l] = {
              cell,
              unique
            };
            layout[i + k].row = row;
          }
          cols.push(shifted + l);
        }
        cell.setAttribute("data-dt-column", _unique(cols).join(","));
      }
      cell = cell.nextSibling;
    }
  }
  return layout;
}
function _fnStart(oSettings) {
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var iInitDisplayStart = oSettings.iInitDisplayStart;
  if (iInitDisplayStart !== undefined && iInitDisplayStart !== -1) {
    oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
    oSettings.iInitDisplayStart = -1;
  }
}
function _fnBuildAjax(oSettings, data2, fn) {
  var ajaxData;
  var ajax = oSettings.ajax;
  var instance = oSettings.oInstance;
  var callback = function(json) {
    var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
    if (json === null || typeof status === "number" && status == 204) {
      json = {};
      _fnAjaxDataSrc(oSettings, json, []);
    }
    var error2 = json.error || json.sError;
    if (error2) {
      _fnLog(oSettings, 0, error2);
    }
    if (json.d && typeof json.d === "string") {
      try {
        json = JSON.parse(json.d);
      } catch (e) {}
    }
    oSettings.json = json;
    _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
    fn(json);
  };
  if ($2.isPlainObject(ajax) && ajax.data) {
    ajaxData = ajax.data;
    var newData = typeof ajaxData === "function" ? ajaxData(data2, oSettings) : ajaxData;
    data2 = typeof ajaxData === "function" && newData ? newData : $2.extend(true, data2, newData);
    delete ajax.data;
  }
  var baseAjax = {
    url: typeof ajax === "string" ? ajax : "",
    data: data2,
    success: callback,
    dataType: "json",
    cache: false,
    type: oSettings.sServerMethod,
    error: function(xhr, error2) {
      var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
      if (ret.indexOf(true) === -1) {
        if (error2 == "parsererror") {
          _fnLog(oSettings, 0, "Invalid JSON response", 1);
        } else if (xhr.readyState === 4) {
          _fnLog(oSettings, 0, "Ajax error", 7);
        }
      }
      _fnProcessingDisplay(oSettings, false);
    }
  };
  if ($2.isPlainObject(ajax)) {
    $2.extend(baseAjax, ajax);
  }
  oSettings.oAjaxData = data2;
  _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data2, baseAjax], true);
  if (baseAjax.submitAs === "json" && typeof data2 === "object") {
    baseAjax.data = JSON.stringify(data2);
    if (!baseAjax.contentType) {
      baseAjax.contentType = "application/json; charset=utf-8";
    }
  }
  if (typeof ajax === "function") {
    oSettings.jqXHR = ajax.call(instance, data2, callback, oSettings);
  } else if (ajax.url === "") {
    var empty = {};
    _fnAjaxDataSrc(oSettings, empty, []);
    callback(empty);
  } else {
    oSettings.jqXHR = $2.ajax(baseAjax);
  }
  if (ajaxData) {
    ajax.data = ajaxData;
  }
}
function _fnAjaxUpdate(settings) {
  settings.iDraw++;
  _fnProcessingDisplay(settings, true);
  _fnBuildAjax(settings, _fnAjaxParameters(settings), function(json) {
    _fnAjaxUpdateDraw(settings, json);
  });
}
function _fnAjaxParameters(settings) {
  var { aoColumns: columns, oFeatures: features, oPreviousSearch: preSearch, aoPreSearchCols: preColSearch } = settings, colData = function(idx, prop) {
    return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
  };
  return {
    draw: settings.iDraw,
    columns: columns.map(function(column, i) {
      return {
        data: colData(i, "mData"),
        name: column.sName,
        searchable: column.bSearchable,
        orderable: column.bSortable,
        search: {
          value: preColSearch[i].search,
          regex: preColSearch[i].regex,
          fixed: Object.keys(column.searchFixed).map(function(name) {
            return {
              name,
              term: typeof column.searchFixed[name] !== "function" ? column.searchFixed[name].toString() : "function"
            };
          })
        }
      };
    }),
    order: _fnSortFlatten(settings).map(function(val) {
      return {
        column: val.col,
        dir: val.dir,
        name: colData(val.col, "sName")
      };
    }),
    start: settings._iDisplayStart,
    length: features.bPaginate ? settings._iDisplayLength : -1,
    search: {
      value: preSearch.search,
      regex: preSearch.regex,
      fixed: Object.keys(settings.searchFixed).map(function(name) {
        return {
          name,
          term: typeof settings.searchFixed[name] !== "function" ? settings.searchFixed[name].toString() : "function"
        };
      })
    }
  };
}
function _fnAjaxUpdateDraw(settings, json) {
  var data2 = _fnAjaxDataSrc(settings, json);
  var draw = _fnAjaxDataSrcParam(settings, "draw", json);
  var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
  var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
  if (draw !== undefined) {
    if (draw * 1 < settings.iDraw) {
      return;
    }
    settings.iDraw = draw * 1;
  }
  if (!data2) {
    data2 = [];
  }
  _fnClearTable(settings);
  settings._iRecordsTotal = parseInt(recordsTotal, 10);
  settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
  for (var i = 0, iLen = data2.length;i < iLen; i++) {
    _fnAddData(settings, data2[i]);
  }
  settings.aiDisplay = settings.aiDisplayMaster.slice();
  _fnColumnTypes(settings);
  _fnDraw(settings, true);
  _fnInitComplete(settings);
  _fnProcessingDisplay(settings, false);
}
function _fnAjaxDataSrc(settings, json, write) {
  var dataProp = "data";
  if ($2.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== undefined) {
    var dataSrc = settings.ajax.dataSrc;
    if (typeof dataSrc === "string" || typeof dataSrc === "function") {
      dataProp = dataSrc;
    } else if (dataSrc.data !== undefined) {
      dataProp = dataSrc.data;
    }
  }
  if (!write) {
    if (dataProp === "data") {
      return json.aaData || json[dataProp];
    }
    return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
  }
  _fnSetObjectDataFn(dataProp)(json, write);
}
function _fnAjaxDataSrcParam(settings, param, json) {
  var dataSrc = $2.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
  if (dataSrc && dataSrc[param]) {
    return _fnGetObjectDataFn(dataSrc[param])(json);
  }
  var old = "";
  if (param === "draw") {
    old = "sEcho";
  } else if (param === "recordsTotal") {
    old = "iTotalRecords";
  } else if (param === "recordsFiltered") {
    old = "iTotalDisplayRecords";
  }
  return json[old] !== undefined ? json[old] : json[param];
}
function _fnFilterComplete(settings, input) {
  var columnsSearch = settings.aoPreSearchCols;
  if (_fnDataSource(settings) != "ssp") {
    _fnFilterData(settings);
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnFilter(settings.aiDisplay, settings, input.search, input);
    $2.each(settings.searchFixed, function(name, term) {
      _fnFilter(settings.aiDisplay, settings, term, {});
    });
    for (var i = 0;i < columnsSearch.length; i++) {
      var col = columnsSearch[i];
      _fnFilter(settings.aiDisplay, settings, col.search, col, i);
      $2.each(settings.aoColumns[i].searchFixed, function(name, term) {
        _fnFilter(settings.aiDisplay, settings, term, {}, i);
      });
    }
    _fnFilterCustom(settings);
  }
  settings.bFiltered = true;
  _fnCallbackFire(settings, null, "search", [settings]);
}
function _fnFilterCustom(settings) {
  var filters = DataTable.ext.search;
  var displayRows = settings.aiDisplay;
  var row, rowIdx;
  for (var i = 0, iLen = filters.length;i < iLen; i++) {
    var rows = [];
    for (var j = 0, jen = displayRows.length;j < jen; j++) {
      rowIdx = displayRows[j];
      row = settings.aoData[rowIdx];
      if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
        rows.push(rowIdx);
      }
    }
    displayRows.length = 0;
    _fnArrayApply(displayRows, rows);
  }
}
function _fnFilter(searchRows, settings, input, options, column) {
  if (input === "") {
    return;
  }
  var i = 0;
  var matched = [];
  var searchFunc = typeof input === "function" ? input : null;
  var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
  for (i = 0;i < searchRows.length; i++) {
    var row = settings.aoData[searchRows[i]];
    var data2 = column === undefined ? row._sFilterRow : row._aFilterData[column];
    if (searchFunc && searchFunc(data2, row._aData, searchRows[i], column) || rpSearch && rpSearch.test(data2)) {
      matched.push(searchRows[i]);
    }
  }
  searchRows.length = matched.length;
  for (i = 0;i < matched.length; i++) {
    searchRows[i] = matched[i];
  }
}
function _fnFilterCreateSearch(search, inOpts) {
  var not = [];
  var options = $2.extend({}, {
    boundary: false,
    caseInsensitive: true,
    exact: false,
    regex: false,
    smart: true
  }, inOpts);
  if (typeof search !== "string") {
    search = search.toString();
  }
  search = _normalize(search);
  if (options.exact) {
    return new RegExp("^" + _fnEscapeRegex(search) + "$", options.caseInsensitive ? "i" : "");
  }
  search = options.regex ? search : _fnEscapeRegex(search);
  if (options.smart) {
    var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
    var a = parts.map(function(word) {
      var negative = false;
      var m;
      if (word.charAt(0) === "!") {
        negative = true;
        word = word.substring(1);
      }
      if (word.charAt(0) === '"') {
        m = word.match(/^"(.*)"$/);
        word = m ? m[1] : word;
      } else if (word.charAt(0) === "“") {
        m = word.match(/^\u201C(.*)\u201D$/);
        word = m ? m[1] : word;
      }
      if (negative) {
        if (word.length > 1) {
          not.push("(?!" + word + ")");
        }
        word = "";
      }
      return word.replace(/"/g, "");
    });
    var match = not.length ? not.join("") : "";
    var boundary = options.boundary ? "\\b" : "";
    search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
  }
  return new RegExp(search, options.caseInsensitive ? "i" : "");
}
var _fnEscapeRegex = DataTable.util.escapeRegex;
var __filter_div = $2("<div>")[0];
var __filter_div_textContent = __filter_div.textContent !== undefined;
function _fnFilterData(settings) {
  var columns = settings.aoColumns;
  var data2 = settings.aoData;
  var column;
  var j, jen, filterData, cellData, row;
  var wasInvalidated = false;
  for (var rowIdx = 0;rowIdx < data2.length; rowIdx++) {
    if (!data2[rowIdx]) {
      continue;
    }
    row = data2[rowIdx];
    if (!row._aFilterData) {
      filterData = [];
      for (j = 0, jen = columns.length;j < jen; j++) {
        column = columns[j];
        if (column.bSearchable) {
          cellData = _fnGetCellData(settings, rowIdx, j, "filter");
          if (cellData === null) {
            cellData = "";
          }
          if (typeof cellData !== "string" && cellData.toString) {
            cellData = cellData.toString();
          }
        } else {
          cellData = "";
        }
        if (cellData.indexOf && cellData.indexOf("&") !== -1) {
          __filter_div.innerHTML = cellData;
          cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
        }
        if (cellData.replace) {
          cellData = cellData.replace(/[\r\n\u2028]/g, "");
        }
        filterData.push(cellData);
      }
      row._aFilterData = filterData;
      row._sFilterRow = filterData.join("  ");
      wasInvalidated = true;
    }
  }
  return wasInvalidated;
}
function _fnInitialise(settings) {
  var i;
  var init = settings.oInit;
  var deferLoading = settings.deferLoading;
  var dataSrc = _fnDataSource(settings);
  if (!settings.bInitialised) {
    setTimeout(function() {
      _fnInitialise(settings);
    }, 200);
    return;
  }
  _fnBuildHead(settings, "header");
  _fnBuildHead(settings, "footer");
  _fnLoadState(settings, init, function() {
    _fnDrawHead(settings, settings.aoHeader);
    _fnDrawHead(settings, settings.aoFooter);
    var iAjaxStart = settings.iInitDisplayStart;
    if (init.aaData) {
      for (i = 0;i < init.aaData.length; i++) {
        _fnAddData(settings, init.aaData[i]);
      }
    } else if (deferLoading || dataSrc == "dom") {
      _fnAddTr(settings, $2(settings.nTBody).children("tr"));
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnAddOptionsHtml(settings);
    _fnSortInit(settings);
    _colGroup(settings);
    _fnProcessingDisplay(settings, true);
    _fnCallbackFire(settings, null, "preInit", [settings], true);
    _fnReDraw(settings);
    if (dataSrc != "ssp" || deferLoading) {
      if (dataSrc == "ajax") {
        _fnBuildAjax(settings, {}, function(json) {
          var aData = _fnAjaxDataSrc(settings, json);
          for (i = 0;i < aData.length; i++) {
            _fnAddData(settings, aData[i]);
          }
          settings.iInitDisplayStart = iAjaxStart;
          _fnReDraw(settings);
          _fnProcessingDisplay(settings, false);
          _fnInitComplete(settings);
        }, settings);
      } else {
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false);
      }
    }
  });
}
function _fnInitComplete(settings) {
  if (settings._bInitComplete) {
    return;
  }
  var args = [settings, settings.json];
  settings._bInitComplete = true;
  _fnAdjustColumnSizing(settings);
  _fnCallbackFire(settings, null, "plugin-init", args, true);
  _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
}
function _fnLengthChange(settings, val) {
  var len = parseInt(val, 10);
  settings._iDisplayLength = len;
  _fnLengthOverflow(settings);
  _fnCallbackFire(settings, null, "length", [settings, len]);
}
function _fnPageChange(settings, action, redraw) {
  var { _iDisplayStart: start2, _iDisplayLength: len } = settings, records = settings.fnRecordsDisplay();
  if (records === 0 || len === -1) {
    start2 = 0;
  } else if (typeof action === "number") {
    start2 = action * len;
    if (start2 > records) {
      start2 = 0;
    }
  } else if (action == "first") {
    start2 = 0;
  } else if (action == "previous") {
    start2 = len >= 0 ? start2 - len : 0;
    if (start2 < 0) {
      start2 = 0;
    }
  } else if (action == "next") {
    if (start2 + len < records) {
      start2 += len;
    }
  } else if (action == "last") {
    start2 = Math.floor((records - 1) / len) * len;
  } else if (action === "ellipsis") {
    return;
  } else {
    _fnLog(settings, 0, "Unknown paging action: " + action, 5);
  }
  var changed = settings._iDisplayStart !== start2;
  settings._iDisplayStart = start2;
  _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
  if (changed && redraw) {
    _fnDraw(settings);
  }
  return changed;
}
function _processingHtml(settings) {
  var table = settings.nTable;
  var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
  if (settings.oFeatures.bProcessing) {
    var n = $2("<div/>", {
      id: settings.sTableId + "_processing",
      class: settings.oClasses.processing.container,
      role: "status"
    }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
    if (scrolling) {
      n.prependTo($2("div.dt-scroll", settings.nTableWrapper));
    } else {
      n.insertBefore(table);
    }
    $2(table).on("processing.dt.DT", function(e, s, show) {
      n.css("display", show ? "block" : "none");
    });
  }
}
function _fnProcessingDisplay(settings, show) {
  if (settings.bDrawing && show === false) {
    return;
  }
  _fnCallbackFire(settings, null, "processing", [settings, show]);
}
function _fnProcessingRun(settings, enable, run) {
  if (!enable) {
    run();
  } else {
    _fnProcessingDisplay(settings, true);
    setTimeout(function() {
      run();
      _fnProcessingDisplay(settings, false);
    }, 0);
  }
}
function _fnFeatureHtmlTable(settings) {
  var table = $2(settings.nTable);
  var scroll = settings.oScroll;
  if (scroll.sX === "" && scroll.sY === "") {
    return settings.nTable;
  }
  var scrollX = scroll.sX;
  var scrollY = scroll.sY;
  var classes = settings.oClasses.scrolling;
  var caption = settings.captionNode;
  var captionSide = caption ? caption._captionSide : null;
  var headerClone = $2(table[0].cloneNode(false));
  var footerClone = $2(table[0].cloneNode(false));
  var footer = table.children("tfoot");
  var _div = "<div/>";
  var size2 = function(s) {
    return !s ? null : _fnStringToCss(s);
  };
  if (!footer.length) {
    footer = null;
  }
  var scroller = $2(_div, { class: classes.container }).append($2(_div, { class: classes.header.self }).css({
    overflow: "hidden",
    position: "relative",
    border: 0,
    width: scrollX ? size2(scrollX) : "100%"
  }).append($2(_div, { class: classes.header.inner }).css({
    "box-sizing": "content-box",
    width: scroll.sXInner || "100%"
  }).append(headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(table.children("thead"))))).append($2(_div, { class: classes.body }).css({
    position: "relative",
    overflow: "auto",
    width: size2(scrollX)
  }).append(table));
  if (footer) {
    scroller.append($2(_div, { class: classes.footer.self }).css({
      overflow: "hidden",
      border: 0,
      width: scrollX ? size2(scrollX) : "100%"
    }).append($2(_div, { class: classes.footer.inner }).append(footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(table.children("tfoot")))));
  }
  var children = scroller.children();
  var scrollHead = children[0];
  var scrollBody = children[1];
  var scrollFoot = footer ? children[2] : null;
  $2(scrollBody).on("scroll.DT", function() {
    var scrollLeft = this.scrollLeft;
    scrollHead.scrollLeft = scrollLeft;
    if (footer) {
      scrollFoot.scrollLeft = scrollLeft;
    }
  });
  $2("th, td", scrollHead).on("focus", function() {
    var scrollLeft = scrollHead.scrollLeft;
    scrollBody.scrollLeft = scrollLeft;
    if (footer) {
      scrollBody.scrollLeft = scrollLeft;
    }
  });
  $2(scrollBody).css("max-height", scrollY);
  if (!scroll.bCollapse) {
    $2(scrollBody).css("height", scrollY);
  }
  settings.nScrollHead = scrollHead;
  settings.nScrollBody = scrollBody;
  settings.nScrollFoot = scrollFoot;
  settings.aoDrawCallback.push(_fnScrollDraw);
  return scroller[0];
}
function _fnScrollDraw(settings) {
  var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $2(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $2(divBodyEl), divFooter = $2(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $2(settings.nTHead), table = $2(settings.nTable), footer = settings.nTFoot && $2("th, td", settings.nTFoot).length ? $2(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
  var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
  if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined) {
    settings.scrollBarVis = scrollBarVis;
    _fnAdjustColumnSizing(settings);
    return;
  } else {
    settings.scrollBarVis = scrollBarVis;
  }
  table.children("thead, tfoot").remove();
  headerCopy = header.clone().prependTo(table);
  headerCopy.find("th, td").removeAttr("tabindex");
  headerCopy.find("[id]").removeAttr("id");
  if (footer) {
    footerCopy = footer.clone().prependTo(table);
    footerCopy.find("[id]").removeAttr("id");
  }
  if (settings.aiDisplay.length) {
    var firstTr = null;
    var start2 = _fnDataSource(settings) !== "ssp" ? settings._iDisplayStart : 0;
    for (i = start2;i < start2 + settings.aiDisplay.length; i++) {
      var idx = settings.aiDisplay[i];
      var tr = settings.aoData[idx].nTr;
      if (tr) {
        firstTr = tr;
        break;
      }
    }
    if (firstTr) {
      var colSizes = $2(firstTr).children("th, td").map(function(vis) {
        return {
          idx: _fnVisibleToColumnIndex(settings, vis),
          width: $2(this).outerWidth()
        };
      });
      for (var i = 0;i < colSizes.length; i++) {
        var colEl = settings.aoColumns[colSizes[i].idx].colEl[0];
        var colWidth = colEl.style.width.replace("px", "");
        if (colWidth !== colSizes[i].width) {
          colEl.style.width = colSizes[i].width + "px";
          if (scroll.sX) {
            colEl.style.minWidth = colSizes[i].width + "px";
          }
        }
      }
    }
  }
  divHeaderTable.find("colgroup").remove();
  divHeaderTable.append(settings.colgroup.clone());
  if (footer) {
    divFooterTable.find("colgroup").remove();
    divFooterTable.append(settings.colgroup.clone());
  }
  $2("th, td", headerCopy).each(function() {
    $2(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  if (footer) {
    $2("th, td", footerCopy).each(function() {
      $2(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
    });
  }
  var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
  var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
  var outerWidth = table.outerWidth();
  divHeaderTable.css("width", _fnStringToCss(outerWidth));
  divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  if (footer) {
    divFooterTable.css("width", _fnStringToCss(outerWidth));
    divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  }
  table.children("colgroup").prependTo(table);
  divBody.trigger("scroll");
  if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
    divBodyEl.scrollTop = 0;
  }
}
function _fnCalculateColumnWidths(settings) {
  if (!settings.oFeatures.bAutoWidth) {
    return;
  }
  var { nTable: table, aoColumns: columns, oScroll: scroll } = settings, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i, j, column, columnIdx;
  var styleWidth = table.style.width;
  var containerWidth = _fnWrapperWidth(settings);
  if (containerWidth === settings.containerWidth) {
    return false;
  }
  settings.containerWidth = containerWidth;
  if (!styleWidth && !tableWidthAttr) {
    table.style.width = "100%";
    styleWidth = "100%";
  }
  if (styleWidth && styleWidth.indexOf("%") !== -1) {
    tableWidthAttr = styleWidth;
  }
  _fnCallbackFire(settings, null, "column-calc", { visible: visibleColumns }, false);
  var tmpTable = $2(table.cloneNode()).css("visibility", "hidden").css("margin", 0).removeAttr("id");
  tmpTable.append("<tbody/>");
  tmpTable.append($2(settings.nTHead).clone()).append($2(settings.nTFoot).clone());
  tmpTable.find("tfoot th, tfoot td").css("width", "");
  tmpTable.find("thead th, thead td").each(function() {
    var width = _fnColumnsSumWidth(settings, this, true, false);
    if (width) {
      this.style.width = width;
      if (scrollX) {
        this.style.minWidth = width;
        $2(this).append($2("<div/>").css({
          width,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }
    } else {
      this.style.width = "";
    }
  });
  var longestData = [];
  for (i = 0;i < visibleColumns.length; i++) {
    longestData.push(_fnGetWideStrings(settings, visibleColumns[i]));
  }
  if (longestData.length) {
    for (i = 0;i < longestData[0].length; i++) {
      var tr = $2("<tr/>").appendTo(tmpTable.find("tbody"));
      for (j = 0;j < visibleColumns.length; j++) {
        columnIdx = visibleColumns[j];
        column = columns[columnIdx];
        var longest = longestData[j][i] || "";
        var autoClass = _ext.type.className[column.sType];
        var padding = column.sContentPadding || (scrollX ? "-" : "");
        var text = longest + padding;
        var insert = longest.indexOf("<") === -1 && longest.indexOf("&") === -1 ? document.createTextNode(text) : text;
        $2("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
      }
    }
  }
  $2("[name]", tmpTable).removeAttr("name");
  var holder = $2("<div/>").css(scrollX || scrollY ? {
    position: "absolute",
    top: 0,
    left: 0,
    height: 1,
    right: 0,
    overflow: "hidden"
  } : {}).append(tmpTable).appendTo(tableContainer);
  if (scrollX && scrollXInner) {
    tmpTable.width(scrollXInner);
  } else if (scrollX) {
    tmpTable.css("width", "auto");
    tmpTable.removeAttr("width");
    if (tmpTable.outerWidth() < tableContainer.clientWidth && tableWidthAttr) {
      tmpTable.outerWidth(tableContainer.clientWidth);
    }
  } else if (scrollY) {
    tmpTable.outerWidth(tableContainer.clientWidth);
  } else if (tableWidthAttr) {
    tmpTable.outerWidth(tableWidthAttr);
  }
  var total = 0;
  var bodyCells = tmpTable.find("tbody tr").eq(0).children();
  for (i = 0;i < visibleColumns.length; i++) {
    var bounding = bodyCells[i].getBoundingClientRect().width;
    total += bounding;
    columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding);
  }
  table.style.width = _fnStringToCss(total);
  holder.remove();
  if (tableWidthAttr) {
    table.style.width = _fnStringToCss(tableWidthAttr);
  }
  if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
    var resize = DataTable.util.throttle(function() {
      var newWidth = _fnWrapperWidth(settings);
      if (!settings.bDestroying && newWidth !== 0) {
        _fnAdjustColumnSizing(settings);
      }
    });
    if (window.ResizeObserver) {
      var first = $2(settings.nTableWrapper).is(":visible");
      var resizer = $2("<div>").css({
        width: "100%",
        height: 0
      }).addClass("dt-autosize").appendTo(settings.nTableWrapper);
      settings.resizeObserver = new ResizeObserver(function(e) {
        if (first) {
          first = false;
        } else {
          resize();
        }
      });
      settings.resizeObserver.observe(resizer[0]);
    } else {
      $2(window).on("resize.DT-" + settings.sInstance, resize);
    }
    settings._reszEvt = true;
  }
}
function _fnWrapperWidth(settings) {
  return $2(settings.nTableWrapper).is(":visible") ? $2(settings.nTableWrapper).width() : 0;
}
function _fnGetWideStrings(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  if (!column.wideStrings) {
    var allStrings = [];
    var collection = [];
    for (var i = 0, iLen = settings.aiDisplayMaster.length;i < iLen; i++) {
      var rowIdx = settings.aiDisplayMaster[i];
      var data2 = _fnGetRowDisplay(settings, rowIdx)[colIdx];
      var cellString = data2 && typeof data2 === "object" && data2.nodeType ? data2.innerHTML : data2 + "";
      cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
      cellString = cellString.replace(/<script.*?<\/script>/gi, " ");
      var noHtml = _stripHtml(cellString, " ").replace(/&nbsp;/g, " ");
      collection.push({
        str: cellString,
        len: noHtml.length
      });
      allStrings.push(noHtml);
    }
    collection.sort(function(a, b) {
      return b.len - a.len;
    }).splice(3);
    column.wideStrings = collection.map(function(item) {
      return item.str;
    });
    let parts = allStrings.join(" ").split(" ");
    parts.sort(function(a, b) {
      return b.length - a.length;
    });
    if (parts.length) {
      column.wideStrings.push(parts[0]);
    }
    if (parts.length > 1) {
      column.wideStrings.push(parts[1]);
    }
    if (parts.length > 2) {
      column.wideStrings.push(parts[3]);
    }
  }
  return column.wideStrings;
}
function _fnStringToCss(s) {
  if (s === null) {
    return "0px";
  }
  if (typeof s == "number") {
    return s < 0 ? "0px" : s + "px";
  }
  return s.match(/\d$/) ? s + "px" : s;
}
function _colGroup(settings) {
  var cols = settings.aoColumns;
  settings.colgroup.empty();
  for (i = 0;i < cols.length; i++) {
    if (cols[i].bVisible) {
      settings.colgroup.append(cols[i].colEl);
    }
  }
}
function _fnSortInit(settings) {
  var target = settings.nTHead;
  var headerRows = target.querySelectorAll("tr");
  var titleRow = settings.titleRow;
  var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  if (titleRow === true) {
    target = headerRows[0];
  } else if (titleRow === false) {
    target = headerRows[headerRows.length - 1];
  } else if (titleRow !== null) {
    target = headerRows[titleRow];
  }
  if (settings.orderHandler) {
    _fnSortAttachListener(settings, target, target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector);
  }
  var order = [];
  _fnSortResolve(settings, order, settings.aaSorting);
  settings.aaSorting = order;
}
function _fnSortAttachListener(settings, node, selector, column, callback) {
  _fnBindAction(node, selector, function(e) {
    var run = false;
    var columns = column === undefined ? _fnColumnsFromHeader(e.target) : typeof column === "function" ? column() : Array.isArray(column) ? column : [column];
    if (columns.length) {
      for (var i = 0, iLen = columns.length;i < iLen; i++) {
        var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
        if (ret !== false) {
          run = true;
        }
        if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
          break;
        }
      }
      if (run) {
        _fnProcessingRun(settings, true, function() {
          _fnSort(settings);
          _fnSortDisplay(settings, settings.aiDisplay);
          _fnReDraw(settings, false, false);
          if (callback) {
            callback();
          }
        });
      }
    }
  });
}
function _fnSortDisplay(settings, display) {
  if (display.length < 2) {
    return;
  }
  var master = settings.aiDisplayMaster;
  var masterMap = {};
  var map = {};
  var i;
  for (i = 0;i < master.length; i++) {
    masterMap[master[i]] = i;
  }
  for (i = 0;i < display.length; i++) {
    map[display[i]] = masterMap[display[i]];
  }
  display.sort(function(a, b) {
    return map[a] - map[b];
  });
}
function _fnSortResolve(settings, nestedSort, sort) {
  var push = function(a) {
    if ($2.isPlainObject(a)) {
      if (a.idx !== undefined) {
        nestedSort.push([a.idx, a.dir]);
      } else if (a.name) {
        var cols = _pluck(settings.aoColumns, "sName");
        var idx = cols.indexOf(a.name);
        if (idx !== -1) {
          nestedSort.push([idx, a.dir]);
        }
      }
    } else {
      nestedSort.push(a);
    }
  };
  if ($2.isPlainObject(sort)) {
    push(sort);
  } else if (sort.length && typeof sort[0] === "number") {
    push(sort);
  } else if (sort.length) {
    for (var z = 0;z < sort.length; z++) {
      push(sort[z]);
    }
  }
}
function _fnSortFlatten(settings) {
  var i, k, kLen, aSort = [], extSort = DataTable.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $2.isPlainObject(fixed), nestedSort = [];
  if (!settings.oFeatures.bSort) {
    return aSort;
  }
  if (Array.isArray(fixed)) {
    _fnSortResolve(settings, nestedSort, fixed);
  }
  if (fixedObj && fixed.pre) {
    _fnSortResolve(settings, nestedSort, fixed.pre);
  }
  _fnSortResolve(settings, nestedSort, settings.aaSorting);
  if (fixedObj && fixed.post) {
    _fnSortResolve(settings, nestedSort, fixed.post);
  }
  for (i = 0;i < nestedSort.length; i++) {
    srcCol = nestedSort[i][0];
    if (aoColumns[srcCol]) {
      aDataSort = aoColumns[srcCol].aDataSort;
      for (k = 0, kLen = aDataSort.length;k < kLen; k++) {
        iCol = aDataSort[k];
        sType = aoColumns[iCol].sType || "string";
        if (nestedSort[i]._idx === undefined) {
          nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1]);
        }
        if (nestedSort[i][1]) {
          aSort.push({
            src: srcCol,
            col: iCol,
            dir: nestedSort[i][1],
            index: nestedSort[i]._idx,
            type: sType,
            formatter: extSort[sType + "-pre"],
            sorter: extSort[sType + "-" + nestedSort[i][1]]
          });
        }
      }
    }
  }
  return aSort;
}
function _fnSort(oSettings, col, dir) {
  var i, iLen, aiOrig = [], extSort = DataTable.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
  _fnColumnTypes(oSettings);
  if (col !== undefined) {
    var srcCol = oSettings.aoColumns[col];
    aSort = [{
      src: col,
      col,
      dir,
      index: 0,
      type: srcCol.sType,
      formatter: extSort[srcCol.sType + "-pre"],
      sorter: extSort[srcCol.sType + "-" + dir]
    }];
    displayMaster = displayMaster.slice();
  } else {
    aSort = _fnSortFlatten(oSettings);
  }
  for (i = 0, iLen = aSort.length;i < iLen; i++) {
    sortCol = aSort[i];
    _fnSortData(oSettings, sortCol.col);
  }
  if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
    for (i = 0, iLen = displayMaster.length;i < iLen; i++) {
      aiOrig[i] = i;
    }
    if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
      aiOrig.reverse();
    }
    displayMaster.sort(function(a, b) {
      var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
      for (k = 0;k < len; k++) {
        sort = aSort[k];
        x = dataA[sort.col];
        y = dataB[sort.col];
        if (sort.sorter) {
          test = sort.sorter(x, y);
          if (test !== 0) {
            return test;
          }
        } else {
          test = x < y ? -1 : x > y ? 1 : 0;
          if (test !== 0) {
            return sort.dir === "asc" ? test : -test;
          }
        }
      }
      x = aiOrig[a];
      y = aiOrig[b];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else if (aSort.length === 0) {
    displayMaster.sort(function(x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  if (col === undefined) {
    oSettings.bSorted = true;
    oSettings.sortDetails = aSort;
    _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
  }
  return displayMaster;
}
function _fnSortAdd(settings, colIdx, addIndex, shift) {
  var col = settings.aoColumns[colIdx];
  var sorting = settings.aaSorting;
  var asSorting = col.asSorting;
  var nextSortIdx;
  var next = function(a, overflow) {
    var idx = a._idx;
    if (idx === undefined) {
      idx = asSorting.indexOf(a[1]);
    }
    return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
  };
  if (!col.bSortable) {
    return false;
  }
  if (typeof sorting[0] === "number") {
    sorting = settings.aaSorting = [sorting];
  }
  if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
    var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
    if (sortIdx !== -1) {
      nextSortIdx = next(sorting[sortIdx], true);
      if (nextSortIdx === null && sorting.length === 1) {
        nextSortIdx = 0;
      }
      if (nextSortIdx === null || asSorting[nextSortIdx] === "") {
        sorting.splice(sortIdx, 1);
      } else {
        sorting[sortIdx][1] = asSorting[nextSortIdx];
        sorting[sortIdx]._idx = nextSortIdx;
      }
    } else if (shift) {
      sorting.push([colIdx, asSorting[0], 0]);
      sorting[sorting.length - 1]._idx = 0;
    } else {
      sorting.push([colIdx, sorting[0][1], 0]);
      sorting[sorting.length - 1]._idx = 0;
    }
  } else if (sorting.length && sorting[0][0] == colIdx) {
    nextSortIdx = next(sorting[0]);
    sorting.length = 1;
    sorting[0][1] = asSorting[nextSortIdx];
    sorting[0]._idx = nextSortIdx;
  } else {
    sorting.length = 0;
    sorting.push([colIdx, asSorting[0]]);
    sorting[0]._idx = 0;
  }
}
function _fnSortingClasses(settings) {
  var oldSort = settings.aLastSort;
  var sortClass = settings.oClasses.order.position;
  var sort = _fnSortFlatten(settings);
  var features = settings.oFeatures;
  var i, iLen, colIdx;
  if (features.bSort && features.bSortClasses) {
    for (i = 0, iLen = oldSort.length;i < iLen; i++) {
      colIdx = oldSort[i].src;
      $2(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
    }
    for (i = 0, iLen = sort.length;i < iLen; i++) {
      colIdx = sort[i].src;
      $2(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
    }
  }
  settings.aLastSort = sort;
}
function _fnSortData(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  var customSort = DataTable.ext.order[column.sSortDataType];
  var customData;
  if (customSort) {
    customData = customSort.call(settings.oInstance, settings, colIdx, _fnColumnIndexToVisible(settings, colIdx));
  }
  var row, cellData;
  var formatter = DataTable.ext.type.order[column.sType + "-pre"];
  var data2 = settings.aoData;
  for (var rowIdx = 0;rowIdx < data2.length; rowIdx++) {
    if (!data2[rowIdx]) {
      continue;
    }
    row = data2[rowIdx];
    if (!row._aSortData) {
      row._aSortData = [];
    }
    if (!row._aSortData[colIdx] || customSort) {
      cellData = customSort ? customData[rowIdx] : _fnGetCellData(settings, rowIdx, colIdx, "sort");
      row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
    }
  }
}
function _fnSaveState(settings) {
  if (settings._bLoadingState) {
    return;
  }
  var sorting = [];
  _fnSortResolve(settings, sorting, settings.aaSorting);
  var columns = settings.aoColumns;
  var state = {
    time: +new Date,
    start: settings._iDisplayStart,
    length: settings._iDisplayLength,
    order: sorting.map(function(sort) {
      return columns[sort[0]] && columns[sort[0]].sName ? [columns[sort[0]].sName, sort[1]] : sort.slice();
    }),
    search: $2.extend({}, settings.oPreviousSearch),
    columns: settings.aoColumns.map(function(col, i) {
      return {
        name: col.sName,
        visible: col.bVisible,
        search: $2.extend({}, settings.aoPreSearchCols[i])
      };
    })
  };
  settings.oSavedState = state;
  _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
  if (settings.oFeatures.bStateSave && !settings.bDestroying) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }
}
function _fnLoadState(settings, init, callback) {
  if (!settings.oFeatures.bStateSave) {
    callback();
    return;
  }
  var loaded = function(state2) {
    _fnImplementState(settings, state2, callback);
  };
  var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
  if (state !== undefined) {
    _fnImplementState(settings, state, callback);
  }
  return true;
}
function _fnImplementState(settings, s, callback) {
  var i, iLen;
  var columns = settings.aoColumns;
  var currentNames = _pluck(settings.aoColumns, "sName");
  settings._bLoadingState = true;
  var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
  if (!s || !s.time) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var duration = settings.iStateDuration;
  if (duration > 0 && s.time < +new Date - duration * 1000) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
  if (abStateLoad.indexOf(false) !== -1) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  settings.oLoadedState = $2.extend(true, {}, s);
  _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
  if (s.length !== undefined) {
    if (api) {
      api.page.len(s.length);
    } else {
      settings._iDisplayLength = s.length;
    }
  }
  if (s.start !== undefined) {
    if (api === null) {
      settings._iDisplayStart = s.start;
      settings.iInitDisplayStart = s.start;
    } else {
      _fnPageChange(settings, s.start / settings._iDisplayLength);
    }
  }
  if (s.order !== undefined) {
    settings.aaSorting = [];
    $2.each(s.order, function(i2, col2) {
      var set4 = [col2[0], col2[1]];
      if (typeof col2[0] === "string") {
        var idx2 = currentNames.indexOf(col2[0]);
        if (idx2 < 0) {
          return;
        }
        set4[0] = idx2;
      } else if (set4[0] >= columns.length) {
        return;
      }
      settings.aaSorting.push(set4);
    });
  }
  if (s.search !== undefined) {
    $2.extend(settings.oPreviousSearch, s.search);
  }
  if (s.columns) {
    var set3 = s.columns;
    var incoming = _pluck(s.columns, "name");
    if (incoming.join("").length && incoming.join("") !== currentNames.join("")) {
      set3 = [];
      for (i = 0;i < currentNames.length; i++) {
        if (currentNames[i] != "") {
          var idx = incoming.indexOf(currentNames[i]);
          if (idx >= 0) {
            set3.push(s.columns[idx]);
          } else {
            set3.push({});
          }
        } else {
          set3.push({});
        }
      }
    }
    if (set3.length === columns.length) {
      for (i = 0, iLen = set3.length;i < iLen; i++) {
        var col = set3[i];
        if (col.visible !== undefined) {
          if (api) {
            api.column(i).visible(col.visible, false);
          } else {
            columns[i].bVisible = col.visible;
          }
        }
        if (col.search !== undefined) {
          $2.extend(settings.aoPreSearchCols[i], col.search);
        }
      }
      if (api) {
        api.one("draw", function() {
          api.columns.adjust();
        });
      }
    }
  }
  settings._bLoadingState = false;
  _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
  callback();
}
function _fnLog(settings, level, msg, tn) {
  msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
  if (tn) {
    msg += ". For more information about this error, please see " + "https://datatables.net/tn/" + tn;
  }
  if (!level) {
    var ext = DataTable.ext;
    var type = ext.sErrMode || ext.errMode;
    if (settings) {
      _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
    }
    if (type == "alert") {
      alert(msg);
    } else if (type == "throw") {
      throw new Error(msg);
    } else if (typeof type == "function") {
      type(settings, tn, msg);
    }
  } else if (window.console && console.log) {
    console.log(msg);
  }
}
function _fnMap(ret, src, name, mappedName) {
  if (Array.isArray(name)) {
    $2.each(name, function(i, val) {
      if (Array.isArray(val)) {
        _fnMap(ret, src, val[0], val[1]);
      } else {
        _fnMap(ret, src, val);
      }
    });
    return;
  }
  if (mappedName === undefined) {
    mappedName = name;
  }
  if (src[name] !== undefined) {
    ret[mappedName] = src[name];
  }
}
function _fnExtend(out, extender, breakRefs) {
  var val;
  for (var prop in extender) {
    if (Object.prototype.hasOwnProperty.call(extender, prop)) {
      val = extender[prop];
      if ($2.isPlainObject(val)) {
        if (!$2.isPlainObject(out[prop])) {
          out[prop] = {};
        }
        $2.extend(true, out[prop], val);
      } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
        out[prop] = val.slice();
      } else {
        out[prop] = val;
      }
    }
  }
  return out;
}
function _fnBindAction(n, selector, fn) {
  $2(n).on("click.DT", selector, function(e) {
    fn(e);
  }).on("keypress.DT", selector, function(e) {
    if (e.which === 13) {
      e.preventDefault();
      fn(e);
    }
  }).on("selectstart.DT", selector, function() {
    return false;
  });
}
function _fnCallbackReg(settings, store2, fn) {
  if (fn) {
    settings[store2].push(fn);
  }
}
function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
  var ret = [];
  if (callbackArr) {
    ret = settings[callbackArr].slice().reverse().map(function(val) {
      return val.apply(settings.oInstance, args);
    });
  }
  if (eventName !== null) {
    var e = $2.Event(eventName + ".dt");
    var table = $2(settings.nTable);
    e.dt = settings.api;
    table[bubbles ? "trigger" : "triggerHandler"](e, args);
    if (bubbles && table.parents("body").length === 0) {
      $2("body").trigger(e, args);
    }
    ret.push(e.result);
  }
  return ret;
}
function _fnLengthOverflow(settings) {
  var start2 = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
  if (start2 >= end) {
    start2 = end - len;
  }
  start2 -= start2 % len;
  if (len === -1 || start2 < 0) {
    start2 = 0;
  }
  settings._iDisplayStart = start2;
}
function _fnRenderer(settings, type) {
  var renderer = settings.renderer;
  var host = DataTable.ext.renderer[type];
  if ($2.isPlainObject(renderer) && renderer[type]) {
    return host[renderer[type]] || host._;
  } else if (typeof renderer === "string") {
    return host[renderer] || host._;
  }
  return host._;
}
function _fnDataSource(settings) {
  if (settings.oFeatures.bServerSide) {
    return "ssp";
  } else if (settings.ajax) {
    return "ajax";
  }
  return "dom";
}
function _fnMacros(settings, str, entries) {
  var formatter = settings.fnFormatNumber, start2 = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max = settings.fnRecordsTotal(), all = len === -1;
  return str.replace(/_START_/g, formatter.call(settings, start2)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start2 / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
}
function _fnArrayApply(arr, data2) {
  if (!data2) {
    return;
  }
  if (data2.length < 1e4) {
    arr.push.apply(arr, data2);
  } else {
    for (i = 0;i < data2.length; i++) {
      arr.push(data2[i]);
    }
  }
}
function _fnListener(that, name, src) {
  if (!Array.isArray(src)) {
    src = [src];
  }
  for (i = 0;i < src.length; i++) {
    that.on(name + ".dt", src[i]);
  }
}
function _fnEscapeObject(obj) {
  if (DataTable.ext.escape.attributes) {
    $2.each(obj, function(key, val) {
      obj[key] = _escapeHtml(val);
    });
  }
  return obj;
}
var __apiStruct = [];
var __arrayProto = Array.prototype;
var _toSettings = function(mixed) {
  var idx, jq;
  var settings = DataTable.settings;
  var tables = _pluck(settings, "nTable");
  if (!mixed) {
    return [];
  } else if (mixed.nTable && mixed.oFeatures) {
    return [mixed];
  } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
    idx = tables.indexOf(mixed);
    return idx !== -1 ? [settings[idx]] : null;
  } else if (mixed && typeof mixed.settings === "function") {
    return mixed.settings().toArray();
  } else if (typeof mixed === "string") {
    jq = $2(mixed).get();
  } else if (mixed instanceof $2) {
    jq = mixed.get();
  }
  if (jq) {
    return settings.filter(function(v, idx2) {
      return jq.includes(tables[idx2]);
    });
  }
};
_Api = function(context, data2) {
  if (!(this instanceof _Api)) {
    return new _Api(context, data2);
  }
  var i;
  var settings = [];
  var ctxSettings = function(o) {
    var a = _toSettings(o);
    if (a) {
      settings.push.apply(settings, a);
    }
  };
  if (Array.isArray(context)) {
    for (i = 0;i < context.length; i++) {
      ctxSettings(context[i]);
    }
  } else {
    ctxSettings(context);
  }
  this.context = settings.length > 1 ? _unique(settings) : settings;
  _fnArrayApply(this, data2);
  this.selector = {
    rows: null,
    cols: null,
    opts: null
  };
  _Api.extend(this, this, __apiStruct);
};
DataTable.Api = _Api;
$2.extend(_Api.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  context: [],
  count: function() {
    return this.flatten().length;
  },
  each: function(fn) {
    for (var i = 0, iLen = this.length;i < iLen; i++) {
      fn.call(this, this[i], i, this);
    }
    return this;
  },
  eq: function(idx) {
    var ctx = this.context;
    return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
  },
  filter: function(fn) {
    var a = __arrayProto.filter.call(this, fn, this);
    return new _Api(this.context, a);
  },
  flatten: function() {
    var a = [];
    return new _Api(this.context, a.concat.apply(a, this.toArray()));
  },
  get: function(idx) {
    return this[idx];
  },
  join: __arrayProto.join,
  includes: function(find) {
    return this.indexOf(find) === -1 ? false : true;
  },
  indexOf: __arrayProto.indexOf,
  iterator: function(flatten, type, fn, alwaysNew) {
    var a = [], ret, i, iLen, j, jen, context = this.context, rows, items, item, selector = this.selector;
    if (typeof flatten === "string") {
      alwaysNew = fn;
      fn = type;
      type = flatten;
      flatten = false;
    }
    for (i = 0, iLen = context.length;i < iLen; i++) {
      var apiInst = new _Api(context[i]);
      if (type === "table") {
        ret = fn.call(apiInst, context[i], i);
        if (ret !== undefined) {
          a.push(ret);
        }
      } else if (type === "columns" || type === "rows") {
        ret = fn.call(apiInst, context[i], this[i], i);
        if (ret !== undefined) {
          a.push(ret);
        }
      } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
        items = this[i];
        if (type === "column-rows") {
          rows = _selector_row_indexes(context[i], selector.opts);
        }
        for (j = 0, jen = items.length;j < jen; j++) {
          item = items[j];
          if (type === "cell") {
            ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
          } else {
            ret = fn.call(apiInst, context[i], item, i, j, rows);
          }
          if (ret !== undefined) {
            a.push(ret);
          }
        }
      }
    }
    if (a.length || alwaysNew) {
      var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
      var apiSelector = api.selector;
      apiSelector.rows = selector.rows;
      apiSelector.cols = selector.cols;
      apiSelector.opts = selector.opts;
      return api;
    }
    return this;
  },
  lastIndexOf: __arrayProto.lastIndexOf,
  length: 0,
  map: function(fn) {
    var a = __arrayProto.map.call(this, fn, this);
    return new _Api(this.context, a);
  },
  pluck: function(prop) {
    var fn = DataTable.util.get(prop);
    return this.map(function(el) {
      return fn(el);
    });
  },
  pop: __arrayProto.pop,
  push: __arrayProto.push,
  reduce: __arrayProto.reduce,
  reduceRight: __arrayProto.reduceRight,
  reverse: __arrayProto.reverse,
  selector: null,
  shift: __arrayProto.shift,
  slice: function() {
    return new _Api(this.context, this);
  },
  sort: __arrayProto.sort,
  splice: __arrayProto.splice,
  toArray: function() {
    return __arrayProto.slice.call(this);
  },
  to$: function() {
    return $2(this);
  },
  toJQuery: function() {
    return $2(this);
  },
  unique: function() {
    return new _Api(this.context, _unique(this.toArray()));
  },
  unshift: __arrayProto.unshift
});
function _api_scope(scope2, fn, struct) {
  return function() {
    var ret = fn.apply(scope2 || this, arguments);
    _Api.extend(ret, ret, struct.methodExt);
    return ret;
  };
}
function _api_find(src, name) {
  for (var i = 0, iLen = src.length;i < iLen; i++) {
    if (src[i].name === name) {
      return src[i];
    }
  }
  return null;
}
window.__apiStruct = __apiStruct;
_Api.extend = function(scope2, obj, ext) {
  if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
    return;
  }
  var i, iLen, struct;
  for (i = 0, iLen = ext.length;i < iLen; i++) {
    struct = ext[i];
    if (struct.name === "__proto__") {
      continue;
    }
    obj[struct.name] = struct.type === "function" ? _api_scope(scope2, struct.val, struct) : struct.type === "object" ? {} : struct.val;
    obj[struct.name].__dt_wrapper = true;
    _Api.extend(scope2, obj[struct.name], struct.propExt);
  }
};
_Api.register = _api_register = function(name, val) {
  if (Array.isArray(name)) {
    for (var j = 0, jen = name.length;j < jen; j++) {
      _Api.register(name[j], val);
    }
    return;
  }
  var i, iLen, heir = name.split("."), struct = __apiStruct, key, method;
  for (i = 0, iLen = heir.length;i < iLen; i++) {
    method = heir[i].indexOf("()") !== -1;
    key = method ? heir[i].replace("()", "") : heir[i];
    var src = _api_find(struct, key);
    if (!src) {
      src = {
        name: key,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      };
      struct.push(src);
    }
    if (i === iLen - 1) {
      src.val = val;
      src.type = typeof val === "function" ? "function" : $2.isPlainObject(val) ? "object" : "other";
    } else {
      struct = method ? src.methodExt : src.propExt;
    }
  }
};
_Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
  _Api.register(pluralName, val);
  _Api.register(singularName, function() {
    var ret = val.apply(this, arguments);
    if (ret === this) {
      return this;
    } else if (ret instanceof _Api) {
      return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : undefined;
    }
    return ret;
  });
};
var __table_selector = function(selector, a) {
  if (Array.isArray(selector)) {
    var result = [];
    selector.forEach(function(sel) {
      var inner = __table_selector(sel, a);
      _fnArrayApply(result, inner);
    });
    return result.filter(function(item) {
      return item;
    });
  }
  if (typeof selector === "number") {
    return [a[selector]];
  }
  var nodes = a.map(function(el) {
    return el.nTable;
  });
  return $2(nodes).filter(selector).map(function() {
    var idx = nodes.indexOf(this);
    return a[idx];
  }).toArray();
};
_api_register("tables()", function(selector) {
  return selector !== undefined && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
});
_api_register("table()", function(selector) {
  var tables = this.tables(selector);
  var ctx = tables.context;
  return ctx.length ? new _Api(ctx[0]) : tables;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(item) {
  _api_registerPlural("tables()." + item[0] + "()", "table()." + item[1] + "()", function() {
    return this.iterator("table", function(ctx) {
      return ctx[item[2]];
    }, 1);
  });
});
[
  ["header", "aoHeader"],
  ["footer", "aoFooter"]
].forEach(function(item) {
  _api_register("table()." + item[0] + ".structure()", function(selector) {
    var indexes = this.columns(selector).indexes().flatten().toArray();
    var ctx = this.context[0];
    var structure = _fnHeaderLayout(ctx, ctx[item[1]], indexes);
    var orderedIndexes = indexes.slice().sort(function(a, b) {
      return a - b;
    });
    return structure.map(function(row) {
      return indexes.map(function(colIdx) {
        return row[orderedIndexes.indexOf(colIdx)];
      });
    });
  });
});
_api_registerPlural("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTableWrapper;
  }, 1);
});
_api_register("tables().every()", function(fn) {
  var that = this;
  return this.iterator("table", function(s, i) {
    fn.call(that.table(i), i);
  });
});
_api_register("caption()", function(value, side) {
  var context = this.context;
  if (value === undefined) {
    var caption = context[0].captionNode;
    return caption && context.length ? caption.innerHTML : null;
  }
  return this.iterator("table", function(ctx) {
    var table = $2(ctx.nTable);
    var caption2 = $2(ctx.captionNode);
    var container = $2(ctx.nTableWrapper);
    if (!caption2.length) {
      caption2 = $2("<caption/>").html(value);
      ctx.captionNode = caption2[0];
      if (!side) {
        table.prepend(caption2);
        side = caption2.css("caption-side");
      }
    }
    caption2.html(value);
    if (side) {
      caption2.css("caption-side", side);
      caption2[0]._captionSide = side;
    }
    if (container.find("div.dataTables_scroll").length) {
      var selector = side === "top" ? "Head" : "Foot";
      container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
    } else {
      table.prepend(caption2);
    }
  }, 1);
});
_api_register("caption.node()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].captionNode : null;
});
_api_register("draw()", function(paging) {
  return this.iterator("table", function(settings) {
    if (paging === "page") {
      _fnDraw(settings);
    } else {
      if (typeof paging === "string") {
        paging = paging === "full-hold" ? false : true;
      }
      _fnReDraw(settings, paging === false);
    }
  });
});
_api_register("page()", function(action) {
  if (action === undefined) {
    return this.page.info().page;
  }
  return this.iterator("table", function(settings) {
    _fnPageChange(settings, action);
  });
});
_api_register("page.info()", function() {
  if (this.context.length === 0) {
    return;
  }
  var settings = this.context[0], start2 = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
  return {
    page: all ? 0 : Math.floor(start2 / len),
    pages: all ? 1 : Math.ceil(visRecords / len),
    start: start2,
    end: settings.fnDisplayEnd(),
    length: len,
    recordsTotal: settings.fnRecordsTotal(),
    recordsDisplay: visRecords,
    serverSide: _fnDataSource(settings) === "ssp"
  };
});
_api_register("page.len()", function(len) {
  if (len === undefined) {
    return this.context.length !== 0 ? this.context[0]._iDisplayLength : undefined;
  }
  return this.iterator("table", function(settings) {
    _fnLengthChange(settings, len);
  });
});
var __reload = function(settings, holdPosition, callback) {
  if (callback) {
    var api = new _Api(settings);
    api.one("draw", function() {
      callback(api.ajax.json());
    });
  }
  if (_fnDataSource(settings) == "ssp") {
    _fnReDraw(settings, holdPosition);
  } else {
    _fnProcessingDisplay(settings, true);
    var xhr = settings.jqXHR;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
    _fnBuildAjax(settings, {}, function(json) {
      _fnClearTable(settings);
      var data2 = _fnAjaxDataSrc(settings, json);
      for (var i = 0, iLen = data2.length;i < iLen; i++) {
        _fnAddData(settings, data2[i]);
      }
      _fnReDraw(settings, holdPosition);
      _fnInitComplete(settings);
      _fnProcessingDisplay(settings, false);
    });
  }
};
_api_register("ajax.json()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].json;
  }
});
_api_register("ajax.params()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].oAjaxData;
  }
});
_api_register("ajax.reload()", function(callback, resetPaging) {
  return this.iterator("table", function(settings) {
    __reload(settings, resetPaging === false, callback);
  });
});
_api_register("ajax.url()", function(url) {
  var ctx = this.context;
  if (url === undefined) {
    if (ctx.length === 0) {
      return;
    }
    ctx = ctx[0];
    return $2.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
  }
  return this.iterator("table", function(settings) {
    if ($2.isPlainObject(settings.ajax)) {
      settings.ajax.url = url;
    } else {
      settings.ajax = url;
    }
  });
});
_api_register("ajax.url().load()", function(callback, resetPaging) {
  return this.iterator("table", function(ctx) {
    __reload(ctx, resetPaging === false, callback);
  });
});
var _selector_run = function(type, selector, selectFn, settings, opts) {
  var out = [], res, i, iLen, selectorType = typeof selector;
  if (!selector || selectorType === "string" || selectorType === "function" || selector.length === undefined) {
    selector = [selector];
  }
  for (i = 0, iLen = selector.length;i < iLen; i++) {
    res = selectFn(typeof selector[i] === "string" ? selector[i].trim() : selector[i]);
    res = res.filter(function(item) {
      return item !== null && item !== undefined;
    });
    if (res && res.length) {
      out = out.concat(res);
    }
  }
  var ext = _ext.selector[type];
  if (ext.length) {
    for (i = 0, iLen = ext.length;i < iLen; i++) {
      out = ext[i](settings, opts, out);
    }
  }
  return _unique(out);
};
var _selector_opts = function(opts) {
  if (!opts) {
    opts = {};
  }
  if (opts.filter && opts.search === undefined) {
    opts.search = opts.filter;
  }
  return $2.extend({
    columnOrder: "implied",
    search: "none",
    order: "current",
    page: "all"
  }, opts);
};
var _selector_first = function(old) {
  var inst = new _Api(old.context[0]);
  if (old.length) {
    inst.push(old[0]);
  }
  inst.selector = old.selector;
  if (inst.length && inst[0].length > 1) {
    inst[0].splice(1);
  }
  return inst;
};
var _selector_row_indexes = function(settings, opts) {
  var i, iLen, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
  var { search, order, page } = opts;
  if (_fnDataSource(settings) == "ssp") {
    return search === "removed" ? [] : _range(0, displayMaster.length);
  }
  if (page == "current") {
    for (i = settings._iDisplayStart, iLen = settings.fnDisplayEnd();i < iLen; i++) {
      a.push(displayFiltered[i]);
    }
  } else if (order == "current" || order == "applied") {
    if (search == "none") {
      a = displayMaster.slice();
    } else if (search == "applied") {
      a = displayFiltered.slice();
    } else if (search == "removed") {
      var displayFilteredMap = {};
      for (i = 0, iLen = displayFiltered.length;i < iLen; i++) {
        displayFilteredMap[displayFiltered[i]] = null;
      }
      displayMaster.forEach(function(item) {
        if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
          a.push(item);
        }
      });
    }
  } else if (order == "index" || order == "original") {
    for (i = 0, iLen = settings.aoData.length;i < iLen; i++) {
      if (!settings.aoData[i]) {
        continue;
      }
      if (search == "none") {
        a.push(i);
      } else {
        tmp = displayFiltered.indexOf(i);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(i);
        }
      }
    }
  } else if (typeof order === "number") {
    var ordered = _fnSort(settings, order, "asc");
    if (search === "none") {
      a = ordered;
    } else {
      for (i = 0;i < ordered.length; i++) {
        tmp = displayFiltered.indexOf(ordered[i]);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(ordered[i]);
        }
      }
    }
  }
  return a;
};
var __row_selector = function(settings, selector, opts) {
  var rows;
  var run = function(sel) {
    var selInt = _intVal(sel);
    var aoData = settings.aoData;
    if (selInt !== null && !opts) {
      return [selInt];
    }
    if (!rows) {
      rows = _selector_row_indexes(settings, opts);
    }
    if (selInt !== null && rows.indexOf(selInt) !== -1) {
      return [selInt];
    } else if (sel === null || sel === undefined || sel === "") {
      return rows;
    }
    if (typeof sel === "function") {
      return rows.map(function(idx) {
        var row = aoData[idx];
        return sel(idx, row._aData, row.nTr) ? idx : null;
      });
    }
    if (sel.nodeName) {
      var rowIdx = sel._DT_RowIndex;
      var cellIdx = sel._DT_CellIndex;
      if (rowIdx !== undefined) {
        return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
      } else if (cellIdx) {
        return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
      } else {
        var host = $2(sel).closest("*[data-dt-row]");
        return host.length ? [host.data("dt-row")] : [];
      }
    }
    if (typeof sel === "string" && sel.charAt(0) === "#") {
      var rowObj = settings.aIds[sel.replace(/^#/, "")];
      if (rowObj !== undefined) {
        return [rowObj.idx];
      }
    }
    var nodes = _removeEmpty(_pluck_order(settings.aoData, rows, "nTr"));
    return $2(nodes).filter(sel).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  var matched = _selector_run("row", selector, run, settings, opts);
  if (opts.order === "current" || opts.order === "applied") {
    _fnSortDisplay(settings, matched);
  }
  return matched;
};
_api_register("rows()", function(selector, opts) {
  if (selector === undefined) {
    selector = "";
  } else if ($2.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __row_selector(settings, selector, opts);
  }, 1);
  inst.selector.rows = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_register("rows().nodes()", function() {
  return this.iterator("row", function(settings, row) {
    return settings.aoData[row].nTr || undefined;
  }, 1);
});
_api_register("rows().data()", function() {
  return this.iterator(true, "rows", function(settings, rows) {
    return _pluck_order(settings.aoData, rows, "_aData");
  }, 1);
});
_api_registerPlural("rows().cache()", "row().cache()", function(type) {
  return this.iterator("row", function(settings, row) {
    var r = settings.aoData[row];
    return type === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
_api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
  return this.iterator("row", function(settings, row) {
    _fnInvalidate(settings, row, src);
  });
});
_api_registerPlural("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(settings, row) {
    return row;
  }, 1);
});
_api_registerPlural("rows().ids()", "row().id()", function(hash) {
  var a = [];
  var context = this.context;
  for (var i = 0, iLen = context.length;i < iLen; i++) {
    for (var j = 0, jen = this[i].length;j < jen; j++) {
      var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
      a.push((hash === true ? "#" : "") + id);
    }
  }
  return new _Api(context, a);
});
_api_registerPlural("rows().remove()", "row().remove()", function() {
  this.iterator("row", function(settings, row) {
    var data2 = settings.aoData;
    var rowData = data2[row];
    var idx = settings.aiDisplayMaster.indexOf(row);
    if (idx !== -1) {
      settings.aiDisplayMaster.splice(idx, 1);
    }
    if (settings._iRecordsDisplay > 0) {
      settings._iRecordsDisplay--;
    }
    _fnLengthOverflow(settings);
    var id = settings.rowIdFn(rowData._aData);
    if (id !== undefined) {
      delete settings.aIds[id];
    }
    data2[row] = null;
  });
  return this;
});
_api_register("rows.add()", function(rows) {
  var newRows = this.iterator("table", function(settings) {
    var row, i, iLen;
    var out = [];
    for (i = 0, iLen = rows.length;i < iLen; i++) {
      row = rows[i];
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        out.push(_fnAddTr(settings, row)[0]);
      } else {
        out.push(_fnAddData(settings, row));
      }
    }
    return out;
  }, 1);
  var modRows = this.rows(-1);
  modRows.pop();
  _fnArrayApply(modRows, newRows);
  return modRows;
});
_api_register("row()", function(selector, opts) {
  return _selector_first(this.rows(selector, opts));
});
_api_register("row().data()", function(data2) {
  var ctx = this.context;
  if (data2 === undefined) {
    return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : undefined;
  }
  var row = ctx[0].aoData[this[0]];
  row._aData = data2;
  if (Array.isArray(data2) && row.nTr && row.nTr.id) {
    _fnSetObjectDataFn(ctx[0].rowId)(data2, row.nTr.id);
  }
  _fnInvalidate(ctx[0], this[0], "data");
  return this;
});
_api_register("row().node()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && this[0].length) {
    var row = ctx[0].aoData[this[0]];
    if (row && row.nTr) {
      return row.nTr;
    }
  }
  return null;
});
_api_register("row.add()", function(row) {
  if (row instanceof $2 && row.length) {
    row = row[0];
  }
  var rows = this.iterator("table", function(settings) {
    if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
      return _fnAddTr(settings, row)[0];
    }
    return _fnAddData(settings, row);
  });
  return this.row(rows[0]);
});
$2(document).on("plugin-init.dt", function(e, context) {
  var api = new _Api(context);
  api.on("stateSaveParams.DT", function(e2, settings, d) {
    var idFn = settings.rowIdFn;
    var rows = settings.aiDisplayMaster;
    var ids = [];
    for (var i = 0;i < rows.length; i++) {
      var rowIdx = rows[i];
      var data2 = settings.aoData[rowIdx];
      if (data2._detailsShow) {
        ids.push("#" + idFn(data2._aData));
      }
    }
    d.childRows = ids;
  });
  api.on("stateLoaded.DT", function(e2, settings, state) {
    __details_state_load(api, state);
  });
  __details_state_load(api, api.state.loaded());
});
var __details_state_load = function(api, state) {
  if (state && state.childRows) {
    api.rows(state.childRows.map(function(id) {
      return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
    })).every(function() {
      _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
    });
  }
};
var __details_add = function(ctx, row, data2, klass) {
  var rows = [];
  var addRow = function(r, k) {
    if (Array.isArray(r) || r instanceof $2) {
      for (var i = 0, iLen = r.length;i < iLen; i++) {
        addRow(r[i], k);
      }
      return;
    }
    if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
      r.setAttribute("data-dt-row", row.idx);
      rows.push(r);
    } else {
      var created = $2("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
      $2("td", created).addClass(k).html(r)[0].colSpan = _fnVisibleColumns(ctx);
      rows.push(created[0]);
    }
  };
  addRow(data2, klass);
  if (row._details) {
    row._details.detach();
  }
  row._details = $2(rows);
  if (row._detailsShow) {
    row._details.insertAfter(row.nTr);
  }
};
var __details_state = DataTable.util.throttle(function(ctx) {
  _fnSaveState(ctx[0]);
}, 500);
var __details_remove = function(api, idx) {
  var ctx = api.context;
  if (ctx.length) {
    var row = ctx[0].aoData[idx !== undefined ? idx : api[0]];
    if (row && row._details) {
      row._details.detach();
      row._detailsShow = undefined;
      row._details = undefined;
      $2(row.nTr).removeClass("dt-hasChild");
      __details_state(ctx);
    }
  }
};
var __details_display = function(api, show) {
  var ctx = api.context;
  if (ctx.length && api.length) {
    var row = ctx[0].aoData[api[0]];
    if (row._details) {
      row._detailsShow = show;
      if (show) {
        row._details.insertAfter(row.nTr);
        $2(row.nTr).addClass("dt-hasChild");
      } else {
        row._details.detach();
        $2(row.nTr).removeClass("dt-hasChild");
      }
      _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
      __details_events(ctx[0]);
      __details_state(ctx);
    }
  }
};
var __details_events = function(settings) {
  var api = new _Api(settings);
  var namespace = ".dt.DT_details";
  var drawEvent = "draw" + namespace;
  var colvisEvent = "column-sizing" + namespace;
  var destroyEvent = "destroy" + namespace;
  var data2 = settings.aoData;
  api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
  if (_pluck(data2, "_details").length > 0) {
    api.on(drawEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      api.rows({ page: "current" }).eq(0).each(function(idx) {
        var row = data2[idx];
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      });
    });
    api.on(colvisEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      var row, visible = _fnVisibleColumns(ctx);
      for (var i = 0, iLen = data2.length;i < iLen; i++) {
        row = data2[i];
        if (row && row._details) {
          row._details.each(function() {
            var el = $2(this).children("td");
            if (el.length == 1) {
              el.attr("colspan", visible);
            }
          });
        }
      }
    });
    api.on(destroyEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      for (var i = 0, iLen = data2.length;i < iLen; i++) {
        if (data2[i] && data2[i]._details) {
          __details_remove(api, i);
        }
      }
    });
  }
};
var _emp = "";
var _child_obj = _emp + "row().child";
var _child_mth = _child_obj + "()";
_api_register(_child_mth, function(data2, klass) {
  var ctx = this.context;
  if (data2 === undefined) {
    return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : undefined;
  } else if (data2 === true) {
    this.child.show();
  } else if (data2 === false) {
    __details_remove(this);
  } else if (ctx.length && this.length) {
    __details_add(ctx[0], ctx[0].aoData[this[0]], data2, klass);
  }
  return this;
});
_api_register([
  _child_obj + ".show()",
  _child_mth + ".show()"
], function() {
  __details_display(this, true);
  return this;
});
_api_register([
  _child_obj + ".hide()",
  _child_mth + ".hide()"
], function() {
  __details_display(this, false);
  return this;
});
_api_register([
  _child_obj + ".remove()",
  _child_mth + ".remove()"
], function() {
  __details_remove(this);
  return this;
});
_api_register(_child_obj + ".isShown()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
    return ctx[0].aoData[this[0]]._detailsShow || false;
  }
  return false;
});
var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
var __columnData = function(settings, column, r1, r2, rows, type) {
  var a = [];
  for (var row = 0, iLen = rows.length;row < iLen; row++) {
    a.push(_fnGetCellData(settings, rows[row], column, type));
  }
  return a;
};
var __column_header = function(settings, column, row) {
  var header = settings.aoHeader;
  var titleRow = settings.titleRow;
  var target = null;
  if (row !== undefined) {
    target = row;
  } else if (titleRow === true) {
    target = 0;
  } else if (titleRow === false) {
    target = header.length - 1;
  } else if (titleRow !== null) {
    target = titleRow;
  } else {
    for (var i = 0;i < header.length; i++) {
      if (header[i][column].unique && $2(".dt-column-title", header[i][column].cell).text()) {
        target = i;
      }
    }
    if (target === null) {
      target = 0;
    }
  }
  return header[target][column].cell;
};
var __column_header_cells = function(header) {
  var out = [];
  for (var i = 0;i < header.length; i++) {
    for (var j = 0;j < header[i].length; j++) {
      var cell = header[i][j].cell;
      if (!out.includes(cell)) {
        out.push(cell);
      }
    }
  }
  return out;
};
var __column_selector = function(settings, selector, opts) {
  var columns = settings.aoColumns, names, titles, nodes = __column_header_cells(settings.aoHeader);
  var run = function(s) {
    var selInt = _intVal(s);
    if (s === "") {
      return _range(columns.length);
    }
    if (selInt !== null) {
      return [
        selInt >= 0 ? selInt : columns.length + selInt
      ];
    }
    if (typeof s === "function") {
      var rows = _selector_row_indexes(settings, opts);
      return columns.map(function(col, idx2) {
        return s(idx2, __columnData(settings, idx2, 0, 0, rows), __column_header(settings, idx2)) ? idx2 : null;
      });
    }
    var match = typeof s === "string" ? s.match(__re_column_selector) : "";
    if (match) {
      switch (match[2]) {
        case "visIdx":
        case "visible":
          if (match[1] && match[1].match(/^\d+$/)) {
            var idx = parseInt(match[1], 10);
            if (idx < 0) {
              var visColumns = columns.map(function(col, i) {
                return col.bVisible ? i : null;
              });
              return [visColumns[visColumns.length + idx]];
            }
            return [_fnVisibleToColumnIndex(settings, idx)];
          }
          return columns.map(function(col, idx2) {
            if (!col.bVisible) {
              return null;
            }
            if (col.responsiveVisible === false) {
              return null;
            }
            if (match[1]) {
              return $2(nodes[idx2]).filter(match[1]).length > 0 ? idx2 : null;
            }
            return idx2;
          });
        case "name":
          if (!names) {
            names = _pluck(columns, "sName");
          }
          return names.map(function(name, i) {
            return name === match[1] ? i : null;
          });
        case "title":
          if (!titles) {
            titles = _pluck(columns, "sTitle");
          }
          return titles.map(function(title, i) {
            return title === match[1] ? i : null;
          });
        default:
          return [];
      }
    }
    if (s.nodeName && s._DT_CellIndex) {
      return [s._DT_CellIndex.column];
    }
    var jqResult = $2(nodes).filter(s).map(function() {
      return _fnColumnsFromHeader(this);
    }).toArray().sort(function(a, b) {
      return a - b;
    });
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    var host = $2(s).closest("*[data-dt-column]");
    return host.length ? [host.data("dt-column")] : [];
  };
  var selected = _selector_run("column", selector, run, settings, opts);
  return opts.columnOrder && opts.columnOrder === "index" ? selected.sort(function(a, b) {
    return a - b;
  }) : selected;
};
var __setColumnVis = function(settings, column, vis) {
  var cols = settings.aoColumns, col = cols[column], data2 = settings.aoData, cells, i, iLen, tr;
  if (vis === undefined) {
    return col.bVisible;
  }
  if (col.bVisible === vis) {
    return false;
  }
  if (vis) {
    var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
    for (i = 0, iLen = data2.length;i < iLen; i++) {
      if (data2[i]) {
        tr = data2[i].nTr;
        cells = data2[i].anCells;
        if (tr) {
          tr.insertBefore(cells[column], cells[insertBefore] || null);
        }
      }
    }
  } else {
    $2(_pluck(settings.aoData, "anCells", column)).detach();
  }
  col.bVisible = vis;
  _colGroup(settings);
  return true;
};
_api_register("columns()", function(selector, opts) {
  if (selector === undefined) {
    selector = "";
  } else if ($2.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __column_selector(settings, selector, opts);
  }, 1);
  inst.selector.cols = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_registerPlural("columns().header()", "column().header()", function(row) {
  return this.iterator("column", function(settings, column) {
    return __column_header(settings, column, row);
  }, 1);
});
_api_registerPlural("columns().footer()", "column().footer()", function(row) {
  return this.iterator("column", function(settings, column) {
    var footer = settings.aoFooter;
    if (!footer.length) {
      return null;
    }
    return settings.aoFooter[row !== undefined ? row : 0][column].cell;
  }, 1);
});
_api_registerPlural("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", __columnData, 1);
});
_api_registerPlural("columns().render()", "column().render()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return __columnData(settings, column, i, j, rows, type);
  }, 1);
});
_api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].mData;
  }, 1);
});
_api_registerPlural("columns().cache()", "column().cache()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, type === "search" ? "_aFilterData" : "_aSortData", column);
  }, 1);
});
_api_registerPlural("columns().init()", "column().init()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column];
  }, 1);
});
_api_registerPlural("columns().names()", "column().name()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].sName;
  }, 1);
});
_api_registerPlural("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, "anCells", column);
  }, 1);
});
_api_registerPlural("columns().titles()", "column().title()", function(title, row) {
  return this.iterator("column", function(settings, column) {
    if (typeof title === "number") {
      row = title;
      title = undefined;
    }
    var span = $2(".dt-column-title", this.column(column).header(row));
    if (title !== undefined) {
      span.html(title);
      return this;
    }
    return span.html();
  }, 1);
});
_api_registerPlural("columns().types()", "column().type()", function() {
  return this.iterator("column", function(settings, column) {
    var colObj = settings.aoColumns[column];
    var type = colObj.sType;
    if (!type) {
      _fnColumnTypes(settings);
      type = colObj.sType;
    }
    return type;
  }, 1);
});
_api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
  var that = this;
  var changed = [];
  var ret = this.iterator("column", function(settings, column) {
    if (vis === undefined) {
      return settings.aoColumns[column].bVisible;
    }
    if (__setColumnVis(settings, column, vis)) {
      changed.push(column);
    }
  });
  if (vis !== undefined) {
    this.iterator("table", function(settings) {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      if (!settings.aiDisplay.length) {
        $2(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisibleColumns(settings));
      }
      _fnSaveState(settings);
      that.iterator("column", function(settings2, column) {
        if (changed.includes(column)) {
          _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
        }
      });
      if (changed.length && (calc === undefined || calc)) {
        that.columns.adjust();
      }
    });
  }
  return ret;
});
_api_registerPlural("columns().widths()", "column().width()", function() {
  var columns = this.columns(":visible").count();
  var row = $2("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
  $2(this.table().body()).append(row);
  var widths = row.children().map(function() {
    return $2(this).outerWidth();
  });
  row.remove();
  return this.iterator("column", function(settings, column) {
    var visIdx = _fnColumnIndexToVisible(settings, column);
    return visIdx !== null ? widths[visIdx] : 0;
  }, 1);
});
_api_registerPlural("columns().indexes()", "column().index()", function(type) {
  return this.iterator("column", function(settings, column) {
    return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
  }, 1);
});
_api_register("columns.adjust()", function() {
  return this.iterator("table", function(settings) {
    settings.containerWidth = -1;
    _fnAdjustColumnSizing(settings);
  }, 1);
});
_api_register("column.index()", function(type, idx) {
  if (this.context.length !== 0) {
    var ctx = this.context[0];
    if (type === "fromVisible" || type === "toData") {
      return _fnVisibleToColumnIndex(ctx, idx);
    } else if (type === "fromData" || type === "toVisible") {
      return _fnColumnIndexToVisible(ctx, idx);
    }
  }
});
_api_register("column()", function(selector, opts) {
  return _selector_first(this.columns(selector, opts));
});
var __cell_selector = function(settings, selector, opts) {
  var data2 = settings.aoData;
  var rows = _selector_row_indexes(settings, opts);
  var cells = _removeEmpty(_pluck_order(data2, rows, "anCells"));
  var allCells = $2(_flatten([], cells));
  var row;
  var columns = settings.aoColumns.length;
  var a, i, iLen, j, o, host;
  var run = function(s) {
    var fnSelector = typeof s === "function";
    if (s === null || s === undefined || fnSelector) {
      a = [];
      for (i = 0, iLen = rows.length;i < iLen; i++) {
        row = rows[i];
        for (j = 0;j < columns; j++) {
          o = {
            row,
            column: j
          };
          if (fnSelector) {
            host = data2[row];
            if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
              a.push(o);
            }
          } else {
            a.push(o);
          }
        }
      }
      return a;
    }
    if ($2.isPlainObject(s)) {
      return s.column !== undefined && s.row !== undefined && rows.indexOf(s.row) !== -1 ? [s] : [];
    }
    var jqResult = allCells.filter(s).map(function(i2, el) {
      return {
        row: el._DT_CellIndex.row,
        column: el._DT_CellIndex.column
      };
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    host = $2(s).closest("*[data-dt-row]");
    return host.length ? [{
      row: host.data("dt-row"),
      column: host.data("dt-column")
    }] : [];
  };
  return _selector_run("cell", selector, run, settings, opts);
};
_api_register("cells()", function(rowSelector, columnSelector, opts) {
  if ($2.isPlainObject(rowSelector)) {
    if (rowSelector.row === undefined) {
      opts = rowSelector;
      rowSelector = null;
    } else {
      opts = columnSelector;
      columnSelector = null;
    }
  }
  if ($2.isPlainObject(columnSelector)) {
    opts = columnSelector;
    columnSelector = null;
  }
  if (columnSelector === null || columnSelector === undefined) {
    return this.iterator("table", function(settings) {
      return __cell_selector(settings, rowSelector, _selector_opts(opts));
    });
  }
  var internalOpts = opts ? {
    page: opts.page,
    order: opts.order,
    search: opts.search
  } : {};
  var columns = this.columns(columnSelector, internalOpts);
  var rows = this.rows(rowSelector, internalOpts);
  var i, iLen, j, jen;
  var cellsNoOpts = this.iterator("table", function(settings, idx) {
    var a = [];
    for (i = 0, iLen = rows[idx].length;i < iLen; i++) {
      for (j = 0, jen = columns[idx].length;j < jen; j++) {
        a.push({
          row: rows[idx][i],
          column: columns[idx][j]
        });
      }
    }
    return a;
  }, 1);
  var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
  $2.extend(cells.selector, {
    cols: columnSelector,
    rows: rowSelector,
    opts
  });
  return cells;
});
_api_registerPlural("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(settings, row, column) {
    var data2 = settings.aoData[row];
    return data2 && data2.anCells ? data2.anCells[column] : undefined;
  }, 1);
});
_api_register("cells().data()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column);
  }, 1);
});
_api_registerPlural("cells().cache()", "cell().cache()", function(type) {
  type = type === "search" ? "_aFilterData" : "_aSortData";
  return this.iterator("cell", function(settings, row, column) {
    return settings.aoData[row][type][column];
  }, 1);
});
_api_registerPlural("cells().render()", "cell().render()", function(type) {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column, type);
  }, 1);
});
_api_registerPlural("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return {
      row,
      column,
      columnVisible: _fnColumnIndexToVisible(settings, column)
    };
  }, 1);
});
_api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
  return this.iterator("cell", function(settings, row, column) {
    _fnInvalidate(settings, row, src, column);
  });
});
_api_register("cell()", function(rowSelector, columnSelector, opts) {
  return _selector_first(this.cells(rowSelector, columnSelector, opts));
});
_api_register("cell().data()", function(data2) {
  var ctx = this.context;
  var cell = this[0];
  if (data2 === undefined) {
    return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : undefined;
  }
  _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data2);
  _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
  return this;
});
_api_register("order()", function(order, dir) {
  var ctx = this.context;
  var args = Array.prototype.slice.call(arguments);
  if (order === undefined) {
    return ctx.length !== 0 ? ctx[0].aaSorting : undefined;
  }
  if (typeof order === "number") {
    order = [[order, dir]];
  } else if (args.length > 1) {
    order = args;
  }
  return this.iterator("table", function(settings) {
    var resolved = [];
    _fnSortResolve(settings, resolved, order);
    settings.aaSorting = resolved;
  });
});
_api_register("order.listener()", function(node, column, callback) {
  return this.iterator("table", function(settings) {
    _fnSortAttachListener(settings, node, {}, column, callback);
  });
});
_api_register("order.fixed()", function(set3) {
  if (!set3) {
    var ctx = this.context;
    var fixed = ctx.length ? ctx[0].aaSortingFixed : undefined;
    return Array.isArray(fixed) ? { pre: fixed } : fixed;
  }
  return this.iterator("table", function(settings) {
    settings.aaSortingFixed = $2.extend(true, {}, set3);
  });
});
_api_register([
  "columns().order()",
  "column().order()"
], function(dir) {
  var that = this;
  if (!dir) {
    return this.iterator("column", function(settings, idx) {
      var sort = _fnSortFlatten(settings);
      for (var i = 0, iLen = sort.length;i < iLen; i++) {
        if (sort[i].col === idx) {
          return sort[i].dir;
        }
      }
      return null;
    }, 1);
  } else {
    return this.iterator("table", function(settings, i) {
      settings.aaSorting = that[i].map(function(col) {
        return [col, dir];
      });
    });
  }
});
_api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
  return this.iterator("column", function(settings, idx) {
    var col = settings.aoColumns[idx];
    return directions ? col.asSorting : col.bSortable;
  }, 1);
});
_api_register("processing()", function(show) {
  return this.iterator("table", function(ctx) {
    _fnProcessingDisplay(ctx, show);
  });
});
_api_register("search()", function(input, regex, smart, caseInsen) {
  var ctx = this.context;
  if (input === undefined) {
    return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : undefined;
  }
  return this.iterator("table", function(settings) {
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      _fnFilterComplete(settings, $2.extend(settings.oPreviousSearch, regex, {
        search: input
      }));
    } else {
      _fnFilterComplete(settings, $2.extend(settings.oPreviousSearch, {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      }));
    }
  });
});
_api_register("search.fixed()", function(name, search) {
  var ret = this.iterator(true, "table", function(settings) {
    var fixed = settings.searchFixed;
    if (!name) {
      return Object.keys(fixed);
    } else if (search === undefined) {
      return fixed[name];
    } else if (search === null) {
      delete fixed[name];
    } else {
      fixed[name] = search;
    }
    return this;
  });
  return name !== undefined && search === undefined ? ret[0] : ret;
});
_api_registerPlural("columns().search()", "column().search()", function(input, regex, smart, caseInsen) {
  return this.iterator("column", function(settings, column) {
    var preSearch = settings.aoPreSearchCols;
    if (input === undefined) {
      return preSearch[column].search;
    }
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      $2.extend(preSearch[column], regex, {
        search: input
      });
    } else {
      $2.extend(preSearch[column], {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      });
    }
    _fnFilterComplete(settings, settings.oPreviousSearch);
  });
});
_api_register([
  "columns().search.fixed()",
  "column().search.fixed()"
], function(name, search) {
  var ret = this.iterator(true, "column", function(settings, colIdx) {
    var fixed = settings.aoColumns[colIdx].searchFixed;
    if (!name) {
      return Object.keys(fixed);
    } else if (search === undefined) {
      return fixed[name] || null;
    } else if (search === null) {
      delete fixed[name];
    } else {
      fixed[name] = search;
    }
    return this;
  });
  return name !== undefined && search === undefined ? ret[0] : ret;
});
_api_register("state()", function(set3, ignoreTime) {
  if (!set3) {
    return this.context.length ? this.context[0].oSavedState : null;
  }
  var setMutate = $2.extend(true, {}, set3);
  return this.iterator("table", function(settings) {
    if (ignoreTime !== false) {
      setMutate.time = +new Date + 100;
    }
    _fnImplementState(settings, setMutate, function() {});
  });
});
_api_register("state.clear()", function() {
  return this.iterator("table", function(settings) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
  });
});
_api_register("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
_api_register("state.save()", function() {
  return this.iterator("table", function(settings) {
    _fnSaveState(settings);
  });
});
var __bootstrap;
var __foundation;
DataTable.use = function(arg1, arg2) {
  var module = typeof arg1 === "string" ? arg2 : arg1;
  var type = typeof arg2 === "string" ? arg2 : arg1;
  if (module === undefined && typeof type === "string") {
    switch (type) {
      case "lib":
      case "jq":
        return $2;
      case "win":
        return window;
      case "datetime":
        return DataTable.DateTime;
      case "luxon":
        return __luxon;
      case "moment":
        return __moment;
      case "bootstrap":
        return __bootstrap || window.bootstrap;
      case "foundation":
        return __foundation || window.Foundation;
      default:
        return null;
    }
  }
  if (type === "lib" || type === "jq" || module && module.fn && module.fn.jquery) {
    $2 = module;
  } else if (type === "win" || module && module.document) {
    window = module;
    document = module.document;
  } else if (type === "datetime" || module && module.type === "DateTime") {
    DataTable.DateTime = module;
  } else if (type === "luxon" || module && module.FixedOffsetZone) {
    __luxon = module;
  } else if (type === "moment" || module && module.isMoment) {
    __moment = module;
  } else if (type === "bootstrap" || module && module.Modal && module.Modal.NAME === "modal") {
    __bootstrap = module;
  } else if (type === "foundation" || module && module.Reveal) {
    __foundation = module;
  }
};
DataTable.factory = function(root, jq) {
  var is = false;
  if (root && root.document) {
    window = root;
    document = root.document;
  }
  if (jq && jq.fn && jq.fn.jquery) {
    $2 = jq;
    is = true;
  }
  return is;
};
DataTable.versionCheck = function(version, version2) {
  var aThis = version2 ? version2.split(".") : DataTable.version.split(".");
  var aThat = version.split(".");
  var iThis, iThat;
  for (var i = 0, iLen = aThat.length;i < iLen; i++) {
    iThis = parseInt(aThis[i], 10) || 0;
    iThat = parseInt(aThat[i], 10) || 0;
    if (iThis === iThat) {
      continue;
    }
    return iThis > iThat;
  }
  return true;
};
DataTable.isDataTable = function(table) {
  var t = $2(table).get(0);
  var is = false;
  if (table instanceof DataTable.Api) {
    return true;
  }
  $2.each(DataTable.settings, function(i, o) {
    var head = o.nScrollHead ? $2("table", o.nScrollHead)[0] : null;
    var foot = o.nScrollFoot ? $2("table", o.nScrollFoot)[0] : null;
    if (o.nTable === t || head === t || foot === t) {
      is = true;
    }
  });
  return is;
};
DataTable.tables = function(visible) {
  var api = false;
  if ($2.isPlainObject(visible)) {
    api = visible.api;
    visible = visible.visible;
  }
  var a = DataTable.settings.filter(function(o) {
    return !visible || visible && $2(o.nTable).is(":visible") ? true : false;
  }).map(function(o) {
    return o.nTable;
  });
  return api ? new _Api(a) : a;
};
DataTable.camelToHungarian = _fnCamelToHungarian;
_api_register("$()", function(selector, opts) {
  var rows = this.rows(opts).nodes(), jqRows = $2(rows);
  return $2([].concat(jqRows.filter(selector).toArray(), jqRows.find(selector).toArray()));
});
$2.each(["on", "one", "off"], function(i, key) {
  _api_register(key + "()", function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = args[0].split(/\s/).map(function(e) {
      return !e.match(/\.dt\b/) ? e + ".dt" : e;
    }).join(" ");
    var inst = $2(this.tables().nodes());
    inst[key].apply(inst, args);
    return this;
  });
});
_api_register("clear()", function() {
  return this.iterator("table", function(settings) {
    _fnClearTable(settings);
  });
});
_api_register("error()", function(msg) {
  return this.iterator("table", function(settings) {
    _fnLog(settings, 0, msg);
  });
});
_api_register("settings()", function() {
  return new _Api(this.context, this.context);
});
_api_register("init()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].oInit : null;
});
_api_register("data()", function() {
  return this.iterator("table", function(settings) {
    return _pluck(settings.aoData, "_aData");
  }).flatten();
});
_api_register("trigger()", function(name, args, bubbles) {
  return this.iterator("table", function(settings) {
    return _fnCallbackFire(settings, null, name, args, bubbles);
  }).flatten();
});
_api_register("ready()", function(fn) {
  var ctx = this.context;
  if (!fn) {
    return ctx.length ? ctx[0]._bInitComplete || false : null;
  }
  return this.tables().every(function() {
    var api = this;
    if (this.context[0]._bInitComplete) {
      fn.call(api);
    } else {
      this.on("init.dt.DT", function() {
        fn.call(api);
      });
    }
  });
});
_api_register("destroy()", function(remove) {
  remove = remove || false;
  return this.iterator("table", function(settings) {
    var classes = settings.oClasses;
    var table = settings.nTable;
    var tbody = settings.nTBody;
    var thead = settings.nTHead;
    var tfoot = settings.nTFoot;
    var jqTable = $2(table);
    var jqTbody = $2(tbody);
    var jqWrapper = $2(settings.nTableWrapper);
    var rows = settings.aoData.map(function(r) {
      return r ? r.nTr : null;
    });
    var orderClasses = classes.order;
    settings.bDestroying = true;
    _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
    if (!remove) {
      new _Api(settings).columns().visible(true);
    }
    if (settings.resizeObserver) {
      settings.resizeObserver.disconnect();
    }
    jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
    $2(window).off(".DT-" + settings.sInstance);
    if (table != thead.parentNode) {
      jqTable.children("thead").detach();
      jqTable.append(thead);
    }
    if (tfoot && table != tfoot.parentNode) {
      jqTable.children("tfoot").detach();
      jqTable.append(tfoot);
    }
    cleanHeader(thead, "header");
    cleanHeader(tfoot, "footer");
    settings.colgroup.remove();
    settings.aaSorting = [];
    settings.aaSortingFixed = [];
    _fnSortingClasses(settings);
    $2(jqTable).find("th, td").removeClass($2.map(DataTable.ext.type.className, function(v) {
      return v;
    }).join(" "));
    $2("th, td", thead).removeClass(orderClasses.none + " " + orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc).css("width", "").removeAttr("aria-sort");
    jqTbody.children().detach();
    jqTbody.append(rows);
    var orig = settings.nTableWrapper.parentNode;
    var insertBefore = settings.nTableWrapper.nextSibling;
    var removedMethod = remove ? "remove" : "detach";
    jqTable[removedMethod]();
    jqWrapper[removedMethod]();
    if (!remove && orig) {
      orig.insertBefore(table, insertBefore);
      jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
    }
    var idx = DataTable.settings.indexOf(settings);
    if (idx !== -1) {
      DataTable.settings.splice(idx, 1);
    }
  });
});
$2.each(["column", "row", "cell"], function(i, type) {
  _api_register(type + "s().every()", function(fn) {
    var opts = this.selector.opts;
    var api = this;
    var inst;
    var counter = 0;
    return this.iterator("every", function(settings, selectedIdx, tableIdx) {
      inst = api[type](selectedIdx, opts);
      if (type === "cell") {
        fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
      } else {
        fn.call(inst, selectedIdx, tableIdx, counter);
      }
      counter++;
    });
  });
});
_api_register("i18n()", function(token, def, plural) {
  var ctx = this.context[0];
  var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
  if (resolved === undefined) {
    resolved = def;
  }
  if ($2.isPlainObject(resolved)) {
    resolved = plural !== undefined && resolved[plural] !== undefined ? resolved[plural] : plural === false ? resolved : resolved._;
  }
  return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
});
function cleanHeader(node, className) {
  $2(node).find(".dt-column-order").remove();
  $2(node).find(".dt-column-title").each(function() {
    var title = $2(this).html();
    $2(this).parent().parent().append(title);
    $2(this).remove();
  });
  $2(node).find("div.dt-column-" + className).remove();
  $2("th, td", node).removeAttr("data-dt-column");
}
DataTable.version = "2.3.7";
DataTable.settings = [];
DataTable.models = {};
DataTable.models.oSearch = {
  caseInsensitive: true,
  search: "",
  regex: false,
  smart: true,
  return: false
};
DataTable.models.oRow = {
  nTr: null,
  anCells: null,
  _aData: [],
  _aSortData: null,
  _aFilterData: null,
  _sFilterRow: null,
  src: null,
  idx: -1,
  displayData: null
};
DataTable.models.oColumn = {
  idx: null,
  aDataSort: null,
  asSorting: null,
  bSearchable: null,
  bSortable: null,
  bVisible: null,
  _sManualType: null,
  _bAttrSrc: false,
  fnCreatedCell: null,
  fnGetData: null,
  fnSetData: null,
  mData: null,
  mRender: null,
  sClass: null,
  sContentPadding: null,
  sDefaultContent: null,
  sName: null,
  sSortDataType: "std",
  sSortingClass: null,
  sTitle: null,
  sType: null,
  sWidth: null,
  sWidthOrig: null,
  wideStrings: null,
  searchFixed: null
};
DataTable.defaults = {
  aaData: null,
  aaSorting: [[0, "asc"]],
  aaSortingFixed: [],
  ajax: null,
  aLengthMenu: [10, 25, 50, 100],
  aoColumns: null,
  aoColumnDefs: null,
  aoSearchCols: [],
  bAutoWidth: true,
  bDeferRender: true,
  bDestroy: false,
  bFilter: true,
  bInfo: true,
  bLengthChange: true,
  bPaginate: true,
  bProcessing: false,
  bRetrieve: false,
  bScrollCollapse: false,
  bServerSide: false,
  bSort: true,
  bSortMulti: true,
  bSortCellsTop: null,
  titleRow: null,
  bSortClasses: true,
  bStateSave: false,
  fnCreatedRow: null,
  fnDrawCallback: null,
  fnFooterCallback: null,
  fnFormatNumber: function(toFormat) {
    return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
  },
  fnHeaderCallback: null,
  fnInfoCallback: null,
  fnInitComplete: null,
  fnPreDrawCallback: null,
  fnRowCallback: null,
  fnStateLoadCallback: function(settings) {
    try {
      return JSON.parse((settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem("DataTables_" + settings.sInstance + "_" + location.pathname));
    } catch (e) {
      return {};
    }
  },
  fnStateLoadParams: null,
  fnStateLoaded: null,
  fnStateSaveCallback: function(settings, data2) {
    try {
      (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem("DataTables_" + settings.sInstance + "_" + location.pathname, JSON.stringify(data2));
    } catch (e) {}
  },
  fnStateSaveParams: null,
  iStateDuration: 7200,
  iDisplayLength: 10,
  iDisplayStart: 0,
  iTabIndex: 0,
  oClasses: {},
  oLanguage: {
    oAria: {
      orderable: ": Activate to sort",
      orderableReverse: ": Activate to invert sorting",
      orderableRemove: ": Activate to remove sorting",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
        number: ""
      }
    },
    oPaginate: {
      sFirst: "«",
      sLast: "»",
      sNext: "›",
      sPrevious: "‹"
    },
    entries: {
      _: "entries",
      1: "entry"
    },
    lengthLabels: {
      "-1": "All"
    },
    sEmptyTable: "No data available in table",
    sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
    sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
    sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
    sInfoPostFix: "",
    sDecimal: "",
    sThousands: ",",
    sLengthMenu: "_MENU_ _ENTRIES_ per page",
    sLoadingRecords: "Loading...",
    sProcessing: "",
    sSearch: "Search:",
    sSearchPlaceholder: "",
    sUrl: "",
    sZeroRecords: "No matching records found"
  },
  orderDescReverse: true,
  oSearch: $2.extend({}, DataTable.models.oSearch),
  layout: {
    topStart: "pageLength",
    topEnd: "search",
    bottomStart: "info",
    bottomEnd: "paging"
  },
  sDom: null,
  searchDelay: null,
  sPaginationType: "",
  sScrollX: "",
  sScrollXInner: "",
  sScrollY: "",
  sServerMethod: "GET",
  renderer: null,
  rowId: "DT_RowId",
  caption: null,
  iDeferLoading: null,
  on: null,
  columnTitleTag: "span"
};
_fnHungarianMap(DataTable.defaults);
DataTable.defaults.column = {
  aDataSort: null,
  iDataSort: -1,
  ariaTitle: "",
  asSorting: ["asc", "desc", ""],
  bSearchable: true,
  bSortable: true,
  bVisible: true,
  fnCreatedCell: null,
  mData: null,
  mRender: null,
  sCellType: "td",
  sClass: "",
  sContentPadding: "",
  sDefaultContent: null,
  sName: "",
  sSortDataType: "std",
  sTitle: null,
  sType: null,
  sWidth: null
};
_fnHungarianMap(DataTable.defaults.column);
DataTable.models.oSettings = {
  oFeatures: {
    bAutoWidth: null,
    bDeferRender: null,
    bFilter: null,
    bInfo: true,
    bLengthChange: true,
    bPaginate: null,
    bProcessing: null,
    bServerSide: null,
    bSort: null,
    bSortMulti: null,
    bSortClasses: null,
    bStateSave: null
  },
  oScroll: {
    bCollapse: null,
    iBarWidth: 0,
    sX: null,
    sXInner: null,
    sY: null
  },
  oLanguage: {
    fnInfoCallback: null
  },
  oBrowser: {
    bScrollbarLeft: false,
    barWidth: 0
  },
  ajax: null,
  aanFeatures: [],
  aoData: [],
  aiDisplay: [],
  aiDisplayMaster: [],
  aIds: {},
  aoColumns: [],
  aoHeader: [],
  aoFooter: [],
  oPreviousSearch: {},
  searchFixed: {},
  aoPreSearchCols: [],
  aaSorting: null,
  aaSortingFixed: [],
  sDestroyWidth: 0,
  aoRowCallback: [],
  aoHeaderCallback: [],
  aoFooterCallback: [],
  aoDrawCallback: [],
  aoRowCreatedCallback: [],
  aoPreDrawCallback: [],
  aoInitComplete: [],
  aoStateSaveParams: [],
  aoStateLoadParams: [],
  aoStateLoaded: [],
  sTableId: "",
  nTable: null,
  nTHead: null,
  nTFoot: null,
  nTBody: null,
  nTableWrapper: null,
  bInitialised: false,
  aoOpenRows: [],
  sDom: null,
  searchDelay: null,
  sPaginationType: "two_button",
  pagingControls: 0,
  iStateDuration: 0,
  aoStateSave: [],
  aoStateLoad: [],
  oSavedState: null,
  oLoadedState: null,
  bAjaxDataGet: true,
  jqXHR: null,
  json: undefined,
  oAjaxData: undefined,
  sServerMethod: null,
  fnFormatNumber: null,
  aLengthMenu: null,
  iDraw: 0,
  bDrawing: false,
  iDrawError: -1,
  _iDisplayLength: 10,
  _iDisplayStart: 0,
  _iRecordsTotal: 0,
  _iRecordsDisplay: 0,
  oClasses: {},
  bFiltered: false,
  bSorted: false,
  bSortCellsTop: null,
  oInit: null,
  aoDestroyCallback: [],
  fnRecordsTotal: function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  fnRecordsDisplay: function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  fnDisplayEnd: function() {
    var len = this._iDisplayLength, start2 = this._iDisplayStart, calc = start2 + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
    if (features.bServerSide) {
      return paginate === false || len === -1 ? start2 + records : Math.min(start2 + len, this._iRecordsDisplay);
    } else {
      return !paginate || calc > records || len === -1 ? records : calc;
    }
  },
  oInstance: null,
  sInstance: null,
  iTabIndex: 0,
  nScrollHead: null,
  nScrollFoot: null,
  aLastSort: [],
  oPlugins: {},
  rowIdFn: null,
  rowId: null,
  caption: "",
  captionNode: null,
  colgroup: null,
  deferLoading: null,
  typeDetect: true,
  resizeObserver: null,
  containerWidth: -1,
  orderDescReverse: null,
  orderIndicators: true,
  orderHandler: true,
  titleRow: null,
  columnTitleTag: "span"
};
var extPagination = DataTable.ext.pager;
$2.extend(extPagination, {
  simple: function() {
    return ["previous", "next"];
  },
  full: function() {
    return ["first", "previous", "next", "last"];
  },
  numbers: function() {
    return ["numbers"];
  },
  simple_numbers: function() {
    return ["previous", "numbers", "next"];
  },
  full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  },
  first_last: function() {
    return ["first", "last"];
  },
  first_last_numbers: function() {
    return ["first", "numbers", "last"];
  },
  _numbers: _pagingNumbers,
  numbers_length: 7
});
$2.extend(true, DataTable.ext.renderer, {
  pagingButton: {
    _: function(settings, buttonType, content, active, disabled) {
      var classes = settings.oClasses.paging;
      var btnClasses = [classes.button];
      var btn;
      if (active) {
        btnClasses.push(classes.active);
      }
      if (disabled) {
        btnClasses.push(classes.disabled);
      }
      if (buttonType === "ellipsis") {
        btn = $2('<span class="ellipsis"></span>').html(content)[0];
      } else {
        btn = $2("<button>", {
          class: btnClasses.join(" "),
          role: "link",
          type: "button"
        }).html(content);
      }
      return {
        display: btn,
        clicker: btn
      };
    }
  },
  pagingContainer: {
    _: function(settings, buttons) {
      return buttons;
    }
  }
});
var _filterString = function(stripHtml, normalize) {
  return function(str) {
    if (_empty(str) || typeof str !== "string") {
      return str;
    }
    str = str.replace(_re_new_lines, " ");
    if (stripHtml) {
      str = _stripHtml(str);
    }
    if (normalize) {
      str = _normalize(str, false);
    }
    return str;
  };
};
function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
  if (__moment) {
    return dtLib[momentFn](arg1);
  } else if (__luxon) {
    return dtLib[luxonFn](arg1);
  }
  return dateFn ? dtLib[dateFn](arg1) : dtLib;
}
var __mlWarning = false;
var __luxon;
var __moment;
function resolveWindowLibs() {
  if (window.luxon && !__luxon) {
    __luxon = window.luxon;
  }
  if (window.moment && !__moment) {
    __moment = window.moment;
  }
}
function __mldObj(d, format, locale) {
  var dt;
  resolveWindowLibs();
  if (__moment) {
    dt = __moment.utc(d, format, locale, true);
    if (!dt.isValid()) {
      return null;
    }
  } else if (__luxon) {
    dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
    if (!dt.isValid) {
      return null;
    }
    dt = dt.setLocale(locale);
  } else if (!format) {
    dt = new Date(d);
  } else {
    if (!__mlWarning) {
      alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
    }
    __mlWarning = true;
  }
  return dt;
}
function __mlHelper(localeString) {
  return function(from, to, locale, def) {
    if (arguments.length === 0) {
      locale = "en";
      to = null;
      from = null;
    } else if (arguments.length === 1) {
      locale = "en";
      to = from;
      from = null;
    } else if (arguments.length === 2) {
      locale = to;
      to = from;
      from = null;
    }
    var typeName = "datetime" + (to ? "-" + to : "");
    if (!DataTable.ext.type.order[typeName + "-pre"]) {
      DataTable.type(typeName, {
        detect: function(d) {
          return d === typeName ? typeName : false;
        },
        order: {
          pre: function(d) {
            return d.valueOf();
          }
        },
        className: "dt-right"
      });
    }
    return function(d, type) {
      if (d === null || d === undefined) {
        if (def === "--now") {
          var local = new Date;
          d = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()));
        } else {
          d = "";
        }
      }
      if (type === "type") {
        return typeName;
      }
      if (d === "") {
        return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
      }
      if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
        return d;
      }
      var dt = __mldObj(d, from, locale);
      if (dt === null) {
        return d;
      }
      if (type === "sort") {
        return dt;
      }
      var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString](navigator.language, { timeZone: "UTC" }) : __mld(dt, "format", "toFormat", "toISOString", to);
      return type === "display" ? _escapeHtml(formatted) : formatted;
    };
  };
}
var __thousands = ",";
var __decimal = ".";
if (window.Intl !== undefined) {
  try {
    num = new Intl.NumberFormat().formatToParts(100000.1);
    for (i = 0;i < num.length; i++) {
      if (num[i].type === "group") {
        __thousands = num[i].value;
      } else if (num[i].type === "decimal") {
        __decimal = num[i].value;
      }
    }
  } catch (e) {}
}
var num;
var i;
DataTable.datetime = function(format, locale) {
  var typeName = "datetime-" + format;
  if (!locale) {
    locale = "en";
  }
  if (!DataTable.ext.type.order[typeName]) {
    DataTable.type(typeName, {
      detect: function(d) {
        var dt = __mldObj(d, format, locale);
        return d === "" || dt ? typeName : false;
      },
      order: {
        pre: function(d) {
          return __mldObj(d, format, locale) || 0;
        }
      },
      className: "dt-right"
    });
  }
};
DataTable.render = {
  date: __mlHelper("toLocaleDateString"),
  datetime: __mlHelper("toLocaleString"),
  time: __mlHelper("toLocaleTimeString"),
  number: function(thousands, decimal, precision, prefix2, postfix) {
    if (thousands === null || thousands === undefined) {
      thousands = __thousands;
    }
    if (decimal === null || decimal === undefined) {
      decimal = __decimal;
    }
    return {
      display: function(d) {
        if (typeof d !== "number" && typeof d !== "string") {
          return d;
        }
        if (d === "" || d === null) {
          return d;
        }
        var negative = d < 0 ? "-" : "";
        var flo = parseFloat(d);
        var abs = Math.abs(flo);
        if (abs >= 100000000000 || abs < 0.0001 && abs !== 0) {
          var exp = flo.toExponential(precision).split(/e\+?/);
          return exp[0] + " x 10<sup>" + exp[1] + "</sup>";
        }
        if (isNaN(flo)) {
          return _escapeHtml(d);
        }
        flo = flo.toFixed(precision);
        d = Math.abs(flo);
        var intPart = parseInt(d, 10);
        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
        if (intPart === 0 && parseFloat(floatPart) === 0) {
          negative = "";
        }
        return negative + (prefix2 || "") + intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) + floatPart + (postfix || "");
      }
    };
  },
  text: function() {
    return {
      display: _escapeHtml,
      filter: _escapeHtml
    };
  }
};
var _extTypes = DataTable.ext.type;
DataTable.type = function(name, prop, val) {
  if (!prop) {
    return {
      className: _extTypes.className[name],
      detect: _extTypes.detect.find(function(fn) {
        return fn._name === name;
      }),
      order: {
        pre: _extTypes.order[name + "-pre"],
        asc: _extTypes.order[name + "-asc"],
        desc: _extTypes.order[name + "-desc"]
      },
      render: _extTypes.render[name],
      search: _extTypes.search[name]
    };
  }
  var setProp = function(prop2, propVal) {
    _extTypes[prop2][name] = propVal;
  };
  var setDetect = function(detect) {
    Object.defineProperty(detect, "_name", { value: name });
    var idx = _extTypes.detect.findIndex(function(item) {
      return item._name === name;
    });
    if (idx === -1) {
      _extTypes.detect.unshift(detect);
    } else {
      _extTypes.detect.splice(idx, 1, detect);
    }
  };
  var setOrder = function(obj) {
    _extTypes.order[name + "-pre"] = obj.pre;
    _extTypes.order[name + "-asc"] = obj.asc;
    _extTypes.order[name + "-desc"] = obj.desc;
  };
  if (val === undefined) {
    val = prop;
    prop = null;
  }
  if (prop === "className") {
    setProp("className", val);
  } else if (prop === "detect") {
    setDetect(val);
  } else if (prop === "order") {
    setOrder(val);
  } else if (prop === "render") {
    setProp("render", val);
  } else if (prop === "search") {
    setProp("search", val);
  } else if (!prop) {
    if (val.className) {
      setProp("className", val.className);
    }
    if (val.detect !== undefined) {
      setDetect(val.detect);
    }
    if (val.order) {
      setOrder(val.order);
    }
    if (val.render !== undefined) {
      setProp("render", val.render);
    }
    if (val.search !== undefined) {
      setProp("search", val.search);
    }
  }
};
DataTable.types = function() {
  return _extTypes.detect.map(function(fn) {
    return fn._name;
  });
};
var __diacriticSort = function(a, b) {
  a = a !== null && a !== undefined ? a.toString().toLowerCase() : "";
  b = b !== null && b !== undefined ? b.toString().toLowerCase() : "";
  return a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true
  });
};
var __diacriticHtmlSort = function(a, b) {
  a = _stripHtml(a);
  b = _stripHtml(b);
  return __diacriticSort(a, b);
};
DataTable.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(a) {
      return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
    }
  },
  search: _filterString(false, true)
});
DataTable.type("string-utf8", {
  detect: {
    allOf: function(d) {
      return true;
    },
    oneOf: function(d) {
      return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: __diacriticSort,
    desc: function(a, b) {
      return __diacriticSort(a, b) * -1;
    }
  },
  search: _filterString(false, true)
});
DataTable.type("html", {
  detect: {
    allOf: function(d) {
      return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
    },
    oneOf: function(d) {
      return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1;
    }
  },
  order: {
    pre: function(a) {
      return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
    }
  },
  search: _filterString(true, true)
});
DataTable.type("html-utf8", {
  detect: {
    allOf: function(d) {
      return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
    },
    oneOf: function(d) {
      return navigator.languages && !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1 && typeof d === "string" && d.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: __diacriticHtmlSort,
    desc: function(a, b) {
      return __diacriticHtmlSort(a, b) * -1;
    }
  },
  search: _filterString(true, true)
});
DataTable.type("date", {
  className: "dt-type-date",
  detect: {
    allOf: function(d) {
      if (d && !(d instanceof Date) && !_re_date.test(d)) {
        return null;
      }
      var parsed = Date.parse(d);
      return parsed !== null && !isNaN(parsed) || _empty(d);
    },
    oneOf: function(d) {
      return d instanceof Date || typeof d === "string" && _re_date.test(d);
    }
  },
  order: {
    pre: function(d) {
      var ts = Date.parse(d);
      return isNaN(ts) ? -Infinity : ts;
    }
  }
});
DataTable.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("html-num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_formatted_numeric);
    }
  }
});
DataTable.type("num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp);
    }
  }
});
var __numericReplace = function(d, decimalPlace, re1, re2) {
  if (d !== 0 && (!d || d === "-")) {
    return -Infinity;
  }
  var type = typeof d;
  if (type === "number" || type === "bigint") {
    return d;
  }
  if (decimalPlace) {
    d = _numToDecimal(d, decimalPlace);
  }
  if (d.replace) {
    if (re1) {
      d = d.replace(re1, "");
    }
    if (re2) {
      d = d.replace(re2, "");
    }
  }
  return d * 1;
};
$2.extend(true, DataTable.ext.renderer, {
  footer: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.tfoot.cell);
    }
  },
  header: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.thead.cell);
      if (!settings.oFeatures.bSort) {
        cell.addClass(classes.order.none);
      }
      var titleRow = settings.titleRow;
      var headerRows = cell.closest("thead").find("tr");
      var rowIdx = cell.parent().index();
      if (cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || titleRow === true && rowIdx !== 0 || titleRow === false && rowIdx !== headerRows.length - 1 || typeof titleRow === "number" && rowIdx !== titleRow) {
        return;
      }
      $2(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx, column) {
        if (settings !== ctx) {
          return;
        }
        var sorting = ctx.sortDetails;
        if (!sorting) {
          return;
        }
        var orderedColumns = _pluck(sorting, "col");
        if (e.type === "column-visibility" && !orderedColumns.includes(column)) {
          return;
        }
        var i2;
        var orderClasses = classes.order;
        var columns = ctx.api.columns(cell);
        var col = settings.aoColumns[columns.flatten()[0]];
        var orderable = columns.orderable().includes(true);
        var ariaType = "";
        var indexes = columns.indexes();
        var sortDirs = columns.orderable(true).flatten();
        var tabIndex = settings.iTabIndex;
        var canOrder = ctx.orderHandler && orderable;
        cell.removeClass(orderClasses.isAsc + " " + orderClasses.isDesc).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, canOrder && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, canOrder && sortDirs.includes("desc"));
        var isOrdering = true;
        for (i2 = 0;i2 < indexes.length; i2++) {
          if (!orderedColumns.includes(indexes[i2])) {
            isOrdering = false;
          }
        }
        if (isOrdering) {
          var orderDirs = columns.order();
          cell.addClass(orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : "");
        }
        var firstVis = -1;
        for (i2 = 0;i2 < orderedColumns.length; i2++) {
          if (settings.aoColumns[orderedColumns[i2]].bVisible) {
            firstVis = orderedColumns[i2];
            break;
          }
        }
        if (indexes[0] == firstVis) {
          var firstSort = sorting[0];
          var sortOrder = col.asSorting;
          cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
          ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
        } else {
          cell.removeAttr("aria-sort");
        }
        if (orderable) {
          var orderSpan = cell.find(".dt-column-order");
          orderSpan.attr("role", "button").attr("aria-label", orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle);
          if (tabIndex !== -1) {
            orderSpan.attr("tabindex", tabIndex);
          }
        }
      });
    }
  },
  layout: {
    _: function(settings, container, items) {
      var classes = settings.oClasses.layout;
      var row = $2("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
      DataTable.ext.renderer.layout._forLayoutRow(items, function(key, val) {
        if (key === "id" || key === "className") {
          return;
        }
        var klass = "";
        if (val.table) {
          row.addClass(classes.tableRow);
          klass += classes.tableCell + " ";
        }
        if (key === "start") {
          klass += classes.start;
        } else if (key === "end") {
          klass += classes.end;
        } else {
          klass += classes.full;
        }
        $2("<div/>").attr({
          id: val.id || null,
          class: val.className ? val.className : classes.cell + " " + klass
        }).append(val.contents).appendTo(row);
      });
    },
    _forLayoutRow: function(items, fn) {
      var layoutEnum = function(x) {
        switch (x) {
          case "":
            return 0;
          case "start":
            return 1;
          case "end":
            return 2;
          default:
            return 3;
        }
      };
      Object.keys(items).sort(function(a, b) {
        return layoutEnum(a) - layoutEnum(b);
      }).forEach(function(key) {
        fn(key, items[key]);
      });
    }
  }
});
DataTable.feature = {};
DataTable.feature.register = function(name, cb, legacy) {
  DataTable.ext.features[name] = cb;
  if (legacy) {
    _ext.feature.push({
      cFeature: legacy,
      fnInit: cb
    });
  }
};
function _divProp(el, prop, val) {
  if (val) {
    el[prop] = val;
  }
}
DataTable.feature.register("div", function(settings, opts) {
  var n = $2("<div>")[0];
  if (opts) {
    _divProp(n, "className", opts.className);
    _divProp(n, "id", opts.id);
    _divProp(n, "innerHTML", opts.html);
    _divProp(n, "textContent", opts.text);
  }
  return n;
});
DataTable.feature.register("info", function(settings, opts) {
  if (!settings.oFeatures.bInfo) {
    return null;
  }
  var { oLanguage: lang, sTableId: tid } = settings, n = $2("<div/>", {
    class: settings.oClasses.info.container
  });
  opts = $2.extend({
    callback: lang.fnInfoCallback,
    empty: lang.sInfoEmpty,
    postfix: lang.sInfoPostFix,
    search: lang.sInfoFiltered,
    text: lang.sInfo
  }, opts);
  settings.aoDrawCallback.push(function(s) {
    _fnUpdateInfo(s, opts, n);
  });
  if (!settings._infoEl) {
    n.attr({
      "aria-live": "polite",
      id: tid + "_info",
      role: "status"
    });
    $2(settings.nTable).attr("aria-describedby", tid + "_info");
    settings._infoEl = n;
  }
  return n;
}, "i");
function _fnUpdateInfo(settings, opts, node) {
  var start2 = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
  if (total !== max) {
    out += " " + opts.search;
  }
  out += opts.postfix;
  out = _fnMacros(settings, out);
  if (opts.callback) {
    out = opts.callback.call(settings.oInstance, settings, start2, end, max, total, out);
  }
  node.html(out);
  _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
}
var __searchCounter = 0;
DataTable.feature.register("search", function(settings, opts) {
  if (!settings.oFeatures.bFilter) {
    return null;
  }
  var classes = settings.oClasses.search;
  var tableId = settings.sTableId;
  var language = settings.oLanguage;
  var previousSearch = settings.oPreviousSearch;
  var input = '<input type="search" class="' + classes.input + '"/>';
  opts = $2.extend({
    placeholder: language.sSearchPlaceholder,
    processing: false,
    text: language.sSearch
  }, opts);
  if (opts.text.indexOf("_INPUT_") === -1) {
    opts.text += "_INPUT_";
  }
  opts.text = _fnMacros(settings, opts.text);
  var end = opts.text.match(/_INPUT_$/);
  var start2 = opts.text.match(/^_INPUT_/);
  var removed = opts.text.replace(/_INPUT_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start2) {
    str = "_INPUT_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_INPUT_";
  }
  var filter = $2("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
  filter.find("label").attr("for", "dt-search-" + __searchCounter);
  filter.find("input").attr("id", "dt-search-" + __searchCounter);
  __searchCounter++;
  var searchFn = function(event) {
    var val = this.value;
    if (previousSearch.return && event.key !== "Enter") {
      return;
    }
    if (val != previousSearch.search) {
      _fnProcessingRun(settings, opts.processing, function() {
        previousSearch.search = val;
        _fnFilterComplete(settings, previousSearch);
        settings._iDisplayStart = 0;
        _fnDraw(settings);
      });
    }
  };
  var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
  var jqFilter = $2("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", searchDelay ? DataTable.util.debounce(searchFn, searchDelay) : searchFn).on("mouseup.DT", function(e) {
    setTimeout(function() {
      searchFn.call(jqFilter[0], e);
    }, 10);
  }).on("keypress.DT", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  }).attr("aria-controls", tableId);
  $2(settings.nTable).on("search.dt.DT", function(ev, s) {
    if (settings === s && jqFilter[0] !== document.activeElement) {
      jqFilter.val(typeof previousSearch.search !== "function" ? previousSearch.search : "");
    }
  });
  return filter;
}, "f");
DataTable.feature.register("paging", function(settings, opts) {
  if (!settings.oFeatures.bPaginate) {
    return null;
  }
  opts = $2.extend({
    buttons: DataTable.ext.pager.numbers_length,
    type: settings.sPaginationType,
    boundaryNumbers: true,
    firstLast: true,
    previousNext: true,
    numbers: true
  }, opts);
  var host = $2("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append($2("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav));
  var draw = function() {
    _pagingDraw(settings, host.children(), opts);
  };
  settings.aoDrawCallback.push(draw);
  $2(settings.nTable).on("column-sizing.dt.DT", draw);
  return host;
}, "p");
function _pagingDynamic(opts) {
  var out = [];
  if (opts.numbers) {
    out.push("numbers");
  }
  if (opts.previousNext) {
    out.unshift("previous");
    out.push("next");
  }
  if (opts.firstLast) {
    out.unshift("first");
    out.push("last");
  }
  return out;
}
function _pagingDraw(settings, host, opts) {
  if (!settings._bInitComplete) {
    return;
  }
  var plugin2 = opts.type ? DataTable.ext.pager[opts.type] : _pagingDynamic, aria = settings.oLanguage.oAria.paginate || {}, start2 = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start2 / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = [], buttonEls = [], buttonsNested = plugin2(opts).map(function(val) {
    return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val;
  });
  buttons = buttons.concat.apply(buttons, buttonsNested);
  for (var i2 = 0;i2 < buttons.length; i2++) {
    var button = buttons[i2];
    var btnInfo = _pagingButtonInfo(settings, button, page, pages);
    var btn = _fnRenderer(settings, "pagingButton")(settings, button, btnInfo.display, btnInfo.active, btnInfo.disabled);
    var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
    $2(btn.clicker).attr({
      "aria-controls": settings.sTableId,
      "aria-disabled": btnInfo.disabled ? "true" : null,
      "aria-current": btnInfo.active ? "page" : null,
      "aria-label": ariaLabel,
      "data-dt-idx": button,
      tabIndex: btnInfo.disabled ? -1 : settings.iTabIndex && btn.clicker[0].nodeName.toLowerCase() !== "span" ? settings.iTabIndex : null
    });
    if (typeof button !== "number") {
      $2(btn.clicker).addClass(button);
    }
    _fnBindAction(btn.clicker, { action: button }, function(e) {
      e.preventDefault();
      _fnPageChange(settings, e.data.action, true);
    });
    buttonEls.push(btn.display);
  }
  var wrapped = _fnRenderer(settings, "pagingContainer")(settings, buttonEls);
  var activeEl = host.find(document.activeElement).data("dt-idx");
  host.empty().append(wrapped);
  if (activeEl !== undefined) {
    host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
  }
  if (buttonEls.length) {
    var outerHeight = $2(buttonEls[0]).outerHeight();
    if (opts.buttons > 1 && outerHeight > 0 && $2(host).height() >= outerHeight * 2 - 10) {
      _pagingDraw(settings, host, $2.extend({}, opts, { buttons: opts.buttons - 2 }));
    }
  }
}
function _pagingButtonInfo(settings, button, page, pages) {
  var lang = settings.oLanguage.oPaginate;
  var o = {
    display: "",
    active: false,
    disabled: false
  };
  switch (button) {
    case "ellipsis":
      o.display = "&#x2026;";
      break;
    case "first":
      o.display = lang.sFirst;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "previous":
      o.display = lang.sPrevious;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "next":
      o.display = lang.sNext;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    case "last":
      o.display = lang.sLast;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    default:
      if (typeof button === "number") {
        o.display = settings.fnFormatNumber(button + 1);
        if (page === button) {
          o.active = true;
        }
      }
      break;
  }
  return o;
}
function _pagingNumbers(page, pages, buttons, addFirstLast) {
  var numbers = [], half = Math.floor(buttons / 2), before = addFirstLast ? 2 : 1, after = addFirstLast ? 1 : 0;
  if (pages <= buttons) {
    numbers = _range(0, pages);
  } else if (buttons === 1) {
    numbers = [page];
  } else if (buttons === 3) {
    if (page <= 1) {
      numbers = [0, 1, "ellipsis"];
    } else if (page >= pages - 2) {
      numbers = _range(pages - 2, pages);
      numbers.unshift("ellipsis");
    } else {
      numbers = ["ellipsis", page, "ellipsis"];
    }
  } else if (page <= half) {
    numbers = _range(0, buttons - before);
    numbers.push("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
    }
  } else if (page >= pages - 1 - half) {
    numbers = _range(pages - (buttons - before), pages);
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.unshift(0);
    }
  } else {
    numbers = _range(page - half + before, page + half - after);
    numbers.push("ellipsis");
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
      numbers.unshift(0);
    }
  }
  return numbers;
}
var __lengthCounter = 0;
DataTable.feature.register("pageLength", function(settings, opts) {
  var features = settings.oFeatures;
  if (!features.bPaginate || !features.bLengthChange) {
    return null;
  }
  opts = $2.extend({
    menu: settings.aLengthMenu,
    text: settings.oLanguage.sLengthMenu
  }, opts);
  var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i2;
  if (Array.isArray(menu[0])) {
    lengths = menu[0];
    language = menu[1];
  } else {
    for (i2 = 0;i2 < menu.length; i2++) {
      if ($2.isPlainObject(menu[i2])) {
        lengths.push(menu[i2].value);
        language.push(menu[i2].label);
      } else {
        lengths.push(menu[i2]);
        language.push(menu[i2]);
      }
    }
  }
  var end = opts.text.match(/_MENU_$/);
  var start2 = opts.text.match(/^_MENU_/);
  var removed = opts.text.replace(/_MENU_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start2) {
    str = "_MENU_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_MENU_";
  }
  var tmpId = "tmp-" + +new Date;
  var div = $2("<div/>").addClass(classes.container).append(str.replace("_MENU_", '<span id="' + tmpId + '"></span>'));
  var textNodes = [];
  Array.prototype.slice.call(div.find("label")[0].childNodes).forEach(function(el) {
    if (el.nodeType === Node.TEXT_NODE) {
      textNodes.push({
        el,
        text: el.textContent
      });
    }
  });
  var updateEntries = function(len) {
    textNodes.forEach(function(node) {
      node.el.textContent = _fnMacros(settings, node.text, len);
    });
  };
  var select = $2("<select/>", {
    "aria-controls": tableId,
    class: classes.select
  });
  for (i2 = 0;i2 < lengths.length; i2++) {
    var label = settings.api.i18n("lengthLabels." + lengths[i2], null);
    if (label === null) {
      label = typeof language[i2] === "number" ? settings.fnFormatNumber(language[i2]) : language[i2];
    }
    select[0][i2] = new Option(label, lengths[i2]);
  }
  div.find("label").attr("for", "dt-length-" + __lengthCounter);
  select.attr("id", "dt-length-" + __lengthCounter);
  __lengthCounter++;
  div.find("#" + tmpId).replaceWith(select);
  $2("select", div).val(settings._iDisplayLength).on("change.DT", function() {
    _fnLengthChange(settings, $2(this).val());
    _fnDraw(settings);
  });
  $2(settings.nTable).on("length.dt.DT", function(e, s, len) {
    if (settings === s) {
      $2("select", div).val(len);
      updateEntries(len);
    }
  });
  updateEntries(settings._iDisplayLength);
  return div;
}, "l");
$2.fn.dataTable = DataTable;
DataTable.$ = $2;
$2.fn.dataTableSettings = DataTable.settings;
$2.fn.dataTableExt = DataTable.ext;
$2.fn.DataTable = function(opts) {
  return $2(this).dataTable(opts).api();
};
$2.each(DataTable, function(prop, val) {
  $2.fn.DataTable[prop] = val;
});
var dataTables_default = DataTable;

// src/js/app.js
var import_select2 = __toESM(require_select2(), 1);

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date,
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === undefined) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce2(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== undefined)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error2) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1000;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === undefined ? defaults : _b, _c = _a.l10n, l10n = _c === undefined ? english : _c, _d = _a.isMobile, isMobile = _d === undefined ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i2, arr) {
      return formats[c] && arr[i2 - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === undefined ? defaults : _b, _c = _a.l10n, l10n = _c === undefined ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== undefined)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = new Date;
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = undefined, ops = [];
        for (var i2 = 0, matchIndex = 0, regexStr = "";i2 < format.length; i2++) {
          var token = format[i2];
          var isBackSlash = token === "\\";
          var escaped = format[i2 - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var { fn, val } = _a2;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : undefined;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === undefined) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1;_i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args;_a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i2 = 1, n = arguments.length;i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s = 0, i2 = 0, il = arguments.length;i2 < il; i2++)
    s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0;i2 < il; i2++)
    for (var a = arguments[i2], j = 0, jl = a.length;j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind3;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear2;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set3;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === undefined) {
          month = self.currentMonth;
        }
        if (yr === undefined) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === undefined ? undefined : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || compareDates(new Date, self.config.minDate) >= 0 ? new Date : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== undefined)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== undefined)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind3(element2, event, handler4, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind3(element2, ev, handler4, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind3(el, event, handler4, options);
      });
    element2.addEventListener(event, handler4, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler4, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind3(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce2(onResize, 50);
    self._debouncedChange = debounce2(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind3(self.daysContainer, "mouseover", function(e) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind3(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== undefined) {
      bind3(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind3(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined)
      bind3(window.document, "touchstart", documentClick);
    else
      bind3(window.document, "mousedown", documentClick);
    bind3(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind3(self._input, "focus", self.open);
      bind3(self._input, "click", self.open);
    }
    if (self.daysContainer !== undefined) {
      bind3(self.monthNav, "click", onMonthNavClick);
      bind3(self.monthNav, ["keyup", "increment"], onYearInput);
      bind3(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function(e) {
        return getEventTarget(e).select();
      };
      bind3(self.timeContainer, ["increment"], updateTime);
      bind3(self.timeContainer, "blur", updateTime, { capture: true });
      bind3(self.timeContainer, "click", timeIncrement);
      bind3([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined)
        bind3(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== undefined) {
        bind3(self.amPM, "click", function(e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind3(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== undefined)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i2) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i2;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i2 % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth;m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i2 = startIndex;i2 != endIndex; i2 += delta) {
        var c = month.children[i2];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth;m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i2 = startIndex;i2 >= 0 && i2 < numMonthDays && i2 != (delta > 0 ? numMonthDays : -1); i2 += loopDelta) {
        var c = month.children[i2];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i2) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (;dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1;dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1;dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i2 = 0;i2 < self.config.showMonths; i2++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i2);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i2 = 0;i2 < 12; i2++) {
      if (!shouldBuildMonth(i2))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i2).getMonth().toString();
      month.textContent = monthToStr(i2, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i2) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind3(self.monthsDropdownContainer, "change", function(e) {
        var target = getEventTarget(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths;m--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i2 = self.config.showMonths;i2--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i2 = self.config.showMonths;i2--; ) {
      self.weekdayContainer.children[i2].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + weekdays.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === undefined) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear2(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === undefined) {
      triggerChangeEvent = true;
    }
    if (toInitial === undefined) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== undefined)
      self.altInput.value = "";
    if (self.mobileInput !== undefined)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== undefined)
      triggerEvent("onDestroy");
    for (var i2 = self._handlers.length;i2--; ) {
      self._handlers[i2].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === undefined) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === undefined)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== undefined ? _a : self.config.disable;
    for (var i2 = 0, d = undefined;i2 < array.length; i2++) {
      d = array[i2];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== undefined)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(undefined, delta_1);
              else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x) {
              return x;
            });
            var i2 = elems.indexOf(eventTarget);
            if (i2 !== -1) {
              var target = elems[i2 + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === undefined) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate;t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== undefined) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === undefined) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i2 = 0;i2 < boolOpts.length; i2++)
      self.config[boolOpts[i2]] = self.config[boolOpts[i2]] === true || self.config[boolOpts[i2]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== undefined;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i2 = 0;i2 < self.config.plugins.length; i2++) {
      var pluginConf = self.config.plugins[i2](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === undefined)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i2 = 0;i2 < document.styleSheets.length; i2++) {
      var sheet = document.styleSheets[i2];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (t === undefined)
      return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined)
      self.hourElement !== undefined && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind3(self._input, "focus", self.open);
          bind3(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set3(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== undefined)
          CALLBACKS[key].forEach(function(x) {
            return x();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined)
        CALLBACKS[option].forEach(function(x) {
          return x();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a, b) {
        return a.getTime() - b.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === undefined) {
      triggerChange2 = false;
    }
    if (format === undefined) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };
      return rule;
    }).filter(function(x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date;
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}
    bind3(self.mobileInput, "change", function(e) {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true)
      return self.close();
    self.open(e);
  }
  function triggerEvent(event, data2) {
    if (self.config === undefined)
      return;
    var hooks = self.config[event];
    if (hooks !== undefined && hooks.length > 0) {
      for (var i2 = 0;hooks[i2] && i2 < hooks.length; i2++)
        hooks[i2](self.selectedDates, self.input.value, self, data2);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i2 = 0;i2 < self.selectedDates.length; i2++) {
      var selectedDate = self.selectedDates[i2];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i2;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i2) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i2);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i2].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d, i2, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i2;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === undefined) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(undefined, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i2 = 0;i2 < nodes.length; i2++) {
    var node = nodes[i2];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();
        node._flatpickr = undefined;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// src/js/app.js
window.Alpine = module_default;
window.$ = window.jQuery = jquery_module_default;
window.DataTable = dataTables_default;
window.flatpickr = esm_default;
module_default.start();
