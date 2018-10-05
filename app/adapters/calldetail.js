import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:3008',
    pathForType() {
        var userId = 111;

        return 'users/' + userId + '/transactions/call-details';
    }
});
