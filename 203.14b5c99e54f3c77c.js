"use strict";(self.webpackChunkng_task=self.webpackChunkng_task||[]).push([[203],{6203:(j,h,r)=>{r.r(h),r.d(h,{AuthModule:()=>X});var c=r(9199),C=r(4668),e=r(8256);let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-auth"]],decls:1,vars:0,template:function(t,l){1&t&&e._UZ(0,"router-outlet")},dependencies:[c.lC]}),n})();class b{constructor(o="",t="",l=!1){this.username=o,this.password=t,this.rememberMe=l}}var v=r(7995),u=r(6895),_=r(5593),k=r(1740),d=r(433),g=r(982);const y=["cb"],M=function(n,o,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":o,"p-checkbox-label-focus":t}};function Z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"label",7),e.NdJ("click",function(i){e.CHM(t);const s=e.oxw(),a=e.MAs(3);return e.KtG(s.onClick(i,a,!0))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,M,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const x=function(n,o,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":o,"p-checkbox-focused":t}},T=function(n,o,t){return{"p-highlight":n,"p-disabled":o,"p-focus":t}},A={provide:d.JU,useExisting:(0,e.Gpc)(()=>f),multi:!0};let f=(()=>{class n{constructor(t){this.cd=t,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(t,l,i){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),i&&l.focus())}updateModel(t){let l;this.binary?(l=this.checked()?this.falseValue:this.trueValue,this.model=l,this.onModelChange(l)):(l=this.checked()?this.model.filter(i=>!g.gb.equals(i,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(l),this.model=l,this.formControl&&this.formControl.setValue(l)),this.onChange.emit({checked:l,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:g.gb.contains(this.value,this.model)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],viewQuery:function(t,l){if(1&t&&e.Gf(y,5),2&t){let i;e.iGM(i=e.CRH())&&(l.inputViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([A])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return l.onFocus()})("blur",function(){return l.onBlur()})("change",function(a){return l.handleChange(a)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(a){e.CHM(i);const p=e.MAs(3);return e.KtG(l.onClick(a,p,!0))}),e._UZ(5,"span",5),e.qZA()(),e.YNc(6,Z,2,9,"label",6)}2&t&&(e.Tol(l.styleClass),e.Q6J("ngStyle",l.style)("ngClass",e.kEZ(18,x,l.checked(),l.disabled,l.focused)),e.xp6(2),e.Q6J("readonly",l.readonly)("value",l.value)("checked",l.checked())("disabled",l.disabled),e.uIk("id",l.inputId)("name",l.name)("tabindex",l.tabindex)("aria-labelledby",l.ariaLabelledBy)("aria-label",l.ariaLabel)("aria-checked",l.checked())("required",l.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,T,l.checked(),l.disabled,l.focused)),e.xp6(1),e.Q6J("ngClass",l.checked()?l.checkboxIcon:null),e.xp6(1),e.Q6J("ngIf",l.label))},dependencies:[u.mk,u.O5,u.PC],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez]}),n})();var L=r(8271);const F=[[["form"]]],w=function(n){return{"--bg-image":n}},J=["form"];let U=(()=>{class n{constructor(){this.backgroundImage="assets/images/auth-bg.png"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-auth-template"]],inputs:{backgroundImage:"backgroundImage"},ngContentSelectors:J,decls:12,vars:3,consts:[[1,"grid","grid-nogutter"],[1,"md:col-6","flex","bg-white","flex-auto","h-screen"],[1,"container","m-auto"],[1,"flex","align-items-center"],["icon","pi pi-users","size","xlarge","shape","circle",1,"text-primary"],[1,"px-2"],[1,"text-gray-900","text-4xl"],[1,"p-3"],[1,"lg:w-28rem"],[1,"md:col-6","hidden","md:flex","h-screen","auth-bg",3,"ngStyle"]],template:function(t,l){1&t&&(e.F$t(F),e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"p-avatar",4)(5,"div",5),e.TgZ(6,"span",6),e._uU(7," People Profiling "),e.qZA()(),e._UZ(8,"div",7),e.TgZ(9,"div",8),e.Hsn(10),e.qZA()()(),e._UZ(11,"div",9),e.qZA()),2&t&&(e.xp6(11),e.Q6J("ngStyle",e.VKq(1,w,"url("+l.backgroundImage+")")))},dependencies:[u.PC,L.q],styles:[".auth-bg[_ngcontent-%COMP%]{background-image:var(--bg-image);background-position:center;background-size:cover}"]}),n})();function E(n,o){1&n&&(e.TgZ(0,"p",27),e._uU(1,"Username is required"),e.qZA())}function S(n,o){if(1&n&&(e.ynx(0),e.YNc(1,E,2,0,"p",26),e.BQk()),2&n){e.oxw();const t=e.MAs(8);e.xp6(1),e.Q6J("ngIf",t.hasError("required"))}}function I(n,o){1&n&&(e.TgZ(0,"p",27),e._uU(1,"Password is required"),e.qZA())}function Q(n,o){if(1&n&&(e.ynx(0),e.YNc(1,I,2,0,"p",26),e.BQk()),2&n){e.oxw();const t=e.MAs(14);e.xp6(1),e.Q6J("ngIf",t.hasError("required"))}}function q(n,o){1&n&&e.GkF(0)}function V(n,o){1&n&&(e.O4$(),e.TgZ(0,"svg",28),e._UZ(1,"path",29)(2,"path",30)(3,"path",31)(4,"path",32)(5,"path",33)(6,"path",34)(7,"path",34)(8,"path",35)(9,"path",36)(10,"path",37)(11,"path",38)(12,"path",39)(13,"path",40)(14,"path",41)(15,"path",42)(16,"path",43)(17,"path",44)(18,"path",45)(19,"path",46)(20,"path",47)(21,"path",48)(22,"path",49)(23,"path",50)(24,"path",51)(25,"path",52)(26,"path",53),e.qZA())}const R=[{path:"",component:m,children:[{path:C.X.AuthLogin,component:(()=>{class n{constructor(t,l){this.facadeService=t,this.router=l,this.login=new b,this.routes=C.$}onLoginSuccess(){this.facadeService.toasterService.success({summary:"Success",detail:"Logged In Successfully"}),this.router.navigate([this.routes.User])}loginByUAEPass(){this.onLoginSuccess()}submit(t){t?.invalid||this.onLoginSuccess()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.e),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:39,vars:13,consts:[[3,"ngSubmit"],["loginForm","ngForm"],[1,"text-gray-900","text-lg"],[1,"p-input-icon-left","w-full"],[1,"pi","pi-user"],["type","text","pInputText","","required","","name","username",1,"w-full",3,"ngModel","ngModelChange"],["username","ngModel"],[4,"ngIf"],[1,"py-2"],[1,"pi","pi-lock"],["type","password","pInputText","","required","","name","password",1,"w-full",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"flex","justify-content-between"],["name","rememberMe","label","Remember Me",3,"ngModel","binary","ngModelChange"],[1,"no-underline","text-primary",3,"routerLink"],[1,"py-3"],["type","submit","label","Login","styleClass","w-full",1,"w-full","block"],[1,"text-center","text-gray-800","my-1"],["type","button","styleClass","w-full p-button-text border-gray-600 text-black-alpha-90",1,"w-full","block",3,"onClick"],[1,"flex","m-auto"],[4,"ngTemplateOutlet"],[1,"px-2"],[1,"py-1"],[1,"text-center"],[1,"text-gray-700","px-1"],["uaePassLogo",""],["class","text-red-500 my-1",4,"ngIf"],[1,"text-red-500","my-1"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.5474 21.078L11.548 21.0773C11.5461 21.0763 11.5444 21.0753 11.5424 21.0742C11.5369 21.0705 11.5307 21.0674 11.5249 21.0641C11.0127 20.7811 10.1623 19.9485 10.1081 19.9072C10.1076 19.9065 10.107 19.9059 10.1064 19.9053L10.1058 19.9057C10.0659 19.8756 10.0232 19.8487 9.97406 19.8298C9.69071 19.7206 9.36921 19.8568 9.25749 20.1341C9.19585 20.2867 9.21261 20.4501 9.28619 20.5846L9.29313 20.6111C9.97792 21.5153 11.0649 21.9649 11.0649 21.9649C11.3305 22.0672 11.6316 21.9394 11.7364 21.6797C11.8264 21.4568 11.7414 21.2085 11.5474 21.078Z","fill","#E82227"],["fill-rule","evenodd","clip-rule","evenodd","d","M7.26428 4.29653C10.5361 2.5663 13.8098 2.70433 17.0815 4.29711C17.4452 4.47413 17.8181 4.5969 18.0331 4.13882C18.2215 3.73748 17.9405 3.51857 17.5982 3.34503C15.8626 2.46515 14.0245 1.99548 12.0649 2.0005C10.1768 1.98505 8.41503 2.44662 6.76711 3.33885C6.41864 3.52726 6.09021 3.75466 6.3518 4.19403C6.58315 4.58262 6.92814 4.47413 7.26428 4.29653Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.21484 18.7236C5.9103 18.7236 5.66238 18.9658 5.66238 19.2637C5.66238 19.5614 5.9103 19.8036 6.21484 19.8036C6.51958 19.8036 6.7673 19.5614 6.7673 19.2637C6.7673 18.9658 6.51958 18.7236 6.21484 18.7236Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.4099 9.64522C13.4099 9.34755 13.1622 9.10529 12.8575 9.10529C12.5529 9.10529 12.3052 9.34755 12.3052 9.64522C12.3052 9.94289 12.5529 10.1852 12.8575 10.1852C13.1622 10.1852 13.4099 9.94289 13.4099 9.64522Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M19.3445 17.4916C19.0398 17.4916 18.7921 17.7339 18.7921 18.0316C18.7921 18.3292 19.0398 18.5715 19.3445 18.5715C19.6491 18.5715 19.8968 18.3292 19.8968 18.0316C19.8968 17.7339 19.6491 17.4916 19.3445 17.4916Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.188 15.3C14.8832 15.3 14.6357 15.5423 14.6357 15.8399C14.6357 16.1376 14.8832 16.3799 15.188 16.3799C15.4925 16.3799 15.7404 16.1376 15.7404 15.8399C15.7404 15.5423 15.4925 15.3 15.188 15.3Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M21.8392 11.7485C21.5344 11.7485 21.2867 11.9908 21.2867 12.2885C21.2867 12.5863 21.5344 12.8284 21.8392 12.8284C22.1437 12.8284 22.3916 12.5863 22.3916 12.2885C22.3916 11.9908 22.1437 11.7485 21.8392 11.7485Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M21.5872 10.5197C21.5872 10.2221 21.3395 9.9798 21.0348 9.9798C20.7302 9.9798 20.4825 10.2221 20.4825 10.5197C20.4825 10.8176 20.7302 11.0597 21.0348 11.0597C21.3395 11.0597 21.5872 10.8176 21.5872 10.5197Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M5.10292 5.84599C5.40746 5.84599 5.65537 5.60391 5.65537 5.30605C5.65537 5.00838 5.40746 4.76611 5.10292 4.76611C4.79837 4.76611 4.55046 5.00838 4.55046 5.30605C4.55046 5.60391 4.79837 5.84599 5.10292 5.84599Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.05644 10.5916C2.85014 10.5916 2.67196 10.7041 2.57718 10.8682L2.57526 10.8672C2.57314 10.8726 2.57102 10.8778 2.5689 10.8832C2.54945 10.9193 2.53384 10.9574 2.52325 10.9977C2.05247 12.2197 2.02299 13.4879 2.02299 13.4879C2.02299 13.7858 2.27071 14.0279 2.57526 14.0279C2.83627 14.0279 3.05432 13.8495 3.11173 13.6113L3.11269 13.6111C3.11269 13.6099 3.11269 13.609 3.11288 13.608C3.12174 13.5694 3.12771 13.5294 3.12771 13.4879C3.12771 13.4692 3.12386 13.4513 3.12193 13.4329C3.19552 12.22 3.56402 11.3442 3.56402 11.3442V11.344C3.59272 11.2788 3.6089 11.207 3.6089 11.1315C3.6089 10.8338 3.36099 10.5916 3.05644 10.5916Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M9.42925 7.2399C4.89018 9.01106 3.719 13.2487 4.9524 17.3925C4.95914 17.4288 4.96954 17.4638 4.98322 17.4972C5.06547 17.6944 5.2633 17.8342 5.49464 17.8342C5.52777 17.8342 5.55994 17.8302 5.59153 17.8247C5.65838 17.8132 5.72059 17.7888 5.77684 17.756C5.93788 17.6616 6.04691 17.491 6.04691 17.2943C6.04691 17.2591 6.04286 17.2248 6.03631 17.1912C6.03438 17.1821 6.0313 17.1738 6.02899 17.1647C5.91996 16.7736 5.81537 16.381 5.73581 15.9841C4.85339 11.5858 7.81041 7.81323 12.1495 7.81323C16.135 7.81323 18.815 10.2467 18.815 13.9077C18.815 15.3644 18.2213 16.0903 17.1681 16.0687C17.1663 16.0687 17.1648 16.0681 17.1631 16.0681C17.1617 16.0681 17.1604 16.0685 17.1588 16.0685C17.1384 16.0681 17.1178 16.0692 17.0976 16.0681C17.0951 16.0704 17.0935 16.0729 17.091 16.0752C16.8208 16.1102 16.6108 16.3347 16.6108 16.608C16.6108 16.8566 16.784 17.0638 17.018 17.1265C17.0249 17.1294 17.0325 17.1321 17.0456 17.1356C17.0461 17.1356 17.0481 17.1358 17.0488 17.1362C17.0533 17.1369 17.0581 17.1373 17.0625 17.1381C17.0741 17.1396 17.0879 17.141 17.1051 17.1423C17.1243 17.1441 17.1432 17.1479 17.1631 17.1479C17.1702 17.1479 17.1767 17.1462 17.1839 17.146C17.2954 17.1493 17.4283 17.1479 17.4283 17.1479C19.1581 17.014 19.7797 15.6052 19.7797 13.5701C19.7797 8.4966 14.2513 5.35833 9.42925 7.2399Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M9.67345 5.79218C9.69644 5.78839 9.71703 5.7798 9.73934 5.77429C9.71635 5.78014 9.69404 5.78633 9.67104 5.79252C9.67173 5.79218 9.67242 5.79218 9.67345 5.79218Z","fill","#00AEEF"],["fill-rule","evenodd","clip-rule","evenodd","d","M10.1052 5.16074C10.1035 5.15186 10.1004 5.14356 10.0983 5.13487C10.0394 4.90341 9.82689 4.73083 9.57224 4.73083C9.53891 4.73083 9.50655 4.73489 9.47496 4.74049C9.43335 4.75226 9.39329 4.765 9.35245 4.77716C8.46579 5.04221 7.73091 5.40358 6.97697 5.84584C5.93794 6.45547 5.11079 7.14347 4.238 8.24129C4.11337 8.39804 3.89088 8.60402 3.74391 8.82524C3.66994 8.90632 3.62178 9.00902 3.60868 9.12253C3.57825 9.2704 3.61311 9.41827 3.75836 9.55706C3.76356 9.56247 3.76934 9.56729 3.77473 9.57251C3.79418 9.59007 3.81518 9.60745 3.83849 9.62482C3.84099 9.62675 3.8435 9.6281 3.846 9.63003C3.846 9.63003 3.84619 9.63003 3.84619 9.63023C4.43352 10.0547 4.80644 9.25244 5.06822 8.92138C6.44493 7.18111 7.77522 6.27401 9.66605 5.78426C9.67896 5.78098 9.69148 5.77731 9.70457 5.77403C9.75601 5.7611 9.80532 5.74256 9.85001 5.7165C10.0085 5.62365 10.1158 5.4559 10.1158 5.26228C10.1158 5.22753 10.1118 5.19375 10.1052 5.16074Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M20.3169 8.44296C20.2907 8.39586 20.2593 8.35204 20.2204 8.31478C18.2097 5.74444 15.5231 4.50106 12.3036 4.43542C12.1608 4.43736 11.8 4.43542 11.758 4.43542C11.4535 4.43542 11.2056 4.67769 11.2056 4.97536C11.2056 5.27322 11.4535 5.5153 11.758 5.5153C14.5914 5.36781 17.4456 6.51487 19.3751 8.99255L19.3755 8.99294C19.3817 9.0024 19.3894 9.0107 19.3961 9.01958C19.4967 9.15065 19.6552 9.23675 19.8353 9.23675C20.1391 9.23675 20.3858 8.99525 20.3858 8.69855C20.3858 8.6057 20.3594 8.51922 20.3169 8.44296Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M17.4935 13.9089C17.4851 13.7389 17.4612 13.5686 17.43 13.4008C17.1697 12.0032 16.3646 10.739 15.287 9.95544C15.3791 10.0296 15.4473 10.1315 15.4769 10.2483C15.479 10.2576 15.4825 10.266 15.4844 10.2753C15.491 10.3093 15.495 10.3444 15.495 10.3803C15.495 10.5807 15.3841 10.7544 15.2202 10.8504C15.1627 10.884 15.0994 10.9087 15.0312 10.9205C14.9992 10.9261 14.9665 10.9301 14.9328 10.9301C14.8206 10.9301 14.717 10.8973 14.6294 10.8419C15.5133 11.5735 16.2603 12.7858 16.3923 14.0068C16.4347 14.3985 16.4749 14.7987 16.9721 14.7826C17.5365 14.7647 17.5134 14.3101 17.4935 13.9089Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.0402 10.9206C15.1084 10.9086 15.1716 10.8841 15.229 10.8505C15.3931 10.7546 15.504 10.5808 15.504 10.3805C15.504 10.3446 15.5 10.3094 15.4932 10.2753C15.4913 10.2662 15.488 10.2577 15.4859 10.2484C15.4561 10.1316 15.3881 10.0297 15.2958 9.95559C15.2887 9.95037 15.2815 9.94497 15.2744 9.93995C15.1814 9.87181 15.0668 9.83069 14.9416 9.83069C14.6314 9.83069 14.3791 10.0772 14.3791 10.3805C14.3791 10.4148 14.3831 10.448 14.3895 10.4805C14.3964 10.5173 14.4068 10.5529 14.4209 10.5868C14.4486 10.6532 14.49 10.7125 14.5403 10.7631C14.5733 10.7886 14.6058 10.815 14.6382 10.842C14.7258 10.8974 14.8296 10.9303 14.9416 10.9303C14.9755 10.9303 15.008 10.9262 15.0402 10.9206Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.2758 9.93982C15.2885 9.94911 15.3012 9.95839 15.3139 9.96768C15.3015 9.9577 15.2885 9.94911 15.2758 9.93982Z","fill","#00AEEF"],["fill-rule","evenodd","clip-rule","evenodd","d","M14.7034 10.904C14.6454 10.8558 14.5874 10.8087 14.529 10.7633C14.5819 10.8163 14.6395 10.8637 14.7034 10.904Z","fill","#00AEEF"],["fill-rule","evenodd","clip-rule","evenodd","d","M12.7241 11.4654C12.7223 11.465 12.7213 11.4647 12.7196 11.4644C12.7213 11.465 12.723 11.4654 12.7247 11.4661L12.7241 11.4654Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M14.9531 20.3078C14.6481 20.2001 14.3309 20.1157 14.0416 19.9765C11.7079 18.8534 10.4523 17.0158 10.3319 14.4766C10.2782 13.3413 11.0293 12.5446 12.0791 12.5041L12.0943 12.4989C12.158 12.4886 12.2181 12.4676 12.2729 12.4381C12.4418 12.3471 12.5577 12.1736 12.5577 11.9722C12.5577 11.7723 12.4433 11.5997 12.2763 11.5082C12.2025 11.468 12.1195 11.4433 12.0301 11.4402C12.0238 11.44 12.0178 11.4383 12.0115 11.4383C11.9991 11.4383 11.9874 11.4412 11.9752 11.442C10.5702 11.5304 9.43872 12.5392 9.25419 13.9092C8.83888 16.9952 11.5154 20.6917 14.6112 21.311C14.9639 21.3817 15.2829 21.3627 15.3913 20.9657C15.4867 20.617 15.2701 20.4197 14.9531 20.3078Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M14.9622 13.7413C14.957 13.699 14.9462 13.6589 14.9318 13.6201C14.8295 13.2257 14.6708 12.7639 14.4431 12.451C14.4262 12.4242 14.4067 12.3991 14.3853 12.3755C14.3817 12.3711 14.3784 12.3659 14.3747 12.3616C14.374 12.3607 14.3726 12.3603 14.3716 12.3593C14.2711 12.2566 14.1303 12.192 13.9737 12.192C13.6689 12.192 13.4212 12.4342 13.4212 12.7319C13.4212 12.7886 13.4326 12.8421 13.4493 12.8935L13.4472 12.8956C13.4472 12.8956 13.4505 12.9025 13.4561 12.9151C13.463 12.9338 13.4711 12.9518 13.48 12.9693C13.5374 13.1025 13.6641 13.416 13.8132 13.9008C13.8213 13.9506 13.8354 13.9982 13.856 14.0426C13.9473 14.2403 14.1495 14.3785 14.3853 14.3785C14.4868 14.3785 14.5806 14.3509 14.6637 14.3061C14.8436 14.2094 14.9671 14.0245 14.9671 13.8098C14.9671 13.7867 14.9651 13.7639 14.9622 13.7413Z","fill","#1B1B1F"],["fill-rule","evenodd","clip-rule","evenodd","d","M9.03097 18.4166C9.05088 18.4499 9.06941 18.4836 9.08932 18.517C9.07181 18.4823 9.05259 18.4489 9.03097 18.4166Z","fill","#E82227"],["fill-rule","evenodd","clip-rule","evenodd","d","M8.07086 18.9294C8.0966 18.9862 8.12784 19.0399 8.16422 19.0901C8.14362 19.0546 8.12337 19.0189 8.10484 18.9862C8.10209 18.9814 8.08871 18.9594 8.07086 18.9294Z","fill","#E82227"],["fill-rule","evenodd","clip-rule","evenodd","d","M10.8448 9.25476C10.7564 9.25476 10.5973 9.31325 10.5959 9.31325C8.31754 9.98195 6.7796 12.0396 6.80329 14.535C6.84933 16.096 7.53355 17.9941 7.9868 18.7879C8.00779 18.8302 8.04439 18.892 8.06693 18.9294C8.07695 18.9462 8.08446 18.9584 8.08619 18.9611C8.0964 18.9796 8.10777 18.9995 8.11933 19.0196C8.21949 19.1588 8.38477 19.2506 8.57181 19.2506C8.66831 19.2506 8.75789 19.2242 8.83706 19.1815C9.00849 19.0894 9.126 18.9134 9.126 18.7088C9.126 18.6236 9.10461 18.5443 9.0684 18.4727C9.05723 18.454 9.04683 18.435 9.03565 18.4163C8.26572 17.1295 7.87507 15.7093 7.92477 14.136C7.98256 12.3046 9.28472 10.8225 10.9506 10.3242C10.9837 10.318 11.0155 10.3082 11.0463 10.2962C11.0956 10.2827 11.2416 10.1906 11.2557 10.152C11.3428 10.0567 11.3971 9.93234 11.3971 9.7947C11.3971 9.49703 11.1494 9.25476 10.8448 9.25476Z","fill","#00AC75"],["fill-rule","evenodd","clip-rule","evenodd","d","M17.5752 18.3588C17.5 18.3177 17.4157 18.2926 17.3245 18.2897H17.3244C17.2931 18.2928 17.2621 18.2948 17.2311 18.2975C14.8639 18.4988 12.9407 16.945 12.7356 14.6318C12.7001 14.2305 12.713 13.7616 12.15 13.8025C11.6309 13.8405 11.6264 14.3511 11.6532 14.7553C11.826 17.3678 14.0724 19.3872 16.7958 19.4157C16.9728 19.4157 17.1521 19.3986 17.3315 19.3739C17.3667 19.369 17.402 19.3642 17.4374 19.3586C17.4846 19.3466 17.5297 19.3291 17.5717 19.3063C17.7439 19.2138 17.862 19.0368 17.862 18.8314C17.862 18.6278 17.7454 18.4519 17.5752 18.3588Z","fill","#1B1B1F"]],template:function(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"app-auth-template")(1,"form",0,1),e.NdJ("ngSubmit",function(){e.CHM(i);const a=e.MAs(2);return e.KtG(l.submit(a))}),e.TgZ(3,"p",2),e._uU(4," Login to your account "),e.qZA(),e.TgZ(5,"span",3),e._UZ(6,"i",4),e.TgZ(7,"input",5,6),e.NdJ("ngModelChange",function(a){return l.login.username=a}),e.qZA()(),e.YNc(9,S,2,1,"ng-container",7),e._UZ(10,"div",8),e.TgZ(11,"span",3),e._UZ(12,"i",9),e.TgZ(13,"input",10,11),e.NdJ("ngModelChange",function(a){return l.login.password=a}),e.qZA()(),e.YNc(15,Q,2,1,"ng-container",7),e._UZ(16,"div",8),e.TgZ(17,"div",12)(18,"p-checkbox",13),e.NdJ("ngModelChange",function(a){return l.login.rememberMe=a}),e.qZA(),e.TgZ(19,"a",14),e._uU(20," Forgot your password? "),e.qZA()(),e._UZ(21,"div",15),e.TgZ(22,"div"),e._UZ(23,"p-button",16),e.TgZ(24,"p",17),e._uU(25,"or"),e.qZA(),e.TgZ(26,"p-button",18),e.NdJ("onClick",function(){return l.loginByUAEPass()}),e.TgZ(27,"div",19),e.YNc(28,q,1,0,"ng-container",20),e.TgZ(29,"span",21),e._uU(30,"Sign in with UAE Pass"),e.qZA()()()(),e._UZ(31,"div",22),e.TgZ(32,"div",23)(33,"span",24),e._uU(34," Don't have an account? "),e.qZA(),e.TgZ(35,"a",14),e._uU(36," Register "),e.qZA()()()(),e.YNc(37,V,27,0,"ng-template",null,25,e.W1O)}if(2&t){const i=e.MAs(2),s=e.MAs(8),a=e.MAs(14),p=e.MAs(38);e.xp6(7),e.ekj("ng-dirty",s.dirty||i.submitted),e.Q6J("ngModel",l.login.username),e.xp6(2),e.Q6J("ngIf",s.invalid&&i.submitted),e.xp6(4),e.ekj("ng-dirty",a.dirty||i.submitted),e.Q6J("ngModel",l.login.password),e.xp6(2),e.Q6J("ngIf",a.invalid&&i.submitted),e.xp6(3),e.Q6J("ngModel",l.login.rememberMe)("binary",!0),e.xp6(1),e.Q6J("routerLink",l.routes.AuthRegister),e.xp6(9),e.Q6J("ngTemplateOutlet",p),e.xp6(7),e.Q6J("routerLink",l.routes.AuthRegister)}},dependencies:[u.O5,u.tP,_.zx,k.o,c.rH,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.On,d.F,f,U]}),n})()},{path:C.X.AuthRegister,component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:2,vars:0,template:function(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"register works!"),e.qZA())}}),n})()},{path:"",redirectTo:C.X.AuthLogin,pathMatch:"full"}]}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(R),c.Bz]}),n})();var Y=r(4960);let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[Y.m,P,B]}),n})()}}]);