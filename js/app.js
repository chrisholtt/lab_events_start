const button = document.querySelector('#button');
const form = document.querySelector('#new-item-form')
const list = document.querySelector('ul')
const delBtn = document.querySelector('#del-btn')
const title = document.querySelector('#reading-list-title')

const handleSubmit = function (event) {
  event.preventDefault()
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const titleEl = document.createElement('h1')
  titleEl.textContent = title

  const authorEl = document.createElement('h3')
  authorEl.textContent = author

  const categoryEl = document.createElement('p')
  categoryEl.textContent = category

  const entryWrapper = document.createElement('div')
  entryWrapper.appendChild(titleEl)
  entryWrapper.appendChild(authorEl)
  entryWrapper.appendChild(categoryEl)
  entryWrapper.classList.add('spin')

  entryWrapper.classList.add('new-entry')
  list.appendChild(entryWrapper)
  form.reset()
};


delBtn.addEventListener('click', () => {
  list.textContent = ''
})

form.addEventListener('submit', handleSubmit);


function changeTitle() {
  console.log("Chaning");
  setTimeout(() => {
    title.classList.toggle('red')
  }, 100)
  setTimeout(() => {
    title.classList.toggle('orange')
  }, 200)
  setTimeout(() => {
    title.classList.toggle('yellow')
  }, 300)
  setTimeout(() => {
    title.classList.toggle('green')
  }, 400)
  setTimeout(() => {
    title.classList.toggle('blue')
  }, 500)
  setTimeout(() => {
    title.classList.toggle('purple')
    changeTitle()
  }, 600)
}
changeTitle()


