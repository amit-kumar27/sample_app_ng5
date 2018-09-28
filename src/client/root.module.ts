import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { RootComponent } from "./root.component";
import { RootRoutingModule } from "./root-routing.module";


@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng5_web" }),
    HttpClientModule,
    RootRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RootModule {}
