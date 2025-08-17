(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,j=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),K=new WeakMap;let it=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const ht=r=>new it(typeof r=="string"?r:r+"",void 0,B),ct=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new it(e,r,B)},dt=(r,t)=>{if(j)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Y=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ht(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:ut,getOwnPropertyDescriptor:ft,getOwnPropertyNames:$t,getOwnPropertySymbols:gt,getPrototypeOf:_t}=Object,q=globalThis,F=q.trustedTypes,mt=F?F.emptyScript:"",vt=q.reactiveElementPolyfillSupport,x=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},z=(r,t)=>!pt(r,t),J={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=_t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,s=[...$t(e),...gt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Y(i))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=i;const l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??z)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[x("elementProperties")]=new Map,b[x("finalized")]=new Map,vt?.({ReactiveElement:b}),(q.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,R=I.trustedTypes,G=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,rt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+g,yt=`<${ot}>`,y=document,O=()=>y.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",V=Array.isArray,At=r=>V(r)||typeof r?.[Symbol.iterator]=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,m=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,nt=/^(?:script|style|textarea|title)$/i,bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),C=bt(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,v=y.createTreeWalker(y,129);function at(r,t){if(!V(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=S;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,f=0;for(;f<a.length&&(n.lastIndex=f,p=n.exec(a),p!==null);)f=n.lastIndex,n===S?p[1]==="!--"?n=Q:p[1]!==void 0?n=X:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=m):p[3]!==void 0&&(n=m):n===m?p[0]===">"?(n=i??S,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?m:p[3]==='"'?et:tt):n===et||n===tt?n=m:n===Q||n===X?n=S:(n=m,i=void 0);const $=n===m&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+yt:h>=0?(s.push(c),a.slice(0,h)+rt+a.slice(h)+g+$):a+g+(h===-2?l:$)}return[at(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,p]=Et(t,e);if(this.el=U.createElement(c,s),v.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(rt)){const f=p[n++],$=i.getAttribute(h).split(g),H=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:H[2],strings:$,ctor:H[1]==="."?St:H[1]==="?"?Ct:H[1]==="@"?xt:L}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(nt.test(i.tagName)){const h=i.textContent.split(g),f=h.length-1;if(f>0){i.textContent=R?R.emptyScript:"";for(let $=0;$<f;$++)i.append(h[$],O()),v.nextNode(),a.push({type:2,index:++o});i.append(h[f],O())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function w(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new M(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Pt(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(at(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new wt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new U(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new M(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=w(this,l[s+a],e,a),c===E&&(c=this._$AH[a]),n||=!T(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ct extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class xt extends L{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===E)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const Ot=I.litHtmlPolyfillSupport;Ot?.(U,M),(I.litHtmlVersions??=[]).push("3.3.1");const Tt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis;class P extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}P._$litElement$=!0,P.finalized=!0,W.litElementHydrateSupport?.({LitElement:P});const Ut=W.litElementPolyfillSupport;Ut?.({LitElement:P});(W.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:z},Ht=(r=Mt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function A(r){return(t,e)=>typeof e=="object"?Ht(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(r){return A({...r,state:!0,attribute:!1})}var kt=Object.defineProperty,_=(r,t,e,s)=>{for(var i=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(t,e,i)||i);return i&&kt(t,e,i),i};const Z=class Z extends P{constructor(){super(...arguments),this.loading=!1,this.disabled=!1,this.theme="#003C71",this.placeholder="Buscar...",this.suggestions=[],this.inputValue="",this.filtered=[],this._handleOutsideClick=t=>{if(!this.shadowRoot)return;const e=t.composedPath();e.includes(this.shadowRoot.querySelector("input"))||e.includes(this)||(this.filtered=[],this.requestUpdate())}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}updated(t){t.has("theme")&&this.style.setProperty("--input-border",this.theme)}onInput(t){const e=t.target.value;this.inputValue=e,this.filtered=this.suggestions.filter(s=>s.toLowerCase().includes(e.toLowerCase()))}selectSuggestion(t){this.inputValue=t,this.filtered=[],this.dispatchEvent(new CustomEvent("sugerencia-seleccionada",{detail:{value:t},bubbles:!0,composed:!0}))}_onKeyDown(t){t.key==="Enter"&&(this.dispatchEvent(new CustomEvent("buscar-enter",{detail:{value:this.inputValue},bubbles:!0,composed:!0})),this.filtered=[])}render(){return C`
      <div class="container" role="search">
        <input
          aria-label="Campo de búsqueda"
          placeholder=${this.placeholder}
          .value=${this.inputValue}
          @input=${this.onInput}
          @keydown=${this._onKeyDown}
          ?disabled=${this.disabled}
        />
        ${this.loading?C`<span class="loading">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg>
          </span>`:C`<span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </span>`}
        ${this.filtered.length>0?C`
              <ul class="suggestions">
                ${this.filtered.map(t=>C`<li @click=${()=>this.selectSuggestion(t)} tabindex="0">${t}</li>`)}
              </ul>
            `:null}
      </div>
    `}};Z.styles=ct`
  :host {
    display: block;
    font-family: 'Arial', 'Roboto', sans-serif;

    --color-bg: #ffffff;
    --color-text: #000000;
    --color-border: var(--input-border, #1D1D1B);
    --color-placeholder: #8C8C8C;
    --color-suggestion-bg: white;
    --color-suggestion-hover: #f0f0f0;
  }

  :host([tema="oscuro"]) {
    --color-bg: #1e1e1e;
    --color-text: #f0f0f0;
    --color-border: #f0f0f0;
    --color-placeholder: #aaa;
    --color-suggestion-bg: #2a2a2a;
    --color-suggestion-hover: #333333;
  }

  @media (prefers-color-scheme: dark) {
    :host(:not([tema])) {
      --color-bg: #1e1e1e;
      --color-text: #f0f0f0;
      --color-border: #f0f0f0;
      --color-placeholder: #aaa;
      --color-suggestion-bg: #2a2a2a;
      --color-suggestion-hover: #333333;
    }
  }

  .container {
    position: relative;
    width: 100%;
  }

  input {
    width: 70%;
    height: 20px;
    padding: 10px 40px;
    border: 2px solid var(--color-border);
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    background-color: var(--color-bg);
    color: var(--color-text);
    caret-color: var(--color-border);
  }

  input::placeholder {
    color: var(--color-placeholder);
  }

  .icon {
    position: absolute;
    left: 10px;
    top: 55%;
    transform: translateY(-50%);
    color: var(--color-border);
    
  }

  ul.suggestions {
    list-style: none;
    margin: 4px 0 0;
    padding: 0;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    max-height: 160px;
    overflow-y: auto;
    background: var(--color-suggestion-bg);
    z-index: 10;
    position: absolute;
    width: 100%;
  }

  li {
    padding: 8px 12px;
    cursor: pointer;
    color: var(--color-text);
  }

  li:hover {
    background-color: var(--color-suggestion-hover);
  }

  .loading {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    animation: spin 1s linear infinite;
    color: var(--color-border);
  }

  @keyframes spin {
    from {
      transform: translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`;let u=Z;_([A({type:Boolean})],u.prototype,"loading");_([A({type:Boolean})],u.prototype,"disabled");_([A({type:String})],u.prototype,"theme");_([A({type:String})],u.prototype,"placeholder");_([A({type:Array})],u.prototype,"suggestions");_([A({type:String,reflect:!0})],u.prototype,"tema");_([lt()],u.prototype,"inputValue");_([lt()],u.prototype,"filtered");customElements.define("espe-search-input",u);
