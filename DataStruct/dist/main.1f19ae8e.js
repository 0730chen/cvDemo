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
// console.log(`haha`)
//     //实现队列
// let queen = []
// let temp = 0
// let createQueen = document.querySelector('.create')
// let callQueen = document.querySelector('.call')
// let nowQueen = document.querySelector('.now')
// let call = document.querySelector('#call')
// createQueen.addEventListener('click', function() {
//     temp += 1
//     queen.push(temp)
//     nowQueen.innerHTML = queen
// })
// callQueen.addEventListener('click', function() {
//         queen.shift() //弹出第一个， pop弹出末尾数据
//         nowQueen.innerHTML = queen
//         if (queen[0] === undefined) { return }
//         call.innerHTML = queen[0]
//     })
//队列是数组形式的数据，提供了两个api push和shift，先进先出
//栈，也是一组数组形式数据结构，，提供了两个api push和pop
//linkList链表实现
var linkList = {
  data: 10,
  next: null //创建节点

};

var createNode = function createNode(value) {
  return {
    data: value,
    next: null
  };
}; //创建链表


var createList = function createList(value) {
  return createNode(value);
};

var list = createList(10);
var list2 = createList(20); //1.增加节点

var appendList = function appendList(linkList, value) {
  //根据传入的值创建一个节点
  var node = createNode(value); //记录当前节点 

  var x = linkList; //循环链表，直到最后一个为null
  // console.log(x)
  // console.log(x === linkList)
  // console.log(x.next)
  //当x的next不为null，则表示不是最后一个节点，让x指向它的下一个节点
  //循环操作，当x.next存在则，x = x.next 直到x.next为null

  while (x.next) {
    // console.log('----')
    // console.log(x)
    // console.log(x.next)
    x = x.next;
  }

  x.next = node;
  return node; //x.next === null是最后一个节点
};
/*2.删除节点
 原理是要删除哪一个节点，就将它的前一个节点的next与后一个节点连接起来
 */


var remove = function remove(linkList, node) {
  //判断，删除的节点是链表的第几个节点，找到要删除的节点，将前一个节点的next连接到后一个节点上
  // 后一个节点是node.next
  var x = linkList; //第一个节点是101

  var p = null; //

  while (x !== node) {
    //遍历操作，判断从第一个节点开始判断x，x.next,x.next.next是否和要删除的node节点相等，相等则跳出循环
    console.log(x);
    console.log(node);
    p = x; //p指向了101

    x = x.next; //x指向了101.next 假设是第二个202
  }

  p.next = x.next; //101.next指向了202.next ，所以202就不存在了
  // if (linkList === node) {
  //     console.log('要删除第一个节点')
  //     console.log(`${linkList}`, `${node}`)
  //     linkList = node.next
  // } else {
  //     if (linkList.next === node) {
  //         console.log('要删除第二个节点')
  //         console.log(`${linkList}`, `${node}`)
  //         linkList.next = node.next
  //     } else {
  //         if (linkList.next.next === node) {
  //             console.log('删除第三个节点')
  //             linkList.next.next = node.next
  //         }
  //     }
  // }
}; // const node1 = appendList(list, 30) //第二个节点
// const node2 = appendList(list, 40) //第三个节点
// const node3 = appendList(list, 50) //第四个节点
// console.log(node1, node2, node3)
// remove(list, node2)
// console.log(list)
//树结构
//初始化树


var createTreeNode = function createTreeNode(value) {
  return {
    data: value,
    parent: null,
    children: null
  };
};

var createTree = function createTree(value) {
  return createTreeNode(value);
}; //给节点添加数据


var addChild = function addChild(node, value) {
  //添加新节点
  var newNode = {
    data: value,
    children: null,
    parent: node
  };
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
}; //遍历节点，先遍历一个分支的子节点


var travel = function travel(tree, fn) {
  //当最后一个tree.children不存在
  console.log(tree.data);
  fn(tree); //最后一个节点时跳出

  if (!tree.children) {
    return;
  } // fn(tree)


  for (var i = 0; i < tree.children.length; i++) {
    //遍历根节点的子节点
    travel(tree.children[i], fn);
  }
}; //查找节点 当节点与需要查找的相同时，返回本身，子节点存在则递归遍历子节点


var find = function find(tree, node) {
  //如果查找的节点与本身相同则返回本身
  if (tree === node) {
    return tree;
  } else if (tree.children) {
    //循环递归查询树结构，如果存在node则返回node，不存在则返回undefined
    for (var i = 0; i < tree.children.length; i++) {
      var result = find(tree.children[i], node);

      if (result) {
        return result;
      }
    }

    return undefined;
  } else {
    return undefined;
  }
}; //删除指定节点


var removeNode = function removeNode(tree, node) {
  var siblings = node.parent.children; //查找到删除节点的同级节点

  var index = 0; //记录查找到node的索引值

  console.log(siblings); //循环遍历同级节点查找node

  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === node) {
      index = i;
    }
  }

  siblings.splice(index, 1); //数组删除方法，删除一个数据
};

var tree1 = createTree(10);
var node2 = addChild(tree1, 20);
var node3 = addChild(node2, 30);
var node4 = addChild(node3, 50);
var node5 = addChild(tree1, 10); // const node3 = addChild(tree1, 30)
// const node4 = addChild(node2, 40)
// console.log(tree1, node2, node3)

console.log(tree1); //将函数当做参数传入，更灵活

travel(tree1, function (node) {
  console.log(node); //此时node就相当于tree
}); // const find1 = find(tree1, node3)

console.log(tree1); // const removeTree = removeNode(tree1, node2)
// travel(tree1, (node) => {
//     console.log(node)
//     console.log(node.data)
// })
},{}],"../../../node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50406" + '/');

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
},{}]},{},["../../../node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map