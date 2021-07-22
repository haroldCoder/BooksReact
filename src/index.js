import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';
import coder from './img/coder.png';
import {UI2,Controls} from './UI';
const books = require('./books.json');

console.log(books[0].src);
class UI extends React.Component{
  constructor(props){
    super(props);
    let src;
    this.object = new Controls;
  }
  Message = () =>{
  return <h2>hola mundo</h2>
}

signn = () =>{
  $(".panel").append(`
  <div class="windowS">
  <div class="title d-flex">
   <h2>Sing in</h2>
   <span class="material-icons">disabled_by_default</span>
  </div>
  <section class="contex d-flex">
   <input type="text" id="mail" placeholder="E-mail"/>
   <input type="password" id="pass" placeholder="Password"/>
   <button id="submit">Submit</button>
  </section>
  </div>
  `);
  $(".title > span").on("click",function(){
    $(".windowS").remove();
  });
  $(".windowS").css("width","25%");
  $(".windowS").css("height","65%");
  $(".windowS").css("background","#DDDDDD99");
  $(".windowS").css("position","absolute");
  $(".windowS").css("top","30%");
  $(".windowS").css("left","40%");
  $(".windowS").css("backdrop-filter","blur(6px)");
  $(".windowS > .title").css("background","#000000E6");
  $(".windowS > .title > h2").css("color","#051ED2");
  $(".windowS > .title > h2").css("font-family","fantasy");
  $(".windowS > .title > h2").css("margin","5px 0px");
  $(".windowS > .title > h2").css("text-align","center");
  $(".windowS > .title > span").css("position","sticky");
  $(".windowS > .title > span").css("left","100%");
  $(".windowS > .title > span").css("cursor","context-menu");
  $(".windowS > .title > h2").css("position","relative");
  $(".windowS > .title > h2").css("left","40%");
  $(".windowS > .title > span").css("font-size","50px");
  $(".windowS > .title > span").css("color","#D41C21");
  $(".windowS > .contex").css("flex-direction","column");
  $(".windowS > .contex > input").css("width","280px");
  $(".windowS > .contex").css("margin","55px 55px");
  $(".windowS > .contex > input").css("margin","10px 0px");
  $(".windowS > .contex > #submit").css("width","80px");
  $(".windowS > .contex > #submit").css("margin","28px 30%");
  $(".windowS > .contex > input").css("background","#AAA");
  $(".windowS > .contex > #submit").css("color","#010BC3");
  $(".windowS > .contex > #submit").css("font-size","20px");
}
Products = () =>{
  return (<div className="cpanel">
  <div className="title d-flex">
    <h2>Add Books</h2>
  </div>
  <div className="container d-flex">
  <div className="context2 ms-5 mt-5">
     <h3>Name of the book</h3> 
     <input type="text" id="tit"/>
     <h3>SRC Rute of cover book</h3>
     <input type="text" id="cov"/>
   <button id="add">Add Book</button>
  </div>
  <div className="productend mt-5">
  </div>
  <button className="next bg-success">Next<big>{'>>'}</big></button>
  </div>
  </div>);
}
addProduct = () =>{
  ReactDOM.render(
  <this.Products/>,
  document.querySelector(".panel")
);

 $(".cpanel").css("border","4px solid #02A1C5");
 $(".cpanel").css("width","70%");
 $(".cpanel").css("height","89vh");
 $(".cpanel").css("margin","13px 27vh");
 $(".title > h2").css("background","#00FF8AbF");
 $(".title > h2").css("border-bottom-right-radius","12px");
 $(".title > h2").css("border-top-right-radius","12px");
 $(".title > h2").css("padding","10px 10px 15px 15px");
 $(".context2 > form > input").css("width","100%");
 $(".context2 > form > input").css("margin","8.5px 0px");
 $(".context2").css("width","50%");
 $("#img").css("border","8px double #1ACCD1CF");
 $("#img").css("width","60%");
 $("#img").css("height","43.5vh");
 $(".productend").css("width","50%");
 $(".productend").css("height","65vh");
 $(".productend").css("border","10px double #11DCFF");
 $(".cpanel > container").css("flex-flow","row");
 $("#add").css("border","2px solid #01FF00");
 $(".productend").css("margin-left","10.5%");
 $(".next").css("width","80px");
 $(".next").css("height","40px");
 $(".next").css("position","absolute");
 $(".next").css("top","93.5%");
 $(".next").css("left","79%");
 $(".next").css("border","2.5px solid #043c01");
 
 $("#add").on("click",function(){
    if($("#tit").val() != "" && $("#cov").val() != ""){
      ReactDOM.render(
        <section className="reelc d-flex">  
      <div className="target">
       <h2>{$("#tit").val()}</h2>
       <img src={$("#cov").val()}/>
       </div>
      </section>,
      document.querySelector(".productend")
      );
      $(".reelc").css("height","100%");
      $(".target").css("height","100%");
      $(".reelc > .target > h2").css("text-align","center");
      $(".reelc > .target > img").css("width","98%");
      $(".reelc > .target > img").css("height","90%");
      books.push({"title": $("#tit").val(),"src": $("#cov").val(),"section": "create"});
    }
    else{
     alert("¬¬¬");
    }
 });
 $(".next").on("click",function(){
   window.history.replaceState({stage:"enterDetails"},null,"next");
   let key = books.filter(function(e){
      if(e.section == "create"){
        return e.src;
      }
      else{
        return 0;
      }
   });
   ReactDOM.render(
    <section className="reels d-flex">
    {key.map((e,index) =>(  
    <div className="target">
     <h2>{e.title}</h2>
     <img src={e.src}/>
     </div>
    ))}
    </section>,
   document.querySelector(".cpanel")
   );
 });
 window.history.pushState({"urlPath": '/page2'},"hidtory","/q1234&w=beware");
 return 0;
}
Cards = () =>{
  let arrayBooks = [];
  for(let i = 0; i<12; i++){
  arrayBooks.push(books[i]);
  }
    return (
    <section className="reels d-flex">
      {arrayBooks.map((e) =>(  
      <div className="target">
       <h2>{e.title}</h2>
       <img src={e.src}/>
       </div>
      ))}
      </section>
      );
}
  render(){
    return ( 
      <section className="contextp d-flex">
        <div className="menu">
      </div>
      <div>
      <span class="btnmenu material-icons">double_arrow</span>
      </div>
    <div className="contained d-flex">
      <div className="head d-flex">
      <div className="nav">
        <nav className="navbar d-flex">
        <h3 id="sett" onClick={this.signn}>sign in</h3>
        <h3 id="addp" onClick={this.addProduct}>add product</h3>
        <h3 id="about">About us</h3>
        </nav>
        <span class="search material-icons">search</span>
      </div>
      <img id="logo" src={coder}/>
      </div>
      <div className="panel">
      <this.Cards/>
      </div>
      </div>
      </section>
    );
  }
}
export default UI;
const rendering = <UI/>
const obj = new UI;
ReactDOM.render(
  rendering,
  document.getElementById('root'),
);
$("#about").on("click",function(){
    obj.object.About();
});
window.onload = function(){
  let obj = null;
  const colors = {
    green: "yellowgreen"
  }
  let cards = document.querySelectorAll(".target > img");
  cards.forEach(e =>{
    e.onclick = function(ev){
      if(e.style.border != `4px solid ${colors.green}`){
      $(e).css("border",`4px solid ${colors.green}`);
      }
      else{
        $(e).css("border","0px");
      }
    }
  });
  $(".panel").css("height","auto");
  $(".contained").css("height","auto");
  $(".contained").css("margin-left","0px");
  $(".contained").css("flex-direction","column");
  $(".contained").css("width","100%");
  $("#root").css("height","auto");
  $(".reels").css("margin","0px 130px");
  $(".reels").css("padding-top","26px");
  $(".reels").css("flex-flow","row");
  $(".reels").css("flex-wrap","wrap");
  $(".reels").css("width","90%");
  $(".target").css("width","30%");
  $(".target").css("margin-top","30px");
  $(".head #logo").css("width","60px");
  $(".head #logo").css("height","60px");
  $(".head #logo").css("position","sticky");
  $(".head #logo").css("left","95%");
  $(".search").css("position","relative");
  $(".search").css("color", "#FFF");
  $(".search").css("left","-5%");
  $(".search").css("font-size","30px");
  $(".search").css("margin-top","20px");
  $(".search").css("cursor","context-menu");
  $(".menu").css("height","800px");
  $(".btnmenu").css("font-size","30px");
  $(".btnmenu").css("color","#FFF");
  $(".btnmenu").css("position","relative");
  $(".btnmenu").css("top","400px");
  $(".btnmenu").css("cursor","pointer");
  $(".contextp").css("height","100%");
    $(".search").hover(function(){
      $(this).css("color", "#888");
      }, function(){
      $(this).css("color", "#FFF");
    });
    $(".btnmenu").hover(function(){
       $(this).css("color","#33CDFF");
    },function(){
       $(this).css("color","#FFF");
    });
    $(".btnmenu").on("click",function(){
      if($(".menu").html().length == 0){
        $(".menu").append(`
        <div class="intro">
        <h2 class="title">BOOKS</h2>
        <div class="conten">
        <h6 class="temes">Topics</p>
        <h5 class="tem" id="act">ACTION</strong>
        <h5 class="tem" id="rom">ROMANTIC</strong>
        <h5 class="tem" id="his">HISTORY</strong>
        <h5 class="tem" id="chil">CHILDREN</strong>
        <h5 class="tem" id="fan">FANTASY</strong>
        <h5 class="tem" id="edu">EDUCATION</strong>
        </div>
        <div class="conten2">
        <h6 class="temes">settings</h6>
        <h5 class="tem2" id="dark">Mode dark<span class="iconac material-icons" id="ico">toggle_on</span></h5>
        <h5 class="tem2" id="palet">Color letter</h5>
        </div>
        </div>
        `);
        let tem = document.querySelectorAll(".tem");
        tem.forEach(e =>{
         e.addEventListener("mouseover",function(){
           e.style.background = "#99999999"; 
           
         });
         e.addEventListener("mouseout",function(){
           e.style.background = "#333333C7";
         });
        });
        tem.forEach(e =>{
          $(e).one("mouseover",function(){
          obj = new UI2($(e).attr("id"));
          });
        });
        $(".menu").css("background","#FFFFFF33");
        $(".menu").css("width","35.5%");
        $(".menu").css("backdrop-filter","blur(6px)");
        $(".navbar").css("margin-left","0px");
        $(".nav").css("margin-left","8px");
        $(".reels").css("margin","0px 0px");
        $(".reels").css("width","100%");
        $(".title").css("text-align","center");
        $(".title").css("color","#CF2B3F");
        $(".tem").css("color","#BBB");
        $(".tem").css("font-size","25px");
        $(".tem2").css("color","#BBB");
        $(".tem2").css("font-size","25px");
        $(".conten").css("margin-top","30px");
        $(".conten").css("background","#bdb7b72b");
        $(".conten2").css("margin-top","3px");
        $(".conten2").css("background","#bdb7b72b");
        $(".tem").css("border","3px solid #BDB7B75C");
        $(".tem2").css("border","3px solid #BDB7B75C");
        $(".temes").css("font-size","25px");
        $(".temes").css("color","#333333C7");
        $(".temes2").css("cursor","context-menu");
        $(".iconac").css("font-size","45px");
        $(".iconac").css("position","sticky");
        $(".iconac").css("left","97%");
        let tem2 = document.querySelectorAll(".tem2");
        tem2.forEach(e => {
          e.addEventListener("click",function(){
          if($(e).attr("id") == "dark"){
           let span = e.lastChild;
           if($(span).html() == "toggle_on"){
           $(span).html("toggle_off");
           $(".app").css("background","#445cb1");
           }
           else{
             $(span).html("toggle_on");
             $(".app").css("background","#010617");
           }
          }
          else if($(e).attr("id") == "palet"){
            let palet = [8];
            palet[0] = "#D3FF01";
            palet[1] = "#0115ff";
            palet[2] = "#FF0400";
            palet[3] = "#3BFF11";
            palet[4] = "#DD4ACD";
            palet[5] = "#6911FF";
            palet[6] = "#FF6511";
            palet[7] = "#00DFFF";
            $(".panel").append(`
            <div class="pallet">
            <div class="title d-flex">
            <h2>PALETT</h2>
            <span id="close" class="material-icons">disabled_by_default</span>
            </div>
            <div class="color">
            <div class="row">
            <section class="col col-lg-12 col-md-6 col-lg-4 col-xl-6 d-flex">
            </section>
            </div>
            </div></div>`);
            $(".color > .row > .col").ready(function(){
              for(let i = 0; i<palet.length; i++){
              $(".color > .row > .col").append(`
            <section class=${palet[i]} id=${i}></section>
            `);
            $("#"+i).css("background",palet[i]);
            $("#"+i).css("width","70px");
            $("#"+i).css("height","70px");
            $("#"+i).css("margin","10px 20px");
            $("#"+i).on("click",function(){
              $(".reels > .target > h2").css("color",$("#"+i).attr("class"));
            })
              }
            })
            $(".pallet").css("width","20%");
            $(".pallet").css("height","auto");
            $(".pallet").addClass("palle");
            $(".pallet > .title > h2").css("position","sticky");
            $(".pallet > .title > h2").css("left","42.5%");
            $(".pallet > .title > h2").css("color","#FFF");
            $(".pallet > .title > #close").css("position","sticky");
            $(".pallet > .title > #close").css("left","97%");
            $(".pallet > .title > #close").css("color","#c70101c2");
            $(".pallet > .title > #close").css("font-size","5.5vh");
            $(".pallet > .title > #close").css("cursor","pointer");
            $(".pallet > .title > #close").on("click",function(){
              $(".pallet").remove();
            });
            $(".pallet > .color > .row > .col").css("margin-left","15%");
            $(".pallet > .color").css("height","100%");
            $(".pallet > .color > .row").css("height","100%");
            $(".pallet > .color > .row > .col").css("width","100%");
            $(".pallet > .color > .row > .col").css("flex-wrap","wrap");
            $(".pallet > .color > .row").css("width","100%");
            $(".pallet > .color > .row").css("margin","10px 0%");
          }
        });
        });
      }
      else{
        $(".menu").html('');
        $(".nav").css("margin-left","120px");
        $(".menu").css("width","0%");
        $(".reels").css("margin","0px 130px");
        $(".reels").css("width","90%");
      }
      
    });
}