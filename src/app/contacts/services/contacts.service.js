export class ContactsService {

  constructor($q) {
    'ngInject';
    this.$q = $q;
      this.contacts = [
          { id: 1, firstName: 'John', lastName: 'Doe' }
      ];
  }

  getAll() {
    return this.$q.resolve(this.contacts);
  }

  add(contact) {
    const highestId = this.contacts
      .map(c => c.id)
      .reduce((a, b) => Math.max(a, b), 1);

    this.contacts.push({
      id: highestId + 1,
      firstName: contact.firstName,
      lastName: contact.lastName
    });
  }

  remove(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

ContactsService.selector = 'contactsService';
