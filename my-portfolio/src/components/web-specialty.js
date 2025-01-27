import React from "react";

export default function Web() {
  return (
    <div>
        <h1 className="speciality-title">Web Development Experience</h1>
        <div className="experience-container">
            {/*ULTRAPARK*/}
            <div className="experience-item flex items-start space-x-6">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="/images/ultrapark-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
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
            </div>

            {/*Projet*/}
            <div className="experience-item flex items-start space-x-6">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="/images/AltaRobotique-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
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
            </div>


            {/*Hackathon*/}
            <div className="experience-item flex items-start space-x-6">
                
                <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                    <img src="/images/PolyHx-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
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
            </div>


        </div>

    </div>
  ); 

}