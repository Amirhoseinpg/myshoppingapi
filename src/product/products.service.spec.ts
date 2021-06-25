import { CreateProductDTO } from './product.dto';
import * as mongoose from 'mongoose'
import axios from 'axios'
import { app,database } from './../../test/constant';
import * as request from 'supertest'
import { HttpStatus } from '@nestjs/common';



beforeAll(async () => {
    await mongoose.connect(database);
    await mongoose.connection.db.dropDatabase();

  });
  
  afterAll(async done => {
    await mongoose.disconnect(done);
  });

  describe("PRODUCT",()=>{

    const product: CreateProductDTO = {
        title: 'new product',
        image: 'this is simple image',
        description: 'description',
        price: 10,
      };

      let productId:string;


      it("should list all products",()=>{
          return request(app)
          .get("/api/products")
          .expect(200)
      });

      it("should create product",()=>{
          return request(app)
          .post("/api/products")
          .send(product)
          .expect(({body})=>{
            expect(body._id).toBeDefined();
            productId = body._id;
            expect(body.title).toEqual(product.title);
            expect(body.description).toEqual(product.description);
            expect(body.price).toEqual(product.price);
          })
          .expect(HttpStatus.CREATED)

      });

      it("should read product",()=>{
        return request(app)
        .get(`/api/products/${productId}`)
        .expect(({ body }) => {
          expect(body._id).toEqual(productId)  
          expect(body.title).toEqual(product.title);
          expect(body.description).toEqual(product.description);
          expect(body.price).toEqual(product.price);
        })
        .expect(200);
      });

      it("should update product",()=>{
        return request(app)
        .put(`/api/products/${productId}`)
        .set('Accept', 'application/json')
        .send({
          title: 'testTitle',
        })
        .expect(({ body }) => {
          expect(body._id).toEqual(productId)  
          expect(body.title).not.toEqual(product.title);
          expect(body.description).toEqual(product.description);
          expect(body.price).toEqual(product.price);
        })
        .expect(200);
      })

      it("should delete product",async ()=>{
          await axios.delete(`${app}/api/products/${productId}`)
          return request(app)
          .get(`/api/products/${productId}`)
          .expect(404);
      })
  })