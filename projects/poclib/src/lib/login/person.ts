/**
 * Core person record.
 */
export class Person {
    public PersonID: number = 0;
    public FirstName: string = '';
    public MiddleName?: string;
    public LastName: string = '';
    public Handle: string = '';
    public Password?: string;
  }