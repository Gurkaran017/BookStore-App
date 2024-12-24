import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
import { useAuth } from "../context/AuthProvider";
function Freebook() {
  const [book, setBook] = useState([]);
  const { searchResults , search , setSearch }= useAuth();
  useEffect(() => {
    console.log(searchResults)
    const getBook = async () => {
      try {

        if (!searchResults || searchResults.length === 0) {
          console.log("Hit 1")
          const res = await axios.get("http://localhost:4001/book");
          console.log("res:", res);
          const data = res.data.filter((data) => data.category === "Free");
          console.log(data);
          setBook(data);
        }
        else{
          console.log("Hit 2")
          console.log("sex",searchResults);
          const res = searchResults.filter((item) => item.category === "Free");
          console.log("Filtered Books:", res);
          setBook(res);
        }
        
      } catch (error) {
        console.error("Error filtering books:", error);
      }
    };

    console.log("Hit 3")
  
    getBook();
  }, [searchResults , search]);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Explore a wide range of courses available for free, designed to help you enhance your skills and knowledge. Whether you're looking to improve your career, learn something new, or simply explore different subjects, our free courses offer you the opportunity to learn at your own pace. Start your learning journey today and unlock new possibilities for personal and professional growth!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Freebook;
