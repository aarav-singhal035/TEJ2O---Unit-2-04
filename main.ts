/* Copyright (c) 2020 MTHS All rights reserved * * Created by: Aarav Singhal * Created on: Sep 2025 * This program shows the temperature */

// our variable for temperature in Celsius
let temperatureInCelsius: number





basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A,() => {
    temperatureInCelsius = input.temperature()
    basic.showNumber(temperatureInCelsius)
// Declare the temperature variable at the top
let temp: number;

input.onButtonPressed(Button.A, () => {
    temp = input.temperature()
    basic.showNumber(temp)
})