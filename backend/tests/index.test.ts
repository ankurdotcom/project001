import { handler } from '../src/index';

describe('Lambda Handler', () => {
  it('should return 200 for GET', async () => {
    const event = { httpMethod: 'GET' } as any;
    const result = await handler(event, {} as any, () => {});
    expect(result.statusCode).toBe(200);
  });
});
