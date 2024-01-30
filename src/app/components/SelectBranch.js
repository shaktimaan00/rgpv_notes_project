'use client'
// components/SelectYear.js
import React from 'react';
import { Button } from "@nextui-org/react";
import { useState } from 'react';
import Image from 'next/image';
import DogCivil from '/public/doge-civil.png';
import "./style.css"
import { Donegal_One } from 'next/font/google';

const SelectBranch = ({ onSelectBranch }) => {
    const branches = [
        {
            branch: "CSE",
            year_letter: "Computer Science",
            src: DogCivil
        },
        {
            branch: "ECE",
            year_letter: "ECE",
            src: DogCivil
        },
        {
            branch: "ME",
            year_letter: "Mechanical",
            src: DogCivil
        },
        {
            branch: "CIVIL",
            year_letter: "Civil",
            src: DogCivil
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
            <main className="branch-container">
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
