const { expect } = require("chai");
const sinon = require("sinon");
const { updateProductService } = require("../../../src/services");

describe('Testes da camada Service para atualizar um produto', function () {
  afterEach(function () {
    sinon.restore();
  });
  const name = "Faca AK47";
  it('Verifica se é possível atulizar um produto com sucesso', async function () {
    const id = 1;
    // Arrange
    // Act
    const result = await updateProductService.update(name, id);
    // Assert 
    expect(result).to.be.deep.equal({ type: null, message: { id: id, name: name } });
  });
  it("Verifica se caso não exista o id do produto a se atulizar, retorna uma mensagem de erro", async function () {
    // Arrange
    const wrongID = 14; 
    // Act
    const result = await updateProductService.update(name, wrongID);
    // Assert
    expect(result).to.be.deep.equal({
      type: "ERROR",
      message: "Product not found",
    });
  });
});