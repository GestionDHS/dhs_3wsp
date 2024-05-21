import"./style-CFd07vcV.js";import{C as w,c as p,D as y}from"./Dhs-categorias-lYuO07FZ.js";/* empty css                  */function S(o){return`
  <main>
   <nav>
   <ul class="nav_ul_principal">
      <li id="play">Play</li>
      <li><button id="btn-bloque" class="button button_focus btn_relative">Bloques</button></li>
      <li><button id="btn-codigo" class="button btn_relative">Codigo</button></li>
      <li><button id="btn-navegador" class="button button_focus btn_relative">Navegador</button></li>
      <li id="alternar">Alternar</li>
    </ul>
   </nav>
   <secrion class="contenedor" id="contenedor">
      <div class="bloque_codigo felx_col content-box" id="bloque_codigo">
         <div class="head_bloque_codigo">
            <ul class="ul_nav_secundario">
               <li><button id="btn-html" class="button button_focus btn_relative">HTML</button></li>
               <li><button id="btn-css" class="button btn_relative">CSS</button></li>
               <li><button id="btn-js" class="button btn_relative">JS</button></li>
            </ul>
         </div>
         <div class="body_bloque_codigo">
            <div class="body_bloque flex_col" id="body_bloque">
               <div class="ventana_bloques flex_row" id="ventana_bloque">
                  <div id="wsp-html">Workspace HTML</div>
                  <div id="wsp-css" class="hidden">Workspace CSS</div>
                  <div id="wsp-js" class="hidden">Workspace JS</div>
               </div>
               <div class="resizer_css hidden" id="r2"></div>
            </div>
            <div class="body_codigo flex_col hidden" id="body_codigo">
               <div class="ventana_codigo flex_row" id="ventana_codigo">
                  <div id="codigo-html">codigo HTML</div>
                  <div id="codigo-css" class="hidden">codigo CSS</div>
                  <div id="codigo-js" class="hidden">codigo JS</div>
               </div>
            </div>
         </div>
         <div class="resizer_css resizer" id="r1"></div>
      </div>
      
      <div class="navegador flex_row " id="navegador">
         <div class="ventana_navegador" id="ventana_navegador">
            <iframe id="iframe_navegador">
            </iframe>
         </div>
         <button id="btn-consola">consola</button>
         <div class="ventana_consola hidden" id="ventana_consola">Consola</div>
      </div>
   </section>
   
  </main>
`}(function(){document.querySelector("#app").innerHTML=S()})();const h="{}",f="{}";window.miControlador=new w(h);const q=new y,L=new y,C=q.obtenerCategoriasNecesarias(["Funciones"]),k=L.obtenerCategoriasNecesarias(["Sensores"]),E=[["base_frame","Funciones"],["plaintext","Funciones"]],z=[["title","Sensores"]];p(miControlador,C,E,h,"wsp-html","HTML");p(miControlador,k,z,f,"wsp-css","CSS");const s=function(){let o={};return o.contenedor=document.getElementById("contenedor"),o.panel_izq_r1=document.getElementById("bloque_codigo"),o.b_bloque_r2=document.getElementById("body_bloque"),o.b_cod_r2=document.getElementById("body_codigo"),o.panel_derecho_r1=document.getElementById("navegador"),o}();(function(){let o={};return o.ventana_bloques=document.getElementById("ventana_bloques"),o.ventana_codigo=document.getElementById("ventana_codigo"),o.ventana_navegador=document.getElementById("ventana_navegador"),o.ventana_consola=document.getElementById("ventana_consola"),o.iframe_navegador=document.getElementById("iframe_navegador"),o})();let u=document.querySelector("#r1"),b=document.querySelector("#r2"),B=[u,b];for(let o of B)o.addEventListener("mousedown",c=>{c.preventDefault();let a=c.target;document.addEventListener("mousemove",i),document.addEventListener("mouseup",d=>{document.removeEventListener("mousemove",i)});function i(d){let m=100/parseFloat(getComputedStyle(s.panel_izq_r1,"").width),v=100/parseFloat(getComputedStyle(s.contenedor,"").width);if(a.id=="r1"){let e=(parseFloat(getComputedStyle(s.panel_izq_r1,"").width)+d.movementX)*v;s.panel_izq_r1.style.width=e+"%",s.panel_derecho_r1.style.width=100-e+"%",miControlador.workspaceHTML&&Blockly.svgResize(miControlador.workspaceHTML,e),miControlador.workspaceCSS&&Blockly.svgResize(miControlador.workspaceCSS,e),miControlador.workspaceJS&&Blockly.svgResize(miControlador.workspaceJS,e)}else{let e=(parseFloat(getComputedStyle(s.b_bloque_r2,"").width)+d.movementX)*m;s.b_bloque_r2.style.width=e+"%",s.b_cod_r2.style.width=100-e+"%",miControlador.workspaceHTML&&Blockly.svgResize(miControlador.workspaceHTML,e),miControlador.workspaceCSS&&Blockly.svgResize(miControlador.workspaceCSS,e),miControlador.workspaceJS&&Blockly.svgResize(miControlador.workspaceJS,e)}}});const t=function(){let o={};return o["btn-bloque"]=document.querySelector("#btn-bloque"),o["btn-codigo"]=document.querySelector("#btn-codigo"),o["btn-navegador"]=document.querySelector("#btn-navegador"),o}(),n=function(){let o={};return o["btn-html"]=document.querySelector("#btn-html"),o["btn-css"]=document.querySelector("#btn-css"),o["btn-js"]=document.querySelector("#btn-js"),o["btn-consola"]=document.querySelector("#btn-consola"),o}(),l=document.querySelector(".bloque_codigo"),j=document.querySelector(".body_bloque"),M=document.querySelector(".body_codigo"),H=document.querySelector(".navegador");function g(o){(o.id=="btn-codigo"?["#codigo-html","#codigo-css","#codigo-js"]:["#wsp-html","#wsp-css","#wsp-js"]).forEach(a=>{const i=document.querySelector(a);//!elemento_ventana.classList.contains("hidden") && console.log("este div esta prendido " + elemento_ventana.id)
i.classList.contains("hidden")||n["btn-"+i.id.split("-")[1]].classList.add("button_focus")})}function r(o){const c={"btn-bloque":".body_bloque","btn-codigo":".body_codigo","btn-navegador":".navegador","btn-consola":".ventana_consola"},a=document.querySelector(c[o.target.id]);if(a.classList.contains("hidden")?a.classList.remove("hidden"):a.classList.add("hidden"),o.target.classList.toggle("button_focus"),!t["btn-bloque"].classList.contains("button_focus")&&!t["btn-codigo"].classList.contains("button_focus"))l.classList.add("hidden"),l.classList.add("fondo_gris"),n["btn-html"].classList.remove("button_focus"),n["btn-css"].classList.remove("button_focus"),n["btn-js"].classList.remove("button_focus");else{M.style.width=!t["btn-bloque"].classList.contains("button_focus")&&t["btn-codigo"].classList.contains("button_focus")?"100%":"50%",j.style.width=t["btn-bloque"].classList.contains("button_focus")&&!t["btn-codigo"].classList.contains("button_focus")?"100%":"50%";let i=100/parseFloat(getComputedStyle(s.panel_izq_r1,"").width),d=(parseFloat(getComputedStyle(s.b_bloque_r2,"").width)+o.movementX)*i;miControlador.workspaceHTML&&Blockly.svgResize(miControlador.workspaceHTML,d),miControlador.workspaceCSS&&Blockly.svgResize(miControlador.workspaceCSS,d),miControlador.workspaceJS&&Blockly.svgResize(miControlador.workspaceJS,d),console.log("render btn grandes"),l.classList.remove("hidden"),l.classList.remove("fondo_gris"),t["btn-bloque"].classList.contains("button_focus")&&g(o.target),t["btn-codigo"].classList.contains("button_focus")&&g(o.target)}t["btn-navegador"].classList.contains("button_focus")?(u.classList.remove("hidden"),l.style.width="50%",H.style.width="50%"):(u.classList.add("hidden"),l.style.width="100%"),t["btn-codigo"].classList.contains("button_focus")?b.classList.remove("hidden"):b.classList.add("hidden")}function _(o){[n["btn-html"],n["btn-css"],n["btn-js"]].forEach(e=>{e.classList.remove("button_focus")}),o.target.classList.add("button_focus"),n["btn-html"].classList.contains("button_focus")&&console.log("prendido el btn-html"),n["btn-css"].classList.contains("button_focus")&&console.log("prendido el btn-css"),["#wsp-html","#wsp-css","#wsp-js","#codigo-html","#codigo-css","#codigo-js"].forEach(e=>{document.querySelector(e).classList.add("hidden")});const i={"btn-html":"#wsp-html","btn-css":"#wsp-css","btn-js":"#wsp-js"},d={"btn-html":"#codigo-html","btn-css":"#codigo-css","btn-js":"#codigo-js"};document.querySelector(i[o.target.id]).classList.remove("hidden"),document.querySelector(d[o.target.id]).classList.remove("hidden")}t["btn-bloque"].addEventListener("click",r);t["btn-codigo"].addEventListener("click",r);t["btn-navegador"].addEventListener("click",r);n["btn-consola"].addEventListener("click",r);n["btn-html"].addEventListener("click",_);n["btn-css"].addEventListener("click",_);n["btn-js"].addEventListener("click",_);
