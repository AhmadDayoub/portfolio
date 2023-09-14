import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l80l567', 'template_nmdskwk', form.current, 'tXj3ffIiLSpMlr7ou')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section id='contact' className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in toch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828221399!2
                d54.897821502867814!3d25.076280447839455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162
                !2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1693290853601!5m2!1sen!2sin" 
                 className='border-0 w-full h-full'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center justify-center bg-indigo-100
                       px-4 lg:px-8 py-8'>
                        <form ref={form} className='w-full' id='from-name' onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input type="text" placeholder='Enter you name' className='w-full focus:outline-none p-3 rounded-[5px]' name='user_name' />
                            </div>
                            <div className='mb-5'>
                                <input type="email" placeholder='Enter you email' className='w-full focus:outline-none p-3 rounded-[5px]' name='user_email' />
                            </div>
                            <div className='mb-5'>
                                <input type="text" placeholder='Subject' className='w-full focus:outline-none p-3 rounded-[5px]' name='message' />
                            </div>
                            <div className='mb-5 '>
                                <textarea type="text" rows={3} placeholder='Write your message' className='w-full focus:outline-none p-3 rounded-[5px]'></textarea>
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor  text-white hover:bg-headingColor text-center ease-linear duration-150 '>Send Message</button>
                        </form>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact