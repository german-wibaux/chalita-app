import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { PropertyInterface } from '../../models/propiedadInterface';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: PropertyInterface[] = [];
  editState: boolean = false;
  propertyToEdit: PropertyInterface | undefined;

  constructor(
    private propertiesService: PropertyService,
    private route: Router
  ) { 
    
    this.propertiesService.getProperties().subscribe( properties => {

      /** List every properties */
      let i = 0;
      const rand = properties[Math.floor(Math.random() * properties.length)];
      const rand1 = properties[Math.floor(Math.random() * properties.length)];
      this.properties.push(rand);
      while (i < 5) {
        const rand1 = properties[Math.floor(Math.random() * properties.length)];
        if(this.properties.indexOf(rand1) == -1 && rand1.available ){
          this.properties.push(rand1);
          i++;
        }

      } 
        
    });
      
    
  }


  ngOnInit() { 
    
  }

}
