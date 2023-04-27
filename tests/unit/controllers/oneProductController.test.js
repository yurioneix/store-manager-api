const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { oneProductService } = require('../../../src/services');
const { oneProductController } = require('../../../src/controllers');
const oneProduct = require('../mocks/oneProductMock');

describe('Testes da camada Controller de um produto específico', function () {
  afterEach(function () {
    sinon.restore();
  })

  it('Verifica se em caso de sucesso, retorna uma mensagem com status 200 e o produto específico', async function () {
    // Arrange
    const res = {};
    const req = {
      params: { id: 1},
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(oneProductService, 'getProductById').resolves({ type: null, message: oneProduct });
    // Act 
    await oneProductController.getProductById(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneProduct);
  });

  it('Verifica se ao não encontrar um produto com o id informado, retorna o status 404 e a mensagem: "Product not found"', async function () {
    // Arrange
    const res = {};
    const req = {
      params: { id: 14 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(oneProductService, "getProductById")
      .resolves({ type: "ERROR", message: 'Product not found' });
    // Act
    await oneProductController.getProductById(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
  });
});