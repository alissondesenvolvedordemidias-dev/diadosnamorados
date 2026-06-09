function abrirFotos(btn) {
    // Adiciona a classe CSS que faz o botão pulsar (coração quentinho)
    btn.classList.add('heart-warm');
    
    // Aguarda 300 milissegundos (o tempo do pulso) e executa a ação
    setTimeout(() => {
        // Altere o link abaixo para o seu álbum de fotos real (Google Fotos, iCloud, drive, etc.)
        window.open("https://photos.google.com", "_blank");
        
        // Remove a classe para que ela possa clicar de novo se quiser
        btn.classList.remove('heart-warm');
    }, 300);
}

function tocarMusica(btn) {
    btn.classList.add('heart-warm');
    
    setTimeout(() => {
        // Altere o link abaixo para a playlist de vocês no Spotify ou YouTube
        window.open("https://open.spotify.com", "_blank");
        
        btn.classList.remove('heart-warm');
    }, 300);
}