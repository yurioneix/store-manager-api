const { expect } = require('chai');
const sinon = require('sinon');

const { createSaleModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Testes da camada Model para cadastrar uma nova venda', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível cadastrar com sucesso uma nova venda na tabela sales', async function () {
    // Arrange
    sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
    // Act
    const result = await createSaleModel.createSale();
    // Arrange
    expect(result).to.equal(3);
  });

   it("Verifica se é possível cadastrar com sucesso uma nova venda na tabela sales", async function () {
     // Arrange
     sinon.stub(connection, "execute").resolves([{ affectedRows: 3 }]);
     // Act
     const result = await createSaleModel.createSaleProducts(2, 2, 20);
     // Arrange
     expect(result).to.equal(3);
   });
});