class AddContactController {

  constructor(contactsService, $state) {
    'ngInject';
    this.contactsService = contactsService;
    this.$state = $state;
  }

  add(contact)  {
    this.contactsService.add(contact);
    this.$state.go('contacts');
  }
}

export const AddContactContainer = {
   selector: 'addContact',
   controller: AddContactController,
   template: `
  <div class="row">
    <div class="col-md-12">
      <h1>Add contact</h1>
      <add-contact-form contact-added="$ctrl.add($event.contact)"></add-contact-form>
      <a class="btn btn-default btn-block" ui-sref="contacts">Back</a>
    </div>
  </div>
  `
};
