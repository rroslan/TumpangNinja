import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { BeliPage } from '../pages/beli/beli';
import { JualPage } from '../pages/jual/jual';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';

export const  firebaseConfig = {
  apiKey: "Your API KEY",
  authDomain: "tumpang.firebaseapp.com",
  databaseURL: "https://tumpang.firebaseio.com",
  storageBucket: "firebase-tumpang.appspot.com",
  messagingSenderId: "Your message id"
};
@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    BeliPage,
    JualPage,
    TabsPage
  ],
  imports: [AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    BeliPage,
    JualPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
