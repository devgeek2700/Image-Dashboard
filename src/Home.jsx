import React from 'react'
import Navbar from './components/Header/Navbar'
import Sidebar from './components/Header/Sidebar'
import Card from './components/Card/Card'
// import Createtemp from './components/Card/Createtemp'

import "./App.css"


function Home() {
    return (
        <div>
            <div class="dashboard-6oo">
                <p class="my-projects-si5">My Projects</p>
                <p class="my-projects-GkD">My Projects</p>

                {/* <!-- Card section --> */}
                <Card />

                {/* <!-- sidebar section --> */}
                <Sidebar />

                {/* <!-- Navbar section --> */}
                <Navbar />
            </div>
        </div>
    )
}

export default Home