export type commandData = {
    commandName: string;
    description: string;
    examples: Array<commandExmaple>;
};

export type commandExmaple = {
    self?: boolean;
    firstMessage: Array<TrustedHTML>;
    secondMessage: Array<TrustedHTML>;
};
