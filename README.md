# Jogo da forca

# Jogo da Forca Moderno (Web)

Uma versão interativa e responsiva do clássico Jogo da Forca, desenvolvida com tecnologias web modernas. O projeto foca em uma interface intuitiva, utilizando componentes de UI como modais e teclados virtuais para uma melhor experiência do usuário.

## Principais Recursos

* **Teclado Virtual Interativo:** Interface de botões completa (A-Z) para facilitar a jogabilidade em dispositivos desktop e mobile.
* **Modais Bootstrap:** Utilização de janelas flutuantes dinâmicas para exibir mensagens de vitória, derrota ou alertas do sistema.
* **Sistema de Categorias:** As palavras são organizadas por temas, exibidos durante a partida para auxiliar o jogador.
* **Gerenciamento de Palavras Personalizadas:** Inclui uma funcionalidade para adicionar novas palavras e categorias diretamente pela interface através de um modal dedicado.
* **Modo Automático:** Opção para alternar entre listas de palavras automáticas ou manuais.
* **Feedback Visual Progressivo:** Espaço reservado para a renderização das partes do corpo na forca conforme os erros ocorrem.

## Tecnologias Utilizadas

* **HTML5:** Estrutura da interface e formulários de entrada.
* **CSS3:** Estilização personalizada, incluindo ícones da biblioteca `Boxicons`.
* **Bootstrap 4.0:** Framework utilizado para a estrutura responsiva (Grid) e componentes de modal.
* **JavaScript (Vanilla):** Lógica principal do jogo, manipulação do DOM e integração com bibliotecas externas.
* **jQuery:** Dependência para o funcionamento das interações nativas dos modais do Bootstrap.

## Como Funciona a Interface

1. **O Jogo:** Ao carregar, uma palavra secreta é ocultada no container `#palavra-secreta`.
2. **Entrada:** O usuário clica nas letras do teclado virtual. A função `verificaLetraEscolhida(letra)` valida se o caractere pertence à palavra.
3. **Adição de Conteúdo:** O botão com ícone de "mais" (`bx-message-square-add`) abre um formulário para que o usuário expanda o dicionário do jogo.
4. **Controles de Fluxo:** Botões de reiniciar (`bx-refresh`) e pausar/automático (`bx-pause-circle`) permitem controlar o ritmo das partidas.

## Instalação e Execução

1. Clone ou baixe este repositório.
2. Certifique-se de manter a estrutura de pastas:
   - `/css` (estilos)
   - `/js` (lógica)
   - `/img` (assets visuais)
3. Abra o arquivo `index.html` em qualquer navegador moderno.

---

## Estrutura de Componentes



* **`#imagem`**: Exibe o progresso visual da forca.
* **`.teclas`**: Agrupamento de botões de letras para entrada do usuário.
* **`#modal-alerta`**: Container personalizado para a criação de novos desafios.

---
*Projeto desenvolvido para prática de manipulação de eventos, lógica de arrays e integração de frameworks CSS.*

<img width="931" height="846" alt="Image" src="https://github.com/user-attachments/assets/641bbc23-fb8f-436f-8d35-3f3417ba484d" />
