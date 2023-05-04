const chai = require("chai");
const { expect } = chai;
const { validateSaleObj } = require('../../../src/services/validations/validateSaleObj');
const { saleWithoutProductID, saleWithoutQuantity, saleWithLowQuantity } = require('../mocks/wrongSalesMock');

describe('Testes da função validateSaleObj', function () {
  it('Verifica se ao passar uma venda sem productId, retorna uma mensagem de erro', async function () {
    // Act
    const validate = validateSaleObj(saleWithoutProductID);
    // Assert
    expect(validate[0]).to.be.deep.equal({
      status: 400,
      message: '"productId" is required',
    });
  });

  it("Verifica se ao passar uma venda sem quantity, retorna uma mensagem de erro", async function () {
    // Act
    const validate = validateSaleObj(saleWithoutQuantity);
    // Assert
    expect(validate[0]).to.be.deep.equal({
      status: 400,
      message: '"quantity" is required',
    });
  });

  it("Verifica se ao passar uma venda com quantity menor ou igual a zero, retorna uma mensagem de erro", async function () {
    // Act
    const validate = validateSaleObj(saleWithLowQuantity);
    // Assert
    expect(validate[0]).to.be.deep.equal({
      status: 422,
      message: '"quantity" must be greater than or equal to 1',
    });
  });
});