import Ember from 'ember';
import returnTrue from 'addon/utils/return-true';

export default Ember.Controller.extend({
  isControllerFromAddon: true,
  isFunctionFromAddonNamespace: returnTrue()
});
