import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // posts: Array<Post> = [
  //   {_id: 'aaa', title: 'string', url: 'string', description: 'string'},
  //   {_id: 'aaa', title: 'string', url: 'string', description: 'string'},
  //   {_id: 'aaa', title: 'string', url: 'string', description: 'string'},
  //   {_id: 'aaa', title: 'string', url: 'string', description: 'string'}
  // ];

  posts: Array<Post>;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(res=> this.posts = res);
  }

}
