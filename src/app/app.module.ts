import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyService } from './services/myservice';
import { MyServiceStub } from './services/myservice-stub';
import { AppInitModule } from './services/appinit.module';
import { AppInitService } from './services/appinit.service';

function IsRunning(){
  return AppInitService.isWebServerRunning();
}

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
      useClass: IsRunning() ?  MyService : MyServiceStub
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
