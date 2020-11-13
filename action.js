let app = new Vue({
  el: '#root',
  data: {
    user: {
      name: 'Ratman',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'There is nothing permanente except change.',
            status: 'sent',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Life is not a problem to be solved, but a reality to be experienced.',
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'What labels me, negates me.',
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Life can only be understood backwards; but it must be lived forwards.',
            status: 'sent',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Courage is knowing what not to fear.',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'There is only one good, knowledge, and one evil, ignorance.',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:30:55',
            message: 'The only true wisdom is in knowing you know nothing.',
            status: 'sent',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The more clearly you understand yourself and your emotions, the more you become a lover of what is.',
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'Be not astonished at new ideas; for it is well known to you that a thing does not therefore cease to be true because it is not accepted by many.',
            status: 'sent',
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
            status: 'sent',
          },
          {
            date: '***data da rendere dinamica***',
            message: 'We are not rich by what we possess but by what we can do without.',
            status: 'sent',
          },
        ],
      },
    ]
  },  // Closing data
  methods: {

  },  // Closing methods
});
