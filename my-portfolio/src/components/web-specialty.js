import React from "react";

export default function Web({ interestsList, toggleInterest }) {
    const isAdded = (interest) => interestsList.includes(interest);

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