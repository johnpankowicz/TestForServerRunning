import { Injectable } from '@angular/core';
@Injectable()
export class Service1 {
  printTime(start: number) {
    let time = this.getNow() - start
    console.log("Service 1: ", time);
  }

  getNow() {
    let now = Date.now();
    return Math.floor(now / 100); // return tenths of second
  }
}
