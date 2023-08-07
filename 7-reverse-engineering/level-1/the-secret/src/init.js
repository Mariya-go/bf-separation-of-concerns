// this file is the program's Entry Point
// debugger;
import dom from './dom.js';
import textListener from './events/textListener.js';
import mouseOutListener from './events/mouseOutListener.js';

dom.text.innerText = 'water is blue';

textListener();
mouseOutListener();
