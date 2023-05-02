import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService
  ){
    this._spinner.show();
    this._toastr.success("Toastr Works");
    setTimeout(()=>{
      this._spinner.hide();
    }, 5000)
  }

  login(form:NgForm){
    if(form.valid){
    console.log(form.value);
    }
  }

}
