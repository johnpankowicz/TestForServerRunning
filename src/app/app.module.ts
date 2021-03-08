import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Service1 } from './services/service1';
import { Service2 } from './services/service2';

let start: number;

function testit() {
  start = getNow();
  console.log("start test: ", getTimeDiff());

  // promiseMethod();
  // console.log("after return from promiseMethod: ", getTimeDiff());

  let prom = asyncMethod();
  console.log("after return from asyncMethod: ", getTimeDiff());

  return false;
}

function getNow() {
  let now = Date.now();
  return Math.floor(now / 100); // return tenths of second
}

function getTimeDiff() {
  return getNow();
  // return getNow() - start;
}

function waitForOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("ResolveValue");
      console.log("inside setTimeout callback: ", getTimeDiff());
    }, 1000);
  });
}

function promiseMethod() {
  waitForOneSecond().then((value) =>
  console.log("Inside promiseMethod callback:", value, getTimeDiff()));
  console.log("Inside promiseMethod:", getTimeDiff());
}

async function asyncMethod() {
  const value = await waitForOneSecond();
  console.log("Inside asyncMethod:", value, getTimeDiff());
  }

function useService1() {
  return true;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
    provide: Service1,
    useClass: testit() ?  Service1 : Service2
    // useClass: useService1() ?  Service1 : Service2
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}

