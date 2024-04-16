// function submitHandler() {
//     let projectName = document.getElementById("projectName").value;
//     let startDate = document.getElementById("startDate").value;
//     let endDate = document.getElementById("endDate").value;
//     let description = document.getElementById("description").value;
//     let file = document.getElementById("file").value;
    

//     if (projectName == "") {
//         return alert ("Please enter your project name!")
//     } else if (startDate == "") {
//         return alert ("Please enter your Start Date!")
//     } else if (endDate == "") {
//         return alert ("Please enter your End Date!")
//     } else if (description == "") {
//         return alert ("Please enter your Description!")
//     } else if (file == "") {
//         return alert ("Please upload your image!")
//     } 
    
    

//     const data = {
//         projectName, startDate, endDate, description, file
//     }

//     const yourEmail = 'muhammadirfan2823@gmail.com'
    
//     let a = document.createElement("a")
//     a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${projectName}&body=${description}`
//     a.click();

//     console.log(data)


// }

const dataProject = [];

function addProject(event) {
    event.preventDefault();

    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value
    // let nodeJs = document.getElementById("nodeJs").value;
    // let nextJs = document.getElementById("nextJs").value;
    // let reactJs = document.getElementById("reactJs").value;
    // let typeScript = document.getElementById("typeScript").value;
    

    if (projectName == "") {
        return alert ("Please enter your project name!")
    } else if (startDate == "") {
        return alert ("Please enter your Start Date!")
    } else if (endDate == "") {
        return alert ("Please enter your End Date!")
    } else if (description == "") {
        return alert ("Please enter your Description!")
    } else if (image == "") {
        return alert ("Please upload your image!")
    } 

    if (endDate < startDate) {
        return alert ("End date cannot be less than start date!")
    }
    
    let startDatePart = startDate.split("/")
    let endDatePart = endDate.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0] 
    let formatEndDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]   

    let newStartDate = new Date(formatStartDate)
    let newEndDate = new Date(formatEndDate)

    let timeDifference = newEndDate - newStartDate

    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) 
    let differenceInMonths = Math.floor(differenceInDays / 30.44) 
    let differenceInYears = Math.floor(differenceInMonths / 24) 

    let duration;

    if(differenceInYears > 0) {
        duration = `${differenceInMonths} years`
    } else if (differenceInMonths > 0) {
        duration = `${differenceInMonths} months`
    } else if (differenceInDays > 0) {
        duration = `${differenceInDays} days`
    }



    
    dataProject.push(
        {
            projectName: projectName,
            startDate: startDate,
            endDate: endDate,
            description: description,
            image: image,
            duration: duration

        }
    )

    
    console.log(dataProject)

    newData()

}

    function newData() {
        document.getElementById("listProject").innerHTML = ""

        for(let i = 0; i < dataProject.length; i++) {
            const projectSaya = dataProject[i]

            document.getElementById("listProject").innerHTML +=`
            <div id="listProject" class="project">
                <div class="foto">
                    <img src="${projectSaya.image}" alt="ini foto project">
                </div> 
                <div class="judul">
                    <h5>${projectSaya.projectName}</h5>
                    <p>${projectSaya.startDate} - ${projectSaya.endDate}</p>
                    <p>Durasi: ${projectSaya.duration}</p>
                </div>
                <div class="deskripsi">
                    <p>${projectSaya.description}</p>
                </div>

                <div class="icon">
                    <i class="fa-brands fa-google-play"></i>
                    <i class="fa-brands fa-android"></i>
                    <i class="fa-brands fa-java"></i>
                </div>
               
                <div class="button">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        `
        }
    }


