(function(t){function e(e){for(var n,s,a=e[0],c=e[1],u=e[2],h=0,p=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var f=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1d67":function(t,e,r){"use strict";var n=r("57f8"),i=r.n(n);i.a},"3f2d":function(t,e,r){},"56cc":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("GameText"),r("GameUI"),r("Coordinates"),r("TextForGameEnd")],1)},o=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("5df3"),r("1c4c"),r("7618")),a=r("bd86"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shots>0?r("div",{attrs:{id:"headerText"}},[t._v("*** "+t._s(t.shotText)+" ***")]):t._e()},u=[],f=r("2f62");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"GameText",computed:p({},Object(f["c"])({shots:function(t){return t.shots},shotText:function(t){return t.shotText}}))},b=l,O=(r("1d67"),r("2877")),_=Object(O["a"])(b,c,u,!1,null,"fe2ab87a",null),d=_.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"gameUI"}},[r("GenerateFirstRow"),r("GenerateRestRows")],1)},y=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(this.first_row_arr,(function(e){return r("div",{key:e,staticClass:"singleItem"},[t._v(t._s(e))])})),0)},w=[];function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={name:"GenerateFirstRow",computed:g({},Object(f["c"])({first_row_arr:function(t){return t.first_row_arr}}))},S=P,x=(r("b9b3"),Object(O["a"])(S,m,w,!1,null,"7e5eb14c",null)),A=x.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"restRows"}},t._l(Object.keys(this.rows_obj),(function(e,n){return r("div",{key:n,staticClass:"row"},[r("div",{staticClass:"singleItem"},[t._v(t._s(e))]),t._l(t.rows_obj[e]["elementsArr"],(function(e,n){return r("div",{key:n,staticClass:"singleItem"},[t._v(t._s(e))])}))],2)})),0)},T=[];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I={name:"GenerateRestRows",computed:C({},Object(f["c"])({rows_obj:function(t){return t.rows_obj}}))},k=I,D=(r("d5f8"),Object(O["a"])(k,R,T,!1,null,"76d4ecd1",null)),F=D.exports,H={name:"GameUI",components:{GenerateFirstRow:A,GenerateRestRows:F}},G=H,N=(r("b59a"),Object(O["a"])(G,j,y,!1,null,"3eb86e20",null)),M=N.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{attrs:{id:"text"}},[t._v("Enter coordinates (row, col), e.g. A5")]),r("input",{ref:"inp",attrs:{id:"inp",type:"text",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkForHit(e)}}}),r("button",{on:{click:t.checkForHit}},[t._v("Submit")])])},W=[],$=(r("6762"),r("2fdb"),"store/FIRST_ROW_ARR"),K="store/ROWS_OBJ",V="store/BATTLE_SHIPS_ARR",B="store/BATTLE_SHIPS_TOTAL_PARTS",U="store/SHOT_TAKEN",J="store/SHOT_TEXT",X="store/ACTION_FIRST_ROW_ARR",Y="store/ACTION_ROWS_OBJ",Z="store/ACTION_BATTLE_SHIPS_ARR",Q="store/ACTION_BATTLE_SHIPS_TOTAL_PARTS",q="store/ACTION_SHOT_TAKEN",z="store/ACTION_SHOT_TEXT";function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var rt={name:"Coordinates",data:function(){return{inpVal:null,objKey:null,index:null,smallestNumOfFirstRow:null,biggestNumOfFirstRow:null,objCopy:null}},computed:et({},Object(f["c"])({first_row_arr:function(t){return t.first_row_arr},game_grid:function(t){return t.game_grid},rows_obj:function(t){return t.rows_obj},battle_ships_total_parts:function(t){return t.battle_ships_total_parts},shots:function(t){return t.shots},alphabet:function(t){return t.alphabet}})),methods:et({},Object(f["b"])({action_rows_obj:Y,action_battle_ships_total_parts:Q,action_shot_taken:q,action_shot_text:z}),{checkForHit:function(){return this.battle_ships_total_parts?(this.saveInputVars(),this.inputIsWrong()?null:this.makeHit()):this.inputClearAndFocus()},saveInputVars:function(){return this.inpVal=this.$refs.inp.value.toUpperCase(),this.objKey=this.inpVal[0],this.index=+this.inpVal.substr(1),this.smallestNumOfFirstRow=this.first_row_arr[1],this.biggestNumOfFirstRow=this.first_row_arr[this.first_row_arr.length-1]},inputIsWrong:function(){this.cheatEntered();var t=this.alphabet.slice(0,this.game_grid),e=!t.includes(this.objKey),r=!/^[A-Z]\d{1,2}$/g.test(this.inpVal);return!!(e||r||this.index<this.smallestNumOfFirstRow||this.index>this.biggestNumOfFirstRow)&&[this.inputClearAndFocus(),!0]},cheatEntered:function(){var t=this,e=/^SHOW$/g.test(this.inpVal);if(!e)return null;var r=this.rows_obj,n=this.deepCopyObj(this.rows_obj);for(var i in n){var o=n[i]["isShipPartArr"];this.replaceWithEptyString(n,o,i),this.replaceWithX(n,o,i),this.action_rows_obj(n)}setTimeout((function(){return t.action_rows_obj(r)}),1e3)},replaceWithEptyString:function(t,e,r){if(e.every((function(t){return!1===t})))for(var n=0;n<e.length;n++)t[r]["elementsArr"][n]=""},replaceWithX:function(t,e,r){for(var n=0;n<e.length;n++)!0===e[n]&&(t[r]["elementsArr"]=e.map((function(t){return t?"x":""})))},makeHit:function(){return this.objCopy=this.deepCopyObj(this.rows_obj),this.rows_obj[this.objKey]["isShipPartArr"][this.index-1]?this.shipPartHit():this.hitMissed(),this.inputClearAndFocus()},deepCopyObj:function(t){var e,r,n;for(n in e=Array.isArray(t)?[]:{},t)r=t[n],e[n]="object"===Object(s["a"])(r)&&null!==r?this.deepCopyObj(r):r;return e},shipPartHit:function(){if("x"!==this.objCopy[this.objKey]["elementsArr"][this.index-1])return this.action_shot_taken(this.shots+1),this.objCopy[this.objKey]["elementsArr"][this.index-1]="x",this.action_rows_obj(this.objCopy),this.action_battle_ships_total_parts(this.battle_ships_total_parts-1),this.battle_ships_total_parts?this.action_shot_text("Hit"):this.action_shot_text("Sunk")},hitMissed:function(){if("."===this.objCopy[this.objKey]["elementsArr"][this.index-1])return this.objCopy[this.objKey]["elementsArr"][this.index-1]="-",this.action_rows_obj(this.objCopy),this.action_shot_text("Miss"),this.action_shot_taken(this.shots+1)},inputClearAndFocus:function(){return this.$refs.inp.value="",this.$refs.inp.focus()}})},nt=rt,it=(r("8da5"),Object(O["a"])(nt,L,W,!1,null,"c58f0704",null)),ot=it.exports,st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.battle_ships_total_parts<=0?r("div",{attrs:{id:"gameEnd"}},[t._v("Well done! You completed the game in "+t._s(t.shots)+" shots")]):t._e()},at=[];function ct(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ut(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ct(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ct(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ft={name:"TextForGameEnd",computed:ut({},Object(f["c"])({battle_ships_total_parts:function(t){return t.battle_ships_total_parts},shots:function(t){return t.shots}}))},ht=ft,pt=(r("a781"),Object(O["a"])(ht,st,at,!1,null,null,null)),lt=pt.exports;function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _t,dt,jt={name:"App",components:{GameText:d,GameUI:M,Coordinates:ot,TextForGameEnd:lt},data:function(){return{rowsObj:{},indexOfShipStart:null,indexOfShipEnd:null,indexOfRowLetter:null}},computed:Ot({},Object(f["c"])({game_grid:function(t){return t.game_grid},alphabet:function(t){return t.alphabet},dot:function(t){return t.dot},battle_ships_arr:function(t){return t.battle_ships_arr}})),methods:Ot({},Object(f["b"])({action_first_row_arr:X,action_rows_obj:Y,action_battle_ships_total_parts:Q}),{generateRandomVars:function(t){var e=this.battle_ships_arr[t],r=0,n=this.game_grid-1-e;return this.indexOfShipStart=Math.floor(Math.random()*(n-r+1))+r,this.indexOfShipEnd=this.indexOfShipStart+e,this.indexOfRowLetter=Math.floor(Math.random()*(n-r+1))+r},deepCopyObj:function(t){var e,r,n;for(n in e=Array.isArray(t)?[]:{},t)r=t[n],e[n]="object"===Object(s["a"])(r)&&null!==r?this.deepCopyObj(r):r;return e},fillFirstRowArr:function(){for(var t=[""],e=1;e<=this.game_grid;e++)t.push(e);this.action_first_row_arr(t)},fillRowsObj:function(){for(var t=this,e=Array.from({length:this.game_grid},(function(e){return t.dot})),r=Array.from({length:this.game_grid},(function(t){return!1})),n=0;n<this.game_grid;n++)this.rowsObj[[this.alphabet[n]]]={elementsArr:e,isShipPartArr:r}},placeShipsInRandomPlaces:function(){for(var t=0;t<this.battle_ships_arr.length;t++){var e=Math.floor(2*Math.random())+0;this.generateRandomVars(t),t-=e?this.shipInColumn(t):this.shipInRow(t)}},shipInRow:function(t){var e=this.rowsObj[this.alphabet[this.indexOfRowLetter]]["isShipPartArr"].slice(this.indexOfShipStart,this.indexOfShipEnd);if(e.every((function(t){return!1===t}))){this.rowsObj=this.deepCopyObj(this.rowsObj);for(var r=this.indexOfShipStart;r<this.indexOfShipEnd;r++)this.rowsObj[this.alphabet[this.indexOfRowLetter]]["isShipPartArr"][r]=!0;return 0}return 1},shipInColumn:function(t){for(var e=[],r=this.indexOfShipStart;r<this.indexOfShipEnd;r++)e.push(this.rowsObj[this.alphabet[r]]["isShipPartArr"][this.indexOfRowLetter]);if(e.every((function(t){return!1===t}))){this.rowsObj=this.deepCopyObj(this.rowsObj);for(var n=this.indexOfShipStart;n<this.indexOfShipEnd;n++)this.rowsObj[this.alphabet[n]]["isShipPartArr"][this.indexOfRowLetter]=!0;return 0}return 1}}),created:function(){this.fillFirstRowArr(),this.fillRowsObj(),this.placeShipsInRandomPlaces(),this.action_rows_obj(this.rowsObj),this.action_battle_ships_total_parts(this.battle_ships_arr.reduce((function(t,e){return t+e}),0))}},yt=jt,mt=(r("cf25"),Object(O["a"])(yt,i,o,!1,null,null,null)),wt=mt.exports;n["a"].use(f["a"]);var vt=new f["a"].Store({state:{game_grid:10,alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],first_row_arr:[""],rows_obj:{},dot:".",battle_ships_arr:[5,4,4],battle_ships_total_parts:null,shots:0,shotText:""},mutations:(_t={},Object(a["a"])(_t,$,(function(t,e){t.first_row_arr=e})),Object(a["a"])(_t,K,(function(t,e){t.rows_obj=e})),Object(a["a"])(_t,V,(function(t,e){t.battle_ships_arr=e})),Object(a["a"])(_t,B,(function(t,e){t.battle_ships_total_parts=e})),Object(a["a"])(_t,U,(function(t,e){t.shots=e})),Object(a["a"])(_t,J,(function(t,e){t.shotText=e})),_t),actions:(dt={},Object(a["a"])(dt,X,(function(t,e){var r=t.commit;r($,e)})),Object(a["a"])(dt,Y,(function(t,e){var r=t.commit;r(K,e)})),Object(a["a"])(dt,Z,(function(t,e){var r=t.commit;r(V,e)})),Object(a["a"])(dt,Q,(function(t,e){var r=t.commit;r(B,e)})),Object(a["a"])(dt,q,(function(t,e){var r=t.commit;r(U,e)})),Object(a["a"])(dt,z,(function(t,e){var r=t.commit;r(J,e)})),dt)});n["a"].config.productionTip=!1,new n["a"]({store:vt,render:function(t){return t(wt)}}).$mount("#app")},"57f8":function(t,e,r){},"5a67":function(t,e,r){},"670d":function(t,e,r){},7843:function(t,e,r){},"8da5":function(t,e,r){"use strict";var n=r("fefc"),i=r.n(n);i.a},a781:function(t,e,r){"use strict";var n=r("7843"),i=r.n(n);i.a},b59a:function(t,e,r){"use strict";var n=r("5a67"),i=r.n(n);i.a},b9b3:function(t,e,r){"use strict";var n=r("670d"),i=r.n(n);i.a},cf25:function(t,e,r){"use strict";var n=r("56cc"),i=r.n(n);i.a},d5f8:function(t,e,r){"use strict";var n=r("3f2d"),i=r.n(n);i.a},fefc:function(t,e,r){}});
//# sourceMappingURL=app.38d4bd3f.js.map