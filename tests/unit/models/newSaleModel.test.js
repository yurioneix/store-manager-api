const { expect } = require('chai');
const sinon = require('sinon');

const { createSaleModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Testes da camada Model para cadastrar uma nova venda', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível cadastrar com sucesso uma nova venda', async function () {
    // Arrange
    sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
    // Act
    const result = await createSaleModel.createSale();
    // Arrange
    expect(result).to.equal(3);
  });
});