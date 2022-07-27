import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = props => {
    return <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        

        

    </DrawerContentScrollView>
}

export default DrawerContent;