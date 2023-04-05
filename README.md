# Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users are be able to:
-Fill in the Personal Info Form
-Submit (Next Step)
-Go to Select Your Plan page
-Select a plan
-Can go back to the Previous page or Submit(Confirm)
-Go to Pick Add Ons
-Pick Add Ons and Submit


### Screenshot
(./assets/images/PersonalInfo.jpg)
(./assets/images/Selectplan.jpg)
(./assets/images/PickAddOns.jpg)


### Links
- Solution URL: https://github.com/ndanuu/Multi-Step-Form-React.git


## My process

### Built with
-HTML
-CSS
-React Typescript


### What I learned
 Hooks 
 Hooks  simplify complex logic by breaking it down into smaller, more manageable pieces. This  makes it easier to reason about your code and reduce the likelihood of bugs.
Example of a Hook that will allow the user go to the Next Step and Back.
 const goBackwards = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prev) => prev - 1);
      };

  
    const goForwards = () => {
        if (currentIndex === formSteps -1) return;
        setCurrentIndex((prev) => prev + 1);
      };

 Typescript could be an easy way of writing React.
 Also I am just realising the importance of a README.md File.

 Thank You!



### Continued development
This is still a work in progress project.

This is what I am working on to complete this project:

1.Complete Step 4 (Finishing Up)
2.Style with CSS
3.Work on User Functionality where the user is able to:
4.Form Validation
5.Integrate API


### Useful resources

- [Resource 1](https://www.youtube.com/watch?v=slqn7XJTx6M&t=3209s) - This helped me understand the design using html and css
- [Resource 2](https://www.youtube.com/watch?v=jNZNkmRqVg4&t=793s) - This is helped me get started with the React typescript project

## Author

- GithubRepository - [ndanuu](https://github.com/ndanuu/Multi-Step-Form-React.git)

## Acknowledgments

Unfortunately I did all the work by myself.I would have appreciated some help.
I know some help would have made the work easier and saved on time.
