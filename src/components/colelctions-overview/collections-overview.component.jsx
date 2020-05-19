import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selector';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);