// const { expect } = require("chai");
// const chai = require("chai");
// const sinon = require("sinon");
// const app = require("../api/app");
// const chaiHttp = require("chai-http");
// const { Model } = require("sequelize");
// const { newUserMock, loginMock } = require("./Mocks");

// chai.use(chaiHttp);
// describe("testa a rota /admin/register", function () {
//   it("testa se é  possível registrar um usuário com sucesso", async function () {
//     before(() => {
//       sinon.stub(Model, "findOne").resolves(null);
//       sinon.stub(Model, "create").resolves();
//     });

//     const response = await chai.request(app).post("/admin/register").send({
//       name: "newUser",
//       email: "newUser@email.com",
//       password: "novaSenha",
//       role: "customer",
//     });

//     expect(response.status).to.be.equal(201);
//     expect(response.body).to.be.deep.equal(newUserMock);
//   });
//   it("testa que não é possível registrar um usuário já existente", async function () {
//     before(() => {
//       sinon.stub(Model, "findOne").resolves(loginMock);
//       sinon.stub(Model, "create").resolves(null);
//     });

//     const response = await chai.request(app).post("/admin/register").send({
//       name: "Zé Birita",
//       email: "zebirita@email.com",
//       password: "$#zebirita#$",
//       role: "customer",
//     });

//     expect(response.status).to.be.equal(409);
//     expect(response.body).to.be.deep.equal({
//       message: "Email already registered",
//     });
//   });

//   it("testa quando é envaido um erro nos dados", async function () {
//     before(() => {
//       sinon.stub(Model, "findOne").resolves(null);
//       sinon.stub(Model, "create").resolves(null);
//     });

//     const response = await chai.request(app).post("/admin/register").send({
//       name: "cliente com nome muito grande",
//       email: "algumEmail@email.com",
//       password: "$#zebirita#$",
//       role: "customer",
//     });

//     expect(response.status).to.be.equal(500);
//     expect(response.body).to.be.deep.equal({});
//   });

//   afterEach(() => sinon.restore());
// });
