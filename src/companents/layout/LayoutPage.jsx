import React from 'react'
import HeaderPage from '../header/HeaderPage'
import { Outlet } from 'react-router-dom'
import FooterPage from '../footer/FooterPage'

function LayoutPage() {
    return (
        <>
            <HeaderPage />
            <main>
                <Outlet />
            </main>
            <FooterPage />
        </>
    )
}

export default LayoutPage