import template from './add-contact-form.component.html';
class AddContactFormController {
  submit() {
    const lastName = this.lastName;
    const firstName = this.firstName;
    this.contactAdded({
      $event: {
        contact: { lastName, firstName }
      }
    });
    this.lastName = '';
    this.firstName = '';
  }
}

export const AddContactForm = {
    selector: 'addContactForm',
    template: template,
    bindings: {
      contactAdded: '&'
    },
    controller: AddContactFormController
};
