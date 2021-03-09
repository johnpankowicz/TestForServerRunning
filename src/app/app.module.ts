import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyService } from './services/myservice';
import { MyServiceStub } from './services/myservice-stub';
import { AppInitModule } from './services/appinit.module';
import { AppInitService } from './services/appinit.service';


let running = false;


function useServer() {
  console.log('appmodule:useServer Enter. running=' + running, getNow());

  let isrunning = AppInitService.isWebServerRunning();

  // let y = AppInitService.isWebServerRunning();
  // let x = !y;
  // running = x;
  // console.log('appmodule:useServer Exit. running=' + running, getNow());
  // return running;

  // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // wait(2 * 1000).then(() => console.log('waited for 2 seconds', getNow()));

  console.log('appmodule:useServer Exit. isrunning=' + isrunning, getNow());
  return isrunning;
}

// function useServer2() {

//   return false;
// }


///////////////////////////////////////////////////////////////////
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppInitModule
  ],
  providers: [
    {
    provide: MyService,
    // useClass: useServer() ?  MyService : MyServiceStub
    useClass: AppInitService.isWebServerRunning() ?  MyService : MyServiceStub

    }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}

////////////////////////////////////////////////////////////////////


function isProviderService1() {
  console.log("start isProviderService1: ", getNow());

  // promiseMethod();
  // console.log("after return from promiseMethod: ", getTimeDiff());

  let prom = asyncMethod();
  console.log("after return from asyncMethod: ", getNow());

  return false;
}

async function asyncMethod() {
  const value = await waitForOneSecond();
  console.log("Inside asyncMethod:", value, getNow());
  }

function useService1() {
  return true;
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

