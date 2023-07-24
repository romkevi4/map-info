interface Iitems {
  id: string,
  name: string,
  geometry: {
    type: string,
    properties: {},
    geometry: {
      type: string,
      coordinates: Array<number>
    }
  }
}

export type {
  Iitems
}