// Süleymanlı Fuad

let studentsShowBtn = document.querySelector("#children-show")
let teachersShowBtn = document.querySelector("#teachers-show")
let studentsTable = document.querySelector("#students")
let teachersTable = document.querySelector("#teachers")
let loadingImage = document.querySelector("img")
let imgClass= document.querySelector("#img-class")
let studentsTableBody = document.querySelector("#tbody-student")
let teachersTableBody = document.querySelector("#tbody-teacher")
let studentsTableHideBtn = document.querySelector("#students-hide")
let teachersTableHideBtn = document.querySelector("#teachers-hide")
let newData


//Ajax Request
let getRequest = () => {
    let xtr = new XMLHttpRequest()
    xtr.onreadystatechange = () => {
        if (xtr.readyState == 4 && xtr.status == 200) {
        newData = JSON.parse(xtr.responseText)
            console.log(newData)
        }
      
    }
    xtr.open("GET", "json.json", true)
    xtr.send()

}
getRequest()



//Show Stundest Click
studentsShowBtn.addEventListener("click",()=>{
    studentsShowBtn.style.display="none"
    studentsTableHideBtn.style.display="inline"
    imgClass.innerHTML='<img src="loading.gif" alt="loading">'
setTimeout(()=>{
    newData.class[0].students.forEach((element, index) => {
        console.log(element)
        studentsTableBody.innerHTML+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.tel}</td>
        <td><span onclick="deleterow(${index})"><i class="fas fa-trash"></i></span></td>
        </tr>
       `  
    });
   
    studentsTable.style.display ="table"

    imgClass.innerHTML=""

},2000)

} )

//Show Teachers Click
teachersShowBtn.addEventListener("click",()=>{
    teachersShowBtn.style.display="none"
    teachersTableHideBtn.style.display="inline"
    imgClass.innerHTML='<img src="loading.gif" alt="loading">'
setTimeout(()=>{
    newData.class[1].teachers.forEach((element, index) => {
        teachersTableBody.innerHTML+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.tel}</td>
        <td><span onclick="deleterowT(${index})"><i class="fas fa-trash"></i></span></td>
        </tr>
       `
    });
    
    teachersTable.style.display ="table"

    imgClass.innerHTML=""

},2000)
} )


//Hide Students Click
studentsTableHideBtn.addEventListener("click",()=>{
    studentsTableBody.innerHTML=""
    studentsTable.style.display ="none"
    studentsTableHideBtn.style.display="none"
    studentsShowBtn.style.display="inline-block"
 
   

})

//Hide Teahers Click
teachersTableHideBtn.addEventListener("click",()=>{
    teachersTableBody.innerHTML=""
    teachersTable.style.display ="none"
    teachersTableHideBtn.style.display="none"
    teachersShowBtn.style.display="inline-block"
 
   

})


//Delete row
function deleterow(index){
        let newTr =document.querySelectorAll("#tbody-student tr")
        newTr[index].hidden="true"
        }



//Delete row Teacher
function deleterowT(index){
    let newTrTeach =document.querySelectorAll("#tbody-teacher tr")
    newTrTeach[index].hidden="true"
    }

