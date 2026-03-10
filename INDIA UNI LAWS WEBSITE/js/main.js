function toggleNavbar() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}
//View button Functionality - VIT Bhopal University
const buttons = document.querySelectorAll('.show-rules-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const rules = btn.nextElementSibling; 
    if (rules.style.display === 'none') {
      rules.style.display = 'block';
      btn.textContent = "Hide Rules";
    } else {
      rules.style.display = 'none';
      btn.textContent = "View Rules";
    }
  });
});



