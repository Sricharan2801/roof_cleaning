import React, { useState, useEffect } from 'react';
import { images } from '../utils';
import water from "../assets/water2.jpg"

const IMAGES_PER_PAGE = 1;

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

    // Calculate the current images to display
    const startIndex = currentPage * IMAGES_PER_PAGE;
    const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const handlePageClick = (index) => {
        setCurrentPage(index);
    };

    // Automatically change images every 2 seconds
    useEffect(() => {
        const interval = setInterval(handleNextPage, 2500);
        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <section id='home' className='w-full relative top-20 h-[calc(100vh-5rem)] flex lg:flex-row  flex-col'>
            <div className='lg:w-[40%] w-full h-full'>

                <h1 className='sm:pt-10 pt-10 sm:text-5xl text-3xl font-extrabold text-center'
                    style={{
                        color: 'transparent',
                        backgroundImage:`url(${water})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                    LOREM ROOFING
                </h1>

                <h1 className='sm:text-4xl text-3xl font-bold leading-normal text-balance text-center sm:pt-10 pt-10'>
                    Transform Your Roof: <br /> Clean, Protect, and Shine!
                </h1>

                <p className='sm:text-lg text-sm text-center mt-10 sm:pl-5 text-gray-700 font-semibold'>
                    Expert cleaning solutions that not only extend the life of your roof but also enhance your home's beauty, ensuring it looks its best for years to come.
                </p>

                <div className="mt-5 flex items-center justify-center gap-x-6 sm:mt-10 ">
                    <a href="#contact" className="text-xl p-3 font-bold leading-6 bg-orange-600 text-white border-solid border-2 border-white rounded-lg ">
                        Get Quote <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div className='lg:w-[60%] w-full h-full  flex justify-center items-center'>
                <div className='relative w-[95%] h-[95%] border-solid border-2 border-y-slate-200 rounded-xl '>
                    {currentImages.map((image) => (
                        <img key={image.id} src={image.src} alt={image.alt} className='object-fill w-full h-full rounded-xl ' />
                    ))}

                    <div className='absolute bottom-5 w-full flex justify-center'>
                        {/* <button className='w-[3rem] h-[3rem] bg-slate-200 rounded-full' onClick={handlePrevPage}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button> */}

                        <div className="flex justify-center absolute bottom-5">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageClick(index)}
                                    className={`mx-1 w-2 h-2 rounded-full ${currentPage === index ? 'bg-lime-400' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        {/* <button className='w-[3rem] h-[3rem] bg-slate-200 rounded-full' onClick={handleNextPage}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
