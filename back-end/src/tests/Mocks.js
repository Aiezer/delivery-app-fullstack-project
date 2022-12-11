const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJCN6ZWJpcml0YSMkIiwiaWF0IjoxNjY5ODM2ODEwLCJleHAiOjE2Njk5MjMyMTB9.g3B-sFX8QeBNny7dLUsYbw8Pu4V4VKB0NZXtY3SUMMw";

const loginMock = [
  {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    password: "1c37466c159755ce1fa181bd247cb925",
    role: "customer",
  },
];

const loginReturnMock = {
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  role: "customer",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJCN6ZWJpcml0YSMkIiwiaWF0IjoxNjY5ODM2ODEwLCJleHAiOjE2Njk5MjMyMTB9.g3B-sFX8QeBNny7dLUsYbw8Pu4V4VKB0NZXtY3SUMMw",
};

const passwordHash = "6cf637e2566e88f7344d324c83a01724";

const newUserMock = {
  message: "O usuario foi criado",
  newUser: {
    id: 9,
    name: "Create newUser",
    email: "newUser@email.com",
    password: "6cf637e2566e88f7344d324c83a01724",
    role: "customer",
  },
};

const verifyMock = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
  iat: 1670620102,
  exp: 1671224902,
};

const userMock = [
  {
    id: 1,
    name: "Delivery App Admin",
    email: "adm@deliveryapp.com",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    role: "administrator",
  },
];

const secondVerifyMock = {
  email: "newUser@email.com",
  password: "novaSenha",
  iat: 1670620102,
  exp: 1671224902,
};

const findUser = [
  {
    id: 9,
    name: "Create newUser",
    email: "newUser@email.com",
    password: "6cf637e2566e88f7344d324c83a01724",
    role: "customer",
  },
];

module.exports = {
  tokenMock,
  loginMock,
  loginReturnMock,
  passwordHash,
  newUserMock,
  verifyMock,
  userMock,
  secondVerifyMock,
  findUser,
};
