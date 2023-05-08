const { expect } = require("chai");
const sinon = require("sinon");
const { oneSaleService } = require("../../../src/services");
const { oneSaleModel } = require("../../../src/models");

const { oneSale } = require('../mocks/oneSaleMock');

describe('Testes da camada Service de uma venda específica', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível listar a venda por um id específico', async function () {
    // Arrange
    sinon.stub(oneSaleModel, 'getSaleById').resolves(oneSale);
    // Act 
    const result = await oneSaleService.getSaleById(1);
    // Assert
    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(oneSale);
  });
  it("Verifica se ao passar um id inválido, retorna um erro", async function () {
    // Arrange
    sinon.stub(oneSaleModel, "getSaleById").resolves(undefined);
    // Act
    const result = await oneSaleService.getSaleById(14);
    // Assert
    expect(result.message).to.equal("Sale not found");
    expect(result.type).to.equal("ERROR");
  });
});