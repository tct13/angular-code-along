import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comment } from './comment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommentService {
    private commentsUrl = 'app/comments';

    constructor(private http: Http) { }

    getComments(): Promise<Comment[]> {
        return this.http.get(this.commentsUrl)
                   .toPromise()
                   .then(response => response.json().data as Comment[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
