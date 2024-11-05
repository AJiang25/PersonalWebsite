"use strict";(self.webpackChunkarnold=self.webpackChunkarnold||[]).push([[206],{6206:(r,e,t)=>{t.r(e),t.d(e,{default:()=>X});var a=t(5043),n=t(5376),o=t(6942),i=t(6132),s=t(2110),l=t(6494),c=t(7353),d=t(4496),p=t(8387),u=t(8610),m=t(1546),f=t(875),b=t(3290),g=t(4535),v=t(6262),h=t(2445),y=t(8206),A=t(6803),x=t(2532),C=t(2372);function j(r){return(0,C.Ay)("MuiLinearProgress",r)}(0,x.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var k=t(579);const w=b.i7`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,S="string"!==typeof w?b.AH`
        animation: ${w} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,$=b.i7`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,I="string"!==typeof $?b.AH`
        animation: ${$} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,B=b.i7`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,L="string"!==typeof B?b.AH`
        animation: ${B} 3s infinite linear;
      `:null,P=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,m.a)(r.palette[e].main,.62):(0,m.e$)(r.palette[e].main,.5),M=(0,g.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,A.A)(t.color)}`],e[t.variant]]}})((0,v.A)((r=>{let{theme:e}=r;return{position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter((0,h.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{backgroundColor:P(e,t)}}})),{props:r=>{let{ownerState:e}=r;return"inherit"===e.color&&"buffer"!==e.variant},style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}}))),D=(0,g.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,A.A)(t.color)}`]]}})((0,v.A)((r=>{let{theme:e}=r;return{position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter((0,h.A)()).map((r=>{let[t]=r;const a=P(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}}))]}})),L||{animation:`${B} 3s infinite linear`}),q=(0,g.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,A.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,v.A)((r=>{let{theme:e}=r;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter((0,h.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:{width:"auto"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:S||{animation:`${w} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}}))),z=(0,g.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,A.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,v.A)((r=>{let{theme:e}=r;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter((0,h.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}}})),{props:r=>{let{ownerState:e}=r;return"buffer"!==e.variant&&"inherit"!==e.color},style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:r=>{let{ownerState:e}=r;return"buffer"!==e.variant&&"inherit"===e.color},style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter((0,h.A)()).map((r=>{let[t]=r;return{props:{color:t,variant:"buffer"},style:{backgroundColor:P(e,t),transition:"transform .4s linear"}}})),{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:{width:"auto"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:I||{animation:`${$} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}}))),O=a.forwardRef((function(r,e){const t=(0,y.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:n="primary",value:o,valueBuffer:i,variant:s="indeterminate",...l}=t,c={...t,color:n,variant:s},d=(r=>{const{classes:e,variant:t,color:a}=r,n={root:["root",`color${(0,A.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,A.A)(a)}`],bar1:["bar",`barColor${(0,A.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,A.A)(a)}`,"buffer"===t&&`color${(0,A.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,u.A)(n,j,e)})(c),m=(0,f.I)(),b={},g={bar1:{},bar2:{}};if("determinate"===s||"buffer"===s)if(void 0!==o){b["aria-valuenow"]=Math.round(o),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let r=o-100;m&&(r=-r),g.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===s)if(void 0!==i){let r=(i||0)-100;m&&(r=-r),g.bar2.transform=`translateX(${r}%)`}else 0;return(0,k.jsxs)(M,{className:(0,p.A)(d.root,a),ownerState:c,role:"progressbar",...b,ref:e,...l,children:["buffer"===s?(0,k.jsx)(D,{className:d.dashed,ownerState:c}):null,(0,k.jsx)(q,{className:d.bar1,ownerState:c,style:g.bar1}),"determinate"===s?null:(0,k.jsx)(z,{className:d.bar2,ownerState:c,style:g.bar2})]})}));var R=t(6487),H=t(1595),N=t(1982),F=t(9252);const G=[{name:"JavaScript",icon:N.A,progress:90,tags:["Frontend","Backend"]},{name:"Python",icon:N.A,progress:75,tags:["Backend","Data Science"]},{name:"Java",icon:N.A,progress:70,tags:["Backend"]},{name:"C++",icon:N.A,progress:50,tags:["Systems"]},{name:"React",icon:N.A,progress:85,tags:["Frontend"]},{name:"Node.js",icon:N.A,progress:80,tags:["Backend"]},{name:"HTML/CSS",icon:N.A,progress:95,tags:["Frontend"]},{name:"SQL",icon:N.A,progress:70,tags:["Database"]},{name:"TensorFlow",icon:N.A,progress:10,tags:["Machine Learning"]},{name:"Git",icon:N.A,progress:85,tags:["Version Control"]},{name:"Docker",icon:N.A,progress:60,tags:["DevOps"]},{name:"AWS",icon:N.A,progress:65,tags:["Cloud"]},{name:"Linux",icon:N.A,progress:75,tags:["Operating System"]}],T=r=>r>=80?"#4caf50":r>=60?"#2196f3":"#ff9800",J=r=>{let{name:e,icon:t,progress:a,tags:n}=r;return(0,k.jsx)(s.A,{variant:"outlined",sx:{height:"100%",display:"flex",flexDirection:"column"},children:(0,k.jsxs)(l.A,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[(0,k.jsxs)(c.A,{display:"flex",alignItems:"center",mb:2,children:[(0,k.jsx)(t,{size:24}),(0,k.jsx)(d.A,{variant:"h6",ml:1,children:e})]}),(0,k.jsx)(c.A,{display:"flex",alignItems:"center",mb:2,children:(0,k.jsx)(O,{variant:"determinate",value:a,sx:{flexGrow:1,ml:1,"& .MuiLinearProgress-bar":{backgroundColor:T(a)}}})}),(0,k.jsx)(c.A,{mt:"auto",children:n.map((r=>(0,k.jsx)(R.A,{label:r,size:"small",sx:{mr:.5,mb:.5}},r)))})]})})},V=()=>(0,k.jsx)(c.A,{id:"About",sx:r=>({width:"100%",backgroundRepeat:"no-repeat",backgroundImage:"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",...r.applyStyles("dark",{backgroundImage:"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"})}),children:(0,k.jsx)(F.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",pt:{xs:14,sm:15},pb:{xs:8,sm:12}},children:(0,k.jsx)(H.A,{container:!0,spacing:2,children:G.map((r=>(0,k.jsx)(H.A,{item:!0,xs:12,sm:6,md:4,lg:2,children:(0,k.jsx)(J,{...r})},r.name)))})})});function X(){return(0,k.jsxs)(i.A,{children:[(0,k.jsx)(n.Ay,{enableColorScheme:!0}),(0,k.jsx)(o.A,{}),(0,k.jsx)("div",{children:(0,k.jsx)(V,{})})]})}},1982:(r,e,t)=>{t.d(e,{A:()=>o});t(5043);var a=t(7346),n=t(579);const o=(0,a.A)((0,n.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")}}]);
//# sourceMappingURL=206.17bd7f20.chunk.js.map