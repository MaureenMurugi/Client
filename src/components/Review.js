import { useState } from "react";

function Review() {
    const [formData, setformData] = useState({
        review: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/registers", {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(formData)
        })
      }

    function handleChange(e) {
        setformData ({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }
    return (
        <>
        <div className="container-fluid">
            <h2>Drop a Review</h2>

            <form id="my-form">
                <div className="contact-head">
                  <textarea onChange={handleChange} id="message" cols="60" rows="6" placeholder="Review.." required></textarea>
                </div>
                <div className="button-form">
                    <button onClick={handleSubmit} className="register">Post</button>
                </div>

            </form>
        </div>
        </>
    );


}
   
 

export default Review;