import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
    {
      title: "Mon Premier Post1",
      content: "blablablablab",
      loveIts: 1,
      created_at: new Date()
    },

    {
      title: "Mon Deuxième Post",
      content: "blablablablab2",
      loveIts: -2,
      created_at: new Date()
    },

    {
      title: "Mon Deuxième Post",
      content: "blablablablab2",
      loveIts: 1,
      created_at: new Date()
    }

    ];
}
