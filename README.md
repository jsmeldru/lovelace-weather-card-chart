Note: HA 2021-7-6 updated chartjs to 3.x which had breaking changes.

![nws](https://github.com/fancygaphtrn/lovelace-weather-card-chart/blob/master/Climacell.PNG)

## Configuration

Copy `weather-card-chart.js` from this repository into your `config/www` directory first.

Add a reference to the copied file:
```yaml
# Example Lovelace UI config entry
resources:
- type: module
  url: /local/weather-card-chart.js
```
Then you can add the card to the view:
```yaml
# Example Lovelace UI config entry
  - type: 'custom:weather-card-chart'
    title: Weather
    weather: weather.openweathermap
```

#### Configuration variables:

| Name       | Optional | Description                                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| type       | **No**   | Should be `'custom:weather-card-chart'`                                                            |
| title      | **No**   | Card title                                                                                         |
| weather    | **No**   | An entity_id with the `weather` domain                                                             |
| temp       | Yes      | Entity_id of the temperature sensor. Show temperature value from sensor instead                    |
| mode       | Yes      | Default value: `daily`. Set mode to `hourly` to display hours instead weekdays on the chart        |
| points     | Yes      | Default value: 9. Number of data points to display in the chart                                    |
| feels_like | Yes      | Entity_id of the feels like sensor. Add under temp                                                 |
| humidity   | Yes      | Entity_id of the humitiy sensor.                                                                   |
| pressure   | Yes      | Entity_id of the pressure sensor.                                                                  |
| option1    | Yes      | Entity_id of the optional sensor.                                                                  |
| option2    | Yes      | Entity_id of the optional sensor.                                                                  |
| option3    | Yes      | Entity_id of the optional sensor.                                                                  |
| datasource | Yes      | Set to NWS to support the NWS integration. NWS has a none standard data structure.  Omit for others|

feels_like
humidity: 
pressure: 
option1: s
option2: s
option3: s
