
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';
import {loginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'report.html'
})
export class reportPage {
  tabBarElement: any;
  @ViewChild('myElement') myElem;
 private animator: AnimationBuilder;
  constructor(public navCtrl: NavController, animationService: AnimationService) {
    this.animator = animationService.builder();
  }
   Member: string = "f";
   userNameList: string = "1";
  public event = {
   month: '2017-12-23',
   timeStarts: '07:43',
   timeEnds: '1990-02-20'
 }
  openAddUserPage() {
    this.navCtrl.push(loginPage);
  }
  openAddMedicinePage() {
    this.navCtrl.push(loginPage);
  }
  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }
}
