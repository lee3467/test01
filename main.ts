input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.freestyle(0, 0)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.8)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 100)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 6.1)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 170)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 3.6)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 80)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2.1)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 70)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2.8)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("E A G B G F E B ", 120)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
