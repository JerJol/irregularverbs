const verbsSorted = [
  { base: "arise", preterit: "arose", past_participle: "arisen", translation: "surgir" },
  { base: "awake", preterit: "awoke", past_participle: "awoken", translation: "réveiller" },
  { base: "be", preterit: "was/were", past_participle: "been", translation: "être" },
  { base: "beat", preterit: "beat", past_participle: "beaten", translation: "battre" },
  { base: "begin", preterit: "began", past_participle: "begun", translation: "commencer" },
  { base: "bite", preterit: "bit", past_participle: "bitten", translation: "mordre" },
  { base: "blow", preterit: "blew", past_participle: "blown", translation: "souffler" },
  { base: "break", preterit: "broke", past_participle: "broken", translation: "casser" },
  { base: "bring", preterit: "brought", past_participle: "brought", translation: "apporter" },
  { base: "build", preterit: "built", past_participle: "built", translation: "construire" },
  { base: "buy", preterit: "bought", past_participle: "bought", translation: "acheter" },
  { base: "catch", preterit: "caught", past_participle: "caught", translation: "attraper" },
  { base: "choose", preterit: "chose", past_participle: "chosen", translation: "choisir" },
  { base: "come", preterit: "came", past_participle: "come", translation: "venir" },
  { base: "cost", preterit: "cost", past_participle: "cost", translation: "coûter" },
  { base: "cut", preterit: "cut", past_participle: "cut", translation: "couper" },
  { base: "do", preterit: "did", past_participle: "done", translation: "faire" },
  { base: "draw", preterit: "drew", past_participle: "drawn", translation: "dessiner/tirer" },
  { base: "drink", preterit: "drank", past_participle: "drunk", translation: "boire" },
  { base: "drive", preterit: "drove", past_participle: "driven", translation: "conduire" },
  { base: "eat", preterit: "ate", past_participle: "eaten", translation: "manger" },
  { base: "fall", preterit: "fell", past_participle: "fallen", translation: "tomber" },
  { base: "feel", preterit: "felt", past_participle: "felt", translation: "sentir/ressentir" },
  { base: "find", preterit: "found", past_participle: "found", translation: "trouver" },
  { base: "fly", preterit: "flew", past_participle: "flown", translation: "voler" },
  { base: "forget", preterit: "forgot", past_participle: "forgotten", translation: "oublier" },
  { base: "forgive", preterit: "forgave", past_participle: "forgiven", translation: "pardonner" },
  { base: "get", preterit: "got", past_participle: "gotten", translation: "obtenir" },
  { base: "give", preterit: "gave", past_participle: "given", translation: "donner" },
  { base: "go", preterit: "went", past_participle: "gone", translation: "aller" },
  { base: "grow", preterit: "grew", past_participle: "grown", translation: "grandir/cultiver" },
  { base: "have", preterit: "had", past_participle: "had", translation: "avoir" },
  { base: "hear", preterit: "heard", past_participle: "heard", translation: "entendre" },
  { base: "hide", preterit: "hid", past_participle: "hidden", translation: "cacher" },
  { base: "hit", preterit: "hit", past_participle: "hit", translation: "frapper" },
  { base: "hold", preterit: "held", past_participle: "held", translation: "tenir" },
  { base: "hurt", preterit: "hurt", past_participle: "hurt", translation: "blesser" },
  { base: "keep", preterit: "kept", past_participle: "kept", translation: "garder" },
  { base: "know", preterit: "knew", past_participle: "known", translation: "connaître/savoir" },
  { base: "lay", preterit: "laid", past_participle: "laid", translation: "poser/mettre" },
  { base: "learn", preterit: "learnt", past_participle: "learnt", translation: "apprendre" },
  { base: "leave", preterit: "left", past_participle: "left", translation: "partir/laisser" },
  { base: "lend", preterit: "lent", past_participle: "lent", translation: "prêter" },
  { base: "let", preterit: "let", past_participle: "let", translation: "laisser/permettre" },
  { base: "lie", preterit: "lay", past_participle: "lain", translation: "s'allonger" },
  { base: "lose", preterit: "lost", past_participle: "lost", translation: "perdre" },
  { base: "make", preterit: "made", past_participle: "made", translation: "faire/fabriquer" },
  { base: "mean", preterit: "meant", past_participle: "meant", translation: "signifier" },
  { base: "meet", preterit: "met", past_participle: "met", translation: "rencontrer" },
  { base: "pay", preterit: "paid", past_participle: "paid", translation: "payer" },
  { base: "put", preterit: "put", past_participle: "put", translation: "mettre" },
  { base: "read", preterit: "read", past_participle: "read", translation: "lire" },
  { base: "ride", preterit: "rode", past_participle: "ridden", translation: "chevaucher" },
  { base: "ring", preterit: "rang", past_participle: "rung", translation: "sonner" },
  { base: "rise", preterit: "rose", past_participle: "risen", translation: "se lever" },
  { base: "run", preterit: "ran", past_participle: "run", translation: "courir" },
  { base: "say", preterit: "said", past_participle: "said", translation: "dire" },
  { base: "see", preterit: "saw", past_participle: "seen", translation: "voir" },
  { base: "seek", preterit: "sought", past_participle: "sought", translation: "chercher" },
  { base: "sell", preterit: "sold", past_participle: "sold", translation: "vendre" },
  { base: "send", preterit: "sent", past_participle: "sent", translation: "envoyer" },
  { base: "set", preterit: "set", past_participle: "set", translation: "mettre/positionner" },
  { base: "shine", preterit: "shone", past_participle: "shone", translation: "briller" },
  { base: "show", preterit: "showed", past_participle: "shown", translation: "montrer" },
  { base: "sing", preterit: "sang", past_participle: "sung", translation: "chanter" },
  { base: "sink", preterit: "sank", past_participle: "sunk", translation: "couler" },
  { base: "sit", preterit: "sat", past_participle: "sat", translation: "s'asseoir" },
  { base: "sleep", preterit: "slept", past_participle: "slept", translation: "dormir" },
  { base: "speak", preterit: "spoke", past_participle: "spoken", translation: "parler" },
  { base: "spend", preterit: "spent", past_participle: "spent", translation: "dépenser" },
  { base: "stand", preterit: "stood", past_participle: "stood", translation: "se tenir debout" },
  { base: "steal", preterit: "stole", past_participle: "stolen", translation: "voler" },
  { base: "swim", preterit: "swam", past_participle: "swum", translation: "nager" },
  { base: "take", preterit: "took", past_participle: "taken", translation: "prendre" },
  { base: "teach", preterit: "taught", past_participle: "taught", translation: "enseigner" },
  { base: "tell", preterit: "told", past_participle: "told", translation: "raconter" },
  { base: "think", preterit: "thought", past_participle: "thought", translation: "penser" },
  { base: "throw", preterit: "threw", past_participle: "thrown", translation: "lancer" },
  { base: "understand", preterit: "understood", past_participle: "understood", translation: "comprendre" },
  { base: "wake", preterit: "woke", past_participle: "woken", translation: "se réveiller" },
  { base: "wear", preterit: "wore", past_participle: "worn", translation: "porter" },
  { base: "win", preterit: "won", past_participle: "won", translation: "gagner" },
  { base: "write", preterit: "wrote", past_participle: "written", translation: "écrire" }
];

