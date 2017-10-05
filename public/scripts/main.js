(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-picture-form="form"]';

  var App = window.App;
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler();
  formHandler.addOnInputHandler();

})(window);
