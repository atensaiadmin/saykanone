// Central content store — easy for the Grandmaster (or whoever maintains the site)
// to edit later. This is also where a future CMS would write into.

export const site = {
  brand: 'Saykan Combat',
  tagline: 'The Art of Grandmaster Modesto "Ding" Llanera',
  phone: '087 061 8897',
  email: 'saykancombat4u@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61579674460665',
  legacy: 'https://fmacombat.wordpress.com',
}

export const hero = {
  eyebrow: 'Escrima · Arnis · Kali · Mano Mano',
  title: ['Saykan', 'Combat'],
  subtitle: 'Combat Dance of the Noble Men',
  lead:
    'The official home of Saykan Combat — the Filipino Martial Art founded by Grandmaster Modesto "Ding" Llanera. Authentic weapons, empty-hand and health movement, taught at Masters Temple Bray and at seminars worldwide on invitation.',
  primaryCta: { label: 'Train With Us', href: '#classes' },
  secondaryCta: { label: 'About The Grandmaster', href: '#grandmaster' },
}

export const about = {
  kicker: 'About Saykan Combat',
  title: 'A complete Filipino Martial Art for life',
  body: [
    'Saykan Combat is a complete Filipino Martial Art system covering all ranges of fighting — kicking, boxing, trapping, locking, throws, ground pins, and defence against weapons. The art was developed by Grandmaster Modesto "Ding" Llanera over a lifetime of study, and battle-tested in real situations on the streets of Manila.',
    'The name Saykan literally means "combat dance of the noble men" — reflecting the Grandmaster\'s belief that a martial art is more than fighting. It should sharpen the body, calm the mind, and build positive character. Saykan Combat is taught exactly as it was passed down: practical, natural, respectful — and kept alive through direct transmission from Grandmaster Llanera and his licensed instructors.',
  ],
  stats: [
    { value: '7th', label: 'Dan Escrima / Arnis' },
    { value: '40+', label: 'Years Teaching' },
    { value: '18', label: 'Levels to Black Belt' },
    { value: 'IRL', label: 'Headquarters Bray' },
  ],
}

export const disciplines = [
  {
    id: 'arnis',
    name: 'Saykan Arnis',
    sub: 'Weapons',
    image: 'assets/img/programs/arnis.jpg',
    text:
      'Primarily a weapon art using single stick (26"), double stick, short stick, palm stick, Filipino staff, three-prong palm spike, single and double dagger, improvised weapons, and empty hand against weapons.',
  },
  {
    id: 'manomano',
    name: 'Mano Mano',
    sub: 'Empty Hand',
    image: 'assets/img/programs/manomano.jpg',
    text:
      'A practical, no-nonsense street self-defence system developed by the Grandmaster to deal with both empty-hand and weapon attacks. Easy to learn, highly effective, drawn from real Manila street combat.',
  },
  {
    id: 'likasan',
    name: 'Saykan Likasan',
    sub: 'Health & Movement',
    image: 'assets/img/programs/likasan.jpg',
    text:
      'A meditative movement system similar to Tai Chi and yoga, developed by Grandmaster Llanera. Graceful flows with martial application that calm the nervous system, promote healing, and improve flexibility, strength and balance.',
  },
  {
    id: 'panantukan',
    name: 'Panantukan',
    sub: 'Filipino Boxing',
    image: 'assets/img/programs/panantukan.jpg',
    text:
      'Counter-striking, sticking, evasion and destabilising. Open-hand techniques to vital areas, knees, elbows and ridge-hands — woven into the trade-mark flowing patterns of Filipino Martial Arts.',
  },
]

// The home academy — where weekly classes are run.
export const academy = {
  name: 'Masters Temple — Bray',
  address: 'Upstairs, Bray Bowl (beside Bray Dart Station), Co. Wicklow, Ireland',
  schedule: 'Saturdays · 3:00pm – 4:30pm',
  curriculum: 'Saykan Combat — Escrima · Arnis · Mano Mano',
  instructor: 'Master Paul Gahan, 5th Degree Black Belt',
  notes: [
    'Adults 18+. Beginners always welcome.',
    'Classes cover warm-up, striking, blocking, forms, counters, locks, throws and ground pins.',
    'First 60 minutes: weapons. Final 30 minutes: empty hand and the relationship between the two.',
  ],
}

