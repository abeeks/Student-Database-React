import React from 'react';
import '/Users/student10/dev/front-end-projects/student-database/src/Home.css';
import image from '/Users/student10/dev/front-end-projects/student-database/src/component/images/homepage.png'

const Home = () => {
  return (
    <div>
      <div>
        <h2>Welcome to the Computer Sciences Department</h2>
        </div>
        <div>
        <img src={image}/>
        </div>
    </div>
  )
}

export default Home