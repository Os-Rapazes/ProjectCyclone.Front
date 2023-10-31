export default class FilterQueryMount{
    private static readonly baseFilterQuery = '?$filter'
    
    public static filterEqual(field: string, param: string): string {
        return `${this.baseFilterQuery}=${field} eq '${param}'`
    }
    public static filterContains(field: string, param: string): string {
        return `${this.baseFilterQuery}=contains(${field},'${param}')`
    }
    
}