// The Grandmaster — the centre of gravity for the whole site.
export const grandmaster = {
  kicker: 'The Grandmaster',
  name: 'Grandmaster Modesto "Ding" Llanera',
  ranks: '7th Dan Escrima/Arnis · 7th Dan Shorin Ryu Karate · Black belts in Shotokan & Aikido',
  image: 'assets/img/team/grandmaster.jpg',
  bio: [
    'Grandmaster Llanera grew up in Manila on the boundary between two of the city\'s biggest crime gangs. He witnessed large-scale street battles fought with knives, machetes, bows and improvised weapons — and that lived experience shaped a martial art designed to work in real, violent encounters, not in a competition ring.',
    'Over decades he became an accomplished martial artist across Filipino Martial Arts, multiple styles of Karate, Kung Fu, Aikido, Ju-Jitsu and Boxing — reaching 7th Dan in Escrima/Arnis, 7th Dan in Shorin Ryu Karate, and the highest-graded student under his Kung Fu master. He also holds black belts in Shotokan Karate and Aikido.',
    'Now resident in Ireland, the Grandmaster heads Saykan Combat from the Masters Temple in Bray and travels regularly — by invitation — to teach seminars and instructor courses internationally.',
  ],
  philosophy:
    '"A martial art is for life. It should be functional, address the weaknesses I saw in other arts, and promote health and a positive attitude. People learn best when they enjoy themselves."',
}

// Seminars are NOT a fixed schedule — they happen by invitation, anywhere.
// Edit/extend this list to advertise upcoming or recent seminars.
export const seminars = {
  intro:
    'Grandmaster Llanera travels regularly to host Saykan Combat seminars and instructor workshops by invitation — at clubs, academies, and private gatherings around Ireland and beyond. If you would like to host the Grandmaster at your own club, please get in touch.',
  highlights: [
    {
      title: 'Saykan Combat Seminar — Masters Temple, Bray',
      where: 'Bray, Co. Wicklow',
      blurb: 'Single & double stick counters and empty-hand techniques with the Grandmaster.',
      image: 'assets/img/events/seminar-bray.jpg',
    },
    {
      title: 'Visiting Seminar — Co. Meath',
      where: 'Bohermeen, Co. Meath',
      blurb: 'A guest session with one of the Grandmaster\'s long-standing students, open to invited participants.',
      image: 'assets/img/events/seminar-meath.jpg',
    },
    {
      title: 'Instructor Apprenticeship Intensive',
      where: 'By invitation, internationally',
      blurb: 'Direct training with the Grandmaster for licensed instructors and senior candidates.',
      image: 'assets/img/events/seminar-intl.jpg',
    },
  ],
  cta: { label: 'Invite the Grandmaster', href: '#contact' },
}

export const principles = [
  { title: 'Real, not theatrical', text: 'Techniques kept for efficiency, not esoteric value — battle-tested since the 15th century.' },
  { title: 'Natural body motion', text: 'Built around how the body actually moves under stress. Kind to the joints, sharp under pressure.' },
  { title: 'Respect over ego', text: 'No competition culture. Students help each other improve in a safe, friendly environment.' },
  { title: 'Health & longevity', text: 'Likasan, breathing and structured warm-ups make the art sustainable into older age.' },
]

export const faqs = [
  {
    q: 'Do I need any martial arts experience?',
    a: 'No. We take all new students through a progressive structured syllabus, so beginners are catered for and always welcome.',
  },
  {
    q: 'Do I have to be strong or fit?',
    a: 'No. The art relies on technique, flow and proper structure rather than brute force — which is why it suits smaller, older or less athletic people very well.',
  },
  {
    q: 'I have an old injury — can I still train?',
    a: 'Many of our students do. Tell the instructor before class. You will not be pushed into anything that aggravates an injury, and weapons work in particular is very kind to the body.',
  },
  {
    q: 'How often should I train?',
    a: 'Once a week is fine for a hobby. Two classes a week is a good pace for self-defence ability. Instructors and aspiring instructors should drill daily.',
  },
  {
    q: 'Are there grades or belts?',
    a: 'Yes. The Saykan Combat syllabus has 18 levels to 1st Degree Black Belt across Mano Mano (empty hand) and Arnis (weapons). Grading is used as a measure of progress, not a competition.',
  },
  {
    q: 'Can the Grandmaster come to my club?',
    a: 'Yes — Grandmaster Llanera regularly accepts invitations to host seminars and instructor courses. Use the contact form to enquire about hosting him.',
  },
  {
    q: 'What do I wear?',
    a: 'A loose plain t-shirt and tracksuit bottoms to start. Within a month you should wear the official uniform — black martial arts trousers and Saykan Combat t-shirt.',
  },
]
