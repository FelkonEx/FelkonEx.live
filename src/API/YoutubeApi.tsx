export const youtubeApi = {
    fetchVods: async () => {
        try {
            const response: Response = await fetch("yt/vods")
            if (!response.ok) {
                throw new Error("test");
            }
            return response.json();
        }
        catch (error) {
            throw new Error("test");
        }
    },
    fetchCompilations: async () => {
        try {
            const response: Response = await fetch("yt/compilations")
            if (!response.ok) {
                throw new Error("test");
            }
            return response.json();
        }
        catch (error) {
            throw new Error("test");
        }
    }
}