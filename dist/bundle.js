!function(e){var n={};function t(u){if(n[u])return n[u].exports;var c=n[u]={i:u,l:!1,exports:{}};return e[u].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,u){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:u})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(u,c,function(n){return e[n]}.bind(null,c));return u},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports){eval('\nwindow.onload = function () {\n    getmostpoularcollections();\n\n    document.querySelector("#Search-results").style.display = "none";\n    document.getElementById("btnSearch").addEventListener("click", function (e) {\n        document.querySelector("#Search-results").style.display = "none";\n        document.querySelector("#searchresults").innerHTML = "";\n        e.preventDefault();\n        let param = document.querySelector("#inprest").value;\n        searchresults(param);\n\n        // formatSearch(searchresult);\n    });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzkxOGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGdldG1vc3Rwb3VsYXJjb2xsZWN0aW9ucygpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNTZWFyY2gtcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5TZWFyY2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjU2VhcmNoLXJlc3VsdHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaHJlc3VsdHNcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcGFyYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHJlc3RcIikudmFsdWU7XG4gICAgICAgIHNlYXJjaHJlc3VsdHMocGFyYW0pO1xuXG4gICAgICAgIC8vIGZvcm1hdFNlYXJjaChzZWFyY2hyZXN1bHQpO1xuICAgIH0pO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);