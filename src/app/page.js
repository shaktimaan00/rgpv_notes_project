"use client"
import SelectBranch from "./components/SelectBranch";
import SelectYear from "./components/SelectYear"
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./components/style.css"
import Link from "next/link";
import { Button } from "@nextui-org/react";
import About from "./components/About";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  };

  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
  };




  return (
    <main className="main-container"> 
        {selectedYear==null ? (
          <SelectYear onSelectYear={handleSelectYear} />
        ):(
          <div className="branch-wrapper">
            <SelectBranch onSelectBranch={handleSelectBranch} />
          <Link
            href={{
              pathname: '/Btech',
              query: {
                year: `${selectedYear}`,
                branch: `${selectedBranch}`
              }
            }}
          >
            <Button className="to-cards-btn" color="primary" variant="flat" auto>Submit</Button>
          </Link>
          </div>
        )}

        <About/>
        
          
    </main>
  )
}

