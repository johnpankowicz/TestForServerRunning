import { Injectable } from '@angular/core';
@Injectable()
export class MyServiceStub {
  printTime() {
    let time = this.getNow()
    console.log("MyServiceStub:printTime ", time);
  }

  getNow() {
    let now = Date.now();
    let sec = (Math.floor(now / 1000)) % 100;
    let ms = now % 1000;
    return sec.toString() + ":" + ms.toString();
  }
}
