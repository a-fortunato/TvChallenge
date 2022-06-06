# **TvChallenge**
TV app challenge (with React Native) for a job interview.

## **Task description (User story)**
- Two pictures are shown in the screen
- As a user, I want to select one of two pictures on display and clicking on them will display text related to the picture, so that I can know more about each picture.
- When a picture is in focus, then a frame around the picture is shown.
- Given a picture is focused, when I click on it, then text displays underneath.
- Given the picture on the right is focused, when I move the cursor left by pressing the left arrow key, the focus shifts to the picture on the left.
- Given the picture on the left is focused, when I move the cursor right by pressing the right arrow key, the focus shifts to the picture on the right.
- Given there is text underneath the picture, when the focus changes the text is removed.
- Given there is text underneath the picture, when the user presses back/menu, the text is removed.

## **Implementing the app**
This task has been tested on an **AndroidTV** emulator (more specifically, AndroidTV 1080p API 30 in a Linux system) and on an **Apple TV** simulator (in a remote MacOS system). Sadly, I haven't yet been able to make the android build using the Mac system due to this error:
```
> Task :react-native-gradle-plugin:compileKotlin
'compileJava' task (current target is 1.8) and 'compileKotlin' task (current target is 11) jvm target compatibility should be set to the same Java version.
```
I thought it might have to do with the new architecture setup that I enabled setting up the [`react-native-tvos`](https://github.com/react-native-tvos/react-native-tvos) library in MacOS for the tvOS system, but it's probably due to the fact that the JDK version needed to be upgraded to Java 11 and I didn't have admin permissions to do that in the remote MacOS system that I used for adapting the app development to tvOS.

## **How to run it**
To run this project, clone or download the repo and enter its folder.
* Install dependencies: `yarn`
* Run react native: `yarn react-native start`

### **AndroidTV** (tested in a Linux system; didn't build in the MacOS system I had access to)
* (Create and) Open an AndroidTV emulator from Android Studio's Device Manager
* Build and execute the app: `yarn react-native run-android`

### **tvOS** (tested in a remote MacOS system)
It's important to enable the new RN architecture before installing the Pods.
* For this, execute `export RCT_NEW_ARCH_ENABLED=1` (more detailed info [here](https://github.com/react-native-tvos/react-native-tvos#react-native-new-architecture-fabric-support))
* Enter the `ios` folder and `pod install`
* Go back to the root folder of the app and run it:

  `yarn react-native run-ios --simulator "Apple TV" --scheme "TvChallenge-tvOS"`


This should be enough to test the app. :)

## **Next steps / Future improvements**
There are always ways to better an app and to learn from our decisions and mistakes, so here arere some things that I would do next to make it look better!
* Testing the app in the different TVs I realised that it's not very well adapted to different resolutions (in AndroidTV, images are bigger, centered and the text is bigger as well, but in Apple TV everything look smaller --bigger resolution even though both are supposed to be 1080p-- making it feel that the items could be distributed better), so that could be a great next step: To implement and take care of the responsive side.
* Add a banner! (it's needed to pass the Android App Quality anyway :P)
* Better Fonts. I think they can be prettier and less basic! (It might even be nice to have a small fading animation when the text appears/disappears :thinking:)
* And of course: Add support to Web, Tizen and webOS through `react-native-web`.

### **About selected shows' data**
The images and texts added to this challenge do not belong to me, they belong to their respectives tv shows ([Crazy Ex-Girlfriend](https://www.imdb.com/title/tt4094300/) and [Galavant](https://www.imdb.com/title/tt3305096/)). They are used for recreational purposes only and with no profitable intentions in mind.

**So long and thanks for all the fun!**
