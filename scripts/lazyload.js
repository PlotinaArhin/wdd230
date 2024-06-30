document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = (target) => {
        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.classList.add('lazy-loaded');
                    };
                    observer.unobserve(img);
                }
            });
        }, options);

        observer.observe(target);
    };

    images.forEach(image => {
        lazyLoad(image);
    });

    document.getElementById('last-modified').textContent = document.lastModified;
});
