import DS from 'ember-data';
// Use appropriate adapter based on your backend api.
export default DS.RESTAdapter.extend({
    // currently mock data it is served through mockapi.io
    host: 'https://5d78b1efa8c27100149863e2.mockapi.io',
    // api namespace eg 'api/v1'
    namespace: 'api',
});
