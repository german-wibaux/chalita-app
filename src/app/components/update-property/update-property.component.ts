import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyInterface } from 'src/app/models/propiedadInterface';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { UrlsPhotoService } from 'src/app/services/urls-photo.service';
import { UrldeletedInterface } from 'src/app/models/urldeletedInterface';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { LocationInterface } from 'src/app/models/locationInterface';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
  property: PropertyInterface | undefined;
  uploadPercent: Observable<number> | undefined;
  downloadURL: Observable<string> | undefined; // For download files
  snapshot: Observable<any> | undefined;
  task: any;
  uploadPercent1: any;
  uploadPercent2: any;
  uploadPercent3: any;
  uploadPercent4: any;
  uploadPercent5: any;
  uploadPercent6: any;
  uploadPercent7: any;
  uploadPercent8: any;
  uploadPercent9: any;
  uploadPercent10: any;
  uploadPercent11: any;
  uploadPercent12: any;
  uploadPercent13: any;
  uploadPercent14: any;
  uploadPercent15: any;
  uploadPercent16: any;
  uploadPercent17: any;
  uploadPercent18: any;
  uploadPercent19: any;
  uploadPercent20: any;
  uploadPercent21: any;
  uploadPercent22: any;
  uploadPercent23: any;
  uploadPercent24: any;
  selectKindProperty: any = '';
  selectLocation: any = '';
  selectOperation: any = '';

  url: UrldeletedInterface = {
    url: ''
  }

  locations: LocationInterface[] = [];

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute, 
              private router:Router,
              private storage: AngularFireStorage,
              private urlphotoService: UrlsPhotoService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.route.params.subscribe( result => {
      this.propertyService.getProperty(result['id']).subscribe( resultProp => {
        this.property = resultProp;
        this.selectLocation = this.property.location;
        this.selectOperation = this.property.kindOperation;
        this.selectKindProperty = this.property.kindProperty;
        // this.onChangeProp(0,this.property.kindProperty);
      })
    });

    this.locationService.getLocations().subscribe(locations => {
          
      this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
    });
  }

  onUpdateProperty(property: PropertyInterface){
    this.propertyService.updateProperty(property);
      this.router.navigate(['/edit']);   
   }

   uploadFile(event: any) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model  
        this.property!.images!.splice(0,0,url);
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
      console.log('image paso');
      console.log(this.property!.images);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile1(event: any) {
    // console.log(event);
    if (!this.property!.images![0] || this.property!.images![0] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

      const file = event.target.files[0];

      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type dalmiro-app')
        return;
      }
      let loading = true;
      const day = new Date();
      const path = 'properties/' + day.getTime() + '/' + file.name;
      const customMetadata = { app: 'chalita-app' };
      const ref = this.storage.ref(path);
      this.task = this.storage.upload(path, file, { customMetadata });
      this.uploadPercent1 = this.task.percentageChanges();


      return from(this.task).pipe(
        switchMap(() => ref.getDownloadURL()),
        tap(url => {
          // use url here, e.g. assign it to a model        
            this.property!.images!.splice(1,0,url);                
        }),
        finalize(() => loading = false)
      ).subscribe(() => {
        // success
        console.log('image1 paso');
        console.log(this.property!.images);
      }, error => {
        // failure
        console.log(error);
      }); 
    }
    return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile2(event: any) {
    // console.log(event);

    if (!this.property!.images![1] || this.property!.images![1] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent2 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(2,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile3(event: any) {
    // console.log(event);

    if (!this.property!.images![2] || this.property!.images![2] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent3 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(3,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile4(event: any) {
    // console.log(event);

    if (!this.property!.images![3] || this.property!.images![3] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent4 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(4,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile5(event: any) {
    // console.log(event);

    if (!this.property!.images![4] || this.property!.images![4] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent5 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(5,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile6(event: any) {
    // console.log(event);

    if (!this.property!.images![5] || this.property!.images![5] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent6 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(6,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile7(event: any) {
    // console.log(event);

    if (!this.property!.images![6] || this.property!.images![6] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent7 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(7,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile8(event: any) {
    // console.log(event);

    if (!this.property!.images![7] || this.property!.images![7] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent8 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(8,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile9(event: any) {
    // console.log(event);

    if (!this.property!.images![8] || this.property!.images![8] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent9 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(9,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile10(event: any) {
    // console.log(event);

    if (!this.property!.images![9] || this.property!.images![9] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent10 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(10,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile11(event: any) {
    // console.log(event);

    if (!this.property!.images![10] || this.property!.images![10] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent11 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(11,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile12(event: any) {
    // console.log(event);

    if (!this.property!.images![11] || this.property!.images![11] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent12 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(12,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile13(event: any) {
    // console.log(event);

    if (!this.property!.images![12] || this.property!.images![12] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent13 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(13,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile14(event: any) {
    // console.log(event);

    if (!this.property!.images![13] || this.property!.images![13] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent14 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(14,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile15(event: any) {
    // console.log(event);

    if (!this.property!.images![14] || this.property!.images![14] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent15 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(15,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile16(event: any) {
    // console.log(event);

    if (!this.property!.images![15] || this.property!.images![15] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent16 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(16,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile17(event: any) {
    // console.log(event);

    if (!this.property!.images![16] || this.property!.images![16] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent17 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(17,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile18(event: any) {
    // console.log(event);

    if (!this.property!.images![17] || this.property!.images![17] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent18 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(18,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile19(event: any) {
    // console.log(event);

    if (!this.property!.images![18] || this.property!.images![18] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent19 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(19,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile20(event: any) {
    // console.log(event);

    if (!this.property!.images![19] || this.property!.images![19] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent20 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(20,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile21(event: any) {
    // console.log(event);

    if (!this.property!.images![20] || this.property!.images![20] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent21 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(21,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile22(event: any) {
    // console.log(event);

    if (!this.property!.images![21] || this.property!.images![21] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent22 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(22,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile23(event: any) {
    // console.log(event);


    if (!this.property!.images![22] || this.property!.images![22] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent23 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(23,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile24(event: any) {
    // console.log(event);

    if (!this.property!.images![23] || this.property!.images![23] == 'borrado') {
      alert("Cargar foto anterior");
    } else { 

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'chalita-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent24 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property!.images!.splice(24,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
  return null;
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  deletePhoto(url: string | undefined, index: string | number | any) {  
    
    this.property!.images![index] = 'borrado';
    this.url.url= url;
    this.urlphotoService.addUrl(this.url);
  }

  onChangeProp(event: any) {
    // if (option === 0) {
    //   this.selectKindProperty = event;
    // } else {
      this.property!.kindProperty = event.target.value;
    //   console.log('onChangeProp');
    //   console.log(this.property?.kindProperty);
    // }
    
  }

  onChangeLoca(event: any) {
    this.property!.location = event.target.value;
  }

  onChangeOper(event: any) {
    this.property!.kindOperation = event.target.value;
  }

}


