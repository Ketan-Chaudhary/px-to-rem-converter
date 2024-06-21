
# px-to-rem-converter

Converts pixel (px) values to rem units in CSS files using PostCSS.

## Installation

Ensure you have Node.js installed. Then, install the package globally or locally:

```bash
npm install -g px-to-rem-converter
```
or
```bash
npm install px-to-rem-converter --save-dev
```

## Usage

### Command-line Interface (CLI)

To convert `px` values to `rem` units in a CSS file:

```bash
px-to-rem-converter <input-file> [root-value]
```

Example:
```bash
px-to-rem-converter styles.css 16
```

- `<input-file>`: Path to the CSS file you want to convert.
- `[root-value]` (optional): Root font size in pixels (default is 16).

### API

You can also use the package programmatically:

```javascript
const fs = require('fs');
const { convertPxToRem } = require('px-to-rem-converter');

const inputFile = 'styles.css';
const rootValue = 16;

const css = fs.readFileSync(inputFile, 'utf8');
const convertedCss = convertPxToRem(css, rootValue);

fs.writeFileSync('converted-styles.css', convertedCss);
console.log('Conversion complete!');
```

## Configuration

The conversion uses a PostCSS plugin (`postcss-pxtorem`) under the hood. You can customize its behavior by modifying the `postcss.config.js` file.

```javascript
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }
    }
};
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

### Notes:
- Replace `styles.css` with your actual CSS file path.
- Customize the `postcss.config.js` as per your project's requirements.

