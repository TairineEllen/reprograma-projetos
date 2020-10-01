const musicas = require('../models/musicas.json');


const getAllMusicas = (req, res) => {     
    res.send(musicas);     
};

const getMusicaByID = (req, res) => {
    const id = req.params.id;
    const foundID = musicas.find((musica) => musica.id == id);
    res.send(foundID);
};

let artistasObject = [];
const getAllArtistas = (req, res) => {
    const artistas = [];
    musicas.forEach((musica) => {
        if (artistas.indexOf(musica.artista) === -1) {
            artistas.push(musica.artista)            
        };
    });
    
    artistasObject = artistas.map((artista) => ({
        id: artistas.indexOf(artista) + 1,
        artista
    }))
    
    res.send(artistasObject);
};

const getArtistaByID = (req, res) => {
    const id = req.params.id;
    const foundID = artistasObject.find((artista) => artista.id == id);
    const foundArtista = foundID.artista;
    const musicasArtista = musicas.filter((musica) => musica.artista == foundArtista)
    res.send(musicasArtista);
};

// const getAlbum = (req, res) => {
//     const albuns = []
//     const records = musicas.map((record) => record.album).forEach((record) => {
//         if (albuns.indexOf(record) === -1) {
//             albuns.push(record)
//         };
//     });
 
//     res.send(musicasAlbum);

// }

module.exports = {
    getAllMusicas,
    getMusicaByID,
    getAllArtistas,
    getArtistaByID
};