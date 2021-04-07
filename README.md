# Pomodoro Timer

> The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. [Read more](https://en.wikipedia.org/wiki/Pomodoro_Technique)

## About
--------
Based on [Mayk Brito](https://github.com/maykbrito)'s playlist, "[Insta post reminder](https://www.youtube.com/watch?v=Mhd6x2Z-F_w&list=PLeLKux5eT3kbD0iUjYCHmea57EGQSphc9)", I decided to create a Pomodoro Timer`s desktop application, using JavaScript, NodeJS and Electron. 

The final result was a lot of learning and a really cool application.


## Requirements
---------------
* NodeJS
    - Can you install NodeJS running the following on Linux terminal
        ``` bash
        sudo apt install nodejs
        ```

## Installation
------------------------------------------------------------

1. Clone repository
    ``` bash
    git clone https://github.com/MateusHSS/pomodoro_timer_electron.git
    ```

2. Open project folder
    ``` bash
    cd pomodoro_timer_electron
    ```

3. Install dependencies
    ``` bash
    npm i
    ```

4. Build the package
    ``` bash
    npm run build
    ```

6. Install electron-installer-debian
    ``` bash
    npm install electron-installer-debian
    ```

5. Open the package`s folder
    ``` bash
    cd packages
    ```

7. Create .deb package
    ``` bash
    electron-installer-debian --src <generated_file_name> --dest deb_files --arch <system_arch>
    ```

    This can take a long time, wait for this.

8. Open deb_files folder
    ``` bash
    cd deb_files
    ```

9. Install .deb
    ``` bash
    sudo dpkg -i <generated_file>
    ```

10. Search "Pomodoro Timer" in your apps list and execute.

## Usage
---------------------------------
Before installation, execute the application, and pomodoro`s icon is appear in your shortcut icons like this (left icon):

![shortcut-icons-img](./assets/tray-bar.png "Shortcut icons")

Clicking on the icon, the application will open a small screen, where it will be possible to view the clock:

![app-screen-img](./assets/app-screen.png "App screen")

Enjoy the app and good jobs... or studies :smiley: