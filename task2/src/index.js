const newsList = 'news2';
let news = [];
let windowHidden = false;

async function loadNews(){
    if(window.navigator.onLine){
        const response = await fetch(`http://localhost:4043/api/get-news`,
        {
            headers: {
                mode: 'no-cors',
            }
        })
        return (await response.json()).articles
    }else{
        let list = []
        const data = localStorage.getItem(newsList);
        if(data){
            list = JSON.parse(data)
        }
        console.log('LOCAL')
        console.log(list)
        return list
    }
    
}

function setNewsToLocalStorage(news){
    localStorage.setItem(newsList, JSON.stringify(news))
}


function notificationsHandler(){
    const noitifyEl = document.querySelector('#noitify')
    setInterval(async () => {
        const newsListData = await loadNews()
        noitifyEl.innerHTML = '';

        newsListData.forEach(el => {
            if(windowHidden && news.some(el2 => el2.id != el.id)){
                noitifyEl.insertAdjacentHTML('beforeend', `
                <h3>${el.title}</h3>
                `)                
            }
        })

        news = newsListData
        refreshNews()
    }, 10000)
}
function handleVisibilityChange() {
    if (document.hidden) {
      console.log('Окно свернуто');
      windowHidden = true;
    } else {
      console.log('Окно активно');
      windowHidden = false;
    }
  }


  function refreshNews(){
    const contentDiv = document.querySelector('.content')
    contentDiv.innerHTML = ''
    news.forEach(element => {
        contentDiv.insertAdjacentHTML('beforeend', `
        <div class="card shadow-sm p-3 m-1 my-2 c-card">
          <img src="${element.imageUrl}" alt="${element.title}">
          <h3>${element.title}</h3>
          <p>Author: ${element.author}</p>
        </div>`)
    });

  }
  

async function startApp(){
    news = await loadNews()
    setNewsToLocalStorage(news)


    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    refreshNews()

    notificationsHandler()
}

document.addEventListener('DOMContentLoaded', () => {
    startApp()
})