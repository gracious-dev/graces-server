// Representing "Event" for Rule Engineering processing: properties and functions
export class ReEvent {
  constructor(type, parameters = {}) {
    this.type = type;
    if (!parameters || !parameters.message) {
      parameters.message = 'Please add message for this event: ' + type;
    }
    this.params = parameters; // could be any object, but at least should have "message" property
  }
}

export default ReEvent;
