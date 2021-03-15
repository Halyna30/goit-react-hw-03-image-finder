(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1pnHf",imageGalleryItemImg:"ImageGalleryItem_imageGalleryItemImg__32BSm"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__30U5b",modal:"Modal_modal__11vYb"}},24:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2WWAD"}},25:function(e,t,a){e.exports={btnLoadMore:"Button_btnLoadMore__3E0Bf"}},30:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),c=a.n(o),i=(a(30),a(13)),s=a(4),l=a(5),u=a(7),m=a(6),h=a(22),g=a.n(h),d=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o=e.pageSize,c=void 0===o?12:o;return g.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=").concat("19813258-07ae0ca846b71b474a409e06e","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},b=a(23),p=a.n(b),y=a(8),j=a.n(y),f=a(0),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.inputChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handlerSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:j.a.Searchbar,children:Object(f.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handlerSubmit,children:[Object(f.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(f.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:j.a.SearchFormInput,type:"text",placeholder:"Search images and photos",onChange:this.inputChange,value:this.state.query})]})})}}]),a}(r.Component),S=a(11),O=a.n(S),_=function(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL;return Object(f.jsx)("li",{className:O.a.imageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:a,"data-largeimage":r,className:O.a.imageGalleryItemImg})})},I=a(24),x=a.n(I),w=function(e){var t=e.images,a=e.onClick;return Object(f.jsx)("ul",{className:x.a.imageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(f.jsx)(_,{webformatURL:a,tags:r,largeImageURL:n},t)}))})},L=a(25),k=a.n(L),C=function(e){var t=e.onclick;return Object(f.jsx)("button",{type:"button",onClick:t,className:k.a.btnLoadMore,children:"Load more"})},M=a(12),F=a.n(M),N=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),document.body.classList.add("Modal-open")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),document.body.classList.remove("Modal-open")}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(f.jsx)("div",{className:F.a.overlay,onClick:this.handleOverlayClick,children:Object(f.jsx)("div",{className:F.a.modal,children:e})}),N)}}]),a}(r.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",currentPage:1,images:[],isLoading:!1,error:null,currentImage:{largeImageURL:"",description:""},showModal:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,a=t.currentPage,r={searchQuery:t.searchQuery,currentPage:a};return e.setState({isLoading:!0}),d(r).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleImageClick=function(t){if("IMG"===t.target.nodeName){var a=t.target.dataset.largeimage,r=t.target.alt;e.setState({currentImage:{largeImageURL:a,description:r}}),e.toggleModal()}},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=t.length>0&&!a,n=this.state.currentImage,o=n.largeImageURL,c=n.description;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{onSubmit:this.onChangeQuery}),Object(f.jsx)("div",{className:"loader",children:a&&Object(f.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),Object(f.jsx)(w,{images:this.state.images,onClick:this.handleImageClick}),r&&Object(f.jsx)(C,{onclick:this.fetchImages}),this.state.showModal&&Object(f.jsx)(G,{onClose:this.toggleModal,children:Object(f.jsx)("img",{className:"largeImage",src:o,alt:c})})]})}}]),a}(r.Component);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1BCTe",SearchForm:"Searchbar_SearchForm__3eGNp",SearchFormButton:"Searchbar_SearchFormButton__3VJY5",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1SwTh",SearchFormInput:"Searchbar_SearchFormInput__2-hU1"}}},[[70,1,2]]]);
//# sourceMappingURL=main.7d35e83d.chunk.js.map