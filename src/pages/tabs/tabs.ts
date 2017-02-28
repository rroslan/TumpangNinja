import { Component } from '@angular/core';

import { JualPage } from '../jual/jual';
import { ProfilePage } from '../profile/profile';
import { BeliPage } from '../beli/beli';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ProfilePage;
  tab2Root: any = JualPage;
  tab3Root: any = BeliPage;



  constructor() {

  }
}
