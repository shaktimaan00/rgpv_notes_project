'use client'
// components/SelectYear.js
import React, { useState } from 'react';
import { Button, Image } from "@nextui-org/react";
import "./style.css"

const SelectYear = ({ onSelectYear }) => {
    const years = [
        {
            year: 1,
            year_letter: "1st Year",
            src: "./images/doge-civil.png"
        },
        {
            year: 2,
            year_letter: "2nd Year",
            src: "./images/doge-civil.png"
        },
        {
            year: 3,
            year_letter: "3rd Year",
            src: "./images/doge-civil.png"
        },
        {
            year: 4,
            year_letter: "4th Year",
            src: "./images/doge-civil.png"
        }
    ];

    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearClick = (year) => {
        if(selectedYear==year){
            setSelectedYear(null);
        }
        else{
            onSelectYear(year);
            setSelectedYear(year);
        }
    };

    return (
        <main className="container">
            <h1 className='semester-title'>Select your year</h1>
            <div className='semester-main-container'>
                {years.map((year) => (
                    <Button 
                    variant="flat" 
                    color={selectedYear === year.year ? 'danger' : 'secondary'}
                    key={year.year} 
                    onClick={() => handleYearClick(year.year)}>
                        <p>{year.year_letter}</p>
                    </Button>
                ))}
            </div>
        </main>
    );
};

export default SelectYear;
