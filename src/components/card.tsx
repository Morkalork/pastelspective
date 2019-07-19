import * as React from 'react';
import { Item, withItems, ItemsProps } from '../contexts/ItemsContext';

interface Props extends ItemsProps {
    item: Item;
}

const Card = ({ item: { id, text, itemType }, removeItem }: Props) => {
    const [isClosing, setIsClosing] = React.useState(false);

    return <div className={`card ${itemType} ${isClosing ? 'isClosing' : ''}`}>
        <p>{text}</p>
        <div className='tools'>
            <p onClick={() => {
                setIsClosing(true);
                setTimeout(() => removeItem(id!), 250);
            }}>stäng</p>
        </div>
    </div>;
};

export default withItems(Card);