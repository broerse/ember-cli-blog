export function initialize(application) {
  var globals = {
    isEditing: false,
  };

  application.register('globals:main', globals, { instantiate: false });
  application.inject('controller', 'globals', 'globals:main');
}

export default {
  name: 'globals',
  initialize: initialize,
};
