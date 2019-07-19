import * as React from 'react';

export type ItemType = 'good' | 'bad' | 'observation';

export interface Item {
    id?: number;
    text: string;
    itemType: ItemType;
}

export interface ItemsProps {
    items: Item[],
    addItem: (item: Item) => void;
    removeItem: (id: number) => void;
}

const ItemsContext = React.createContext<ItemsProps>({ items: [], addItem: () => null, removeItem: () => null });

export const withItems = <T extends ItemsProps>(Component: React.ComponentType<T>) => (
    props: Pick<T, Exclude<keyof T, keyof ItemsProps>>
) => <ItemsContext.Consumer>
        {contextProps => <Component {...props as any} {...contextProps} />}
    </ItemsContext.Consumer>;

class ItemsProvider extends React.Component<object, ItemsProps> {
    constructor(props: object) {
        super(props);

        // Important to do this before we add their reference to the state
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

        this.state = {
            items: [],
            addItem: this.addItem,
            removeItem: this.removeItem
        }
    }

    addItem(item: Item) {
        if (!item) {
            return;
        }

        item.id = this.state.items.reduce((acc, { id }) => {
            if (id && id > acc) {
                return id;
            }
            return acc;
        }, 0) + 1;
        this.setState({ items: [...this.state.items, item] });
    }

    removeItem(id: number) {
        this.setState({
            items: [...this.state.items.filter((item) => item.id !== id)]
        });
    }

    render() {
        return <ItemsContext.Provider value={this.state}>
            {this.props.children}
        </ItemsContext.Provider>
    }
}

export default ItemsProvider;