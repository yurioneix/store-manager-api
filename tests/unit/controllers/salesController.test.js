const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { allSalesMock } = require('../mocks/allSalesMock');

describe('Testes da camada Controller de todas as vendas', function () {
  afterEach(function () {
    sinon.restore();
  })
  it('Verifica se em caso de sucesso, retorna uma mensagem com status 200 e a lista de vendas', async function () {
    // Arrange
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'getAll').resolves({ type: null, message: allSalesMock });
    // Act 
    await salesController.listSales(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesMock);
  });
  it("Verifica se em caso de falha, retorna um status 404 e uma mensagem de erro", async function () {
    // Arrange
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getAll")
      .resolves({ type: "ERROR", message: "Sale not found" });
    // Act
    await salesController.listSales(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith("Sale not found");
  });
});