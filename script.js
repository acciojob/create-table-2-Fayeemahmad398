function createTable() {
    //Write your code here
	let rn=prompt("Input number of rows");
	let cn=prompt("Input number of columns");
	let table=document.getElementById("myTable");
	for(let i=0;i<=rn;i++)
		{
			let row=document.createElement("tr");
			for(let j=0;j<=cn;j++){
				let td=document.createElement("td");
				td.textContent=`Row-${i} Column-${j}`
				row.appendChild(td);
			}
			table.appendChild(row);
		}

	
  
}
