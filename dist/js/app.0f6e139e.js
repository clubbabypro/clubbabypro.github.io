(function(){"use strict";var e={102:function(e,t){t["Z"]={home:"Home",home_welcome:"Welcome to ClubBabyPro website",home_team_description:"We are a team of students in Computer Science, that decided to develop personal projects during our free-time. You will discover all our differents projects here.",game_description_title:"DRIVE AWAY!",game_description:"The police are chasing you, slaloming between their cars and the buildings of the city in order to survive and collect as much gold as possible.",game_customisation:"With the gold you collect, buy yourself a new vehicle to go faster or better withstand shocks."}},224:function(e,t){t["Z"]={home:"Accueil",home_welcome:"Bienvenue sur le site web de ClubBabyPro",home_team_description:"Nous sommes un groupe d'étudiants en informatique, qui a décidé de développer des projets personnels pendant son temps libre. Vous découvrirez ici tous nos différents projets.",game_description_title:"ENFUYEZ VOUS!",game_description:"Les policiers vous poursuivent, slalomez entre leurs voitures et les bâtiments de la ville afin de survivre et de collecter le plus d'or possible.",game_customisation:"Avec l'or que vous récoltez, achetez un nouveau véhicule pour aller plus vite ou mieux résister aux chocs."}},526:function(e,t,n){var o=n(144),r=n(629),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"content"},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",[t("h3",[t("router-link",{attrs:{to:"/"}},[e._v(e._s(e.languages[e.language].home))])],1)]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",[t("h5",[t("router-link",{attrs:{to:"/hotpursuit"}},[e._v("HotPursuit")])],1)])],1)],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("h5",[t("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[t("b-dropdown-item",{on:{click:function(t){return e.changeLanguage("en")}}},[e._v("EN")]),t("b-dropdown-item",{on:{click:function(t){return e.changeLanguage("fr")}}},[e._v("FR")])],1)],1)])],1)],1),t("router-view"),t("main",{staticClass:"content"}),t("footer",{staticClass:"bg-light text-center"},[t("b-container",[t("b-row",[t("b-col",[t("p",[e._v("Copyright ©2022 My Website")])]),t("b-col",{staticClass:"text-right"},[t("b-link",{staticClass:"text-decoration-none social-link",attrs:{href:"https://play.google.com/store/apps/details?id=com.ClubBabyPro.HotPursuit",target:"_blank",rel:"noopener"}},[t("font-awesome-icon",{attrs:{icon:["fab","google-play"]}})],1),t("b-link",{staticClass:"text-decoration-none social-link",attrs:{href:"https://github.com/clubbabypro",target:"_blank",rel:"noopener"}},[t("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),t("b-link",{staticClass:"text-decoration-none social-link",attrs:{href:"mailto:club.babypro@gmail.com",target:"_blank",rel:"noopener"}},[t("font-awesome-icon",{attrs:{icon:["fa","envelope"]}})],1)],1)],1)],1)],1)],1)},i=[],u=n(102),s=n(224),l={data(){return{languages:{en:u.Z,fr:s.Z}}},computed:{language(){return this.$store.state.language}},methods:{changeLanguage(e){this.$store.commit("changeLanguage",e)}}},c=l,f=n(1),d=(0,f.Z)(c,a,i,!1,null,null,null),p=d.exports,g=n(345),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",width:"200",height:"200",src:n(551)}}),t("HomePage")],1)},h=[],b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.languages[e.language].home_welcome))]),t("p",[e._v(" "+e._s(e.languages[e.language].home_team_description)+" ")])])},v=[],_={name:"HomePage",data(){return{languages:{en:u.Z,fr:s.Z}}},computed:{language(){return this.$store.state.language}}},y=_,w=(0,f.Z)(y,b,v,!1,null,"1b25866e",null),k=w.exports,C={name:"HomeView",components:{HomePage:k}},x=C,P=(0,f.Z)(x,m,h,!1,null,null,null),j=P.exports,O=function(){var e=this;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("h1",[e._v(" Hot-Pursuit privacy policy")]),t("h2",[e._v("Information collected")]),t("p",[e._v("No informations are collected")]),t("h2",[e._v("Contact")]),t("p",[e._v("Contact us by email at club.babypro[at]gmail[dot]com")])])}],E={},A=(0,f.Z)(E,O,Z,!1,null,null,null),N=A.exports;o["default"].use(g.ZP);const S=[{path:"/",name:"home",component:j},{path:"/hotpursuit",name:"hotpursuit",component:()=>n.e(443).then(n.bind(n,922))},{path:"/privacy",name:"privacy",component:N}],L=new g.ZP({routes:S});var T=L,H=n(657),B=n(17),F=(n(24),n(636)),z=n(78),U=n(417),Y=n(810);F.vI.add(z.neY,z.mdU,z.Zzi,z.YUQ,z.zhw,z.xYR,U.FU$),o["default"].use(r.ZP);const q=new r.ZP.Store({state:{language:"en"},mutations:{changeLanguage(e,t){e.language=t}}});o["default"].component("font-awesome-icon",Y.GN),o["default"].config.productionTip=!1,o["default"].use(H.XG7),o["default"].use(B.A7),new o["default"]({store:q,router:T,render:e=>e(p)}).$mount("#app")},551:function(e,t,n){e.exports=n.p+"img/logo_cbp.b72d21fc.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.2870036e.js"}}(),function(){n.miniCssF=function(e){return"css/about.3a30bbc6.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="club_baby_pro:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],s=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var c=s(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkclub_baby_pro"]=self["webpackChunkclub_baby_pro"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(526)}));o=n.O(o)})();
//# sourceMappingURL=app.0f6e139e.js.map