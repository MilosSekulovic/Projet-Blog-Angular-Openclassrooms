import { Component } from '@angular/core';
import * as firebase from 'firebase/app'; // a verifier sans le /app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyDHvSvjd5U5x4_zFTkqIAyffEnNisaRbF0",
      authDomain: "http-blog-angular.firebaseapp.com",
      databaseURL: "https://http-blog-angular.firebaseio.com",
      projectId: "http-blog-angular",
      storageBucket: "http-blog-angular.appspot.com",
      messagingSenderId: "738984992100"
    };
    firebase.initializeApp(config);
  }

}