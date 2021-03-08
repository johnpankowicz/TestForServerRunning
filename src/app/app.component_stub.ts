import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component-stub.html',
  styleUrls: ['./app.component.css']
})
export class AppComponentStub {
  title = 'testasync';

  start: number;

  testit() {
    this.start = this.getNow();
    console.log("start test: ", this.getTimeDiff());

    // this.promiseMethod();
    // console.log("after return from promiseMethod: ", this.getTimeDiff());

    let prom = this.asyncMethod();
    console.log("after return from asyncMethod: ", this.getTimeDiff());
    prom.then
  }

  getNow() {
    let now = Date.now();
    return Math.floor(now / 100); // return tenths of second
  }

  getTimeDiff() {
    return this.getNow() - this.start;
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("ResolveValue");
        console.log("inside setTimeout callback: ", this.getTimeDiff());
      }, 1000);
    });
  }

  promiseMethod(){
    this.waitForOneSecond().then((value) =>
    console.log("Inside promiseMethod callback:", value, this.getTimeDiff()));
    console.log("Inside promiseMethod:", this.getTimeDiff());
  }

  async asyncMethod() {
    const value = await this.waitForOneSecond();
    console.log("Inside asyncMethod:", value, this.getTimeDiff());
    }


}
