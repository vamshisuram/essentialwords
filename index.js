const words = ['abandon', 'corpse', 'typical', 'vapor', 'tradition', 'approach', 'keen', 'conceal', 'minimum', 'eliminate', 'rural', 'detect', 'jealous', 'dismal', 'scarce', 'villain', 'burden', 'defect', 'tact', 'frigid', 'annual', 'dense', 'campus', 'employee', 'oath', 'inhabit', 'persuade', 'utilize', 'majority', 'neglect', 'vacant', 'numb', 'essential', 'humid', 'assemble', 'deceive', 'hardship', 'peril', 'blend', 'theory', 'explore', 'undoubtedly', 'gallant', 'recline', 'visible', 'descend', 'topic', 'popular', 'data', 'shriek', 'expensive', 'circulate', 'debate', 'thorough', 'unaccustomed', 'sinister', 'beau', 'enormous', 'evade', 'client', 'bachelor', 'tempt', 'devise', 'predict', 'probe', 'comprehensive', 'qualify', 'wager', 'wholesale', 'vanish', 'reform', 'defraud', 'postpone', 'exaggerate', 'vicinity', 'excel', 'evidence', 'ignite', 'consent', 'amateur', 'century', 'feminine', 'solitary', 'abolish', 'massive', 'mediocre', 'rage', 'mount', 'vision', 'urban', 'capsule', 'variety', 'document', 'compete', 'frequent', 'population', 'preserve', 'valid', 'conclude', 'dread', 'glimpse', 'frank', 'denounce', 'survive', 'undeniable', 'masculine', 'recent', 'pollute', 'unique', 'weird', 'resist', 'menace', 'decade', 'reveal', 'torrent', 'prominent', 'lack', 'tendency', 'hesitate', 'prohibit', 'resent', 'security', 'ignore', 'underestimate', 'absurd', 'urgent', 'molest', 'bulky', 'challenge', 'victorious', 'conflict', 'adequate', 'gloomy', 'reluctant', 'miniature', 'numerous', 'minority', 'decrease', 'unforeseen', 'obvious', 'source', 'flexible', 'fiction', 'audible', 'journalist', 'unruly', 'expand', 'slender', 'appeal', 'tragedy', 'famine', 'rival', 'alter', 'surpass', 'addict', 'pedestrian', 'revive', 'violent', 'mature', 'vast', 'wary', 'glance', 'commence', 'brutal', 'sacred', 'doubt', 'aware', 'budget', 'observant', 'opponent', 'revise', 'capacity', 'misfortune', 'nimble', 'identify', 'brawl', 'pledge', 'penetrate', 'avoid', 'manipulate', 'migrate', 'duplicate', 'casual', 'pierce', 'wretched', 'reckless', 'vessel', 'vicious', 'pursue', 'accurate', 'keg', 'horrid', 'persist', 'whirling', 'unanimous', 'microscope', 'nourish', 'rave', 'hazy', 'underdog', 'fortunate', 'grateful', 'harsh', 'economical', 'gleam', 'thrust', 'pioneer', 'cautious', 'quantity', 'lubricate', 'editor', 'bewildered', 'innovative', 'confident', 'opt', 'ingenious', 'harvest', 'emerge', 'plea', 'warden', 'reptile', 'fierce', 'abundant', 'jagged', 'weary', 'acknowledge', 'rarely', 'detest', 'uneasy', 'linger', 'collide', 'justice', 'forbid', 'sneer', 'calculate', 'ambush', 'confirm', 'delinquent', 'logical', 'scowl', 'absorb', 'crafty', 'verify', 'reject', 'exhibit', 'encourage', 'estimate', 'defiant', 'anticipate', 'deprive', 'proceed', 'consider', 'morsel', 'vigor', 'dilemma', 'spouse', 'precaution', 'vermin', 'quota', 'perish', 'detour', 'vocation', 'extract', 'wail', 'threat', 'fragile', 'merit', 'unstable', 'prior', 'symbol', 'ban', 'captive', 'transmit', 'homicide', 'embrace', 'authority', 'panic', 'prosper', 'relieve', 'penalize', 'valiant', 'neutral', 'appropriate', 'devour', 'baffle', 'beneficiary', 'partial', 'trifle', 'architect', 'possible', 'despite', 'outlaw', 'toil', 'depict', 'matrimony', 'compel', 'disrupt', 'promote', 'blunder', 'mortal', 'baggage', 'awkward', 'rash', 'undernourished', 'daze', 'novel', 'squander', 'venture', 'rapid', 'illustrate', 'mourn', 'occupant', 'abroad', 'awesome', 'exhaust', 'disclose', 'subside', 'appoint', 'fugitive', 'guide', 'severity', 'excessive', 'maim', 'quarter', 'calamity', 'quench', 'feeble', 'disaster', 'comprehend', 'site', 'pauper', 'betray', 'unite', 'censor', 'commend', 'quote', 'envy', 'utter', 'cease', 'culprit', 'final', 'verse', 'collapse', 'pacify', 'thrifty', 'juvenile', 'exempt', 'morality', 'prosecute', 'respond', 'miserly', 'bait', 'vain', 'roam', 'bigamy', 'beckon', 'monarch', 'insist', 'repetition', 'attract', 'commuter', 'refer', 'volunteer', 'candidate', 'vague', 'prompt', 'confine', 'distress', 'prejudice', 'precede', 'elevate', 'hasty', 'idle', 'diminish', 'shrill', 'adolescent', 'lottery', 'scorch', 'idol', 'maximum', 'jolly', 'coeducational', 'finance', 'tempest', 'jest', 'flee', 'witty', 'radical', 'obtain', 'soothe', 'patriotic', 'vulnerable', 'hinder', 'spontaneous', 'cinema', 'sympathetic', 'dispute', 'signify', 'lecture', 'skim', 'event', 'redeem', 'valor', 'mythology', 'abuse', 'vaccinate', 'discard', 'resume', 'lunatic', 'provide', 'mumble', 'untidy', 'soar', 'harmony', 'vein', 'colleague', 'mute', 'utensil', 'subsequent', 'refrain', 'uneventful', 'torment', 'wad', 'sensitive', 'relate', 'illegal', 'fertile', 'loyalty', 'retain', 'temperate', 'stationary', 'narcotic', 'heir', 'biography', 'unearth', 'epidemic', 'complacent', 'maintain', 'majestic', 'drench', 'depart', 'obesity', 'wasp', 'snub', 'dwindle', 'swarm', 'coincide', 'magnify', 'rehabilitate', 'endure', 'surplus', 'wobble', 'cancel', 'chiropractor', 'parole', 'wrath', 'traitor', 'tumult', 'debtor', 'obstacle', 'vertical', 'expose', 'deliberate', 'kneel', 'legible', 'ventilate', 'multitude', 'legend', 'vandal', 'dejected', 'placard', 'jeopardize', 'nominate', 'ponder', 'drought', 'obedient', 'contagious', 'negative', 'potential', 'resign', 'abide', 'recede', 'clergy', 'pension', 'morgue', 'drastic', 'unify', 'tyrant', 'customary', 'vital', 'preoccupied', 'wharf', 'summit', 'charity', 'transparent', 'municipal', 'upholstery', 'amend', 'heed', 'verdict', 'scald', 'oral', 'indifference', 'ballot'];

const wordElm = document.querySelector('.word');
const nextBtn = document.querySelector('#next');

let unseen = localStorage.getItem('unseen');

if (!unseen) {
  onReset()
} else {
  unseen = unseen.split(',')
}

function show(word) {
  wordElm.innerHTML = word;
}

function onNext() {
  const nextWord = unseen.shift()
  if (!nextWord) {
    onReset()
    onNext()
    return;
  }
  show(nextWord);
  localStorage.setItem('unseen', unseen)
}

function onReset() {
  unseen = words.map(item => item)
}

function confirmReset() {
  let text = "Do you want to reset?";
  if (confirm(text) == true) {
    onReset()
    onNext()
  }
}

onNext()
nextBtn.addEventListener('click', onNext)
nextBtn.addEventListener('dblclick', onReset)

// resetBtn.addEventListener('click', onReset)

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the Words prompt');
      } else {
        console.log('User dismissed the Words prompt');
      }
      deferredPrompt = null;
    });
  });
});
