import { useEffect, useState } from "react";
import H2 from "./atoms/H2";
import Input from "./atoms/Input";

export default function ClaimForm({id, handlePerson}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [nameError, setNameError] = useState("");
    // const [emailErrors, setEmailErrors] = useState([]);
    const [emailError, setEmailError] = useState("");
    // const [requireEmailError, setRequireEmailError] = useState("");
   
    const data ={
        name: name,
        email: email
    };

    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/claim/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            data.errors?.name ? setNameError(data.errors.name) : setNameError("");

            if (data.errors?.email) {
                email ? setEmailError(data.errors.email[0]) : setEmailError(data.errors.email[1]);
            } else {
                setEmailError("");
            }

            if (!(data.errors?.name && data.errors?.email)) {
                handlePerson(name);
            }
          
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border rounded p-3 mx-auto w-full">
            <H2 text={"Want to claim this book?"}/>
            <Input label={"Name"} id={"name"} placeholder={"Name"} handleInput={handleName} error={nameError}/>
            <Input label={"Email"} id={"email"} placeholder={"Email"}
            handleInput={handleEmail} error={emailError}/>
            <Input type={"submit"} value={"Claim"}/>
        </form>
    )
}