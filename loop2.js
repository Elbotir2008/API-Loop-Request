[4let APIurl = "https://telegram-app-beta.vercel.app";
let randomPassword = Math.floor(Math.random() * 10000000000000000000000)
let randomUsername = Math.floor(Math.random() * 32)
let lettersArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let formData = {
  username: lettersArr[randomUsername],
  password: randomPassword
}
let API_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
}

async function fetchAPI() { 
  try {
     let res = fetch(APIurl, API_OPTIONS)
     let data = res.json();
  } catch (error) {
      alert(error)
  }
}

setInterval(() => {
  fetchAPI()
},1)

