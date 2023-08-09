import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationInterface } from './models/locationInterface';
import { OperationInterface } from './models/operationInterface';
import { LocationService } from './services/location.service';
import { OperationService } from './services/operation.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PropertyService } from './services/property.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chalita-app-v15';

  kindOperation = 'Operación';
  kindProperty = 'Propiedad';
  location = 'Localidad';
  operations: OperationInterface[];
  locations: LocationInterface[] = [];
  search = '1.5';
  faSearch = faSearch;
  properties_id: [{id:'', code:''}] =[{id:'', code:''}];
  codes: string[] = [];
  searchStr: any | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private operationService: OperationService,
    private locationService: LocationService,
    private propertiesService: PropertyService,
    private authService: AuthService
  ){
    this.operations = [];
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      properties.forEach((element:any) => {
        if (element.available) {
          // console.log(element)
          this.codes.push(element.code);
          this.properties_id.push({id: element.id, code: element.code});
        }
        
      });

      this.locationService.getLocations().subscribe(locations => {
        
        this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
      });

    });
  }

  ngOnInit() {
    this.operationService.getOperations()?.subscribe( operations => {
      this.operations = operations;
    });
    this.locationService.getLocations()?.subscribe(locations => {          
      this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
    });
  }

  onSetKindOperation(operation: any) {
    this.kindOperation = operation.innerText;
  }

  onSetKindProperty(property: any) {
    this.kindProperty = property.innerText;
  }

  onSetLocation(location: any) {
    this.location = location.innerText;
  }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )  
      if ( element ) element.scrollIntoView ({behavior: 'smooth', block: 'start', inline: 'nearest'})
    });  
  }

  searchProperty() {
    this.router.navigate(['/result', this.kindOperation, this.kindProperty, this.location]);    
    this.resetParameters();
    this.search = '1.5';
    this.onAnchorClick();
  }

  resetParameters() {
    this.kindOperation = 'Operación';
    this.kindProperty = 'Propiedad';
    this.location = 'Localidad';
  }

  searchCode() {
    //Funcion para buscar elementos en un array
    let id = this.properties_id.filter(x => x.code == this.searchStr)[0];
    //let id = this.properties_id.indexOf({id:,code:this.searchStr});
    let url = 'details/' + id.id;
    //console.log(url);
    // this.search1 = '1.5';
    this.router.navigateByUrl(url);
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + 'acces' )
      if ( element ) element.scrollIntoView ({behavior: 'smooth', block: 'start', inline: 'nearest'})
    }); 
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
