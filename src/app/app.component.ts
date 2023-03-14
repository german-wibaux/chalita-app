import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chalita-app-v15';

  constructor(
    router: Router,
    route: ActivatedRoute
  ){}

  onAnchorClick ( ) {
    alert("On anchor click")        
  }

  searchProperty() {
    alert("On search property")
  }

}
