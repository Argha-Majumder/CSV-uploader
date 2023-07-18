// For searching any value present on the row
const searchFun = ()=> {
    let filter = document.getElementById('myInput').value.toLowerCase();  // this is to get the value from the input box

    let myTable = document.getElementById('myTable'); 

    let tr = myTable.getElementsByTagName('tr'); // get the table row 

    for (let i=1;i<tr.length;i++) {
        let td = tr[i].getElementsByTagName('td'); // now get the table data
        let flag = false;
        for (let j=0;j<td.length;j++) {
            let textValue = td[j].textContent || td[j].innerHTML;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                flag = true;
                break;      // if any row data matches with the filter then no need to traverse the whole row
            } 
        }
        if (flag) {
            tr[i].style.display = "";   
        } else {
            tr[i].style.display = "none";
        }
    }
}