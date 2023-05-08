const { expect } = require("chai");
const sinon = require("sinon");
const { oneProductModel } = require("../../../src/models");

const { oneProduct } = require("../mocks/productsMocks");
const connection = require("../../../src/models/connection");

describe('Testes da camada Model de um produto específico', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se é possível listar um produto específico', async function () {
    const id = 1;
    // Arrange 
    sinon.stub(connection, 'execute').resolves([[oneProduct]]);
    // Act
    const result = await oneProductModel.getProductById(id);
    // Assert
    expect(result).to.be.deep.equal(oneProduct)
  });
});
