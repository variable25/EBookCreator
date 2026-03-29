import {BookOpen} from 'lucide-react'
import { SiGithub,  SiX } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return ( 
    <footer className='relative text-emerald-600 overflow-hidden '>
        
        <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='py-16 grid grid-cols-1 md:grid-cols-12 gap-12'>
                {/*Brand Section*/}
                <div className='md:col-span-5 space-y-6'>
                    <a href="" className='flex items-center space-x-2.5 group'>
                        <div className='w-10 h-10 bg-linear-to-r from-emerald-400 to-emerald-200 flex items-center justify-center text-cyan-200 rounded-xl shadow-lg shadow-cyan-300 group-hover:shadow-emerald-300 transition-all duration-200 group-hover:scale-105'>
                            <BookOpen className='w-5 h-5 text-cyan-100'/>
                        </div>
                        <span className='text-xl font-semibold tracking-tight'>eBook Creator</span>
                    </a>
                    <p className='max-w-small leading-relaxed text-emerald-600'>
                        Create, design and publish stunning ebooks with the power of AI
                    </p>

                    {/*Icons*/}
                    <div className='flex items-center space-x-2.5 pt-1'>
                        <a 
                            href="https://X.com"
                            className='w-10 h-10 bg-linear-to-tr from-emerald-500 to-emerald-200 flex items-center justify-center rounded-2xl shadow-md shadow-cyan-300 hover:shadow-emerald-200 hover:scale-105 transition-all duration-200'
                            aria-label='X'
                        >
                            <SiX className='text-black  '/>
                        </a>
                        <a 
                            href="https://Linkedin.com"
                            className='w-10 h-10 bg-linear-to-t from-emerald-500 to-emerald-200 flex items-center justify-center rounded-2xl shadow-md shadow-cyan-300 hover:shadow-emerald-200 hover:scale-105 transition-all duration-200'
                            aria-label='Linkedin'    
                        >
                            <FaLinkedin className='w-6 h-6 text-blue-700'/>
                        </a>
                        <a 
                            href="https://Github.com"
                            className='w-10 h-10 bg-linear-to-tl from-emerald-500 to-emerald-200 flex items-center justify-center rounded-2xl shadow-md shadow-cyan-300 hover:shadow-emerald-200 hover:scale-105 transition-all duration-200'
                            aria-label='Github'    
                        >
                            <SiGithub className='text-white'/>
                        </a>
                    </div>
                </div>

                {/*Quick Links*/}
                <div className='md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='text-lg font-semibold mb-3'>Product</h3>
                        <ul className='space-y-1.5'>
                            <li>
                                <a href="#features" className= 'inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Features</a>
                            </li>
                            <li>
                                <a href="#pricing" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Pricing</a>
                            </li>
                            <li>
                                <a href="#templates" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Templates</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-3'>Company</h3>
                        <ul className='space-y-1.5'>
                            <li>
                                <a href="#about" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>About</a>
                            </li>
                            <li>
                                <a href="#contact" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Contact</a>
                            </li>
                            <li>
                                <a href="#blog" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-3'>Legal</h3>
                        <ul className='space-y-1.5'>
                            <li>
                                <a href="#privacy" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Privacy</a>
                            </li>
                            <li>
                                <a href="#terms" className='inline-block hover:text-amber-200 hover:scale-105 transition-all duration-150'>Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Bottom Bar*/}
            <div className='border-t border-gray-400/30 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <p className='text-sm'>
                        © {new Date().getFullYear()}eBook Creator. All rights reserved
                    </p>
                    <p className='text-sm'>
                        Made with <span className=''>love</span> for writers
                    </p>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
