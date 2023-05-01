import { BrowserModule, bootstrapApplication  } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from "@angular/core"
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { ToastrModule } from "ngx-toastr";
import { routes } from "./app/router";
import { AppComponent } from "./app/app.component";



bootstrapApplication(AppComponent,{
  providers: [
    HttpClient ,
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        closeButton: true,
        progressBar: true
      }),
      RouterModule.forRoot(routes),
    )
  ]
})



