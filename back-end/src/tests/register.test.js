const { expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const app = require("../api/app");
const chaiHttp = require("chai-http");
const { Model } = require("sequelize");
const {
  newUserMock,
  verifyMock,
  tokenToValidate,
  userMock,
} = require("./Mocks");
const JsonWebToken = require("jsonwebtoken");

chai.use(chaiHttp);
describe("testa a rota /register", function () {
  it("testa se é  possível registrar um usuário com sucesso", async function () {
    sinon.stub(Model, "findOne").resolves(null);
    sinon.stub(Model, "create").resolves(newUserMock.newUser);

    const response = await chai.request(app).post("/register").send({
      name: "Create newUser",
      email: "newUser@email.com",
      password: "novaSenha",
      role: "customer",
    });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(newUserMock);
  });
  it("testa que não é possível registrar um usuário já existente", async function () {
    sinon.stub(Model, "findOne").resolves(newUserMock.newUser); // o mock não está funcionando - retorna null
    sinon.stub(Model, "create").resolves(null);

    const response = await chai.request(app).post("/register").send({
      name: "Zé Birita",
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
    sinon.stub(Model, "create").resolves(null);

    const response = await chai.request(app).post("/register").send({
      name: "nome",
      email: "algumEmail@email.com",
      password: "$#zebirita#$",
      role: "customer",
    });

    expect(response.status).to.be.equal(500);
    expect(response.body).to.be.deep.equal({});
  });

  afterEach(() => sinon.restore());
});
describe("testa a rota /validate", function () {
  it("testa se é possível validar o token", async function () {
    sinon.stub(Model, "findAll").resolves(userMock);
    sinon.stub(JsonWebToken, "verify").returns(verifyMock);

    const result = await chai
      .request(app)
      .post("/validate")
      .set("Authorization", tokenToValidate);

    expect(result.status).to.be.equal(201);
  });
});
