const locale = {
  da: {
    tempHi: "Temperatur",
    tempLo: "Temperatur nat",
    precip: "Nedbør",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NØ', 'NØ', 'Ø-NØ', 'Ø', 'Ø-SØ', 'SØ', 'S-SØ',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  },
  de: {
    tempHi: "Höchsttemperatur",
    tempLo: "Tiefsttemperatur",
    precip: "Niederschlag",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  en: {
    tempHi: "Temperature high",
    tempLo: "Temperature low",
    feels_like: "Feels",
    precip: "Precipitation",
    uPress: "inHg",
    uSpeed: "mph",
    uPrecip: "in",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  es: {
    tempHi: "Temperatura máxima",
    tempLo: "Temperatura mínima",
    precip: "Precipitations",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  fr: {
    tempHi: "Température",
    tempLo: "Température nuit",
    precip: "Précipitations",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  nl: {
    tempHi: "Maximum temperatuur",
    tempLo: "Minimum temperatuur",
    precip: "Neerslag",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-ZO', 'ZO', 'Z-ZO',
      'Z', 'Z-ZW', 'ZW', 'W-ZW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  ru: {
    tempHi: "Температура",
    tempLo: "Температура ночью",
    precip: "Осадки",
    uPress: "гПа",
    uSpeed: "м/с",
    uPrecip: "мм",
    cardinalDirections: [
      'С', 'С-СВ', 'СВ', 'В-СВ', 'В', 'В-ЮВ', 'ЮВ', 'Ю-ЮВ',
      'Ю', 'Ю-ЮЗ', 'ЮЗ', 'З-ЮЗ', 'З', 'З-СЗ', 'СЗ', 'С-СЗ', 'С'
    ]
  },
  sv: {
    tempHi: "Temperatur",
    tempLo: "Temperatur natt",
    precip: "Nederbörd",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  }
};

class WeatherCardChart extends Polymer.Element {

  static get template() {
    console.log("get template");
    return Polymer.html `
      <style>
        ha-icon {
        color: var(--paper-item-icon-color);
        }
        .card {
        padding: 0 18px 18px 18px;
        }
        .main {
        display: flex;
        align-items: center;
        font-size: 60px;
        font-weight: 350;
        margin-top: -10px;
        }
        .main ha-icon {
        --iron-icon-height: 74px;
        --iron-icon-width: 74px;
        margin-right: 20px;
        }
        .main div {
        cursor: pointer;
        margin-top: -11px;
        }
        .feels_like {
        cursor: pointer;
        font-size: 14px;
        }
        .feels_like_sup {
        font-size: 10px;
        }
        .main sup {
        font-size: 32px;
        }
        .summary {
        font-size: 14px;
        margin-left: 20px;
        }
        .attributes {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px 10px 0px;
        }
        .attributes div {
        #text-align: center;
        }
        .conditions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 7px 0px 20px;
        }
        .fcasttooltip {
        position: relative;
        display: inline-block;
        }
        /* Tooltip text */
        .fcasttooltip .fcasttooltiptext {
        visibility: hidden;
        width: 100px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 5px;
        border-radius: 6px;
        /* Position the tooltip text */
        position: absolute;
        z-index: 1;
        bottom: 200%;
        left: 50%;
        margin-left: -50px;
        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;
        }
        /* Show the tooltip text when you mouse over the tooltip container */
        .fcasttooltip:hover .fcasttooltiptext {
        visibility: visible;
        opacity: 1;
        }    
      </style>
      <ha-card header="[[title]]">
        <div class="card">            
          <ha-chart-base hass="[[_hass]]" chart-type="line" data="[[ChartData]]" options="[[ChartOptions]]"></ha-chart-base>
          <div class="conditions">
            <template is="dom-repeat" items="[[forecast]]">
              <div on-mouseover="_tooltipPosition" class="fcasttooltip">
                <div class="fcasttooltiptext">[[getDetailedDescription(item)]]</div>
                <ha-icon style="--mdc-icon-size: 100%;" icon="[[getWeatherIcon(item.condition)]]"></ha-icon>
              </div>
            </template>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      config: Object,
      sunObj: Object,
      tempObj: Object,
      feels_likeObj: Object,
      humidityObj: Object,
      pressureObj: Object,
      option1Obj: Object,
      option2Obj: Object,
      option3Obj: Object,
      mode: String,
      points: Number,
      datasource: String,
      weatherObj: {
        type: Object,
        observer: 'dataChanged'
      }
    };
  }

  constructor() {
    super();
    this.mode = 'daily';
    this.weatherIcons = {
      'clear-night': 'hass:weather-night',
      'cloudy': 'hass:weather-cloudy',
      'fog': 'hass:weather-fog',
      'hail': 'hass:weather-hail',
      'lightning': 'hass:weather-lightning',
      'lightning-rainy': 'hass:weather-lightning-rainy',
      'partlycloudy': 'hass:weather-partly-cloudy',
      'pouring': 'hass:weather-pouring',
      'rainy': 'hass:weather-rainy',
      'snowy': 'hass:weather-snowy',
      'snowy-rainy': 'hass:weather-snowy-rainy',
      'sunny': 'hass:weather-sunny',
      'windy': 'hass:weather-windy',
      'windy-variant': 'hass:weather-windy-variant',
      'exceptional': 'hass:weather-sunny'
    };
    this.cardinalDirectionsIcon = [
      'mdi:arrow-down', 'mdi:arrow-bottom-left', 'mdi:arrow-left',
      'mdi:arrow-top-left', 'mdi:arrow-up', 'mdi:arrow-top-right',
      'mdi:arrow-right', 'mdi:arrow-bottom-right', 'mdi:arrow-down'
    ];
  }

  setConfig(config) {
    this.config = config;
    this.title = config.title;
    this.mode = config.mode;
    this.datasource = config.datasource ? "NWS" : "Default";
    this.points = typeof (config.points) === 'number' ? config.points : 9;
    if (!config.weather) {
      throw new Error('Please define "weather" entity in the card config');
    }
    console.log("setConfig "+config.weather);
  }

  set hass(hass) {
    this._hass = hass;
    this.lang = this._hass.selectedLanguage || this._hass.language;
    this.weatherObj = this.config.weather in hass.states ? hass.states[this.config.weather] : null;
    this.sunObj = 'sun.sun' in hass.states ? hass.states['sun.sun'] : null;
    this.tempObj = this.config.temp in hass.states ? hass.states[this.config.temp] : null;
    this.feels_likeObj = this.config.feels_like in hass.states ? hass.states[this.config.feels_like] : null;
    this.humidityObj = this.config.humidity in hass.states ? hass.states[this.config.humidity] : null;
    this.pressureObj = this.config.pressure in hass.states ? hass.states[this.config.pressure] : null;
    this.option1Obj = this.config.option1 in hass.states ? hass.states[this.config.option1] : null;
    this.option2Obj = this.config.option2 in hass.states ? hass.states[this.config.option2] : null;
    this.option3Obj = this.config.option3 in hass.states ? hass.states[this.config.option3] : null;
    this.forecast = this.weatherObj.attributes.forecast.slice(0, this.points);
    this.windBearing = this.weatherObj.attributes.wind_bearing;
    //console.log("hass "+this.config.weather + " " + this.datasource);
  }

  dataChanged(obj) {
    
    this.drawChart();
  }

  roundNumber(number, decimals = 0) {
    return Number(Math.round(number + 'e' + decimals) + 'e-' + decimals);
  }

  ll(str) {
    if (locale[this.lang] === undefined)
      return locale.en[str];
    return locale[this.lang][str];
  }

  computeTime(time) {
    const date = new Date(time);
    return date.toLocaleTimeString(this.lang, {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  computeWind(speed) {
    var calcSpeed = Math.round(speed * 1000 / 3600);
    //return calcSpeed;
    return speed;
  }

  getCardSize() {
    return 4;
  }

  getUnit(unit) {
    return this._hass.config.unit_system[unit] || '';
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  getWindDirIcon(degree) {
    return this.cardinalDirectionsIcon[parseInt((degree + 22.5) / 45.0)];
  }

  getWindDir(deg) {
    if (locale[this.lang] === undefined)
      return locale.en.cardinalDirections[parseInt((deg + 11.25) / 22.5)];
    return locale[this.lang]['cardinalDirections'][parseInt((deg + 11.25) / 22.5)];
  }

  getSummary(Obj) {
    return this.getDetailedDescription(Obj.attributes.forecast[0]);
  }

  getDetailedDescription(item) {
    var title;
    var tooltip;
    var daynight;
    var data = new Date(item.datetime).toLocaleDateString(locale, {
      weekday: 'short'
    });
    var time = new Date(item.datetime).toLocaleTimeString(locale, {
      hour: 'numeric'
    });
    if (this.mode == 'hourly') {
      title = time;
    } else {
      title = data
    }
    if (item.daytime) {
      daynight = 'day';
    } else {
      daynight = 'night';
    }
    if (this.datasource == "NWS") {
      tooltip = title + ' ' + daynight + ': ' + item.detailed_description;
    } else {
    tooltip = title + ': ' + item.condition.charAt(0).toUpperCase() + item.condition.slice(1) + ', ' + this.ll('tempHi') + ' ' + item.temperature + ' ' + this.ll('tempLo') + ' ' + item.templow + ' ' + this.ll('precip') + ' ' + item.precipitation_probability;
    }
    return tooltip;
  }

  drawChart() {
  console.log("drawchart "+this.config.weather+" "+this.datasource);
    if (typeof this.weatherObj.attributes === 'undefined') {
      return [];
    }
    if (typeof this.weatherObj.attributes.forecast === 'undefined') {
      return [];
    }
    var data = this.weatherObj.attributes.forecast.slice(0, this.points);
    var locale = this._hass.selectedLanguage || this._hass.language;
    var tempUnit = this._hass.config.unit_system.temperature;
    var lengthUnit = this._hass.config.unit_system.length;
    var precipUnit = lengthUnit === 'km' ? this.ll('uPrecip') : 'in';
    var mode = this.mode;
    var i;
    var labels = [];
    var tempHigh = [];
    var tempLow = [];
    var precip = [];
    var sMin = 100;
    var sMax = 0;
    for (i = 0; i < data.length; i++) {
      var d = data[i];
      var xd = new Date(d.datetime);
    
      if (this.datasource == "NWS") {

        labels.push(xd);
        if (d.daytime) {
          tempHigh.push(d.temperature);
          tempLow.push(null);
          sMin = Math.min(sMin, d.temperature);
          sMax = Math.max(sMax, d.temperature);
        } else {
          tempHigh.push(null);
          tempLow.push(d.temperature);
          sMin = Math.min(sMin, d.temperature);
          sMax = Math.max(sMax, d.temperature);
        }
      } else {
        labels.push(xd);
        tempHigh.push(d.temperature);
        tempLow.push(d.templow);
        sMin = Math.min(sMin, d.temperature);
        sMax = Math.max(sMax, d.temperature);
        sMin = Math.min(sMin, d.templow);
        sMax = Math.max(sMax, d.templow);
      }
      precip.push(d.precipitation_probability);
    }
    var style = getComputedStyle(document.body);
    var textColor = style.getPropertyValue('--primary-text-color');
    var dividerColor = style.getPropertyValue('--divider-color');
    this.ChartData = {
      labels: labels,
      datasets: [{
          label: this.ll('tempHi'),
          type: 'line',
          data: tempHigh,
          yAxisID: 'TempAxis',
          borderColor: '#c9c9c9',
          backgroundColor: '#c9c9c9',
          tension: 0.4,
          spanGaps: true,
          pointHitRadius: 5.0,
          tooltip: {
            callbacks: {
              title: function(context) {
                var label = context.dataset.label || '';
                return label += ': ' + context.parsed.y + tempUnit;
              },
              label: function(context) {
                var label = context.dataset.label || '';
                return label += ': ' + context.parsed.y + tempUnit;
              }
            }
          }
        },
        {
          label: this.ll('tempLo'),
          type: 'line',
          data: tempLow,
          yAxisID: 'TempAxis',
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          tension: 0.4,
          spanGaps: true,
          pointHitRadius: 10.0,
          tooltip: {
            callbacks: {
              label: function(context) {
                var label = context.dataset.label || '';
                return label += ': ' + context.parsed.y + tempUnit;
              }
            }
          }
        },
        {
          label: this.ll('precip'),
          type: 'bar',
          data: precip,
          yAxisID: 'PrecipAxis',
          borderColor: '#44739e',
          backgroundColor: '#44739e',
          tooltip: {
            callbacks: {
              label: function(context) {
                var label = context.dataset.label || '';
                return label += ': ' + context.parsed.y + '%';
              }
            }
          }
        }
      ]
    };
    this.ChartOptions = {
      animation: false,
      plugins: {
        tooltip: {
          callbacks: {
            title: function(context) {
              return new Date(context[0].label).toLocaleDateString(locale, {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              });
            }
          }
        }
      },
      interaction: {
        mode: 'point'
      },
      scales: {
        x: {
          position: "bottom",
          grid: {
            offset: false,
          },
          ticks: {
            autoSkip: false,
            autoSkipPadding: 2,
            maxRotation: 0,
            major: {
              enabled: true,
            },
            callback: function(val, index) {
              var data = new Date(this.getLabelForValue(val)).toLocaleDateString(locale, {
                weekday: 'short'
              });
              var time = new Date(this.getLabelForValue(val)).toLocaleTimeString(locale, {
                hour: 'numeric'
              });
              if (mode == 'hourly') {
                return time;
              }
              return data;
            },
          },
        },
        TempAxis: {
          position: 'left',
          suggestedMin: sMin - 2,
          suggestedMax: sMin + 2,
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            display: true,
            color: textColor,
          },
        },
        PrecipAxis: {
          position: 'right',
          min: 0,
          max: 100,
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        }
      },
    };
  }
  
  _fire(type, detail, options) {
    const node = this.shadowRoot;
    options = options || {};
    detail = (detail === null || detail === undefined) ? {} : detail;
    const e = new Event(type, {
      bubbles: options.bubbles === undefined ? true : options.bubbles,
      cancelable: Boolean(options.cancelable),
      composed: options.composed === undefined ? true : options.composed
    });
    e.detail = detail;
    node.dispatchEvent(e);
    return e;
  }

  _tempAttr() {
    this._fire('hass-more-info', {
      entityId: this.config.temp
    });
  }
  _feels_likeAttr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.feels_like
    });
  }
  _humidityAttr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.humidity
    });
  }
  _pressureAttr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.pressure
    });
  }
  _option1Attr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.option1
    });
  }
  _option2Attr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.option2
    });
  }
  _option3Attr(ev) {
    ev.stopPropagation();
    this._fire('hass-more-info', {
      entityId: this.config.option3
    });
  }

  _weatherAttr() {
    this._fire('hass-more-info', {
      entityId: this.config.weather
    });
  }
  _tooltipPosition(ev) {
    var el = ev.currentTarget;
    var elChild = ev.currentTarget.firstElementChild;
    var elParent = ev.currentTarget.parentNode;
    var offset = elParent.getBoundingClientRect().left - el.getBoundingClientRect().left;
    elChild.style.marginLeft = offset + "px";
    elChild.style.left = "0px";
    elChild.style.width = elParent.clientWidth + "px";
  }


}

customElements.define('weather-card-chart', WeatherCardChart);
