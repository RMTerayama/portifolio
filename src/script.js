document.addEventListener('DOMContentLoaded', () => {

    // Observer para as seções da página (Navbar ativa)
    const sections = document.querySelectorAll('section');  // Seções da página
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');  // Links de navegação

    const sectionObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
console.log(entry.target);  // Verifique se as seções estão sendo observadas
const targetId = entry.target.id;
const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${targetId}"]`);

if (entry.isIntersecting) {
    navLink.classList.add('active');
} else {
    navLink.classList.remove('active');
}
});
}, { threshold: 0.5 });
// O item será considerado visível quando 50% da seção estiver na viewport

    sections.forEach(section => sectionObserver.observe(section));  // Observa as seções da página


    // Observer para os itens da timeline (efeito de entrada)
    const items = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona o efeito ao entrar na viewport
            } else {
                entry.target.classList.remove('visible'); // Remove o efeito ao sair da viewport
            }
        });
    }, {
        threshold: 0.1 // Ativa o observer quando 10% do item estiver visível
    });

    items.forEach(item => timelineObserver.observe(item));  // Observa os itens da timeline
});
// Função para verificar se é dispositivo desktop
function isDesktop() {
    return window.innerWidth >= 768; // Considera dispositivos com largura maior que 768px como desktop
}

if (isDesktop()) {
    document.querySelectorAll('.card-projeto').forEach(card => {
        const title = card.querySelector('.card-title').innerText;

        // URLs dos vídeos no YouTube com autoplay, mute, loop e sem controles
        const videoUrls = {
            'Pesquisa de clima': 'https://www.youtube.com/embed/SfGSe3XxiF0?autoplay=1&mute=1&loop=1&playlist=SfGSe3XxiF0&controls=0',
            'Página de Login': 'https://www.youtube.com/embed/ytZ8KPS8wi4?autoplay=1&mute=1&loop=1&playlist=ytZ8KPS8wi4&controls=0',
            'Jogo Mario': 'https://www.youtube.com/embed/YDBNavYa0eE?autoplay=1&mute=1&loop=1&playlist=YDBNavYa0eE&controls=0',
            'Sistema de Pedido de Comida': 'https://www.youtube.com/embed/TAI3OlPD8q8?autoplay=1&mute=1&loop=1&playlist=TAI3OlPD8q8&controls=0',
            'Landing Page': 'https://www.youtube.com/embed/5OgK4GK3cxM?autoplay=1&mute=1&loop=1&playlist=5OgK4GK3cxM&controls=0',
            'Trâmite Licitação': 'https://www.youtube.com/embed/RxTC2mYLs7c?autoplay=1&mute=1&loop=1&playlist=RxTC2mYLs7c&controls=0'
        };

        // Verifica se há URL correspondente ao título
        if (videoUrls[title]) {
            const iframe = document.createElement('iframe');

            // Configuração do iframe
            iframe.src = videoUrls[title];
            iframe.allow = 'autoplay; encrypted-media';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;

            // Estilo do iframe para preencher o card
            iframe.style.width = '100%';
            iframe.style.height = '100%';

            // Remove a imagem e adiciona o iframe ao card
            const img = card.querySelector('img');
            if (img) img.remove();
            card.appendChild(iframe);
        }
    });
}
