/* jshint node */
var sequelize = require('sequelize');
var parse = require('../../../lib/parse');
var parserHelper = require('../parser-helper');
var VOLUME_COLUMN = 'Sales Volumes';

module.exports = {
  autoparse: false,
  parser: parserHelper(function(input) {
    input.Volume = parse.number(input[VOLUME_COLUMN]);
    return input;
  }),

  models: {
    county_production: {
      tableName: 'county_production',
      fields: {
        year: {
          input: 'Calendar Year',
          name: 'year',
          type: new sequelize.INTEGER(4).UNSIGNED
        },
        state: {
          input: 'St',
          name: 'state',
          type: new sequelize.STRING(2)
        },
        county: {
          input: 'County Name',
          name: 'county',
          type: new sequelize.STRING(32)
        },
        fips: {
          input: 'FIPS',
          name: 'fips',
          type: new sequelize.INTEGER(5).UNSIGNED.ZEROFILL
        },
        commodity: {
          input: 'Commodity',
          name: 'commodity',
          type: new sequelize.STRING(32)
        },
        product: {
          input: 'Product',
          name: 'product',
          type: new sequelize.STRING(64)
        },
        volume_type: {
          input: 'Volume Type',
          name: 'volume_type',
          type: new sequelize.STRING(32)
        },
        volume: {
          input: 'Volume',
          name: 'volume',
          type: new sequelize.DECIMAL(12, 2)
        },
      }
    }
  }
};
