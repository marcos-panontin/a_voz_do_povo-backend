# API A Voz do Povo

Bem-vindo (a) à API A Voz do Povo, que fornece acesso às respostas armazenadas em um banco de dados MySQL relacionadas à aplicação FullStack A Voz do Povo.

## Visão Geral

A aplicação A Voz do Povo é uma aplicação FullStack que tem como objetivo coletar respostas da comunidade sobre questões populares, como "Quem veio primeiro, o ovo ou a galinha?", armazenar essas respostas em um banco de dados MySQL e exibir as estatísticas sobre o que a maioria das pessoas pensa sobre essas questões.

## Endpoints

A API oferece os seguintes endpoints:

- `/answers`: Retorna todas as respostas coletadas.
- `/answers/:id`: Retorna a contabilização das respostas coletadas para uma pergunta específica, separadas pela opção selecionada. O `:id` na URL édeve ser substituído pelo ID da pergunta desejada.
- `/users`: Retorna os ids de todos os usuários que responderam perguntas.

## Links Importantes

- **API:** [A Voz do Povo API](https://a-voz-do-povo-api.onrender.com/)
- **Aplicação Frontend:** [A Voz do Povo Frontend](https://marcos-panontin.github.io/a_voz_do_povo/)
- **Repositório do Frontend:** [GitHub - A Voz do Povo Frontend](https://github.com/marcos-panontin/a_voz_do_povo/)

## Como Usar

1. Faça solicitações HTTP para os endpoints fornecidos para acessar as respostas.
2. Consulte os resultados das respostas para análises e estatísticas.

## Tecnologias usadas

- Node.js
- Express
- MySQL

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se você tiver sugestões de melhorias ou encontrar problemas, por favor, abra uma [issue](https://github.com/marcos-panontin/a_voz_do_povo/issues) no repositório do Frontend.

## Licença

Este projeto está licenciado sob a Licença MIT.
