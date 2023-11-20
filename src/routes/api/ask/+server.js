// src/routes/api/ask.js
import { json, text } from '@sveltejs/kit';
import { askQuestion } from '$lib/askQuestion'; // Assuming askQuestion is moved to a utility file

export async function POST({ request }) {
  const question = await request.json();
  console.log(question)
  const response = await askQuestion(question.question);
  return new Response(JSON.stringify({ response }), {
    headers: { 'content-type': 'application/json' },
  })
}