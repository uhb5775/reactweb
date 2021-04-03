import React from "react"
import Link from "next/link"
const Portfolio = () => {
    return (
        <div className="mx-auto text-center gradient-image pt-5">

            <h1 className="pt-5">Портфолио</h1>




            <main class="page-content">
                <div class="card" id="card1">
                    <div class="content">
                        <h2 class="title">Mountain View</h2>
                        <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button class="btn">View Trips</button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h2 class="title">To The Beach</h2>
                        <p class="copy">Plan your next beach trip with these fabulous destinations</p>
                        <button class="btn">View Trips</button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h2 class="title">Desert Destinations</h2>
                        <p class="copy">It's the desert you've always dreamed of</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>
                {/* <div class="card">
                    <div class="content">
                        <h2 class="title">Explore The Galaxy</h2>
                        <p class="copy">Seriously, straight up, just blast off into outer space today</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div> */}
            </main>

        </div>
    )
}
export default Portfolio