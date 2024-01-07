"use client"
import SelectBranch from "./components/SelectBranch";
import SelectYear from "./components/SelectYear"
import { useState } from "react";
import { Button } from "@nextui-org/react";
import "./components/style.css"
import Link from "next/link";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const handleSelectYear = (year) => {
    setSelectedYear(year);
    // setSelectedBranch(null);
  };

  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
  };

  // console.log(selectedYear, selectedBranch);
  return (
    <main className="main-container">
        <SelectYear onSelectYear={handleSelectYear}/>
        <SelectBranch onSelectBranch={handleSelectBranch}/>
        <Link 
          href={{
            pathname: '/Cards',
            query: {
              year: selectedYear,
              branch: selectedBranch
            }
          }}
        >
          Navigate
        </Link>
    </main>
  )
}
