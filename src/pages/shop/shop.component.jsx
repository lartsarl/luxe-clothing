import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'

import CollectionsOverview from '../../components/colelctions-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';
import spinner from '../../components/spinner/spinner.component'

const CollectionOverviewWithSpinner = spinner(CollectionsOverview);
const CollectionPageWithSpinner = spinner(CollectionPage);
 
class ShopPage extends React.Component{
    state={
        loading: true
    };

    unsubscribeFromSnapshop = null;
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({loading: false})
         });
    }
    render() {
        const {match} = this.props;
        const {loading} =this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}></CollectionOverviewWithSpinner>}></Route>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}></CollectionPageWithSpinner>}></Route>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});



export default connect(null, mapDispatchToProps)(ShopPage);