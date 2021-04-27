export default class Episode {
    private _name: string;
    private _number: number;
    private _stoppedAt: number

    constructor(name: string, number: number, stoppedAt: number) {
        this._name = name;
        this._number = number;
        this._stoppedAt = number;
    }

    public get name() {
        return this._name;
    }

    public get number() {
        return this._number;
    }

    public get stoppedAt() {
        return this._stoppedAt;
    }

    public set stoppedAt(newValue: number) {
        if (newValue < 0) throw Error("The stoppedAt can't be negative")
        this._stoppedAt = newValue;
    }

    public increaseStoppedAt() {
        this._stoppedAt++;
    }
}