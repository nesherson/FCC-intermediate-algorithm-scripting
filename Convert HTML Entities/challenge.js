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
  
  convertHTML("Dolce & Gabbana");