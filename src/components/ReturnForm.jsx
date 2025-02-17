import { useState } from "react";
import H2 from "./atoms/H2";
import Input from "./atoms/Input";

export default function ReturnForm({id, name, handlePerson}) {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

     const data = {
        email: email
    }

    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/return/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.errors?.email && email) {
                setEmailError(data.errors.email[0])
            } else if(data.errors?.email && !email) {
                setEmailError(data.errors.email[1]);
            } else {
                handlePerson(null)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border rounded p-3 mx-auto w-full">
            <H2 text={"Want to return this book?"}/>
            <Input label={`${name}'s email`} id={"email"} placeholder={"Email"} handleInput={handleEmail} error={emailError}/>
            <Input type={"submit"} value={"Return"}/>
        </form>
    )
}