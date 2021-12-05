const resolvers = {
    Query: {
        // Returns an array of tracks
        tracksForHome: (_, __, { dataSources }) => dataSources.trackApi.getTracksForHome(),
        // Get a single track by ID, for the track page
        track: (_, { id }, { dataSources }) => dataSources.trackApi.getTrack(id),
        // Get a single module by ID, for the module page
        module: (_, { id }, { dataSources }) => dataSources.trackApi.getModule(id)
    },
    Mutation: {
        incrementTrackViews: (_, { id }, { dataSources }) => dataSources.trackApi.incrementTrackViews(id)
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => dataSources.trackApi.getAuthor(authorId),
        modules: ({ id }, _, { dataSources }) => dataSources.trackApi.getModules(id),
        durationInSeconds: ({ length }) => length
    },
    Module: {
        durationInSeconds: ({ length }) => length
    },
};

module.exports = resolvers;
