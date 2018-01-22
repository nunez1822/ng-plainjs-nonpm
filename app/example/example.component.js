(function(app) {

  app.ExampleComponent = ExampleComponent;
  vm = ExampleComponent.prototype;

  EventEmitter = ng.core.EventEmitter;
  Component = ng.core.Component;

  ExampleComponent.annotations = [
    new Component({
      selector: 'my-example',
      templateUrl: 'app/example/example.component.html',
      inputs: [
        'myInput',
      ],
      outputs: [
        'ok'
      ]
    })
  ];

  function ExampleComponent() 
  {
    this.example = "hey this is an example";
    this.ok = new EventEmitter();
  }

  vm.emitOk = function()
  {
    this.ok.emit(true);
  }

})(window.app || (window.app = {}));
