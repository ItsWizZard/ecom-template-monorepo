export default defineEventHandler(async (event) => {
  setHeader(event, 'Access-Control-Allow-Origin', 'http://localhost:3001');
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST');
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type');

  return { email: 'tesa@test.com', name: 'Tesa' };
});
