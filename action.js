let app = new Vue({
  el: '#root',
  data: {
    contacts_list: [
      {
        name: 'Albert Camus',
        avatar: 'img/camus.jpg',
        visible: true,
        messages_list: [
          {
            date: '10/01/2020 15:30:55',
            message: 'First message',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:30:55',
            message: 'Second message',
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
            date: '10/01/2020 15:30:55',
            message: 'Some text',
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
            date: '10/01/2020 15:30:55',
            message: 'Some text',
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
            date: '10/01/2020 15:30:55',
            message: 'Some text',
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
            date: '10/01/2020 15:30:55',
            message: 'First message',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:30:55',
            message: 'Second message',
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
            date: '10/01/2020 15:30:55',
            message: 'First message',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:30:55',
            message: 'Second message',
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
            date: '10/01/2020 15:30:55',
            message: 'First message',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:30:55',
            message: 'Second message',
            status: 'sent',
          },
        ],
      },
    ]
  },  // Closing data
  methods: {

  },  // Closing methods
});
