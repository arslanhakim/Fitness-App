import {FC} from 'react'
import {SwipeableDrawer} from '@mui/material'

type drawerProps = {
    drawerState: boolean
    onToggleDrawer: any
    content: any
}

export const MuiDrawer: FC<drawerProps> = ({
    drawerState,
    onToggleDrawer,
    content,
}) => {
    return (
        <SwipeableDrawer
            anchor={'top'}
            open={drawerState}
            onClose={onToggleDrawer}
            onOpen={onToggleDrawer}>
            {content}
        </SwipeableDrawer>
    )
}
