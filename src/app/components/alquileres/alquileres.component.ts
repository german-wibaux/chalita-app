import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';
import { PropertyInterface } from 'src/app/models/propiedadInterface';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit {

  properties: PropertyInterface[] = [];

  ngOnInit(): void {
  }

  constructor(
    private propertiesService: PropertyService,
    private route: Router
  ) { 
    
    this.propertiesService.getPropertiesAlquileres().subscribe( properties => {

      properties.forEach(element => {        

        if (element.available) {          
          this.properties.push(element);
        }
        
      });
        
    });

  }



}
