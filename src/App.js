import React, { useEffect, useLayoutEffect, useState } from 'react';

import {gsap, ScrollTrigger } from "gsap/all";
import { Switch, Route } from 'react-router-dom';
import api from './api/api';
import Editions from './comps/Editions'

import './css/App.css';
import Home from './pages/Home';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const [editions, setEditions] = useState([]);

  //API FETCH
  useEffect(() => {
    const fetchData = async () => {
        const result = await api.readAll();
        setEditions(result);
    }
    fetchData();
  },[]);

  if (editions.length === 15)
    return (
      <Home editions={editions} />
    )
  else
    return (
      <div>LOADIIIIIIIING</div>
    )
}

export default App;
