import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let persoon1 = {
    naam: "Momo",
    leeftijd: 25
  };
  
  let persoon2 = {
    naam: "Jason",
    leeftijd: 30
  };
  
  function vergelijkLeeftijd(persoon1, persoon2) {
    if (persoon1.leeftijd > persoon2.leeftijd) {
      console.log(`${persoon1.naam} is ouder dan ${persoon2.naam}`);
    } else if (persoon1.leeftijd < persoon2.leeftijd) {
      console.log(`${persoon2.naam} is ouder dan ${persoon1.naam}`);
    } else {
      console.log(`${persoon1.naam} en ${persoon2.naam} zijn even oud`);
    }
  }
  
  vergelijkLeeftijd(persoon1, persoon2);
  process.exit()