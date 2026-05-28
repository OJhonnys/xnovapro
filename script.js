// ========================================================
// 1. LISTA DE DADOS DOS EVENTOS
// ========================================================
const meusEventos = [
    {
        nome: "Cê ta doido",
        imagem: "assets/img/cetadoido.png",
        status: "Upcoming",
        details: "Miami, FL • November 7th, 2026",
        preco: "€95",
        linkBuy: "https://usa.vaideingresso.com.br/ce-ta-doido-miami",
        linkSite: "https://bio.site/cetadoido?utm_source=ig&utm_medium=social",
        isUpcoming: true
    },
    {
        nome: "Super Nova NYE 2027",
        imagem: "assets/img/supernova-2027.png",
        status: "Upcoming",
        details: "Miami, FL • December 31st, 2026",
        preco: "Upcoming",
        linkBuy: "#",
        isUpcoming: true
    },
    {
        nome: "Super Nova NYE 2026",
        imagem: "assets/img/supernova.png",
        status: "Past Production",
        details: "Miami, FL • December 31st, 2025",
        pastaFotos: "supernova",
        isUpcoming: false
    },
    {
        nome: "Numanice Miami",
        imagem: "assets/img/numanice.png",
        status: "Past Production",
        details: "Miami, FL • Abr 05th, 2025",
        pastaFotos: "numanice",
        isUpcoming: false
    },
    {
        nome: "Deseo Weekend NYE 2025",
        imagem: "assets/img/deseo2025.png",
        status: "Past Production",
        details: "Miami, FL • December 31st, 2024",
        pastaFotos: "deseo2025",
        isUpcoming: false
    },
    {
        nome: "Dream Summer Festival",
        imagem: "assets/img/summer.png",
        status: "Past Production",
        details: "Miami, FL • August 31st, 2024",
        pastaFotos: "summer",
        isUpcoming: false
    },
    {
        nome: "Deseo Weekend NYE 2024",
        imagem: "assets/img/deseo2024.png",
        status: "Past Production",
        details: "Miami, FL • December 29th, 30th & 31st, 2023",
        pastaFotos: "deseo2024",
        isUpcoming: false
    }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // ========================================================
    // 2. INJEÇÃO AUTOMÁTICA DOS CARDS NO CARROSSEL DE EVENTOS
    // ========================================================
    const track = document.getElementById("carousel-track");

    if (track) {
        track.innerHTML = meusEventos.map(evento => {
            const footerContent = evento.isUpcoming 
                ? `<div class="price-box">
                        <span class="price-label">From</span>
                        <span class="price-value">${evento.preco}</span>
                   </div>
                   <a class="btn-buy" href="${evento.linkBuy}" target="_blank" rel="noopener noreferrer">Buy ticket</a>`
                : `<a class="btn-buy" href="gallery.html?event=${encodeURIComponent(evento.nome)}&folder=${evento.pastaFotos}">Check our Gallery</a>`;

            const siteButton = evento.linkSite 
                ? `<a href="${evento.linkSite}" target="_blank" class="btn-external">Visit Site <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>`
                : '';

            return `
                <div class="event-card">
                    <div class="card-image-wrapper">
                        <img src="${evento.imagem}" alt="${evento.nome}">
                        <span class="badge">${evento.status}</span>
                    </div>
                    <div class="card-body">
                        <div class="card-header-row">
                            <h3>${evento.nome}</h3>
                            ${siteButton}
                        </div>
                        <p class="event-details">${evento.details}</p>
                        <div class="card-footer-row">
                            ${footerContent}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ========================================================
    // 3. CONTROLE DE NAVEGAÇÃO DO CARROSSEL DE EVENTOS
    // ========================================================
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener("click", () => {
            const scrollAmount = track.clientWidth;
            track.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            const scrollAmount = track.clientWidth;
            track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }

    // ========================================================
    // 4. CONTROLE DE NAVEGAÇÃO DO CARROSSEL STAGE DESIGN
    // ========================================================
    const stageTrack = document.getElementById("stage-carousel-track");
    const stagePrevBtn = document.getElementById("stage-prev-btn");
    const stageNextBtn = document.getElementById("stage-next-btn");

    if (stageTrack && stagePrevBtn && stageNextBtn) {
        stageNextBtn.addEventListener("click", () => {
            const scrollAmount = stageTrack.clientWidth;
            stageTrack.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        stagePrevBtn.addEventListener("click", () => {
            const scrollAmount = stageTrack.clientWidth;
            stageTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }

    // ========================================================
    // 5. CONTROLE DO VÍDEO HERO (MUTE/UNMUTE)
    // ========================================================
    const video = document.getElementById("hero-video");
    const btnMute = document.getElementById("btn-mute");

    const iconVolumeOn = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
    const iconVolumeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>`;

    if (video && btnMute) {
        video.muted = false;
        btnMute.innerHTML = iconVolumeOn;

        video.play().catch(() => {
            video.muted = true;
            video.play();
            btnMute.innerHTML = iconVolumeOff;
        });

        btnMute.addEventListener("click", () => {
            if (video.muted) {
                video.muted = false;
                btnMute.innerHTML = iconVolumeOn;
            } else {
                video.muted = true;
                btnMute.innerHTML = iconVolumeOff;
            }
        });
    }

    // ========================================================
    // 6. INTERCEPTAÇÃO E ENVIO ASSÍNCRONO DO FORMULÁRIO (🚀 NOVO)
    // ========================================================
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");

    if (contactForm && submitBtn) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Segura o reload automático do navegador

            // Modifica o estado do botão para dar feedback visual
            const originalButtonText = submitBtn.innerHTML;
            submitBtn.textContent = "Sending Message...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";

            // Captura todos os inputs preenchidos
            const formData = new FormData(contactForm);

            // Envia para a API em background (via AJAX/Fetch)
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                if (response.status === 200) {
                    // Sucesso total: Limpa o form e avisa o usuário de forma elegante
                    contactForm.reset();
                    submitBtn.textContent = "Message Sent Successfully! ★";
                    submitBtn.style.background = "#1DB954"; // Muda temporariamente para verde Spotify
                    submitBtn.style.color = "#ffffff";
                    
                    // Retorna o botão ao normal depois de 4 segundos
                    setTimeout(() => {
                        submitBtn.innerHTML = originalButtonText;
                        submitBtn.style.background = ""; // Reseta para o gradiente CSS
                        submitBtn.style.color = "";
                        submitBtn.style.opacity = "1";
                        submitBtn.style.pointerEvents = "auto";
                    }, 4000);
                } else {
                    // Caso falhe o status da API
                    throw new Error("Form response error");
                }
            })
            .catch((error) => {
                // Tratamento de erro de conexão ou servidor
                console.error(error);
                submitBtn.textContent = "Error! Please try again.";
                submitBtn.style.background = "#ef4444"; // Vermelho de atenção
                submitBtn.style.color = "#ffffff";
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalButtonText;
                    submitBtn.style.background = "";
                    submitBtn.style.color = "";
                    submitBtn.style.opacity = "1";
                    submitBtn.style.pointerEvents = "auto";
                }, 4000);
            });
        });
    }
});