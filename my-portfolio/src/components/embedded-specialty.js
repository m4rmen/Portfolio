import React from 'react';


export default function Embedded({ interestsList, toggleInterest }) {
    return (
        <div>
            <h1 className="speciality-title">Embedded Development Experience</h1>
            <div className="experience-container">
                <div className="experience-item flex items-start space-x-6">
                    
                    <div className="logo-placeholder w-20 h-20 flex items-center justify-center rounded">
                        <img src="/images/ros-logo.png" alt="logo" className="w-16 h-16 max-w-none" style={{borderRadius: "8px"}} />
                    </div>

                    <div className="experience-details">
                    <h2 className="text-xl font-semibold text-white">
                        Design Project of an Information System - Polytechnique Montréal
                    </h2>
                    <p className="italic text-gray-400">
                        Developing Team Member | January 2024 - April 2024 | Montréal, QC
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                        <li>
                        Created a ROS 2 package using C++ which runs on mobile robots to navigate autonomously in both simulated and real environment.
                        </li>
                        <li>
                        Managed Node architecture and frames transformation (TF Tree) to ensure reliable communication between all the ROS components.
                        </li>
                        <li>
                        Designed a Web interface to monitor the robots and send commands.
                        </li>
                        <li>
                        Developed a Python Flask API to relay the web commands to the robots via ROS2 Topics publishing.
                        </li>
                        <li>
                        Built a containerized solution for the Python server and Web server.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
      ); 
}


