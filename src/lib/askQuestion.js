// src/lib/askQuestion.js
import { OPENAI_API_KEY, ASSISTANT_ID } from '$env/static/private'
import OpenAI from 'openai';
const openai = new OpenAI(
  { apiKey: OPENAI_API_KEY }
); // Configure as needed

export async function askQuestion(query) {
  const assistant = await openai.beta.assistants.retrieve(
    ASSISTANT_ID
  );

  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: query,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
  });

  // Wait for completion or use a polling mechanism
  await new Promise(resolve => setTimeout(resolve, 20000)); // 30 seconds

  const runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  let response = []
  if (runStatus.status === "completed") {
    const messages = await openai.beta.threads.messages.list(thread.id);
    messages.data.forEach((msg) => {
      const role = msg.role;
      const content = msg.content[0].text.value;
      console.log(
        `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
      );

      response.push(`${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`)
    });
  } else {
    console.log("Response not received in time.");
    response.push("Response not received in time.")

  }

  return response
}

