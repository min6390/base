// Dùng để convert lại url để gọi PresignURL lấy video or mp3
export function urlValidation(x: any) {
  if (x) {
    const b = x.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    );
    return String(b).replace(
      'https://s3-ap-southeast-1.amazonaws.com/obee.staging/',
      '',
    );
  }
}
export function getHTML(x: string) {
  if (x) {
    const b = x.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    );
    return String(b);
  }
}
