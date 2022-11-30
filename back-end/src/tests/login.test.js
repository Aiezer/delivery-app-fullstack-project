const { expect } = require('chai')
const chai = require('chai')
const sinon = require('sinon')
const app = require('../api/app')
const chaiHttp = require('chai-http')
const { Model } = require('sequelize')
const { describe } = require('pm2')
const JsonWebToken = require('jsonwebtoken')
const { tokenMock, loginMock } = require('./Mocks')

chai.use(chaiHttp)

describe('testa a rota /login', function () {
  it('testa se é possível realizar um login como consumidor com sucesso', async function() {
    before(async () => {
      sinon.stub(Model, 'findAll').resolves(loginMock);
      sinon.stub(JsonWebToken, 'sign').resolves(tokenMock)

    })

    const response = await chai.request(app).post('/login').send({
     email: 'zebirita@email.com',
     senha: '$#zebirita#$',
    })

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal({token: tokenMock })
  })

  it('testa que não é possível fazer login com dados inexistentes no banco', async function () {
    before(async () => {
        sinon.stub(Model, 'findAll').resolves([])
    })
    const response = await chai.request(app).post('/login').send({
        email: 'inexistente@email.com',
        senha: 'inexistente',
       })
   
       expect(response.status).to.be.equal(404)
       expect(response.body).to.be.deep.equal({ message: 'Nome de usuário ou senha incorreta(o)(s)' })
    })
  afterEach(sinon.restore);
})