(function(app) {

app.AppModule = AppModule;

NgModule = ng.core.NgModule;

AppModule.annotations = [
  new NgModule({
      imports: [ 
        ng.platformBrowser.BrowserModule
      ],
      declarations: [ 
        app.AppComponent, 
        app.ExampleComponent 
      ],
      bootstrap: [ app.AppComponent ]
  })
];

function AppModule() { }

})(window.app || (window.app = {}));
