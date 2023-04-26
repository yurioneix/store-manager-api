const { expect } = require("chai");
const sinon = require("sinon");
const { productsServices } = require("../../../src/services");
const { productsModels } = require('../../../src/models');

const allProducts = require("../mocks/productsMocks");


describe('Testes dos produtos da camada Service', function () {
  it('Verifica se é possível listar todos os produtos cadastrados', async function () {
    // Act 
    sinon.stub(productsModels, 'findAll').resolves(allProducts);
    // Arrange 
    const result = await productsServices.findAll();
    // Act
    expect(result.message).to.be.deep.equal(allProducts);
    expect(result.type).to.be.deep.equal(null);
  });
});