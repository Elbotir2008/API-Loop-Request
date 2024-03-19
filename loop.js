let APIurl = "https://telegram-app-beta.vercel.app";
let formData = {
  username: "Elbotir",
  password: "1234"
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

