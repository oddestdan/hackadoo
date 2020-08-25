let beApiUrl = 'https://hackadoo-be.herokuapp.com/api';
let cvApiUrl = 'https://hackadoo-cv.herokuapp.com/api';

if (process.env.NODE_ENV === 'development') {
  beApiUrl = 'http://localhost:5000/api';
  cvApiUrl = 'http://localhost:5001/api';
}

export { beApiUrl, cvApiUrl };
