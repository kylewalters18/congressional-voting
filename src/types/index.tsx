export interface Node {
    id: any
}

export interface Link {
    source: any
    target: any
}

export interface Dataset {
    nodes: Array<Node>
    links: Array<Link>
}

export interface StoreState {
    dataset: number,
    data: Array<Dataset>,
}
