function updateViewportDimensions(){var e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||i.clientWidth,a=e.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:a}}function loadGravatars(){viewport=updateViewportDimensions(),viewport.width>=768&&jQuery(".comment img[data-gravatar]").each(function(){jQuery(this).attr("src",jQuery(this).attr("data-gravatar"))})}var viewport=updateViewportDimensions(),waitForFinalEvent=function(){var e={};return function(t,n,i){i||(i="Don't call this twice without a uniqueId"),e[i]&&clearTimeout(e[i]),e[i]=setTimeout(t,n)}}(),timeToWaitForLast=100;jQuery(document).ready(function($){!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=i(e,t)?a:s;n(e,t)}var i,s,a;"classList"in document.documentElement?(i=function(e,t){return e.classList.contains(t)},s=function(e,t){e.classList.add(t)},a=function(e,t){e.classList.remove(t)}):(i=function(e,n){return t(n).test(e.className)},s=function(e,t){i(e,t)||(e.className=e.className+" "+t)},a=function(e,n){e.className=e.className.replace(t(n)," ")});var r={hasClass:i,addClass:s,removeClass:a,toggleClass:n,has:i,add:s,remove:a,toggle:n};"function"==typeof define&&define.amd?define(r):e.classie=r}(window),function(){function e(){if(classie.has(n,"open")){classie.remove(n,"open"),classie.add(n,"close");var e=function(t){if(support.transitions){if("visibility"!==t.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(n,"close")};support.transitions?n.addEventListener(transEndEventName,e):e()}else classie.has(n,"close")||classie.add(n,"open")}var t=document.getElementById("trigger-overlay"),n=document.querySelector("div.overlay"),i=n.querySelector("button.overlay-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},t.addEventListener("click",e),i.addEventListener("click",e)}()});