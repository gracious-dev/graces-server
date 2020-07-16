import ClassesRouter from './ClassesRouter';

export class ReEventsRouter extends ClassesRouter {
  className() {
    return 'ReEvent';
  }

  mountRoutes() {
    this.route('GET', '/re_events', req => {
      return this.handleFind(req);
    });
    this.route('GET', '/re_events/:objectId', req => {
      return this.handleGet(req);
    });
    this.route('POST', '/re_events', req => {
      return this.handleCreate(req);
    });
    this.route('PUT', '/re_events/:objectId', req => {
      return this.handleUpdate(req);
    });
    this.route('DELETE', '/re_events/:objectId', req => {
      return this.handleDelete(req);
    });
  }
}

export default ReEventsRouter;
