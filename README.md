# Boilerplate Next.JS

## O Projeto

Boilerplate configurado com Next.Js, Storybook, Jest, Typescript e  Styled-Components abaixo veremos mais detalhes de cada uma dessa ferramentas.

## Next.JS
#### O que é Next.JS?
[Next.js](https://nextjs.org/docs/getting-started/)  é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto.

#### Principais funcionalidades do Next.js
* Hibrido SSG e SSR: Renderize as páginas durante a build (Static Site Generation) ou em cada request (Server-side Rendering) no mesmo projeto.

* Hot Code Reloading: Qualquer alteração feita em seu código durante o desenvolvimento será refletida na aplicação local em tempo real, atualizando de forma automática.

* Roteamento Automático: As URL’s no Next js são mapeadas com base na pasta pages, então qualquer arquivo nesta pasta se torna uma página, sem a necessidade de uma configuração extra. (é possível personalizar isto caso precise)

* Code Splitting Automático: Essa funcionalidade permite que as páginas sejam renderizadas apenas com os pacotes que elas precisam. Digamos que apenas uma página de seu site utilize o Ant Design, este pacote será atrelado apenas a esta página. Isso garante que cada página tenha apenas o código necessário para sua renderização, diminuindo o tamanho (kB) de cada página e melhorando a velocidade de renderização. Houve uma contribuição do time do Google para melhorar esta funcionalidade recentemente.

* Suporte a TypeScript: Configuração e compilação automáticos integrados similar a uma IDE.

* Internacionalização: Como padrão o Next.js já possui uma estrutura para identificação de idiomas diferentes, trabalhando com rotas exclusivas e traduções via locale.

* Otimização de Imagem: Componente nativo do Next para otimização de suas imagens com redi

###### Fonte: [segredo.dev](https://segredo.dev/o-que-e-next-js/) clique no link e obtenha mais detalhes.

## Storybook
#### O que é Storybook?
[Storybook](https://storybook.js.org/docs/react/get-started/introduction) é uma ferramenta que tem como objetivo servir de ambiente isolado para você criar seus componentes. Ou seja, você não precisa desenvolver seu componente diretamente no seu sistema.

Ele é utilizado por grandes empresas como: GitHub, Dropbox, airbnb, Mozilla, JetBrains, etc.
O Storybook funciona com várias bibliotecas e frameworks, como: React, Angular, Vue, Ember, etc.

#### Por que preciso de um ambiente isolado?
A ideia dos componentes é que eles precisam ser reutilizáveis. Se você cria diretamente no seu sistema, algum JavaScript ou CSS do sistema pode influenciá-lo. Além disso, você pode cair na tentação de integrar o componente com alguma fonte de dados para facilitar o acesso a algum dado. E isso já acaba com a possibilidade de reutilização.

#### Como o Storybook pode ajudar?

Imagina que temos uns 30 componentes em nossa aplicação e temos que procurar eles na aplicação? Isso e meio trabalhoso ainda mais quando um desenvolvedor entra já no meio do projeto ou vai dar manutenção isso e muito custoso, com storybook ele cria uma lista de componentes isolados e controlados facilitando sua identicação e teste sem muito esforço poupando tempo e esforço é uma maneira de documentar sua UI para compartilhar com sua equipe.

###### Fonte: [treinaweb.com](https://www.treinaweb.com.br/blog/storybook-a-melhor-maneira-de-criar-componentes) clique no link e obtenha mais detalhes.

## Jest
#### O que é Jest?

[Jest](https://jestjs.io/pt-BR/docs/getting-started) é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine. Jest é uma das ferramentas de teste unitário mais difundidas dentro da comunidade de JavaScript.


#### Visão geral

O Jest foi inicialmente criado para testar o framework React, também criado pelo Facebook. Porém sua implementação se tornou muito mais ampla, sendo utilizado como ferramenta de teste unitário para diversas plataformas JavaScript como Node e Redux, e até mesmo plataformas em TypeScript como Angular e Ionic.

###### Fonte: [devmedia.com](https://www.devmedia.com.br/teste-unitario-com-jest/41234) clique no link e obtenha mais detalhes.

## Typescript
#### O que é Typescript?
[Typescript](https://www.typescriptlang.org/docs/) é um conjunto de ferramentas que adiciona melhorias aos projetos desenvolvidos e escritos em código JavaScript.

Ele pode ser compreendido como um superconjunto de soluções e recursos que não são nativos da linguagem, mas que podem tornar o trabalho de programação muito mais eficiente e dinâmico.

O desenvolvimento do Typescript começou por volta de 2012, com os esforços de um time da Microsoft.
A ideia era justamente turbinar a linguagem JavaScript com recursos que pudessem aperfeiçoar a experiência dos/as desenvolvedores/as.

O resultado desse trabalho foi um superset extremamente útil, que, com certeza, pode agregar muito à sua atuação como desenvolvedor/a.

#### Principais vantagens do Typescript

Além de agregar ferramentas e recursos que não estão nativamente disponíveis em JavaScript, o Typescript também oferece outras vantagens.

Ele melhora a produtividade de projetos realizados em larga escala e oferece a correção de erros no exato momento do desenvolvimento, ou seja, em tempo real.

Outro ponto positivo é que o Typescript possui código aberto e, por isso, ele está sempre em aprimoramento pela comunidade de desenvolvedores/as.

Além disso, ele tem como base os padrões ES6 (ECMAScript), uma especificação de linguagens de script.

O superconjunto pode ser usado no desenvolvimento mobile e também garante mais suporte para a programação orientada a objetos. Qualquer código em JS pode ser colocado em Typescript, na extensão .ts.

#### Principais conceitos e aplicações

O Typescript dá uma boa turbinada nas possibilidades que o JavaScript oferece. Durante o desenvolvimento, a sua sintaxe se destaca por ser suportada pelos principais editores modernos de códigos.

Essa modificação do JS permite que qualquer projeto escrito em JavaScript possa ser trabalhado diretamente no Typescript. Assim, as atualizações se tornam mais eficientes.

Além disso, no Typescript é possível inserir interfaces e tipagem estática à programação. Os principais conceitos desse superset são:

Encapsulamento – Oferece mais acessibilidade e visibilidade aos elementos internos de cada classe.

É uma característica da estruturação dos códigos que permite que o/a desenvolvedor/a defina quais atributos de classe poderão ser vistos pelos usuários externos.

Herança – Consiste na capacidade de uma classe filha herdar ou não as características de uma classe pai. Com esse recurso, o Typescript facilita a escrita de códigos baseados em heranças.

Polimorfismo – É um recurso que possibilita o uso diferenciado de objetos dentro da programação.

Abstração – Esse conceito está relacionado à capacidade de dar destaque a algumas características específicas dos elementos do mundo real, algo que é bastante relevante dentro da programação orientada a objetos.

Todos esses conceitos precisam ser estudados a fundo pelos/as desenvolvedores/as que querem melhorar a produtividade de seus projetos com o uso de Typescript.

Em um curso ou mesmo nas comunidades e fóruns que tratam de Typescript é possível obter boas noções sobre as ferramentas do superset, além de tirar dúvidas mais pontuais.

###### Fonte: [site-v1.gama.academy](https://site-v1.gama.academy/blog/desenvolvimento/o-que-e-typescript/?utm_source=google&utm_medium=compramidia&utm_campaign=blog-dsa&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9rIJ3PGMCLCMKkt5hNLP50_h18v3GT_ba7H-9uWNRLqVQdvA_NPGwhoCJuEQAvD_BwE) clique no link e obtenha mais detalhes.

## Styled-Components
#### O que é Styled-Components?

Uma das coisas que muito tem se falado, enquanto desenvolvendo aplicações com React, é sobre [Styled-Components](https://styled-components.com/docs)
Styled components são componentes onde criamos o CSS no próprio arquivo do componente, o arquivo JS.
Com isso conseguimos obter algumas vantagens em diversos quesitos, tais como:

* Carregamento automático do CSS crítico, isso é, os componentes são renderizados com a página e são injetados apenas o CSS que realmente
será utilizado, nada mais! Ajudando em performance, visto que os usuários carregarão apenas o necessário.

* Sem problemas com nomes de classes! Styled-componentes geram nomes de classes automaticamente, sem preocupação em gerar nomes duplicados.

* Fácil remoção de CSS, visto que todo o CSS fica, normalmente, no próprio arquivo JS, então você encontra fácil o que precisa remover e também consegue
facilmente

Entre outras facilidades!

###### Documentação: [Styled-components](https://styled-components.com/docs) clique no link e obtenha mais detalhes.


## Instalando o Projeto

* Navegue até a página principal do repositório.
* Procure pela opção 'clone'.
* Copie a URL https.
* Abra seu VS Code o diretório que deseja clonar e abra o termiinal.
* Digite ```git clone``` (clonar git) e cole a URL que você copiou anteriormente.
```
$ git clone <URL copiada>
```

* Pressione Enter para criar seu clone local.
* Digite yarn ou npm install
 ```
$ yarn ou npm install
```
* Você pode iniciai o projeto com esse comando que ele irá clonar e instalar as dependências automaticamente ```yarn create next-app -e https://github.com/AlanVidalll/Boilerplate-React-NextJS <Nome projeto>```.
```
$ yarn create next-app -e https://github.com/AlanVidalll/Boilerplate-React-NextJS <Nome projeto>
```


## Executando o Sistema

* Digite yarn dev  para abrir a aplicação no browser na porta 3000 por padrão

```
$ yarn dev
```
* Digite yarn storybook para abrir o storybook no browser na porta 6006 por padrão
```
$ yarn storybook
```
* para executar os testes digite yarn test ou yarn test ---watch para seu teste exucutar enquanto você codifica.
```
$ yarn test
```
```
$ yarn test --watch
```
 E agora mão na massa e vamos codar.

