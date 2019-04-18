import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';

import { NgForm } from '@angular/forms';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PropertyInterface } from 'src/app/models/propiedadInterface';
import { PropertyService } from 'src/app/services/property.service';
import { UrlsPhotoService } from 'src/app/services/urls-photo.service';
import { UrldeletedInterface } from 'src/app/models/urldeletedInterface';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

  uploadPercent: Observable<number>;
  uploadPercent1: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  uploadPercent4: Observable<number>;
  uploadPercent5: Observable<number>;
  uploadPercent6: Observable<number>;
  uploadPercent7: Observable<number>;
  uploadPercent8: Observable<number>;
  uploadPercent9: Observable<number>;
  uploadPercent10: Observable<number>;
  uploadPercent11: Observable<number>;
  uploadPercent12: Observable<number>;
  uploadPercent13: Observable<number>;
  uploadPercent14: Observable<number>;
  uploadPercent15: Observable<number>;
  uploadPercent16: Observable<number>;
  uploadPercent17: Observable<number>;
  uploadPercent18: Observable<number>;
  uploadPercent19: Observable<number>;
  uploadPercent20: Observable<number>;
  uploadPercent21: Observable<number>;
  uploadPercent22: Observable<number>;
  uploadPercent23: Observable<number>;
  uploadPercent24: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;

  property: PropertyInterface = {
    bathroom: '',
    code:'',
    description: '',
    geolocation: '',
    images: [],
    kindOperation: '',
    kindProperty: '',
    location: '',
    name: '',
    price: '',
    rooms: '',
    state: '',
    surfaceCover: '',
    surfaceTotal: ''
  }

  url: UrldeletedInterface = {
    url: ''
  }

  constructor(private propertyService: PropertyService, 
              private storage: AngularFireStorage,
              private router: Router,
              private urlphotoService: UrlsPhotoService) { }

  ngOnInit() {
  }

  onSaveProperty() {
    this.property.available = true;
    this.propertyService.addProperty(this.property).then( response => {
      if (response) {
        alert("La propiedad ha sido ingresada con exito");
        this.router.navigate(['/private']);
      } else {
        alert("Ha ocurrido un error, intentelo nuevamente");
      }
    });
    
    //this.router.navigate(['/private']);
  }

  uploadFile(event) {
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
        this.property.images.splice(0,0,url);
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
      console.log('image paso');
      console.log(this.property.images);
    }, error => {
      // failure
      console.log(error);
    });    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile1(event) {
    // console.log(event);
    if (!this.property.images[0] || this.property.images[0] == 'borrado') {
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
            this.property.images.splice(1,0,url);                
        }),
        finalize(() => loading = false)
      ).subscribe(() => {
        // success
        console.log('image1 paso');
        console.log(this.property.images);
      }, error => {
        // failure
        console.log(error);
      }); 
    }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile2(event) {
    // console.log(event);

    if (!this.property.images[1] || this.property.images[1] == 'borrado') {
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
        this.property.images.splice(2,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile3(event) {
    // console.log(event);

    if (!this.property.images[2] || this.property.images[2] == 'borrado') {
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
        this.property.images.splice(3,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile4(event) {
    // console.log(event);

    if (!this.property.images[3] || this.property.images[3] == 'borrado') {
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
        this.property.images.splice(4,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile5(event) {
    // console.log(event);

    if (!this.property.images[4] || this.property.images[4] == 'borrado') {
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
        this.property.images.splice(5,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile6(event) {
    // console.log(event);

    if (!this.property.images[5] || this.property.images[5] == 'borrado') {
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
        this.property.images.splice(6,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile7(event) {
    // console.log(event);

    if (!this.property.images[6] || this.property.images[6] == 'borrado') {
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
        this.property.images.splice(7,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile8(event) {
    // console.log(event);

    if (!this.property.images[7] || this.property.images[7] == 'borrado') {
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
        this.property.images.splice(8,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile9(event) {
    // console.log(event);

    if (!this.property.images[8] || this.property.images[8] == 'borrado') {
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
        this.property.images.splice(9,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile10(event) {
    // console.log(event);

    if (!this.property.images[9] || this.property.images[9] == 'borrado') {
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
        this.property.images.splice(10,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile11(event) {
    // console.log(event);

    if (!this.property.images[10] || this.property.images[10] == 'borrado') {
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
        this.property.images.splice(11,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile12(event) {
    // console.log(event);

    if (!this.property.images[11] || this.property.images[11] == 'borrado') {
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
        this.property.images.splice(12,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile13(event) {
    // console.log(event);

    if (!this.property.images[12] || this.property.images[12] == 'borrado') {
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
        this.property.images.splice(13,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile14(event) {
    // console.log(event);

    if (!this.property.images[13] || this.property.images[13] == 'borrado') {
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
        this.property.images.splice(14,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile15(event) {
    // console.log(event);

    if (!this.property.images[14] || this.property.images[14] == 'borrado') {
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
        this.property.images.splice(15,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile16(event) {
    // console.log(event);

    if (!this.property.images[15] || this.property.images[15] == 'borrado') {
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
        this.property.images.splice(16,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile17(event) {
    // console.log(event);

    if (!this.property.images[16] || this.property.images[16] == 'borrado') {
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
        this.property.images.splice(17,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile18(event) {
    // console.log(event);

    if (!this.property.images[17] || this.property.images[17] == 'borrado') {
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
        this.property.images.splice(18,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile19(event) {
    // console.log(event);

    if (!this.property.images[18] || this.property.images[18] == 'borrado') {
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
        this.property.images.splice(19,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile20(event) {
    // console.log(event);

    if (!this.property.images[19] || this.property.images[19] == 'borrado') {
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
        this.property.images.splice(20,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile21(event) {
    // console.log(event);

    if (!this.property.images[20] || this.property.images[20] == 'borrado') {
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
        this.property.images.splice(21,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile22(event) {
    // console.log(event);

    if (!this.property.images[21] || this.property.images[21] == 'borrado') {
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
        this.property.images.splice(22,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile23(event) {
    // console.log(event);


    if (!this.property.images[22] || this.property.images[22] == 'borrado') {
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
        this.property.images.splice(23,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile24(event) {
    // console.log(event);

    if (!this.property.images[23] || this.property.images[23] == 'borrado') {
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
        this.property.images.splice(24,0,url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });   
  }
    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  deletePhoto(url, index) {  
    
    this.property.images[index] = 'borrado';
    this.url.url= url;
    this.urlphotoService.addUrl(this.url);
  }

  

  onChangeProp(event) {
    this.property.kindProperty = event.target.value;
  }

  onChangeOper(event) {
    this.property.kindOperation = event.target.value;
  }

  onChangeLoca(event) {
    this.property.location = event.target.value;
  }

}
