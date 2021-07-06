(this["webpackJsonperacer-portal"]=this["webpackJsonperacer-portal"]||[]).push([[0],{178:function(e,t){},251:function(e,t,n){},254:function(e,t){},262:function(e,t,n){"use strict";n.r(t);var o=n(298),a=n(293),r=n(2),i=n(106),c=n.n(i),l=n(23),s=n(286),j=n(38),b=n(283),u=(n(233),n(131)),d=n(294),p=n(296),O=n(138),f=n.n(O),y=n(266),h=(n(251),n(51)),x=n(207),g=n.n(x),v=n(300);function w(e,t){var n=Array.from(t);return n[t.findIndex((function(t){return t.key===e.key}))]=e,n}var m=n(97),k=n(11),C=function(e){var t=Object(y.c)("black","white");return Object(k.jsx)(m.b,{onMouseEnter:function(){e.onMap&&e.setWaypoints((function(t){return w(Object(j.a)(Object(j.a)({},e.waypoint),{},{active:!0}),t)}))},onMouseLeave:function(){e.onMap&&e.setWaypoints((function(t){return w(Object(j.a)(Object(j.a)({},e.waypoint),{},{active:!1}),t)}))},size:e.onMap?35:30,style:{translate:e.onMap?"-50% -100%":"",color:"var(--chakra-colors-".concat(e.waypoint.active?t:e.waypoint.fullStop?"red-500":"teal-400",")"),zIndex:1}})};C.defaultProps={onMap:!1,active:!1,fullStop:!1};var S=n(89);f.a.workerClass=n(253).default;var P=.9,W=1e3,M=function(e){return new p.a({id:"drive-path-layer",data:[{path:e,name:""}],rounded:!0,pickable:!1,widthScale:2,widthMinPixels:2,widthMaxPixels:6,getColor:[11,197,234]})},z=function(e){var t=Object(y.c)("light","dark"),n=Object(r.useRef)(null),o=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),a=o.width,i=o.height,c=Object(r.useCallback)((function(t){e.setWaypoints((function(n){var o,a,r,i,c=(r=t.coordinate[0],i=t.coordinate[1],o={key:Object(v.a)(),lat:i,lon:r,fullStop:!0,active:!1},a=n,[].concat(Object(h.a)(a),[o])),l=new S.CurveInterpolator(c.map((function(e){return[e.lon,e.lat]})),{tension:P}).getPoints(W);return e.setPolyline({points:l,path:M(l)}),c}))}),[]);return Object(k.jsx)(b.a,{flex:1,display:"block",ref:n,children:Object(k.jsxs)(d.a,{initialViewState:{latitude:0,longitude:0,zoom:18,bearing:0,pitch:0},controller:{touchRotate:!0,touchZoom:!0},onClick:c,layers:[e.polyline.path],ContextProvider:u.d.Provider,children:[Object(k.jsx)(u.c,{mapStyle:e.satellite?"mapbox://styles/mapbox/satellite-streets-v11":"mapbox://styles/mapbox/".concat(t,"-v10"),width:a,height:i,attributionControl:!1}),Object(k.jsx)(E,{waypoints:e.waypoints,setWaypoints:e.setWaypoints,setPolyline:e.setPolyline,makeDrivePathLayer:M}),Object(k.jsx)(u.a,{style:{padding:10,top:70},fitBoundsOptions:{maxZoom:18},auto:!0})]})})},E=function(e){var t=Object(r.useMemo)((function(){return e.waypoints.map((function(t){return Object(k.jsx)(u.b,{longitude:t.lon,latitude:t.lat,draggable:!0,onDragEnd:function(n){e.setWaypoints((function(o){var a=w(Object(j.a)(Object(j.a)({},t),{},{lat:n.lngLat[1],lon:n.lngLat[0]}),o),r=new S.CurveInterpolator(a.map((function(e){return[e.lon,e.lat]})),{tension:P}).getPoints(W);return e.setPolyline({points:r,path:e.makeDrivePathLayer(r)}),a}))},children:Object(k.jsx)(C,{waypoint:t,setWaypoints:e.setWaypoints,onMap:!0})},t.key)}))}),[e]);return Object(k.jsx)(k.Fragment,{children:t})},L=n(287),I=n(288),A=n(301),D=n(289),R=n(290),F=n(299),H=n(291),J=n(217),_=n(284),B=function(e){var t=Object(y.b)().toggleColorMode,n=Object(y.c)("dark","light"),o=Object(y.c)(m.c,m.d),a=Object(y.c)("gray.100","gray.700"),r=Object(y.c)("gray.700","gray.100"),i=Object(y.c)("gray.700","gray.200");return Object(k.jsx)(_.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:a,bg:r,_hover:{bg:i},marginLeft:"2",onClick:t,icon:Object(k.jsx)(o,{}),"aria-label":"Switch to ".concat(n," mode")},e))},N=n(127),T=function(e){var t=e.satellite?N.b:N.c,n=Object(y.c)("gray.100","gray.700"),o=Object(y.c)("gray.700","gray.100"),a=Object(y.c)("gray.700","gray.200");return Object(k.jsx)(_.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:n,bg:o,_hover:{bg:a},marginLeft:"2",onClick:function(){return e.setSatellite(!e.satellite)},icon:Object(k.jsx)(t,{}),"aria-label":"Toggle map/satellite mode"},e.iconProps))},Z=function(e){var t=Object(y.c)("gray.800","white"),n=Object(y.c)("gray.700","gray.100"),o=Object(y.c)("gray.100","gray.800"),a=Object(y.c)("gray.400","gray.800"),r=Object(y.c)("gray.500","gray.600");return Object(k.jsxs)(s.a,{w:"100%",bg:t,px:4,py:3,shadow:"dark-lg",pointerEvents:"auto",children:[Object(k.jsx)(L.a,{fontSize:"3xl",ps:2,color:o,children:"ERacer Portal"}),Object(k.jsx)(I.a,{}),Object(k.jsxs)(A.a,{width:450,ms:4,borderColor:a,children:[Object(k.jsx)(D.a,{pointerEvents:"none",fontSize:"1em",color:o,bg:n,children:[Object(k.jsx)(m.a,{},"eracer-globeicon"),Object(k.jsx)(R.a,{ms:3,children:"ws://"},"earcer-wsheader")],borderColor:a}),Object(k.jsx)(F.a,{placeholder:"Websocket Address",_placeholder:{color:r},color:o,borderColor:a,_hover:{borderColor:r}}),Object(k.jsx)(H.a,{w:"fit-content",borderColor:a,children:Object(k.jsx)(J.a,{size:"xs",m:2,colorScheme:"teal",children:"Connect"})})]}),Object(k.jsx)(B,{ms:4}),Object(k.jsx)(T,{iconProps:{ms:4},satellite:e.satellite,setSatellite:e.setSatellite})]})},V=n(210),Y=n(160),q=function(e){var t=Object(y.c)(".700",".400"),n=e.setWaypoints,o=Object(r.useCallback)((function(t){var o;void 0!==(null===(o=t.destination)||void 0===o?void 0:o.index)&&n((function(n){var o,a,r,i,c=(a=t.source.index,r=null===(o=t.destination)||void 0===o?void 0:o.index,i=n,g()(i,a,r)),l=new S.CurveInterpolator(c.map((function(e){return[e.lon,e.lat]})),{tension:P}).getPoints(W);return e.setPolyline({points:l,path:M(l)}),c}))}),[n]);return Object(k.jsx)(Y.a,{onDragEnd:o,children:Object(k.jsx)(b.a,{h:"100%",style:{overflow:"auto"},children:Object(k.jsx)(Y.c,{droppableId:"eracer-waypoints",children:function(n,o){return Object(k.jsxs)(b.a,Object(j.a)(Object(j.a)({ref:n.innerRef},n.droppableProps),{},{children:[e.waypoints.map((function(n,o){return Object(k.jsx)(Y.b,{draggableId:n.key,index:o,children:function(o,a){return Object(k.jsx)(b.a,Object(j.a)(Object(j.a)(Object(j.a)({ref:o.innerRef},o.draggableProps),o.dragHandleProps),{},{children:Object(k.jsxs)(s.a,{py:3,borderY:"0.5px solid gray",style:{borderCollapse:"collapse"},alignItems:"center",flexDirection:"row",onMouseEnter:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{active:!0}),e)}))},onMouseLeave:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{active:!1}),e)}))},pointerEvents:"fill",children:[Object(k.jsx)(b.a,{px:3,children:Object(k.jsx)(N.a,{size:20,cursor:"pointer",onClick:function(){return e.setWaypoints((function(t){var o=function(e,t){var n=Array.from(t);return n.splice(t.findIndex((function(t){return t.key===e.key})),1),n}(n,t),a=o.length?new S.CurveInterpolator(o.map((function(e){return[e.lon,e.lat]})),{tension:P}).getPoints(W):[];return e.setPolyline({points:a,path:M(a)}),o}))}})}),Object(k.jsx)(b.a,{px:2,pl:4,children:Object(k.jsx)(C,{waypoint:n,setWaypoints:e.setWaypoints})}),Object(k.jsxs)(b.a,{px:2,fontSize:"xs",w:"100%",children:["Lat: ",n.lat.toFixed(6),Object(k.jsx)("br",{}),"Lon: ",n.lon.toFixed(6)]}),Object(k.jsx)(b.a,{px:4,textAlign:"right",fontSize:"md",onClick:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{fullStop:!n.fullStop}),e)}))},children:Object(k.jsx)(R.a,{whiteSpace:"nowrap",textColor:"".concat(n.fullStop?"red":"teal").concat(t),cursor:"pointer",children:n.fullStop?"Full Stop":"Coast"})})]},n.key)}))}},n.key)})),n.placeholder]}))}})})})},G=n(261),K=function(e){var t=Object(y.c)("gray.300","gray.700"),n=Object(y.c)("gray.400","gray.600"),o=Object(y.c)(".300",".400"),a=e.setWaypoints,i=e.setPolyline,c=Object(r.useCallback)((function(){a((function(){return i({points:[],path:M([])}),[]}))}),[a,i]),l=Object(r.useCallback)((function(){G(JSON.stringify(e.waypoints,null,2),"waypoints.json")}),[e.waypoints]),j=Object(r.useRef)(null),u=Object(r.useCallback)((function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.onload=function(e){a((function(){var t=JSON.parse(e.target.result);if(t.length){var n=new S.CurveInterpolator(t.map((function(e){return[e.lon,e.lat]})),{tension:P}).getPoints(W);i({points:n,path:M(n)})}return t}))},n.readAsText(t)}}),[a,i]);return Object(k.jsx)(s.a,{shadow:"dark-lg",rounded:"lg",flex:1,alignSelf:"flex-end",w:"30%",minW:300,maxW:450,m:4,overflow:"hidden",bg:t,pointerEvents:"auto",flexDirection:"column",children:Object(k.jsxs)(s.a,{bg:n,h:300,m:5,rounded:"lg",flexDirection:"column",overflow:"hidden",children:[Object(k.jsxs)(s.a,{bg:"red".concat(o),w:"100%",py:2,px:4,children:[Object(k.jsx)(L.a,{fontSize:"2xl",me:"auto",children:"Waypoints"}),Object(k.jsxs)(V.a,{size:"sm",isAttached:!0,variant:"solid",colorScheme:"blackAlpha",children:[Object(k.jsx)(J.a,{onClick:c,children:"Clear"}),Object(k.jsx)("input",{ref:j,type:"file",onChange:u,style:{display:"none"}}),Object(k.jsx)(J.a,{onClick:function(){return j.current.click()},children:"Load"}),Object(k.jsx)(J.a,{onClick:l,children:"Save"})]})]}),Object(k.jsx)(b.a,{flex:1,style:{overflow:"auto"},children:Object(k.jsx)(q,{waypoints:e.waypoints,setWaypoints:e.setWaypoints,polyline:e.polyline,setPolyline:e.setPolyline})})]})})},Q=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)({}),i=Object(l.a)(a,2),c=i[0],j=i[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),d=u[0],p=u[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{minH:"100vh",maxH:"100vh",children:Object(k.jsx)(z,{satellite:d,waypoints:n,setWaypoints:o,polyline:c,setPolyline:j})}),Object(k.jsxs)(s.a,{position:"absolute",top:0,left:0,minH:"100vh",maxH:"100vh",minW:"100vw",maxW:"100vw",direction:"column",textAlign:"center",fontSize:"xl",pointerEvents:"none",children:[Object(k.jsx)(Z,{satellite:d,setSatellite:p}),Object(k.jsx)(K,{waypoints:n,setWaypoints:o,polyline:c,setPolyline:j})]})]})},U=n(292),X=Object(U.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});c.a.render(Object(k.jsx)(r.StrictMode,{children:Object(k.jsxs)(o.a,{theme:X,children:[Object(k.jsx)(a.a,{initialColorMode:X.config.initialColorMode}),Object(k.jsx)(Q,{})]})}),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.e46357b9.chunk.js.map