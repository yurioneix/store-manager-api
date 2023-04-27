const { expect } = require('chai');
const sinon = require('sinon');
const { allProductsModels } = require('../../../src/models');

const { allProducts }  = require('../mocks/productsMocks');
const connection = require('../../../src/models/connection');

describe('Testes da camada Model de todos os produtos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica que é possível listar todos os produtos', async function () {
    // Arrange 
    sinon.stub(connection, 'execute').resolves([allProducts]);
    // Act
    const result = await allProductsModels.findAll();
    // Arrange
    expect(result).to.be.deep.equal(allProducts);
  });
});
