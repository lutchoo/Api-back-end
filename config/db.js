const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(process.env.URI);
    console.log('Connexion réussie à MongoDB');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err);
  }
}

main();