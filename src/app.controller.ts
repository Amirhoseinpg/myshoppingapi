import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get()
  @Render("index.ejs")
  mainroot(){
    return {pageTitle:"محصولات"}
  }

  @Get("/create")
  @Render("create.ejs")
  createroot(){
    
    return {pageTitle:"ساخت محصول"}
  }

  @Get("/delete")
  @Render("delete.ejs")
  deleteroot(){
    return {pageTitle:"حذف محصول"}
  }

  @Get("/update")
  @Render("update.ejs")
  updateroot(){
    return {pageTitle:"بروزرسانی محصول"}
  }


  @Get("/showallproduct")
  @Render("showall.ejs")
  Showallroot(){
    return {pageTitle:"نمایش همه محصولات"}
  }


  @Get("/showproduct")
  @Render("show.ejs")
  Showproduct(){
    return {pageTitle:"نمایش محصول"}
  }


}
