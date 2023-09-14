import React,{useEffect,useState} from 'react'
import data from "../../assets/data/portfolioData"
import Modal from './Modal'

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID]= useState(null)


    const loadMoreHandler = () => {
        setNextItems (prev => prev+3)
    }

    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }
  return (
   <section id='portfolio'>
    <div className='container'>
        <div className='flex items-center justify-center flex-wrap'>
            <div className='mb-7 sm:mb-0'>
                <h3 className=' text-headingColor text-[3rem] font-[700] '>My recent porjects</h3>
            </div>
           
        </div>
        <div className='flex items-center gap-4 flex-wrap mt-12'>
          {  portfolios?.slice(0,nextItems)?.map((portfolio,index) => (
                <div data-aos='fade-zoom-in' key={index} data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-1 ' >
                    <figure>
                        <img src={portfolio.imgUrl} className='rounded-[8px]' alt="" />
                    </figure>

                    <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                       hidden group-hover:block rounded-[8px]'>
                        <div className='w-full h-full flex items-center justify-center'>
                        <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] duration-200 '>See Details</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
        <div className='text-center mt-6'>
            {
                nextItems < portfolios.length && data.length > 6 &&  <button onClick={loadMoreHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] duration-200 '>Load More</button>
            }
        </div>
    </div>
    {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
    }

   </section>
  )
}

export default Portfolio