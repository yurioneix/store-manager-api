const { expect } = require('chai');
const sinon = require('sinon');

const { newProductModel } = require('../../../src/models');
const { newProduct } = require('../mocks/newProductMock');
const connection = require('../../../src/models/connection');

describe('Testes da camada Model para cadastrar um produto', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível cadastrar um produto com sucesso', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    // Act 
    const result = await newProductModel.insert(newProduct);
    // Arrange
    expect(result).to.equal(4);
  });
})