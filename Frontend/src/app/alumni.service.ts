import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  item = {
    uname: '',
    email: '',
    password: '',
    hq: '',
    city: ''

  }

  constructor(private http: HttpClient) { }
  addalumni(item: any) {
    return this.http.post("http://localhost:3000/insert", { "alumni": item })
      .subscribe(data => { console.log(data) })
  }

  getalumnidetails(){
    return this.http.get("http://localhost:3000/alumni");
  }

  dispjobs()
  {
    return this.http.get("http://localhost:3000/getfulljobs");
  }


savealumni(item:any){
  console.log(item)
  return this.http.put("http://localhost:3000/alumni/save",item)
  .subscribe(data =>{console.log(data)})
}

getalumnidetail(email:any){
  return this.http.get("http://localhost:3000/"+email)

}

getalumni(id:any){
  return this.http.get("http://localhost:3000/"+id)
}

editalumni(alumnidata:any){
  console.log('client update')
  return this.http.put("http://localhost:3000/update",alumnidata)
  .subscribe(data =>{console.log(data)})
}

}
