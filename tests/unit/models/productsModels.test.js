const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../src/models');

const allProducts = require('./mocks/productsMocks');
const connection = require('../../../src/models/connection');

describe('Testes dos produtos da camada Models', function () {
  it('Verifica que é possível listar todos os produtos', async function () {
    // Arrange 
    sinon.stub(connection, 'execute').resolves(allProducts);
    // Act
    const result = await productsModels.findAll();
    // Arrange
    expect(result).to.be.deep.equal(allProducts);
  });
});
