export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
    LocalState.set('LOGIN_ERROR', null);
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
},
  create({Meteor, LocalState}, email, password) {
      if (!email) {
        return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
      }
      if (!password) {
        return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
      }
      LocalState.set('CREATE_USER_ERROR', null);
      Meteor.call('users.create', email, password, (error, reponse) => {
        console.log(reponse);
          if(reponse)
            FlowRouter.go('/');
      })
    },
    clearErrors({LocalState}) {
      return LocalState.set('SAVING_ERROR', null);
    }
};
