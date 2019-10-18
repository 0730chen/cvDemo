// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log('我准备手写Jquery'); //对象化

window.dom = {
  //创建一个节点 document.createElement
  //创建一个div包裹这个多节点内容 
  //使用一个div包裹住标签内容，将字符串添加到div中，就会变成标签
  //template存放任意元素  但是不能通过children来获得子元素 使用content。firstchildren获得子元素
  //传入一个标签，创建这个传入的标签
  create: function create(tag) {
    var container = document.createElement('template');
    container.innerHTML = tag.trim(); //转换空格

    return container.content.firstChild;
  },
  //after 在后面新增一个节点
  //传入旧节点和需要新增的节点 nextSibling是紧跟node2的剩余节点
  //现在只有 nodeinsertbefore(新节点，参考节点) ,增加一个节点，就是找到他父节点，nextSibling属性返回一个紧跟node之后的一个节点，然后使用insertBefore插入这个之前
  //新增一个弟弟
  after: function after(node, node2) {
    // console.log(node.parentNode,node.nextSibling)
    var newNode = node.parentNode.insertBefore(node2, node.nextSibling);
    return newNode;
  },
  //操作之前插入和之后插入，都是需要在父节点上插入
  //新增一个哥哥
  before: function before(node, node2) {
    var newNode = node.parentNode.insertBefore(node2, node);
    return newNode;
  },
  //新增一个子节点
  append: function append(parent, node) {
    var newNode = parent.appendChild(node);
    return newNode;
  },
  //在两个标签中添加一个标签
  wrap: function wrap(node, parent) {
    dom.before(node, parent); //将parent放到node前面

    dom.append(parent, node); //然后在将node放到paret里面  这样parent就是一个父节点了
  },
  //删除一个节点
  //找到他的父节点，然后父节点删除子节点
  remove: function remove(node) {
    var newNode = node.parent.removeChildren(node);
    return node;
  },
  //删除节点所有儿子
  empt: function empt(node) {
    var array = []; //获取删除全部的标签

    var childrenNode = node.childrenNode;
    x = node.firstChild;

    while (x) {
      var removeNode = dom.remove(node, firstChild);
      arr.push(removeNode);
      x = node.firstChild;
    }

    return array; //返回所有移除的对象 
  },
  //改 attribute缩写  使用setAttribute
  //根据参数个数，写不同的代码功能，则是重载
  attr: function attr(node, name, value) {
    //想设置
    if (arguments.length === 3) {
      return node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  //修改给定标签的文本内容
  //获取和设置
  text: function text(node, string) {
    if (arguments.length === 1) {
      return node.innerHTML;
    } //这是获取


    if (arguments.length === 2) {
      //则s是设置s
      //适配网页
      console.log('innerHTML' in node);
      var flag = 'innerHTML' in node; //使用？ ：表达式 ，如果只有两种条件判断的

      return flag ? node.innerHTML = string : node.textContent = string;
    } // node.innerHTML = string  //IE的方法
    // node.textContent = string

  },
  //改style
  //遍历对象key，给node传递
  style: function style(node, name, value) {
    if (arguments.length === 3) {
      //要写
      node.style[name] = value;
    } else if (arguments.length === 2) {
      //要获取
      //判断第二个参数的类型
      if (_typeof(name) === String) {
        return node.string[name];
      } else if (name instanceof Object) {
        for (var key in name) {
          node.style[key] = name[key];
        }
      }
    }
  },
  //添加一个class名
  Class: {
    //增加一个class
    Add: function Add(node, className) {
      return node.classList.add(className);
    },
    remove: function remove(node, className) {
      return node.classList.remove(className);
    },
    has: function has(node, className) {
      return node.className.contains(className);
    }
  },
  Event: {
    //添加事件
    on: function on(node, eventName, fn) {
      node.addEventListener(eventName, fn);
    },
    //移除事件
    remove: function remove(node, eventName, fn) {
      console.log('移除绑定事件');
      node.removeEventListener(eventName, fn);
    }
  },
  find: function find(string, scope) {
    //判断 如果scope存在则scope.query 否则document.query
    return (scope || document).querySelectorAll(string);
  },
  parent: function parent(node) {
    return node.parentNode;
  },
  chidlren: function chidlren(node) {
    return node.children;
  },
  silbing: function silbing(node) {
    //转成正常数组格式
    //返回兄弟节点
    return Array.form(node.parentNode.children).fitter(function (n) {
      return n !== node;
    });
  },
  //获取下一个节点
  next: function next(node) {
    var x = node.nextSibling; //x存在或者x.nodeType ===3 是文本

    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }

    return x;
  },
  //找上一个节点
  previous: function previous(node) {
    var x = node.prev; //如果存在则再往前

    while (x && x.nodeType === 3) {
      x = x.prev;
    }

    return x;
  },
  //遍历节点
  //给一个节点列表
  each: function each(nodelist, fn) {
    for (var i = 0; i < nodelist.length; i++) {
      fn.call(null, nodelist[i]);
    }
  },
  //查找node的位置
  index: function index(node) {
    var list = dom.children(node.parent); //遍历这个列表

    var index = 0;

    for (var i = 0; i < list.length; i++) {
      if (list[i] === node) {
        index = i;
      }
    }

    return index;
  }
}; //对页面元素的增删改查
},{}],"../../../../node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50561" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map