export class pocEvent {
    constructor(
        pocEvent?: {
            description: string,
            date: string,
            isRecurring: boolean,
        }) {
    if (pocEvent) Object.assign(this, pocEvent)
  }
  
  description?: string = '';
  date: string = '';
  isRecurring: boolean = false;
  }