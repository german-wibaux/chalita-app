import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  
  properties;
  query = {"operation":"","property":"","location":""};
  

  constructor(private rutaActiva: ActivatedRoute,
              private propertiesService: PropertyService) { 
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        
        this.query.operation = params.operation;
        this.query.property = params.property;
        this.query.location = params.location;
        let binary = 0;

        if (this.query.location != 'Localidad') 
          binary += 1;
        if (this.query.property != 'Propiedad') 
          binary+= 2;
        if (this.query.operation != 'Operación')
          binary+= 4;      

        this.propertiesService.getPropertiesFiltering(binary, this.query).subscribe( properties => {
          this.properties = [];

          properties.forEach(element => {
            if (element.available) {
              this.properties.push(element);
            }
          });

          // console.log(this.properties.length);
          this.query = {"operation":"","property":"","location":""};

          /** List every properties */
          // console.log(properties.length + '////' + this.query.operation + this.query.property + this.query.location );
          // properties.forEach(element => {
          //   console.log(element.location + '///////' + element.code);
          //   console.log('////////');
          // });
            
        });      
      }
    );
  }



  ngOnInit() {
    
  }

}
