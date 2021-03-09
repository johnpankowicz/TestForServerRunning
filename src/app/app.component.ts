import { Component } from '@angular/core';
// import { MyService } from './services/myservice'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testasync';
  start: number;

  constructor (){
  }

  // ngOnInit() {
  //   console.log("AppComponent:ngOnInit", this.getNow())
  //   this.myservice.printTime();
  // }

  testit() {
    console.log("start test: ", this.getNow());

    // this.promiseMethod();
    // console.log("after return from promiseMethod: ", this.getNow());

    let prom = this.asyncMethod();
    console.log("after return from asyncMethod: ", this.getNow());
    prom.then
  }

  getNow() {
    let now = Date.now();
    let sec = (Math.floor(now / 1000)) % 100;
    let ms = now % 1000;
    return sec.toString() + ":" + ms.toString();
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("ResolveValue");
        console.log("inside setTimeout callback: ", this.getNow());
      }, 1000);
    });
  }

  promiseMethod(){
    this.waitForOneSecond().then((value) =>
    console.log("Inside promiseMethod callback:", value, this.getNow()));
    console.log("Inside promiseMethod:", this.getNow());
  }

  async asyncMethod() {
    const value = await this.waitForOneSecond();
    console.log("Inside asyncMethod:", value, this.getNow());
    }


}
