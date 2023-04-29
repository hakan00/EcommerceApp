import { BrowserModule, bootstrapApplication  } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core"
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient() ,
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule.forRoot([]),
    )
  ]
})
function provideHttpClient(): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error("Function not implemented.");
}

