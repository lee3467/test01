input.onButtonPressed(Button.A, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 4.3)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 150)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 5.5)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 240)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.5)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 120)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
