export default class Serie {
    private _name: string;
    private _seasons: Season[];
    private _tags: string[];

    constructor (name: string, seasons: Season[], tags: string[]) {
        this._name = name;
        this._seasons = seasons;
        this._tags = tags;
    }

    public get name() {
        return this._name;
    }
    public set name(newName: string) {
        this._name = newName;
    }

    public get seasons() {
        return this._seasons;
    }

    public get tags() {
        return this._tags;
    }

    public addTag(tag: string) {
        const index = this._tags.indexOf(tag, 0);
        if (index != -1) throw Error('The serie already has this tag');
        
        this._tags.push(tag);
    }

    public removeTag(tag: string) {
        const index = this._tags.indexOf(tag, 0);
        if (index == -1) throw Error('The serie does not have this tag');

        this._tags.splice(index);
    }
}