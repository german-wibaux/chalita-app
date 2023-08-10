import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LocationInterface } from 'src/app/models/locationInterface';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})
export class NewLocationComponent implements OnInit {

  location: LocationInterface = {
    name: ''
  }

  waiting = true

  constructor(private locationService: LocationService,
              private router: Router) { }

  ngOnInit() {
  }

  onSaveLocation() {
    this.waiting = false;
    this.locationService.addLocation(this.location).then( response => {
      if (response) {
        alert("La localidad ha sido ingresada con exito");
        this.router.navigate(['/private']);
      } else {
        alert("Ha ocurrido un error, intentelo nuevamente");
      }
    });
    
    //this.router.navigate(['/private']);
  }


  

}
