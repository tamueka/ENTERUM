import './header-styles.scss';

export const updateHeader = ({ title }) => {
  const titleElement = document.getElementById('title');
  titleElement.innerHTML = title;
};

const header = document.getElementsByTagName('header')[0];

const hamburgerLink = document.getElementById('hamburger-icon');
hamburgerLink.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

export default {
  updateHeader
};

