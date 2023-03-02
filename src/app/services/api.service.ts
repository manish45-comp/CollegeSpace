import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  createfeedback(data: any): Observable<any>{
    return this.http.post('submit' , data)
    .pipe(catchError(this.errorMgmt))
  }


  FileuploadtoS3(file: File):Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file',file);
    const req = new HttpRequest('POST' , 'uploadtoS3' , formdata ,{
      reportProgress:true,
      responseType:'text'
    });
    return this.http.request(req);
  }


  getfeedback(){
    return this.http.get('getallfeedback');
  }

  errorMgmt(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getallfilesforms3():Observable<any>{
    return this.http.get('getallfiles');
  }

  getlatestfiles():Observable<any>{
  return this.http.get('getfilelatest');
  }

  getFilesA(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/A');
  }
  getFilesAsmalla(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/a');
  }

  getFilesB(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/B');
  }
  getFilesAsmallb(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/b');
  }

  getFilesC(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/C');
  }
  getFilesAsmallc(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/c');
  }

  getFilesD(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/D');
  }
   getFilesAsmalld(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/d');
  }

  getFilesE(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/E');
  }
  getFilesAsmalle(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/e');
  }

  getFilesF(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/F');
  }
  getFilesAsmallf(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/f');
  }

  getFilesG(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/G');
  }
  getFilesAsmallg(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/g');
  }

  getFilesH(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/H');
  }
  getFilesAsmallh(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/h');
  }

  getFilesI(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/I');
  }
  getFilesAsmalli(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/i');
  }

  getFilesJ(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/J');
  }
  getFilesAsmallj(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/j');
  }

  getFilesK(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/K');
  }
  getFilesAsmallk(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/k');
  }

  getFilesL(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/L');
  }
  getFilesAsmalll(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/l');
  }

  getFilesM(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/M');
  }
  getFilesAsmallm(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/m');
  }

  getFilesN(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/N');
  }
  getFilesAsmalln(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/n');
  }

  getFilesO(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/O');
  }
  getFilesAsmallo(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/o');
  }

  getFilesP(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/P');
  }
  getFilesAsmallp(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/p');
  }

  getFilesQ(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/Q');
  }
  getFilesAsmallq(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/q');
  }

  getFilesR(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/R');
  }
  getFilesAsmallr(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/r');
  }

  getFilesS(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/S');
  }
  getFilesAsmalls(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/s');
  }

  getFilesT(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/T');
  }
  getFilesAsmallt(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/t');
  }

  getFilesU(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/U');
  }
  getFilesAsmallu(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/u');
  }

  getFilesV(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/V');
  }
  getFilesAsmallv(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/v');
  }

  getFilesW(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/W');
  }
  getFilesAsmallw(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/w');
  }

  getFilesX(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/X');
  }
  getFilesAsmallx(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/x');
  }

  getFilesY(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/Y');
  }
  getFilesAsmally(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/y');
  }

  getFilesZ(searchkey: any): Observable<any> {
    return this.http.get('getfilebyprefix/Z');
  }
  getFilesAsmallz(searchkey: any):Observable<any>{
    return this.http.get('getfilebyprefix/z');
  }
}
