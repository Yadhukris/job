import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})



export class AlljobsComponent implements  OnInit  {

jobs=[{  jobrole:'',
    email:'',
    jobdesc:'',
    hq:'',
    lastdate:'',
    skill:'',
    experience:'',
    jobtype:'',
    cname:'',
    _id:''
}]


  constructor(private _job:JobService,private _admin:AdminService,private routes:Router) { }

  ngOnInit(): void {
    console.log("hai")
    this._job.findjobdb().subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data))
      console.log(this.jobs)
     
      
   })

   

  }
   

  apply(data:any){
    localStorage.setItem("jobId", data._id.toString());
    localStorage.setItem("jobemail", data.email.toString()); 
    this.routes.navigate(['applyjob']);
  }
  view(data:any){
    localStorage.setItem("jobId", data._id.toString());
     this.routes.navigate(['/applicant'])
   }
  
  
   delete(data:any){
          this._job.deletejobpost(data)
          .subscribe((data:any) => {
            
            this.jobs = this.jobs.filter(p => p !== data);
            
        })
        alert("success")
        this.ngOnInit();
  
   }

}
