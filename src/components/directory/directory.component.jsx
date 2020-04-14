import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.postimg.cc/mhxMbZyC/Hats-Homepage.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.postimg.cc/9fLKM0g6/Jackets-Homepage.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.postimg.cc/brvtPzFN/Shoes-Homepage.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.postimg.cc/QNm8fYRm/Female-Homepage.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.postimg.cc/4yzXt8Zj/Webp-net-resizeimage.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                        ))
                }
            </div>
        );
    }
}

export default Directory;