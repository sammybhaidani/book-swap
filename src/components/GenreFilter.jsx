export default function GenreFilter({genres, handleGenre}) {
    return(
        <div className="flex flex-col md:flex-row gap-3 items-center sm:items-start">
            <label htmlFor="genre">Filter by genre:</label>
            <select className="w-3xs border rounded p-1" id="genre" onChange={handleGenre}>
                <option value="">None selected</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </div>
    )
}