import React from 'react';

import CollectionsOverview from '../../components/colelctions-overview/collections-overview.component'

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview></CollectionsOverview>
    </div>
);

export default ShopPage;