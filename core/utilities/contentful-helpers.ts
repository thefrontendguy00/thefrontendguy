
export function formatDate(date: Date): string {
    const chunks = new Intl.DateTimeFormat('es-CO', { month: 'long', day: 'numeric', year: 'numeric'}).formatToParts(date);
    const removeLiteral = chunks.filter(chunk => chunk.type !== 'literal');

    return `${removeLiteral[1].value} ${removeLiteral[0].value}, ${removeLiteral[2].value}`
}

export function getTags(tags: any): Array<string|undefined> {
    return tags?.map(({ fields }:{ fields: any }) => fields.name);
}