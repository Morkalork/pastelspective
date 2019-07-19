import * as React from 'react';
import { withItems, ItemsProps } from '../contexts/ItemsContext';
import Card from './card';

interface Props extends ItemsProps { };

const Board = ({ items }: Props) => <div className="board">
    {['bad', 'good', 'observation'].map((itemType) => <div key={itemType} className={itemType}>
        <h4>{itemType}</h4>
        {items.filter((item) => item.itemType === itemType)
            .map((item) => <Card key={item.id} item={item} />)}
    </div>)}
</div>;

export default withItems(Board);