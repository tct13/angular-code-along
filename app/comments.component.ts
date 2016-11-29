import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { COMMENTS } from './mock-comments';

@Component ({
    selector: 'comments',
    moduleId: module.id,
    templateUrl: 'comments.component.html',
    styleUrls: [ 'comments.component.css' ],
    inputs: [
        'username',
        'comment'
    ],
    providers: [
        CommentService
    ]
})
export class CommentsComponent implements OnInit {
    comments = COMMENTS;

    constructor(private commentService: CommentService) { }

    getComments () {
        this.commentService.getComments().then(comments => this.comments = comments);
    }

    ngOnInit(): void {
        this.getComments();
    }

}
