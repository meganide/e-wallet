function formatDate(unformattedDate: string) {
  const date = new Date(unformattedDate);
  const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' });
  return formattedDate;
}

function getVendorIcon(vendorName: string) {
  let path = '/assets/vendor-';
  switch (vendorName) {
    case 'Bitcoin Inc':
      return (path += 'bitcoin.svg');
    case 'Block Chain Inc':
      return (path += 'blockchain.svg');
    case 'Evil Corp':
      return (path += 'evil.svg');
    case 'Ninja Bank':
      return (path += 'ninja.svg');

    default:
      return (path += 'bitcoin.svg');
  }
}

function getBackgroundColor(vendor: string) {
  switch (vendor) {
    case 'Ninja Bank':
      return '#222222';
    case 'Block Chain Inc':
      return '#8B58F9';
    case 'Evil Corp':
      return '#F33355';
    case 'Bitcoin Inc':
      return '#FFAE34';
    default:
      return '#D0D0D0';
  }
}

export { formatDate, getVendorIcon, getBackgroundColor };
