import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/colelctions-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import spinner from '../../components/spinner/spinner.component'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = spinner(CollectionsOverview);
const CollectionPageWithSpinner = spinner(CollectionPage);
 
class ShopPage extends React.Component{
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}></CollectionOverviewWithSpinner>}></Route>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}></CollectionPageWithSpinner>}></Route>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);