import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }


postjob(user:any){
  return this.http.post<any>("http://localhost:3000/postjob",user);
}

getjobs(){
  console.log("haii")
  return this.http.get("http://localhost:3000/disp");
  
}
getempjob(empdata:any){
  return this.http.get("http://localhost:3000/getempjobs/"+empdata);
}
applyjob(data:any){
  return this.http.post("http://localhost:3000/applyjob",data);
}

findjobdb()
{
  return this.http.get("http://localhost:3000/dispjobs");
}


deletejobpost(data:any){
  return this.http.delete("http://localhost:3000/deletejobpost/"+data);
}





applicantdata(data:any){
  console.log(data)
  return this.http.get("http://localhost:3000/applicant/"+data)
}

verifyalumni(alumni:any){
  console.log(alumni);
  console.log("hai")
   return this.http.post("http://localhost:3000/appverify/",alumni)
   .subscribe(app =>{console.log(app)})
}


deleteapplicant(appdelete:any){
 
 return this.http.delete("http://localhost:3000//deleteapplicant/"+appdelete)
}

}
