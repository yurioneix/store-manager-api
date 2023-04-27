const { expect } = require("chai");
const sinon = require("sinon");
const { productsServices } = require("../../../src/services");
const { allProductsModels } = require('../../../src/models');

const { allProducts }  = require("../mocks/productsMocks");


describe('Testes da camada Service de todos os produtos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível listar todos os produtos cadastrados', async function () {
    // Arrange
    sinon.stub(allProductsModels, 'findAll').resolves(allProducts);
    // Act 
    const result = await productsServices.findAll();
    // Assert
    expect(result.message).to.be.deep.equal(allProducts);
    expect(result.type).to.be.deep.equal(null);
  });
   it("Verifica se caso o banco caia, retorne uma mensagem genérica", async function () {
     // Arrange
     sinon.stub(allProductsModels, "findAll").resolves(undefined);
     // Act
     const result = await productsServices.findAll();
     // Assert
     expect(result.message).to.be.deep.equal("Product not found");
     expect(result.type).to.be.deep.equal('ERROR');
   });
});