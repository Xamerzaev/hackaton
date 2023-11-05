import React, { Fragment, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'

import Layout from "./components/Layout"
import Index from "./pages/Index"
import Events from "./pages/Events"
import Profile from "./pages/Profile"
import History from "./pages/History"

import "./css/style.css"




const App = () => {
  return (
      <Fragment>
          <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Index />} />
                <Route path="event" element={<Events />} />
                <Route path="profile" element={<Profile />} />
                <Route path="history" element={<History />} />
            </Route>        
          </Routes>
      </Fragment>
  );
}


export default App;