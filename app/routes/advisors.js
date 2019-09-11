import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('advisor');
    },
    actions: {
        refreshAdvisors() {
            this.refresh();
        }
    }
});
