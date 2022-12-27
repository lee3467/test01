input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.freestyle(0, 0)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.9)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 95)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 6)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 160)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.9)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 100)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2.3)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 60)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2.8)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("E A G B G F E B ", 120)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
