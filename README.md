# Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Overview

### My Progress

Users are be able to:
Created React Components that allow the user to:
Fill in the Personal Info Form and Submit (Next Step)
Go to Select Your Plan page and Select a plan
Can go back to the Previous page or Submit(Confirm)
Go to Pick Add Ons and Pick Add Ons and Submit



### Built with
-HTML
-CSS
-React Typescript

## Getting Started
To get a local copy up and running follow these simple example steps.

1.Create a folder on your computer
2.Open the folder with Vs Code
3.Open Vs Code Terminal
4.Clone the Repo    (git clone) https://github.com/ndanuu/Multi-Step-Form-React.git
5.Run npm Install (To Install the Packages)
6.Run npm i --save-dev typescript to install typescript
8.Cd into the folder multi-step-form-react
7.Run npm run dev (to see the project on browser)


### Screenshot
./assets/images/PersonalInfo.jpg
./assets/images/Selectplan.jpg
./assets/images/PickAddOns.jpg


### Links
- Solution URL: https://github.com/ndanuu/Multi-Step-Form-React.git



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
3.Work on User Functionality where the user is able to:Form Validation
4.Integrate API


### Useful resources

- [Resource 1] https://www.youtube.com/watch?v=slqn7XJTx6M&t=3209s - This helped me understand the design using html and css
- [Resource 2] https://www.youtube.com/watch?v=jNZNkmRqVg4&t=793s - This is helped me get started with the React typescript project

## Author

- GithubRepository - [ndanuu] https://github.com/ndanuu/Multi-Step-Form-React.git

## Acknowledgments

Unfortunately I did all the work by myself.I would have appreciated some help.
I know some help would have made the work easier and saved on time.
