// --------------------------- CONSTANTS & VARIABLES ---------------------------

let contacts_quantity = 7; // (7 = contacts_list.length - 1) ma come si fa ad accedere alle variabili in "DATA" per usarle per assegnare altre variabili sempre in "data"???
const user_messages_list = [  // come faccio a inserirlo dentro ai "DATA" di Vue e ad averci comunque accesso per assegnare un valore ad un'altra variabile in "data" (valore legato a questa variabile qui)?
  'Non esistono ostacoli troppo grossi, signore. Esistono solo motivazioni troppo piccole.',
  'Piccettino dice che quando le cose mi vanno male è perché vengo punito per il modo in cui mi sbarazzo dei testimoni di Geova quando suonano alla mia porta.',
  'Ma il problema non è tanto la fuga dei cervelli, quanto il fatto che i corpi restano qui.',
  'Ah, la SCIENZA! Spiegare come funziona il mondo che ci circonda, in maniera che gli altri non possano capire!',
  'Siamo molto simili... amiamo il pericolo, il rischio... viviamo liberi dalle regole e dalle leggi dei comuni mortali... No, aspetta! Non posso girare a sinistra è contromano!',
  'Avverto il tuo stupore, il tuo smarrimento... l\'angoscia della tua mente che varca in un attimo lo spazio e il tempo, portandoti a confronto con ciò che diverrai... Anvedi che panza!',
  'In una classifica dei supereroi più conosciuti, vengo dopo l\'uomo-coperchio.',
  'Mi guardo intorno per chilometri e chilometri, c\'è solo il nulla. Dove mi trovo? In Molise!',
  'Polvere alla polvere... cenere alla cenere... Alla fine ho dovuto licenziare la donna delle pulizie!',
  'Una pastorella di origini svizzere rivela il quarto segreto di Fatima: Bisogna aggiungere una noce di burro a fine cottura!',
  'Ho eseguito una serie di test sulla tua intelligenza, per stabilire a quale livello appartenga: \'scolastico\', \'avanzato\', \'universitario\', \'specialistico\', o \'superiore\'. Il risultato è \'coleottero\'.',
  'Esiste un posto dove si riuniscono i casi umani più disperati nell\'ultimo tentativo di trovare un\'anima gemella: mi sono iscritto al club di Star Trek, ma mi hanno cacciato quando ho chiesto dove fossero le spade laser!',
  'Sono un supereroe! Posso spostare un adulto senza spostarlo. Il mio superpotere si chiama \'peto\'!',
]

// ------------------------------ FUNCTIONS ------------------------------

// Come si fa a mettere queste funzioni dentro i "METHODS" e ad averne accesso per assegnare valori alle variabili dichiarate in "data" (valori legati a queste funzioni)?

// Generating random number
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// Generating random Rat-Man quote (user's sent messages)
const getRndQuote = (quotes_list, first) => {
  return quotes_list[getRndInteger(first, quotes_list.length - 1)];
};

// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    text_message: '',
    answer_waiting_time: 1000, // millisencods (1s)
    active_contact: getRndInteger(0, contacts_quantity), // contacts_quantity = 7 = contacts_list.length - 1) ma come faccio ad accedere alla variabile "contacts_list" per usarla per assegnar eun valore a questa variabile qui??
    user: {
      name: 'Rat-Man',
      avatar: 'img/ratman.jpg',
    },
    contacts_list: [
      {
        name: 'Heraclitus',
        avatar: 'img/heraclitus.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'There is nothing permanent except change.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
        ],
      },
      {
        name: 'Friedrich Nietzsche',
        avatar: 'img/nietzsche.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'Without music, life would be a mistake.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'And those who were seen dancing were thought to be insane by those who could not hear the music.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'You must have chaos within you to give birth to a dancing star.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Albert Camus',
        avatar: 'img/camus.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
        ],
      },
      {
        name: 'Søren Kierkegaard',
        avatar: 'img/kierkegaard.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'There are two ways to be fooled. One is to believe what isn\'t true, the other is to refuse to accept what is true.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Life is not a problem to be solved, but a reality to be experienced.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'What labels me, negates me.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Life can only be understood backwards; but it must be lived forwards.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Plato',
        avatar: 'img/plato.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'Wise men speak because they have something to say; fools because they have to say something.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Courage is knowing what not to fear.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
        ],
      },
      {
        name: 'Socrate',
        avatar: 'img/socrate.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'By all means marry; if you get a good wife, you’ll become happy; if you get a bad one, you’ll become a philosopher.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'There is only one good, knowledge, and one evil, ignorance.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The only true wisdom is in knowing you know nothing.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Baruch Spinoza',
        avatar: 'img/spinoza.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'If you want the present to be different from the past, study the past.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The more clearly you understand yourself and your emotions, the more you become a lover of what is.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Be not astonished at new ideas; for it is well known to you that a thing does not therefore cease to be true because it is not accepted by many.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Immanuel Kant',
        avatar: 'img/kant.jpg',
        visible: true,
        messages_list: [
          {
            date: '***data da rendere dinamica***',
            message: 'Space and time are the framework within which the mind is constrained to construct its experience of reality.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'We are not rich by what we possess but by what we can do without.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
        ],
      },
    ], // Closing "contacts list"
  },  // Closing data
  methods: {
    // Showing the active contact chat
    showChat(index_contact) {
      this.active_contact = index_contact;
    },
    // Scrolling the chat window to the bottom to show the last message
    scrollChat() {
      let chat_window = this.$el.querySelector("#chat-window");
      chat_window.scrollTop = chat_window.scrollHeight;
    },
    sendMessage() {
      // Creating the new sent message (object) to be added to the messages_list array
      let new_sent_message = {
        date: '***data da rendere dinamica***',
        message: this.text_message,
        status: 'sent',
      };
      // Adding the new sent message (object) to the messages_list array of the active contact
      this.contacts_list[this.active_contact].messages_list.push(new_sent_message);
      // Scrolling the chat window to the bottom to show the last message
      this.scrollChat();
      // Timing function fot the auto-reply
      setTimeout(this.receiveMessage, this.answer_waiting_time);
    },
    shortestQuotesList() {
      let shortest_list_length = 100;
      this.contacts_list.forEach((contact) => {
        if(contact.messages_list.length < shortest_list_length) {
          shortest_list_length = contact.messages_list.length;
        };
      });
      return shortest_list_length - 1;
    },
    receiveMessage() {
      // Creating the new received message (object) to be added to the messages_list array
      let new_received_message = {
        date: '***data da rendere dinamica***',
        message: this.contacts_list[getRndInteger(0, contacts_quantity)].messages_list[getRndInteger(0, this.shortestQuotesList())].message,
        status: 'received',
      };
      // Adding the new received message (object) to the messages_list array of the active contact
      this.contacts_list[this.active_contact].messages_list.push(new_received_message);
      // Scrolling the chat window to the bottom to show the last message
      this.scrollChat();
    },
  },  // Closing methods
});
