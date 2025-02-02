import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Resume from '../components/Resume'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <main className="content">
                    <Home />
                    <About />
                    <Resume />
                    <Project />
                    <Contact />
                </main>
            </div>
        </>
    )
}

export default MainLayout