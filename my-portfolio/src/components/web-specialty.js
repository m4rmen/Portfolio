import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600, 
  };

export default function Web({ interestsList, toggleInterest }) {
    const isAdded = (interest) => interestsList.includes(interest);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <h1 className="speciality-title">Web Development Technical Skills</h1>
        <div className="skills-container">
            <div>
                <h2>Frontend</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>ReactJS</p>
                <p>Angular</p>
                </div>
            </div>
            <div>
                <h2>Backend</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>NestJS</p>
                <p>Python</p>
                <p>Flask</p>
                </div>
            </div>
            <div>
                <h2>Database</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                <p>SQL</p>
                <p>NoSQL</p>
                <p>MongoDB</p>
                <p>MSSQL</p>
                <p>PostgreSQL</p>
                </div>
            </div>
            <div>
                <h2>DevOps</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>AWS</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>GitLab</p>
                </div>
            </div>
        </div>
        <h1 className="speciality-title">Experience</h1>
        <div className="experience-container" id="web-experience">
            {/*ULTRAPARK*/}
            <div className="experience-item">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="static/images/ultrapark-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
                </div>

                <div className="experience-details">
                <h2 className="text-xl font-semibold text-white">
                    Centre of Science and Technology Ultrapark
                </h2>
                <p className="italic text-gray-400">
                    Web Software Developer Intern | May 2024 – August 2024 | Costa Rica
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Designed and developed a user registration system to simplify and accelerate gym registration processes.
                    </li>
                    <li>
                    Created intuitive user interfaces for mobile and desktop platforms using ReactJS & NodeJS.
                    </li>
                    <li>
                    Developed a solution that significantly reduced human errors in information transcription.
                    </li>
                    <li>
                    Built a containerized database server with normalized MSSQL using Docker.
                    </li>
                    <li>
                    Collaborated with stakeholders to identify functional and legal requirements for user registration.
                    </li>
                </ul>
                </div>

                <div className="experience-footer">
                    {/* <button onClick={() => toggleInterest("Ultrapark Web Software Developer Intern")}> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isAdded("Ultrapark Web Software Developer Intern") ? "#f6ff00" : "#ffffff"}>
                            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/>
                            </svg>
                    </button> */}
                <Button sx={{color: 'white', textTransform: "capitalize"}} onClick={handleOpen} className="rl-btn">
                    See Recommendation <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" style={{marginLeft: "8px"}} fill="#e8eaed"><path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z"/></svg>
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <img src="static/images/RL.png" alt="r-l" className="rl-img" style={{borderRadius: "4px"}} />
                    </Box>
                </Modal>


                </div>

            </div>

            {/*Projet*/}
            <div className="experience-item">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="static/images/AltaRobotique-Logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
                </div>

                {/* Experience Details */}
                <div className="experience-details">
                    <h2 className="text-xl font-semibold text-white">
                        Polytechnique Montréal – Alta Robotique
                    </h2>
                    <p className="italic text-gray-400">
                        Distributed Systems Developer | January 2025 – May 2025 | Montréal, QC
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                        <li>
                        Developed a web application for managing irrigation integrated with an IoT sensor to optimize the use of water and nutrients in the agricultural sector.
                        </li>
                        <li>
                        Implemented core functionalities, such as sensor connection via WiFi or Bluetooth, data collection and visualization (humidity, pH, nutrients), and reporting.
                        </li>
                        <li>
                        Designed a web interface for farmers to monitor and control their irrigation systems remotely.
                        </li>
                        <li>
                        Utilized Angular for the frontend and NestJS for the backend, along with a NoSQL database (MongoDB) for managing sensor and user data.
                        </li>
                        <li>
                        Collaborated with experts in agritech to address the specific needs of farmers, incorporating technical constraints like solar power for sensors.
                        </li>
                    </ul>
                </div>

                <div className="experience-footer">
                    {/* <button onClick={() => toggleInterest("AltaRobotique")}> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isAdded("AltaRobotique") ? "#f6ff00" : "#ffffff"}>
                            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/>
                            </svg>
                    </button> */}
                </div>

            </div>


            {/*Hackathon*/}
            <div className="experience-item">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="static/images/PolyHx-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
                </div>
                {/* Experience Details */}
                <div className="experience-details">
                    <h2 className="text-xl font-semibold text-white">
                        PolyHacks Hackathon 2024
                    </h2>
                    <p className="italic text-gray-400">
                    Fullstack Developer – Participant | February 2024 | Montréal, QC
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        Designed a web application prototype in 24 hours, enabling users to share compost with garden owners.
                    </li>
                    
                    <li>
                        Collaborated dynamically and effectively within the team, utilizing optimized code management with Git.
                    </li>
                    <li>
                        Leveraged technologies such as Angular, TypeScript, NodeJS, and MongoDB to ensure performance and reliability of the prototype.
                    </li>
                    <li>
                        Achieved 4th place in my first-ever hackathon experience.
                    </li>
                    </ul>
                </div>
            </div>

            <div className="experience-footer">
                {/* <button onClick={() => toggleInterest("Hackathon")}> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isAdded("Hackathon") ? "#f6ff00" : "#ffffff"}>
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/>
                        </svg>
                </button> */}
            </div>
            

        </div>

    </div>
  ); 

}