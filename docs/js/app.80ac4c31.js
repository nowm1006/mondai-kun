(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06d7":function(e,t,n){e.exports=n.p+"img/drive_folder_upload_black_24dp.164d6966.svg"},"2e4c":function(e,t,n){e.exports=n.p+"img/thumb_up_black_24dp.b4481bbd.svg"},"49fe":function(e,t,n){e.exports=n.p+"img/skip_next_black_24dp.7a97d4b1.svg"},"4e78":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("06d7"),o=n.n(c),a=n("49fe"),u=n.n(a),s=n("2e4c"),i=n.n(s),l=n("e24e"),p=n.n(l),f=Object(r["e"])("h1",{class:"title"},"問題くん",-1),b=Object(r["e"])("label",{for:"file-selector"},[Object(r["e"])("img",{class:"button",src:o.a})],-1),d=Object(r["e"])("h2",null,"問題",-1),h=Object(r["e"])("h2",null,"答え",-1),v={key:0},O={key:1},j={class:"thumbs"},y={key:2};function g(e,t,n,c,o,a){return"TITLE"===c.phase?(Object(r["f"])(),Object(r["d"])(r["a"],{key:0},[f,b,Object(r["e"])("input",{id:"file-selector",type:"file",accept:"*.yaml",onChange:t[0]||(t[0]=function(){return c.fileSelect&&c.fileSelect.apply(c,arguments)})},null,32)],64)):"QUESTION"===c.phase||"ANSWER"===c.phase?(Object(r["f"])(),Object(r["d"])(r["a"],{key:1},[d,Object(r["e"])("h1",null,Object(r["h"])(c.word),1),h,"ANSWER"===c.phase?(Object(r["f"])(),Object(r["d"])("h1",v,Object(r["h"])(c.answer),1)):(Object(r["f"])(),Object(r["d"])("h1",O,"???")),"QUESTION"===c.phase?(Object(r["f"])(),Object(r["d"])("img",{key:2,class:"button",src:u.a,onClick:t[1]||(t[1]=function(){return c.showAnswer&&c.showAnswer.apply(c,arguments)})})):Object(r["c"])("",!0),Object(r["e"])("div",j,["ANSWER"===c.phase?(Object(r["f"])(),Object(r["d"])("img",{key:0,class:"button",src:i.a,onClick:t[2]||(t[2]=function(){return c.moveNext&&c.moveNext.apply(c,arguments)})})):Object(r["c"])("",!0),"ANSWER"===c.phase?(Object(r["f"])(),Object(r["d"])("img",{key:1,class:"button",src:p.a,onClick:t[3]||(t[3]=function(){return c.moveNext&&c.moveNext.apply(c,arguments)})})):Object(r["c"])("",!0)])],64)):(Object(r["f"])(),Object(r["d"])("h1",y,"おしまい"))}var m=n("1da1"),w=(n("d3b7"),n("96cf"),n("e2c1")),x={setup:function(){var e=[],t=Object(r["g"])(""),n=Object(r["g"])(""),c=Object(r["g"])("TITLE"),o=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.getElementById("file-selector"),r=n.files[0],t.next=4,r.text();case 4:c=t.sent,e=w["a"].load(c),a();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var r=Object(m["a"])(regeneratorRuntime.mark((function r(){var o,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.value=e.pop(),o=new SpeechSynthesisUtterance,o.lang="en-US",o.text=t.value?t.value:"Good Job!",speechSynthesis.speak(o),!t.value){r.next=9;break}c.value="QUESTION",r.next=11;break;case 9:return c.value="END",r.abrupt("return");case 11:return r.next=13,fetch("https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=".concat(t.value,"&source=en&target=ja"));case 13:return a=r.sent,r.next=16,a.json();case 16:return s=r.sent,n.value=s.text,r.next=20,k(1);case 20:u();case 21:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),u=function(){c.value="ANSWER"};return{word:t,phase:c,fileSelect:o,moveNext:a,showAnswer:u,answer:n}}};function k(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))}n("c34f");var S=n("6b0d"),_=n.n(S);const N=_()(x,[["render",g]]);var E=N;Object(r["b"])(E).mount("#app")},c34f:function(e,t,n){"use strict";n("4e78")},e24e:function(e,t,n){e.exports=n.p+"img/thumb_down_black_24dp.4fd77e2b.svg"}});
//# sourceMappingURL=app.80ac4c31.js.map