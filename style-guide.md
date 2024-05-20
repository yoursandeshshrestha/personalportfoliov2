<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

/* #CUSTOM PROPERTY */
:root {

    /*colors*/
    --background: hsl(0, 0%, 7%);
    --text-color: #bbbbbb;
    --text-color-v2: #bbbbbbb0;
    --line-color: #bbbbbbbb;
    --white-color: #ededed;
    --white-color-v2: #edededef;
    --black-color: #131313;
    --green: #40cf8e;
    --green-lighter: #40cf8fb8;
    --contact-hover: #40cf8f59;
    --selection-background: rgba(217, 0, 255, 0.304);    
    --selection-color: rgb(255, 255, 255); 
    --hover-color: rgba(245, 222, 179, 0.221);   
    --white-1: hsl(0, 0%, 100%);
    --white-2: hsl(0, 0%, 98%);

    --blue: royalblue;
    --outline: hsl(0, 0%, 22%);
    --box: hsl(240, 2%, 13%);
    --onyx: hsl(240, 1%, 17%);
    --eerie-black-2: hsl(240, 2%, 12%);
    --white-1: hsl(0, 0%, 100%);
    --white-2: hsl(0, 0%, 98%);
    --vegas-gold: hsl(45, 54%, 58%);
    --light-gray: hsl(0, 0%, 84%);
    --light-gray-70: hsla(0, 0%, 84%, 0.7);
    --bittersweet-shimmer: hsl(0, 43%, 51%);

    /* Background */
    --nav-background: rgba(114,114,114,.2);
  
    /* font-family */
    --ff-poppins: 'Poppins', sans-serif;
  
    /** shadow */
    --nav-shadow: 0 2px 10px #0000001a;
    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.25);
    --shadow-4: 0 25px 50px hsla(0, 0%, 0%, 0.15);
    --shadow-5: 0 24px 80px hsla(0, 0%, 0%, 0.25);
  
    /*** transition*/
    --transition-1: 0.25s ease;
    --transition-2: 0.5s ease-in-out;
  
  }

  /*-----------------------------------*\
                  #RESET
  \*-----------------------------------*/

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 120px;
  }
  
  a { text-decoration: none; }
  
  li { list-style: none; }
  
  button {
    font: inherit;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }
  
  input, textarea {
    display: block;
    width: 100%;
    background: none;
    font: inherit;
  }
  
  ::selection {
    background: var(--selection-background);
    color: var(--selection-color);
  }
  
  :focus { outline-color: var(--orange-yellow-crayola); }
  
  html { font-family: var(--ff-poppins); }