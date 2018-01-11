import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Event({ eventName: 'event-emitted' })
  eventEmitted: EventEmitter;

  emitEvent = () => {
    this.eventEmitted.emit();
  };
  render() {
    return (
      <div>
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <p>
          <button onClick={this.emitEvent}>Emit Event</button>
        </p>
      </div>
    );
  }
}
