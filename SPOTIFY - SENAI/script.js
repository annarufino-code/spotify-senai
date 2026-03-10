document.addEventListener("DOMContentLoaded", function () {

    const artistsData = [
        { name: "Henrique & Juliano", image: "img/artista-henrique-juliano.jpg"},
        { name: "Jorge & Mateus", image: "img/artista-jorge-mateus.jpg" },
        { name: "Zé Neto & Cristiano", image: "img/artista-ze-neto.jpg" },
        { name: "Gusttavo Lima", image: "img/artista-gustavo-limma.jpg" },
        { name: "Luan Santana", image: "img/artista-luan-santana.jpg" },
        { name: "Matheus & Kauan", image: "img/artista-mateus-kauan.jpg" }
    ];

    const albumsData = [
        { name: "White Noise", artist: "Sleepy John", image: "img/album-white-noise.jpg" },
        { name: "O Céu Explica Tudo", artist: "Henrique & Juliano", image: "img/album-ceu-explica.jpg" },
        { name: "Vida Loka", artist: "Racionais", image: "img/album-vida-loka.jpg" },
        { name: "HIT ME HARD AND SOFT", artist: "Billie Eilish", image: "img/album-hit-me.jpg" },
        { name: "CAJU", artist: "Liniker", image: "img/album-caju.jpg" },
        { name: "Escândalo Íntimo", artist: "Luísa Sonza", image: "img/album-escandalo.jpg" }
    ];

    const artistGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albums-grid");

    artistsData.forEach(artist => {
        const card = document.createElement("div");
        card.classList.add("artist-card");

        card.innerHTML = `
                <div class="card-image">
        <img src="${artist.image}" alt="${artist.name}">
        <button class="play-btn">
            <i class="fa-solid fa-play"></i>
        </button>
    </div>
    <h4>${artist.name}</h4>
    <p>Artista</p>
        `;

        artistGrid.appendChild(card);
    });

    albumsData.forEach(album => {
        const card = document.createElement("div");
        card.classList.add("album-card");

        card.innerHTML = `
          <div class="card-image">
        <img src="${album.image}">
        <button class="play-btn">
            <i class="fa-solid fa-play"></i>
        </button>
    </div>
    <h4>${album.name}</h4>
    <p>${album.artist}</p>
        `;

        albumsGrid.appendChild(card);
    });

});