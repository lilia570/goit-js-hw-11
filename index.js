import{a as f,S as g,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(i){return f.get("https://pixabay.com/api/",{params:{key:"52588581-69f7ab0d2e25f8850fd21ce07",q:i.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const c=document.querySelector(".loading-box"),h=new g(".image-card a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function y(i){const r=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:o,comments:d,downloads:m})=>`<li class="image-card">
          <a class="image-link" href="${a}">
            <img 
              class="gallery-image" 
              src="${s}" 
              alt="${e}" 
            />
          </a>
        
          <ul class="stats-list">
            <li class="stats-item"><strong>Likes</strong> <p>${t}</p></li>
            <li class="stats-item"><strong>Views</strong> <p>${o}</p></li>
            <li class="stats-item"><strong>Comments</strong> <p>${d}</p></li>
            <li class="stats-item"><strong>Downloads</strong> <p>${m}</p></li>
          </ul>
        </li>`).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML=""}function b(){c.classList.remove("hidden")}function $(){c.classList.add("hidden")}const l=document.querySelector(".search-form");l.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r==="")return n.error({title:"Please write word!",position:"topRight"}),l.reset();L(),b(),setTimeout(()=>{p(r).then(s=>{s.length===0&&n.error({title:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"}),y(s)}).catch(s=>n.error({title:s.message})).finally(()=>{$()})},1e3),l.reset()});
//# sourceMappingURL=index.js.map
