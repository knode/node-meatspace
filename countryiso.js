;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var process=require("__browserify_process");var fs = require('fs')
  , _ =
    { object: require('lodash.zipobject')
    , map: require('lodash.map')
    , invert: require('lodash.invert')
    }
  , f = "AFGHANISTAN;AF\nÅLAND ISLANDS;AX\nALBANIA;AL\nALGERIA;DZ\nAMERICAN SAMOA;AS\nANDORRA;AD\nANGOLA;AO\nANGUILLA;AI\nANTARCTICA;AQ\nANTIGUA AND BARBUDA;AG\nARGENTINA;AR\nARMENIA;AM\nARUBA;AW\nAUSTRALIA;AU\nAUSTRIA;AT\nAZERBAIJAN;AZ\nBAHAMAS;BS\nBAHRAIN;BH\nBANGLADESH;BD\nBARBADOS;BB\nBELARUS;BY\nBELGIUM;BE\nBELIZE;BZ\nBENIN;BJ\nBERMUDA;BM\nBHUTAN;BT\nBOLIVIA, PLURINATIONAL STATE OF;BO\nBONAIRE, SINT EUSTATIUS AND SABA;BQ\nBOSNIA AND HERZEGOVINA;BA\nBOTSWANA;BW\nBOUVET ISLAND;BV\nBRAZIL;BR\nBRITISH INDIAN OCEAN TERRITORY;IO\nBRUNEI DARUSSALAM;BN\nBULGARIA;BG\nBURKINA FASO;BF\nBURUNDI;BI\nCAMBODIA;KH\nCAMEROON;CM\nCANADA;CA\nCAPE VERDE;CV\nCAYMAN ISLANDS;KY\nCENTRAL AFRICAN REPUBLIC;CF\nCHAD;TD\nCHILE;CL\nCHINA;CN\nCHRISTMAS ISLAND;CX\nCOCOS (KEELING) ISLANDS;CC\nCOLOMBIA;CO\nCOMOROS;KM\nCONGO;CG\nCONGO, THE DEMOCRATIC REPUBLIC OF THE;CD\nCOOK ISLANDS;CK\nCOSTA RICA;CR\nCÔTE D'IVOIRE;CI\nCROATIA;HR\nCUBA;CU\nCURAÇAO;CW\nCYPRUS;CY\nCZECH REPUBLIC;CZ\nDENMARK;DK\nDJIBOUTI;DJ\nDOMINICA;DM\nDOMINICAN REPUBLIC;DO\nECUADOR;EC\nEGYPT;EG\nEL SALVADOR;SV\nEQUATORIAL GUINEA;GQ\nERITREA;ER\nESTONIA;EE\nETHIOPIA;ET\nFALKLAND ISLANDS (MALVINAS);FK\nFAROE ISLANDS;FO\nFIJI;FJ\nFINLAND;FI\nFRANCE;FR\nFRENCH GUIANA;GF\nFRENCH POLYNESIA;PF\nFRENCH SOUTHERN TERRITORIES;TF\nGABON;GA\nGAMBIA;GM\nGEORGIA;GE\nGERMANY;DE\nGHANA;GH\nGIBRALTAR;GI\nGREECE;GR\nGREENLAND;GL\nGRENADA;GD\nGUADELOUPE;GP\nGUAM;GU\nGUATEMALA;GT\nGUERNSEY;GG\nGUINEA;GN\nGUINEA-BISSAU;GW\nGUYANA;GY\nHAITI;HT\nHEARD ISLAND AND MCDONALD ISLANDS;HM\nHOLY SEE (VATICAN CITY STATE);VA\nHONDURAS;HN\nHONG KONG;HK\nHUNGARY;HU\nICELAND;IS\nINDIA;IN\nINDONESIA;ID\nIRAN, ISLAMIC REPUBLIC OF;IR\nIRAQ;IQ\nIRELAND;IE\nISLE OF MAN;IM\nISRAEL;IL\nITALY;IT\nJAMAICA;JM\nJAPAN;JP\nJERSEY;JE\nJORDAN;JO\nKAZAKHSTAN;KZ\nKENYA;KE\nKIRIBATI;KI\nKOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF;KP\nKOREA, REPUBLIC OF;KR\nKUWAIT;KW\nKYRGYZSTAN;KG\nLAO PEOPLE'S DEMOCRATIC REPUBLIC;LA\nLATVIA;LV\nLEBANON;LB\nLESOTHO;LS\nLIBERIA;LR\nLIBYA;LY\nLIECHTENSTEIN;LI\nLITHUANIA;LT\nLUXEMBOURG;LU\nMACAO;MO\nMACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF;MK\nMADAGASCAR;MG\nMALAWI;MW\nMALAYSIA;MY\nMALDIVES;MV\nMALI;ML\nMALTA;MT\nMARSHALL ISLANDS;MH\nMARTINIQUE;MQ\nMAURITANIA;MR\nMAURITIUS;MU\nMAYOTTE;YT\nMEXICO;MX\nMICRONESIA, FEDERATED STATES OF;FM\nMOLDOVA, REPUBLIC OF;MD\nMONACO;MC\nMONGOLIA;MN\nMONTENEGRO;ME\nMONTSERRAT;MS\nMOROCCO;MA\nMOZAMBIQUE;MZ\nMYANMAR;MM\nNAMIBIA;NA\nNAURU;NR\nNEPAL;NP\nNETHERLANDS;NL\nNEW CALEDONIA;NC\nNEW ZEALAND;NZ\nNICARAGUA;NI\nNIGER;NE\nNIGERIA;NG\nNIUE;NU\nNORFOLK ISLAND;NF\nNORTHERN MARIANA ISLANDS;MP\nNORWAY;NO\nOMAN;OM\nPAKISTAN;PK\nPALAU;PW\nPALESTINE, STATE OF;PS\nPANAMA;PA\nPAPUA NEW GUINEA;PG\nPARAGUAY;PY\nPERU;PE\nPHILIPPINES;PH\nPITCAIRN;PN\nPOLAND;PL\nPORTUGAL;PT\nPUERTO RICO;PR\nQATAR;QA\nRÉUNION;RE\nROMANIA;RO\nRUSSIAN FEDERATION;RU\nRWANDA;RW\nSAINT BARTHÉLEMY;BL\nSAINT HELENA, ASCENSION AND TRISTAN DA CUNHA;SH\nSAINT KITTS AND NEVIS;KN\nSAINT LUCIA;LC\nSAINT MARTIN (FRENCH PART);MF\nSAINT PIERRE AND MIQUELON;PM\nSAINT VINCENT AND THE GRENADINES;VC\nSAMOA;WS\nSAN MARINO;SM\nSAO TOME AND PRINCIPE;ST\nSAUDI ARABIA;SA\nSENEGAL;SN\nSERBIA;RS\nSEYCHELLES;SC\nSIERRA LEONE;SL\nSINGAPORE;SG\nSINT MAARTEN (DUTCH PART);SX\nSLOVAKIA;SK\nSLOVENIA;SI\nSOLOMON ISLANDS;SB\nSOMALIA;SO\nSOUTH AFRICA;ZA\nSOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS;GS\nSOUTH SUDAN;SS\nSPAIN;ES\nSRI LANKA;LK\nSUDAN;SD\nSURINAME;SR\nSVALBARD AND JAN MAYEN;SJ\nSWAZILAND;SZ\nSWEDEN;SE\nSWITZERLAND;CH\nSYRIAN ARAB REPUBLIC;SY\nTAIWAN, PROVINCE OF CHINA;TW\nTAJIKISTAN;TJ\nTANZANIA, UNITED REPUBLIC OF;TZ\nTHAILAND;TH\nTIMOR-LESTE;TL\nTOGO;TG\nTOKELAU;TK\nTONGA;TO\nTRINIDAD AND TOBAGO;TT\nTUNISIA;TN\nTURKEY;TR\nTURKMENISTAN;TM\nTURKS AND CAICOS ISLANDS;TC\nTUVALU;TV\nUGANDA;UG\nUKRAINE;UA\nUNITED ARAB EMIRATES;AE\nUNITED KINGDOM;GB\nUNITED STATES;US\nUNITED STATES MINOR OUTLYING ISLANDS;UM\nURUGUAY;UY\nUZBEKISTAN;UZ\nVANUATU;VU\nVENEZUELA, BOLIVARIAN REPUBLIC OF;VE\nVIET NAM;VN\nVIRGIN ISLANDS, BRITISH;VG\nVIRGIN ISLANDS, U.S.;VI\nWALLIS AND FUTUNA;WF\nWESTERN SAHARA;EH\nYEMEN;YE\nZAMBIA;ZM\nZIMBABWE;ZW".toString()
  ;

