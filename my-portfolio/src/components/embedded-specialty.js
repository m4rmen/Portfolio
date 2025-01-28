import React from 'react';


export default function Embedded({ interestsList, toggleInterest }) {
    return (
        <div>
            <h1 className='speciality-title'>Embedded Development Technical Skills</h1>
            <div className="skills-container">
                <div>
                    <h2>Programming Languages</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                        <p>C</p>
                        <p>C++</p>
                        <p>Python</p>
                        <p>Java</p>
                        <p>Assembly</p>
                        <p>VHDL</p>
                    </div>
                </div>
                <div>
                    <h2>Frameworks</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                        <p>ROS 2</p>
                        <p>OpenCV</p>
                        <p>PyTorch</p>
                        <p>Flask</p>
                    </div>
                </div>
                <div>
                    <h2>APIs</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                        <p>OpenMP</p>
                        <p>TBB</p>
                        <p>POSIX</p>
                        <p>OpenCL</p>
                        <p>MPI</p>
                    </div>
                </div>
            </div>

            <h1 className="speciality-title">Experience</h1>
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




            <h1 className="speciality-title">Relevant courses</h1>
            <div className='courses-container'>
                <div className='courses-item'>
                    <h2>Embedded Systems</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                    <p>Design of the software component of an embedded system.</p>
                    <p>Real-time operating systems.</p>
                    <p>μC</p>
                    <p>VHDL</p>
                    <p>High Level Synthesis (HLS) Pragma</p>
                    <p>Xilinx Vivado</p>

                    </div>
                </div>
                <div className='courses-item'>
                    <h2>Parallel Computer Systems</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                        <p>Advanced multiprocessor architectures.</p>
                        <p>Memory hierarchy and cache coherence protocols.</p>
                        <p>Multithreaded parallelism.</p>
                        <p>MPI</p>
                        <p>OpenCL</p>
                        <p>TBB</p>
                        <p>OpenMP</p>
                    </div>
                </div>

                <div className='courses-item'>
                    <h2>Microcomputer Architecture</h2>
                    <div className="mt-4 text-gray-300 space-y-2">
                        <p>Microcomputer architecture and organization.</p>
                        <p>Instruction set architecture.</p>
                        <p>Assembly programming.</p>
                        <p>Link between assembly language and a high-level programming language.</p>
                        <p>Microprocessor optimization: pipelining.</p>
                    </div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>





        </div>
      ); 
}


