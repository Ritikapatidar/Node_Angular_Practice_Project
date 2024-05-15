import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/services/toaster.service';
@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {
  paramsId:any
  constructor(private subjectService:SubjectService, private router:Router, private route:ActivatedRoute, private toastr:ToasterService){
  }
  subjectData= new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required])
  })

  ngOnInit(){
    this.paramsId=this.route.snapshot.params['id']
    if(this.paramsId){
      this.subjectService.getSubjects(parseInt(this.paramsId)).subscribe((data:any)=>{
        if(data.status === 'success'){
          this.subjectData.patchValue({name:data.data[0].name, code:data.data[0].code})
        }
        else{
          console.log("error", data.msg);
        }
      })
    }
  }

  addSubject(){
    this.subjectService.addSubject(this.subjectData.value).subscribe((data:any)=>{
     if(data.status == 'success'){
      console.log(data.msg);
      this.toastr.showSuccessToast(data.msg,'success')
      this.subjectData.reset()
     }
     else{
      console.log(data.msg);
     } 
    }) 
  }
  updateSubject(){
    this.subjectService.updateSubject(this.paramsId, this.subjectData.value).subscribe((data:any)=>{
      if(data.status == 'success'){
        alert("Subject successfully updated!")
        this.router.navigate(['/dashboard/getSubjects'])
      }
      else{
        alert('Error')
      }
    })
  }
}
