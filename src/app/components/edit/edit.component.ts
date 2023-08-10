import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { PropertyInterface } from '../../models/propiedadInterface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    
  }
  
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
        if (element.available) {          
          this.properties.push(element);
        }
      });
    });
  }
    

  ngOnInit() {
    
  }


  /*Edit a property*/
  editProperty(property: PropertyInterface) {
    this.editState = true;
    this.propertyToEdit = property;
  }

  showChange() {
    
  }

  // deleteCurso(property) {
  //   alert("La propiedad ha sido eliminada");
  //   this.router.navigate(['/edit']);
  //   console.log(property.available + '////' + property.code);
  // }

  onDeleteProperty(property: PropertyInterface){
    // this.propertiesService.updateProperty(property);
    //   this.router.navigate(['/edit']);
    property.available = false;
    this.properties = [];
    this.propertiesService.updateProperty(property);
    this.router.navigateByUrl('/edit');
   }

}