var iso = _.object(_.map(f.split('\n'), function (line) { return line.split(';') }))

// Additions
iso['USA'] = 'us'
iso['UK'] = 'gb'

var riso = _.invert(iso)
  ;

function country (str, url) {
  if (!url) url = 'https://raw.github.com/mikeal/countryico/master/images/'
  if (url[url.length -1] !== '/') url += '/'
  if (str.indexOf(',')) str = str.slice(str.lastIndexOf(',')+1)
  if (str[0] === ' ') str = str.slice(1)
  str = str.toUpperCase()
  if (iso[str]) return url + iso[str].toLowerCase() + '.png'
  if (riso[str]) return url + str.toLowerCase() + '.png'
  return false
}

module.exports = country

if (process.browser) window.countryiso = country
},{"__browserify_process":3,"fs":2,"lodash.invert":6,"lodash.map":10,"lodash.zipobject":31}],2:[function(require,module,exports){

// not implemented
// The reason for having an empty file and not throwing is to allow
// untraditional implementation of this module.

},{}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],4:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

module.exports = objectTypes;

},{}],5:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(objectProto.valueOf)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
);

module.exports = reNative;

},{}],6:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('lodash.keys');

/**
 * Creates an object composed of the inverted keys and values of the given object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the created inverted object.
 * @example
 *
 *  _.invert({ 'first': 'moe', 'second': 'larry' });
 * // => { 'moe': 'first', 'larry': 'second' }
 */
