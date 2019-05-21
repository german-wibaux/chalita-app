import { Component, OnInit } from '@angular/core';
import { PropertyInterface } from 'src/app/models/propiedadInterface';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  properties: PropertyInterface[] = [];

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(
    private propertiesService: PropertyService
  ) { 
    
    this.propertiesService.getPropertiesVenta().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
        
    });

  

  }

}
