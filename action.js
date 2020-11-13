let app = new Vue({
  el: '#root',
  data: {
    index_chat: 0,
    user: {
      name: 'Rat-Man',
      avatar: 'img/ratman.jpg',
      messages_list: [
        {
          date: '***data da rendere dinamica***',
          message: 'Non esistono ostacoli troppo grossi, signore. Esistono solo motivazioni troppo piccole.',
          status: 'sent',
        },
        {
          date: '***data da rendere dinamica***',
          message: 'Piccettino dice che quando le cose mi vanno male è perché vengo punito per il modo in cui mi sbarazzo dei testimoni di Geova quando suonano alla mia porta.',
          status: 'sent',
        },
        {
          date: '***data da rendere dinamica***',
          message: 'Ma il problema non è tanto la fuga dei cervelli, quanto il fatto che i corpi restano qui.',
          status: 'sent',
        },
        {
          date: '***data da rendere dinamica***',
          message: 'SCIENZA! Spiegare come funziona il mondo che ci circonda, in maniera che gli altri non possano capire!',
          status: 'sent',
        },
        {
          date: '***data da rendere dinamica***',
          message: 'Siamo molto simili... amiamo il pericolo, il rischio... viviamo liberi dalle regole e dalle leggi dei comuni mortali... Aspetta! Non posso girare a sinistra è contromano!',
          status: 'sent',
        },
        {
          date: '***data da rendere dinamica***',
          message: 'Avverto il tuo stupore, il tuo smarrimento... l\'angoscia della tua mente che varca in un attimo lo spazio e il tempo, portandoti a confronto con ciò che diverrai... Anvedi che panza!',
          status: 'sent',
        },
      ]
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
            date: '***data da rendere dinamica***',
            message: 'Without music, life would be a mistake.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'And those who were seen dancing were thought to be insane by those who could not hear the music.',
            status: 'received',
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
            date: '***data da rendere dinamica***',
            message: 'There are two ways to be fooled. One is to believe what isn\'t true, the other is to refuse to accept what is true.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Life is not a problem to be solved, but a reality to be experienced.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'What labels me, negates me.',
            status: 'received',
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
            message: 'Courage is knowing what not to fear.',
            status: 'received',
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
            message: 'There is only one good, knowledge, and one evil, ignorance.',
            status: 'received',
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
            message: 'The more clearly you understand yourself and your emotions, the more you become a lover of what is.',
            status: 'received',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
            status: 'received',
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
            message: 'We are not rich by what we possess but by what we can do without.',
            status: 'received',
          },
        ],
      },
    ]
  },  // Closing data
  methods: {
    showChat: function(index_contact) {
      this.index_chat = index_contact;
    },
  },  // Closing methods
});
