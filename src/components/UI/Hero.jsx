import React from 'react'
// import heroIamge from "../../assets/images/hero.png"
import heroIamge from "../../assets/images/00.png"
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <div className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* hero left content  */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos="fade-right" data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello Welcome</h5>
                        <h1  data-aos="fade-up" data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Ahmad Dayoub <br /> Software Engineer </h1>
                        <div data-aos="fade-up" data-aos-duration='1800' data-aos-delay="200"  className='flex items-center gap-6 mt-7'>
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] w-[120px]'>
                                    <i className='ri-mail-line'></i>
                                    Hire me
                                </button>
                            </a>
                            <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See portfolio</a>
                        </div>
                        <p data-aos="fade-left" data-aos-duration='1500'className='flex gap-2 text-headingColor font-[500] mt-14 text-[15px] leadign-7 sm:pl-14 sm:pr-10'>
                            <span>
                                <i className='ri-apps-2-line'></i>
                            </span>
                            Hello! I'm Ahmad Dayoub, a 23-year-old Software Engineer. I have a strong passion for web design and development,
                               I continuously update my skills to keep up with the latest industry
                              technologies and trends. 
                            If you're seeking a dedicated and creative web designer/developer, I would be delighted to be a part of your next project!</p>
                            <div className='flex items-center gap-9 mt-14'>
                                <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
                                <span>
                                    <a href="https://github.com/AhmadDayoub" className='text-smallTextColor text-[15px] font-[600]'> <i className='ri-github-fill'></i></a>
                                </span>
                                    <a href="https://www.linkedin.com/in/ahmad-dayoub-" className='text-smallTextColor text-[15px] font-[600]'> <i className='ri-linkedin-line'></i></a>
                                <span>
                                    <a href="https://www.instagram.com/ahmad_dyoub/" className='text-smallTextColor text-[15px] font-[600]'> <i className='ri-instagram-line'></i></a>
                                </span>
                                <span>
                                </span>
                            </div>
                    </div>
                {/* hero left end  */}

                {/* hero img */}
                <div className='basis-1/3 mt-10 sm:mt-0 '   >
                     <div className='w-fit bg-primaryColor rounded-[190px] ' data-aos="fade-right" data-aos-duration='1800' data-aos-delay="200" >
                     <figure className='flex items-center   pt-20 justify-center  rounded-b-[170px] '>  
                        <img className='rounded-b-[190px]  ' src={heroIamge} alt="" data-aos="fade-left" data-aos-duration='1800' />
                    </figure>
                     </div>
                    
                </div>
                {/* hero img  end*/}

                {/* hero content right */}
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Years of experience
                        </h4>

                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Success rate
                        </h4>

                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={30} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Project Completed
                        </h4>

                    </div>
                    
                </div>

                {/* hero content right end */}
            </div>

        </div>

    </div>
  )
}

export default Hero