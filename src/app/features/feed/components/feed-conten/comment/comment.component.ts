
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommentservService } from './commentserv.service';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  imports: [DatePipe,ReactiveFormsModule],

templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent implements OnInit {
 imgUrl:string | ArrayBuffer | null | undefined;
  private readonly commentser = inject(CommentservService)
savefile: File | null = null;
photoimg!:string
ngOnInit(): void {
  this.getcommentpost()
 this.photoimg = JSON.parse(localStorage.getItem("userInfo")!)?.photo
}

@Input() postid:string ="";
commentlist:Comment[]=[] 
getcommentpost(){
  this.commentser.getPostComment(this.postid).subscribe({

 next:(res)=>{

  this.commentlist=res.data.comments;
  
 }
 ,
  error:(error)=>{
  console.log(error);
  
 }

  })
}

content:FormControl = new FormControl("",)

changeImg(e:Event) :void{
const input =(e.target as HTMLInputElement)

if(input.files&& input.files.length>0){

this.savefile=input.files[0];


 const fileReader=  new FileReader
fileReader.readAsDataURL(this.savefile);
fileReader.onload =(e :ProgressEvent<FileReader>)=>{

 this.imgUrl= e.target?.result;
}
}



}

submitcomment(e:Event ,form:HTMLFormElement)
{
  e.preventDefault();


   const formData = new FormData();
   
   if(this.content.value)
   {
    
    formData.append('content',this.content.value)
   }
     

      
      if(this.savefile)
      {

        formData.append('image', this.savefile)
      }


  this.commentser.createPostComment(this.postid ,formData).subscribe({

 next:(res)=>{


  if(res.success)
    {
      form.reset();
       this.getcommentpost()
      this.imgUrl="";
    }
  
 }
 ,
  error:(error)=>{
  console.log(error);
  
 }

  })



    }


    removeImage(){
  this.imgUrl="";
  this.savefile=null;
}




















}
