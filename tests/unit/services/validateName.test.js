// const { expect } = require('chai');
// const sinon = require("sinon");

// const { validateName } = require('../../../src/services/validations/validateName');

// describe('Testa a função validateName', function () {
//   it('Verifica se caso o type do error for "any.required", retorna a mensagem correta', function () {
//     // Act
//     const result = validateName({});
//     // Assert
//     expect(result).to.be.deep.equal({
//       type: "any.required",
//       message: '"name" is required',
//     });
//   });

//    it('Verifica se caso o type do error for "string.min", retorna a mensagem correta', function () {
//      // Act
//      const result = validateName({ name: "Yuri" });
//      // Assert
//      expect(result).to.be.deep.equal({
//        type: "string.min",
//        message: '"name" length must be at least 5 characters long',
//      });
//    });
// });