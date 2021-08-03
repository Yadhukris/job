import { Component, OnInit } from '@angular/core';
import { EmployerdataService } from '../employerdata-service.service';
@Component({
  selector: 'app-employerlist',
  templateUrl: './employerlist.component.html',
  styleUrls: ['./employerlist.component.css']
})
export class EmployerlistComponent implements OnInit {

  employerlist=[
    {
      name:'',
      email:'',
      phone:'',
      company:'',
      password:'',
      compdesc:'',
      status:''
    }
  ]
  

  constructor(private empservice:EmployerdataService) { }

  ngOnInit(): void {

    // this.alumniservice.getalumnidetails().subscribe((data) => {
    //   this.alumnidata = JSON.parse(JSON.stringify(data));
    //   console.log(this.alumnidata)
    // })

    this.empservice.employerlist().subscribe((data) => {
      this.employerlist = JSON.parse(JSON.stringify(data));
      console.log(this.employerlist)
    })
  }

}
