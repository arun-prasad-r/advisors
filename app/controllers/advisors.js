import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.adminMode = false;
    },
    actions: {
        toggleAdminMode() {
            this.toggleProperty('adminMode');
        },
        refreshAdvisors() {
            //bubble action to route.
            return true;
        }
    }
});
