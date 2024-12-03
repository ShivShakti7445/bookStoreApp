import React from 'react'
import list from "../../public/freebook_list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        const filterData=freebook_list.filter( (data)=>data.price===0)
        return (
        <> 
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className="font-semibold text-xl pb-2">
                    Free Offered Courses  
                </h1>
                <p>
                At BookStore, we offer free courses to make learning accessible for all. From book discussions to creative writing and research tips,
                our courses are designed to inspire and educate. Join us and explore new ideas—completely free!
                </p>
                </div>
                <div> 
                <Slider {...settings}>
                {filterData.map((item) => (
                    <Cards item ={item} key ={item.id} />
                ))}
                </Slider>
            </div>
        </div>
     </>
  )
}

export default Freebook
