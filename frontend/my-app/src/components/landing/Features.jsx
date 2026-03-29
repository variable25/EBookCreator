import React from 'react'
import { FEATURES } from '../../utils/data'

const Features = () => {
  return <div id='features' className='relative py-24 lg:py-32 bg-linear-to-tr from-cyan-200 via-white to-blue-300 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 relative'>
            <div className='text-center mb-20 space-y-4'>
                <div className='inline-flex items-center space-x-2 bg-linear-to-r from-amber-300 to-amber-50 px-4 py-2 rounded-full'>
                    <span className='w-2 h-2 bg-emerald-600 rounded-full animate-pulse'></span>
                    <span className='font-semibold text-emerald-600'>Features</span>
                </div>
                <h2 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-emerald-600 tracking-tight'>
                    Everything you need to
                    <span className='block mt-2 bg-linear-to-r from-emerald-700 to-emerald-300 bg-clip-text text-transparent'>
                        Create your ebook
                    </span>
                </h2>
                <p className='mx-auto mx-w-2xl text-base text-emerald-600'>
                    Our platform is packed with powerful features to help you write,
                    design and publish your ebook effortlessly
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {FEATURES.map((feature,index) => {
                    const Icon = feature.icon
                    return(
                        <div
                            key={index}
                            className='group relative bg-cyan-100 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-100 hover:translate-y-1'
                        >
                            <div className='absolute inset-0 bg-linear-to-r from-cyan-50 to-blue-100 group-hover:from-emerald-50 group-hover:to-emerald-100 rounded-2xl transition-all duration-200'></div>

                            <div className='relative space-y-4'>
                                <div
                                    className={`w-14 h-14 bg-linear-to-tr ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-${feature.gradient} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className='w-7 h-7 text-amber-300'/>
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-base font-light text-emerald-500 leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>

                                <div className='pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <span className='text-emerald-500 font-medium inline-flex items-center'>Learn More
                                        <svg 
                                            className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 5l7 7-7 7'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='text-center mt-16'>
                <p className='mb-6 text-emerald-600 font-medium'>Ready to get started?</p>
                <a 
                    href="/signup"
                    className='inline-flex items-center space-x-2 bg-linear-to-r from-amber-300 to-amber-100 px-8 py-4 rounded-xl font-semibold text-emerald-600 shadow-lg shadow-amber-100 hover:scale-105 hover:shadow-amber-200 transition-all duration-300'
                >
                    <span>Start Creating Today</span>
                    <svg
                        className='w-5 h-5'
                        fill='none'
                        viewBox=' 0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                    </svg>
                </a>
            </div>
        </div>
  </div>
}

export default Features