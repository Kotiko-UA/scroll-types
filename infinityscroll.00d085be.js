!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var o=r("bpxeT"),i=r("2TvXO"),c=r("dIxxU"),s=r("h6c0i"),l=r("5IjG7"),u="https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true&",d="key=38382365-2ce894cbac0e5297650bdbdb4",f={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")};f.form.addEventListener("submit",(function(e){e.preventDefault(),m=1,p=1,f.gallery.innerHTML="",b(h=e.currentTarget.elements.searchQuery.value.trim())})),f.gallery.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("gallery-image")&&w.on("show .simplelightbox")}));var p=1,g=40,h="",m=1;var v=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(!function(){if(p+=1,(g+=40)>500)return void s.Notify.failure("We're sorry, but you've reached the end of search results.");b(h)}(),g>500&&v.unobserve(e.target))}))}),{root:null,rootMargin:"500px",threshold:0});function b(e){return y.apply(this,arguments)}function y(){return(y=e(o)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(u).concat(d,"&q=").concat(n,"&per_page=40&page=").concat(p));case 3:if(200===(a=e.sent).status){e.next=6;break}throw new Error(a.status);case 6:if(0!==a.data.hits.length){e.next=9;break}return s.Notify.failure("enter a valid value to search for"),e.abrupt("return");case 9:k(a),m&&(s.Notify.success("Hooray! We found ".concat(a.data.totalHits," images.")),m-=1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var w=null,x={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};function k(t){var n=t.data.hits.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.webformatURL,n=e.largeImageURL,a=e.tags,r=e.likes,o=e.views,i=e.comments,c=e.downloads;return'<div class="photo-card">\n        <a class="img-link" href="'.concat(n,'">\n        <img width="320" class="gallery-image" src="').concat(t,'" alt="').concat(a,'" loading="lazy"/>\n        </a>\n        <div class="info">\n        <p class="info-item"><b>Likes</b>').concat(r,'</p>\n        <p class="info-item"><b>Views</b>').concat(o,'</p>\n        <p class="info-item"><b>Comments</b>').concat(i,'</p>\n        <p class="info-item"><b>Downloads</b>').concat(c,"</p>\n        </div>\n        </div>")})).join("");f.gallery.insertAdjacentHTML("beforeend",n),v.observe(f.guard),w=new(e(l))(".gallery .photo-card .img-link",x);var a=f.gallery.firstElementChild.getBoundingClientRect().height;m||window.scrollBy({top:2*a,behavior:"smooth"})}}();
//# sourceMappingURL=infinityscroll.00d085be.js.map
