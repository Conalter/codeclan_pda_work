var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("should have working multiply 3 by 5 to get 15 function", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click(),
    element(by.css('#operator_multiply')).click(),
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })

  it("should have working divide 21 by 7 to get 3 function", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click(),
    element(by.css('#number1')).click(),
    element(by.css('#operator_divide')).click(),
    element(by.css('#number7')).click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it("should add 1 and 4 to get 5 function", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click(),
    element(by.css('#operator_add')).click(),
    element(by.css('#number4')).click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should subtract 7 from 4 to get 3 function', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click(),
    element(by.css('#operator_subtract')).click(),
    element(by.css('#number4')).click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('should concatenate multiple number button clicks', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click().click().click(),
    element(by.css('#operator_add')).click(),
    element(by.css('#number2')).click().click().click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('333');
  })

  it('should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click().click(),
    element(by.css('#operator_multiply')).click(),
    element(by.css('#number1')).click().click().click(),
    element(by.css('#operator_divide')).click(),
    element(by.css('#number3')).click(),
    element(by.css('#operator_subtract')).click(),
    element(by.css('#number8')).click(),
    element(by.css('#number9')).click(),
    element(by.css('#number8')).click(),
    element(by.css('#operator_multiply')).click(),
    element(by.css('#number5')).click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('5685');
  })

  it('should clear the running total without effecting the calculation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click(),
    element(by.css('#operator_multiply')).click(),
    element(by.css('#clear')).click(),
    element(by.css('#number3')).click(),
    element(by.css('#operator_equals')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  })

  it('should not allow user to divide by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click(),
    element(by.css('#operator_divide')).click(),
    element(by.css('#number0')).click(),
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

});
