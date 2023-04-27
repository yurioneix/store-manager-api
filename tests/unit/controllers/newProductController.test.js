const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { newProductService } = require("../../../src/services");
const { newProductController } = require("../../../src/controllers");
const newProduct = require("../mocks/newProductMock");

describe('Testes da camada Controller para cadastrar um novo produto', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se ao cadastrar um produto, retorna o status 201 e a mensagem contendo o produto cadastrado', async function () {
    // Arrange 
    const res = {};
    const req = {
      body: newProduct,
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(newProductService, 'newProduct').resolves({ type: null, message: newProduct });
    // Act 
    await newProductController.newProduct(req, res);
    // Asert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
});
