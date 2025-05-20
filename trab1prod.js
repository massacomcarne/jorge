document.addEventListener('DOMContentLoaded', function() {
    const produtosListaElement = document.getElementById('produtos-lista');
    const formAdicionarProduto = document.getElementById('form-adicionar-produto');
    const formEditarProduto = document.getElementById('form-editar-produto');
    const cancelarEdicaoBotao = document.getElementById('cancelar-edicao');

    let produtos = [
        { id: 1, nome: 'Cesto de Vime', descricao: 'Cesto artesanal feito com vime local.', preco: 19.99 },
        { id: 2, nome: 'Azeite Virgem Extra', descricao: 'Azeite de alta qualidade da região.', preco: 9.50 },
        { id: 3, nome: 'Bordado Tradicional', descricao: 'Pano bordado à mão com motivos tradicionais.', preco: 25.00 }
    ];

    let produtoAEditar = null;

    function listarProdutos() {
        produtosListaElement.innerHTML = '';
        produtos.forEach(produto => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: €${produto.preco.toFixed(2)}</p>
                <div class="produto-acoes">
                    <button class="editar" data-id="${produto.id}">Editar</button>
                    <button class="remover" data-id="${produto.id}">Remover</button>
                </div>
            `;
            produtosListaElement.appendChild(listItem);
        });

        // Adicionar event listeners aos botões após a listagem
        document.querySelectorAll('#produtos-lista .editar').forEach(botao => {
            botao.addEventListener('click', editarProdutoForm);
        });

        document.querySelectorAll('#produtos-lista .remover').forEach(botao => {
            botao.addEventListener('click', removerProduto);
        });
    }

    function adicionarProduto(event) {
        event.preventDefault();
        const nome = document.getElementById('nome-produto').value;
        const descricao = document.getElementById('descricao-produto').value;
        const preco = parseFloat(document.getElementById('preco-produto').value);

        if (nome && descricao && !isNaN(preco)) {
            const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
            const novoProduto = { id: novoId, nome: nome, descricao: descricao, preco: preco };
            produtos.push(novoProduto);
            listarProdutos();
            formAdicionarProduto.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    }

    function editarProdutoForm(event) {
        const produtoId = parseInt(event.target.dataset.id);
        produtoAEditar = produtos.find(produto => produto.id === produtoId);}

        if (produtoAEditar) {
            document.getElementById('editar-id-produto').value = produtoAEditar.id;
            document.getElementById('editar-nome-produto').value = produtoAEditar.nome;
            document.getElementById('editar-descricao-produto').value = produtoAEditar.descricao;
            document.getElementById('editar-preco-produto').value = produtoAEditar.preco.toFixed(2);}}