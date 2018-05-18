import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoService {

  constructor(/* private iHttp: HttpClient */ ) {

   }

  private iHeaders = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
  };


  public getInfo() {
     // return this.iHttp.get('https://nodeweb-67e55.firebaseio.com/prueba.json', {headers: this.iHeaders} );
     // return 'Facundo Coto Texto plano';
 }

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

}
