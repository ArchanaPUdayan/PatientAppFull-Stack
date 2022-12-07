import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  name=""
  age=""
  address=""
  place=""

  constructor(private api:ApiService){}
readValues=()=>
{
  let data:any={
    "name":this.name,
    "age":this.age,
    "address":this.address,
    "place":this.place
  }
 console.log(data)
 this.api.addPatient(data).subscribe(
  (response:any)=>{
    console.log(response)
  }
 )
  
  
  }
  

}
