const { expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const app = require("../api/app");
const chaiHttp = require("chai-http");
const { Model } = require("sequelize");
const { newUserMock, loginMock, tokenMock, secondVerifyMock, findUser } = require("./Mocks");
const JsonWebToken = require("jsonwebtoken");


chai.use(chaiHttp);
describe("testa a rota /admin/register", function () {
  it("testa se é  possível registrar um usuário com sucesso", async function () {
    sinon.stub(Model, "findOne").resolves(null);
    sinon.stub(JsonWebToken, 'verify').returns(secondVerifyMock)
    sinon.stub(Model, "findAll").resolves(findUser)
    sinon.stub(Model, "create").resolves(newUserMock.newUser);

    const response = await chai.request(app).post("/admin/register").send({
      name: "Create newUser",
      email: "newUser@email.com",
      password: "novaSenha",
      role: "customer",
    }).set('Authorization', tokenMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ message: 'novo cadastro realizado' });
  });
  it("testa que não é possível registrar um usuário já existente", async function () {
    sinon.stub(Model, "findOne").resolves(loginMock[0]);
    sinon.stub(JsonWebToken, 'verify').returns(secondVerifyMock)
    sinon.stub(Model, "findAll").resolves(findUser)
    sinon.stub(Model, "create").resolves(null);

    const response = await chai.request(app).post("/admin/register").send({
      name: "Cliente Zé Birita",
      email: "zebirita@email.com",
      password: "$#zebirita#$",
      role: "customer",
    });

    expect(response.status).to.be.equal(409);
    expect(response.body).to.be.deep.equal({
      message: "Email already registered",
    });
  });

  it("testa quando é envaido um erro nos dados", async function () {
    sinon.stub(Model, "findOne").resolves(null);
    sinon.stub(JsonWebToken, 'verify').returns(null)
    sinon.stub(Model, "findAll").resolves(null)
    sinon.stub(Model, "create").resolves(null);

    const response = await chai.request(app).post("/admin/register").send({
      name: "nome curto ",
      email: "algumEmail@email.com",
      password: "$#zebirita#$",
      role: "customer",
    });

    expect(response.status).to.be.equal(500);
    expect(response.body).to.be.deep.equal({});
  });

  afterEach(() => sinon.restore());
});
