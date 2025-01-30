import React from "react";


export default function Cyber({ interestsList, toggleInterest}) {
    return (
        <div>
            <h1 className="speciality-title">Cybersecurity Technical Skills</h1>
            <div className="security-skills">
            <div>
                <h2>Threat analysis</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                    <p>MITRE ATT&CK</p>
                    <p>Cyber incident response frameworks.</p>
                    <p>Evidence collection and analysis.</p>
                    <p>Crisis management and incident handling.</p>
                    <p>Dark web and OSINT investigations.</p>
                    <p>STIX and TAXII standards.</p>
                    <p>Threat hunting and TTP analysis.</p>
                    <p>Advanced detection: anomalies and machine learning.</p>
                </div>
            </div>
            <div>
                <h2>Network Security</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                    <p>Firewall configuration and management.</p>
                    <p>Setting up and troubleshooting NAT rules.</p>
                    <p>Packet analysis and network traffic monitoring.</p>
                    <p>Securing networks using Cisco ASA.</p>
                    <p>VPN setup and secure remote access.</p>
                    <p>Mitigating network threats and intrusion detection.</p>
                </div>
            </div>

            <div>
                <h2>Cloud Security</h2>
                <div className="mt-4 text-gray-300 space-y-2">
                    <p>AWS services security and IAM roles.</p>
                    <p>Monitoring with CloudWatch and CloudTrail.</p>
                    <p>Compliance checks with AWS Config.</p>
                    <p>Vulnerability assessments using AWS Inspector.</p>
                    <p>Secure VPCs and S3 bucket policies.</p>
                    <p>Encryption with AWS KMS.</p>
                </div>
            </div>

            </div>   
        </div>
      ); 
}

