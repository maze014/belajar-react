import Header from './Header';

export default function Box2({ selectedAnime }) {
    return (
        <div className="details">
            <Header selectedAnime={selectedAnime} />
            <section>
                <p>
                    <em>{selectedAnime.synopsis}</em>
                </p>
            </section>
        </div>
    );
}