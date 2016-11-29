import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component ({
    selector: 'comments',
    moduleId: module.id,
    templateUrl: 'comments.component.html',
    styleUrls: [ 'comments.component.css' ],
    inputs: [
        'username',
        'comment'
    ],
    providers: [ CommentService ]
})
export class CommentsComponent implements OnInit {
    comments: Comment[];

    constructor(private commentService: CommentService) { }

    getComments () {
        this.commentService.getComments().then(comments => this.comments = comments);
        // this.comments = this.commentService.getComments()
    }

    ngOnInit(): void {
        this.getComments();
    }

}
