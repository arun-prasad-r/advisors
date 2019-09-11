import Component from '@ember/component';

export default Component.extend({
    advisor: null, //passed in (advisor model)
    //adminModeEnabled - This property in this component is only here for demonstration purporse.
    adminModeEnabled: false, //passed in to to change the call and chat availability. 
    classNames: ['advisor'],

    actions: {
        toggleCallAvailability() {
            const advisor = this.advisor;
            advisor.toggleProperty('callAvailability');
            advisor.save().then((/*savedAdvisor*/) => {
                // eslint-disable-next-line no-console
                console.log(`Call status set to ${advisor.callAvailability} for ${advisor.name}!`);
            })
        },
        toggleChatAvailability() {
            const advisor = this.advisor;
            advisor.toggleProperty('chatAvailability');
            advisor.save().then((/*savedAdvisor*/) => {
                // eslint-disable-next-line no-console
                console.log(`Chat status set to ${advisor.chatAvailability} for ${advisor.name}!`);
            })
        }
    }
});
