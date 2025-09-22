/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aarav Singhal
 * Created on: Sep 2025
 * This program shows the temperature
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)


// comment
input.onButtonPressed(Button.A,() => {
    let temp = input.temperature()
    basic.showNumber(temp)
})