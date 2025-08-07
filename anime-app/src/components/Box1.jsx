import ListBox1 from './ListBox1';

export default function Box1({ animes, onSelectedAnime }) {
    return (
        <ul className="list list-anime">
            {animes?.map((anime) => (
                <ListBox1 key={anime.mal_id} anime={anime} onSelectedAnime={onSelectedAnime} />
            ))}
        </ul>
    );
}