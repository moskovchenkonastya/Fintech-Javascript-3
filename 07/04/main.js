const list = document.getElementById('list');
let loading = false;
let page = 1;
const breakpoint = 100;

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function loadData(pageLoad) {
  loading = true;

  fetch(`https://api.github.com/orgs/facebook/repos?page=${pageLoad}`)
    .then(status)
    .then(response => response.json())
    .then(data => {
      loading = false;
      if (data.length === 0) {
        window.removeEventListener('scroll');
      } else {
        page += 1;
        data.forEach(elem => {
          const link = document.createElement('a');
          const date = document.createElement('p');
          const formatting = new Intl.DateTimeFormat('ru');
          const created = formatting.format(new Date(elem.created_at));
          const elemOfCommit = formatting.format(new Date(elem.updated_at));
          const wrapper = document.createElement('li');

          link.href = elem.html_url;
          link.textContent = elem.name;
          date.textContent = elem.description + ' Дата создания: ' + created + '. Последний коммит: ' + elemOfCommit;
          wrapper.appendChild(link);
          wrapper.appendChild(date);
          list.appendChild(wrapper);
        });
      }
      // console.log('Request succeeded with JSON response', data);
    }).catch(error => {
      // console.log('Request failed', error);
    });
}

function scrollHandler() {
  if (list.getBoundingClientRect().bottom - window.innerHeight < breakpoint && !loading) {
    loadData(page);
  }
}

window.addEventListener('scroll', scrollHandler);
loadData(page);
