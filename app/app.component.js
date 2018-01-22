(function(app) {

  vm = AppComponent.prototype;

  Component = ng.core.Component;

  AppComponent.annotations = [
    new Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html'
    })
  ];

  function AppComponent() 
  {
      this.ex = 'what';
      this.hey = 'hey';
  }

  vm.ngOnInit = function() 
  {
      console.log(this.ex)
  }

  vm.clickEvent = function() 
  {
      var hello = 'this is hey';
      console.log(hello, this.ex, this.hey);
  }

  vm.onOk = function(event)
  {
    console.log(event)
  }

  app.AppComponent = AppComponent;

})(window.app || (window.app = {}));


