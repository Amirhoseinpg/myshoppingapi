import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';




  import { Product } from '../interfaces/product';
  import { CreateProductDTO, UpdateProductDTO } from './product.dto';
  import { ProductService } from './product.service';
  
  @Controller('/api/products')
  export class ProductController {
    constructor(private productService: ProductService) {}
    
    @Get()
    async getAllProduct(): Promise<Product[]> {
      return await this.productService.findAll()
    }
    
    
    @Post()
    async createProduct(
      @Body() product: CreateProductDTO,
      ): Promise<Product> {
        
        return await this.productService.create(product);
      }
      
    @Get(':id')
    async read(@Param('id') id: string): Promise<Product> {
      return await this.productService.findone(id);
    }
    
    @Put(':id')
    async updateProduct(
      @Param('id') id: string,
      @Body() product: UpdateProductDTO,
      ): Promise<Product> {
        return await this.productService.update(id, product);
      }
      
    @Delete(':id')
    async deleteProduct(
      @Param('id') id: string,
    ): Promise<Product> {
      return await this.productService.delete(id);
    }
  }



