export function removeStyle(html: string, isHeader: boolean) {
  if (!html || html.length === 0) {
    return '<p>Null</p>';
  }
  const b = [];
  let position = 0;
  let position2 = 0;
  do {
    position = html.indexOf('style=', position);
    if (position >= 0) {
      position2 = html.indexOf('>', position + 4);
      b.push(html.substring(position, position2));
      position = position + 4;
    }
  } while (position >= 0);
  let c = html;
  b.map(item => {
    c = c.replace(item, '');
  });
  if (isHeader) {
    const positionP1 = c.indexOf('<p', 0);
    const positionP2 = c.indexOf('</p', 3);
    const header = c.substring(positionP1, positionP2 + 4);
    position = 1;
    position2 = 0;
    let tempheader = '';
    do {
      position = header.indexOf('<', position);
      position2 = header.indexOf('>', position2);

      if (header.substring(position2 + 1, position).length > 0) {
        tempheader = header.substring(position2 + 1, position);
        position = -1;
      } else {
        position = position + 1;
        position2 = position2 + 1;
      }
    } while (position >= 0);
    c = c.replace(header, `<header>${tempheader}</header>`);
  }
  c = c
    .replace(new RegExp('<br/>', 'g'), '')
    .replace(new RegExp('<br />', 'g'), '')
    .replace(new RegExp('</coccocgrammar>', 'g'), '')
    .replace(new RegExp('&nbsp;', 'g'), ' ')
    .replace(new RegExp('<br>', 'g'), '')
    .replace(
      new RegExp('<div id="eJOY__extension_root" style="all: unset;">', 'g'),
      '',
    )
    .replace(new RegExp('</p><div id="eJOY__extension_root" ></div>', 'g'), '')
    .replace(new RegExp('<p></p>', 'g'), '')
    .replace(new RegExp('<span >', 'g'), '<span>')
    .replace(new RegExp('<p >', 'g'), '<p>')
    .replace(new RegExp('<coccocgrammar>', 'g'), '')
    .replace(new RegExp('<p><span><span></span></span></p>', 'g'), '')
    .replace(new RegExp('<p><span><span> </span></span></p>', 'g'), '')
    .replace(new RegExp('<span></span>', 'g'), '')
    .replace(new RegExp('<p></p>', 'g'), '')
    .replace(new RegExp('<em> </em>', 'g'), '');
  c = c.trim();
  return c;
}
