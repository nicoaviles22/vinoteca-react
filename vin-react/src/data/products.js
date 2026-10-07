export const productDetails = {
  1: { id: 1, name: 'D.V. CATENA', description: 'Chardonnay', image: '/assets/img/3.jpeg' },
  2: { id: 2, name: 'D.V. CATENA', description: 'Cabernet sauvignon', image: '/assets/img/2.jpeg' },
  3: { id: 3, name: 'D.V. CATENA', description: 'Chardonnay', image: '/assets/img/3.jpeg' },
  4: { id: 4, name: 'ACONCAGUA', description: 'Gin tonic "Lime"', image: '/assets/img/5.jpeg' },
  5: { id: 5, name: 'ACONCAGUA', description: 'Handcrafted gin', image: '/assets/img/6.jpeg' },
  6: { id: 6, name: 'ATAMISQUE', description: 'Cabernet sauvignon', image: '/assets/img/7.jpeg' },
  7: { id: 7, name: 'CATALPA', description: 'Malbec', image: '/assets/img/8.jpeg' },
  8: { id: 8, name: 'CATALPA', description: 'Cabernet franc', image: '/assets/img/9.jpeg' },
};

// Se mantiene el orden y los enlaces del HTML original.
export const products = [
  { routeId: 3, ...productDetails[3], thumbnail: '/assets/img/3sm.jpg' },
  { routeId: 2, ...productDetails[2], thumbnail: '/assets/img/2sm.jpg' },
  { routeId: 4, ...productDetails[4], thumbnail: '/assets/img/5sm.jpg' },
  { routeId: 5, ...productDetails[5], thumbnail: '/assets/img/6sm.jpg' },
  { routeId: 6, ...productDetails[6], thumbnail: '/assets/img/7sm.jpg' },
  { routeId: 7, ...productDetails[7], thumbnail: '/assets/img/8sm.jpg' },
  { routeId: 2, ...productDetails[2], thumbnail: '/assets/img/2sm.jpg' },
  { routeId: 8, ...productDetails[8], thumbnail: '/assets/img/9sm.jpg' },
];
