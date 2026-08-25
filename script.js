// Add the organizer-approved Google Form URL here when it is available.
const REGISTRATION_FORM_URL = '';

const people = {
  'Kyung-Sup Chang': { photo: 'photos/kyungsup-chang.jpg', bio: 'Chang Kyung-Sup is SNU Distinguished Professor of Sociology (special appointment), Seoul National University. His research interests include compressed modernity and social theory, comparative citizenship regimes, development politics and social policy, and transnational Asianization.' },
  'Jeong-Woo Koo': { photo: 'photos/jeongwoo-koo.png', bio: 'Jeong-Woo Koo is Professor of Sociology at Sungkyunkwan University (SKKU), where he directs the Sungkyunkwan Center for Human Rights and Development. His research interests include global and transnational sociology, human rights, digital sociology, and corporate social responsibility.' },
  'Dong-Kyun Im': { photo: 'photos/dongkyun-im.png', bio: 'Dong-Kyun Im is a Professor of Sociology at Seoul National University and Director of the Institute for Social Development and Policy Research. His research explores inequality and fairness, welfare and taxation, digital citizenship, artificial intelligence, and social trust and well-being across Asian societies.' },
  'Jieun Kim': { photo: 'photos/jieun-kim.jpg', bio: 'Jieun Kim is an Assistant Professor in the Department of Political Science and International Relations at Seoul National University. Her research focuses on comparative politics and Chinese politics, examining seemingly democratic institutions within authoritarian regimes and state-society relations at the intersection of language and politics.' },
  'Chungshik Moon': { photo: 'photos/chungshik-moon.jpg', bio: 'Chungshik Moon is an Associate Professor in the Department of Political Science and International Relations at Chung-Ang University. His research and teaching focus on international relations and comparative politics, including foreign direct investment, official development assistance, authoritarian institutions, and the shadow economy.' },
  'Taesuh Cha': { photo: 'photos/taesuh-cha.jpg', bio: 'Taesuh CHA is an Associate Professor in the Department of Political Science and International Relations at Seoul National University. He specializes in U.S. foreign policy, international relations theory, and the history of international relations.' },
  'Soo Yeon Kim': { photo: 'photos/soo-yeon-kim.jpg', bio: 'Soo Yeon Kim is an Associate Professor in the School of Public Policy and Global Affairs, Editor of Pacific Affairs, and Korea Foundation Chair at the University of British Columbia. Her research focuses on international political economy, trade politics, rising powers and global economic governance, and regional integration.' },
  'Brandon Ives': { photo: 'photos/brandon-ives.jpg' },
  'Yoonsun Han': { photo: 'photos/yoonsun-han.png', bio: 'Yoon-Sun Han is an Assistant Professor in the Department of Social Welfare at Seoul National University. Her research focuses on child and youth welfare, social safety nets for at-risk youth, the integration of youth with immigrant backgrounds, family diversity, and big-data approaches to social welfare research.' },
  'Jeong Hyun Kim': { photo: 'photos/jeonghyun-kim.jpg', bio: 'Jeong Hyun Kim is an Associate Professor in the Department of Political Science and International Studies at Yonsei University. Her research uses gender and politics to study political representation, public opinion, and contemporary challenges to democracy.' },
  'Min Hee Go': { photo: 'photos/minhee-go.jpg', bio: 'Min Hee Go is a Professor in the Department of Political Science and International Relations at Ewha Womans University, Chief Communications Officer, and Director of the Ewha Institute of Politics. Her research examines how interests of, and attitudes toward, social minorities are perceived and represented in democratic politics.' },
  'Sung Eun Kim': { photo: 'photos/sungeun-kim.png', bio: 'Sung Eun Kim is an Associate Professor in the Department of Political Science and International Relations at Korea University. Her research focuses on international political economy and environmental politics, including international trade, climate and energy policy, and foreign aid.' },
  'Joonseok Yang': { photo: 'photos/joonseok-yang.jpg', bio: 'Joonseok Yang is an Assistant Professor in the Department of Political Science and International Relations at Yonsei University. His research and teaching focus on international relations and comparative politics, especially trade and investment, environmental politics, energy policy, and public diplomacy.' },
  'ByungKoo Kim': { photo: 'photos/byungkoo-kim.png', bio: 'ByungKoo Kim is an Assistant Professor of Data Science at the KDI School of Public Policy and Management. His research lies at the intersection of international political economy and quantitative methods, with a focus on global supply chains, trade governance, and Bayesian models for networked data.' },
  'One-Sun Cho': { photo: 'photos/onesun-cho.jpg', bio: 'One-Sun Cho is an Associate Research Fellow at the Science and Technology Policy Institute and an Adjunct Professor at Hanyang University. His research focuses on technology and international relations, economic security, cybersecurity, and innovation policy.' },
  'Seungjun Kim': { photo: 'photos/seungjun-kim.jpg', bio: 'Seungjun Kim is an Associate Professor at the KDI School of Public Policy and Management. His research explores international political economy, foreign direct investment, government-business relations, industrial policy, and geo-economic statecraft.' }
};

