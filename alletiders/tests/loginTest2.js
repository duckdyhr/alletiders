"use strict";

describe('loginService', function () {
  var loginService;
  
  var valid = {id:'johan@test.com', pw:'johan'};
  var empty = {};
  var invalid = {id:'johan'};
  var temp = {};
  
  beforeEach(function () {
    module('app');
  });
  
  beforeEach(inject(function (_loginService_) {
    loginService = _loginService_;
  }));
  
  it('tests if loginService is defined', function() {
    expect(loginService).toBeDefined();
    console.log(loginService.login);
    console.log("login():");
    console.log(loginService.login());
    console.log(temp);
  });
  
//  it('tests loginService login() function with valid data', function() {
////    loginService.login(valid.id, valid.pw, function(response) {});
//    
////    expect(temp).toEqual(valid);
//  });
  
//  it('tests loginService login() function with empty data', function() {
//    loginService.login(empty.id, empty.pw, function(response) {
//    })
//  })
  
//  it('tests loginService login() function with invalid data', function() {
//    loginService.login()
//  })
});