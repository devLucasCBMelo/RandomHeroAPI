(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",d=document.getElementById("btnSorter"),a=document.getElementById("heroName"),l=document.getElementById("heroImg"),m=()=>Math.round(Math.random()*563),u=()=>{fetch(i).then(o=>o.json()).then(o=>{const r=m(),n=o[r],s=n.name;a.innerHTML=s;const e=n.images.lg;l.src=e}).catch(o=>console.log(o.message))};d.addEventListener("click",u);
