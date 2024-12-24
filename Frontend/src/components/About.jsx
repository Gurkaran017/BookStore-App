import React from 'react'
import image1 from "../../public/Image1.jpg.jpg";
import image2 from "../../public/Image2.jpg.jpg";
import image3 from "../../public/Image3.jpg.jpg";
function About() {
  return (
    <>
    <div className='flex items-center justify-center flex-col py-20 px-10 gap-6'>
    <div>
      <img src={image2}></img>  
    </div>
    <div>
      <p>
      Dear readers,

We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.

We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems. Apart from all this, we also provide great deals and discounts on our products.

All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookswagon family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
      </p>
      <p>
      {/* <h3>Payments</h3> */}
      <br>
</br>
<strong>Credit Card Payments:</strong>
<br>
</br>
We accept all VISA and MasterCard, both Indian and International. Click on the "BUY" button and select "Pay By Credit Card" on the following page. To use American Express Cards please choose the "Pay by Net banking" option. We also accept general mode of payments.

We also accept general mode of payments.
      </p>
    </div>
    <div>
      <img src={image3}></img>  
    </div>
    <p>
      {/* <h3>Payments</h3> */}
      <br>
</br>
<strong>Contact Us</strong>
<br>
</br>
<strong>Book Haven Online Store</strong>
<br>
</br>
123, Knowledge Street,
<br>
</br>
Booktown, Sector 21,
<br>
</br>
New Delhi, Delhi - 110021,
<br>
</br>
India.
      </p>
    </div>
    </>
  )
}

export default About
