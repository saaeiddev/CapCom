const games = [
  {
    id:'resident-evil',
    code:'RE',
    title:'Resident Evil',
    year:'1996—',
    genre:'Survival Horror',
    accent:'#61d6ff',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
    tagline:'Survive the outbreak. Uncover the conspiracy.',
    summary:'Capcom’s landmark survival-horror series follows heroes confronting viral outbreaks, engineered bio-organic weapons and the organizations behind them. The archive focuses on the games’ characters, equipment and iconic locations.',
    developer:'Capcom',
    focus:'Biohazard / Survival',
    characters:[
      {name:'Leon S. Kennedy',role:'Government agent',bio:'A Raccoon City survivor who later becomes a highly trained U.S. government agent. Calm under pressure, Leon repeatedly faces bio-terror incidents around the world.'},
      {name:'Jill Valentine',role:'S.T.A.R.S. / BSAA',bio:'A veteran survivor of the Mansion Incident and Raccoon City outbreak, known for her resilience, tactical skill and long fight against bio-terrorism.'},
      {name:'Claire Redfield',role:'TerraSave activist',bio:'A survivor of Raccoon City who later works to aid victims of bioterrorism. Claire combines compassion with practical combat and survival skills.'},
      {name:'Chris Redfield',role:'BSAA operative',bio:'A former S.T.A.R.S. member and one of the series’ central anti-bioterror figures, active across numerous global incidents.'}
    ],
    arsenal:[
      {name:'SG-09 R',type:'Handgun',note:'Leon’s customized sidearm in Resident Evil 4.'},
      {name:'Combat Knife',type:'Melee',note:'A vital close-range survival tool used for parries, counters and utility.'},
      {name:'W-870',type:'Shotgun',note:'A powerful pump-action shotgun suited to close-range crowd control.'},
      {name:'Rocket Launcher',type:'Heavy weapon',note:'A recurring high-damage weapon associated with climactic encounters.'}
    ],
    locations:[
      {name:'Raccoon City',note:'The doomed Midwestern city at the center of the 1998 outbreak.'},
      {name:'Spencer Mansion',note:'The isolated estate connected to the original Mansion Incident.'},
      {name:'R.P.D.',note:'Raccoon Police Department headquarters and a defining RE2 location.'},
      {name:'Valdelobos',note:'The rural European setting explored by Leon in Resident Evil 4.'}
    ],
    source:'https://game.capcom.com/residentevil/'
  },
  {
    id:'devil-may-cry',
    code:'DMC',
    title:'Devil May Cry',
    year:'2001—',
    genre:'Stylish Action',
    accent:'#ff526f',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg',
    tagline:'Demons, style and impossible weapons.',
    summary:'A high-speed action series built around expressive combat, demonic bloodlines and stylish weapon switching. Its heroes turn supernatural battles into spectacular displays of skill.',
    developer:'Capcom',
    focus:'Demon Hunting',
    characters:[
      {name:'Dante',role:'Devil hunter',bio:'The wisecracking son of the legendary dark knight Sparda. Dante mixes swordsmanship, firearms and demonic power with a fearless sense of style.'},
      {name:'Nero',role:'Devil hunter',bio:'A younger hunter with immense demonic potential. Nero combines the Red Queen sword, Blue Rose revolver and interchangeable Devil Breaker arms.'},
      {name:'Vergil',role:'Son of Sparda',bio:'Dante’s twin brother, driven by discipline and the pursuit of power. His precise swordsmanship centers on the Yamato.'},
      {name:'V',role:'Mysterious summoner',bio:'A fragile but enigmatic figure who fights indirectly through demonic familiars while carrying a cane for finishing blows.'}
    ],
    arsenal:[
      {name:'Devil Sword Dante',type:'Demonic sword',note:'A signature blade embodying Dante’s demonic power.'},
      {name:'Ebony & Ivory',type:'Dual pistols',note:'Dante’s iconic customized handguns, built for rapid stylish gunplay.'},
      {name:'Red Queen',type:'Exceed sword',note:'Nero’s engine-driven sword, capable of storing explosive power.'},
      {name:'Yamato',type:'Katana',note:'Vergil’s legendary blade, famed for its extraordinary cutting power.'}
    ],
    locations:[
      {name:'Red Grave City',note:'The devastated urban setting at the heart of Devil May Cry 5.'},
      {name:'Qliphoth',note:'A colossal demonic tree that erupts through the city.'},
      {name:'Temen-ni-gru',note:'The demonic tower central to Devil May Cry 3.'},
      {name:'Fortuna',note:'The island city ruled by the Order of the Sword in Devil May Cry 4.'}
    ],
    source:'https://www.devilmaycry.com/5/'
  },
  {
    id:'street-fighter',
    code:'SF',
    title:'Street Fighter',
    year:'1987—',
    genre:'Fighting',
    accent:'#ffbb3c',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg',
    tagline:'World warriors. Legendary rivalries.',
    summary:'Capcom’s defining fighting franchise brings martial artists from across the world together in competitive combat, each with a distinctive visual identity, fighting style and move set.',
    developer:'Capcom',
    focus:'World Fighting',
    characters:[
      {name:'Ryu',role:'Ansatsuken martial artist',bio:'A disciplined wandering fighter who devotes his life to self-improvement and the pursuit of true strength.'},
      {name:'Chun-Li',role:'Kung fu master',bio:'A legendary martial artist and former law-enforcement officer known for speed, technique and powerful kicking attacks.'},
      {name:'Luke Sullivan',role:'MMA fighter',bio:'A modern fighter and trainer whose aggressive style blends boxing, MMA and projectile attacks.'},
      {name:'Cammy White',role:'Special forces operative',bio:'A fast, precise fighter with a military background, acrobatic offense and relentless pressure.'}
    ],
    arsenal:[
      {name:'Hadoken',type:'Technique',note:'Ryu’s signature projectile technique.'},
      {name:'Shoryuken',type:'Technique',note:'A rising uppercut and one of fighting games’ most recognizable attacks.'},
      {name:'Kikoken',type:'Technique',note:'Chun-Li’s focused energy projectile.'},
      {name:'Spiral Arrow',type:'Technique',note:'Cammy’s rapid advancing attack.'}
    ],
    locations:[
      {name:'Metro City',note:'A major Street Fighter 6 hub connected to World Tour.'},
      {name:'Genbu Temple',note:'A tranquil stage associated with Ryu.'},
      {name:'Tian Hong Yuan',note:'A Chinatown setting associated with Chun-Li.'},
      {name:'Training Room',note:'The neutral laboratory of frame data, practice and matchup study.'}
    ],
    source:'https://www.streetfighter.com/6/'
  },
  {
    id:'monster-hunter',
    code:'MH',
    title:'Monster Hunter',
    year:'2004—',
    genre:'Action RPG',
    accent:'#d6c07d',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg',
    tagline:'Track. Prepare. Hunt.',
    summary:'A cooperative action-RPG series centered on studying giant creatures, preparing specialized equipment and mastering a broad family of weapon classes in richly realized ecosystems.',
    developer:'Capcom',
    focus:'Hunting / Ecology',
    characters:[
      {name:'The Hunter',role:'Player hunter',bio:'A customizable guild hunter who studies monsters, crafts equipment and masters specialized weapon types.'},
      {name:'Alma',role:'Handler',bio:'A guild-appointed handler who supports the expedition with research, quests and field coordination.'},
      {name:'Gemma',role:'Smithy',bio:'A skilled craftsperson supporting the expedition’s equipment and weapon needs.'},
      {name:'Nata',role:'Key expedition figure',bio:'A young character whose story is closely tied to the mysteries encountered in the Forbidden Lands.'}
    ],
    arsenal:[
      {name:'Great Sword',type:'Weapon class',note:'Slow, deliberate and capable of devastating charged attacks.'},
      {name:'Long Sword',type:'Weapon class',note:'A mobile blade built around flowing combos and gauge management.'},
      {name:'Bow',type:'Weapon class',note:'A precise ranged weapon with coatings and evasive mobility.'},
      {name:'Heavy Bowgun',type:'Weapon class',note:'A high-impact ranged platform using specialized ammunition.'}
    ],
    locations:[
      {name:'Forbidden Lands',note:'The vast expedition region at the heart of Monster Hunter Wilds.'},
      {name:'Windward Plains',note:'A dynamic grassland shaped by dramatic environmental conditions.'},
      {name:'Scarlet Forest',note:'A lush region defined by dense vegetation and waterways.'},
      {name:'Oilwell Basin',note:'A harsh zone of heat, industry-like geology and powerful monsters.'}
    ],
    source:'https://www.monsterhunter.com/wilds/'
  },
  {
    id:'mega-man',
    code:'MM',
    title:'Mega Man',
    year:'1987—',
    genre:'Action Platformer',
    accent:'#39a8ff',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/742300/header.jpg',
    tagline:'The Blue Bomber never stops evolving.',
    summary:'A foundational action-platform series famous for tightly designed stages, Robot Master bosses and the ability to acquire enemy weapons after victory.',
    developer:'Capcom',
    focus:'Robot Masters',
    characters:[
      {name:'Mega Man',role:'Robot hero',bio:'A heroic robot who volunteers to stop Dr. Wily and protect people, adapting to threats by copying special weapons.'},
      {name:'Dr. Wily',role:'Robotics villain',bio:'A brilliant scientist whose schemes and Robot Masters repeatedly challenge Mega Man.'},
      {name:'Roll',role:'Support robot',bio:'Mega Man’s kind-hearted robotic sister and a recurring ally created by Dr. Light.'},
      {name:'Rush',role:'Robotic companion',bio:'Mega Man’s versatile canine companion who transforms to help with traversal and support.'}
    ],
    arsenal:[
      {name:'Mega Buster',type:'Arm cannon',note:'Mega Man’s standard energy weapon, capable of charged shots in later games.'},
      {name:'Block Dropper',type:'Special weapon',note:'Acquired from Block Man in Mega Man 11.'},
      {name:'Speed Gear',type:'Double Gear system',note:'Temporarily accelerates Mega Man’s perception and movement advantage.'},
      {name:'Power Gear',type:'Double Gear system',note:'Temporarily boosts offensive capability and special weapon power.'}
    ],
    locations:[
      {name:'Dr. Light’s Lab',note:'Home base of Mega Man, Roll and their creator.'},
      {name:'Robot Master Stages',note:'Purpose-built themed stages ending in boss battles.'},
      {name:'Gear Fortress',note:'Industrial environments reflecting Wily’s latest machinery.'},
      {name:'Wily Castle',note:'The recurring final stronghold of Mega Man’s nemesis.'}
    ],
    source:'https://megaman.capcom.com/mm11.html'
  },
  {
    id:'ace-attorney',
    code:'AA',
    title:'Ace Attorney',
    year:'2001—',
    genre:'Adventure',
    accent:'#6ea7ff',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/787480/header.jpg',
    tagline:'Investigate contradictions. Defend the truth.',
    summary:'A courtroom adventure series where investigation, evidence and dramatic cross-examination become the tools of battle. Players expose contradictions to reveal what really happened.',
    developer:'Capcom',
    focus:'Courtroom Mystery',
    characters:[
      {name:'Phoenix Wright',role:'Defense attorney',bio:'A defense attorney famous for improbable turnarounds, careful cross-examinations and an unwavering belief in his clients.'},
      {name:'Miles Edgeworth',role:'Prosecutor',bio:'A brilliant prosecutor and Phoenix’s longtime rival, driven by logic, preparation and a complicated relationship with the truth.'},
      {name:'Maya Fey',role:'Spirit medium',bio:'Phoenix’s energetic assistant and a member of the Fey clan, deeply connected to the series’ supernatural mysteries.'},
      {name:'Mia Fey',role:'Defense attorney',bio:'Phoenix’s mentor and a formidable attorney whose legacy shapes many of his earliest cases.'}
    ],
    arsenal:[
      {name:'Attorney Badge',type:'Key item',note:'Proof of a defense attorney’s profession—and occasionally a conversation starter.'},
      {name:'Court Record',type:'Evidence system',note:'The player’s collection of testimony, profiles, documents and physical evidence.'},
      {name:'Objection!',type:'Courtroom action',note:'Used when testimony conflicts with evidence or logic.'},
      {name:'Psyche-Locks',type:'Investigation mechanic',note:'Mental barriers revealed and broken through evidence in later entries.'}
    ],
    locations:[
      {name:'District Court',note:'The dramatic courtroom setting of many decisive confrontations.'},
      {name:'Wright & Co. Law Offices',note:'Phoenix’s familiar workplace and investigation hub.'},
      {name:'Detention Center',note:'Where defendants and witnesses provide essential case information.'},
      {name:'Kurain Village',note:'The home of the Fey clan’s spirit-medium tradition.'}
    ],
    source:'https://www.ace-attorney.com/trilogy/'
  },
  {
    id:'dead-rising',
    code:'DR',
    title:'Dead Rising',
    year:'2006—',
    genre:'Action Horror',
    accent:'#e3e5e7',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/2527390/header.jpg',
    tagline:'Anything can be a weapon.',
    summary:'An action-horror sandbox built around zombie swarms, rescue decisions, investigative pressure and improvised weapons assembled from the environment.',
    developer:'Capcom',
    focus:'Zombie Sandbox',
    characters:[
      {name:'Frank West',role:'Photojournalist',bio:'An investigative photojournalist who arrives in Willamette chasing a story and becomes trapped inside a massive zombie outbreak.'},
      {name:'Isabela Keyes',role:'Key survivor',bio:'A medically knowledgeable survivor with a critical connection to the Willamette incident.'},
      {name:'Brad Garrison',role:'DHS agent',bio:'A government agent working inside the outbreak to contain the crisis and uncover its cause.'},
      {name:'Carlito Keyes',role:'Antagonist',bio:'A central figure in the conspiracy behind the Willamette incident and its violent escalation.'}
    ],
    arsenal:[
      {name:'Baseball Bat',type:'Improvised melee',note:'A simple but effective mall-survival classic.'},
      {name:'Chainsaw',type:'Power tool',note:'An iconic high-damage improvised weapon.'},
      {name:'Servbot Mask',type:'Novelty item',note:'A humorous recurring visual symbol of Dead Rising’s sandbox tone.'},
      {name:'Shopping Cart',type:'Environmental weapon',note:'Traversal tool, crowd control device and perfect example of improvisation.'}
    ],
    locations:[
      {name:'Willamette Parkview Mall',note:'The huge shopping complex at the center of the original outbreak.'},
      {name:'Leisure Park',note:'An open outdoor connector between the mall’s major plazas.'},
      {name:'Security Room',note:'A refuge and operational base for survivors.'},
      {name:'Willamette',note:'The Colorado town overtaken by the incident.'}
    ],
    source:'https://www.capcom.com/'
  },
  {
    id:'dragons-dogma',
    code:'DD',
    title:"Dragon's Dogma",
    year:'2012—',
    genre:'Action RPG',
    accent:'#f1c56d',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/header.jpg',
    tagline:'A grand fantasy shaped by vocation and fate.',
    summary:'An open-world action RPG series built around vocation-based combat, towering monsters and the Pawn system—AI companions designed to learn, assist and travel between players’ worlds.',
    developer:'Capcom',
    focus:'Fantasy Adventure',
    characters:[
      {name:'The Arisen',role:'Chosen protagonist',bio:'A customizable hero whose stolen heart binds them to a dragon and a larger cycle of fate.'},
      {name:'Main Pawn',role:'Companion',bio:'The player’s primary Pawn, customized to support the Arisen with a chosen vocation and learned behavior.'},
      {name:'Ulrika',role:'Melve leader',bio:'A skilled bow user and important ally encountered during the Arisen’s journey.'},
      {name:'Wilhelmina',role:'Rose Chateau figure',bio:'An influential and enigmatic character with her own role in the political web surrounding Vermund.'}
    ],
    arsenal:[
      {name:'Sword & Shield',type:'Fighter gear',note:'Balanced frontline equipment for defense, counters and close combat.'},
      {name:'Bow',type:'Archer gear',note:'A precise ranged option for exploiting aerial and distant targets.'},
      {name:'Archistaff',type:'Sorcerer gear',note:'A catalyst for devastating high-level magic.'},
      {name:'Duospear',type:'Mystic Spearhand gear',note:'A hybrid weapon supporting agile physical and magick attacks.'}
    ],
    locations:[
      {name:'Vermund',note:'A human kingdom and political center in Dragon’s Dogma 2.'},
      {name:'Battahl',note:'A rugged beastren nation with distinct culture and geography.'},
      {name:'Vernworth',note:'The capital city and major quest hub of Vermund.'},
      {name:'Sacred Arbor',note:'A secluded elven settlement hidden within the forest.'}
    ],
    source:'https://www.dragonsdogma.com/2/'
  },
  {
    id:'okami',
    code:'OK',
    title:'Ōkami',
    year:'2006',
    genre:'Action Adventure',
    accent:'#ff6e68',
    image:'https://cdn.cloudflare.steamstatic.com/steam/apps/587620/header.jpg',
    tagline:'Paint life back into a mythic world.',
    summary:'A painterly action-adventure inspired by Japanese folklore. The sun goddess Amaterasu restores a cursed world using the Celestial Brush, turning artistic gestures into gameplay.',
    developer:'Clover Studio / Capcom',
    focus:'Mythic Adventure',
    characters:[
      {name:'Amaterasu',role:'Sun goddess',bio:'The divine white wolf incarnation of the sun goddess, using Celestial Brush techniques to restore nature and defeat evil.'},
      {name:'Issun',role:'Wandering artist',bio:'A tiny traveling artist who accompanies Amaterasu and provides commentary, humor and guidance.'},
      {name:'Susano',role:'Warrior',bio:'A boastful swordsman whose comic bravado gradually gives way to genuine courage.'},
      {name:'Waka',role:'Prophet',bio:'A mysterious flute-playing swordsman who seems to know far more about Amaterasu’s journey than he first reveals.'}
    ],
    arsenal:[
      {name:'Divine Retribution',type:'Reflector',note:'A divine instrument used by Amaterasu in combat.'},
      {name:'Celestial Brush',type:'Divine technique',note:'Transforms drawn gestures into actions such as slashing, blooming or creating elements.'},
      {name:'Rosary',type:'Divine instrument',note:'A rapid multi-hit weapon class with ranged potential.'},
      {name:'Glaive',type:'Divine instrument',note:'A heavy weapon class built around powerful charged attacks.'}
    ],
    locations:[
      {name:'Kamiki Village',note:'A peaceful village with deep ties to the game’s opening legend.'},
      {name:'Shinshu Field',note:'A broad overworld field revived through Amaterasu’s power.'},
      {name:'Sei-an City',note:'A major city threatened by corruption and supernatural forces.'},
      {name:'Nippon',note:'The mythic land restored across Amaterasu’s journey.'}
    ],
    source:'https://www.capcom.com/'
  }
];

