import { BrowserModule, bootstrapApplication  } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core"
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./app/router";
import { HttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent,{
  providers: [
    HttpClient ,
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes),
    )
  ]
})



