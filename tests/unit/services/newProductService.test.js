const { expect } = require("chai");
const sinon = require("sinon");
const { newProductService } = require("../../../src/services");

const { newProduct, noProduct, shortNameProduct } = require("../mocks/newProductMock");

describe('Testes da camada Service para cadastrar um produto', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível cadastrar um produto com sucesso', async function () {
    // Act
    const result = await newProductService.newProduct(newProduct);
    // Assert 
    // expect(result.message).to.be.deep.equal({
    //   id: 4,
    //   name: "ProdutoX",
    // });
    // expect(result.type).to.be.equal(null);
    expect(result).to.be.deep.equal({ type: null, message: { id: 4, name: "ProdutoX" }});
  });

  it("Verifica se ao cadastrar um produto sem o campo name, retorna uma mensagem de erro", async function () {
    // Act
    const result = await newProductService.newProduct(noProduct);
    // Assert
    expect(result).to.be.deep.equal({
      type: "any.required",
      message: '"name" is required',
    });
  });

  it("Verifica se ao cadastrar com o campo name menor que 5 caracteres, retorna uma mensagem de erro", async function () {
    // Act
    const result = await newProductService.newProduct(shortNameProduct);
    // Assert
    expect(result).to.be.deep.equal({
      type: "string.min",
      message: '"name" length must be at least 5 characters long',
    });
  });
});
