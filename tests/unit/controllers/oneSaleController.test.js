const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { oneSaleService } = require("../../../src/services");
const { oneSaleController } = require("../../../src/controllers");
const {oneSale} = require("../mocks/oneSaleMock");

describe("Testes da camada Controller de uma venda específica", function () {
  afterEach(function () {
    sinon.restore();
  });

  it("Verifica se em caso de sucesso, retorna uma mensagem com status 200 e a venda específica", async function () {
    // Arrange
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(oneSaleService, "getSaleById")
      .resolves({ type: null, message: oneSale });
    // Act
    await oneSaleController.getSaleById(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneSale);
  });

  it('Verifica se ao não encontrar uma venda com o id informado, retorna o status 404 e a mensagem: "Sale not found"', async function () {
    // Arrange
    const res = {};
    const req = {
      params: { id: 14 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(oneSaleService, "getSaleById")
      .resolves({ type: "ERROR", message: "Sale not found" });
    // Act
    await oneSaleController.getSaleById(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
  });
});
