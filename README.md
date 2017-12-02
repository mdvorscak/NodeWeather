# NodeWeather
Weather library for node.js
Uses Google location services and forecast.io to provide the weather

To use the weatherService api:
1) Sign up for an API Key at http://forecast.io/
2) Create a file called API_KEYS.json and follow the format of the example in example.API_KEYS

The cli tool is used to get the current weather for a given location. Below are the valid options

```
--help, -h
        Displays help information about this script
        'CLI.js -h' or 'CLI.js --help'

--location, -l
        Location to get the weather for. If omitted, your current location (of your IP) will be used.
        'CLI --location=Chicago,IL' or 'script -l 60606'

--version
        Displays version info
        CLI.js --version
```