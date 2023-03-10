import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup; // khai báo loginform dưới dạng nhóm biểu mẫu
  constructor(private fb: FormBuilder) {}//b4 đưa trình tạo mẫu vào constructor

  ngOnInit(): void{
      this.signUpForm = this.fb.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.required],
      username : ['', Validators.required],
      password : ['', Validators.required],

    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup(){
    if(this.signUpForm.valid){
      //send the object to database
      console.log(this.signUpForm.value);
      

    }else{
      
      // logic  for throwing rror
     ValidateForm.validateAllFormFileds(this.signUpForm);
     alert("Your form is invalid")
      
    }
  }
  // Phương pháp quan trọng để nó hiển thị lỗi khi nhấp vào trên nút gửi 
}
