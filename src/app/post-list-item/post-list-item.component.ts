import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getContent() {
    return this.postContent;
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } 
  }

  // onLoveIt() {
  //     console.log("Love it !");
  // }

  // onDontLoveIt() {
  //     console.log("Don't love it !");
  // }
  
  onLoveIt() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
    // this.postService.savePosts();
  }

  onDontLoveIt() {
    this.postLoveIts--;
    this.post.loveIts = this.postLoveIts;
    // this.postService.savePosts();
  }
}
