export class Task {
    public Name: string;
    public Deleted: boolean;

    constructor(name: string) {
        this.Name = name;
        this.Deleted = false;
    }
}