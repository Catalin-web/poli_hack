(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{1218:function(e,t,a){},1247:function(e,t,a){},1248:function(e,t,a){},1251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),c=a(42),l=a(43),s=a(46),d=a(45),u=a(132),m=a(78),h=a.n(m),g=a(102),f=a(103),v=a.n(f),p=a(104),E=a.n(p);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"indiv"},r.a.createElement("div",{className:"intrebari group"},r.a.createElement("div",{className:"intrebaridiv col col-6"},r.a.createElement("span",null,"Ce \xeenseamn\u0103 pentru tine adev\u0103rata fericire?")),r.a.createElement("div",{className:"btndiv col col-6"},r.a.createElement("button",null,"Next")))))},w=a(1277),y=a(1272),S=a(1273),k=a(1274),C=a(121),x=a.n(C),N=a(122),O=a.n(N),M=a(124),j=a.n(M),A=a(125),D=a.n(A),T=a(126),F=a.n(T),U=a(127),V=a.n(U),L=a(123),H=a.n(L),W=a(128),P=a.n(W),J=a(1275),B=(a(1216),a(1278)),R=a(48),q=(a(1217),a(1218),{}),I={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},z=null,G=null,Y=0,$=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getPermissions=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return n.videoAvailable=!0})).catch((function(){return n.videoAvailable=!1}));case 3:return e.next=5,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){return n.audioAvailable=!0})).catch((function(){return n.audioAvailable=!1}));case 5:navigator.mediaDevices.getDisplayMedia?n.setState({screenAvailable:!0}):n.setState({screenAvailable:!1}),(n.videoAvailable||n.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:n.videoAvailable,audio:n.audioAvailable}).then((function(e){window.localStream=e,n.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.getMedia=function(){n.setState({video:n.videoAvailable,audio:n.audioAvailable},(function(){n.getUserMedia(),n.connectToSocketServer()}))},n.getUserMedia=function(){if(n.state.video&&n.videoAvailable||n.state.audio&&n.audioAvailable)navigator.mediaDevices.getUserMedia({video:n.state.video,audio:n.state.audio}).then(n.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},n.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(r){console.log(r)}window.localStream=e,n.localVideoref.current.srcObject=e;var t=function(e){if(e===G)return"continue";q[e].addStream(window.localStream),q[e].createOffer().then((function(t){q[e].setLocalDescription(t).then((function(){z.emit("signal",e,JSON.stringify({sdp:q[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var a in q)t(a);e.getTracks().forEach((function(e){return e.onended=function(){n.setState({video:!1,audio:!1},(function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(r){console.log(r)}window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),n.localVideoref.current.srcObject=window.localStream;var e=function(e){q[e].addStream(window.localStream),q[e].createOffer().then((function(t){q[e].setLocalDescription(t).then((function(){z.emit("signal",e,JSON.stringify({sdp:q[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in q)e(t)}))}}))},n.getDislayMedia=function(){n.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(n.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},n.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(r){console.log(r)}window.localStream=e,n.localVideoref.current.srcObject=e;var t=function(e){if(e===G)return"continue";q[e].addStream(window.localStream),q[e].createOffer().then((function(t){q[e].setLocalDescription(t).then((function(){z.emit("signal",e,JSON.stringify({sdp:q[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var a in q)t(a);e.getTracks().forEach((function(e){return e.onended=function(){n.setState({screen:!1},(function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(r){console.log(r)}window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),n.localVideoref.current.srcObject=window.localStream,n.getUserMedia()}))}}))},n.gotMessageFromServer=function(e,t){var a=JSON.parse(t);e!==G&&(a.sdp&&q[e].setRemoteDescription(new RTCSessionDescription(a.sdp)).then((function(){"offer"===a.sdp.type&&q[e].createAnswer().then((function(t){q[e].setLocalDescription(t).then((function(){z.emit("signal",e,JSON.stringify({sdp:q[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),a.ice&&q[e].addIceCandidate(new RTCIceCandidate(a.ice)).catch((function(e){return console.log(e)})))},n.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var a=String(100/Y)+"%",n="";0===Y||1===Y?(n="100%",a="100%"):2===Y?(n="45%",a="100%"):3===Y||4===Y?(n="35%",a="50%"):n=String(100/Y)+"%";for(var r=e.querySelectorAll("video"),i=0;i<r.length;++i)r[i].style.minWidth=t,r[i].style.minHeight="40%",r[i].style.setProperty("width",n),r[i].style.setProperty("height",a);return{minWidth:t,minHeight:"40%",width:n,height:a}},n.connectToSocketServer=function(){(z=v.a.connect("https://video.sebastienbiollo.com",{secure:!0})).on("signal",n.gotMessageFromServer),z.on("connect",(function(){z.emit("join-call",window.location.href),G=z.id,z.on("chat-message",n.addMessage),z.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){Y--,t.parentNode.removeChild(t);var a=document.getElementById("main");n.changeCssVideos(a)}})),z.on("user-joined",(function(e,t){if(t.forEach((function(e){if(q[e]=new RTCPeerConnection(I),q[e].onicecandidate=function(t){null!=t.candidate&&z.emit("signal",e,JSON.stringify({ice:t.candidate}))},q[e].onaddstream=function(a){var r=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==r)r.srcObject=a.stream;else{Y=t.length;var i=document.getElementById("main"),o=n.changeCssVideos(i),c=document.createElement("video"),l={minWidth:o.minWidth,minHeight:o.minHeight,maxHeight:"100%",margin:"10px",borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill"};for(var s in l)c.style[s]=l[s];c.style.setProperty("width",o.width),c.style.setProperty("height",o.height),c.setAttribute("data-socket",e),c.srcObject=a.stream,c.autoplay=!0,c.playsinline=!0,i.appendChild(c)}},void 0!==window.localStream&&null!==window.localStream)q[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),q[e].addStream(window.localStream)}})),e===G){var a=function(e){if(e===G)return"continue";try{q[e].addStream(window.localStream)}catch(t){}q[e].createOffer().then((function(t){q[e].setLocalDescription(t).then((function(){z.emit("signal",e,JSON.stringify({sdp:q[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var r in q)a(r)}}))}))},n.silence=function(){var e=new AudioContext,t=e.createOscillator(),a=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})},n.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=void 0===t?640:t,n=e.height,r=void 0===n?480:n,i=Object.assign(document.createElement("canvas"),{width:a,height:r});i.getContext("2d").fillRect(0,0,a,r);var o=i.captureStream();return Object.assign(o.getVideoTracks()[0],{enabled:!1})},n.handleVideo=function(){return n.setState({video:!n.state.video},(function(){return n.getUserMedia()}))},n.handleAudio=function(){return n.setState({audio:!n.state.audio},(function(){return n.getUserMedia()}))},n.handleScreen=function(){return n.setState({screen:!n.state.screen},(function(){return n.getDislayMedia()}))},n.handleEndCall=function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},n.openChat=function(){return n.setState({showModal:!0,newmessages:0})},n.closeChat=function(){return n.setState({showModal:!1})},n.handleMessage=function(e){return n.setState({message:e.target.value})},n.addMessage=function(e,t,a){n.setState((function(a){return{messages:[].concat(Object(u.a)(a.messages),[{sender:t,data:e}])}})),a!==G&&n.setState({newmessages:n.state.newmessages+1})},n.handleUsername=function(e){return n.setState({username:e.target.value})},n.sendMessage=function(){z.emit("chat-message",n.state.message,n.state.username),n.setState({message:"",sender:n.state.username})},n.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){J.b.success("Link copied to clipboard!")}),(function(){J.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),J.b.success("Link copied to clipboard!")}catch(a){J.b.error("Failed to copy")}document.body.removeChild(t)}},n.connect=function(){return n.setState({askForUsername:!1},(function(){return n.getMedia()}))},n.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},n.localVideoref=r.a.createRef(),n.videoAvailable=!1,n.audioAvailable=!1,n.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:E.a.internet.userName()},q={},n.getPermissions(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return!1===this.isChrome()?r.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},r.a.createElement("h1",null,"Sorry, this works only with Google Chrome")):r.a.createElement("div",null,!0===this.state.askForUsername?r.a.createElement("div",null,r.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},r.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Set your username"),r.a.createElement(w.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Connect")),r.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},r.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):r.a.createElement("div",null,r.a.createElement(R.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},r.a.createElement(R.a.Header,{closeButton:!0},r.a.createElement(R.a.Title,null,"Chat Room")),r.a.createElement(R.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return r.a.createElement("div",{key:t,style:{textAlign:"left"}},r.a.createElement("p",{style:{wordBreak:"break-all"}},r.a.createElement("b",null,e.sender),": ",e.data))})):r.a.createElement("p",null,"No message yet")),r.a.createElement(R.a.Footer,{className:"div-send-msg"},r.a.createElement(w.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement(w.a,{value:window.location.href,disable:"true"}),r.a.createElement(y.a,{style:{backgroundColor:"#3f51b5",color:"whitesmoke",marginLeft:"20px",marginTop:"10px",width:"120px",fontSize:"10px"},onClick:this.copyUrl},"Copy invite link"),r.a.createElement(b,null)),r.a.createElement(B.a,{id:"main",className:"flex-container",style:{margin:0,padding:0}},r.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",margin:"10px",width:"100%",height:"100%"}})),r.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},r.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleVideo},!0===this.state.video?r.a.createElement(x.a,null):r.a.createElement(O.a,null)),r.a.createElement(S.a,{style:{color:"#f44336"},onClick:this.handleEndCall},r.a.createElement(H.a,null)),r.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleAudio},!0===this.state.audio?r.a.createElement(j.a,null):r.a.createElement(D.a,null)),!0===this.state.screenAvailable?r.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleScreen},!0===this.state.screen?r.a.createElement(F.a,null):r.a.createElement(V.a,null)):null,r.a.createElement(k.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},r.a.createElement(S.a,{style:{color:"#424242"},onClick:this.openChat},r.a.createElement(P.a,null)))))))}}]),a}(n.Component),K=a(1276),Q=(a(1247),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState({url:e.target.value})},n.join=function(){if(""!==n.state.url){var e=n.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},n.state={url:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("body",null,r.a.createElement("div",{className:"is-boxed has-animations"},r.a.createElement("div",{className:"body-wrap boxed-container"},r.a.createElement("main",null,r.a.createElement(K.a,null,r.a.createElement(K.a.Brand,null,"Logo")),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("div",{className:"hero-copy"},r.a.createElement("h1",{className:"hero-title mt-0",style:{fontSize:"50px"}},"Dating is now on videocall"),r.a.createElement("br",null),r.a.createElement("p",{className:"hero-paragraph"},"Now with dating while distancing on most singles\u2019 minds, doing a ",r.a.createElement("b",null,"VIDEO CALL DATE")," before deciding to meet someone is the new norm and this app is the place for that."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"hero-title mt-0"}," The perfect date is only one click away from you and the person you want to date "),r.a.createElement(y.a,{class:"button button-primary",style:{fontSize:"20px"},onClick:this.join},"Go on the date already"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"hero-media"},r.a.createElement("div",{className:"header-illustration"},r.a.createElement("img",{className:"header-illustration-image asset-light",src:"dist/images/header-illustration-light.svg",alt:"Header illustration"})),r.a.createElement("div",{className:"hero-media-illustration"},r.a.createElement("img",{className:"hero-media-illustration-image asset-light",src:"dist/images/hero-media-illustration-light.svg",alt:"Hero media illustration"})),r.a.createElement("div",{className:"hero-media-container"},r.a.createElement("img",{className:"hero-media-image asset-light",src:"dist/images/hero-media-light.svg",alt:"Hero media"}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"features-header text-center"},r.a.createElement("h2",{className:"section-title"},"How does video call dating work?"),r.a.createElement("p",{className:"section-paragraph"},"Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."),r.a.createElement("div",{className:"features-image"},r.a.createElement("img",{className:"features-illustration asset-light",src:"dist/images/features-illustration-light.svg",alt:"Feature illustration"}),r.a.createElement("img",{className:"features-box asset-light",src:"dist/images/features-box-light.svg",alt:"Feature box"}),r.a.createElement("img",{className:"features-illustration asset-light",src:"dist/images/features-illustration-top-light.svg",alt:"Feature illustration top"})),r.a.createElement("div",{className:"features-header text-center"},r.a.createElement("div",{class:"features-wrap"},r.a.createElement("div",{class:"feature-inner"},r.a.createElement("div",{class:"feature-icon"},r.a.createElement("img",{class:"asset-light",src:"dist/images/feature-01-light.svg",alt:"Feature 01"}),r.a.createElement("img",{class:"asset-dark",src:"dist/images/feature-01-dark.svg",alt:"Feature 01"})),r.a.createElement("div",{class:"feature-content"},r.a.createElement("h3",{class:"feature-title mt-0"},"1. Press the button to start your date"),r.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui."))),r.a.createElement("br",null),r.a.createElement("div",{class:"feature-inner"},r.a.createElement("div",{class:"feature-icon"},r.a.createElement("img",{class:"asset-light",src:"dist/images/feature-02-light.svg",alt:"Feature 02"}),r.a.createElement("img",{class:"asset-dark",src:"dist/images/feature-02-dark.svg",alt:"Feature 02"})),r.a.createElement("div",{class:"feature-content"},r.a.createElement("h3",{class:"feature-title mt-0"},"2. Write your name, accept using your mic & video"),r.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui."))),r.a.createElement("br",null),r.a.createElement("div",{class:"feature-inner"},r.a.createElement("div",{class:"feature-icon"},r.a.createElement("img",{class:"asset-light",src:"dist/images/feature-03-light.svg",alt:"Feature 03"}),r.a.createElement("img",{class:"asset-dark",src:"dist/images/feature-03-dark.svg",alt:"Feature 03"})),r.a.createElement("div",{class:"feature-content"},r.a.createElement("h3",{class:"feature-title mt-0"},"3. Send the link to your date and start answering the questions together"),r.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.")))))),r.a.createElement("div",null))))))}}]),a}(n.Component)),X=a(130),Z=a(12),_=(a(1248),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X.a,null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/",exact:!0,component:Q}),r.a.createElement(Z.a,{path:"/:url",component:$}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},138:function(e,t,a){e.exports=a(1251)},165:function(e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.70093829.chunk.js.map