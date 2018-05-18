import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { INAppComponent } from './src/app/inapp.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Widget } from './src/app/Model/widget';
import { SecondComponent } from './src/app/second/second.component';


@NgModule({
    declarations: [INAppComponent, SecondComponent],
    imports: [ HttpClientModule ],
    // tslint:disable-next-line:max-line-length
    entryComponents: [INAppComponent, SecondComponent], // Especificar la lista de componentes que tienen que compilarse cuando se llama al modulo
    providers: [ HttpClientModule,
        {
            provide: 'widgets',
            useValue: [
                {
                    name: 'component-a1',
                    component: INAppComponent,
                    settings: new Widget(10, 10, 10, 10, 'red')
                },

                {
                    name: 'component-b1',
                    component: SecondComponent
                }
            ],
            multi: true
        },
        // TestService
    ],
    exports: [HttpClientModule]
})
export default class ModuleA { }
