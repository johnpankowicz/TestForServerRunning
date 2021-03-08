import { Injectable } from '@angular/core';
@Injectable()
export class Service1 {
  printTime() {
    let time = this.getNow();
    console.log("Service 1: ", time);
  }

  getNow() {
    let now = Date.now();
    let sec = (Math.floor(now / 1000)) % 100;
    let ms = now % 1000;
    return sec.toString() + ":" + ms.toString();
  }
  }
