import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BilletService } from '../services/billet.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private billetService: BilletService, private router: Router) { }
initForm( ) {
this.postForm = this.formBuilder.group({
  titre: ['', Validators.required],
  contenu: ['', Validators.required]
});
}
  ngOnInit() {
    this.initForm();
  }
  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue.titre,
      formValue.contenu,
      0,
      new Date()

    );
    this.billetService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
