// Interactions pour les cartes de procédure
const procedureCards = document.querySelectorAll('.procedure-card');
const checklistSection = document.querySelector('#document-checklist');
const procedureTitle = document.querySelector('.procedure-title');
const documentsList = document.querySelector('.documents-list');
const countrySelect = document.querySelector('#country-select');

// Exemple de données (à remplacer par une vraie base ou JSON)
const documentsData = {
  visa: {
    usa: ['Passport', 'Visa application form', 'Bank statement'],
    uk: ['Passport', 'TB Test', 'CAS Letter'],
  },
  internship: {
    usa: ['University letter', 'DS-7002 Form', 'Sponsor approval'],
    uk: ['Internship contract', 'Visa letter', 'Insurance proof'],
  },
  // ajoute les autres si tu veux
};

procedureCards.forEach(card => {
  card.addEventListener('click', () => {
    const selected = card.dataset.procedure;
    procedureTitle.textContent = card.querySelector('h3').textContent;
    checklistSection.classList.remove('hidden');
    updateDocumentList(selected, countrySelect.value);
    checklistSection.scrollIntoView({ behavior: 'smooth' });

    // Stocke le type choisi pour mise à jour plus tard
    checklistSection.dataset.currentProcedure = selected;
  });
});

countrySelect.addEventListener('change', () => {
  const current = checklistSection.dataset.currentProcedure;
  updateDocumentList(current, countrySelect.value);
});

function updateDocumentList(procedure, country) {
  const items = documentsData[procedure]?.[country] || ['No data available for this combination'];
  documentsList.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
