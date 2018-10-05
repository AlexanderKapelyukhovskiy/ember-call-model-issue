import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('calldetail', params.call_id).then(m=>{console.log(m); return m;});
    }
});
