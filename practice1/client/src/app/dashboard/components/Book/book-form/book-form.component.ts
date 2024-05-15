import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../../Subject/subject.service';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  constructor(private subjectService:SubjectService, private bookService:BookService, private route: ActivatedRoute, private router:Router, private toastr:ToastrService){

  }
  subjectList:any=[]
  bookData= new FormGroup({
    b_name:new FormControl('', [Validators.required]),
    author:new FormControl('', [Validators.required]),
    subject:new FormControl('', [Validators.required])
  })
  paramsId!: number
  ngOnInit(){
    this.paramsId=this.route.snapshot.params['id']
    if(this.paramsId){
      this.bookService.getBooks(this.paramsId).subscribe((data:any)=>{
        if(data.status==='success'){
          let updateData= data.data[0]
          this.bookData.patchValue({b_name:updateData.name, author:updateData.author, subject:updateData.subject_id})
        }
        else{
          console.log("Error");
        }
      })
    }
    this.subjectService.getSubjects().subscribe((data:any)=>{
      if(data.status == 'success'){
        this.subjectList= data.data
      }
      else{
        console.log('Err');
      }
    })
  }

  addBook(){
    this.bookService.addBook(this.bookData.value).subscribe((data:any)=>{
      if(data.status=='success'){
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.bookData.reset()
        this.bookData.controls['subject'].setValue('')
      }
      else{
        console.log(data.msg);
      }
    })
  }

  updateBook(){
    this.bookService.updateBook(this.paramsId, this.bookData.value).subscribe((data:any)=>{
      if(data.status=='success'){
        alert(data.msg);
        this.router.navigate(['/dashboard/getBooks'])
      }
      else{
        console.log(data.msg);
      }
    })
  }
}
