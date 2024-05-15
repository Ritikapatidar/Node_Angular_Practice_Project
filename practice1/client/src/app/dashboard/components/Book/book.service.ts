import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private apiService:ApiServiceService) { }

  addBook(payload:any){
    return this.apiService.postData('/addBook',payload)
  }
  getBooks(id?:number){
    return this.apiService.postData(`/getBooks`,{id:id})
  }
  updateBook(id:number,payload:any){
    return this.apiService.updateData(`/updateBook/${id}`, payload)
  }
  deleteBook(id:number){
    return this.apiService.deleteData(`/deleteBook/${id}`)
  }
}
