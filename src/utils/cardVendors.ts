const cardVendors = [
  {
    vendor: 'Bitcoin Inc',
    iconPathUrl: '/assets/vendor-bitcoin.svg',
    cardNumber: '1234 6788 1232 9932',
    cardholderName: 'Renas Hassan',
    validThru: '12/22',
    backgroundColor: '',
  },
  {
    vendor: 'Block Chain Inc',
    iconPathUrl: '/assets/vendor-blockchain.svg',
    cardNumber: '1234 6788 1232 9932',
    cardholderName: 'Renas Hassan',
    validThru: '12/22',
  },
  {
    vendor: 'Evil Corp',
    iconPathUrl: '/assets/vendor-evil.svg',
    cardNumber: '1234 6788 1232 9932',
    cardholderName: 'Renas Hassan',
    validThru: '12/22',
  },
  {
    vendor: 'Ninja Bank',
    iconPathUrl: '/assets/vendor-ninja.svg',
    cardNumber: '1234 6788 1232 9932',
    cardholderName: 'Renas Hassan',
    validThru: '12/22',
  },
];

const newCard = {
  iconPathUrl: '/assets/chip-light.svg',
  cardNumber: 'XXXX XXXX XXXX XXXX',
  cardholderName: 'firstname lastname',
  validThru: 'mm/yy',
};

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

export { cardVendors, newCard, getBackgroundColor };
