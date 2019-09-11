import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    bio: DS.attr('string'),
    avatar: DS.attr('string'),
    phone: DS.attr('string'),
    pricePerMinute: DS.attr('number'),
    callAvailability: DS.attr('boolean', {
        defaultValue: false
    }),
    chatAvailability: DS.attr('boolean', {
        defaultValue: false
    }),

});
