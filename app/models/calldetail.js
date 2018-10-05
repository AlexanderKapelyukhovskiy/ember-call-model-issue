import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    listingId: attr('number'),

    advisorId: attr('number'),
    advisorName: attr('string'),
    consumerId: attr('number'),
    consumerName: attr('string'),

    startDate: attr('date'),
    endDate: attr('date'),
    totalTime: attr('number'),
    offerTime: attr('number'),
    rate: attr('number'),
    platformFee: attr('number'),
    commission: attr('number'),
    balanceUsed: attr('number'),

    offerDescription: attr('string'),

    feedbackRating: attr('number'),
    feedbackComment: attr('string'),

    bonus: attr('boolean'),
    seamlessPayDetails: attr(), //[]
    chargesDetails: attr() //[]
});
