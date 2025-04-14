import axios from 'axios';

const API_KEY = 'AIzaSyC4-r0Cj-pCQK2miNINU3onY7-nol0_0Xc';

export const buscarVideos = async (query) => {
  try {
    const pesquisa = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY,
      },
    });
    return pesquisa.data.items;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do YouTube:', erro);   
    throw erro;
  }
};
