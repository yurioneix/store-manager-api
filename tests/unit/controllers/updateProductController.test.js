const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { updateProductService } = require("../../../src/services");
const { updateProductController } = require("../../../src/controllers");
const { updatedProduct } = require('../mocks/updatedProductMock');

describe("Testes da camada Controller para atualizar uma venda", function () {
  afterEach(function () {
    sinon.restore();
  });

  it("Verifica se ao atualizar uma venda com sucesso, retorna a mensagem e o status corretos", async function () {
    // Arrange
    const res = {};
    const req = {
      body: updatedProduct,
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(updateProductService, "update").resolves({ type: null, message: { id: 1, name: updatedProduct.name } });
      // Act
      await updateProductController.updateProduct(req, res);
      // Assert
       expect(res.status).to.have.been.calledWith(200);
       expect(res.json).to.have.been.calledWith({ id: 1, name: updatedProduct.name });
    });

  it("Verifica se ao atualizar uma venda inexistente, retorna uma mensagem de erro", async function () {
    // Arrange
    const res = {};
    const req = {
      body: updatedProduct,
      params: { id: 14 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(updateProductService, "update").resolves({
      type: "ERROR",
      message: "Product not found",
    });
    // Act
    await updateProductController.updateProduct(req, res);
    // Assert
     expect(res.status).to.have.been.calledWith(404);
     expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });
});