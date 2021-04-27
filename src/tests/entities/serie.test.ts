import Serie from '../../domain/serie/entities/serie';

test('addTag should add a tag', () => {
    const serie = new Serie('test', [], []);
    serie.addTag('test');
    expect(serie.tags[0]).toBe('test');
});

test('addTag should throw an error if it already exists', () => {
    const serie = new Serie('test', [], ['test']);
    
    expect(() => serie.addTag('test')).toThrow(Error);

})

test('removeTag should remove a tag', () => {
    const serie = new Serie('test', [], ['test']);
    serie.removeTag('test');
    expect(serie.tags.length).toBe(0);
})

test('removeTag should throw an error if the tag does not exist', () => {
    const serie = new Serie('test', [], []);
    expect(() => serie.removeTag('test')).toThrow(Error);
})