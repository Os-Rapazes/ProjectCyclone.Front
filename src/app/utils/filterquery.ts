export default class FilterQueryMount{
    
    public static filterEqual(field: string, param: any): any  {
        if(typeof(param) == 'string') return `${field} eq '${param}'`
        if(typeof(param) != 'string') return `${field} eq ${param}`
        
    }
    public static filterContains(field: string, param: string): string {
        return `contains(tolower(${field}),tolower('${param}'))`
    }
    
}
