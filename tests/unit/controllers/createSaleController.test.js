const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { createSaleService } = require("../../../src/services");
const { createSaleController } = require("../../../src/controllers");
const { arrayOfSales } = require("../mocks/arrayOfSalesMocks");
const { saleWithoutProductID } = require("../mocks/wrongSalesMock");

describe('Testes da camada Controller para cadastrar uma nova venda', function () {
   afterEach(function () {
     sinon.restore();
   });
  
  it('Verifica se ao cadastrar uma venda com sucesso, retorna a mensagem e o status corretos', async function () {
    // Arrange 
    const res = {};
    const req = {
      body: arrayOfSales,
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(createSaleService, "createSale").resolves({
      status: 201,
      message: {
        id: 3,
        itemsSold: arrayOfSales,
      },
    });
    // Act 
    await createSaleController.createSale(req, res);
    // Assert
    expect(
      res.json({
        status: 201,
        message: {
          id: 3,
          itemsSold: arrayOfSales,
      }
      })
    );
  });
});
