# Passo a Passo

## 🛠️ Passo a Passo

✅ **Instalação de dependencias:**: com o yarn, foi instalado as dependencias e biblioteecas que seriam usadas e iniciado o projeto.

✅ **Criação do Servidor**: No arquivo "src/index.ts" foi iniciado o servidor e aplicado middlewares de segurança: 

- **Helmet**: Protege contra vulnerabilidades de segurança.
- **Morgan**: Faz o registro (log) das requisições HTTP para facilitar o monitoramento.
- **CORS**: Permite que o servidor aceite requisições de outras origens (domínios), controlando o compartilhamento de recursos.


✅ **Criação do Service de chamada da API fornecida**: Foi criado um serviço que faz requisições de dados usando Axios por meio da API fornecida. Como o serviço faz apenas requisições do tipo ``GET``, o uso de ``Axios`` é necessário, pois é uma biblioteca popular que simplifica requisições HTTP no navegador e no Node.js, facilitando o trabalho com APIs.


✅ **Criação do Controller de chamada da API fornecida**: Dessa forma foi criado o controller para ser usada na chamada da resposta da API.


✅ **Configuração do Router para Integração com a API de Filmes via Rota `/filmes`**: O router foi criado para fazer chamadas à API usando a rota `/filmes`. Essa rota cuida das requisições de dados sobre filmes, utilizando o `Axios` para fazer as requisições HTTP de forma simples e eficiente. Com isso, o router facilita o acesso dos clientes aos dados da API de maneira prática e organizada.


✅ **Adicionado .gitignore**: Para controle de versão sem subir o Node_Modules respeitando as boas praticas





