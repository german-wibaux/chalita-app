import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OperationService } from 'src/app/services/operation.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  properties: String[] = [];
  searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  codes = [];
  protected properties_id= [{id:'', code:''}];
 
  search = '1.5';
  search1 = '1.5';
  kindOperation = 'Operación';
  kindProperty = 'Propiedad';
  location = 'Localidad';
  code = 'Codigo';
  operations;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private authService: AuthService,
    private operationService: OperationService,
    private completerService: CompleterService,
    private propertiesService: PropertyService) {
      this.propertiesService.getProperties().subscribe( properties => {
        /** List every properties */
        properties.forEach(element => {
          if (element.available) {
            this.codes.push(element.code);
            this.properties_id.push({id: element.id, code: element.code});
          }
          
        });
        // this.properties.push(properties.)
        
        // console.log(this.properties_id);
      });
      //thi
      this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

  ngOnInit() {
    this.operationService.getOperations().subscribe( operations => {
      this.operations = operations;
    } );
  }

  onSetKindOperation(operation) {
    this.kindOperation = operation;
  }

  onSetKindProperty(property) {
    this.kindProperty = property;
  }

  onSetLocation(location) {
    this.location = location;
  }

  onSetCode(code) {
    this.code = code;
  }

  searchProperty() {
    this.router.navigate(['/result', this.kindOperation, this.kindProperty, this.location]);
    this.resetParameters();
    this.search = '1.5';
  }

  resetParameters() {
    this.kindOperation = 'Operación';
    this.kindProperty = 'Propiedad';
    this.location = 'Localidad';
  }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )      
      if ( element ) element.scrollIntoView ( )
    });
        
  }

  onAlertClick() {
    alert('Esta seccion todavia no se encuentra disponible');
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    //console.log('entro');
  }

  searchCode() {
    //Funcion para buscar elementos en un array
    let id = this.properties_id.filter(x => x.code == this.searchStr)[0];
    //let id = this.properties_id.indexOf({id:,code:this.searchStr});
    let url = 'details/' + id.id;
    //console.log(url);
    this.search1 = '1.5';
    this.router.navigateByUrl(url);
  }

  bigSearch() {
   this.search = '1.7';
  }


  bigSearch1() {
    this.search1 = '1.7';
  }


}
