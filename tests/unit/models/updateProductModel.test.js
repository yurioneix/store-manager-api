const { expect } = require("chai");
const sinon = require("sinon");
const { updateProductModel } = require("../../../src/models");

const { updatedProduct } = require("../mocks/updatedProductMock");
const connection = require("../../../src/models/connection");

describe("Testes da camada Model para atualizar um produto", function () {
  afterEach(function () {
    sinon.restore();
  });
  it("Verifica se é possível atualizar um produto", async function () {
    // Arrange
    const name = 'Faca AK47';
    const id = 1;
    sinon.stub(connection, "execute").resolves([{changedRows: 1}]);
    // Act
    const result = await updateProductModel.update(name, id);
    // Arrange
    expect(result).to.be.equal(1);
  });
});
