export interface Settings {
    twodIsConical:boolean //this comes from pubchem query
    twodIsImplicitHydrogen:boolean
    twodIsAtomBalls:boolean
    twodIsTerminalCarbons:boolean
    height: number
    width: number
}

export class DefaultSettings implements Settings{
    twodIsConical = false
    twodIsImplicitHydrogen = false
    twodIsAtomBalls = false
    twodIsTerminalCarbons = false
    width = 1000
    height = 1000
}
