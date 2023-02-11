import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //Khai báo import và cả module
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup; // khai báo loginform dưới dạng nhóm biểu mẫu

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}//b4 đưa trình tạo mẫu vào constructor

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if(this.loginForm.valid){
    
      console.log(this.loginForm.value);
        //send the object to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res) =>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })

    }else{
      //throw the error using toaster and with required flieds

     ValidateForm.validateAllFormFileds(this.loginForm);
     alert("Your form is invalid")
      
    }
  }
  // Phương pháp quan trọng để nó hiển thị lỗi khi nhấp vào trên nút gửi 
}
