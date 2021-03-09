import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppInitService } from './appinit.service';

export function pingFactory(appInitService: AppInitService) {
  return () => appInitService.pingServer();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: pingFactory, deps: [AppInitService], multi: true },
  ],
})
export class AppInitModule {}
