export function numberWithCommas(x: {toString: () => string}) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
  }
}
export function numberOnly(x: {toString: () => string}) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
