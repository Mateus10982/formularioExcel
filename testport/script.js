// Substitua 'SEU_USUÁRIO' pelo seu nome de usuário do GitHub
const axios = require('axios');
const username = 'Mateus10982';

axios.get(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    // O array 'response.data' conterá informações sobre seus repositórios
    const repos = response.data;

    // Agora, você pode extrair o nome e o link de cada repositório e colocá-los em um vetor
    const repoInfo = repos.map(repo => ({
      nome: repo.name,
      link: repo.html_url
    }));

    console.log(repoInfo);
  })
  .catch(error => {
    console.error('Erro ao obter os repositórios:', error);
  });