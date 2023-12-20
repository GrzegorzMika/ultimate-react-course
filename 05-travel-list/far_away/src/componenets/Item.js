import PropTypes from "prop-types";

export default function Item({item, onDeleteItem, onToggleItems}) {
    const {packed, id, quantity, description} = item;
    return <li>
        <input type='checkbox' aria-label={'Item ' + description} value={packed} onChange={() => {
            onToggleItems(id)
        }}/>
        <span style={packed ? {textDecoration: 'line-through'} : {}}>
            {quantity} {description}
        </span>
        <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItems: PropTypes.func.isRequired
};