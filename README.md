# Desafio Mesha Tecnologia :partly_sunny:

## Projeto desenvolvido durante o processo seletivo da Mesha Tecnologia

## Tecnologias utilizadas na construção do projeto
- Vite
- React
- Redux
- Styled Components
- Context API
- React Hooks
- React-Switch
- React-router-dom

## Para rodar o projeto localmente:
1. Clone o repositório
  * `git clone git@github.com:AndersonSilva94/desafio-mesha-tecnologia.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd desafio-mesha-tecnologia`

2. Instale as dependências:
  * `npm install`

3. Você precisará de três variáveis de ambiente
  * Primaramente, crie um arquivo `.env` na raiz do projeto;
  * Em seguida entre nos seguintes links e siga os passos para criar um usuário:
    * `https://openweathermap.org/current`
    * `https://rapidapi.com/apidojo/api/shazam`
  * Após a criação, é só buscar as chaves da api de cada servidor e host do shazam
  * No arquivo `.env`, defina as variáveis (prefixo exigido pelo Vite):
    * `VITE_API_KEY=[apiKeyWeather]`
    * `VITE_API_SHAZAM=[apiKeyShazam]`
    * `VITE_HOST_SHAZAM=[hostShazam]`

  4. Rode a aplicação:
   * `npm start` 

## Objetivo:

- Consumo de API externas, à partir de documentação
- Salvar as informações somente no storage do navegador (Não utilizar backend e/ou banco de dados)
- Estrutura de projeto (Componentes, etc)
- O projeto deve ser feito em REACT

## Descrição do projeto

Dada uma localização (Cidade, latitude, longitude, etc) a aplicação deverá buscar na API de tempo (Weather API ou afins) a temperatura relativa da localização e assim que retornada a resposta deverá ser solicitada para à API de músicas (Shazam API ou afins) a lista de músicas recomendadas para o clima atual.

- Caso a temperatura seja maior que 32 graus, deverá retornar Rock;
- Caso a temperatura seja menor que 32 e maior 24, deverá retornar Pop;
- Caso a temperatura seja menor que 24 e maior que 16, devera retornar Classica;
- E caso a temperatura seja menor que 16, deverá retornar Lofi.

Assim que retornado à lista de música, caso seja do agrado da pessoa, poderá ser salva no storage do navegador com a data de busca, a lista de músicas, à temperatura, à cidade e a categoria das músicas.

Deverá haver uma página mostrando a listagem das músicas por data salva no storage.

As listas podem ser deletadas.

---
:keyboard: com :purple_heart: por [Anderson Silva (Andy)](https://www.linkedin.com/in/andssilva/) 😊
