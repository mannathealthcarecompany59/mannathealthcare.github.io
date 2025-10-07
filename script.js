// Set current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Basic client-side form validation
(function () {
  const form = document.getElementById('orderForm');
  form?.addEventListener('submit', function (e) {
    const phone = form.querySelector('#phone');
    if (phone && !/^[0-9]{10}$/.test(phone.value.trim())) {
      e.preventDefault();
      phone.focus();
      alert('Please enter a valid 10-digit mobile number.');
    }
  });
})();

// Theme setter (light, green, blue, earth)
function setTheme(theme) {
  document.documentElement.removeAttribute('data-theme');
  if (theme) document.documentElement.setAttribute('data-theme', theme);
}

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
