const { expect } = require("chai");
const sinon = require("sinon");
const { newProductService } = require("../../../src/services");
const { newProductModel } = require("../../../src/models");

const { newProduct } = require("../mocks/newProductMock");

describe('Testes da camada Service para cadastrar um produto', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível cadastrar um produto com sucesso', async function () {
    // Act
    const result = await newProductService.newProduct(newProduct);
    // Assert 
    expect(result.message).to.be.deep.equal({
      id: 4,
      name: "ProdutoX",
    });
  });
});
