const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsServices } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const allProducts = require('../mocks/productsMocks');

describe('Testes da camada Controller de todos os produtos', function () {
  afterEach(function () {
    sinon.restore();
  })
  it('Verifica se em caso de sucesso, retorna uma mensagem com status 200 e a lista de produtos', async function () {
    // Arrange
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'findAll').resolves({ type: null, message: allProducts });
    // Act 
    await productsController.listProducts(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });
  it('Verifica se em caso de falha, retorna um status 404 e uma mensagem de erro', async function () {
    // Arrange
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, "findAll")
      .resolves({ type: 'ERROR', message: 'Product not found' });
    // Act
    await productsController.listProducts(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith('Product not found');
  });
});
