export const loginMockCustomer = {
  data: {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsI
          nBhc3N3b3JkIjoiJCN6ZWJpcml0YSMkIiwiaWF0IjoxNjcwODY4MDIwLCJleHAiOjE2NzE0NzI4MjB9
              .x-Msr0GYYCGdtK0GztSkFR_wfcbb1E524r0HRuY8Kos`,
  },
};

export const loginMockSeller = {
  data: {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5
        jb20iLCJwYXNzd29yZCI6ImZ1bGFuYUAxMjMiLCJpYXQiOjE2NzA4NzU5NzQsImV4cCI6MTY3MTQ4MDc
            3NH0.Q0N3AQ41qMpBfhaoGroWxhBUPaf2piTjq2M7PeLjJH0`,
  },
};

export const loginMockAdmin = {
  data: {
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    role: 'administrator',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbUBkZWxpdmVyeWFwcC5jb20
        iLCJwYXNzd29yZCI6Ii0tYWRtMkAyMSEhLS0iLCJpYXQiOjE2NzA4NzU3OTksImV4cCI6MTY3MTQ4MDU
        5OX0.Wc6cPL7trTrqCiWwwu-XefxGZh9oVQAYhWz5CYFA4xE`,
  },

};

export const productsMock = {
  data: [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: '2.49',
      urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
    },
    {
      id: 5,
      name: 'Skol 269ml',
      price: '2.19',
      urlImage: 'http://localhost:3001/images/skol_269ml.jpg',
    },
    {
      id: 6,
      name: 'Skol Beats Senses 313ml',
      price: '4.49',
      urlImage: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
    },
    {
      id: 7,
      name: 'Becks 330ml',
      price: '4.99',
      urlImage: 'http://localhost:3001/images/becks_330ml.jpg',
    },
    {
      id: 8,
      name: 'Brahma Duplo Malte 350ml',
      price: '2.79',
      urlImage: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
    },
    {
      id: 9,
      name: 'Becks 600ml',
      price: '8.89',
      urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
    },
    {
      id: 10,
      name: 'Skol Beats Senses 269ml',
      price: '3.57',
      urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: '3.49',
      urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
    },

  ],
};

export const newUserMock = {
  data: {
    message: 'O usuario foi criado',
    newUser: {
      role: 'customer',
      id: 13,
      name: 'New Cliente User',
      email: 'newClient@email.com',
      password: '3c0bc2f173e04e130e5f24f1e1966624',
    },
  },
};
