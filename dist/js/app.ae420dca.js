(function(t){function e(e){for(var c,o,r=e[0],a=e[1],l=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);h&&h(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],c=!0,r=1;r<i.length;r++){var a=i[r];0!==n[a]&&(c=!1)}c&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var c={},n={app:0},s=[];function o(e){if(c[e])return c[e].exports;var i=c[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=c,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(i,c,function(e){return t[e]}.bind(null,c));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=a;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"351f":function(t,e,i){},"4ebb":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var c=i("7a23"),n={class:"gameinterface"};function s(t,e,i,s,o,r){var a=Object(c["M"])("side-panel"),l=Object(c["M"])("center-piece");return Object(c["D"])(),Object(c["i"])("div",n,[Object(c["m"])(c["d"],{name:"slide"},{default:Object(c["bb"])((function(){return[Object(c["cb"])(Object(c["m"])(a,null,null,512),[[c["Y"],o.sideisVisible]])]})),_:1}),Object(c["m"])(l,{visibleSide:!o.sideisVisible},null,8,["visibleSide"])])}i("d3b7"),i("3ca3"),i("ddb0"),i("159b"),i("b64b"),i("caad"),i("2532"),i("a434"),i("b0c0"),i("4de4");var o=i("5698"),r=Object(c["fb"])("data-v-1bfb249e");Object(c["G"])("data-v-1bfb249e");var a={class:"side"},l=Object(c["m"])("div",{class:"clearbigtext",style:{margin:"auto",width:"100%",background:"#D9D1C7","text-align":"center",display:"grid","align-items":"center"}},"Your Selection",-1),h={class:"counter clearmidtext"},d=Object(c["m"])("div",{style:{width:"15px",height:"100%"}},null,-1),u=Object(c["l"])("Selected: "),b=Object(c["l"])("/10"),g={class:"sidesection"},f={style:{display:"none"}};Object(c["E"])();var m=r((function(t,e,i,n,s,o){var r=Object(c["M"])("ingred-container");return Object(c["D"])(),Object(c["i"])("div",a,[l,Object(c["m"])("div",h,[d,Object(c["m"])("div",null,[u,Object(c["m"])("span",null,Object(c["Q"])(s.ingContainer.filter((function(t){return t.ingName})).length),1),b])]),Object(c["m"])("div",g,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(s.ingContainer,(function(t,e){return Object(c["D"])(),Object(c["i"])(r,{key:e,index:t.number,ingredient:t.ingName,img:t.img},null,8,["index","ingredient","img"])})),128))]),Object(c["m"])("div",f,Object(c["Q"])(o.something),1)])})),j=Object(c["fb"])("data-v-3b5c74f2");Object(c["G"])("data-v-3b5c74f2");var p={key:1,class:"smalltext ingname"};Object(c["E"])();var O=j((function(t,e,i,n,s,o){return Object(c["D"])(),Object(c["i"])("div",{class:["container",{active:i.img}]},[i.ingredient?(Object(c["D"])(),Object(c["i"])("img",{key:0,class:"blockimg",onClick:e[1]||(e[1]=function(t){return o.removeIngredient(i.ingredient)}),src:i.img},null,8,["src"])):Object(c["j"])("",!0),i.ingredient?(Object(c["D"])(),Object(c["i"])("div",p,Object(c["Q"])(i.ingredient),1)):Object(c["j"])("",!0)],2)})),v={inject:["removeIngredient"],data:function(){return{isFull:!1}},props:["index","ingredient","img"]};i("e915");v.render=O,v.__scopeId="data-v-3b5c74f2";var x=v,y={components:{ingredContainer:x},inject:["selectedIngred","clicked"],data:function(){return{ingContainer:[]}},mounted:function(){for(var t=0;t<10;t++){var e=new Object;e.ingName=void 0,e.img=void 0,this.ingContainer.push(e)}},computed:{something:function(){var t=this;return this.selectedIngred.forEach((function(e,i){t.ingContainer[i].ingName?console.log("something goes wrong"):(t.ingContainer[i].ingName=t.selectedIngred[i].name,t.ingContainer[i].img=t.selectedIngred[i].img)})),this.ingContainer}},watch:{selectedIngred:{handler:function(){var t=this.selectedIngred.length,e=this.ingContainer.filter((function(t){return t.ingName})).length;t<e&&this.ingContainer.forEach((function(t){t.ingName=void 0,t.img=void 0}))},deep:!0}}};i("def4");y.render=m,y.__scopeId="data-v-1bfb249e";var k=y,C=Object(c["fb"])("data-v-09e5cc7a");Object(c["G"])("data-v-09e5cc7a");var w={class:"centerTitle"},I=Object(c["m"])("div",{class:"bigtext leftshift",style:{"font-weight":"bold","text-decoration":"underline"}},"Choose your sleeping ingredients",-1),D=Object(c["m"])("div",{class:"clearsmalltext leftshift",style:{"font-weight":"thin"}},"Select ingredients you already have and explore dishes you can make using them!",-1),S={class:"searchsection leftshift"},E={key:0,class:"sideTitle"},A=Object(c["m"])("div",{class:"bigtext leftshift",style:{"text-decoration":"underline"}},"Explore Dishes",-1),M=Object(c["m"])("div",{class:"clearsmalltext leftshift"},"Explore dishes having the ingredients you selected",-1),H={class:"gamepiece"},W=Object(c["m"])("canvas",{id:"interface",style:{position:"absolute"}},null,-1),_={class:"centerPiece"},Q={class:"controller"},P={class:"selections"},N=Object(c["m"])("div",null,"Go back",-1),Y={class:"selections"},V=Object(c["m"])("div",null,"Complete",-1),K={class:"selections"};Object(c["E"])();var G=C((function(t,e,i,n,s,o){var r=Object(c["M"])("canvas-desc"),a=Object(c["M"])("bottom-container"),l=Object(c["M"])("summary-container"),h=Object(c["M"])("ing-blocks");return Object(c["D"])(),Object(c["i"])(c["b"],null,[Object(c["m"])("div",{class:["centercontainer",{active:o.visible}]},[Object(c["cb"])(Object(c["m"])("div",w,[I,D,Object(c["m"])("div",S,[Object(c["cb"])(Object(c["m"])("input",{class:"search",placeholder:"Search name of ingredient",onKeyup:e[1]||(e[1]=Object(c["db"])((function(){return o.searching&&o.searching.apply(o,arguments)}),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.searchword=t})},null,544),[[c["X"],s.searchword]]),Object(c["m"])("img",{class:"searchicon",onClick:e[3]||(e[3]=function(){return o.searching&&o.searching.apply(o,arguments)}),src:"searchicon.png"})])],512),[[c["Y"],"bottom-container"!=s.selectedComponent]]),"bottom-container"==s.selectedComponent?(Object(c["D"])(),Object(c["i"])("div",E,[A,M])):Object(c["j"])("",!0),Object(c["cb"])(Object(c["m"])("div",H,[Object(c["cb"])(Object(c["m"])("div",{style:[{position:"relative"},{width:"".concat(s.width,"px"),height:"".concat(s.height,"px")}]},[W],4),[[c["Y"],"bottom-container"==s.selectedComponent]]),"bottom-container"==s.selectedComponent?(Object(c["D"])(),Object(c["i"])(r,{key:0,clicked:o.clicked,circleArray:o.circleArray,width:s.width,height:s.height,checkedout:s.checkedout,max:s.max},null,8,["clicked","circleArray","width","height","checkedout","max"])):Object(c["j"])("",!0),Object(c["m"])(a,{checkedout:s.checkedout},null,8,["checkedout"]),Object(c["m"])(l,{width:s.width,height:s.height},null,8,["width","height"])],512),[[c["Y"],"bottom-container"==s.selectedComponent]]),Object(c["cb"])(Object(c["m"])("div",_,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.ingCollection,(function(t,e){return Object(c["D"])(),Object(c["i"])(h,{key:e,ingname:t.ing,index:e,class:{finished:o.stop,hideIng:!t.visible}},null,8,["ingname","index","class"])})),128))],512),[[c["Y"],"ing-blocks"==s.selectedComponent]])],2),Object(c["m"])("div",Q,[Object(c["cb"])(Object(c["m"])("div",P,[Object(c["m"])("img",{onClick:e[4]||(e[4]=function(t){o.selectComponents("ing-blocks"),o.toggleonSide(),o.cleanValue()}),src:"goback.png",class:"buttonimg"}),N],512),[[c["Y"],"ing-blocks"!=s.selectedComponent]]),Object(c["cb"])(Object(c["m"])("div",Y,[Object(c["m"])("img",{onClick:e[5]||(e[5]=function(t){o.selectComponents("bottom-container"),o.toggleoffSide()}),src:"check.png",class:"buttonimg"}),V],512),[[c["Y"],"ing-blocks"==s.selectedComponent]]),Object(c["cb"])(Object(c["m"])("div",K,[Object(c["m"])("img",{onClick:e[6]||(e[6]=function(){return o.checkout&&o.checkout.apply(o,arguments)}),src:"checkout.png",class:["buttonimg",{finished:s.finish}]},null,2),Object(c["m"])("div",{class:{finished:s.finish}},"Check out",2)],512),[[c["Y"],"ing-blocks"!=s.selectedComponent]])])],64)})),R=i("2909"),q=i("5530"),B=(i("1276"),i("ac1f"),i("6062"),i("99af"),Object(c["fb"])("data-v-8a535b80"));Object(c["G"])("data-v-8a535b80");var T={class:"template"},$=Object(c["m"])("span",null," ingredient:",-1),z={style:{"padding-left":"5px"},class:"clearmidtext"},X=Object(c["m"])("div",{class:"headmsg"},"How many you have already",-1),F=Object(c["m"])("div",{class:"headmsg"},"See all ingredients",-1),J={style:{display:"none"}},L={class:"article"},U={class:"clearbigtext articleheader"},Z={class:"clearsmalltext articledesc"};Object(c["E"])();var tt=B((function(t,e,i,n,s,o){return Object(c["D"])(),Object(c["i"])(c["b"],null,[Object(c["m"])("div",T,[Object(c["m"])("div",{class:"orbitcontainer",style:{right:"".concat(.3*s.customWidth,"px"),height:"".concat(.45*s.customHeight,"px"),width:"".concat(.45*s.customWidth,"px")}},[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(s.stageNumber,(function(t){return Object(c["D"])(),Object(c["i"])("div",{key:t,style:{width:"95%",top:"".concat(i.circleArray[0].orbitradius[0]-i.circleArray[0].orbitradius[t-1],"px")},class:["indicators clearsmalltext",{active:t==s.stageNumber,checkedout:i.checkedout}]},[Object(c["m"])("span",null,Object(c["Q"])(t),1),$,Object(c["m"])("span",z,Object(c["Q"])(o.ingCounter[t].count),1)],6)})),128))],4),Object(c["cb"])(Object(c["m"])("div",{class:"bottomDesc",style:{height:"".concat(.45*s.customHeight,"px"),transform:"translate(0,".concat(s.margin,"px)")}},[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.finalCheckout,(function(t,i){return Object(c["D"])(),Object(c["i"])("div",{class:["icons clearsmalltext",{expand:o.finalCheckout[i].expand,hide:!o.finalCheckout[i].visible}],key:i,style:{height:"".concat(.35*s.customHeight,"px"),width:"".concat(o.computedWidth[i],"px")}},[s.collapsed?(Object(c["D"])(),Object(c["i"])("img",{key:0,src:"expandW.png",class:"imgs",onClick:function(t){return o.expandSelection(i)},style:{left:"".concat(.16*s.customHeight,"px"),top:"".concat(.1*s.customHeight,"px")}},null,12,["onClick"])):Object(c["j"])("",!0),s.collapsed?Object(c["j"])("",!0):(Object(c["D"])(),Object(c["i"])("img",{key:1,src:"collapse.png",class:"imgs",onClick:function(t){return o.collapseSelection(i)},style:{left:"".concat(.16*s.customHeight,"px"),top:"".concat(.1*s.customHeight,"px")}},null,12,["onClick"])),Object(c["m"])("div",{class:[{expand:o.finalCheckout[i].expand},"dishTitle"],style:{left:"".concat(0*s.customHeight,"px"),top:"".concat(.16*s.customHeight,"px"),width:"".concat(1==o.finalCheckout[i].expand?o.countingWidth:150,"px")}},[Object(c["l"])(Object(c["Q"])(t.ing.title)+" ",1),s.collapsed?Object(c["j"])("",!0):(Object(c["D"])(),Object(c["i"])("div",{key:0,style:{color:"#D9D1C7",cursor:"pointer","text-decoration":"underline"},class:"clearmidtext",onClick:e[1]||(e[1]=function(){return o.modalOpen&&o.modalOpen.apply(o,arguments)})},"Show Details"))],6),s.collapsed?Object(c["j"])("",!0):(Object(c["D"])(),Object(c["i"])("div",{key:2,class:"ingCounting",style:{left:"".concat(.3*s.customWidth,"px"),width:"".concat(o.countingWidth,"px")}},[X,Object(c["m"])("div",{class:"countings",style:{width:"".concat(o.countingWidth,"px"),height:"".concat(.3*s.customHeight,"px")}},[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.totalIngs,(function(t,e){return Object(c["D"])(),Object(c["i"])("div",{key:e,class:["ings",{has:t.has}]},null,2)})),128))],4)],4)),s.collapsed?Object(c["j"])("",!0):(Object(c["D"])(),Object(c["i"])("div",{key:3,class:"allIngs",style:{left:"".concat(.55*s.customWidth,"px"),width:"".concat(1.5*o.countingWidth,"px")}},[F,Object(c["m"])("div",{class:"detilsIngs",style:{width:"".concat(1.5*o.countingWidth,"px"),height:"".concat(.3*s.customHeight,"px")}},[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.totalIngs,(function(t,e){return Object(c["D"])(),Object(c["i"])("div",{key:e,class:["details",{has:t.has}]},Object(c["Q"])(t.ing),3)})),128))],4)],4))],6)})),128))],4),[[c["Y"],i.checkedout]]),Object(c["cb"])(Object(c["m"])("div",{style:[{position:"absolute",left:"0px",width:"2px"},{top:"".concat(7*s.customHeight/6,"px"),height:"".concat(.41*s.customHeight,"px"),transform:"translate(0,".concat(s.margin,"px)")}],class:"sideblock left"},null,4),[[c["Y"],i.checkedout]]),Object(c["cb"])(Object(c["m"])("div",{style:[{position:"absolute",right:"0px",width:"2px"},{top:"".concat(7*s.customHeight/6,"px"),height:"".concat(.41*s.customHeight,"px"),transform:"translate(0,".concat(s.margin,"px)")}],class:"sideblock right"},null,4),[[c["Y"],i.checkedout]])]),Object(c["m"])("div",J,Object(c["Q"])(o.computedWidth),1),(Object(c["D"])(),Object(c["i"])(c["c"],{to:"body"},[s.modalVisible?(Object(c["D"])(),Object(c["i"])("div",{key:0,class:"modal",onClick:e[2]||(e[2]=function(){return o.modalClose&&o.modalClose.apply(o,arguments)})},[Object(c["m"])("div",L,[Object(c["m"])("div",U,Object(c["Q"])(o.finalCheckout[s.currentSelection].ing.title),1),Object(c["m"])("div",Z,Object(c["Q"])(o.detailInstruction),1)])])):Object(c["j"])("",!0)]))],64)})),et=(i("d81d"),{props:["clicked","circleArray","width","height","checkedout","max"],inject:["instructions"],data:function(){return{stageNumber:0,customWidth:void 0,customHeight:void 0,margin:10,collapsed:!0,currentSelection:void 0,modalVisible:!1}},watch:{clicked:{handler:function(){this.stageNumber=this.circleArray[0].stage},deep:!0},finalCheckout:{handler:function(){console.log("finalcheck out is well monitored")}}},computed:{detailInstruction:function(){if(this.finalCheckout.length>0){var t=this.modalVisible;console.log(t);var e=this.finalCheckout[this.currentSelection].ing.id;console.log(e);var i=this.instructions.filter((function(t){return t.id==e}));console.log(i[0].instructions);var c=i[0].instructions;return c}return""},totalIngs:function(){var t=this;if(this.collapsed)return[];var e=this.finalCheckout[this.currentSelection].ing.ingredients,i=[];return e.forEach((function(t){i.push({ing:t,has:!1})})),i.forEach((function(e){var i=t.clicked.map((function(t){return t.name}));e.has=i.includes(e.ing)})),i.sort((function(t,e){return t.has===e.has?0:t.has?-1:1})),i},countingWidth:function(){return.25*this.customWidth},computedWidth:function(){var t=this,e=[];return void 0==this.currentSelection?(this.finalCheckout.forEach((function(){e.push(.35*t.customHeight)})),e):(this.finalCheckout.forEach((function(i){0==i.expand?e.push(.35*t.customHeight):1==i.expand&&e.push(.95*t.customWidth)})),e)},ingCounter:function(){var t=this,e=[];if(this.cleanup)return e;for(var i=1;i<11;i++)e.push({category:i,count:0});return e.forEach((function(e,i){var c=t.circleArray.filter((function(t){return t.selection==i})).length;e.count=c})),e},finalCheckout:function(){var t=this;if(this.cleanup){var e=[];return e}var i=this.circleArray.filter((function(e){return e.selection==t.max}));return i.forEach((function(t){t.expand=!1,t.visible=!0})),i}},mounted:function(){this.customWidth=this.width,this.customHeight=this.height,window.addEventListener("resize",this.resize)},unmounted:function(){window.removeEventListener("resize",this.resize)},methods:{modalOpen:function(){this.modalVisible=!0},modalClose:function(){this.modalVisible=!1},expandSelection:function(t){this.finalCheckout.forEach((function(e,i){i==t||(e.visible=!1)})),this.collapsed=!this.collapsed,this.currentSelection=t;var e=this.finalCheckout[t];e.expand=!0,this.finalCheckout.splice(t,1,e)},collapseSelection:function(){this.finalCheckout.forEach((function(t){t.visible=!0,t.expand=!1})),this.collapsed=!this.collapsed,this.currentSelection=void 0},resize:function(){this.checkedout||(this.customWidth=document.querySelector(".bottomcontainer").clientWidth),this.customHeight=.6*document.querySelector(".bottomcontainer").clientHeight}}});i("aa73");et.render=tt,et.__scopeId="data-v-8a535b80";var it=et,ct=i("d4ec"),nt=i("bee2"),st=(i("cb29"),function(){function t(e,i,c,n,s,o,r,a,l,h){Object(ct["a"])(this,t),this.noise=r,this.context=e,this.x=n,this.y=n,this.rad=s,this.orbitradius=[];for(var d=0;d<10;d++)this.orbitradius.push(this.rad*(1-.15*d));this.checkout=!1,this.finalIndex=h,this.biggest=l,this.blurIs=!1,this.xspeed=.01,this.yspeed=.01,this.radius=[1,2,3,4,5,6,23,27,31,35],this.currentRadius=1,this.ing=o,this.selection=o.selection,this.distance=this.orbitradius[0],this.colorArray=[],this.finalColor="#7CACC0",this.stage=a,this.colorArray=["#7cacbf20","#68a7c0c9"],this.currentColor=this.colorArray[0],this.center=[i,c],this.rand=10*Math.random()}return Object(nt["a"])(t,[{key:"draw",value:function(){var t,e;this.context.beginPath(),this.blurcheck(),this.checkout&&this.selection==this.biggest?(this.rand=0,this.currentRadius=5,t=this.center[0]-this.distance+this.finalIndex%20*this.distance/8,e=this.center[1]+this.distance*Math.sin(this.y)*this.noise+this.rand+Math.floor(this.finalIndex/20)*this.distance/10-this.distance/2,this.currentColor="#D96B52",this.context.shadowColor="#D96B52",this.context.arc(t,e,this.currentRadius,0,2*Math.PI),this.context.fillStyle=this.currentColor,this.context.fill(),this.context.closePath()):(t=this.center[0]+this.distance*Math.cos(this.x)*this.noise+this.rand,e=this.center[1]+this.distance*Math.sin(this.y)*this.noise+this.rand),this.checkout?(this.context.arc(t,e,this.currentRadius,0,2*Math.PI),this.context.fillStyle="#7cacbf05",this.context.fill(),this.context.closePath()):(this.context.arc(t,e,this.currentRadius,0,2*Math.PI),this.context.fillStyle=this.currentColor,this.context.fill(),this.context.closePath()),this.update()}},{key:"update",value:function(){2==this.stage&&2==this.selection&&this.updateCircle(1),3==this.stage&&3==this.selection&&this.updateCircle(2),4==this.stage&&4==this.selection&&this.updateCircle(3),5==this.stage&&5==this.selection&&this.updateCircle(4),6==this.stage&&6==this.selection&&this.updateCircle(5),7==this.stage&&7==this.selection&&this.updateCircle(6),8==this.stage&&8==this.selection&&this.updateCircle(7),9==this.stage&&9==this.selection&&this.updateCircle(8),10==this.stage&&10==this.selection&&this.updateCircle(9),1!=this.biggest&&this.selection==this.biggest?this.blurIs=!0:this.blurIs=!1,this.checkout&&this.selection==this.biggest&&(this.y=this.y/2)}},{key:"move",value:function(){this.x+=this.xspeed,this.y+=this.yspeed}},{key:"blurcheck",value:function(){this.blurIs?(this.context.lineWidth=1,this.context.strokeStyle="#68A7C0",this.context.shadowColor="#68A7C0",this.context.shadowOffsetX=0,this.context.shadowOffsetY=0,this.context.shadowBlur=2,this.currentColor=this.colorArray[1]):(this.context.lineWidth=0,this.context.strokeStyle="#68A7C0",this.context.shadowColor="#68A7C0",this.context.shadowOffsetX=0,this.context.shadowOffsetY=0,this.context.shadowBlur=0,this.currentColor=this.colorArray[0])}},{key:"updateCircle",value:function(t){this.currentRadius=this.radius[Math.floor(t/3)],this.distance=this.orbitradius[t]}}]),t}()),ot=Object(c["fb"])("data-v-176b299a");Object(c["G"])("data-v-176b299a");var rt={style:{position:"relative"}},at={class:"blockbox smalltext"},lt={class:"names"},ht={key:0,class:"modal"};Object(c["E"])();var dt=ot((function(t,e,i,n,s,o){return Object(c["D"])(),Object(c["i"])("div",rt,[Object(c["m"])("div",at,[Object(c["m"])("div",lt,Object(c["Q"])(i.ingname),1),Object(c["m"])("img",{onClick:e[1]||(e[1]=function(t){return o.receiveIngredients(i.ingname,o.imgfile)}),onMouseover:e[2]||(e[2]=function(t){return s.hovered=!0}),onMouseleave:e[3]||(e[3]=function(t){return s.hovered=!1}),src:o.imgfile,class:"ingimg"},null,40,["src"])]),s.hovered?(Object(c["D"])(),Object(c["i"])("div",ht,Object(c["Q"])(i.ingname),1)):Object(c["j"])("",!0)])})),ut={props:["ingname","index"],inject:["receiveIngredients","allData"],data:function(){return{blocks:["blblock.png","brblock.png","rdblock.png","ylblock.png"],hovered:!1}},updated:function(){},computed:{imgfile:function(){return this.index%4==0?this.blocks[0]:this.index%4==1?this.blocks[1]:this.index%4==2?this.blocks[2]:this.index%4==3?this.blocks[3]:null}}};i("bab2");ut.render=dt,ut.__scopeId="data-v-176b299a";var bt=ut,gt=(i("a630"),Object(c["fb"])("data-v-096ad864"));Object(c["G"])("data-v-096ad864");var ft={class:"bottomcontainer"},mt={class:"names smalltext"},jt={style:{display:"none"}};Object(c["E"])();var pt=gt((function(t,e,i,n,s,o){var r=Object(c["M"])("el-carousel-item"),a=Object(c["M"])("el-carousel");return Object(c["D"])(),Object(c["i"])(c["b"],null,[Object(c["cb"])(Object(c["m"])("div",ft,[Object(c["m"])(a,{class:"carousel",height:"120px",autoplay:!1,"indicator-position":"inside",arrow:"always"},{default:gt((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(s.ingredCollection,(function(t,e){return Object(c["D"])(),Object(c["i"])(r,{class:"containers",key:e},{default:gt((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(t,(function(t,e){return Object(c["D"])(),Object(c["i"])("div",{class:["elements",{selectedItm:Array.from(o.clicked).includes(t)}],key:e,onClick:function(e){return o.dishNavigate(t)}},[Object(c["m"])("div",mt,Object(c["Q"])(t.name),1),Object(c["m"])("img",{class:"ingimg",src:t.img},null,8,["src"])],10,["onClick"])})),128))]})),_:2},1024)})),128))]})),_:1})],512),[[c["Y"],!i.checkedout]]),Object(c["m"])("div",jt,Object(c["Q"])(t.updatednumber),1)],64)})),Ot={inject:["selectedIngred","dishNavigate","clicked"],props:["checkedout"],data:function(){return{ingredCollection:[],initial:0}},watch:{selectedIngred:{handler:function(t){function e(t,e,i){var c=[];return t.forEach((function(t){c.push(t)})),Array.from({length:i},(function(){return c.splice(0,e)}))}this.ingredCollection=e(t,5,4);var i=Math.floor(this.selectedIngred.length/5)+1;this.initial=i;var c=this.ingredCollection.filter((function(t){return 0==!t.length}));this.ingredCollection=c},deep:!0}}};i("7e8c");Ot.render=pt,Ot.__scopeId="data-v-096ad864";var vt=Ot,xt=Object(c["fb"])("data-v-0fcec845");Object(c["G"])("data-v-0fcec845");var yt=Object(c["m"])("div",{class:"headermsg clearmidtext"},"Ingredients Info",-1),kt={class:"sections"},Ct=Object(c["m"])("div",{class:"clearsmalltext leftside"},"Current Selection",-1),wt={class:"clearmidtext rightside"},It={class:"sections"},Dt=Object(c["m"])("div",{class:"clearsmalltext leftside"},"Ingredients Selected",-1),St={class:"clearmidtext rightside"},Et={class:"largesection"},At={class:"buttoncollector"},Mt={class:"graphcontainer",ref:"graph"},Ht={style:{overflow:"hidden",position:"absolute",bottom:"-1rem",width:"4rem",height:"1rem"},class:"clearsmalltext"},Wt={class:"grid"},_t={class:"tooltip clearsmalltext"},Qt={style:{width:"100%"},class:"tooltipsub"},Pt=Object(c["m"])("div",{class:"leftside"}," Ingredient: ",-1),Nt={class:"rightside"},Yt={style:{width:"100%"},class:"tooltipsub"},Vt=Object(c["m"])("div",{class:"leftside"}," Dish: ",-1),Kt={class:"rightside"};Object(c["E"])();var Gt=xt((function(t,e,i,n,s,o){return Object(c["D"])(),Object(c["i"])("div",{id:"summaryboard",style:{width:"".concat(.3*i.width,"px"),height:"".concat(i.height,"px")}},[yt,Object(c["m"])("div",kt,[Ct,Object(c["m"])("div",wt,Object(c["Q"])(o.latestelement),1)]),Object(c["m"])("div",It,[Dt,Object(c["m"])("div",St,[Object(c["m"])("span",null,Object(c["Q"])(o.clicked.length),1),Object(c["l"])(" / "+Object(c["Q"])(o.selectedIngred.length),1)])]),Object(c["m"])("div",Et,[Object(c["m"])("div",At,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.clicked,(function(t,i){return Object(c["D"])(),Object(c["i"])("div",{key:i,class:"clearsmalltext ingbtn",onMouseover:function(t){return o.highlight(i)},onMouseout:e[1]||(e[1]=function(){return o.reset&&o.reset.apply(o,arguments)})},Object(c["Q"])(t.name),41,["onMouseover"])})),128))]),Object(c["m"])("div",Mt,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(s.dishwithIng,(function(e,i){return Object(c["D"])(),Object(c["i"])("div",{key:i,style:{height:"".concat(e.count,"px"),width:"10px",transform:"translate(0,".concat(t.$refs.graph.clientHeight-e.count-20,"px)")},class:["bars",{active:e.highlight}]},[Object(c["m"])("span",Ht,Object(c["Q"])(i+1),1)],6)})),128)),Object(c["m"])("div",Wt,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(o.axisline,(function(t,e){return Object(c["D"])(),Object(c["i"])("div",{class:"axis tinytext",key:e,style:{height:"".concat(.5,"px"),width:"".concat(100,"%"),transform:"translate(0,".concat(t.scale,"px)")}},[Object(c["m"])("div",{class:["gridtext",{highlight:s.current.name}]},Object(c["Q"])(Math.floor(t.actvalue)),3)],4)})),128))])],512),Object(c["m"])(c["d"],{name:"fade"},{default:xt((function(){return[Object(c["cb"])(Object(c["m"])("div",_t,[Object(c["m"])("div",Qt,[Pt,Object(c["m"])("div",Nt,Object(c["Q"])(s.current.name),1)]),Object(c["m"])("div",Yt,[Vt,Object(c["m"])("div",Kt,Object(c["Q"])(s.current.count)+" dishesusing this. ",1)])],512),[[c["Y"],s.current.name]])]})),_:1})])],4)})),Rt={props:["width","height"],inject:["selectedIngred","selectedDish","clicked"],data:function(){return{yExtent:[0,1],conHeight:void 0,dishwithIng:[],max:0,current:{},conWidth:void 0}},methods:{highlight:function(t){this.dishwithIng.forEach((function(t){t.highlight=!1}));var e=this.dishwithIng[t].name,i=this.dishwithIng[t].count,c={name:e,count:i,highlight:!0};this.current.name=e,this.current.count=this.dishlist[t].count,this.dishwithIng.splice(t,1,c)},reset:function(){this.dishwithIng.forEach((function(t){t.highlight=!1})),this.current={}}},mounted:function(){this.conHeight=this.$refs.graph.clientHeight-20},computed:{latestelement:function(){return this.clicked.length>0?this.clicked[this.clicked.length-1].name:""},dishlist:function(){var t=this,e=[];return this.clicked.forEach((function(i){var c=i.name,n=t.selectedDish.filter((function(t){return t.ingredients.includes(c)})),s={name:c,count:n.length};e.push(s)})),e},yScale:function(){var t=this.$refs.graph.clientHeight-20,e=o["b"](this.dishlist.map((function(t){return t.count}))),i=o["c"]().domain([0,e]).range([0,t]);return i},axisline:function(){var t=this.max/9,e=[];if(this.$refs.graph)for(var i=0;i<10;i++)e.push({actvalue:t*i,scale:this.yScale(t*(9-i))});return e}},watch:{dishlist:function(t){var e=this,i=[];t.forEach((function(t){var c=t.count;i.push({name:t.name,count:e.yScale(c),highlight:!1})})),this.dishwithIng=i;var c=o["b"](t.map((function(t){return t.count})));this.max=c,console.log(c)},dishwithIng:function(){this.$refs.graph.clientWidth&&(this.conWidth=this.$refs.graph.clientWidth)}}};i("7d3b");Rt.render=Gt,Rt.__scopeId="data-v-0fcec845";var qt=Rt,Bt={inject:["ingCollection","selectedIngred","toggleoffSide","toggleonSide","allData","clicked"],props:["visibleSide"],data:function(){return{searchword:"",isGame:"ing-blocks",selectedComponent:"ing-blocks",width:void 0,height:void 0,noise:0,orbitradius:void 0,canvas:null,context:void 0,stage:1,max:1,checkedout:!1,finish:!1}},methods:{searching:function(){var t=this;this.ingCollection.forEach((function(e){if(t.searchword.length>1){var i=e.ing.split(" "),c=i.includes(t.searchword);console.log(c),e.visible=!!c}else""==t.searchword&&(e.visible=!0)})),console.log(this.searchword)},cleanValue:function(){var t=this;this.checkedout=!1,this.cleanup=!0,setTimeout((function(){t.cleanup=!1}),500),this.finish=!1},checkout:function(){var t=this;this.checkedout=!0,this.circleArray.forEach((function(t){t.checkout=!0})),this.finish=!0;var e=[];e=this.circleArray.filter((function(t){return t.selection==t.biggest})),e.forEach((function(t,e){t.finalIndex=e})),e.forEach((function(e){t.circleArray.forEach((function(t){t.ing.id==e.ing.id&&(t.finalIndex=e.finalIndex)}))}))},getRandomArbitrary:function(t,e){return Math.random()*(e-t)+t},selectComponents:function(t){this.selectedComponent=t,this.showBottomAgain()},showBottomAgain:function(){this.checkedout=!1},renderCircle:function(){this.circleArray.forEach((function(t){t.draw(),t.move()}))},frameAnimate:function(){requestAnimationFrame(this.frameAnimate),this.context.clearRect(0,0,this.width,this.height),this.renderCircle()}},components:{ingBlocks:bt,bottomContainer:vt,SummaryContainer:qt,CanvasDesc:it},computed:{stop:function(){return this.selectedIngred.length>=10},visible:function(){return 1==this.visibleSide},circleArray:function(){for(var t=this,e=[],i=0;i<this.allData.length;i++){var c=Object(q["a"])({},this.allData[i]);c.selection=0,e.push(c)}this.selectedIngred.length>0&&this.selectedIngred.forEach((function(t){e.forEach((function(e){e.ingredients.includes(t.name)&&e.selection<11&&e.selection++}))}));var n=e.filter((function(t){return 0!=t.selection})),s=[];return n.forEach((function(e,i){s.push(new st(t.context,t.width/4,t.height/2,i,t.orbitradius,e,t.noise,1,1,0))})),s}},mounted:function(){this.width=document.querySelector(".centercontainer").clientWidth*(9/7),this.height=.6*document.querySelector(".centercontainer").clientHeight,this.orbitradius=this.height/2,this.noise=this.getRandomArbitrary(.9,1);var t=document.querySelector("#interface"),e=t.getContext("2d");this.canvas=t,this.context=e,this.canvas.width=this.width,this.canvas.height=this.height,this.renderCircle(),this.frameAnimate()},unmounted:function(){},watch:{clicked:{handler:function(t){var e=this;this.stage=t.length,t.length>1&&this.circleArray.forEach((function(e){e.stage=t.length})),this.circleArray.forEach((function(t){if(t.selection==t.stage){var i=[];i.push(t.selection);var c=new Set([].concat(i)),n=Math.max.apply(Math,Object(R["a"])(c));e.max=n}})),this.circleArray.forEach((function(t){t.biggest=e.max}))},deep:!0}}};i("c875");Bt.render=G,Bt.__scopeId="data-v-09e5cc7a";var Tt=Bt,$t={data:function(){return{allData:[],ingCollection:[],selectedDish:[],selectedIngred:[],sideisVisible:!0,clicked:[],instructions:[]}},mounted:function(){var t=this;Promise.all([o["a"]("data1.json"),o["a"]("freqIng6.json"),o["a"]("instructions.json")]).then((function(e){e[0].forEach((function(e){t.allData.push(e)}));var i=Object.keys(e[1]);e[2].forEach((function(e){t.instructions.push(e)}));for(var c=0;c<200;c++){var n=i[c],s=!0,o={ing:n,visible:s};t.ingCollection.push(o)}}))},components:{sidePanel:k,centerPiece:Tt},methods:{dishNavigate:function(t){if(this.clicked.includes(t)){var e=this.clicked.indexOf(t);this.clicked.splice(e,1)}else this.clicked.push(t)},toggleoffSide:function(){this.sideisVisible=!1,this.unfold=!0},toggleonSide:function(){this.sideisVisible=!0,this.unfold=!1,this.selectedDish.splice(0),this.selectedIngred.splice(0),this.clicked.splice(0)},receiveIngredients:function(t,e){var i=this;if(this.selectedIngred.some((function(e){return e.name==t})))console.log("already has that");else{var c=new Object;c.img=e,c.name=t,this.selectedIngred.push(c);var n=this.allData.filter((function(e){return e.ingredients.includes(t)}));n.forEach((function(t){i.selectedDish.includes(t)||i.selectedDish.push(t)}))}},removeIngredient:function(t){var e;this.clicked.splice(0,1),this.selectedIngred.forEach((function(i,c){i.name==t&&(e=c)})),this.selectedIngred.splice(e,1),this.clicked.push(t),console.log(this.selectedIngreds)}},provide:function(){return{allData:this.allData,ingCollection:this.ingCollection,selectedDish:this.selectedDish,receiveIngredients:this.receiveIngredients,selectedIngred:this.selectedIngred,sideisVisible:this.sideisVisible,toggleoffSide:this.toggleoffSide,toggleonSide:this.toggleonSide,removeIngredient:this.removeIngredient,clicked:this.clicked,dishNavigate:this.dishNavigate,instructions:this.instructions}}};i("5ced5");$t.render=s;var zt=$t,Xt=i("3fd4"),Ft=(i("7dd6"),Object(c["h"])(zt));Ft.use(Xt["a"]),Ft.mount("#app")},"5ced5":function(t,e,i){"use strict";i("aed9")},"7d3b":function(t,e,i){"use strict";i("bbd7")},"7e8c":function(t,e,i){"use strict";i("351f")},"992c":function(t,e,i){},9954:function(t,e,i){},aa73:function(t,e,i){"use strict";i("9954")},aed9:function(t,e,i){},bab2:function(t,e,i){"use strict";i("992c")},bbd7:function(t,e,i){},c875:function(t,e,i){"use strict";i("f328")},d005:function(t,e,i){},def4:function(t,e,i){"use strict";i("d005")},e915:function(t,e,i){"use strict";i("4ebb")},f328:function(t,e,i){}});
//# sourceMappingURL=app.ae420dca.js.map