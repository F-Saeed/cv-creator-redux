# CV Creator

A simple CV creation webapp created using **React** and **Redux** that allows users to easily create a simple CV by entering their information in the form given, and then downloading the CV as a PDF when they are finished.

## Table of Contents

- [General Information](#general-information)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [Setup](#setup)
- [Deployment](#deployment)

## General Information

This webapp creates a simple cv according to the information the user has entered. This version of CV Creator is built on functional React and Redux.

## Usage

- The CV Creator webapp is simple to use
- User enters their general information and afterwards clicks on add information to add the general information enterted to their resume.
- User enters their educational information and experience information according to each institution individually.
  - after entering all the required information, user will click on _Add Education_/_Add Experience_ buttons to add that information to their CV.
  - each institution's information will have to added one by one
  - each institution's information will be displayed in the preview section and on their final cv on a _first-come-first-serve_ basis.
- After finishing creating their CV, the user can download their CV as a pdf by clicking on the _Download PDF_ button at the end of the page.

## Technologies used

- React
- Redux
- JavaScript
- Fontawesome
- uniqid (JavaScript package)
- SASS
- HTML

## Setup

- Clone the project to your directory
- open the newly created project folder
- open up terminal in this folder and write the following commands:
  ```
  $ yarn install
  $ yarn start
  ```
- this will open a browser tab displaying the project.

## Deployment

- [Link](https://cv-creator-720.web.app/)
