export default function GenreFilter({genres, handleGenre}) {
    return(
        <div>
            <label htmlFor="genre">Filter by genre:</label>
            <select id="genre" onChange={handleGenre}>
                <option value="">None selected</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </div>
    )
}