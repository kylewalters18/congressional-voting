import { connect } from 'react-redux'
import Graph from 'components/graph'
import { StoreState } from 'types'


const mapStateToProps = (store: StoreState) => {
    return {
        nodes: store.data[store.dataset].nodes,
        links: store.data[store.dataset].links,
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph)