let selectedVerbs = new Set();
let currentVerbs = [];
let currentVerbIndex = 0;
let score = 0;

function initializeSelectedVerbs() {
  const startIdx = verbsSorted.findIndex(v => v.base === 'have');
  const endIdx = verbsSorted.findIndex(v => v.base === 'put');
  
  for (let i = startIdx; i <= endIdx; i++) {
    selectedVerbs.add(verbsSorted[i].base);
  }
}

function updateVerbsInfo() {
  document.getElementById('totalVerbsCount').textContent = verbsSorted.length;
}

function updateSelectedVerbsCount() {
  document.getElementById('selectedVerbsCount').textContent = selectedVerbs.size;
}

function renderVerbsList() {
  const verbsList = document.getElementById('verbsList');
  verbsList.innerHTML = '';
  
  verbsSorted.forEach(verb => {
    const div = document.createElement('div');
    div.className = 'verb-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `verb-${verb.base}`;
    checkbox.checked = selectedVerbs.has(verb.base);
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedVerbs.add(verb.base);
      } else {
        selectedVerbs.delete(verb.base);
      }
      updateSelectedVerbsCount();
    });
    
    const label = document.createElement('label');
    label.htmlFor = `verb-${verb.base}`;
    label.textContent = `${verb.base} (${verb.translation})`;
    
    div.appendChild(checkbox);
    div.appendChild(label);
    verbsList.appendChild(div);
  });
}

