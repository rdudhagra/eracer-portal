(this["webpackJsonperacer-portal"]=this["webpackJsonperacer-portal"]||[]).push([[0],{177:function(e,t){},249:function(e,t,n){},252:function(e,t){},259:function(e,t,n){"use strict";n.r(t);var o=n(296),r=n(291),a=n(2),i=n(104),c=n.n(i),l=n(23),s=n(284),j=n(41),d=n(281),b=(n(231),n(130)),u=n(292),p=n(294),O=n(137),y=n.n(O),h=n(264),f=(n(249),n(51)),x=n(206),g=n.n(x),v=n(298);function w(e,t){var n=Array.from(t);return n[t.findIndex((function(t){return t.key===e.key}))]=e,n}var m=n(94),k=n(13),C=function(e){var t=Object(h.c)("black","white");return Object(k.jsx)(m.b,{onMouseEnter:function(){e.onMap&&e.setWaypoints((function(t){return w(Object(j.a)(Object(j.a)({},e.waypoint),{},{active:!0}),t)}))},onMouseLeave:function(){e.onMap&&e.setWaypoints((function(t){return w(Object(j.a)(Object(j.a)({},e.waypoint),{},{active:!1}),t)}))},size:e.onMap?35:30,style:{translate:e.onMap?"-50% -100%":"",color:"var(--chakra-colors-".concat(e.waypoint.active?t:e.waypoint.fullStop?"red-500":"teal-400",")"),zIndex:1}})};C.defaultProps={onMap:!1,active:!1,fullStop:!1};var S=n(110);y.a.workerClass=n(251).default;var W=.9,P=1e3,M=function(e){return new p.a({id:"drive-path-layer",data:[{path:e,name:""}],rounded:!0,pickable:!1,widthScale:2,widthMinPixels:2,widthMaxPixels:6,getColor:[11,197,234]})},z=function(e){var t=Object(h.c)("light","dark"),n=Object(a.useRef)(null),o=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),r=o.width,i=o.height,c=Object(a.useCallback)((function(t){e.setWaypoints((function(n){var o,r,a,i,c=(a=t.coordinate[0],i=t.coordinate[1],o={key:Object(v.a)(),lat:i,lon:a,fullStop:!0,active:!1},r=n,[].concat(Object(f.a)(r),[o])),l=new S.CurveInterpolator(c.map((function(e){return[e.lon,e.lat]})),{tension:W}).getPoints(P);return e.setPolyline({points:l,path:M(l)}),c}))}),[]);return Object(k.jsx)(d.a,{flex:1,display:"block",ref:n,children:Object(k.jsxs)(u.a,{initialViewState:{latitude:0,longitude:0,zoom:18,bearing:0,pitch:0},controller:{touchRotate:!0,touchZoom:!0},onClick:c,layers:[e.polyline.path],ContextProvider:b.d.Provider,children:[Object(k.jsx)(b.c,{mapStyle:"mapbox://styles/mapbox/".concat(t,"-v10"),width:r,height:i,attributionControl:!1,children:Object(k.jsx)(b.a,{style:{padding:10,top:70},fitBoundsOptions:{maxZoom:18},auto:!0})}),Object(k.jsx)(E,{waypoints:e.waypoints,setWaypoints:e.setWaypoints,setPolyline:e.setPolyline,makeDrivePathLayer:M})]})})},E=function(e){var t=Object(a.useMemo)((function(){return e.waypoints.map((function(t){return Object(k.jsx)(b.b,{longitude:t.lon,latitude:t.lat,draggable:!0,onDragEnd:function(n){e.setWaypoints((function(o){var r=w(Object(j.a)(Object(j.a)({},t),{},{lat:n.lngLat[1],lon:n.lngLat[0]}),o),a=new S.CurveInterpolator(r.map((function(e){return[e.lon,e.lat]})),{tension:W}).getPoints(P);return e.setPolyline({points:a,path:e.makeDrivePathLayer(a)}),r}))},children:Object(k.jsx)(C,{waypoint:t,setWaypoints:e.setWaypoints,onMap:!0})},t.key)}))}),[e]);return Object(k.jsx)(k.Fragment,{children:t})},I=n(285),L=n(286),D=n(299),H=n(287),A=n(288),F=n(297),R=n(289),_=n(216),B=n(282),J=function(e){var t=Object(h.b)().toggleColorMode,n=Object(h.c)("dark","light"),o=Object(h.c)(m.c,m.d),r=Object(h.c)("gray.100","gray.700"),a=Object(h.c)("gray.700","gray.100"),i=Object(h.c)("gray.700","gray.200");return Object(k.jsx)(B.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:r,bg:a,_hover:{bg:i},marginLeft:"2",onClick:t,icon:Object(k.jsx)(o,{}),"aria-label":"Switch to ".concat(n," mode")},e))},Z=function(){var e=Object(h.c)("gray.800","white"),t=Object(h.c)("gray.700","gray.100"),n=Object(h.c)("gray.100","gray.800"),o=Object(h.c)("gray.400","gray.800"),r=Object(h.c)("gray.500","gray.600");return Object(k.jsxs)(s.a,{w:"100%",bg:e,px:4,py:3,shadow:"dark-lg",pointerEvents:"auto",children:[Object(k.jsx)(I.a,{fontSize:"3xl",ps:2,color:n,children:"ERacer Portal"}),Object(k.jsx)(L.a,{}),Object(k.jsxs)(D.a,{width:450,ms:4,borderColor:o,children:[Object(k.jsx)(H.a,{pointerEvents:"none",fontSize:"1em",color:n,bg:t,children:[Object(k.jsx)(m.a,{},"eracer-globeicon"),Object(k.jsx)(A.a,{ms:3,children:"ws://"},"earcer-wsheader")],borderColor:o}),Object(k.jsx)(F.a,{placeholder:"Websocket Address",_placeholder:{color:r},color:n,borderColor:o,_hover:{borderColor:r}}),Object(k.jsx)(R.a,{w:"fit-content",borderColor:o,children:Object(k.jsx)(_.a,{size:"xs",m:2,colorScheme:"teal",children:"Connect"})})]}),Object(k.jsx)(J,{ms:4})]})},V=n(209),Y=n(159),q=function(e){var t=Object(h.c)(".700",".400"),n=e.setWaypoints,o=Object(a.useCallback)((function(t){var o;void 0!==(null===(o=t.destination)||void 0===o?void 0:o.index)&&n((function(n){var o,r,a,i,c=(r=t.source.index,a=null===(o=t.destination)||void 0===o?void 0:o.index,i=n,g()(i,r,a)),l=new S.CurveInterpolator(c.map((function(e){return[e.lon,e.lat]})),{tension:W}).getPoints(P);return e.setPolyline({points:l,path:M(l)}),c}))}),[n]);return Object(k.jsx)(Y.a,{onDragEnd:o,children:Object(k.jsx)(d.a,{h:"100%",style:{overflow:"auto"},children:Object(k.jsx)(Y.c,{droppableId:"eracer-waypoints",children:function(n,o){return Object(k.jsxs)(d.a,Object(j.a)(Object(j.a)({ref:n.innerRef},n.droppableProps),{},{children:[e.waypoints.map((function(n,o){return Object(k.jsx)(Y.b,{draggableId:n.key,index:o,children:function(o,r){return Object(k.jsx)(d.a,Object(j.a)(Object(j.a)(Object(j.a)({ref:o.innerRef},o.draggableProps),o.dragHandleProps),{},{children:Object(k.jsxs)(s.a,{py:3,borderY:"0.5px solid gray",style:{borderCollapse:"collapse"},alignItems:"center",flexDirection:"row",onMouseEnter:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{active:!0}),e)}))},onMouseLeave:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{active:!1}),e)}))},pointerEvents:"fill",children:[Object(k.jsx)(d.a,{px:3,children:Object(k.jsx)(V.a,{size:20,cursor:"pointer",onClick:function(){return e.setWaypoints((function(t){var o=function(e,t){var n=Array.from(t);return n.splice(t.findIndex((function(t){return t.key===e.key})),1),n}(n,t),r=o.length?new S.CurveInterpolator(o.map((function(e){return[e.lon,e.lat]})),{tension:W}).getPoints(P):[];return e.setPolyline({points:r,path:M(r)}),o}))}})}),Object(k.jsx)(d.a,{px:2,pl:4,children:Object(k.jsx)(C,{waypoint:n,setWaypoints:e.setWaypoints})}),Object(k.jsxs)(d.a,{px:2,fontSize:"xs",w:"100%",children:["Lat: ",n.lat.toFixed(6),Object(k.jsx)("br",{}),"Lon: ",n.lon.toFixed(6)]}),Object(k.jsx)(d.a,{px:4,textAlign:"right",fontSize:"md",onClick:function(){e.setWaypoints((function(e){return w(Object(j.a)(Object(j.a)({},n),{},{fullStop:!n.fullStop}),e)}))},children:Object(k.jsx)(A.a,{whiteSpace:"nowrap",textColor:"".concat(n.fullStop?"red":"teal").concat(t),cursor:"pointer",children:n.fullStop?"Full Stop":"Coast"})})]},n.key)}))}},n.key)})),n.placeholder]}))}})})})},G=function(e){var t=Object(h.c)("gray.300","gray.700"),n=Object(h.c)("gray.400","gray.600"),o=Object(h.c)(".300",".400");return Object(k.jsx)(s.a,{shadow:"dark-lg",rounded:"lg",flex:1,alignSelf:"flex-end",w:"30%",minW:300,maxW:450,m:4,overflow:"hidden",bg:t,pointerEvents:"auto",flexDirection:"column",children:Object(k.jsxs)(s.a,{bg:n,h:300,m:5,rounded:"lg",flexDirection:"column",overflow:"hidden",children:[Object(k.jsx)(s.a,{bg:"red".concat(o),w:"100%",py:2,px:4,children:Object(k.jsx)(I.a,{fontSize:"2xl",children:"Waypoints"})}),Object(k.jsx)(d.a,{flex:1,style:{overflow:"auto"},children:Object(k.jsx)(q,{waypoints:e.waypoints,setWaypoints:e.setWaypoints,polyline:e.polyline,setPolyline:e.setPolyline})})]})})},K=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),c=i[0],j=i[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{minH:"100vh",maxH:"100vh",children:Object(k.jsx)(z,{waypoints:n,setWaypoints:o,polyline:c,setPolyline:j})}),Object(k.jsxs)(s.a,{position:"absolute",top:0,left:0,minH:"100vh",maxH:"100vh",minW:"100vw",maxW:"100vw",direction:"column",textAlign:"center",fontSize:"xl",pointerEvents:"none",children:[Object(k.jsx)(Z,{}),Object(k.jsx)(G,{waypoints:n,setWaypoints:o,polyline:c,setPolyline:j})]})]})},N=n(290),Q=Object(N.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});c.a.render(Object(k.jsx)(a.StrictMode,{children:Object(k.jsxs)(o.a,{theme:Q,children:[Object(k.jsx)(r.a,{initialColorMode:Q.config.initialColorMode}),Object(k.jsx)(K,{})]})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.99366dc0.chunk.js.map