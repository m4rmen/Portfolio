'use client'
import React from "react";
import { useState } from "react";

import Web from "../components/web-specialty";
import Embedded from "../components/embedded-specialty";
import Cyber from "../components/cyber-specialty";
import Personal from "@/components/personal";

export default function Home() {

  const [specialty, setSpecialty] = useState("");

  const [interestsList, setInterestsList] = useState([]); // Local interestsList

  // Function to toggle an interest
  const toggleInterest = (interest) => {
    setInterestsList((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest) // Remove if it exists
        : [...prev, interest] // Add if it doesn't exist
    );
  };

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="top-bar">
        <span> Links: </span>
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
        <button className={`specialty border-2 rounded-lg px-4 py-2 transition-all ${
            specialty === "web" ? "border-gray-400" : "border-transparent hover:border-gray-200"
          }`}
          onClick={() => setSpecialty("web")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
        </button>
        
        <button 
        className={`specialty border-2 rounded-lg px-4 py-2 transition-all ${
          specialty === "embedded" ? "border-gray-400" : "border-transparent hover:border-gray-200"
        }`}
        onClick={() => setSpecialty("embedded")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z"/></svg>
        </button>
        
        <button 
        className={`specialty border-2 rounded-lg px-4 py-2 transition-all ${
          specialty === "cyber" ? "border-gray-400" : "border-transparent hover:border-gray-200"
        }`}
        onClick={() => setSpecialty("cyber")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="m368-336 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
        </button>
      </div>

      <div className="projects-container">
      {specialty === "web" && (
          <Web
            interestsList={interestsList}
            toggleInterest={toggleInterest}
          />
        )}
        {specialty === "embedded" && (
          <Embedded
            interestsList={interestsList}
            toggleInterest={toggleInterest}
          />
        )}
        {specialty === "cyber" && (
          <Cyber
            interestsList={interestsList}
            toggleInterest={toggleInterest}
          />
        )}
      </div>

      <Personal />


    </div>
  );
}
