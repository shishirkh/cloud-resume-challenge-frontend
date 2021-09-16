// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getTodos() {
  axios
  .get('https://6n9mqiawsc.execute-api.us-east-1.amazonaws.com/stage-2/record', {
    timeout: 5000
  })
  .then(res => {
    console.log(res)
    showOutput(res.data)
  })
  .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log('addToDo - POST request')
  axios
    .post('https://6n9mqiawsc.execute-api.us-east-1.amazonaws.com/stage-2/record', {
      title: 'New Todo',
      completed: false
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}


// AXIOS INSTANCE
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  console.log(res.data)

  var paragraph = document.getElementById("res");
  var text = document.createTextNode(`Hello, Visitor #${res}!`);
  paragraph.appendChild(text);
}

getTodos()
addTodo()