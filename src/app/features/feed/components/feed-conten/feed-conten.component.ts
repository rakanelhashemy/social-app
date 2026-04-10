import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { DatePipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from "./comment/comment.component";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-feed-conten',
  imports: [DatePipe, ReactiveFormsModule, CommentComponent, RouterLink],
templateUrl: './feed-conten.component.html',
  styleUrl: './feed-conten.component.css',
})
export class FeedContenComponent implements OnInit,AfterViewInit {

userrsocial:IUser =JSON.parse( localStorage.getItem("userInfo")!)

 private readonly postsService  = inject(PostsService)

 userid:string=""
 imagePreview=""
savefile: File | null = null;
 imgUrl:string | ArrayBuffer | null | undefined;
 
 ngOnInit(): void {
  this.userid = JSON.parse(localStorage.getItem("userInfo")!)?._id
  this.getallposts()
  initFlowbite();
 }
 


   ngAfterViewInit(): void {
    initFlowbite(); 
  }

postslist:posts[] =[]

 getallposts():void{
 console.log(this.userid);
 
  this.postsService.getAllPosts().subscribe({
    next:(res)=>{
      console.log(res.data.posts);
      
     this.postslist=res.data.posts;
     setTimeout(() => initFlowbite(), 0);
    },
    error:(error)=>{
      console.log(error);
    }
  })
 } 

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

removeImage(){
  this.imgUrl="";
  this.savefile=null;
}





content:FormControl = new FormControl("",)

privacy:FormControl = new FormControl("public",)


submitForm(e:Event ,form:HTMLFormElement)
{
  e.preventDefault();


   const formData = new FormData();
   
   if(this.content.value)
   {
    formData.append('body',this.content.value)
   }
     
   if(this.privacy.value)
   {
     formData.append('privacy', this.privacy.value)
   }
      
      if(this.savefile)
      {
        formData.append('image', this.savefile)
      }
this.postsService.createPosts(formData).subscribe({

  next:(res)=>{
    console.log(res);
    if(res.success)
    {
      form.reset();
      this.getallposts();
      this.imgUrl="";
    }
  },
  error:(error)=>{
    console.log(error);
    
  }
})
    }

















    
deletpost(id:string)
{
  this.postsService.deletePost(id).subscribe({

    next:(res)=>{console.log(res);
      this.getallposts();
    }
    ,
     error:(error)=>{console.log(error);
     }
  })
}

}
