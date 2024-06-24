'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        field: 'flight_number',
        allowNull: false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        field: 'airplane_id',
        allowNull: false
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        field: 'departure_airport_id',
        allowNull: false
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        field: 'arrival_airport_id',
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        field: 'arrival_time',
        allowNull: false
      },
      departureTime: {
        type: Sequelize.DATE,
        field: 'departure_time',
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING,
        field: 'boarding_gate',
        allowNull: false
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        field: 'total_seats',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};