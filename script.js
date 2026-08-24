const sessions = [
  { time: '09:00–09:10', kind: 'Opening', title: 'Welcome and Opening Remarks', type: 'break' },
  { time: '09:10–09:40', kind: 'Keynote', title: 'Keynote Address', people: [{ role: 'Keynote speaker', name: 'Kyung-Sup Chang', affiliation: 'SNU', title: 'Asia in Asianization: 21st Century Trends in Transnational Societization' }] },
  { time: '09:40–11:10', kind: 'Session 1', title: 'Connectivity and the Challenges to the Liberal Script', description: 'Connectivity as a constitutive condition for resilience across geo-political, societal, and technological dimensions.', people: [{ role: 'Moderator', name: 'Diana Panke', affiliation: 'SCRIPTS' }, { role: 'Speaker', name: 'Tanja Börzel', affiliation: 'SCRIPTS', title: 'Varieties of Connectivity Scripts and their Resilience' }, { role: 'Speaker', name: 'Jeong-Woo Koo', affiliation: 'Sungkyunkwan', title: 'Organizational Connectivity and the Resilience of the Liberal Script: Institutional Investors, Human Rights Policies, and Due Diligence' }, { role: 'Speaker', name: 'Yasemin Soysal', affiliation: 'SCRIPTS', title: 'Societal Connectivity as Resilience and Backlash' }, { role: 'Discussant', name: 'Dong-Kyun Im', affiliation: 'SNU' }] },
  { time: '11:10–11:30', kind: 'Break', title: 'Coffee Break', type: 'break' },
  { time: '11:30–13:00', kind: 'Session 2', title: 'Geo-Political and Geo-Economic Connectivity: Entanglements, Vulnerabilities, and the Liberal Script', description: 'Trade patterns, financial linkages, Belt and Road, strategic alignments, and their impact on liberal institutions.', people: [{ role: 'Moderator', name: 'Jieun Kim', affiliation: 'SNU' }, { role: 'Speaker', name: 'Mark Hallerberg', affiliation: 'SCRIPTS', title: 'Infrastructure Financing: Promoting Liberal Policies or Entrenching Authoritarianism?' }, { role: 'Speaker', name: 'Chungshik Moon', affiliation: 'Chung-Ang University', title: 'Title to be announced' }, { role: 'Speaker', name: 'Taesuh Cha', affiliation: 'SNU', title: 'The End of Swinging Inside? Connectivity, Vulnerability, and South Korea’s Strategic Reckoning in an Era of Great-Power Competition' }, { role: 'Speaker', name: 'Soo Yeon Kim', affiliation: 'University of British Columbia', title: 'Title to be announced' }, { role: 'Discussant', name: 'Brandon Ives', affiliation: 'SNU' }] },
  { time: '13:00–14:30', kind: 'Break', title: 'Lunch Break', type: 'break' },
  { time: '14:30–16:00', kind: 'Session 3', title: 'Societal Connectivity: Migration, Cohesion, and the Liberal Script', description: 'Migration, demographic change, gender, collective identities, belonging, and implications for the liberal script.', people: [{ role: 'Moderator', name: 'Yoonsun Han', affiliation: 'SNU' }, { role: 'Speaker', name: 'Gülay Çağlar', affiliation: 'SCRIPTS', title: 'The Promise of Gender Equality: Connectivity, Normative Tensions, and the Resilience of the Liberal Script' }, { role: 'Speaker', name: 'Jeong Hyun Kim', affiliation: 'Yonsei University', title: 'Does Women’s Leadership Enhance Legislative Civility? Evidence from the South Korean National Assembly' }, { role: 'Speaker', name: 'Min Hee Go', affiliation: 'Ewha Womans University', title: 'Title to be announced' }, { role: 'Discussant', name: 'Sung Eun Kim', affiliation: 'Korea University' }] },
  { time: '16:00–16:20', kind: 'Break', title: 'Coffee Break', type: 'break' },
  { time: '16:20–17:50', kind: 'Session 4', title: 'Technological Connectivity: Digital Infrastructures, Innovation Networks, and Weaponized Interdependence', description: 'Digital infrastructures, technology exchanges, open markets under pressure, and responses by liberal institutions.', people: [{ role: 'Moderator', name: 'Joonseok Yang', affiliation: 'Yonsei University' }, { role: 'Speaker', name: 'Genia Kostka', affiliation: 'SCRIPTS', title: 'Emergent Digital (Dis-)Orders: AI Governance between Liberal and Authoritarian Scripts' }, { role: 'Speaker', name: 'ByungKoo Kim', affiliation: 'KDI', title: 'Barking Dogs Never Bite? Exit Options, Crisis Escalation, and the Onset of Trade Sanctions' }, { role: 'Speaker', name: 'One-Sun Cho', affiliation: 'STEPI', title: 'Two Logics of Connectivity in the Submarine Cable Network: Who Excludes, Who Entangles, and Why' }, { role: 'Discussant', name: 'Seungjun Kim', affiliation: 'KDI' }] },
  { time: '17:50–19:00', kind: 'Closing', title: 'Closing Session / Workshop Dinner / Informal Networking', description: 'Exact breakdown to be announced.', type: 'break' }
];