const sessions = [
  { time: '09:00–09:10', kind: 'Opening', title: 'Welcome and Opening Remarks', type: 'break' },
  { time: '09:10–09:40', kind: 'Keynote', title: 'Keynote Address', people: [{ role: 'Keynote speaker', name: 'Kyung-Sup Chang', affiliation: 'SNU', title: 'Asia in Asianization: 21st Century Trends in Transnational Societization' }] },
  { time: '09:40–11:10', kind: 'Session 1', title: 'Connectivity and the Challenges to the Liberal Script', description: 'Connectivity as a constitutive condition for resilience across geo-political, societal, and technological dimensions.', people: [{ role: 'Moderator', name: 'Diana Panke', affiliation: 'SCRIPTS' }, { role: 'Speaker', name: 'Tanja Borzel', affiliation: 'SCRIPTS', title: 'Varieties of Connectivity Scripts and their Resilience' }, { role: 'Speaker', name: 'Jeong-Woo Koo', affiliation: 'Sungkyunkwan', title: 'Organizational Connectivity and the Resilience of the Liberal Script: Institutional Investors, Human Rights Policies, and Due Diligence' }, { role: 'Speaker', name: 'Yasemin Soysal', affiliation: 'SCRIPTS', title: 'Societal Connectivity as Resilience and Backlash' }, { role: 'Discussant', name: 'Dong-Kyun Im', affiliation: 'SNU' }] },
  { time: '11:10–11:30', kind: 'Break', title: 'Coffee Break', type: 'break' },
  { time: '11:30–13:00', kind: 'Session 2', title: 'Geo-Political and Geo-Economic Connectivity: Entanglements, Vulnerabilities, and the Liberal Script', description: 'Trade patterns, financial linkages, Belt and Road, strategic alignments, and their impact on liberal institutions.', people: [{ role: 'Moderator', name: 'Jieun Kim', affiliation: 'SNU' }, { role: 'Speaker', name: 'Mark Hallerberg', affiliation: 'SCRIPTS', title: 'Infrastructure Financing: Promoting Liberal Policies or Entrenching Authoritarianism?' }, { role: 'Speaker', name: 'Chungshik Moon', affiliation: 'Chung-Ang University', title: 'Title to be announced' }, { role: 'Speaker', name: 'Taesuh Cha', affiliation: 'SNU', title: 'The End of Swinging Inside? Connectivity, Vulnerability, and South Korea’s Strategic Reckoning in an Era of Great-Power Competition' }, { role: 'Speaker', name: 'Soo Yeon Kim', affiliation: 'University of British Columbia', title: 'Rescripting the Liberal Order? The AIIB and the Politicsof Infrastructure Finance' }, { role: 'Discussant', name: 'Brandon Ives', affiliation: 'SNU' }] },
  { time: '13:00–14:30', kind: 'Break', title: 'Lunch Break', type: 'break' },
  { time: '14:30–16:00', kind: 'Session 3', title: 'Societal Connectivity: Migration, Cohesion, and the Liberal Script', description: 'Migration, demographic change, gender, collective identities, belonging, and implications for the liberal script.', people: [{ role: 'Moderator', name: 'Yoonsun Han', affiliation: 'SNU' }, { role: 'Speaker', name: 'Gulay Caglar', affiliation: 'SCRIPTS', title: 'The Promise of Gender Equality: Connectivity, Normative Tensions, and the Resilience of the Liberal Script' }, { role: 'Speaker', name: 'Jeong Hyun Kim', affiliation: 'Yonsei University', title: 'Does Women’s Leadership Enhance Legislative Civility? Evidence from the South Korean National Assembly' }, { role: 'Speaker', name: 'Min Hee Go', affiliation: 'Ewha Womans University', title: 'The Emotional Architecture of Social Disconnection: Identity, Class, and Outgroup Policy Opposition in South Korea' }, { role: 'Discussant', name: 'Sung Eun Kim', affiliation: 'Korea University' }] },
  { time: '16:00–16:20', kind: 'Break', title: 'Coffee Break', type: 'break' },
  { time: '16:20–17:50', kind: 'Session 4', title: 'Technological Connectivity: Digital Infrastructures, Innovation Networks, and Weaponized Interdependence', description: 'Digital infrastructures, technology exchanges, open markets under pressure, and responses by liberal institutions.', people: [{ role: 'Moderator', name: 'Joonseok Yang', affiliation: 'Yonsei University' }, { role: 'Speaker', name: 'Genia Kostka', affiliation: 'SCRIPTS', title: 'Emergent Digital (Dis-)Orders: AI Governance between Liberal and Authoritarian Scripts' }, { role: 'Speaker', name: 'ByungKoo Kim', affiliation: 'KDI', title: 'Barking Dogs Never Bite? Exit Options, Crisis Escalation, and the Onset of Trade Sanctions' }, { role: 'Speaker', name: 'One-Sun Cho', affiliation: 'STEPI', title: 'Two Logics of Connectivity in the Submarine Cable Network: Who Excludes, Who Entangles, and Why' }, { role: 'Discussant', name: 'Seungjun Kim', affiliation: 'KDI' }] },
  { time: '17:50–19:00', kind: 'Closing', title: 'Closing Session / Workshop Dinner / Informal Networking', description: 'Exact breakdown to be announced.', type: 'break' }
];

