export type commandData = {
    commandName: string;
    type?: string;
    description: string;
    firstMessage: string;
    secondMessage: string | TrustedHTML; // list of TrustedHTML?
};
