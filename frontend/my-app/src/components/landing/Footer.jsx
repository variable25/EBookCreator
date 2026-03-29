import {BookOpen} from 'lucide-react'
import { SiGithub,  SiX } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return ( 
    <footer className=''>
        {/*Subtle background pattern*/}
        <div className=''>
            <div className=''></div>
        </div>
        <div className=''>
            <div className=''>
                <div className=''>
                    <a href="" className=''>
                        <div>
                            <BookOpen/>
                        </div>
                        <span className=''>eBook Creator</span>
                    </a>
                    <p className=''>
                        Create, design and publish stunning ebooks with the power of AI
                    </p>

                    <div className=''>
                        <a 
                            href="https://X.com"
                            className=''
                            aria-label='X'
                        >
                            <SiX className=''/>
                        </a>
                        <a 
                            href="https://Linkedin.com"
                            className=''
                            aria-label='Linkedin'    
                        >
                            <FaLinkedin className=''/>
                        </a>
                        <a 
                            href="https://Github.com"
                            className=''
                            aria-label='Github'    
                        >
                            <SiGithub className=''/>
                        </a>
                    </div>
                </div>

                {/*Quick Links*/}
                <div className=''>
                    <div>
                        <h3 className=''>Product</h3>
                        <ul className=''>
                            <li>
                                <a href="#features" className=''>Features</a>
                            </li>
                            <li>
                                <a href="#pricing" className=''>Pricing</a>
                            </li>
                            <li>
                                <a href="#templates" className=''>Templates</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className=''>Company</h3>
                        <ul className=''>
                            <li>
                                <a href="#about" className=''>About</a>
                            </li>
                            <li>
                                <a href="#contact" className=''>Contact</a>
                            </li>
                            <li>
                                <a href="#blog" className=''>Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <h3 className=''>Legal</h3>
                        <ul className=''>
                            <li>
                                <a href="#privacy" className=''>Privacy</a>
                            </li>
                            <li>
                                <a href="#terms" className=''>Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Bottom Bar*/}
            <div className=''>
                <div className=''>
                    <p className=''>
                        © {new Date().getFullYear()}eBook Creator. All rights reserved
                    </p>
                    <p className=''>
                        Made with <span className=''>love</span> for writers
                    </p>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
