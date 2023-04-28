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

  it('Verifica se ao não passar um objeto contendo name, retorna um status 400 e a mensagem contendo o erro', async function () {
    // Arrange
    const res = {};
    const req = {
      body: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(newProductService, "newProduct")
      .resolves({ type: "any.required", message: '"name" is required' });
    // Act
    await newProductController.newProduct(req, res);
    // Asert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({message: '"name" is required'});
  });

  it("Verifica se ao passar um objeto contendo name menor que 5 caracteres, retorna um status 422 e a mensagem contendo o erro", async function () {
    // Arrange
    const res = {};
    const req = {
      body: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(newProductService, "newProduct")
      .resolves({ type: "string.min", message: '"name" length must be at least 5 characters long', });
    // Act
    await newProductController.newProduct(req, res);
    // Asert
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({
      message: '"name" length must be at least 5 characters long'
    });
  });
});
