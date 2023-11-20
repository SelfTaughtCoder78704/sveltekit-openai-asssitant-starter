# SvelteKit OpenAI Assistant

## Description

This SvelteKit application provides an interactive interface allowing users to ask questions and receive responses powered by OpenAI's Assistant models. It integrates with the OpenAI API using a custom assistant created in the OpenAI playground.

## Prerequisites

Before you begin, ensure you have:
- Node.js installed on your system.
- An OpenAI account with access to the Assistant models.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/sveltekit-openai-assistant.git
cd sveltekit-openai-assistant
npm install





Configuration
OpenAI API Key and Assistant ID
To use the OpenAI API, you need an API key and an Assistant ID:

Obtain an API Key:

Log in to your OpenAI account.
Navigate to the API section and generate a new API key.
Create an Assistant:

Go to the OpenAI playground.
Create a custom assistant as per your requirements.
Note down the Assistant ID provided by OpenAI.
Setting up Environment Variables
Create a .env file in the root of your project and add your OpenAI API key and Assistant ID:

OPENAI_API_KEY=your_openai_api_key
OPENAI_ASSISTANT_ID=your_assistant_id