import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrderFruitList: React.FC<{items: string[]}> = (props) =>{
    return(
    <ul>
        {props.items.map((item) => (<li key={item}> 
            <Text>{item}</Text>
        </li>))}
    </ul>
    );
};

export default OrderFruitList;