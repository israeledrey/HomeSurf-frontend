import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Main = () => {

  let navigate = useNavigate();

  return (
    <main>

    <div className='main-container1'>
      <div>
        <img src="https://www.shutterstock.com/shutterstock/photos/1202140402/display_1500/stock-photo-horizontal-view-of-cheerful-european-surfer-surfes-being-in-high-spirit-carries-board-likes-1202140402.jpg" />
        <h1>Our students</h1>
      </div>

      <div onClick={ () => navigate("/Courses") }>
        <img src="https://www.rapturecamps.com/wp-content/uploads/2024/02/Surf-Instructor-teaching-important-surf-techniques-at-the-beach.jpg" />
        <h1>Our courses</h1>
      </div>

      <div>
        <img src="https://www.surfstarmorocco.com/wp-content/uploads/2019/06/surf-team-surfstar-morocco-surfing-holidays-1-e1560082528801.jpg"/>
        <h1>Our comunity</h1>
      </div>
    </div>

    </main>
  )
}

export default Main