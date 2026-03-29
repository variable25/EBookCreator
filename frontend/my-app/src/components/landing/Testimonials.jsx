import React from 'react'
import { TESTIMONIALS } from '../../utils/data'
import {Star,Quote} from 'lucide-react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='relative py-20 lg:py-28 bg-linear-to-br from-cyan-200 via-white to-blue-200'>
      {/*Decorative Elements*/}
      <div className='absolute top-20 w-64 h-64 right-10 bg-cyan-100 rounded-full blur-2xl'></div>
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl'></div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 relative'>
        {/*Header*/}
        <div className='text-center mb-20 space-y-2'>
          <div className='inline-flex items-center space-x-2 px-4 py-2 border border-blue-200 rounded-full bg-emerald-100 shadow-sm backdrop-blur-sm'>
            <Star className='fill-amber-300 text-amber-300 w-4 h-4'/>
            <span className='font-semibold text-emerald-600'>Testimonials</span>
          </div>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-600 tracking-tight'>
            Loved by Creators
            <span className='block mt-2 bg-linear-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent'>Everywhere</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto text-emerald-600'>
            Here's what the users have to say about our app
          </p>
        </div>

        {/*Testimonials Grid*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((testimonial, index)=>(
            <div
              key={index}
              className='group relative bg-emerald-200 rounded-3xl backdrop-blur-sm p-8 border border-cyan-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-amber-200 hover:-translate-y-2 transition-all duration-200'
            >
              {/*Quote Icon*/}
              <div className='absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-amber-300 to-amber-200 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200 rotate-6 group-hover:rotate-12 transition-transform duration-200'>
                <Quote className='w-6 h-6 text-emerald-500'/>  
              </div>

              {/*Rating Stars*/}
              <div className='flex items-center space-x-1 mb-6'>
                {[...Array(testimonial.rating)].map((_,i)=>{
                  return (
                    <Star
                    key={i}
                    className='w-5 h-5 text text-amber-300 fill-amber-300'
                  />
                  )
                  
                })}  
              </div>

              {/*Quote*/}
              <p className='text-emerald-600 font-light mb-8 leading-relaxed'>
                "{testimonial.quote}"  
              </p>

              {/*Author Info*/}
              <div className='flex items-center space-x-4'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-linear-to-r from-emerald-300 to-emerald-100 rounded-full opacity-30'></div>
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className='relative w-14 h-14 rounded-full object-cover ring-2 ring-cyan-100 shadow-lg' 
                  />
                </div>
                <div className='flex-1'>
                  <p className='text-emerald-600 font-medium'>{testimonial.author}</p>
                  <p className='text-emerald-600 font-light'>{testimonial.title}</p>
                </div>  
              </div>

              {/*Hover Gradient Background*/}
              <div className='absolute inset-0 bg-linear-to-r from-emerald-200/150 to bg-emerald-100/30 group-hover:from-emerald-100/40 group-hover:to-emerald-50/20 rounded-3xl transition-all duration-200 -z-10'></div> 
            </div>
          ))}
        </div>

        {/*Bottom Stats*/}
        <div className='mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-emerald-500'>50K+</div>
            <div className='text-medium text-emerald-400'>Happy Customers</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-emerald-500'>4.9/5</div>
            <div className='text-medium text-emerald-400'>Average Rating</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-emerald-500'>100K+</div>
            <div className='text-medium text-emerald-400'>Ebooks Created</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials