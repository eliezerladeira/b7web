async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    // carrega os posts do link informado
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = '';

        for (let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`;
            
            // += remove tudo da memória e insere tudo novamente a cada loop
            postArea.innerHTML += postHtml;
        }
    } else {
        postArea.innerHTML = "Nenhum post para exibir";
    }
}

// adiciona o post
async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                /*
                title: title,
                body: body,
                */
                title,
                body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

// evento de clique no botão
document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title && body) {
        addNewPost(title, body);
    } else {
        alert("Preencha todos os campos!");
    }
});

// executa assim que a página é carregada
readPosts();