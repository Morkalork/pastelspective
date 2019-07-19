import * as React from 'react';
import { withItems, ItemsProps, ItemType } from '../contexts/ItemsContext';

interface Props extends ItemsProps { }

const Top = ({ addItem }: Props) => {
    const [text, setText] = React.useState('');
    const [itemType, setItemType] = React.useState('bad');

    return <div className="top">
        <header>
            <h2>Add your issue</h2>
            <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder='Add a positive happening, a disastrous negativity or something that you noticed during the project...' />
            <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
                <option value="bad">Bad</option>
                <option value="good">Good</option>
                <option value="observation">Observation</option>
            </select>
            <button onClick={() => addItem({text, itemType: itemType as ItemType})}>Add</button>
        </header>
    </div>
};

export default withItems(Top);