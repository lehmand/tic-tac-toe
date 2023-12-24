let fields = [
    null, 
    null, 
    'circle', 
    null, 
    null, 
    null, 
    'cross', 
    null, 
    null
];

function init(){
    render();
}

function render() {
    const contentDiv = document.getElementById('content');
    const table = document.createElement('table');
    
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;
            const fieldValue = fields[index];
            
            if (fieldValue === 'circle') {
                cell.textContent = 'O';
                cell.classList.add('circle');
            } else if (fieldValue === 'cross') {
                cell.textContent = 'X';
                cell.classList.add('cross');
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    contentDiv.innerHTML = '';
    contentDiv.appendChild(table);
}

