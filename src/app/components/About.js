import './style.css'
import Link from 'next/link'
import { Card } from "@nextui-org/react";
import Img1 from "./images/open-source.webp"
import Img2 from "./images/community-2.png"
import Img3 from "./images/notes.jpg"
import Image from 'next/image';

const About = () => {
    return (
        <div className='about-main-container'>
            <section className='about-section'>
                <h1 className='about-heading'>About Us</h1>
                <p className='about-content'>Welcome to RGPV-Nutess, your go-to resource for streamlined learning and information sharing within the <Link className='link' href="https://www.rgpv.ac.in/">RGPV University</Link> community. We understand the challenges students face when searching for specific study materials, preparing for semester exams, and navigating the vast sea of academic content.</p>

                <h1 className='about-heading'>What sets us apart</h1>
                <div className='about-cards'>
                    <Card className="about-card">
                        <h4 className="about-card-heading">Open Source Platform</h4>
                        <div className='about-card-image-container'>
                        <Image
                            alt="Card background"
                            className="about-card-image"
                            src={Img1}
                            width={270}
                        />
                        </div>
                    </Card>
                    <Card className="about-card">
                        <h4 className="about-card-heading">Community Driven</h4>
                        <div className='about-card-image-container'>
                        <Image
                            alt="Card background"
                            className="about-card-image"
                            src={Img2}
                            width={270}
                        />
                        </div>
                    </Card>
                    <Card className='about-card'>
                        <h4 className="about-card-heading">Comprehensive Notes</h4>
                        <div className='about-card-image-container'>
                        <Image
                            alt="Card background"
                            className="about-card-image"
                            src={Img3}
                            width={270}
                        />
                        </div>
                    </Card>
                </div>
            </section>

        </div>
    )
}

export default About