const genres = ['All','Survival Horror','Stylish Action','Fighting','Action RPG','Action Platformer','Adventure','Action Horror','Action Adventure'];
let activeGenre = 'All';
let currentGame = games[0];
let currentTab = 'overview';
let audioOn = false;

const $ = function(sel,root){return (root || document).querySelector(sel);};
const $$ = function(sel,root){return Array.from((root || document).querySelectorAll(sel));};

function esc(value){
  return String(value).replace(/[&<>"']/g,function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch];
  });
}

function gameSearchText(game){
  return [
    game.title,game.genre,game.summary,
    game.characters.map(function(x){return x.name+' '+x.role+' '+x.bio;}).join(' '),
    game.arsenal.map(function(x){return x.name+' '+x.type+' '+x.note;}).join(' '),
    game.locations.map(function(x){return x.name+' '+x.note;}).join(' ')
  ].join(' ').toLowerCase();
}

function renderFilters(){
  $('#genreFilters').innerHTML = genres.map(function(g){
    return '<button class="filter '+(g===activeGenre?'is-active':'')+'" data-genre="'+esc(g)+'" type="button">'+esc(g)+'</button>';
  }).join('');
  $$('.filter').forEach(function(btn){
    btn.addEventListener('click',function(){
      activeGenre = btn.dataset.genre;
      renderFilters();
      renderGames();
      blip(420,.035);
    });
  });
}

