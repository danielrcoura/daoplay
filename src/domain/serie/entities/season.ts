class Season {
    private _episodes: Episode[];

    constructor(episodes: Episode[]) {
        this._episodes = episodes;
    }

    public get episodes() {
        return this._episodes;
    }
}