(this["webpackJsonplz-interface"]=this["webpackJsonplz-interface"]||[]).push([[6],{243:function(e,t,n){},381:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},425:function(e,t,n){},426:function(e,t,n){},438:function(e,t){},440:function(e,t){},452:function(e,t){},453:function(e,t){},475:function(e,t){},477:function(e,t){},479:function(e,t){},490:function(e,t){},492:function(e,t){},712:function(e,t){},714:function(e,t){},721:function(e,t){},722:function(e,t){},751:function(e,t){},785:function(e,t,n){},786:function(e,t,n){},787:function(e,t,n){},788:function(e,t,n){},818:function(e,t,n){},824:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(1),s=n.n(a),i=n(134),l=n.n(i),r=n(112),o=n(98),b=n(117),j=n(27),u=(n(425),n(243),n(426),n(3)),d=function(e){return Object(u.jsx)("span",Object(c.a)(Object(c.a)({role:"img"},e),{},{className:"lz-icon icon ".concat(e.className||""),children:e.children}))},m=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/pad.svg",alt:""},e))}))},h=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/lz-logo.svg",alt:""},e))}))},_=function(e){return"light"===e.type?Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/theme.svg",alt:""},e))})):Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/dark-theme.svg",alt:""},e))}))},O=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/telegram.svg",alt:""},e))}))},f=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/twitter.svg",alt:""},e))}))},p=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/language.svg",alt:""},e))}))},x=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/menu.svg",alt:""},e))}))},v=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/bsc-logo.svg",alt:""},e))}))},g=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/copy.svg",alt:""},e))}))},N=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/arrow-up.svg",alt:""},e))}))},y=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/x-icon.svg",alt:""},e))}))},w=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/double-right-arrow.svg",alt:""},e))}))},k=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)(Object(c.a)({src:"/icons/double-right-arrow.svg",alt:""},e),{},{style:Object(c.a)({transform:"scale(-1, -1)"},null===e||void 0===e?void 0:e.style)}))}))},C=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/facebook-logo.svg",alt:""},e))}))},S=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{className:"global-community-logo",children:Object(u.jsx)("img",Object(c.a)({src:"/icons/global-community-logo.svg",alt:""},e))}))},L=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/left-arrow.svg",alt:""},e))}))},z=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/left-arrow-grey.svg",alt:""},e))}))},P=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/down-arrow-grey.svg",alt:""},e))}))},I=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/countries/".concat(e.country.toLowerCase(),".svg"),alt:""},e))}))},E=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/docs.svg",alt:""},e))}))},M=function(e){return Object(u.jsx)(d,Object(c.a)(Object(c.a)({},e.containerProps),{},{children:Object(u.jsx)("img",Object(c.a)({src:"/icons/help.svg",alt:""},e))}))},W=(n(428),n(364)),T=n(365),B=n(366),F=n(367),R=n(368),D=n(369),A=n(370),H=n(371),Z=n(372),V=n(373),U=n(374),J=n(377),K="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",q="https://bsc-dataseed.binance.org/",G={connector:new T.a({supportedChainIds:[1,3,4,5,42,56,97]}),image:"/images/metamask.svg",title:"Metamask",desc:"Connect to your Metamask Wallet"},X={connector:new B.a({urls:{1:K,56:q},defaultChainId:56}),image:"/images/walletconnect.svg",title:"WalletConnect",desc:"Scan with WalletConnect to connect"},Y={connector:new F.a({rpc:{56:K,1:q},qrcode:!0}),image:"/images/walletconnect.svg",title:"WalletConnect",desc:"Scan with WalletConnect to connect"},Q={connector:new R.a({url:K,appName:"web3-react example",supportedChainIds:[1,3,4,5,42,56,97]}),image:"/images/coinbase.svg",title:"Coinbase",desc:"Connect to your Coinbase Wallet"},$={connector:new D.a({chainId:56}),image:"/images/authereum.svg",title:"Authereum",desc:"Connect with your Authereum account"},ee={injected:G,torus:{connector:new A.a({chainId:56}),image:"/images/torus.svg",title:"Torus",desc:"Connect with your Torus account"},network:X,authereum:$,walletlink:Q,walletconnect:Y,fortmatic:{connector:new H.a({chainId:4,apiKey:"pk_test_A6260FCBAA2EBDFB"}),image:"/images/fortmatic.svg",title:"Fortmatic",desc:"Connect to your Fortmatic Wallet"},magic:{connector:new Z.a({chainId:4,apiKey:"pk_test_398B82F5F0E88874",email:"hello@example.com"}),image:"/images/magic.svg",title:"Magic",desc:"Connect to your Magic Wallet"},portis:{connector:new V.a({dAppId:"8d6490e0-0111-4c49-a93b-3a4f67e7e258",networks:[1,100]}),image:"/images/portis.svg",title:"Portis",desc:"Connect to your Portis Wallet"},ledger:{connector:new U.a({chainId:56,url:q,pollingInterval:12e3}),image:"/images/ledger.svg",title:"Ledger",desc:"Connect to your Ledger Wallet"},frame:{connector:new J.a({supportedChainIds:[1]}),image:"/images/image.svg",title:"Frame",desc:"Connect to your Frame Wallet"}},te=n(80),ne=function(e){var t,n;return(null===(t=e.slice)||void 0===t?void 0:t.call(e,0,6))+"..."+(null===(n=e.slice)||void 0===n?void 0:n.call(e,e.length-4,e.length))},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=te.utils.formatUnits(e,t),c=n.split(".");return c.length>0&&(c[1]=c[1].slice(0,4)),".0"===(n=c.join(".")).slice(-2)?n.slice(0,-2):n},ae=n(35),se=n(66),ie=n(222),le=n(23),re=n.n(le),oe=(n(785),function(e){var t=e.theme,n=e.className,a=e.borderStyle,s=e.style,i=e.children,l=e.onClick;return Object(u.jsx)("div",{className:"lz-button-container ".concat({dark:"forced-dark",light:"forced-light"}[t]||""),onClick:l,style:Object(c.a)({},a),children:Object(u.jsx)("div",{className:"lz-button-text ".concat(n||""),style:Object(c.a)({},s),children:i})})}),be=(n(786),function(e){return Object(u.jsxs)("div",Object(c.a)(Object(c.a)({className:"account-info-button"},e),{},{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"account-info-button__brief",children:[Object(u.jsx)("div",{className:"account-info-button__address",children:e.account&&ne(e.account)}),Object(u.jsxs)("div",{className:"account-info-button__bnb-balance",children:[e.balance," BNB"]})]})]}))}),je=(n(787),function(e){return Object(u.jsx)("span",Object(c.a)(Object(c.a)({},e),{},{className:"lz-text ".concat(e.className),children:e.children}))}),ue=(n(788),n(356)),de=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"copyable-address-container",children:[Object(u.jsx)("div",{className:"copyable-address",children:t}),Object(u.jsx)(ue.CopyToClipboard,{text:t,children:Object(u.jsx)(g,{containerProps:{className:"copyable-address-copy-icon"}})})]})},me=n(381),he=n(382),_e=n.n(he),Oe=(n(795),function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}),fe=function(e){var t=Oe().width;return t&&t>768?e.children:null},pe=function(e){var t=Oe().width;return t&&t<=768?e.children:null},xe=n(133),ve=n.n(xe),ge=n(384),Ne={en:{english:"English",vietnamese:"Ti\u1ebfng Vi\u1ec7t",wallet:"Wallet",bnb_balance:"BNB Balance",lz_balance:"LZ Balance",view_on_bscscan:"View on BscScan",your_address:"Your address",disconnect_wallet:"Disconnect Wallet",connect_wallet:"Connect Wallet"},vi:{english:"English",vietnamese:"Ti\u1ebfng Vi\u1ec7t",wallet:"V\xed",bnb_balance:"S\u1ed1 d\u01b0 BNB",lz_balance:"S\u1ed1 d\u01b0 LZ",view_on_bscscan:"Xem tr\xean bscscan",your_address:"\u0110\u1ecba ch\u1ec9",disconnect_wallet:"Ng\u1eaft k\u1ebft n\u1ed1i",connect_wallet:"K\u1ebft n\u1ed1i v\xed"}},ye=n(813).CrossStorageClient,we="web3connector",ke="theme",Ce="/swap",Se=function(e){var t,n,c=Object(r.b)(),s=c.activate,i=c.account,l=c.deactivate,d=c.chainId,v=c.library,g=Object(a.useState)(),T=Object(j.a)(g,2),B=T[0],F=T[1],R=Object(a.useState)(),D=Object(j.a)(R,2),A=D[0],H=D[1],Z=Object(a.useState)(),V=Object(j.a)(Z,2),U=V[0],J=V[1],K=Object(a.useState)("light"),q=Object(j.a)(K,2),G=q[0],X=q[1],Y=e.dapps,Q=Object(ae.l)(),$=Object(ae.k)(),te=Object(a.useState)(!1),ne=Object(j.a)(te,2),le=ne[0],ue=ne[1],he=Object(a.useState)(!1),Oe=Object(j.a)(he,2),xe=Oe[0],Se=Oe[1],Le=Object(a.useState)(!1),ze=Object(j.a)(Le,2),Pe=ze[0],Ie=ze[1],Ee=Object(a.useState)(!1),Me=Object(j.a)(Ee,2),We=Me[0],Te=Me[1],Be=function(){var e=Object(a.useState)(localStorage.getItem("language")||"en"),t=Object(j.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){localStorage.setItem("language",n)}),[n]);var s=function(e){return Ne[n][e]?Ne[n][e]:e},i={en:s("english")};return{language:n,setLanguage:c,getText:s,supportedLanguages:i}}(),Fe=Be.language,Re=Be.setLanguage,De=Be.getText,Ae=Be.supportedLanguages,He=Object(a.useRef)(null),Ze=Object(a.useRef)(null),Ve=Object(a.useState)(void 0),Ue=Object(j.a)(Ve,2),Je=Ue[0],Ke=Ue[1];Object(a.useEffect)((function(){for(var e in Y){var t=Y[e].configs.children;for(var n in t)if(Object(ae.j)(Q.pathname,{path:t[n].path,exact:"/"===t[n].path}))return void(document.title="LaunchZone | "+t[n].name);Object(ae.j)(Q.pathname,{path:Y[e].configs.path})&&(document.title="LaunchZone | "+("Home"===Y[e].configs.name?"The Ultimate DeFi Platform":Y[e].configs.name))}}),[Q.pathname]),Object(a.useEffect)((function(){"/"===Q.pathname&&$.push(Ce)}),[Q.pathname]),Object(ge.a)("esc",(function(e){e.preventDefault(),ue(!1),Ie(!1)})),Object(a.useEffect)((function(){var e=new ye("https://xs.lz.finance");e.onConnect().then((function(){Ke(e)})).then((function(){console.log("x-storage","connected","https://xs.lz.finance");var t=new URLSearchParams(Q.search).get("r");if(t){var n=o.ethers.utils.getAddress(t);return e.set("LZ_REFERRAL",n).then((function(){return console.log("x-storage","LZ_REFERRAL",n)}))}})).catch(console.error)}),["https://xs.lz.finance"]),Object(a.useEffect)((function(){var e=localStorage.getItem(ke);X(e||"light");var t={branch:"main",tags:[],commit:{shortHash:"dd15ed6",hash:"dd15ed65ec83328ab48ebee4920cc4fa30652209",date:"2022-04-20T17:14:53+07:00",message:"Merge pull request #82 from launchzone/lz-pool\n\nfix stake pool"}};console.log("Environment:","production"),console.log("Hash:",t.commit.hash)}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem(we);if(e){var t=Object.values(ee).map((function(e){return e.connector})).find((function(t){var n;return(null===t||void 0===t||null===(n=t.constructor)||void 0===n?void 0:n.name)===e}));t&&s(t)}}),[s]),Object(a.useEffect)((function(){i&&v&&(v.getBalance(i).then((function(e){F(ce(e))})).catch((function(){F(null)})),F(void 0))}),[i,v,d]),Object(a.useEffect)((function(){i&&v&&(Ge(i),new o.ethers.Contract("0x3b78458981eb7260d1f781cb8be2caac7027dbe2",me,v).balanceOf(i).then((function(e){H(ce(e))})).catch((function(){H(null)})),H(void 0))}),[i,v,d]);var qe=Object(a.useRef)(null),Ge=function(e){fetch("https://apipool.lz.finance/api/detail/"+e).catch((function(e){return console.error(e)}))},Xe=function(e){var t=e.configs;if(Object(ae.j)(Q.pathname,{path:t.path,exact:"/"===t.path}))return!0;if(t.children){var n,c=Object(b.a)(t.children);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(Object(ae.j)(Q.pathname,{path:a.path,exact:"/"===a.path}))return!0}}catch(s){c.e(s)}finally{c.f()}}return!1},Ye=function(){for(var e in Y){var t=Y[e].configs.children;for(var n in t)if(Object(ae.j)(Q.pathname,{path:t[n].path,exact:"/"===t[n].path}))return{Component:Y[e].Component[n],configs:t[n]};if(Object(ae.j)(Q.pathname,{path:Y[e].configs.path,exact:"/"===Y[e].configs.path}))return Y[e]}return Y[0]}(),Qe=null===Ye||void 0===Ye?void 0:Ye.Component;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"".concat(G||"light"),children:Object(u.jsxs)("div",{className:"body",children:[Object(u.jsxs)(fe,{children:[Object(u.jsxs)(_e.a,{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebar__top",children:[Object(u.jsx)(se.Link,{to:Ce,className:"sidebar__lz-logo-container",children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"sidebar__menu-item-list",children:[null===Y||void 0===Y?void 0:Y.map((function(e){var t=e.configs,n=t.icon,c=t.children;return Object(u.jsxs)("div",{className:"sidebar__menu-item",children:[Object(u.jsx)(se.Link,{to:t.menuLink||t.path,children:Object(u.jsxs)("div",{className:"sidebar__menu-item__label ".concat(Xe({configs:t})&&"active"),children:[t.icon?Object(u.jsx)(n,{className:"sidebar__menu-item__icon"}):null,Object(u.jsx)("div",{className:"sidebar__menu-item__title",children:Object(u.jsx)("span",{className:"sidebar__menu-item__title-text",children:t.name})}),Object(u.jsx)("div",{className:"sidebar__menu-item__title-selected ".concat(Xe({configs:t})||Object(ae.j)(Q.pathname,{path:t.path,exact:"/"===t.path})?"active":"")})]})}),Object(u.jsx)("div",{className:"sidebar__menu-item__submenu ".concat(Xe({configs:t})?"expand":""),children:null===c||void 0===c?void 0:c.map((function(e){return Object(ae.j)(Q.pathname,{path:e.path,exact:"/"===e.path})?Object(u.jsx)(se.Link,{to:t.menuLink||t.path,children:Object(u.jsx)(je,{className:"sidebar__sub-menu-item",children:e.name})}):Object(u.jsx)(se.Link,{to:e.menuLink||e.path,children:Object(u.jsx)("div",{className:"sidebar__sub-menu-item",children:e.name})})}))})]})})),Object(u.jsx)("div",{className:"sidebar__menu-item",children:Object(u.jsx)("a",{href:"/pad",children:Object(u.jsxs)("div",{className:"sidebar__menu-item__label",children:[Object(u.jsx)(m,{className:"sidebar__menu-item__icon"}),Object(u.jsx)("div",{className:"sidebar__menu-item__title",children:Object(u.jsx)("span",{className:"sidebar__menu-item__title-text",children:"Pad"})}),Object(u.jsx)("div",{className:"sidebar__menu-item__title-selected"})]})})}),Object(u.jsx)("div",{className:"sidebar__menu-item",children:Object(u.jsx)("a",{href:"https://docs.lz.finance/",target:"_blank",children:Object(u.jsxs)("div",{className:"sidebar__menu-item__label",children:[Object(u.jsx)(E,{className:"sidebar__menu-item__icon"}),Object(u.jsx)("div",{className:"sidebar__menu-item__title",children:Object(u.jsx)("span",{className:"sidebar__menu-item__title-text",children:"Docs"})}),Object(u.jsx)("div",{className:"sidebar__menu-item__title-selected"})]})})}),Object(u.jsx)("div",{className:"sidebar__menu-item",children:Object(u.jsx)("a",{href:"https://help.lz.finance/",target:"_blank",children:Object(u.jsxs)("div",{className:"sidebar__menu-item__label",children:[Object(u.jsx)(M,{className:"sidebar__menu-item__icon"}),Object(u.jsx)("div",{className:"sidebar__menu-item__title",children:Object(u.jsx)("span",{className:"sidebar__menu-item__title-text",children:"Help"})}),Object(u.jsx)("div",{className:"sidebar__menu-item__title-selected"})]})})})]}),Object(u.jsxs)("div",{ref:He,className:"sidebar__account-info-button-container",onClick:function(){i&&Ie((function(e){return!e})),!i&&J(!0)},children:[i?null:Object(u.jsx)(oe,{theme:"dark",className:"sidebar__connect-wallet-button",children:De("connect_wallet")}),i?Object(u.jsx)(be,{account:i,balance:B}):null]})]}),Object(u.jsx)("div",{className:"sidebar__bottom",children:Object(u.jsxs)("div",{className:"sidebar__bottom__container",children:[Object(u.jsxs)("div",{className:"sidebar__bottom__configs",children:[Object(u.jsx)(_,{className:"sidebar__bottom__theme-icon",onClick:function(){var e="dark"===G?"light":"dark";localStorage.setItem(ke,e),X(e)},type:G}),Object(u.jsx)(ve.a,{onOutsideClick:function(){Te(!1)},children:Object(u.jsxs)("div",{className:"sidebar__bottom__language",onClick:function(){Te(!We)},children:[Object(u.jsx)(p,{className:"sidebar__bottom__language-icon"}),Object(u.jsx)("span",{className:"sidebar__bottom__language-text",children:Fe})]})})]}),Object(u.jsxs)("div",{className:"sidebar__bottom__social-media-icons",children:[Object(u.jsx)("a",{href:"https://t.me/lzofficial",target:"_blank",children:Object(u.jsx)(O,{})}),Object(u.jsx)("a",{href:"https://t.me/launchzoneann",target:"_blank",children:Object(u.jsx)(S,{})}),Object(u.jsx)("a",{href:"https://twitter.com/launchzoneann",target:"_blank",children:Object(u.jsx)(f,{})}),Object(u.jsx)("a",{href:"https://www.facebook.com/launchzoneann",target:"_blank",children:Object(u.jsx)(C,{})})]})]})})]}),Object(u.jsxs)("div",{className:"sidebar__bottom__language--select ".concat(We?"active":""),children:[Object(u.jsx)("span",{className:"btn-close-language",children:Object(u.jsx)(z,{})}),Object.entries(Ae).map((function(e,t){return Object(u.jsxs)("div",{onClick:function(){Re(e[0])},className:"sidebar__bottom__language--select-option ".concat(Fe===e[0]?"selected":""),children:[Object(u.jsx)(I,{country:e[0]}),Object(u.jsx)("span",{className:"ml-1",children:e[1]})]},t)}))]}),Object(u.jsx)("div",{className:"desktop-content",children:Qe&&Object(u.jsx)(a.Suspense,{fallback:null,children:Object(u.jsx)(Qe,{language:Fe,theme:G,useWeb3React:r.b,xStorageClient:Je,useSubPage:function(){return Q.pathname},env:"production",showConnectWalletModal:function(){return J(!0)}})})}),Object(u.jsx)(ve.a,{disabled:!Pe,onOutsideClick:function(e){e.path.includes(He.current)||Ie(!1)},children:Object(u.jsxs)("div",{className:"sidebar__expand ".concat(Pe?"show":""),children:[Object(u.jsx)(L,{className:"sidebar__expand__left-arrow-icon",onClick:function(){Ie((function(e){return!e}))}}),Object(u.jsx)(je,{children:De("your_address")}),Object(u.jsx)(de,{children:i}),Object(u.jsxs)("div",{className:"sidebar__expand__bnb-balance",children:[Object(u.jsx)("div",{children:De("bnb_balance")}),Object(u.jsx)("div",{children:B})]}),Object(u.jsxs)("div",{className:"sidebar__expand__lz-balance",children:[Object(u.jsx)("div",{children:De("lz_balance")}),Object(u.jsx)("div",{children:A})]}),Object(u.jsx)(je,{className:"sidebar__expand__view-on-bsc-scan",children:Object(u.jsx)("a",{target:"_blank",href:"https://bscscan.com/address/".concat(i),children:De("view_on_bscscan")})}),Object(u.jsx)(oe,{onClick:function(){l(),localStorage.removeItem(we),Ie(!1)},children:De("disconnect_wallet")})]})})]}),Object(u.jsxs)(pe,{children:[Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsxs)("div",{className:"navbar__top-line",children:[Object(u.jsx)("div",{className:"navbar__lz-logo-icon-container",children:Object(u.jsx)(h,{})}),Object(u.jsx)(je,{className:"navbar__title",children:null===Ye||void 0===Ye?void 0:Ye.configs.name}),xe?Object(u.jsx)("div",{className:"navbar__menu-icon",children:Object(u.jsx)(N,{onClick:function(){Se(!1)}})}):Object(u.jsx)("div",{className:"navbar__menu-icon",children:Object(u.jsx)(x,{onClick:function(){Se(!0)}})})]}),Object(u.jsxs)("div",{className:"navbar__menu-item-list ".concat(xe&&"active"," "),children:[null===Y||void 0===Y?void 0:Y.map((function(e){var t=e.configs,n=t.icon;return t.children&&t.children.length>0?t.children.map((function(e){return Object(u.jsxs)(se.Link,{to:e.menuLink||e.path,className:"navbar__menu-item",children:[e.icon?Object(u.jsx)(n,{className:"navbar__menu-item__icon"}):null,Object(u.jsxs)("div",{className:"navbar__menu-item__title",children:[Object(u.jsx)("span",{className:"navbar__menu-item__title-text",children:e.name}),Object(ae.j)(Q.pathname,{path:e.path,exact:"/"===e.path})?Object(u.jsx)("div",{className:"navbar__menu-item__title-selected"}):null]})]})})):Object(u.jsxs)(se.Link,{to:t.menuLink||t.path,className:"navbar__menu-item",children:[t.icon?Object(u.jsx)(n,{className:"navbar__menu-item__icon"}):null,Object(u.jsxs)("div",{className:"navbar__menu-item__title",children:[Object(u.jsx)("span",{className:"navbar__menu-item__title-text",children:t.name}),Object(ae.j)(Q.pathname,{path:t.path,exact:"/"===t.path})?Object(u.jsx)("div",{className:"navbar__menu-item__title-selected"}):null]})]})})),Object(u.jsxs)("a",{className:"navbar__menu-item",href:"/pad",children:[Object(u.jsx)(m,{className:"navbar__menu-item__icon"}),Object(u.jsx)("div",{className:"navbar__menu-item__title",children:Object(u.jsx)("span",{className:"navbar__menu-item__title-text",children:"Pad"})})]}),Object(u.jsxs)("a",{className:"navbar__menu-item",href:"https://docs.lz.finance/",target:"_blank",children:[Object(u.jsx)(E,{className:"navbar__menu-item__icon"}),Object(u.jsx)("div",{className:"navbar__menu-item__title",children:Object(u.jsx)("span",{className:"navbar__menu-item__title-text",children:"Docs"})})]}),Object(u.jsxs)("a",{className:"navbar__menu-item",href:"https://help.lz.finance/",target:"_blank",children:[Object(u.jsx)(M,{className:"navbar__menu-item__icon"}),Object(u.jsx)("div",{className:"navbar__menu-item__title",children:Object(u.jsx)("span",{className:"navbar__menu-item__title-text",children:"Help"})})]})]})]}),(null===Ye||void 0===Ye||null===(t=Ye.configs.children)||void 0===t?void 0:t.length)&&xe?Object(u.jsx)("div",{className:"navbar__sub-menu-item-list",children:Object(u.jsx)(ie.a,{className:"navbar__sub-menu-item-list__parallax",ref:qe,pages:Math.ceil((null===Ye||void 0===Ye||null===(n=Ye.configs.children)||void 0===n?void 0:n.length)/4),horizontal:!0,children:re()(null===Ye||void 0===Ye?void 0:Ye.configs.children).chunk(4).map((function(e,t){var n=function(){var e,n,c,a,s,i;return(null!==(e=null===Ye||void 0===Ye||null===(n=Ye.configs)||void 0===n||null===(c=n.children)||void 0===c?void 0:c.length)&&void 0!==e?e:0)<=4?"SINGLE":0===t?"FIRST":4*(t+t)>=(null!==(a=null===Ye||void 0===Ye||null===(s=Ye.configs)||void 0===s||null===(i=s.children)||void 0===i?void 0:i.length)&&void 0!==a?a:0)?"LAST":"MIDDLE"}(),c={SINGLE:"1fr 1fr 1fr 1fr",FIRST:"1fr 1fr 1fr 1fr 0.4fr",MIDDLE:"0.4fr 1fr 1fr 1fr 1fr 0.4fr",LAST:"0.4fr 1fr 1fr 1fr 1fr"}[n];return Object(u.jsx)(ie.b,{className:"navbar__sub-menu-item-list__parallax-layer",offset:t,children:Object(u.jsxs)("div",{className:"navbar__sub-menu-item-list__grid",style:{gridTemplateColumns:c},children:[["MIDDLE","LAST"].includes(n)?Object(u.jsx)("div",{className:"navbar__sub-menu-item-list__prev-icon",onClick:function(){qe.current&&qe.current.scrollTo(t-1)},children:Object(u.jsx)(k,{})}):null,e.map((function(e){return Object(u.jsx)(se.Link,{className:"navbar__sub-menu-item-list__item-title",to:e.menuLink||e.path,children:e.name})})),["MIDDLE","FIRST"].includes(n)?Object(u.jsx)("div",{className:"navbar__sub-menu-item-list__next-icon",onClick:function(){qe.current&&qe.current.scrollTo(t+1)},children:Object(u.jsx)(w,{})}):null]})})})).value()})}):null,Object(u.jsx)("div",{className:"mobile-content",children:Qe&&Object(u.jsx)(a.Suspense,{fallback:null,children:Object(u.jsx)(Qe,{theme:G,language:Fe,useWeb3React:r.b,useSubPage:function(){return Q.pathname},xStorageClient:Je,env:"production",showConnectWalletModal:function(){return J(!0)}})})}),Object(u.jsx)(ve.a,{disabled:!le,onOutsideClick:function(e){e.path.includes(Ze.current)||ue(!1)},children:Object(u.jsxs)("div",{className:"footer__expand ".concat(le?"show":""),children:[Object(u.jsx)(je,{children:De("your_address")}),Object(u.jsx)(de,{children:i}),Object(u.jsxs)("div",{className:"footer__expand__bnb-balance",children:[Object(u.jsx)("div",{children:De("bnb_balance")}),Object(u.jsx)("div",{children:B})]}),Object(u.jsxs)("div",{className:"footer__expand__lz-balance",children:[Object(u.jsx)("div",{children:De("lz_balance")}),Object(u.jsx)("div",{children:A})]}),Object(u.jsxs)("div",{className:"footer__expand__view-on-bsc-scan",children:[Object(u.jsx)(je,{className:"footer__expand__view-on-bsc-scan-link",children:Object(u.jsx)("a",{target:"_blank",href:"https://bscscan.com/address/".concat(i),children:De("view_on_bscscan")})}),Object(u.jsxs)("div",{className:"footer__expand__social-medias",children:[Object(u.jsx)("a",{href:"https://t.me/lzofficial",target:"_blank",children:Object(u.jsx)(O,{})}),Object(u.jsx)("a",{href:"https://t.me/launchzoneann",target:"_blank",children:Object(u.jsx)(S,{})}),Object(u.jsx)("a",{href:"https://twitter.com/launchzoneann",target:"_blank",children:Object(u.jsx)(f,{})}),Object(u.jsx)("a",{href:"https://www.facebook.com/launchzoneann",target:"_blank",children:Object(u.jsx)(C,{})})]})]}),Object(u.jsx)(oe,{onClick:function(){l(),localStorage.removeItem(we),ue(!1)},children:De("disconnect_wallet")})]})}),Object(u.jsxs)("div",{className:"footer",children:[i?null:Object(u.jsx)(oe,{theme:"dark",className:"footer__connect-wallet-button",onClick:function(){J(!0)},children:De("connect_wallet")}),i?Object(u.jsx)("div",{ref:Ze,children:Object(u.jsx)(be,{onClick:function(){console.log(le),ue(!le)},account:i,balance:B})}):null,Object(u.jsx)(_,{type:G,onClick:function(){var e="dark"===G?"light":"dark";localStorage.setItem(ke,e),X(e)}}),Object(u.jsx)(ve.a,{onOutsideClick:function(){Te(!1)},children:Object(u.jsxs)("div",{className:"footer__language",onClick:function(){return Te(!We)},children:[Object(u.jsx)(p,{className:"footer__language-icon"}),Object(u.jsx)("span",{className:"footer__language-text",children:Fe.toUpperCase()}),Object(u.jsxs)("div",{className:"footer__language--select ".concat(We?"active":""),children:[Object(u.jsx)("span",{className:"btn-close-language",children:Object(u.jsx)(P,{})}),Object.entries(Ae).map((function(e,t){return Object(u.jsx)("div",{onClick:function(){Re(e[0])},className:"footer__language--select-option ".concat(Fe===e[0]?"selected":""),children:e[1]},t)}))]})]})}),le?Object(u.jsx)(y,{onClick:function(){ue((function(e){return!e}))}}):Object(u.jsx)(x,{onClick:function(){i&&ue((function(e){return!e})),!i&&J(!0)}})]})]}),Object(u.jsx)(W.a,{visible:U,setVisible:J,providerOptions:ee,onConnect:function(e,t,n){var c,a=null===e||void 0===e||null===(c=e.constructor)||void 0===c?void 0:c.name;n&&"MagicConnector"===a&&(e.email=n),s(e,(function(e){alert(e.toString())})),a&&localStorage.setItem(we,a)}})]})})})};n(818);var Le={icon:function(e){return Object(u.jsx)("img",Object(c.a)({src:"/icons/earn.svg"},e))},name:"Earn",children:[n(819),n(821)],path:"/bank"},ze={icon:function(e){return Object(u.jsx)("img",Object(c.a)({src:"/icons/exchange.svg"},e))},name:"Exchange",children:[n(822)],path:"/swap"};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{getLibrary:function(e){return new o.ethers.providers.Web3Provider(e)},children:Object(u.jsx)(se.BrowserRouter,{children:Object(u.jsx)(Se,{dapps:[{Component:s.a.lazy((function(){return n.e(173).then(n.t.bind(null,1923,7)),n.e(180).then(n.t.bind(null,1924,7))})),configs:n(823)},{Component:[s.a.lazy((function(){return n.e(176).then(n.t.bind(null,1925,7)),Promise.all([n.e(0),n.e(4),n.e(2),n.e(163),n.e(186)]).then(n.t.bind(null,1926,7))}))],configs:ze},{configs:Le,Component:[s.a.lazy((function(){return n.e(175).then(n.t.bind(null,1929,7)),Promise.all([n.e(4),n.e(161)]).then(n.t.bind(null,1930,7))})),s.a.lazy((function(){return n.e(174).then(n.t.bind(null,1931,7)),Promise.all([n.e(0),n.e(3),n.e(2),n.e(160),n.e(169)]).then(n.t.bind(null,1932,7))}))]}]})})})}),document.getElementById("root"))}},[[824,158,159]]]);
//# sourceMappingURL=main.d6869cbd.chunk.js.map