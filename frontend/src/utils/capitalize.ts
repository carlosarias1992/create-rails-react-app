export function capitalize(words: string): string {
    const wordsArray = words.split(" ");
    return wordsArray
        .map(
            (s: string): string =>
                s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
        )
        .join(" ");
}
