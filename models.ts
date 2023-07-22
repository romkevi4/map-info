interface Iitems {
  id: String,
  name: String,
  geometry: {
    type: String,
    properties: {},
    geometry: {
      type: String,
      coordinates: Number[]
    }
  }
}

export type {
  Iitems
}