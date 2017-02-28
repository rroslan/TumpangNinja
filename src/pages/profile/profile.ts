import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage  implements OnInit{
  displayName;
  photoURL;
  // rootPage = TabsPage;




  constructor( public af: AngularFire, private navCtrl: NavController) {

  }
  ngOnInit(){
    this.af.auth.subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;

      }
      else {
        this.displayName = authState.auth.displayName;
        this.photoURL = authState.auth.photoURL;


      }


    });
  }
  login(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(authState => {
      this.displayName = authState.auth.displayName;
      this.photoURL = authState.auth.photoURL;



    });

  }
  logout(){
    this.af.auth.logout();

  }
}
