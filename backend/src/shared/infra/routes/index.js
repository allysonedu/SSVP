const { Router } = require('express');

const adminRoutes = require('../../../modules/admin/infra/routes/admin.routes');

const sessionsRoutes = require('../../../modules/admin/infra/routes/sessions.routes');

const forgotAdminRoutes = require('../../../modules/admin/infra/routes/forgotAdmin.routes');

const resetPasswordAdminRoutes = require('../../../modules/admin/infra/routes/resetPasswordAdmin.routes');

const secretaryRoutes = require('../../../modules/secretary/infra/routes/secretary.routes');

const sessionsSecretaryRoutes = require('../../../modules/secretary/infra/routes/sessionsSecretary.routes');

const forgotSecretaryRoutes = require('../../../modules/secretary/infra/routes/forgotSecretary.routes');

const resetPasswordSecretaryRoutes = require('../../../modules/secretary/infra/routes/resetPasswordSecretary.routes');

const assistedsRoutes = require('../../../modules/assisteds/infra/routes/assisteds.routes');

const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');

const ensureAuthenticated = require('../../../shared/middlewares/ensure.autenticated');

const routes = Router();

routes.use('/admin', adminRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/forgot_admin', forgotAdminRoutes);

routes.use('/reset_password_admin', resetPasswordAdminRoutes);

routes.use('/secretary', secretaryRoutes);

routes.use('/secretary_login', sessionsSecretaryRoutes);

routes.use('/forgot_secretary', forgotSecretaryRoutes);

routes.use('/reset_password_secretary', resetPasswordSecretaryRoutes);

routes.use('/assisteds', assistedsRoutes);

routes.use('/transactions', transactionsRoutes);

routes.use(ensureAuthenticated);

module.exports = routes;
