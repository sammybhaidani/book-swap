import H3 from "./atoms/H3";
import Input from "./atoms/Input";

export default function ReviewForm() {
    return (
        <form className="border rounded p-3 flex flex-col gap-3 mx-auto w-full">
            <H3 text={"Want to review this book?"}/>
            <Input label={"Name"} placeholder={"Name"}/>
            <div>
            <label className="text-sm" htmlFor="ratings">Score:</label>
            <select className="border rounded ml-1" id="ratings" name="ratings">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
            </select>
            </div>
            <textarea className="border rounded p-1" rows={"5"} cols={"33"} placeholder="Review"/>
            <Input type="submit" value={"Review"}/>
        </form>
    )
}