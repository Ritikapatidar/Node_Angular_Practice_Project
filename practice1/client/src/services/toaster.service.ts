import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toast:ToastrService) { }

  showSuccessToast=(message:string, title:string)=>{
     this.toast.success(message, title)
  //   export class ToastService {
  //     constructor(private toastr: ToastrService) { }
  //     showSuccessToast(message: string, title: string) {
  //         this.toastr.success(message, title, {positionClass:'toast-top-center', timeOut:2000})
  //     }
  //     showErrorToast(message:string, title:string){
  //         this.toastr.error(message, title, { positionClass: 'toast-top-center', timeOut:2000 })
  //     }
  // }
  }
}
