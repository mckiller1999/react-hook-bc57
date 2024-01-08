import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleDrawerAction } from "../../redux/reducers/DrawerReducer";

const DrawerComponent = () => {
  const { open, ContentComponent, onOk } = useSelector(
    (state) => state.drawerReducer
  );
  const dispatch = useDispatch();
  //console.log(open);
  const handleLogin = () => {};
  const onClose = () => {
    const action = handleDrawerAction(false);
    dispatch(action);
  };
  return (
    <>
      <Drawer
        title={`default`}
        placement="right"
        size={"large"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onOk();
              }}
            >
              OK
            </Button>
          </Space>
        }
      >
        {ContentComponent}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
