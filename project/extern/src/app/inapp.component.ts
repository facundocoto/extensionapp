import { Component, Injectable, Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InfoService } from './info.service';
import { Widget } from './Model/widget';


@Injectable()
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1> {{title}} </h1>
              <div class="class1">
                <video id="iVideo" autoplay controls loop preload="metadata">
                  <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/mp4"/>
                  Video not supported.
                </video>
              </div>`,
  styles: [
    'h1 { color: red; }',
    '.class1 {background-color: beige; }'
  ],
  // styleUrls: ['./app.component.css']
  providers: [InfoService]
})
export class INAppComponent {
  title = 'app';
  public settings: Widget = new Widget(0, 0, 0, 0, 'red');
 constructor(  private iService: InfoService) {
    this.settings.bottom = 10;
    this.settings.top = 10;
    this.settings.left = 10;
    this.settings.right = 10;
    this.settings.color = 'red';
    this.title = JSON.stringify(this.iService.httpGet('https://nodeweb-67e55.firebaseio.com/prueba.json'));
   }

}


