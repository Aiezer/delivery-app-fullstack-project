const secret = require('fs')
  .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { user } = require('../../database/models');

const getSellers = () => {
  
}