<script>
  import * as prismic from '@prismicio/client';

  const client = prismic.createClient('example-prismic-repo');

  const promise = client.getFirst();
</script>

<h1>Querying an API</h1>

{#await promise then response}
  <pre>
    {JSON.stringify(response, null, 2)}
  </pre>
{/await}
