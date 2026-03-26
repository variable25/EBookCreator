import React from 'react'
import { ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import {Link} from 'react-router-dom'
import HERO_IMG from '../../assets/Hero-img.jpg'

const Hero = () => {

    const {isAuthenticated} = useAuth()

  return <div className='relative bg-linear-to-br from-cyan-100 via-white to-blue-300'>
        {/*Floating Background Elements*/}
        <div className='absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl animate-pulse delay-700'></div>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center '>
                {/*Left Content*/}
                <div className='max-w-xl space-y-8'>
                    <div className='inline-flex items-center space-x-2 bg-amber-50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-100 shadow-sm'>
                        <Sparkles className='w-6 h-6 text-emerald-600'/>
                        <span className='text-sm font-medium text-emerald-600'>
                            AI Powered Publishing
                        </span>
                    </div>
                    <h1 className='text-5xl sm:text-6xl lg:text-6xl font-bold text-emerald-600 leading-right tracking-tight'>
                        Create Stunning
                        <span className='block mt-2 bg-linear-to-r from-emerald-700 to-emerald-300 bg-clip-text text-transparent'>
                            Ebook in Minutes
                        </span>
                    </h1>

                    <p className='text-lg text-emerald-600 leading-relaxed'>
                        From idea to published ebook, our AI-Powered platform helps you 
                        write, design and export professional-quality books effortlessly
                    </p>

                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                        <Link
                            to={isAuthenticated ? '/dashboard' : '/login'}
                            className='group inline-flex items-center space-x-2 bg-linear-to-r from-cyan-100 to-cyan-300 rounded-full px-4 py-2 border border-cyan-200 text-emerald-700 shadow-lg shadow-cyan-100 font-semibold hover:bg-linear-to-r hover:from-emerald-300 hover:to-emerald-100 hover:shadow-emerald-200 hover:scale-105 transition-all duration-200'
                        >
                            <span>Start Creating for free</span>
                            <ArrowRight className='group-hover:translate-x-1 transition-transform'/>
                        </Link>

                        <a 
                            href="#demo"
                            className='inline-flex items-center space-x-2 text-emerald-500 font-medium hover:text-emerald-700 transition-colors duration-200'
                        >
                            <span>Watch Demo</span>
                            <span className=''>→</span>
                        </a>
                    </div>

                    <div className='flex items-center gap-8 pt-4'>
                        <div>
                            <div className='text-2xl font-bold text-emerald-600'>50K+</div>
                            <div className='text-sm font-medium text-emerald-600'>Books Created</div>
                        </div>
                        <div className='w-px h-12 bg-emerald-600'></div>
                        <div>
                            <div className='text-2xl font-bold text-emerald-600'>4.9/5</div>
                            <div className='text-sm font-medium text-emerald-600'>User Rating</div>
                        </div>
                        <div className='w-px h-12 bg-emerald-600'></div>
                        <div>
                            <div className='text-2xl font-bold text-emerald-600'>10 min</div>
                            <div className='text-sm font-medium text-emerald-600'>Avg. Creation</div>
                        </div>
                    </div>
                </div>

                <div className='relative lg:pl-8'>
                    <div className='relative'>
                        <div className='absolute -inset-4 bg-linear-to-r from-cyan-400 to-cyan-100 rounded-4xl opacity-25 blur-2xl'></div>
                        <div className='relative bg-cyan-100 rounded-xl shadow-xl overflow-hidden border border-blue-100  '>
                            <img 
                                src={HERO_IMG} 
                                alt="AI Ebook Creator Dashboard" 
                                className='w-full h-auto'
                            />

                            <div className='absolute top-6 right-6 bg-emerald-100 rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-cyan-200 animate-in fade-in slide-in-from-right duration-600'>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-10 h-10 bg-linear-to-br from-cyan-500 to-cyan-100 rounded-lg flex items-center justify-center'>
                                        <Zap className='w-5 h-5 text-emerald-600'/>
                                    </div>
                                    <div>
                                        <div className='text-xs font-light text-emerald-600'>Processing</div>
                                        <div className='font-semibold text-emerald-700'>
                                            AI Generation
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='absolute bottom-6 left-6 bg-emerald-100 rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-white animate-in fade-in slide-in-from-left duration-700 delay-300'>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-10 h-10 bg-linear-to-br from-amber-300 to bg-amber-100 rounded-xl flex items-center justify-center'>
                                        <BookOpen className='w-5 h-5 text-emerald-700'/>
                                    </div>
                                    <div>
                                        <div className='text-sm text-emerald-400 font-light'>Completed</div>
                                        <div className='font-semibold text-emerald-700'>
                                            247 Pages
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -top-8 -left-8 w-20 h-20 bg-emerald-200/50 rounded-2xl rotate-12'></div>
                    <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100/50 rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
    
  
}

export default Hero