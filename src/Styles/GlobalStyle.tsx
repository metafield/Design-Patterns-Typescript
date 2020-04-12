import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poiret+One&display=swap');

:root {
  --display-font: 'Poiret One', cursive;
  --body-font: 'Open Sans', sans-serif;

  --white: hsl(0, 0%, 97%);
  --black: hsl(0, 0%, 13%);
  --black-transparent: hsla(0, 0%, 13%, 0.75);
  
  --primary: hsl(243, 100%, 72.4%);
  --primary-transparent: hsla(243, 55%, 100%, 75%);
  --secondary: none;
  --accent: none;
  
  --light-grey: hsl(0, 0%, 85%);
  --mid-grey: hsl(0, 0%, 50%);
  --dark-grey: hsl(0, 0%, 25%);

  --mobile: 576px;
  --tablet: 768px;
  --desktop: 992px;
  --wide: 1200px;
  
  --grid: minmax(15px, 1fr) minmax(0, 80%) minmax(15px, 1fr);
  
  --shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.075);
  
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:focus {
  outline-color: var(--primary);
}

body {
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: var(--white);
  color: var(--black);
  font-family: var(--body-font);
}

a {
  color: var(--primary);
  text-decoration: none;
}

p {
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--black);
}

ul {
  list-style-type: none;
}

article {
  margin-bottom: 3rem;
}

::selection {
  background-color: var(--primary);
  color: var(--black);
}
`;
