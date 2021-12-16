input.onButtonPressed(Button.A, function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "IN5I4ESOYKQ4Q2I7",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
})
ESP8266ThingSpeak.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"HUAWEI Y5 2019",
"b582058c4d86"
)