function populateVerbDropdowns() {
  const startDropdown = document.getElementById('startVerbDropdown');
  const endDropdown = document.getElementById('endVerbDropdown');
  startDropdown.innerHTML = '';
  endDropdown.innerHTML = '';

  verbsSorted.forEach(v => {
    const opt1 = document.createElement('option');
    opt1.value = v.base;
    opt1.textContent = `${v.base} (${v.translation})`;
    startDropdown.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = v.base;
    opt2.textContent = `${v.base} (${v.translation})`;
    endDropdown.appendChild(opt2);
  });

  startDropdown.value = 'have';
  endDropdown.value = 'put';
}

function clearAddVerbForm() {
  document.getElementById('newVerbBase').value = '';
  document.getElementById('newVerbPreterit').value = '';
  document.getElementById('newVerbPastParticiple').value = '';
  document.getElementById('newVerbTranslation').value = '';
}

function addNewVerb() {
  const base = document.getElementById('newVerbBase').value.trim().toLowerCase();
  const preterit = document.getElementById('newVerbPreterit').value.trim();
  const pastParticiple = document.getElementById('newVerbPastParticiple').value.trim();
  const translation = document.getElementById('newVerbTranslation').value.trim();

  if (!base || !preterit || !pastParticiple || !translation) {
    alert('Remplissez tous les champs');
    return;
  }

  if (verbsSorted.find(v => v.base === base)) {
    alert('Ce verbe existe déjà');
    return;
  }

  const newVerb = { base, preterit, past_participle: pastParticiple, translation };
  verbsSorted.push(newVerb);
  verbsSorted.sort((a, b) => a.base.localeCompare(b.base));
  
  selectedVerbs.add(base);
  
  updateVerbsInfo();
  updateSelectedVerbsCount();
  populateVerbDropdowns();
  renderVerbsList();
  clearAddVerbForm();
  document.getElementById('addVerbPanel').classList.remove('show');
  
  alert('Verbe ajouté avec succès!');
}

function loadVerbs() {
  const numQuestions = parseInt(document.getElementById('numQuestionsInput').value);
  
  const selectedVerbsList = Array.from(selectedVerbs)
    .map(base => verbsSorted.find(v => v.base === base))
    .filter(v => v !== undefined);

  if (selectedVerbsList.length === 0) {
    alert('Veuillez sélectionner au moins un verbe');
    return;
  }

  const selectedCount = selectedVerbsList.length;

  if (numQuestions > selectedCount) {
    alert(`Vous avez sélectionné ${selectedCount} verbes mais demandé ${numQuestions} questions.\nUtilisation de ${selectedCount} questions.`);
    currentVerbs = selectedVerbsList;
  } else if (numQuestions < selectedCount) {
    currentVerbs = selectedVerbsList.sort(() => Math.random() - 0.5).slice(0, numQuestions);
  } else {
    currentVerbs = selectedVerbsList;
  }

  document.getElementById('exerciseSection').style.display = 'block';
  document.getElementById('scoreScreen').classList.remove('show');
  currentVerbIndex = 0;
  score = 0;
  displayQuestion();
}

