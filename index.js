// This function is invoked when clicking on submit button on form
// This function collects all the values provided as 
// input from the form, creates an object out of it 
// and stores it in localStorage

function storeData(e) {
    e.preventDefault()
    // Collect Data
    let form = document.getElementById("studentsData");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    // console.log(name, course, unit, image, batch);

    let s1 = new Student(name, course, unit, image, batch);
    // console.log(s1)

    // We now want to store this data in localStorage:
    let data = JSON.parse(localStorage.getItem('students')) || [];

    data.push(s1);

    localStorage.setItem("students", JSON.stringify(data));
 
}

// Create Constructor:
function Student(n,c,u,i,b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-Web ${b}`;
}

function calculate() {
    //Obtain the stored data from localStorage
    let data = JSON.parse(localStorage.getItem('students')) || [];

    let obj = {};

    //We need to find out the number of batches I have stored in the db:
    for (let i = 0; i < data.length; i++) {
        if (!obj[data[i].batch]) {
            obj[data[i].batch] = 0;
         }
    }

    for (let i = 0; i < data .length; i++) {
        obj[data[i].batch]++ ;
    }

    console.log(obj)

}

calculate();