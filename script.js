

// Simple form validation 
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('Merci de remplir tous les champs.');
    return;
  }
  // If you don't have backend, we can open mailto with prefilled content:
  const subject = encodeURIComponent('Demande de contact via portfolio');
  const body = encodeURIComponent(`Bonjour Otmane,\n\n${message}\n\nDe: ${name} - ${email}`);
  // open mail client:
  window.open(`mailto:otmane.charroj7@gmail.com?subject=${subject}&body=${body}`, '_blank');
  form.reset();
});



