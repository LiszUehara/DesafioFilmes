# Rota Filmes

## 🏃 Executando

Para executar a aplicação, siga estas etapas:

1. Baixando o Repositorio [LiszUehara](https://github.com/LiszUehara/DesafioFilmes):
```bash
     git clone
        https://github.com/LiszUehara/DesafioFilmes
```

2. Instalando as dependências:
```bash
    $ npm install
```

3. Executando com npm:
```bash
      npm run dev
```

4. Executando com yarn:
```bash
      yarn dev
```

## 🛠️ Passo a Passo

✅ **Escolha de Escopo de Projeto:**: A escolha do Typescript se deu devido a essa linguagem carrregar todos os beneficos do javascript alem de possuir uma tipagem eficiente e esta mais proxima dos padrões de organização de projetos.


✅ **Instalação de dependencias:**: com o yarn, foi instalado as dependencias e biblioteecas que seriam usadas e iniciado o projeto.

✅ **Criação do Servidor**: No arquivo "src/index.ts" foi iniciado o servidor e aplicado middlewares de segurança: 

- **Helmet**: Protege contra vulnerabilidades de segurança.
- **Morgan**: Faz o registro (log) das requisições HTTP para facilitar o monitoramento.
- **CORS**: Permite que o servidor aceite requisições de outras origens (domínios), controlando o compartilhamento de recursos.


✅ **Criação do Service de chamada da API fornecida**: Foi criado um serviço que faz requisições de dados usando Axios por meio da API fornecida. Como o serviço faz apenas requisições do tipo ``GET``, o uso de ``Axios`` é necessário, pois é uma biblioteca popular que simplifica requisições HTTP no navegador e no Node.js, facilitando o trabalho com APIs.


✅ **Criação do Controller de chamada da API fornecida**: Dessa forma foi criado o controller para ser usada na chamada da resposta da API.


✅ **Configuração do Router para Integração com a API de Filmes via Rota `/filmes`**: O router foi criado para fazer chamadas à API usando a rota `/filmes`. Essa rota cuida das requisições de dados sobre filmes, utilizando o `Axios` para fazer as requisições HTTP de forma simples e eficiente. Com isso, o router facilita o acesso dos clientes aos dados da API de maneira prática e organizada.


✅ **Adicionado .gitignore**: Para controle de versão sem subir o Node_Modules respeitando as boas praticas


✅ **Adicionado versão compilada**: O código JavaScript compilado é executado mais rapidamente do que o TypeScript, que precisa ser transpilado.
 O JavaScript é o formato executável em navegadores e Node.js, enquanto o TypeScript deve ser convertido



### Propriedades

* **
🚀 **Lucro**: Inicialmente, foi criada a função `textToNumber`, responsável pela conversão de um valor em texto para numérico. Esta função será utilizada para converter o orçamento e a bilheteria em números. Nessa função, inicialmente são removidos os símbolos `$` e os espaços em branco, para então verificar a qual casa decimal o valor pertence. Por exemplo, se o valor contiver a palavra `bilhão`, ela será removida e o valor será multiplicado por 1.000.000.000. O mesmo ocorre para valores que contenham `milhões`, multiplicando o valor por 1.000.000.
Em seguida, foi criada a função `getLucro`, que realiza o cálculo do lucro a partir da bilheteria e do orçamento, e depois o converte para o formato de string adequado.

🚀 **Premiação de maior relevância:**: Na função `getMaiorPremiacao` o array de premios é percorrido atraves de um for, onde toda vez que uma premiação possui relevancia maior que a armazenada na variavel `maiorPremiacao` a mesma é subtituida, onde maiorPremiacao tem valor inicial sendo o primeiro elemento do array de premios.  


🚀 **Duração em Segundos:**: Para realizar o calculo da duração do filme em segundos, foi criada a função `getDuracaoSegundos` a qual através da duração de um filme (que está em minutos), obtida do objeto original de filmes, converte o mesmo em segundos multiplicando por 60. 

🚀 **Nota IMDb:**: Na função `getNotaIMDB` é utilizado o metodo `find` no array de `ratings` (tal array esta presente do objeto original de filmes) para se encontrar a nota na `fonte` que tenha valor igual `IMDb`, em seguida retornando seu `valor` respectivo.

🚀 **Sinopse:**: Por fim, na função `getSinopse` para obter a sinopse do filme a mesma utiliza a função reduce para percorrer o array de sinopses do filme e retornar a sinopse em português (pt-br), se disponível. Caso não encontre, ele mantém a sinopse em inglês (en). Ele começa verificando a primeira sinopse do array e segue comparando as demais, sempre priorizando o idioma "pt-br".
