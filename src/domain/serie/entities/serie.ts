import Season from './season';

export default class Serie {
    private _name: string;
    private _seasons: Season[];
    private _tags: string[];
    private _currentSeason: number;
    private _currentEpisode: number;

    constructor (name: string, seasons: Season[], tags: string[], currentSeason: number, currentEpisode: number) {
        this._name = name;
        this._seasons = seasons;
        this._tags = tags;
        this._currentEpisode = currentEpisode;
        this._currentSeason = currentSeason;
    }

    public get name() {
        return this._name;
    }

    public get seasons() {
        return this._seasons;
    }

    public get tags() {
        return this._tags;
    }

    public get currentEpisode() {
        return this._currentEpisode;
    }

    public get currentSeason() {
        return this._currentSeason;
    }

    public set currentEpisode(newValue: number) {
        if (newValue < 1) throw Error('The currentEpisode must be a positive number');
        this._currentEpisode = newValue;
        
    }

    public set currentSeason(newValue: number) {
        if (newValue < 1) throw Error('The currentSeason must be a positive number');
        this._currentSeason = newValue;
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