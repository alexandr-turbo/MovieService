(function(e){function t(t){for(var o,n,s=t[0],A=t[1],c=t[2],l=0,u=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(o in A)Object.prototype.hasOwnProperty.call(A,o)&&(e[o]=A[o]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,n=1;n<r.length;n++){var s=r[n];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=A(A.s=r[0]))}return e}var o={},n={app:0},a={app:0},i=[];function s(e){return A.p+"js/"+({discover:"discover","film~home":"film~home",film:"film",home:"home",person:"person",search:"search"}[e]||e)+"."+{discover:"1bea0322","film~home":"fcef1b9d",film:"e6875c19",home:"5b61cb2f",person:"a75ac90c",search:"9b6036d3"}[e]+".js"}function A(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,A),r.l=!0,r.exports}A.e=function(e){var t=[],r={discover:1,"film~home":1,film:1,home:1,person:1,search:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({discover:"discover","film~home":"film~home",film:"film",home:"home",person:"person",search:"search"}[e]||e)+"."+{discover:"8fd10c26","film~home":"a849a576",film:"3dcf6b2b",home:"74a0b0eb",person:"1fa931c6",search:"c6a3820d"}[e]+".css",a=A.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=a[e]=[t,r]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,A.nc&&l.setAttribute("nonce",A.nc),l.src=s(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,r[1](u)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},A.m=e,A.c=o,A.d=function(e,t,r){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)A.d(r,o,function(t){return e[t]}.bind(null,o));return r},A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/",A.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var o=r("85ec"),n=r.n(o);n.a},1032:function(e,t,r){e.exports=r.p+"img/movies.9fa7d512.svg"},"19b0":function(e,t,r){e.exports=r.p+"img/people.8ff3e0a8.svg"},"33c2":function(e,t,r){"use strict";var o=r("bc33"),n=r.n(o);n.a},4209:function(e,t,r){"use strict";var o=r("d0ff"),n=r.n(o);n.a},4793:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.$root.loading?o("div",{staticClass:"preloader",attrs:{id:"page-preloader"}},[o("div",{staticClass:"loader"})]):e._e(),o("SearchBarTemplate"),o("router-view"),o("div",{staticClass:"app__go-to-top-button-container",attrs:{id:"backToTop"},on:{click:e.goToTop}},[o("img",{staticClass:"app__go-to-top-button",attrs:{src:r("b94f")}})]),o("FooterTemplate")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"search-bar-template"},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"search-bar-template__home-link",attrs:{src:r("fbf5")}})]),o("form",{staticClass:"search-bar-template__form",on:{submit:function(t){return t.preventDefault(),e.send(e.query)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar-template__form-input",attrs:{placeholder:"search films"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._m(0)]),o("router-link",{attrs:{to:"/discover?mediatype=movie&sort_by=popularity.desc&vote_average.gte=&with_people=&with_genres=&year=&page=1"}},[o("img",{staticClass:"search-bar-template__discover-link",attrs:{src:r("ad45")}})]),o("button",{staticClass:"toggle-theme"})],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"search-bar-template__form-button",attrs:{type:"submit"}},[o("img",{staticClass:"search-bar-template__form-button-image",attrs:{src:r("bbc5")}})])}];r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("5319");function A(e){return e?(e=e.toString(),e.replace(/[^a-z0-9+]+/gi,"-")):""}var c={data:function(){return{query:"",imgSrc:""}},methods:{send:function(e){this.$router.push("/search?".concat(A(e),"&page=1")),this.query=""}},mounted:function(){var e=document.querySelector(".toggle-theme"),t=document.documentElement;e.addEventListener("click",(function(){t.hasAttribute("data-theme")?(t.removeAttribute("data-theme"),localStorage.removeItem("theme")):(t.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))})),null!==localStorage.getItem("theme")&&t.setAttribute("data-theme","light")}},l=c,u=(r("a5ee"),r("2877")),f=Object(u["a"])(l,i,s,!1,null,"6f7762ca",null),p=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer-template"},[r("div",{staticClass:"container"},[r("div",{staticClass:"footer-template__links-row"},[r("div",{staticClass:"footer-template__links-column"},[e._m(0),r("router-link",{attrs:{to:"/",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Home")])]),r("router-link",{attrs:{to:"/discover?mediatype=movie&sort_by=popularity.desc&vote_average.gte=&with_people=&with_genres=&year=&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Discover")])])],1),r("div",{staticClass:"footer-template__links-column"},[e._m(1),r("router-link",{attrs:{to:"/search?top_rated_movies&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Top rated movies")])]),r("router-link",{attrs:{to:"/search?upcoming_movies&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Upcoming movies")])]),r("router-link",{attrs:{to:"/search?now_playing_movies&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Now playing movies")])]),r("router-link",{attrs:{to:"/search?popular_movies&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Popular movies")])])],1),r("div",{staticClass:"footer-template__links-column"},[e._m(2),r("router-link",{attrs:{to:"/search?popular_tv_shows&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Popular TV shows")])]),r("router-link",{attrs:{to:"/search?top_rated_tv_shows&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Top rated TV shows")])]),r("router-link",{attrs:{to:"/search?on_the_air_tv_shows&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("On the air TV shows")])]),r("router-link",{attrs:{to:"/search?airing_today_tv_shows&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Airing today TV shows")])])],1),r("div",{staticClass:"footer-template__links-column"},[e._m(3),r("router-link",{attrs:{to:"/search?popular_people&page=1",tag:"div"}},[r("div",{staticClass:"footer-template__link-title"},[e._v("Popular people")])])],1)]),e._m(4)])])},d=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-template__links-title"},[o("img",{staticClass:"footer-template__link-img",attrs:{src:r("6fb7")}}),o("div",[e._v("Explore")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-template__links-title"},[o("img",{staticClass:"footer-template__link-img",attrs:{src:r("1032")}}),o("div",[e._v("Movies")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-template__links-title"},[o("img",{staticClass:"footer-template__link-img",attrs:{src:r("7834")}}),o("div",[e._v("TV")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-template__links-title"},[o("img",{staticClass:"footer-template__link-img",attrs:{src:r("19b0")}}),o("div",[e._v("People")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer-template__bio"},[o("div",[o("div",{staticClass:"footer-template__header"},[o("div",{staticClass:"footer-template__title"},[e._v("Film cloud")])]),o("div",[e._v(" Code and design by Aleksandr Savostian ")])]),o("img",{staticClass:"footer-template__db-image",attrs:{src:r("a751")}})])}],h={},v=h,g=(r("33c2"),Object(u["a"])(v,m,d,!1,null,"48e9ec06",null)),_=g.exports,b={components:{SearchBarTemplate:p,FooterTemplate:_},created:function(){this.$store.dispatch("loadMovieGenres"),this.$store.dispatch("loadTVShowsGenres")},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){pageYOffset>=100?document.getElementById("backToTop").classList.add("app__go-to-top-button-visibility"):pageYOffset<100&&document.getElementById("backToTop").classList.remove("app__go-to-top-button-visibility")},goToTop:function(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}},C=b,w=(r("034f"),Object(u["a"])(C,n,a,!1,null,null,null)),E=w.exports,I=r("8c4f"),Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"not-found__container"},[r("div",{staticClass:"not-found"},[e._v(" Page not found ")])])}],B={},k=B,P=(r("4209"),Object(u["a"])(k,Q,y,!1,null,"63509cad",null)),D=P.exports;o["a"].use(I["a"]);var x=[{path:"*",component:D},{path:"/",name:"home",component:function(){return Promise.all([r.e("film~home"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/details/:filmType/:filmID",name:"film",component:function(){return Promise.all([r.e("film~home"),r.e("film")]).then(r.bind(null,"4344"))},props:!0},{path:"/person/:actorID",name:"actor",component:function(){return r.e("person").then(r.bind(null,"3272"))}},{path:"/search",name:"search",component:function(){return r.e("search").then(r.bind(null,"2d3b"))},props:!0},{path:"/discover",name:"discover",component:function(){return r.e("discover").then(r.bind(null,"6723"))},props:!0}],G=new I["a"]({mode:"history",routes:x,scrollBehavior:function(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),T=G,z=(r("96cf"),r("2f62")),O=r("bc3a"),M=r.n(O);o["a"].use(z["a"]);var H="f943d3d10cc39fd734122d69efabbacb",S=new z["a"].Store({state:{MovieGenres:[],TVShowGenres:[],loading:!0},mutations:{setMovieGenres:function(e,t){e.MovieGenres=t},setTVShowGenres:function(e,t){e.TVShowGenres=t},setLoadingTrue:function(e){e.loading=!0},setLoadingFalse:function(e){e.loading=!1}},actions:{loadMovieGenres:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.next=3,regeneratorRuntime.awrap(M.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(H)).then((function(e){t("setMovieGenres",e.data.genres)})));case 3:case"end":return r.stop()}}))},loadTVShowsGenres:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.next=3,regeneratorRuntime.awrap(M.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=".concat(H)).then((function(e){t("setTVShowGenres",e.data.genres)})));case 3:case"end":return r.stop()}}))}}});function N(e){return e?(e=e.toString(),e.replace(/[^a-z0-9+]+/gi," ")):""}r("b0c0");var Y={methods:{getCurrentMediaTypeGenresNames:function(e,t){if(e&&t){for(var r=[],o=0,n=0;n<t.length;n++)for(var a=0;a<e.length;a++)t[n]===e[a].id&&(r[o]=e[a].name,o++);if(0===r.length)return;if(1===r.length)return r[0];if(r.length>1)return r[0]+"/"+r[1]}}}},j=r("95bf");r.d(t,"Bus",(function(){return V})),o["a"].use(j["a"]),o["a"].config.productionTip=!1,o["a"].filter("replaceAllToSpace",N),o["a"].filter("replaceAllToDash",A);var V=new o["a"];o["a"].mixin({data:function(){return{globalImgAddress:"https://image.tmdb.org/t/p/w",globalAPIMovieDBAddress:"https://api.themoviedb.org"}}}),o["a"].mixin(Y);var L=new o["a"]({data:{loading:!1},router:T,store:S,render:function(e){return e(E)}}).$mount("#app");T.afterEach((function(){L.loading=!0}))},"6fb7":function(e,t,r){e.exports=r.p+"img/explore.734ad22d.svg"},7834:function(e,t,r){e.exports=r.p+"img/tv.89813eb9.svg"},"85ec":function(e,t,r){},a5ee:function(e,t,r){"use strict";var o=r("4793"),n=r.n(o);n.a},a751:function(e,t,r){e.exports=r.p+"img/TMDB.734a7d4c.png"},ad45:function(e,t,r){e.exports=r.p+"img/discover.f7c854f3.png"},b94f:function(e,t,r){e.exports=r.p+"img/arrow.d36e8e9d.svg"},bbc5:function(e,t,r){e.exports=r.p+"img/search.8c2d612b.png"},bc33:function(e,t,r){},d0ff:function(e,t,r){},fbf5:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAAQMEBgkLDhIVGh4oLTM4QEZOVV5lb3eIkZmaoaqxub/HzNLX4ebq7fH09/n7/P6IR/qNAAAAAWJLR0Qwrtwt5AAABuhJREFUeNrt3FeWFEcURdFuEFaAEAKERxYQIBHzHx0fCN/ZriojXsbdewYVdb7eXSsPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdnL44OGhV8h14XFrTy56h1Q/PG2ttWeXvESmy89ba6213654i0RXf2//++Oa18hz/c/2yV8/eo80N/5uX3hx04tkufWyfeXVT94kye1/2jde/+xVctx5077z9hfvkuLuv+0I/93zMhnuv2tHevertwlw+KAtMgzM78LjdgzDwOw+nP+XGQbm9vH8v8wwMLPP5/9lhoF5fXn+X2YYmNXX5/9lhoE5fXv+X2YYmNH35/9lhoH5HHX+X2YYmM3R5/9lhoG5LJ3/lxkGJnLc+d8wML/jz/+GgdmddP43DMzt5PO/YWBmpzn/Gwbmdbrzv2FgVqc9/xsG5nT6879hYEZnOf8bBuZztvO/YWA2Zz3/Gwbmcvbzv2FgIuc7/xsGZnHe879hYA7nP/8bBmawy/nfMLB9u53/DQNbt+v53zCwbbuf/w0DW7aP879hYLv2c/43DGzVvs7/hoFt2t/53zCwRfs8/xsGNmff53/DwLbs//xvGNiSNc7/hoHtWOf8bxjYirXO/4aBbVjv/G8Y2II1z/+GgfrWPf8bBqpb+/xvGKht/fO/YaCyHud/w0Bdfc7/hoGi+p3/DQMV9Tz/Gwbq6Xv+NwxU0/v8bxiopf/53zBQyYjzv2GgjjHnf8NAFaPO/4aBGsad/w0DFYw8/xsGxht7/jcMjDb6/G8YGKrC+d8wME6N879hYJQq53/DwBh1zv+GgREqnf8NA/3VOv8bBnqrdv43DPRV7/xvGOip4vnfMNBPzfO/YaCXqud/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ed/w0D6+d8wEH/+Nwykn/8NA+nnf8NA+vnfMJB+/jcMpJ//DQPp53/DQPr53zCQfv43DKSf/w0D6ef/9GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/7OHAef/7GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/7OHAef/7GHA+T96GHD+zx4GnP+zhwHn/+xhwPk/exhw/s8eBpz/s4cB5//sYcD5P3sYcP7PHgac/3uoOww4//dRdRhw/u+l5DDg/N9TvWHA+b+vasOA839vtYYB5//+Kg0Dzv8j1BkGnP/HqDIMOP+PUmMYcP4fp8Iw4Pw/0vhhwPl/rNHDgPP/aGOHAef/8QYOA87/NYwaBpz/qxgzDDj/1zFiGHD+r6T/MOD8X0vvYcD5v5q+w4Dzfz09hwHn/4r6DQPO/zX1Ggac/6vqMww4/9fVYxhw/q+s/KeEHvmPTvLoYGYCEAACQAAIAAEgAASAABAAAkAACEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAASwkQDW/gUCEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoKj30L4ydH1gstUAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.67ce38c1.js.map