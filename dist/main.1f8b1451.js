parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=0,r=document.getElementById("html"),e=document.getElementById("css"),t="/*我是一名新人,请多多关照\n我换了一个行\n新的一行我是一个空格\n我的前面是一个空格*/\n#html{\n    color : red;\n}\n/*创建一个*/\n#div1{\n    width:200px;\n    height:200px;\n    border:1px solid black;\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n    background: linear-gradient(90deg, rgba(2,1,18,1) 50%, rgba(255,255,255,1) 50%);\n}\n/*创建两个灵珠*/\n#div1::before{\n    position:absolute;\n    width:100px;\n    height:100px;\n    border-radius:50%;\n    left:50%;\n    top:0;\n    transform:translate(-50%);\n    background:#fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 12%, rgba(254,253,253,1) 12%);\n}\n#div1::after{\n    position:absolute;\n    width:100px;\n    height:100px;\n    border-radius:50%;\n    left:50%;\n    bottom:0;\n    transform:translate(-50%);\n    background: black;\n    background: radial-gradient(circle, rgba(254,253,253,1) 12%, rgba(0,0,0,1) 12%);\n   }\n",o="";function a(){setTimeout(function(){"\n"===t[n]?o+="<br>":" "===t[n]?o+="&nbsp;":o+=t[n],r.innerHTML=o,e.innerHTML=t.substring(0,n),window.scrollTo(0,99999),r.scrollTo(0,1e4),n<t.length-1&&(n+=1,a())},0)}a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.1f8b1451.js.map