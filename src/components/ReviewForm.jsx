import { useEffect, useState } from "react";
import H3 from "./atoms/H3";
import Input from "./atoms/Input";
import FormError from "./atoms/FormError";

export default function ReviewForm({id, handleReviewCount, reviewCount, handleReviewSubmit}) {

    const [name, setName] = useState("");
    const [rating, setRating] = useState(null);
    const [review, setReview] = useState("");
    const [nameError, setNameError] = useState("");
    const [reviewError, setReviewError] = useState("");
    const [ratingError, setRatingError] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    useEffect(clearForm, [isFormSubmitted]);

    const data = {
        name: name,
        rating: rating,
        review: review,
        book_id: id
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleRating(e) {
        setRating(e.target.value);
    }

    function handleReview(e) {
        setReview(e.target.value);
    }

    function clearForm() {
        setIsFormSubmitted(true);
        setName("");
        setReview("");
        setRating(1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://book-swap-api.dev.io-academy.uk/api/reviews', requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data?.errors) {
                setNameError(data.errors.name);
                setReviewError(data.errors.review);
                rating != '-' && setRatingError(data.errors.rating);
            }
            
            clearForm();
           
            // handleReviewCount(reviewCount + 1)
            // handleReviewSubmit(true);
        })

    }

     return (
        <form onSubmit={handleSubmit} className="border rounded p-3 flex flex-col gap-3 mx-auto w-full">
            <H3 text={"Want to review this book?"}/>
            <Input label={"Name"} placeholder={"Name"} handleInput={handleName} error={nameError}/>
            <div>
            <label className="text-sm" htmlFor="ratings">Score:</label>
            <select onChange={handleRating} className="border rounded ml-1" id="ratings" name="ratings">
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {ratingError && <FormError text={ratingError}/>}
            </div>
            <textarea onChange={handleReview} className="border rounded p-1" rows={"5"} cols={"33"} placeholder="Review"/>
            {reviewError && <FormError text={reviewError}/>}
            <Input type="submit" value={"Review"}/>
        </form>
    )
}