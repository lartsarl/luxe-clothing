import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import spinner from '../spinner/spinner.component'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

