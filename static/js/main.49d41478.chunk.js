(this.webpackJsonptesting_api=this.webpackJsonptesting_api||[]).push([[0],[,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),s=(t(2),t(4)),i=t(5),o=t(7),u=t(6),m=(t(13),function(e){var a=e.placeholder,t=e.handleSearch;return r.a.createElement("input",{type:"text",className:"searchTerm",placeholder:a,onChange:t})}),d=(t(14),t(15),function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1-of-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__side card__side--front"},r.a.createElement("div",{className:"card__picture",style:{backgroundImage:"linear-gradient(to right bottom, rgba(111, 182, 204, 0.82), rgba(199,8,94,0.8)),url(".concat(e.uim,")"),backgroundSize:"100% 100%"}}),r.a.createElement("div",{className:"card__details"},r.a.createElement("ul",null,r.a.createElement("li",null,e.user.location.country+", "+e.user.location.city),r.a.createElement("li",null,"Email: ",e.user.email),r.a.createElement("li",null,"Phone: ",e.user.phone),r.a.createElement("li",null,"Gender: ",e.user.gender),r.a.createElement("li",null,"DOB \u2666 ",e.user.dob.date.slice(0,10))))),r.a.createElement("div",{className:"card__side card__side--back card__side--back-1"},r.a.createElement("div",{className:"card__cta"},r.a.createElement("div",{className:"card__name-box"},r.a.createElement("p",{className:"card__name-only"},"Name"),r.a.createElement("p",{className:"card__name-value"},e.user.name.first+" "+e.user.name.last)),r.a.createElement("a",{href:"#",className:"btn btn--white"},"View Profile"))))))}),h=function(e){var a={backgroundImage:"url(".concat(e.data.map((function(e){return e.picture.large})),")")};return r.a.createElement("div",{className:"card-list span-1-of-4"},e.data.map((function(e){return r.a.createElement(d,{style:a,user:e,uim:e.picture.large})})))},f=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleSearch=function(a){e.setState({searchField:a.target.value})},e.state={result:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=100").then((function(e){return e.json()})).then((function(a){return e.setState({result:a.results})}))}},{key:"render",value:function(){var e=this.state,a=e.result,t=e.searchField,n=a.filter((function(e){return(e.name.first+e.name.last).toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\u201c\ubaa8\ub4e0 \uc0ac\ub78c\uc740 \ucef4\ud4e8\ud130\uac00 \uc774\ud574\ud560 \uc218\uc788\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(m,{placeholder:"search Names",handleSearch:this.handleSearch}),r.a.createElement(h,{data:n}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.49d41478.chunk.js.map