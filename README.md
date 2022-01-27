# Carrrossel de imagens
Projeto de um carrossel para mostrar imagens de alguns lugares magníficos que existem no mundo.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Carrossel/blob/master/src/assets/modelo1.png">
<img src="https://github.com/sian19/Carrossel/blob/master/src/assets/modelo2.png">
<p>Este pequeno projeto foi feito usando o framework React, onde o usuário clica nos botôes e as imagens vão aparecendo na tela, como um carrossel, só que aqui o usuário pode passar as imagens como se fosse um slide, eu o chamo de carroossel pois a animação das imagens passando ficou como se fosse um carrossel.</p>
<br/>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>A aplicação foi desenvolvida em React usando hooks para renderizar e trabalhar os componentes.</li>
  <li>Se criou um componente com cinco estados para armazenar o valor da propriedade de estilo transform e os definiu em trasnlateX, da forma que apenas uma
imagem fique visível e ocupa-se a classe chamada carrossel. As outras imagens ficam ao lado da primeira em fila mas sem aparecer pois se usou o css para
estilizar as imagens e esconder as que não eram visíveis. Definindo a tag img e colocando seu style com o valor dos estados, no caso cinco imagens com cinco 
estados.</li>
  <li>Ao usuário clicar no botão azul a direita dinamicamente a imagem que estava aparecendo na tela era arrastada para a esquerda até sumir da tela e então a próxima
imagem era arrastada automaticamente da direita até ficar por completo dentro da classe carrosel dessa forma vísivel ao usuário. Então basta o usuário clicar no botão
azul que da forma citada acima as imagens iam aparecendo e desaparecendo conforme ele clica no botão. O botão da esquerda funciona basicamente da mesma forma que o da
direita a única diferença é que ao clicar nele as imagens vão sendo arrastadas da esquerda pra direita e assim por diante.</li>
  <li>O ponto fundamental para o carrosel funcionar foi a criação do estado count e do estado back. No estado count toda vez que o usuário clicar em um dos botões ele
incrementava um número ou decrementava dependendo de qual botão o usuário clicar, usando o valor que o estado count recebeu se passou esse estado por props no componente
do carrossel(imgsCar), dentro desse componente se usou o useEffect e dentro um bloco de código foi criado com uma série de condições para definir quais valores e quais
dos cinco estados(que foram criados e definidos com a propriedade transform como foi dito mais acima) iam ser alterados para fazer com que as imagens fossem passando no carrossel.
O estado back seu valor inicial era de false, mas se o usuário clicar no botão da esquerda que faz com que as imagens voltem o valor de back mudava para true, então dentro do 
bloco de códigos do useEffect se identificava através das condições que o usuário clicou para voltar pois o estado back estava em true, dessa forma se alterava o valor de style
transform então se mudava as imagens de acordo com essas condições definidas e  usando o estado back e count como base. Se o usuário clicar no botão da direita o valor de back
fica em false novamente assim as imagens iam novamente passar da direita para a esquerda.</li>
  <li>O componente count recebe valores de 0 a 4, onde cada valor representa uma imagem, exemplo img1 era representada com o count quando recebia o valor de 0, dessa forma era identificado
no código que essa imagem(img1) era pra aparecer na tela.</li>
  <li>Se criou um componente com o nome de buttonMob, para renderizar os botões mobile quando o navegador atingisse o tamanho de 500px, nesse componente foi passado para ele através de
props dus funções que fazem o trabalho de passar as imagens da esquerda para direita e da direita para a esquerda.</li>
  <li>Se criou um componente com o nome de places, onde neste componente se tem um estado com o nome de text, então esse estado ele possui um valor inicial de uma string vazia, ao usuário
clicar nos botões para passar as imagens na tela, automaticamente o valor desse estado(text) é alterado mudando assim o texto que vai aparecer na tela identificando o local da
paisagem na imagem.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="">clique aqui<a>
