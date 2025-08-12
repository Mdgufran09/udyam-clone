// udyam-backend/index.test.js
const request = require('supertest');
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// We need to mock the prisma client to avoid hitting the actual database in tests
jest.mock('@prisma/client', () => {
  const mockPrisma = {
    udyamApplication: {
      create: jest.fn().mockResolvedValue({ id: 1 }),
    },
  };
  return { PrismaClient: jest.fn(() => mockPrisma) };
});

// You need to export your app from index.js for this to work
// So for now, we recreate a minimal app for testing
const app = require('./index'); // Assuming app is exported from index.js

describe('POST /api/submit', () => {
  it('should return 400 for missing data', async () => {
    const response = await request(app)
      .post('/api/submit')
      .send({ aadhaar_number: '123456789012' }); // Missing other fields

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('All fields are required.');
  });
});