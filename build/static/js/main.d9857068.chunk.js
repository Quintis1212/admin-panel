(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[0],{42:function(e,t,a){e.exports=a(76)},47:function(e,t,a){},65:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),o=(a(47),a(39)),i=a.n(o).a.create({baseURL:"https://train-39df7.firebaseio.com"}),s=(a(65),a(11)),u=a.n(s),m=(a(23),a(24),a(21)),d=a(3),E=a(9),f=a(13),p=a(19);var b=Object(p.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-DATA":var a=t.data;return console.log(a),{activePages:a};case"REFRESH":var n=t.initRefresh;return Object(f.a)(Object(f.a)({},e),{},{initRefresh:n});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var v=function(e,t){t&&(console.log("run"),u.a.storage().refFromURL(t).delete().then((function(){console.log("// File deleted successfully")})).catch((function(e){}))),e&&i.delete("/data/"+e+".json").then((function(e){console.log(e),b.dispatch({type:"REFRESH",initRefresh:[]})})).catch((function(e){console.log(e)}))};function g(){var e=Object(E.c)((function(e){return e.activePages}));return l.a.createElement(l.a.Fragment,null,e&&e.map((function(e){var t=e.id,a=e.img;return l.a.createElement("ul",{key:t,className:"product-card"},l.a.createElement("li",{className:"product-card-foto"},l.a.createElement("img",{src:e.img,alt:"clothes-foto"})),l.a.createElement("span",{className:"content-wrapper"},l.a.createElement("li",null,l.a.createElement("p",{className:"product-card-brand"},e.brand)),l.a.createElement("li",null,l.a.createElement("p",{className:"product-card-description"},e.description)),l.a.createElement("li",null,l.a.createElement("p",{className:"product-card-type"},e.type)),l.a.createElement("li",null,l.a.createElement("p",{className:"product-card-type"},e.size.join(","))),l.a.createElement("li",{className:"product-card-info"},l.a.createElement("p",null,e.price," $")," ",l.a.createElement("button",{onClick:function(){return v(t,a)},className:"product-card-brand"},"DELETE ITEM"))))})))}var h=a(41);var O=a(10);function j(e){var t=e.value,a=e.setValue,n=e.eventTargetFilter,c=e.label;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:c.toLowerCase()},c," :"),l.a.createElement("input",{type:"text",id:c.toLowerCase(),value:t,onChange:function(e){return n(e,a)}}))}function S(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(O.a)(r,2),s=o[0],m=o[1],d=Object(n.useState)(""),f=Object(O.a)(d,2),p=f[0],b=f[1],g=Object(n.useState)(""),h=Object(O.a)(g,2),S=h[0],w=h[1],N=Object(n.useState)(""),T=Object(O.a)(N,2),R=T[0],y=T[1],F=Object(n.useState)(""),k=Object(O.a)(F,2),_=k[0],D=k[1],U=Object(n.useState)(!1),A=Object(O.a)(U,2),C=A[0],I=A[1],V=Object(n.useState)(!1),L=Object(O.a)(V,2),B=L[0],x=L[1],z=Object(E.b)(),P=Object(n.useRef)(null);function M(e,t){t(e.target.value)}return Object(n.useEffect)((function(){return function(){console.log(P.current),P.current&&v(null,P.current)}}),[]),l.a.createElement("div",{className:"add-item-wrapper"},l.a.createElement(j,{label:"Brand",value:a,setValue:c,eventTargetFilter:M}),l.a.createElement(j,{label:"Description",value:s,setValue:m,eventTargetFilter:M}),l.a.createElement(j,{label:"Gender",value:p,setValue:b,eventTargetFilter:M}),l.a.createElement(j,{label:"Price",value:S,setValue:w,eventTargetFilter:M}),l.a.createElement(j,{label:"Type",value:R,setValue:y,eventTargetFilter:M}),l.a.createElement(j,{label:"Sizes",value:_,setValue:D,eventTargetFilter:M}),l.a.createElement("label",{htmlFor:"image-upload"},"Foto of item :"),l.a.createElement("input",{type:"file",id:"image-upload",onChange:function(e){return function(e){var t=e.target.files[0],a=u.a.storage().ref().child("images/"+t.name).put(t);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case u.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case u.a.storage.TaskState.RUNNING:console.log("Upload is running"),x(!0);break;default:console.log("Default case")}}),(function(e){}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){x(!1),I(e),P.current=e,console.log("File available at",e)}))}))}(e)}}),C&&l.a.createElement("div",{className:"checkmark"}),l.a.createElement("div",{className:B?"lds-roller":""},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("button",{onClick:function(){if(a&&s&&p&&S&&R&&C){var e=_.split(","),t={brand:a,description:s,gender:p,price:S,typeClothes:R,img:C,isAdded:!1,size:e};I(""),w(""),y(""),b(""),m(""),c(""),D(""),P.current=null,i.post("/data.json",t).then((function(e){console.log(e),alert("Item published"),z({type:"REFRESH",initRefresh:[]})})).catch((function(e){console.log(e)}))}else alert("Fill in all fields!")}},"SEND TO SERVER"))}var w=function(){console.log("render");var e=Object(E.b)(),t=Object(E.c)((function(e){return e.initRefresh})),a=Object(n.useMemo)((function(){return{apiKey:"AIzaSyBVwgTuqBBxIn-__3LU8vOPMCw0iCE1oU0",authDomain:"train-39df7.firebaseapp.com",databaseURL:"https://train-39df7.firebaseio.com",projectId:"train-39df7",storageBucket:"train-39df7.appspot.com",messagingSenderId:"356224743225",appId:"1:356224743225:web:af9407f63996673d2d5ae8"}}),[]);return Object(n.useEffect)((function(){u.a.initializeApp(a)}),[a]),Object(n.useEffect)((function(){i.get("/data.json").then((function(t){var a=function(e){var t=[];return Object.keys(e).forEach((function(a){var n=Object(f.a)(Object(f.a)({},e[a]),{},{id:a});t=[].concat(Object(h.a)(t),[n])})),t}(t.data);e({type:"SET-DATA",data:a})})).catch((function(e){console.log(e)})).then((function(){}))}),[e,t]),l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement("ul",{className:"nav-menu"},l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"selected",to:"/create-new-item"},"Add new item")),l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"selected",to:"/active-items"},"Active items"))),l.a.createElement(d.d,null,l.a.createElement(d.a,{exact:!0,from:"/",to:"/active-items"}),l.a.createElement(d.a,{from:"//",to:"/"}),">",l.a.createElement(d.b,{exact:!0,path:"/create-new-item"},l.a.createElement(S,null)),l.a.createElement(d.b,{exact:!0,path:"/active-items"},l.a.createElement(g,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E.a,{store:b},l.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.d9857068.chunk.js.map