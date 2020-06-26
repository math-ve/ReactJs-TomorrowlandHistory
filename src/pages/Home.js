import React, { useEffect, useState } from 'react';
import {gsap, ScrollTrigger } from "gsap/all";
import Editions from '../comps/Editions';
import LoadingHome from '../comps/LoadingHome';
import TransitionUi from '../comps/TransitionUl';
import PhoneButtons from '../comps/PhoneButtons';

gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {

    const {editions} = props;
    const [tl] = useState(gsap.timeline({paused:true}));
    const [tlTr] = useState(gsap.timeline({paused:true}));

    const logKey = (e) => {
      const current = tl.currentLabel();
      if(e.code === "KeyN")
      {
        tl.tweenTo(tl.nextLabel());  
      }
      else if(e.code === "KeyP" && current !== "start")
        tl.tweenTo( tl.previousLabel() );        
    }

    const handleClick = (yearTo) => {
      gsap.to('.ul-transition li', {duration:.5, transform:"scaleY(1)", stagger:.1, onComplete: () => {
        tl.seek(`timeline-${yearTo}`);
        gsap.to('.ul-transition li', {duration:.5, transform:"scaleY(0)", stagger:.1,})
      }})
    }
    
    useEffect(() => {
      document.addEventListener('keypress', logKey);
    },[])

    useEffect(() => {
      window.onresize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);  
      }
    })
  
    //HEADER TEXT ANIMATION
    useEffect(() => {
      gsap.from(".howto-container h1", {
        duration: 2,
        filter: "blur(20px)"
      })
    },[])
  
    //LIVE TODAY ANIMATIONS
    useEffect(() => {
      tl.addLabel('start')
        //PART22222222222
        .from('.announcement-container', {duration:.5, yPercent:100})
        .from(".announcement-bg-container", {duration: 1, opacity: 0}, "-=.3")
        .from(".a-anim-1", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-1")
        .fromTo(".a-anim-1", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-1", {display:"none"})
        .from(".a-anim-2", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-2")
        .fromTo(".a-anim-2", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-2", {display:"none"})
        .from(".a-anim-3", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-3")
        .fromTo(".a-anim-3", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-3", {display:"none"})
        .from(".a-anim-4", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-4")
        .fromTo(".a-anim-4", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-4", {display:"none"})
        .from(".a-anim-5", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-5")
        .fromTo(".a-anim-5", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-5", {display:"none"})
        .from(".a-anim-6", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-6")
        .fromTo(".a-anim-6", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-6", {display:"none"})
        .from(".a-anim-7", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-7")
        .fromTo(".a-anim-7", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-7", {display:"none"})
        .from(".a-anim-8", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-8")
        .fromTo(".a-anim-8", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-8", {display:"none"})
        .from(".a-anim-9", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-9")
        .fromTo(".a-anim-9", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-9", {display:"none"})
        .from(".a-anim-10", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-10")
        .fromTo(".a-anim-10", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-10", {display:"none"})
        .from(".a-anim-11", {display:"none", yPercent:100, opacity:0, filter:"blur(30px)", duration:.3})
        .addLabel("part-11")
        .fromTo(".a-anim-11", {yPercent:0, opacity:1, filter:"blur(0px)"}, {yPercent:-100, opacity:0, filter:"blur(30px", duration:.3})
        .to(".a-anim-11", {display:"none"})
        .from(".a-anim-12", {duration:.5, xPercent:100, opacity:0})
        .from(".a-anim-13", {duration:.5, xPercent:-100, opacity:0})
        .addLabel('a-nim-13.5')
        //.from(".a-anim-14", {duration:.5, yPercent:-100})
        //PART 333333333
        .from('.editions-main-container', {duration:.5, yPercent:100})
        //2005
        .from('.edition-enter-animation-container-2005', {display:"none"})
        .from('.e-anim-1-2005, .e-anim-2-2005', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2005, .e-anim-2-text-2005', {duration:.5, opacity:0, display:"none"})
        .from('.edition-infos-container-2005', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2005', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2005', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2005, .hr-bottom-2005', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2005', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2005', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2005, .i-anim-bottom-2005', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2005, .i-anim-left-2005', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2005', {duration:.3, y:300, display:"none"})
        .from('.timeline-2005 div', {duration:.3, y:300, stagger:.03})
        .addLabel('timeline-2005')
        .from('.img-3-container-2005', {duration:.5, opacity:0})
        .from('.img-6-container-2005', {duration:.5, opacity:0})
        .from('.img-4-container-2005', {duration:.5, opacity:0})
        .from('.img-2-container-2005', {duration:.5, opacity:0})
        .from('.img-5-container-2005', {duration:.5, opacity:0})
        .addLabel("img-5-2005")
        .from('.edition-aftermovie-container-2005', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2005', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2005', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2005', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-1")
        //2006
        .from('.edition-enter-animation-container-2006', {display:"none"})
        .from('.e-anim-1-2006, .e-anim-2-2006', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2006, .e-anim-2-text-2006', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2005', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2006', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2006', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2006', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2006, .hr-bottom-2006', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2006', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2006', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2006, .i-anim-bottom-2006', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2006, .i-anim-left-2006', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2006', {duration:.3, y:300, display:"none"})
        .from('.timeline-2006 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2006')
        .from('.img-3-container-2006', {duration:.5, opacity:0})
        .from('.img-6-container-2006', {duration:.5, opacity:0})
        .from('.img-4-container-2006', {duration:.5, opacity:0})
        .from('.img-2-container-2006', {duration:.5, opacity:0})
        .from('.img-5-container-2006', {duration:.5, opacity:0})
        .addLabel("img-5-2006")
        .from('.edition-aftermovie-container-2006', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2006', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2006', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2006', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-2")
        //2007
        .from('.edition-enter-animation-container-2007', {display:"none"})
        .from('.e-anim-1-2007, .e-anim-2-2007', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2007, .e-anim-2-text-2007', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2006', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2007', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2007', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2007', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2007, .hr-bottom-2007', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2007', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2007', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2007, .i-anim-bottom-2007', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2007, .i-anim-left-2007', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2007', {duration:.3, y:300, display:"none"})
        .from('.timeline-2007 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2007')
        .from('.img-3-container-2007', {duration:.5, opacity:0})
        .from('.img-6-container-2007', {duration:.5, opacity:0})
        .from('.img-4-container-2007', {duration:.5, opacity:0})
        .from('.img-2-container-2007', {duration:.5, opacity:0})
        .from('.img-5-container-2007', {duration:.5, opacity:0})
        .addLabel("img-5-2007")
        .from('.edition-aftermovie-container-2007', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2007', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2007', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2007', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-3")
        //2008
        .from('.edition-enter-animation-container-2008', {display:"none"})
        .from('.e-anim-1-2008, .e-anim-2-2008', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2008, .e-anim-2-text-2008', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2007', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2008', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2008', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2008', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2008, .hr-bottom-2008', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2008', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2008', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2008, .i-anim-bottom-2008', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2008, .i-anim-left-2008', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2008', {duration:.3, y:300, display:"none"})
        .from('.timeline-2008 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2008')
        .from('.img-3-container-2008', {duration:.5, opacity:0})
        .from('.img-6-container-2008', {duration:.5, opacity:0})
        .from('.img-4-container-2008', {duration:.5, opacity:0})
        .from('.img-2-container-2008', {duration:.5, opacity:0})
        .from('.img-5-container-2008', {duration:.5, opacity:0})
        .addLabel("img-5-2008")
        .from('.edition-aftermovie-container-2008', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2008', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2008', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2008', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-4")
        //2009
        .from('.edition-enter-animation-container-2009', {display:"none"})
        .from('.e-anim-1-2009, .e-anim-2-2009', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2009, .e-anim-2-text-2009', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2008', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2009', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2009', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2009', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2009, .hr-bottom-2009', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2009', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2009', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2009, .i-anim-bottom-2009', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2009, .i-anim-left-2009', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2009', {duration:.3, y:300, display:"none"})
        .from('.timeline-2009 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2009')
        .from('.img-3-container-2009', {duration:.5, opacity:0})
        .from('.img-6-container-2009', {duration:.5, opacity:0})
        .from('.img-4-container-2009', {duration:.5, opacity:0})
        .from('.img-2-container-2009', {duration:.5, opacity:0})
        .from('.img-5-container-2009', {duration:.5, opacity:0})
        .addLabel("img-5-2009")
        .from('.edition-aftermovie-container-2009', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2009', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2009', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2009', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-5")
        //2010
        .from('.edition-enter-animation-container-2010', {display:"none", display:"none"})
        .from('.e-anim-1-2010, .e-anim-2-2010', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2010, .e-anim-2-text-2010', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2009', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2010', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2010', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2010', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2010, .hr-bottom-2010', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2010', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2010', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2010, .i-anim-bottom-2010', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2010, .i-anim-left-2010', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2010', {duration:.3, y:300, display:"none"})
        .from('.timeline-2010 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2010')
        .from('.img-3-container-2010', {duration:.5, opacity:0})
        .from('.img-6-container-2010', {duration:.5, opacity:0})
        .from('.img-4-container-2010', {duration:.5, opacity:0})
        .from('.img-2-container-2010', {duration:.5, opacity:0})
        .from('.img-5-container-2010', {duration:.5, opacity:0})
        .addLabel("img-5-2010")
        .from('.edition-aftermovie-container-2010', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2010', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2010', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2010', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-6")
        //2011
        .from('.edition-enter-animation-container-2011', {display:"none"})
        .from('.e-anim-1-2011, .e-anim-2-2011', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2011, .e-anim-2-text-2011', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2010', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2011', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2011', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2011', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2011, .hr-bottom-2011', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2011', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2011', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2011, .i-anim-bottom-2011', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2011, .i-anim-left-2011', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2011', {duration:.3, y:300, display:"none"})
        .from('.timeline-2011 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2011')
        .from('.img-3-container-2011', {duration:.5, opacity:0})
        .from('.img-6-container-2011', {duration:.5, opacity:0})
        .from('.img-4-container-2011', {duration:.5, opacity:0})
        .from('.img-2-container-2011', {duration:.5, opacity:0})
        .from('.img-5-container-2011', {duration:.5, opacity:0})
        .addLabel("img-5-2011")
        .from('.edition-aftermovie-container-2011', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2011', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2011', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2011', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-7")
        //2012
        .from('.edition-enter-animation-container-2012', {display:"none"})
        .from('.e-anim-1-2012, .e-anim-2-2012', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2012, .e-anim-2-text-2012', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2011', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2012', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2012', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2012', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2012, .hr-bottom-2012', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2012', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2012', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2012, .i-anim-bottom-2012', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2012, .i-anim-left-2012', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2012', {duration:.3, y:300, display:"none"})
        .from('.timeline-2012 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2012')
        .from('.img-3-container-2012', {duration:.5, opacity:0})
        .from('.img-6-container-2012', {duration:.5, opacity:0})
        .from('.img-4-container-2012', {duration:.5, opacity:0})
        .from('.img-2-container-2012', {duration:.5, opacity:0})
        .from('.img-5-container-2012', {duration:.5, opacity:0})
        .addLabel("img-5-2012")
        .from('.edition-aftermovie-container-2012', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2012', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2012', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2012', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-8")
        //2013
        .from('.edition-enter-animation-container-2013', {display:"none"})
        .from('.e-anim-1-2013, .e-anim-2-2013', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2013, .e-anim-2-text-2013', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2012', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2013', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2013', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2013', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2013, .hr-bottom-2013', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2013', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2013', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2013, .i-anim-bottom-2013', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2013, .i-anim-left-2013', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2013', {duration:.3, y:300, display:"none"})
        .from('.timeline-2013 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2013')
        .from('.img-3-container-2013', {duration:.5, opacity:0})
        .from('.img-6-container-2013', {duration:.5, opacity:0})
        .from('.img-4-container-2013', {duration:.5, opacity:0})
        .from('.img-2-container-2013', {duration:.5, opacity:0})
        .from('.img-5-container-2013', {duration:.5, opacity:0})
        .addLabel("img-5-2013")
        .from('.edition-aftermovie-container-2013', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2013', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2013', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2013', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-9")
        //2014
        .from('.edition-enter-animation-container-2014', {display:"none"})
        .from('.e-anim-1-2014, .e-anim-2-2014', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2014, .e-anim-2-text-2014', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2013', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2014', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2014', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2014', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2014, .hr-bottom-2014', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2014', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2014', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2014, .i-anim-bottom-2014', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2014, .i-anim-left-2014', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2014', {duration:.3, y:300, display:"none"})
        .from('.timeline-2014 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2014')
        .from('.img-3-container-2014', {duration:.5, opacity:0})
        .from('.img-6-container-2014', {duration:.5, opacity:0})
        .from('.img-4-container-2014', {duration:.5, opacity:0})
        .from('.img-2-container-2014', {duration:.5, opacity:0})
        .from('.img-5-container-2014', {duration:.5, opacity:0})
        .addLabel("img-5-2014")
        .from('.edition-aftermovie-container-2014', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2014', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2014', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2014', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-10")
        //2015
        .from('.edition-enter-animation-container-2015', {display:"none"})
        .from('.e-anim-1-2015, .e-anim-2-2015', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2015, .e-anim-2-text-2015', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2014', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2015', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2015', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2015', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2015, .hr-bottom-2015', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2015', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2015', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2015, .i-anim-bottom-2015', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2015, .i-anim-left-2015', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2015', {duration:.3, y:300, display:"none"})
        .from('.timeline-2015 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2015')
        .from('.img-3-container-2015', {duration:.5, opacity:0})
        .from('.img-6-container-2015', {duration:.5, opacity:0})
        .from('.img-4-container-2015', {duration:.5, opacity:0})
        .from('.img-2-container-2015', {duration:.5, opacity:0})
        .from('.img-5-container-2015', {duration:.5, opacity:0})
        .addLabel("img-5-2015")
        .from('.edition-aftermovie-container-2015', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2015', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2015', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2015', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-11")
        //2016
        .from('.edition-enter-animation-container-2016', {display:"none"})
        .from('.e-anim-1-2016, .e-anim-2-2016', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2016, .e-anim-2-text-2016', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2015', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2016', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2016', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2016', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2016, .hr-bottom-2016', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2016', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2016', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2016, .i-anim-bottom-2016', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2016, .i-anim-left-2016', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2016', {duration:.3, y:300, display:"none"})
        .from('.timeline-2016 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2016')
        .from('.img-3-container-2016', {duration:.5, opacity:0})
        .from('.img-6-container-2016', {duration:.5, opacity:0})
        .from('.img-4-container-2016', {duration:.5, opacity:0})
        .from('.img-2-container-2016', {duration:.5, opacity:0})
        .from('.img-5-container-2016', {duration:.5, opacity:0})
        .addLabel("img-5-2016")
        .from('.edition-aftermovie-container-2016', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2016', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2016', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2016', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-12")
        //2017
        .from('.edition-enter-animation-container-2017', {display:"none"})
        .from('.e-anim-1-2017, .e-anim-2-2017', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2017, .e-anim-2-text-2017', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2016', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2017', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2017', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2017', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2017, .hr-bottom-2017', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2017', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2017', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2017, .i-anim-bottom-2017', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2017, .i-anim-left-2017', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2017', {duration:.3, y:300, display:"none"})
        .from('.timeline-2017 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2017')
        .from('.img-3-container-2017', {duration:.5, opacity:0})
        .from('.img-6-container-2017', {duration:.5, opacity:0})
        .from('.img-4-container-2017', {duration:.5, opacity:0})
        .from('.img-2-container-2017', {duration:.5, opacity:0})
        .from('.img-5-container-2017', {duration:.5, opacity:0})
        .addLabel("img-5-2017")
        .from('.edition-aftermovie-container-2017', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2017', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2017', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2017', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-13")
        //2018
        .from('.edition-enter-animation-container-2018', {display:"none"})
        .from('.e-anim-1-2018, .e-anim-2-2018', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2018, .e-anim-2-text-2018', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2017', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2018', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2018', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2018', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2018, .hr-bottom-2018', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2018', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2018', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2018, .i-anim-bottom-2018', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2018, .i-anim-left-2018', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2018', {duration:.3, y:300, display:"none"})
        .from('.timeline-2018 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2018')
        .from('.img-3-container-2018', {duration:.5, opacity:0})
        .from('.img-6-container-2018', {duration:.5, opacity:0})
        .from('.img-4-container-2018', {duration:.5, opacity:0})
        .from('.img-2-container-2018', {duration:.5, opacity:0})
        .from('.img-5-container-2018', {duration:.5, opacity:0})
        .addLabel("img-5-2018")
        .from('.edition-aftermovie-container-2018', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2018', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2018', {display:"flex"}, {display:"none"}) 
        .from('.aftermovie-container-2018', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-14")
        //2019
        .from('.edition-enter-animation-container-2019', {display:"none"})
        .from('.e-anim-1-2019, .e-anim-2-2019', {duration:.4, transform:"scaleY(0)", opacity:0, display:"none"})
        .from('.e-anim-1-text-2019, .e-anim-2-text-2019', {duration:.5, opacity:0, display:"none"})
        .fromTo('.edition-aftermovie-container-2018', {display:"flex"}, {display:"none"})
        .from('.edition-infos-container-2019', {duration:.5, xPercent:100, display:"none"})
        .from('.editions-year-text-2019', {duration:.3, opacity:0, transform:"scale(4)", y:400})
        .from('.editions-theme-text-2019', {duration:.3, opacity:0, transform:"scale(4)", y:400}, "-=.15")
        .from('.hr-top-2019, .hr-bottom-2019', {duration:.2, transform:"scaleX(0)", stagger:.2}, "-=.15")
        .from('.editions-date-text-2019', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.25")
        .from('.editions-visitors-text-2019', {duration:.3, transform:"scale(4)", opacity:0, y:400}, "-=.15")
        .from('.i-anim-top-2019, .i-anim-bottom-2019', {duration:.3, transform:"scaleX(0)"})
        .from('.i-anim-right-2019, .i-anim-left-2019', {duration:.3, transform:"scaleY(0)"})
        .from('.timeline-container-2019', {duration:.3, y:300, display:"none"})
        .from('.timeline-2019 div', {duration:.3, y:300, stagger:0.03})
        .addLabel('timeline-2019')
        .from('.img-3-container-2019', {duration:.5, opacity:0})
        .from('.img-6-container-2019', {duration:.5, opacity:0})
        .from('.img-4-container-2019', {duration:.5, opacity:0})
        .from('.img-2-container-2019', {duration:.5, opacity:0})
        .from('.img-5-container-2019', {duration:.5, opacity:0})
        .addLabel("img-5-2019")
        .from('.edition-aftermovie-container-2019', {duration:.5, xPercent:-100, display:"none"})
        .from('.aftermovie-text-2019', {duration:.5, transform:"scale(6)", opacity:0, display:"none"})
        .fromTo('.edition-infos-container-2019', {display:"flex"}, {display:"none"})
        .from('.aftermovie-container-2019', {duration:.5, opacity:0, transform:'scale(0)', display:"none"})
        .addLabel("aftermovie-15")
        .from('.thanks-container', {duration:.5, display:"none", yPercent:100})
        .from('.thanks-text-container h1, .thanks-link-container p, .thanks-text-container h2', {duration:1, opacity:0, y:300, stagger:.2, ease:"power3"})
    },[])

    return (
      <div className="main-app-container">
        <LoadingHome />
        <PhoneButtons handleClick={logKey}/>
        <div className="header-cover">
          <div className="header-shader">
            <div className="header-logo-container">
              <img src="/assets/tml-logo-pink-2.png" className="header-logo" alt="tml-logo" />
            </div>
            <div className="howto-container">
              <h1 className="desktop-h1">Relieve the amazing story of the greatest festival on earth only by pressing a key</h1>
              <h1 className="mobile-h1">Relieve the amazing story of the greatest festival on earth only touching your phone</h1>
              <h2 className="desktop-h2">Press 'N' to go further and press 'P' to go back</h2>
              <h2 className="mobile-h2">Press on the right side of the screen to go further and on the left side to go back</h2>
            </div>
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
                <p className="announcement-text a-anim-8">that made so many people dreaming</p>
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
          </div>
        </div>
        <div className="editions-main-container">
          <div className="a-anim-14">
            <img src="/assets/tml-logo-pink-2.png" alt="tml-logo" />
          </div>
          {editions.map((edition) => (
            <Editions data={edition.data} key={edition.data.year} handleClick={handleClick}/>
          ))}
        </div>
        <TransitionUi />
        <div className="thanks-container">
            <div className="thanks-shader">
              <div className="thanks-text-container">
                <h1>Thanks for watching !</h1>
                <div className="thanks-link-container">
                  <p>All the pictures where found on <a href="https://365.tomorrowland.com/">https://365.tomorrowland.com/</a></p>
                  <p>Thank you for all those beautiful memories you provide to us !</p>                  
                </div>
                <h2>See you in 2021 !</h2>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Home;