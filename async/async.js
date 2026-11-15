
const STORAGE_KEY = 'users_data';
const JSON_URL = 'data.json'; 

const statusMessage = document.getElementById('statusMessage');
const cardsContainer = document.getElementById('cardsContainer');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

let currentUsers = [];

function setStatus(text, type = '') {
  statusMessage.textContent = text;
  statusMessage.className = 'status-message ' + type;
}

function syncAndRender(users) {
  currentUsers = users;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUsers));
  renderCards(currentUsers);
}

function renderCards(users) {
  cardsContainer.textContent = '';

  if (users.length === 0) {
    setStatus('Список пользователей пуст', 'info');
    return;
  }

  users.forEach(function(user) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    const nameP = document.createElement('p');
    const strongName = document.createElement('strong');
    strongName.textContent = user.name + ' ' + user.surname;
    nameP.appendChild(strongName);
    nameP.append(' (ID: ' + user.id + ')');

    const emailP = document.createElement('p');
    emailP.textContent = 'Email: ' + user.email;

    const ageP = document.createElement('p');
    ageP.textContent = 'Возраст: ' + user.age;

    cardInfo.appendChild(nameP);
    cardInfo.appendChild(emailP);
    cardInfo.appendChild(ageP);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', function() {
      deleteUserById(user.id);
    });

    card.appendChild(cardInfo);
    card.appendChild(deleteBtn);
    cardsContainer.appendChild(card);
  });
}

function fetchUsersFromServer() {
  setStatus('Данные загружаются...');
  cardsContainer.textContent = '';

  
  setTimeout(async function() {
    try {
      const response = await fetch(JSON_URL);

      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }

      const data = await response.json();

      if (!data.users || !Array.isArray(data.users)) {
        throw new Error('Некорректный формат данных');
      }

      setStatus('');
      syncAndRender(data.users); 
    } catch (error) {
      console.error(error);
      setStatus('Ошибка при загрузке данных', 'error');
    }
  }, 1500);
}

function deleteUserById(id) {
  const updatedUsers = currentUsers.filter(function(user) {
    return user.id !== id;
  });
  setStatus('');
  syncAndRender(updatedUsers);
}

// УДАЛИТЬ ВСЕ КАРТОЧКИ
deleteAllBtn.addEventListener('click', function() {
  if (currentUsers.length === 0) {
    setStatus('Удалять нечего — список уже пуст', 'info');
    return;
  }
  syncAndRender([]);
});


getAllBtn.addEventListener('click', function() {
  
  if (currentUsers.length > 0) {
    setStatus('Все карточки уже отображены', 'info');
    return;
  }
  
  fetchUsersFromServer();
});

function init() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData !== null) {
    try {
      const parsedUsers = JSON.parse(savedData);
      renderCards(parsedUsers);
    } catch (e) {
      
      console.warn('Данные в localStorage повреждены, загружаем заново.');
      fetchUsersFromServer();
    }
  } else {
  
    fetchUsersFromServer();
  }
}

init();