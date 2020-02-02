module.exports = (Sequelize, DataTypes) => {
  const Appointment = Sequelize.define('Appointment', {
    date: DataTypes.DATE,
  });

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' });
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' });
  };

  return Appointment;
};
