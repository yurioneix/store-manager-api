const { expect } = require("chai");
const sinon = require("sinon");
const { updateProductService } = require("../../../src/services");
const { shortNameProduct } = require('../mocks/newProductMock')

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
  it("Verifica se ao atualizar um produto sem o campo name, retorna uma mensagem de erro", async function () {
    // Arrange 
    const id = 1;
    // Act
    const result = await updateProductService.update(undefined, id);
    // Assert
    expect(result).to.be.deep.equal({
      type: "any.required",
      message: '"name" is required',
    });
  });

  it("Verifica se ao cadastrar com o campo name menor que 5 caracteres, retorna uma mensagem de erro", async function () {
    // Assert 
    const id = 1;
    // Act
    const result = await updateProductService.update(shortNameProduct.name, id);
    // Assert
    expect(result).to.be.deep.equal({
      type: "string.min",
      message: '"name" length must be at least 5 characters long',
    });
  });
});