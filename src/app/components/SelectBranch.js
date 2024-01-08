'use client'
// components/SelectYear.js
import React from 'react';
import { Button, Image } from "@nextui-org/react";
import { useState } from 'react';
import "./style.css"

const SelectBranch = ({ onSelectBranch }) => {
    const branches = [
        {
            branch: "CSE",
            year_letter: "Computer Science",
            src: "./images/doge-civil.png"
        },
        {
            branch: "ECE",
            year_letter: "Electronics and Comm.",
            src: "./images/doge-civil.png"
        },
        {
            branch: "ME",
            year_letter: "Mechanical",
            src: "./images/doge-civil.png"
        },
        {
            branch: "CIVIL",
            year_letter: "Civil",
            src: "./images/doge-civil.png"
        }
    ];

    const [selectedBranch, setSelectedBranch] = useState(null);

    const handleBranchClick = (branch) => {
        if (selectedBranch === branch) {
            setSelectedBranch(null);
        } else {
            onSelectBranch(branch);
            setSelectedBranch(branch);
        }
    };

    return (
        <div>
            <main className="container">
            <h1 className='semester-title'>Select your Branch</h1>
            <div className='semester-main-container'>
                {branches.map((branch) => (
                    <Button 
                    variant="flat" 
                    color={selectedBranch === branch.branch ? 'danger' : 'secondary'}
                    key={branch.branch} 
                    onClick={()=>handleBranchClick(branch.branch)}
                    >
                        <p>{branch.year_letter}</p>
                    </Button>
                ))}
            </div>
            </main>
        </div>
    );
};

export default SelectBranch;
