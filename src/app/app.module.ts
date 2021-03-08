import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Service1 } from './services/service1';
import { Service2 } from './services/service2';

let start: number;

function isProviderService1() {
  console.log("start isProviderService1: ", getNow());

  // promiseMethod();
  // console.log("after return from promiseMethod: ", getTimeDiff());

  let prom = asyncMethod();
  console.log("after return from asyncMethod: ", getNow());

  return false;
}

function getNow() {
  let now = Date.now();
  let sec = (Math.floor(now / 1000)) % 100;
  let ms = now % 1000;
  return sec.toString() + ":" + ms.toString();
}

function waitForOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("ResolveValue");
      console.log("inside setTimeout callback: ", getNow());
    }, 1000);
  });
}

function promiseMethod() {
  waitForOneSecond().then((value) =>
  console.log("Inside promiseMethod callback:", value, getNow()));
  console.log("Inside promiseMethod:", getNow());
}

async function asyncMethod() {
  const value = await waitForOneSecond();
  console.log("Inside asyncMethod:", value, getNow());
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
    useClass: isProviderService1() ?  Service1 : Service2
    // useClass: useService1() ?  Service1 : Service2
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}

