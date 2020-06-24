import React from 'react';
import {withRouter} from 'react-router-dom'
import {TitleContainer, PreviewCollectionContainer, PreviewContainer} from './preview-collection.styles'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items, history, match, routeName}) => (
    <PreviewCollectionContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </PreviewContainer>
    </PreviewCollectionContainer>
)

export default withRouter(PreviewCollection);