import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
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