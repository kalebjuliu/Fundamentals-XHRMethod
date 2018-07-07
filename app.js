document.getElementById('button').addEventListener('click',loadData)

function loadData(){
  const xhr = new XMLHttpRequest()        //Create XHR Obj
  xhr.open('GET', 'data.text', true)      //OPEN ~ Specify types of req and file name

  xhr.onprogress = function(){            //On progress to add spinners and loaders
    console.log('Readstate', xhr.readyState)
  }

  xhr.onload = function(){                //What to do when the date already received
    if(this.status === 200){              //Check if 200 make sure all ok
      //console.log(this.responseText)    //Logging response
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }
  xhr.onerror = function(){
    console.log('error')
  }

  xhr.send()                              //Send to finish
}

// HTTP Statuses
// 200 : OK
// 403 : Forbidden
// 404 : Not Found



// document.getElementById('button').addEventListener('click', loadData)
//
// function loadData(){
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', 'data.text', true)
//   xhr.onprogress = function(){
//     console.log(1)
//   }
//   xhr.onload = function(){
//     console.log(2)
//     document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
//   }
//   xhr.error = function(){
//     console.log('3 error')
//   }
//   xhr.send()
// }
