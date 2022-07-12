// velocidade maxima de ate 70km
// a cada 5km acima do limite você ganha 1 ponto
// math.floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(50);

function verificarVelocidade(velocidade){
const velocidadeMaxima = 70;
const KmPorPonto = 5;
if(velocidade <= velocidadeMaxima)
console.log('Ok');
else{
     const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
     if( pontos >= 12)
          console.log('Carteira Suspensa');
     else
          console.log('Pontos',pontos);
    }
}