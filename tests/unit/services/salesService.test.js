const { expect } = require("chai");
const sinon = require("sinon");
const { salesService } = require("../../../src/services");
const { salesModel } = require("../../../src/models");

const { allSalesMock } = require("../mocks/allSalesMock");

describe('Testes da camada Service de todas as vendas', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível listar todas as vendas', async function () {
    // Arrange
    sinon.stub(salesModel, 'getAll').resolves(allSalesMock);
    // Act 
    const result = await salesService.getAll();
    // Assert
    expect(result.message).to.be.deep.equal(allSalesMock);
    expect(result.type).to.be.deep.equal(null);
  });
   it("Verifica se caso o banco caia, retorne uma mensagem genérica", async function () {
     // Arrange
     sinon.stub(salesModel, "getAll").resolves(undefined);
     // Act
     const result = await salesService.getAll();
     // Assert
     expect(result.message).to.be.deep.equal("Sale not found");
     expect(result.type).to.be.deep.equal("ERROR");
   });
});