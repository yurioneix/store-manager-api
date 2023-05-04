const { expect } = require('chai');
const sinon = require('sinon');
const { createSaleService } = require('../../../src/services');

const { arrayOfSales } = require('../mocks/arrayOfSalesMocks');
const { createSaleModel } = require('../../../src/models');

describe('Testes da camada Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível cadastrar uma nova venda com sucesso', async function () {
    // Act
    const result = await createSaleService.createSale(arrayOfSales);
    // Assert
    expect(result).to.be.deep.equal({
      status: 201,
      message: {
        id: 3,
        itemsSold: arrayOfSales,
      }
    });
  });
});