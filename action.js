let contacts_quantity = 7; // (7 = contacts_list.length - 1)
const user_messages_list = [
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
    current_date: dayjs().format(),
    dropdown_display: false,
    index_dropdown: '',
    name_search: '',
    text_message: '',
    answer_waiting_time: 1000, // millisencods (1s)
    active_contact: getRndInteger(0, contacts_quantity),
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
            date: '10/01/2020 15:30:55',
            message: 'No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man.',
            status: 'received',
          },
          {
            date: '10/01/2020 15:50:00',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'There is nothing permanent except change.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Friedrich Nietzsche',
        avatar: 'img/nietzsche.jpg',
        visible: true,
        messages_list: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Without music, life would be a mistake.',
            status: 'received',
          },
          {
            date: '20/03/2020 16:30:55',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'And those who were seen dancing were thought to be insane by those who could not hear the music.',
            status: 'received',
          },
          {
            date: '20/03/2020 19:27:04',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '20/03/2020 20:38:15',
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
            date: '28/03/2020 10:10:40',
            message: 'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.',
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '28/03/2020 18:40:22',
            message: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
            status: 'received',
          },
        ],
      },
      {
        name: 'Søren Kierkegaard',
        avatar: 'img/kierkegaard.jpg',
        visible: true,
        messages_list: [
          {
            date: '10/01/2020 15:30:55',
            message: 'There are two ways to be fooled. One is to believe what isn\'t true, the other is to refuse to accept what is true.',
            status: 'received',
          },
          {
            date: '10/01/2020 15:50:00',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '10/01/2020 16:53:09',
            message: 'Life is not a problem to be solved, but a reality to be experienced.',
            status: 'received',
          },
          {
            date: '10/01/2020 18:41:23',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '10/01/2020 19:55:00',
            message: 'What labels me, negates me.',
            status: 'received',
          },
          {
            date: '10/01/2020 20:15:24',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '10/01/2020 22:31:07',
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
            date: '07/06/2020 10:50:00',
            message: 'Wise men speak because they have something to say; fools because they have to say something.',
            status: 'received',
          },
          {
            date: '07/06/2020 11:45:14',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '07/06/2020 12:10:04',
            message: 'Courage is knowing what not to fear.',
            status: 'received',
          },
          {
            date: '07/06/2020 14:30:00',
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
            date: '15/07/2020 09:43:07',
            message: 'By all means marry; if you get a good wife, you’ll become happy; if you get a bad one, you’ll become a philosopher.',
            status: 'received',
          },
          {
            date: '15/07/2020 10:45:12',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '15/07/2020 11:58:03',
            message: 'There is only one good, knowledge, and one evil, ignorance.',
            status: 'received',
          },
          {
            date: '15/07/2020 13:40:01',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '15/07/2020 15:25:32',
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
            date: '19/08/2020 11:43:23',
            message: 'If you want the present to be different from the past, study the past.',
            status: 'received',
          },
          {
            date: '19/08/2020 11:50:34',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '19/08/2020 14:18:09',
            message: 'The more clearly you understand yourself and your emotions, the more you become a lover of what is.',
            status: 'received',
          },
          {
            date: '19/08/2020 16:33:20',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '19/08/2020 17:23:21',
            message: 'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
            status: 'received',
          },
          {
            date: '19/08/2020 19:43:00',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '19/08/2020 20:28:16',
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
            date: '25/10/2020 15:58:02',
            message: 'Space and time are the framework within which the mind is constrained to construct its experience of reality.',
            status: 'received',
          },
          {
            date: '25/10/2020 16:02:40',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
          {
            date: '25/10/2020 17:41:18',
            message: 'We are not rich by what we possess but by what we can do without.',
            status: 'received',
          },
          {
            date: '25/10/2020 19:00:30',
            message: getRndQuote(user_messages_list, 0),
            status: 'sent',
          },
        ],
      },
    ], // Closing "contacts list"
  },  // Closing data
  mounted: function() {
    this.scrollChat();
    this.autoscrollActiveContact();
  },  // Closing mounted
  methods: {
    LastMessageIndex(contact) {
      return contact.messages_list.length -1;
    },
    // Scrolling the chat window to the bottom to show the last message
    scrollChat() {
      // "Vue.nextTick" defers the callback to be executed after the next DOM update cycle
      Vue.nextTick(function() {
      let chat_window = document.getElementById('chat-window');
      chat_window.scrollTop = chat_window.scrollHeight;
      });
    },
    emptySearch() {
      // Emptying the input text bar
      this.name_search = '';
    },
    showContacts() {
      this.contacts_list.forEach((contact) => {
        contact.visible = true;
      });
    },
    getFullDate() {
      let full_date = this.getCurrentDate() + ' ' + this.getCurrentTime() + ':' + dayjs().second();
      return full_date;
    },
    getCurrentDate() {
      // Months are zero indexed, so it is necessary to add 1
      let current_month = parseInt(dayjs().month()) + 1;
      let current_date = dayjs().date() + '/' + current_month + '/' + dayjs().year();
      return current_date;
    },
    getCurrentTime() {
      let current_time = dayjs().hour() + ':' + dayjs().minute();
      return current_time;
    },
    /*
    // MANIPULATING DATES using "new Date" and JSON objects --> manipulated as strings
    newFullDate() {
      // Getting current time in HH:MM:SS format
      let new_time = new Date().toJSON().slice(11,19);
      // Getting current date in YYYY-MM-DD format
      let new_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      // Slicing the string of the date into Year, Month and Day
      let new_year = new_date.slice(0, 4);
      let new_month = new_date.slice(5, 7);
      let new_day = new_date.slice(8, 10);
      // Creating the current date in DD-MM-YYYY HH:MM:SS format
      return new_full_date = new_day + '/' + new_month + '/' + new_year + ' ' + new_time;
    },
    */
    getTime(full_date) {
      return full_date.slice(11, 16);
    },
    // Showing last message time in the aside contacts list
    showTime(current_contact) {
      return this.getTime(current_contact.messages_list[this.LastMessageIndex(current_contact)].date);
    },

    // Showing only last message in the aside contacts list
    showLastMessage(current_contact) {
      return current_contact.messages_list[this.LastMessageIndex(current_contact)].message;
    },
    // Showing the active contact chat in the chat-window
    showChat(index_contact) {
      this.active_contact = index_contact;
      this.scrollChat();
      this.emptySearch();
      this.showContacts();
      // this.autoscrollActiveContact(); BUG TO BE FIXED
    },
    toggleDropdown(clicked_message) {
      this.index_dropdown = clicked_message;
      if(this.dropdown_display) {
        this.dropdown_display = false;
      } else {
        this.dropdown_display = true;
      }
    },
    hideDropdown() {
      this.dropdown_display = false;
    },
    deleteMessage(index_message) {
      Vue.delete(this.contacts_list[this.active_contact].messages_list, index_message);
      this.hideDropdown();
      console.log(this.contacts_list[this.active_contact].messages_list);
      /*
      // --------------- OPTION 2  WITH "SPLICE" ---------------
      this.contacts_list[this.active_contact].messages_list.splice(index_message, 1);
      */
    },
    sendMessage() {
      // Creating the new sent message (object) to be added to the messages_list array
      let new_sent_message = {
        date: this.getFullDate(),
        message: this.text_message,
        status: 'sent',
      };
      // Adding the new sent message (object) to the messages_list array of the active contact
      this.contacts_list[this.active_contact].messages_list.push(new_sent_message);
      // Scrolling the chat window to the bottom to show the last message
      this.scrollChat();
      // Emptying the input text bar
      this.text_message = '';
      // Timing function fot the auto-reply
      setTimeout(this.receiveMessage, this.answer_waiting_time);
    },
    // Checking the shortest list of quotes to use it as a parameter when generating random message (quote) in the auto-reply
    shortestQuotesList() {
      let shortest_list_length = 100;
      this.contacts_list.forEach((contact) => {
        if(contact.messages_list.length < shortest_list_length) {
          shortest_list_length = contact.messages_list.length;
        };
      });
      return shortest_list_length - 1;
    },
    // Generating random message for the auto-reply
    receiveMessage() {
      // Creating the new received message (object) to be added to the messages_list array
      let new_received_message = {
        date: this.getFullDate(),
        message: this.contacts_list[getRndInteger(0, contacts_quantity)].messages_list[getRndInteger(0, this.shortestQuotesList())].message,
        status: 'received',
      };
      // Adding the new received message (object) to the messages_list array of the active contact
      this.contacts_list[this.active_contact].messages_list.push(new_received_message);
      // Scrolling the chat window to the bottom to show the last message
      this.scrollChat();
    },
    searchContact() {
      // Scrolling the array of contacts (array of objects)
      this.contacts_list.forEach((contact) => {
        // Transforming both the current contact name and the input name to lowercase
        let name_lowercase = contact.name.toLowerCase();
        let searched_name_lowercase = this.name_search.toLowerCase();
        if (name_lowercase.includes(searched_name_lowercase)) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
        /*
        // ------------ THIS CODE IS NECESSARY IF THE SEARCH MUST BE DONE CONSIDERING ONLY THE INITIALS OF NAME AND/OR SURNAME ------------
        // Splitting the full name into first name, surname and any other parts
        let full_name_splitted = name_lowercase.split(' '); // creating an array
        // Scrolling the full name in all its parts (as an array)
        let name_matched = [];
        full_name_splitted.forEach((name_part) => {
          // Checking if the input characters match the current contact full name
          if(name_part.includes(name_searched_lowercase) &&
          // Checking if the order of the characters is correct (starting from the beginning)
          name_part.indexOf(name_searched_lowercase) === 0) {
            name_matched.push(name_part);
          }
        });
        // If there is at least one element in the array of "name matched" it means that at least one part of the name matches the search (either first name or surname, or any others)
        if(name_matched.length > 0) {
          // Assigning "true" to the current contact "visible" property to make it visible
          contact.visible = true;
        } else {
          // Assigning "false" to the current contact "visible" property to make it NOT visible
          contact.visible = false;
        };
        */
      });
    },
    searchAndEmpty() {
      this.searchContact();
      this.emptySearch();
    },
    autoscrollActiveContact() {
      // Getting DOM elements from the <ul> <li> list of contacts
      let contacts_window = document.getElementsByClassName('contacts-list-container')[0];
      let li_contacts_array = document.getElementsByClassName('contacts');
      let active_contact_height = 0;
      // Summing the heights of the <li> that preced the active contact
      for (let i = 0; i < this.active_contact; i++) {
        active_contact_height += li_contacts_array[i].offsetHeight;
      }
      // If it is the last contact just scrollHeight
      if (this.active_contact === li_contacts_array.length - 1) {
        contacts_window.scrollTop = contacts_window.scrollHeight;
        console.log(this.active_contact);
      } else {
        // Scrolling the contacts window to the position/height of the active contact
        contacts_window.scrollTop = active_contact_height;
      };
    },
  },  // Closing methods
});
