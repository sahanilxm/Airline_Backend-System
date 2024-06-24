'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      field: 'flight_number',
      allowNull: false
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      field: 'airplane_id',
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      field: 'departure_airport_id',
      allowNull: false
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      field: 'arrival_airport_id',
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      field: 'arrival_time',
      allowNull: false
    },
    departureTime: {
      type: DataTypes.DATE,
      field: 'departure_time',
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardingGate: {
      type: DataTypes.STRING,
      field: 'boarding_gate',
      allowNull: false
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      field: 'total_seats',
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};