function renderGames(){
  var q = $('#searchInput').value.trim().toLowerCase();
  var filtered = games.filter(function(game){
    var genreOK = activeGenre === 'All' || game.genre === activeGenre;
    var searchOK = !q || gameSearchText(game).indexOf(q) !== -1;
    return genreOK && searchOK;
  });
  $('#gameGrid').innerHTML = filtered.length ? filtered.map(function(game){
    return '<article class="game-card" data-id="'+game.id+'" style="--game-accent:'+game.accent+'">'+
      '<div class="game-card__image" style="background-image:url(&quot;'+game.image+'&quot;)"></div>'+
      '<div class="game-card__hud"><span class="game-card__code">ARC // '+game.code+'</span><span class="game-card__genre">'+game.genre+'</span></div>'+
      '<div class="game-card__content"><h3>'+game.title+'</h3><p>'+game.tagline+'</p>'+
      '<div class="game-card__footer"><span>'+game.year+' · '+game.characters.length+' CHARACTERS</span><span class="game-card__open">↗</span></div></div>'+
      '</article>';
  }).join('') : '<div class="empty-state">NO ARCHIVE ENTRIES MATCH THIS SEARCH.</div>';

  $$('.game-card').forEach(function(card){
    card.addEventListener('click',function(){
      openGame(card.dataset.id);
    });
  });
}

