import React from 'react';
import ReactDOM from 'react-dom';
import $, { ajax } from 'jquery';
import coder from './img/coder.png';
import axios from 'axios';
const books = require('./books.json')

class Controls{
  constructor(){
    $.get("../public/manifest.json",function(data,satus,xhr){
                  console.log(data);
    });
  }
  About = () =>{
    window.history.pushState(null,null,'books.json');
            $(".panel").append(`
            <div class="aboutc">
            <div class="tittle d-flex">
            <img src=${coder} />
            <h1>Coder Developmen</h1>
            <span id="close" class="material-icons">disabled_by_default</span>
            </div>
            <div class="pannel">
            <div class="row">
            <section class="col col-lg-12 col-md-6 col-lg-4 col-xl-6">
            <img id="face" href="https://www.facebook.com/harold.castano.54/" src="https://th.bing.com/th/id/OIP.LFI4JJ0jsbkLTDoc8b3g-wHaHa?pid=ImgDet&rs=1"/>
            <img id="insta" src="https://www.lacazchristie.fr/wp-content/uploads/sites/5/2020/04/insta.jpg"/>
            <img id="whats" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-7.png"/>
            <img id="gma" src="https://th.bing.com/th/id/R.521108f9d50167d75ac388f1e64abd69?rik=O9qV%2fH0OKat6Bg&riu=http%3a%2f%2fwwwhatsnew.com%2fwp-content%2fuploads%2f2014%2f11%2fGmail-logo.jpg&ehk=Xw4Ieh3PI%2fgAKz1nxS2%2bqJPDqEXW5krjWPF6gTq%2bj8o%3d&risl=&pid=ImgRaw"/>
            <img id="twi" src="https://assets.cdn.thewebconsole.com/S3WEB9078/images/Scoail-Media-Buttoms_t.png?m=01b2055a5a3c7f7835fdbc05d0e2780d"/>
            </section>
            </div>
            </div>
            <footer>
            <h4 class="text-center">Copyright ©Coders Development 2021</h4>
            </footer>
            </div>
            `);
            $(".aboutc").css("width","80%");
            $(".aboutc").css("height","80%");
            $(".aboutc").css("position","absolute");
            $(".aboutc").css("top","15%");
            $(".aboutc").css("background","#FFFFFF75");
            $(".aboutc").css("left","10%");
            $(".aboutc").css("backdrop-filter","blur(6px)");
            $(".aboutc > .tittle").css("border-bottom","4px solid #000");
            $(".aboutc > .tittle > img").addClass("imgs");
            $(".aboutc > .tittle > h1").addClass("titlen");
            $(".tittle > #close").addClass("closs");
            $(".aboutc > .pannel > .row").css("margin","0vh 7vh");
            $(".aboutc > .pannel > .row").css("width","100%");
            $(".aboutc > .pannel > .row").css("margin-right","0px");
            $(".aboutc > .pannel > .row").css("margin-bottom","50px");
            $(".aboutc > .pannel > .row > .col").css("margin-left","15%");
            $(".aboutc > .pannel > .row > .col").css("width","70%");
            $(".aboutc > .pannel > .row > .col > img").addClass("cimgs");
            $(".aboutc > footer > h4").css("font-size","30px");
            $(".aboutc > footer > h4").css("color","#3a3a3a");
            $(".tittle > #close").click(function(){
             $(".aboutc").remove();
            });
            $(".aboutc > .pannel > .row > .col > img").on("click",function(e){
              if(e.target.getAttribute("id") == "face"){
                window.location.href = "https://www.facebook.com/harold.castano.54/";
              }
              else if(e.target.getAttribute("id") == "insta"){
                window.location.href = "https://www.instagram.com/har_alvarez16/";
              }
              else if(e.target.getAttribute("id") == "whats"){
                let data = "";
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                  data = JSON.parse(this.responseText);
                  console.log(data.logo);
                  $(".aboutc").append(`
                <div class="panelw">
                <div class="title d-flex">
                <h2>${data.name}</h2>
                <span id="close" class="material-icons">disabled_by_default</span>
                </div>
                <div class="con">
                <img src=${data.logo}/>
                <h3>${data.info}</h3>
                </div>
                </div>
                `);
                $(".panelw").addClass("panw");
                $(".panelw > .con > img").css("width","50%");
                $(".panelw > .con > img").css("height","50%");
                $(".panelw > .con > img").css("border-radius","50%");
                $(".panelw > .con > h3").css("margin","25px 5%");
                $(".panelw > .con > img").css("margin","15px 20%");
                $(".panelw > .con").css("margin","20px 15%");
                $(".panelw > .title > h2").css("margin-left","30%");
                $(".panelw > .title").css("border-bottom","4px solid #AAA");
                $(".panelw > .title").css("background","#B5B5B5");
                $(".panelw > .title > h2").css("font-family","fantasy");
                $(".panelw > .title > #close").css("position","sticky");
                $(".panelw > .title > #close").css("left","100%");
                $(".panelw > .title > #close").css("color","#ff4f4f");
                $(".panelw > .title > #close").css("font-size","45px");
                $(".panelw > .title > #close").css("cursor","pointer");
                $(".panelw > .title > #close").on("click",function(){
                  $(".panelw").remove();
                });
                  }
                xhttp.open("GET", "Apps.json", true);
                xhttp.send();
                
              }
              else if(e.target.getAttribute("id") == "gma"){
                window.location.href = "https://mail.google.com/mail/u/0/?hl=es#inbox";
              }
              else if(e.target.getAttribute("id") == "twi"){
                window.location.href = "https://mobile.twitter.com/Haroldc2005A";
              }
            });
        }
}   
class UI2{
      constructor(attr){
         this.roman = document.getElementById(`${attr}`);
         this.add = document.getElementById('addp');
         this.roman.addEventListener("click",this.Update);
      }
      Update = (e) =>{
        window.history.pushState({id: 1},null,"?=1234&u=beware");
       e.target.style.color = "#ff0101cc"; 
       $(".contained").css("width","100%");
       $(".reels").html('');
       if($(this.roman).attr("id") == "rom"){
       books.forEach(e => {
         if(e.section == "romantics"){
       $(".reels").append(`
      <div class="target">
       <h2>${e.title}</h2>
       <img src=${e.src}/>
       </div>
       `);
         }  
      })
    }
    if($(this.roman).attr("id") == "act"){
      books.forEach(e => {
        if(e.section == "action"){
      $(".reels").append(`
     <div class="target">
      <h2>${e.title}</h2>
      <img src=${e.src}/>
      </div>
      `);
        }  
     })
   }
   if($(this.roman).attr("id") == "his"){
    books.forEach(e => {
      if(e.section == "history"){
    $(".reels").append(`
   <div class="target">
    <h2>${e.title}</h2>
    <img src=${e.src}/>
    </div>
    `);
      }  
   })
   }
 if($(this.roman).attr("id") == "chil"){
  books.forEach(e => {
    if(e.section == "infantils"){
  $(".reels").append(`
 <div class="target">
  <h2>${e.title}</h2>
  <img src=${e.src}/>
  </div>
  `);
    }  
 })
  }
if($(this.roman).attr("id") == "fan"){
  books.forEach(e => {
    if(e.section == "fantaxy"){
  $(".reels").append(`
 <div class="target">
  <h2>${e.title}</h2>
  <img src=${e.src}/>
  </div>
  `);
    }  
 })
  }
  if($(this.roman).attr("id") == "edu"){
    books.forEach(e => {
      if(e.section == "education"){
    $(".reels").append(`
   <div class="target">
    <h2>${e.title}</h2>
    <img src=${e.src}/>
    </div>
    `);
      }  
   })
    }
        }
       
        }
    window.addEventListener("popstate",e=>{
      console.log(e);
      window.history.go(0);
    });
    export {UI2};
    export {Controls};