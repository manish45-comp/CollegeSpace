import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit ,ElementRef , ViewChild} from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  @ViewChild('fileinput') fileinput:ElementRef | any;
  @ViewChild('form') form:ElementRef | any;
  @ViewChild('uploadbtn') uploadbtn:ElementRef | any;
  selectedFiles: FileList | any;
  CurrentFileupload:File | any;
  alert:boolean=false;
  erroralert:boolean=false;
  loading$ = this.loadingservice.loading$;


  constructor(private apiservice: ApiService,
    private loadingservice:LoadingService) {
    
   }
 
  ngOnInit(): void {
  }

  selectFile(event: any){
    this.selectedFiles = event.target.files;
    this.uploadbtn.nativeElement.disabled = false;
  }
  upload() {
     this.CurrentFileupload = this.selectedFiles.item(0);
     this.apiservice.FileuploadtoS3(this.CurrentFileupload).subscribe( event =>{
       if(event instanceof HttpErrorResponse){
        console.log('Error uploading File');
       }else if(event instanceof HttpResponse){
        this.alert = true;
       }
     });
     this.uploadbtn.nativeElement.disabled = true;
     this.form.nativeElement.reset();
   }

   RemoveFile(){
    this.fileinput.nativeElement = '';
    this.form.nativeElement.reset();
    this.uploadbtn.nativeElement.disabled = true;
   }

   closealert(){
    this.alert =false;
    this.erroralert=false;
    this.form.nativeElement.reset();
  }

}
