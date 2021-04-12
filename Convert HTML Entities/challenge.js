const operations = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;'],
    ["'", '&apos;']
  ];
  
  function convertHTML(str) {
    let newStr = str.slice();
    for (let i = 0; i < operations.length; i++) {
      if (newStr.includes(operations[i][0])) {
        newStr = newStr.replaceAll(operations[i][0], operations[i][1]);
      }
    }
    return newStr;
  }

// TESTS
// convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// convertHTML("<>") should return the string &lt;&gt;.
// convertHTML("abc") should return the string abc.