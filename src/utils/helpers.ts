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

export { formatDate, getVendorIcon };
