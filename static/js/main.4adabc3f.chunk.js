(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(34),a=n(3),c="dialogs/SEND-MESSAGE",i={dialogsData:[{id:1,name:"Sasha"},{id:2,name:"Igor"},{id:3,name:"Fedor"},{id:4,name:"Roma"},{id:5,name:"Dasha"},{id:6,name:"Katya"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How your doing?"},{id:3,message:"Let's go for a walk"}]},s=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:1,message:t.newMessageText}])});default:return e}}},125:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return N})),n.d(t,"d",(function(){return k}));var r=n(11),a=n.n(r),c=n(17),i=n(34),s=n(3),o=n(16),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="users/FOLLOW",d="users/UNFOLLOW",f="users/SET-USERS",j="users/SET-CURRENT-PAGE",b="users/SET-TOTAL-USERS-COUNT",p="users/TOGGLE-IS-FETCHING",O="users/TOGGLE_IS_FOLLOWING_IN_PROGRESS",h={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},m=function(e){return{type:l,userId:e}},v=function(e){return{type:d,userId:e}},g=function(e){return{type:p,isFetching:e}},x=function(e,t){return{type:O,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),n.next=3,o.c.getUsers(e,t);case 3:c=n.sent,r(g(!1)),r((i=c.items,{type:f,users:i})),r((a=c.totalCount,{type:b,totalUsersCount:a})),r({type:j,currentPage:e});case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,o.c.follow.bind(o.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,o.c.unfollow.bind(o.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case j:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case p:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case O:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},130:function(e,t,n){e.exports={formError:"Login_formError__2b5kR"}},132:function(e,t,n){e.exports={preloader:"Preloader_preloader__17znT"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(126),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c8fc224f-56a1-4c34-b71b-e2d8493a38bf"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Use profile API"),i.getProfile(e)},follow:function(e){return a.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))},unfollow:function(e){return a.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))}},i={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},162:function(e,t,n){},242:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(63),i=n.n(c),s=(n(162),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,306)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),o=n(12),u=n(11),l=n.n(u),d=n(17),f=n(3),j=n(30),b=n(16),p="auth/SET-USER-DATA",O={userId:null,email:null,login:null,isAuth:!1},h=function(e,t,n,r){return{type:p,data:{userId:e,email:t,login:n,isAuth:r}}},m=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.me();case 2:return 0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.email,i=r.login,t(h(a,c,i,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(f.a)(Object(f.a)({},O),t.data);default:return e}},g=n(101),x=n(92),w={},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e},N=n(125),k=n(127),y=n(124),L="app/INITIALIZE_SUCCESSFUL",C={initialized:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(f.a)(Object(f.a)({},C),{},{initialized:!0});default:return e}},I=Object(o.c)({profilePage:x.b,dialogsPage:g.a,sidebarPage:_,usersPage:N.a,auth:v,form:y.a,app:S}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,E=Object(o.e)(I,T(Object(o.a)(k.a)));window.store=E;var P=E,F=n(50),U=n(51),z=n(53),D=n(52),A=(n(242),n(13)),G=n(8),W=n.n(G),B=n(1),M=function(){return Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("nav",{className:W.a.nav,children:[Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/profile",activeClassName:W.a.activeLink,children:"Profile"})}),Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/dialogs",activeClassName:W.a.activeLink,children:" Messages"})}),Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/users",activeClassName:W.a.activeLink,children:" Users"})}),Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/news",activeClassName:W.a.activeLink,children:" News"})}),Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/music",activeClassName:W.a.activeLink,children:" Music"})}),Object(B.jsx)("div",{className:W.a.item,children:Object(B.jsx)(A.b,{to:"/settings",activeClassName:W.a.activeLink,children:" Settings"})}),Object(B.jsxs)("div",{className:W.a.item+" "+W.a.friendsBlock,children:[Object(B.jsx)(A.b,{className:W.a.friendsLink,to:"/friends",activeClassName:W.a.activeLink,children:" Friends"}),Object(B.jsxs)("div",{className:W.a.shortList,children:[Object(B.jsxs)(A.b,{className:W.a.friendLink,to:"/friend1",activeClassName:W.a.activeLink,children:[Object(B.jsx)("img",{src:"http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",className:W.a.avaIcon,alt:"photo"}),Object(B.jsx)("div",{className:W.a.friendName,children:"name"})]}),Object(B.jsxs)(A.b,{className:W.a.friendLink,to:"/friend2",activeClassName:W.a.activeLink,children:[Object(B.jsx)("img",{src:"http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",className:W.a.avaIcon,alt:"photo"}),Object(B.jsx)("div",{className:W.a.friendName,children:"name"})]}),Object(B.jsxs)(A.b,{className:W.a.friendLink,to:"/friend3",activeClassName:W.a.activeLink,children:[Object(B.jsx)("img",{src:"http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",className:W.a.avaIcon,alt:"photo"}),Object(B.jsx)("div",{className:W.a.friendName,children:"name"})]})]})]})]})})},R=(n(251),function(){return Object(B.jsx)("div",{children:"News"})}),H=(n(252),function(){return Object(B.jsx)("div",{children:"Friends"})}),J=(n(253),function(){return Object(B.jsx)("div",{children:"Settings"})}),K=(n(254),function(e){return Object(B.jsx)("div",{children:"friend"+e.id})}),q=n(7),V=n(22),Q=n(40),X=n.n(Q),Z=function(e){return Object(B.jsxs)("header",{className:X.a.header,children:[Object(B.jsx)("div",{className:X.a.logo,children:"Social Network"}),Object(B.jsxs)("div",{className:X.a.loginMenu,children:[Object(B.jsx)(A.b,{to:"/login",className:X.a.loginBlock,children:Object(B.jsx)("div",{children:e.isAuth?e.login:"Login"})}),e.isAuth&&Object(B.jsx)("button",{onClick:e.logout,className:X.a.loginBlock,children:"Logout"})]})]})},Y=function(e){Object(z.a)(n,e);var t=Object(D.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){return Object(B.jsx)(Z,Object(f.a)({},this.props))}}]),n}(a.a.Component),$=Object(V.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Y),ee=n(130),te=n.n(ee),ne=n(123),re=n(82),ae=n(36),ce=Object(ne.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(B.jsxs)("form",{onSubmit:t,children:[Object(ae.c)(ae.a,"email","Login",[re.b],{type:"email"}),Object(ae.c)(ae.a,"password","Password",[re.b],{type:"password"}),Object(B.jsxs)("label",{children:[Object(ae.c)("input","rememberMe","",[],{type:"checkbox"}),"Remember me"]}),Object(B.jsx)("div",{className:te.a.formError,children:n}),Object(B.jsx)("button",{children:"Login"})]})})),ie=Object(V.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(d.a)(l.a.mark((function r(a){var c,i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(m()):(i=c.data.messages.length>0?c.data.messages[0]:"",a(Object(j.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(B.jsx)(q.a,{to:"/profile"}):Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Authorization"}),Object(B.jsx)(ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),se=n(62),oe=function(e){return function(t){return Object(B.jsx)(a.a.Suspense,{fallback:Object(B.jsx)(se.a,{}),children:Object(B.jsx)(e,Object(f.a)({},t))})}},ue=a.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),le=a.a.lazy((function(){return n.e(5).then(n.bind(null,309))})),de=a.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),fe=function(e){Object(z.a)(n,e);var t=Object(D.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(B.jsxs)("div",{className:"app-wrapper",children:[Object(B.jsx)($,{}),Object(B.jsx)(M,{}),Object(B.jsxs)("div",{className:"app-wrapper-content",children:[Object(B.jsx)(q.b,{path:"/profile/:userId?",render:oe(ue)}),Object(B.jsx)(q.b,{path:"/dialogs",render:oe(le)}),Object(B.jsx)(q.b,{path:"/news",render:function(){return Object(B.jsx)(R,{})}}),Object(B.jsx)(q.b,{path:"/music",render:function(){return Object(B.jsx)(H,{})}}),Object(B.jsx)(q.b,{path:"/settings",render:function(){return Object(B.jsx)(J,{})}}),Object(B.jsx)(q.b,{path:"/users",render:oe(de)}),Object(B.jsx)(q.b,{path:"/friends",render:function(){return Object(B.jsx)(H,{})}}),Object(B.jsx)(q.b,{path:"/friend1",render:function(){return Object(B.jsx)(K,{id:"1"})}}),Object(B.jsx)(q.b,{path:"/friend2",render:function(){return Object(B.jsx)(K,{id:"2"})}}),Object(B.jsx)(q.b,{path:"/friend3",render:function(){return Object(B.jsx)(K,{id:"3"})}}),Object(B.jsx)(q.b,{path:"/login",render:function(){return Object(B.jsx)(ie,{})}})]})]}):Object(B.jsx)(se.a,{})}}]),n}(a.a.Component),je=Object(o.d)(q.f,Object(V.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(m()).then((function(){e({type:L})}))}}}))(fe),be=function(e){return Object(B.jsx)(A.a,{children:Object(B.jsx)(V.a,{store:P,children:Object(B.jsx)(je,{})})})};i.a.render(Object(B.jsx)(be,{}),document.getElementById("root")),s()},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(65),c=(n(0),n(86)),i=n(85),s=n.n(i),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=Object(a.a)(e,["input","meta"]),i=n&&r;return Object(o.jsxs)("div",{className:s.a.horizontalFlex+" "+(i?s.a.error:""),children:[c.children,i&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(o.jsx)(c.a,Object(r.a)({placeholder:n,name:t,component:e,validate:a},i))}},40:function(e,t,n){e.exports={header:"Header_header__2VBot",logo:"Header_logo__38-D7",loginMenu:"Header_loginMenu__1NnKr",loginBlock:"Header_loginBlock__3E79r"}},62:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Pulse-1s-200px.74d5ec9e.svg",a=n(132),c=n.n(a),i=n(1);t.a=function(){return Object(i.jsx)("img",{className:c.a.preloader,src:r})}},8:function(e,t,n){e.exports={nav:"Navbar_nav__2Dpw1",item:"Navbar_item__3hIPT",activeLink:"Navbar_activeLink__CqS6O",friendsBlock:"Navbar_friendsBlock__2xtMv",shortList:"Navbar_shortList__1JO3j",friendName:"Navbar_friendName__3qkN6",avaIcon:"Navbar_avaIcon__3pJUe",friendsLink:"Navbar_friendsLink__2hKwa",friendLink:"Navbar_friendLink__ZmydJ"}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Text is required"},a=function(e){return function(t){if(e<t.length)return"Max length is ".concat(e," characters")}}},85:function(e,t,n){e.exports={error:"FormControls_error__2gBQw",horizontalFlex:"FormControls_horizontalFlex__1EMWw"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(11),a=n.n(r),c=n(17),i=n(34),s=n(3),o=n(30),u=n(16),l="profile/ADD-POST",d="profile/SET-USER-PROFILE",f="profile/SET_STATUS",j="profile/DELETE_POST",b="SET_PHOTO",p={postsData:[{id:1,message:"Hi, how are you?",likesCount:15,picture:"http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"},{id:2,message:"This is my first post",likesCount:7,picture:"http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"},{id:3,message:"React is cool",likesCount:67,picture:"http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"}],profile:null,status:""},O=function(e){return{type:l,newPostText:e}},h=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.saveProfile(e);case 2:if(c=t.sent,i=r().auth.userId,0!==c.data.resultCode){t.next=8;break}n(m(i)),t.next=10;break;case 8:return n(Object(o.a)("profileData",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[{id:4,message:t.newPostText,likesCount:0,picture:"http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"}])});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case j:return Object(s.a)(Object(s.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case b:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[295,1,2]]]);
//# sourceMappingURL=main.4adabc3f.chunk.js.map