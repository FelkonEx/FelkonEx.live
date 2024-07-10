export const twitchApi = {
    fetchEmotes: async () => {
        try {
            const response: Response = await fetch("twitch/emotes");
            if (!response.ok) {
                throw new Error("test");
            }
            return response.json();
        } catch (error) {
            throw new Error("test");
        }
    }
};
