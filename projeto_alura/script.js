const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})
 
/*DESAFIO ALURA*/ 
 /*
document.addEventListener("DOMContentLoaded", () => {
    const playlistButton = document.querySelector(".section-playlist__button");

    if (playlistButton) {
        playlistButton.addEventListener("click", async () => {
            const nomePlaylist = prompt("Digite o nome da nova playlist:");

            if (nomePlaylist) {
                const response = await fetch("http://localhost:3000/playlists", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nome: nomePlaylist })
                });

                if (response.ok) {
                    const novaPlaylist = await response.json();
                    alert(`Playlist "${novaPlaylist.nome}" criada com sucesso!`);
                } else {
                    alert("Erro ao criar a playlist.");
                }
            }
        });
    }
});
*/