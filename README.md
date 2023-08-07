# Store Manager API

Projeto desenvolvido no módulo de Backend da Trybe, onde foi criado uma API RESTful em Node, de gerenciamento de vendas em que será possível criar, visualizar, deletar e atualizar produtos e vendas, utilizando a arquitetura MSC junto com Express e MySQL.

## Instalação

<details>
  
 <summary><strong>👉 Com Docker</strong></summary> 
  
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**
  
  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
  - A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.
  
  > :information_source: Opção 1: Use o comando `docker-compose run --rm node npm test`, ou para acessar o container e executar lá:
  
  > :information_source: Opção 2: Use o comando `docker exec -it store_manager bash` e sigas passos abaixo.
  
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  > :information_source: Instale as dependências [**Caso existam**] com `npm install` dentro do container store_manager
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.
  
  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
</details>

<details>
  <summary><strong>👉 Sem Docker</strong></summary>
  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **⚠️ **Atenção**** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.
  - **⚠️ **Atenção**** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito na chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na versão `16.14`, a versão na qual este projeto foi testado.
  - Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo [`env.example`](./env.example) e o modifique de acordo com a necessidade.
  - Coloque `env $(cat .env)` antes de qualquer comando que for executar, por exemplo:
  
  ```bash
  env $(cat .env) npm run dev
  ```
</details>

## Endpoints
- <strong>GET `/products` </strong>

<details>
  <summary>Lista todos os produtos cadastrados com o <code>status 200</code></summary>

  ```json
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    }
    /* ... */
  ]
  ```
</details>

<br>

- <strong>GET `/products/:id` </strong>

<details>
  <summary>Lista um produto específico baseado no id passado na URL com o <code>status 200</code></summary>
  
  ```json
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ```
</details>

<details>
  <summary>Retorna uma mensagem de erro com o <code>status 404</code> caso o produto não esteja cadastrado</summary>
  
  ```json
    { "message": "Product not found" }
  ```
</details>

<br>

- <strong> POST `/products`</strong> - Cadastra produtos

<details>
  <summary>O corpo da requisição deve seguir o seguinte formato:</summary>

  ```json
    {
      "id": 4,
      "name": "ProdutoX"
    }
  ```
</details>
<details>
  <summary>Se a requisição não tiver o campo "name", o resultado retornado deverá ser conforme exibido abaixo, com um <code>status 400</code></summary>

  ```json
  { "message": "\"name\" is required" }
  ```
</details>
<details>
  <summary>Se a requisição não tiver "name" com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um <code>status 422</code></summary>

  ```json
  { "message": "\"name\" length must be at least 5 characters long" }
  ```
</details>
<details>
  <summary>Se o produto for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um <code>status 201:</code></summary>

  ```json
  {
    "id": 4,
    "name": "ProdutoX"
  }
  ```
</details>

<br> 

- <strong> POST `/sales`</strong> - Cadastra vendas


<details>
  <summary>O corpo da requisição deverá seguir o formato abaixo:</summary>

  ```json
    [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  ```
</details>
<details>
  <summary>Validações</summary>
  
  - Se algum dos itens da requisição não tiver o campo `productId`, retorna status http `400`:

  ```json
  { "message": "\"productId\" is required" }
  ```


  - Se algum dos itens da requisição não tiver o campo `quantity`, retorna status http `400` :

  ```json
  { "message": "\"quantity\" is required" }
  ```

  - Se a requisição tiver algum item em que o campo `quantity` seja menor ou igual a zero, retorna status http `422`:

  ```json
  { "message": "\"quantity\" must be greater than or equal to 1" }
  ```

  - Se o campo `productId` do item da requisição não existir no banco de dados, retorna status http `404`:

  ```json
  { "message": "Product not found" }
  ```

  - Se a requisição tiver algum item cujo campo `productId` não existe no banco de dados, retorna status http `404`:

  ```json
  { "message": "Product not found" }
  ```
</details>
<details>
  <summary>Se a venda for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http <code>201</code>:</summary>
   - 

  ```json
  {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
  ```
</details>

<br> 

- <strong>GET `/sales`</strong>

<details>
  <summary>Lista vendas</summary>

- Exemplo de retorno:

  ```json
  [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```
</details>

<br>

- <strong>GET `/sales/:id`</strong>

<details>
  <summary>Se a venda for inexistente retorna <code>status 404</code>:</summary>

  ```json
  { "message": "Sale not found" }
  ```
</details>
<details>
  <summary>
    Ao listar uma venda com sucesso o resultado retorna <code>status 200</code>:
  </summary>

  ```json
  [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```
</details>

- <strong>PUT `/products/:id`</strong> - Atualiza produto

<details>
  <summary>O corpo da requisição deverá seguir o formato abaixo:</summary>

  ```json
    {
      "name": "Martelo do Batman"
    }
  ```
</details>
<details>
  <summary>Se o produto for inexistente retorna <code>status 404</code>:</summary>

  ```json
      { "message": "Product not found" }
  ```
</details>
<details>
  <summary>Se o produto for alterado com sucesso, retorna <code>status 200</code>:</summary>

  ```json
    {
      "id": 1,
      "name": "Martelo do Batman"
    }
  ```
</details>

<br>

## Pastas/arquivos desenvolvidos por mim

```bash
  src/controllers
  src/middlewares
  src/models
  src/routers
  src/services
  src/services/validations
  src/app
  tests/
```