function renderCharacters(){
  var roster = [];
  games.forEach(function(game){
    game.characters.forEach(function(char,index){
      if(index < 2){ roster.push({game:game,char:char,index:index}); }
    });
  });
  $('#characterRail').innerHTML = roster.map(function(item){
    var pos = item.index % 2 ? '70% center' : '30% center';
    return '<article class="character-card" data-id="'+item.game.id+'" style="--game-accent:'+item.game.accent+'">'+
      '<div class="character-card__art" style="background-image:url(&quot;'+item.game.image+'&quot;);background-position:'+pos+'"></div>'+
      '<div class="character-card__copy"><small>'+item.game.code+' // '+item.char.role+'</small><h3>'+item.char.name+'</h3><p>'+item.game.title+'</p></div>'+
      '</article>';
  }).join('');
  $$('.character-card').forEach(function(card){
    card.addEventListener('click',function(){openGame(card.dataset.id,'characters');});
  });
}

function renderWorldNodes(){
  var picks = [
    {name:'Raccoon City',accent:'#61d6ff'},
    {name:'Red Grave City',accent:'#ff526f'},
    {name:'Metro City',accent:'#ffbb3c'},
    {name:'Forbidden Lands',accent:'#d6c07d'},
    {name:'Vermund',accent:'#f1c56d'},
    {name:'Kamiki Village',accent:'#ff6e68'},
    {name:'Wily Castle',accent:'#39a8ff'}
  ];
  $('#worldNodes').innerHTML = picks.map(function(x){
    return '<span class="world-node" style="--node-accent:'+x.accent+'">'+x.name+'</span>';
  }).join('');
}

