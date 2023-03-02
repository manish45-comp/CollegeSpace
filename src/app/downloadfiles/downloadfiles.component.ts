import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';


@Component({
  selector: 'app-downloadfiles',
  templateUrl: './downloadfiles.component.html',
  styleUrls: ['./downloadfiles.component.css']
})
export class DownloadfilesComponent implements OnInit {


  constructor(
    public apiservice:ApiService,
    public loadingservice:LoadingService) { }


  fileUploads:Observable<any[]> | undefined;
  fileUploads1:Observable<any[]> | undefined;
  fileUploadssmall:Observable<any[]> | undefined;
  fileletest:Observable<any[]> | undefined;
  data!:[''];
  smalldata!:[''];
  totalLength:number  | undefined;
  page:number=1;
  searchkey = '';
  ndsf:boolean=true;
  nofiles:boolean=true;
  na:boolean=true;
  loading$ = this.loadingservice.loading$;


  ngOnInit(): void {
  this.ndsf=false;
  this.fileletest = this.apiservice.getlatestfiles();
  //  this.fileUploads = this.apiservice.getallfilesforms3();
  }



  getallfiles(){
    // this.fileUploads = this.apiservice.getallfilesforms3();
      this.ndsf=false;
      this.apiservice.getallfilesforms3().subscribe ( result => {
      this.totalLength = result.length;
      this.data = result;
      console.log(this.totalLength);
      if(this.totalLength){
        console.log(this.totalLength);
        this.nofiles = false;
      }
   });
  }

  
  SearchfilesA(){
    this.nofiles = true;
    this.ndsf=true;
    // this.fileUploads = this.apiservice.getFilesA(this.searchkey);
    // this.fileUploadssmall = this.apiservice.getFilesAsmalla(this.searchkey);
    this.apiservice.getFilesAsmalla(this.searchkey).subscribe( result =>{
      this.totalLength = result.length;
      this.smalldata = result;
    });
    this.apiservice.getFilesA(this.searchkey).subscribe ( result => {
        this.totalLength = result.length;
        this.data = result;
        console.log(this.totalLength);
          if(this.totalLength){
            console.log(this.totalLength);
            this.nofiles = false;
          }
     });
 }
 
 SearchfilesB(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesB(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallb(this.searchkey);
  this.apiservice.getFilesAsmallb(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
   this.apiservice.getFilesB(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   console.log(this.totalLength);
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}


SearchfilesC(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesC(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallc(this.searchkey);
  this.apiservice.getFilesAsmallc(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesC(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   console.log(this.totalLength);
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}

SearchfilesD(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesD(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalld(this.searchkey);
  this.apiservice.getFilesAsmalld(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesD(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesE(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesE(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalle(this.searchkey);
  this.apiservice.getFilesAsmalle(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesE(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesF(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesF(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallf(this.searchkey);
  this.apiservice.getFilesAsmallf(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesF(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesG(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesG(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallg(this.searchkey);
  this.apiservice.getFilesAsmallg(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesG(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesH(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesH(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallh(this.searchkey);
  this.apiservice.getFilesAsmallh(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesH(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesI(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesI(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalli(this.searchkey);
  this.apiservice.getFilesAsmalli(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesI(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesJ(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesJ(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallj(this.searchkey);
  this.apiservice.getFilesAsmallj(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesJ(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesK(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesK(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallk(this.searchkey);
  this.apiservice.getFilesAsmallk(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesK(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesL(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesL(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalll(this.searchkey);
  this.apiservice.getFilesAsmalll(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesL(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }

   });
}
SearchfilesM(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesM(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallm(this.searchkey);
  this.apiservice.getFilesAsmallm(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesM(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
    if(this.totalLength){
      console.log(this.totalLength);
      this.nofiles = false;
    }
  }
   });
}
SearchfilesN(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesN(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalln(this.searchkey);
  this.apiservice.getFilesAsmalln(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesN(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesO(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesO(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallo(this.searchkey);
  this.apiservice.getFilesAsmallo(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesO(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesP(){
  this.nofiles = true;
  this.ndsf=true;
  // this.fileUploads = this.apiservice.getFilesP(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallp(this.searchkey);
  this.apiservice.getFilesAsmallp(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesP(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesQ(){
  this.ndsf=true;
  this.nofiles = true; 
  // this.fileUploads = this.apiservice.getFilesQ(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallq(this.searchkey);
  this.apiservice.getFilesAsmallq(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesQ(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesR(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesR(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallr(this.searchkey);
  this.apiservice.getFilesAsmallr(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesR(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesS(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesS(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmalls(this.searchkey);
  this.apiservice.getFilesAsmalls(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesS(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesT(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesT(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallt(this.searchkey);
  this.apiservice.getFilesAsmallt(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesT(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesU(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesU(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallu(this.searchkey);
  this.apiservice.getFilesAsmallu(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesU(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesV(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesV(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallv(this.searchkey);
  this.apiservice.getFilesAsmallv(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesV(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesW(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesW(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallw(this.searchkey);
  this.apiservice.getFilesAsmallw(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesW(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesX(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesX(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallx(this.searchkey);
  this.apiservice.getFilesAsmallx(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesX(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesY(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesY(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmally(this.searchkey);
  this.apiservice.getFilesAsmally(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesY(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}
SearchfilesZ(){
  this.ndsf=true;
  this.nofiles = true;
  // this.fileUploads = this.apiservice.getFilesZ(this.searchkey);
  // this.fileUploadssmall = this.apiservice.getFilesAsmallz(this.searchkey);
  this.apiservice.getFilesAsmallz(this.searchkey).subscribe( result =>{
    this.totalLength = result.length;
    this.smalldata = result;
  });
  this.apiservice.getFilesZ(this.searchkey).subscribe ( result => {
   this.totalLength = result.length;
   this.data = result;
   if(this.totalLength){
    console.log(this.totalLength);
    this.nofiles = false;
  }
   });
}

noresult(){
  this.nofiles = true;
  this.ndsf=false;
}

}
