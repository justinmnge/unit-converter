# Unit Converter

A simple web app that takes one number and converts it across three measurement categories at once: length, volume, and mass. Every result is rounded to 3 decimal places and runs in both directions. A light mode and dark mode button lets you pick the theme you prefer.

<p float="center">
  <img width="933" height="919" alt="Image-dark" src="https://github.com/user-attachments/assets/d0d72136-cbeb-454c-899d-e5f4a0d4859b" style="width: 48%" />
  <img width="937" height="911" alt="Image-light" src="https://github.com/user-attachments/assets/372f0eab-63cc-4c8f-9dac-0c77d6abeb89" style="width: 48%"/>
</p>

**Live site:** <https://unit-converter-justinmnge.netlify.app/>

## Features

- One number input and one Convert button
- Three conversions shown from a single input
- Two way results for each category
- Results rounded to 3 decimal places
- Light mode and dark mode button for different theme preferences
- Publicly hosted on Netlify, nothing to install

## Conversions

**Length (Meters and Feet)**

- Meters to feet
- Feet to meters

**Volume (Liters and Gallons)**

- Liters to gallons
- Gallons to liters

**Mass (Kilograms and Pounds)**

- Kilograms to pounds
- Pounds to kilograms

## How It Works

1. Enter a number in the input field.
2. Click the **Convert** button.
3. The app displays all six results, grouped under Length, Volume, and Mass.
4. Use the theme button at any time to switch between light mode and dark mode.

The same number is used as the starting value for every conversion. For example, entering `10` produces:

- Length: 10 meters = 32.808 feet, and 10 feet = 3.048 meters
- Volume: 10 liters = 2.642 gallons, and 10 gallons = 37.854 liters
- Mass: 10 kilograms = 22.046 pounds, and 10 pounds = 4.536 kilograms

## Conversion Factors

- 1 meter = 3.28084 feet
- 1 foot = 0.3048 meters
- 1 liter = 0.264172 US gallons
- 1 US gallon = 3.78541 liters
- 1 kilogram = 2.20462 pounds
- 1 pound = 0.453592 kilograms

Gallons are US liquid gallons, not imperial gallons. Rounding to 3 decimal places happens only on the final displayed value, so precision is not lost between steps.

## Tech Stack

Replace this section with what you actually used, for example:

<p align="left">
  <img src="https://skillicons.dev/icons?i=html">&nbsp;
  <img src="https://skillicons.dev/icons?i=css">&nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://skillicons.dev/icons?i=javascript"></a>&nbsp;
</p>

## Run Locally

1. Clone the repository.
2. Open `index.html` in your browser.

## Deployment

The site is hosted on Netlify and publicly accessible. Netlify rebuilds and redeploys automatically whenever changes are pushed to the connected repository branch.

## Author

Built as a solo project by [Justin Monge](https://github.com/justinmnge).
