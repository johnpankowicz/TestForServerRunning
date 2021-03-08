import { Injectable } from '@angular/core';
@Injectable()
export class Service2 {
  printTime(start: number) {
    let time = this.getNow() - start
    console.log("Service 2: ", time);
  }

  getNow() {
    let now = Date.now();
    return Math.floor(now / 100); // return tenths of second
  }
}
