import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAn1v8hyxFz6Pay8Oky8FZdhmWDZICQEog',
  authDomain: 'savepong-ionic-bulletinboard.firebaseapp.com',
  databaseURL: 'https://savepong-ionic-bulletinboard.firebaseio.com',
  projectId: 'savepong-ionic-bulletinboard',
  storageBucket: 'savepong-ionic-bulletinboard.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
