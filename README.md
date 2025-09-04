# InsanyShop

InsanyShop é um e-commerce implementado como parte de um desafio técnico promovido pela [Insany](https://www.insany.design/pt-BR).

---

## Tecnologias Utilizadas
- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ariakit](https://ariakit.org/) (para acessibilidade)
- Styled Components

---

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/cristhian-fs/insany-shop.git
cd insany-shop
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Ajuste o valor para a URL base da API

```env
NEXT_PUBLIC_API_URL=https://sua-api.com
```

> Para o teste técnico, a url disponibilizada foi `api.insany.co`

Rode o servidor de desenvolvimento:

```bash
npm run dev
# ou 
yarn dev
```

Acesse no navegador:

```
https://localhost:3000
```

---

## Scritps disponiveis
- `dev` - Roda o servidor de desenvolvimento
- `build` - Cria o build de produção
- `start` - Roda a aplicação em modo de produção
- `lint` - Roda análise de lint
- `format` - Formata os arquivos com o linter (Biome)

---

## Funcionalidades implementadas

- Listagem de produtos com paginaçao
- Busca por produtos
- Carrinho de compras (com persistência em `localStorage`)
- Responsividade e acessibilidade (a11y)

---

## Observações

- O projeto foi desenvolvido como parte de um teste técnico.
- Estrutura de branches segue boas práticas de Git Flow (feat/, chore/, etc.).
- Pull Requests documentam a evolução das funcionalidades.
