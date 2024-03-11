import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from "../assets/swornim.jpg"
import img2 from "../assets/pritam.jpg"
import img3 from "../assets/pic3.png"

const Review = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lh:px-32 px-5 bg-backgroundColor'>
            <h1 className='fontp-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Reviews</h1>

            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
                <ReviewCard img={img1} title="Swornim Shrestha" />
                <ReviewCard img={img2} title="Pritam Shrestha" />
                <ReviewCard img={img3} title="Jessica" />
            </div>
        </div>
    )
}

export default Review