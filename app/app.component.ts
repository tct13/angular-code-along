import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ post }}</h2>
    <comments></comments>
  `
})

export class AppComponent  {
  title = 'Cute Cat';
  post = 'Mr Mittens at home with me';
}
