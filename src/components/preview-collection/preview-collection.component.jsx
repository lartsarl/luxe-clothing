import React from 'react';
import {TitleContainer, PreviewCollectionContainer, PreviewContainer} from './preview-collection.styles'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <PreviewCollectionContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </PreviewContainer>
    </PreviewCollectionContainer>
)

export default PreviewCollection;