input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.freestyle(0, 0)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.9)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 6.5)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 150)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 60)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
