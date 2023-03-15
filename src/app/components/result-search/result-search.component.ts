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
                debugger;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        
        this.query.operation = params['operation'];
        this.query.property = params['property'];
        this.query.location = params['location'];
        let binary = 0;

        if (this.query.location != 'Localidad') 
          binary += 1;
        if (this.query.property != 'Propiedad') 
          binary+= 2;
        if (this.query.operation != 'Operación')
          binary+= 4;

        this.propertiesService!.getPropertiesFiltering(binary, this.query)!.subscribe( propertiesLocal=> {
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
  }



  ngOnInit() {
    
  }

}
