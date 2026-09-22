function SpotifyCarousel({ episodes }) {
    return (
        <div className="spotify-episodes">
            {episodes.map((episode) => (
                <iframe
                    key={episode}
                    src={episode}
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            ))}
        </div>
    );
}

export default SpotifyCarousel;