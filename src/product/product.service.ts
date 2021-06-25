import { CreateProductDTO, UpdateProductDTO } from './product.dto';
import { Product } from './../interfaces/product';
import { HttpException, HttpStatus, Injectable, NotFoundException,} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'


@Injectable()
export class ProductService {
    constructor(@InjectModel("Product") private productModel:
    Model<Product>){}

    /**
     * Returns a list with all products
     * available in the database.
    */
    public async findAll():Promise<Product[]>{
        const allProduct= await this.productModel.find().exec()
        return allProduct;
    }


    /**
     * Returns a product based on an id.
     * 
    */
    public async findone(id:string):Promise<Product>{
        try {
            const product= await this.productModel.findById(id)

            if(!product){
                throw new HttpException("product does not exist",HttpStatus.NO_CONTENT)
            }
            return product
            
        } catch (error) {
            throw new NotFoundException("cant find this product")
        }
    }

    /**
     * Create a product based on a DTO object 
     * for product: [CreateProductDTO].
     * 
    */
    public async create(productDTO:CreateProductDTO):Promise <Product>{
        const product = await this.productModel.create(productDTO)
        await product.save();
        return product
    }


    /**
     * Update a product in Database
     * 
    */
    public async update(id:string,productDTO:UpdateProductDTO):Promise <Product>{
        const product = await this.productModel.findById(id)
        if(!product){
            throw new HttpException("product does not exist",HttpStatus.NO_CONTENT)
        }
        await product.update(productDTO);
        return await this.productModel.findById(id)
    }


    /**
     * Delete a product in the Database
    */
    public async delete(id:string):Promise<Product>{
        try {  
            const product = await this.productModel.findById(id)
            await product.remove();
            return product;
        } catch (error) {
            throw new NotFoundException("cant find this product")
        }
    }
}
