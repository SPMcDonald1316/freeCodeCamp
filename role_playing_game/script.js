// Game Variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

// HTML Elements
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');

// Game Object Arrays
const weapons = [
  {
    name: 'stick',
    power: 5
  },
  {
    name: 'dagger',
    power: 30
  },
  {
    name: 'claw hammer',
    power: 50
  },
  {
    name: 'sword',
    power: 100
  }
];
const monsters = [
  {
    name: 'slime',
    level: 2,
    health: 15
  },
  {
    name: 'fanged beast',
    level: 8,
    health: 60
  },
  {
    name: 'dragon',
    level: 20,
    health: 300
  }
];
const locations = [
  {
    name: 'town square',
    buttonText: ['Go to store', 'Go to cave', 'Fight dragon'],
    buttonFunctions: [goStore, goCave, fightDragon],
    text: `You are in the town square. You see a sign that says "Store".`
  },
  {
    name: 'store',
    buttonText: ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
    buttonFunctions: [buyHealth, buyWeapon, goTown],
    text: 'You enter the store.'
  },
  {
    name: 'cave',
    buttonText: ['Fight slime', 'Fight fanged beast', 'Go to town square'],
    buttonFunctions: [fightSlime, fightBeast, goTown],
    text: 'You enter the cave. You see some monsters.'
  },
  {
    name: 'fight',
    buttonText: ['Attack', 'Dodge', 'Run'],
    buttonFunctions: [attack, dodge, goTown],
    text: 'You are fighting a monster.'
  },
  {
    name: 'kill monster',
    buttonText: ['Go to town square', 'Go to town square', 'Go to town square'],
    buttonFunctions: [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  }
];

// Initialize Buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Travel Functions
const update = location => {
  monsterStats.style.display = 'none';
  button1.innerText = location.buttonText[0];
  button2.innerText = location.buttonText[1];
  button3.innerText = location.buttonText[2];
  button1.onclick = location.buttonFunctions[0];
  button2.onclick = location.buttonFunctions[1];
  button3.onclick = location.buttonFunctions[2];
  text.innerText = location.text;
};

const goTown = () => update(locations[0]);
const goStore = () => update(locations[1]);
const goCave = () => update(locations[2]);

// Shopping Functions
const buyHealth = () => {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = 'You do not have enough gold to buy health.';
  }
};

const buyWeapon = () => {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      inventory.push(newWeapon);
      text.innerText = `You now have a ${newWeapon}. In your inventory you have: ${inventory}`;
    } else {
      text.innerText = 'You do not have enough gold to buy a weapon.';
    }
  } else {
    text.innerText = 'You already have the most powerful weapon!';
    button2.innerText = 'Sell weapon for 15 gold';
    button2.onclick = sellWeapon;
  }
};

const sellWeapon = () => {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = `You sold a ${currentWeapon}. In your inventory you have: ${inventory}`
  } else {
    text.innerText = `Don't sell your only weapon!`;
  }
};

// Fighting Functions
const fightSlime = () => {
  fighting = 0;
  goFight();
};
const fightBeast = () => {
  fighting = 1;
  goFight();
};
const fightDragon = () => {
  fighting = 2;
  goFight();
};
const goFight = () => {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
};
const attack = () => {
  text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}.`;
  health -= monsters[fighting].level;
  monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    defeatMonster();
  }
}
const dodge = () => {
  text.innerText = `You dodge the attack from the ${monsters[fighting].name}`;
}
const defeatMonster = () => {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}
const lose = () => {
  update(locations[5]);
}
const restart = () => {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ['stick'];
  xpText.innerText = xp;
  healthText.innerText = health;
  goldText.innerText = gold;
  goTown();
}