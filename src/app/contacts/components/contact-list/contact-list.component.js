/**
 * Import the Component styles
 */
import './contact-list.component.scss';

class ContactListController {
  remove(contact) {
    this.contactRemoved({
      $event: {
          id: contact.id
      }
    });
  }
}

export const ContactList = {
    selector: 'contactList',
    bindings: {
      contacts: '<',
      contactRemoved: '&'
    },
    controller: ContactListController,
    template: `
      <div class="contact-list" ng-repeat="contact in $ctrl.contacts">
        <span>{{ contact.firstName }} {{ contact.lastName }}</span>
        <a href="" ng-click="$ctrl.remove(contact)">
          <i class="pull-right glyphicon glyphicon-remove"></i>
        </a>
      </div>
      `
};
