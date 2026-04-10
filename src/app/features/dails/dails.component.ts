import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../core/services/posts.service';
import { DatePipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { CommentComponent } from "../feed/components/feed-conten/comment/comment.component";

@Component({
  selector: 'app-dails',
  imports: [DatePipe, CommentComponent],
  templateUrl: './dails.component.html',
  styleUrl: './dails.component.css',
})
export class DailsComponent implements OnInit , AfterViewInit {
   private readonly router=  inject(Router);
 private   readonly activatedRoute = inject(ActivatedRoute)
  private   readonly postsService = inject(PostsService)
 idpost:string=""
 post!:posts 
userid!:string
ngOnInit(): void {
    this.userid = JSON.parse(localStorage.getItem("userInfo")!)?._id
  this.activatedRoute.paramMap.subscribe(
    (param)=>{
  this.idpost= param.get('id')!;
        this.getpostdetails()  ;
      }
)}

  ngAfterViewInit(): void {
    initFlowbite(); 
  }

  getpostdetails():void{
    this.postsService.getSinglePost(this.idpost).subscribe({

next:(res)=>{
console.log(res.data.post );
this.post =res.data.post
},
error:(err)=>{
console.log(err);
}
})
  }

deletpost(id:string)
{
  this.postsService.deletePost(id).subscribe({

    next:(res)=>{
  this.router.navigate(["/feed"])
   
    }
    ,
     error:(error)=>{console.log(error);
     }
  })
}

}
