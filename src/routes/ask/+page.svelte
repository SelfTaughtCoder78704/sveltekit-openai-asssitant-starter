<script>
  let question = "";
  let response = "";

  let isLoading = false;
  async function submitQuestion() {
    isLoading = true;
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    isLoading = false;
    response = data.response;
  }
</script>

<div class="container">
  <form on:submit|preventDefault={submitQuestion}>
    <input bind:value={question} />
    <button type="submit">Ask</button>
  </form>

  {#if isLoading}
    <p>Asking...</p>
  {/if}

  <div class="response-with-code">
    <div>
      {#if response}
        <pre><code>{response}</code></pre>
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  .response-with-code {
    margin-top: 1rem;
    color: white;
  }

  .response-with-code div {
    width: 100%;
    margin: 0 auto;
  }
  .response-with-code pre {
    background-color: #262626;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: scroll;
   
  }

  .response-with-code code {
    font-size: 1rem;
  }

  .response-with-code code::before {
    content: "$ ";
  }

  .response-with-code code::selection {
    background-color: #cb0e0e;
  }

  .response-with-code code::-moz-selection {
    background-color: #cb0e0e;
  }

  .response-with-code code::-webkit-selection {
    background-color: #cb0e0e;
  }

  .response-with-code code::selection,
  .response-with-code code::-moz-selection,
  .response-with-code code::-webkit-selection {
    color: #ffffff;
  }

  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background-color: #eee;
  }

  button:hover {
    background-color: #ddd;
  }

  button:active {
    background-color: #ccc;
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    background-color: #ccc;
  }
</style>
