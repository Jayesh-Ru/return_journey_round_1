
const request =require('supertest');
const app = require('../app');
import {randomIdGenerator,randomProductsGenerator} from '../utils/testUtils'

describe('ProductController API', () => {
  const products = randomProductsGenerator();
  products.forEach(product => {
      it('should create a new product',async () => {

        const response =  await request(app).post('/api/products').send(product);
    
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(product.name);
        expect(response.body.price).toBe(product.price);
      });
    });

  it('should get all products', async () => {
      const response = await request(app).get('/api/products');
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(products);
  });

  randomIdGenerator().forEach(id=>{
    it(`should get a product by ID ${id}`, async () => {
      const response = await request(app).get(`/api/products/${id}`);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(products[id - 1]);
    });

  })

    
  
  it('should return 404 for non-existent product ID', async () => {
    const response = await request(app).get('/api/products/999');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Product not found' });
  });
});
