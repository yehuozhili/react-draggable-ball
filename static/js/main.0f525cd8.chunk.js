(this["webpackJsonpreact-draggable-ball"]=this["webpackJsonpreact-draggable-ball"]||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(2),d=a(5),p=a.n(d),c=a(1),u={width:"50px",height:"50px",boxShadow:"inset 2px 2px 4px #d5d5d5, inset -2px -2px 4px #fff",borderRadius:"50%",position:"relative",padding:"5px",backgroundColor:"#fff",background:"linear-gradient(145deg, #fff, #fafafa)"},x={width:"20px",height:"20px",borderRadius:"50%",boxShadow:"2px 2px 4px #3690d9",backgroundColor:"#40a9ff",background:"linear-gradient(145deg, #4ac2ff, #40a9ff)",position:"relative",top:"15px",left:"15px"};function y(e,t){var a=Object(n.useState)(!1),i=Object(l.a)(a,2),o=i[0],d=i[1],y=Object(n.useState)({x:0,y:0}),b=Object(l.a)(y,2),s=b[0],v=b[1],f=Object(n.useMemo)((function(){return{wrapperStyle:u,innerStyle:x,intervalDelay:20,ratioSpeed:{x:1,y:1},draggableProps:{position:{x:0,y:0},bounds:"parent",onStart:function(){d(!0)},onDrag:function(e,t){v({x:t.x,y:t.y})},onStop:function(){d(!1)}},innerContent:null}}),[]),g=Object(n.useMemo)((function(){var e=null===t||void 0===t?void 0:t.draggableProps,a=Object(c.a)(Object(c.a)({},f.draggableProps),{},{userDraggableProps:e}),n=null===t||void 0===t?void 0:t.wrapperStyle,r=null===t||void 0===t?void 0:t.innerStyle;return{wrapperStyle:Object(c.a)(Object(c.a)({},f.wrapperStyle),n),innerStyle:Object(c.a)(Object(c.a)({},f.innerStyle),r),intervalDelay:(null===t||void 0===t?void 0:t.intervalDelay)?t.intervalDelay:f.intervalDelay,ratioSpeed:(null===t||void 0===t?void 0:t.ratioSpeed)?t.ratioSpeed:f.ratioSpeed,draggableProps:a,innerContent:(null===t||void 0===t?void 0:t.innerContent)?t.innerContent:null}}),[f.draggableProps,f.innerStyle,f.intervalDelay,f.ratioSpeed,f.wrapperStyle,t]);return Object(n.useEffect)((function(){var t;if(o){t=window.setInterval((function(){e((function(e){var t=s.x,a=s.y;return g.ratioSpeed.x&&(t*=g.ratioSpeed.x),g.ratioSpeed.y&&(a*=g.ratioSpeed.y),{x:e.x+t,y:e.y+a}}))}),g.intervalDelay)}return function(){window.clearInterval(t)}}),[s,o,g.intervalDelay,g.ratioSpeed,e]),[r.a.createElement("div",{style:g.wrapperStyle},r.a.createElement(p.a,g.draggableProps,r.a.createElement("div",{style:g.innerStyle},g.innerContent))),o,d,s,v]}var b=function(){var e=Object(n.useState)({x:0,y:0}),t=Object(l.a)(e,2),a=t[0],i=t[1],o=y(i,{ratioSpeed:{x:.5,y:.5}}),d=Object(l.a)(o,4),c=d[0],u=d[1],x=d[3];return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{position:a,onStop:function(e,t){i({x:t.x,y:t.y})}},r.a.createElement("div",{style:{width:"100px",height:"100px",backgroundColor:"red"}})),r.a.createElement("div",{style:{width:"100px",height:"100px",backgroundColor:"blue",position:"relative",transform:"translate(".concat(a.x,"px,").concat(a.y,"px)")}}),r.a.createElement("div",null,u),r.a.createElement("div",null,a.x,",",a.y),r.a.createElement("div",null,x.x,",",x.y),c)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0f525cd8.chunk.js.map