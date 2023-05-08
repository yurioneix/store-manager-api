const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");

const { allSalesMock } = require("../mocks/allSalesMock");
const connection = require("../../../src/models/connection");

describe("Testes da camada Model de todas as vendas", function () {
  afterEach(function () {
    sinon.restore();
  });
  it("Verifica que é possível listar todas as vendas", async function () {
    // Arrange
    sinon.stub(connection, "execute").resolves([allSalesMock]);
    // Act
    const result = await salesModel.getAll();
    // Arrange
    expect(result).to.be.deep.equal(allSalesMock);
  });
});