function displayQuestion() {
  if (currentVerbIndex >= currentVerbs.length) {
    showScore();
    return;
  }

  const verb = currentVerbs[currentVerbIndex];
  const questionType = Math.floor(Math.random() * 4);
  let givenField, question;

  if (questionType === 0) {
    givenField = 'base';
    question = verb.base;
  } else if (questionType === 1) {
    givenField = 'preterit';
    question = verb.preterit;
  } else if (questionType === 2) {
    givenField = 'past_participle';
    question = verb.past_participle;
  } else {
    givenField = 'translation';
    question = verb.translation;
  }

  document.getElementById('questionText').textContent = question;
  document.getElementById('progressCounter').textContent = `${currentVerbIndex + 1}/${currentVerbs.length}`;

  const formsGrid = document.getElementById('formsGrid');
  formsGrid.innerHTML = '';

  const fields = ['base', 'preterit', 'past_participle', 'translation'];
  const labels = ['Base', 'Prétérit', 'Participe passé', 'Traduction'];

  fields.forEach((field, idx) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field-input';

    const label = document.createElement('div');
    label.className = 'field-label';
    label.textContent = labels[idx];

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-input';
    input.id = `field-${field}`;

    if (field === givenField) {
      let displayValue = verb[field];
      input.value = displayValue;
      input.disabled = true;
      input.style.fontWeight = '600';
    } else {
      input.value = '';
      input.placeholder = labels[idx];
    }

    fieldDiv.appendChild(label);
    fieldDiv.appendChild(input);
    formsGrid.appendChild(fieldDiv);
  });

  document.getElementById('feedback').classList.remove('show');
  document.getElementById('validateBtn').style.display = 'inline-block';
  document.getElementById('skipBtn').style.display = 'inline-block';
}

