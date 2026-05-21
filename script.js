document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const btnMute = document.getElementById("btn-mute");

    // Ícones Dinâmicos SVG (Com Som vs No Mudo)
    const iconVolumeOn = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
    const iconVolumeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>`;

    // Evento de clique para mutar/desmutar o vídeo de fundo
    btnMute.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            btnMute.setAttribute("aria-label", "Mute video");
            btnMute.innerHTML = iconVolumeOn;
        } else {
            video.muted = true;
            btnMute.setAttribute("aria-label", "Unmute video");
            btnMute.innerHTML = iconVolumeOff;
        }
    });

    // Lógica opcional para o envio do formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Obrigado pelo contato! Mensagem simulada com sucesso.");
            contactForm.reset();
        });
    }
});