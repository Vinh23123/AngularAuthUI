import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //Khai báo import và cả module
import ValidateForm from 'src/app/helpers/validateform';

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
  constructor(private fb: FormBuilder) {}//b4 đưa trình tạo mẫu vào constructor

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

  onSubmit(){
    if(this.loginForm.valid){
      //send the object to database
      console.log(this.loginForm.value);
      

    }else{
      //throw the error using toaster and with required flieds

     ValidateForm.validateAllFormFileds(this.loginForm);
     alert("Your form is invalid")
      
    }
  }
  // Phương pháp quan trọng để nó hiển thị lỗi khi nhấp vào trên nút gửi 
}
