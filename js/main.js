const apiKey = 'AIzaSyAYpNb6hvewO3i8sVtlEnxr8axuK6EO1OE';
    const customSearchId = 'a1c5c43e6016940cd';

    function realizarPesquisa() {
        const termoPesquisa = document.querySelector('#search__input input').value;

        if (termoPesquisa) {
            const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=AIzaSyAYpNb6hvewO3i8sVtlEnxr8axuK6EO1OE&cx=a1c5c43e6016940cd;`;

            document.getElementById('search-results').innerHTML = '';

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => exibirResultados(data.items))
                .catch(error => console.error('Erro na solicitação:', error));
        }
    }

    function exibirResultados(resultados) {
        const resultadosContainer = document.getElementById('search-results');

        if (resultados && resultados.length > 0) {
            resultados.forEach(resultado => {
                const resultadoElemento = document.createElement('div');
                resultadoElemento.innerHTML = `<p>${resultado.title}</p><p>${resultado.link}</p>`;
                resultadosContainer.appendChild(resultadoElemento);
            });
        } else {
            resultadosContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        }
    }

    document.querySelector('#search__input input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            realizarPesquisa();
        }
    });

    document.querySelector('#buttons button:nth-child(1)').addEventListener('click', realizarPesquisa);
