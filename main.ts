input.onButtonPressed(Button.A, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 4)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 180)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 6)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
