
//books construtor

function Book(title,author,isbn){
    this.title=title
    this.author=author
    this.isbn=isbn
}

// Book.prototype.name=function(){}

//UI constructor

function UI(){}

UI.prototype.addBookList = function(book){
const list  = document.getElementById('book-list')
//Create tr
const row = document.createElement('tr')
//insert cols
row.innerHTML =`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`



list.appendChild(row)
}

//Show Alert
UI.prototype.showAlert = function(message,className){
    //create div
    const div = document.createElement('div')
    //add class
    div.className =`alert ${className}`
    //Add text
    div.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    container.insertBefore(div,form)

    //Timeout after 4 sec
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 4000);

//Delete Book
UI.prototype.deleteBook=function(target){
if(target.className=='delete'){
//  console.log('X is pressed');   
target.parentElement.parentElement.remove()
}
}

}


// <div>MESAAGE</div>


//Event Listeners

document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault()// to stop default refreshing
const title = document.getElementById('title').value
const author = document.getElementById('author').value
const isbn = document.getElementById('isbn').value



console.log(title,author,isbn);

//Instantiate Book
const book = new Book(title,author,isbn)
console.log(book);

//Instantiat UI
const ui = new UI()
console.log(ui);

//validate
if(title==='' || isbn === '' || author===''){
    // alert('Failed')
//Error Message
ui.showAlert('Please fill all details','error')
}else{
//ADD BOOK LIST
ui.showAlert('Data Successfully Posted','success')
ui.addBookList(book)
}
})

//Event Listner for delete

document.getElementById('book-list').addEventListener('click',function(e){
    // e.preventDefault()
    console.log('DELETE');
    const ui = new UI()
    ui.deleteBook(e.target)
})
