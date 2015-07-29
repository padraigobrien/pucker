Accounts.onCreateUser(function (options, user)
{
  if (options.profile)
  {
	  var result = Meteor.http.get('https://graph.facebook.com/v2.4/' + user.services.facebook.id + '?access_token=' + user.services.facebook.accessToken + '&fields=first_name, last_name, birthday, email, gender, location, link, friends');
	  user.profile = result.data;
  }
	return user;
});