const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const extra = person => people[person.name] || {};
const portrait = (person, className = '') => extra(person).photo ? `<img class="portrait ${className}" src="${extra(person).photo}" alt="Portrait of ${escapeHtml(person.name)}" loading="lazy" />` : `<span class="portrait-placeholder ${className}" aria-hidden="true"></span>`;

document.querySelector('#schedule-list').innerHTML = sessions.map(session => {
  const list = session.people?.map(person => `<div class="person-line"><b>${escapeHtml(person.role)}</b><span>${escapeHtml(person.name)} · ${escapeHtml(person.affiliation)}${person.title ? `<em>${escapeHtml(person.title)}</em>` : ''}</span></div>`).join('') || '';
  return `<article class="schedule-item ${session.type === 'break' ? 'break' : ''}"><time>${session.time}</time><div><span class="schedule-kind">${session.kind}</span><h3>${session.title}</h3></div><div class="schedule-detail">${session.description ? `<p>${session.description}</p>` : ''}<div class="schedule-people">${list}</div></div></article>`;
}).join('');

const groups = [{ label: 'Keynote', title: 'Keynote Address', people: sessions[1].people }, ...sessions.filter(session => session.kind.startsWith('Session')).map(session => ({ label: session.kind, title: session.title, people: session.people }))];
const card = (person, group) => `<button class="participant-card" type="button" data-person="${escapeHtml(person.name)}" data-group="${escapeHtml(group.label)}">${portrait(person)}<h4>${escapeHtml(person.name)}</h4><p>${escapeHtml(person.affiliation)}</p><p class="card-role">${escapeHtml(person.role)}</p></button>`;
document.querySelector('#participant-groups').innerHTML = groups.map((group, index) => {
  const keynote = group.people.filter(person => person.role === 'Keynote speaker');
  const support = group.people.filter(person => person.role === 'Moderator' || person.role === 'Discussant');
  const speakers = group.people.filter(person => person.role === 'Speaker');
  const blocks = [
    keynote.length && `<section class="role-block"><p class="role-label">Keynote speaker</p><div class="participant-grid participant-grid--keynote">${keynote.map(person => card(person, group)).join('')}</div></section>`,
    support.length && `<section class="role-block"><p class="role-label">Moderator &amp; Discussant</p><div class="participant-grid participant-grid--support">${support.map(person => card(person, group)).join('')}</div></section>`,
    speakers.length && `<section class="role-block"><p class="role-label">Speakers</p><div class="participant-grid">${speakers.map(person => card(person, group)).join('')}</div></section>`
  ].filter(Boolean).join('');
  return `<section class="participant-session"><div class="participant-session-head"><span>${String(index + 1).padStart(2, '0')}</span><h3>${group.title}</h3></div>${blocks}</section>`;
}).join('');

const dialog = document.querySelector('#participant-dialog');
const dialogName = document.querySelector('#dialog-name');
const dialogRole = document.querySelector('#dialog-role');
const dialogAffiliation = document.querySelector('#dialog-affiliation');
const dialogPresentation = document.querySelector('#dialog-presentation');
const dialogPhoto = document.querySelector('#dialog-photo');
const dialogBio = document.querySelector('#dialog-bio-text');
document.addEventListener('click', event => {
  const trigger = event.target.closest('.participant-card');
  if (!trigger) return;
  const group = groups.find(item => item.label === trigger.dataset.group);
  const person = group?.people.find(item => item.name === trigger.dataset.person);
  if (!person) return;
  dialogName.textContent = person.name;
  dialogRole.textContent = `${person.role} — ${group.label}`;
  dialogAffiliation.textContent = person.affiliation;
  dialogPhoto.innerHTML = portrait(person, 'large');
  dialogPresentation.innerHTML = person.role === 'Speaker' && person.title ? `<h3>Presentation</h3><p>“${escapeHtml(person.title)}”</p>` : '';
  dialogPresentation.hidden = !dialogPresentation.innerHTML;
  dialogBio.textContent = extra(person).bio || 'Biography to be announced.';
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll('[data-registration-link]').forEach(link => {
  if (REGISTRATION_FORM_URL) {
    link.href = REGISTRATION_FORM_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.classList.remove('disabled');
  } else {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => { const state = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!state)); nav.classList.toggle('is-open', !state); });
document.querySelectorAll('.nav-trigger').forEach(trigger => trigger.addEventListener('click', () => { const group = trigger.closest('.nav-group'); const open = group.classList.toggle('open'); trigger.setAttribute('aria-expanded', String(open)); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.nav-group.open').forEach(group => { group.classList.remove('open'); group.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); }); });
