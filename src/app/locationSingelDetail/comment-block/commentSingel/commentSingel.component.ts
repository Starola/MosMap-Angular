import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentSingel',
  templateUrl: './commentSingel.component.html',
  styleUrls: ['./commentSingel.component.css']
})
export class CommentSingelComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
