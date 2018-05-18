import { Component, OnInit, ViewContainerRef, ViewChild, Compiler, SkipSelf, Injector, AfterViewInit, ErrorHandler } from '@angular/core';
import {System} from 'systemJS';
import { Widget } from '../../../extern/src/app/Model/widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  iStyle = {'color' : 'blue',
            'width': '300px'};

@ViewChild('iComponentExtension', {read: ViewContainerRef}) iComponentExtension;

constructor (private compiler: Compiler, @SkipSelf() private injector: Injector) {}
private iTexto = '';
  ngOnInit() {
    // Importar el modulo principal de la extension desde dist (luego de npm run build)
    if (System.import('./../../../extern/dist/externalapp.module.js')) {
      console.log('se');
    }
    try {
    System.import('./../../../extern/dist/externalapp.module.js').then((module) => {
      // Toma el modulo principal
        const moduleFactory = this.compiler.compileModuleSync(module.default); // Compila el modulo principal con sus componentes definidos
        const moduleRef = moduleFactory.create(this.injector); // Instancia el modulo compilado y obtiene los widgets desde la extension
        const widgets = moduleRef.injector.get('widgets');
        // Obtengo todos los widgets creados en extension
        const WidgetsArray = [];
        for (let i = 0; i < widgets[0].length; i++) {
          WidgetsArray.push(widgets[0][i]);
        }
        console.log(WidgetsArray);

        const resolver = moduleRef.componentFactoryResolver; // Se apodera del componentFactory

        // Crear todos los componentes
        for (let k = 0; k < WidgetsArray.length; k++) {
          const componentFactory = resolver.resolveComponentFactory(WidgetsArray[k].component); // Crea los componentes
          this.iComponentExtension.createComponent(componentFactory);
        }
    });

    // Prueba de seteo de estilos
    this.iStyle.color = 'green';
    document.getElementById('iDiv').style.padding = '100px';
    console.log(document.getElementById('iDiv').style.padding);
  } catch (ex) {
    console.log('asd', ex);
  }

  }

}
