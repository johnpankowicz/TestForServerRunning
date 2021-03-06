import { Component } from '@angular/core';
import { MyService } from './services/myservice'

@Component({
  selector: 'app-root',
  template: `<h2> Test for server running </h2>`
})
export class AppComponent {
  title = 'testasync';

  constructor (private myservice: MyService){
    console.log("AppComponent:ngOnInit", this.getNow())
    myservice.printTime();
 }

  getNow() {
    let now = Date.now();
    let sec = (Math.floor(now / 1000)) % 100;
    let ms = now % 1000;
    return sec.toString() + ":" + ms.toString();
  }
}
