export const sevenTvApi = {
    fetchEmotes: async () => {
        try {
            const response: Response = await fetch("7tv/emotes/all");
            if (!response.ok) {
                throw new Error("test");
            }
            return response.json();
        } catch (error) {
            throw new Error("test");
        }
    }
};
