(function(e){function t(t){for(var A,n,s=t[0],i=t[1],c=t[2],u=0,l=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(A in i)Object.prototype.hasOwnProperty.call(i,A)&&(e[A]=i[A]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],A=!0,n=1;n<r.length;n++){var s=r[n];0!==a[s]&&(A=!1)}A&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var A={},n={app:0},a={app:0},o=[];function s(e){return i.p+"js/"+({"film~home":"film~home",film:"film",home:"home",person:"person",search:"search"}[e]||e)+"."+{"film~home":"ff889eea",film:"6a2295b5",home:"cd33e86c",person:"2c089d06",search:"46c6cac0"}[e]+".js"}function i(t){if(A[t])return A[t].exports;var r=A[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={film:1,home:1,person:1,search:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var A="css/"+({"film~home":"film~home",film:"film",home:"home",person:"person",search:"search"}[e]||e)+"."+{"film~home":"31d6cfe0",film:"87114499",home:"df35f950",person:"a170a132",search:"5c1feda4"}[e]+".css",a=i.p+A,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===A||u===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],u=c.getAttribute("data-href");if(u===A||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var A=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+A+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=A,delete n[e],f.parentNode.removeChild(f),r(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){n[e]=0})));var A=a[e];if(0!==A)if(A)t.push(A[2]);else{var o=new Promise((function(t,r){A=a[e]=[t,r]}));t.push(A[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var A=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+A+": "+n+")",l.name="ChunkLoadError",l.type=A,l.request=n,r[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=A,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var A in e)i.d(r,A,function(t){return e[t]}.bind(null,A));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var A=r("85ec"),n=r.n(A);n.a},"065b":function(e,t,r){"use strict";var A=r("23f3"),n=r.n(A);n.a},"23f3":function(e,t,r){},4303:function(e,t,r){"use strict";var A=r("cef6"),n=r.n(A);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var A=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.$root.loading?r("Preloader"):e._e(),r("SearchBarTemplate"),r("router-view"),r("FooterTemplate"),r("GoTop",{attrs:{right:30,bottom:30,"has-outline":!1,"bg-color":"#eb4e7a"}})],1)},a=[],o=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"search-bar-template"},[A("router-link",{attrs:{to:"/"}},[A("img",{staticClass:"search-bar-template__home-link",attrs:{src:r("fbf5")}})]),A("form",{staticClass:"search-bar-template__form",on:{submit:function(t){return t.preventDefault(),e.send(e.query)}}},[A("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar-template__form-input",attrs:{placeholder:"search films"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._m(0)]),A("router-link",{attrs:{to:"/discover?movie&sort_by=popularity.desc&vote_average.gte=&with_people=&with_genres=&year=&page=1"}},[A("img",{staticClass:"search-bar-template__discover-link",attrs:{src:r("ad45")}})])],1)},s=[function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("button",{staticClass:"search-bar-template__form-button",attrs:{type:"submit"}},[A("img",{staticClass:"search-bar-template__form-button-image",attrs:{src:r("bbc5")}})])}];r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("5319");function i(e){return e?(e=e.toString(),e.replace(/[^a-z0-9+]+/gi,"-")):""}var c={data:function(){return{query:""}},methods:{send:function(e){this.$router.push("/search?".concat(i(e),"&page=1")),this.query=""}}},u=c,l=(r("4303"),r("2877")),f=Object(l["a"])(u,o,s,!1,null,"7a7cc8d5",null),h=f.exports,p=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"footer-template"},[A("div",{staticClass:"footer-template__container"},[A("div",{staticClass:"footer-template__bio"},[A("div",[A("div",{staticClass:"footer-template__header"},[A("div",{staticClass:"footer-template__title"},[e._v("Film cloud")]),A("div",{staticClass:"footer-template__links"},[A("router-link",{staticClass:"footer-template__link",attrs:{to:"/"}},[A("div",[e._v("Home")])]),A("router-link",{staticClass:"footer-template__link",attrs:{to:"/discover?movie&sort_by=popularity.desc&vote_average.gte=&with_people=&with_genres=&year=&page=1"}},[A("div",[e._v("Discover")])])],1)]),A("div",[e._v(" Code and design by Aleksandr Savostian ")])]),A("img",{staticClass:"footer-template__db-image",attrs:{src:r("a751")}})])])])},d=[],m={},g=m,v=(r("065b"),Object(l["a"])(g,p,d,!1,null,"1e36c930",null)),b=v.exports,w=r("49ec"),C=r.n(w),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$root.loading?r("div",{staticClass:"preloader",attrs:{id:"page-preloader"}},[r("div",{staticClass:"loader"})]):e._e()])},Q=[],I={},B=Object(l["a"])(I,E,Q,!1,null,null,null),y=B.exports,_={components:{SearchBarTemplate:h,FooterTemplate:b,Preloader:y,GoTop:C.a},created:function(){this.$store.dispatch("loadMovieGenres"),this.$store.dispatch("loadTVShowsGenres")}},D=_,P=(r("034f"),Object(l["a"])(D,n,a,!1,null,null,null)),G=P.exports,x=r("8c4f");A["a"].use(x["a"]);var z=[{path:"/",name:"home",component:function(){return Promise.all([r.e("film~home"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/details/:filmType/:filmID",name:"film",component:function(){return Promise.all([r.e("film~home"),r.e("film")]).then(r.bind(null,"4344"))},props:!0},{path:"/person/:actorID",name:"actor",component:function(){return r.e("person").then(r.bind(null,"3272"))}},{path:"/search",name:"search",component:function(){return r.e("search").then(r.bind(null,"2d3b"))},props:!0},{path:"/discover",name:"discover",component:function(){return r.e("search").then(r.bind(null,"6723"))},props:!0}],M=new x["a"]({routes:z,scrollBehavior:function(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),H=M,O=(r("d81d"),r("b0c0"),r("96cf"),r("2f62")),T=r("bc3a"),N=r.n(T);A["a"].use(O["a"]);var k=new O["a"].Store({state:{MovieGenres:[],TVShowGenres:[]},mutations:{setMovieGenres:function(e,t){e.MovieGenres=t},setTVShowGenres:function(e,t){e.TVShowGenres=t}},actions:{loadMovieGenres:function(e){var t,r;return regeneratorRuntime.async((function(A){while(1)switch(A.prev=A.next){case 0:return t=e.commit,r=[],A.next=4,regeneratorRuntime.awrap(N.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f943d3d10cc39fd734122d69efabbacb").then((function(e){r=e.data.genres})));case 4:t("setMovieGenres",r);case 5:case"end":return A.stop()}}))},loadTVShowsGenres:function(e){var t,r;return regeneratorRuntime.async((function(A){while(1)switch(A.prev=A.next){case 0:return t=e.commit,r=[],A.next=4,regeneratorRuntime.awrap(N.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=f943d3d10cc39fd734122d69efabbacb").then((function(e){r=e.data.genres})));case 4:t("setTVShowGenres",r);case 5:case"end":return A.stop()}}))}},getters:{movieGenresNames:function(e){var t=e.MovieGenres.map((function(e){return e.name}));return t},tvshowGenresNames:function(e){var t=e.TVShowGenres.map((function(e){return e.name}));return t}}});function S(e){return e?(e=e.toString(),e.replace(/_/g," ")):""}function Y(e){return e?(e=e.toString(),e.replace(/-/g," ")):""}var j={methods:{getCurrentMediaTypeGenresNames:function(e,t){if(t){for(var r=[],A=0,n=0;n<t.length;n++)for(var a=0;a<e.length;a++)t[n]===e[a].id&&(r[A]=e[a].name,A++);if(0===r.length)return;if(1===r.length)return r[0];if(r.length>1)return r[0]+"/"+r[1]}},getCurrentMediaTypeGenres:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=[],r.next=3,regeneratorRuntime.awrap(N.a.get("https://api.themoviedb.org/3/genre/".concat(e,"/list?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t=e.data.genres})));case 3:return r.abrupt("return",t);case 4:case"end":return r.stop()}}))}}},V=r("95bf");A["a"].use(V["a"]),A["a"].config.productionTip=!1,A["a"].filter("replaceLodashToSpace",S),A["a"].filter("replaceAllToDash",i),A["a"].filter("replaceDashToSpace",Y),A["a"].mixin({data:function(){return{globalImgAddress:"https://image.tmdb.org/t/p/w"}}}),A["a"].mixin(j);var q=new A["a"]({data:{loading:!1},router:H,store:k,render:function(e){return e(G)}}).$mount("#app");H.afterEach((function(){q.loading=!0,setTimeout((function(){return q.loading=!1}),1500)}))},"85ec":function(e,t,r){},a751:function(e,t,r){e.exports=r.p+"img/TMDB.734a7d4c.png"},ad45:function(e,t,r){e.exports=r.p+"img/discover.f7c854f3.png"},bbc5:function(e,t,r){e.exports=r.p+"img/search.8c2d612b.png"},cef6:function(e,t,r){},fbf5:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAAQMEBgkLDhIVGh4oLTM4QEZOVV5lb3eIkZmaoaqxub/HzNLX4ebq7fH09/n7/P6IR/qNAAAAAWJLR0Qwrtwt5AAABuhJREFUeNrt3FeWFEcURdFuEFaAEAKERxYQIBHzHx0fCN/ZriojXsbdewYVdb7eXSsPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdnL44OGhV8h14XFrTy56h1Q/PG2ttWeXvESmy89ba6213654i0RXf2//++Oa18hz/c/2yV8/eo80N/5uX3hx04tkufWyfeXVT94kye1/2jde/+xVctx5077z9hfvkuLuv+0I/93zMhnuv2tHevertwlw+KAtMgzM78LjdgzDwOw+nP+XGQbm9vH8v8wwMLPP5/9lhoF5fXn+X2YYmNXX5/9lhoE5fXv+X2YYmNH35/9lhoH5HHX+X2YYmM3R5/9lhoG5LJ3/lxkGJnLc+d8wML/jz/+GgdmddP43DMzt5PO/YWBmpzn/Gwbmdbrzv2FgVqc9/xsG5nT6879hYEZnOf8bBuZztvO/YWA2Zz3/Gwbmcvbzv2FgIuc7/xsGZnHe879hYA7nP/8bBmawy/nfMLB9u53/DQNbt+v53zCwbbuf/w0DW7aP879hYLv2c/43DGzVvs7/hoFt2t/53zCwRfs8/xsGNmff53/DwLbs//xvGNiSNc7/hoHtWOf8bxjYirXO/4aBbVjv/G8Y2II1z/+GgfrWPf8bBqpb+/xvGKht/fO/YaCyHud/w0Bdfc7/hoGi+p3/DQMV9Tz/Gwbq6Xv+NwxU0/v8bxiopf/53zBQyYjzv2GgjjHnf8NAFaPO/4aBGsad/w0DFYw8/xsGxht7/jcMjDb6/G8YGKrC+d8wME6N879hYJQq53/DwBh1zv+GgREqnf8NA/3VOv8bBnqrdv43DPRV7/xvGOip4vnfMNBPzfO/YaCXqud/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ef/9GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/7OHAef/7GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/7OHAef/7GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/3uoOww4//dRdRhw/u+l5DDg/N9TvWHA+b+vasOA839vtYYB5//+Kg0Dzv8j1BkGnP/HqDIMOP+PUmMYcP4fp8Iw4Pw/0vhhwPl/rNHDgPP/aGOHAef/8QYOA87/NYwaBpz/qxgzDDj/1zFiGHD+r6T/MOD8X0vvYcD5v5q+w4Dzfz09hwHn/4r6DQPO/zX1Ggac/6vqMww4/9fVYxhw/q+s/KeEHvmPTvLoYGYCEAACQAAIAAEgAASAABAAAkAACEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAASwkQDW/gUCEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoKj30L4ydH1gstUAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.80f6e004.js.map