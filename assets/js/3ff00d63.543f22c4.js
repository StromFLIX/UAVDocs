(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/navio2-typical-plane-setup-scheme-e12905271c8b7522c40b6e4c3a121c4f.png"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),i=(a(0),a(112));const o={id:"techhw",title:"Setup"},r={unversionedId:"techhw",id:"techhw",isDocsHomePage:!1,title:"Setup",description:"The core of the technical hardware is a Raspberry Pi with a Navio2 shield. I have used the installation instructions from the manufacturer (Emlid) to connect the Emf\xfcnger, the servos and the motor. The power supply is provided by Emlid. All in all the following components were installed:",source:"@site/docs/tech_hw.md",slug:"/techhw",permalink:"/UAVDocs/docs/techhw",editUrl:"https://github.com/ArzelaAscoIi/UAVDocs/blob/main/docs/tech_hw.md",version:"current",sidebar:"someSidebar",previous:{title:"Drive",permalink:"/UAVDocs/docs/drive"},next:{title:"Configuration",permalink:"/UAVDocs/docs/techconfig"}},l=[{value:"Hardware",id:"hardware",children:[{value:"Navio2 and Raspberry Pis",id:"navio2-and-raspberry-pis",children:[]},{value:"Wiring",id:"wiring",children:[]},{value:"FPV",id:"fpv",children:[]}]},{value:"Software",id:"software",children:[]}],s={toc:l};function c({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The core of the technical hardware is a Raspberry Pi with a Navio2 shield. I have used the installation instructions from the manufacturer (Emlid) to connect the Emf\xfcnger, the servos and the motor. The power supply is provided by Emlid. All in all the following components were installed:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Control system:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navio2"),Object(i.b)("li",{parentName:"ol"},"Raspberry Pi"),Object(i.b)("li",{parentName:"ol"},"9g Servos (5x)"),Object(i.b)("li",{parentName:"ol"},"Motor: Tunrigy 1400KV"),Object(i.b)("li",{parentName:"ol"},"ESC: 45a"),Object(i.b)("li",{parentName:"ol"},"GPS antenna"),Object(i.b)("li",{parentName:"ol"},"Power module (Navio2)"),Object(i.b)("li",{parentName:"ol"},"Telemetry"),Object(i.b)("li",{parentName:"ol"},"2200mAh Turnigy Lipo"),Object(i.b)("li",{parentName:"ol"},"receiver Turnigy 9x "),Object(i.b)("li",{parentName:"ol"},"channel to SBUS adapter")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"FPV:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"FPV camera"),Object(i.b)("li",{parentName:"ol"},"25mw 5.8gHz transmitter")),Object(i.b)("h2",{id:"hardware"},"Hardware"),Object(i.b)("h3",{id:"navio2-and-raspberry-pis"},"Navio2 and Raspberry Pis"),Object(i.b)("p",null,"Emlid provides detailed instructions, for cabling and installationd it Navios. I downloaded the latest debian based image for the raspberry pi and wrote it to a SD card with the PI imager. Here are already preinstalled almost all needed packages and tools. Among others Ardupilot and ROS.\nAfter I modified the ",Object(i.b)("inlineCode",{parentName:"p"},"wpa_suplicant.conf")," as described in the manual, so that the rpi automatically connects to the wifi, I could connect directly via ssh. Emlid directly added an empty ",Object(i.b)("inlineCode",{parentName:"p"},"ssh")," file in the image for this, so this didn`t have to be done anymore."),Object(i.b)("p",null,"With "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo emlittool ardupilot\n")),Object(i.b)("p",null,"I could simply configure ardupilot for my setup and start sending telemetry data over UDP by adding my local IP as described in the instructions."),Object(i.b)("p",null,"Up to this point neither servos, motor or receiver were connected. "),Object(i.b)("h3",{id:"wiring"},"Wiring"),Object(i.b)("p",null,"Here I followed entirely the illustration provided by ",Object(i.b)("a",{parentName:"p",href:"https://docs.emlid.com/navio2/ardupilot/typical-setup-schemes"},"Emlid"),".\nThe arrangement of the servos can also be swapped, because later you have to set the outputs manually anyway. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"navio2-typical-plane-setup-scheme",src:a(159).default})," "),Object(i.b)("h4",{id:"the-tragedy-with-the-telemetry"},"The tragedy with the telemetry"),Object(i.b)("p",null,"After I wowohl set up the rpi with the Navio and wired the rest of the hardware (correctly), I downloaded Mission Planner. The connection via UDP established itself directly, but was of course dependent on the wifi and therefore more of a temporary solution. After connecting the telemetry counterpart to my computer, I tried to establish a connection via radio.\nHowever, I kept getting the error message ",Object(i.b)("inlineCode",{parentName:"p"},"No Hearbeat packages recieved"),". The telemetry was wired correctly according to the instructions of Emlid and switched on in the configuration file. The red lights, which are supposed to signal the transmission of data, did not blink either, so I looked for the error in the Navio and not in the telemetry itself.\nPlugging the telemetry into a USB port of the rpi and selecting this port for data transfer solved the problem. "),Object(i.b)("p",null,"Before I solved the problem, I spent almost a whole day looking for the error. Why ? I suspect that the UART port of my Navio is defective. Since I couldn't just accept that, I of course spent ages looking for the error on my end and (unfortunately) dived deep into the semantics and syntax of serial protocols.  But on the way I made a big mistake: ",Object(i.b)("strong",{parentName:"p"},"I enabled the serial port from the RPI"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Never enable the serial port of the PI when the Navio2 board is installed."))),Object(i.b)("p",null,"Because this leads to undefined behavior.j I think that the communication between rpi and navio2 is disturbed and the image of Emlid, already uses the serial pins. Sometimes the PI doesn't start anymore and also doesn't connect to the w-lan. But sometimes everything works as expected."),Object(i.b)("h3",{id:"fpv"},"FPV"),Object(i.b)("p",null,"Here I reused my old setup from the quadrocopter. The live video transmission is not really necessary, because 25mW will probably not be enough to guarantee a continuous connection to the aircraft when it flies over the waypoints. (Of course always in line of sight). Eventually I will upgrade to the FPV combo vo DJI with its huge range with HD transmission. But as long as I can not guarantee that the duck remains safely in the air I prefer not to risk losing the precious hardware. "),Object(i.b)("h2",{id:"software"},"Software"))}c.isMDXComponent=!0}}]);