function invert(object) {
  var index = -1,
      props = keys(object),
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index];
    result[object[key]] = key;
  }
  return result;
}

module.exports = invert;

},{"lodash.keys":8}],7:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = require('lodash._objecttypes');

/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && objectTypes[typeof value]);
}

module.exports = isObject;

},{"lodash._objecttypes":4}],8:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('lodash.isobject'),
    reNative = require('lodash._renative'),
    shimKeys = require('lodash._shimkeys');

/** Used for native method references */
var objectProto = Object.prototype;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys;

/**
 * Creates an array composed of the own enumerable property names of an object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  if (!isObject(object)) {
    return [];
  }
  return nativeKeys(object);
};

module.exports = keys;

},{"lodash._renative":5,"lodash._shimkeys":9,"lodash.isobject":7}],9:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = require('lodash._objecttypes');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 */
var shimKeys = function(object) {
  var index, iterable = object, result = [];
  if (!iterable) return result;
  if (!(objectTypes[typeof object])) return result;
    for (index in iterable) {
      if (hasOwnProperty.call(iterable, index)) {
        result.push(index);
      }
    }
  return result
};

module.exports = shimKeys;

},{"lodash._objecttypes":4}],10:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createCallback = require('lodash.createcallback'),
    forOwn = require('lodash.forown');

/**
 * Creates an array of values by running each element in the collection
 * through the callback. The callback is bound to `thisArg` and invoked with
 * three arguments; (value, index|key, collection).
 *
 * If a property name is provided for `callback` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is provided for `callback` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias collect
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [callback=identity] The function called
 *  per iteration. If a property name or object is provided it will be used
 *  to create a "_.pluck" or "_.where" style callback, respectively.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of the results of each `callback` execution.
 * @example
 *
 * _.map([1, 2, 3], function(num) { return num * 3; });
 * // => [3, 6, 9]
 *
 * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
 * // => [3, 6, 9] (property order is not guaranteed across environments)
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.map(stooges, 'name');
 * // => ['moe', 'larry']
 */
function map(collection, callback, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0;

  callback = createCallback(callback, thisArg, 3);
  if (typeof length == 'number') {
    var result = Array(length);
    while (++index < length) {
      result[index] = callback(collection[index], index, collection);
    }
  } else {
    result = [];
    forOwn(collection, function(value, key, collection) {
      result[++index] = callback(value, key, collection);
    });
  }
  return result;
}

