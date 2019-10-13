import { connect } from 'react-redux'
import Timeline from 'components/timeline'
import { selectDataset } from 'actions'
import { StoreState } from 'types'


const mapStateToProps = (state: StoreState) => ({
    numberOfDatasets: state.data.length,
})

const mapDispatchToProps = (dispatch: any) => ({
    selectDataset: (current: number) => dispatch(selectDataset(current)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline)
