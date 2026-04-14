// UFP RSCM - Script Utama

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('open');
}

// Dropdown mobile
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown > a');
  dropdowns.forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const submenu = link.nextElementSibling;
        if (submenu) submenu.classList.toggle('open');
      }
    });
  });

  // Highlight active menu
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = 'var(--teal-light)';
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.card-item, .program-card, .news-card, .testi-card, .stat-item, .content-box');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
});

// Kirim pesan
function kirimPesan() {
  alert('✅ Pesan berhasil dikirim!\nTim kami akan menghubungi Anda dalam 1×24 jam. Terima kasih!');
}
