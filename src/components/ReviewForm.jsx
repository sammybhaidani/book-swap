import H3 from "./atoms/H3";
import Input from "./atoms/Input";

export default function ReviewForm() {
    return (
        <div>
            <H3 text={"Want to review this book?"}/>
            <Input label={"Name"} placeholder={"Name"}/>
            <label for="ratings">Score:</label>
                <select id="ratings" name="ratings">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                </select>
        </div>
    )
}