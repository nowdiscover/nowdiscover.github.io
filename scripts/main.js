"use strict";function myLogger(e,n){n||console.log(e)}function getRandom(e){return Math.floor(Math.random()*e)}var video=document.getElementById("video"),$video=$("#video"),videoPath="../images/video/",videos=["a","b","c","d","e","f","g","h","i","j","k"],lastVideoId=0;video.addEventListener("ended",function(){myLogger("video paused",isProduction);var e=getRandom(videos.length);e===lastVideoId&&(e+=1,e>=videos.length&&(e=0)),$video.css("background-image",'url("'+videoPath+videos[e]+'.png"'),$video.find("source#mp4").attr("src",videoPath+videos[e]+".mp4"),$video.find("source#webm").attr("src",videoPath+videos[e]+".webm"),$video.find("source#ogv").attr("src",videoPath+videos[e]+".ogv"),video.load(),myLogger("video id is "+e,isProduction),lastVideoId=e});var videoLoadStartTime=(new Date).getTime(),videoLoadStartTime=(new Date).getTime();$(".carousel").carousel({pause:"hover"});var beUntrackable={};$(".benefit-box-wrap").on("mouseover",function(){$(this).find(".benefit-box").stop(!1,!1).animate({"margin-top":"-"+($(this).find(".benefit-img").outerHeight()+$(this).find(".benefit-title").outerHeight())+"px"},150);var e=$(this).find(".benefit-title").text();e in beUntrackable||(ga("send","event","benefit","mouseover",e),beUntrackable[e]=!1,setTimeout(function(){delete beUntrackable[e]},1e3))}),$(".benefit-box-wrap").on("mouseout",function(){$(this).find(".benefit-box").stop(!1,!1).animate({"margin-top":"0"},100)}),$(".feature-box-wrap").on("mouseover",function(){$(this).find(".feature-box").stop(!1,!1).animate({"margin-top":"-"+($(this).find(".feature-img").outerHeight()+$(this).find(".feature-title").outerHeight())+"px"},150);var e=$(this).find(".feature-title").text();e in beUntrackable||(ga("send","event","feature","mouseover",e),beUntrackable[e]=!1,setTimeout(function(){delete beUntrackable[e]},1e3))}),$(".feature-box-wrap").on("mouseout",function(){$(this).find(".feature-box").stop(!1,!1).animate({"margin-top":"0"},100)});var scrollDepth=0,bottomDepth=$(document).height();$(window).on("scroll",function(){var e=$(window).scrollTop();scrollDepth<e&&(scrollDepth=e),e>0?$("#nav-signin-btn").addClass("red"):$("#nav-signin-btn").removeClass("red")}),$(window).on("unload",function(){var e=scrollDepth/bottomDepth*100;ga("send","event","scroll","depth",Math.floor(e))}),$(window).on("resize",function(){scrollDepth=0,bottomDepth=$(document).height()});var lightbox=lity();$(document).on("click","[data-lightbox]",lightbox);var startTime;$(document).on("lity:open",function(){startTime=new Date,ga("send","event","video","start",0)}),$(document).on("lity:close",function(){var e=new Date,n=(e-startTime)/1e3;ga("send","event","video","end",n)}),$("#scroll-next-btn").on("click",function(){var e=$("section");$("html, body").animate({scrollTop:$(e[1]).offset().top-$(".nd-nav").outerHeight()},1e3),ga("send","event","scroll-to-next","clicked",window.location.pathname)}),$("#back-to-top-btn").on("click",function(){$("html, body").animate({scrollTop:0},1e3),ga("send","event","back-to-top","clicked",window.location.pathname)}),$(document).on("lity:ready",function(e,n){n.find("img").panzoom()}),$("#home-signup-btn").on("click",function(){ga("send","event","signup","clicked",0)}),$("#signup1-btn").on("click",function(){ga("send","event","signup","clicked",1)}),$("#signup2-btn").on("click",function(){ga("send","event","signup","clicked",2)}),$("#signup3-btn").on("click",function(){ga("send","event","signup","clicked",3)}),$(".nav-toggle-btn").on("click",function(){$(this).find(".type-1").toggleClass("is-open"),$(".mobile .nav.navbar-nav").toggleClass("is-open")});var scrollDepth=0,bottomDepth=$(document).height();$(window).on("scroll",function(){var e=$(window).scrollTop();scrollDepth<e&&(scrollDepth=e),e>0?$("#nav-signin-btn").addClass("red"):$("#nav-signin-btn").removeClass("red")}),$(window).on("unload",function(){var e=scrollDepth/bottomDepth*100;ga("send","event","scroll","depth",Math.floor(e))}),$(window).on("resize",function(){scrollDepth=0,bottomDepth=$(document).height()}),$("#nav-logo").on("click",function(){ga("send","event","link","clicked","nav logo")}),$("#nav-contact").on("click",function(){ga("send","event","link","clicked","nav contact")}),$("#nav-press").on("click",function(){ga("send","event","link","clicked","nav press")}),$("#nav-help").on("click",function(){ga("send","event","link","clicked","nav help")}),$("#nav-login").on("click",function(){ga("send","event","link","clicked","nav login")}),$("#nav-signup-btn").on("click",function(){ga("send","event","signup","clicked",-1)}),$("#footer-logo").on("click",function(){ga("send","event","link","clicked","footer logo")}),$("#tw-link").on("click",function(){ga("send","event","sns","clicked","twitter")}),$("#fb-link").on("click",function(){ga("send","event","sns","clicked","facebook")}),$("#ld-link").on("click",function(){ga("send","event","sns","clicked","linkedin")}),$("#em-link").on("click",function(){ga("send","event","sns","clicked","email")}),$("#eu-flag").on("click",function(){ga("send","event","sns","clicked","eu flag")}),$("#imprint-link").on("click",function(){ga("send","event","link","clicked","footer imprint")}),$("#privacy-policy-link").on("click",function(){ga("send","event","link","clicked","footer privacy-policy")}),$("#press-link").on("click",function(){ga("send","event","link","clicked","footer press")});