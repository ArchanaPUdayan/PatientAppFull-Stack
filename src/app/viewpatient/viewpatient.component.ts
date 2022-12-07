import { Component } from '@angular/core';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
patient=[{
  "name":"Nikhil"
  ,"age":"19",
  "address":"Kulamaavil",
  "place":"Vyttila"

},
{
  "name":"Archana","age":"19","address":"Perumbrayil","place":"Kumaranalloor"
},
{
  "name":"Amitha","age":"20","address":"Kizhakkekalayil","place":"Kottayam"
},
{
  "name":"Athira","age":"24","address":"Kuzhamavil","place":"Ernakulam"
},
{
  "name":"Kumatham","age":"50","address":"Vettikkattuparambil","place":"Malappuram"
}
]
}
