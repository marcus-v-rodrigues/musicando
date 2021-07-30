# Musicando
## Overview
This is a website developed for "SCC0219 - Introduction to Web Development" at the University of São Paulo (USP). Using Node.js, React.js, Styled-Components and React-Router. This project is a simulation of a website for selling musical instruments.

It was done by:<br>
- Daniel Martins Vieira
- Isadora Carolina Siebert
- Marcus Vinícius Santos Rodrigues

## Requirements
* The system will have 2 types of users: Clients and Administrators. 
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  * Customers are users who access the system to buy products/services.
  *  The admin record includes, at least: name, id, phone, email.
  * Each customer's record includes, at least: name, id, address, phone, email
  * Musical instruments records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.

* Musical instruments are selected, their quantity chosen, and are included in a cart, then are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers. 
* The system will provide accessibility requirements and provide good usability. 
* The system will be responsive.

In addition to the standard requirements described in the project's sheet, our website must include the functionality of playing audio files with sounds made by the instrument that the customer is looking for. Thus, the customer will have a sense of the timbre of the instrument before making the purchase.

## About the project
A Musicando is a hypothetical store of musical instruments of the most diverse types, among them, keyboards, guitars, wind instruments, percussions, etc.

## Current features
Currently only the login and registration buttons, in addition to the button on the hero page, are functional and take you to another page. And the search bar appears when you click on the magnifying glass, but there is still no search functionality.

## Future Implementation
The next step is to start inserting real purchase functionality into the project (still having the notion that it is not really a real ecommerce).
The website design is still too simple. So, in future deliveries the idea is to create a series of 2D animations in order to enrich the user experience, in addition to making everything responsive.

## Site images:

#### Main Page
<img src="https://raw.githubusercontent.com/marcus-v-rodrigues/musicando/master/frontend/prototype/homepage.png" alt="Página principal" width="600"/>

#### Shopping Cart Page
<img src="https://raw.githubusercontent.com/marcus-v-rodrigues/musicando/master/frontend/prototype/cartpage.png" alt="Página Carrinho" width="600"/>

#### Log In Page
<img src="https://raw.githubusercontent.com/marcus-v-rodrigues/musicando/master/frontend/prototype/loginpage.png" alt="Página Log in" width="600"/>

#### Navegation Diagram
<img src="https://raw.githubusercontent.com/marcus-v-rodrigues/musicando/master/frontend/prototype/navigation_diagram.png" alt="Página Log in" width="600"/>


The complete prototype with navigation between pages is available [here](https://www.figma.com/file/CuKYvZKoZ1MMbLktkCf9Wh/Musicando?node-id=0%3A1)

## Explaining the file organization
The way javascript files are organized is different from normal,due to the use of CSS-in-JS. 
The components folder houses components that are used by multiple pages.
Within each folder on each page there is a sections folder, which separates each significant piece of that page into local components that use global components.
And within each component there is a logical file and a style file, both of which are JavaScript ones. This is due to the fact that CSS is being used to form components specifically for styling. This helps to separate what is style and what is logical, in addition to allowing the use of all the logical capacity of a programming language in a style sheet.

## How to run the application:

> **Clone the Repository on your machine:**

```bash
git clone  https://github.com/marcus-v-rodrigues/musicando.git
```

> **Navigate to the downloaded directory:**

```bash
cd musicando
```

> **Install the Dependencies:**

```bash
npm install
```
_or_

```bash
yarn
```
> **Start the application:**

```bash
npm start
```
_ou_

```bash
yarn run start
```
**To the application start in your browser, by default you must access:**

http://localhost:3000/

**If it is not on port 3000, check the terminal that started the application to see the path that is defined**


# Automated Testing

In order to test our application functionality, we developed a script to help you out in this task.
All you have to do is install python, Selenium, your favourite browser and its web driver in your machine.

The application must be running before the automatic test execution!

With it all done, just execute the following steps:

```bash
cd autotest
```

```bash
python autotest.py
```

It will getthe work done for you!
