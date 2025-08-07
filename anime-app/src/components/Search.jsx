import { useState } from "react";

export default function Search({ animes }) {
    const [query, setQuery] = useState('');

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <p className="search-results">
                Found <strong>{animes.length}</strong> results
            </p>
        </div>
    );
}