function normalizeString(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function validateAnswer() {
  const verb = currentVerbs[currentVerbIndex];
  const feedback = document.getElementById('feedback');
  const base = normalizeString(document.getElementById('field-base').value);
  const preterit = normalizeString(document.getElementById('field-preterit').value);
  const pastParticiple = normalizeString(document.getElementById('field-past_participle').value);
  const translation = normalizeString(document.getElementById('field-translation').value);

  const expectedBase = normalizeString(verb.base);
  const expectedPreterit = normalizeString(verb.preterit);
  const expectedPastParticiple = normalizeString(verb.past_participle);
  const expectedTranslation = normalizeString(verb.translation);

  const isCorrect = base === expectedBase && preterit === expectedPreterit && pastParticiple === expectedPastParticiple && translation === expectedTranslation;

  if (isCorrect) {
    feedback.textContent = '✓ Correct';
    feedback.className = 'feedback show success';
    score++;
  } else {
    feedback.textContent = '✗ Incorrect';
    feedback.className = 'feedback show error';
    displayCorrection();
  }

  document.getElementById('validateBtn').style.display = 'none';
  document.getElementById('skipBtn').style.display = 'none';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary';
  nextBtn.textContent = 'Verbe suivant';
  nextBtn.onclick = () => {
    currentVerbIndex++;
    displayQuestion();
  };
  document.getElementById('feedback').parentNode.insertBefore(nextBtn, document.getElementById('feedback').nextSibling);
}

function displayCorrection() {
  const verb = currentVerbs[currentVerbIndex];
  document.getElementById('field-base').value = verb.base;
  document.getElementById('field-preterit').value = verb.preterit;
  document.getElementById('field-past_participle').value = verb.past_participle;
  document.getElementById('field-translation').value = verb.translation;

  document.getElementById('field-base').disabled = true;
  document.getElementById('field-preterit').disabled = true;
  document.getElementById('field-past_participle').disabled = true;
  document.getElementById('field-translation').disabled = true;

  document.getElementById('field-base').style.background = 'rgba(50, 184, 198, 0.1)';
  document.getElementById('field-preterit').style.background = 'rgba(50, 184, 198, 0.1)';
  document.getElementById('field-past_participle').style.background = 'rgba(50, 184, 198, 0.1)';
  document.getElementById('field-translation').style.background = 'rgba(50, 184, 198, 0.1)';
}

function skipQuestion() {
  displayCorrection();
  document.getElementById('feedback').textContent = 'Réponse proposée';
  document.getElementById('feedback').className = 'feedback show';
  document.getElementById('validateBtn').style.display = 'none';
  document.getElementById('skipBtn').style.display = 'none';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary';
  nextBtn.textContent = 'Verbe suivant';
  nextBtn.onclick = () => {
    currentVerbIndex++;
    displayQuestion();
  };
  document.getElementById('feedback').parentNode.insertBefore(nextBtn, document.getElementById('feedback').nextSibling);
}

function showScore() {
  document.getElementById('exerciseSection').style.display = 'none';
  const scoreScreen = document.getElementById('scoreScreen');
  scoreScreen.classList.add('show');
  document.getElementById('scoreValue').textContent = `${score}/${currentVerbs.length}`;
  const percentage = Math.round((score / currentVerbs.length) * 100);
  document.getElementById('scorePercentage').textContent = `${percentage}%`;

  let message = '';
  if (score === currentVerbs.length) message = '🌟 Excellent!';
  else if (score >= currentVerbs.length * 0.7) message = '👍 Très bien!';
  else if (score >= currentVerbs.length * 0.5) message = '💪 Pas mal!';
  else message = '📚 À revoir!';

  document.getElementById('scoreMessage').textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSelectedVerbs();
  updateVerbsInfo();
  updateSelectedVerbsCount();
  populateVerbDropdowns();
  renderVerbsList();
  loadVerbs();

  document.getElementById('loadVerbsBtn').addEventListener('click', loadVerbs);
  document.getElementById('validateBtn').addEventListener('click', validateAnswer);
  document.getElementById('skipBtn').addEventListener('click', skipQuestion);
  document.getElementById('restartBtn').addEventListener('click', () => {
    currentVerbIndex = 0;
    score = 0;
    displayQuestion();
    document.getElementById('scoreScreen').classList.remove('show');
    document.getElementById('exerciseSection').style.display = 'block';
  });

  const manageVerbsBtn = document.getElementById('manageVerbsBtn');
  const verbsEditorPanel = document.getElementById('verbsEditorPanel');
  const addVerbPanel = document.getElementById('addVerbPanel');
  const saveVerbsBtn = document.getElementById('saveVerbsBtn');
  const cancelEditVerbsBtn = document.getElementById('cancelEditVerbsBtn');
  const selectAllBtn = document.getElementById('selectAllBtn');
  const deselectAllBtn = document.getElementById('deselectAllBtn');
  const toggleAddVerbBtn = document.getElementById('toggleAddVerbBtn');
  const addVerbBtn = document.getElementById('addVerbBtn');
  const cancelAddVerbBtn = document.getElementById('cancelAddVerbBtn');

  manageVerbsBtn.addEventListener('click', () => {
    renderVerbsList();
    verbsEditorPanel.classList.add('show');
  });

  cancelEditVerbsBtn.addEventListener('click', () => {
    verbsEditorPanel.classList.remove('show');
    addVerbPanel.classList.remove('show');
    clearAddVerbForm();
  });

  selectAllBtn.addEventListener('click', () => {
    verbsSorted.forEach(v => selectedVerbs.add(v.base));
    updateSelectedVerbsCount();
    renderVerbsList();
  });

  deselectAllBtn.addEventListener('click', () => {
    selectedVerbs.clear();
    updateSelectedVerbsCount();
    renderVerbsList();
  });

  toggleAddVerbBtn.addEventListener('click', () => {
    addVerbPanel.classList.toggle('show');
  });

  cancelAddVerbBtn.addEventListener('click', () => {
    addVerbPanel.classList.remove('show');
    clearAddVerbForm();
  });

  addVerbBtn.addEventListener('click', addNewVerb);

  document.getElementById('newVerbBase').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNewVerb();
  });
  document.getElementById('newVerbPreterit').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNewVerb();
  });
  document.getElementById('newVerbPastParticiple').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNewVerb();
  });
  document.getElementById('newVerbTranslation').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNewVerb();
  });

  saveVerbsBtn.addEventListener('click', () => {
    if (selectedVerbs.size === 0) {
      alert('Sélectionnez au moins un verbe');
      return;
    }
    verbsEditorPanel.classList.remove('show');
    addVerbPanel.classList.remove('show');
    loadVerbs();
  });
});