import H2 from "./atoms/H2";
import Input from "./atoms/Input";

export default function ReturnForm({name}) {

    
    return (
        <form className="flex flex-col gap-3 border rounded p-3 mx-auto w-full">
            <H2 text={"Want to return this book?"}/>
            <Input label={`${name}'s email`} id={"email"} type={"email"} placeholder={"Email"}/>
            <Input type={"submit"} value={"Return"}/>
        </form>
    )
}