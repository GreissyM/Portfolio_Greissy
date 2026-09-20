import { useEffect, useRef, useState } from "react";

function InstagramCarousel({ posts }) {
  const [current, setCurrent] = useState(0);
  const instagramContainer = useRef(null);

  useEffect(() => {
    const loadInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    const renderInstagram = () => {
      if (!instagramContainer.current) return;

      // Limpiamos la publicación anterior
      instagramContainer.current.innerHTML = "";

      // Creamos el blockquote que necesita Instagram
      const blockquote = document.createElement("blockquote");

      blockquote.className = "instagram-media";
      blockquote.setAttribute(
        "data-instgrm-permalink",
        posts[current]
      );
      blockquote.setAttribute("data-instgrm-version", "14");

      blockquote.style.width = "100%";
      blockquote.style.maxWidth = "540px";
      blockquote.style.minWidth = "326px";
      blockquote.style.margin = "0 auto";

      instagramContainer.current.appendChild(blockquote);

      loadInstagram();
    };

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      renderInstagram();
    } else {
      const script = document.createElement("script");

      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      script.onload = renderInstagram;

      document.body.appendChild(script);
    }
  }, [current]);

  const previousPost = () => {
    setCurrent((prev) =>
      prev === 0 ? posts.length - 1 : prev - 1
    );
  };

  const nextPost = () => {
    setCurrent((prev) =>
      prev === posts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="instagram-carousel">

      {/* <button
        className="instagram-carousel-arrow instagram-carousel-arrow-left"
        onClick={previousPost}
        aria-label="Publicación anterior"
      >
        ‹
      </button> */}

      <div className="instagram-carousel-window">
        <div
          ref={instagramContainer}
          className="instagram-carousel-slide"
        />
      </div>

      {/* <button
        className="instagram-carousel-arrow instagram-carousel-arrow-right"
        onClick={nextPost}
        aria-label="Siguiente publicación"
      >
        ›
      </button> */}

      <div className="instagram-carousel-dots">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`instagram-carousel-dot ${
              index === current ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir a publicación ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default InstagramCarousel;