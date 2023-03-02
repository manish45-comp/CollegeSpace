import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

submmited = false;
feedbackform!:FormGroup;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

alert:boolean=false;
erroralert:boolean=false;




  constructor(
    public fb:FormBuilder,
    private apiservice:ApiService
  ) {
    this.mainform();
   }

  ngOnInit(): void {}

  mainform(){
    this.feedbackform =this.fb.group({
      fullname:[ '', Validators.required],
      email:[ '',[ Validators.required,Validators.pattern(this.emailPattern)]],
      message:['',Validators.required]
    })
  }


  onSubmit(){
    this.submmited =true;
    if(!this.feedbackform.valid){
        this.erroralert=true;
      return false;
    }else{
      this.apiservice.createfeedback(this.feedbackform.value).subscribe(
        (res) =>{
          console.log('Feedback submited');
          this.alert =true;
          this.feedbackform.reset({});
        },(error) =>{
          console.log(error);
         
        });
        return null;
    }
  }

  closealert(){
    this.alert =false;
    this.erroralert=false;
  }

}
