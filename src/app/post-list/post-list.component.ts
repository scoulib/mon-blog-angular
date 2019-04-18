import { Component, OnInit, OnDestroy } from '@angular/core';
import { BilletService } from '../services/billet.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postSubscription: Subscription;
  constructor(private billetService: BilletService) {

  }
  ngOnInit() {
        this.postSubscription = this.billetService.postsSubject.subscribe(
          (posts: Post[]) => {
            this.posts = posts ;
          },
          error => console.log(error)
        );
        this.billetService.emitPostSubject();
  }
  ngOnDestroy() {
      this.postSubscription.unsubscribe();
  }

}
