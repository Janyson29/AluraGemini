function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa,
    // incluindo título, descrição, link para a rede social e link para mais informações
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