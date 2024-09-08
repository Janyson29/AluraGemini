function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado pelo usuário no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
  console.log(campoPesquisa);

  // Se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    // Limpa a seção de resultados
    section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    // Converte o título e a descrição para letras minúsculas
    // para que a pesquisa seja case-insensitive
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se o campo de pesquisa está contido no título do dado
    // e exibe o resultado apenas se o campo de pesquisa for encontrado
    // no título do dado
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento HTML
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.redeSocial}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
    }

    // Constrói o HTML para cada item do resultado da pesquisa,
    // incluindo título, descrição, link para a rede social e link para mais informações
    // resultados += `
    //   <div class="item-resultado">
    //     <h2>
    //       <a href="${dado.redeSocial}" target="_blank">${dado.titulo}</a>
    //     </h2>
    //     <p class="descricao-meta">${dado.descricao}</p>
    //     <a href="${dado.link}" target="_blank">Mais informações</a>
    //   </div>
    // `;
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem
  if (!resultados) {
    resultados = "<p>Nenhum resultado encontrado</p>";
  }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}



// section.innerHTML = `
//     <div class="item-resultado">
//       <h2>
//         <a href="${dados[1].redeSocial}" target="_blank">${dados[1].titulo}</a>
//       </h2>
//       <p class="descricao-meta">${dados[1].descricao}</p>
//       <a href="${dados[1].link}" target="_blank">Mais informações</a>
//     </div>
//   `;