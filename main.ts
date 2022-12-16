input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(50, 50)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 60)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
