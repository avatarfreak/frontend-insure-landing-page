"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var selector=function(t){return document.querySelector(t)},toggleBtn=selector(".menu-btn"),burgerBtn=selector(".menu-btn__burger"),menu=selector(".menu__list"),toggleClass=function(t,e){t.classList.toggle(e)};function toggleAccessibility(){menu.classList.contains("active")?(toggleBtn.setAttribute("aria-expanded","false"),toggleBtn.setAttribute("aria-label","show menu")):(toggleBtn.setAttribute("aria-expanded","true"),toggleBtn.setAttribute("aria-label","close menu"))}toggleBtn.addEventListener("click",(function(){toggleClass(burgerBtn,"active"),toggleClass(menu,"active"),toggleAccessibility()}));var links=_toConsumableArray(menu.querySelectorAll(".menu__link")),lastChild=links.pop();lastChild.addEventListener("blur",(function(){toggleBtn.focus()}));
//# sourceMappingURL=script.js.map