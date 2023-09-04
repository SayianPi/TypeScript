export class Monitor {
    private name: string = "";
    public constructor(naam: string){
        this.name = naam;
    }

    public getName(): string {
        return this.name;
    }
}