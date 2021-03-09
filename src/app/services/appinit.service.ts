import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

let server = "http://sosuchhostanywhere.org";
//
// let server = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow";

@Injectable()
export class AppInitService {
  constructor(private httpClient: HttpClient) {}
  static isRunning: boolean | null = null;

  static async isWebServerRunning() {
    console.log("AppInitService:isWebServerRunning Enter ", this.getNow());
    console.log("AppInitService:isWebServerRunning type of isRunning = ", typeof (this.isRunning) )
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    // check every 50 milliseconds
    while (AppInitService.isRunning === null) {
      console.log("AppInitService:isWebServerRunning in delay loop", this.getNow());
      await delay(50);
    }
    let running = AppInitService.isRunning;
    console.log('AppInitService:isWebServerRunning Exit -isRunnning = ' + String(running), this.getNow());
    return running;
  }

  pingServer(): Promise<any> {
    console.log('AppInitService:pingServer. Enter ', AppInitService.getNow());

    const promise = this.httpClient
      .get(server)
      .toPromise()
      .then((settings) => {
        console.log('AppInitService:pingServer Got server response', AppInitService.getNow());
        AppInitService.isRunning = true;
        return true;
      })
      .catch((err) => {
        console.log('AppInitService:pingServer No server Response', AppInitService.getNow());
        AppInitService.isRunning = false;
        err;
      });

    return promise;
  }

  static getNow() {
    let now = Date.now();
    let sec = (Math.floor(now / 1000)) % 100;
    let ms = now % 1000;
    return sec.toString() + ":" + ms.toString();
  }
}
