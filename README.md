![nws](https://user-images.githubusercontent.com/6001710/93689060-e5775f00-fa98-11ea-9f9b-fb2ff13a7a37.png)

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

| Name    | Optional | Description                                                                                        |
| ------- | -------- | -------------------------------------------------------------------------------------------------- |
| type    | **No**   | Should be `'custom:weather-card-chart'`                                                            |
| title   | **No**   | Card title                                                                                         |
| weather | **No**   | An entity_id with the `weather` domain                                                             |
| temp    | Yes      | Entity_id of the temperature sensor. Show temperature value from sensor instead                    |
| mode    | Yes      | Default value: `daily`. Set mode to `hourly` to display hours instead weekdays on the chart        |
