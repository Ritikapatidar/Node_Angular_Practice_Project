import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private apiService:ApiServiceService) { }

  addSubject(payload:any){
    return this.apiService.postData('/addSubject',payload)
  }
  getSubjects(id?:number){
    return this.apiService.postData(`/getSubjects`,{id:id})
  }
  updateSubject(id:number,payload:any){
    return this.apiService.updateData(`/updateSubject/${id}`, payload)
  }
  deleteSubject(id:number){
    return this.apiService.deleteData(`/deleteSubject/${id}`)
  }
}
