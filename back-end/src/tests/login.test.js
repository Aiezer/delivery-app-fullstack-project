const { expect } = require('chai')
const chai = require('chai')
const sinon = require('sinon')
const app = require('../api/app')
const chaiHttp = require('chai-http')
const { Model } = require('sequelize')
const jwt = require('jsonwebtoken')
const { tokenMock, loginMock, loginReturnMock } = require('./Mocks')


chai.use(chaiHttp)

describe('testa a rota /login', function () {
  it('testa se é possível realizar um login como consumidor com sucesso', async function() {
    sinon.stub(Model, 'findAll').resolves(loginMock);
    sinon.stub(jwt, 'sign').returns(tokenMock);
    
    const response = await chai.request(app).post('/login').send({
     email: 'zebirita@email.com',
     password: '$#zebirita#$',
    }).set('Authorization', tokenMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(loginReturnMock);
  });

  it('testa que não é possível fazer login com dados inexistentes no banco', async function () {
    sinon.stub(Model, 'findAll').resolves([])

    const response = await chai.request(app).post('/login').send({
      email: 'inexistente@email.com',
      password: 'inexistente',
    })
   
    expect(response.status).to.be.equal(404)
    expect(response.body).to.be.deep.equal({ message: "Não existe esse usuário!" })
  });

  it('testa que não é possível fazer login com uma senha inválida', async function () {
    sinon.stub(Model, 'findAll').resolves(loginMock)

    const response = await chai.request(app).post('/login').send({
      email: 'zebirita@email.com',
      password: 'inexistente',
    });
   
    expect(response.status).to.be.equal(404)
    expect(response.body).to.be.deep.equal({ message: "A senha está incorreta!" })
  });
  afterEach(() => sinon.restore());
});