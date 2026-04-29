const fs = require('fs');

try {
  let content = fs.readFileSync('d:/xxxxx/script.js', 'utf8');

  // Replace the old HTML structure with the new one
  const oldHtml = `            <tr>
              <td class="lbl">대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;표</td>
              <td>\${co.ceo}</td>
              <td class="stamp-box" rowspan="1" style="position:relative;"><img src="images/바론사용인감.png" alt="인감" style="position:absolute;width:64px;height:64px;top:50%;left:50%;transform:translate(-50%, -50%);mix-blend-mode:multiply;opacity:0.9;"></td>
            </tr>`;
            
  const newHtml = `            <tr>
              <td class="lbl">대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;표</td>
              <td colspan="2" style="position:relative;">
                \${co.ceo}
                <img src="images/바론사용인감.png" alt="인감" style="position:absolute;width:64px;height:64px;top:0;right:25px;transform:translateY(-50%);mix-blend-mode:multiply;opacity:0.9;z-index:10;pointer-events:none;">
              </td>
            </tr>`;

  if (content.includes('class="stamp-box"')) {
    // Escape string for simple replace
    content = content.replace(
      /<tr>\s*<td class="lbl">대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;표<\/td>\s*<td>\$\{co\.ceo\}<\/td>\s*<td class="stamp-box".*?<\/td>\s*<\/tr>/,
      newHtml
    );
    fs.writeFileSync('d:/xxxxx/script.js', content, 'utf8');
    console.log('script.js updated.');
  } else {
    console.log('Could not find the target string in script.js.');
  }
} catch (e) {
  console.error('Error:', e.message);
}
