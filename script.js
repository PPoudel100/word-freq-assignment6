
const root = document.getElementById('root');

// Create the textarea element
const textarea = document.createElement('textarea');
textarea.placeholder = 'Enter your text here...';
root.appendChild(textarea);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'SUBMIT';
root.appendChild(submitButton);

submitButton.addEventListener('click', () => {
  const text = textarea.value.trim();
  
  const tokens = text.split(/\s+/);
  
  // Create a frequency table
  const frequencyTable = {};
  tokens.forEach(token => {
    frequencyTable[token] = (frequencyTable[token] || 0) + 1;
  });
  

  const sortedTable = Object.entries(frequencyTable).sort((a, b) => b[1] - a[1]);
  
  // most frequent words
  const top5 = sortedTable.slice(0, 10);
  
  // Render the frequency table to the UI
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  
  const headRow = document.createElement('tr');
  const headCell1 = document.createElement('th');
  const headCell2 = document.createElement('th');
  headCell1.textContent = 'WORD_NAME';
  headCell2.textContent = 'WORD_FREQUENCY';
  headRow.appendChild(headCell1);
  headRow.appendChild(headCell2);
  tableHead.appendChild(headRow);
  
  top5.forEach(([word, frequency]) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = word;
    cell2.textContent = frequency;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  root.appendChild(table);
  
  console.log(frequencyTable);
});
