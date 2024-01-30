import Image from "next/image"
import logo from "./images/logo2.png"
import { Divider } from "@nextui-org/react"
import Link from "next/link"
import "./style.css"

const Footer = () => {
    return (
        <main className="footer-main-container">
            <Divider />
            <div className="footer-list">
                <div className='footer-image'>
                    <Image src={logo} width={180} alt="footer-logo" priority="-.08a1" />
                </div>
                <div>
                    <div>
                        <h3 className="footer-list-heading">Branch</h3>
                        <div className="footer-list-content">Computer Science</div>
                        <div className="footer-list-content">Information and Technology</div>
                        <div className="footer-list-content">Electronics and communication</div>
                        <div className="footer-list-content">Electrical</div>
                        <div className="footer-list-content">Mechanical</div>
                    </div>
                </div>
                <div>
                    <h3 className="footer-list-heading">Quick Links</h3>
                    <div></div>
                </div>
                <div>
                    <div>
                        <h3 className="footer-list-heading">Social Links</h3>
                        <div className="footer-list-content">
                            <Link 
                                target="_blank" 
                                href="https://github.com/shaktimaan00"
                            >
                                Github
                            </Link>
                        </div>
                        <div className="footer-list-content">
                            <Link 
                                target="_blank" 
                                href="https://www.instagram.com/the__average__guy?igsh=cTFqMGx3bDd3enFt"
                            >
                                Instagram
                            </Link>
                        </div>
                        <div className="footer-list-content">
                            <Link 
                                target="_blank" 
                                href="https://www.linkedin.com/in/anurag-mishra-b8004a217/"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-row footer-list-heading ">
                <div className="footer-credits">
                    <p>© 2021 RGPV-Nutess.</p>
                    <p>All rights reserved.</p>
                </div>
                <div>
                    {/* <ModeToggler/> */}
                </div>
            </div>
        </main>
    )
}

export default Footer;
