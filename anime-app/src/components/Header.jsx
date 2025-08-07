export default function Header({ selectedAnime }) {
    return (
        <header>
            <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
            <div className="details-overview">
                <h2>{selectedAnime.title}</h2>
                <p>
                    {selectedAnime.year} &bull; {selectedAnime.score}
                </p>
            </div>
        </header>
    );
}