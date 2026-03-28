import React from 'react'
import { TESTIMONIALS } from '../../utils/data'
import {Star,Quote} from 'lucide-react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='relative py-24 lg:py-32 bg-linear-to-br from-cyan-200 via-white to-blue-200'>
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
        <div className=''>
          {TESTIMONIALS.map((testimonial, index)=>(
            <div
              key={index}
              className=''
            >
              {/*Quote Icon*/}
              <div className=''>
                <Quote className=''/>  
              </div>

              {/*Rating Stars*/}
              <div className=''>
                {[...Array(testimonial.rating)].map((_,i)=>{
                  return (
                    <Star
                    key={i}
                    className=''
                  />
                  )
                  
                })}  
              </div>

              {/*Quote*/}
              <p className=''>
                "{testimonial.quote}"  
              </p>

              {/*Author Info*/}
              <div className=''>
                <div className=''>
                  <div className=''></div>
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className='' 
                  />
                </div>
                <div className=''>
                  <p className=''>{testimonial.author}</p>
                  <p className=''>{testimonial.title}</p>
                </div>  
              </div>

              {/*Hover Gradient Background*/}
              <div className=''></div> 
            </div>
          ))}
        </div>

        {/*Bottom Stats*/}
        <div className=''>
          <div className=''>
            <div className=''>50K+</div>
            <div className=''>Happy Customers</div>
          </div>
          <div className=''>
            <div className=''>4.9/5</div>
            <div className=''>Average Rating</div>
          </div>
          <div className=''>
            <div className=''>100K+</div>
            <div className=''>Ebooks Created</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials