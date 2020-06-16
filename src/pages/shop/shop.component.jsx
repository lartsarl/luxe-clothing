import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'

import CollectionsOverview from '../../components/colelctions-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';
 
class ShopPage extends React.Component{
    unsubscribeFromSnapshop = null;
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsToMap(snapshot);

            updateCollections(collectionsMap);
         });
    }
    render() {
        const {match} = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});



export default connect(null, mapDispatchToProps)(ShopPage);