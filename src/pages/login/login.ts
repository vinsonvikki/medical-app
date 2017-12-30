import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {registerPage} from '../register/register';
import {forgetPaswdPage} from '../forget_paswd/forget_paswd';
import {adminHomePage} from '../admin_home/admin_home';

@Component({
  selector: 'page-about',
  templateUrl: 'login.html'
})
export class loginPage {
  private login : FormGroup;

  constructor( private formBuilder: FormBuilder, public navCtrl: NavController  ) {
    this.login = this.formBuilder.group({
    'email'      : new FormControl('',[Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')]),
    'password'      : new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }


  openUserPage() {
    this.navCtrl.push(registerPage);
  }
  openForgetUserPage() {
    this.navCtrl.push(forgetPaswdPage);
  }
  openadminHomePage() {
    this.navCtrl.push(adminHomePage);
  }
  logForm(){
    console.log(this.login.value);
  }
}
