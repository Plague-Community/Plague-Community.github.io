;ventana. CloudflareApps=ventana. CloudflareApps|| {}; CloudflareApps. siteId="f2fe040c79f265bd63c35391f9f15077"; CloudflareApps. installs=CloudflareApps. instala|| {}; ; (función(){'uso estricto'
CloudflareApps. internal=CloudflareApps. interno||{}
var errores=[]
CloudflareApps. interno. placementErrors=errores
var errorHashes={}
function noteError(options){var hash=options. selector+'::'+opciones. type+'::'+(opciones. installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errores. push(opciones))}
var initializedSelectores={}
var currentInit=false
CloudflareApps. interno. markSelectors=function markSelectors(){if(! currentInit){comprobar()
currentInit=verdadero
setTimeout(function(){currentInit=false})}}
function check(){var installs=window. CloudflareApps. Instala
for(var installId en installs){if(! instala. hasOwnProperty(installId)){continuar}
var selectors=installs[installId]. Selectores
si(! selectores){continuar}
for(var key in selectors){if(! selectores. hasOwnProperty(key)){continuar}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=documento. querySelectorAll(selectors[key])
if(els&&els. length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(! els|| ! els. longitud){continuar}
initializedSelectors[hash]=true
els[0]. setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps. querySelector=function querySelector(selector){if(selector==='body'|| selector==='head'){return document[selector]}
CloudflareApps. interno. markSelectores()
var els=documento. querySelectorAll('[cfapps-selector="'+selector+'"]')
si(! els|| ! els. length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=documento. querySelectorAll(selector)
si(! els|| ! els. length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els. length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els. length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}()); (función(){'uso estricto'
var prevEls={}
CloudflareApps. createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps. interno. markSelectores()
try{if(prevEl&&prevEl. parentNode){var replacedEl
if(prevEl. cfAppsElementId){replacedEl=prevEls[prevEl. cfAppsElementId]}
if(replacedEl){prevEl. parentNode. replaceChild(replacedEl,prevEl)
eliminar prevEls[prevEl. cfAppsElementId]}else{prevEl. parentNode. removeChild(prevEl)}}
var element=documento. createElement('cloudflare-app')
contenedor var 
if(opciones. páginas&&opciones. páginas. URLPatterns&&! CloudflareApps. matchPage(opciones. páginas. URLPatterns)){elemento return}
try{container=CloudflareApps. querySelector(opciones. selector)}catch(e){}
si(! contenedor){elemento return}
si(! contenedor. parentNode&&(opciones. método==='after'|| opciones. método==='antes'|| opciones. método==='reemplazar')){elemento return}
if(contenedor===documento. body){if(opciones. método==='después'){opciones. method='append'}else if(options. método==='antes'){opciones. método='prepend'}}
switch(opciones. método){case'prepend':if(contenedor. firstChild){contenedor. insertBefore(element,container. firstChild)
quebrar}
 case'append':contenedor. appendChild(elemento)
quebrar
case'after':if(contenedor. nextSibling){contenedor. parentNode. insertBefore(element,container. nextSibling)}else{container. parentNode. appendChild(elemento)}
quebrar
caso'antes':contenedor. parentNode. insertBefore(elemento,contenedor)
quebrar
case'replace':try{var id=element. cfAppsElementId=Matemáticas. random(). toString(36)
prevEls[id]=container}catch(e){}
contenedor. parentNode. replaceChild(elemento,contenedor)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console. error!=='undefined'){console. error('Error al crear el elemento Cloudflare Apps',e)}}}}()); (función(){'uso estricto'
CloudflareApps. matchPage=function matchPage(patterns){if(! patrones|| ! patrones. length){return true}
var loc=documento. ubicación. host+documento. ubicación. ruta
if(ventana. CloudflareApps&&CloudflareApps. proxy&&CloudflareApps. apoderado. originalURL){var url=CloudflareApps. apoderado. originalURL. Analiza
loc=url. host+url. camino}
for(var i=0; i<patrones. longitud; i++){var re=new RegExp(patterns[i],'i')
if(re. test(loc)){return true}}
devolver false}}()); CloudflareApps. installs["fNuS28I9Qyx7"]={appId:"mb9NgEY4jijv",scope:{}}; ; CloudflareApps. instala["fNuS28I9Qyx7"]. options={"color":"#000000","container":{"method":"after","selector":"body"},"icons":{"blogger":{"enabled":false,"username":""} ,"delicious":{"enabled":false,"username":""},"deviantart":{"enabled":false,"username":""},"dribbble":{"enabled":false," username":""},"facebook":{"enabled":false,"username":""},"flickr":{"enabled":false,"username":""},"github":{"enabled": false,"username":""},"googleplus":{"enabled":false,"username":""},"instagram":{"enabled":false,"username":""} ,"lastfm":{"enabled":false,"username":""},"linkedin":{"enabled":false,"username":""},"mail":{"enabled": false},"PayPal":{"enabled":true,"username":""},"pinterest":{"enabled":false,"username":""},"reddit":{" enabled":false,"username":""},"rss":{"enabled":false,"username":""},"soundcloud":{"enabled":false,"username":"" },"stackoverflow":{"enabled":false,"username":""},"tumblr":{"enabled":false,"username":""},"twitter":{"enabled" :true,"username":""},"vimeo":{"enabled":false,"username":""},"wordpress":{"enabled":false,"username":""} ,"yelp":{"enabled":false,"username":""},"youtube":{"enabled":false,"username":""}},"position":"center", "tamaño":2.5}; ; CloudflareApps. instala["fNuS28I9Qyx7"]. selectors={"container.selector":"body"}; (function(){var script = documento. createElement('script'); guión. src = '/cdn-cgi/apps/body/tl_o1VDkwUoAeRihqlxEjHXbWQk.js'; documento. cabeza. appendChild(script);})();
