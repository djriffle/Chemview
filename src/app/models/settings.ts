export interface Settings {
    //twodIsConical:boolean //this comes from pubchem query TODO implement
    explicitHydrogens:boolean
    atomVisualization:string
    terminalCarbons:boolean
    height: number
    width: number
}

export class DefaultSettings implements Settings{
    //twodIsConical = false
    explicitHydrogens = false
    atomVisualization = 'default'
    terminalCarbons = false
    width = 1000
    height = 1000
}
