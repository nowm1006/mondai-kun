(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],b=0,p=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d86":function(e,t,n){"use strict";n("da68")},"2e4c":function(e,t,n){e.exports=n.p+"img/thumb_up_black_24dp.b4481bbd.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("2e4c"),o=n.n(c),a=n("e24e"),u=n.n(a),s=Object(r["e"])("h1",{class:"title main-word"},"問題くん",-1),i={class:"sub"},l={class:"flex-container"},b=Object(r["e"])("label",{for:"course-select",class:"label"},"コースを選択",-1),p={key:1},d={class:"bottom"},f={class:"flex-container"},j=Object(r["e"])("label",{for:"timer-input",class:"label"},"待ち時間(秒) ",-1),O={class:"word main-word"},v={key:0,class:"title sub"},h={class:"thumbs bottom"},m=Object(r["e"])("h1",{class:"title"},"おしまい",-1);function g(e,t,n,c,a,g){return"TITLE"===c.phase?(Object(r["g"])(),Object(r["d"])(r["a"],{key:0},[s,Object(r["e"])("div",i,[Object(r["e"])("div",l,[Object(r["e"])("button",{class:"btn",onClick:t[0]||(t[0]=function(){return c.courseSelect&&c.courseSelect.apply(c,arguments)})},"スタート"),b,c.isLoadedCourse?Object(r["m"])((Object(r["g"])(),Object(r["d"])("select",{key:0,id:"course-select","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.selectedCourse=e}),class:"input"},[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(c.courses,(function(e){return Object(r["g"])(),Object(r["d"])("option",{key:e},Object(r["j"])(e),1)})),128))],512)),[[r["k"],c.selectedCourse]]):(Object(r["g"])(),Object(r["d"])("p",p," Loading... "))])]),Object(r["e"])("div",d,[Object(r["e"])("div",f,[j,Object(r["m"])(Object(r["e"])("input",{id:"timer-input",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.timer=e}),class:"input"},null,512),[[r["l"],c.timer]])])])],64)):"QUESTION"===c.phase||"ANSWER"===c.phase?(Object(r["g"])(),Object(r["d"])(r["a"],{key:1},[Object(r["e"])("h1",O,Object(r["j"])(c.word),1),"ANSWER"===c.phase?(Object(r["g"])(),Object(r["d"])("h1",v,Object(r["j"])(c.answer),1)):Object(r["c"])("",!0),Object(r["e"])("div",h,["ANSWER"===c.phase?(Object(r["g"])(),Object(r["d"])("img",{key:0,class:"button",src:o.a,onClick:t[3]||(t[3]=function(){return c.moveNext&&c.moveNext.apply(c,arguments)})})):Object(r["c"])("",!0),"ANSWER"===c.phase?(Object(r["g"])(),Object(r["d"])("img",{key:1,class:"button",src:u.a,onClick:t[4]||(t[4]=function(){return c.noGood&&c.noGood.apply(c,arguments)})})):Object(r["c"])("",!0)])],64)):(Object(r["g"])(),Object(r["d"])(r["a"],{key:2},[m,Object(r["e"])("div",null,[Object(r["e"])("button",{class:"sub btn",onClick:t[5]||(t[5]=function(e){return c.phase="TITLE"})},"もう一度")])],64))}var y=n("2909"),w=n("1da1"),k=(n("96cf"),n("d3b7"),n("99af"),{setup:function(){var e=[],t=Object(r["h"])(""),n=Object(r["h"])(""),c=Object(r["h"])("TITLE"),o=Object(r["h"])(3),a=Object(r["h"])([]),u=Object(r["h"])(""),s=Object(r["h"])(!1);Object(r["f"])(Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.value=n,s.value=!0;case 8:case"end":return e.stop()}}),e)}))));var i=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec?key=".concat(u.value));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e=r,b();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){e=[{word:t.value,answer:n.value}].concat(Object(y["a"])(e)),b()},b=function(){var r=Object(w["a"])(regeneratorRuntime.mark((function r(){var a,u,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.pop(),u=null===a||void 0===a?void 0:a.word,s=null===a||void 0===a?void 0:a.answer,t.value=u,n.value=s,i=new SpeechSynthesisUtterance,i.lang="en-US",i.text=t.value?t.value:"Good Job!",speechSynthesis.speak(i),!t.value){r.next=13;break}c.value="QUESTION",r.next=15;break;case 13:return c.value="END",r.abrupt("return");case 15:return r.next=17,x(o.value);case 17:p();case 18:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){c.value="ANSWER"};return{word:t,phase:c,courseSelect:i,noGood:l,moveNext:b,showAnswer:p,answer:n,timer:o,isLoadedCourse:s,courses:a,selectedCourse:u}}});function x(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))}n("1d86");var S=n("6b0d"),_=n.n(S);const R=_()(k,[["render",g]]);var C=R;Object(r["b"])(C).mount("#app")},da68:function(e,t,n){},e24e:function(e,t,n){e.exports=n.p+"img/thumb_down_black_24dp.4fd77e2b.svg"}});
//# sourceMappingURL=app.49c9f60c.js.map