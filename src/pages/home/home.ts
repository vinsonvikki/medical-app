
import { Component } from '@angular/core';
import {NavController} from 'ionic-angular'
import {loginPage} from '../login/login'
import {UserloginPage} from '../user_login/user_login'


@Component({
  templateUrl: 'home.html'
})

export class BackgroundPage {

  constructor(public navCtrl: NavController) {}

  openAddPage() {
    this.navCtrl.push(loginPage)
  }
  openUserLoginPage() {
    this.navCtrl.push(UserloginPage)
  }

}
