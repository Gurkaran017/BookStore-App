import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Course() {
  const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);

  const { searchResults  }= useAuth();
  useEffect(() => {
    console.log(searchResults)
    const getBook = async () => {
      try {

        if (!searchResults || searchResults.length === 0) {
          console.log("Hit 1")
          const res = await axios.get("http://localhost:4001/book");
          console.log("res:", res);
          console.log(res.data);
          setBook(res.data);
        }
        else{
          console.log("Hit 2")
          console.log("searchResults",searchResults);
          const res = searchResults.filter((item) => item.category === "Free");
          console.log("Filtered Books:", res);
          setBook(searchResults);
        }
        
      } catch (error) {
        console.error("Error filtering books:", error);
      }
    };

    console.log("Hit 3")
  
    getBook();
  }, [searchResults]);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          We're thrilled to welcome you to our platform, where you can explore, learn, and grow every day. Whether you're just getting started or looking to deepen your knowledge, you'll find something to inspire you. Dive into the world of learning and take the first step toward achieving your goals. We’re here to support you every step of the way as you embark on this exciting journey!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
