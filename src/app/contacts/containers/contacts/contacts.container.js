import { ContactsService } from '../../services/contacts.service';

/**
 * Import the Component styles
 */
import './contacts.container.scss';

class ContactsController {
  constructor(contactsService) {
      'ngInject';
      this.contactsService = contactsService
  }

  $onInit() {
    this.fetchData();
  }

  remove(id) {
    this.contactsService.remove(id);
    this.fetchData();
  }

  fetchData() {
    this.contactsService.getAll()
      .then(contacts => {
        this.contacts = contacts;
      });
  }
}

export const ContactsContainer = {
  selector: 'contacts',
  controller: ContactsController,
  template: `
  <div class="row">
    <div class="col-md-12">
      <h1>Contacts</h1>
      <contact-list contacts="$ctrl.contacts" contact-removed="$ctrl.remove($event.id)"></contact-list>
      <a class="btn btn-primary btn-block" ui-sref="add-contact">Add</a>
    </div>
  </div>
  `
};
