(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},o={app:0},s=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00d4":function(e,t,a){"use strict";var r=a("b663"),o=a.n(r);o.a},"034f":function(e,t,a){"use strict";var r=a("85ec"),o=a.n(r);o.a},1:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-container",[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-navbar-brand",{attrs:{href:"#/inicio"}},[r("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"55px"}}),e._v(" Reloj ")]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:{name:"inicio"}}},[e._v("Inicio")]),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("Cuenta")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#/Login"}},[e._v("Registrese")]),r("b-dropdown-item",{attrs:{href:"#/Auth"}},[e._v("Ingrese")]),r("b-dropdown-item-button",{on:{click:e.salir}},[e._v("Salir")])],1)],1)],1)],1)],1),r("b-container",[r("router-view")],1)],1)},s=[],n={name:"app",data:function(){return{}},methods:{salir:function(){var e=this;console.log("Has salido"),localStorage.token=null,e.$router.push("/auth")}}},i=n,c=(a("034f"),a("2877")),l=Object(c["a"])(i,o,s,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("b-overlay",{attrs:{show:e.loading,rounded:"sm"}},[r("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"350px"}}),r("h1",[e._v(" Ingrese ")]),r("br"),305==e.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Llene todos los campos para completar el registro ")])],1):306==e.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" contraseña incorrecta, intentelo de nuevo ")])],1):307==e.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Correo incorrecto, intentelo de nuevo ")])],1):308==e.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(" Error, verifique su cuenta para continuar ")])],1):400==e.state?r("div",[r("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):e._e(),r("br"),e._v(" Correo: "),r("b-form-input",{attrs:{disabled:e.loading,type:"email",state:e.comprobarEmail,size:"sm",placeholder:"Escriba su correo electronico"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),r("br"),e._v(" Contraseña: "),r("b-form-input",{attrs:{disabled:e.loading,type:"password",state:e.comprobarPassword,size:"sm",placeholder:"Escriba su contraseña"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),r("br"),r("div",[r("b-link",{attrs:{href:"#/ForgotPassword"}},[e._v("Olvide mi contraseña")])],1),r("br"),r("div",[r("b-link",{on:{click:e.google}},[e._v("Ingresa con Google")])],1),r("br"),r("div",[r("b-button",{attrs:{disabled:e.loading,variant:"outline-success"},on:{click:e.enviar}},[e._v("Ingrese")])],1),r("br"),r("br")],1)],1)},p=[],v={name:"auth",data:function(){return{state:"",userEmail:"",userPassword:"",loading:!1}},computed:{comprobarEmail:function(){return this.userEmail.length>0},comprobarPassword:function(){return this.userPassword.length>0}},methods:{enviar:function(){var e=this;e.loading=!0,console.log("enviado"),this.axios.post("/auth",{mail:this.userEmail,pass:this.userPassword}).then((function(t){e.state=t.data,t.data.length>6?(console.log("token recibido"),localStorage.token=t.data,e.$router.push("/inicio")):e.loading=!1})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))},google:function(){var e=this;e.loading=!0,this.axios.get("/auth/google",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((function(t){console.log(t.data),e.state=t.data,300==t.data&&(alert("Mensaje enviado exitosamente, verifique su correo para cambiar su contraseña"),e.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))}}},b=v,f=Object(c["a"])(b,m,p,!1,null,null,null),h=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"},[a("h1",[e._v(" Bienvenid@ ")]),a("br"),a("br"),a("b-col",[a("br"),e._v(" temperatura ambiente: "+e._s(e.datos.temperatura_amb)+" "),a("br"),e._v(" temperatura local: "+e._s(e.datos.temperatura_local)+" "),a("br")]),a("b-col",[a("div",[a("br"),e._v(" Select a time: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.alarm,expression:"alarm"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:e.alarm},on:{input:function(t){t.target.composing||(e.alarm=t.target.value)}}}),a("br"),a("br"),a("b-button",{attrs:{variant:"outline-success"},on:{click:e.alarma}},[e._v("Enviar alarma")])],1)])],1)},_=[],w=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("8055")),E=a.n(w),x={name:"Inicio",data:function(){return{alarm:"",socket:{},token:localStorage.token,datos:{temperatura_amb:0,temperatura_local:0}}},methods:{enviar:function(){this.axios.post("/inicio",{token:localStorage.token}).then((function(e){localStorage.token=e.data})).catch((function(e){console.log("ERROR: "+e)}))},alarma:function(){this.axios.post("/alarma",{time:this.alarm}).then((function(e){console.log(e)})).catch((function(e){console.log("ERROR: "+e)}))}},created:function(){Object({NODE_ENV:"production",VUE_APP_HOST_LOCAL:"http://localhost:3000",BASE_URL:"/"}).VUE_APP_HOST;this.enviar(),this.socket=E()(URL)},mounted:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.socket.on("datos",(function(t){e.datos=t,console.log(t)})));case 2:case"end":return t.stop()}}),null,this)}},P=x,y=(a("00d4"),Object(c["a"])(P,g,_,!1,null,"99221614",null)),O=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"},[a("b-img",{attrs:{center:"",src:"https://zero1.sg/img/accountlogin-icon.png",alt:"Center image",width:"175px"}}),a("br"),a("h1",[e._v(" Registrese ")]),a("br"),305==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Llene todos los campos para completar el registro ")])],1):304==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Usuario ya existente, intentelo de nuevo ")])],1):400==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):402==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(" Error al enviar el correo, verifique su conexion, si el error persiste, intente mas tarde ")])],1):e._e(),a("br"),e._v(" Nombre: "),a("b-form-input",{attrs:{type:"text",state:e.comprobarName,size:"sm",placeholder:"Escriba su nombre completo"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),a("br"),e._v(" Correo: "),a("b-form-input",{attrs:{type:"email",state:e.comprobarEmail,size:"sm",placeholder:"Escriba su correo electronico"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("br"),e._v(" Contraseña: "),a("b-form-input",{attrs:{type:"password",state:e.comprobarPassword,size:"sm",placeholder:"Escriba su contraseña"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),a("br"),e._v(" Ciudad: "),a("b-form-input",{attrs:{type:"text",state:e.comprobarCity,size:"sm",placeholder:"Escriba su ciudad actual"},model:{value:e.userCity,callback:function(t){e.userCity=t},expression:"userCity"}}),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:e.enviar}},[e._v("Registrarse")])],1),a("br"),a("br")],1)},R=[],C={name:"Login",data:function(){return{userName:"",userEmail:"",userPassword:"",userCity:"",state:"",token:""}},computed:{comprobarName:function(){return this.userName.length>0},comprobarEmail:function(){return this.userEmail.length>0},comprobarPassword:function(){return this.userPassword.length>0},comprobarCity:function(){return this.userCity.length>0}},methods:{enviar:function(){var e=this;console.log("enviado"),this.axios.post("/login",{mail:this.userEmail,pass:this.userPassword,name:this.userName,city:this.userCity}).then((function(t){console.log(t.data),e.state=t.data,300==t.data&&(alert("Usuario registrado correctamente, verifique su correo para autenticar su cuenta"),e.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))}}},j=C,S=Object(c["a"])(j,k,R,!1,null,null,null),$=S.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"},[305==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Llene todos los campos para completar el registro ")])],1):400==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[e._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):e._e(),a("br"),a("br"),e._v(" Correo: "),a("b-form-input",{attrs:{type:"email",size:"sm",placeholder:"Escriba su correo electronico"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("br"),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:e.enviar}},[e._v("Verificar")])],1)],1)},V=[],A={name:"Verify",data:function(){return{state:"",userEmail:""}},methods:{enviar:function(){var e=this;this.axios.post("/verify",{mail:this.userEmail}).then((function(t){console.log(t.data),e.state=t.data,310==t.data?(alert("Verificacion realizada correctamente, acceda a su cuenta"),e.$router.push("/")):309==t.data&&(alert("Esta cuenta ya ha sido verificada, acceda a su cuenta"),e.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))}}},N=A,U=Object(c["a"])(N,L,V,!1,null,null,null),T=U.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"})},H=[],q={},I=q,M=Object(c["a"])(I,z,H,!1,null,null,null),D=M.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"},[a("br"),a("h1",[e._v(" ¿Olvido o desea cambiar su contraseña? ")]),a("br"),a("a1",[e._v(" Escriba su correo electronico, le enviaremos un mensaje para reestablecerla. ")]),a("br"),400==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):402==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Error al enviar el correo, verifique su conexion, si el error persiste, intente mas tarde ")])],1):307==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Correo incorrecto o inexistente, intentelo de nuevo ")])],1):305==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Llene todos los campos para completar el registro ")])],1):e._e(),a("br"),e._v(" Correo: "),a("b-form-input",{attrs:{type:"email",state:e.comprobarEmail,size:"sm",placeholder:"Escriba su correo electronico"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:e.enviar}},[e._v("Enviar")])],1),a("br"),a("br")],1)},G=[],J={name:"forgotpassword",data:function(){return{userEmail:"",state:""}},computed:{comprobarEmail:function(){return this.userEmail.length>0}},methods:{enviar:function(){var e=this;console.log("enviado"),this.axios.post("/forgotpassword",{mail:this.userEmail}).then((function(t){console.log(t.data),e.state=t.data,300==t.data&&(alert("Mensaje enviado exitosamente, verifique su correo para cambiar su contraseña"),e.$router.push("/"))})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))}}},F=J,K=Object(c["a"])(F,B,G,!1,null,null,null),Q=K.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"})},X=[],Y={},Z=Y,ee=Object(c["a"])(Z,W,X,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-2 text-center"},[r("b-img",{attrs:{src:a("f6de"),fluid:"",alt:"Responsive image"}}),r("br"),r("br"),r("h3",[e._v(" Lo sentimos, ha ocurrido un error :(")]),r("br"),r("h5",[e._v(" Por favor comprueba tu conexion a internet, recarga la pagina y vuelve a intentarlo. :D")])],1)},re=[],oe={name:"error"},se=oe,ne=Object(c["a"])(se,ae,re,!1,null,null,null),ie=ne.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5 text-center"},[a("h1",[e._v(" Cambie su contraseña ")]),a("br"),305==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Llene todos los campos para completar el registro ")])],1):400==e.state?a("div",[a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" Error, compruebe su conexion e intentelo de nuevo ")])],1):e._e(),a("br"),e._v(" Nueva contraseña: "),a("b-form-input",{attrs:{type:"password",state:e.comprobarPassword,size:"sm",placeholder:"Escriba su contraseña"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),a("br"),e._v(" Repita la contraseña: "),a("b-form-input",{attrs:{type:"password",state:e.comprobarPasswordVerification,size:"sm",placeholder:"Escriba de nuevo su contraseña"},model:{value:e.userPasswordVerification,callback:function(t){e.userPasswordVerification=t},expression:"userPasswordVerification"}}),a("br"),a("div",[a("b-button",{attrs:{variant:"outline-success"},on:{click:e.enviar}},[e._v("Cambiar")])],1)],1)},le=[],ue={name:"recoverypassword",data:function(){return{userPassword:"",userPasswordVerification:"",state:""}},computed:{comprobarPassword:function(){return this.userPassword.length>0},comprobarPasswordVerification:function(){return this.userPasswordVerification.length>0}},methods:{enviar:function(){var e=this;this.userPassword!=this.userPasswordVerification?alert("Las contraseñas indicadas no coinciden, verifique e intentelo de nuevo"):this.axios.post("/recoverypassword",{id:e.$route.params.id,pass:this.userPassword}).then((function(t){console.log(t.data),e.state=t.data,310==t.data&&(alert("Contraseña reestablecida exitosamente, ingrese de nuevo"),localStorage.token=null,e.$router.push("/auth"))})).catch((function(t){console.log("ERROR: "+t),e.$router.push("/error")}))}}},de=ue,me=Object(c["a"])(de,ce,le,!1,null,null,null),pe=me.exports,ve=a("a7fe"),be=a.n(ve),fe=a("bc3a"),he=a.n(fe);a("ed18").config(),r["default"].use(be.a,he.a),he.a.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_HOST_LOCAL:"http://localhost:3000",BASE_URL:"/"}).VUE_APP_HOST+"/api",console.log(he.a.defaults.baseURL),console.log("production"),r["default"].use(d["a"]);var ge=new d["a"]({routes:[{path:"*",redirect:"/auth"},{path:"/",redirect:"/auth"},{path:"/login",name:"login",component:$,meta:{autentificado:!1}},{path:"/auth",name:"auth",component:h,meta:{autentificado:!1}},{path:"/inicio",name:"inicio",component:O,meta:{autentificado:!0}},{path:"/verify",name:"verify",component:T,meta:{autentificado:!1}},{path:"/settings",name:"settings",component:D,meta:{autentificado:!0}},{path:"/forgotpassword",name:"forgotpassword",component:Q,meta:{autentificado:!1}},{path:"/home",name:"home",component:te,meta:{autentificado:!1}},{path:"/recoverypassword/:id",name:"recoverypassword",component:pe,meta:{autentificado:!1}},{path:"/error",name:"error",component:ie,meta:{autentificado:!1}}]});ge.beforeEach((function(e,t,a){console.log(e);var r=e.matched.some((function(e){return e.meta.autentificado}));he.a.post("/token",{token:localStorage.token}).then((function(e){r&&0==e.data?a("auth"):r||1!=e.data?r&&1==e.data?a():r||0!=e.data||a():a()})).catch((function(e){console.log("ERROR: "+e)}))}));var _e=ge,we=a("2f62");r["default"].use(we["a"]);var Ee=new we["a"].Store({state:{},mutations:{},actions:{},modules:{}}),xe=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(xe["a"]),r["default"].use(be.a,he.a),he.a.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_HOST_LOCAL:"http://localhost:3000",BASE_URL:"/"}).VUE_APP_HOST+"/api",r["default"].config.productionTip=!1,new r["default"]({router:_e,store:Ee,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,a){},b663:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f6de:function(e,t,a){e.exports=a.p+"img/error.e25bd920.jpg"}});
//# sourceMappingURL=app.ad3cce42.js.map