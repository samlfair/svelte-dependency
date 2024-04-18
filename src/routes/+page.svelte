<script>
  import { remark } from 'remark';
  import remarkHTML from 'remark-html';

  const markdownParser = remark().use(remarkHTML);

  const content = markdownParser.parse(`# Hello!`);

  let mounted = $state(false);

  $effect(() => (mounted = true));
</script>

<h1>{mounted ? 'Mounted' : 'Not mounted'} to the dom</h1>

<pre>
  {JSON.stringify(content, null, 2)}
</pre>
