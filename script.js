document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer API kullanarak kaydırma animasyonunu yönetme
    const sections = document.querySelectorAll('section');

    // Gözlemci seçenekleri: ne zaman tetikleneceğini belirler
    const observerOptions = {
        root: null, // null, tarayıcı penceresini (viewport) gözlem alanı olarak ayarlar
        rootMargin: '0px',
        threshold: 0.1 // Hedefin %10'u göründüğünde tetiklenir
    };

    // Gözlemci (observer) oluşturma
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Eğer kesişim (görünürlük) varsa 'visible' sınıfını ekle
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animasyon bir kez tetiklendikten sonra gözlemciyi durdurmak için
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Her bir bölümü gözlemlemeye başla
    sections.forEach(section => {
        observer.observe(section);
    });

});

