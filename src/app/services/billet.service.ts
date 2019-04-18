import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
export class BilletService {
   private posts: Post[] = [new Post('Mon premier post',
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
   12, new Date()),
   new Post('Mon deuxieme post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
   4, new Date()),
   new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
   2, new Date())];

   postsSubject = new Subject<Post[]>();
   emitPostSubject() {
     this.postsSubject.next(this.posts.slice());
   }
addPost(post: Post) {
this.posts.push(post);
this.emitPostSubject();
}
removePost(i: number) {
    this.posts.splice(i, 1);
    this.emitPostSubject();
}
like(i: number) {
  this.posts[i].loveIts++;
  this.emitPostSubject();
}

disLike(i: number) {
  this.posts[i].loveIts--;
  this.emitPostSubject();
}

}


