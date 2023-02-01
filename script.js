

var options = {
  "chart": {
      "animations": {
          "enabled": false,
          "easing": "swing"
      },
      "background": "#FFFFFF",
      "dropShadow": {
          "enabled": true,
          "left": 4,
          "color": "#D2921C"
      },
      "foreColor": "#3A3C3D",
      "fontFamily": "Roboto",
      "height": 250,
      "id": "p4RnL",
      "toolbar": {
          "show": false
      },
      "type": "bar",
      "width": 400
  },
  "plotOptions": {
      "bar": {
          "distributed": true,
          "borderRadius": 10
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "colors": [
      "#2b908f",
      "#f9a3a4",
      "#90ee7e",
      "#fa4443",
      "#69d2p7",
      "#2b908f",
      "#f9a3a4",
      "#90ee7e",
      "#43FA5E"
  ],
  "dataLabels": {
      "enabled": false,
      "style": {
          "fontWeight": 700
      }
  },
  "grid": {
      "padding": {
          "right": 25,
          "left": 15
      }
  },
  "legend": {
      "fontSize": 14,
      "offsetY": 0,
      "markers": {
          "shape": "square",
          "size": 8
      },
      "itemMargin": {
          "vertical": 0
      }
  },
  "series": [
      {
          "name": "Column",
          "data": [
              {
                  "x": "Item 1 ygfty t f ef2ef2ef ef4fr3fffffffffff  efwe3",
                  "y": 10
              },
              {
                  "x": "Item 2",
                  "y": 20
              },
              {
                  "x": "Item 3",
                  "y": 30
              },
              {
                  "x": "Item 4",
                  "y": 40
              },
              {
                  "x": "oiojsoi ",
                  "y": 10
              },
              {
                  "x": "fewf",
                  "y": 10
              },
              {
                  "x": "fcwvcw",
                  "y": 10
              },
              {
                  "x": "wverw",
                  "y": 10
              },
              {
                  "x": "vwwv",
                  "y": 10
              }
          ]
      }
  ],
  "tooltip": {
      "shared": false,
      "intersect": true
  },
  "xaxis": {
      "labels": {
          "trim": true,
          "style": {}
      },
      "tickPlacement": "between",
      "title": {
          "style": {
              "fontWeight": 700
          }
      },
      "tooltip": {
          "enabled": false
      }
  },
  "yaxis": {
      "labels": {
          "style": {}
      },
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "theme": {
      "palette": "palette5"
  }
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();