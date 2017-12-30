import { Component } from '@angular/core';

import { loginPage } from '../login/login';
import { ContactPage } from '../contact/contact';
import { settingsPage } from '../settings/settings';
import { reportPage } from '../report/report';
import { BackgroundPage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BackgroundPage;
  tab2Root = loginPage;
  tab3Root = ContactPage;
  tab4Root = settingsPage;
  tab5Root = reportPage;

  constructor() {

  }
  // TabsPage = this.tab1Root ? 'show-tabbar' :null
}
