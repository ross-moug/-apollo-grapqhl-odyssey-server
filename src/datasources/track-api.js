const {RESTDataSource} = require('apollo-datasource-rest');

class TrackApiDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome() {
        return this.get("tracks");
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }

    getModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    async incrementTrackViews(trackId) {
        try {
            const track = await this.patch(`track/${trackId}/numberOfViews`);

            return {
                code: 200,
                success: true,
                message: `Successfully incremented number of views for track ${trackId}`,
                track
            }
        } catch (err) {
            return {
                code: err.extensions.response.status,
                success: false,
                message: err.extensions.response.body,
                track: null
            }
        }
    }
}

module.exports = TrackApiDataSource;
