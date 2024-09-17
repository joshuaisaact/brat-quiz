# brat or not brat

https://joshuaisaact.github.io/bratQuiz/

# a 'brat summer' trivia website

**brat or not**, a trivia game loosely based on charli xcx's "brat summer" aesthetic. think you know what's brat and what's not? it’s a pretty simple game — just make some quick decisions on random pop culture, lifestyle, and trends. some of it fits the brat vibe, some of it doesn’t. you get the idea.

refactored using typescript into react.

##### features

- **start the game**: hit the **start** button if you feel like it. you'll get a bunch of random questions.
- **brat or not**: you'll see some noun (could be a celebrity, lifestyle thing, whatever). just decide if it’s **brat** or **not brat**.
- **score tracking**: it keeps track of your score, if you care about that sort of thing.
- **play again**: when it's over, you can start again. or don’t. it’s up to you.

##### how to play

1. **start**: click `start` to begin, if you're ready for that.
2. **make your guess**: for each item, just pick **brat** or **not brat**. not much to it.
3. **see your result**: you'll find out if you're right or wrong. your score updates, if that matters.
4. **next question**: it moves to the next question automatically. you just keep going until it's done.
5. **final score**: at the end, you’ll see your score. if you want, you can play again, or not.

##### game aesthetic

this game has a **brat summer** vibe, i guess. it’s got some attitude, bold colors, and a laid-back style kind of inspired by charli xcx's whole rebellious thing. expect some visuals and prompts. not much else to say.

### game elements

- **nouns**: random stuff like items, trends, or people that are either "brat" or "not brat." you’ll see things like "bic lighters," "taylor swift," or "spicy margs" — and you’ll decide if they’re brat or not.
- **brat**: things that somehow fit the brat summer mood.
- **not brat**: things that don’t really fit in with that vibe.

##### code overview

#### javascript

the game runs on basic javascript, using straightforward DOM manipulation to show questions, take user input, and keep the game going:

- **question array**: all the questions and answers are just stored in an array of objects.
- **event listeners**: buttons are tied to event listeners for handling guesses, moving the game along, and restarting.
- **dynamic updates**: content and background colors change based on whether the guess is right or wrong. pretty simple.

#### css

the design is minimal, styled with CSS to give it a **brat summer** vibe. colors shift during the game — green for correct answers, red for wrong ones.

#### html

the HTML is clean and simple, with a layout that includes buttons and text areas. everything changes based on how the game progresses.

## Installation & Setup

To run this game locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/brat-or-not.git
   ```

2. Navigate to the project folder:

   ```bash
   cd brat-or-not
   ```

3. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

   or use Live Server in VSCode to run the project.

##### future enhancements

- **more questions**: might add more questions at some point for variety, if that matters.
- **voting on answers**: could let users vote on whether they agree with the answers. not sure how much that would change things.
- **create your own brat quiz**: maybe allow users to make their own brat quizzes. could be fun, or not.

## license

this project is licensed under the MIT license.

---
