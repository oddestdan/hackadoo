let beApiUrl = 'https://hackadoo-be.herokuapp.com/api';
let roadmapApiUrl = 'https://hackadoo-roadmap.herokuapp.com/api';

if (process.env.NODE_ENV === 'development') {
  beApiUrl = 'http://localhost:5000/api';
  roadmapApiUrl = 'http://localhost:5001/api';
}

export { beApiUrl, roadmapApiUrl };
