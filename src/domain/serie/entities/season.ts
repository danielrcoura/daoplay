import Episode from './episode';
export default class Season {
    private _episodes: Episode[];

    constructor(episodes: Episode[]) {
        this._episodes = episodes;
    }

    public get episodes() {
        return this._episodes;
    }
}