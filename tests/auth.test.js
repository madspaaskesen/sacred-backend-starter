const request = require('supertest')
const app = require('../index')

describe('Auth Endpoints', () => {
  it('GET /status should return ok', async () => {
    const res = await request(app).get('/status')
    expect(res.statusCode).toBe(200)
    expect(res.body.ok).toBe(true)
  })

  it('POST /auth/register should return 201', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'testpassword'
      })
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('token')
    expect(res.body.user).toHaveProperty('id')
    expect(res.body.user).toHaveProperty('name', 'Test User')
  })

  it('POST /auth/login should return 200', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'testpassword'
      })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.user).toHaveProperty('id')
    expect(res.body.user).toHaveProperty('name', 'Test User')
  })
})
