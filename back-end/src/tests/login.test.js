const { expect } = require('chai')
const chai = require('chai')
const sinon = require('sinon')
const app = require('../api/app')
const chaiHttp = require('chai-http')
const { Model } = require('sequelize')
const JsonWebToken = require('jsonwebtoken')
const { tokenMock, loginMock, loginReturnMock } = require('./Mocks')


chai.use(chaiHttp)

describe('testa a rota /customer', function () {
  it('testa se é possível realizar um login como consumidor com sucesso', async function() {
    before(() => {
      sinon.stub(Model, 'findAll').resolves(loginMock);
      sinon.stub(JsonWebToken, 'sign').resolves(tokenMock)
    });
    
    const response = await chai.request(app).post('/customer').send({
     email: 'zebirita@email.com',
     password: '$#zebirita#$',
    });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(loginReturnMock);
  });

  it('testa que não é possível fazer login com dados inexistentes no banco', async function () {
    before(async () => {
      sinon.stub(Model, 'findAll').resolves([])
    });
    const response = await chai.request(app).post('/customer').send({
      email: 'inexistente@email.com',
      password: 'inexistente',
    })
   
    expect(response.status).to.be.equal(404)
    expect(response.body).to.be.deep.equal({ message: "Não existe esse usuário!" })
  });

  it('testa que não é possível fazer login com uma senha inválida', async function () {
    before(async () => {
      sinon.stub(Model, 'findAll').resolves(loginMock)
    });
    const response = await chai.request(app).post('/customer').send({
      email: 'zebirita@email.com',
      password: 'inexistente',
    });
   
    expect(response.status).to.be.equal(404)
    expect(response.body).to.be.deep.equal({ message: "A senha está incorreta!" })
  });
  afterEach(() => sinon.restore());
});