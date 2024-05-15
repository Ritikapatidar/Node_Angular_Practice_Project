import { Component } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  constructor(private bookService:BookService){

  }
  bookList:any=[]
  ngOnInit(){
    this.getBooks();
  }
  getBooks(){
    this.bookService.getBooks().subscribe((data:any)=>{
      if(data.status==='success'){
        this.bookList= data.data
      }
      else{
        console.log("Error");
      }
    })
  }
  deleteBook(id:number){
     this.bookService.deleteBook(id).subscribe((data:any)=>{
      if(data.status==='success'){
        alert(data.msg)
        this.getBooks()
      }
      else{
        console.log("Error");
      }
     })
  }
}
