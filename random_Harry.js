/* -----------------------------------------------
Script      : randomHarry.js
Author      : HappyKoala
Version     : v1.0.0

Changelog:
v1.0.0 - Initial release
----------------------------------------------- */
let v = 'v1.0.0'

const w = new ListWidget()
//w.addSpacer()
let content = w.addStack();
content.layoutVertically()

let widgetSize = 'medium'
let pad = 18

content.setPadding(pad,pad,pad,pad)
content.borderWidth = 14
content.cornerRadius = 20

color_text = new Color('#cccccc')
color_by = new Color('#999999')
let stdFontSize = 13
let stdFont = new Font("Menlo", stdFontSize)

const bcolor_gryffindor = new Color('440000aa')
const gradient_gryffindor = new LinearGradient()
gradient_gryffindor.locations = [0.1,1]
gradient_gryffindor.colors = [
  new Color('440000aa'),
  new Color('664411aa'),
  ]

const bcolor_slytherin = new Color('002200aa')
const gradient_slytherin = new LinearGradient()
gradient_slytherin.locations = [0,.8]
gradient_slytherin.colors = [
  new Color('002200aa'),
  new Color('444444aa'),
  ]

const bcolor_hufflepuff = new Color('444400aa')
const gradient_hufflepuff = new LinearGradient()
gradient_hufflepuff.locations = [0,1]
gradient_hufflepuff.colors = [
  new Color('444400aa'),
  new Color('222222aa'),
  ]

const bcolor_ravenclaw = new Color('000044aa')
const gradient_ravenclaw = new LinearGradient()
gradient_ravenclaw.locations = [0,.9]
gradient_ravenclaw.colors = [
  new Color('000044aa'),
  new Color('444444aa'),
  ]

const bcolor_random = new Color('0a0a0aaa')
const gradient_random = new LinearGradient()
gradient_random.locations = [0,1]
gradient_random.colors = [
  new Color('0a0a0aaa'),
  new Color('442211aa'),
  ]

const infos = [
//FACTS
    {'house': 'Random', 'by': '', 'text': 'J. K. Rowling und Harry haben am gleichen Tag Geburtstag.',},
    {'house': 'Random', 'by': '', 'text': 'Die Bücher wurden in 80 Sprachen übersetzt.',},
    {'house': 'Random', 'by': '', 'text': 'Daniel Radcliffe hat 70 Zauberstäbe bei den Dreharbeiten verschlissen.',},
    {'house': 'Random', 'by': '', 'text': 'Harrys Augenfarbe wechselt.\nDaniel Radcliffe hat die grünen Kontaktlinsen nicht vertragen und selten getragen.',},
    {'house': 'Random', 'by': '', 'text': 'Nach Mickey Mouse gilt Harry Potter als die berühmteste Medienfigur der Welt.',},
    {'house': 'Random', 'by': '', 'text': 'Der fünfte Band "Harry Potter und der Ordern des Phönix" ist mit 1.022 Seiten der dickste, mit 138 Minuten aber der kürzeste Film.',},
//QUOTES
    {'house': 'Gryffindor', 'by': 'Remus Lupin', 'text': '"Es ist der Wert der Überzeugungen, der den Erfolg ausmacht. Nicht die Anzahl der Anhänger."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Wenn wir träumen betreten wir eine Welt, die ganz und gar uns gehört."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Es sind nicht unsere Fähigkeiten, die zeigen, wer wir sind – sondern unsere Entscheidungen."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Es ist nicht gut, wenn wir nur unseren Träumen nachhängen und vergessen, zu leben."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Die Wahrheit ist etwas schreckliches und schönes zugleich und sollte daher mit großer Umsicht behandelt werden."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Glück und Zuversicht vermag man selbst in Zeiten der Dunkelheit zu finden. Man darf bloß nicht vergessen ein Licht leuchten zu lassen."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Wir sind nur so stark, wie wir vereint sind und so schwach, wie wir getrennt sind."',},
    {'house': 'Gryffindor', 'by': 'Albus Dumbledore', 'text': '"Den Schmerz zu unterdrücken macht ihn nur schlimmer, wenn du ihn schließlich spürst."',},
    {'house': 'Gryffindor', 'by': 'Ron Weasley', 'text': '"Wenn wir wegen dir draufgehen, bringe ich dich um."',},
    {'house': 'Gryffindor', 'by': 'Rubeus Hagrid', 'text': '"Haarig und verrückt? Ihr sprecht doch nicht von mir, oder?"',},
    {'house': 'Gryffindor', 'by': 'Sirius Black', 'text': '"Wir haben alle sowohl eine helle als auch eine dunkle Seite in uns. Es kommt darauf an, welche Seite wir für unser Handeln aussuchen. Das macht uns wirklich aus."',},

    {'house': 'Ravenclaw', 'by': 'Luna Lovegood', 'text': '"Ich bin Schlafwandlerin. Deswegen gehe ich auch mit Schuhen ins Bett."',},
    {'house': 'Ravenclaw', 'by': 'Luna Lovegood', 'text': '"Lacht ihr nur, aber früher haben die Leute auch geglaubt, dass es so was wie den Schlibbrigen Summlinger oder den Schrumpfhörnigen Schnarchkackler nicht gibt!"',},

    {'house': 'Slytherin', 'by': 'Draco Malfoy', 'text': '"Ehrlich, wenn du noch langsamer wärst, würdest du rückwärts gehen."',},
    {'house': 'Slytherin', 'by': 'Severus Snape', 'text': '"Für den Fall, dass es ihnen entgangen ist: Das Leben ist nicht fair."',},
//MOTTOS
    {'house': 'Random', 'by': '', 'text': 'Draco dormiens nunquam titillandus',},
    {'house': 'Gryffindor', 'by': '', 'text': 'Haus Gryffindor\n\nDie besonders Mutigen.',},
    {'house': 'Ravenclaw', 'by': '', 'text': 'Haus Ravenclaw\n\nDie besonders Klugen.',},
    {'house': 'Hufflepuff ', 'by': '', 'text': 'Haus Hufflepuff\n\nDie besonders Fleißigen und Loyalen.',},
    {'house': 'Slytherin ', 'by': '', 'text': 'Haus Slytherin\n\nDie Listigen, die stolz auf ihre Zaubererabstammung sind.',},
]


