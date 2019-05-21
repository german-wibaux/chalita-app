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
    throw new Error("Method not implemented.");
  }

  constructor(
    private propertiesService: PropertyService,
    private route: Router
  ) { 
    
    this.propertiesService.getPropertiesAlquileres().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
        
    });

    this.propertiesService.getPropertiesAlquileresPer().subscribe(properties1 => {
      properties1.forEach(element => {
        this.properties.push(element);
      });
    });

  }



}
