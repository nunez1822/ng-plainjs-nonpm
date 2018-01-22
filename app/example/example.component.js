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

    this.start = false;
    this.table = [];
  }

  vm.onClick = function()
  {
    console.log(this.table, this.example)
  }

  vm.emitOk = function()
  {
    this.ok.emit(true);
    this.example = "hey"

    $.ajax({
      url: "https://nma-app-b2ca8.firebaseio.com/contacts.json",
      success: function( result ) 
      {
        console.log(result)
        this.table = result;
        this.start = true;
        
      }
    });

  }

})(window.app || (window.app = {}));
