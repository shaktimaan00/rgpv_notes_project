"use client"
import {Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.js";
import {SearchIcon} from "./SearchIcon.js";
import Image from 'next/image'
import Logo from "./images/logo2.png";
import SearchComponent from "./SearchComponent.js";


export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src={Logo} width={125} height={125} className="logo-image" priority="-.08a1" alt='Logo Image'/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <SearchComponent/>
      </NavbarContent>
    </Navbar>
  );
}
