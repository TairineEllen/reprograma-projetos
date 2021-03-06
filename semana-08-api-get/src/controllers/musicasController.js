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

let musicasDoAlbuns = [];
const getAllAlbuns = (req, res) => {
    const albuns = []
    const records = musicas.map((record) => record.album).forEach((record) => {
        if (albuns.indexOf(record) === -1) {
            albuns.push(record)
        };
    });
    
    musicasDoAlbuns = albuns.map((album) => ({
        titulo: album,
        musicas: musicas.filter((musica) => musica.album == album).map((musica) => ({
            titulo: musica.titulo,
            duracao: musica.duracao
        }))
    }));
    res.send(musicasDoAlbuns);
};

const getAlbumByName = (req, res) => {
    const nome = req.params.nome;
    const nomeAlbum = musicasDoAlbuns.find((album) => album.titulo.toLowerCase() == nome.replace(/-/g, ' '));
    res.send(nomeAlbum);
}

module.exports = {
    getAllMusicas,
    getMusicaByID,
    getAllArtistas,
    getArtistaByID,
    getAllAlbuns,
    getAlbumByName
};