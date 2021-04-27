import Serie from '../../domain/serie/entities/serie';

test('addTag should add a tag', () => {
    const serie = new Serie('test', [], [], 1, 1);
    serie.addTag('test');
    expect(serie.tags[0]).toBe('test');
});

test('addTag should throw an error if it already exists', () => {
    const serie = new Serie('test', [], ['test'], 1, 1);
    
    expect(() => serie.addTag('test')).toThrow(Error);

})

test('removeTag should remove a tag', () => {
    const serie = new Serie('test', [], ['test'], 1, 1);
    serie.removeTag('test');
    expect(serie.tags.length).toBe(0);
})

test('removeTag should throw an error if the tag does not exist', () => {
    const serie = new Serie('test', [], [], 1, 1);
    expect(() => serie.removeTag('test')).toThrow(Error);
})

test('setCurrentSeason should set the current season', () => {
    const serie = new Serie('test', [], [], 1, 1);
    serie.currentSeason = 2;
    expect(serie.currentSeason).toBe(2);
})

test('setCurrentSeason should throw an error if the value is not positive', () => {
    const serie = new Serie('test', [], [], 1, 1);
    expect(() => serie.currentSeason = 0).toThrow(Error);
    expect(() => serie.currentSeason = -1).toThrow(Error);
})

test('setCurrentEpisode should set the current episode', () => {
    const serie = new Serie('test', [], [], 1, 1);
    serie.currentEpisode = 2;
    expect(serie.currentEpisode).toBe(2);
})

test('setCurrentEpisode should throw an error if the value is not positive', () => {
    const serie = new Serie('test', [], [], 1, 1);
    expect(() => serie.currentEpisode = 0).toThrow(Error);
    expect(() => serie.currentEpisode = -1).toThrow(Error);
})