import { Injectable } from '@angular/core';
import { COMMENTS } from './mock-comments';
import { Comment } from './comment';

@Injectable()
export class CommentService {
    getComments(): Promise<Comment[]> {
        return Promise.resolve(COMMENTS);
    }
}
