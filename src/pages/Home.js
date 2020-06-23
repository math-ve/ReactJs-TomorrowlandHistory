import React, { useEffect, useLayoutEffect, useState } from 'react';

import {gsap, ScrollTrigger } from "gsap/all";

import Editions from '../comps/Editions';

gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {

    const {editions} = props;

    const tl1 = gsap.timeline();
    var sc1 = [];
  
    //HEADER TEXT ANIMATION
    useEffect(() => {
      gsap.from(".howto-container h1", {
        duration: 2,
        filter: "blur(20px)"
      })
    },[])  
  
    //LIVE TODAY ANIMATIONS
    useEffect(() => {
      const tl = gsap.timeline();
      tl.from(".transition-1-text-1", {filter:"blur(40px)", y: 300, duration:1})
        .addLabel("part-1")
        .from(".transition-1-item-2", {xPercent: 100})
        .from(".transition-1-text-2", {filter:"blur(40px)", x: 300, duration:1})
        .addLabel("part-2")
        .from(".transition-1-item-3", {xPercent: -100})
        .from(".transition-1-text-3", {filter:"blur(40px)", x: -300, duration:1})
        .addLabel("part-3")
    
      ScrollTrigger.create({
        animation: tl,
        trigger: ".transition-1-container",
        start: "top top",
        end: "+=15000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: "labels",
          duration: {min: 0.2, max: 1},
          delay: 0.2
        }
      });
    },[])
  
    //ANNOUNCEMENT ANIMATIONS
    useEffect(() => {
      const tl = gsap.timeline();
      tl.from(".announcement-bg-container", {duration: 5, opacity: 0})
        .from(".a-anim-1", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-1")
        .fromTo(".a-anim-1", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-1", {display:"none"})
        .from(".a-anim-2", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-2")
        .fromTo(".a-anim-2", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-2", {display:"none"})
        .from(".a-anim-3", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-3")
        .fromTo(".a-anim-3", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-3", {display:"none"})
        .from(".a-anim-4", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-4")
        .fromTo(".a-anim-4", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-4", {display:"none"})
        .from(".a-anim-5", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-5")
        .fromTo(".a-anim-5", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-5", {display:"none"})
        .from(".a-anim-6", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-6")
        .fromTo(".a-anim-6", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-6", {display:"none"})
        .from(".a-anim-7", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-7")
        .fromTo(".a-anim-7", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-7", {display:"none"})
        .from(".a-anim-8", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-8")
        .fromTo(".a-anim-8", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-8", {display:"none"})
        .from(".a-anim-9", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-9")
        .fromTo(".a-anim-9", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-9", {display:"none"})
        .from(".a-anim-10", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-10")
        .fromTo(".a-anim-10", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-10", {display:"none"})
        .from(".a-anim-11", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration: 3})
        .addLabel("part-11")
        .fromTo(".a-anim-11", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:3})
        .to(".a-anim-11", {display:"none"})
        .from(".a-anim-12", {duration:10, xPercent:100, opacity:0})
        .from(".a-anim-13", {duration:10, xPercent:-100, opacity:0})
        .addLabel("part-12")
        .from(".a-anim-14", {duration:10, yPercent:-100})
        .addLabel("part-13")
      
      ScrollTrigger.create({
        animation: tl,
        trigger: ".announcement-container",
        start: "top top",
        end: "+=30000",
        scrub: 1.5,
        pin: true,
        //anticipatePin: 1,
        snap: {
          snapTo: "labels",
          duration: {min: 0.2, max: 1},
          delay: 0.2
        }
      })
    },[])

  
    useEffect(() => {
      tl1.from('.edition-start-animation-text', {duration:10, opacity:0, filter:"blur(30px)"})
      .addLabel("part-1")
      .from('.edition-start-slow-animation-1 div', {duration:10, opacity:0, transform:"blur(30px)", x:-1000, stagger:5})
      .addLabel('part-2')
      .from('.edition-start-slow-animation-2 div', {duration:10, opacity:0, transform:"blur(30px)", x:1000, stagger:5})
      .addLabel('part-3')
      .fromTo('.edition-start-animation-text, .edition-start-slow-animation-1 div, .edition-start-slow-animation-2 div',{filter:"blur(0px)"}, {duration:10, filter:"blur(70px)",opacity:0, stagger:3})
      //2005
      .from('.edition-enter-animation-container-2005', {display:"none"})
      .from('.e-anim-1-2005', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2005', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2005', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2005', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2005')
      .from('.edition-infos-container-2005', {duration:10, xPercent:100})
      .addLabel('infos-2005')
      .from('.editions-year-text-2005', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2005')
      .from('.editions-theme-text-2005', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2005, .hr-bottom-2005', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2005')
      .from('.editions-date-text-2005', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2005')
      .from('.editions-visitors-text-2005', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2005')
      .from('.timeline-container-2005', {duration:10, y:300}) //DEBUT
      .from('.timeline-2005 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2005') //FIN
      .from('.img-2-2005', {duration:10, opacity:0})
      .addLabel("img-2-2005")
      .from('.img-3-2005', {duration:10, opacity:0})
      .addLabel("img-3-2005")
      .from('.img-4-2005', {duration:10, opacity:0})
      .addLabel("img-4-2005")
      .from('.img-5-2005', {duration:10, opacity:0})
      .addLabel("img-5-2005")
      .from('.img-6-2005', {duration:10, opacity:0})
      .addLabel("img-6-2005")
      .from('.edition-aftermovie-container-2005', {duration:10, xPercent:-100}) 
      .from('.aftermovie-text-2005', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2005')
      .from('.aftermovie-container-2005', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-1")
      //2006
      .from('.edition-enter-animation-container-2006', {display:"none"})
      .from('.e-anim-1-2006', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2006', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2006', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2006', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2006')
      .from('.edition-infos-container-2006', {duration:10, xPercent:100})
      .addLabel('infos-2006')
      .from('.editions-year-text-2006', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2006')
      .from('.editions-theme-text-2006', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2006, .hr-bottom-2006', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2006')
      .from('.editions-date-text-2006', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2006')
      .from('.editions-visitors-text-2006', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2006')
      .from('.timeline-container-2006', {duration:10, y:300}) //DEBUT
      .from('.timeline-2006 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2006') //FIN
      .from('.img-2-2006', {duration:10, opacity:0})
      .addLabel("img-2-2006")
      .from('.img-3-2006', {duration:10, opacity:0})
      .addLabel("img-3-2006")
      .from('.img-4-2006', {duration:10, opacity:0})
      .addLabel("img-4-2006")
      .from('.img-5-2006', {duration:10, opacity:0})
      .addLabel("img-5-2006")
      .from('.img-6-2006', {duration:10, opacity:0})
      .addLabel("img-6-2006")
      .from('.edition-aftermovie-container-2006', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2006', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2006')
      .from('.aftermovie-container-2006', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-2")
      //2007
      .from('.edition-enter-animation-container-2007', {display:"none"})
      .from('.e-anim-1-2007', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2007', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2007', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2007', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2007')
      .from('.edition-infos-container-2007', {duration:10, xPercent:100})
      .addLabel('infos-2007')
      .from('.editions-year-text-2007', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2007')
      .from('.editions-theme-text-2007', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2007, .hr-bottom-2007', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2007')
      .from('.editions-date-text-2007', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2007')
      .from('.editions-visitors-text-2007', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2007')
      .from('.timeline-container-2007', {duration:10, y:300}) //DEBUT
      .from('.timeline-2007 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2007') //FIN
      .from('.img-2-2007', {duration:10, opacity:0})
      .addLabel("img-2-2007")
      .from('.img-3-2007', {duration:10, opacity:0})
      .addLabel("img-3-2007")
      .from('.img-4-2007', {duration:10, opacity:0})
      .addLabel("img-4-2007")
      .from('.img-5-2007', {duration:10, opacity:0})
      .addLabel("img-5-2007")
      .from('.img-6-2007', {duration:10, opacity:0})
      .addLabel("img-6-2007")
      .from('.edition-aftermovie-container-2007', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2007', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2007')
      .from('.aftermovie-container-2007', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-3")
      //2008
      .from('.edition-enter-animation-container-2008', {display:"none"})
      .from('.e-anim-1-2008', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2008', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2008', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2008', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2008')
      .from('.edition-infos-container-2008', {duration:10, xPercent:100})
      .addLabel('infos-2008')
      .from('.editions-year-text-2008', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2008')
      .from('.editions-theme-text-2008', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2008, .hr-bottom-2008', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2008')
      .from('.editions-date-text-2008', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2008')
      .from('.editions-visitors-text-2008', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2008')
      .from('.timeline-container-2008', {duration:10, y:300}) //DEBUT
      .from('.timeline-2008 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2008') //FIN
      .from('.img-2-2008', {duration:10, opacity:0})
      .addLabel("img-2-2008")
      .from('.img-3-2008', {duration:10, opacity:0})
      .addLabel("img-3-2008")
      .from('.img-4-2008', {duration:10, opacity:0})
      .addLabel("img-4-2008")
      .from('.img-5-2008', {duration:10, opacity:0})
      .addLabel("img-5-2008")
      .from('.img-6-2008', {duration:10, opacity:0})
      .addLabel("img-6-2008")
      .from('.edition-aftermovie-container-2008', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2008', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2008')
      .from('.aftermovie-container-2008', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-4")
      //2009
      .from('.edition-enter-animation-container-2009', {display:"none"})
      .from('.e-anim-1-2009', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2009', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2009', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2009', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2009')
      .from('.edition-infos-container-2009', {duration:10, xPercent:100})
      .addLabel('infos-2009')
      .from('.editions-year-text-2009', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2009')
      .from('.editions-theme-text-2009', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2009, .hr-bottom-2009', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2009')
      .from('.editions-date-text-2009', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2009')
      .from('.editions-visitors-text-2009', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2009')
      .from('.timeline-container-2009', {duration:10, y:300}) //DEBUT
      .from('.timeline-2009 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2009') //FIN
      .from('.img-2-2009', {duration:10, opacity:0})
      .addLabel("img-2-2009")
      .from('.img-3-2009', {duration:10, opacity:0})
      .addLabel("img-3-2009")
      .from('.img-4-2009', {duration:10, opacity:0})
      .addLabel("img-4-2009")
      .from('.img-5-2009', {duration:10, opacity:0})
      .addLabel("img-5-2009")
      .from('.img-6-2009', {duration:10, opacity:0})
      .addLabel("img-6-2009")
      .from('.edition-aftermovie-container-2009', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2009', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2009')
      .from('.aftermovie-container-2009', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-5")
      //2010
      .from('.edition-enter-animation-container-2010', {display:"none"})
      .from('.e-anim-1-2010', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2010', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2010', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2010', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2010')
      .from('.edition-infos-container-2010', {duration:10, xPercent:100})
      .addLabel('infos-2010')
      .from('.editions-year-text-2010', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2010')
      .from('.editions-theme-text-2010', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2010, .hr-bottom-2010', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2010')
      .from('.editions-date-text-2010', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2010')
      .from('.editions-visitors-text-2010', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2010')
      .from('.timeline-container-2010', {duration:10, y:300}) //DEBUT
      .from('.timeline-2010 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2010') //FIN
      .from('.img-2-2010', {duration:10, opacity:0})
      .addLabel("img-2-2010")
      .from('.img-3-2010', {duration:10, opacity:0})
      .addLabel("img-3-2010")
      .from('.img-4-2010', {duration:10, opacity:0})
      .addLabel("img-4-2010")
      .from('.img-5-2010', {duration:10, opacity:0})
      .addLabel("img-5-2010")
      .from('.img-6-2010', {duration:10, opacity:0})
      .addLabel("img-6-2010")
      .from('.edition-aftermovie-container-2010', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2010', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2010')
      .from('.aftermovie-container-2010', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-6")
      //2011
      .from('.edition-enter-animation-container-2011', {display:"none"})
      .from('.e-anim-1-2011', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2011', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2011', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2011', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2011')
      .from('.edition-infos-container-2011', {duration:10, xPercent:100})
      .addLabel('infos-2011')
      .from('.editions-year-text-2011', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2011')
      .from('.editions-theme-text-2011', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2011, .hr-bottom-2011', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2011')
      .from('.editions-date-text-2011', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2011')
      .from('.editions-visitors-text-2011', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2011')
      .from('.timeline-container-2011', {duration:10, y:300}) //DEBUT
      .from('.timeline-2011 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2011') //FIN
      .from('.img-2-2011', {duration:10, opacity:0})
      .addLabel("img-2-2011")
      .from('.img-3-2011', {duration:10, opacity:0})
      .addLabel("img-3-2011")
      .from('.img-4-2011', {duration:10, opacity:0})
      .addLabel("img-4-2011")
      .from('.img-5-2011', {duration:10, opacity:0})
      .addLabel("img-5-2011")
      .from('.img-6-2011', {duration:10, opacity:0})
      .addLabel("img-6-2011")
      .from('.edition-aftermovie-container-2011', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2011', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2011')
      .from('.aftermovie-container-2011', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-7")
      //2012
      .from('.edition-enter-animation-container-2012', {display:"none"})
      .from('.e-anim-1-2012', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2012', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2012', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2012', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2012')
      .from('.edition-infos-container-2012', {duration:10, xPercent:100})
      .addLabel('infos-2012')
      .from('.editions-year-text-2012', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2012')
      .from('.editions-theme-text-2012', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2012, .hr-bottom-2012', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2012')
      .from('.editions-date-text-2012', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2012')
      .from('.editions-visitors-text-2012', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2012')
      .from('.timeline-container-2012', {duration:10, y:300}) //DEBUT
      .from('.timeline-2012 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2012') //FIN
      .from('.img-2-2012', {duration:10, opacity:0})
      .addLabel("img-2-2012")
      .from('.img-3-2012', {duration:10, opacity:0})
      .addLabel("img-3-2012")
      .from('.img-4-2012', {duration:10, opacity:0})
      .addLabel("img-4-2012")
      .from('.img-5-2012', {duration:10, opacity:0})
      .addLabel("img-5-2012")
      .from('.img-6-2012', {duration:10, opacity:0})
      .addLabel("img-6-2012")
      .from('.edition-aftermovie-container-2012', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2012', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2012')
      .from('.aftermovie-container-2012', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-8")
      //2013
      .from('.edition-enter-animation-container-2013', {display:"none"})
      .from('.e-anim-1-2013', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2013', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2013', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2013', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2013')
      .from('.edition-infos-container-2013', {duration:10, xPercent:100})
      .addLabel('infos-2013')
      .from('.editions-year-text-2013', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2013')
      .from('.editions-theme-text-2013', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2013, .hr-bottom-2013', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2013')
      .from('.editions-date-text-2013', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2013')
      .from('.editions-visitors-text-2013', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2013')
      .from('.timeline-container-2013', {duration:10, y:300}) //DEBUT
      .from('.timeline-2013 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2013') //FIN
      .from('.img-2-2013', {duration:10, opacity:0})
      .addLabel("img-2-2013")
      .from('.img-3-2013', {duration:10, opacity:0})
      .addLabel("img-3-2013")
      .from('.img-4-2013', {duration:10, opacity:0})
      .addLabel("img-4-2013")
      .from('.img-5-2013', {duration:10, opacity:0})
      .addLabel("img-5-2013")
      .from('.img-6-2013', {duration:10, opacity:0})
      .addLabel("img-6-2013")
      .from('.edition-aftermovie-container-2013', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2013', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2013')
      .from('.aftermovie-container-2013', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-9")
      //2014
      .from('.edition-enter-animation-container-2014', {display:"none"})
      .from('.e-anim-1-2014', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2014', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2014', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2014', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2014')
      .from('.edition-infos-container-2014', {duration:10, xPercent:100})
      .addLabel('infos-2014')
      .from('.editions-year-text-2014', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2014')
      .from('.editions-theme-text-2014', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2014, .hr-bottom-2014', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2014')
      .from('.editions-date-text-2014', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2014')
      .from('.editions-visitors-text-2014', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2014')
      .from('.timeline-container-2014', {duration:10, y:300}) //DEBUT
      .from('.timeline-2014 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2014') //FIN
      .from('.img-2-2014', {duration:10, opacity:0})
      .addLabel("img-2-2014")
      .from('.img-3-2014', {duration:10, opacity:0})
      .addLabel("img-3-2014")
      .from('.img-4-2014', {duration:10, opacity:0})
      .addLabel("img-4-2014")
      .from('.img-5-2014', {duration:10, opacity:0})
      .addLabel("img-5-2014")
      .from('.img-6-2014', {duration:10, opacity:0})
      .addLabel("img-6-2014")
      .from('.edition-aftermovie-container-2014', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2014', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2014')
      .from('.aftermovie-container-2014', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-10")
      //2015
      .from('.edition-enter-animation-container-2015', {display:"none"})
      .from('.e-anim-1-2015', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2015', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2015', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2015', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2015')
      .from('.edition-infos-container-2015', {duration:10, xPercent:100})
      .addLabel('infos-2015')
      .from('.editions-year-text-2015', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2015')
      .from('.editions-theme-text-2015', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2015, .hr-bottom-2015', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2015')
      .from('.editions-date-text-2015', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2015')
      .from('.editions-visitors-text-2015', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2015')
      .from('.timeline-container-2015', {duration:10, y:300}) //DEBUT
      .from('.timeline-2015 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2015') //FIN
      .from('.img-2-2015', {duration:10, opacity:0})
      .addLabel("img-2-2015")
      .from('.img-3-2015', {duration:10, opacity:0})
      .addLabel("img-3-2015")
      .from('.img-4-2015', {duration:10, opacity:0})
      .addLabel("img-4-2015")
      .from('.img-5-2015', {duration:10, opacity:0})
      .addLabel("img-5-2015")
      .from('.img-6-2015', {duration:10, opacity:0})
      .addLabel("img-6-2015")
      .from('.edition-aftermovie-container-2015', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2015', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2015')
      .from('.aftermovie-container-2015', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-11")
      //2016
      .from('.edition-enter-animation-container-2016', {display:"none"})
      .from('.e-anim-1-2016', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2016', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2016', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2016', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2016')
      .from('.edition-infos-container-2016', {duration:10, xPercent:100})
      .addLabel('infos-2016')
      .from('.editions-year-text-2016', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2016')
      .from('.editions-theme-text-2016', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2016, .hr-bottom-2016', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2016')
      .from('.editions-date-text-2016', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2016')
      .from('.editions-visitors-text-2016', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2016')
      .from('.timeline-container-2016', {duration:10, y:300}) //DEBUT
      .from('.timeline-2016 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2016') //FIN
      .from('.img-2-2016', {duration:10, opacity:0})
      .addLabel("img-2-2016")
      .from('.img-3-2016', {duration:10, opacity:0})
      .addLabel("img-3-2016")
      .from('.img-4-2016', {duration:10, opacity:0})
      .addLabel("img-4-2016")
      .from('.img-5-2016', {duration:10, opacity:0})
      .addLabel("img-5-2016")
      .from('.img-6-2016', {duration:10, opacity:0})
      .addLabel("img-6-2016")
      .from('.edition-aftermovie-container-2016', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2016', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2016')
      .from('.aftermovie-container-2016', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-12")
      //2017
      .from('.edition-enter-animation-container-2017', {display:"none"})
      .from('.e-anim-1-2017', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2017', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2017', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2017', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2017')
      .from('.edition-infos-container-2017', {duration:10, xPercent:100})
      .addLabel('infos-2017')
      .from('.editions-year-text-2017', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2017')
      .from('.editions-theme-text-2017', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2017, .hr-bottom-2017', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2017')
      .from('.editions-date-text-2017', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2017')
      .from('.editions-visitors-text-2017', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2017')
      .from('.timeline-container-2017', {duration:10, y:300}) //DEBUT
      .from('.timeline-2017 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2017') //FIN
      .from('.img-2-2017', {duration:10, opacity:0})
      .addLabel("img-2-2017")
      .from('.img-3-2017', {duration:10, opacity:0})
      .addLabel("img-3-2017")
      .from('.img-4-2017', {duration:10, opacity:0})
      .addLabel("img-4-2017")
      .from('.img-5-2017', {duration:10, opacity:0})
      .addLabel("img-5-2017")
      .from('.img-6-2017', {duration:10, opacity:0})
      .addLabel("img-6-2017")
      .from('.edition-aftermovie-container-2017', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2017', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2017')
      .from('.aftermovie-container-2017', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-13")
      //2018
      .from('.edition-enter-animation-container-2018', {display:"none"})
      .from('.e-anim-1-2018', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2018', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2018', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2018', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2018')
      .from('.edition-infos-container-2018', {duration:10, xPercent:100})
      .addLabel('infos-2018')
      .from('.editions-year-text-2018', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2018')
      .from('.editions-theme-text-2018', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2018, .hr-bottom-2018', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2018')
      .from('.editions-date-text-2018', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2018')
      .from('.editions-visitors-text-2018', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2018')
      .from('.timeline-container-2018', {duration:10, y:300}) //DEBUT
      .from('.timeline-2018 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2018') //FIN
      .from('.img-2-2018', {duration:10, opacity:0})
      .addLabel("img-2-2018")
      .from('.img-3-2018', {duration:10, opacity:0})
      .addLabel("img-3-2018")
      .from('.img-4-2018', {duration:10, opacity:0})
      .addLabel("img-4-2018")
      .from('.img-5-2018', {duration:10, opacity:0})
      .addLabel("img-5-2018")
      .from('.img-6-2018', {duration:10, opacity:0})
      .addLabel("img-6-2018")
      .from('.edition-aftermovie-container-2018', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2018', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2018')
      .from('.aftermovie-container-2018', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-14")
      //2019
      .from('.edition-enter-animation-container-2019', {display:"none"})
      .from('.e-anim-1-2019', {duration:10, yPercent:100, opacity:0})
      .from('.e-anim-1-text-2019', {duration:10, filter:"blur(100px)", y:-200})
      .from('.e-anim-2-2019', {duration:10, yPercent:-100, opacity:0})
      .from('.e-anim-2-text-2019', {duration:10, filter:"blur(100px)", y:200})
      .addLabel('year-2019')
      .from('.edition-infos-container-2019', {duration:10, xPercent:100})
      .addLabel('infos-2019')
      .from('.editions-year-text-2019', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .addLabel('year-text-2019')
      .from('.editions-theme-text-2019', {duration:10, opacity:0, transform:"scale(4)", y:400, color:"yellow"})
      .from('.hr-top-2019, .hr-bottom-2019', {duration:10, transform:"scaleX(0)", color:"yellow", stagger:5})
      .addLabel('theme-text-2019')
      .from('.editions-date-text-2019', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('date-text-2019')
      .from('.editions-visitors-text-2019', {duration:10, transform:"scale(4)", color:"yellow", opacity:0, y:400})
      .addLabel('visitors-text-2019')
      .from('.timeline-container-2019', {duration:10, y:300}) //DEBUT
      .from('.timeline-2019 div', {duration:10, y:300, stagger:1.5})
      .addLabel('timeline-2019') //FIN
      .from('.img-2-2019', {duration:10, opacity:0})
      .addLabel("img-2-2019")
      .from('.img-3-2019', {duration:10, opacity:0})
      .addLabel("img-3-2019")
      .from('.img-4-2019', {duration:10, opacity:0})
      .addLabel("img-4-2019")
      .from('.img-5-2019', {duration:10, opacity:0})
      .addLabel("img-5-2019")
      .from('.img-6-2019', {duration:10, opacity:0})
      .addLabel("img-6-2019")
      .from('.edition-aftermovie-container-2019', {duration:10, xPercent:-100})
      .from('.aftermovie-text-2019', {duration:10, transform:"scale(6)", filter:"blur(50px)", opacity:0}) 
      .addLabel('aftermovie-text-2019')
      .from('.aftermovie-container-2019', {duration:10, opacity:0, transform:'scale(0)', filter:"blur(50px)"})
      .addLabel("aftermovie-15")
  
          
      sc1 = ScrollTrigger.create({
        animation: tl1,
        trigger: ".editions-main-container",
        start: "top top",
        end: "+=250000",
        scrub: 1,
        pin: true,
        //pinReparent: true
        //anticipatePin: 1,
        snap: {
          snapTo: "labels",
          duration: {min: 0.2, max: 1},
          delay: 0.2
        }
      })
    },[])
  
    return (
      <div className="main-app-container">
        <div className="header-cover">
          <div className="header-shader">
            <div className="header-logo-container">
              <img src="/assets/tml-logo-pink-2.png" className="header-logo" alt="tml-logo" />
            </div>
            <div className="howto-container">
              <h1>Relieve the amazing story of the greatest festival on earth only by scrolling down</h1>
            </div>
          </div>
        </div>
        <div className="transition-1-container">
          <div className="transition-1-item-1">
            <p className="transition-1-text-1 tr-item-1">Yesterday is History,</p>
          </div>
  
          <div className="transition-1-item-2">
            <p className="transition-1-text-2 tr-item-1">Today is a Gift,</p>
          </div>
  
          <div className="transition-1-item-3">
            <p className="transition-1-text-3 tr-item-1">Tomorrow is Mystery...</p>
          </div>
        </div>
        <div className="announcement-container">
          <div className="announcement-bg-container">
            <div className="announcement-shader">
              <div className="announcement-text-container">
                <p className="announcement-text a-anim-1">It all started in 2005</p>
                <p className="announcement-text a-anim-2">Every year since,</p>
                <p className="announcement-text a-anim-3">Belgium hosted the most legendary festival on earth</p>
                <p className="announcement-text a-anim-4">15 editions</p>
                <p className="announcement-text a-anim-5">More than 2.500.000 visitors</p>
                <p className="announcement-text a-anim-6">Always recieving the finest dj's in the world...</p>
                <p className="announcement-text a-anim-7">Prepare yourself to take a journey trough all the editions</p>
                <p className="announcement-text a-anim-8">that make so many people dreaming</p>
                <p className="announcement-text a-anim-9">And don't forget...</p>
                <p className="announcement-text a-anim-10">Make every seconds of your life</p>
                <p className="announcement-text a-anim-11">Legendary</p>
              </div>
            </div>
            <div className="editions-start-anim-container">
                <div className="a-anim-12">
                    <div className="a-anim-12-shader"></div>
                </div>
                <div className="a-anim-13">
                    <div className="a-anim-13-shader"></div>
                </div>
            </div>
            <div className="a-anim-14">
              <img src="/assets/tml-logo-pink-2.png" alt="tml-logo" />
            </div>
          </div>
        </div>
        <div className="editions-main-container">
            <div className="edition-start-slow-animation-2">
                <div className="slow-anim slow-anim-1"></div>
                <div className="slow-anim slow-anim-2"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
            </div>
            <h2 className="edition-start-animation-text">Don't scroll too fast</h2>
            <div className="edition-start-slow-animation-1">
                <div className="slow-anim slow-anim-1"></div>
                <div className="slow-anim slow-anim-2"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
                <div className="slow-anim slow-anim-3"></div>
            </div>
          {editions.map((edition) => (
            <Editions data={edition.data} timeline={tl1} scroll={sc1} key={edition.data.year} />
          ))}
        </div>
      </div>
  
    ); 
}

export default Home;