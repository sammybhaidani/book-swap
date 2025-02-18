export default function GenreFilter({genres}) {
    return(
        <div>
            <label htmlFor="genre">Filter by genre:</label>
            <select id="genre">
                <option value="">None selected</option>
            </select>
        </div>
    )
}