const express = require('express');
const app = express();

// Middleware and routes configuration here

module.exports = app;

const PORT = process.env.PORT || 3001;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Backend server running on http://localhost:${PORT}`);
    });
}

const request = require('supertest');
const app = require('./app');

describe('POST /api/submit', () => {
    it('should return 400 for missing data', async () => {
        const response = await request(app)
            .post('/api/submit')
            .send({ aadhaar_number: '123456789012' }); // Missing other fields

        expect(response.status).toBe(400);
    });
});