const scheduleList = document.querySelector('#schedule-list');
scheduleList.innerHTML = sessions.map(session => {
  const people = session.people?.map(person => `<div class="person-line"><b>${person.role}</b><span>${person.name} · ${person.affiliation}${person.title ? `<em>${person.title}</em>` : ''}</span></div>`).join('') || '';
  return `<article class="schedule-item ${session.type === 'break' ? 'break' : ''}"><time>${session.time}</time><div><span class="schedule-kind">${session.kind}</span><h3>${session.title}</h3></div><div class="schedule-detail">${session.description ? `<p>${session.description}</p>` : ''}<div class="schedule-people">${people}</div></div></article>`;
}).join('');

const groups = [
  { label: 'Keynote', title: 'Keynote Address', people: sessions[1].people },
  ...sessions.filter(s => s.kind.startsWith('Session')).map(s => ({ label: s.kind, title: s.title, people: s.people }))
];
const groupsEl = document.querySelector('#participant-groups');
groupsEl.innerHTML = groups.map((group, groupIndex) => {
  const roles = ['Moderator', 'Keynote speaker', 'Speaker', 'Discussant'];
  const roleBlocks = roles.map(role => {
    const people = group.people.filter(person => person.role === role); if (!people.length) return '';
    const label = role === 'Speaker' ? 'Speakers' : role;
    return `<section class="role-block"><p class="role-label">${label}</p><div class="participant-grid">${people.map(person => `<button class="participant-card" type="button" data-name="${person.name}" data-affiliation="${person.affiliation}" data-role="${person.role} — ${group.label}" data-title="${person.title || ''}"><span class="portrait-placeholder" aria-hidden="true"></span><h4>${person.name}</h4><p>${person.affiliation}</p><p class="card-role">${person.role}</p></button>`).join('')}</div></section>`;
  }).join('');
  return `<section class="participant-session"><div class="participant-session-head"><span>${String(groupIndex + 1).padStart(2, '0')}</span><h3>${group.title}</h3></div>${roleBlocks}</section>`;
}).join('');

const dialog = document.querySelector('#participant-dialog');
const dialogName = document.querySelector('#dialog-name');
const dialogRole = document.querySelector('#dialog-role');
const dialogAffiliation = document.querySelector('#dialog-affiliation');
const dialogPresentation = document.querySelector('#dialog-presentation');
const closeDialog = document.querySelector('.dialog-close');
document.addEventListener('click', event => {
  const card = event.target.closest('.participant-card');
  if (!card) return;
  dialogName.textContent = card.dataset.name;
  dialogRole.textContent = card.dataset.role;
  dialogAffiliation.textContent = card.dataset.affiliation;
  dialogPresentation.innerHTML = card.dataset.title ? `<h3>Presentation</h3><p>“${card.dataset.title}”</p>` : '';
  dialog.showModal();
});
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => { const state = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!state)); nav.classList.toggle('is-open', !state); });
document.querySelectorAll('.nav-trigger').forEach(trigger => trigger.addEventListener('click', () => { const group = trigger.closest('.nav-group'); const open = group.classList.toggle('open'); trigger.setAttribute('aria-expanded', String(open)); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.nav-group.open').forEach(group => { group.classList.remove('open'); group.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); }); });
