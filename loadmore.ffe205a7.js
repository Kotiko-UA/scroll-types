!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("bpxeT"),i=r("2TvXO"),s=r("dIxxU"),c=r("h6c0i"),l=r("5IjG7"),d="https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true&",u="key=38382365-2ce894cbac0e5297650bdbdb4",f={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};f.loadMoreBtn.classList.add("js-hide"),f.form.addEventListener("submit",(function(e){e.preventDefault(),m=!0,p=0,g=0,f.gallery.innerHTML="",f.loadMoreBtn.classList.add("js-hide"),y(h=e.currentTarget.elements.searchQuery.value.trim())})),f.gallery.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("gallery-image")&&v.on("show .simplelightbox")})),f.loadMoreBtn.addEventListener("click",(function(){return y(h)}));var p=0,g=0,h="",m=!0;function y(e){return b.apply(this,arguments)}function b(){return(b=e(o)(e(i).mark((function t(a){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p+=1,g+=40,e.prev=2,e.next=5,s.default.get("".concat(d).concat(u,"&q=").concat(a,"&per_page=40&page=").concat(p));case 5:if(200===(n=e.sent).status){e.next=8;break}throw new Error(n.status);case 8:if(0!==n.data.hits.length){e.next=11;break}return c.Notify.failure("Sorry, there are no images matching your search query. Please try again."),e.abrupt("return");case 11:if(w(n),m&&(c.Notify.success("Hooray! We found ".concat(n.data.totalHits," images.")),m=!1),!(g>n.data.totalHits)){e.next=17;break}return f.loadMoreBtn.classList.add("js-hide"),c.Notify.failure("We're sorry, but you've reached the end of search results."),e.abrupt("return");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0.message);case 22:case"end":return e.stop()}}),t,null,[[2,19]])})))).apply(this,arguments)}var v=new(e(l))(".gallery .photo-card .img-link",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(e){var t=e.data.hits.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.likes,o=e.views,i=e.comments,s=e.downloads;return'<div class="photo-card">\n        <a class="img-link" href="'.concat(a,'">\n        <img width="320" class="gallery-image" src="').concat(t,'" alt="').concat(n,'" loading="lazy"/>\n        </a>\n        <div class="info">\n        <p class="info-item"><b>Likes</b>').concat(r,'</p>\n        <p class="info-item"><b>Views</b>').concat(o,'</p>\n        <p class="info-item"><b>Comments</b>').concat(i,'</p>\n        <p class="info-item"><b>Downloads</b>').concat(s,"</p>\n        </div>\n        </div>")})).join("");f.gallery.insertAdjacentHTML("beforeend",t),v.refresh(),f.loadMoreBtn.classList.remove("js-hide");var a=f.gallery.firstElementChild.getBoundingClientRect().height;m||window.scrollBy({top:2*a,behavior:"smooth"})}}();
//# sourceMappingURL=loadmore.ffe205a7.js.map
