(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{bV6S:function(n,l,t){"use strict";t.r(l);var i=t("8Y7J");class e{}var u=t("pMnS"),c=t("oBZk"),o=t("ZZ/e"),s=t("SVse"),r=t("xWbu"),a=t("9B/o");class b{constructor(n,l,t){this.comicsService=n,this.inAppBrowser=l,this.platform=t}ngOnInit(){this.getComics()}getComics(){this.comics=this.comicsService.getComic().subscribe(n=>{this.items=n.data.results,this.createList(this.items),this.items.map(n=>{n.thumbnail.path=n.thumbnail.path+"/portrait_xlarge.jpg"})})}countLikes(n){this.itemList[n].likes=this.itemList[n].likes+1}countDislikes(n){this.itemList[n].dislikes=this.itemList[n].dislikes+1}createList(n){this.itemList=new Array;for(var l=0;l<n.length;l++)this.itemList.push({likes:0,dislikes:0})}}var m=i.pb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.main-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{margin:10px}.main-container[_ngcontent-%COMP%]   .comic-header[_ngcontent-%COMP%]   .comic-title[_ngcontent-%COMP%]{font-size:12px}.main-container[_ngcontent-%COMP%]   .comic-header[_ngcontent-%COMP%]   .comic-date[_ngcontent-%COMP%]{font-size:10px}.main-container[_ngcontent-%COMP%]   .comic-card-content[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;display:-webkit-inline-box;display:inline-flex}.main-container[_ngcontent-%COMP%]   .comic-card-content[_ngcontent-%COMP%]   .dislike-icon[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .comic-card-content[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:24px;margin:0 5px}"]],data:{}});function h(n){return i.Hb(0,[(n()(),i.rb(0,0,null,null,23,"ion-col",[],null,null,null,c.A,c.g)),i.qb(1,49152,null,0,o.q,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,21,"div",[],null,null,null,null,null)),(n()(),i.rb(3,0,null,null,20,"ion-card",[["class","card-container"]],null,null,null,c.z,c.b)),i.qb(4,49152,null,0,o.j,[i.h,i.k,i.x],null,null),(n()(),i.rb(5,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),i.rb(6,0,null,0,7,"ion-card-header",[["class","comic-header"]],null,null,null,c.w,c.d)),i.qb(7,49152,null,0,o.l,[i.h,i.k,i.x],null,null),(n()(),i.rb(8,0,null,0,2,"ion-card-subtitle",[["class","comic-date"]],null,null,null,c.x,c.e)),i.qb(9,49152,null,0,o.m,[i.h,i.k,i.x],null,null),(n()(),i.Gb(10,0,["",""])),(n()(),i.rb(11,0,null,0,2,"ion-card-title",[["class","comic-title"]],null,null,null,c.y,c.f)),i.qb(12,49152,null,0,o.n,[i.h,i.k,i.x],null,null),(n()(),i.Gb(13,0,["",""])),(n()(),i.rb(14,0,null,0,9,"ion-card-content",[["class","comic-card-content"]],null,null,null,c.v,c.c)),i.qb(15,49152,null,0,o.k,[i.h,i.k,i.x],null,null),(n()(),i.rb(16,0,null,0,1,"ion-icon",[["class","like-icon"],["name","happy"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.countLikes(n.context.index)&&i),i}),c.E,c.k)),i.qb(17,49152,null,0,o.z,[i.h,i.k,i.x],{name:[0,"name"]},null),(n()(),i.rb(18,0,null,0,1,"span",[["class","text"]],null,null,null,null,null)),(n()(),i.Gb(19,null,["",""])),(n()(),i.rb(20,0,null,0,1,"ion-icon",[["class","dislike-icon"],["name","sad"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.countDislikes(n.context.index)&&i),i}),c.E,c.k)),i.qb(21,49152,null,0,o.z,[i.h,i.k,i.x],{name:[0,"name"]},null),(n()(),i.rb(22,0,null,0,1,"span",[["class","text"]],null,null,null,null,null)),(n()(),i.Gb(23,null,["",""]))],(function(n,l){n(l,17,0,"happy"),n(l,21,0,"sad")}),(function(n,l){var t=l.component;n(l,5,0,l.context.$implicit.thumbnail.path),n(l,10,0,l.context.$implicit.modified),n(l,13,0,l.context.$implicit.title),n(l,19,0,t.itemList[l.context.index].likes),n(l,23,0,t.itemList[l.context.index].dislikes)}))}function d(n){return i.Hb(0,[(n()(),i.rb(0,0,null,null,6,"ion-header",[],null,null,null,c.D,c.j)),i.qb(1,49152,null,0,o.y,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.N,c.t)),i.qb(3,49152,null,0,o.zb,[i.h,i.k,i.x],null,null),(n()(),i.rb(4,0,null,0,2,"ion-title",[["class","logo-image"]],null,null,null,c.M,c.s)),i.qb(5,49152,null,0,o.xb,[i.h,i.k,i.x],null,null),(n()(),i.rb(6,0,null,0,0,"img",[["src","/assets/marvel-icono.png"]],null,null,null,null,null)),(n()(),i.rb(7,0,null,null,7,"ion-content",[["class","main-container"]],null,null,null,c.B,c.h)),i.qb(8,49152,null,0,o.r,[i.h,i.k,i.x],null,null),(n()(),i.rb(9,0,null,0,5,"ion-grid",[],null,null,null,c.C,c.i)),i.qb(10,49152,null,0,o.x,[i.h,i.k,i.x],null,null),(n()(),i.rb(11,0,null,0,3,"ion-row",[],null,null,null,c.K,c.q)),i.qb(12,49152,null,0,o.gb,[i.h,i.k,i.x],null,null),(n()(),i.gb(16777216,null,0,1,null,h)),i.qb(14,278528,null,0,s.h,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,14,0,l.component.items)}),null)}function p(n){return i.Hb(0,[(n()(),i.rb(0,0,null,null,1,"app-comic",[],null,null,null,d,m)),i.qb(1,114688,null,0,b,[r.a,a.a,o.Fb],null,null)],(function(n,l){n(l,1,0)}),null)}var g=i.nb("app-comic",b,p,{},{},[]),x=t("s7LF"),k=t("iInd");t.d(l,"ComicPageModuleNgFactory",(function(){return f}));var f=i.ob(e,[],(function(n){return i.zb([i.Ab(512,i.j,i.Z,[[8,[u.a,g]],[3,i.j],i.v]),i.Ab(4608,s.j,s.i,[i.s,[2,s.p]]),i.Ab(4608,x.c,x.c,[]),i.Ab(4608,o.a,o.a,[i.x,i.g]),i.Ab(4608,o.Db,o.Db,[o.a,i.j,i.p]),i.Ab(4608,o.Gb,o.Gb,[o.a,i.j,i.p]),i.Ab(1073742336,s.b,s.b,[]),i.Ab(1073742336,x.b,x.b,[]),i.Ab(1073742336,x.a,x.a,[]),i.Ab(1073742336,o.Bb,o.Bb,[]),i.Ab(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),i.Ab(1073742336,e,e,[]),i.Ab(1024,k.k,(function(){return[[{path:"",component:b}]]}),[])])}))},s7LF:function(n,l,t){"use strict";var i=t("8Y7J");t("cUpR"),t("HDdC"),t("DH7j"),t("lJxs"),t("XoHu"),t("Cfvw"),t.d(l,"b",(function(){return c})),t.d(l,"c",(function(){return e})),t.d(l,"a",(function(){return o}));let e=(()=>class{constructor(){this._accessors=[]}add(n,l){this._accessors.push([n,l])}remove(n){for(let l=this._accessors.length-1;l>=0;--l)if(this._accessors[l][1]===n)return void this._accessors.splice(l,1)}select(n){this._accessors.forEach(l=>{this._isSameGroup(l,n)&&l[1]!==n&&l[1].fireUncheck(n.value)})}_isSameGroup(n,l){return!!n[0].control&&n[0]._parent===l._control._parent&&n[1].name===l.name}})();const u=new i.o("NgFormSelectorWarning");let c=(()=>class{})(),o=(()=>{class n{static withConfig(l){return{ngModule:n,providers:[{provide:u,useValue:l.warnOnDeprecatedNgFormSelector}]}}}return n})()}}]);