(this.webpackJsonpshopmate=this.webpackJsonpshopmate||[]).push([[0],{104:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),o=n.n(c),u=(n(104),n(5)),i=n.n(u),s=n(13),l=n(94),p=n.n(l),m=n(27),f=n.n(m),d=(n(177),function(e){var t=e.items,n=function(e){var t=e.index;return t<0?"TableRow--header":t%2===0?"TableRow--even":"TableRow--odd"},a=function(e){var n=e.index;return t[n]};return r.a.createElement(p.a,null,(function(e){var c=e.width,o=e.height;return r.a.createElement(f.a,{className:"ItemTable",width:c,height:o,headerHeight:50,rowClassName:n,rowHeight:50,rowCount:t.length,rowGetter:a},r.a.createElement(m.Column,{label:"Brand",dataKey:"brand_name",width:100,flexGrow:1}),r.a.createElement(m.Column,{label:"Name",dataKey:"name",width:100,flexGrow:2}),r.a.createElement(m.Column,{label:"Size",dataKey:"size",width:100,flexGrow:1}))}))}),h=n(95),v=n(96),b=n(38),E=n.n(b),w="https://www.datakick.org/api/items",y=function(){function e(){Object(h.a)(this,e)}return Object(v.a)(e,[{key:"getItems",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,E.a.get("".concat(w,"?page=").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"findItemByID",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(w,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"findItemByText",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(w,"?query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=n(98),O=n(97);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=Object(a.createContext)(),k={items:[],loading:!1,page:1,search:""};function S(e,t){switch(t.type){case"SET_ITEMS":return x({},e,{items:t.payload});case"SET_LOADING":return x({},e,{loading:t.payload});case"SET_PAGE":return x({},e,{page:t.payload});case"SET_SEARCH":return x({},e,{search:t.payload});default:return e}}var C=new y,_=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch,c=t.search,o=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===c){e.next=7;break}return e.next=3,C.findItemByText(c);case 3:return t=e.sent,e.abrupt("return",n({type:"SET_ITEMS",payload:t.data}));case 7:return e.abrupt("return",n({type:"SET_PAGE",payload:1}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"TableTools"},r.a.createElement("input",{value:c,onChange:function(e){var t=e.target;return n({type:"SET_SEARCH",payload:t.value})}}),r.a.createElement("button",{onClick:o},"Search"))},P=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,"shopmate")),r.a.createElement(_,null))},I=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch,c=t.page;return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",null,r.a.createElement("button",{className:"Footer__Button",disabled:1===c,onClick:function(){return n({type:"SET_PAGE",payload:t.page-1})}},"previous"),c,r.a.createElement("button",{className:"Footer__Button",onClick:function(){return n({type:"SET_PAGE",payload:t.page+1})}},"next")))},N=function(e){var t=e.children;return r.a.createElement("div",{className:"Home"},r.a.createElement(P,null),r.a.createElement("div",{className:"Table"},t),r.a.createElement(I,null))},A=(n(195),n(196),new y);var G=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch,c=t.items,o=t.page;return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getItems(t);case 2:return a=e.sent,e.abrupt("return",n({type:"SET_ITEMS",payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(o)}),[n,o]),console.log("App rendered"),r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(d,{items:c})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(e){var t=Object(a.useReducer)(S,k),n=Object(g.a)(t,2),c={state:n[0],dispatch:n[1]};return r.a.createElement(T.Provider,{value:c},e.children)}),null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,n){e.exports=n(197)}},[[99,1,2]]]);
//# sourceMappingURL=main.df566456.chunk.js.map