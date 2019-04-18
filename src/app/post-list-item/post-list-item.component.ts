import { Component, OnInit, Input } from '@angular/core';
import { BilletService } from '../services/billet.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() billet: Post;
@Input() index: number;
  constructor(private billetService: BilletService) {

  }

  ngOnInit() {
  }
  onLike() {
      this.billetService.like(this.index);
  }
onDisLike() {
  this.billetService.disLike(this.index);
}
onDelete() {
  this.billetService.removePost(this.index);
}

}
