const fs = require('fs');

const inputFile = 'quotation_editor_20.html';
const content = fs.readFileSync(inputFile, 'utf-8');

// Find the <style>...</style> block
const styleStartIndex = content.indexOf('<style>');
const styleEndIndex = content.indexOf('</style>') + '</style>'.length;
if (styleStartIndex === -1 || styleEndIndex === -1) {
  console.log("Could not find <style> block");
} else {
  const styleContent = content.substring(styleStartIndex + '<style>'.length, styleEndIndex - '</style>'.length);
  fs.writeFileSync('style.css', styleContent.trim(), 'utf-8');
  console.log("Created style.css");
}

// Find the main <script>...</script> block
const scriptStartIndex = content.lastIndexOf('<script>');
const scriptEndIndex = content.lastIndexOf('</script>') + '</script>'.length;
let scriptContent = '';

if (scriptStartIndex !== -1) {
  scriptContent = content.substring(scriptStartIndex + '<script>'.length, scriptEndIndex - '</script>'.length);
  fs.writeFileSync('script.js', scriptContent.trim(), 'utf-8');
  console.log("Created script.js");
}

// Now replace them in HTML
let htmlContent = content;

// Replace style
htmlContent = htmlContent.substring(0, styleStartIndex) + 
              '<link rel="stylesheet" href="style.css">\n' + 
              htmlContent.substring(styleEndIndex);

// Re-find script start because indices changed
const newScriptStart = htmlContent.lastIndexOf('<script>');
const newScriptEnd = htmlContent.lastIndexOf('</script>') + '</script>'.length;

if (newScriptStart !== -1) {
    htmlContent = htmlContent.substring(0, newScriptStart) + 
                  '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>\n<script src="script.js"></script>' + 
                  htmlContent.substring(newScriptEnd);
}

fs.writeFileSync('index.html', htmlContent, 'utf-8');
console.log("Created index.html");
