import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
  constructor(private api:ApiService){
    this.api.fetchPatients().subscribe(
      (response:any)=>{
        this.patient=response;
      }
    )
  }
patient:any=[]

}
