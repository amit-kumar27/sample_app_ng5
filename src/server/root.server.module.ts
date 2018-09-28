import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { RouterModule } from '@angular/router';

import {RootModule} from '../client/root.module';
import {RootComponent} from '../client/root.component';


@NgModule({
  imports: [
    RootModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [RootComponent],
  providers: []
})
export class RootServerModule {}
