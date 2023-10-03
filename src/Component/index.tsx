import React from 'react'
import Navbar from './Navbar'
import HeaderCpn from './Header'
import { Outlet } from 'react-router-dom'
import Body from './body'

export default function RenderComponent() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Navbar />
                <HeaderCpn />
            </div>
        </>
    )
}
