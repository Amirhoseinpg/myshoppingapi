import 'dotenv/config'
import * as request from 'supertest';
import {app} from './constant'



describe('ROOT', () => {
  it('should connect and ping', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });
  it('should connect and ping', () => {
    return request(app)
      .get('/create')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });
  it('should connect and ping', () => {
    return request(app)
      .get('/delete')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });
  it('should connect and ping', () => {
    return request(app)
      .get('/update')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });
  it('should connect and ping', () => {
    return request(app)
      .get('/showallproduct')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });
  it('should connect and ping', () => {
    return request(app)
      .get('/showproduct')
      .expect(200)
      .expect('Content-Type',"text/html; charset=utf-8");
  });

});