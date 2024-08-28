import React, { useEffect } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import { useDrawer } from '../shared/hooks/drawer'
import {
    Home,
    AssistidsPage
} from '../pages'

import { MenuSideBar } from '../shared/components'
import { menu } from '../shared/utils/menu'

export const PrivateRoutes: React.FC = () => {
    const { setDrawerOptions } = useDrawer()
    
    useEffect(() => {
        setDrawerOptions(menu)
    }, [setDrawerOptions])

    return (
        <MenuSideBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/assistids-page" element={<AssistidsPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </MenuSideBar>
    )
}