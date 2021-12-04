const resolvers = {
    Query: {
        // Returns an array of tracks
        tracksForHome: (_, __, { dataSources }) => dataSources.trackApi.getTracksForHome(),
        // Get a single track by ID, for the track page
        track: (_, { id }, { dataSources}) => dataSources.trackApi.getTrack(id)
    },
    Mutation: {
        incrementTrackViews: (_, { id }, { dataSources }) => dataSources.trackApi.incrementTrackViews(id)
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => dataSources.trackApi.getAuthor(authorId),
        modules: ({ id }, _, { dataSources }) => dataSources.trackApi.getModules(id),
    },
};

module.exports = resolvers;
