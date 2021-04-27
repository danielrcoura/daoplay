import Episode from '../../domain/serie/entities/episode';

test('increaseStoppedAt should increase stoppedAt', () => {
    const episode = new Episode('test', 1, 1);
    episode.increaseStoppedAt();
    expect(episode.stoppedAt).toBe(2);
});

test('setStoppedAt should throw an error if the value is negative', () => {
    const episode = new Episode('test', 1, 1);
    expect(() => episode.stoppedAt = -1).toThrow(Error);
})

test('setStoppedAt should set stoppedAt', () => {
    const episode = new Episode('test', 1, 1);
    episode.stoppedAt = 2;
    expect(episode.stoppedAt).toBe(2);
})