export interface Action {
    type: string
}

export const selectDataset = (current: number): any => ({
    type: 'SELECT_DATASET',
    current: current,
})
