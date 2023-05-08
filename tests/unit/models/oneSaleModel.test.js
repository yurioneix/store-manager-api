const { expect } = require("chai");
const sinon = require("sinon");
const { oneSaleModel } = require("../../../src/models");

const { oneSale } = require("../mocks/oneSaleMock");
const connection = require("../../../src/models/connection");

describe("Testes da camada Model de uma venda específica", function () {
  afterEach(function () {
    sinon.restore();
  });
  it("Verifica se é possível listar uma venda específica", async function () {
    const id = 1;
    // Arrange
    sinon.stub(connection, "execute").resolves([oneSale]);
    // Act
    const result = await oneSaleModel.getSaleById(id);
    // Assert
    expect(result).to.be.deep.equal(oneSale);
  });
});
