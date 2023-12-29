import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  
  properties: any[] = [];
  query = {"operation":"","property":"","location":""};
  

  constructor(private rutaActiva: ActivatedRoute,
              private propertiesService: PropertyService) {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        
        this.query.operation = params['operation'];
        this.query.property = params['property'];
        this.query.location = params['location'];
        // let binary = 0;

        let conditions = [];

        if (this.query.location != 'Localidad') 
          conditions.push({name: 'location', value: this.query.location})
        if (this.query.property != 'Propiedad') 
          conditions.push({name: 'kindProperty', value: this.query.property})
        if (this.query.operation != 'Operación')
          conditions.push({name: 'kindOperation', value: this.query.operation})

        this.propertiesService!.getPropertiesFiltering(conditions)!.subscribe( propertiesLocal=> {
          this.properties = [];
          propertiesLocal.forEach( element => {
            if (element.available) {
              this.properties.push(element);
            }
          });
          this.query = {"operation":"","property":"","location":""};
            
        });      
      }
    );
    this.query = {"operation":"","property":"","location":""};
  }



  ngOnInit() {
    
  }

}
