import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes = [
  { path: "", loadChildren: './app/app.module#AppModule' },
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RootRoutingModule{

}