module.exports = map;

},{"lodash.createcallback":23,"lodash.forown":29}],11:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var bind = require('lodash.bind'),
    identity = require('lodash.identity'),
    setBindData = require('lodash._setbinddata'),
    support = require('lodash.support');

/** Used to detected named functions */
var reFuncName = /^function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  // exit early if there is no `thisArg`
  if (typeof thisArg == 'undefined') {
    return func;
  }
  var bindData = func.__bindData__ || (support.funcNames && !func.name);
  if (typeof bindData == 'undefined') {
    var source = reThis && fnToString.call(func);
    if (!support.funcNames && source && !reFuncName.test(source)) {
      bindData = true;
    }
    if (support.funcNames || !bindData) {
      // checks if `func` references the `this` keyword and stores the result
      bindData = !support.funcDecomp || reThis.test(source);
      setBindData(func, bindData);
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData !== true && (bindData && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return bind(func, thisArg);
}

module.exports = baseCreateCallback;

},{"lodash._setbinddata":13,"lodash.bind":17,"lodash.identity":20,"lodash.support":21}],12:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @private
 */
function noop() {
  // no operation performed
}

module.exports = noop;

},{}],13:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var getObject = require('lodash._getobject'),
    noop = require('lodash._noop'),
    reNative = require('lodash._renative'),
    releaseObject = require('lodash._releaseobject');

/** Used for native method references */
var objectProto = Object.prototype;

var defineProperty = (function() {
  try {
    var o = {},
        func = reNative.test(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {*} value The value to set.
 */
var setBindData = !defineProperty ? noop : function(func, value) {
  var descriptor = getObject();
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
  releaseObject(descriptor);
};

module.exports = setBindData;

},{"lodash._getobject":14,"lodash._noop":12,"lodash._releaseobject":16,"lodash._renative":5}],14:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectPool = require('lodash._objectpool');

/**
 * Gets an object from the object pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Object} The object from the pool.
 */
function getObject() {
  return objectPool.pop() || {
    'array': null,
    'cache': null,
    'configurable': false,
    'criteria': null,
    'enumerable': false,
    'false': false,
    'index': 0,
    'leading': false,
    'maxWait': 0,
    'null': false,
    'number': null,
    'object': null,
    'push': null,
    'string': null,
    'trailing': false,
    'true': false,
    'undefined': false,
    'value': null,
    'writable': false
  };
}

module.exports = getObject;

},{"lodash._objectpool":15}],15:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to pool arrays and objects used internally */
var objectPool = [];

module.exports = objectPool;

},{}],16:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var maxPoolSize = require('lodash._maxpoolsize'),
    objectPool = require('lodash._objectpool');

/**
 * Releases the given object back to the object pool.
 *
 * @private
 * @param {Object} [object] The object to release.
 */
function releaseObject(object) {
  var cache = object.cache;
  if (cache) {
    releaseObject(cache);
  }
  object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
  if (objectPool.length < maxPoolSize) {
    objectPool.push(object);
  }
}

module.exports = releaseObject;

},{"lodash._maxpoolsize":22,"lodash._objectpool":15}],17:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createBound = require('lodash._createbound'),
    reNative = require('lodash._renative');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeSlice = arrayRef.slice;

/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'moe' }, 'hi');
 * func();
 * // => 'hi moe'
 */
function bind(func, thisArg) {
  return arguments.length > 2
    ? createBound(func, 17, nativeSlice.call(arguments, 2), null, thisArg)
    : createBound(func, 1, null, null, thisArg);
}

module.exports = bind;

},{"lodash._createbound":18,"lodash._renative":5}],18:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createObject = require('lodash._createobject'),
    isFunction = require('lodash.isfunction'),
    isObject = require('lodash.isobject'),
    reNative = require('lodash._renative'),
    setBindData = require('lodash._setbinddata'),
    support = require('lodash.support');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var push = arrayRef.push,
    toString = objectProto.toString,
    unshift = arrayRef.unshift;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind,
    nativeSlice = arrayRef.slice;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new bound function.
 */
