import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Navbar from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'

import './main.css'

function HeaderFooter() {
  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  )
};

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderFooter />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Router