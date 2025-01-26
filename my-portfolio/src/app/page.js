import React from "react";

export default function Home() {




  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="top-bar">
        <a
          href="https://www.linkedin.com/in/alexandre-marmen-a932311a2/"
          target="_blank"
          >
          <i className="fa fa-linkedin-square" style={{fontSize: "36px"}}></i>
        </a>
        <a
          href="https://github.com/m4rmen"
          target="_blank"
        >
          <i className="fa fa-github-square"   style={{fontSize: "36px"}}></i>
        </a>
      </div>

      <div className="intro-container">
        <img src="/images/profile-pic.jpg" className="profile-pic" ></img>
        <div>
          <h1 className="name">Hi, I'm Alexandre,</h1>
          <p>a Computer Engineer, graduated in May 2025.</p>
          <p>This is my portfolio, where you'll get to know more about what i can do.</p>
        </div>
      </div>

      <div className="specialty-container">
      
      
      </div>



    </div>
  );
}
