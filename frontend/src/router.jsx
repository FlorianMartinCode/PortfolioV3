import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Footer from './components/footer/footer'
import Home from './pages/home/home'

import './main.css'

function OutletFooter() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
};

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OutletFooter />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Router