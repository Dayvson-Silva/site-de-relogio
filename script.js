// Define o índice atual do slide que será exibido
let currentIndex = 0;

// Seleciona o elemento HTML que contém todas as imagens (o container .slides)
const slides = document.querySelector('.slides');

// Obtém o número total de slides (imagens) dentro do container .slides
const totalSlides = slides.children.length;

// Define a largura de cada slide
const slideWidth = 2000; // Largura de cada slide em pixels
const slidesToShow = 3; // Número de slides a serem exibidos de uma vez

// Função para mostrar o próximo slide
function showNextSlide() {
    // Incrementa o índice currentIndex e garante que ele volte para 0 ao atingir o número total de slides
    currentIndex = (currentIndex + 1) % (totalSlides - slidesToShow + 1);

    // Move o container de slides para a esquerda, baseando-se no índice atual
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Mova slideWidth por índice
}

// Chama a função showNextSlide a cada 3 segundos (3000 milissegundos)
setInterval(showNextSlide, 3000);
