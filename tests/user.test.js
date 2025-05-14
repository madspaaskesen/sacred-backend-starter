const request = require('supertest')
const app = require('../index')

let token = ''
let userId = ''

beforeAll(async () => {
  // Register and login to obtain token and userId
  const res = await request(app)
    .post('/auth/register')
    .send({
      name: 'Update Me',
      email: 'update@example.com',
      password: 'secret123'
    })

  token = res.body.token
  userId = res.body.user.id
})

describe('User Endpoints', () => {
  it('PATCH /user/:id should update name and email', async () => {
    const res = await request(app)
      .patch(`/user/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated Name',
        email: 'updated@example.com'
      })

    expect(res.statusCode).toBe(200)
    expect(res.body.user.name).toBe('Updated Name')
    expect(res.body.user.email).toBe('updated@example.com')
  })
})
