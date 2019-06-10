import {Component, OnInit} from '@angular/core';
import {FuwuqiService} from '../fuwuqi.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private fuwuqi: FuwuqiService) {
    // http.get(this.url)
    //   .subscribe(response => {
    //     console.log(response);
    //     this.posts = response;
    //     console.log(this.posts.id);
    //   });
    fuwuqi.getAll().subscribe(response => {
          console.log(response);
          this.posts = response;
          console.log(this.posts.id);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = {id: 0, title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        // debugger
        post.id = (response.id) - 1;
        // post['id'] =
        this.posts.unshift(post);
        console.log(this.posts);
      });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id,
      JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      });
  }


  ngOnInit() {
  }

}
