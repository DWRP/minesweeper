# Minesweeper (Campo Minado) em Next

## Descrição

Este projeto é uma implementação moderna do clássico jogo Campo Minado (Minesweeper) usando Next, TypeScript e Tailwind CSS. O jogo oferece modos single-player e multiplayer, com uma interface de usuário intuitiva e responsiva.

## Características

- Menu inicial com opções para single-player, multiplayer, instruções e créditos
- Modo single-player com temporizador
- Modo multiplayer para dois jogadores
- Tabuleiro de jogo 10x10 com 15 minas
- Interface responsiva adaptável a diferentes tamanhos de tela
- Estilização moderna usando Tailwind CSS e componentes personalizados
- Ícones intuitivos da biblioteca Lucide Next

## Tecnologias Utilizadas

- Next
- TypeScript
- Tailwind CSS
- shadcn ui
- Lucide (para ícones)
- v0.dev

## Como Instalar

1. Clone o repositório:

```bash
  git clone https://github.com/dwrp/minesweeper.git
```

2. Entre no diretório do projeto:

```bash
    cd minesweeper
```

3. Instale as dependências:

```bash
    npm install
    #ou
    yarn
```

4. Inicie o servidor de desenvolvimento:

```bash
    npm run dev
    #ou
    yarn dev
```


5. Abra [localhost:3000](http://localhost:3000) no seu navegador para ver o jogo.

## Como Jogar

1. No menu inicial, escolha entre modo single-player ou multiplayer.
2. No tabuleiro, clique em uma célula para revelá-la.
3. Clique com o botão direito para marcar uma célula com uma bandeira.
4. Os números nas células reveladas indicam quantas minas estão adjacentes.
5. Evite clicar nas minas!
6. No modo multiplayer, os jogadores se alternam para revelar células.
7. O jogo termina quando uma mina é revelada ou todas as células seguras são descobertas.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE.md) para detalhes.