function createBound(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32,
      key = func;

  if (!isBindKey && !isFunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData) {
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    if (isPartial) {
      push.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    if (isPartialRight) {
      push.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    bindData[1] |= bitmask;
    return createBound.apply(null, bindData);
  }
  // use `Function#bind` if it exists and is fast
  // (in V8 `Function#bind` is slower except when partially applied)
  if (isBind && !(isBindKey || isCurry || isPartialRight) &&
      (support.fastBind || (nativeBind && isPartial))) {
    if (isPartial) {
      var args = [thisArg];
      push.apply(args, partialArgs);
    }
    var bound = isPartial
      ? nativeBind.apply(func, args)
      : nativeBind.call(func, thisArg);
  }
  else {
    bound = function() {
      // `Function#bind` spec
      // http://es5.github.io/#x15.3.4.5
      var args = arguments,
          thisBinding = isBind ? thisArg : this;

      if (isCurry || isPartial || isPartialRight) {
        args = nativeSlice.call(args);
        if (isPartial) {
          unshift.apply(args, partialArgs);
        }
        if (isPartialRight) {
          push.apply(args, partialRightArgs);
        }
        if (isCurry && args.length < arity) {
          bitmask |= 16 & ~32;
          return createBound(func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity);
        }
      }
      if (isBindKey) {
        func = thisBinding[key];
      }
      if (this instanceof bound) {
        // ensure `new bound` is an instance of `func`
        thisBinding = createObject(func.prototype);

        // mimic the constructor's `return` behavior
        // http://es5.github.io/#x13.2.2
        var result = func.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisBinding, args);
    };
  }
  setBindData(bound, nativeSlice.call(arguments));
  return bound;
}

module.exports = createBound;

},{"lodash._createobject":19,"lodash._renative":5,"lodash._setbinddata":13,"lodash.isfunction":30,"lodash.isobject":7,"lodash.support":21}],19:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('lodash.isobject'),
    noop = require('lodash._noop'),
    reNative = require('lodash._renative');

/** Used for native method references */
var objectProto = Object.prototype;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate;

/**
 * Creates a new object with the specified `prototype`.
 *
 * @private
 * @param {Object} prototype The prototype object.
 * @returns {Object} Returns the new object.
 */
function createObject(prototype) {
  return isObject(prototype) ? nativeCreate(prototype) : {};
}

module.exports = createObject;

},{"lodash._noop":12,"lodash._renative":5,"lodash.isobject":7}],20:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var moe = { 'name': 'moe' };
 * moe === _.identity(moe);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],21:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var reNative = require('lodash._renative');

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var toString = objectProto.toString;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind;

/** Detect various environments */
var isIeOpera = reNative.test(global.attachEvent),
    isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if `Function#bind` exists and is inferred to be fast (all but V8).
 *
 * @memberOf _.support
 * @type boolean
 */
support.fastBind = nativeBind && !isV8;

/**
 * Detect if functions can be decompiled by `Function#toString`
 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcDecomp = !reNative.test(global.WinRTError) && reThis.test(function() { return this; });

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

module.exports = support;

},{"lodash._renative":5}],22:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used as the max size of the `arrayPool` and `objectPool` */
var maxPoolSize = 40;

module.exports = maxPoolSize;

},{}],23:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('lodash._basecreatecallback'),
    baseIsEqual = require('lodash._baseisequal'),
    isObject = require('lodash.isobject'),
    keys = require('lodash.keys');

/**
 * Produces a callback bound to an optional `thisArg`. If `func` is a property
 * name the created callback will return the property value for a given element.
 * If `func` is an object the created callback will return `true` for elements
 * that contain the equivalent object properties, otherwise it will return `false`.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * // wrap to create custom callback shorthands
 * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
 *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
 *   return !match ? func(callback, thisArg) : function(object) {
 *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
 *   };
 * });
 *
 * _.filter(stooges, 'age__gt45');
 * // => [{ 'name': 'larry', 'age': 50 }]
 */
function createCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (func == null || type == 'function') {
    return baseCreateCallback(func, thisArg, argCount);
  }
  // handle "_.pluck" style callback shorthands
  if (type != 'object') {
    return function(object) {
      return object[func];
    };
  }
  var props = keys(func),
      key = props[0],
      a = func[key];

  // handle "_.where" style callback shorthands
  if (props.length == 1 && a === a && !isObject(a)) {
    // fast path the common case of providing an object with a single
    // property containing a primitive value
    return function(object) {
      var b = object[key];
      return a === b && (a !== 0 || (1 / a == 1 / b));
    };
  }
  return function(object) {
    var length = props.length,
        result = false;

    while (length--) {
      if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
        break;
      }
    }
    return result;
  };
}

module.exports = createCallback;

},{"lodash._basecreatecallback":11,"lodash._baseisequal":24,"lodash.isobject":7,"lodash.keys":8}],24:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var forIn = require('lodash.forin'),
    getArray = require('lodash._getarray'),
    isFunction = require('lodash.isfunction'),
    objectTypes = require('lodash._objecttypes'),
    releaseArray = require('lodash._releasearray');

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]',
    arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty,
    toString = objectProto.toString;

/**
 * The base implementation of `_.isEqual`, without support for `thisArg` binding,
 * that allows partial "_.where" style comparisons.
 *
 * @private
 * @param {*} a The value to compare.
 * @param {*} b The other value to compare.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `a` objects.
 * @param {Array} [stackB=[]] Tracks traversed `b` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
  // used to indicate that when comparing objects, `a` has at least the properties of `b`
  if (callback) {
    var result = callback(a, b);
    if (typeof result != 'undefined') {
      return !!result;
    }
  }
  // exit early for identical values
  if (a === b) {
    // treat `+0` vs. `-0` as not equal
    return a !== 0 || (1 / a == 1 / b);
  }
  var type = typeof a,
      otherType = typeof b;

  // exit early for unlike primitive values
  if (a === a &&
      !(a && objectTypes[type]) &&
      !(b && objectTypes[otherType])) {
    return false;
  }
  // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
  // http://es5.github.io/#x15.3.4.4
  if (a == null || b == null) {
    return a === b;
  }
  // compare [[Class]] names
  var className = toString.call(a),
      otherClass = toString.call(b);

  if (className == argsClass) {
    className = objectClass;
  }
  if (otherClass == argsClass) {
    otherClass = objectClass;
  }
  if (className != otherClass) {
    return false;
  }
  switch (className) {
    case boolClass:
    case dateClass:
      // coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
      return +a == +b;

    case numberClass:
      // treat `NaN` vs. `NaN` as equal
      return (a != +a)
        ? b != +b
        // but treat `+0` vs. `-0` as not equal
        : (a == 0 ? (1 / a == 1 / b) : a == +b);

    case regexpClass:
    case stringClass:
      // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
      // treat string primitives and their corresponding object instances as equal
      return a == String(b);
  }
  var isArr = className == arrayClass;
  if (!isArr) {
    // unwrap any `lodash` wrapped values
    if (hasOwnProperty.call(a, '__wrapped__ ') || hasOwnProperty.call(b, '__wrapped__')) {
      return baseIsEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, isWhere, stackA, stackB);
    }
    // exit for functions and DOM nodes
    if (className != objectClass) {
      return false;
    }
    // in older versions of Opera, `arguments` objects have `Array` constructors
    var ctorA = a.constructor,
        ctorB = b.constructor;

    // non `Object` object instances with different constructors are not equal
    if (ctorA != ctorB && !(
          isFunction(ctorA) && ctorA instanceof ctorA &&
          isFunction(ctorB) && ctorB instanceof ctorB
        )) {
      return false;
    }
  }
  // assume cyclic structures are equal
  // the algorithm for detecting cyclic structures is adapted from ES 5.1
  // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
  var initedStack = !stackA;
  stackA || (stackA = getArray());
  stackB || (stackB = getArray());

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == a) {
      return stackB[length] == b;
    }
  }
  var size = 0;
  result = true;

  // add `a` and `b` to the stack of traversed objects
  stackA.push(a);
  stackB.push(b);

  // recursively compare objects and arrays (susceptible to call stack limits)
  if (isArr) {
    length = a.length;
    size = b.length;

    // compare lengths to determine if a deep comparison is necessary
    result = size == a.length;
    if (!result && !isWhere) {
      return result;
    }
    // deep compare the contents, ignoring non-numeric properties
    while (size--) {
      var index = length,
          value = b[size];

      if (isWhere) {
        while (index--) {
          if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
            break;
          }
        }
      } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
        break;
      }
    }
    return result;
  }
  // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
  // which, in this case, is more costly
  forIn(b, function(value, key, b) {
    if (hasOwnProperty.call(b, key)) {
      // count the number of properties.
      size++;
      // deep compare each property value.
      return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
    }
  });

  if (result && !isWhere) {
    // ensure both objects have the same number of properties
    forIn(a, function(value, key, a) {
      if (hasOwnProperty.call(a, key)) {
        // `size` will be `-1` if `a` has more properties than `b`
        return (result = --size > -1);
      }
    });
  }
  if (initedStack) {
    releaseArray(stackA);
    releaseArray(stackB);
  }
  return result;
}

module.exports = baseIsEqual;

},{"lodash._getarray":26,"lodash._objecttypes":4,"lodash._releasearray":27,"lodash.forin":28,"lodash.isfunction":30}],25:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to pool arrays and objects used internally */
var arrayPool = [];