function renderModalContent(){
  var g = currentGame;
  var html = '';
  if(currentTab === 'overview'){
    html = '<div class="overview-grid">'+
      '<div class="prose"><h3>ARCHIVE SUMMARY</h3><p>'+g.summary+'</p></div>'+
      '<div class="fact-grid">'+
      '<div class="fact"><span>SERIES</span><b>'+g.code+'</b></div>'+
      '<div class="fact"><span>ERA</span><b>'+g.year+'</b></div>'+
      '<div class="fact"><span>GENRE</span><b>'+g.genre+'</b></div>'+
      '<div class="fact"><span>FOCUS</span><b>'+g.focus+'</b></div>'+
      '</div></div>';
  }
  if(currentTab === 'characters'){
    html = '<div class="entry-grid">'+g.characters.map(function(c){
      return '<article class="entry-card"><div class="entry-card__top"><i class="entry-dot"></i><h4>'+c.name+'</h4></div><small>'+c.role+'</small><p>'+c.bio+'</p></article>';
    }).join('')+'</div>';
  }
  if(currentTab === 'arsenal'){
    html = '<div class="entry-grid">'+g.arsenal.map(function(a){
      return '<article class="entry-card"><div class="entry-card__top"><i class="entry-dot"></i><h4>'+a.name+'</h4></div><small>'+a.type+'</small><p>'+a.note+'</p></article>';
    }).join('')+'</div>';
  }
  if(currentTab === 'locations'){
    html = '<div class="location-list">'+g.locations.map(function(l){
      return '<div class="location-item"><b>'+l.name+'</b><span>'+l.note+'</span></div>';
    }).join('')+'</div>';
  }
  $('#modalContent').innerHTML = html;
  $('#modalContent').style.setProperty('--accent',g.accent);
}

