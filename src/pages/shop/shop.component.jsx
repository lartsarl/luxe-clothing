import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/colelctions-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route path={`${match.path}`} component={CollectionPage}></Route>
    </div>
);

export default ShopPage;