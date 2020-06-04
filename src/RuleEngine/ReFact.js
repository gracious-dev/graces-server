// Representing "Fact" for Rule Engineering processing: properties and functions
export class ReFact {
  // list of properties
  /*
    id
    tenant_id  (*  could be across-tenant, so making it optional)
    source
    subject
    details
  */
  // functions for "Fact"
  className() {
    return 'ReFact';
  }

  load() {}
}

export default ReFact;
