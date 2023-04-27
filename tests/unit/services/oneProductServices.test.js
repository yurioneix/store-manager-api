const { expect } = require("chai");
const sinon = require("sinon");
const { oneProductService } = require("../../../src/services");
const { oneProductModel } = require("../../../src/models");

const { oneProduct } = require('../mocks/oneProductMock');

describe('Testes dos produtos da camada de service', function () {
   afterEach(function () {
     sinon.restore();
   });
  it('Verifica se é possível listar o produto de um id específico', async function () {
    // Arrange
    sinon.stub(oneProductModel, 'getProductById').resolves(oneProduct);
    // Act 
    const result = await oneProductService.getProductById(1);
    // Assert
    // expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(oneProduct);
  });
  it('Verifica se ao passar um id inválido, retorna um erro', async function () {
    // Arrange 
    // sinon.stub(oneProductModel, "getProductById").resolves(undefined);
    // Act 
    const result = await oneProductService.getProductById('yuri');
    // Assert 
    expect(result.message).to.equal('"id" must be a number');
    expect(result.type).to.equal("INVALID_VALUE");
  });

   it("Verifica se ao passar um id inválido, retorna um erro", async function () {
     // Arrange
     sinon.stub(oneProductModel, "getProductById").resolves(undefined);
     // Act
     const result = await oneProductService.getProductById(14);
     // Assert
     expect(result.message).to.equal("ID_NOT_FOUND");
     expect(result.type).to.equal("ERROR");
   });
});