import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  constructor(private subjectService:SubjectService, private router:Router){

  }
  subjectList:any[]=[]
  ngOnInit(){
    this.getSubjects();
  }
  deleteSubject(id:number){
    console.log(id);
    
    this.subjectService.deleteSubject(id).subscribe((data:any)=>{
      if(data.status === 'success'){
        console.log(data.msg);
        this.getSubjects();
      }
    })
  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe((data:any)=>{
      if(data.status == 'success'){
        this.subjectList= data.data
      }
      else{
        console.log('Err');
        
      }
    })
  }
}
