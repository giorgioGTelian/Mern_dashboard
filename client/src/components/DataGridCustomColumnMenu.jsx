import {
    GridColumnMenu,
    GridColumnMenuSortItem,
    GridColumnMenuManageItem,
    } from "@mui/x-data-grid";
    
    const CustomColumnMenu = (props) => {
        const { hideMenu, currentColumn, open } = props;
        return (
        <GridColumnMenu
            hideMenu={hideMenu}
            currentColumn={currentColumn}
            open={open}
        >
            <GridColumnMenuSortItem onClick={hideMenu} column={currentColumn} />
            <GridColumnMenuManageItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenu>
        );
    };
    
    export default CustomColumnMenu;