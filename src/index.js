/**
 * Import the polyfills and vendor files
 */
import './vendor';
import './polyfills';

/**
 * Import the global styles
 */
import './index.scss';

/**
 *  Import module to be bootstrapped
 */
import { moduleName as appModule } from './app/app.module';

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('application.bootstrap', [
    appModule
]).name;

