(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8831:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(29),a=r(6835),i=r(7794),l=r.n(i),s=r(1163),c=r(7294),o=r(1664),d=r.n(o),m=r(5944),h=function(e){var t=e.active,r=void 0!==t&&t,n=e.children,a=e.href,i=e.target;return(0,m.tZ)(d(),{href:a,children:(0,m.tZ)("a",{className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ".concat(r?"border-gray-900 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),target:i,children:n})})},u=function(e){var t=e.active,r=void 0!==t&&t,n=e.children,a=e.href,i=e.target;return(0,m.tZ)(d(),{href:a,children:(0,m.tZ)("a",{className:"block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 ".concat(r?"border-gray-900 text-gray-600 bg-gray-300":"border-transparent text-gray-600"),target:i,children:n})})},f=function(){return(0,m.tZ)(d(),{href:"/",children:(0,m.tZ)("a",{className:"font-logo inline-flex items-center px-1 pt-1 border-b-2 border-white border-opacity-0 text-3xl font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",children:"Hiroki Ono"})})},p=r(4048),g=function(e){var t=e.color,r=void 0===t?"#000000":t,n=e.size,a=void 0===n?"24px":n;return(0,m.tZ)(p.Z,{style:{color:r,width:a,height:a}})},b=function(){var e=(0,s.useRouter)(),t=(0,c.useState)(!1),r=t[0],n=t[1];return(0,m.BX)("nav",{className:"bg-white border-b border-gray-100",children:[(0,m.tZ)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,m.BX)("div",{className:"flex justify-between h-16",children:[(0,m.tZ)("div",{className:"flex",children:(0,m.BX)("div",{className:"hidden font-ubuntu space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[(0,m.tZ)(f,{}),(0,m.tZ)(h,{href:"/",active:"/"===e.pathname,children:"Home"}),(0,m.tZ)(h,{href:"#about-me",children:"About Me"}),(0,m.tZ)(h,{href:"#works",children:"Works"}),(0,m.BX)(h,{href:"https://github.com/ono-hiroki/ono-hiroki.github.io",target:"_blank",children:["Source",(0,m.tZ)(g,{color:"#CCC",size:"18px"})]})]})}),(0,m.tZ)("div",{className:"justify-self-start flex items-center sm:hidden",children:(0,m.tZ)(f,{})}),(0,m.tZ)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,m.tZ)("button",{onClick:function(){return n((function(e){return!e}))},className:"inline-flex border items-center justify-center p-2 rounded-md text-gray-400 text-gray-500 transition duration-150 ease-in-out",children:(0,m.tZ)("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:r?(0,m.tZ)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):(0,m.tZ)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),r&&(0,m.tZ)("div",{className:"block sm:hidden",children:(0,m.tZ)("div",{className:"py-1 border-t border-gray-200",children:(0,m.BX)("div",{className:"my-3 space-y-1",children:[(0,m.tZ)(u,{href:"/",active:"/"===e.pathname,children:"Home"}),(0,m.tZ)(u,{href:"#about-me",children:"About Me"}),(0,m.tZ)(u,{href:"#works",children:"Works"}),(0,m.tZ)(u,{href:"https://github.com/ono-hiroki/ono-hiroki.github.io",target:"_blank",children:"Source"})]})})})]})},x=r(9499),v=r(7812),y=function(e){return(0,m.BX)("div",{className:"font-ubuntu "+e.className,children:[e.text,e.children]})},Z=function(e){var t=e.text,r=e.cursor,n=void 0!==r&&r,a=e.prefix,i=void 0===a?"$ ":a,l=e.className;return(0,m.tZ)(m.HY,{children:(0,m.tZ)(y,{text:i+t,className:l,children:n&&(0,m.tZ)("span",{className:"content-[''] align-middle w-1.5 h-5 inline-block bg-gray-900 animate-blink"})})})},N=function(e){return(0,m.tZ)(y,{text:e.text,className:e.className})};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t=e.lines,r=e.canStart,n=e.lineClassName,i=e.typingInterval,l=void 0===i?50:i,s=e.ComputerInterval,o=void 0===s?200:s,d=e.UserInterval,h=void 0===d?2e3:d,u=c.useState([]),f=(0,a.Z)(u,2),p=f[0],g=f[1];(0,c.useEffect)((function(){if(r&&p.length<=t.length){var e=p[p.length-1],n=t[p.length-1];if(0!==p.length&&e.text.length<n.text.length){if("cmd"===e.type){var a,i=n.text[e.text.length],s=0===e.text.length;a=setTimeout((function(){var t=(0,v.Z)(p);t[t.length-1]=k(k({},e),{},{text:e.text.concat(i)}),g(t),clearTimeout(a)}),s?h:l)}else if("res"===p[p.length-1].type){var c=(0,v.Z)(p);c[c.length-1]=k(k({},e),{},{text:t[p.length-1].text}),g(c)}}else if(p.length<t.length){var d;d=setTimeout((function(){var e=[].concat((0,v.Z)(p),[{type:t[p.length].type,text:"",cursor:!0}]);e.length>1&&(e[e.length-2]=k(k({},p[e.length-2]),{},{cursor:!1})),g(e),clearTimeout(d)}),o)}}}),[r,p]);return(0,m.tZ)(m.HY,{children:p.map((function(e){return"cmd"===e.type?(0,m.tZ)(Z,{text:e.text,cursor:e.cursor,className:n}):"res"===e.type?(0,m.tZ)(N,{text:e.text,className:n}):void 0}))})},O=function(e){return(0,m.tZ)("div",{className:e.outerClassName,children:(0,m.tZ)(_,{lines:e.lines,canStart:e.canStart,lineClassName:e.lineClassName})})},j=r(131),X=(r(2523),function(e){return(0,m.tZ)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,m.BX)("div",{className:"rounded overflow-hidden shadow-lg grid md:grid-cols-2 transform transition duration-500 hover:scale-95 hover:opacity-50",children:[(0,m.tZ)("div",{className:"flex",children:(0,m.tZ)("img",{className:"w-full h-auto my-auto",src:e.ImageSrc,alt:e.ImageAlt})}),(0,m.BX)("div",{className:"grid mx-3 mt-6",children:[(0,m.BX)("div",{className:"mb-6",children:[(0,m.tZ)("h3",{className:"font-bold text-3xl mb-6",children:e.leading}),(0,m.tZ)("p",{className:"text-gray-700 text-base",children:e.content})]}),(0,m.tZ)("div",{className:"mb-3",children:e.tags.map((function(e){return(0,m.tZ)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:e},e)}))})]})]})})}),B=function(e){return(0,m.tZ)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,m.tZ)("div",{className:"rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-95 hover:opacity-50",children:(0,m.tZ)("p",{className:"text-gray-700 text-base p-6",children:e.title})})})},S=r(6868),C=r.n(S),P=r(5241),M=JSON.parse('{"background":{"color":"#dce8e8"},"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"retina_detect":true}'),H=function(){var e=(0,j.YD)({rootMargin:"-100px",triggerOnce:!0}),t=(0,a.Z)(e,2),r=t[0],i=t[1],s=(0,j.YD)({rootMargin:"-100px",triggerOnce:!0}),c=(0,a.Z)(s,2),o=c[0],d=c[1],h=function(){var e=(0,n.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.R)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.BX)("div",{children:[(0,m.tZ)(b,{}),(0,m.BX)("main",{className:"w-full",children:[(0,m.tZ)(C(),{init:h,options:M,className:"-z-10 absolute"}),(0,m.tZ)("div",{className:"h-screen pb-16 flex items-center justify-center",children:(0,m.tZ)(O,{outerClassName:"h-56 w-4/5 sm:w-2/3 lg:w-1/3 p-7 rounded bg-white",lineClassName:"",lines:[{type:"cmd",text:"pwd"},{type:"res",text:"\u304a\u304a\u306e\u3072\u308d\u304d"},{type:"cmd",text:"ls"},{type:"res",text:"about-me\u2003works\u2003Links"},{type:"cmd",text:"view all"},{type:"res",text:"\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u3061\u3087..."},{type:"cmd",text:""}],canStart:!0})}),(0,m.tZ)("div",{className:"bg-white pb-6",children:(0,m.BX)("div",{className:"mx-auto max-w-5xl sm:w-3/5 px-8",children:[(0,m.BX)("div",{ref:r,className:"py-28",style:{minHeight:"600px"},children:[(0,m.tZ)("a",{id:"about-me",children:(0,m.tZ)("h2",{className:"text-5xl mb-6 w-full",children:"About Me"})}),i&&(0,m.BX)("div",{className:"animate__animated animate__fadeInUp w-full grid md:grid-cols-2",children:[(0,m.BX)("div",{className:"my-auto",children:[(0,m.tZ)("p",{children:"\u829d\u6d66\u5de5\u696d\u5927\u5b66\u6570\u7406\u79d1\u5b66\u79d1\u3001\u73fe\u5728\u5b66\u90e83\u5e74\u3002"}),(0,m.tZ)("a",{href:"https://github.com/ono-hiroki",target:"_blank",rel:"noopener noreferrer",children:(0,m.BX)("div",{className:"flex my-6 transform duration-200 hover:opacity-50",children:[(0,m.tZ)("img",{alt:"github",src:"/GitHub-Mark-64px.png",className:"w-6 mr-2"}),(0,m.tZ)("p",{className:"underline",children:"@ono-hiroki"}),(0,m.tZ)(g,{})]})})]}),(0,m.tZ)("div",{className:"pt-10 md:pl-10 md:pt-0 flex",children:(0,m.tZ)("img",{className:"rounded-full border-8 m-auto w-60 md:max-w-xs md:w-full",src:"/profile.jpg",alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf"})})]})]}),(0,m.BX)("div",{className:"py-10",style:{minHeight:"800px"},children:[(0,m.tZ)("a",{id:"works",children:(0,m.tZ)("h2",{className:"text-5xl mb-3 w-full",children:"Works"})}),(0,m.tZ)("div",{ref:o,className:"mb-10",children:d&&(0,m.tZ)("div",{className:"animate__animated animate__fadeInUp",children:(0,m.tZ)(X,{ImageSrc:"/tele_labo_image.jpeg",ImageAlt:"\u30c6\u30ec\u30e9\u30dc\u306e\u30a4\u30e1\u30fc\u30b8",leading:"\u30c6\u30ec\u30e9\u30dc",content:"\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30af\u3084\u5728\u5b85\u52e4\u52d9\u306a\u3069\u3001\u65b0\u3057\u3044\u50cd\u304d\u65b9\u306b\u7279\u5316\u3057\u305f\u6c42\u4eba\u30b5\u30a4\u30c8\u3002 10\u30f6\u6708\u306b\u3057\u3066\u6708\u959310\u4e07PV\u3001\u7d2f\u8a0855\u4e07PV\u3092\u9054\u6210\u3001\u6c42\u4eba\u63b2\u8f09\u4f01\u696d\u6570\u308235\u793e\u3092\u8d85\u3048\u3001\u7dcf\u984d4500\u4e07\u5186\u306e\u8cc7\u91d1\u8abf\u9054\u3082\u9054\u6210\u3057\u307e\u3057\u305f\u3002 \u696d\u754c\u6700\u5927\u7d1a\u306e\u898f\u6a21\u306e\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30af\u7279\u5316\u30e1\u30c7\u30a3\u30a2\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u672c\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u306f\u3001\u682a\u5f0f\u4f1a\u793eDrafty\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3001\u30d5\u30ed\u30f3\u30c8\u30b5\u30a4\u30c9\u307e\u3067\u5e45\u5e83\u304f\u62c5\u5f53\u3057\u307e\u3057\u305f\u3002 ",tags:["Laravel","PHP","JavaScript","AWS","MySQL"],link:"https://tele-labo.jp/"})})})]}),(0,m.BX)("div",{className:"py-10",children:[(0,m.tZ)("a",{id:"links"}),(0,m.tZ)("h2",{className:"text-5xl mb-3 w-full",children:"Links"}),(0,m.tZ)("div",{className:"mb-6",children:(0,m.tZ)(B,{title:"\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30ab\u30fc\u306e\u305f\u3081\u306e\u6c42\u4eba\u30e1\u30c7\u30a3\u30a2\u300c\u30c6\u30ec\u30e9\u30dc\u300d\u3092\u5c55\u958b\u3059\u308b\u682a\u5f0f\u4f1a\u793eDrafty\u3001\u7b2c\u4e09\u8005\u5272\u5f53\u5897\u8cc7\u306b\u3088\u308a\u7dcf\u984d4500\u4e07\u5186\u306e\u8cc7\u91d1\u8abf\u9054\u3092\u5b9f\u65bd",link:"https://prtimes.jp/main/html/rd/p/000000004.000067180.html"})})]}),(0,m.tZ)("div",{className:"text-gray-400 text-center",children:"\xa9 2022 Hiroki Ono. All Rights Reserved."})]})})]})]})}},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8831)}])}},function(e){e.O(0,[784,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);