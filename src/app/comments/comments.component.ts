import { Component, OnInit } from '@angular/core';
import { Comment } from './interfaces';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  async loadComments() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    );
    const data: Comment[] = await response.json();
    this.comments = data;
  }

  ngOnInit(): void {
    this.loadComments();
  }
}
