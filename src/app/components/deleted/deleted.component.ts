import { Component, OnInit } from '@angular/core';
import { PropertyInterface } from 'src/app/models/propiedadInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  properties: PropertyInterface[] = [];
  editState: boolean = false;
  propertyToEdit: PropertyInterface | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertiesService: PropertyService
  ) { 
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      properties.forEach(element => {
        if (!element.available) {
          this.properties.push(element);
        }
      });
    });
  }

  ngOnInit() {
  }

  onAddProperty(property: PropertyInterface){
    // this.propertiesService.updateProperty(property);
    //   this.router.navigate(['/edit']);
    property.available = true;
    this.properties = [];
    this.propertiesService.updateProperty(property);
    this.router.navigateByUrl('/deleted');
   }

}
