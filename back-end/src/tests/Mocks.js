const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJCN6ZWJpcml0YSMkIiwiaWF0IjoxNjY5ODM2ODEwLCJleHAiOjE2Njk5MjMyMTB9.g3B-sFX8QeBNny7dLUsYbw8Pu4V4VKB0NZXtY3SUMMw";

const loginMock = [{
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer'
}];

const loginReturnMock = {
  "name": "Cliente Zé Birita",
  "email": "zebirita@email.com",
  "role": "customer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJCN6ZWJpcml0YSMkIiwiaWF0IjoxNjY5ODM2ODEwLCJleHAiOjE2Njk5MjMyMTB9.g3B-sFX8QeBNny7dLUsYbw8Pu4V4VKB0NZXtY3SUMMw"
}

const passwordHash = "6cf637e2566e88f7344d324c83a01724";

const newUserMock = {
  id: 8,
  name: 'newUser',
  email: 'newUser@email.com',
  password: "6cf637e2566e88f7344d324c83a01724",
  role: 'customer',
};

module.exports = {
  tokenMock,
  loginMock,
  loginReturnMock,
  passwordHash,
  newUserMock,
};