// Prepare content
let oneDayInMs = 1000*60*60*24;
let currentTimeInMs = new Date().getTime();
let currentDay = Math.floor(currentTimeInMs / oneDayInMs);
let dayOfYear = currentDay%365
let infosToChooseFrom = [];

while (infosToChooseFrom.length < dayOfYear) {
  infosToChooseFrom = infosToChooseFrom.concat(infos)
}

let item = infosToChooseFrom[dayOfYear];

const ONLINE = await isOnline();

async function isOnline() {
  const view = new WebView();
  const connection = await view.evaluateJavaScript("navigator.onLine");
  return connection;
}


// Check for updates
var UPDATE_AVAILABLE = false;
if (ONLINE) {UPDATE_AVAILABLE = await checkForUpdate(v);}


async function checkForUpdate(currentVersion) {
  if (ONLINE) {
    try {
      const latestVersionOnline = await new Request("https://raw.githubusercontent.com/happy-koala/iOS-Scriptables/main/random_Harry_v.txt").loadString();
      let infoStart = latestVersionOnline.slice(0, 200);
      let infoEnd = latestVersionOnline.indexOf('Description', infoStart);
      let latestVersion = latestVersionOnline.slice(0,200);
      return (currentVersion.replace(/[^1-9]+/g, "") < latestVersion.replace(/[^1-9]+/g, "")) ? true : false;
    } catch(err) {
      log("try checkForUpdate: "+err);
      return false;
    }
  }
}


async function checkForUpdateORIGINAL(currentVersion) {
  if (ONLINE) {
    try {
      const latestVersion = await new Request("").loadString();
      return (currentVersion.replace(/[^1-9]+/g, "") < latestVersion.replace(/[^1-9]+/g, "")) ? true : false;
    } catch(err) {
      log("try checkForUpdate: "+err);
      return false;
    }
  }
}


// Finalize Content
if (UPDATE_AVAILABLE) {
  content.addSpacer();
  const updateMsg = content.addText("Script Update available!");
  updateMsg.font = Font.mediumSystemFont(stdFontSize+4);
  updateMsg.textColor = color_text;
  updateMsg.centerAlignText()
  updateMsg.url = "https://github.com/happy-koala/iOS-Scriptables/blob/main/random_Harry.js";
  content.addSpacer();
} else {
  let text = content.addText(item.text);
  text.textColor = color_text
  text.font = Font.mediumSystemFont(stdFontSize+2)
  content.addSpacer()
  let by = content.addText(item.by);
  by.textColor = color_by
  by.font = stdFont
}


Script.setWidget(w)
Script.complete()

// Formatting
w.backgroundGradient = eval('gradient_' + item.house.toLowerCase())
content.borderColor = eval('bcolor_' + item.house.toLowerCase())

if (widgetSize == 'medium') {
  if (Device.name() == 'iPad') {
    content.size = new Size(342,156)
    w.presentMedium()    
  } else {
    content.size = new Size(330,156)
    w.presentMedium()
}
 } else {
  content.size = new Size(156,156)
  w.presentSmall()
}