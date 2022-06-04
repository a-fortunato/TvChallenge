# **TvChallenge**
TV app challenge (with React Native) for a job interview

## **User story**
- Two pictures are shown in the screen
- As a user, I want to select one of two pictures on display and clicking on them will display text related to the picture, so that I can know more about each picture.
- When a picture is in focus, then a frame around the picture is shown.
- Given a picture is focused, when I click on it, then text displays underneath.
- Given the picture on the right is focused, when I move the cursor left by pressing the left arrow key, the focus shifts to the picture on the left.
- Given the picture on the left is focused, when I move the cursor right by pressing the right arrow key, the focus shifts to the picture on the right.
- Given there is text underneath the picture, when the focus changes the text is removed.
- Given there is text underneath the picture, when the user presses back/menu, the text is removed.

## **How to run the project**
This task has been tested on an **AndroidTV** emulator (more specifically, AndroidTV 1080p API 30).

It might work on **tvOS** as well, since it makes use of the [`react-native-tvos`](https://github.com/react-native-tvos/react-native-tvos) library, but it hasn't been tried out due to a lack of a MacOS system.

To run this project, clone or download the repo and enter its folder. Install dependencies with `yarn install`, run react native: `yarn react-native start`, open a TV device from Android Studio emulators, and run the project in it: `yarn react-native run-android`.

**So long and thanks for all the fish!**
