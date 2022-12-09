input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(0, 0)
    RingbitCar.freestyle(0, 0)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
