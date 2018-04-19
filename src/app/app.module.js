/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import { moduleName as contactsModule } from './contacts/contacts.module';

export const moduleName =
  angular.module('application', [
      coreModule,
      contactsModule
  ])
  .name;