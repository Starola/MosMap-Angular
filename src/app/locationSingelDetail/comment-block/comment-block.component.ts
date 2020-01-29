import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/_services/comment.service';
import { CommentForCreation } from 'src/app/_models/commentForCreation';
import { CommentForCreationClass } from 'src/app/_models/commentForCreationClass';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.css']
})
export class CommentBlockComponent implements OnInit {
  @Input() locationId: number;

  commentList: Comment[];
  comentForCreation: CommentForCreation;
  commentCreationActive: boolean;

  constructor(
    private commentServive: CommentService,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {
    this.comentForCreation = new CommentForCreationClass();
   }

  ngOnInit() {
    this.getComments();
    this.commentCreationActive = false;
  }

  setCommenCreation() {
    this.commentCreationActive = !this.commentCreationActive;
  }


  getComments() {
    this.commentServive.getCommentsByLocationId(this.locationId).subscribe((comments: Comment[]) => {
      this.commentList = comments;
    }, error => {
      console.log(error);
    });
  }

  createComment() {
    this.comentForCreation.locationId = this.locationId;
    this.commentServive.createComment(this.comentForCreation).subscribe(next => {
      this.setCommenCreation();
      this.alertify.success("Kommentar erfolgreich erstellt");
      this.getComments();
    }, error => {
      console.log(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

}