module.exports = arrayPool;

},{}],26:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayPool = require('lodash._arraypool');

/**
 * Gets an array from the array pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Array} The array from the pool.
 */
function getArray() {
  return arrayPool.pop() || [];
}

module.exports = getArray;

},{"lodash._arraypool":25}],27:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayPool = require('lodash._arraypool'),
    maxPoolSize = require('lodash._maxpoolsize');

/**
 * Releases the given array back to the array pool.
 *
 * @private
 * @param {Array} [array] The array to release.
 */
function releaseArray(array) {
  array.length = 0;
  if (arrayPool.length < maxPoolSize) {
    arrayPool.push(array);
  }
}

module.exports = releaseArray;

},{"lodash._arraypool":25,"lodash._maxpoolsize":22}],28:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('lodash._basecreatecallback'),
    objectTypes = require('lodash._objecttypes');

/**
 * Iterates over own and inherited enumerable properties of an object,
 * executing the callback for each property. The callback is bound to `thisArg`
 * and invoked with three arguments; (value, key, object). Callbacks may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Dog(name) {
 *   this.name = name;
 * }
 *
 * Dog.prototype.bark = function() {
 *   console.log('Woof, woof!');
 * };
 *
 * _.forIn(new Dog('Dagny'), function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'bark' and 'name' (property order is not guaranteed across environments)
 */
var forIn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!objectTypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    for (index in iterable) {
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

module.exports = forIn;

},{"lodash._basecreatecallback":11,"lodash._objecttypes":4}],29:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('lodash._basecreatecallback'),
    keys = require('lodash.keys'),
    objectTypes = require('lodash._objecttypes');

/**
 * Iterates over own enumerable properties of an object, executing the callback
 * for each property. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, key, object). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
 *   console.log(key);
 * });
 * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
 */
var forOwn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!objectTypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    var ownIndex = -1,
        ownProps = objectTypes[typeof iterable] && keys(iterable),
        length = ownProps ? ownProps.length : 0;

    while (++ownIndex < length) {
      index = ownProps[ownIndex];
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

module.exports = forOwn;

},{"lodash._basecreatecallback":11,"lodash._objecttypes":4,"lodash.keys":8}],30:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

module.exports = isFunction;

},{}],31:[function(require,module,exports){
/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Creates an object composed from arrays of `keys` and `values`. Provide
 * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
 * or two arrays, one of `keys` and one of corresponding `values`.
 *
 * @static
 * @memberOf _
 * @alias object
 * @category Arrays
 * @param {Array} keys The array of keys.
 * @param {Array} [values=[]] The array of values.
 * @returns {Object} Returns an object composed of the given keys and
 *  corresponding values.
 * @example
 *
 * _.zipObject(['moe', 'larry'], [30, 40]);
 * // => { 'moe': 30, 'larry': 40 }
 */
function zipObject(keys, values) {
  var index = -1,
      length = keys ? keys.length : 0,
      result = {};

  while (++index < length) {
    var key = keys[index];
    if (values) {
      result[key] = values[index];
    } else if (key) {
      result[key[0]] = key[1];
    }
  }
  return result;
}

module.exports = zipObject;

},{}]},{},[1])
;