function openGame(id,tab){
  var game = games.find(function(g){return g.id === id;});
  if(!game){return;}
  currentGame = game;
  currentTab = tab || 'overview';
  $('#modalHero').style.backgroundImage = 'url("'+game.image+'")';
  $('#modalKicker').textContent = 'ARC // '+game.code+' · '+game.genre.toUpperCase();
  $('#modalKicker').style.color = game.accent;
  $('#modalTitle').textContent = game.title;
  $('#modalTagline').textContent = game.tagline;
  $$('.modal__tabs button').forEach(function(btn){btn.classList.toggle('is-active',btn.dataset.tab===currentTab);});
  renderModalContent();
  $('#detailModal').classList.add('is-open');
  $('#detailModal').setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  updateCore(game);
  blip(620,.05);
}

function closeModal(){
  $('#detailModal').classList.remove('is-open');
  $('#detailModal').setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  blip(300,.03);
}

function updateCore(game){
  $('#coreTitle').textContent = game.title.toUpperCase();
  $('#coreMeta').textContent = game.genre.toUpperCase()+' // '+game.year;
  document.documentElement.style.setProperty('--accent',game.accent);
}

function showToast(message){
  var t = $('#toast');
  t.textContent = message;
  t.classList.add('is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(function(){t.classList.remove('is-visible');},1800);
}

function blip(freq,duration){
  if(!audioOn){return;}
  try{
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if(!window.__ctx){window.__ctx = new AudioCtx();}
    var ctx = window.__ctx;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq || 440,ctx.currentTime);
    gain.gain.setValueAtTime(.025,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+(duration || .04));
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime+(duration || .04));
  }catch(e){}
}

