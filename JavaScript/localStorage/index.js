const createGoalForm = document.querySelector('.create-goal__form');
const nameOfGoalText = document.querySelector('.goal__text_goal-name');
const dateOfEndGoalText = document.querySelector('.goal__text_goal-end-date');
const creatingGoalBlock = document.querySelector('.create-goal');
const infoGoalBlock = document.querySelector('.goal');

const saveGoal = () => {
  let nameOfGoalInputValue = document.querySelector('.form__textarea').value;
  let currentDate = new Date();
  let dayOfEndGoal = currentDate.getDate();
  let monthOfEndGoal = currentDate.getMonth() + 1;
  let yearOfEndGoal = currentDate.getFullYear() + 1;
  let dateOfEndGoal = `${dayOfEndGoal}.${monthOfEndGoal}.${yearOfEndGoal}`; 

  localStorage.setItem('nameOfGoal', nameOfGoalInputValue);
  localStorage.setItem('dateOfEndGoal', dateOfEndGoal);  
}

const getGoal = () => {
  const nameOfGoal = localStorage.getItem('nameOfGoal');
  const dateOfEndGoal = localStorage.getItem('dateOfEndGoal');

  nameOfGoalText.textContent = nameOfGoal;
  dateOfEndGoalText.textContent = dateOfEndGoal;
}

const addGoal = (evt) => {
  evt.preventDefault();

  saveGoal();
  creatingGoalBlock.classList.add('page__goal_display_none');
  infoGoalBlock.classList.remove('page__goal_display_none');
  getGoal();
}

createGoalForm.addEventListener('submit', addGoal);
