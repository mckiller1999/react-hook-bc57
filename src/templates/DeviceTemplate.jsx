import React, { useEffect, useState } from "react";

const DeviceTemplate = (props) => {
  //props {Component:, MobileComponent}
  const [screen, setScreen] = useState({
    width: window.innerWidth,
  });
  const [Component, setComponent] = useState(props.Component);
  // const changeSize = () => {
  //   setScreen({
  //     width: window.innerWidth,
  //   });
  // };
  // useEffect(() => {
  //   window.onload = changeSize;
  //   window.onresize = changeSize;
  //   return () => {
  //     window.removeEventListener("onload", changeSize);
  //     window.removeEventListener("onresize", changeSize);
  //   };
  // }, []);
  const changeSize = () => {
    setScreen({
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("load", changeSize);
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("load", changeSize);
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  useEffect(() => {
    if (screen.width < 768 && props.MobileComponent) {
      setComponent(props.MobileComponent);
    } else {
      setComponent(props.Component);
    }
  }, [screen.width]);
  return <div>{Component}</div>;
};

export default DeviceTemplate;

// import React, { useEffect, useState } from "react";
// const DeviceTemplate = (props) => {
//   //props {Component: , MobileComponent}
//   const [screen, setScreen] = useState({
//     width: window.innerWidth,
//   });
//   const [Component, setComponent] = useState(props.Component);

//   const changeSize = () => {
//     setScreen({
//       width: window.innerWidth,
//     });
//   };
//   useEffect(() => {
//     window.onload = changeSize;
//     window.onresize = changeSize;
//     return () => {
//       window.removeEventListener("onload", changeSize);
//       window.removeEventListener("onresize", changeSize);
//     };
//   }, []);

//   useEffect(() => {
//     if (screen.width < 768 && props.MobileComponent) {
//       setComponent(props.MobileComponent);
//       console.log("768");
//     } else {
//       setComponent(props.Component);
//     }
//   }, [screen.width]);
//   return <>{Component}</>;
// };
// export default DeviceTemplate;

// const DeviceTemplate = (props) => {
//   const [screen, setScreen] = useState({
//     width: window.innerWidth,
//   });

//   const changeSize = () => {
//     setScreen({
//       width: window.innerWidth,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("load", changeSize);
//     window.addEventListener("resize", changeSize);

//     return () => {
//       window.removeEventListener("load", changeSize);
//       window.removeEventListener("resize", changeSize);
//     };
//   }, []);

//   const ComponentToRender =
//     screen.width < 768 ? props.MobileComponent : props.Component;

//   return <div>{ComponentToRender}</div>;
// };

// export default DeviceTemplate;
