import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { MyApp } from './app.component';

import { loginPage } from '../pages/login/login';
import { UserloginPage } from '../pages/user_login/user_login';
import { forgetPaswdPage } from '../pages/forget_paswd/forget_paswd';
import { adminHomePage } from '../pages/admin_home/admin_home';
import { addUsersPage } from '../pages/add_users/add_users';
import { displayUsersPage } from '../pages/user_list/user_list';
import { updateUsersPage } from '../pages/update_users/update_users';
import { addMedicinesPage } from '../pages/add_medicines/add_medicines';
import { updateMedicinesPage } from '../pages/update_medicines/update_medicines';
import { ContactPage } from '../pages/contact/contact';
import { BackgroundPage } from '../pages/home/home';
import { registerPage } from '../pages/register/register';
import { settingsPage } from '../pages/settings/settings';
import { editProfilePage } from '../pages/edit_profile/edit_profile';
import { reportPage } from '../pages/report/report';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AnimatesDirective,
    MyApp,
    loginPage,
    UserloginPage,
    forgetPaswdPage,
    adminHomePage,
    addUsersPage,
    displayUsersPage,
    updateUsersPage,
    addMedicinesPage,
    updateMedicinesPage,
    ContactPage,
    BackgroundPage,
    registerPage,
    settingsPage,
    editProfilePage,
    reportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    loginPage,
    UserloginPage,
    forgetPaswdPage,
    adminHomePage,
    addUsersPage,
    displayUsersPage,
    updateUsersPage,
    addMedicinesPage,
    updateMedicinesPage,
    ContactPage,
    BackgroundPage,
    registerPage,
    settingsPage,
    editProfilePage,
    reportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     AnimationService
  ]
})
export class AppModule {}
