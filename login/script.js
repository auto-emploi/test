document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-info');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values entered in the ID and password fields
    const id = document.querySelector('input[name="ID"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Vérification du mot de passe chiffré
    const hashedPassword = sha256(password); // Calculer le hachage SHA-256 du mot de passe saisi

    // Vérification de l'ID chiffré
    const hashedID = sha256(id); // Calculer le hachage SHA-256 de l'ID saisi

    // Remplacer le mot de passe chiffré et l'ID chiffré ci-dessous par les vrais hachages correspondants
    const storedHashedPassword = '8d7fbb7cdf3ce54b0a09270b24c205b61d994deb1c0551366399ba2108a7765b';
    const storedHashedID = '8d7fbb7cdf3ce54b0a09270b24c205b61d994deb1c0551366399ba2108a7765b';

    if (hashedID === storedHashedID && hashedPassword === storedHashedPassword) {
      // Rediriger vers une autre page si la vérification est réussie
      window.location.href = 'https://anapec.github.io/home/index.html';
    } else {
      // Afficher un message d'erreur si la vérification échoue
      const errorMessage = document.querySelector('.error-message');
      errorMessage.textContent = 'Identifiant ou mot de passe incorrect.';
      errorMessage.style.display = 'block';
    }
  });
});