function setupEvents(){
  $('#searchInput').addEventListener('input',renderGames);
  document.addEventListener('keydown',function(e){
    if((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k'){
      e.preventDefault();$('#searchInput').focus();$('#searchInput').scrollIntoView({behavior:'smooth',block:'center'});
    }
    if(e.key==='Escape' && $('#detailModal').classList.contains('is-open')){closeModal();}
  });
  $$('[data-close-modal]').forEach(function(el){el.addEventListener('click',closeModal);});
  $$('.modal__tabs button').forEach(function(btn){
    btn.addEventListener('click',function(){
      currentTab = btn.dataset.tab;
      $$('.modal__tabs button').forEach(function(b){b.classList.toggle('is-active',b===btn);});
      renderModalContent();
      blip(500,.03);
    });
  });
  $('#randomEntry').addEventListener('click',function(){
    var pick = games[Math.floor(Math.random()*games.length)];
    openGame(pick.id);
  });
  $('#openWorldIndex').addEventListener('click',function(){
    var pick = games[Math.floor(Math.random()*games.length)];
    openGame(pick.id,'locations');
  });
  $('#soundToggle').addEventListener('click',function(){
    audioOn = !audioOn;
    this.classList.toggle('is-muted',!audioOn);
    showToast(audioOn ? 'INTERFACE AUDIO // ONLINE' : 'INTERFACE AUDIO // MUTED');
    blip(720,.06);
  });
  $('#soundToggle').classList.add('is-muted');
}

function setupThree(){
  if(!window.THREE || window.matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
  var canvas = $('#webgl');
  var renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setClearColor(0x000000,0);

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070b,.045);
  var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,100);
  camera.position.set(0,0,13);

  var group = new THREE.Group();
  group.position.x = window.innerWidth > 760 ? 3.6 : 1.6;
  group.position.y = .4;
  scene.add(group);

  var coreGeo = new THREE.IcosahedronGeometry(1.55,2);
  var coreMat = new THREE.MeshBasicMaterial({color:0x4fbff5,wireframe:true,transparent:true,opacity:.16});
  var core = new THREE.Mesh(coreGeo,coreMat);
  group.add(core);

  var inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(.9,1),
    new THREE.MeshBasicMaterial({color:0x7f7bff,wireframe:true,transparent:true,opacity:.13})
  );
  group.add(inner);

  var rings = [];
  [2.2,2.8,3.4].forEach(function(radius,index){
    var ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius,.012,8,120),
      new THREE.MeshBasicMaterial({color:index===1?0x7d7bff:0x65d9ff,transparent:true,opacity:.16})
    );
    ring.rotation.x = Math.PI/2.5 + index*.34;
    ring.rotation.y = index*.55;
    group.add(ring);rings.push(ring);
  });

  var starCount = window.innerWidth < 700 ? 450 : 950;
  var positions = new Float32Array(starCount*3);
  for(var i=0;i<starCount;i++){
    positions[i*3] = (Math.random()-.5)*32;
    positions[i*3+1] = (Math.random()-.5)*22;
    positions[i*3+2] = (Math.random()-.5)*28;
  }
  var starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));
  var stars = new THREE.Points(starGeo,new THREE.PointsMaterial({color:0x7b9bb8,size:.025,transparent:true,opacity:.48}));
  scene.add(stars);

  var nodeGroup = new THREE.Group();
  group.add(nodeGroup);
  games.slice(0,7).forEach(function(game,index){
    var angle = (index/games.slice(0,7).length)*Math.PI*2;
    var sphere = new THREE.Mesh(
      new THREE.SphereGeometry(.075,12,12),
      new THREE.MeshBasicMaterial({color:new THREE.Color(game.accent),transparent:true,opacity:.9})
    );
    sphere.position.set(Math.cos(angle)*3.05,Math.sin(angle*1.8)*1.35,Math.sin(angle)*1.6);
    nodeGroup.add(sphere);
  });

  var mouseX=0,mouseY=0,scrollY=0;
  window.addEventListener('pointermove',function(e){
    mouseX=(e.clientX/window.innerWidth-.5)*2;
    mouseY=(e.clientY/window.innerHeight-.5)*2;
  },{passive:true});
  window.addEventListener('scroll',function(){scrollY=window.scrollY;},{passive:true});

  var clock = new THREE.Clock();
  function animate(){
    var t=clock.getElapsedTime();
    core.rotation.x=t*.08;core.rotation.y=t*.13;
    inner.rotation.x=-t*.11;inner.rotation.z=t*.16;
    rings[0].rotation.z=t*.035;rings[1].rotation.y=t*.04;rings[2].rotation.z=-t*.03;
    nodeGroup.rotation.z=t*.05;
    stars.rotation.y=t*.004;
    group.rotation.y += (mouseX*.12-group.rotation.y)*.025;
    group.rotation.x += (-mouseY*.08-group.rotation.x)*.025;
    group.position.y = .4-Math.min(scrollY*.00055,2.4);
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize',function(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    group.position.x=window.innerWidth>760?3.6:1.6;
  });
}

function boot(){
  renderFilters();
  renderGames();
  renderCharacters();
  renderWorldNodes();
  setupEvents();
  setupThree();
  updateCore(games[0]);
  $('#statGames').textContent=String(games.length).padStart(2,'0');
  $('#statCharacters').textContent=String(games.reduce(function(n,g){return n+g.characters.length;},0)).padStart(2,'0');
  setTimeout(function(){$('#boot').classList.add('is-hidden');},1100);
}

boot();
