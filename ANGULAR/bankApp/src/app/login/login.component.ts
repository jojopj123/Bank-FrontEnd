import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'Your Perfect Banking Partner'

  account = 'Enter your account here'

  acno=''
  pswd=''

  userDetails:any = {
    1000:{acno:1000,username:'Rahul',password:1000,balance:50000},
    1001:{acno:1001,username:'Radha',password:1001,balance:40000},
    1002:{acno:1002,username:'Kuttoosan',password:1002,balance:70000},

  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno =event.target.value
    console.log(this.acno);
  }

  pswdChange(event:any){
    this.pswd =event.target.value
    console.log(this.pswd);
  }
  //Login(){

   // var acno = this.acno
    //var pswd = this.pswd

    //let userDeatails = this.userDetails

    //if(acno in userDeatails){
      //if(pswd == userDeatails[acno]['password']){
       // alert('Login Successful')
      //}
      //else{
        //alert('Incorrect password')
      //}

    //}
    //else{
     // alert('User does not exist!!')
    //}
  //}


  Login(a:any,p:any)  {
    //console.log(a.value);
    

    var acno = a.value
     var pswd = p.value
 
     let userDeatails = this.userDetails
 
     if(acno in userDeatails){
       if(pswd == userDeatails[acno]['password']){
         alert('Login Successful')
       }
       else{
         alert('Incorrect password')
       }
 
     }
     else{
       alert('User does not exist!!')
     }
   }
  
}
