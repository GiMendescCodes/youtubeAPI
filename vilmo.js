import axios from 'axios';

const ACCESS_TOKEN = '249a1a3d383d31ccac7081a56a11ea53';

export const buscarVideosVimeo = async (query) => {
  try {
    const resposta = await axios.get('https://api.vimeo.com/videos', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      params: {
        query: query,
        per_page: 10,
      },
    });
    return resposta.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
